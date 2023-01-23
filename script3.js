function validar(){
    var valid = false;

    if(document.getElementById("operate-stock").checked){
        valid = true}
    else if(document.getElementById("operate-foreign").checked){
        valid = true}
    else if(document.getElementById("operate-commodity").checked){
        valid = true}
    else if(document.getElementById("operate-bond").checked){
        valid = true}
    else if(document.getElementById("operate-cryptocurrency").checked){
        valid = true}

    if(valid){
        window.location.href = "index4.html";
    }
    else
    alert('Select one')
}
