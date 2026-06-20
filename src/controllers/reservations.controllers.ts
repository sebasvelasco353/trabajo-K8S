import { Request, Response } from "express";
import {
  getAllReservations,
  getReservationById,
  getReservationsByUserId,
  saveNewReservation,
  deleteReservationById,
  editReservation,
} from "../services/reservations.services";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const reservations = await getAllReservations();
    return res.status(200).json({ data: reservations });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = req.params.reservationId as string;
    console.log(req.params.reservationId);

    const reservation = await getReservationById(id);
    return res.status(200).json({ data: reservation });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getByUserId = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId as string;

    const reservation = await getReservationsByUserId(id);
    return res.status(200).json({ data: reservation });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createNewReservation = async (req: Request, res: Response) => {
  try {
    const newReservation = {
      id: (Math.random() + Math.random()).toString(),
      ...req.body,
    };
    const result = await saveNewReservation(newReservation);
    return res.status(201).json({ data: result });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteReservation = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId as string;

    await deleteReservationById(id);
    return res.status(200).json({ data: "succesfully deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const modifyReservation = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId as string;
    const newData = req.body;

    const reservation = await editReservation(id, newData);
    return res.status(200).json({ data: reservation });
  } catch {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
