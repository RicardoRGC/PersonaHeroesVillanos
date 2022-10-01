////////////////////////////////////////////
////////////////CONFIG INICIAL//////////////
/////////////////////////////7//////////////
const form = document.getElementById("idFormulario");
const idSelec = document.getElementById("chid");
idSelec.checked = true;
const nombreSelec = document.getElementById("chNombre");
nombreSelec.checked = true;
const apellidoSelec = document.getElementById("chApellido");
apellidoSelec.checked = true;
const edadSelec = document.getElementById("chEdad");
edadSelec.checked = true;
const AlterEgoSelec = document.getElementById("chAlterEgo");
AlterEgoSelec.checked = true;
const posicionSelec = document.getElementById("chCiudad");
posicionSelec.checked = true;
const AsesinatosSelec = document.getElementById("chPublicado");
AsesinatosSelec.checked = true;
const EnemigosSelec = document.getElementById("chEnemigos");
EnemigosSelec.checked = true;
const facultadSelec = document.getElementById("chRobos");
facultadSelec.checked = true;
const publicadoSelec = document.getElementById("chAsesinatos");
publicadoSelec.checked = true;

///aculta el formulario de ingreso.
document.getElementById("FormIngreso").style.display = "none";
////////////////////////////////////////////
////////////////OCULTAR COLUMNAS//////////////
/////////////////////////////7//////////////
idSelec.addEventListener("click", function (e) {
    $("td:nth-child(1)").toggle();
    // $(".id").toggle();
    $("#thId").toggle();
    // document.getElementById("thId").style.display = "none";
});
nombreSelec.addEventListener("click", function (e) {

    // $(".nombre").toggle();
    $("td:nth-child(2)").toggle();
    $("#thNombre").toggle();
});
apellidoSelec.addEventListener("click", function (e) {
    // $(".apellido").toggle();
    $("td:nth-child(3)").toggle();
    $("#thApellido").toggle();
});
edadSelec.addEventListener("click", function (e) {
    // $(".edad").toggle();
    $("td:nth-child(4)").toggle();
    $("#thEdad").toggle();
});
AlterEgoSelec.addEventListener("click", function (e) {
    // $(".AlterEgo").toggle();
    $("td:nth-child(5)").toggle();
    $("#thAlterEgo").toggle();
    document.getElementById("thAlterEgo").style.display = "none";
});
posicionSelec.addEventListener("click", function (e) {
    // $(".posicion").toggle();
    $("td:nth-child(6)").toggle();
    $("#thCiudad").toggle();
});
AsesinatosSelec.addEventListener("click", function (e) {
    // $(".Asesinatos").toggle();
    $("td:nth-child(7)").toggle();
    $("#thPublicado").toggle();
});
EnemigosSelec.addEventListener("click", function (e) {
    // $(".Enemigos").toggle();
    $("td:nth-child(8)").toggle();
    $("#thEnemigos").toggle();

});
facultadSelec.addEventListener("click", function (e) {
    // $(".facultad").toggle();
    $("td:nth-child(9)").toggle();
    $("#thRobos").toggle();
});
publicadoSelec.addEventListener("click", function (e) {
    // $(".publicado").toggle();
    $("td:nth-child(10)").toggle();
    $("#thAsesinatos").toggle();

});

////////////////////////////////////////////
////////////////   CLASES    //////////////
/////////////////////////////7//////////////

class Persona {
    _id = "";
    _nombre = "";
    _apellido = "";
    _edad = "";

    constructor(id, nombre, apellido, edad) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get Id() {

        return this._id;
    }

    set Id(value) {
        if (value == null || value < 1) {
                   }
        this._id = value;
    }

    get Nombre() {
        return this._nombre;
    }

    set Nombre(value) {
        if (value == null || value.length < 2) {
           
        }
        this._nombre = value;
    }

    get Apellido() {
        return this._apellido;
    }

    set Apellido(value) {
        this._apellido = value;
    }
    get Edad() {
        return this._edad;
    }

    set Edad(value) {
        this._edad = value;
    }
}

class Heroe extends Persona {
    _alterEgo = "";
    _ciudad = "";
    _publicado = "";

    constructor(id, nombre, apellido, edad, alterEgo, ciudad, publicado) {
        super(id, nombre, apellido, edad);

        this._alterEgo = alterEgo;
        this._ciudad = ciudad;
        this._publicado = publicado;
    }
    get AlterEgo() {
        return this._alterEgo;
    }

    set AlterEgo(value) {
        this._alterEgo = value;
    }
    get Ciudad() {
        return this._ciudad;
    }

    set Ciudad(value) {
        this._ciudad = value;
    }
    get Publicado() {
        return this._publicado;
    }

    set Publicado(value) {
        this._publicado = value;
    }
}

class Villano extends Persona {
    _enemigo = "";
    _robos = "";
    _asesinatos = "";
    constructor(id, nombre, apellido, edad, enemigo, robos, asesinatos) {
        super(id, nombre, apellido, edad);
        this._enemigo = enemigo;
        this._robos = robos;
        this._asesinatos = asesinatos;
    }
    get Enemigo() {
        return this._enemigo;
    }

    set Enemigo(value) {
        this._enemigo = value;
    }
    get Robos() {
        return this._robos;
    }

    set Robos(value) {
        this._robos = value;
    }
    get Asesinatos() {
        return this._asesinatos;
    }

    set Asesinatos(value) {
        if (value == null || value > 2022) {
            // throw new Error("Error Edad");
        }
        this._asesinatos = value;
    }
}


// -----------------------------------------
// STRING A JSON
// -----------------------------------------
let string = '[{"id":1,"nombre":"Clark", "apellido":"Kent", "edad":45, "alterEgo":"Superman", "ciudad":"Metropolis","publicado":2002},{"id":2, "nombre":"Bruce", "apellido":"Wayne", "edad":35, "alterEgo":"Batman", "ciudad":"Gotica","publicado":20012},{"id":3, "nombre":"Bart", "apellido":"Alen", "edad":30, "alterEgo":"Flash", "ciudad":"Central","publicado":2017},{"id":4, "nombre":"Lex", "apellido":"Luthor", "edad":18, "enemigo":"Superman", "robos":500,"asesinatos":7},{"id":5, "nombre":"Harvey", "apellido":"Dent", "edad":20, "enemigo":"Batman", "robos":750,"asesinatos":2},{"id":666, "nombre":"Celina", "apellido":"kyle", "edad":23, "enemigo":"Batman", "robos":25,"asesinatos":1}]';


let miArray = JSON.parse(string);

console.log(miArray);

let arrayPersonas = miArray.map(function (x) {
    if (x.hasOwnProperty("ciudad")) {

        return new Heroe(
            x.id,
            x.nombre,
            x.apellido,
            x.edad,
            x.alterEgo,
            x.ciudad,
            x.publicado
        );

    }
    if (x.hasOwnProperty("enemigo")) {

        return new Villano(
            x.id,
            x.nombre,
            x.apellido,
            x.edad,
            x.enemigo,
            x.robos,
            x.asesinatos
        );
    }


});

console.log(arrayPersonas);

generarTabla();
// -----------------------------------------
// GENERAR TABLA
// -----------------------------------------
function generarTabla() {
    let selectTipo = document.getElementById("select");
    let cuerpoTabla = document.querySelector("#cuerpoTabla");

    if (!cuerpoTabla.childElementCount >= 0) {

        arrayPersonas
            .forEach((persona) => {
                if (selectTipo.value == "Heroe" && persona instanceof Heroe) {
                    cargarFilas(persona);
                } else if (selectTipo.value == "Villano" &&
                    persona instanceof Villano
                ) {
                    cargarFilas(persona);
                } else if (selectTipo.value == "todos") {
                    cargarFilas(persona);
                }


            });
    }
}

function cargarFilas(persona) {
    let cuerpoTabla = document.querySelector("#cuerpoTabla");
    let datos = [
        persona.Id,
        persona.Nombre,
        persona.Apellido,
        persona.Edad,
        persona.AlterEgo, //4-----------------------------------------------------------------
        persona.Ciudad,
        persona.Publicado, //6
        persona.Enemigo,
        persona.Robos,
        persona.Asesinatos, //9
    ];

    let tr = document.createElement("tr");
    tr.addEventListener("dblclick", ocultarCargar);

    for (let i = 0; i < datos.length; i++) {
        let td = document.createElement("td");
        //td.id = datos[i];    
        td.textContent = datos[i];
        tr.appendChild(td);
    }
    cuerpoTabla.appendChild(tr);
}

// -----------------------------------------
// CARGA EL FORMULARIO DE INGRESO CON LOS DATOS
// DE LA TABLA.
// -----------------------------------------
function cargarCampos() {
    var tr = event.target.parentNode;

    document.getElementById("FormIngreso").style.display = "";
    document.getElementById("fID").value = tr.cells[0].innerHTML;
    document.getElementById("fNombre").value = tr.cells[1].innerHTML;
    document.getElementById("fApellido").value = tr.cells[2].innerHTML;
    document.getElementById("fEdad").value = tr.cells[3].innerHTML;

    if (tr.cells[4].innerHTML != "" && tr.cells[5].innerHTML != "") {
        document.getElementById("selectTipo").value = "Heroe";
        document.getElementById("input1").value = tr.cells[4].innerHTML;
        document.getElementById("input2").value = tr.cells[5].innerText;
        document.getElementById("input3").value = tr.cells[6].innerText;
    } else {
        document.getElementById("selectTipo").value = "Villano";
        document.getElementById("input1").value = tr.cells[7].innerHTML;
        document.getElementById("input2").value = tr.cells[8].innerText;
        document.getElementById("input3").value = tr.cells[9].innerHTML;
    }
}

// -----------------------------------------
// FILTRAR TABLA SELEC :Heroe/Villano
// -----------------------------------------
let seleccion = document.getElementById("select");
seleccion.addEventListener("change", select);
function select() {
    let x = document.getElementById("select").value;
    limpiarTabla();
    generarTabla();

}
// -----------------------------------------
// LIMPIAR TABLA
// -----------------------------------------
function limpiarTabla() {

    const myNode = document.getElementById("cuerpoTabla");
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }

}

// -----------------------------------------
// SELECT TIPO Y CAMBIA EL PLACEHOLDER DE INPUT
// -----------------------------------------



let selector = document.getElementById("selectTipo");
selector.addEventListener("change", selectForm);

function selectForm() {
    if (document.getElementById("selectTipo").value == "Villano") {
        document.getElementsByName("input1")[0].placeholder = "enemigo";
        document.getElementsByName("input2")[0].placeholder = "robos";
        document.getElementsByName("input3")[0].placeholder = "Asesinatos";




    } else {
        document.getElementsByName("input1")[0].placeholder = "alterEgo";
        document.getElementsByName("input2")[0].placeholder = "ciudad";
        document.getElementsByName("input3")[0].placeholder = "Publicado";
    }
}







////-------------------------
//SACAR PROMEDIO
///------------------------

form.addEventListener("submit", function (event) {
    console.log("entro");
    event.preventDefault();
    let contador = 0;
    let acumulador = 0;
    let promedio = 0;
    let selectTipo = document.getElementById("select");
    let cuerpoTabla = document.querySelector("#cuerpoTabla");
    if (!cuerpoTabla.childElementCount >= 0) {
        arrayPersonas
            .forEach((persona) => {
                console.log(persona.Edad);

                if (selectTipo.value == "Heroe" && persona instanceof Heroe) {
                    contador++;
                    acumulador += persona.Edad;
                } else {
                    if (
                        selectTipo.value == "Villano" &&
                        persona instanceof Villano
                    ) {
                        contador++;
                        acumulador += persona.Edad;
                    } else {
                        if (selectTipo.value == "todos") {
                            contador++;
                            acumulador += persona.Edad;
                        }
                    }
                }
            });

        promedio = acumulador / contador;

        document.getElementById("calcular").value = promedio.toFixed(2);
    }
});

// -----------------------------------------
// AGREGAR, OCULTAR O MOSTRAR
// -----------------------------------------
let agregar = document.getElementById("agregar");
agregar.addEventListener("click", visibilidad);


function ocultarCargar() {
    visibilidad();
    cargarCampos();
}

function visibilidad() {
    if (document.getElementById("FormIngreso").style.display == "") {
        document.getElementById("FormIngreso").style.display = "none";
        document.getElementById("formDatos").style.display = "";

    } else {
        document.getElementById("formDatos").style.display = "none";
        document.getElementById("FormIngreso").style.display = "";
    }
    //limpiarCampos();
}

// -----------------------------------------
// ALTA DE PERSONA
// -----------------------------------------
// let alta = document.getElementById("alta");
// alta.addEventListener("click", agregarPersona);

function insertarNuevo() {
    let indice = arrayPersonas
        .length - 1;
    let newPersona = arrayPersonas
    [indice];
    cargarFilas(newPersona);
}
// -----------------------------------------
// FORMULARIO
// ALTA PERSONA
// -----------------------------------------
let altas = document.getElementById("alta");
altas.addEventListener("click", agregarPersona);

function agregarPersona() {
    let id = getRandomInt(100);
    while (existeId(id)) {
        id = getRandomInt(100);
    }
    
    let apellido = document.getElementById("fApellido").value;
    let nombre = document.getElementById("fNombre").value;
    let edad = parseInt(document.getElementById("fEdad").value);

     {
        if (id > 0 && nombre != "" && apellido != "" && edad != "" && nombre != null&& apellido != null && edad != null  ) {
            let altaPersona;
            if (document.getElementById("selectTipo").value == "Heroe") {
                let enemigo = document.getElementById("input1").value;
                let robos = document.getElementById("input2").value;
                let Asesinatos = document.getElementById("input3").value;
                if (Asesinatos > 0 && enemigo != "" && robos != ""&&Asesinatos !=null && enemigo != null && robos !=null) {
                    
                    
                    altaPersona = new Heroe(
                        id,
                        nombre,
                        apellido,
                        edad,
                        enemigo,
                        robos,
                        Asesinatos
                    );
                    arrayPersonas
                        .push(altaPersona);
                }
            } else {
                let alterEgo = document.getElementById("input1").value;
                let ciudad = document.getElementById("input2").value;
                let publicado = parseInt(document.getElementById("input3").value);

                if (publicado > 0 && alterEgo != "" && ciudad != "") {
                    altaPersona = new Villano(
                        id,
                        nombre,
                        apellido,
                        edad,
                        alterEgo,
                        ciudad,
                        publicado
                    );
                    arrayPersonas
                        .push(altaPersona);
                }
            }
            insertarNuevo();
            console.log(altaPersona.toString());
            limpiarCampos();
        } else {
            alert("Completar el formulario con datos correctos");
        }
        visibilidad();
    }
}
// // -----------------------------------------
// // FORMULARIO
// // ELIMINAR PERSONA
// // -----------------------------------------
let eliminar = document.getElementById("eliminar");
eliminar.addEventListener("click", EliminarPersona);

function EliminarPersona() {
    let id = parseInt(document.getElementById("fID").value);
    let indexPersona = arrayPersonas
        .findIndex(per => per.Id == id);

    arrayPersonas
        .splice(indexPersona, 1);


    console.log(arrayPersonas
    );

    // document.getElementById("form").style.display = "none";
    limpiarCampos();
    limpiarTabla();
    generarTabla();
}

// // -----------------------------------------
// // FORMULARIO
// // MODIFICAR PERSONA
// // -----------------------------------------
let modificar = document.getElementById("modificar");
modificar.addEventListener("click", modificarPersona);

function modificarPersona() {
    let id = parseInt(document.getElementById("fID").value);

    let personaa = arrayPersonas
        .find(per => per.Id == id);
    let nombre = document.getElementById("fNombre").value;
    personaa.Nombre = nombre;
    personaa.Apellido = document.getElementById("fApellido").value;
    personaa.Edad = document.getElementById("fEdad").value;


    if (document.getElementById("selectTipo").value == "Heroe") {
        personaa.AlterEgo = document.getElementById("input1").value;
        personaa.Ciudad = document.getElementById("input2").value;
        personaa.Publicado = document.getElementById("input3").value;
    }
    else {
        personaa.Enemigos = document.getElementById("input1").value;
        personaa.Robos = document.getElementById("input2").value;
        personaa.Asesinatos = document.getElementById("input3").value;

    }
    console.log(personaa);


    visibilidad();
    limpiarCampos();
    limpiarTabla();
    generarTabla();

}

///------------------------------
// BOTON CANCELAR
//---------------------------
let cancelar = document.getElementById("cancelar");
cancelar.addEventListener("click", visibilidad);

// ///--------------------------------------------------------------
let Id = document.getElementById("inputId");
let Nombre = document.getElementById("inpNombre");
let Apellido = document.getElementById("inpApellido");
let Edad = document.getElementById("inpEdad");
let alterego = document.getElementById("inpAlterEgo");
let Robos = document.getElementById("inpRobos");
let Asesinatos = document.getElementById("inpAsesinatos");
let Enemigos = document.getElementById("inpEnemigos");
let ciudad = document.getElementById("inpCiudad");
let Publicado = document.getElementById("inpPublicado");

console.log(arrayPersonas);

Id.addEventListener("click", function () {

    arrayPersonas.sort((a, b) => {

        {
            if (a.Id > b.Id) {
                return 1;
            } else
                if (a.Id == b.Id) {
                    return 0;
                } else {
                    return -1;
                }
        }


    });
    limpiarTabla();
    generarTabla();

});

Nombre.addEventListener("click", function () {
    arrayPersonas.sort((a, b) => {
        {
            if (a.Nombre.toLowerCase() > b.Nombre.toLowerCase()) {
                return 1;
            } else
                if (a.Nombre.toLowerCase() == b.Nombre.toLowerCase()) {
                    return 0;
                } else {
                    return -1;
                }
        }
    });
    limpiarTabla();
    generarTabla();
});
Apellido.addEventListener("click", function () {
    arrayPersonas.sort((a, b) => {
        {
            if (a.Apellido.toLowerCase() > b.Apellido.toLowerCase()) {
                return 1;
            } else
                if (a.Apellido.toLowerCase() == b.Apellido.toLowerCase()) {
                    return 0;
                } else {
                    return -1;
                }
        }
    });
    limpiarTabla();
    generarTabla();
});
Edad.addEventListener("click", function () {
    arrayPersonas.sort((a, b) => {
        {
            if (a.Edad > b.Edad) {
                return 1;
            } else
                if (a.Edad == b.Edad) {
                    return 0;
                } else {
                    return -1;
                }
        }
    });
    limpiarTabla();
    generarTabla();
});
alterego.addEventListener("click", function () {
    arrayPersonas.sort((a, b) => {
        {
            if (a.AlterEgo > b.AlterEgo) {
                return 1;
            } else
                if (a.AlterEgo == b.AlterEgo) {
                    return 0;
                } else {
                    return -1;
                }
        }
    });
    limpiarTabla();
    generarTabla();
});
Robos.addEventListener("click", function () {
    arrayPersonas.sort((a, b) => {
        {
            if (a.Robos > b.Robos) {
                return 1;
            } else
                if (a.Robos == b.Robos) {
                    return 0;
                } else {
                    return -1;
                }
        }
    });
    limpiarTabla();
    generarTabla();
});
ciudad.addEventListener("click", function () {
    arrayPersonas.sort((a, b) => {
        {
            if (a.Ciudad > b.Ciudad) {
                return 1;
            } else
                if (a.Ciudad == b.Ciudad) {
                    return 0;
                } else {
                    return -1;
                }
        }
    });
    limpiarTabla();
    generarTabla();
});
Publicado.addEventListener("click", function () {
    arrayPersonas.sort((a, b) => {
        {
            if (a.Publicado > b.Publicado) {
                return 1;
            } else
                if (a.Publicado == b.Publicado) {
                    return 0;
                } else {
                    return -1;
                }
        }
    });
    limpiarTabla();
    generarTabla();
});
Asesinatos.addEventListener("click", function () {
    arrayPersonas.sort((a, b) => {
        {
            if (a.Asesinatos > b.Asesinatos) {
                return 1;
            } else
                if (a.Asesinatos == b.Asesinatos) {
                    return 0;
                } else {
                    return -1;
                }
        }
    });
    limpiarTabla();
    generarTabla();
});
Enemigos.addEventListener("click", function () {
    arrayPersonas.sort((a, b) => {
        {
            console.log(a.Enemigo);
            if (a.Enemigo > b.Enemigo) {
                return 1;
            } else
                if (a.Enemigo == b.Enemigo) {
                    return 0;
                } else {
                    return -1;
                }
        }
    });
    limpiarTabla();
    generarTabla();
});









///------------------------------
//NUMERO RANDOM
//-------------------------------
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// -----------------------------------------
// FORMULARIO
// LIMPIAR CAMPOS!
// -----------------------------------------
function limpiarCampos() {
    document.getElementById("fID").value = "";
    document.getElementById("fApellido").value = "";
    document.getElementById("fNombre").value = "";
    document.getElementById("fEdad").value = "";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
}
// -----------------------------------------
// BUscarId
// -----------------------------------------
function existeId(id) {
    let existe = false;
    arrayPersonas
        .forEach((newPersona) => {
            if (newPersona.Id == id) {
                existe = true;
            }
        });
    return existe;
}
