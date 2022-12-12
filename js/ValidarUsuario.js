var attempt = 3;
function validate(){
    var nombre = document.getElementById("nombre").value;
    var contrasena = document.getElementById("contrasena").value;
    if(nombre == "admin" && contrasena == "123456"){
        window.location = "./index1.html";
        return false;
    }if(nombre == "cliente" && contrasena == "654321"){
        alert("Ingreso exitosamente");
        window.location = "./index2.html";
        return false;
    }else{
        attempt--;
    }
    alert("Te queda" + attempt + " intentos mas")
    if(attempt == 0){
        document.getElementById("nombre").disable = true;
        document.getElementById("contrasena").disable = true;
        document.getElementById("ingresar").disable = true;
    }
}