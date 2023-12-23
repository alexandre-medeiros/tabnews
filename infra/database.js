import { Client } from "pg";

const credentials = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
};

async function query(queryString) {
  const client = new Client(credentials);
  await client.connect();
  
  try {
    const result = await client.query(queryString);
    return result;

  } catch (error) {
    console.log(error);

  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
