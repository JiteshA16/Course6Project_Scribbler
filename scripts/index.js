var createPostModal = document.getElementById('createpost-modal');

function showCreatePostModal() {
    createPostModal.style.display = 'block';
}

function navigateToPostList() {
    location.replace('./html/postslist.html');
}