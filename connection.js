import { Sequelize } from 'sequelize';

const connection = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
});

export default connection;
