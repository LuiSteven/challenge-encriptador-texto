function mostrarInput() {
    document.getElementById('labelTexto').style.display = 'none';
    let inputTexto = document.getElementById('valorTexto');
    inputTexto.style.display = 'block';
    inputTexto.focus();
}

function Encriptar() {
    let textoUsuario = document.getElementById('valorTexto').value;
    let textoEncriptado = textoUsuario
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    let outputDiv = document.getElementById('outputText');

    if (textoEncriptado.trim()) {
        outputDiv.innerHTML = `
            <p id="textoResultado">${textoEncriptado}</p>
            <button class="botones__click" onclick="CopiarTexto()">Copiar</button>
        `;
    } else {
        outputDiv.innerHTML = '';
    }
}

function CopiarTexto() {
    let copiaTexto = document.getElementById('textoResultado').innerText;
    navigator.clipboard.writeText(copiaTexto)
        .then(() => {
            // alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    
    limpiarCaja();
}

function Desencriptar() {    
    let textoUsuario = document.getElementById('valorTexto').value;
    let textoDesencriptado = textoUsuario
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    let outputDiv = document.getElementById('outputText');

    if (textoDesencriptado.trim()) {
        outputDiv.innerHTML = `
            <p id="textoResultado">${textoDesencriptado}</p>
            <button class="botones__click" onclick="CopiarTexto()">Copiar</button>
        `;
    } else {
        outputDiv.innerHTML = '';
    }
}

function limpiarCaja() {
    document.getElementById('valorTexto').value = '';    
}
