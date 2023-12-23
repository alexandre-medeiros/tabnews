import database from "infra/database.js";
import { parseToNumber } from "helper/parseToNumber";

async function status(request, response) {
  const versionResult = await database.query("SHOW server_version;");
  const maxPoolResult = await database.query("SHOW max_connections;");
  const text = "SELECT count(*)::int FROM pg_stat_activity WHERE datname=$1;";
  const values = [process.env.POSTGRES_DB];
  const opennedResult = await database.query({ text, values });
  const updated_at = new Date().toISOString();
  const dataBase = {
    updated_at,
    dependencies: {
      database: {
        max_connections: parseToNumber(
          maxPoolResult?.rows?.[0].max_connections
        ),
        openned_connections: opennedResult?.rows?.[0].count,
        version: parseToNumber(versionResult?.rows?.[0].server_version),
      },
    },
  };

  response.status(200).json(dataBase);
}

export default status;
