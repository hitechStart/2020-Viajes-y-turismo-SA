$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.example-popover').popover({
        container: 'body'
    });
    $('.carousel').carousel({
        interval: 2000
    })
    /*+++++++++++++++++++++Inicio de Eventos+++++++++++++++++++++++++++++++*/
    $('#contacto').on('show.bs.modal', function (e) {
        console.log('El modal se esta mostrando en consola');


        $('#contactoBtn').removeClass('btn-outline-success');
        console.log("El boton cambia de color");
        $('#contactoBtn').addClass('btn-primary');
        console.log("El boton ha cambiado su color");
        $('#contactoBtn').prop('disabled', true);
        console.log("El boton se desabilita");
    })
    $('#contacto').on('shown.bs.modal', function (e) {
        console.log('El modal se ha mostrado');
    })
    $('#contacto').on('hide.bs.modal', function (e) {
        console.log('El modal se esta ocultando');
    })
    $('#contacto').on('hidden.bs.modal', function (e) {
        console.log('El modal se ha ocultado');

        $('#contactoBtn').prop('disabled', false);
        console.log("El boton vuelve a activar");
        /*++++++++++++++++++++++++Fin de eventos+++++++++++++++++++++++++++++++++*/
    })
})