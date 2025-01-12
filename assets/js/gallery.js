document.querySelectorAll('.container-gallery img').forEach(image =>{
    image.onclick = () => {
      document.querySelector('.pop-image').style.display = 'block';
      document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
  });
  document.querySelector('.pop-image span').onclick = () => {
    document.querySelector('.pop-image').style.display = 'none';
  }
  function showcom(button) {
    let comment_id = button.getAttribute("data-comment-id");
    let comment_element = document.getElementById(comment_id)

    if (comment_element.style.display === "none" || comment_element.style.display === "") {
      comment_element.style.display = "block";
    }
    else {
      comment_element.style.display = "none"
    }
}