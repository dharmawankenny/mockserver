'use strict';
module.exports = function(app) {
  var mock = require('../controllers/mockController');

  // mock Routes
  app.route('/tasks')
    .get(mock.list_all_tasks)
    .post(mock.create_a_task);


  app.route('/tasks/:taskId')
    .get(mock.read_a_task)
    .put(mock.update_a_task)
    .delete(mock.delete_a_task);
};
