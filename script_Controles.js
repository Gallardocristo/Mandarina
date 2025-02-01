function updateStorage(key, inputId) {
    const value = document.getElementById(inputId).value;
    localStorage.setItem(key, value);
}

document.getElementById('titleInput').addEventListener('input', () => updateStorage('pageTitle', 'titleInput'));
document.getElementById('h1Input').addEventListener('input', () => updateStorage('pageH1', 'h1Input'));
document.getElementById('pInput').addEventListener('input', () => updateStorage('pageP', 'pInput'));