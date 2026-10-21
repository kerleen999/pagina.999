/* =====================================================
   KERLEEN.IO
   LABORATORIO TRIGONOMÉTRICO
   P5.JS
===================================================== */

let controlAngulo;

let angulo = 0;

let centroX;
let centroY;

let radio = 170;

let contenedorBotones;

let arrastrando = false;


/* =====================================================
   CONFIGURACIÓN
===================================================== */

function setup() {

    let canvas = createCanvas(700, 520);

    canvas.parent("laboratorio-circunferencia");

    angleMode(DEGREES);

    centroX = width / 2;

    centroY = height / 2 + 20;


    /* =================================================
       CONTROL DESLIZANTE
    ================================================= */

    controlAngulo = createSlider(
        0,
        360,
        0,
        1
    );

    controlAngulo.parent(
        "laboratorio-circunferencia"
    );

    controlAngulo.addClass(
        "control-angulo"
    );


    /* =================================================
       BOTONES DE ÁNGULOS
    ================================================= */

    crearBotonesAngulos();

}


/* =====================================================
   BOTONES
===================================================== */

function crearBotonesAngulos() {

    contenedorBotones = createDiv();

    contenedorBotones.parent(
        "laboratorio-circunferencia"
    );

    contenedorBotones.addClass(
        "botones-angulos"
    );


    let angulos = [
        0,
        30,
        45,
        60,
        90,
        120,
        135,
        150,
        180,
        270,
        360
    ];


    angulos.forEach(
        function(valor) {

            let boton = createButton(
                valor + "°"
            );

            boton.parent(
                contenedorBotones
            );

            boton.addClass(
                "boton-angulo"
            );


            boton.mousePressed(
                function() {

                    controlAngulo.value(
                        valor
                    );

                }
            );

        }
    );

}


/* =====================================================
   DIBUJAR
===================================================== */

function draw() {

    background(
        248,
        250,
        252
    );


    /* Obtener ángulo del slider */

    angulo =
        controlAngulo.value();


    /* Valores trigonométricos */

    let coseno =
        cos(angulo);

    let seno =
        sin(angulo);


    /* Coordenadas del punto */

    let puntoX =
        centroX +
        radio * coseno;

    let puntoY =
        centroY -
        radio * seno;


    /* =================================================
       TÍTULO
    ================================================= */

    noStroke();

    fill(
        23,
        32,
        51
    );

    textAlign(CENTER);

    textSize(22);

    text(
        "Circunferencia trigonométrica",
        width / 2,
        35
    );


    /* =================================================
       EJES
    ================================================= */

    stroke(160);

    strokeWeight(1);

    line(
        70,
        centroY,
        width - 70,
        centroY
    );

    line(
        centroX,
        70,
        centroX,
        height - 45
    );


    /* =================================================
       FLECHAS
    ================================================= */

    fill(100);

    noStroke();


    triangle(
        width - 70,
        centroY,
        width - 82,
        centroY - 6,
        width - 82,
        centroY + 6
    );


    triangle(
        centroX,
        70,
        centroX - 6,
        82,
        centroX + 6,
        82
    );


    /* =================================================
       LETRAS DE LOS EJES
    ================================================= */

    fill(
        23,
        32,
        51
    );

    textSize(17);

    text(
        "x",
        width - 55,
        centroY - 12
    );

    text(
        "y",
        centroX + 18,
        72
    );


    /* =================================================
       CIRCUNFERENCIA
    ================================================= */

    noFill();

    stroke(
        91,
        92,
        226
    );

    strokeWeight(4);

    circle(
        centroX,
        centroY,
        radio * 2
    );


    /* =================================================
       CUADRANTES
    ================================================= */

    noStroke();

    fill(160);

    textSize(14);

    text(
        "I",
        centroX + 90,
        centroY - 90
    );

    text(
        "II",
        centroX - 90,
        centroY - 90
    );

    text(
        "III",
        centroX - 90,
        centroY + 105
    );

    text(
        "IV",
        centroX + 90,
        centroY + 105
    );


    /* =================================================
       RADIO
    ================================================= */

    stroke(
        6,
        182,
        212
    );

    strokeWeight(4);

    line(
        centroX,
        centroY,
        puntoX,
        puntoY
    );


    /* =================================================
       PROYECCIÓN X
    ================================================= */

    stroke(
        91,
        92,
        226,
        100
    );

    strokeWeight(2);

    line(
        puntoX,
        puntoY,
        puntoX,
        centroY
    );


    /* =================================================
       PROYECCIÓN Y
    ================================================= */

    stroke(
        6,
        182,
        212,
        100
    );

    line(
        puntoX,
        puntoY,
        centroX,
        puntoY
    );


    /* =================================================
       ARCO DEL ÁNGULO
    ================================================= */

    noFill();

    stroke(
        124,
        58,
        237
    );

    strokeWeight(4);

    arc(
        centroX,
        centroY,
        90,
        90,
        -angulo,
        0
    );


    /* =================================================
       CENTRO
    ================================================= */

    noStroke();

    fill(
        23,
        32,
        51
    );

    circle(
        centroX,
        centroY,
        12
    );


    /* =================================================
       PUNTO
    ================================================= */

    fill(
        236,
        72,
        153
    );

    stroke(255);

    strokeWeight(3);

    circle(
        puntoX,
        puntoY,
        20
    );


    /* =================================================
       LETRA P
    ================================================= */

    noStroke();

    fill(
        23,
        32,
        51
    );

    textAlign(LEFT);

    textSize(16);

    text(
        "P",
        puntoX + 13,
        puntoY - 12
    );


    /* =================================================
       ÁNGULO
    ================================================= */

    fill(
        124,
        58,
        237
    );

    textAlign(CENTER);

    textSize(18);

    text(
        "θ = " +
        angulo +
        "°",
        centroX + 75,
        centroY - 25
    );


    /* =================================================
       RADIO
    ================================================= */

    fill(
        6,
        140,
        160
    );

    textSize(14);

    text(
        "r = 1",
        centroX + 90,
        centroY - 10
    );


    /* =================================================
       ACTUALIZAR INFORMACIÓN
    ================================================= */

    actualizarInformacion(
        angulo,
        coseno,
        seno
    );

}


/* =====================================================
   INTERACCIÓN CON EL MOUSE
===================================================== */

/*
   Permite hacer clic y arrastrar
   directamente el punto de la circunferencia.
*/

function mousePressed() {

    let coseno =
        cos(angulo);

    let seno =
        sin(angulo);


    let puntoX =
        centroX +
        radio * coseno;

    let puntoY =
        centroY -
        radio * seno;


    let distancia =
        dist(
            mouseX,
            mouseY,
            puntoX,
            puntoY
        );


    /*
       Si hacemos clic cerca del punto,
       comenzamos a arrastrarlo.
    */

    if (distancia < 30) {

        arrastrando = true;

    }

}


/* =====================================================
   ARRASTRAR EL PUNTO
===================================================== */

function mouseDragged() {

    if (!arrastrando) {

        return;

    }


    /*
       Calculamos el ángulo entre
       el centro y la posición del mouse.
    */

    let dx =
        mouseX - centroX;

    let dy =
        centroY - mouseY;


    let nuevoAngulo =
        atan2(
            dy,
            dx
        );


    /*
       Convertimos el resultado
       al rango 0° - 360°.
    */

    if (nuevoAngulo < 0) {

        nuevoAngulo += 360;

    }


    nuevoAngulo =
        constrain(
            nuevoAngulo,
            0,
            360
        );


    /*
       Actualizamos el slider.
    */

    controlAngulo.value(
        nuevoAngulo
    );


    /*
       Actualizamos inmediatamente
       el ángulo.
    */

    angulo =
        nuevoAngulo;

}


/* =====================================================
   SOLTAR EL PUNTO
===================================================== */

function mouseReleased() {

    arrastrando = false;

}


/* =====================================================
   INFORMACIÓN
===================================================== */

function actualizarInformacion(
    angulo,
    coseno,
    seno
) {

    document.getElementById(
        "valor-angulo"
    ).textContent =
        angulo.toFixed(0) + "°";


    document.getElementById(
        "valor-coseno"
    ).textContent =
        coseno.toFixed(3);


    document.getElementById(
        "valor-seno"
    ).textContent =
        seno.toFixed(3);


    document.getElementById(
        "valor-punto"
    ).textContent =
        "(" +
        coseno.toFixed(3) +
        ", " +
        seno.toFixed(3) +
        ")";


    actualizarExplicacion(
        angulo,
        coseno,
        seno
    );

}


/* =====================================================
   EXPLICACIÓN DINÁMICA
===================================================== */

function actualizarExplicacion(
    angulo,
    coseno,
    seno
) {

    let caja =
        document.getElementById(
            "explicacion-angulo"
        );


    let cuadrante = "";

    let texto = "";


    /* =================================================
       EJES
    ================================================= */

    if (
        angulo === 0 ||
        angulo === 360
    ) {

        texto =
            "📐 El punto está sobre el eje X positivo. " +
            "El coseno vale 1 y el seno vale 0.";

    }


    else if (
        angulo === 90
    ) {

        texto =
            "📐 El punto está sobre el eje Y positivo. " +
            "El coseno vale 0 y el seno vale 1.";

    }


    else if (
        angulo === 180
    ) {

        texto =
            "📐 El punto está sobre el eje X negativo. " +
            "El coseno vale -1 y el seno vale 0.";

    }


    else if (
        angulo === 270
    ) {

        texto =
            "📐 El punto está sobre el eje Y negativo. " +
            "El coseno vale 0 y el seno vale -1.";

    }


    /* =================================================
       CUADRANTES
    ================================================= */

    else {

        if (
            angulo > 0 &&
            angulo < 90
        ) {

            cuadrante =
                "primer cuadrante";

        }


        else if (
            angulo > 90 &&
            angulo < 180
        ) {

            cuadrante =
                "segundo cuadrante";

        }


        else if (
            angulo > 180 &&
            angulo < 270
        ) {

            cuadrante =
                "tercer cuadrante";

        }


        else {

            cuadrante =
                "cuarto cuadrante";

        }


        texto =
            "📐 El punto está en el " +
            cuadrante +
            ". El coseno representa la coordenada X y el seno representa la coordenada Y.";

    }


    caja.textContent =
        texto;

}
