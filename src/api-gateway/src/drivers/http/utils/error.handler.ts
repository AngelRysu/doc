import { FastifyReply } from 'fastify';
import { ZodError } from 'zod';

// Clase de error personalizada
export class CustomError extends Error {
  customCode: number;

  constructor(message: string, customCode: number) {
    super(message);
    this.customCode = customCode;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

// Opciones para el manejador de errores
interface ErrorHandlerOptions {
  reply: FastifyReply;
  error: Error | ZodError | CustomError; // Tipos concretos
  defaultStatusCode?: number;
}

// Función principal para manejar errores
export const handleError = ({
  reply,
  error,
  defaultStatusCode = 500,
}: ErrorHandlerOptions) => {
  // Si el error es un ZodError
  if (error instanceof ZodError) {
    return reply.status(400).send({
      error: 'Bad Request',
      details: error.errors.map((e) => ({
        path: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  // Si el error es un CustomError
  if (error instanceof CustomError) {
    return reply.status(error.customCode).send({
      error: error.message,
    });
  }

  // Si el error es un Error estándar
  if (error instanceof Error) {
    return reply.status(defaultStatusCode).send({
      error: 'Internal Server Error',
      message: error.message,
    });
  }

  // Si el error es desconocido
  reply.status(defaultStatusCode).send({
    error: 'Internal Server Error',
    message: 'An unexpected error occurred',
  });
};
