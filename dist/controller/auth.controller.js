"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getById = exports.getAll = exports.register = void 0;
const auth_1 = require("../services/auth");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_1.Auth.createUser(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.register = register;
// Get all users
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield auth_1.Auth.getAllUsers();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.getAll = getAll;
// Get user by ID
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_1.Auth.getUserById(req.params.id);
        if (!user) {
            res.status(404).send("User not found");
            return;
        }
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.getById = getById;
// Update user
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_1.Auth.updateUser(req.params.id, req.body);
        if (!user) {
            res.status(404).send("User not found");
            return;
        }
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.update = update;
// Delete user
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield auth_1.Auth.deleteUser(req.params.id);
        if (!user) {
            res.status(404).send("User not found");
            return;
        }
        res.status(204).send();
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.remove = remove;
