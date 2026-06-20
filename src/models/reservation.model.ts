import { reservation } from "../shared/types";

let mockDatabase: reservation[] = [];

export const fetchReservation = (id: string) => {
  const result = mockDatabase.find((reservation) => {
    return reservation.id === id;
  });
  console.log(result);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
};

export const fetchReservationsByUserId = (id: string) => {
  const result = mockDatabase.map((reservation) => {
    return reservation.user_id === id;
  });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
};

export const fetchAllReservations = (): Promise<reservation[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDatabase);
    }, 2000);
  });
};

export const addNewReservation = (newReservation: reservation) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockDatabase.push(newReservation);
      setTimeout(() => {
        resolve({
          message: "reservation created",
          reservation: newReservation,
        });
      });
    }, 2000);
  });
};

export const removeReservation = (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockDatabase = mockDatabase.filter((element) => {
        element.id === id;
      });
      resolve({
        message: "succesfully deleted",
      });
    }, 2000);
  });
};

export const modifyReservation = (
  reservationId: string,
  newData: Omit<reservation, "id">,
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const reservationIndex = mockDatabase.findIndex(
        (element) => element.id === reservationId,
      );
      const modifiedReservation = {
        id: reservationId,
        ...newData,
      };
      mockDatabase[reservationIndex] = modifiedReservation;
      resolve({
        message: "reservation succesfully modified",
        modifiedReservation,
      });
    }, 2000);
  });
};
