const dropzones = document.querySelectorAll(".kanban-field");

/*   handle drag items   */
const getItems = () => {
    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener("dragstart", dragstart);
        item.addEventListener("dragend", dragend);
    })
}

getItems()


function dragstart() {
    dropzones.forEach( dropzone => dropzone.classList.add("highlight"));

    this.classList.add("is-dragging");
}

function dragend() {
    dropzones.forEach( dropzone => dropzone.classList.remove("highlight"));

    this.classList.remove('is-dragging');
}

/*   handle drop items   */
dropzones.forEach( dropzone => {
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

/*   NOTES: 
* this = dropzone
*/

function dragover() {
    this.classList.add('over')

    // get dragging card
    const cardDragged = document.querySelector('.is-dragging')
    this.appendChild(cardDragged)
}

function dragleave() {
    this.classList.remove('over')
}

function drop() {
    this.classList.remove('over')
}

