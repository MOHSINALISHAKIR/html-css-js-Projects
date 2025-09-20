const api = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example'
let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")
let create = document.getElementById("new")
create.addEventListener('click',()=>{
    
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
    imgBox.classList.add("show-img")

    
    
})