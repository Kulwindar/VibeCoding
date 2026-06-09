import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer: MongoMemoryServer;

export async function setup() {
  mongoServer = await MongoMemoryServer.create();
  process.env.MONGODB_TEST_URI = mongoServer.getUri();
}

export async function teardown() {
  if (mongoServer) {
    await mongoServer.stop();
  }
}
