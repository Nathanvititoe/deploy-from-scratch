DROP TABLE IF EXISTS people;

CREATE TABLE people (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    phone INTEGER,
    car TEXT
)