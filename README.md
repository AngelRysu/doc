
# Proyecto DOC - Backend API

Este proyecto es una API RESTful desarrollada con Fastify, Sequelize, TypeScript, y MySQL. Su propósito es gestionar la información de los usuarios como sus expedientes


## Tecnologías utilizadas

- Fastify: framework web.
- Sequelize: ORM para gestionar la base de datos. 
- TypeScript: Lenguaje de programación.
- Swagger: Documentación interactiva de la API.
- ESLint: Herramientas de linting y formato de código para mantener el código limpio.

## Estructura del Proyecto
```plaintext
|root
|---src
|---|---api-gateway
|---|---|---src
|---|---|---|---drivers
|---|---|---|---|---http
|---|---|---|---|---|---adapters (Carpeta que maneja todos los handlers)
|---|---|---|---|---|---plugins (Carpeta que maneja los plugins)
|---|---|---|---|---|---routes (Carpeta que maneja todas las rutas)
|---|---|---|---|---|---use-cases (Carpeta que maneja todos los use-cases)
|---|---|---|---|---|---utils (Carpeta que maneja los archivos como errorhandler y swaggerconfig)
|---|---|---|---|---|---server.ts
|---|---models
|---|---|---config (Carpeta con a configuracion de la base de datos)
|---|---|---expediente (Carpeta con los modelos sequelize)
|---|---|---queries (Carpeta que maneja los queries)
|---|---validators (Carpeta que maneja Zod)
|---.env
|---.gitignore
|---eslint.config.mjs
|---package.json
|---README.md
|---tsconfig.json
|---yarn.lock
```
## Instalación

Requisitos:
- Node.js (versión >=16)
- Yarn (recomendado para la gestión de dependencias)
- MySQL (o cualquier base de datos compatible con Sequelize)

**Paso  para la Instalación**

1-Clonar el repositorio
```bash
  git clone https://github.com/TecSJ/doc
```
2- instalar dependencias
```bash
  Yarn install
``` 
3- configurar variables de entorno
```env
    PORT=3003
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=tu-password
    DB_NAME=nombre-de-tu-base-de-datos
```

## Reglas y Buenas Prácticas

Este proyecto utiliza un linter para mantener un código limpio y consistente.
Es muy importante seguir las siguientes reglas y buenas prácticas al trabajar en el código:

```
> 1. No suprimir errores del linter.
> 2. Cumplir con las reglas del linter.
```