const gridContainer = document.querySelector('#grid-container');
const slider= document.querySelector('#grid-range-slider');
const sliderValue = document.querySelector('.slider-value');
sliderValue.textContent = `${slider.value} x ${slider.value}`;  
const gridSize = slider.value ** 2;


for (let i=1; i<=gridSize; i++) {
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

slider.addEventListener('input', () => {
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${slider.value}, ${320/slider.value}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${slider.value}, ${320/slider.value}px)`;
    const gridSize = slider.value ** 2;
    for (let i=1; i<=gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.setAttribute('class', 'grid-item');
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
          });
    }
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
  });
