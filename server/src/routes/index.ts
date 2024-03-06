import express from "express";
import { getUsers, getUsersWithParam } from "../dataAccess/userService";
import {
  createBulkTasks,
  createTask,
  deleteTask,
  getAllTasks,
  getTasksWithParam,
  getTasksWithSkipTake,
  updateTask,
} from "../dataAccess/taskService";

const router = express.Router();

router.get("/users", async (req, res) => {
  const usersData = await getUsers();
  res.send(usersData);
});

router.get("/users/search/:string", async (req, res) => {
  const usersData = await getUsersWithParam(req.params.string);
  res.send(usersData);
});

router.get("/alltasks", async (req, res) => {
  const tasksData = await getAllTasks();
  res.send(tasksData);
});

router.get("/tasks/:skip/:take", async (req, res) => {
  const obj = {
    skip: JSON.parse(req.params.skip),
    take: JSON.parse(req.params.take),
  };
  const tasksData = await getTasksWithSkipTake(obj);
  res.send(tasksData);
});

router.get("/tasks/search", async (req, res) => {
  const tasksData = await getTasksWithParam(req.body);
  res.send(tasksData);
});

router.post("/task", async (req, res) => {
  const tasksData = await createTask(req.body);
  res.send(tasksData);
});

router.post("/tasks", async (req, res) => {
  const tasksData = await createBulkTasks(req.body);
  res.send(tasksData);
});

router.put("/task", async (req, res) => {
  const tasksData = await updateTask(req.body);
  res.send(tasksData);
});

router.delete("/task", async (req, res) => {
  const tasksData = await deleteTask(req.body);
  res.send(tasksData);
});

export default router;
