function showModal(contentId) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `<p>Contenuto dinamico della sezione ${contentId}</p>`;
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}
