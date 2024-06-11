import { Router } from "express";
import { catchAsync } from "../middleware";
import {
  getAll,
  getById,
  register,
  remove,
  update,
} from "../controller/auth.controller";
export const authRoutes = Router();
// Register
authRoutes.post("/register", catchAsync(register));

// Get all users
authRoutes.get("/", catchAsync(getAll));

// Get user by ID
authRoutes.get("/:id", catchAsync(getById));

// Update user
authRoutes.put("/:id", catchAsync(update));

// Delete user
authRoutes.delete("/:id", catchAsync(remove));
