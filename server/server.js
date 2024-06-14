import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
dotenv.config();
const dbCString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbCString,
});
const app = express();
app.use(cors());
app.use(express.json());

const port = 8080;
app.listen(port, () => {
  console.log(`Your server is running on port: ${port}`);
});
app.get("/", (req, res) => {
  res.json({ Message: "Test successful!" });
});
app.post("/test", (req, res) => {
  res.json(req.body);
  console.log(req.body);
});
app.get("/movies", async (req, res) => {
  const result = await db.query(`
     SELECT * FROM Movies
      `);
  res.json(result.rows);
});

app.get("/test", async (req, res) => {
  const result = await db.query(`
       SELECT * FROM Movies
        `);
  res.json(result.rows);
});
app.get("/ramen", async (req, res) => {
  const result = await db.query(`
       SELECT * FROM ramen
        `);
  res.json(result.rows);
});
app.post("/ramen", async (req, res) => {
  const { flavour, price, spiciness, time_to_cook } = req.body;
  await db.query(
    `
        INSERT INTO ramen (flavour, price, spiciness, time_to_cook)
        VALUES ($1, $2, $3, $4)
        `,
    [flavour, price, spiciness, time_to_cook]
  );
});
