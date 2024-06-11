"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const middleware_1 = require("../middleware");
const auth_controller_1 = require("../controller/auth.controller");
exports.authRoutes = (0, express_1.Router)();
// Register
exports.authRoutes.post("/register", (0, middleware_1.catchAsync)(auth_controller_1.register));
// Get all users
exports.authRoutes.get("/", (0, middleware_1.catchAsync)(auth_controller_1.getAll));
// Get user by ID
exports.authRoutes.get("/:id", (0, middleware_1.catchAsync)(auth_controller_1.getById));
// Update user
exports.authRoutes.put("/:id", (0, middleware_1.catchAsync)(auth_controller_1.update));
// Delete user
exports.authRoutes.delete("/:id", (0, middleware_1.catchAsync)(auth_controller_1.remove));
