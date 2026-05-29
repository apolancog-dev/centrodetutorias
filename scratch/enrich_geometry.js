const fs = require("fs");
const path = require("path");

const ACADEMIC_FILE = path.join(__dirname, "..", "academic_content.js");

const geometriaPlanaData = {
    isRichCourse: true,
    title: "Geometría Plana",
    units: [
        {
            title: "Unidad 1: Fundamentos de Geometría y Ángulos",
            lessons: [
                {
                    id: "puntos-lineas-planos-segmentos",
                    title: "Lección 1.1: Puntos, Líneas, Planos y Segmentos",
                    introduction: "La geometría plana estudia las figuras en superficies bidimensionales a partir de conceptos básicos: el punto, la línea y el plano.",
                    explanationHtml: '<p>Los fundamentos de la geometría parten de tres elementos ideales no definidos:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Punto:</strong> Representa una posición exacta en el espacio, no tiene largo, ancho ni espesor. Se nombra con letras mayúsculas ($A, B, C$).</li><li><strong>Línea (Recta):</strong> Sucesión infinita de puntos que se extiende en una sola dimensión. No tiene principio ni fin.</li><li><strong>Plano:</strong> Superficie bidimensional ilimitada que tiene longitud y anchura, pero no espesor.</li><li><strong>Segmento:</strong> Parte de una recta limitada por dos puntos llamados extremos. Se puede medir su longitud.</li></ul><p class="mt-2">La <strong>adición de segmentos</strong> establece que si tres puntos $A, B$ y $C$ son colineales (están en la misma línea recta) y $B$ está entre $A$ y $C$, entonces las longitudes de los segmentos cumplen con la relación aditiva: $AB + BC = AC$.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Propiedad de Adición de Segmentos</p><p class="text-xs font-mono font-bold text-primary">AB + BC = AC &rArr; AB = AC - BC</p><p class="text-xs text-slate-500">Un punto medio M divide a un segmento AB en dos partes congruentes: AM = MB = AB/2.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="22" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ADICIÓN DE SEGMENTOS</text><line x1="30" y1="65" x2="270" y2="65" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" /><circle cx="40" cy="65" r="5" fill="#3b82f6" /><text x="40" y="52" font-size="10" font-family="sans-serif" font-weight="bold" fill="#1e40af" text-anchor="middle">A</text><circle cx="180" cy="65" r="5" fill="#f59e0b" /><text x="180" y="52" font-size="10" font-family="sans-serif" font-weight="bold" fill="#b45309" text-anchor="middle">B</text><circle cx="260" cy="65" r="5" fill="#10b981" /><text x="260" y="52" font-size="10" font-family="sans-serif" font-weight="bold" fill="#047857" text-anchor="middle">C</text><path d="M 40 80 L 40 86 M 180 80 L 180 86 M 40 83 L 180 83" stroke="#2563eb" stroke-width="1.5" /><text x="110" y="96" font-size="9" fill="#1e40af" font-weight="bold" text-anchor="middle">AB = 9</text><path d="M 180 80 L 180 86 M 260 80 L 260 86 M 180 83 L 260 83" stroke="#d97706" stroke-width="1.5" /><text x="220" y="96" font-size="9" fill="#b45309" font-weight="bold" text-anchor="middle">BC = 6</text><path d="M 40 100 L 40 106 M 260 100 L 260 106 M 40 103 L 260 103" stroke="#059669" stroke-width="1" stroke-dasharray="2,2" /><text x="150" y="114" font-size="9" fill="#047857" font-weight="bold" text-anchor="middle">AC = 15</text></svg>',
                    svgDescription: "Segmento de recta que muestra los puntos A, B y C alineados. Muestra visualmente que la distancia total AC (15) es la suma de los subsegmentos AB (9) y BC (6).",
                    workedExampleHtml: '<p><strong>Problema:</strong> En una calle recta de Antigua Guatemala, hay tres faroles alineados A, B y C. Si la distancia de A a C es de 15 varas y de B a C es de 6 varas, calcula la distancia de A a B.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Dibuja o visualiza el segmento total con los puntos en orden: $A - B - C$.</li><li><strong>Paso 2:</strong> Plantea la ecuación de adición de segmentos: $AB + BC = AC$.</li><li><strong>Paso 3:</strong> Sustituye los valores conocidos en la ecuación: $AB + 6 = 15$.</li><li><strong>Paso 4:</strong> Despeja $AB$ restando $6$ a ambos lados: $AB = 15 - 6 = 9$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La distancia de A a B es de <strong>9 varas</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir la posición de los puntos:</strong> Asumir que la longitud de un subsegmento es la suma de los otros dos sin verificar cuál es el punto intermedio. Grafica siempre los puntos antes de operar.</li><li><strong>Ignorar las unidades:</strong> Escribir solo el número sin añadir la magnitud correspondiente (metros, centímetros, varas).</li></ul>',
                    exercises: [
                        {
                            question: "Si M es el punto medio del segmento PQ y PQ = 24 cm, ¿cuánto mide PM en cm? (Ingresa solo el número):",
                            correctAnswer: "12",
                            hint: "El punto medio divide al segmento exactamente en dos partes iguales. Divide la longitud total entre 2.",
                            feedbackCorrect: "¡Excelente! Como M es punto medio, PM = PQ / 2 = 24 / 2 = 12 cm.",
                            feedbackIncorrect: "Incorrecto. Recuerda que el punto medio divide a la mitad: 24 / 2 = 12.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si los puntos alineados A, B, C y D están en orden lineal y AB = 8 cm, BC = 5 cm y CD = 12 cm. Calcula la longitud total AD en cm:",
                            correctAnswer: "25",
                            hint: "Como los puntos están ordenados de forma sucesiva, suma todos los subsegmentos: AB + BC + CD.",
                            feedbackCorrect: "¡Perfecto! AD = 8 + 5 + 12 = 25 cm.",
                            feedbackIncorrect: "Incorrecto. Suma las tres longitudes consecutivas: 8 + 5 + 12 = 25.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "En un segmento RT de 18 m, un punto S está situado de tal forma que RS = 2ST. Calcula la medida de ST en metros:",
                            correctAnswer: "6",
                            hint: "Plantea RS + ST = RT. Como RS = 2ST, entonces 2ST + ST = 18. Resuelve para ST.",
                            feedbackCorrect: "¡Excelente! 3ST = 18, por lo tanto ST = 6 metros.",
                            feedbackIncorrect: "Incorrecto. 3ST = 18 implica que ST = 6.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el número máximo de puntos de intersección que pueden tener 3 rectas en un mismo plano?",
                            options: [
                                "1",
                                "2",
                                "3",
                                "Infinitos"
                            ],
                            correctAnswer: 2,
                            hint: "Dibuja tres rectas cruzándose entre sí de modo que cada una corte a las otras dos en puntos diferentes (formando un triángulo).",
                            feedbackCorrect: "¡Excelente! El máximo de intersecciones ocurre cuando las 3 rectas se cortan de 2 en 2, sumando 3 puntos de intersección.",
                            feedbackIncorrect: "Incorrecto. Imagina tres rectas formando un triángulo en el plano; se intersectan en exactamente 3 puntos.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Cómo se define un rayo o semirrecta en geometría?",
                            options: [
                                "Una porción de línea delimitada por dos puntos extremos fijos.",
                                "Una línea que tiene un punto de partida pero se extiende infinitamente en una dirección.",
                                "Una línea curva que nunca se cierra sobre sí misma.",
                                "La intersección exacta entre dos planos bidimensionales."
                            ],
                            correctAnswer: 1,
                            hint: "Piensa en el rayo de luz de una linterna: parte de un origen y viaja sin fin en una dirección.",
                            feedbackCorrect: "¡Perfecto! Un rayo tiene un origen (punto de inicio) pero no tiene fin.",
                            feedbackIncorrect: "Incorrecto. El rayo tiene origen pero no final. La porción con dos extremos es un segmento.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Los conceptos fundamentales de punto, recta y plano estructuran el estudio geométrico. Los segmentos representan tramos medibles de recta que cumplen propiedades aditivas y de punto medio.",
                    videoPlaceholderText: "Video de Geometría: Elementos fundamentales y adición de segmentos explicada paso a paso."
                },
                {
                    id: "clasificacion-medicion-angulos",
                    title: "Lección 1.2: Clasificación y Medición de Ángulos",
                    introduction: "Aprende a medir y clasificar ángulos y a plantear ecuaciones algebraicas con ángulos complementarios y suplementarios.",
                    explanationHtml: '<p>Un <strong>ángulo</strong> es la abertura formada por dos rayos que comparten un mismo origen llamado <strong>vértice</strong>. Se miden principalmente en grados sexagesimales (de $0^\\circ$ a $360^\\circ$).</p><p class="mt-2 font-bold text-slate-800">Clasificación por su medida:</p><ul class="list-disc pl-5 space-y-1 my-2"><li><strong>Agudo:</strong> Mide más de $0^\\circ$ y menos de $90^\\circ$.</li><li><strong>Recto:</strong> Mide exactamente $90^\\circ$. Forma una esquina perfecta.</li><li><strong>Obtuso:</strong> Mide más de $90^\\circ$ y menos de $180^\\circ$.</li><li><strong>Llano:</strong> Mide exactamente $180^\\circ$. Equivale a una línea recta.</li><li><strong>Perigonal (o completo):</strong> Mide exactamente $360^\\circ$. Una vuelta entera.</li></ul><p class="mt-3">Dos ángulos son <strong>complementarios</strong> si la suma de sus medidas es exactamente $90^\\circ$. Son <strong>suplementarios</strong> si su suma es exactamente $180^\\circ$.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ángulos Especiales</p><p class="text-xs font-mono font-bold text-primary">Complemento de x = 90&deg; - x</p><p class="text-xs font-mono font-bold text-primary">Suplemento de x = 180&deg; - x</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="22" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ÁNGULOS ESPECIALES</text><path d="M 30 90 L 100 90 M 30 90 L 30 20" stroke="#94a3b8" stroke-width="2" /><path d="M 30 90 L 80 40" stroke="#3b82f6" stroke-width="2" /><rect x="30" y="80" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1" /><path d="M 45 90 A 15 15 0 0 0 40 80" fill="none" stroke="#2563eb" stroke-width="1.5" /><text x="48" y="85" font-size="8" fill="#2563eb" font-weight="bold">35°</text><path d="M 40 80 A 15 15 0 0 0 30 75" fill="none" stroke="#059669" stroke-width="1.5" /><text x="32" y="70" font-size="8" fill="#059669" font-weight="bold">55°</text><text x="75" y="105" font-size="8" fill="#64748b" text-anchor="middle">COMPLEMENTARIOS (90°)</text><path d="M 180 90 L 270 90 M 180 90 L 140 90" stroke="#94a3b8" stroke-width="2" /><path d="M 180 90 L 230 40" stroke="#f59e0b" stroke-width="2" /><path d="M 195 90 A 15 15 0 0 0 190 80" fill="none" stroke="#d97706" stroke-width="1.5" /><text x="202" y="85" font-size="8" fill="#d97706" font-weight="bold">45°</text><path d="M 190 80 A 15 15 0 0 0 165 90" fill="none" stroke="#475569" stroke-width="1.5" /><text x="160" y="75" font-size="8" fill="#475569" font-weight="bold">135°</text><text x="205" y="105" font-size="8" fill="#64748b" text-anchor="middle">SUPLEMENTARIOS (180°)</text></svg>',
                    svgDescription: "Gráficos de ángulos. A la izquierda se muestran ángulos complementarios (35° y 55°) formando un ángulo recto. A la derecha se muestran ángulos suplementarios (45° y 135°) formando un ángulo llano sobre una línea recta.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Si el ángulo $A$ mide $35^\\circ$, calcula su ángulo complementario y su ángulo suplementario.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Complementario):</strong> Los ángulos complementarios suman $90^\\circ$. Por lo tanto, restamos el ángulo conocido de $90^\\circ$: <br>Complementario $= 90^\\circ - 35^\\circ = 55^\\circ$.</li><li><strong>Paso 2 (Suplementario):</strong> Los ángulos suplementarios suman $180^\\circ$. Por lo tanto, restamos el ángulo conocido de $180^\\circ$: <br>Suplementario $= 180^\\circ - 35^\\circ = 145^\\circ$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> Su ángulo complementario es <strong>55°</strong> y su ángulo suplementario es <strong>145°</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir complementario con suplementario:</strong> Recordar que "C" viene antes que "S" en el abecedario, al igual que $90^\\circ$ antes que $180^\\circ$. Complementario = 90°, Suplementario = 180°.</li></ul>',
                    exercises: [
                        {
                            question: "Encuentra el ángulo que es exactamente igual a su propio complemento en grados (Ingresa solo el número):",
                            correctAnswer: "45",
                            hint: "Si el ángulo mide x, su complemento también mide x. Resuelve x + x = 90.",
                            feedbackCorrect: "¡Excelente! 45 + 45 = 90. Es el único ángulo igual a su complemento.",
                            feedbackIncorrect: "Incorrecto. Plantea x + x = 90; 2x = 90; x = 45.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si dos ángulos suplementarios están en relación 2:3, ¿cuánto mide el menor de ellos en grados? (Ingresa solo el número):",
                            correctAnswer: "72",
                            hint: "Plantea 2x + 3x = 180. Resuelve para x y luego calcula la medida del menor, que es 2x.",
                            feedbackCorrect: "¡Perfecto! 5x = 180, entonces x = 36. El menor es 2 * 36 = 72 grados.",
                            feedbackIncorrect: "Incorrecto. 2x + 3x = 180; 5x = 180; x = 36. El menor mide 2*36 = 72.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Un ángulo mide exactamente 110°. ¿A qué clasificación pertenece según su abertura?",
                            options: [
                                "Agudo",
                                "Recto",
                                "Obtuso",
                                "Llano"
                            ],
                            correctAnswer: 2,
                            hint: "Compara el valor (110°) con los límites de cada clasificación. Es mayor que 90° pero menor que 180°.",
                            feedbackCorrect: "¡Excelente! Los ángulos entre 90° y 180° se clasifican como obtusos.",
                            feedbackIncorrect: "Incorrecto. Al medir más de 90° y menos de 180°, pertenece a los ángulos obtusos.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el valor de x si dos ángulos suplementarios miden (3x + 10) y (2x - 15). (Ingresa solo el número):",
                            correctAnswer: "37",
                            hint: "Dado que son suplementarios, la suma de ambos binomios debe ser igual a 180. Plantea (3x + 10) + (2x - 15) = 180.",
                            feedbackCorrect: "¡Excelente! 5x - 5 = 180; 5x = 185; x = 37.",
                            feedbackIncorrect: "Incorrecto. Al sumar e igualar a 180 obtienes 5x - 5 = 180; 5x = 185; x = 37.",
                            difficulty: "avanzado",
                            type: "short"
                        },
                        {
                            question: "¿Cuánto mide el ángulo conjugado que completa una vuelta entera a partir de un ángulo de 60°?",
                            options: [
                                "90°",
                                "120°",
                                "180°",
                                "300°"
                            ],
                            correctAnswer: 3,
                            hint: "Una vuelta completa equivale a un ángulo perigonal de 360°. Resta 60° de 360°.",
                            feedbackCorrect: "¡Perfecto! 360° - 60° = 300°.",
                            feedbackIncorrect: "Incorrecto. Para completar una vuelta entera (360°), se necesitan 360° - 60° = 300°.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Los ángulos cuantifican aberturas rotacionales. Su clasificación en agudo, recto, obtuso y llano, así como sus relaciones de complemento (90°) y suplemento (180°), facilitan el planteamiento de modelos algebraicos.",
                    videoPlaceholderText: "Video de Geometría: Clasificación de ángulos y trucos de complementarios y suplementarios."
                },
                {
                    id: "rectas-paralelas-transversal",
                    title: "Lección 1.3: Rectas Paralelas Cortadas por una Transversal",
                    introduction: "Descubre las ricas propiedades y simetrías angulares formadas cuando una recta secante corta dos rectas paralelas.",
                    explanationHtml: '<p>Cuando una recta secante o transversal corta a dos rectas paralelas en un plano, se generan exactamente 8 ángulos divididos en dos grupos congruentes. Las relaciones angulares clave son:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Opuestos por el vértice:</strong> Ángulos enfrentados por el vértice. Son congruentes (ej. $1$ y $4$).</li><li><strong>Alternos internos:</strong> Ángulos interiores a las paralelas situados a lados opuestos de la secante. Son congruentes (ej. $3$ y $6$).</li><li><strong>Alternos externos:</strong> Ángulos exteriores situados en lados opuestos de la secante. Son congruentes (ej. $2$ y $7$).</li><li><strong>Correspondientes:</strong> Ángulos en la misma posición relativa en cada cruce de paralelas. Son congruentes (ej. $1$ y $5$).</li><li><strong>Conjugados internos:</strong> Ángulos internos del mismo lado de la secante. Son suplementarios, suman $180^\\circ$ (ej. $4$ y $6$).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Regla Práctica del Cruce</p><p class="text-xs text-slate-500">En todo el sistema solo hay 2 medidas angulares diferentes: ángulos agudos (iguales entre sí) y obtusos (iguales entre sí). Cualquier agudo + cualquier obtuso = 180°.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">PARALELAS Y SECANTE</text><line x1="30" y1="45" x2="270" y2="45" stroke="#059669" stroke-width="2.5" /><line x1="30" y1="85" x2="270" y2="85" stroke="#059669" stroke-width="2.5" /><text x="25" y="48" font-size="8" fill="#047857" font-weight="bold">L1</text><text x="25" y="88" font-size="8" fill="#047857" font-weight="bold">L2</text><line x1="80" y1="110" x2="220" y2="20" stroke="#ef4444" stroke-width="2" /><path d="M 175 45 A 15 15 0 0 0 185 38" fill="none" stroke="#2563eb" stroke-width="1.5" /><text x="195" y="41" font-size="8" fill="#2563eb" font-weight="bold">75°</text><path d="M 115 85 A 15 15 0 0 0 125 78" fill="none" stroke="#2563eb" stroke-width="1.5" /><text x="135" y="81" font-size="8" fill="#2563eb" font-weight="bold">75°</text><path d="M 125 78 A 15 15 0 0 0 110 85" fill="none" stroke="#d97706" stroke-width="1.5" /><text x="95" y="78" font-size="8" fill="#d97706" font-weight="bold">105°</text></svg>',
                    svgDescription: "Dos rectas paralelas L1 y L2 horizontales cortadas de forma diagonal por una secante roja. Se ilustran y marcan dos ángulos alternos internos de 75° idénticos, y un colindante suplementario de 105°.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Si en un cruce de rectas paralelas por una secante, un ángulo alterno interno mide $75^\\circ$, ¿cuánto mide su colindante suplementario sobre la misma recta?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica que dos ángulos colindantes que yacen sobre una misma línea recta son suplementarios.</li><li><strong>Paso 2:</strong> Plantea la propiedad: $x + 75^\\circ = 180^\\circ$.</li><li><strong>Paso 3:</strong> Despeja $x$ restando: $x = 180^\\circ - 75^\\circ = 105^\\circ$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El ángulo colindante suplementario mide <strong>105°</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Creer que todos los ángulos formados son congruentes:</strong> Solamente son iguales los que corresponden al mismo tipo (agudos con agudos, obtusos con obtusos). Si combinas un agudo con un obtuso, su suma es 180°.</li></ul>',
                    exercises: [
                        {
                            question: "Si en un cruce de paralelas y secante, un ángulo mide 120°, ¿cuánto mide su ángulo opuesto por el vértice en grados? (Ingresa solo el número):",
                            correctAnswer: "120",
                            hint: "Los ángulos opuestos por el vértice comparten el mismo vértice y sus lados son rayos opuestos. Son congruentes.",
                            feedbackCorrect: "¡Excelente! Los opuestos por el vértice siempre miden lo mismo: 120°.",
                            feedbackIncorrect: "Incorrecto. Los ángulos opuestos por el vértice son congruentes, miden exactamente lo mismo: 120°.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cómo se denominan los ángulos formados del mismo lado de la transversal, uno interno y otro externo, que ocupan la misma posición relativa?",
                            options: [
                                "Alternos internos",
                                "Conjugados externos",
                                "Correspondientes",
                                "Opuestos por el vértice"
                            ],
                            correctAnswer: 2,
                            hint: "Su posición es análoga en cada cruce de paralela (ejemplo: arriba a la derecha en ambos cruces).",
                            feedbackCorrect: "¡Perfecto! Se denominan ángulos correspondientes y son de idéntica medida.",
                            feedbackIncorrect: "Incorrecto. Se llaman correspondientes debido a que están ubicados en la misma posición relativa.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si dos ángulos conjugados internos miden 2x y 3x, calcula el valor de x. (Ingresa solo el número):",
                            correctAnswer: "36",
                            hint: "Los ángulos conjugados internos son suplementarios. Plantea la ecuación 2x + 3x = 180.",
                            feedbackCorrect: "¡Perfecto! 5x = 180, por lo que x = 36.",
                            feedbackIncorrect: "Incorrecto. Al ser suplementarios: 2x + 3x = 180; 5x = 180; x = 36.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si un ángulo alterno interno mide 65°, ¿cuánto mide el conjugado interno situado al mismo lado de la transversal en grados? (Ingresa solo el número):",
                            correctAnswer: "115",
                            hint: "Los ángulos colaterales o conjugados internos son suplementarios. Resta 65° a 180°.",
                            feedbackCorrect: "¡Excelente! 180° - 65° = 115°.",
                            feedbackIncorrect: "Incorrecto. Suman 180°, por lo tanto el conjugado mide 180 - 65 = 115°.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Qué propiedad geométrica fundamental cumplen las rectas paralelas?",
                            options: [
                                "Se intersectan en un único punto formando un ángulo de 90°.",
                                "Yacen en el mismo plano y nunca se intersectan, manteniendo una distancia constante entre sí.",
                                "Tienen pendientes opuestas y recíprocas en coordenadas cartesianas.",
                                "Se cruzan en el espacio tridimensional pero no en el plano bidimensional."
                            ],
                            correctAnswer: 1,
                            hint: "Piensa en los rieles de una vía de tren; siempre viajan al lado sin tocarse.",
                            feedbackCorrect: "¡Perfecto! Las paralelas en el plano nunca se intersectan y mantienen siempre la misma distancia.",
                            feedbackIncorrect: "Incorrecto. Las paralelas coplanares jamás se tocan.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La intersección de una secante con rectas paralelas produce relaciones de congruencia y suplemento simétricas y predecibles, cruciales para resolver diseños de ingeniería y topografía.",
                    videoPlaceholderText: "Video de Geometría: Relaciones angulares entre rectas paralelas cortadas por una secante."
                }
            ]
        },
        {
            title: "Unidad 2: Triángulos y Teorema de Pitágoras",
            lessons: [
                {
                    id: "clasificacion-triangulos-angulos-internos",
                    title: "Lección 2.1: Clasificación de Triángulos y Ángulos Internos",
                    introduction: "Aprende a catalogar los triángulos según sus lados o ángulos y aplica el teorema fundamental de la suma de sus ángulos internos.",
                    explanationHtml: '<p>Un <strong>triángulo</strong> es un polígono de tres lados. Se pueden clasificar bajo dos criterios independientes:</p><p class="mt-2 font-bold text-slate-800">Según la longitud de sus lados:</p><ul class="list-disc pl-5 space-y-1 my-1"><li><strong>Equilátero:</strong> Sus 3 lados miden lo mismo (por tanto, sus 3 ángulos internos miden $60^\\circ$).</li><li><strong>Isósceles:</strong> Tiene 2 lados congruentes y 1 desigual. Los ángulos opuestos a los lados iguales también son iguales.</li><li><strong>Escaleno:</strong> Sus 3 lados y ángulos son completamente distintos.</li></ul><p class="mt-2 font-bold text-slate-800">Según sus ángulos internos:</p><ul class="list-disc pl-5 space-y-1 my-1"><li><strong>Acutángulo:</strong> Sus 3 ángulos son agudos (menores a $90^\\circ$).</li><li><strong>Rectángulo:</strong> Posee un ángulo recto ($90^\\circ$). Los lados que lo forman son catetos; el opuesto es la hipotenusa.</li><li><strong>Obtusángulo:</strong> Posee un ángulo obtuso (mayor a $90^\\circ$).</li></ul><p class="mt-3 font-bold text-slate-900 bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">Teorema Fundamental: La suma de los tres ángulos internos de cualquier triángulo en el plano es siempre exactamente 180°: $$A + B + C = 180^\\circ$$</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Teorema de Ángulos de Triángulos</p><p class="text-xs font-mono font-bold text-primary">A + B + C = 180&deg;</p><p class="text-xs text-slate-550">Desigualdad Triangular: Para que un triángulo exista, la suma de las longitudes de dos de sus lados cualesquiera debe ser mayor que el tercer lado.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ÁNGULOS INTERNOS DE UN TRIÁNGULO</text><polygon points="60,95 240,95 150,35" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" /><path d="M 75 95 A 15 15 0 0 0 68 85" fill="none" stroke="#2563eb" stroke-width="1.5" /><text x="78" y="90" font-size="8" fill="#1e40af" font-weight="bold">50°</text><path d="M 225 95 A 15 15 0 0 0 232 85" fill="none" stroke="#059669" stroke-width="1.5" /><text x="210" y="90" font-size="8" fill="#047857" font-weight="bold">70°</text><path d="M 143 45 A 15 15 0 0 0 157 45" fill="none" stroke="#d97706" stroke-width="1.5" /><text x="150" y="55" font-size="8" fill="#b45309" font-weight="bold">60°</text><text x="150" y="112" font-size="9" fill="#334155" text-anchor="middle" font-weight="bold">Suma: 50° + 70° + 60° = 180°</text></svg>',
                    svgDescription: "Un triángulo oblicuo con vértices A, B y C que muestra sus ángulos internos de 50°, 70° y 60° respectivamente, demostrando gráficamente que su suma da 180°.",
                    workedExampleHtml: '<p><strong>Problema:</strong> En un triángulo que forma la estructura de un techo en Tecpán, dos de sus ángulos internos miden $50^\\circ$ y $70^\\circ$. Calcula la medida del tercer ángulo.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Plantea la ecuación fundamental del triángulo: $A + B + C = 180^\\circ$.</li><li><strong>Paso 2:</strong> Reemplaza con los valores conocidos: $50^\\circ + 70^\\circ + C = 180^\\circ$.</li><li><strong>Paso 3:</strong> Suma los valores: $120^\\circ + C = 180^\\circ$.</li><li><strong>Paso 4:</strong> Despeja el tercer ángulo $C$ restando: $C = 180^\\circ - 120^\\circ = 60^\\circ$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El tercer ángulo mide exactamente <strong>60°</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar las propiedades del triángulo equilátero:</strong> No notar que si se menciona un triángulo equilátero, sus tres ángulos son automáticamente $60^\\circ$ cada uno, lo que ahorra cálculos.</li><li><strong>Descartar la desigualdad triangular:</strong> Intentar resolver problemas con longitudes imposibles (como 3 cm, 4 cm y 8 cm, donde los lados cortos no logran cerrarse).</li></ul>',
                    exercises: [
                        {
                            question: "¿Cuánto mide exactamente cada uno de los tres ángulos internos de un triángulo equilátero en grados? (Ingresa solo el número):",
                            correctAnswer: "60",
                            hint: "Al tener sus 3 lados congruentes, también tiene sus 3 ángulos congruentes. Divide 180 entre 3.",
                            feedbackCorrect: "¡Excelente! Cada ángulo de un triángulo equilátero siempre mide 60°.",
                            feedbackIncorrect: "Incorrecto. Como tiene tres lados iguales, sus ángulos deben ser iguales: 180 / 3 = 60.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si un triángulo isósceles tiene un ángulo de 100° en su vértice desigual, ¿cuánto mide cada uno de los otros dos ángulos de la base en grados? (Ingresa solo el número):",
                            correctAnswer: "40",
                            hint: "Los ángulos de la base de un triángulo isósceles son iguales entre sí. Plantea 100 + x + x = 180.",
                            feedbackCorrect: "¡Perfecto! (180 - 100) / 2 = 80 / 2 = 40 grados.",
                            feedbackIncorrect: "Incorrecto. 100 + 2x = 180; 2x = 80; x = 40.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "En un triángulo rectángulo, ¿cuánto deben sumar los dos ángulos agudos en grados? (Ingresa solo el número):",
                            correctAnswer: "90",
                            hint: "La suma total es 180°. Si uno ya mide 90° (el ángulo recto), resta 180 - 90.",
                            feedbackCorrect: "¡Perfecto! Los dos ángulos agudos de un triángulo rectángulo siempre son complementarios, sumando 90°.",
                            feedbackIncorrect: "Incorrecto. Si restas el ángulo recto (90°) del total (180°), queda 180 - 90 = 90°.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Los ángulos de un triángulo son proporcionales a los números 1, 2 y 3. ¿Cuánto mide el mayor de sus ángulos en grados?",
                            options: [
                                "30°",
                                "60°",
                                "90°",
                                "120°"
                            ],
                            correctAnswer: 2,
                            hint: "Plantea x + 2x + 3x = 180. Resuelve x y multiplica el valor por 3.",
                            feedbackCorrect: "¡Excelente! 6x = 180; x = 30. El ángulo mayor es 3 * 30 = 90° (un triángulo rectángulo).",
                            feedbackIncorrect: "Incorrecto. x + 2x + 3x = 180; 6x = 180; x = 30. El mayor mide 3*30 = 90°.",
                            difficulty: "avanzado",
                            type: "multiple"
                        },
                        {
                            question: "¿Es geométricamente posible construir un triángulo cuyos lados midan 3 cm, 4 cm y 8 cm?",
                            options: [
                                "Sí, porque cumple con las tres condiciones de congruencia.",
                                "Sí, se trata de un triángulo obtusángulo escaleno.",
                                "No, porque la suma de los dos lados menores (3 + 4 = 7) es menor que el tercer lado (8).",
                                "No, porque los lados no son números consecutivos pares."
                            ],
                            correctAnswer: 2,
                            hint: "Aplica la propiedad de desigualdad triangular: la suma de las dos longitudes menores debe ser mayor que el lado más largo.",
                            feedbackCorrect: "¡Excelente! Por desigualdad triangular, este triángulo no puede existir porque los lados menores no alcanzan a conectarse.",
                            feedbackIncorrect: "Incorrecto. No se puede construir, la desigualdad triangular exige que 3 + 4 > 8, lo cual no es verdadero.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Los triángulos se clasifican de forma independiente por sus lados y sus ángulos. La invariabilidad de la suma de sus ángulos internos (180°) permite modelar e inferir ángulos faltantes de forma exacta.",
                    videoPlaceholderText: "Video de Geometría: Suma de ángulos internos y clasificación de triángulos."
                },
                {
                    id: "teorema-pitagoras-aplicaciones",
                    title: "Lección 2.2: El Teorema de Pitágoras y sus Aplicaciones",
                    introduction: "Descubre la herramienta matemática más célebre y aplicada en la construcción y topografía del mundo real.",
                    explanationHtml: '<p>El <strong>Teorema de Pitágoras</strong> aplica exclusivamente a <strong>triángulos rectángulos</strong> (triángulos con un ángulo de $90^\\circ$). Establece que la suma de los cuadrados de las longitudes de los catetos ($a$ y $b$) es exactamente igual al cuadrado de la longitud de la hipotenusa ($c$, el lado opuesto al ángulo recto):</p><p class="text-center font-mono font-extrabold text-primary text-lg my-2">a² + b² = c²</p><p class="mt-3">A partir de esta relación fundamental, podemos despejar cualquier lado desconocido:</p><ul class="list-disc pl-5 space-y-1.5 my-2"><li><strong>Hipotenusa:</strong> $c = \\sqrt{a^2 + b^2}$</li><li><strong>Cateto faltante:</strong> $a = \\sqrt{c^2 - b^2}$ &nbsp;o&nbsp; $b = \\sqrt{c^2 - a^2}$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Teorema de Pitágoras</p><p class="text-base font-mono font-extrabold text-primary">a² + b² = c²</p><p class="text-xs text-slate-500">Terna Pitagórica famosa: 3, 4 y 5 (ya que 3² + 4² = 5² &rArr; 9 + 16 = 25).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">TEOREMA DE PITÁGORAS (3-4-5)</text><polygon points="90,95 170,95 170,35" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" /><rect x="160" y="85" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1" /><text x="130" y="107" font-size="9" fill="#1e40af" font-weight="bold" text-anchor="middle">Cateto a = 4</text><text x="195" y="65" font-size="9" fill="#1e40af" font-weight="bold" text-anchor="middle">Cateto b = 3</text><text x="110" y="55" font-size="9" fill="#d97706" font-weight="bold" text-anchor="middle">Hipotenusa c = 5</text><text x="210" y="112" font-size="8" fill="#64748b" text-anchor="middle">4² + 3² = 16 + 9 = 25 (5²)</text></svg>',
                    svgDescription: "Un triángulo rectángulo con catetos de 4 y 3 unidades y la hipotenusa de 5 unidades. Resalta de forma clara la relación 4² + 3² = 5².",
                    workedExampleHtml: '<p><strong>Problema:</strong> Para pintar una pared alta de una casa en Xela, se apoya una escalera de 5 metros contra la pared. Si la base de la escalera se sitúa a 3 metros de la distancia horizontal de la pared, ¿a qué altura en vertical llega la escalera?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica las partes geométricas. La escalera representa la hipotenusa ($c = 5$ m). El alejamiento horizontal representa un cateto ($a = 3$ m). Deseamos hallar el cateto de altura ($b$).</li><li><strong>Paso 2:</strong> Usa el Teorema despejando el cateto $b$: $b = \\sqrt{c^2 - a^2}$.</li><li><strong>Paso 3:</strong> Sustituye las longitudes: $b = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16}$.</li><li><strong>Paso 4:</strong> Extrae la raíz cuadrada: $b = 4$ metros.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La escalera alcanza una altura vertical de <strong>4 metros</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Sumar siempre los cuadrados:</strong> Recordar que la suma ($a^2 + b^2$) se realiza exclusivamente al buscar la hipotenusa. Si buscas un cateto, debes realizar una resta ($c^2 - a^2$).</li></ul>',
                    exercises: [
                        {
                            question: "Calcula la longitud de la hipotenusa en cm si los dos catetos miden exactamente 6 cm y 8 cm: (Ingresa solo el número):",
                            correctAnswer: "10",
                            hint: "Aplica c = sqrt(6^2 + 8^2). Eleva al cuadrado ambos números, súmalos y extrae la raíz.",
                            feedbackCorrect: "¡Excelente! c = sqrt(36 + 64) = sqrt(100) = 10 cm.",
                            feedbackIncorrect: "Incorrecto. Saca la raíz de la suma: 6² + 8² = 36 + 64 = 100. La raíz es 10.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si la diagonal de una pantalla mide 15 pulgadas y su altura es de 9 pulgadas, ¿cuál es el ancho de la pantalla en pulgadas? (Ingresa solo el número):",
                            correctAnswer: "12",
                            hint: "La diagonal es la hipotenusa. Debes calcular el cateto de base mediante la fórmula de resta: b = sqrt(15^2 - 9^2).",
                            feedbackCorrect: "¡Perfecto! b = sqrt(225 - 81) = sqrt(144) = 12 pulgadas.",
                            feedbackIncorrect: "Incorrecto. Se calcula restando los cuadrados: sqrt(15² - 9²) = sqrt(225 - 81) = sqrt(144) = 12.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Calcula el cateto faltante de un triángulo rectángulo si su hipotenusa mide 13 cm y el otro cateto mide 5 cm. (Ingresa solo el número):",
                            correctAnswer: "12",
                            hint: "Aplica la fórmula del cateto: a = sqrt(13^2 - 5^2).",
                            feedbackCorrect: "¡Excelente! a = sqrt(169 - 25) = sqrt(144) = 12 cm.",
                            feedbackIncorrect: "Incorrecto. a = sqrt(13² - 5²) = sqrt(169 - 25) = sqrt(144) = 12.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un poste de luz de 8 metros está sujeto por un cable tensor recto de 10 metros anclado al suelo. ¿A qué distancia en metros de la base del poste está anclado el cable? (Ingresa solo el número):",
                            correctAnswer: "6",
                            hint: "La altura del poste es un cateto (8) y el cable es la hipotenusa (10). Halla el cateto restante.",
                            feedbackCorrect: "¡Perfecto! Distancia = sqrt(10^2 - 8^2) = sqrt(100 - 64) = sqrt(36) = 6 metros.",
                            feedbackIncorrect: "Incorrecto. Distancia = sqrt(10² - 8²) = sqrt(36) = 6 metros.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si un cuadrado perfecto de cartulina tiene un lado de exactamente 2 cm, ¿cuál es la medida aproximada de su diagonal en cm?",
                            options: [
                                "2.00 cm",
                                "2.83 cm",
                                "4.00 cm",
                                "8.00 cm"
                            ],
                            correctAnswer: 1,
                            hint: "La diagonal forma un triángulo rectángulo con dos lados iguales de 2 cm. Calcula d = sqrt(2^2 + 2^2) = sqrt(8).",
                            feedbackCorrect: "¡Excelente! d = sqrt(8) ≈ 2.83 cm.",
                            feedbackIncorrect: "Incorrecto. La diagonal es sqrt(2² + 2²) = sqrt(8) ≈ 2.83 cm.",
                            difficulty: "avanzado",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El Teorema de Pitágoras ($a^2 + b^2 = c^2$) proporciona una ley matemática rigurosa para encontrar dimensiones inaccesibles de forma directa mediante la descomposición triangular.",
                    videoPlaceholderText: "Video de Geometría: Demostración visual e intuitiva del Teorema de Pitágoras."
                },
                {
                    id: "congruencia-semejanza-triangulos",
                    title: "Lección 2.3: Congruencia y Semejanza de Triángulos",
                    introduction: "Comprende la diferencia entre figuras idénticas y proporcionales, y aprende a realizar mediciones de objetos gigantes de forma indirecta.",
                    explanationHtml: '<p>En geometría, existen dos relaciones fundamentales de comparación:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Congruencia (&cong;):</strong> Dos triángulos son congruentes si tienen exactamente la <strong>misma forma y tamaño</strong>. Sus lados y ángulos correspondientes miden igual. Los criterios básicos son Lado-Ángulo-Lado (LAL), Ángulo-Lado-Ángulo (ALA) y Lado-Lado-Lado (LLL).</li><li><strong>Semejanza (~):</strong> Dos triángulos son semejantes si tienen la <strong>misma forma</strong> pero **diferente tamaño**. Sus ángulos correspondientes son iguales y sus lados homólogos son <strong>proporcionales</strong>. El criterio más común es Ángulo-Ángulo (AA).</li></ul><p class="mt-2 font-bold text-slate-800">Cálculo Proporcional en Semejanza:</p><p class="text-center font-mono font-bold text-primary my-2">Altura Objeto 1 / Altura Objeto 2 = Sombra Objeto 1 / Sombra Objeto 2</p><p class="mt-2 text-slate-700">Esta proporción permite determinar alturas imposibles de medir físicamente (como árboles o pirámides) mediante la longitud de sus sombras proyectadas.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Razón de Proporción</p><p class="text-xs font-mono font-bold text-primary">a/a\' = b/b\' = c/c\' = k</p><p class="text-xs text-slate-500">Donde k es la constante de semejanza. Los perímetros varían en razón k y las áreas en razón k².</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">SEMEJANZA Y MEDICIÓN INDIRECTA</text><path d="M 80 95 L 80 35 L 200 95 Z" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" /><path d="M 160 95 L 160 75 L 200 95 Z" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" /><circle cx="200" cy="95" r="3" fill="#64748b" /><text x="80" y="110" font-size="8" fill="#1e40af" font-weight="bold" text-anchor="middle">Sombra Árbol = 15m</text><text x="160" y="110" font-size="8" fill="#047857" font-weight="bold" text-anchor="middle">Sombra = 3m</text><text x="65" y="65" font-size="9" fill="#1e40af" font-weight="bold">H = 9m</text><text x="145" y="85" font-size="9" fill="#047857" font-weight="bold">h = 1.8m</text></svg>',
                    svgDescription: "Diagrama que muestra la medición indirecta de la altura de un árbol usando semejanza de triángulos. Un triángulo grande azul (árbol y su sombra de 15m) contiene a un triángulo pequeño verde (bastón/persona y su sombra de 3m).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un árbol en el parque de Antigua Guatemala proyecta una sombra de 15 metros a la misma hora en que una persona de 1.80 metros de estatura proyecta una sombra de 3 metros. Calcula la altura del árbol.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Establece la semejanza matemática de los dos triángulos rectángulos formados por la incidencia de los rayos del sol.</li><li><strong>Paso 2:</strong> Plantea la ecuación de proporcionalidad homóloga: <br>$$\\frac{\\text{Altura del Árbol (H)}}{\\text{Altura de la Persona (h)}} = \\frac{\\text{Sombra del Árbol (S)}}{\\text{Sombra de la Persona (s)}}$$</li><li><strong>Paso 3:</strong> Sustituye las medidas correspondientes: $\\frac{H}{1.80} = \\frac{15}{3}$.</li><li><strong>Paso 4:</strong> Simplifica la fracción del lado derecho: $\\frac{H}{1.80} = 5$.</li><li><strong>Paso 5:</strong> Despeja $H$ multiplicando por $1.80$: $H = 5 \\times 1.80 = 9$ metros.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La altura del árbol es de <strong>9 metros</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Invertir los términos de la proporción:</strong> Emparejar incorrectamente la altura de uno con la sombra de otro. Conserva el orden estricto: $\\frac{\\text{objeto 1}}{\\text{objeto 2}}$ en ambos lados.</li></ul>',
                    exercises: [
                        {
                            question: "Si dos triángulos son semejantes en razón 1:3 y el perímetro del triángulo menor es 15 cm, ¿cuál es el perímetro del mayor en cm? (Ingresa solo el número):",
                            correctAnswer: "45",
                            hint: "En triángulos semejantes, el perímetro se escala exactamente en la misma razón que sus lados directos (linealmente). Multiplica 15 por 3.",
                            feedbackCorrect: "¡Excelente! Razón 1:3 implica que el perímetro aumenta por 3: 15 * 3 = 45 cm.",
                            feedbackIncorrect: "Incorrecto. Los perímetros escalan de forma lineal: 15 * 3 = 45.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué criterio de semejanza se cumple si dos triángulos tienen sus tres ángulos correspondientes idénticos?",
                            options: [
                                "Lado-Lado-Lado (LLL)",
                                "Lado-Ángulo-Lado (LAL)",
                                "Ángulo-Ángulo-Ángulo (AAA)",
                                "Hipotenusa-Cateto (HC)"
                            ],
                            correctAnswer: 2,
                            hint: "La semejanza requiere ángulos correspondientes iguales; el criterio se nombra según este postulado.",
                            feedbackCorrect: "¡Perfecto! Tres ángulos iguales confirman la semejanza de forma inequívoca mediante el criterio AAA.",
                            feedbackIncorrect: "Incorrecto. Se denomina criterio Ángulo-Ángulo-Ángulo (AAA).",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Los lados de un triángulo miden 4, 6 y 8 cm. Si un triángulo semejante tiene un lado menor de 12 cm, ¿cuánto mide su lado mayor en cm? (Ingresa solo el número):",
                            correctAnswer: "24",
                            hint: "Determina la razón de semejanza dividiendo el lado menor correspondiente: 12 / 4 = 3. Luego multiplica el lado mayor (8) por esa razón.",
                            feedbackCorrect: "¡Excelente! La escala es 3. El lado mayor mide 8 * 3 = 24 cm.",
                            feedbackIncorrect: "Incorrecto. La razón es 12/4 = 3. El lado mayor es 8 * 3 = 24.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el significado riguroso de congruencia en geometría plana?",
                            options: [
                                "Las figuras tienen áreas semejantes pero perímetros diferentes.",
                                "Las figuras tienen exactamente la misma forma y el mismo tamaño (lados y ángulos idénticos).",
                                "Las figuras comparten el mismo eje de simetría horizontal.",
                                "Las figuras tienen el mismo número de lados sin importar las medidas angulares."
                            ],
                            correctAnswer: 1,
                            hint: "Congruencia significa que si recortaras una figura, calzaría de manera milimétrica sobre la otra.",
                            feedbackCorrect: "¡Perfecto! Congruentes significa idénticos en forma y magnitud dimensional.",
                            feedbackIncorrect: "Incorrecto. Congruencia significa idéntica forma e idéntico tamaño.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Un bastón de 1 metro plantado verticalmente proyecta una sombra de 1.5 metros. ¿Qué longitud de sombra en metros proyectará un poste de 6 metros a la misma hora? (Ingresa solo el número):",
                            correctAnswer: "9",
                            hint: "Plantea la proporción: Altura Bastón / Altura Poste = Sombra Bastón / Sombra Poste. Esto es: 1 / 6 = 1.5 / S.",
                            feedbackCorrect: "¡Perfecto! Sombra = 6 * 1.5 = 9 metros.",
                            feedbackIncorrect: "Incorrecto. Plantea la relación 1/6 = 1.5/S; S = 6 * 1.5 = 9 metros.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La congruencia define igualdad exacta en geometría, mientras que la semejanza define proporcionalidad regular. La proporcionalidad geométrica de semejanza permite modelar indirectamente alturas y distancias.",
                    videoPlaceholderText: "Video de Geometría: Cómo medir distancias imposibles con semejanza de triángulos."
                }
            ]
        },
        {
            title: "Unidad 3: Cuadriláteros, Círculos y Polígonos",
            lessons: [
                {
                    id: "perimetro-area-cuadrilateros",
                    title: "Lección 3.1: Perímetro y Área de Cuadriláteros",
                    introduction: "Domina el cálculo del contorno y la superficie de paralelogramos, trapecios e implementa soluciones de distribución espacial.",
                    explanationHtml: '<p>Los <strong>cuadriláteros</strong> son polígonos de cuatro lados. Las fórmulas de perímetro ($P$, contorno) y área ($A$, espacio interior plano) varían por figura:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Cuadrado:</strong> Lados iguales. <br>$P = 4L$ &nbsp;&bull;&nbsp; $A = L^2$</li><li><strong>Rectángulo:</strong> Lados opuestos iguales. <br>$P = 2b + 2h$ &nbsp;&bull;&nbsp; $A = b \\times h$</li><li><strong>Rombo:</strong> Lados iguales, diagonales desiguales. <br>$P = 4L$ &nbsp;&bull;&nbsp; $A = \\frac{D \\times d}{2}$ (donde $D$ y $d$ son las diagonales)</li><li><strong>Trapecio:</strong> Dos lados paralelos llamados bases (mayor $B$ y menor $b$). <br>$P = \\text{suma de todos sus lados}$ &nbsp;&bull;&nbsp; $A = \\frac{(B + b) \\times h}{2}$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmulas de Cuadriláteros</p><p class="text-xs font-mono font-bold text-primary">Rectángulo: A = b &bull; h &nbsp;|&nbsp; Trapecio: A = (B+b)&bull;h / 2</p><p class="text-xs text-slate-500">Recuerda: El área siempre se expresa en unidades cuadradas (cm², m²), mientras que el perímetro es lineal (cm, m).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ÁREA Y PERÍMETRO: RECTÁNGULO</text><rect x="60" y="35" width="180" height="60" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" rx="4" /><text x="150" y="68" font-size="10" fill="#1e40af" font-weight="bold" text-anchor="middle">Base b = 40 m</text><text x="48" y="68" font-size="10" fill="#1e40af" font-weight="bold" text-anchor="middle">h = 25 m</text><text x="150" y="112" font-size="9" fill="#334155" text-anchor="middle" font-weight="bold">Perímetro = 2(40) + 2(25) = 130 m | Área = 40 × 25 = 1000 m²</text></svg>',
                    svgDescription: "Un rectángulo azul de 40m de base por 25m de altura. Muestra de forma clara la diferencia en las operaciones y resultados de su área (1000m²) y su perímetro (130m).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un terreno rectangular en Escuintla mide $40$ metros de largo por $25$ metros de ancho. Si se quiere circular con tres vueltas de alambre de púas en su perímetro, ¿cuántos metros de alambre se necesitan?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Calcula el perímetro del rectángulo (contorno de una vuelta): <br>$P = 2b + 2h = 2(40\\text{ m}) + 2(25\\text{ m}) = 80\\text{ m} + 50\\text{ m} = 130\\text{ m}$.</li><li><strong>Paso 2:</strong> Como el terreno debe cercarse con 3 vueltas completas, multiplicamos el perímetro lineal por 3: <br>Alambre total $= 130\\text{ m} \\times 3 = 390\\text{ m}$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> Se necesitan <strong>390 metros</strong> de alambre.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir área y perímetro:</strong> Multiplicar los lados al pedir cercado (perímetro), o sumar lados al pedir alfombrado o siembra (área).</li></ul>',
                    exercises: [
                        {
                            question: "Calcula el área en cm² de un cuadrado perfecto cuyo perímetro mide 36 cm: (Ingresa solo el número):",
                            correctAnswer: "81",
                            hint: "Primero calcula cuánto mide cada uno de los 4 lados del cuadrado dividiendo 36 entre 4. Luego eleva ese lado al cuadrado.",
                            feedbackCorrect: "¡Excelente! Lado = 36 / 4 = 9 cm. Área = 9² = 81 cm².",
                            feedbackIncorrect: "Incorrecto. Lado = 36/4 = 9. Área = 9² = 81.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un trapecio tiene una base mayor de 12 cm, una base menor de 8 cm y una altura de 5 cm. ¿Cuál es su área en cm²? (Ingresa solo el número):",
                            correctAnswer: "50",
                            hint: "Aplica la fórmula A = ((B + b) * h) / 2. Suma las bases, multiplica por la altura y divide entre dos.",
                            feedbackCorrect: "¡Perfecto! Área = ((12 + 8) * 5) / 2 = (20 * 5) / 2 = 100 / 2 = 50 cm².",
                            feedbackIncorrect: "Incorrecto. A = (12 + 8) * 5 / 2 = 50 cm².",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula el área en cm² de un rombo cuyas diagonales miden exactamente 10 cm y 16 cm. (Ingresa solo el número):",
                            correctAnswer: "80",
                            hint: "Aplica la fórmula A = (D * d) / 2, donde D es 16 y d es 10.",
                            feedbackCorrect: "¡Excelente! Área = (16 * 10) / 2 = 160 / 2 = 80 cm².",
                            feedbackIncorrect: "Incorrecto. A = D * d / 2 = 16 * 10 / 2 = 80.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si un rectángulo tiene un área de 48 m² y su base mide exactamente 8 m, ¿cuánto mide su perímetro en metros? (Ingresa solo el número):",
                            correctAnswer: "28",
                            hint: "Halla la altura dividiendo el área entre la base: 48 / 8 = 6 m. Luego calcula el perímetro con 2(base + altura).",
                            feedbackCorrect: "¡Perfecto! Altura = 6 m. Perímetro = 2 * (8 + 6) = 28 metros.",
                            feedbackIncorrect: "Incorrecto. Altura = 48/8 = 6 m. Perímetro = 2(8 + 6) = 28.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el perímetro en cm de un rombo regular cuyos lados miden exactamente 7 cm cada uno? (Ingresa solo el número):",
                            correctAnswer: "28",
                            hint: "Un rombo tiene sus 4 lados iguales. Multiplica la medida del lado por 4.",
                            feedbackCorrect: "¡Excelente! El perímetro del rombo es 4 * 7 = 28 cm.",
                            feedbackIncorrect: "Incorrecto. Al igual que el cuadrado, el rombo tiene 4 lados iguales: 4 * 7 = 28.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Los cuadriláteros forman el núcleo geométrico de planos de loteo y arquitectura básica. Sus perímetros se determinan de forma aditiva lineal y sus áreas mediante fórmulas de proporcionalidad bidimensional.",
                    videoPlaceholderText: "Video de Geometría: Perímetro y área de cuadriláteros comunes explicada."
                },
                {
                    id: "perimetro-area-circulo",
                    title: "Lección 3.2: Perímetro y Área del Círculo",
                    introduction: "Descubre las propiedades de la figura plana perfecta e implementa cálculos rigurosos con el número irracional Pi.",
                    explanationHtml: '<p>El <strong>círculo</strong> es la región del plano delimitada por una curva cerrada donde todos sus puntos equidistan del centro (la circunferencia). Sus elementos clave son:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Radio ($r$):</strong> Segmento que une el centro con cualquier punto de la circunferencia.</li><li><strong>Diámetro ($d$):</strong> Cuerda que pasa por el centro del círculo. Equivale a dos veces el radio ($d = 2r$).</li><li><strong>Número Pi ($\\pi$):</strong> Relación constante entre la circunferencia y el diámetro. Su valor aproximado es $3.141592...$ (solemos usar $\\pi \\approx 3.1416$).</li></ul><p class="mt-2 font-bold text-slate-800">Fórmulas fundamentales:</p><ul class="list-disc pl-5 space-y-1 my-2"><li><strong>Circunferencia (Perímetro de borde):</strong> $C = 2\\pi r$ &nbsp;o&nbsp; $C = \\pi d$</li><li><strong>Área del Círculo (Superficie plana):</strong> $A = \\pi r^2$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmulas del Círculo</p><p class="text-xs font-mono font-bold text-primary">C = 2&pi;r &nbsp;|&nbsp; A = &pi;r²</p><p class="text-xs text-slate-500">Ten cuidado: para el área se requiere usar el RADIO, no el diámetro.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">EL CÍRCULO PERFECTO</text><circle cx="100" cy="70" r="38" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" /><circle cx="100" cy="70" r="3" fill="#1e40af" /><line x1="100" y1="70" x2="138" y2="70" stroke="#ef4444" stroke-width="1.5" /><text x="119" y="64" font-size="8" fill="#ef4444" font-weight="bold" text-anchor="middle">r = 10m</text><line x1="62" y1="70" x2="100" y2="70" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2" /><text x="210" y="55" font-size="9" fill="#1e40af" font-weight="bold">Área: A = &pi; &bull; r²</text><text x="210" y="67" font-size="8" fill="#334155">A = 3.1416 &bull; 10² = 314.16 m²</text><text x="210" y="85" font-size="9" fill="#d97706" font-weight="bold">Perímetro: C = 2&pi;r</text><text x="210" y="97" font-size="8" fill="#334155">C = 2 &bull; &pi; &bull; 10 = 62.83 m</text></svg>',
                    svgDescription: "Un círculo azul con un radio marcado en rojo de 10m. A la derecha, muestra el desglose del cálculo matemático para obtener su área (314.16m²) y su circunferencia (62.83m) usando Pi.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Una plaza circular en Quetzaltenango tiene un diámetro de $20$ metros. Calcula su área y la longitud lineal de su borde exterior.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Extrae el radio. El radio es la mitad exacta de la medida del diámetro: <br>$r = \\frac{20\\text{ m}}{2} = 10\\text{ m}$.</li><li><strong>Paso 2:</strong> Calcula el área usando $A = \\pi r^2$: <br>$A = 3.1416 \\times (10\\text{ m})^2 = 3.1416 \\times 100\\text{ m}^2 = 314.16\\text{ m}^2$.</li><li><strong>Paso 3:</strong> Calcula la longitud de la circunferencia (borde) usando $C = 2\\pi r$: <br>$C = 2 \\times 3.1416 \\times 10\\text{ m} = 62.83\\text{ m}$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El área es de <strong>314.16 m²</strong> y la longitud del borde es de <strong>62.83 m</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Elevar el diámetro en la fórmula de área:</strong> Olvidar dividir el diámetro entre 2. Usar $d^2$ da un resultado cuatro veces mayor que el área verdadera.</li></ul>',
                    exercises: [
                        {
                            question: "Calcula la longitud aproximada en cm de la circunferencia de un círculo si su radio mide exactamente 7 cm. Usa Pi = 3.1416. (Ingresa solo el número decimal con punto):",
                            correctAnswer: "43.98",
                            hint: "Aplica C = 2 * Pi * r. Multiplica 2 * 3.1416 * 7.",
                            feedbackCorrect: "¡Excelente! C = 2 * 3.1416 * 7 = 43.98 cm.",
                            feedbackIncorrect: "Incorrecto. C = 2 * 3.1416 * 7 = 43.98.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si la circunferencia exterior de un neumático de automóvil mide 188.4 cm, ¿cuánto mide aproximadamente su diámetro en cm? Usa Pi = 3.14. (Ingresa solo el número):",
                            correctAnswer: "60",
                            hint: "Como C = Pi * d, puedes despejar el diámetro d dividiendo la circunferencia entre Pi: d = C / Pi.",
                            feedbackCorrect: "¡Perfecto! d = 188.4 / 3.14 = 60 cm.",
                            feedbackIncorrect: "Incorrecto. d = C / Pi = 188.4 / 3.14 = 60.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Calcula el área aproximada en cm² de un círculo si su radio mide exactamente 5 cm. Usa Pi = 3.1416. (Ingresa solo el número decimal con punto):",
                            correctAnswer: "78.54",
                            hint: "Aplica A = Pi * r^2. Multiplica 3.1416 * 5^2 (3.1416 * 25).",
                            feedbackCorrect: "¡Excelente! Área = 3.1416 * 25 = 78.54 cm².",
                            feedbackIncorrect: "Incorrecto. A = Pi * 5² = 3.1416 * 25 = 78.54.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si duplicamos exactamente la longitud del radio de un círculo cualquiera, ¿cuántas veces aumentará el área final del círculo?",
                            options: [
                                "2 veces",
                                "4 veces",
                                "8 veces",
                                "Permanece idéntica"
                            ],
                            correctAnswer: 1,
                            hint: "Recuerda que el área varía con el cuadrado del radio. Si el radio es 2r, su cuadrado es (2r)^2 = 4r^2.",
                            feedbackCorrect: "¡Excelente! Al elevar al cuadrado el factor de escala (2), el área se multiplica por 4.",
                            feedbackIncorrect: "Incorrecto. Dado que la fórmula tiene r², duplicar r multiplica el área por 2² = 4.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el área aproximada en cm² de un semicírculo cuyo radio mide exactamente 4 cm. Usa Pi = 3.1416. (Ingresa solo el número decimal con punto):",
                            correctAnswer: "25.13",
                            hint: "El semicírculo es la mitad exacta de un círculo completo. Calcula el área total (Pi * 4^2) y divídela entre 2.",
                            feedbackCorrect: "¡Perfecto! Área total = 3.1416 * 16 = 50.265. Dividido entre 2 = 25.13 cm².",
                            feedbackIncorrect: "Incorrecto. (Pi * 4²) / 2 = 50.26 / 2 = 25.13.",
                            difficulty: "avanzado",
                            type: "short"
                        }
                    ],
                    summaryHtml: "El círculo está determinado por su radio o diámetro. El número Pi ($\pi$) relaciona linealmente la circunferencia con su diámetro, y de forma cuadrática su radio con el área.",
                    videoPlaceholderText: "Video de Geometría: Entendiendo Pi y el área del círculo de forma intuitiva."
                },
                {
                    id: "area-figuras-compuestas",
                    title: "Lección 3.3: Área de Figuras Compuestas",
                    introduction: "Aprende a descomponer superficies complejas e irregulares en figuras geométricas simples para calcular el área total.",
                    explanationHtml: '<p>En la realidad, la mayoría de planos, parcelas de tierra y piezas mecánicas no son polígonos simples directos. Son <strong>figuras compuestas</strong>.</p><p class="mt-2">Para calcular su área por completo, aplicamos dos estrategias básicas:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Método Aditivo (Suma de áreas):</strong> Consiste en segmentar o cortar la figura compleja en partes conocidas (triángulos, rectángulos, semicírculos) y sumar las áreas individuales: <br>$$A_{\\text{total}} = A_1 + A_2 + A_3$$</li><li><strong>Método Sustractivo (Resta de áreas):</strong> Consiste en tomar un área externa envolvente conocida y restarle las áreas de huecos, recortes o vacíos (por ejemplo, restarle a un patio rectangular el área circular de una piscina central).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Descomposición Geométrica</p><p class="text-xs font-mono font-bold text-primary">A_total = &Sigma; A_individuales</p><p class="text-xs text-slate-500">Divide con líneas auxiliares punteadas y anota las dimensiones correspondientes de cada subfigura.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ÁREA DE FIGURAS COMPUESTAS</text><rect x="50" y="45" width="80" height="50" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" /><text x="90" y="75" font-size="8" fill="#1e40af" font-weight="bold" text-anchor="middle">A1 (Rectángulo)</text><path d="M 130 95 A 25 25 0 0 0 130 45 Z" fill="#ecfdf5" stroke="#10b981" stroke-width="2" /><text x="145" y="75" font-size="8" fill="#047857" font-weight="bold" text-anchor="middle">A2 (Semicírculo)</text><line x1="130" y1="45" x2="130" y2="95" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" /><text x="90" y="112" font-size="9" fill="#334155" text-anchor="middle" font-weight="bold">Área Total = A1 + A2</text></svg>',
                    svgDescription: "Una figura compuesta de un rectángulo de 10x6m acoplado a un semicírculo de radio 3m. Una línea punteada muestra la división limpia de las dos superficies básicas.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Una ventana tiene forma rectangular de $2$ metros de alto por $1.2$ metros de ancho, coronada por un semicírculo en la parte superior. Calcula el área total de la ventana.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Divide la ventana en dos figuras conocidas: un rectángulo abajo y un semicírculo arriba.</li><li><strong>Paso 2:</strong> Calcula el área del rectángulo ($A_1$): <br>$A_1 = b \\times h = 1.2\\text{ m} \\times 2\\text{ m} = 2.4\\text{ m}^2$.</li><li><strong>Paso 3:</strong> Obtén el radio del semicírculo. El diámetro equivale al ancho de la ventana ($1.2$ m), por ende, el radio es la mitad: $r = 0.6$ m.</li><li><strong>Paso 4:</strong> Calcula el área del semicírculo ($A_2$): <br>$A_2 = \\frac{\\pi r^2}{2} = \\frac{3.1416 \\times (0.6\\text{ m})^2}{2} = \\frac{3.1416 \\times 0.36}{2} = 0.565\\text{ m}^2$.</li><li><strong>Paso 5:</strong> Suma ambas áreas parciales: <br>$A_{\\text{total}} = 2.4\\text{ m}^2 + 0.565\\text{ m}^2 = 2.965\\text{ m}^2$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El área total de la ventana es de aproximadamente <strong>2.97 m²</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar dividir entre 2 los semicírculos o triángulos:</strong> Tratarlos como si fueran círculos completos o rectángulos respectivamente en la adición de áreas.</li><li><strong>Perder de vista las cotas:</strong> No deducir los lados ocultos a partir de las sumas y restas de las cotas exteriores dadas.</li></ul>',
                    exercises: [
                        {
                            question: "Un jardín rectangular mide 10 m de largo por 6 m de ancho, y tiene una piscina circular de radio r = 2 m en el centro. ¿Cuál es el área transitable del jardín en m²? Usa Pi = 3.1416. (Ingresa solo el número decimal con punto):",
                            correctAnswer: "47.43",
                            hint: "Usa el método sustractivo: resta el área de la piscina circular (Pi * r^2 = 3.1416 * 4) al área total del rectángulo (10 * 6 = 60).",
                            feedbackCorrect: "¡Excelente! Área total = 60. Área piscina ≈ 12.57. Jardín transitable = 60 - 12.57 = 47.43 m².",
                            feedbackIncorrect: "Incorrecto. Área total = 60 m². Resta la piscina circular (Pi*2² ≈ 12.57): 60 - 12.57 = 47.43 m².",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Calcula el área en cm² de una figura formada por un cuadrado de 4 cm de lado con un triángulo equilátero acoplado a uno de sus lados externos. Área del triángulo ≈ 6.93 cm². (Ingresa solo el número decimal con punto):",
                            correctAnswer: "22.93",
                            hint: "Calcula el área del cuadrado (4 * 4 = 16) y súmale directamente la del triángulo equilátero dada (6.93).",
                            feedbackCorrect: "¡Excelente! Área total = 16 + 6.93 = 22.93 cm².",
                            feedbackIncorrect: "Incorrecto. Suma ambas áreas directas: 16 + 6.93 = 22.93.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Se tiene un portaretrato con un marco de madera rectangular exterior de 8 cm x 10 cm e interior (donde va la foto) de 6 cm x 8 cm. ¿Cuál es el área de la madera en cm²? (Ingresa solo el número):",
                            correctAnswer: "32",
                            hint: "Usa el método sustractivo: resta el área del rectángulo interno menor al área del rectángulo externo mayor.",
                            feedbackCorrect: "¡Excelente! Madera = (8 * 10) - (6 * 8) = 80 - 48 = 32 cm².",
                            feedbackIncorrect: "Incorrecto. Área exterior = 80 cm², área interior = 48 cm². El área del marco es 80 - 48 = 32.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Una baldosa rectangular de arcilla mide 10 cm x 15 cm. En un taller se le recortan cuatro esquinas cuadradas de 2 cm de lado cada una. ¿Cuál es el área final en cm² de la baldosa? (Ingresa solo el número):",
                            correctAnswer: "134",
                            hint: "Cada una de las 4 esquinas recortadas tiene un área de 2 * 2 = 4 cm². Resta 4 * 4 = 16 cm² al área original del rectángulo (150).",
                            feedbackCorrect: "¡Perfecto! Área original = 150. Recortes = 4 * 4 = 16. Área final = 150 - 16 = 134 cm².",
                            feedbackIncorrect: "Incorrecto. Rectángulo = 150 cm². Esquinas = 4 * 4 = 16 cm². Baldosa final = 150 - 16 = 134 cm².",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cómo se define de forma matemática la superficie denominada corona circular?",
                            options: [
                                "El área resultante de un sector circular al que se le corta un triángulo interior.",
                                "La región circular limitada por dos circunferencias concéntricas (mismo centro pero radios diferentes).",
                                "La mitad de un óvalo simétrico en revolución cartesiana.",
                                "El espacio interior común entre un cuadrado y su círculo inscrito."
                            ],
                            correctAnswer: 1,
                            hint: "Visualiza una rosquilla o una arandela de metal. Comparte el mismo centro.",
                            feedbackCorrect: "¡Perfecto! La corona circular es la franja plana comprendida entre dos círculos concéntricos.",
                            feedbackIncorrect: "Incorrecto. La corona circular es la región delimitada por dos círculos concéntricos.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El cálculo de figuras compuestas utiliza las leyes de suma y resta de áreas simples auxiliares para determinar dimensiones reales de parcelas, moldes industriales y cubiertas de obra.",
                    videoPlaceholderText: "Video de Geometría: Cómo calcular áreas de figuras complejas y terrenos irregulares."
                }
            ]
        }
    ]
};

function run() {
    console.log("Leyendo academic_content.js...");
    let content = fs.readFileSync(ACADEMIC_FILE, "utf8");

    const startGeometry = content.indexOf('    "geometria-plana": `');
    const endGeometry = content.indexOf('`,\n\n    "trigonometria-fundamental":');

    if (startGeometry === -1 || endGeometry === -1) {
        console.error("No se pudo encontrar el bloque geometria-plana original.");
        process.exit(1);
    }

    console.log("Encontradas posiciones en disco para inyección quirúrgica de Geometría.");

    const geometriaPlanaJS = '    "geometria-plana": ' + JSON.stringify(geometriaPlanaData, null, 4);

    let newContent = content.slice(0, startGeometry) + 
                     geometriaPlanaJS + 
                     content.slice(endGeometry + 1);

    console.log("Escribiendo cambios en academic_content.js...");
    fs.writeFileSync(ACADEMIC_FILE, newContent, "utf8");
    console.log("¡Curso de Geometría Plana inyectado con éxito!");
}

try {
    run();
} catch (e) {
    console.error("Error crítico durante la inyección:", e);
    process.exit(1);
}
