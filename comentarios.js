const toggleButton = document.getElementById('toggleButton')
const comment = document.getElementById('comentarios')
const cuerpo = document.getElementById('wrapper')



toggleButton.addEventListener('click', function(){
    
    if(comment.style.display === 'none'){
        comment.style.display = 'block';
        cuerpo.style.gridTemplateAreas = '"header  header  header" "sidebar content content" "sidebar comment comment" "footer  footer footer"';
    } else {
        comment.style.display = 'none';
        cuerpo.style.gridTemplateAreas = '"header  header  header" "sidebar content content" "footer  footer footer"';
    }
});

var comments = [];

function addComment() {
    var commentInput = document.getElementById("commentInput");
    var commentText = commentInput.value.trim();
    if (commentText !== "") {
        comments.push(commentText);
        renderComments();
        commentInput.value = "";
    }
}

function renderComments() {
    var commentsList = document.getElementById("commentsList");
    commentsList.innerHTML = "";
    comments.forEach(function(comment) {
        var commentItem = document.createElement("div");
        commentItem.textContent = comment;
        commentsList.appendChild(commentItem);
    });
}