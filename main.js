let links = document.querySelectorAll('a');

function change(event) {
    event.preventDefault(); 

    links.forEach(link => link.classList.remove('active')); 
    this.classList.add('active');
}


links.forEach(link => {
    link.addEventListener('click', change);
});
