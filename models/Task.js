import connection from '../connection.js';

const Task = connection.define('task', {
    title: {
        type: connection.Sequelize.STRING
    },
    description: {
        type: connection.Sequelize.TEXT
    },
    completed: {
        type: connection.Sequelize.BOOLEAN
    }
});

export default Task;
