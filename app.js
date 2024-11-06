

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