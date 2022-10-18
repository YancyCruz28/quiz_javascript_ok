//captura por consola de datos formulario

function register(){
    let users = {
      
        name:document.getElementById('nombre').value,
        lastName:document.getElementById('apellido').value,
        age:document.getElementById('edad').value,
        ocupation:document.getElementById('cargo').value,
        rh:document.getElementById('rh').value,
        ident:document.getElementById('ident').value,
        phone:document.getElementById('telefono').value,
        acept:document.getElementById('dato').checked,
    }
   
    
        if(users.name === '' || users.lastName === '' || users.age === ''
        || users.ocupation === '' || users.rh === '' || users.ident === ''||
        users.phone === ''|| users.phone === ''){ 
              return alert('Todos los campos son obligatorios');
        };

        if(users.acept !== true){
           return alert('Por favor acepta las politicas para poder completar el registro')
        }
    
       
            console.log(users);
        return
}

   
