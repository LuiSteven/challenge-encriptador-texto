function mostrarInput() {
    document.getElementById('labelTexto').style.display = 'none';
    let inputTexto = document.getElementById('valorTexto');
    inputTexto.style.display = 'block';
    inputTexto.focus();
}


function Encriptar(){
    let textoUsuario = document.getElementById('valorTexto').value;
    let textoEcnriptado = textoUsuario
    .replace(/e/g, "enter") // se utiliza metodo replace para reemplazar la cadena 
    .replace(/i/g, "imes") // y la expresión regular g para hacer un reemplazo global
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    
    //document.getElementById('outputText').innerText = textoEcnriptado;

    let outputDiv = document.getElementById('outputText');

    if (textoEcnriptado.trim()) {
        outputDiv.innerHTML = `
            <br>
            <br>
            <br>
            <br>
            <p id="textoResultado">${textoEcnriptado}</p>
            <br>
            <br>
            <br>
            <br>
            <button class="botones__click" onclick="CopiarTexto()">Copiar</button>
        `;
    } else {
        outputDiv.innerHTML = '';
    }
}

function CopiarTexto(){
    // let copiaTexto = document.getElementById('outputText').innerText;
    // navigator.clipboard.writeText(copiaTexto)
    //     .then(() => {
    //         //alert('Texto copiado al portapapeles');
    //     })
    //     .catch(err => {
    //         console.error('Error al copiar el texto: ', err);
    //     });
    let copiaTexto = document.getElementById('textoResultado').innerText;
    navigator.clipboard.writeText(copiaTexto)
        .then(() => {
            //alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    
    limpiarCaja()

}

function Desencriptar() {    
    let textoUsuario = document.getElementById('valorTexto').value;
    let textoDesencriptado = textoUsuario
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // document.getElementById('outputText').innerText = textoDesencriptado;
    let outputDiv = document.getElementById('outputText');

    if (textoDesencriptado.trim()) {
        outputDiv.innerHTML = `
            <br>
            <br>
            <br>
            <br>
            <p id="textoResultado">${textoDesencriptado}</p>
            <br>
            <br>
            <br>
            <br>
            <button class="botones__click" onclick="CopiarTexto()">Copiar</button>
        `;
    } else {
        outputDiv.innerHTML = '';
    }
}

function limpiarCaja(){
    document.querySelector('#valorTexto').value = '';    
}