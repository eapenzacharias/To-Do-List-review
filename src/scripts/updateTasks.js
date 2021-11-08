import { getLocal, newIndex, updateLocal } from './localStorage.js';

function changeStatus(done, task) {
  let tasks = getLocal();
  tasks = newIndex(tasks);
  const objIndex = tasks.findIndex((obj) => obj.index === task.index);
  if (done.checked) {
    tasks[objIndex].completed = true;
    updateLocal(tasks);
  } else {
    tasks[objIndex].completed = false;
    updateLocal(tasks);
  }
}

function editTask(editBtn, description, task) {
  let tasks = getLocal();
  tasks = newIndex(tasks);
  const objIndex = tasks.findIndex((obj) => obj.index === task.index);
  editBtn.classList.toggle('editing');
  if (editBtn.innerHTML === '✎') {
    editBtn.innerHTML = '&#10004;';
    description.contentEditable = true;
  } else {
    editBtn.innerHTML = '&#9998;';
    description.contentEditable = false;
    tasks[objIndex].description = description.innerText;
  }
  updateLocal(tasks);
}

function deleteTask(task) {
  let tasks = getLocal();
  tasks = newIndex(tasks);
  const objIndex = tasks.findIndex((obj) => obj.index === task.index);
  tasks.splice(objIndex, 1);
  newIndex(tasks);
  return tasks;
}

export { changeStatus, editTask, deleteTask };