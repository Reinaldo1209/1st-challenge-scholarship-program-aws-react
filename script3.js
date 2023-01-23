function validar(){
    var valid = false;
    
    var x = document.form.operate;

    for(var i=0;i<x.lenght;i++){
        if(x[i].checked){
            valid = true;
            break;
        }
    }
    if(valid){
        window.location.href = "index4.html";
    }
    else{
        alert('Select one')
    }
}
