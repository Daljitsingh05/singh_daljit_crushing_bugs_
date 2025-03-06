
const thumbnailButtons = document.querySelectorAll('#thumbnail-container img'),
      puzzleBoard = document.querySelector('.puzzle-board'),
      draggablePieces = document.querySelectorAll('.puzzle-pieces img'),
      dropZones = document.querySelectorAll('.drop-zone'),
      puzzleContainer = document.querySelector('.puzzle-pieces');

let draggedPiece = null; 


function changeBackground() {
   
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.id}.jpg)`;

    
    draggablePieces.forEach(piece => {
        puzzleContainer.appendChild(piece); 
    });
}


function handleDragStart() {
    console.log('Started dragging:', this);
    draggedPiece = this;
}


function handleDragOver(event) {
    event.preventDefault();
    console.log('Dragged over:', this);
}


function handleDrop(event) {
    event.preventDefault();
    console.log('Dropped on:', this);
    if (!this.hasChildNodes()) {
        this.appendChild(draggedPiece);
    } else {
        console.log('Drop zone already occupied!');
    }
}


thumbnailButtons.forEach(button => button.addEventListener('click', changeBackground));
draggablePieces.forEach(piece => piece.addEventListener('dragstart', handleDragStart));
dropZones.forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('drop', handleDrop);
});
