function showModal(contentId) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `<p>Contenuto dinamico della sezione ${contentId}</p>`;
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}
function showPreview(title, contentId) {
    const modalBody = document.getElementById('modal-body');

    // Mappa dei contenuti per ciascun esercizio
    const contentMap = {
        'quadratini-colorati': `
            <div style="text-align: center;">
                <div id="QuadratoUNO" style="background-color: #133337; width: 100px; height: 100px; margin-bottom: 10px; border: black 5px solid;"></div>
                <div id="QuadratoDUE" style="background-color: #8f0704; width: 100px; height: 100px; margin-bottom: 10px; border: black 5px solid;"></div>
                <div id="QuadratoTRE" style="background-color: #c8ff00; width: 100px; height: 100px; margin-bottom: 10px; border: black 5px solid;"></div>
                <div id="QuadratoQUATTRO" style="background-color: #140175; width: 100px; height: 100px; margin-bottom: 10px; border: black 5px solid;"></div>
                <div id="QuadratoCINQUE" style="background-color: #7b0071; width: 100px; height: 100px; margin-bottom: 10px; border: black 5px solid;"></div>
            </div>
        `,
        // Puoi aggiungere altri esercizi qui
        'esercizio-2': `
            <!DOCTYPE html>
    <html lang="it">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Padding e margin</title>
        <style>
            #quadratino1 {
                width: 450px;
                height: 200px;
                background-color: lightblue;
                padding: 20px;
                margin: 10px;
                text-align: center;
                border-radius: 10px;
            }
            #quadratino2 {
                width: 450px;
                height: 200px;
                background-color: lightblue;
                padding: 20px;
                margin: 10px;
                text-align: center;
                border-radius: 10px;
            }
            #quadratino3 {
                width: 450px;
                height: 300px;
                background-color: lightblue;
                padding: 20px;
                margin: 10px;
                text-align: center;
                border-radius: 10px;
            }
            #quadratino4 {
                width: 450px;
                height: 200px;
                background-color: lightblue;
                padding: 20px;
                margin: 10px;
                text-align: center;
                border-radius: 10px;
            }
            #quadratino5 {
                width: 450px;
                height: 200px;
                background-color: lightblue;
                padding: 20px;
                margin: 10px;
                text-align: center;
                border-radius: 10px;
            }
        </style>
    </head>
    <body>
        <div id="quadratino1">
            <h3>“Il problema oggi non è l'energia nucleare, ma il cuore dell'uomo.”</h3>
            <p>Albert Einstein</p>
        </div>
        <div id="quadratino2">
            <h3>“La differenza che passa fra credere e sapere, è la stessa che passa tra fede e scienza.”</h3>
            <p>Stefano Nasetti</p>
        </div>
        <div id="quadratino3">
            <h3>“Insegnami la dolcezza ispirandomi la carità, insegnami la disciplina dandomi la pazienza e insegnami la scienza illuminandomi la mente.”</h3>
            <p>Albert Einstein</p>
        </div>
        <div id="quadratino4">
            <h3>“Meglio vale godersi una rosa che esaminarne la radice al microscopio.”</h3>
            <p>Albert Einstein</p>
        </div>
        <div id="quadratino5">
            <h3>“L'arte è fatta per disturbare, la scienza per rassicurare.”</h3>
            <p>Albert Einstein</p>
        </div>
    </body>
    </html>
    `,
        'esercizio-3': `
        <!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PRIMA PAGINA</title>
</head>
<body>
    <h1>
        Ciao ecco la mia prima pagina
    </h1>
    <p>
        Io sono Thomas Addamo e inizio a studiare HTML
    </p>
    <ul>
        <li>
            <b><u>Chi ha inventato questo linguaggio?</u></b>
        </li>
        HTML HTML è stato creato da <b>Tim Berners-Lee</b>.
    </ul>
    <ul>
        <li>
            <b><u>Quando?</u></b>
        </li>
        È stato inventato nel <b>1991</b>.
    </ul>
    <ul>
        <li>
            <b><u>Quali sono gli scopi di questo linguaggio?</u></b>
        </li>
        HTML serve a strutturare e formattare contenuti sul Web, permettendo la creazione di pagine web interattive e multimediali.
    </ul>
    <ul>
        <li>
            <b><u>Che cos'è il WEB?</u></b>
        </li>
        Il <b>Web</b>, o <b>World Wide Web</b>, è un sistema di documenti ipertestuali accessibili tramite Internet, che consente agli utenti di navigare tra pagine tramite link.
    </ul>
    <ul>
        <li>
            <b><u>Che problemi risolveva il WEB?</u></b>
        </li>
        Il Web ha risolto la necessità di condividere informazioni in modo rapido e accessibile, facilitando la comunicazione e la collaborazione tra persone e organizzazioni in tutto il mondo.
    </ul>
    <ul>
        <li>
            <b><u>Che differenza c'è tra web, HTML e Internet?</u></b>
        </li>
        <ol>
            <li><b>Web</b>:  è un sistema di informazioni accessibili su Internet tramite browser, che utilizza HTML per presentare i contenuti.</li>
            <li><b>HTML</b>: è un linguaggio di markup utilizzato per creare e formattare pagine web.</li>
            <li><b>Internet</b>: è una rete globale di computer interconnessi che consente la trasmissione di dati.</li>
        </ol>
    </ul>
    <h2>Ecco le mie 5 pagine preferite</h2>
    <ul><li><a href="https://www.apple.com/it/">Apple</a><br></li></ul>
    <ul><li><a href="https://www.amazon.it/">Amazon</a><br></li></ul>
    <ul><li><a href="https://www.canva.com/">Canva</a></li></ul>
    <h2>Ecco la mia foto</h2>
    <p>Sono <b>Thomas Addamo</b> e ho creato questa pagina per il corso TPSIT nell'Istituto Maxwell di Nichelino. Mi piace tanto mangiare.</p>
    <img src="thomas.jpg" alt="Me" width="250" height="333"><br>
    <p>Ecco una foto di quello che di solito mangio</p>
    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/18/7f/03/we-bought-it-even-more.jpg?w=1100&h=-1&s=1" alt="Quello che mangio" width="250" height="333"><br>
</body>
</html>
        `,
        'esercizio-4' : `

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Errori software catastrofici</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 70px 10px;
        }
        .error {
            display: flex;
            flex-wrap: wrap;
            border: 2px solid #ddd;
            border-radius: 10px;
            margin-bottom: 20px;
            overflow: hidden;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 1);
        }
        .error img {
            width: 100%;
            max-width: 300px;
            height: auto;
            border-right: 2px solid #ddd;
        }
        .description {
            padding: 20px;
            flex: 1;
        }
        .description h2 {
            margin: 0;
            font-size: 1.5em;
            color: #333;
        }
        .description p {
            margin: 10px 0 0;
            font-size: 1.1em;
            line-height: 1.6;
            color: #555;
        }
        .error:nth-child(even) {
            flex-direction: row-reverse;
        }

        /* Media query per schermi più piccoli */
        @media (max-width: 768px) {
            .error {
                flex-direction: column;
            }
            .error img {
                width: 100%;
                border-right: none;
                border-bottom: 2px solid #ddd;
            }
            .description {
                padding: 15px;
            }
        }

        @media (max-width: 480px) {
            body {
                padding: 10px;
            }
            .description h2 {
                font-size: 1.3em;
            }
            .description p {
                font-size: 1em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Errore 1 -->
        <div class="error">
            <div>
                <img src="ariane 5.png" alt="Ariane 5 Rocket">
            </div>
            <div class="description">
                <h2>Circa 370 milioni di dollari</h2>
                <p>Il lancio inaugurale del razzo Ariane 5 fallì a causa di un bug nel software. Il sistema di navigazione riutilizzava codice dall'Ariane 4, non adattato per il nuovo razzo. Il razzo deviò dalla sua rotta e fu distrutto. Perdita di un razzo da 370 milioni di dollari e di carichi utili scientifici di alto valore.</p>
            </div>
        </div>

        <!-- Errore 2 -->
        <div class="error">
            <div>
                <img src="Mars_Climate_Orbiter_2.jpg" alt="Mars Climate Orbiter">
            </div>
            <div class="description">
                <h2>Circa 193 milioni di dollari</h2>
                <p>Un errore nel sistema di navigazione del Mars Climate Orbiter causò la perdita della sonda spaziale, che utilizzava unità imperiali invece di metriche, entrando nell'atmosfera di Marte troppo bassa e fu distrutta.</p>
            </div>
        </div>

        <!-- Errore 3 -->
        <div class="error">
            <div>
                <img src="100331308-knight-traders-02-gettyp.jpg" alt="Knight Capital">
            </div>
            <div class="description">
                <h2>Circa 440 milioni di dollari in 45 minuti</h2>
                <p>Un aggiornamento software difettoso presso Knight Capital causò milioni di operazioni di borsa errate, portando alla perdita di circa 440 milioni di dollari in meno di un'ora.</p>
            </div>
        </div>

        <!-- Errore 4 -->
        <div class="error">
            <div>
                <img src="therac 25.jpeg" alt="Therac-25">
            </div>
            <div class="description">
                <h2>Diverse vite umane</h2>
                <p>Il Therac-25, una macchina per la radioterapia, somministrò dosi letali di radiazioni a causa di bug nel software, causando la morte di almeno 5 persone e gravi lesioni ad altri.</p>
            </div>
        </div>

        <!-- Errore 5 -->
        <div class="error">
            <div>
                <img src="patriot missle.webp" alt="Patriot Missile">
            </div>
            <div class="description">
                <h2>Perdita di vite e milioni di dollari</h2>
                <p>Un errore di arrotondamento nel software del Patriot Missile portò al fallimento dell'intercettazione di un missile Scud iracheno, causando la morte di 28 soldati.</p>
            </div>
        </div>

        <!-- Errore 6 -->
        <div class="error">
            <div>
                <img src="millennium bug.webp" alt="Millennium Bug">
            </div>
            <div class="description">
                <h2>Circa 100 miliardi di dollari</h2>
                <p>Il Millennium Bug richiese enormi investimenti per evitare il collasso dei sistemi informatici nel passaggio all'anno 2000. Anche se non causò gravi danni, il costo per la prevenzione fu enorme.</p>
            </div>
        </div>

        <!-- Errore 7 -->
        <div class="error">
            <div>
                <img src="intel pentium.jpg" alt="Intel Pentium Bug">
            </div>
            <div class="description">
                <h2>Circa 475 milioni di dollari</h2>
                <p>Un bug nei processori Intel Pentium causava errori nei calcoli in virgola mobile, costringendo Intel a ritirare i processori difettosi, con enormi costi di sostituzione e danno alla reputazione.</p>
            </div>
        </div>

        <!-- Errore 8 -->
        <div class="error">
            <div>
                <img src="tesla-model-s-2021-font-side-1.jpg" alt="Tesla Model S">
            </div>
            <div class="description">
                <h2>Perdita di un'auto</h2>
                <p>Un aggiornamento del software del Tesla Model S causò il blocco dei freni a mano, con conseguente incendio e perdita completa di un'auto.</p>
            </div>
        </div>

        <!-- Errore 9 -->
        <div class="error">
            <div>
                <img src="ATT-5G.jpg" alt="AT&T System Crash">
            </div>
            <div class="description">
                <h2>Decine di milioni di dollari</h2>
                <p>Un aggiornamento software difettoso nel sistema di commutazione di AT&T causò un'interruzione di circa 9 ore, interrompendo milioni di chiamate negli Stati Uniti e causando enormi perdite finanziarie e danni alla reputazione.</p>
            </div>
        </div>

        <!-- Errore 10 -->
        <div class="error">
            <div>
                <img src="boeing-737.jpg" alt="Boeing 737 Max">
            </div>
            <div class="description">
                <h2>Oltre 20 miliardi di dollari, molte vite perse</h2>
                <p>Il bug nel sistema MCAS del Boeing 737 Max portò a due incidenti mortali, con la perdita di 346 vite, gravi perdite economiche per Boeing, e la messa a terra dell'aereo per quasi due anni.</p>
            </div>
        </div>
    </div>
</body>
</html>
        `,
        'esercizio-5' : `
        <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
    font-family: Arial, Helvetica, sans-serif;
}

.flip-card {
    background-color: transparent;
    width: 400px;
    height: 400px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
}
</style>
</head>
<body>

<h1>Scheda personale</h1>
<h3>Scoprimi:</h3>

<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <img src="thomas.jpg" alt="Thomas" style="width:400px; height:400px;">
        </div>
        <div class="flip-card-back">
            <h1>Thomas Addamo</h1>
            <p>Studente <b>IIS J.C. Maxwell</b></p>
            <p>Mi piace tantissimo <b>programmare.</b></p>
            <p>Ecco cosa amo mangiare costantemente senza mai fermarmi.</p>
            <img src="https://www.junsei.it/wp-content/uploads/2021/12/tipi-sushi-junsei.png" alt="Cibo" width="200px">
        </div>
    </div>
</div>

</body>
</html>
        `,

        //JAVASCRIPT
        'js-1' : `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3 bottoni</title>
    <style>
        #Miobottone1, #Miobottone2, #Miobottone3 {
            display: inline-block;
            padding: 15px 25px;
            font-size: 24px;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            outline: none;
            color: #fff;
            background-color: #04AA6D;
            border: none;
            border-radius: 15px;
        }
        #Miobottone1:hover, #Miobottone2:hover, #Miobottone3:hover {
            background-color: blue;
            transition: all 300ms ease-in;
        }
    </style>
</head>
<body>
    <h1>JS 1</h1>
    <p>Clicca i 3 bottoni per scoprire qualcosa di unico</p>
    <button id="Miobottone1" onclick="alert('Questo è il bottone 1')">Bottone 1</button>
    <button id="Miobottone2" onclick="alert('Questo è il bottone 2')">Bottone 2</button>
    <button id="Miobottone3" onclick="alert('Questo è il bottone 3')">Bottone 3</button>
</body>
</html>
        `,
        'js-2' : `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>js1</title>
    <style>
        #Miobottone1 {
            display: inline-block;
            padding: 15px 25px;
            font-size: 24px;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            outline: none;
            color: #fff;
            background-color: #04AA6D;
            border: none;
            border-radius: 15px;
            box-shadow: 0 9px #999;
        }
        #Miobottone1:hover {background-color: blue}

        #Miobottone1:active {
            background-color: #3e8e41;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
        }

        #i1{
            width: 200px;
            height: 20px;
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 15px;
            border: 2px solid #000;
        }
    </style>
</head>
<body>
    <h1>
        JS 2
    </h1>
    <p>Primo esercizio con javascript</p>
    <input type="text" name="input1" id="i1">
    <br>
    <button id = "Miobottone1" onclick="aprifinestra()">Clicca qui per scoprire</button>

    <script>
        function aprifinestra()
        {
            let i = document.getElementById("i1").value;
            alert("Il tuo risultato è: " + i);
        }
    </script>
</body>
</html>
        `,
        'js-3' : `
        <!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aforismi di Scienziati</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f4f8;
        color: #333;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    h1 {
        color: #2c3e50;
        font-size: 2em;
        margin-bottom: 20px;
        text-align: center;
    }

    .aforisma {
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 20px;
        width: 80%;
        max-width: 500px;
        margin-bottom: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        position: relative;
        transition: transform 0.3s;
    }

    .aforisma:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    p {
        font-size: 1.1em;
        color: #555;
        margin: 0;
    }

    button {
        background-color: #3498db;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        padding: 8px 12px;
        font-size: 0.9em;
        cursor: pointer;
        margin-top: 15px;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #2980b9;
    }

    button:focus {
        outline: none;
    }
    </style>
</head>
<body>

<h1>Aforismi di Scienziati</h1>

<div class="aforisma" id="aforisma1">
    <p>“La scienza è un modo di pensare molto più che un insieme di conoscenze.” — <b>Carl Sagan</b></p>
    <button onclick="nascondiTesto('aforisma1')">Nascondi Aforisma</button>
</div>

<div class="aforisma" id="aforisma2">
    <p>“La misura dell'intelligenza è la capacità di cambiare.” — <b>Albert Einstein</b></p>
    <button onclick="nascondiTesto('aforisma2')">Nascondi Aforisma</button>
</div>

<div class="aforisma" id="aforisma3">
    <p>“Niente è troppo meraviglioso per essere vero, se è coerente con le leggi della natura.” — <b>Michael Faraday</b></p>
    <button onclick="nascondiTesto('aforisma3')">Nascondi Aforisma</button>
</div>

<div class="aforisma" id="aforisma4">
    <p>“L'immaginazione è più importante della conoscenza. La conoscenza è limitata, l'immaginazione abbraccia il mondo.” — <b>Albert Einstein</b></p>
    <button onclick="nascondiTesto('aforisma4')">Nascondi Aforisma</button>
</div>

<div class="aforisma" id="aforisma5">
    <p>“La scienza è il grande antidoto al veleno dell'entusiasmo e della superstizione.” — <b>Adam Smith</b></p>
    <button onclick="nascondiTesto('aforisma5')">Nascondi Aforisma</button>
</div>

<script>
function nascondiTesto(id) {
    const aforisma = document.getElementById(id);
    aforisma.style.display = "none"; 
}
</script>

</body>
</html>
        `,
    };

    // Imposta titolo e contenuto della modale
    modalBody.innerHTML = `
        <h3 class="text-center">${title}</h3>
        <div>${contentMap[contentId] || '<p>Contenuto non disponibile.</p>'}</div>
    `;

    // Mostra la modale
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}

