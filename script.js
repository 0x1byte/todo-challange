
var eltodo = document.getElementById('todo');
var eltodos = document.getElementById('todos');

todos = []

eltodo.focus()

if(todos.length <= 0){
    eltodos.innerHTML = '<h3 class="center">No todos yet!</h3>';
}

eltodo.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        savetodo();
    }
})

function savetodo(){

    if(eltodo.value ==''){
        alert('please enter a value!');
        return
    }

    todos = [...todos,eltodo.value]

    todos = todos.filter(task=>task.trim() !=='').map(task=> task.trim());

    eltodos.innerHTML = ''
    eltodo.value = ''
    var count = 1;
    todos.forEach(todotask => {
        const todoEl = document.createElement('h4')
        todoEl.classList.add('todo-item')
        todoEl.innerText = count+". "+todotask
        eltodos.appendChild(todoEl)
        count+=1
    })
}
