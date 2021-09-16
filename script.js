$(function () {

  let numbers = []; // array dove inserire i numeri del tabellone
  let numbers_released = []; // array dove inserire i numeri estratti

  //////////////////////////////////////////
  //AGGIUNGO I NUMERI NEL TABELLONE (1-90)//
  //////////////////////////////////////////

  for (let count = 1; count < 11; count++) {
    // aggiungo dinamicamente i numeri dentro la tabella...
    $("#tabella1").append(
      `<td style='animation-delay:0.${count}s;' class="animate__animated animate__backInLeft animate__slow"> ${count} </td>`
    );
    //... e li pusho nell'array numbers
    numbers.push(count);
  }
  for (let count = 11; count < 21; count++) {
    // aggiungo dinamicamente i numeri dentro la tabella...
    $("#tabella2").append(
      `<td style='animation-delay:0.${count}s;'class="animate__animated animate__backInRight animate__slow"> ${count} </style=>`
    );
    //... e li pusho nell'array numbers
    numbers.push(count);
  }
  for (let count = 21; count < 31; count++) {
    // aggiungo dinamicamente i numeri dentro la tabella...
    $("#tabella3").append(
      `<td style='animation-delay:0.${count}s;'class="animate__animated animate__backInLeft animate__slow"> ${count} </td>`
    );
    //... e li pusho nell'array numbers
    numbers.push(count);
  }
  for (let count = 31; count < 41; count++) {
    // aggiungo dinamicamente i numeri dentro la tabella...
    $("#tabella4").append(
      `<td style='animation-delay:0.${count}s;'class="animate__animated animate__backInRight animate__slow"> ${count} </td>`
    );
    //... e li pusho nell'array numbers
    numbers.push(count);
  }
  for (let count = 41; count < 51; count++) {
    // aggiungo dinamicamente i numeri dentro la tabella...
    $("#tabella5").append(
      `<td style='animation-delay:0.${count}s;'class="animate__animated animate__backInLeft animate__slow"> ${count} </td>`
    );
    //... e li pusho nell'array numbers
    numbers.push(count);
  }
  for (let count = 51; count < 61; count++) {
    // aggiungo dinamicamente i numeri dentro la tabella...
    $("#tabella6").append(
      `<td style='animation-delay:0.${count}s;'class="animate__animated animate__backInRight animate__slow"> ${count} </td>`
    );
    //... e li pusho nell'array numbers
    numbers.push(count);
  }
  for (let count = 61; count < 71; count++) {
    // aggiungo dinamicamente i numeri dentro la tabella...
    $("#tabella7").append(
      `<td style='animation-delay:0.${count}s;'class="animate__animated animate__backInLeft animate__slow"> ${count} </td>`
    );
    //... e li pusho nell'array numbers
    numbers.push(count);
  }
  for (let count = 71; count < 81; count++) {
    // aggiungo dinamicamente i numeri dentro la tabella...
    $("#tabella8").append(
      `<td style='animation-delay:0.${count}s;'class="animate__animated animate__backInRight animate__slow"> ${count} </td>`
    );
    //... e li pusho nell'array numbers
    numbers.push(count);
  }
  for (let count = 81; count < 91; count++) {
    // aggiungo dinamicamente i numeri dentro la tabella...
    $("#tabella9").append(
      `<td style='animation-delay:0.${count}s;'class="animate__animated animate__backInLeft animate__slow"> ${count} </td>`
    );
    //... e li pusho nell'array numbers
    numbers.push(count);
  }
  // console.log('Numeri nel tabellone ' + numbers);

  //////////////////////////////////////////
  //////ESTRAGGO I NUMERI RANDOM (1-90)/////
  //////////////////////////////////////////

  $(".random_number").click(function () {
    // al click sul pulsante 'estrai numero'...
    $(".extracted-number").fadeOut(1000, function () {
      //... genero un numero random e lo visualizzo nel tag.extracted-number
      let selected_number =
        numbers[Math.floor(Math.random() * numbers.length)];
      $(".extracted-number").text(selected_number);
      $(".extracted-number").fadeIn();
      // console.log(selected_number);

      // elimino il numero estratto dall'array numbers...
      let remove = numbers.indexOf(selected_number);
      numbers.splice(remove, 1);
      // ... e lo pusho dentro l'array numbers_released
      numbers_released.push(selected_number);
      // console.log(numbers_released);

      // a seconda del numero estratto mostro il relativo significato nella Smorfia
      if (selected_number === 1) {
        textNumber('L\'Italia <i class="fas fa-pizza-slice"></i>');
      } else if (selected_number === 2) {
        textNumber('\'A piccerella (la bambina) <i class="fas fa-child"></i>');
      } else if (selected_number === 3) {
        textNumber('\'A jatta (la gatta) <i class="fas fa-cat"></i>');
      } else if (selected_number === 4) {
        textNumber('\'O puorco (il maiale) <i class="fas fa-piggy-bank"></i>');
      } else if (selected_number === 5) {
        textNumber('\'A mano (la mano) <i class="fas fa-hand-spock"></i>');
      } else if (selected_number === 6) {
        textNumber(
          'Chella ca guarda \'nterra (la vagina) <i class="fas fa-caret-down"></i>'
        );
      } else if (selected_number === 7) {
        textNumber("'O vasetto (il vaso di creta)");
      } else if (selected_number === 8) {
        textNumber('\'A Maronna (la Madonna) <i class="fas fa-church"></i>');
      } else if (selected_number === 9) {
        textNumber(
          '\'Afigliata (la figliolanza) <i class="fas fa-baby"></i> <i class="fas fa-child"></i>'
        );
      } else if (selected_number === 10) {
        textNumber("'E fasule (i fagioli)");
      } else if (selected_number === 11) {
        textNumber("'E suricille (i topolini)");
      } else if (selected_number === 12) {
        textNumber("'O surdato (il soldato)");
      } else if (selected_number === 13) {
        textNumber("Sant'Antonio");
      } else if (selected_number === 14) {
        textNumber("'O mbriaco (l'ubriaco)");
      } else if (selected_number === 15) {
        textNumber("'O guaglione (il ragazzo)");
      } else if (selected_number === 16) {
        textNumber("'O culo (il culo)");
      } else if (selected_number === 17) {
        textNumber(
          '\'A disgrazia (la disgrazia) <i class="fas fa-sad-tear"></i>'
        );
      } else if (selected_number === 18) {
        textNumber("'O ssango (il sangue)");
      } else if (selected_number === 19) {
        textNumber(
          '\'A resata (la risata) <i class="far fa-grin-squint-tears"></i>'
        );
      } else if (selected_number === 20) {
        textNumber('\'A festa (la festa) <i class="fas fa-glass-cheers"></i>');
      } else if (selected_number === 21) {
        textNumber("'A femmena annura (la donna nuda)");
      } else if (selected_number === 22) {
        textNumber("'O pazzo (il pazzo)");
      } else if (selected_number === 23) {
        textNumber("'O scemo (lo scemo)");
      } else if (selected_number === 24) {
        textNumber("'E Gguardie (le guardie)");
      } else if (selected_number === 25) {
        textNumber('Natale <i class="fas fa-sleigh"></i>');
      } else if (selected_number === 26) {
        textNumber("Nanninella (la piccola Anna)");
      } else if (selected_number === 27) {
        textNumber("'O càntaro (il pitale)");
      } else if (selected_number === 28) {
        textNumber('\'E zzizze (i seni) <i class="fas fa-infinity"></i>');
      } else if (selected_number === 29) {
        textNumber("'O pate d' 'e ccriature (il padre dei bambini)");
      } else if (selected_number === 30) {
        textNumber("'E ppalle d' 'o tenente (le palle del tenente)");
      } else if (selected_number === 31) {
        textNumber("'O patrone 'e casa (il padrone di casa)");
      } else if (selected_number === 32) {
        textNumber("'O capitone (il capitone)");
      } else if (selected_number === 33) {
        textNumber(
          "Ll'anne 'e Cristo (gli anni di Cristo) <i class=\"fas fa-cross\"></i>"
        );
      } else if (selected_number === 34) {
        textNumber("'A capa (la testa)");
      } else if (selected_number === 35) {
        textNumber("Ll'aucielluzzo (l'uccellino)");
      } else if (selected_number === 36) {
        textNumber("'E ccastagnelle (le nacchere)");
      } else if (selected_number === 37) {
        textNumber('\'O monaco (il monaco) <i class="fas fa-pray"></i> <i class="fas fa-cross"></i>');
      } else if (selected_number === 38) {
        textNumber("'E mmazzate (le botte)");
      } else if (selected_number === 39) {
        textNumber("'A fune 'n ganna (il cappio al collo)");
      } else if (selected_number === 40) {
        textNumber("'A noja (la noia)");
      } else if (selected_number === 41) {
        textNumber("'O curtiello (il coltello)");
      } else if (selected_number === 42) {
        textNumber('\'O ccafè (il caffè) <i class="fas fa-coffee"></i>');
      } else if (selected_number === 43) {
        textNumber("Onna pereta fore ô barcone (la donna al balcone)");
      } else if (selected_number === 44) {
        textNumber("'E ccancelle (la prigione)");
      } else if (selected_number === 45) {
        textNumber(
          '\'O vino bbuono (il vino buono) <i class="fas fa-wine-glass-alt"></i>'
        );
      } else if (selected_number === 46) {
        textNumber('\'E denare (il denaro) <i class="fas fa-coins"></i>');
      } else if (selected_number === 47) {
        textNumber(
          '\'O muorto (il morto) <i class="fas fa-skull-crossbones"></i>'
        );
      } else if (selected_number === 48) {
        textNumber(
          '\'O muorto che pparla (il morto che parla) <i class="fas fa-skull"></i> <i class="far fa-comment"></i>'
        );
      } else if (selected_number === 49) {
        textNumber("'O piezz' 'e carne (la carne)");
      } else if (selected_number === 50) {
        textNumber('\'O ppane (il pane) <i class="fas fa-bread-slice"></i>');
      } else if (selected_number === 51) {
        textNumber("'O ciardino (il giardino)");
      } else if (selected_number === 52) {
        textNumber("'A mamma (la mamma)");
      } else if (selected_number === 53) {
        textNumber("'O viecchio (il vecchio)");
      } else if (selected_number === 54) {
        textNumber(
          '\'O cappiello (il cappello) <i class="fas fa-hat-cowboy"></i>'
        );
      } else if (selected_number === 55) {
        textNumber('\'A museca (la musica) <i class="fas fa-music"></i>');
      } else if (selected_number === 56) {
        textNumber("'A caruta (la caduta)");
      } else if (selected_number === 57) {
        textNumber("'O scartellato (il gobbo)");
      } else if (selected_number === 58) {
        textNumber("'O paccotto (il pacco)");
      } else if (selected_number === 59) {
        textNumber("'E pile (i peli)");
      } else if (selected_number === 60) {
        textNumber("'O lamiento (il lamento)");
      } else if (selected_number === 61) {
        textNumber("'O cacciatore (il cacciatore)");
      } else if (selected_number === 62) {
        textNumber("'O muorto acciso (il morto ammazzato)");
      } else if (selected_number === 63) {
        textNumber("'A sposa (la sposa)");
      } else if (selected_number === 64) {
        textNumber("'A sciammerìa (la marsina)");
      } else if (selected_number === 65) {
        textNumber('\'O chianto (il pianto) <i class="far fa-sad-cry"></i>');
      } else if (selected_number === 66) {
        textNumber("'E ddoje zetelle (le due zitelle)");
      } else if (selected_number === 67) {
        textNumber(
          '\'O totaro dint\' \'a chitarra (il totano nella chitarra) <i class="fas fa-fish"></i> <i class="fas fa-sign-in-alt"></i> <i class="fas fa-guitar"></i>'
        );
      } else if (selected_number === 68) {
        textNumber("'A zuppa cotta (la zuppa cotta)");
      } else if (selected_number === 69) {
        textNumber(
          'Sott\' e \'ncoppa (sottosopra) <i class="fas fa-arrow-up"></i> <i class="fas fa-arrow-down"></i>'
        );
      } else if (selected_number === 70) {
        textNumber('\'O palazzo (il palazzo) <i class="fas fa-building"></i>');
      } else if (selected_number === 71) {
        textNumber(
          "L'omm 'e mmerda (l'uomo di merda) <i class=\"fas fa-poo\"></i>"
        );
      } else if (selected_number === 72) {
        textNumber(
          '\'A maraviglia (la meraviglia) <i class="far fa-surprise"></i>'
        );
      } else if (selected_number === 73) {
        textNumber("'O spitale (l'ospedale) <i class=\"fas fa-hospital\"></i>");
      } else if (selected_number === 74) {
        textNumber("'A grotta (la grotta)");
      } else if (selected_number === 75) {
        textNumber('Pulecenella (Pulcinella) <i class="fas fa-mask"></i>');
      } else if (selected_number === 76) {
        textNumber("'A funtana (la fontana)");
      } else if (selected_number === 77) {
        textNumber("'E riavulille (i diavoli)");
      } else if (selected_number === 78) {
        textNumber("'A bbella figliola (la bella figliola)");
      } else if (selected_number === 79) {
        textNumber("'O mariuolo (il ladro)");
      } else if (selected_number === 80) {
        textNumber("'A vocca (la bocca)");
      } else if (selected_number === 81) {
        textNumber("'E sciure (i fiori)");
      } else if (selected_number === 82) {
        textNumber("'A tavula 'mbandita (la tavola imbandita)");
      } else if (selected_number === 83) {
        textNumber(
          '\'O maletiempo (il maltempo) <i class="fas fa-poo-storm"></i>'
        );
      } else if (selected_number === 84) {
        textNumber('\'A chiesa (la chiesa) <i class="fas fa-church"></i>');
      } else if (selected_number === 85) {
        textNumber("Ll'aneme d' 'o priatorio (le anime del purgatorio)");
      } else if (selected_number === 86) {
        textNumber('\'A puteca (la bottega) <i class="fas fa-store"></i>');
      } else if (selected_number === 87) {
        textNumber("'E perucchie (i pidocchi)");
      } else if (selected_number === 88) {
        textNumber("'E casecavalle (i caciocavalli)");
      } else if (selected_number === 89) {
        textNumber("'A vecchia (la vecchia)");
      } else if (selected_number === 90) {
        textNumber("'A paura (la paura)");
      }

      // aggiungo la classe active ai numeri estratti
      $("td").each(function () {
        let check_n = numbers_released.includes(parseInt($(this).text()));
        check_n ? $(this).addClass("active") : false;
      });
    });
  });
});

//**********************************//
//*******    FUNCTIONS   ***********//
//**********************************//

// funzione che restituisce un messaggio
function textNumber(message) {
  let msg = message;
  $("#smorfia").empty();
  $("#smorfia").append(
    `<h1 class="text-center animate__animated animate__fadeIn animate__slow">${msg}</h1>`
  );
}
