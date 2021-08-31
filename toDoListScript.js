const createNewTask = function () {
  const inputValue = document.querySelector('#newTask input').value;
  if (inputValue) {
    console.log('Clicked');
    document.querySelector('#tasks').innerHTML += `
          <div class="task">
              <span id='taskname'>${inputValue}</span>
              <button class="delete">Delete</button>
          <div>
      `;

    const currentTasks = document.querySelectorAll('.delete');
    console.log(currentTasks);
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        console.log(this);
        this.parentNode.remove();
      };
    }

    const tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle('completed');
      };
    }

    document.querySelector('#newTask input').value = '';
  } else {
    alert('Please enter task');
  }
};

document.querySelector('#push').onclick = createNewTask;

document.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    createNewTask();
  }
});
