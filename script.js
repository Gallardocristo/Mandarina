//Pagina 1
function updateStorage(key, inputId) {
    const value = document.getElementById(inputId).value;
    localStorage.setItem(key, value);
}

document.getElementById('titleInput').addEventListener('input', () => updateStorage('pageTitle', 'titleInput'));
document.getElementById('h1Input').addEventListener('input', () => updateStorage('pageH1', 'h1Input'));
document.getElementById('pInput').addEventListener('input', () => updateStorage('pageP', 'pInput'));

//Pagina 2
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