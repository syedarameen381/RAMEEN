//select image file
let selectImage = document.getElementById("imagebtn");
let imageInput = document.getElementById("imageinput");
selectImage.addEventListener("click", () => {
    imageInput.click();
});

//image preview
let imagePreview = document.getElementById("imagePreview");
imageInput.addEventListener("change", () => {
    let file = imageInput.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Image Preview" style="max-width: 100%; height: auto;">`;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.innerHTML = "";
    }
});

//post the image
let postbutton = document.getElementById("postbtn");
let captionInput = document.getElementById("caption");
postbutton.addEventListener("click", () => {
    let caption = captionInput.value.trim();
    let file = imageInput.files[0];

    if (!file && !caption) {
        alert('Select an image first and write a caption.');
        return;
    }

    let outputHTML = '';
    let postoutput = document.getElementById("output");
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            outputHTML += `<img src="${e.target.result}" alt="Posted Image" style="max-width: 100%; height: auto;"><br>`;
            if(caption){
                outputHTML += `<p>${caption}</p>`;
            }
            postoutput.innerHTML = outputHTML;
        };
        reader.readAsDataURL(file);
    }

});


