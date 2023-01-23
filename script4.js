function validar(){
    var valid = false;

    if(document.getElementById("resources-books").checked){
        valid = true}
    else if(document.getElementById("resources-youtube").checked){
        valid = true}
    else if(document.getElementById("resources-online").checked){
        valid = true}
    else if(document.getElementById("resources-experience").checked){
        valid = true}

    if(valid){
        window.location.href = "index5.html";
    }
    else
    alert('Select one')
}
