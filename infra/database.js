﻿import {Client} from 'pg'

const credentials = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
}

async function query(queryString){
  const client = new Client(credentials)
  await client.connect()
  const result = await client.query(queryString)
  await client.end()
  return result
}

export default {
  query: query
}