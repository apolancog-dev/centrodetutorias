const fs = require("fs");
const path = require("path");

const ACADEMIC_FILE = path.join(__dirname, "..", "academic_content.js");

const fisicaMovimientoData = {
    isRichCourse: true,
    title: "Física I: Movimiento y Fuerzas",
    units: [
        {
            title: "Unidad 1: Movimiento y Posición en Una Dimensión",
            lessons: [
                {
                    id: "distancia-versus-desplazamiento",
                    title: "Lección 1.1: Distancia versus Desplazamiento",
                    introduction: "Descubre la diferencia fundamental en mecánica clásica entre la longitud del camino recorrido y el cambio neto de posición.",
                    explanationHtml: '<p>En cinemática, para describir la trayectoria de un cuerpo, diferenciamos entre dos variables clave:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Distancia ($d$):</strong> Magnitud escalar que mide la longitud total de la trayectoria recorrida por un objeto, sin importar su sentido ni dirección. Siempre es un valor positivo o nulo.</li><li><strong>Desplazamiento ($\\vec{\\Delta x}$):</strong> Magnitud vectorial que representa el cambio neto de posición de un objeto en el espacio. Se mide en línea recta desde la posición inicial ($x_i$) hasta la posición final ($x_f$), e indica dirección y sentido: <br>$$\\vec{\\Delta x} = x_f - x_i$$</li></ul><p class="mt-2 text-slate-700">Si un móvil realiza una trayectoria de ida y vuelta regresando exactamente al punto de origen, la distancia recorrida es el doble del camino, pero su desplazamiento resultante es exactamente **cero**.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmula de Desplazamiento</p><p class="text-xs font-mono font-bold text-primary">&Delta;x = x_final - x_inicial</p><p class="text-xs text-slate-550">Distancia = Sumatoria de las magnitudes absolutas de todos los pasos recorridos.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">DISTANCIA VS DESPLAZAMIENTO</text><line x1="30" y1="90" x2="270" y2="90" stroke="#94a3b8" stroke-width="1.5" /><circle cx="40" cy="90" r="4" fill="#3b82f6" /><text x="40" y="103" font-size="8" fill="#1e40af" font-weight="bold" text-anchor="middle">Inicio (0m)</text><line x1="40" y1="70" x2="240" y2="70" stroke="#2563eb" stroke-width="2" stroke-linecap="round" /><polygon points="238,66 246,70 238,74" fill="#2563eb" /><text x="140" y="64" font-size="8" fill="#1e40af" font-weight="bold">Ida: +50 m (Este)</text><line x1="246" y1="45" x2="126" y2="45" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" /><polygon points="128,49 120,45 128,41" fill="#f59e0b" /><text x="180" y="39" font-size="8" fill="#b45309" font-weight="bold">Vuelta: -30 m (Oeste)</text><circle cx="120" cy="90" r="4" fill="#ef4444" /><text x="120" y="103" font-size="8" fill="#991b1b" font-weight="bold" text-anchor="middle">Llegada (+20m)</text></svg>',
                    svgDescription: "Un repartidor que camina 50m al Este (azul) y regresa 30m al Oeste (naranja). El desplazamiento resultante neto es de +20m al Este (distancia entre el círculo azul de Inicio y el rojo de Llegada).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un mensajero en Antigua Guatemala camina $50\\text{ metros}$ hacia el este y luego regresa sobre sus pasos $30\\text{ metros}$ hacia el oeste. ¿Cuál fue su distancia recorrida y su desplazamiento resultante?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Distancia):</strong> La distancia es un escalar que acumula la longitud total recorrida. Se suman directamente los valores absolutos: <br>$$d = 50\\text{ m} + 30\\text{ m} = 80\\text{ metros}$$</li><li><strong>Paso 2 (Desplazamiento):</strong> El desplazamiento es un vector. Definimos el este como positivo ($+$) y el oeste como negativo ($-$): <br>$$\\vec{\\Delta x} = +50\\text{ m} - 30\\text{ m} = +20\\text{ metros}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> Recorrió una distancia de <strong>80 m</strong> y su desplazamiento neto resultante fue de <strong>20 m al Este</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Pensar que siempre son iguales:</strong> Esto solo ocurre si el cuerpo viaja estrictamente en línea recta sin reversas o cambios de sentido. En cuanto hay un retorno o una curva, la distancia siempre superará al módulo del desplazamiento.</li></ul>',
                    exercises: [
                        {
                            question: "Corres alrededor de una pista atlética circular de 400 metros de longitud y regresas exactamente al punto de partida. ¿Cuál es tu desplazamiento en metros? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "El desplazamiento mide el cambio de posición x_final - x_inicial. Si regresas al mismo punto inicial, no cambiaste de posición.",
                            feedbackCorrect: "¡Excelente! Como la posición inicial y final coinciden, tu desplazamiento es exactamente 0 metros.",
                            feedbackIncorrect: "Incorrecto. Regresaste al punto de inicio, por ende el desplazamiento resultante es 0.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un automóvil viaja 80 km hacia el Norte y luego regresa 60 km hacia el Sur sobre la misma avenida. ¿Cuál es la magnitud en km de su desplazamiento resultante? (Ingresa solo el número entero):",
                            correctAnswer: "20",
                            hint: "Desplazamiento = +80 km (Norte) - 60 km (Sur). Resta los vectores opuestos.",
                            feedbackCorrect: "¡Perfecto! El desplazamiento neto es de 20 km hacia el Norte.",
                            feedbackIncorrect: "Incorrecto. Apuntan a sentidos opuestos, se restan: 80 - 60 = 20 km.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un peatón camina 3 metros hacia el Norte y luego 4 metros hacia el Este. Calcula la magnitud en metros de su desplazamiento resultante en línea recta: (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "El desplazamiento en 2D es la hipotenusa de un triángulo rectángulo de lados 3 y 4 m. Aplica el Teorema de Pitágoras.",
                            feedbackCorrect: "¡Excelente! Desplazamiento = sqrt(3^2 + 4^2) = sqrt(25) = 5 metros.",
                            feedbackIncorrect: "Incorrecto. Aplica Pitágoras para hallar la diagonal resultante: sqrt(3² + 4²) = 5.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si caminas 10 pasos hacia adelante e inmediatamente 10 pasos exactamente hacia atrás, ¿cuál es tu desplazamiento final medido en pasos? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "Toma el frente como positivo (+10) y la parte de atrás como negativa (-10).",
                            feedbackCorrect: "¡Perfecto! Terminaste en la misma baldosa inicial, tu desplazamiento es 0 pasos.",
                            feedbackIncorrect: "Incorrecto. Los 10 pasos de ida y 10 de vuelta se contrarrestan: desplazamiento = 0.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Una hormiga recorre 1.5 metros por el borde de una regla escolar. Si se asusta y regresa al punto de inicio, ¿cuál es la distancia total recorrida por la hormiga en metros? (Ingresa el número decimal con punto):",
                            correctAnswer: "3.0",
                            hint: "La distancia es un escalar acumulativo. Suma el camino de ida (1.5 m) más el de regreso (1.5 m).",
                            feedbackCorrect: "¡Excelente! La distancia acumulada de ida y vuelta es de 3.0 metros.",
                            feedbackIncorrect: "Incorrecto. La distancia sumada es 1.5 + 1.5 = 3.0 metros.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La distancia es el trayecto escalar real recorrido; el desplazamiento es el vector de cambio neto de posición. Su diferenciación rigurosa cimienta el análisis cinemático.",
                    videoPlaceholderText: "Video de Física: Diferencias de distancia vs desplazamiento explicadas con simulaciones animadas."
                },
                {
                    id: "velocidad-rapidez-media",
                    title: "Lección 1.2: Velocidad y Rapidez",
                    introduction: "Diferencia analíticamente entre la rapidez (escalar) y la velocidad (vectorial) y aprende a realizar conversiones de unidades.",
                    explanationHtml: '<p>Al igual que la distancia y el desplazamiento, el ritmo de movimiento se divide en dos magnitudes distintas:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Rapidez Media ($v$):</strong> Magnitud escalar que mide la distancia recorrida por unidad de tiempo: <br>$$v = \\frac{\\text{Distancia total}(d)}{\\text{Tiempo total}(t)}$$</li><li><strong>Velocidad Media ($\\vec{v}$):</strong> Magnitud vectorial que mide el desplazamiento neto por unidad de tiempo: <br>$$\\vec{v} = \\frac{\\text{Desplazamiento}(\\vec{\\Delta x})}{t}$$</li></ul><p class="mt-2 text-slate-700">En el Sistema Internacional (SI) la velocidad se mide en <strong>metros por segundo (m/s)</strong>. Para convertir de **kilómetros por hora (km/h) a m/s**, dividimos de forma directa el valor entre el factor constante **3.6**.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Conversión y Ecuaciones</p><p class="text-xs font-mono font-bold text-primary">Rapidez = d / t &nbsp;|&nbsp; Velocidad = &Delta;x / t</p><p class="text-xs font-mono font-bold text-primary">km/h &divide; 3.6 = m/s &nbsp;&bull;&nbsp; m/s &times; 3.6 = km/h</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">VELOCIDAD EN FÍSICA</text><circle cx="60" cy="70" r="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" /><path d="M 60 70 L 140 70" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" /><polygon points="140,66 148,70 140,74" fill="#ef4444" /><text x="105" y="62" font-size="9" font-family="monospace" fill="#ef4444" font-weight="bold">v = 16.67 m/s (60 km/h)</text><text x="60" y="105" font-size="8" fill="#475569" text-anchor="middle">Objeto (t = 2.5 h)</text><text x="220" y="74" font-size="8" fill="#1e40af" font-weight="bold">Desplazamiento = 150 km</text></svg>',
                    svgDescription: "Un objeto en movimiento con su vector de velocidad horizontal marcado en rojo de 16.67 m/s (equivalente a 60 km/h), describiendo la velocidad vectorial.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un autobús extraurbano recorre una distancia de $150\\text{ km}$ en un tiempo de $2.5\\text{ horas}$. ¿Cuál fue su rapidez media expresada en km/h y en m/s?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (km/h):</strong> Aplica la fórmula de rapidez dividiendo la distancia entre el tiempo: <br>$$v = \\frac{150\\text{ km}}{2.5\\text{ h}} = 60\\text{ km/h}$$</li><li><strong>Paso 2 (m/s):</strong> Convierte de km/h a metros por segundo (m/s) dividiendo por el factor constante de conversión $3.6$: <br>$$v_{\\text{m/s}} = \\frac{60}{3.6} \\approx 16.67\\text{ m/s}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> Su rapidez media fue de <strong>60 km/h</strong> o aproximadamente <strong>16.67 m/s</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Multiplicar por 3.6 al pasar a m/s:</strong> Confundir la dirección del factor. Recuerda: para ir de una unidad grande (km/h) a una más compacta (m/s) debes <strong>dividir</strong> entre 3.6. Para el camino inverso, multiplicas.</li></ul>',
                    exercises: [
                        {
                            question: "Si completas nadando 100 metros en una piscina olímpica en exactamente 50 segundos, ¿cuál es tu rapidez media en m/s? (Ingresa solo el número entero):",
                            correctAnswer: "2",
                            hint: "Aplica la fórmula directa v = d / t. Reemplaza d = 100 m y t = 50 s.",
                            feedbackCorrect: "¡Excelente! v = 100 / 50 = 2 m/s.",
                            feedbackIncorrect: "Incorrecto. La rapidez es 100 / 50 = 2.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un ciclista viaja a una rapidez promedio constante de 8 m/s. ¿Qué distancia en metros recorrerá en un lapso exacto de un minuto? (Ingresa solo el número entero):",
                            correctAnswer: "480",
                            hint: "Homogeneiza las unidades: 1 minuto equivale a 60 segundos. Despeja distancia como d = v * t.",
                            feedbackCorrect: "¡Perfecto! d = 8 m/s * 60 s = 480 metros.",
                            feedbackIncorrect: "Incorrecto. 1 minuto = 60s. d = v * t = 8 * 60 = 480 m.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Convierte una rapidez de 36 km/h a unidades de metros por segundo (m/s). (Ingresa solo el número entero):",
                            correctAnswer: "10",
                            hint: "Aplica el factor directo. Divide el valor de km/h entre 3.6.",
                            feedbackCorrect: "¡Excelente! 36 / 3.6 = 10 m/s.",
                            feedbackIncorrect: "Incorrecto. 36 km/h equivale a 36 / 3.6 = 10 m/s.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un atleta de alto rendimiento corre 200 metros con una rapidez constante de 5 m/s. ¿Cuánto tiempo en segundos tarda en recorrerlos? (Ingresa solo el número entero):",
                            correctAnswer: "40",
                            hint: "A partir de d = v * t, despeja el tiempo como t = d / v. Reemplaza d = 200 y v = 5.",
                            feedbackCorrect: "¡Perfecto! t = 200 / 5 = 40 segundos.",
                            feedbackIncorrect: "Incorrecto. t = d/v = 200 / 5 = 40.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un rayo cae a una distancia de 3,400 metros de tu posición. Si la velocidad del sonido en el aire es de 340 m/s, ¿cuántos segundos tardarás en escuchar el trueno?",
                            options: [
                                "1 segundo",
                                "5 segundos",
                                "10 segundos",
                                "34 segundos"
                            ],
                            correctAnswer: 2,
                            hint: "Calcula el tiempo necesario para que la onda de sonido recorra la distancia: t = d / v.",
                            feedbackCorrect: "¡Excelente! t = 3,400 m / 340 m/s = 10 segundos.",
                            feedbackIncorrect: "Incorrecto. El sonido tarda t = 3400 / 340 = 10 segundos en llegar a tus oídos.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La rapidez es el promedio escalar de la trayectoria y el tiempo; la velocidad es la tasa vectorial de desplazamiento espacial. La homogeneidad de unidades (m/s) es crucial en física.",
                    videoPlaceholderText: "Video de Física: Cómo calcular velocidad y rapidez media de forma sencilla."
                },
                {
                    id: "movimiento-rectilineo-uniforme-mru",
                    title: "Lección 1.3: Movimiento Rectilíneo Uniforme (MRU)",
                    introduction: "Aprende las características del movimiento a velocidad constante en línea recta, donde la aceleración es nula.",
                    explanationHtml: '<p>El <strong>Movimiento Rectilíneo Uniforme (MRU)</strong> ocurre cuando un objeto se desplaza en línea recta y a **velocidad constante**. Al no cambiar de velocidad, la aceleración del sistema es exactamente **cero**.</p><p>Las tres propiedades fundamentales del MRU son:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li>La trayectoria es una línea recta.</li><li>La velocidad mantiene de forma idéntica su magnitud, dirección y sentido.</li><li>El objeto recorre **distancias iguales en intervalos de tiempo iguales** (relación lineal directa).</li></ul><p class="mt-2 font-bold text-slate-800">La Ecuación Fundamental:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">d = v \\cdot t</p><p class="text-slate-700">Donde $d$ es la distancia, $v$ la rapidez constante, y $t$ el tiempo empleado.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Triángulo de Ecuaciones MRU</p><p class="text-xs font-mono font-bold text-primary">d = v &bull; t &nbsp;|&nbsp; v = d / t &nbsp;|&nbsp; t = d / v</p><p class="text-xs text-slate-550">Herramienta: Tapa la letra que deseas calcular para obtener su despeje algebraico directo.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">MRU: VELOCIDAD CONSTANTE</text><line x1="30" y1="85" x2="270" y2="85" stroke="#94a3b8" stroke-width="1.5" /><circle cx="50" cy="70" r="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" /><path d="M 50 70 L 95 70" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" /><polygon points="93,66 100,70 93,74" fill="#3b82f6" /><text x="50" y="98" font-size="8" fill="#475569" text-anchor="middle">t = 0 s</text><circle cx="150" cy="70" r="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" /><path d="M 150 70 L 195 70" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" /><polygon points="193,66 200,70 193,74" fill="#3b82f6" /><text x="150" y="98" font-size="8" fill="#475569" text-anchor="middle">t = 1 s</text><circle cx="250" cy="70" r="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" /><text x="250" y="98" font-size="8" fill="#475569" text-anchor="middle">t = 2 s</text><text x="100" y="55" font-size="8" fill="#2563eb" font-weight="bold" text-anchor="middle">Distancia = 10m</text><text x="200" y="55" font-size="8" fill="#2563eb" font-weight="bold" text-anchor="middle">Distancia = 10m</text></svg>',
                    svgDescription: "Un móvil en MRU que viaja en línea recta horizontal a velocidad constante, recorriendo distancias idénticas de 10 metros en cada intervalo regular de 1 segundo.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Dos automóviles salen de Ciudad de Guatemala hacia Quetzaltenango (distancia de $200\\text{ km}$). El auto A viaja a una rapidez constante de $50\\text{ km/h}$ y el auto B a $80\\text{ km/h}$ constantes. ¿Con cuánto tiempo de diferencia llegará el auto B respecto al A?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Auto A):</strong> Calcula su tiempo despejando de la fórmula ($t = d/v$): <br>$$t_A = \\frac{200\\text{ km}}{50\\text{ km/h}} = 4\\text{ horas}$$</li><li><strong>Paso 2 (Auto B):</strong> Calcula su tiempo de la misma forma: <br>$$t_B = \\frac{200\\text{ km}}{80\\text{ km/h}} = 2.5\\text{ horas}$$</li><li><strong>Paso 3 (Diferencia):</strong> Resta los dos tiempos para hallar la ventaja temporal: <br>$$\\text{Diferencia} = t_A - t_B = 4\\text{ h} - 2.5\\text{ h} = 1.5\\text{ horas}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El auto B llegará exactly **1.5 horas antes** (1 hora y 30 minutos) que el auto A.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Usar la fórmula en movimientos acelerados:</strong> Querer aplicar $d = v \\cdot t$ a caída libre o autos frenando. Esta fórmula es de uso exclusivo si la velocidad no cambia (aceleración nula).</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué distancia en kilómetros recorre un tren de pasajeros que viaja a 90 km/h constantes durante un viaje de 4 horas? (Ingresa solo el número entero):",
                            correctAnswer: "360",
                            hint: "Aplica la fórmula fundamental del MRU: d = v * t. Reemplaza v = 90 y t = 4.",
                            feedbackCorrect: "¡Excelente! d = 90 * 4 = 360 km.",
                            feedbackIncorrect: "Incorrecto. d = v * t = 90 * 4 = 360.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si una onda de radio viaja a la velocidad de la luz (300,000 km/s), ¿cuántos segundos tardará en llegar a la Luna si la distancia promedio es de 384,000 km? (Ingresa el número decimal con punto):",
                            correctAnswer: "1.28",
                            hint: "Aplica t = d / v. Reemplaza d = 384,000 km y v = 300,000 km/s.",
                            feedbackCorrect: "¡Perfecto! t = 384,000 / 300,000 = 1.28 segundos.",
                            feedbackIncorrect: "Incorrecto. t = d / v = 384000 / 300000 = 1.28.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Caminas a una velocidad constante de 1.5 m/s. ¿Cuánto tiempo en segundos tardas en recorrer una calle recta de 150 metros? (Ingresa solo el número entero):",
                            correctAnswer: "100",
                            hint: "Despeja el tiempo a partir de la fórmula: t = d / v. Reemplaza d = 150 y v = 1.5.",
                            feedbackCorrect: "¡Excelente! t = 150 / 1.5 = 100 segundos.",
                            feedbackIncorrect: "Incorrecto. t = d / v = 150 / 1.5 = 100.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un motociclista de la capital viaja a 20 m/s constantes. ¿Qué distancia en kilómetros recorre en media hora? (Ingresa solo el número entero):",
                            correctAnswer: "36",
                            hint: "Homogeneiza las unidades: media hora son 1,800 segundos. Calcula d = 20 * 1,800 = 36,000 m. Convierte a km dividiendo entre 1,000.",
                            feedbackCorrect: "¡Perfecto! 36,000 metros equivalen a exactamente 36 km.",
                            feedbackIncorrect: "Incorrecto. Media hora = 1800s. d = 20 * 1800 = 36000 m = 36 km.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Dos atletas corren en sentidos opuestos alejándose a velocidades constantes de 3 m/s y 5 m/s. ¿Qué distancia en metros los separa tras 10 segundos?",
                            options: [
                                "20 metros",
                                "30 metros",
                                "50 metros",
                                "80 metros"
                            ],
                            correctAnswer: 3,
                            hint: "Al correr en sentidos contrarios, su velocidad relativa de separación se suma: 3 m/s + 5 m/s = 8 m/s. Calcula d = v_relativa * t.",
                            feedbackCorrect: "¡Excelente! Se separan a 8 m/s, tras 10 s están a 8 * 10 = 80 metros.",
                            feedbackIncorrect: "Incorrecto. Se separan a razón de 8 m/s, por lo que en 10 s recorren 80 metros.",
                            difficulty: "avanzado",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El MRU describe movimientos rectilíneos sin aceleración. La constancia de la velocidad ($d = v \cdot t$) modela sistemas estáticos y cinemáticas uniformes.",
                    videoPlaceholderText: "Video de Física: Conceptos de MRU y resolución de problemas de persecución."
                }
            ]
        },
        {
            title: "Unidad 2: Aceleración y MRUA",
            lessons: [
                {
                    id: "concepto-de-aceleracion",
                    title: "Lección 2.1: El Concepto de Aceleración",
                    introduction: "Comprende la aceleración como la tasa de cambio temporal de la velocidad e interpreta aceleraciones positivas y negativas.",
                    explanationHtml: '<p>En la realidad física, los cuerpos rara vez viajan a velocidad constante. La <strong>aceleración</strong> es la magnitud vectorial que mide qué tan rápido cambia la velocidad de un objeto por unidad de tiempo:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$a = \\frac{v_f - v_i}{t}$$</p><p class="mt-2 text-slate-800">Donde $v_f$ es la velocidad final, $v_i$ la velocidad inicial, y $t$ el tiempo empleado. La unidad de medida en el Sistema Internacional es <strong>metros por segundo al cuadrado (m/s²)</strong>.</p><p class="mt-2 font-bold text-slate-800">Interpretación de Signos:</p><ul class="list-disc pl-5 space-y-1.5 my-2"><li><strong>Aceleración Positiva ($a > 0$):</strong> El móvil aumenta su velocidad con el tiempo (acelera).</li><li><strong>Aceleración Negativa ($a < 0$):</strong> El móvil reduce su velocidad con el tiempo (desacelera o frena).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmula de Aceleración</p><p class="text-xs font-mono font-bold text-primary">a = (v_final - v_inicial) / t</p><p class="text-xs text-slate-550">Recuerda: Si el objeto parte del reposo, su velocidad inicial (v_i) es exactamente cero.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ACELERACIÓN EN EL TIEMPO</text><line x1="30" y1="85" x2="270" y2="85" stroke="#94a3b8" stroke-width="1.5" /><circle cx="50" cy="70" r="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" /><text x="50" y="98" font-size="7" fill="#475569" text-anchor="middle">vi = 0 m/s (Reposo)</text><circle cx="230" cy="70" r="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" /><text x="230" y="98" font-size="7" fill="#475569" text-anchor="middle">vf = 30 m/s</text><line x1="90" y1="50" x2="190" y2="50" stroke="#059669" stroke-width="2" stroke-linecap="round" /><polygon points="188,46 196,50 188,54" fill="#059669" /><text x="143" y="42" font-size="8" fill="#047857" font-weight="bold" text-anchor="middle">Aceleración a = 5 m/s²</text><text x="143" y="112" font-size="7" fill="#64748b" text-anchor="middle">Tiempo transcurrido = 6 s</text></svg>',
                    svgDescription: "Un vehículo acelerando desde vi = 0 hasta vf = 30 m/s en 6 segundos. Se ilustra la aceleración media de 5 m/s² constante que lo empuja hacia adelante.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un automóvil deportivo en la autopista de Escuintla parte del reposo y alcanza una velocidad de $30\\text{ m/s}$ en un tiempo de $6\\text{ segundos}$. ¿Cuál fue su aceleración media?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica las variables dadas: velocidad inicial ($v_i = 0$ por "reposo"), velocidad final ($v_f = 30\\text{ m/s}$), tiempo ($t = 6\\text{ s}$).</li><li><strong>Paso 2:</strong> Plantea la fórmula de aceleración: <br>$$a = \\frac{v_f - v_i}{t}$$</li><li><strong>Paso 3:</strong> Reemplaza y opera: <br>$$a = \\frac{30 - 0}{6} = \\frac{30}{6} = 5\\text{ m/s}^2$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> Su aceleración media fue de exactamente <strong>5 m/s²</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar el orden de resta:</strong> Restar $v_i - v_f$. Esto alteraría el signo de la aceleración. Haz siempre velocidad FINAL menos velocidad INICIAL.</li><li><strong>Unidades erróneas:</strong> Escribir $m/s$ en lugar de $m/s^2$ para la aceleración.</li></ul>',
                    exercises: [
                        {
                            question: "Un vehículo frena pasando de 25 m/s a 5 m/s en un intervalo de 4 segundos. ¿Cuál fue su aceleración en m/s²? (Ingresa el valor entero, incluyendo signo si aplica):",
                            correctAnswer: "-5",
                            hint: "Aplica a = (vf - vi) / t. Reemplaza vf = 5, vi = 25 y t = 4. Debe resultar negativo al estar frenando.",
                            feedbackCorrect: "¡Excelente! a = (5 - 25) / 4 = -20 / 4 = -5 m/s².",
                            feedbackIncorrect: "Incorrecto. Al frenar da aceleración negativa: (5 - 25) / 4 = -5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si una motocicleta arranca con una aceleración constante de 3 m/s², ¿cuál será su velocidad final en m/s tras 8 segundos? (Ingresa solo el número entero):",
                            correctAnswer: "24",
                            hint: "Despeja velocidad final de la ecuación: vf = vi + a * t. Recuerda que parte del reposo (vi = 0).",
                            feedbackCorrect: "¡Perfecto! vf = 0 + 3 * 8 = 24 m/s.",
                            feedbackIncorrect: "Incorrecto. vf = a * t = 3 * 8 = 24.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un objeto cae libremente desde un edificio partiendo del reposo. Si la aceleración de la gravedad es de 9.8 m/s², ¿qué velocidad en m/s tendrá tras 3 segundos? (Ingresa el número decimal con punto):",
                            correctAnswer: "29.4",
                            hint: "Aplica vf = vi + g * t. Reemplaza vi = 0, g = 9.8 y t = 3.",
                            feedbackCorrect: "¡Excelente! vf = 9.8 * 3 = 29.4 m/s.",
                            feedbackIncorrect: "Incorrecto. vf = 9.8 * 3 = 29.4.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuánto tiempo en segundos tardará un corredor en pasar de una velocidad de 2 m/s a una de 8 m/s si acelera a razón de 1.5 m/s²? (Ingresa solo el número entero):",
                            correctAnswer: "4",
                            hint: "Despeja el tiempo de la fórmula: t = (vf - vi) / a. Reemplaza vf = 8, vi = 2, a = 1.5.",
                            feedbackCorrect: "¡Perfecto! t = (8 - 2) / 1.5 = 6 / 1.5 = 4 segundos.",
                            feedbackIncorrect: "Incorrecto. t = (8 - 2) / 1.5 = 4.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Un tren viaja a 40 m/s y el maquinista aplica los frenos desacelerando a razón constante de -2 m/s². ¿Cuánto tiempo en segundos tarda en detenerse por completo? (Ingresa solo el número entero):",
                            correctAnswer: "20",
                            hint: "Al detenerse, su velocidad final (vf) es exactamente 0. Plantea t = (vf - vi) / a.",
                            feedbackCorrect: "¡Excelente! t = (0 - 40) / -2 = 20 segundos.",
                            feedbackIncorrect: "Incorrecto. t = (0 - 40) / -2 = 20.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La aceleración cuantifica la tasa de variación instantánea de la velocidad. Aceleraciones positivas describen arranques y las negativas frenados de móviles en el espacio.",
                    videoPlaceholderText: "Video de Física: Concepto de aceleración y su diferencia con la velocidad explicada."
                },
                {
                    id: "ecuaciones-fundamentales-mrua",
                    title: "Lección 2.2: Ecuaciones del MRUA",
                    introduction: "Domina las 4 ecuaciones de oro del Movimiento Rectilíneo Uniformemente Variado y aprende cuál elegir según cada problema.",
                    explanationHtml: '<p>En el <strong>Movimiento Rectilíneo Uniformemente Acelerado (MRUA)</strong> la aceleración del sistema es constante. Para resolver problemas de este tipo, relacionamos 5 variables: distancia ($d$), velocidad inicial ($v_i$), velocidad final ($v_f$), aceleración ($a$) y tiempo ($t$).</p><p class="mt-2 font-bold text-slate-800">Las 4 Ecuaciones Fundamentales:</p><ol class="list-decimal pl-5 space-y-2 my-3"><li>$$v_f = v_i + a \\cdot t \\quad \\text{(No contiene } d\\text{)}$$</li><li>$$d = v_i \\cdot t + \\frac{1}{2} a \\cdot t^2 \\quad \\text{(No contiene } v_f\\text{)}$$</li><li>$$v_f^2 = v_i^2 + 2a \\cdot d \\quad \\text{(No contiene } t\\text{)}$$</li><li>$$d = \\left( \\frac{v_i + v_f}{2} \\right) \\cdot t \\quad \\text{(No contiene } a\\text{)}$$</li></ol><p class="mt-2 text-slate-700">El secreto para resolver cualquier ejercicio es identificar qué variable **no es dato ni se pregunta**, y elegir la fórmula que prescinde de ella.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Guía de Selección de Ecuación</p><p class="text-xs font-mono font-bold text-primary">Buscar variable faltante &rArr; Seleccionar ecuaci&oacute;n correspondiente</p><p class="text-xs text-slate-500">Ejemplo: Si no te dan tiempo ni lo piden, usa la Ecuación 3.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ECUACIONES DE ORO DEL MRUA</text><rect x="15" y="35" width="130" height="32" fill="#eff6ff" stroke="#bfdbfe" rx="4" /><text x="80" y="47" font-size="7" fill="#1e40af" font-weight="bold" text-anchor="middle">1. vf = vi + at</text><text x="80" y="59" font-size="7" fill="#64748b" text-anchor="middle">Fórmula lineal de velocidad</text><rect x="155" y="35" width="130" height="32" fill="#ecfdf5" stroke="#a7f3d0" rx="4" /><text x="220" y="47" font-size="7" fill="#065f46" font-weight="bold" text-anchor="middle">2. d = vi·t + ½at²</text><text x="220" y="59" font-size="7" fill="#64748b" text-anchor="middle">Fórmula cuadrática de distancia</text><rect x="15" y="75" width="130" height="32" fill="#fffbeb" stroke="#fde68a" rx="4" /><text x="80" y="87" font-size="7" fill="#d97706" font-weight="bold" text-anchor="middle">3. vf² = vi² + 2ad</text><text x="80" y="99" font-size="7" fill="#64748b" text-anchor="middle">Independiente del tiempo</text><rect x="155" y="75" width="130" height="32" fill="#fef2f2" stroke="#fca5a5" rx="4" /><text x="220" y="87" font-size="7" fill="#991b1b" font-weight="bold" text-anchor="middle">4. d = [(vi+vf)/2]·t</text><text x="220" y="99" font-size="7" fill="#64748b" text-anchor="middle">Velocidad media multiplicada</text></svg>',
                    svgDescription: "Cajas estilizadas que presentan de forma estructurada las 4 ecuaciones de oro del MRUA para facilitar su visualización y consulta rápida.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un auto acelera de $10\\text{ m/s}$ a $20\\text{ m/s}$ de forma constante a lo largo de una distancia de $75\\text{ metros}$ en línea recta. ¿Cuánto vale su aceleración?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Registra las variables dadas: $v_i = 10\\text{ m/s}$, $v_f = 20\\text{ m/s}$, $d = 75\\text{ m}$. Queremos hallar $a$. El tiempo $t$ no figura como dato ni como pregunta.</li><li><strong>Paso 2:</strong> Elegimos la Ecuación 3, que es la única que prescinde del tiempo: <br>$$v_f^2 = v_i^2 + 2ad$$</li><li><strong>Paso 3:</strong> Sustituye las variables: <br>$$20^2 = 10^2 + 2 \\cdot a \\cdot 75 \\Rightarrow 400 = 100 + 150a$$</li><li><strong>Paso 4:</strong> Despeja el término de la aceleración: <br>$$400 - 100 = 150a \\Rightarrow 300 = 150a \\Rightarrow a = \\frac{300}{150} = 2\\text{ m/s}^2$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La aceleración del móvil es de exactamente <strong>2 m/s²</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Usar fórmulas con dos incógnitas:</strong> Tratar de calcular la aceleración usando la ecuación 2 cuando no conoces ni la distancia ni el tiempo. Analiza primero tus variables antes de elegir la fórmula.</li></ul>',
                    exercises: [
                        {
                            question: "Un automóvil parte del reposo y acelera a una tasa constante de 4 m/s² durante 5 segundos. ¿Qué distancia en metros recorre? (Ingresa solo el número entero):",
                            correctAnswer: "50",
                            hint: "Usa la Ecuación 2: d = vi * t + 0.5 * a * t². Como parte del reposo, vi = 0.",
                            feedbackCorrect: "¡Excelente! d = 0.5 * 4 * 5² = 2 * 25 = 50 metros.",
                            feedbackIncorrect: "Incorrecto. d = 0.5 * a * t² = 0.5 * 4 * 25 = 50 m.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un móvil viaja a 15 m/s y frena hasta detenerse por completo tras recorrer una distancia lineal de 30 metros. ¿Cuál fue su desaceleración en m/s²? (Ingresa el número decimal con punto y signo negativo, ej: -3.75):",
                            correctAnswer: "-3.75",
                            hint: "Usa la Ecuación 3: vf² = vi² + 2ad. Como se detiene, vf = 0. Resuelve 0 = 15² + 2 * a * 30. Despeja 'a'.",
                            feedbackCorrect: "¡Perfecto! 0 = 225 + 60a => a = -225 / 60 = -3.75 m/s².",
                            feedbackIncorrect: "Incorrecto. a = -vi² / 2d = -225 / 60 = -3.75.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Con los datos del ejercicio anterior, ¿cuánto tiempo en segundos tardó el móvil en detenerse por completo? (Ingresa solo el número entero):",
                            correctAnswer: "4",
                            hint: "Usa la Ecuación 4: d = ((vi + vf) / 2) * t. Reemplaza d = 30, vi = 15, vf = 0 y despeja t.",
                            feedbackCorrect: "¡Excelente! 30 = 7.5 * t => t = 30 / 7.5 = 4 segundos.",
                            feedbackIncorrect: "Incorrecto. t = 2d / (vi + vf) = 60 / 15 = 4.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un avión comercial necesita alcanzar una velocidad de 60 m/s para despegar. Si acelera de forma constante a razón de 3 m/s² a partir del reposo, ¿qué longitud mínima de pista en metros requiere?",
                            options: [
                                "300 metros",
                                "450 metros",
                                "600 metros",
                                "900 metros"
                            ],
                            correctAnswer: 2,
                            hint: "Aplica vf² = vi² + 2ad. Reemplaza vf = 60, vi = 0, a = 3 y despeja d.",
                            feedbackCorrect: "¡Excelente! 60² = 2 * 3 * d => 3600 = 6d => d = 600 metros.",
                            feedbackIncorrect: "Incorrecto. d = vf² / 2a = 3600 / 6 = 600 metros.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Una motocicleta acelera a razón constante de 2 m/s² partiendo del reposo. ¿Cuál será su velocidad final en m/s al cabo de recorrer una recta de 100 metros? (Ingresa solo el número entero):",
                            correctAnswer: "20",
                            hint: "Usa la Ecuación 3: vf² = vi² + 2ad. Saca la raíz cuadrada del resultado para despejar vf.",
                            feedbackCorrect: "¡Perfecto! vf² = 2 * 2 * 100 = 400 => vf = sqrt(400) = 20 m/s.",
                            feedbackIncorrect: "Incorrecto. vf² = 2 * 2 * 100 = 400; vf = 20.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Las 4 ecuaciones fundamentales del MRUA unifican analíticamente las variables de movimiento lineal con aceleración constante, permitiendo predecir estados cinemáticos futuros.",
                    videoPlaceholderText: "Video de Cálculo: Cómo resolver cualquier problema de MRUA memorizando una tabla de selección."
                },
                {
                    id: "caida-libre-tiro-vertical",
                    title: "Lección 2.3: Caída Libre y Tiro Vertical",
                    introduction: "Aprende el comportamiento del movimiento vertical bajo la influencia gravitacional, y domina las convenciones de signos de caída.",
                    explanationHtml: '<p>La <strong>caída libre</strong> y el <strong>tiro vertical</strong> son aplicaciones del MRUA sobre el eje vertical ($Y$). En estos movimientos, la aceleración es constante e igual a la aceleración de la gravedad terrestre:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">g ≈ 9.8 m/s² (o 10 m/s² para simplificar)</p><p class="mt-2 font-bold text-slate-800">Reglas y Convenio de Signos:</p><ul class="list-disc pl-5 space-y-1.5 my-2"><li>La gravedad siempre jala **hacia abajo** (rumbo al centro de la Tierra), por lo que en las ecuaciones vectoriales su aceleración se ingresa con signo negativo: $g = -9.8\\text{ m/s}^2$.</li><li>Al lanzar un objeto hacia arriba (tiro vertical), su velocidad disminuye hasta llegar a cero en su punto más alto (altura máxima). Luego, inicia su descenso acelerando hacia abajo.</li><li>El tiempo que tarda un objeto en subir es exactamente igual al tiempo que tarda en bajar al mismo nivel de lanzamiento.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuaciones Verticales (Eje Y)</p><p class="text-xs font-mono font-bold text-primary">vf = vi - gt &nbsp;|&nbsp; y = vi&bull;t - &frac12;gt&sup2; &nbsp;|&nbsp; vf&sup2; = vi&sup2; - 2gy</p><p class="text-xs text-slate-550">Nota: Al usar el signo menos en las fórmulas, la gravedad g se ingresa como positiva (9.8).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">CAÍDA LIBRE (g = 10 m/s²)</text><line x1="80" y1="30" x2="80" y2="105" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><circle cx="80" cy="30" r="5" fill="#3b82f6" /><text x="92" y="33" font-size="7" fill="#475569">t = 0 s (vi = 0)</text><circle cx="80" cy="45" r="5" fill="#3b82f6" opacity="0.8" /><text x="92" y="48" font-size="7" fill="#475569">t = 1 s (v = 10m/s)</text><circle cx="80" cy="70" r="5" fill="#3b82f6" opacity="0.6" /><text x="92" y="73" font-size="7" fill="#475569">t = 2 s (v = 20m/s)</text><circle cx="80" cy="105" r="5" fill="#ef4444" /><text x="92" y="108" font-size="7" fill="#991b1b" font-weight="bold">t = 3 s (v = 30m/s)</text><text x="210" y="65" font-size="10" fill="#ef4444" font-weight="bold" text-anchor="middle">Altura H = 45m</text></svg>',
                    svgDescription: "Representación de una caída libre de 3 segundos desde un puente de 45m. Los círculos de posición se separan cada vez más en el tiempo por efecto de la aceleración constante de la gravedad.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Se deja caer una piedra desde lo alto de un puente de $45\\text{ metros}$ de altura. ¿Cuánto tiempo tardará en impactar contra el agua? (Usa la gravedad simplificada $g = 10\\text{ m/s}^2$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Registra los datos: velocidad inicial ($v_i = 0$ al "dejarse caer"), distancia vertical ($d = 45\\text{ m}$), aceleración de gravedad ($g = 10\\text{ m/s}^2$).</li><li><strong>Paso 2:</strong> Elige la ecuación de distancia vertical sin velocidad final (Ecuación 2): <br>$$d = v_i \\cdot t + \\frac{1}{2} g \\cdot t^2$$</li><li><strong>Paso 3:</strong> Sustituye los valores: <br>$$45 = 0 \\cdot t + \\frac{1}{2} (10) \\cdot t^2 \\Rightarrow 45 = 5t^2$$</li><li><strong>Paso 4:</strong> Despeja el tiempo al cuadrado: $t^2 = 45 ÷ 5 = 9$.</li><li><strong>Paso 5:</strong> Saca la raíz cuadrada: $t = \\sqrt{9} = 3\\text{ segundos}$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La piedra tarda exactamente <strong>3 segundos</strong> en golpear el agua.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Ignorar el signo de la gravedad al lanzar hacia arriba:</strong> Si un objeto sube, su velocidad apunta hacia arriba ($+$) pero la gravedad jala hacia abajo ($-$). Si no colocas signo negativo a la gravedad en este caso, la ecuación te arrojará de forma errónea que el objeto acelera hacia arriba infinitamente en lugar de frenarse.</li></ul>',
                    exercises: [
                        {
                            question: "Lanzas una pelota verticalmente hacia arriba a una velocidad inicial de 20 m/s. ¿Cuánto tiempo en segundos tarda en alcanzar su altura máxima? (Usa g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "2",
                            hint: "En el punto de altura máxima la velocidad final (vf) es exactamente cero. Aplica la fórmula: vf = vi - g * t.",
                            feedbackCorrect: "¡Excelente! 0 = 20 - 10t => 10t = 20 => t = 2 segundos.",
                            feedbackIncorrect: "Incorrecto. En la altura máxima vf=0. 0 = 20 - 10t; t = 2 segundos.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Con los mismos datos del ejercicio anterior (vi = 20 m/s, t = 2 s), ¿cuál es la altura máxima en metros alcanzada por la pelota? (Ingresa solo el número entero):",
                            correctAnswer: "20",
                            hint: "Usa la fórmula de distancia promedio: d = ((vi + vf) / 2) * t. Reemplaza vi = 20, vf = 0 y t = 2.",
                            feedbackCorrect: "¡Perfecto! d = ((20 + 0) / 2) * 2 = 10 * 2 = 20 metros.",
                            feedbackIncorrect: "Incorrecto. Altura = ((20 + 0)/2) * 2 = 20 metros.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Se deja caer libremente un objeto desde lo alto de una torre de telecomunicaciones y tarda exactamente 4 segundos en golpear el suelo. ¿De qué altura en metros cayó? (Usa g = 9.8 m/s². Ingresa el número decimal con punto):",
                            correctAnswer: "78.4",
                            hint: "Aplica d = 0.5 * g * t² con vi = 0. Reemplaza g = 9.8 y t = 4.",
                            feedbackCorrect: "¡Excelente! d = 0.5 * 9.8 * 16 = 4.9 * 16 = 78.4 metros.",
                            feedbackIncorrect: "Incorrecto. d = 0.5 * 9.8 * 4² = 78.4 m.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Con qué velocidad inicial en m/s se debe lanzar una piedra verticalmente hacia arriba para que logre una altura máxima de 80 metros? (Usa g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "40",
                            hint: "Aplica vf² = vi² - 2gy. En la altura máxima vf = 0 y y = 80. Resuelve 0 = vi² - 2 * 10 * 80.",
                            feedbackCorrect: "¡Perfecto! vi² = 1600 => vi = sqrt(1600) = 40 m/s.",
                            feedbackIncorrect: "Incorrecto. vi² = 2 * 10 * 80 = 1600; vi = 40.",
                            difficulty: "avanzado",
                            type: "short"
                        },
                        {
                            question: "Una jugosa manzana se desprende de una rama alta y cae tocando el suelo en 0.8 segundos. ¿Con qué rapidez en m/s impacta contra el asfalto? (Usa g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "8",
                            hint: "Aplica la ecuación de velocidad: vf = vi + g * t. Como se desprende, vi = 0.",
                            feedbackCorrect: "¡Excelente! vf = 0 + 10 * 0.8 = 8 m/s.",
                            feedbackIncorrect: "Incorrecto. vf = g * t = 10 * 0.8 = 8.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La caída libre y el tiro vertical son movimientos uniaxiales acelerados por la gravedad. El riguroso control vectorial de signos asegura el éxito analítico de la altura máxima.",
                    videoPlaceholderText: "Video de Física: Caída libre y tiro vertical con ejercicios típicos resueltos paso a paso."
                }
            ]
        },
        {
            title: "Unidad 3: Movimiento en Dos Dimensiones",
            lessons: [
                {
                    id: "tiro-parabolico-proyectiles",
                    title: "Lección 3.1: Composición de Movimientos (Tiro Parabólico)",
                    introduction: "Domina el análisis del movimiento en 2D descomponiéndolo en un eje horizontal con velocidad constante y un eje vertical acelerado.",
                    explanationHtml: '<p>El <strong>tiro parabólico</strong> o movimiento de proyectiles describe la trayectoria curva de un cuerpo lanzado al aire con un ángulo de inclinación $\\theta$. Galileo Galilei demostró que este movimiento se compone de dos movimientos independientes y perpendiculares:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Eje Horizontal (X):</strong> No hay fuerzas que aceleren al proyectil en esta dirección (despreciando el aire). Viaja con **velocidad constante (MRU)**: <br>$$d_x = v_x \\cdot t \\quad \\text{donde } v_x = v_i \\cos(\\theta)$$</li><li><strong>Eje Vertical (Y):</strong> Afectado de forma constante por la aceleración de la gravedad. Realiza un **movimiento acelerado (MRUA / Caída libre)**: <br>$$v_y = v_{iy} - gt \\quad \\text{donde } v_{iy} = v_i \\operatorname{sen}(\\theta)$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Componentes de Lanzamiento</p><p class="text-xs font-mono font-bold text-primary">vx = vi cos(&theta;) (Constante) &nbsp;|&nbsp; viy = vi sen(&theta;) (Afectado por g)</p><p class="text-xs text-slate-550">El puente de conexión entre ambos ejes es siempre la variable del TIEMPO (t).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">TIRO PARABÓLICO EN EL PLANO</text><path d="M 40 95 Q 140 10 240 95" fill="none" stroke="#2563eb" stroke-dasharray="2,2" stroke-width="2" /><circle cx="40" cy="95" r="5" fill="#3b82f6" /><line x1="40" y1="95" x2="80" y2="55" stroke="#ef4444" stroke-width="2" stroke-linecap="round" /><polygon points="78,59 83,52 75,53" fill="#ef4444" /><text x="65" y="47" font-size="8" fill="#ef4444" font-weight="bold">vi</text><circle cx="140" cy="52.5" r="5" fill="#3b82f6" /><line x1="140" y1="52.5" x2="175" y2="52.5" stroke="#059669" stroke-width="1.5" /><polygon points="173,49 180,52.5 173,56" fill="#059669" /><text x="160" y="45" font-size="8" fill="#047857" font-weight="bold">vx</text><circle cx="240" cy="95" r="5" fill="#ef4444" /><text x="140" y="112" font-size="8" fill="#64748b" text-anchor="middle">Eje X: MRU (vx) | Eje Y: MRUA (viy, g)</text></svg>',
                    svgDescription: "Gráfico de trayectoria parabólica de un proyectil. Muestra el vector de velocidad de lanzamiento vi descompuesto en vx horizontal constante e viy vertical afectada por la gravedad.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Una pelota es lanzada horizontalmente desde lo alto de una mesa de $1.25\\text{ metros}$ de altura con una velocidad horizontal de $4\\text{ m/s}$. ¿A qué distancia de la base de la mesa caerá la pelota? (Usa la gravedad simplificada $g = 10\\text{ m/s}^2$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Eje Y - Tiempo de Caída):</strong> Como el lanzamiento es puramente horizontal, la velocidad inicial en Y es cero ($v_{iy} = 0$). Planteamos la caída vertical: <br>$$h = \\frac{1}{2} g t^2 \\Rightarrow 1.25 = \\frac{1}{2}(10) t^2 \\Rightarrow 1.25 = 5t^2$$ <br>Despejamos: $t^2 = 1.25 ÷ 5 = 0.25 \\Rightarrow t = \\sqrt{0.25} = 0.5$ segundos.</li><li><strong>Paso 2 (Eje X - Alcance Horizontal):</strong> Usamos el tiempo calculado ($t = 0.5\\text{ s}$) y la velocidad horizontal constante $v_x = 4\\text{ m/s}$: <br>$$d_x = v_x \\cdot t = 4\\text{ m/s} \\times 0.5\\text{ s} = 2\\text{ metros}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La pelota impactará el suelo a una distancia horizontal de exactly **2 metros** de la base.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Mezclar componentes en las fórmulas:</strong> Usar la velocidad horizontal en la fórmula vertical de caída ($h = v_x t + 0.5gt^2$). Mantén separados de forma estricta los dos ejes en tu planteo.</li></ul>',
                    exercises: [
                        {
                            question: "Si un proyectil es lanzado con una velocidad horizontal de 15 m/s desde una altura de 20 metros, ¿cuánto tiempo en segundos tarda en caer? (Usa g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "2",
                            hint: "Calcula el tiempo vertical con t = sqrt(2h/g). Reemplaza h = 20 y g = 10.",
                            feedbackCorrect: "¡Excelente! t = sqrt(2*20 / 10) = sqrt(40 / 10) = sqrt(4) = 2 segundos.",
                            feedbackIncorrect: "Incorrecto. t = sqrt(2h/g) = sqrt(40/10) = 2.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Con los datos del ejercicio anterior (vx = 15 m/s, t = 2 s), ¿cuál es el alcance horizontal total en metros del proyectil? (Ingresa solo el número entero):",
                            correctAnswer: "30",
                            hint: "Aplica la fórmula horizontal directa: d = vx * t. Reemplaza vx = 15 y t = 2.",
                            feedbackCorrect: "¡Perfecto! d = 15 * 2 = 30 metros de distancia horizontal.",
                            feedbackIncorrect: "Incorrecto. Alcance = vx * t = 15 * 2 = 30 metros.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un futbolista patea un balón con un ángulo de elevación de modo que su velocidad inicial horizontal es de 12 m/s y su velocidad inicial vertical es de 20 m/s. ¿Cuál es el tiempo de vuelo total en segundos del balón? (Usa g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "4",
                            hint: "El tiempo de vuelo es el doble del tiempo de subida. Tiempo de subida = viy / g = 20 / 10 = 2 s. Multiplica por 2.",
                            feedbackCorrect: "¡Excelente! Tiempo de vuelo = 2 * (20 / 10) = 4 segundos.",
                            feedbackIncorrect: "Incorrecto. Subida = 2s, por lo que el vuelo completo es de 4 segundos.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Con los mismos datos del ejercicio anterior (vx = 12 m/s, tiempo de vuelo = 4 s), ¿cuál fue el alcance horizontal total en metros del balón? (Ingresa solo el número entero):",
                            correctAnswer: "48",
                            hint: "El alcance se calcula multiplicando la velocidad horizontal constante por el tiempo de vuelo completo: d = vx * t_vuelo.",
                            feedbackCorrect: "¡Perfecto! d = 12 m/s * 4 s = 48 metros.",
                            feedbackIncorrect: "Incorrecto. Alcance = vx * t = 12 * 4 = 48.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Qué velocidad vertical posee un proyectil exactamente en su punto más alto (altura máxima) de su trayectoria parabólica?",
                            options: [
                                "Es igual a la velocidad inicial de lanzamiento.",
                                "Es exactamente cero (0 m/s).",
                                "Es igual a la velocidad horizontal de avance.",
                                "Depende de la aceleración del aire."
                            ],
                            correctAnswer: 1,
                            hint: "Al dejar de subir y empezar a bajar, la velocidad en Y se anula puntualmente; sin embargo, sigue avanzando horizontalmente.",
                            feedbackCorrect: "¡Perfecto! En la cúspide la velocidad vertical es 0 m/s, toda la velocidad en ese punto es puramente horizontal.",
                            feedbackIncorrect: "Incorrecto. Al dejar de subir y antes de bajar, su velocidad vertical es exactamente cero.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El tiro parabólico es la composición ortogonal de un MRU horizontal y un MRUA vertical. El tiempo de vuelo actúa como el parámetro de conexión fundamental entre ambos ejes.",
                    videoPlaceholderText: "Video de Física: Lanzamiento de proyectiles y descomposición de movimientos."
                },
                {
                    id: "movimiento-circular-uniforme-mcu",
                    title: "Lección 3.2: Movimiento Circular Uniforme (MCU)",
                    introduction: "Estudia el movimiento de rotación a rapidez constante y comprende la aceleración centrípeta de cambio direccional.",
                    explanationHtml: '<p>En el <strong>Movimiento Circular Uniforme (MCU)</strong>, un cuerpo describe una trayectoria circular con una **rapidez constante**. Sin embargo, la **dirección** del vector velocidad cambia continuamente en cada punto de la curva.</p><p>Este cambio de dirección de la velocidad produce una aceleración que apunta siempre hacia el centro del círculo, llamada <strong>aceleración centrípeta ($a_c$)</strong>:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$a_c = \\frac{v^2}{r} = \\omega^2 \\cdot r$$</p><p class="mt-2 font-bold text-slate-800">Conceptos Clave:</p><ul class="list-disc pl-5 space-y-1 my-2"><li><strong>Período ($T$):</strong> Tiempo necesario para dar una vuelta completa (segundos).</li><li><strong>Frecuencia ($f$):</strong> Vueltas dadas por segundo (Hertz, $f = 1/T$).</li><li><strong>Velocidad Angular ($\\omega$):</strong> Rapidez de rotación en radianes por segundo ($\\omega = 2\\pi f$).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmulas del MCU</p><p class="text-xs font-mono font-bold text-primary">v = &omega;&bull;r &nbsp;|&nbsp; ac = v&sup2; / r &nbsp;|&nbsp; &omega; = 2&pi; / T</p><p class="text-xs text-slate-550">Recuerda: ac apunta siempre radialmente hacia el centro del círculo.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">MOVIMIENTO CIRCULAR (MCU)</text><circle cx="100" cy="70" r="35" fill="none" stroke="#3b82f6" stroke-width="1.5" /><circle cx="100" cy="70" r="3" fill="#64748b" /><line x1="100" y1="70" x2="135" y2="70" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><text x="117" y="66" font-size="7" fill="#64748b" font-weight="bold">r = 2m</text><circle cx="135" cy="70" r="5" fill="#ef4444" /><line x1="135" y1="70" x2="135" y2="35" stroke="#059669" stroke-width="2" stroke-linecap="round" /><polygon points="131,35 135,27 139,35" fill="#059669" /><text x="142" y="42" font-size="8" fill="#047857" font-weight="bold">v = 6 m/s</text><line x1="135" y1="70" x2="105" y2="70" stroke="#ef4444" stroke-width="2" stroke-linecap="round" /><polygon points="110,66 102,70 110,74" fill="#ef4444" /><text x="118" y="80" font-size="7" fill="#991b1b" font-weight="bold">ac</text></svg>',
                    svgDescription: "Objeto en trayectoria circular con radio de 2m. Ilustra la velocidad lineal tangencial v = 6 m/s en verde y la aceleración centrípeta ac en rojo apuntando hacia el centro.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un auto de juguete gira en una pista circular de $2\\text{ metros}$ de radio con una velocidad tangencial constante de $6\\text{ m/s}$. ¿Cuál es la magnitud de su aceleración centrípeta?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Registra las variables dadas: radio de la pista $r = 2\\text{ m}$, rapidez lineal $v = 6\\text{ m/s}$.</li><li><strong>Paso 2:</strong> Plantea la fórmula de la aceleración centrípeta: <br>$$a_c = \\frac{v^2}{r}$$</li><li><strong>Paso 3:</strong> Reemplaza y opera: <br>$$a_c = \\frac{6^2}{2} = \\frac{36}{2} = 18\\text{ m/s}^2$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La aceleración centrípeta del auto es de <strong>18 m/s²</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Creer que la aceleración es nula por rapidez constante:</strong> Un error conceptual muy común. Al girar, la velocidad cambia de dirección, por lo que **sí existe aceleración** (centrípeta). Solo si viajara en línea recta a rapidez constante la aceleración sería cero.</li></ul>',
                    exercises: [
                        {
                            question: "Si un disco da 30 vueltas completas en un tiempo de un minuto, ¿cuál es su período (T) de rotación en segundos? (Ingresa solo el número entero):",
                            correctAnswer: "2",
                            hint: "El período es el tiempo para dar una sola vuelta: T = tiempo total / número de vueltas. Recuerda que un minuto son 60 segundos.",
                            feedbackCorrect: "¡Excelente! T = 60 s / 30 vueltas = 2 segundos.",
                            feedbackIncorrect: "Incorrecto. T = 60 / 30 = 2 segundos.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Con los datos de rotación del ejercicio anterior (período T = 2 s), ¿cuál es su frecuencia (f) de giro en Hertz (Hz)? (Ingresa el decimal con punto):",
                            correctAnswer: "0.5",
                            hint: "La frecuencia es el recíproco del período: f = 1 / T. Divide 1 entre 2.",
                            feedbackCorrect: "¡Perfecto! f = 1 / 2 = 0.5 Hz.",
                            feedbackIncorrect: "Incorrecto. f = 1 / T = 1 / 2 = 0.5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un automóvil de juguete gira en un círculo de 0.5 m de radio. Si su aceleración centrípeta es de 8 m/s², ¿cuál es su rapidez tangencial lineal en m/s? (Ingresa solo el número entero):",
                            correctAnswer: "2",
                            hint: "Despeja v de la fórmula ac = v² / r. vf² = ac * r = 8 * 0.5 = 4. Saca raíz cuadrada de 4.",
                            feedbackCorrect: "¡Excelente! v² = 4 => v = sqrt(4) = 2 m/s.",
                            feedbackIncorrect: "Incorrecto. v² = ac * r = 8 * 0.5 = 4; v = 2.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Calcula la velocidad angular aproximada en rad/s de un ventilador de aspas que da una vuelta completa cada 0.2 segundos. (Usa Pi ≈ 3.14. Ingresa el decimal con punto):",
                            correctAnswer: "31.4",
                            hint: "Aplica w = 2*Pi / T. Reemplaza T = 0.2 y Pi = 3.14.",
                            feedbackCorrect: "¡Perfecto! w = (2 * 3.14) / 0.2 = 6.28 / 0.2 = 31.4 rad/s.",
                            feedbackIncorrect: "Incorrecto. w = 2π / T = 6.28 / 0.2 = 31.4.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Hacia dónde apunta de forma vectorial la aceleración centrípeta en cualquier movimiento circular?",
                            options: [
                                "En sentido tangencial a la curva, empujando hacia adelante.",
                                "Radialmente hacia afuera del círculo (fuga del centro).",
                                "Radialmente hacia adentro (hacia el centro del círculo).",
                                "Forma un ángulo de 45° con el radio de curvatura."
                            ],
                            correctAnswer: 2,
                            hint: "La aceleración centrípeta debe tirar del objeto hacia adentro para obligarlo a curvarse sin salir disparado.",
                            feedbackCorrect: "¡Excelente! Apunta radialmente hacia el centro geométrico del círculo.",
                            feedbackIncorrect: "Incorrecto. Apunta siempre hacia el centro del círculo de rotación.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El MCU describe giros de rapidez uniforme. El cambio direccional del vector velocidad produce una aceleración centrípeta radial hacia el centro de la rotación.",
                    videoPlaceholderText: "Video de Física: Conceptos de movimiento circular, período, frecuencia y aceleración centrípeta."
                },
                {
                    id: "aplicaciones-didacticas-cinematica",
                    title: "Lección 3.3: Aplicaciones Didácticas y del Entorno",
                    introduction: "Aprende a aplicar las fórmulas de cinemática a escenarios reales de carreteras y geografía de Guatemala.",
                    explanationHtml: '<p>La cinemática no es una abstracción de laboratorio; describe el movimiento diario de vehículos y de la naturaleza a nuestro alrededor.</p><p>Analizar situaciones de nuestro entorno ayuda a asentar el sentido físico:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Carreteras locales:</strong> Las pendientes de la Bajada de las Cañas a Antigua o las curvas cerradas de la Autopista Palín-Escuintla exigen límites de velocidad para no superar el límite de fricción y la fuerza centrípeta.</li><li><strong>Frenado de Emergencia:</strong> Calcular la desaceleración y tiempo de reacción al frenar de imprevisto en el tráfico pesado de la Calzada Roosevelt de Ciudad de Guatemala.</li><li><strong>Caídas Libres:</strong> Los tiempos de caída de objetos en barrancos o puentes viales de la capital.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Frenado y Curvatura Segura</p><p class="text-xs font-mono font-bold text-primary">Dist. Frenado: d = -vi&sup2; / 2a &nbsp;|&nbsp; ac = v&sup2; / r</p><p class="text-xs text-slate-550">Una desaceleración de frenos segura suele rondar entre -5 y -7 m/s².</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">CINEMÁTICA EN CARRETERA</text><path d="M 40 90 Q 150 90 260 40" fill="none" stroke="#64748b" stroke-width="8" /><circle cx="60" cy="85" r="8" fill="#ef4444" /><text x="60" y="70" font-size="8" fill="#ef4444" font-weight="bold" text-anchor="middle">Guatemala</text><circle cx="240" cy="45" r="8" fill="#059669" /><text x="240" y="32" font-size="8" fill="#059669" font-weight="bold" text-anchor="middle">Tecpán</text><text x="150" y="105" font-size="8" fill="#334155" text-anchor="middle" font-weight="bold">Distancia: 88 km | v_promedio = 44 km/h | t = 2 h</text></svg>',
                    svgDescription: "Infografía de ruta vial entre Ciudad de Guatemala y Tecpán separadas por 88 km, ilustrando el cálculo cinemático de tiempo de viaje (2 horas) a rapidez constante.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un autobús de transporte extraurbano recorre la carretera Interamericana desde Ciudad de Guatemala hasta Tecpán ($88\\text{ km}$). Si sale a las 7:00 AM y su rapidez promedio es de $44\\text{ km/h}$ debido al tráfico habitual en San Lucas, ¿a qué hora llegará a su destino?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica datos: distancia $d = 88\\text{ km}$, rapidez constante $v = 44\\text{ km/h}$.</li><li><strong>Paso 2:</strong> Calcula el tiempo necesario con la ecuación del MRU: <br>$$t = \\frac{d}{v} = \\frac{88\\text{ km}}{44\\text{ km/h}} = 2\\text{ horas}$$</li><li><strong>Paso 3:</strong> Suma el tiempo de viaje a la hora de salida del autobús: <br>$$\\text{Hora de llegada} = 7:00\\text{ AM} + 2\\text{ horas} = 9:00\\text{ AM}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El autobús llegará a Tecpán a las <strong>9:00 AM</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>No homogeneizar unidades de tiempo:</strong> Sumar minutos directos a horas decimales. Por ejemplo, decir que 1.5 horas son 1 hora y 50 minutos. ¡Error! 1.5 horas equivale a 1 hora y 30 minutos (0.5 horas * 60 min = 30 min).</li></ul>',
                    exercises: [
                        {
                            question: "Un peatón cruza un puente de 6 metros de altura en la Calzada Roosevelt y deja caer una moneda libremente. ¿Cuánto tiempo en segundos tardará en golpear el asfalto? (Usa g = 10 m/s². Ingresa decimal con punto, ej: 1.1):",
                            correctAnswer: "1.1",
                            hint: "Aplica t = sqrt(2h/g). Reemplaza h = 6 y g = 10. t = sqrt(12/10) = sqrt(1.2).",
                            feedbackCorrect: "¡Excelente! t = sqrt(1.2) ≈ 1.1 segundos.",
                            feedbackIncorrect: "Incorrecto. t = sqrt(2*6 / 10) = sqrt(1.2) ≈ 1.1s.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un camión de carga de caña de azúcar viaja por la Costa Sur a una velocidad constante de 54 km/h. ¿A cuántos metros por segundo (m/s) equivale esta velocidad? (Ingresa solo el número entero):",
                            correctAnswer: "15",
                            hint: "Para convertir de km/h a m/s, divide el valor de velocidad directamente entre 3.6.",
                            feedbackCorrect: "¡Perfecto! 54 / 3.6 = 15 m/s.",
                            feedbackIncorrect: "Incorrecto. 54 km/h / 3.6 = 15 m/s.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si conduces un automóvil a 10 m/s en una curva pronunciada de la Bajada de las Cañas a Antigua Guatemala y el radio de curvatura es de 25 metros, ¿qué aceleración centrípeta en m/s² experimentas? (Ingresa solo el número entero):",
                            correctAnswer: "4",
                            hint: "Aplica la fórmula ac = v² / r. Reemplaza v = 10 y r = 25.",
                            feedbackCorrect: "¡Excelente! ac = 10² / 25 = 100 / 25 = 4 m/s².",
                            feedbackIncorrect: "Incorrecto. ac = 10² / 25 = 100 / 25 = 4.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Para evitar colisiones de tráfico, la distancia de frenado seguro de un auto a 80 km/h (22.22 m/s) debe ser de 40 metros. ¿Qué desaceleración constante de frenos en m/s² debe garantizar el auto? (Usa signo negativo. Ingresa decimal con punto, ej: -6.17):",
                            correctAnswer: "-6.17",
                            hint: "Usa vf² = vi² + 2ad con vf = 0. Resuelve 0 = 22.22² + 2 * a * 40. a = -493.73 / 80.",
                            feedbackCorrect: "¡Perfecto! La desaceleración requerida es de -6.17 m/s².",
                            feedbackIncorrect: "Incorrecto. a = -vi² / 2d = -493.73 / 80 = -6.17.",
                            difficulty: "avanzado",
                            type: "short"
                        },
                        {
                            question: "Un niño suelta un barrilete gigante en Sumpango desde lo alto de una colina de 80 metros de altura. ¿Cuánto tiempo en segundos tardaría en chocar contra el suelo si cayera libremente en el vacío? (Usa g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "4",
                            hint: "Aplica t = sqrt(2h/g). Reemplaza h = 80 y g = 10.",
                            feedbackCorrect: "¡Excelente! t = sqrt(2 * 80 / 10) = sqrt(160 / 10) = sqrt(16) = 4 segundos.",
                            feedbackIncorrect: "Incorrecto. t = sqrt(160 / 10) = sqrt(16) = 4.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La cinemática aplicada vincula ecuaciones de movimiento y aceleraciones a incidentes vehiculares, geografía regional e infraestructura urbana del entorno real.",
                    videoPlaceholderText: "Video de Física: Cinemática en la vida real y la física de accidentes viales."
                }
            ]
        }
    ]
};

const lawsNewtonOriginalStart = '    "leyes-newton":';

function run() {
    console.log("Leyendo academic_content.js...");
    let content = fs.readFileSync(ACADEMIC_FILE, "utf8");

    const startMovimiento = content.indexOf('    "fisica-movimiento": `');
    const endMovimiento = content.indexOf('`,\n\n    "leyes-newton":');

    if (startMovimiento === -1 || endMovimiento === -1) {
        console.error("No se pudo encontrar el bloque fisica-movimiento original.");
        process.exit(1);
    }

    console.log("Encontradas posiciones en disco para inyección quirúrgica de Cinemática.");

    const fisicaMovimientoJS = '    "fisica-movimiento": ' + JSON.stringify(fisicaMovimientoData, null, 4);

    let newContent = content.slice(0, startMovimiento) + 
                     fisicaMovimientoJS + 
                     content.slice(endMovimiento + 1);

    console.log("Escribiendo cambios en academic_content.js...");
    fs.writeFileSync(ACADEMIC_FILE, newContent, "utf8");
    console.log("¡Curso de Física I: Movimiento y Fuerzas inyectado con éxito!");
}

try {
    run();
} catch (e) {
    console.error("Error crítico durante la inyección:", e);
    process.exit(1);
}
