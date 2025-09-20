import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    username: 'root',
    password: '',
    database: 'guitar_store',
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});

export default sequelize;