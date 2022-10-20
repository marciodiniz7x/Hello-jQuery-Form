// Carregamento inicial
$(document).ready(function() {

    // Script Seção 1) Digitação de nome em formulário.
    $("#aqui").click(function() {

        let nome = $('#nome').val();
        let saudacao = $('.saudacao');
        
        if (nome.length < 3) {
            alert('Por favor, seu nome deve conter pelo menos 3 caracteres.')
        } else {
            $("#nome").css("visibility", "hidden");
            $('#aqui').remove();
            $(".espacos1").remove();

            saudacao.html(`Olá, <strong>${nome}</strong>. Seu nome foi validado e será utilizado como referência em todo este ambiente.`);
        }

    })
    
    // Script Seção 2) Interação com botão em AJAX.
    $('#mais').click(function() {

        $('#mais').remove();
        $('.info').css("width", "500px")

        $.ajax({url:"conteudo.txt", success: function(resultado) {
            $('.info').html(resultado);
        }});
        
    });

    // Seção 3) Manipulando números com jQuery.
    $('.calcular').click(function() {

        let nome = $('#nome').val();
        let valor1 = Number($('.valor1').val());
        let valor2 = Number($('.valor2').val());
        let media = (valor1 + valor2) / 2;
        let res = $('.res')
        
        res.html(`<strong>${nome}</strong>, nosso sistema calculou a média entre <strong><span style="color: #f52af5;">${valor1}</span></strong> e <strong><span style="color: #f52af5;">${valor2}</span></strong>. <br> E o resultado foi: <strong> <span style="color: #f52af5;">${media}</span></strong>`)
    })
});