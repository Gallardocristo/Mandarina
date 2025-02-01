function updateContent() {
    const newTitle = localStorage.getItem('pageTitle');
    const newH1 = localStorage.getItem('pageH1');
    const newP = localStorage.getItem('pageP');

    if (newTitle) document.title = newTitle;
    if (newH1) document.getElementById('title').textContent = newH1;
    if (newP) document.getElementById('paragraph').textContent = newP;
}

updateContent();

setInterval(updateContent, 1000);

window.addEventListener('storage', updateContent);