function mostrarAlerta(){

    let isChecked = document.getElementById('checkbox').checked;
    let email = document.getElementById('email').value;
    
    

    if (isChecked == false || email == '') {
        alert('Parece que nos falta algo...');
    } else {
        alert('¡Felicitaciones! Pronto escucharás de nosotros.');
    };

}; 