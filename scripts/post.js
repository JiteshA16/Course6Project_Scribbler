var isEdit = false;

var postTitleView = document.getElementById('post-title-view');
var postDescriptionView = document.getElementById('post-description');
var postTitle = document.getElementById('post-title');

var editButton = document.getElementById('edit-button');
var updatedLabel = document.getElementById('updated-label');



function onTapEditButton() {
    if (isEdit) {
        postTitleView.style.borderColor = 'white';
        postDescriptionView.style.borderColor = 'white';
        postDescriptionView.contentEditable = false;
        postTitle.contentEditable = false;
        editButton.innerHTML = 'Edit' + '<i style="margin-left: 10px;" class="fa fa-edit" id="icon"></i>';
    } else {
        postTitleView.style.borderColor = 'red';
        postDescriptionView.style.borderColor = 'red';
        postDescriptionView.contentEditable = true;
        postTitle.contentEditable = true;
        editButton.innerHTML = 'Save' + '<i style="margin-left: 10px;" class="fa fa-save" id="icon"></i>';
    }
    isEdit = !isEdit
}

var likeCount = 0;

function onTapLikeButton() {
    document.getElementById("like-button").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked";
    likeCount += 1;
    if (likeCount != 0) {
        if (likeCount == 1) {
            document.getElementById('likecount-label').innerHTML = likeCount + " person likes this!";
        } else {
            document.getElementById('likecount-label').innerHTML = likeCount + " people like this!";
        }
    }
}

var commentList = [];

function onTapComment() {
    var commentText = document.getElementById('user-comments').value;
    if (commentText == null) {
        alert('Please enter a comment.')
    } else {
        document.getElementById('user-comments').value = '';
        document.getElementById('comment-list').innerHTML = '';
        commentList.push(commentText);
        commentList.forEach(function(value, index) {
            var template =
                '<div class="outercomment-view ">' +
                '<div class="innercomment-view ">' + value +
                '</div>' +
                '</div>';
            document.getElementById('comment-list').innerHTML += template;
        });

    }
}