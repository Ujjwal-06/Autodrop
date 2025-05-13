import prisma from "../database/db";

const createUser = async (data) => {
  return prisma.user.create({
    data: {
      ...data,
      Address: data.Address || [],
    },
  });
};

const getAllUsers = async () => {
  return prisma.user.findMany({ include: { Address: true } });
};

const getUserByID = async (id) => {
  return prisma.user.findUnique({ where: { id }, include: { Address: true } });
};

const updatedUser = async (id, data) => {
  return prisma.user.update({ where: { id }, data });
};

const deleteUser = async (id) => {
  return prisma.user.delete({ where: { id } });
};

export { createUser, getAllUsers, getUserByID, updatedUser, deleteUser };
