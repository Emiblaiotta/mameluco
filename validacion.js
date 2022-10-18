const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const check = {
        Nombre: true,
        Email: true,
}

const validar = (e) => {
    switch (e.target.name) {
        case "name":
            if (expresiones.nombre.test(e.target.value)){
                document.getElementById('group_form').classList.remove('form_group-incorrecto');
                document.getElementById('group_form').classList.add('form_group-correcto');
                document.querySelector('#group_form i').classList.remove('fa-circle-xmark');
                document.querySelector('#group_form i').classList.add('fa-circle-check');
                document.querySelector('#group_form .formulario__input-error').classList.remove('formulario__input-error-active');
                check['Nombre']=true;
            } else {
                document.getElementById('group_form').classList.add('form_group-incorrecto');
                document.getElementById('group_form').classList.remove('form_group-correcto');
                document.querySelector('#group_form i').classList.remove('fa-circle-check');
                document.querySelector('#group_form i').classList.add('fa-circle-xmark');
                document.querySelector('#group_form .formulario__input-error').classList.add('formulario__input-error-active');
                check['Nombre']=false;
            }
        break;
        case "email":
            if (expresiones.correo.test(e.target.value)){
                document.getElementById('group_correo').classList.remove('form_group-incorrecto');
                document.getElementById('group_correo').classList.add('form_group-correcto');
                document.querySelector('#group_correo i').classList.remove('fa-circle-xmark');
                document.querySelector('#group_correo i').classList.add('fa-circle-check');
                document.querySelector('#group_correo .formulario__input-error').classList.remove('formulario__input-error-active');
                check['Email']=true;
            } else {
                document.getElementById('group_correo').classList.add('form_group-incorrecto');
                document.getElementById('group_correo').classList.remove('form_group-correcto');
                document.querySelector('#group_correo i').classList.remove('fa-circle-check');
                document.querySelector('#group_correo i').classList.add('fa-circle-xmark');
                document.querySelector('#group_correo .formulario__input-error').classList.add('formulario__input-error-active');
                check['Email']=false;
            }
        break;
        //case "mensaje":
        //    if (formulario.mensaje.value == 0) {
        //        document.getElementById('group_mensaje').classList.add('form_group-incorrecto');
        //break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validar);
    input.addEventListener('blur', validar);
});

formulario.addEventListener('submit',(e) => {
    e.preventDefault();

const terminos = document.getElementById('terminos');
if(check.Nombre && check.Email && terminos.checked){
    formulario.reset();

    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-active');
    document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-active');
    setTimeout(() => {
        document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-active');
    }, 5000);
    
    check['Nombre']=false;
    check['Email']=false;

    document.querySelectorAll('.form_group-correcto').forEach((icono) => {
        icono.classList.remove('form_group-correcto');
    });
} else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-active');
}
});