const settings = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'sqlite' || 'mysql' || 'postgres',
};

module.exports = {
  settings,
};
