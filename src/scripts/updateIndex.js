import { updateLocal } from './localStorage.js';

function newIndex(tasks) {
  let i = 0;
  tasks.forEach((task) => {
    task.index = i + 1;
    i += 1;
  });
  updateLocal(tasks);
  return tasks;
}

export default newIndex;