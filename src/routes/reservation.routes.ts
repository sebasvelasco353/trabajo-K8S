import express, { Request, Response } from "express";
import {
  getAll,
  getById,
  getByUserId,
  createNewReservation,
  deleteReservation,
  modifyReservation,
} from "../controllers/reservations.controllers";

export const reservationsRouter = express.Router();

reservationsRouter.get("/", getAll);
reservationsRouter.get("/:reservationId", getById);
reservationsRouter.get("/byUser/:userId", getByUserId);
reservationsRouter.post("/", createNewReservation);
reservationsRouter.delete("/:id", deleteReservation);
reservationsRouter.put("/:reservationId", modifyReservation);
