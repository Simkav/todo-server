const { Todo } = require('../db/models/index');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;
    const createdTask = await Todo.create(body);

    if (!createdTask) {
      return next(createError(400, "Can't create task"));
    }
    res.status(201).send({ data: createdTask });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Todo.findAll();
    if (!tasks) {
      return next(createError(400, 'No tasks'));
    }
    res.status(200).send({ data: tasks });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.getTask = async (req, res, next) => {
  try {
    const { task } = req;
    req.status(200).send({ data: task });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const { task, body } = req;

    await task.update(body);

    res.status(200).send({ data: task });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const { task } = req;

    await task.destroy();

    res.status(200).send({ data: task });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
