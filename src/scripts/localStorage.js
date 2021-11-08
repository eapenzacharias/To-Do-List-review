function updateLocal(tasks) {
  localStorage.setItem('todolist', JSON.stringify(tasks));
}

function newIndex(tasks) {
  let i = 0;
  tasks.forEach((task) => {
    task.index = i + 1;
    i += 1;
  });
  updateLocal(tasks);
  return tasks;
}

function getLocal() {
  let local = [];
  let tasks = [];
  if (localStorage) {
    local = JSON.parse(localStorage.getItem('todolist'));
  }
  if (local) {
    tasks = newIndex(local);
  }
  return tasks;
}

export { updateLocal, newIndex, getLocal };