import { db } from "./server.js";
db.query(`CREATE TABLE IF NOT EXISTS ramen (
    id SERIAL PRIMARY KEY,
    flavour VARCHAR(64),
    price NUMERIC,
    spiciness NUMERIC,
    time_to_cook INTEGER
)`);
db.query(`
    INSERT INTO ramen (flavour, price, spiciness, time_to_cook)
    VALUES ('chicken', 1.99, 2, 180),
    ('beef', 2.99, 1, 120),
    ('pork', 1.99, 1, 120),
    ('shrimp', 3.99, 3, 90)
    `);
