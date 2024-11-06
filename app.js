document.addEventListener('DOMContentLoaded', function() { var modal = document.getElementById('customAlert'); var closeButton = document.querySelector('.close-button'); 
// Mostrar la caja de diálogo personalizada al cargar la página
modal.style.display = 'block';
// Cerrar la caja de diálogo personalizada al hacer clic en el botón de cierre 
closeButton.onclick = function() { modal.style.display = 'none'; } 
// Cerrar la caja de diálogo personalizada al hacer clic fuera de la misma 
window.onclick = function(event) { if (event.target === modal) { modal.style.display = 'none';
} }

document.addEventListener('DOMContentLoaded', function () {
    var panel1 = document.getElementById('panel1');
    var panel3 = document.getElementById('panel3');
    var panel2 = document.querySelector('#panel2');

    var clickState = 0;

    panel1.onclick = function (event) {
        if (this.classList.contains('flipped')) {
            this.classList.remove('flipped');
        } else {
            this.classList.add('flipped');
        }
    }
    
    var back1 = panel1.querySelector('.back');
    back1.onclick = function (event) {
        panel1.classList.remove('flipped');
        event.stopPropagation();
    }

    panel3.onclick = function (event) {
        if (this.classList.contains('flipped')) {
            this.classList.remove('flipped');
        } else {
            this.classList.add('flipped');
        }
    }

    panel2.onclick = function (event) {
        if (clickState === 0) {
            panel1.classList.remove('flipped');
            panel1.style.zIndex = "4";
            clickState = 1;
        } else {
            panel3.classList.remove('flipped');
            clickState = 0;
        }
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     alert("Para poder checar las demas caras del Tríptico deberas dar clic primero en la cara del lado derecho y por ultimo en la cara del lado izquierdo");
// });  
})