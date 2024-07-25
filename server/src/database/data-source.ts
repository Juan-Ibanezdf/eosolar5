import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "../../app/entity/Usuario"
import {CreateUsuarios1706292600178 } from "./migrations/1706292600178-CreateUsers"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "root",
    password: "root",
    database: "eosolar",
    synchronize: true,
    logging: false,
    entities: [Usuario],
    migrations: [CreateUsuarios1706292600178],
    subscribers: [],
})
