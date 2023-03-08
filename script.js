const gridContainer = document.querySelector('#grid-container');

for (let i=1; i<=256; i++) {
    const gridItem = document.createElement('div');
    gridItem.setAttribute('class', 'grid-item');
    gridContainer.appendChild(gridItem);
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', () => {
      gridItem.style.backgroundColor = 'black';
    });
});