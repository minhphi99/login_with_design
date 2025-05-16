const addBtn = document.getElementById('addBtn');
const inputBox = document.getElementById('input');
const listContainer = document.getElementById('checkbox');

addBtn.addEventListener('click', function () {
    const inputValue = inputBox.value.trim();

    if (inputValue === '') {
        alert('You must add a task');
    } else {
        //Add li
        const li = document.createElement('li');
        const task = document.createElement('span');
        task.innerHTML = inputValue;
        task.classList.add('unchecked');

        //Add remove button
        const closeIcon = document.createElement('span');
        closeIcon.innerHTML = "\u00d7";
        closeIcon.classList.add('close');

        li.appendChild(task);
        li.appendChild(closeIcon);
        listContainer.appendChild(li);

        inputBox.value = '';
    }
})

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);
