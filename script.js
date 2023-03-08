const gridContainer = document.querySelector('#grid-container');

for (let i=1; i<=256; i++) {
    const gridItem = document.createElement('div');
    gridItem.setAttribute('id', `grid-item-${i}`);
    gridContainer.appendChild(gridItem);
    gridItem.style.backgroundColor = 'white';
    gridItem.textContent = 'hello';

}

