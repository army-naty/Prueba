// js Tooltip bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
//Js propio
let formContacto = document.getElementById("form-contacto");
let enviarFormulario = document.getElementById("btn-contacto");
enviarFormulario.addEventListener('click', function(event) {
    event.preventDefault();
    alert("El mensaje fue enviado correctamente.");
    formContacto.reset();
})