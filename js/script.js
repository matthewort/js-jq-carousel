// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello sliderIn oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utilizziamo una classe first e last  per capire quali sono la prima e ultima immagine dello sliderUtilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello sliderBonus:
//
//     i pallini si evidenziano in accordo alla img corrispondente
//     Clicchiamo sui pallini e mostriamo l’immagine corrispondente
//     altro esempio: Generiamo i pallini con JS (ma quello che volete liberamente)
//
// Consiglio del giorno:
// Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili.
// Anche perchè qui come gestire eventi da tastiera dovrò vedermelo li.Come vi ho consigliato,  potete partire dal layout base visto in classe,

$(document).ready(function () {

  $(".next").click(nextImg);
  $(".prev").click(prevImg);


  $(document).keydown(function(e){
    if (e.keyCode == 37){ //left arrow clicked
      prevImg();
    } else if (e.keyCode == 39){//right arrow clicked
      nextImg();
    }
  });



  // FUNZIONI
  // funzione per l'avanti
  function nextImg() {

    var imgAttiva = $("img.active");
    imgAttiva.removeClass("active");

    // se dove sono è l'ultima img
    if (imgAttiva.hasClass("last")){
      // allora torna alla prima img
      $("img.first").addClass("active");
    } else {  // altrimenti
      // fai diventare attiva l'immaine successiva
      imgAttiva.next("img").addClass("active");
    }
  }

  // funzione per l'indietro
  function prevImg() {

    var imgAttiva = $("img.active");
    imgAttiva.removeClass("active");

    // se dove sono è la prima img
    if (imgAttiva.hasClass("first")){
      // allora torna all'ultima img
      $("img.last").addClass("active");
    } else {  // altrimenti
      // fai diventare attiva l'immaine precedente
      imgAttiva.prev("img").addClass("active");
    }
  }













































});
