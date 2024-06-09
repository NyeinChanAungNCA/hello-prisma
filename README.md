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
