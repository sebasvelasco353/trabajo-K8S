import express, { Request, Response } from 'express';

export const reservationsRouter = express.Router()

reservationsRouter.get('/', (req: Request, res: Response) => {
  res.send('todas las reservas')
})
reservationsRouter.get('/:id', (req: Request, res: Response) => {
  res.send('una de las reservas')
})
reservationsRouter.post('/', (req: Request, res: Response) => {
  res.send('nueva reserva')
})
reservationsRouter.delete('/:id', (req: Request, res: Response) => {
  res.send('eliminar una de las reservas')
})
reservationsRouter.put('/:id', (req: Request, res: Response) => {
  res.send('editar una de las reservas')
})
