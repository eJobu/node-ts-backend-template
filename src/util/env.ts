
export const nodeEnv = process.env.NODE_ENV || 'development'
export const isProduction = nodeEnv === 'production'
export const databaseUrl = process.env.DB_URL
export const dbUseSsl = process.env.DB_USE_SSL === 'true' || 'false'
export const synchronizeOrm = process.env.SYNCHRONIZE_ORM === 'true' || 'false'
