import { Sequelize } from 'sequelize';

const connection = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

export default connection;
