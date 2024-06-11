import { User } from "../models";

export const Auth = {
  createUser: async (data: any) => {
    return User.create(data);
  },
  getAllUsers: async () => {
    return User.find({});
  },
  getUserById: async (userId: string) => {
    return User.findById(userId).exec();
  },
  updateUser: async (userId: string, updatedData: any) => {
    return User.findByIdAndUpdate(userId, updatedData, { new: true }).exec();
  },
  deleteUser: async (userId: string) => {
    return User.findByIdAndDelete(userId).exec();
  },
};
