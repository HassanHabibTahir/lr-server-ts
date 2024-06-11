import { Request, Response } from "express";
import { Auth } from "../services/auth";
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await Auth.createUser(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

// Get all users
export const getAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await Auth.getAllUsers();
    res.status(200).json(users);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

// Get user by ID
export const getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await Auth.getUserById(req.params.id);
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

// Update user
export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await Auth.updateUser(req.params.id, req.body);
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.status(200).json(user);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

// Delete user
export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await Auth.deleteUser(req.params.id);
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.status(204).send();
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
