var deleteModal = document.getElementById('delete-modal');

var cardId = "";

function showDeleteModal(id) {
    deleteModal.style.display = 'block';
    cardId = id;
}

function hideDeleteModal() {
    deleteModal.style.display = 'none';
}

function onClickYes() {
    let selectedCard = document.getElementById(cardId);
    if (selectedCard != null) {
        selectedCard.style.display = 'none';
    }
    deleteModal.style.display = 'none';
}

function navigateToCreatePost() {
    location.replace('./post.html');
}