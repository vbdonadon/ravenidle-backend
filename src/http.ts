import express, { NextFunction, Request, Response } from "express"
import { createServer } from 'http';
import { Server } from "socket.io"
import { routes } from "./routes"

import path from 'path';
import cors from 'cors'

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(express.static(path.resolve(__dirname, '..', 'public')))

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return response.status(400).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

export { httpServer, io }