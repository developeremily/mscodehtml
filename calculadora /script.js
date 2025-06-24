$(document).ready(function() {
    $('#btnSomar').click(function() {
        let n1 = Number($('#n1').val());
        let n2 = Number($('#n2').val());
        let soma = n1 + n2;
        $('#resSoma').text(`A soma de ${n1} + ${n2} é igual a: ${soma}`);
    });

    $('#btnSubtrair').click(function() {
        let n3 = Number($('#n3').val());
        let n4 = Number($('#n4').val());
        let subtracao = n3 - n4;
        $('#resSub').text(`A subtração de ${n3} - ${n4} é igual a: ${subtracao}`);
    });

    $('#limparSoma').click(function() {
        $('#n1').val('');
        $('#n2').val('');
        $('#resSoma').text('Resultado:');
    });

    $('#limparSub').click(function() {
        $('#n3').val('');
        $('#n4').val('');
        $('#resSub').text('Resultado:');
    });
});
