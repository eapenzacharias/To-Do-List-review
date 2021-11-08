import { getLocal, newIndex } from './localStorage.js';
import printTasks from './printInterface.js';
import { getElement } from './queries.js';

function taskFilter() {
  let list = getLocal();
  const filtered = list.filter((task) => !task.completed);
  list = newIndex(filtered);
  printTasks(list);
}

function filterBtn() {
  const clearBtn = getElement('#clear-btn');
  clearBtn.onclick = () => taskFilter();
}

export default filterBtn;