// Script Seção 1) Digitação de nome em formulário.
$(document).ready(function() {
    $("#aqui").click(function() {
        
        $("#nome").css("visibility", "hidden");
        $('#aqui').remove();
        $(".espacos1").remove();
        
        let nome = $('#nome').val();
        let saudacao = $('.saudacao');

        saudacao.html(`Olá, <strong>${nome}</strong>. Seu nome foi validado e será utilizado como referência em todo este ambiente.`);

       

    })
});
 

// Script Seção 2) Interação com botão em AJAX.
$(document).ready(function() {

    

    $('#mais').click(function() {

        $('#mais').remove();
        $('.info').css("width", "500px")

        $.ajax({url:"conteudo.txt", success: function(resultado) {
            $('.info').html(resultado);
        }});

       
    });


});