$(document).ready(function () {
    $('#carrossel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 1600,
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD)'
    });

    // $('#data-nascimento').mask ('__/__/____', {
    //     placeHolder '__/__/____'
    // });

    // $('#placa-carro').mask ('sss-0000', {
    //     placeHolder 'ABC-1234'
    // });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculo: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: { // This section should be outside the 'rules'
            nome: 'Por favor, digite seu nome',
            email: 'Por favor, digite seu email',
            telefone: 'Por favor, digite seu telefone',
            veiculo: 'Por favor, digite o veículo de interesse',
            mensagem: 'Por favor, digite a mensagem'
        },
        submitHandler: function (form) { // This section should be outside the 'rules'
            console.log(form);
            // Perform any additional actions on form submission
            form.reset(); // apaga o formulário depois do envio
            alert('Formulário enviado com sucesso!')
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`); //isso solta mensagem de erro p o usuario advertindo e solicitando as correções
            }
        }
    })

    // aqui abaixo, selecionei os botões que estão dentro da classe lista-veiculos e disse que no click, dispara a função;
    //cria uma var const com nome destino, que será rolado até #contato
    //depois selecionamos o html que será rolado (animada) até contato e atribuimos a ele uma função de animação até o topo. 
    //O 1000 é o atributo da duração da rolagem
    //sempre que clicar nos botões, vamos ser rolados até o campo de destino 

    $('.lista-veiculos button').click (function (){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text().trim();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})



