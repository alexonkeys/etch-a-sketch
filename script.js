const gridContainer = document.querySelector('#grid-container');
const slider= document.querySelector('#grid-range-slider');
const sliderValue = document.querySelector('.slider-value');
const gridSize = slider.value ** 2;


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

slider.addEventListener('input', () => {
    sliderValue.textContent = slider.value;
    const gridSize = slider.value ** 2;
    console.log(gridSize);
  });