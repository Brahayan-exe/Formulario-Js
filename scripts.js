const expresiones = {
usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
password: /^.{4,12}$/, // 4 a 12 digitos.
correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
celular: /^\d{10,14}$/ // 7 a 14 numeros.
}

const img1 =document.querySelector('#Usuario-img img:nth-child(1)');
const img2 =document.querySelector('#Usuario-img img:nth-child(2)');
const img3 =document.querySelector('#Nombres-img img:nth-child(1)');
const img4 =document.querySelector('#Nombres-img img:nth-child(2)');
const img5 =document.querySelector('#email-img img:nth-child(1)');
const img6 =document.querySelector('#email-img img:nth-child(2)');
const img7 =document.querySelector('#Celular-img img:nth-child(1)');
const img8 =document.querySelector('#Celular-img img:nth-child(2)');
const img9 =document.querySelector('#Contraseña-img img:nth-child(1)');
const img10 =document.querySelector('#Contraseña-img img:nth-child(2)');
const img11 =document.querySelector('#Contraseña2-img img:nth-child(1)');
const img12 =document.querySelector('#Contraseña2-img img:nth-child(2)');
const imgErr = document.querySelector('.formulario-envio img');

const prr1 = document.getElementById('campoErrores1');
const prr2 = document.getElementById('campoErrores2');
const prr3 = document.getElementById('campoErrores3');
const prr4 = document.getElementById('campoErrores4');
const prr5 = document.getElementById('campoErrores5');
const prr6 = document.getElementById('campoErrores6');

const imagenes = document.querySelectorAll('.formulario-imagenes img');
const parrafos = document.querySelectorAll('.campoErrores');
const errorEnvio = document.getElementById('campoErroresValue');
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('input');

const usuario = document.querySelector('#Usuario');
const nombres = document.querySelector('#Nombres');
const email = document.querySelector('#email');
const celular = document.querySelector('#Celular');
const contrasena = document.querySelector('#Contraseña');
const contrasena2 = document.querySelector('#Contraseña2');
const check = document.getElementById('checkbox');
const validacion = document.getElementById('campoErroresValue');


/*-- Pongo con una función de recorrido la clase inactive --*/
imagenes.forEach(imagen => {
    imagen.classList.add('inactive');
});

parrafos.forEach(parrafo => {
  parrafo.classList.add('inactive');
});

function err (envio){
  envio.classList.add('inactive');
};

errorEnvio.classList.add('inactive');
imgErr.classList.add('inactive');

const campos = {
    usuario: false, 
    nombres: false,
    email: false,
    celular: false,
    contrasena: false,
    contrasena2: false
}

console.log(campos);

/*validación de todos los campos*/ 

const validacionEscribir = (e) => {
  switch (e.target.name) {
    case "Usuario":
        if(expresiones.usuario.test(e.target.value)){
          usuario.classList.remove('rojo');
          img1.classList.remove('inactive');
          img2.classList.add('inactive');
          prr1.classList.add('inactive');
          campos.usuario=true;
        } else {
          usuario.classList.add('rojo');
          img1.classList.add('inactive');
          img2.classList.remove('inactive');
          prr1.classList.remove('inactive');
          campos.usuario=false;
        }
      break;
    
    case "Nombres":
          if(expresiones.nombre.test(e.target.value)){
            nombres.classList.remove('rojo');
            img3.classList.remove('inactive');
            img4.classList.add('inactive');
            prr2.classList.add('inactive');
            campos.nombres=true;
          } else {
            nombres.classList.add('rojo');
            img3.classList.add('inactive');
            img4.classList.remove('inactive');
            prr2.classList.remove('inactive');
            campos.nombres=false;
          }
      break;
    
    case "Contraseña":
      if(expresiones.password.test(e.target.value)){
        contrasena.classList.remove('rojo');
        img9.classList.remove('inactive');
        img10.classList.add('inactive');
        prr3.classList.add('inactive');
        campos.contrasena=true;
      } else {
        contrasena.classList.add('rojo');
        img9.classList.add('inactive');
        img10.classList.remove('inactive');
        prr3.classList.remove('inactive');
        campos.contrasena=false;
      }
      console.log(e.target.value);
      break;
    
    case "Contraseña2":
        console.log(e.target.value);
          if(contrasena.value !== (e.target.value)){
              contrasena2.classList.add('rojo');
              img11.classList.add('inactive');
              img12.classList.remove('inactive');
              campos.contrasena2=false;
            } else {
              contrasena2.classList.remove('rojo');
              img11.classList.remove('inactive');
              img12.classList.add('inactive');
              campos.contrasena2=true;
          }
      break;
    
    case "email":
      if(expresiones.correo.test(e.target.value)){
        email.classList.remove('rojo');
        img5.classList.remove('inactive');
        img6.classList.add('inactive');
        prr5.classList.add('inactive');
        campos.email=true;
      } else {
        email.classList.add('rojo');
        img5.classList.add('inactive');
        img6.classList.remove('inactive');
        prr5.classList.remove('inactive');
        campos.email=false;
      }
          
      break;
    
    case "Celular":
      if(expresiones.celular.test(e.target.value)){
        celular.classList.remove('rojo');
        img7.classList.remove('inactive');
        img8.classList.add('inactive');
        prr6.classList.add('inactive');
        campos.celular=true;
      } else {
        celular.classList.add('rojo');
        img7.classList.add('inactive');
        img8.classList.remove('inactive');
        prr6.classList.remove('inactive');
        campos.celular=false;
      }
      break;  
    
  }
    
 
};

inputs.forEach(input => {
    input.addEventListener('keyup',validacionEscribir);
    input.addEventListener('blur',validacionEscribir);

});


/*-- Evio que se recargue el submit del botón de envio tipo submit --*/
formulario.addEventListener('submit',e => {
  e.preventDefault();

  if(campos.usuario && campos.nombres && campos.email && contrasena && campos.contrasena2 && campos.celular && check.checked){
      formulario.reset();
      imagenes.forEach((imagen)=>{
        imagen.classList.add('inactive');
        imgErr.classList.remove('active');
        validacion.classList.add('inactive');
      });
  } else {
    validacion.classList.remove('inactive');
    imgErr.classList.add('active');
  }


});
