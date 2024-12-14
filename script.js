var actionBtn = document.querySelector('#actionButton');
var listContent = document.querySelector('#listContent');
var list = document.querySelector('#list');

actionBtn.addEventListener('click', () => {
    if (listContent.value === '') {
        alert('Enter the text');
        return;
    }

    let newItem = document.createElement('li');
    let newIcon = document.createElement('i');
    let newPara = document.createElement('p');
    let newButton = document.createElement('button');

    newIcon.classList.add('fa-regular', 'fa-circle');
    newIcon.setAttribute('title', 'mark done');

    newPara.textContent = listContent.value;

    newButton.setAttribute('title', 'remove');
    newButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";

    newItem.append(newIcon);
    newItem.append(newPara);
    newItem.append(newButton);

    newIcon.addEventListener('click', () => {
        if (newIcon.classList.contains('fa-circle')) {
            newIcon.classList.remove('fa-circle');
            newIcon.classList.add('fa-circle-check');
            newItem.classList.add('done');
        } else {
            newIcon.classList.remove('fa-circle-check');
            newIcon.classList.add('fa-circle');
            newItem.classList.remove('done');
        }
    });

    newButton.addEventListener('click', () => {
        newItem.remove();
    });

    list.append(newItem);
    listContent.value = '';
});
