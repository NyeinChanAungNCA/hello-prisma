## Introduction

[Prisma](https://www.prisma.io/) is an open-source ORM for [Nodejs](https://nodejs.org/en/about/) and [TypeScript](https://www.typescriptlang.org/) written in [Rust🦀](https://www.rust-lang.org/tools). It consists of 3 main tools:

🔷  [Prisma Client](https://www.prisma.io/client): Auto-generated and type-safe database client
🔷  [Prisma Migrate](https://www.prisma.io/migrate): Declarative data modeling and customizable migrations
🔷  [Prisma Studio](https://www.prisma.io/studio): A GUI to view and edit data in your database.

## Prerequisites
You need Node.js v16.13.0 or higher for this guide (learn more about [system requirements](https://www.prisma.io/docs/orm/reference/system-requirements)).

## 1. Create TypeScript project and set up Prisma ORM
As a first step, create a project directory and navigate into it:

    $    mkdir hello-prisma
    $    cd hello-prisma

Next, initialize a TypeScript project using npm:

    $    npm init -y
    $    npm install typescript ts-node @types/node --save-dev

This creates a package.json with an initial setup for your TypeScript app.
Now, initialize TypeScript:

    $    npx tsc --init

Then, install the Prisma CLI as a development dependency in the project:

    $    npm install prisma --save-dev

Finally, set up Prisma ORM with the init command of the Prisma CLI:

    $    npx prisma init --datasource-provider sqlite

This creates a new prisma directory with a prisma.schema file and configures SQLite as your database. You're now ready to model your data and create your database with some tables.

## 2. Model your data in the Prisma schema
The Prisma schema provides an intuitive way to model data. Add the following models to your schema.prisma file

```
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```
Models in the Prisma schema have two main purposes:

Represent the tables in the underlying database
1. Serve as foundation for the generated Prisma Client API
2. In the next section, you will map these models to database tables using Prisma Migrate.

## 3. Run a migration to create your database tables with Prisma Migrate
At this point, you have a Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

    $    npx prisma migrate dev --name init

This command did three things:

1. It created a new SQL migration file for this migration in the prisma/migrations directory.
2. It executed the SQL migration file against the database.
3. It ran prisma generate under the hood (which installed the @prisma/client package and generated a tailored Prisma Client API based on your models).

Because the SQLite database file didn't exist before, the command also created it inside the prisma directory with the name dev.db as defined via the environment variable in the .env file.

Congratulations, you now have your database and tables ready.
