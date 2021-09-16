const close = () =>{
    let closeBtn = document.querySelectorAll('.close');
  
// funcion a medias, hacer que sirva para capturar el evento click y asi darle funcionalidad al boton cerrar
    closeBtn.forEach(
        (element) => {
            element.style.backgroundColor = 'red';
        }
    )
    return closeBtn;
}

close()