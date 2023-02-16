var textArea = document.querySelector('textarea')

textArea.addEventListener('input', function(){
    let caracterMax = textArea.maxLength;
    let digitando = textArea.value.length;

    document.querySelector('span').innerText = (caracterMax - digitando)
})

function validar(){
    window.location.href = "index6.html";
}