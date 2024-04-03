document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector('#create-task-form')
  const tasks =document.querySelector('#tasks')
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const taskDescription = document.querySelector('#new-task-description');
    if(taskDescription.value==''){
      alert('please write something!')
    }
    else{
      const taskList = document.createElement('li');
      const deleteButton = document.createElement('button')
      taskList.textContent = taskDescription.value;
      deleteButton.textContent = 'x'
      tasks.appendChild(taskList);
      taskList.appendChild(deleteButton)
      deleteButton.addEventListener('click', ()=>{
        taskList.remove()
      })
      
    }
    form.reset()


  })


//   let description = document.getElementById('new-task-description').addEventListener('description', input)


// function input(){
//   let input = description.value;
// }

// let sub = document.getElementById('sub').addEventListener('task', submit)

// function submit(){
//   sub = input
// }



});