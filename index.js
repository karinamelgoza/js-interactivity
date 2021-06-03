// console.log("hello world")
document.querySelector('form').addEventListener('submit', addMovie)
const message = document.querySelector('#message')
// adding a movie

function addMovie(e) {
    e.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie);
    inputField.value = ''
}


function deleteMovie(e) {
    e.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
    revealMessage()
}

function crossOffMovie(e) {
    e.target.classList.toggle('checked')
    if (e.target.classList.contains('checked') === true) {
        message.textContent = 'Movie Watched'
    } else {
        message.textContent = 'Movie added back!'
    }
    revealMessage()
}

function revealMessage() {
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}



