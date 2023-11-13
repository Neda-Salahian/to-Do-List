const button = document.querySelector('button');
const toDoInput = document.getElementById('todo-input');

const ulElement = document.getElementById('todo-list');
const liElement = document.createElement('li');

button.addEventListener('click' , event => {
    const textInput = toDoInput.value;
    const liElement = document.createElement('li');
    const spanElement = document.createElement('span');
    liElement.appendChild(spanElement)
    spanElement.textContent = textInput;

    const divElement = document.createElement('div');
    divElement.classList.add('container-icon');
    
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa', 'fa-trash');
    trashIcon.addEventListener('click',()=> {
        ulElement.removeChild(liElement);
    });

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fa', 'fa-check');

    checkIcon.addEventListener('click',() => {
        const clickComplete = spanElement.classList.toggle("completed");
        if(clickComplete){
            spanElement.style.color = "red";
            spanElement.style.textDecoration = "line-through";
            trashIcon.style.color = "red";
            checkIcon.style.color ="green";
        } else {
            spanElement.style.color = "";
            spanElement.style.textDecoration = "";
            trashIcon.style.color = "";
            checkIcon.style.color = "";
        }
    });
    ulElement.appendChild(liElement);
    liElement.appendChild(divElement);
    divElement.appendChild(trashIcon);
    divElement.appendChild(checkIcon);
});

