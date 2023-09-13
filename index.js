import e from 'express';
import Task from './models/Task.js';
import connection from './connection.js';

const app = e();

app.use(e.json());

app.get('/todos', async (req, res) => {
    const tasks = await Task.findAll();
    console.log(tasks);
    res.json(tasks);
});

app.get('/todos/:id', async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    res.json(task);
});

app.post('/todos', async (req, res) => {
    const task = await Task.create(req.body);
    res.json(task);
});

app.put('/todos/:id', async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    await task.update(req.body);
    res.json(task);
});

app.delete('/todos/:id', async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    await task.destroy();
    res.json(task);
});

try {
    await connection.authenticate();
    await connection.sync({ force: true });

    console.log('Connection has been established successfully.');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
