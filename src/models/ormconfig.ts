import { join } from 'path'
import {
  PostgresConnectionOptions
} from 'typeorm/driver/postgres/PostgresConnectionOptions'
import { databaseUrl, dbUseSsl, isProduction, synchronizeOrm } from '../util/env'
import CustomNamingStrategy from './namingStrategy'

const config = {
  type: 'postgres',
  url: databaseUrl,
  ssl: dbUseSsl ? { rejectUnauthorized: false } : false,
  synchronize: !isProduction && synchronizeOrm,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: [join(__dirname, 'migration', '*.{ts,js}')],
  cli: {
    migrationsDir: './src/models/migration'
  },
  namingStrategy: new CustomNamingStrategy()
} as PostgresConnectionOptions

export = config
