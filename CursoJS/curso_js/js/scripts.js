//$(document).ready(function(){ // comando para esperar a pagina ser carregada antes de executar o java script

    // Aula 3 - variaveis
    // var latitude = 40.87663;
    // var longitude = -8.08373;

    // console.log(latitude);
    // console.log(longitude);

    // Aula 4 - strings
    // var nome = "João";  // podem ser usadas aspas duplas
    // var sobrenome = 'Gomes';  // ou aspas simples
    // var cpf = '111.111.111-11';  
    // var telefone = "998887655";
    // var ddd = '21';
    // var email = 'joao@gmail.com';
    // var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

    // console.log("Nome completo: " + nome + " " + sobrenome);
    // console.log("Numero telefone: " + ddd + "-" + telefone);
    // console.log("Primeira letra do nome: " + nome[0]);
    // console.log("Ultima letra do nome: " + nome[3]);

    // console.log("Numero de caracteres do telefone: " + telefone.length);

    // Aula 5 - numeros
    // var num1 = 20;
    // var num2 = 3;

    // var soma = num1 + num2;
    // var subtracao = num1 - num2;
    // var divisao = num1 / num2;
    // var multiplicacao = num1 * num2;

    // var media = (num1 + num2) / 2;
    // console.log("A media e: " + media);

    // console.log(Math.pow(num1,4));

    // var increment = 20;
    // increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
    // console.log(increment); // O console mostrará 25

    // // esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

    // increment = 1;
    // increment *= 5;
    // console.log(increment); // O console mostrará 6

    // increment = 10;
    // increment--;
    // increment--;
    // console.log(increment);

    // var ddd = 21;
    // var telefone = 998887655;

    // var dddString = ddd.toString();
    // var telefoneString = telefone.toString();

    // console.log(dddString+telefoneString);

    // var idade = "17";

    // idade = parseInt(idade);
    // idade++;
    // console.log(idade);

    // Aula 6 - tipos de dados booleanos

    // var idade = 65;
    // var teste = idade !== 65; // === serve para checar se o valor e igual
    //                          // != serve para checar se o valor NAO e igual
    //                          // !== checar se o valor ou tipo nao sao diferentes

    // console.log(teste);

    // var vtype = 65;

    // console.log(typeof vtype == "number");

    // Aula 7 - tipos de dados null e undefined

    // var undf;

    // console.log(typeof undf);

    // var nome = "Pedro";

    // console.log(nome[5]);

    // var temperatura = 35;
    // console.log(temperatura);

    // temperatura = null;
    // console.log(temperatura);

    // console.log(typeof temperatura);

    // Aula 10 = trabalhando com DOM

    // document.getElementById("caixa_amarela").innerHTML = "<h1>" + "Caixa amarela" + "<h1>";
    // pega o conteudo do elemento HTML escolhido entre parenteses 

    // var conteudo = document.getElementById("caixa_azul").innerHTML;
    // document.getElementById("caixa_azul").innerHTML = "<h1>" + conteudo + "<h1>";
    // pega o conteudo da caixa azul e guarda em uma variavel, depois usa a 
    // variavel para aplicar a configuracao 

    // Aula 11 - funcoes

    // function somaNumeros()
    // {
    //     var x = 5;
    //     var y = 2;
    //     var soma = x + y;
    //     console.log(soma);
    // }

    // somaNumeros();

    // function somaArgs(num1,num2)
    // {
    //     var soma = num1 + num2;
    //     return soma;
    // }

    // function valorImc(peso, altura)
    // {
    //     var imc = peso / (altura * altura);
    //     return imc;
    // }

    // var meuPeso = parseFloat(document.getElementById("peso").innerHTML);

    // var minhaAltura = parseFloat(document.getElementById("altura").innerHTML);

    // var meuImc = valorImc(meuPeso,minhaAltura);

    // var meuPeso = document.getElementById("imc").innerHTML = meuImc.toFixed(2); 
    // // toFixed = corta para 2 casas decimais

    // Aula 12 - arrays

    // var alunos = [ "João" , "Maria", "José" ];
    // var num_primos = [ 2, 3, 5, 7, 11, 13 ];

    // console.log(alunos.length);
    // console.log(num_primos[2]);

    // var grupos = [ 
    //     [ "João" , "Maria" ],
    //     [ "Pedro" , "Joana", "André", "Júlio" ],
    //     [ "Carolina" , "Helena", "Marcelo" ]
    // ];

    // console.log(grupos.length);
    // console.log(grupos[1][1]);

    // var cursos = [ "HTML", "Python", "PHP" ];

    // cursos.push("Javascript"); // adiciona ao final do array

    // console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

    // cursos.unshift("Bootstrap"); // adiciona no comeco do array

    // console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

    // cursos.pop(); // remove o ultimo objeto do array

    // console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

    // cursos.shift(); // remove o primeiro objeto do array

    // console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]

    // alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];
    // console.log(alunos.slice(0,3)); // tras os elementos do array do intervalo definido

    // Aula 13 - objetos
    // var funcionario = {
    //     'nome': 'Pedro Souza Gomes',
    //     'ano_nasc': 1972,
    //     'cpf': '111.111.111.11',
    //     'cargo': 'Analista de Sistemas'
    // };

    // console.log(funcionario.nome);
    // console.log(funcionario.ano_nasc);

    // funcionario.cargo = "Gerente de TI";
    // funcionario.cnh = "178956863" // criando novo atributo no objeto
    // console.log(funcionario);

    // var cursos = [
    //     {
    //         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
    //         'avaliacoes': 680,
    //         'alunos': 2300,
    //         'categorias': ['programacao', 'tecnologia']
    //     },

    //     {
    //         'titulo': 'Aprenda PHP e faça sites dinâmicos',
    //         'avaliacoes': 180,
    //         'alunos': 350,
    //         'categorias': ['desenvolvimento web', 'programacao']
    //     },

    //     {
    //         'titulo': 'Excel do Zero ao Avançado',
    //         'avaliacoes': 420,
    //         'alunos': 1800,
    //         'categorias': ['produtividade', 'gestão']
    //     }
    // ];

    // console.log(cursos[1].categorias[0]);

    // cursos[2].categorias[1] = "administracao de empresas";
    // console.log(cursos[2].categorias[1]);

    // Aula 14 - metodos e objetos
    // var aluno =
    // {
    //     "nome": "Maria",
    //     "sobrenome": "Pereira",
    //     "anoNascimento": 1992,
    //     "nomeCompleto": function()
    //      {
    //         return this.nome + " " + this.sobrenome;
    //      },

    //      "calculaIdade": function()
    //      {
    //          return 2021 - this.anoNascimento;
    //      }
    // };

    // console.log(aluno.nomeCompleto());
    // console.log(aluno.calculaIdade());

    // // Aula 16 - eventos
    // // acao quando clica
    // document.getElementById("click-me").onclick = function() 
    // {
    //     alert("Voce clicou no botao!");
    // }
    // // acao quando o mouse passa por cima
    // document.getElementById("hover-me").onmouseover = function()
    // {
    //     alert("Voce passou pelo botao!");
    // }
    // // acao quando o mouse sai
    // document.getElementById("leave-me").onmouseout = function() 
    // {
    //     alert("Voce saiu do botao!");
    // }

    // document.onkeydown = function() {
    //     alert('Você apertou alguma tecla');
    // };

    // document.onkeydown = function() {
    //     alert('Você apertou a tecla: ' + event.keyCode);
    // };

    // function button_clicked()
    // {
    //     alert("Voce clicou no botao");
    // }

    // Aula 17 - manipulacao do css
    // document.getElementById("botao_cor").onclick = function()
    // {
    //     this.style.transform = "translateX(100px)"
    //     this.style["background-color"] = "purple";
    // }

    // Aula 18 - outros metodos getElement
    // pega os elementos da classe do paremetro
    // var ex = document.getElementsByClassName("exemplo");

    // ex[0].innerHTML = "teste1";

    // console.log(ex);

    // var ex = document.getElementsByTagName("p");

    // console.log(ex);

    // Aula 19 - loops for e for/in
    // for(var i = 0; i < 5; i++)
    // {
    //     console.log(i);
    // }

    // var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

    // for (var a = 0; a < alunos.length ; a++) {
    //     console.log(alunos[a]);
    // }

    // var carro = {
    //     'Ano': 2018,
    //     'Modelo': 'Fox',
    //     'Cilindradas': '1.8',
    //     'Combustível': 'Gasolina'
    // }

    // for(var prop in carro) // for para percorrer os atributos de um objeto
    // {
    //     console.log(prop + ": " + carro[prop]);
    // }

    // var elementos = document.getElementsByTagName("p");

    // console.log(elementos);

    // for(var c = 0; c < elementos.length; c++)
    // {
    //     elementos[c].style.color = "orange";
    //     elementos[c].style["font-weight"] = "bold";
    // }

    // Aula 19 - loops while e do/while

    // var c = 0;

    // var elementos = document.getElementsByTagName("p");

    // console.log(elementos);

    // while(c < elementos.length)
    // {
    //    elementos[c].style.color = "orange";
    //    elementos[c].style["font-weight"] = "bold";
    //    c++;
    // }

    // var count2 = 10;

    // do{
    //     console.log(count2);
    //     count2++;
    // }while(count2 < 5);

    // Aula 21 - condicionais

    // var idade = 18;

    // if(idade < 18)
    // {
    //     console.log("Menor de idade");
    // }
    // else if(idade == 18)
    // {
    //     console.log("Tem 18 anos")
    // }
    // else
    // {
    //     console.log("Maior de idade");
    // }

    // var nota = 8;
    // var faltas = 5;

    // if(nota >= 7 && faltas <= 4)
    // {
    //     console.log("Aprovado")
    // }
    // else
    // {
    //     console.log("Reprovado")
    // }

    // if(nota <= 7 || faltas > 4)
    // {
    //     console.log("Reprovado");
    // }
    // else
    // {
    //     console.log("Aprovado");
    // }

    // var nome = "";

    // if(nome)
    // {
    //     console.log("Nome: " + nome);
    // }
    // else
    // {
    //     console.log("Nome nao informado");
    // }

    // Aula 22 - alinhamentos de loops e condicionais

    // var socio = true;
    // var idade = 25;

    // if(socio == true || idade >= 65)
    // {
    //     console.log("O ingresso e gratis");
    // }
    // else
    // {
    //     if(idade < 18)
    //     {
    //         console.log("Preco a pagar: 6.00");
    //     }
    //     else
    //     {
    //         console.log("Preco a pagar: 12.00");
    //     }
    // }

    // var funcionarios = [  
    //     {
    //         'nome': 'Carlos Henrique da Silva',
    //         'idade': 45,
    //         'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
    //     },
    //     {
    //         'nome': 'Maria Helena Pereira',
    //         'idade': 32,
    //         'filhos': undefined
    //     },
    //     {
    //         'nome': 'José Feliciano Maia',
    //         'idade': 39,
    //         'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
    //     }
    // ];

    // var listElement = document.getElementById("filhos");
    // listElement.innerHTML = "";

    // for(var i = 0; i < funcionarios.length; i++)
    // {
    //     if(funcionarios[i].filhos )
    //     {
    //         var listaFilhos = funcionarios[i].filhos;

    //         for(var j = 0; j < listaFilhos.length; j++)
    //         {
    //             listElement.innerHTML += "<li>" + listaFilhos[j] + " - Filho de " + funcionarios[i].nome;
    //         }
    //     }
    // }

    // Aula 24 - BOM

    // window.onmousemove = function(e)
    // {
    //     if(e.pageY < 5)
    //     {
    //         alert("Nao perca os descontos exclusivos na sessao de promocoes");
    //     }
    // }

    // Aula 25 - local storage

    // window.localStorage.setItem("nome", "Caio");

    // console.log(localStorage["nome"]);

    // localStorage.removeItem("nome");

    // document.getElementById("enviar-nome").onclick = function()
    // {
    //    // guardar o nome digitado em local storage
    //     var nome = document.getElementById("nome-usuario").value;
    //     localStorage.setItem("nome", nome);

    //     // esconder o formulario
    //     document.getElementById("name-field").style.display = "none";

    //     // atualizar e mostrar mensagem de boas vindas
    //     document.getElementById("welcome-text").innerHTML = "Ola " + localStorage.nome 
    //         + ", tudo bem ? ";
    //     document.getElementById("not-me").innerHTML = "Nao e " + localStorage.nome + "?";
    //     document.getElementById("welcome-area").style.display = "initial";
    // }

    // if(localStorage.nome)
    // {
    //     // esconder o formulario
    //     document.getElementById("name-field").style.display = "none";

    //     // atualizar e mostrar mensagem de boas vindas
    //     document.getElementById("welcome-text").innerHTML = "Ola " + localStorage.nome 
    //     + ", tudo bem ? ";
    //     document.getElementById("not-me").innerHTML = "Nao e " + localStorage.nome + "?";
    //     document.getElementById("welcome-area").style.display = "initial";
    // }

    // document.getElementById("not-me").onclick = function()
    // {
    //     // remove nome do local storage
    //     localStorage.removeItem("nome");

    //     // esconder a mensagem de boas vindas
    //     document.getElementById("welcome-area").style.display = "none";

    //     // mostra o formulario
    //     document.getElementById("name-field").style.display = "initial";

    // }

    // Aula 26 - data e hora

    // var dataHoje = new Date();
    // // retorna o numedo do dia do mes
    // console.log(dataHoje.getDate());

    // var dataNascimento = "1980-03-01";
    // // retorna o ano em int
    // var anoNascimento = new Date("1980-03-01").getFullYear();
    // var anoAtual = new Date().getFullYear();
    // var idade = anoAtual - anoNascimento;

    // console.log(idade);

    // var data = new Date();

    // console.log(data.getTime() / 31536000000);

    // var dataEnvio = new Date("2018-03-20").getTime();
    // var dataEntrega = new Date("2018-04-06").getTime();

    // console.log(dataEnvio);
    // console.log(dataEntrega);

    // var resultado = (dataEntrega - dataEnvio) / 86400000;

    // document.getElementById("dias_entrega").innerHTML = resultado;

    // Aula 27 - metodos de tempo

    // console.log("Mensagem 1");

    // function funcao()
    // {
    //     console.log("Mensagem 2");
    // }

    // window.setTimeout(funcao,3000); // faz acoes apos o periodo de tempo definido


    // document.getElementById("mostrar-loader").onclick = function()
    // {
    //     document.getElementById("spinner-loader").style.display = "initial";

    //     function fazer()
    //     {
    //         document.getElementById("spinner-loader").style.display = "none";
    //     }

    //     window.setTimeout(fazer,5000);
    // }

    // var count = 0;

    // function acao()
    // {
    //     console.log(count);
    //     count++;
    //     if(count == 10)
    //     {
    //         window.clearInterval(inter); // para o intervalo
    //     }
    // }

    // var inter = window.setInterval(acao,1000); // repete uma acao apos um periodo de tempo

    // var hora = new Date().getTime(); // transforma em milisegundos
    // var relogio = new Date();

    // function acao()
    // {
    //     hora += 1000;
    //     relogio.setTime(hora);
    //     console.log(relogio);

    //     function formatarTempo(tempo)
    //     {
    //         if(tempo >= 0 && tempo <= 9)
    //         {
    //             var formatado = tempo.toString();
    //             formatado = "0" + formatado;
    //         }
    //         else
    //         {
    //             var formatado = tempo.toString();
    //         }

    //         return formatado;
    //     }

    //     document.getElementById("relogio").innerHTML = formatarTempo(relogio.getHours()) + ":" + formatarTempo(relogio.getMinutes()) + ":" + formatarTempo(relogio.getSeconds());
    // }

    // window.setInterval(acao,1000);

    // Aula 28 - switch

    // function valorPedagio(categoria)
    // {
    //     switch(categoria)
    //     {
    //         case '1':
    //             {
    //                 return 11.22;
    //                 break;
    //             }
    //         case '2':
    //             {
    //                 return 22.45;
    //                 break;
    //             }
    //         case '3':
    //             {
    //                 return 16.88;       
    //                 break;
    //             }
    //         case '4':
    //             {
    //                 return 33.65;
    //                 break;
    //             }
    //         default:
    //             {
    //                 return "categoria nao encontrada.";
    //             }
    //     }
    // }

    // var categoriaVeiculo = "3";

    // console.log(valorPedagio(categoriaVeiculo));

    // categoriaVeiculo = "2";

    // console.log(valorPedagio(categoriaVeiculo));

    // categoriaVeiculo = "5";

    // console.log(valorPedagio(categoriaVeiculo));

    // Aula 29 - break e continue

    // var x = 0;

    // while(x < 10)
    // {
    //     console.log(x);
    //     x++;

    //     if(x == 5)
    //     {
    //         break;
    //     }
    // }

    // var lista = [1,5,9,33,56,89,100,122,145,189,190,199,205,290];

    // for(a = 0; a < lista.length; a++)
    // {
    //     if(lista [a] == 33)
    //     {
    //         console.log("Valor encontrado.")
    //         break;
    //     }

    //     console.log("Tentativa: " + a);
    // }

    // var num = 0;

    // while(num < 20)
    // {
    //     if(num % 2 == 0)
    //     {
    //         num++;
    //         continue; // pula o resto da passagem e voltar para o looping
    //     }

    //     console.log(num);
    //     num++;
    // }

    // Aula 28 - formularios

    // select box

    // document.getElementById("mostrar_opcao").onclick = function()
    // {
    //     // var campoSelect = document.getElementById("options");
    //     // var indiceSelecionado = campoSelect.options.selectedIndex;
    //     // var valorSelecionado = campoSelect.options[indiceSelecionado].innerHTML; 
    //     // document.getElementById("opcao_selecionada").innerHTML = valorSelecionado;

    //     var valorSelecionado = document.getElementById("options").value;
    //     document.getElementById("opcao_selecionada").innerHTML = valorSelecionado;

    //     document.getElementById("options").value = "opt3";
    // }

    // // radio buttons

    // document.getElementById("mostrar_radio").onclick = function () {

    //     var radio = document.getElementsByName("genero");

    //     var radioSelected;
        
    //     for(a=0; a < radio.length; a++)
    //     {
    //         if(radio[a].checked)
    //         {
    //             radioSelected = radio[a].value;
    //             break;
    //         }
    //     }

    //     document.getElementById("radio_selecionado").innerHTML = radioSelected;
    // }

    // check boxes

    // document.getElementById("mostrar_check").onclick = function()
    // {
    //     document.getElementById("check_selecionado").innerHTML = "";

    //     var check = document.getElementsByName("interesse");

    //     for(a = 0; a < check.length; a++)
    //     {
    //         if(check[a].checked)
    //         {
    //             document.getElementById("check_selecionado").innerHTML += "<li>" + check[a].value + "</li>";
    //         }
    //     }
    // }

    // data

    // document.getElementById("mostrar_data").onclick = function ()
    // {
    //     var dataSelect = document.getElementById("data_evento").value;
    //     var dataComp = new Date(dataSelect);
    //     document.getElementById("data_selecionada").innerHTML = dataComp;
    // }

    // Aula 31 - o evento onchange

    // document.getElementById("escolaridade").onchange = function () 
    // {
    //     var campo_select = document.getElementById("escolaridade");
    //     var indice_selecionado = campo_select.options.selectedIndex;
    //     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    //     document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;
    // };

    // var check = document.getElementsByName("lanche");

    // for (var a = 0;  a < check.length; a++) {

    //     check[a].onchange = function () {

    //         document.getElementById("check_selecionado").innerHTML = "";
            
    //         for (var b = 0;  b < check.length; b++) {
                
    //             if (check[b].checked) {
    //                 document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
    //             }
    //         }
    //     }  
    // }

    // Aula 34 - jquery - sintaxe

    // $("#esconder").click(function(){
    //     $(".exemplo").hide();
    // });

    // Aula 35 - jquery - manipulacao do conteudo HTML

    // var conteudoHTML = $("#paragrafo-text").html();
    // console.log(conteudoHTML);

    // $("#paragrafo-text").html("Mudar o conteudo do paragrafo");

    // conteudoHTML = $("#paragrafo-html").html();
    // console.log(conteudoHTML);

    // var urlLink = $("#paragrafo-link").attr("href");
    // console.log(urlLink);

    // $("#paragrafo-link").attr("href", "http://www.udemy.com");

    // var urlLink = $("#paragrafo-link").attr("href");
    // console.log(urlLink);

    // $("#mudar_imagem").click(function(){
    //     $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    //     $("#mudar_imagem").hide();
    // });

    // $("#paragrafo-empty").remove();

    // Aula 36 - jquery - loop each

    // var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

    // // mesmo que o foreach no C#
    // $.each(lista, function(indice, valor){
    //     console.log("O elemento de indice [" + indice + "] tem o valor de " + valor);
    // });

    // // Aplicação do loop each em um objeto:
    // var pessoa = {
    //     'nome': 'João Pedro',
    //     'DN': '20/01/1990',
    //     'CPF': '111.111.111-11'
    // };

    // $.each(pessoa, function( chave, valor ) {
    //     console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
    // });

    // var lista = $("#interesses li") // funcao para trazer todos os li do ul especificado

    // console.log(lista);

    // $.each(lista, function(chave, valor) // loop para passar por cada linha da lista
    // {
    //     console.log($(valor).text()); // metodo usado para trazer o texto do html
    // });

    // Aula 37 - jquery - formularios

    // var conteudoInput = $("#campo_nome").val(); // pega o valor do campo especificado

    // console.log(conteudoInput);

    // console.log($('#options').val());

    // console.log($('#options').find(":selected").text()); // especifica um objeto e encontra um atributo

    // $("#options").change(function(){
    //     var novo_selecionado = $('#options').find(":selected").text();
    //     console.log(novo_selecionado);
    // });

    // $("input[name='genero']:checked").parent("span").text(); // pega o texto do radio button

    // $("input[name='interesse']").change(function() {

    //     var checkboxes_selecionados = $("input[name='interesse']:checked");
    //     var textos = [];
        
    //     $.each(checkboxes_selecionados, function( index, value ) {
            
    //         textos.push($(value).parent("span").text());
        
    //     });
        
    //     console.log(textos);
    // });

    // Aula 37 - jquery - manipulacao de css

    // // Adicionar classe:
    // $("#adicionar_classe").click(function(){
    //     $("#paragrafo-classes").addClass("styling");
    // });

    // // Remover classe:
    // $("#remover_classe").click(function(){
    //     $("#paragrafo-classes").removeClass("styling");
    // });

    // // Alternar classe:
    // $("#alternar_classe").click(function(){
    //     $("#paragrafo-classes").toggleClass("styling");
    // });

    // Aula 38 - jquery - eventos

    // $("#nome").keyup(function(){
    //     var conteudo = $("#nome").val();

    //     console.log("teste");
    //     if(conteudo != "")
    //     {
    //         $("#confirmar").css("display", "initial");
    //     }
    //     else
    //     {
    //         $("#confirmar").css("display", "none");
    //     }
    // });

    // Aula 40 - jquery - efeitos

    // $("#botao-esconder").click(function(){
    //     $(this).hide(1000,function(){
    //         $("#texto-escondido").show();
    //     });
    // });

    // $("#toggle-tab").click(function(){
    //     $("#tab-content").slideToggle();
    //     $("#toggle-tab").toggleClass("flip");
    // });

    // Aula 41 - jquery - animate

    // $("#animar").click(function(){
    //     $("#quadrado").animate({
    //         width: "+=100px"
    //     },5000);
    //     $("#quadrado").animate({
    //         height: "+=100px"
    //     },5000);
    // });

    // Aula 42 - jquery - metodos em cadeia

    // $("#animar").click(function(){
    //     $("#quadrado").animate({
    //         width: "+=100px"
    //     },800).animate({
    //         height: "+=100px"
    //     },800, function(){
    //         $("#quadrado").css("background-color","green");
    //     });
    // });

    // Aula 43 - funcoes callback

    // function pegar_usuario(callback)
    // {
    //     window.setTimeout(function(){
    //         var u = {
    //             'nome': 'João'
    //         };

    //         callback(u);

    //     },2000);
    // }
            
    // pegar_usuario(function(user){
    //     console.log('Olá ' + user.nome + ', como vai?');
    // });

    // Aula 44 - lidando com erros

    // function pegar_usuario(){

    //         var u = {
    //             'nome': 'João'
    //         };
    //         return u;
    // }
            
    // function saudar_usuario(user) {
    //     console.log('Olá ' + user.nome + ', como vai?');
    // }
            
    // var user = {"nome": ""};

    // try{
    //     if(user.nome == "")
    //     {
    //         throw "Nome em branco";
    //     }
    //     saudar_usuario(user);
    // }
    // catch(err)
    // {
    //     console.log(err);
    // }

    // Aula 45 - operador if ternário

    // var nome = "Caio";
    //    var mensagem = "";

    // if(nome)
    // {
    //     mensagem = "Ola " + nome;
    // }
    // else
    // {
    //     mensagem = "Nome nao informado";
    // }

    // mensagem = nome ? "Ola " + nome : "Nome nao informado";

    // console.log(mensagem);

    // var nome = "";
    // var idade = "";

    // mensagem = (nome && idade) ? "Ola " + nome + ", voce tem " + idade + " anos"
    //          : (!nome && !idade) ? "Nome e idade nao informados"
    //          : (!idade ) ? "Idade nao informada"
    //          : "Nome nao informado";

    // console.log(mensagem);

    // Aula 46 - escopo

    // function criar_nome() {
    //     nome = 'Maria';
    //     console.log(nome); // O console mostrará 'Maria'
    // }

    // criar_nome();

    // console.log(window.nome);

    // var x = 0;

    // if(x == 0)
    // {
    //     let nome = "Mariana"; // key word para criar variavel local em estruturas de bloco
    // }

    // console.log(nome);

    // for(let a = 0; a < 5; a++)
    // {
    //     console.log(a);
    // }

    // const PI = "3,14159"; // key word para criar variavel com valor constante

    // Aula 47 - namespaces

    // var meuWebApp = {

    //     "nome": "Felipe",

    //     "verNome": function()
    //     {
    //     console.log(meuWebApp.nome);
    //     }
    // };

    // var meuWebApp = (function(){
    //     var nome = "Felipe";
    //     return {
    //         "verNome": function(){
    //             return nome;
    //         },
    //         "mudarNome": function(novoNome){
    //             nome = novoNome;   
    //         },
    //         "apagarNome": function()
    //         {
    //             nome = null;
    //         }
    //     }
    // })(); // quando a variavel for criada e funcao vai ser executada automaticamente

    // meuWebApp.mudarNome("Caio");
    // console.log(meuWebApp.verNome());

    // Aula 48 - JSON

    // var funcionario = {
    //     'nome': "Fernanda Costa",
    //     'd_nascimento': '1988-10-01',
    //     'CPF': '111.111.111-11'
    // };

    // var funcionarioJson = JSON.stringify(funcionario); // convertar um objeto para json
    // console.log(funcionarioJson);

    // var funcionarioString = JSON.parse(funcionarioJson);
    // console.log(funcionarioString.nome);

    // Aula 51 - ajax request

    // function mostrarTemperatura(dados){
    //     var dadosObj = JSON.parse(dados);
    //     console.log("A temperatura em Londres é de " + dadosObj.main.temp);
    // }

    // function mostrarDados(dados){
    //     var dadosObj = JSON.parse(dados);
    //     console.log(dadosObj);
    // }

    // function tempoLondres(callback){
    //     var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    //     xhttp.onreadystatechange = function() {
    //         if (this.readyState == 4 && this.status == 200) {
    //             callback(this.responseText);
    //         }
    //     };

    //     xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London&appid=e402b4e5e60c84334f42cb1f088863e8");
    //     xhttp.send();
    // }

    // tempoLondres(mostrarTemperatura);
    // tempoLondres(mostrarDados);

    // Aula 52 - ajax com jquery

    // $.ajax({
    //     url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=e402b4e5e60c84334f42cb1f088863e8", 
    //     type: "GET",
    //     dataType: "json",
    //     success: function(data){
    //         $("#temp_atual").html(data.main.temp);
    //         $("#temp_max").html(data.main.temp_max);
    //         $("#temp_min").html(data.main.temp_min);
    //     },
    //     error: function()
    //     {
    //         console.log("Error na requisição");
    //     }
    // });
//});