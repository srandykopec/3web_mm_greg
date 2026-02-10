const addButton = document.getElementById('addButton');


addButton.addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value;

  if (!taskText){
    return
  }
  
  let newLi = document.createElement('li');
  newLi.textContent = taskText;
  console.log(newLi);
  
  let newInput = document.createElement('input');
  newInput.type = 'checkbox';  /*zmenil som typ inputu na chechbox */
  
  let newSpan = document.createElement('span');

  let newButton = document.createElement('button');



  // DOKONČIT A POSLAŤ 
});
