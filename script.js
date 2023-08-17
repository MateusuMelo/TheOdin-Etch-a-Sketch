document.addEventListener('DOMContentLoaded',() => {

  const container_grid = document.getElementById('container-grid');
  
  function makeRows(rows, cols) {
    container_grid.style.setProperty('--grid-rows', rows);
    container_grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container_grid.appendChild(cell).className = "grid-item";
    };
  };
  makeRows(50, 50);


  const grid_item = document.getElementsByClassName('grid-item');
  console.log(grid_item);
  for(const box of grid_item){
      box.addEventListener('mouseover',() => {
      box.style.setProperty('background-color', 'black');
      } )
  };

})



