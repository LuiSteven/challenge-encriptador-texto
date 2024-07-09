/*
:root{
    --color-primario: #D8DFE8;
    --color-secundario: #F6F6F6;
    --color-terciario: #22D4FD;

    --fuente-montserrat: "Montserrat", sans-serif;
    --fuente-krona: "Krona One", sans-serif;    
}

.header {    
    padding: 2% 0% 0% 15%;
}

body {
    background-color: var(--color-primario);
    color: var(--color-secundario);
    box-sizing: border-box;
}

.presentacion {
    display: flex;
    align-items: center;
    margin: 6% 15%;
    justify-content: space-between;
    gap: 82px
}

.presentacion__botones {
    display: flex;
    justify-content: space-between;    
    align-items: center; 
    gap: 32px 
}

.presentacion__resctangulo__base{
    z-index: 1;
}
------------------------

:root {
    --color-primario: #D8DFE8;
    --color-secundario: #F6F6F6;
    --color-terciario: #22D4FD;
    --color-texto: #0A3871;
    --color-boton: #007DF4;
    --color-boton-hover: #005bb5;

    --fuente-montserrat: "Montserrat", sans-serif;
    --fuente-krona: "Krona One", sans-serif;    
}

body {
    font-family: var(--fuente-montserrat);
    margin: 0;
    padding: 0;
    background-color: var(--color-secundario);
    color: var(--color-texto);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

header {
    background-color: var(--color-primario);
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.presentacion__imagen {
    max-width: 100px;
}

.presentacion {
    background-color: var(--color-primario);
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.presentacion__contenido {
    flex: 1;
    margin-right: 20px;
}

.presentacion__contenido input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid var(--color-terciario);
    border-radius: 5px;
    font-size: 1rem;
    box-sizing: border-box;
}

.presentacion__botones {
    margin-top: 10px;
}

.presentacion__botones label {
    display: block;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: var(--color-texto);
}

.presentacion__botones button {
    background-color: var(--color-boton);
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.presentacion__botones button:hover {
    background-color: var(--color-boton-hover);
}

.presentacion__botones p {
    margin-top: 10px;
    font-size: 1rem;
}

.presentacion__rectangulo {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 400px;
}

.presentacion__rectangulo__base {
    max-width: 50%;
}

.presentacion__rectangulo__imagen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%;
}

.presentacion__rectangulo__parrafo {
    font-size: 1rem;
    color: var(--color-texto);
    margin-top: 20px;
    max-width: 100%;
}

.presentacion__rectangulo_parrafo_strong {
    font-family: var(--fuente-krona);
    font-size: 1.2rem;
    color: var(--color-terciario);
    display: block;
    margin-bottom: 10px;
}

footer {
    background-color: var(--color-primario);
    width: 100%;
    padding: 10px 0;
    text-align: center;
    position: absolute;
    bottom: 0;
}
*/