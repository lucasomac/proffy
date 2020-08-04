import knex from 'knex';

const configuration = require('../../knexfile');
const db = knex(configuration.development);

export default db;
// const db = knex({
//     client: 'sqlite3',
//     connection: {
//         filename: path.resolve(__dirname, "database.sqlite")
//     },
//     useNullAsDefault: true,
// });
