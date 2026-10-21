/* =====================================================
   QUIZ DE TRIGONOMETRÍA
   Kerleen.io
===================================================== */


const preguntas = [

    {
        categoria: "Razones trigonométricas",

        pregunta:
            "¿Cuál es la fórmula del seno de un ángulo?",

        opciones: [

            "Opuesto / Hipotenusa",

            "Adyacente / Hipotenusa",

            "Opuesto / Adyacente",

            "Hipotenusa / Opuesto"

        ],

        correcta: 0

    },


    {
        categoria: "Razones trigonométricas",

        pregunta:
            "¿Cuál es la fórmula del coseno?",

        opciones: [

            "Opuesto / Hipotenusa",

            "Adyacente / Hipotenusa",

            "Opuesto / Adyacente",

            "Hipotenusa / Adyacente"

        ],

        correcta: 1

    },


    {
        categoria: "Razones trigonométricas",

        pregunta:
            "¿Cuál es la fórmula de la tangente?",

        opciones: [

            "Opuesto / Hipotenusa",

            "Adyacente / Hipotenusa",

            "Opuesto / Adyacente",

            "Hipotenusa / Opuesto"

        ],

        correcta: 2

    },


    {
        categoria: "Ángulos notables",

        pregunta:
            "¿Cuánto vale sin(30°)?",

        opciones: [

            "1",

            "√3 / 2",

            "1 / 2",

            "0"

        ],

        correcta: 2

    },


    {
        categoria: "Ángulos notables",

        pregunta:
            "¿Cuánto vale cos(60°)?",

        opciones: [

            "1 / 2",

            "√3 / 2",

            "1",

            "0"

        ],

        correcta: 0

    },


    {
        categoria: "Identidades",

        pregunta:
            "¿Cuál es la identidad trigonométrica fundamental?",

        opciones: [

            "sin(θ) + cos(θ) = 1",

            "sin²(θ) + cos²(θ) = 1",

            "sin(θ) · cos(θ) = 1",

            "tan(θ) + cos(θ) = 1"

        ],

        correcta: 1

    },


    {
        categoria: "Identidades",

        pregunta:
            "¿Cuál de las siguientes expresiones representa a la tangente?",

        opciones: [

            "cos(θ) / sin(θ)",

            "1 / sin(θ)",

            "sin(θ) / cos(θ)",

            "1 / cos(θ)"

        ],

        correcta: 2

    },


    {
        categoria: "Triángulos",

        pregunta:
            "En un triángulo rectángulo, ¿cuál es el lado más largo?",

        opciones: [

            "Cateto opuesto",

            "Cateto adyacente",

            "Hipotenusa",

            "Base"

        ],

        correcta: 2

    },


    {
        categoria: "Problemas",

        pregunta:
            "Si la hipotenusa mide 10 cm y sin(θ) = 0.5, ¿cuánto mide el cateto opuesto?",

        opciones: [

            "2 cm",

            "5 cm",

            "10 cm",

            "20 cm"

        ],

        correcta: 1

    },


    {
        categoria: "Problemas",

        pregunta:
            "Si un triángulo tiene un cateto opuesto de 3 cm y uno adyacente de 4 cm, ¿cuánto vale aproximadamente tan(θ)?",

        opciones: [

            "0.25",

            "0.50",

            "0.75",

            "1.33"

        ],

        correcta: 2

    }

];



/* =====================================================
   VARIABLES
===================================================== */


let preguntaActual = 0;

let puntuacion = 0;

let respuestaSeleccionada = false;



/* =====================================================
   ELEMENTOS HTML
===================================================== */


const inicioQuiz =
    document.getElementById("inicio-quiz");


const quiz =
    document.getElementById("quiz");


const resultado =
    document.getElementById("resultado");


const botonIniciar =
    document.getElementById("boton-iniciar");


const botonSiguiente =
    document.getElementById("boton-siguiente");


const botonReintentar =
    document.getElementById("boton-reintentar");


const numeroPregunta =
    document.getElementById("numero-pregunta");


const contador =
    document.getElementById("contador");


const barraProgreso =
    document.getElementById("barra-progreso");


const categoria =
    document.getElementById("categoria");


const pregunta =
    document.getElementById("pregunta");


const opciones =
    document.getElementById("opciones");


const resultadoPuntos =
    document.getElementById("resultado-puntos");


const resultadoMensaje =
    document.getElementById("resultado-mensaje");


const resultadoIcono =
    document.getElementById("resultado-icono");


const resultadoBarra =
    document.getElementById(
        "resultado-barra-interior"
    );



/* =====================================================
   INICIAR QUIZ
===================================================== */


botonIniciar.addEventListener(
    "click",
    iniciarQuiz
);


function iniciarQuiz() {

    preguntaActual = 0;

    puntuacion = 0;

    inicioQuiz.style.display = "none";

    resultado.style.display = "none";

    quiz.style.display = "block";

    mostrarPregunta();

}



/* =====================================================
   MOSTRAR PREGUNTA
===================================================== */


function mostrarPregunta() {

    respuestaSeleccionada = false;

    botonSiguiente.style.display = "none";

    const datos =
        preguntas[preguntaActual];


    numeroPregunta.textContent =
        "Pregunta " +
        (preguntaActual + 1);


    contador.textContent =
        (preguntaActual + 1) +
        " de " +
        preguntas.length;


    categoria.textContent =
        datos.categoria;


    pregunta.textContent =
        datos.pregunta;


    opciones.innerHTML = "";


    datos.opciones.forEach(
        function(opcion, indice) {

            const boton =
                document.createElement("button");


            boton.classList.add("opcion");


            boton.textContent =
                opcion;


            boton.addEventListener(
                "click",
                function() {

                    seleccionarRespuesta(
                        indice,
                        boton
                    );

                }
            );


            opciones.appendChild(boton);

        }
    );


    const progreso =
        ((preguntaActual) /
        preguntas.length) * 100;


    barraProgreso.style.width =
        progreso + "%";

}



/* =====================================================
   SELECCIONAR RESPUESTA
===================================================== */


function seleccionarRespuesta(
    indice,
    boton
) {

    if (respuestaSeleccionada) {

        return;

    }


    respuestaSeleccionada = true;


    const datos =
        preguntas[preguntaActual];


    const botones =
        document.querySelectorAll(
            ".opcion"
        );


    botones.forEach(
        function(botonOpcion) {

            botonOpcion.disabled =
                true;

        }
    );


    boton.classList.add(
        "seleccionada"
    );


    if (indice === datos.correcta) {

        puntuacion += 10;

    }


    botonSiguiente.style.display =
        "inline-block";

}



/* =====================================================
   SIGUIENTE PREGUNTA
===================================================== */


botonSiguiente.addEventListener(
    "click",
    siguientePregunta
);


function siguientePregunta() {

    preguntaActual++;


    if (
        preguntaActual <
        preguntas.length
    ) {

        mostrarPregunta();

    } else {

        mostrarResultado();

    }

}



/* =====================================================
   RESULTADO
===================================================== */


function mostrarResultado() {

    quiz.style.display =
        "none";


    resultado.style.display =
        "block";


    resultadoPuntos.textContent =
        puntuacion + "/100";


    resultadoBarra.style.width =
        puntuacion + "%";


    if (puntuacion === 100) {

        resultadoIcono.textContent =
            "🏆";


        resultadoMensaje.textContent =
            "¡Excelente! Dominas muy bien los conceptos de trigonometría. ¡Sigue así!";

    }

    else if (puntuacion >= 80) {

        resultadoIcono.textContent =
            "🎉";


        resultadoMensaje.textContent =
            "¡Muy buen trabajo! Tienes un buen dominio de la trigonometría.";

    }

    else if (puntuacion >= 60) {

        resultadoIcono.textContent =
            "👍";


        resultadoMensaje.textContent =
            "¡Vas por buen camino! Repasa algunos conceptos y vuelve a intentarlo.";

    }

    else if (puntuacion >= 40) {

        resultadoIcono.textContent =
            "📚";


        resultadoMensaje.textContent =
            "Necesitas practicar un poco más. Revisa las secciones de Razones e Identidades.";

    }

    else {

        resultadoIcono.textContent =
            "💪";


        resultadoMensaje.textContent =
            "No te preocupes. Vuelve a estudiar los conceptos y prueba nuevamente. ¡Tú puedes!";

    }

}



/* =====================================================
   REINTENTAR
===================================================== */


botonReintentar.addEventListener(
    "click",
    function() {

        resultado.style.display =
            "none";

        quiz.style.display =
            "block";

        preguntaActual = 0;

        puntuacion = 0;

        mostrarPregunta();

    }
);
