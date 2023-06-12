import { Pool } from "pg";

const { DATABASE_URL, PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } =
  process.env;

const pool = new Pool({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: +PGPORT!,
});

export const db = {
  query: (text: string, params: any[]) => pool.query(text, params),
};
