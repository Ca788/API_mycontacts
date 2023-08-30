CREATE DATABASE mycontacts;

CREATE EXTENSION
IF
  NOT EXISTS "uuid-ossp";

  CREATE TABLE
  IF
    NOT EXISTS categories (
      id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4()
      , name VARCHAR NOT NULL
    );

      CREATE TABLE
  IF
    NOT EXISTS contacts (
      id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4()
      , name VARCHAR NOT NULL,
      email VARCHAR UNIQUE,
      Phone VARCHAR,
      Category_id UUID,
      FOREIGN KEY(Category_id) REFERENCES categories(id)
    );
