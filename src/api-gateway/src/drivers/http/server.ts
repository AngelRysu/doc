import Fastify from 'fastify';
import AutoLoad from '@fastify/autoload';
import path from 'path';
import dotenv from 'dotenv';
import sequelize from 'models/config/database';
import { setupModels } from 'models/expediente';

dotenv.config();

const startServer = async () => {
  setupModels(sequelize);

  try {
    await sequelize.sync({ force: false });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  const fastify = Fastify({
    logger: true,
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    ignorePattern: /.*(schema).*/,
    options: { prefix: '/api' },
  });

  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3003;

  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

startServer();
