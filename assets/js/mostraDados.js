function mostraDados() {
    const mais = document.getElementById('mais');
    const menos = document.getElementById('menos');
    const detalhes = document.getElementById('detalhes');

    mais.style.display = 'none';
    menos.style.display = 'block';
    detalhes.style.display = 'flex';
}

function escondeDados() {
    const mais = document.getElementById('mais');
    const menos = document.getElementById('menos');
    const detalhes = document.getElementById('detalhes');

    mais.style.display = 'block';
    menos.style.display = 'none';
    detalhes.style.display = 'none';
}