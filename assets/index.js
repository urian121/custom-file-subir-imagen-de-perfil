function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var imagePreview = document.getElementById("imagePreview");
      imagePreview.style.backgroundImage = "url(" + e.target.result + ")";
      imagePreview.style.display = "none";
      setTimeout(function () {
        imagePreview.style.display = "block";
        imagePreview.style.opacity = 0;
        var fadeIn = setInterval(function () {
          if (imagePreview.style.opacity < 1) {
            imagePreview.style.opacity = parseFloat(imagePreview.style.opacity) + 0.1;
          } else {
            clearInterval(fadeIn);
          }
        }, 65);
      }, 0);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

document.getElementById("imageUpload").addEventListener("change", function () {
  readURL(this);
});
