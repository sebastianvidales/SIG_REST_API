function validacion() {
    
    var result = "";
    var vacios = 0;
    
    var list2 = [{
        elemento: "MainContent_NombresR",
        texto: "Nombre"
    }, {
        elemento: "MainContent_ApellidosR",
        texto: "Apellido"
    }, {
        elemento: "MainContent_EmailR",
        texto: "Email"
    }, {
        elemento: "MainContent_CodigoR",
        texto: "Codigo"
    }]

    for (var i = 0; i < list2.length; i++) {
        var nom = document.getElementById(list2[i].elemento).value;
        
        if (nom == "") {
            vacios++;
            result += "Campo " + list2[i].texto + " no puede ser vacío\n";
        }
    }
    alert(result);
    if (vacios > 0) {
        return false;
    } else {
        return true;
    }
}
function validacionproyectos() {

    var result = "";
    var vacios = 0;

    var list2 = [{
        elemento: "MainContent_Nombre",
        texto: "Nombre"
    }, {
        elemento: "MainContent_AsignaturaR",
        texto: "Asignatura"
    }]

    for (var i = 0; i < list2.length; i++) {
        var nom = document.getElementById(list2[i].elemento).value;

        if (nom == "") {
            vacios++;
            result += "Campo " + list2[i].texto + " no puede ser vacío\n";
        }
    }
    alert(result);
    if (vacios > 0) {
        return false;
    } else {
        return true;
    }
}

function validarUsuario() {
    var list2 = [{
        elemento: "MainContent_first_name",
        texto: "Usuario"
    }, {
        elemento: "MainContent_last_name",
        texto: "Contraseña"
    }]
    var result = "";
    var vacios = 0;


    for (var i = 0; i < list2.length; i++) {
        var nom = document.getElementById(list2[i].elemento).value;

        if (nom == "") {
            vacios++;
            result += "Campo " + list2[i].texto + " no puede ser vacío\n";
        }
    }
    
    if (vacios > 0) {
        alert(result);
        return false;
    } else {
        return true;
    }
}
function verificaRadios() {
    marcado = false;
    for (var i = 0; i < form.dia.length; i++) {
        if (form.group[i].checked)
            marcado = true;
    }
    

    if (!marcado) {
        alert("Por favor, debe elegir una opción!");
        return false;
    }
    else {
        return true;
    }
}
