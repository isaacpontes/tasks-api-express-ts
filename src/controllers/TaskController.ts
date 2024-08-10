import { Request, Response } from "express";
import { Task } from "../models/Task";
import { z } from "zod";
import { HttpError } from "../errors/HttpError";

const StoreRequestSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["low", "medium", "high"])
});

const UpdateRequestSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(["todo", "doing", "done"]).optional(),
  priority: z.enum(["low", "medium", "high"]).optional()
});

export class TaskController {
  index = (req: Request, res: Response) => {
    const tasks = Task.findAll();
    return res.json(tasks);
  }

  store = (req: Request, res: Response) => {
    const parsedBody = StoreRequestSchema.parse(req.body);
    const newTask = Task.create(parsedBody);
    res.status(201).json(newTask);
  }

  show = (req: Request, res: Response) => {
    const { id } = req.params;
    const task = Task.findById(+id);
    if (!task) throw new HttpError(404, "task not found");
    res.json(task);
  }

  update = (req: Request, res: Response) => {
    const { id } = req.params;
    const parsedBody = UpdateRequestSchema.parse(req.body);
    const updatedTask = Task.update(+id, parsedBody);
    if (!updatedTask) throw new HttpError(404, "task not found");
    res.json(updatedTask);
  }

  delete = (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedTask = Task.delete(+id);
    if (!deletedTask) throw new HttpError(404, "task not found");
    res.json(deletedTask);
  }
}