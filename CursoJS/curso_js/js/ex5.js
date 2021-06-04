// // 1)
// function pegar_paises(callback){

//         $.ajax({
//             url : "https://restcountries.eu/rest/v2/all",
//             type: "GET",
//             dataType: "json",
//         }).done(function(data){
//             callback(data);
//             }).fail(function(){
//             console.log("Erro na requisição");
//         });
// }
// function popular_paises(paises){
//     for(var a = 0 ; a<paises.length; a++){
//         document.getElementById("paises").innerHTML += '<option selected value ="' +paises[a].alpha3code + '">' + paises[a].name +'</option>';
//     }
// }

// pegar_paises(popular_paises);

// // 2)

// var cursos = [
//     {
//         "titulo": "PHP",
//         "aval": []
//     },
//     {
//         "titulo": "Javascript",
//         "aval": [5,5,4.5,4,5,5,5,4.5]
//     },
//     {
//         "titulo": "Python",
//         "aval": [5,5,4,4,5,3,5,4,4,5]
//     },
//     {
//         "titulo": "Machine Learning",
//         "aval": [5,5,4.5]
//     }
// ];

// function media_aval(lista_curso){
//     for(var a=0; a < lista_curso.length; a++){
//         try{
//             if (lista_curso[a].aval.length == 0){
//                 throw 'Curso' + lista_curso[a].titulo + 'não possui avaliações. ';
//             }else if (lista_curso [a].aval.length <5){
//                 throw 'Curso' + lista_curso[a].titulo + 'possui menos de 5 avaliações. ';
//             }
//             var soma = 0;

//             for(var b =0; b <lista_curso[a].aval.length; b++){
//                 soma += lista_curso[a].aval[b];
//             }
//             var media = soma / lista_curso[a].aval.length;
//             console.log('Curso' +lista_curso[a],titulo + 'tem média de avaliações' + media.toFixed(2));
//         }
//         catch(err){
//             console.log(err);
//         }
//     }
// }
// media_aval(cursos);

// // 3)


// var theUserNamespace = {
//     'usuarios':{
//      "33884h": "João Gomes",
//      "43585f": "Maria Luisa",
//      "93661h": "Pedro Henqrique",
//      "23172g": "Paula Carvalho",
//     },
//     'acessos' :[
//         {
//             "usuario": "33884h",
//             "data": "10/07/18"
//         },
//         {
//             "usuario": "33884h",
//             "data": "11/07/18"
//         },
//         {
//             "usuario": "43585f",
//             "data": "19/07/18"
//         },
//         {
//             "usuario": "93661h",
//             "data": "24/07/18"
//         },
//         {
//             "usuario": "23172g",
//             "data": "13/08/18"
//         },
//         {
//             "usuario": "93661h",
//             "data": "14/08/18"
//         }
//     ],
//     'imprimir_acessos' :function(){
//         for (var a = 0; a< this.acessos.length; a++ ){
//             $("#acessos").append('<li> Acesso de '+ this.usuarios[this.acessos[a].usuario]  +', no dia '+ this.acessos[a].data + ' <li> ')
//         }
//     }
// }
// theUserNamespace.imprimir_acessos();

// // 4) desafio
// function shuffle(array) {
//     let counter = array.length;

//     // While there are elements in the array
//     while (counter > 0) {
//         // Pick a random index
//         let index = Math.floor(Math.random() * counter);

//         // Decrease counter by 1
//         counter--;

//         // And swap the last element with it
//         let temp = array[counter];
//         array[counter] = array[index];
//         array[index] = temp;
//     }

//     return array;
// }

//  function pegar_pergunta(callback){
    
//          $.ajax({
//             url : "https://opentdb.com/api.php?amount=1&category=11",
//             type: "GET",
//             dataType: "json",
//          }).done(function(data){
         
//             callback(data.results[0]);
//          }).fail(function(){
//              console.log("Erro na requisição");
//          });
//     }

// function gerar_pergunta(pergunta){
//     $("#pergunta").html(pergunta.question);
//     var resposta_correta = pergunta.correct_answer;
//     var respostas = pergunta.incorrect_answers;
//     respostas.push(resposta_correta);
//     respostas = shuffle(respostas);
  

//     for(a = 0; a < respostas.length; a++){
//         $("opcoes").append('<input type="radio" name="opcao" value="'+ respostas[a] +'"> ' + respostas[a] + '<br> ');
//     }

//     $("#opcoes input[name='opcao']").change(function(){
//         $("#submeter").show();
//     });
//     $("#submeter").click(function(){
//         var resposta_escolhida =  $("#opcoes input[name='opcao']:checked").val();
//         $("#submeter").hide();

//         if(respostas_escolhida == resposta_correta){
//             $("#erro_acerto").html("<span style='color: green'; font-weigth: bold'> Parabéns, você acertou! A resposta é :" + resposta_correta + "</span>");
//         }else {
//             $("#erro_acerto").html("<span style='color: red'; font-weigth: bold'> Você errou! A resposta é :" + resposta_correta + "</span>");
//         }
//         $("#opcoes input[name='opcao']").attr('disable',true);
//     });

// }



// pegar_pergunta(gerar_pergunta);