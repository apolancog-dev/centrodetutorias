const fs = require("fs");
const path = require("path");

const ACADEMIC_FILE = path.join(__dirname, "..", "academic_content.js");

const leyesNewtonData = {
    isRichCourse: true,
    title: "Leyes de Newton",
    units: [
        {
            title: "Unidad 1: Fuerzas y la Primera Ley (Inercia)",
            lessons: [
                {
                    id: "concepto-fuerza-tipos",
                    title: "Lección 1.1: El Concepto de Fuerza y sus Tipos",
                    introduction: "Define fuerza como una interacción vectorial e identifica las fuerzas mecánicas básicas que actúan sobre un cuerpo en equilibrio o movimiento.",
                    explanationHtml: '<p>En física clásica, una <strong>fuerza ($\\vec{F}$)</strong> es toda interacción capaz de modificar el estado de reposo o de movimiento de un cuerpo, o de producir en él una deformación. Se trata de una magnitud vectorial (posee magnitud, dirección y sentido), y su unidad de medida en el Sistema Internacional (SI) es el <strong>Newton ($N$)</strong>, donde $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$.</p><p class="mt-2 text-slate-700">Las cuatro fuerzas mecánicas básicas de contacto y campo que analizaremos son:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Peso ($\\vec{w}$):</strong> Fuerza de atracción gravitatoria que ejerce la Tierra sobre cualquier masa. Siempre apunta verticalmente hacia abajo (rumbo al centro terrestre): <br>$$w = m \\cdot g$$</li><li><strong>Normal ($\\vec{N}$):</strong> Fuerza de soporte o contacto perpendicular que ejerce una superficie rígida sobre un objeto apoyado en ella.</li><li><strong>Tensión ($\\vec{T}$):</strong> Fuerza de tracción o jalón transmitida a lo largo de cuerdas, cables o cadenas estiradas.</li><li><strong>Fricción o Rozamiento ($\\vec{f}$):</strong> Fuerza de resistencia al deslizamiento que actúa paralela a las superficies en contacto y en sentido opuesto al movimiento relativo.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuación Gravitatoria Básica</p><p class="text-xs font-mono font-bold text-primary">w = m &bull; g</p><p class="text-xs text-slate-500">Masa (m) en kg, gravedad (g &asymp; 9.8 m/s&sup2; o 10 m/s&sup2;), Peso (w) en Newtons.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">FUERZAS MECÁNICAS BÁSICAS</text><line x1="30" y1="90" x2="270" y2="90" stroke="#94a3b8" stroke-width="1.5" /><rect x="110" y="55" width="80" height="35" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="4" /><text x="150" y="76" font-size="9" font-family="sans-serif" font-weight="bold" fill="#1e40af" text-anchor="middle">Bloque m</text><line x1="150" y1="55" x2="150" y2="25" stroke="#10b981" stroke-width="2" stroke-linecap="round" /><polygon points="146,27 150,19 154,27" fill="#10b981" /><text x="156" y="28" font-size="8" fill="#047857" font-weight="bold">Normal (N)</text><line x1="150" y1="72" x2="150" y2="110" stroke="#ef4444" stroke-width="2" stroke-linecap="round" /><polygon points="146,108 150,116 154,108" fill="#ef4444" /><text x="156" y="106" font-size="8" fill="#b91c1c" font-weight="bold">Peso (w = mg)</text><line x1="190" y1="72" x2="240" y2="72" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" /><polygon points="238,68 246,72 238,76" fill="#3b82f6" /><text x="210" y="66" font-size="8" fill="#1e40af" font-weight="bold">Tensión (T)</text><line x1="110" y1="90" x2="60" y2="90" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" /><polygon points="62,94 54,90 62,86" fill="#f59e0b" /><text x="70" y="84" font-size="8" fill="#b45309" font-weight="bold">Fricción (f)</text></svg>',
                    svgDescription: "Un bloque de masa m apoyado sobre el suelo y jalado por una cuerda. Se ilustran las cuatro fuerzas mecánicas fundamentales concurrentes: Peso (rojo), Normal (verde), Tensión (azul) y Fricción (naranja).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un bloque de madera de $5\\text{ kg}$ está en reposo apoyado sobre una mesa horizontal en Xela. Identifica y calcula las fuerzas verticales que actúan sobre el bloque (usa $g = 9.8\\text{ m/s}^2$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Calcular Peso):</strong> El peso actúa verticalmente hacia abajo debido a la atracción gravitatoria: <br>$$w = m \\cdot g = 5\\text{ kg} \\times 9.8\\text{ m/s}^2 = 49\\text{ Newtons (abajo)}$$</li><li><strong>Paso 2 (Fuerza Normal):</strong> Al estar apoyado sobre una mesa en reposo horizontal sin aceleración vertical, la mesa debe contrarrestar exactamente al peso ejerciendo una fuerza normal de soporte hacia arriba: <br>$$\\sum F_y = 0 \\Rightarrow N - w = 0 \\Rightarrow N = w = 49\\text{ Newtons (arriba)}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El bloque experimenta un peso de <strong>49 N</strong> hacia abajo y una fuerza normal de <strong>49 N</strong> hacia arriba.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Normal siempre vertical:</strong> Dibujar la fuerza normal siempre apuntando verticalmente hacia arriba. Recuerda que la Normal es siempre <strong>perpendicular a la superficie</strong>. Si la superficie está inclinada, la normal también se inclinará.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cuál es el peso en Newtons de un objeto de masa 10 kg en la Tierra? (Usa g = 9.8 m/s² y escribe únicamente el número entero):",
                            correctAnswer: "98",
                            hint: "Aplica w = m * g. Multiplica m = 10 por g = 9.8.",
                            feedbackCorrect: "¡Excelente! w = 10 kg * 9.8 m/s² = 98 Newtons.",
                            feedbackIncorrect: "Incorrecto. Recuerda que Peso = m * g = 10 * 9.8 = 98.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué dirección geométrica tiene siempre la fuerza normal ejercida por una pared vertical sobre un bloque apoyado en ella?",
                            options: [
                                "Vertical apuntando hacia arriba.",
                                "Vertical apuntando hacia abajo.",
                                "Horizontal apuntando hacia afuera de la pared.",
                                "Horizontal apuntando hacia adentro de la pared."
                            ],
                            correctAnswer: 2,
                            hint: "La normal siempre es perpendicular (a 90 grados) de la superficie de contacto.",
                            feedbackCorrect: "¡Perfecto! Al ser la pared vertical, la normal perpendicular es horizontal y apunta hacia afuera para soportar al bloque.",
                            feedbackIncorrect: "Incorrecto. Al ser la pared vertical, la normal es perpendicular a ella, es decir, horizontal hacia afuera.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Si la masa de una persona en la Tierra es de 60 kg, ¿cuál será su masa aproximada en kg si viaja a la Luna? (Ingresa solo el número entero):",
                            correctAnswer: "60",
                            hint: "Diferencia masa de peso. La masa representa la cantidad de materia inercial invariable.",
                            feedbackCorrect: "¡Excelente! La masa es una propiedad intrínseca e invariable de la materia. Lo que varía en la Luna es su peso debido a la baja gravedad.",
                            feedbackIncorrect: "Incorrecto. La masa no cambia con la gravedad; seguirá siendo de 60 kg. El peso es el que varía.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cómo se le llama a la fuerza mecánica que ejerce una cuerda tensa sobre un objeto atado a ella?",
                            options: [
                                "Fuerza Normal",
                                "Peso Gravitatorio",
                                "Fricción Estática",
                                "Tensión"
                            ],
                            correctAnswer: 3,
                            hint: "Las cuerdas y cables transmiten fuerzas de tracción llamadas...",
                            feedbackCorrect: "¡Perfecto! La Tensión es la fuerza transmitida por tracción en cables y cuerdas.",
                            feedbackIncorrect: "Incorrecto. Se le conoce como fuerza de Tensión.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿En qué dirección actúa la fuerza de fricción sobre un bloque que se desliza horizontalmente hacia la derecha?",
                            options: [
                                "Hacia la derecha, impulsándolo.",
                                "Hacia la izquierda, oponiéndose al deslizamiento.",
                                "Vertical hacia arriba.",
                                "Vertical hacia abajo."
                            ],
                            correctAnswer: 1,
                            hint: "La fricción siempre se opone a la tendencia de movimiento relativo entre las superficies.",
                            feedbackCorrect: "¡Perfecto! Como el bloque avanza a la derecha, la fricción actúa hacia la izquierda para oponerse al movimiento.",
                            feedbackIncorrect: "Incorrecto. La fricción se opone al movimiento, por lo que actúa hacia la izquierda.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Una fuerza es una interacción vectorial que altera el movimiento o la forma de un objeto. Identificar correctamente Normal, Peso, Tensión y Fricción es crucial.",
                    videoPlaceholderText: "Video de Física: Introducción a las fuerzas y cómo identificarlas en un bloque."
                },
                {
                    id: "primera-ley-inercia",
                    title: "Lección 1.2: Primera Ley de Newton (Inercia)",
                    introduction: "Explica la Primera Ley de Newton y analiza cuantitativamente el equilibrio en cuerpos libres de fuerza neta.",
                    explanationHtml: '<p>La <strong>Primera Ley de Newton (o Ley de la Inercia)</strong> establece que todo cuerpo persevera en su estado de reposo o de movimiento rectilíneo uniforme (MRU) a menos que sea obligado a cambiar dicho estado por fuerzas netas externas aplicadas sobre él.</p><p class="mt-2 text-slate-700">Conceptos fundamentales de esta ley:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Inercia:</strong> Es la propiedad intrínseca que tiene la materia de oponerse o resistirse a cualquier cambio en su estado de movimiento o velocidad. La masa es la medida cuantitativa de la inercia.</li><li><strong>Fuerza Neta Nula:</strong> Si la suma vectorial de todas las fuerzas externas que actúan sobre un cuerpo es cero ($\\sum \\vec{F} = 0$), el cuerpo está en <strong>equilibrio mecánico</strong>. Esto tiene dos consecuencias físicas posibles: <br>1. El cuerpo está en reposo relativo (Equilibrio estático). <br>2. El cuerpo viaja a velocidad estrictamente constante en línea recta (MRU, Equilibrio dinámico).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Primera Condición de Equilibrio</p><p class="text-xs font-mono font-bold text-primary">&sum;F = 0 &rArr; &sum;F_x = 0 &nbsp;y&nbsp; &sum;F_y = 0</p><p class="text-xs text-slate-500">Un cuerpo sin fuerza neta no acelera; mantiene su velocidad constante.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">LEY DE LA INERCIA (1ª LEY)</text><line x1="20" y1="95" x2="280" y2="95" stroke="#94a3b8" stroke-width="1.5" /><path d="M 180 95 L 190 85 L 200 95 Z" fill="#64748b" stroke="#475569" stroke-width="1" /><line x1="140" y1="88" x2="182" y2="88" stroke="#3b82f6" stroke-width="3" /><circle cx="150" cy="92" r="3.5" fill="#1e293b" /><circle cx="172" cy="92" r="3.5" fill="#1e293b" /><text x="135" y="106" font-size="7" fill="#1e40af" font-weight="bold">Patineta se detiene</text><circle cx="215" cy="50" r="6" fill="#f43f5e" /><line x1="215" y1="56" x2="200" y2="70" stroke="#f43f5e" stroke-width="2.5" /><line x1="215" y1="58" x2="230" y2="52" stroke="#f43f5e" stroke-width="1.8" /><line x1="200" y1="70" x2="185" y2="75" stroke="#f43f5e" stroke-width="1.8" /><line x1="200" y1="70" x2="190" y2="82" stroke="#f43f5e" stroke-width="1.8" /><path d="M 195 40 Q 215 35 235 45" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" /><polygon points="233,48 238,44 231,41" fill="#ef4444" /><text x="215" y="32" font-size="7" fill="#b91c1c" font-weight="bold" text-anchor="middle">El cuerpo sigue por inercia</text></svg>',
                    svgDescription: "Un patinador choca contra una roca. La patineta es frenada en seco por la roca (fuerza externa), pero por inercia el cuerpo del patinador tiende a mantener su velocidad y sale proyectado hacia adelante.",
                    workedExampleHtml: '<p><strong>Ejemplo de análisis:</strong> Un autobús frena bruscamente en Tecpán. Explica físicamente por qué los pasajeros salen proyectados hacia adelante con respecto a sus asientos.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Estado Inicial):</strong> Los pasajeros y el autobús viajan juntos a la misma velocidad constante del movimiento rectilíneo.</li><li><strong>Paso 2 (Fuerza Externa):</strong> Al frenar, los frenos ejercen una fuerza externa de frenado sobre el chasis del autobús, lo que desacelera el vehículo.</li><li><strong>Paso 3 (Inercia):</strong> Al no actuar una fuerza de frenado directa sobre el torso y cabeza de los pasajeros, sus cuerpos tienden por inercia a mantener la misma rapidez constante y dirección original, proyectándose hacia adelante con respecto al chasis en desaceleración.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Explicación final:</strong> Es una manifestación directa de la inercia de los cuerpos, que se resisten al cambio de velocidad impuesto al bus.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Creer que movimiento requiere fuerza activa:</strong> Pensar que para que un objeto continúe moviéndose en el espacio es obligatorio que actúe una fuerza activa constante. En el vacío sin fricción, un objeto en movimiento viajará a velocidad constante indefinidamente sin necesidad de empujes.</li></ul>',
                    exercises: [
                        {
                            question: "Si un disco de hockey se desliza sobre hielo liso libre de fricción a una rapidez constante de 5 m/s, ¿cuál será su rapidez en m/s tras 10 segundos de recorrido libre? (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "La Primera Ley de Newton establece que en ausencia de fuerzas resultantes externas, el MRU se mantiene inalterado.",
                            feedbackCorrect: "¡Excelente! Al no haber fricción ni fuerzas externas netas, la velocidad del disco de hockey se mantiene constante en 5 m/s por inercia.",
                            feedbackIncorrect: "Incorrecto. Sin fricción ni fuerzas netas, la rapidez se mantiene exactamente igual: 5 m/s.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué magnitud física mide cuantitativamente la inercia de un cuerpo?",
                            options: [
                                "Su peso gravitacional.",
                                "Su masa inercial.",
                                "Su aceleración resultante.",
                                "Su volumen geométrico."
                            ],
                            correctAnswer: 1,
                            hint: "La inercia es la resistencia al cambio de movimiento; cuanta más materia tenga un cuerpo, más inercia tendrá.",
                            feedbackCorrect: "¡Perfecto! La masa es la medida cuantitativa y directa de la inercia de un cuerpo.",
                            feedbackIncorrect: "Incorrecto. La masa mide de forma directa cuantitativa la inercia de un objeto.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si la fuerza resultante sobre un objeto es cero, ¿cuáles son los dos únicos estados de movimiento posibles?",
                            options: [
                                "Solo reposo o movimiento circular.",
                                "Solo reposo o movimiento acelerado.",
                                "Reposo absoluto o Movimiento Rectilíneo Uniforme (MRU).",
                                "Movimiento parabólico o caída libre."
                            ],
                            correctAnswer: 2,
                            hint: "Suma de fuerzas nula implica aceleración nula. Sin aceleración, la velocidad debe ser constante (MRU) o nula (reposo).",
                            feedbackCorrect: "¡Excelente! El equilibrio mecánico implica que la velocidad es constante en magnitud y dirección, lo cual cubre reposo (v = 0) o MRU (v = constante).",
                            feedbackIncorrect: "Incorrecto. Si no hay fuerza neta, no hay aceleración, lo que permite el reposo o el MRU.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Por qué es físicamente obligatorio el cinturón de seguridad en automóviles basándose en la primera ley de Newton?",
                            options: [
                                "Para reducir la masa inercial del conductor.",
                                "Para aplicar una fuerza externa que detenga el cuerpo del pasajero evitando que continúe con el movimiento del auto por inercia.",
                                "Para aumentar la atracción gravitatoria del asiento.",
                                "Para contrarrestar la fricción cinética de los neumáticos."
                            ],
                            correctAnswer: 1,
                            hint: "Si el auto frena, tu cuerpo intentará seguir viajando hacia adelante a la velocidad que llevaba.",
                            feedbackCorrect: "¡Excelente! El cinturón ejerce la fuerza externa necesaria para detener tu cuerpo e impedir que salgas proyectado por inercia.",
                            feedbackIncorrect: "Incorrecto. El cinturón proporciona la fuerza de parada externa para detener tu cuerpo y vencer su inercia de movimiento.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si una partícula se encuentra en equilibrio estático o dinámico, ¿cuánto vale la sumatoria de todas las fuerzas externas aplicadas sobre ella en Newtons? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "Equilibrio significa que las fuerzas se cancelan vectorialmente por completo.",
                            feedbackCorrect: "¡Perfecto! El equilibrio de una partícula se define precisamente cuando la fuerza resultante neta es exactamente 0 N.",
                            feedbackIncorrect: "Incorrecto. La primera condición de equilibrio establece que la sumatoria de fuerzas es 0.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La Primera Ley de Newton establece que sin fuerzas netas externas, los cuerpos mantienen su reposo o su velocidad lineal constante (MRU) debido a su masa (inercia).",
                    videoPlaceholderText: "Video de Física: La ley de la inercia explicada con experimentos divertidos."
                },
                {
                    id: "diagrama-cuerpo-libre-dcl",
                    title: "Lección 1.3: Diagramas de Cuerpo Libre (DCL)",
                    introduction: "Aprende a diseñar y trazar Diagramas de Cuerpo Libre perfectos, aislando el cuerpo y descomponiendo vectores en planos inclinados.",
                    explanationHtml: '<p>Un <strong>Diagrama de Cuerpo Libre (DCL)</strong> es un bosquejo o representación gráfica vectorial utilizada para analizar de forma aislada las fuerzas externas que actúan sobre un solo objeto. Representamos al cuerpo como un punto o bloque y dibujamos todas las fuerzas como vectores que parten del centro de gravedad.</p><p class="mt-2 text-slate-700">Pasos clave para dibujar y resolver un DCL en planos inclinados:</p><ol class="list-decimal pl-5 space-y-2 my-3"><li><strong>Aislar el objeto:</strong> Retirar el entorno (suelos, cuerdas, poleas) y tratar al cuerpo como una partícula puntual.</li><li><strong>Dibujar las fuerzas reales:</strong> Graficar Peso (vertical hacia abajo), Normal (perpendicular a la rampa), Tensión (paralela a la cuerda) y Fricción (opuesta al movimiento).</li><li><strong>Alinear los ejes coordenados:</strong> Para facilitar el álgebra, alineamos el eje $X$ de forma paralela a la rampa inclinada y el eje $Y$ perpendicular a ella.</li><li><strong>Descomponer el Peso:</strong> El peso gravitatorio ($w = mg$) es la única fuerza que no queda alineada a estos ejes rotados, por lo que se descompone en: <br>$$\\text{Componente paralela al plano (hace deslizar): } w_x = mg \\cdot \\operatorname{sen}(\\theta)$$ <br>$$\\text{Componente perpendicular al plano (presiona): } w_y = mg \\cdot \\cos(\\theta)$$</li></ol>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Descomposición del Peso en Rampa (&theta;)</p><p class="text-xs font-mono font-bold text-primary">w_x = m&bull;g&bull;sen(&theta;) &nbsp;(Eje X paralelo)</p><p class="text-xs font-mono font-bold text-primary">w_y = m&bull;g&bull;cos(&theta;) &nbsp;(Eje Y perpendicular)</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">DCL EN PLANO INCLINADO</text><polygon points="40,95 240,95 240,40" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" /><path d="M 65 95 A 25 25 0 0 0 60 90" fill="none" stroke="#475569" stroke-width="1" /><text x="70" y="91" font-size="8" fill="#475569">&theta;</text><g transform="translate(140,68) rotate(-15.5)"><rect x="-25" y="-15" width="50" height="30" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="3" /><line x1="-40" y1="0" x2="50" y2="0" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><text x="46" y="-3" font-size="7" fill="#64748b">Eje X</text><line x1="0" y1="-30" x2="0" y2="40" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><text x="4" y="-24" font-size="7" fill="#64748b">Eje Y</text><line x1="0" y1="0" x2="0" y2="-28" stroke="#10b981" stroke-width="1.5" /><polygon points="-3,-25 0,-30 3,-25" fill="#10b981" /><text x="5" y="-18" font-size="7" fill="#047857" font-weight="bold">Normal (N)</text><line x1="0" y1="0" x2="-35" y2="0" stroke="#f59e0b" stroke-width="1.5" /><polygon points="-32,-3 -37,0 -32,3" fill="#f59e0b" /><text x="-32" y="-5" font-size="7" fill="#b45309" font-weight="bold">f</text><line x1="0" y1="0" x2="25" y2="0" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="1,1" /><polygon points="22,-2 26,0 22,2" fill="#ef4444" /><text x="14" y="8" font-size="6" fill="#b91c1c">mg&bull;sen&theta;</text><line x1="0" y1="0" x2="0" y2="30" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="1,1" /><polygon points="-2,27 0,31 2,27" fill="#ef4444" /><text x="4" y="25" font-size="6" fill="#b91c1c">mg&bull;cos&theta;</text></g></svg>',
                    svgDescription: "Diagrama de Cuerpo Libre detallado para un bloque apoyado en una rampa con ángulo θ. El sistema de coordenadas está rotado (X paralelo al plano). El peso se descompone en mg·sen(θ) (paralela) y mg·cos(θ) (perpendicular).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un bloque de masa $m$ se desliza hacia abajo en un plano inclinado de ángulo $\\theta = 30^{\\circ}$ en Antigua. Escribe la expresión para la fuerza que tira del bloque hacia abajo del plano inclinado y calcula su valor si $m = 10\\text{ kg}$ y $g = 10\\text{ m/s}^2$ (sabiendo que $\\operatorname{sen}(30^{\\circ}) = 0.5$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Identificar la componente activa):</strong> Al trazar el DCL, la normal equilibra a $mg \\cos(\\theta)$ en el eje Y. La única fuerza no equilibrada en el eje X (cuesta abajo) es la componente paralela del peso: <br>$$w_x = m \\cdot g \\cdot \\operatorname{sen}(\\theta)$$</li><li><strong>Paso 2 (Operar valores):</strong> Sustituimos los datos dados en la fórmula: <br>$$w_x = 10\\text{ kg} \\times 10\\text{ m/s}^2 \\times \\operatorname{sen}(30^{\\circ})$$ <br>$$w_x = 100 \\times 0.5 = 50\\text{ Newtons}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La componente paralela del peso que hace deslizar al bloque es de <strong>50 Newtons</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Fuerzas ficticias:</strong> Añadir una fuerza ficticia llamada \"fuerza de empuje\" o \"fuerza de movimiento\" cuesta abajo en el DCL. Si no hay una cuerda, motor o persona empujando activamente, esa fuerza no existe. El causante del movimiento es únicamente la componente del peso ($mg\\operatorname{sen}(\\theta)$).</li></ul>',
                    exercises: [
                        {
                            question: "¿Se debe dibujar la fuerza normal en el DCL de una esfera colgada verticalmente de una cuerda suspendida en el aire?",
                            options: [
                                "Sí, toda masa tiene normal.",
                                "No, al no haber contacto directo con una superficie de apoyo no hay fuerza normal.",
                                "Solo si la esfera se desplaza.",
                                "Sí, apunta hacia abajo."
                            ],
                            correctAnswer: 1,
                            hint: "La fuerza normal es de soporte y contacto; requiere que el objeto presione físicamente contra una superficie.",
                            feedbackCorrect: "¡Excelente! Si el cuerpo no está apoyado sobre una superficie rígida, la fuerza de soporte Normal es nula.",
                            feedbackIncorrect: "Incorrecto. No hay normal porque el objeto está suspendido en el aire sin apoyarse en ninguna superficie.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Cuántas fuerzas externas en total actúan sobre un bloque de madera apoyado en una mesa rugosa si una persona tira de él horizontalmente con una cuerda y hay fricción? (Ingresa solo el número entero):",
                            correctAnswer: "4",
                            hint: "Cuenta el peso (gravedad), el soporte de la mesa, el jalón de la cuerda y la resistencia de rugosidad.",
                            feedbackCorrect: "¡Perfecto! Son 4 fuerzas: Peso (vertical abajo), Normal (vertical arriba), Tensión (horizontal jalón) y Fricción (horizontal opuesta).",
                            feedbackIncorrect: "Incorrecto. Son 4 fuerzas: Peso, Normal, Tensión y Fricción.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Hacia dónde apunta el vector del peso propio en un DCL dibujado en un plano inclinado?",
                            options: [
                                "Perpendicular a la rampa hacia abajo.",
                                "Paralelo a la rampa hacia abajo.",
                                "Verticalmente hacia abajo (rumbo al centro de la Tierra).",
                                "Horizontal a la izquierda."
                            ],
                            correctAnswer: 2,
                            hint: "La gravedad no se altera por la inclinación de la rampa sobre la que reposa el objeto.",
                            feedbackCorrect: "¡Perfecto! La gravedad y por tanto el Peso propio siempre actúan verticalmente hacia abajo, sin importar la inclinación de la superficie.",
                            feedbackIncorrect: "Incorrecto. El peso siempre apunta verticalmente hacia abajo, con independencia del plano inclinado.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Cuántas fuerzas reales actúan sobre una manzana lanzada en el aire en caída libre, despreciando la resistencia del aire? (Ingresa solo el número entero):",
                            correctAnswer: "1",
                            hint: "Despreciar la resistencia del aire elimina las fuerzas de arrastre del fluido.",
                            feedbackCorrect: "¡Perfecto! En caída libre ideal, la única fuerza externa que actúa sobre el cuerpo es su propio Peso gravitatorio.",
                            feedbackIncorrect: "Incorrecto. Si no hay resistencia del aire, únicamente actúa 1 fuerza: el Peso.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el propósito fundamental de dibujar un DCL en física?",
                            options: [
                                "Darle una presentación artística al reporte de laboratorio.",
                                "Identificar de forma visual y rigurosa todas las fuerzas externas que actúan sobre un cuerpo para formular correctamente la sumatoria vectorial.",
                                "Calcular numéricamente el coeficiente de fricción de forma directa.",
                                "Medir el ángulo de inclinación de la rampa."
                            ],
                            correctAnswer: 1,
                            hint: "El DCL es la herramienta que nos permite plantear las ecuaciones de Newton sin omitir ninguna interacción física.",
                            feedbackCorrect: "¡Excelente! El DCL es el mapa de fuerzas que asegura no olvidar ninguna interacción al plantear ∑F = ma.",
                            feedbackIncorrect: "Incorrecto. Sirve para identificar y aislar visualmente todas las fuerzas externas que actúan sobre la partícula.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Un DCL aisla al cuerpo y grafica vectorialmente las fuerzas externas que actúan sobre él. En planos inclinados con ángulo θ, el peso se descompone en $mg\\operatorname{sen}(\\theta)$ y $mg\\cos(\theta)$.",
                    videoPlaceholderText: "Video de Física: Cómo trazar un diagrama de cuerpo libre perfecto paso a paso."
                }
            ]
        },
        {
            title: "Unidad 2: La Segunda Ley de Newton (Fuerza y Aceleración)",
            lessons: [
                {
                    id: "segunda-ley-newton-fma",
                    title: "Lección 2.1: La Segunda Ley de Newton (F = ma)",
                    introduction: "Aplica el principio fundamental de la dinámica lineal $\\vec{F}_{\\text{neta}} = m\\vec{a}$ para relacionar fuerza, masa y aceleración.",
                    explanationHtml: '<p>La <strong>Segunda Ley de Newton (o Ley del Movimiento)</strong> establece que cuando una fuerza neta externa actúa sobre un cuerpo, este experimenta una aceleración que es directamente proporcional a la magnitud de dicha fuerza neta, tiene la misma dirección y sentido que ella, y es inversamente proporcional a la masa inercial del cuerpo.</p><p class="mt-2 text-slate-700">La ecuación vectorial fundamental se plantea como:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\sum \\vec{F} = m \\cdot \\vec{a}$$</p><p class="mt-2 text-slate-700">Donde:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>$\\sum \\vec{F}$ o $\\vec{F}_{\\text{neta}}$:</strong> Suma vectorial de todas las fuerzas externas aplicadas al cuerpo ($N$).</li><li><strong>$m$:</strong> Masa inercial del cuerpo ($kg$).</li><li><strong>$\\vec{a}$:</strong> Aceleración resultante ($m/s^2$).</li></ul><p class="mt-2 text-slate-705">Una fuerza de $1\\text{ Newton (N)}$ equivale exactamente a la fuerza necesaria para acelerar una masa de $1\\text{ kg}$ a una tasa constante de $1\\text{ m/s}^2$ ($1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$).</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Segunda Ley de Newton</p><p class="text-xs font-mono font-bold text-primary">F_neta = m &bull; a &nbsp;|&nbsp; a = F_neta / m &nbsp;|&nbsp; m = F_neta / a</p><p class="text-xs text-slate-500">Recuerda: F_neta representa la SUMA de fuerzas a favor menos las fuerzas en contra.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">SEGUNDA LEY: F = m &bull; a</text><line x1="30" y1="90" x2="270" y2="90" stroke="#94a3b8" stroke-width="1.5" /><rect x="90" y="50" width="70" height="30" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="3" /><circle cx="105" cy="85" r="5.5" fill="#1e293b" /><circle cx="145" cy="85" r="5.5" fill="#1e293b" /><text x="125" y="68" font-size="8" font-family="sans-serif" font-weight="bold" fill="#1e40af" text-anchor="middle">Masa: 10 kg</text><line x1="160" y1="65" x2="220" y2="65" stroke="#ef4444" stroke-width="2.5" /><polygon points="218,61 226,65 218,69" fill="#ef4444" /><text x="193" y="57" font-size="8" fill="#b91c1c" font-weight="bold" text-anchor="middle">F_neta = 30 N</text><line x1="100" y1="38" x2="150" y2="38" stroke="#10b981" stroke-width="2" /><polygon points="148,35 154,38 148,41" fill="#10b981" /><text x="125" y="32" font-size="8" fill="#047857" font-weight="bold" text-anchor="middle">a = 3 m/s&sup2;</text></svg>',
                    svgDescription: "Un carro de masa m = 10 kg empujado por una fuerza neta de 30 N en superficie lisa. La aceleración resultante constante (verde) es de 3 m/s² en la misma dirección de la fuerza.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un bloque de $10\\text{ kg}$ es empujado sobre una superficie horizontal lisa en Xela por una fuerza constante de $30\\text{ Newtons}$. Calcula la aceleración del bloque.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Escribir Ecuación):</strong> Dado que la superficie es lisa, no hay fricción retardante. La fuerza aplicada de 30 N es la fuerza neta: <br>$$\\sum F_x = m \\cdot a$$</li><li><strong>Paso 2 (Reemplazar y despejar):</strong> Reemplazamos la masa ($m = 10\\text{ kg}$) y la fuerza ($F = 30\\text{ N}$): <br>$$30 = 10 \\cdot a \\Rightarrow a = \\frac{30}{10} = 3\\text{ m/s}^2$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El bloque acelera a una tasa constante de <strong>3 m/s²</strong> en dirección de la fuerza.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Usar fuerzas individuales en vez de la neta:</strong> Olvidar restar las fuerzas opuestas (como la fricción) al aplicar la ecuación de Newton, lo cual llevaría a un valor de aceleración erróneo y sobreestimado.</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué magnitud de fuerza neta en Newtons se necesita para acelerar un carrito de 5 kg a una aceleración de 4 m/s²? (Ingresa solo el número entero):",
                            correctAnswer: "20",
                            hint: "Aplica de forma directa la Segunda Ley de Newton: F_neta = m * a.",
                            feedbackCorrect: "¡Excelente! F = 5 kg * 4 m/s² = 20 Newtons.",
                            feedbackIncorrect: "Incorrecto. F_neta = m * a = 5 * 4 = 20 Newtons.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si aplicas una fuerza neta constante de 50 N a un bloque de metal y este acelera a 2.5 m/s², ¿cuál es la masa del bloque en kg? (Ingresa solo el número entero):",
                            correctAnswer: "20",
                            hint: "Despeja la masa de la fórmula de la Segunda Ley: m = F_neta / a.",
                            feedbackCorrect: "¡Perfecto! m = 50 N / 2.5 m/s² = 20 kg.",
                            feedbackIncorrect: "Incorrecto. Masa m = F/a = 50 / 2.5 = 20 kg.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si duplicas la fuerza neta resultante sobre un objeto de masa constante, ¿qué ocurre con su aceleración?",
                            options: [
                                "Se reduce a la mitad.",
                                "Se duplica.",
                                "Se mantiene constante.",
                                "Se cuadruplica."
                            ],
                            correctAnswer: 1,
                            hint: "La aceleración es directamente proporcional a la fuerza neta en la Segunda Ley de Newton.",
                            feedbackCorrect: "¡Excelente! Al ser directamente proporcional, si la fuerza neta se duplica, la aceleración también se duplica.",
                            feedbackIncorrect: "Incorrecto. Es directamente proporcional, por ende se duplica.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si duplicas la masa de un objeto bajo la acción de una fuerza neta constante, ¿qué ocurre con su aceleración?",
                            options: [
                                "Se reduce a la mitad.",
                                "Se duplica.",
                                "Se mantiene constante.",
                                "Se cuadruplica."
                            ],
                            correctAnswer: 0,
                            hint: "La aceleración es inversamente proporcional a la masa del cuerpo.",
                            feedbackCorrect: "¡Perfecto! A mayor inercia (masa), menor será la aceleración generada por la misma fuerza neta (se reduce a la mitad).",
                            feedbackIncorrect: "Incorrecto. La masa es inversamente proporcional a la aceleración, por lo que se reduce a la mitad.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Un cohete de juguete tiene una masa de 2 kg. Si su motor produce un empuje vertical hacia arriba de 30 N, calcula su aceleración ascendente en m/s². (Considera la gravedad g = 10 m/s² e ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "Calcula primero la Fuerza Neta vertical: Empuje (arriba) - Peso (abajo). Peso = m * g = 2 * 10 = 20 N. Luego aplica a = F_neta / m.",
                            feedbackCorrect: "¡Excelente! F_neta = 30 N - 20 N = 10 N. Aceleración a = 10 N / 2 kg = 5 m/s².",
                            feedbackIncorrect: "Incorrecto. Peso = 20 N. F_neta = 30 - 20 = 10 N. Aceleración = 10 / 2 = 5 m/s².",
                            difficulty: "avanzado",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La Segunda Ley establece que la fuerza neta causa aceleración ($F = ma$). El Newton ($N$) relaciona de forma unificada masa, longitud y tiempo.",
                    videoPlaceholderText: "Video de Física: La Segunda Ley de Newton y resolución de dinámicas horizontales básicas."
                },
                {
                    id: "masa-versus-peso",
                    title: "Lección 2.2: Masa versus Peso",
                    introduction: "Diferencia con rigor científico entre la masa inercial (constante) y el peso gravitacional (variable según el campo g).",
                    explanationHtml: '<p>En el habla cotidiana a menudo confundimos masa con peso, pero en física e ingeniería representan dos conceptos totalmente diferentes:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Masa ($m$):</strong> Es una magnitud escalar que mide la cantidad inercial de materia de un cuerpo, es decir, su resistencia a ser acelerado. Es una constante intrínseca; su valor es el **mismo en cualquier lugar del universo**. Su unidad en el SI es el **kilogramo ($kg$)**.</li><li><strong>Peso ($w$):</strong> Es una magnitud vectorial que mide la fuerza de atracción gravitatoria ejercida sobre un cuerpo por un planeta o astro. Es **variable** y depende del valor local de la aceleración de la gravedad ($g$). Su unidad en el SI es el **Newton ($N$)** y se calcula con: <br>$$w = m \\cdot g$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Comparación de Variables</p><p class="text-xs font-mono font-bold text-primary">Masa &rArr; Kilogramos (kg) &bull; Escalar e Invariable</p><p class="text-xs font-mono font-bold text-primary">Peso (w = m&bull;g) &rArr; Newtons (N) &bull; Vectorial y Variable</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">MASA (CTE) VS PESO (VARIABLE)</text><line x1="15" y1="100" x2="135" y2="100" stroke="#3b82f6" stroke-width="1.5" /><text x="75" y="112" font-size="7" fill="#1e40af" font-weight="bold" text-anchor="middle">TIERRA (g = 9.8 m/s&sup2;)</text><circle cx="75" cy="55" r="8" fill="#475569" /><line x1="75" y1="63" x2="75" y2="85" stroke="#475569" stroke-width="2" /><line x1="75" y1="85" x2="68" y2="100" stroke="#475569" stroke-width="1.5" /><line x1="75" y1="85" x2="82" y2="100" stroke="#475569" stroke-width="1.5" /><line x1="75" y1="70" x2="65" y2="78" stroke="#475569" stroke-width="1.5" /><line x1="75" y1="70" x2="85" y2="78" stroke="#475569" stroke-width="1.5" /><text x="75" y="42" font-size="7" fill="#1e293b" text-anchor="middle">m = 80 kg</text><line x1="75" y1="63" x2="75" y2="95" stroke="#ef4444" stroke-width="1.5" /><polygon points="72,93 75,98 78,93" fill="#ef4444" /><text x="96" y="78" font-size="7" fill="#b91c1c" font-weight="bold" text-anchor="middle">w = 784 N</text><line x1="150" y1="30" x2="150" y2="110" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3" /><line x1="165" y1="100" x2="285" y2="100" stroke="#f59e0b" stroke-width="1.5" /><text x="225" y="112" font-size="7" fill="#b45309" font-weight="bold" text-anchor="middle">LUNA (g = 1.6 m/s&sup2;)</text><circle cx="225" cy="55" r="8" fill="#475569" /><line x1="225" y1="63" x2="225" y2="85" stroke="#475569" stroke-width="2" /><line x1="225" y1="85" x2="218" y2="100" stroke="#475569" stroke-width="1.5" /><line x1="225" y1="85" x2="232" y2="100" stroke="#475569" stroke-width="1.5" /><line x1="225" y1="70" x2="215" y2="78" stroke="#475569" stroke-width="1.5" /><line x1="225" y1="70" x2="235" y2="78" stroke="#475569" stroke-width="1.5" /><text x="225" y="42" font-size="7" fill="#1e293b" text-anchor="middle">m = 80 kg</text><line x1="225" y1="63" x2="225" y2="78" stroke="#ef4444" stroke-width="1.5" /><polygon points="222,76 225,81 228,76" fill="#ef4444" /><text x="246" y="73" font-size="7" fill="#b91c1c" font-weight="bold" text-anchor="middle">w = 128 N</text></svg>',
                    svgDescription: "Un astronauta de masa m = 80 kg en la Tierra (g = 9.8 m/s²) y la Luna (g = 1.6 m/s²). Su masa inercial de 80 kg permanece inalterada, pero su peso de atracción varía de 784 N a 128 N.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un astronauta tiene una masa de $80\\text{ kg}$. Calcula su masa y su peso en la Tierra ($g_{\\text{Tierra}} = 9.8\\text{ m/s}^2$) y en la Luna ($g_{\\text{Luna}} = 1.6\\text{ m/s}^2$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Masa):</strong> La masa representa la inercia inalterable. Por lo tanto, la masa es idéntica en ambos cuerpos celestes: <br>$$m = 80\\text{ kg}$$</li><li><strong>Paso 2 (Peso en la Tierra):</strong> Multiplicamos por la gravedad de la Tierra: <br>$$w_{\\text{Tierra}} = m \\cdot g_{\\text{Tierra}} = 80\\text{ kg} \\times 9.8\\text{ m/s}^2 = 784\\text{ Newtons}$$</li><li><strong>Paso 3 (Peso en la Luna):</strong> Multiplicamos por la gravedad de la Luna: <br>$$w_{\\text{Luna}} = m \\cdot g_{\\text{Luna}} = 80\\text{ kg} \\times 1.6\\text{ m/s}^2 = 128\\text{ Newtons}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> Su masa es de <strong>80 kg</strong> en ambos astros; su peso es de <strong>784 N</strong> en la Tierra y de <strong>128 N</strong> en la Luna.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir unidades de laboratorio:</strong> Expresar el peso en kilogramos en reportes o tareas escolares. El peso es una fuerza y siempre debe medirse en Newtons en el SI.</li></ul>',
                    exercises: [
                        {
                            question: "Si un saco de maíz en Sololá tiene un peso de 490 Newtons, ¿cuál es su masa inercial en kg? (Usa g = 9.8 m/s² y escribe solo el número entero):",
                            correctAnswer: "50",
                            hint: "Despeja masa a partir de w = m * g. Es decir, m = w / g.",
                            feedbackCorrect: "¡Excelente! m = 490 N / 9.8 m/s² = 50 kg.",
                            feedbackIncorrect: "Incorrecto. Masa m = w/g = 490 / 9.8 = 50 kg.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el peso en Newtons de una masa de 2 kg en la superficie de la Luna, si la gravedad lunar es de 1.6 m/s²? (Ingresa el número decimal con punto):",
                            correctAnswer: "3.2",
                            hint: "Aplica w = m * g_luna. Reemplaza m = 2 y g_luna = 1.6.",
                            feedbackCorrect: "¡Perfecto! w = 2 kg * 1.6 m/s² = 3.2 Newtons.",
                            feedbackIncorrect: "Incorrecto. Peso lunar = 2 * 1.6 = 3.2 Newtons.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si viajas al espacio profundo lejos de la atracción de estrellas y planetas donde la gravedad es nula, ¿cuál será el valor de tu masa y tu peso?",
                            options: [
                                "Masa se reduce a cero, Peso se mantiene idéntico.",
                                "Masa se mantiene idéntica, Peso es cero.",
                                "Tanto la masa como el peso se reducen a cero.",
                                "Ambos se duplican por la presión estelar."
                            ],
                            correctAnswer: 1,
                            hint: "La cantidad de materia no cambia en el espacio, pero sí desaparece la atracción gravitatoria.",
                            feedbackCorrect: "¡Excelente! Tu masa (cantidad de materia) sigue siendo idéntica, pero al no haber gravedad, tu peso es exactamente 0 N.",
                            feedbackIncorrect: "Incorrecto. La masa es constante en el universo, mientras que el peso depende de g, siendo cero en el espacio vacío.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Qué instrumento de medición mide directamente la fuerza de un peso mediante la deformación de un resorte interno?",
                            options: [
                                "Balanza analítica clásica.",
                                "Dinamómetro.",
                                "Termómetro.",
                                "Cronómetro digital."
                            ],
                            correctAnswer: 1,
                            hint: "Se basa en la Ley de Hooke, calibrando la extensión de un resorte con marcas en Newtons.",
                            feedbackCorrect: "¡Perfecto! El dinamómetro es el instrumento que mide fuerzas y pesos estirando un resorte.",
                            feedbackIncorrect: "Incorrecto. El dinamómetro es el instrumento calibrado para medir fuerzas y peso.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Con qué instrumento físico se compara e identifica la masa inercial de un cuerpo usando masas de referencia?",
                            options: [
                                "Dinamómetro de gancho.",
                                "Balanza clásica de dos platillos.",
                                "Barómetro de mercurio.",
                                "Manómetro."
                            ],
                            correctAnswer: 1,
                            hint: "Compara fuerzas equilibradas en dos platillos suspendidos.",
                            feedbackCorrect: "¡Perfecto! La balanza de platillos compara la masa del cuerpo con masas estándar de referencia, anulando el efecto del valor de g.",
                            feedbackIncorrect: "Incorrecto. La balanza clásica de dos platillos es el instrumento que mide y compara masas inerciales.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La masa mide inercia ($kg$) y es invariable. El peso mide fuerza de gravedad ($N$) y varía con la aceleración gravitacional del entorno ($w = mg$).",
                    videoPlaceholderText: "Video de Física: Diferencia visual y conceptual entre masa y peso explicada."
                },
                {
                    id: "sistemas-varias-masas-atwood",
                    title: "Lección 2.3: Sistemas de Varias Masas (Máquina de Atwood)",
                    introduction: "Aprende a analizar y resolver la aceleración y la tensión en sistemas mecánicos de masas múltiples conectadas por cuerdas.",
                    explanationHtml: '<p>Para resolver sistemas dinámicos con múltiples masas acopladas (como la célebre <strong>Máquina de Atwood</strong> o bloques arrastrados sobre mesas), aplicamos un método analítico estructurado en cuatro pasos:</p><ol class="list-decimal pl-5 space-y-2 my-3"><li><strong>Dibujar DCL individuales:</strong> Trazar un Diagrama de Cuerpo Libre por separado para cada uno de los bloques del sistema.</li><li><strong>Plantear la Segunda Ley:</strong> Escribir la ecuación de la Segunda Ley de Newton ($\\sum F = m \\cdot a$) para cada bloque. Es sumamente recomendable definir el eje positivo a favor del sentido esperado de movimiento de cada bloque.</li><li><strong>Sumar las ecuaciones:</strong> Sumar algebraicamente todas las ecuaciones. Al hacerlo, las tensiones internas de las cuerdas ideales (fuerzas internas acción-reacción) se cancelarán mutuamente, permitiendo despejar directamente la aceleración del sistema ($a$).</li><li><strong>Calcular Tensión ($T$):</strong> Sustituir el valor de la aceleración calculado en cualquiera de las ecuaciones de DCL individuales para despejar la tensión de la cuerda.</li></ol>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuación Aceleración Máquina de Atwood</p><p class="text-xs font-mono font-bold text-primary">a = (m1 - m2) &bull; g / (m1 + m2)</p><p class="text-xs text-slate-500">Considerando m1 &gt; m2. Las tensiones en cuerdas ideales son iguales en ambos lados.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">MÁQUINA DE ATWOOD</text><rect x="145" y="25" width="10" height="10" fill="#64748b" /><circle cx="150" cy="40" r="12" fill="#eff6ff" stroke="#475569" stroke-width="2" /><circle cx="150" cy="40" r="3" fill="#1e293b" /><line x1="138" y1="40" x2="138" y2="75" stroke="#475569" stroke-width="1.5" /><rect x="125" y="75" width="26" height="22" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5" rx="3" /><text x="138" y="88" font-size="7" font-weight="bold" fill="#991b1b" text-anchor="middle">m1</text><text x="138" y="105" font-size="6" fill="#475569" text-anchor="middle">3 kg (a &darr;)</text><line x1="162" y1="40" x2="162" y2="60" stroke="#475569" stroke-width="1.5" /><rect x="150" y="60" width="24" height="20" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5" rx="3" /><text x="162" y="72" font-weight="bold" font-size="7" fill="#1e40af" text-anchor="middle">m2</text><text x="162" y="90" font-size="6" fill="#475569" text-anchor="middle">2 kg (a &uarr;)</text><line x1="138" y1="75" x2="138" y2="60" stroke="#10b981" stroke-width="1" /><polygon points="136,62 138,58 140,62" fill="#10b981" /><text x="131" y="66" font-size="6" fill="#047857">T</text><line x1="162" y1="60" x2="162" y2="48" stroke="#10b981" stroke-width="1" /><polygon points="160,50 162,46 164,50" fill="#10b981" /><text x="167" y="53" font-size="6" fill="#047857">T</text><line x1="110" y1="75" x2="110" y2="85" stroke="#f59e0b" stroke-width="1.5" /><polygon points="108,83 110,87 112,83" fill="#f59e0b" /><text x="104" y="81" font-size="7" fill="#b45309" font-weight="bold">a</text></svg>',
                    svgDescription: "Máquina de Atwood clásica en funcionamiento. La masa mayor m1 desciende acelerando, mientras la menor m2 asciende. La cuerda ideal transmite una tensión T igual para ambos lados.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Una Máquina de Atwood consta de dos masas colgadas de una polea fija mediante un cable ideal. Si $m_1 = 3\\text{ kg}$ y $m_2 = 2\\text{ kg}$, calcula la aceleración del sistema y la tensión en el cable (usa $g = 10\\text{ m/s}^2$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Escribir ecuaciones de DCL):</strong> <br>Definimos el movimiento de $m_1$ (baja por ser mayor) y $m_2$ (sube): <br>- Bloque 1: $m_1 g - T = m_1 a \\Rightarrow 30 - T = 3a$ <br>- Bloque 2: $T - m_2 g = m_2 a \\Rightarrow T - 20 = 2a$</li><li><strong>Paso 2 (Sumar ecuaciones para cancelar T):</strong> <br>$$(30 - T) + (T - 20) = 3a + 2a \\Rightarrow 10 = 5a$$</li><li><strong>Paso 3 (Resolver aceleración):</strong> <br>$$a = \\frac{10}{5} = 2\\text{ m/s}^2$$</li><li><strong>Paso 4 (Resolver Tensión):</strong> <br>Sustituimos $a = 2\\text{ m/s}^2$ en la ecuación del Bloque 2: <br>$$T - 20 = 2(2) \\Rightarrow T = 20 + 4 = 24\\text{ Newtons}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultados:</strong> Aceleración = <strong>2 m/s²</strong>, Tensión en la cuerda = <strong>24 Newtons</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Suponer Tensiones estáticas:</strong> Creer que la tensión en la cuerda es simplemente igual al peso de la masa mayor ($m_1 g$). Si esto ocurriera, la fuerza neta en $m_1$ sería cero y el sistema no podría acelerar en lo absoluto.</li></ul>',
                    exercises: [
                        {
                            question: "Dos masas de 6 kg y 4 kg se conectan en una máquina de Atwood clásica. Calcula la magnitud de la aceleración del sistema en m/s². (Considera g = 10 m/s² e ingresa solo el número entero):",
                            correctAnswer: "2",
                            hint: "Aplica a = (m1 - m2)g / (m1 + m2). Reemplaza m1 = 6, m2 = 4 y g = 10.",
                            feedbackCorrect: "¡Excelente! a = (6 - 4)*10 / (6 + 4) = 2*10 / 10 = 2 m/s².",
                            feedbackIncorrect: "Incorrecto. Aceleración = (6 - 4)*10 / (6 + 4) = 20 / 10 = 2 m/s².",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si en una máquina de Atwood las dos masas son idénticas (m = 5 kg cada una), ¿cuál será el valor de la aceleración resultante del sistema en m/s²? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "Masas iguales implican pesos iguales tirando de ambos extremos, lo que anula la fuerza neta de giro.",
                            feedbackCorrect: "¡Perfecto! Al ser de igual masa, las fuerzas gravitatorias se equilibran perfectamente, resultando en una aceleración nula (0 m/s²).",
                            feedbackIncorrect: "Incorrecto. Al ser las masas iguales el sistema está en equilibrio, por lo que la aceleración es 0.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Una masa de 5 kg está sobre una mesa lisa horizontal y se jala por una cuerda horizontal ideal que pasa por una polea en el borde de la cual cuelga otra masa de 5 kg. Calcula la aceleración del sistema en m/s². (Usa g = 10 m/s² e ingresa el número decimal con punto):",
                            correctAnswer: "5.0",
                            hint: "La fuerza motora es el peso del bloque colgante w2 = m2 * g = 50 N. La masa total acelerada es m1 + m2 = 10 kg. Aplica a = w2 / M_total.",
                            feedbackCorrect: "¡Excelente! a = 50 N / (5 + 5) kg = 50 / 10 = 5.0 m/s².",
                            feedbackIncorrect: "Incorrecto. La aceleración es a = m2*g / (m1 + m2) = 50 / 10 = 5.0 m/s².",
                            difficulty: "avanzado",
                            type: "short"
                        },
                        {
                            question: "Con los datos del sistema de mesa lisa del ejercicio anterior (m1 = 5 kg en mesa, m2 = 5 kg colgando), calcula la tensión de la cuerda en Newtons: (Ingresa el número decimal con punto):",
                            correctAnswer: "25.0",
                            hint: "Para el bloque 1 en la mesa lisa, la única fuerza en X es T. Por lo tanto, T = m1 * a. Usa a = 5.0 m/s².",
                            feedbackCorrect: "¡Perfecto! T = m1 * a = 5 kg * 5.0 m/s² = 25.0 Newtons.",
                            feedbackIncorrect: "Incorrecto. Tensión T = m1 * a = 5 * 5 = 25.0 Newtons.",
                            difficulty: "avanzado",
                            type: "short"
                        },
                        {
                            question: "¿Qué propiedades ideales debe cumplir un cable o cuerda en física clásica de poleas?",
                            options: [
                                "Debe tener masa despreciable (ultraligera), ser inextensible (no elástica) y no tener fricción interna.",
                                "Debe ser muy pesada para añadir estabilidad al sistema.",
                                "Debe ser muy elástica como un resorte de goma.",
                                "Debe ser de metal grueso para disipar el peso de los bloques."
                            ],
                            correctAnswer: 0,
                            hint: "Las cuerdas reales tienen masa y se estiran. Buscamos el modelo simplificado ideal.",
                            feedbackCorrect: "¡Excelente! Una cuerda ideal en física no tiene masa apreciable y no se estira, transmitiendo la tensión de forma perfecta y uniforme.",
                            feedbackIncorrect: "Incorrecto. Una cuerda ideal debe ser inextensible, sin masa y libre de fricciones.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Resolver poleas acopladas requiere trazar DCL independientes y plantear la suma de ecuaciones para eliminar tensiones internas y hallar la aceleración.",
                    videoPlaceholderText: "Video de Física: Cómo resolver sistemas de poleas y Atwood paso a paso paso."
                }
            ]
        },
        {
            title: "Unidad 3: Tercera Ley de Newton y Fricción",
            lessons: [
                {
                    id: "tercera-ley-accion-reaccion",
                    title: "Lección 3.1: Tercera Ley de Newton (Acción y Reacción)",
                    introduction: "Domina la Ley de Acción y Reacción e identifica parejas de fuerzas mecánicas en interacciones cotidianas.",
                    explanationHtml: '<p>La <strong>Tercera Ley de Newton (o Principio de Acción y Reacción)</strong> establece que si un cuerpo A ejerce una fuerza sobre un cuerpo B (Fuerza de Acción), el cuerpo B ejerce simultáneamente una fuerza de igual magnitud pero en dirección opuesta sobre el cuerpo A (Fuerza de Reacción).</p><p class="mt-2 text-slate-700">La ecuación matemática que describe esta interacción es:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\vec{F}_{\\text{A sobre B}} = -\\vec{F}_{\\text{B sobre A}}$$</p><p class="mt-2 text-slate-700">Dos reglas de oro fundamentales de esta ley:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li>Las fuerzas de acción-reacción ocurren en **parejas simultáneas**.</li><li>Estas fuerzas actúan sobre **cuerpos diferentes**. Por esta razón, **nunca se anulan o cancelan entre sí** en un Diagrama de Cuerpo Libre individual.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ley de Acción y Reacción</p><p class="text-xs font-mono font-bold text-primary">F_AB = - F_BA</p><p class="text-xs text-slate-500">Misma magnitud y dirección, sentidos opuestos, actúan sobre cuerpos diferentes.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ACCIÓN Y REACCIÓN (3ª LEY)</text><line x1="30" y1="95" x2="270" y2="95" stroke="#94a3b8" stroke-width="1.5" /><rect x="220" y="30" width="30" height="65" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" /><path d="M 220 40 L 250 30 M 220 55 L 250 45 M 220 70 L 250 60 M 220 85 L 250 75" stroke="#cbd5e1" stroke-width="1" /><circle cx="130" cy="52" r="6" fill="#475569" /><line x1="130" y1="58" x2="150" y2="78" stroke="#475569" stroke-width="2" /><line x1="130" y1="62" x2="220" y2="62" stroke="#475569" stroke-width="1.5" /><line x1="150" y1="78" x2="135" y2="95" stroke="#475569" stroke-width="1.5" /><line x1="150" y1="78" x2="165" y2="95" stroke="#475569" stroke-width="1.5" /><line x1="190" y1="50" x2="220" y2="50" stroke="#ef4444" stroke-width="1.5" /><polygon points="218,48 222,50 218,52" fill="#ef4444" /><text x="175" y="44" font-size="6.5" fill="#b91c1c" font-weight="bold">F_acción (100 N)</text><line x1="220" y1="74" x2="185" y2="74" stroke="#10b981" stroke-width="1.5" /><polygon points="187,72 183,74 187,76" fill="#10b981" /><text x="210" y="84" font-size="6.5" fill="#047857" font-weight="bold" text-anchor="end">F_reacción (-100 N)</text></svg>',
                    svgDescription: "Una persona empuja una pared rígida. La persona aplica una fuerza F_acción (rojo) hacia la derecha sobre la pared; simultáneamente, la pared reacciona aplicando una fuerza F_reacción (verde) de igual magnitud hacia la izquierda sobre las manos de la persona.",
                    workedExampleHtml: '<p><strong>Ejemplo práctico:</strong> Un nadador empuja con fuerza la pared de una piscina con sus pies para impulsarse. Explica las fuerzas de acción y reacción.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Fuerza de Acción):</strong> Los pies del nadador ejercen una fuerza muscular horizontal hacia atrás sobre la pared de la piscina.</li><li><strong>Paso 2 (Fuerza de Reacción):</strong> La pared rígida de la piscina reacciona aplicando de forma simultánea una fuerza de igual magnitud pero horizontal hacia adelante sobre los pies del nadador.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> El nadador es impulsado y acelera en el agua hacia adelante gracias a la fuerza de reacción que ejerce la pared sobre él.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Creer que las fuerzas se cancelan:</strong> Pensar que como la fuerza de acción es igual y opuesta a la de reacción, siempre deben sumarse y dar resultante cero. Recuerda que la resultante cero solo se da si actúan sobre el <strong>mismo</strong> cuerpo. Aquí actúan sobre dos cuerpos distintos, por lo que causan aceleraciones individuales.</li></ul>',
                    exercises: [
                        {
                            question: "Si la Tierra ejerce una fuerza de atracción gravitatoria de 600 Newtons sobre una persona, ¿qué magnitud de fuerza en Newtons ejerce la persona sobre la Tierra por reacción? (Ingresa solo el número entero):",
                            correctAnswer: "600",
                            hint: "Aplica la Tercera Ley de Newton de forma directa. La fuerza de atracción es mutua y de idéntica magnitud.",
                            feedbackCorrect: "¡Excelente! La persona ejerce una fuerza gravitatoria idéntica de 600 Newtons sobre la Tierra por reacción.",
                            feedbackIncorrect: "Incorrecto. Por la 3ª ley, la fuerza que ejerce la persona sobre la Tierra es idéntica en magnitud: 600 Newtons.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Al disparar un rifle de caza, el cazador experimenta un fuerte retroceso ('patada') del arma sobre su hombro. ¿Cómo se explica físicamente?",
                            options: [
                                "Por la atracción gravitatoria del proyectil.",
                                "Por la fuerza de reacción que el proyectil ejerce sobre el rifle en sentido opuesto al avance del disparo.",
                                "Por la inercia del hombro que se desplaza solo.",
                                "Por la resistencia del aire dentro del cañón."
                            ],
                            correctAnswer: 1,
                            hint: "El rifle empuja el proyectil hacia adelante (acción); por ende el proyectil debe empujar al rifle...",
                            feedbackCorrect: "¡Perfecto! La fuerza de reacción empuja al rifle hacia atrás con la misma cantidad de movimiento dada a la bala hacia adelante.",
                            feedbackIncorrect: "Incorrecto. Es la fuerza de reacción del proyectil impulsado sobre el rifle hacia atrás.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Empujas con tus manos una pared de hormigón rígida aplicando una fuerza de 100 Newtons. Si la pared no se desplaza en lo absoluto, ¿con qué magnitud de fuerza en Newtons te empuja la pared a ti? (Ingresa solo el número entero):",
                            correctAnswer: "100",
                            hint: "La Tercera Ley de Newton se cumple estrictamente sin importar si hay movimiento o reposo.",
                            feedbackCorrect: "¡Excelente! La pared ejerce una fuerza de reacción exacta de 100 Newtons de vuelta sobre tus manos.",
                            feedbackIncorrect: "Incorrecto. Por reacción, la fuerza devuelta por la pared es exactamente de 100 Newtons.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cómo impulsa la hélice de un bote a motor su desplazamiento sobre la superficie del agua?",
                            options: [
                                "La hélice empuja el agua hacia adelante, lo que tira del bote.",
                                "La hélice empuja el agua hacia atrás (acción); el agua reacciona empujando a la hélice y al bote hacia adelante (reacción).",
                                "La hélice succiona el aire para evaporar el agua debajo.",
                                "Por la inercia estática del timón."
                            ],
                            correctAnswer: 1,
                            hint: "Para avanzar hacia el frente, debes empujar la materia de soporte hacia atrás.",
                            feedbackCorrect: "¡Excelente! Acción: empujar el agua hacia atrás. Reacción: el agua empuja al bote hacia adelante.",
                            feedbackIncorrect: "Incorrecto. La hélice empuja el agua hacia atrás y el agua reacciona empujando el bote adelante.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Por qué es físicamente imposible empujar un automóvil atascado si te sientas en el asiento del conductor y empujas el tablero con tus manos?",
                            options: [
                                "Porque la masa del tablero es infinita.",
                                "Porque son fuerzas internas al sistema del automóvil. Para alterar el movimiento del sistema se requiere una fuerza externa del suelo contra tus pies apoyados afuera.",
                                "Porque la gravedad del auto cancela las tensiones.",
                                "Porque la fricción cinética de los asientos es muy alta."
                            ],
                            correctAnswer: 1,
                            hint: "Las fuerzas de acción-reacción internas a un mismo sistema se equilibran y no alteran su cantidad de movimiento global.",
                            feedbackCorrect: "¡Excelente! Solo las fuerzas externas netas pueden acelerar un sistema. Las fuerzas internas entre tú y el tablero se cancelan dentro del auto.",
                            feedbackIncorrect: "Incorrecto. Se trata de fuerzas internas que no pueden alterar el movimiento del sistema; se requiere una fuerza externa del suelo.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La Tercera Ley de Newton detalla que las fuerzas son interacciones mutuas que ocurren en parejas de igual magnitud y sentido opuesto en cuerpos diferentes.",
                    videoPlaceholderText: "Video de Física: Acción y reacción explicada de forma interactiva en la vida real."
                },
                {
                    id: "friccion-estatica-cinetica",
                    title: "Lección 3.2: Fricción Estática y Cinética",
                    introduction: "Diferencia analíticamente entre la fricción estática y cinética, y domina el cálculo de fuerzas retardadoras con $f = \\mu N$.",
                    explanationHtml: '<p>La <strong>fuerza de fricción o rozamiento ($\\vec{f}$)</strong> es una fuerza de contacto paralela a las superficies producida por las rugosidades e imperfecciones microscópicas de los materiales en contacto. Se divide en dos tipos fundamentales:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Fricción Estática ($f_s$):</strong> Actúa impidiendo el inicio del deslizamiento entre dos superficies en reposo relativo. Su valor varía para contrarrestar la fuerza aplicada hasta alcanzar un límite máximo umbral de despegue: <br>$$f_{s,\\text{máx}} = \\mu_s \\cdot N$$</li><li><strong>Fricción Cinética ($f_k$):</strong> Actúa una vez que el objeto ya está en deslizamiento constante. Su valor es constante durante el movimiento: <br>$$f_k = \\mu_k \\cdot N$$</li></ul><p class="mt-2 text-slate-705">Donde $\\mu_s$ es el coeficiente de fricción estática, $\\mu_k$ el coeficiente de fricción cinética, y $N$ la fuerza normal. Científicamente, **$\\mu_s > \\mu_k$**; es decir, siempre cuesta más sacar un cuerpo pesado del reposo que mantenerlo en movimiento constante.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmulas de Fricción</p><p class="text-xs font-mono font-bold text-primary">fs_max = &mu;_s &bull; N &nbsp;|&nbsp; fk = &mu;_k &bull; N</p><p class="text-xs text-slate-500">Recuerda: El coeficiente &mu; es adimensional (no tiene unidades).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">FRICCIÓN ESTÁTICA Y CINÉTICA</text><line x1="30" y1="90" x2="270" y2="90" stroke="#94a3b8" stroke-width="1.5" /><rect x="110" y="50" width="80" height="40" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="4" /><text x="150" y="68" font-size="8" font-family="sans-serif" font-weight="bold" fill="#1e40af" text-anchor="middle">Masa: 10 kg</text><text x="150" y="80" font-size="7" fill="#475569" text-anchor="middle">Normal = 100 N</text><line x1="190" y1="70" x2="245" y2="70" stroke="#3b82f6" stroke-width="2" /><polygon points="243,67 249,70 243,73" fill="#3b82f6" /><text x="217" y="63" font-size="7" fill="#1e40af" font-weight="bold">F_ap = 40 N</text><line x1="110" y1="90" x2="55" y2="90" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" /><polygon points="57,93 51,90 57,87" fill="#f59e0b" /><text x="80" y="83" font-size="7" fill="#b45309" font-weight="bold" text-anchor="middle">fs = 40 N</text><text x="80" y="102" font-size="6" fill="#b45309" text-anchor="middle">Limit: fs_max = 50 N</text></svg>',
                    svgDescription: "Un bloque de masa m = 10 kg en reposo. Se le aplica una fuerza horizontal de 40 N (azul). La fricción estática real (naranja) es exactamente de 40 N, equilibrándolo. El límite máximo de fricción antes de deslizar es de 50 N.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un bloque de madera de $10\\text{ kg}$ se encuentra sobre un piso horizontal en Antigua con coeficientes de fricción $\\mu_s = 0.50$ y $\\mu_k = 0.30$. Si aplicas una fuerza horizontal de $40\\text{ Newtons}$, determina si el bloque se mueve y calcula la fuerza de fricción real (usa $g = 10\\text{ m/s}^2$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Calcular Fuerza Normal):</strong> En superficie plana: <br>$$N = w = m \\cdot g = 10\\text{ kg} \\times 10\\text{ m/s}^2 = 100\\text{ Newtons}$$</li><li><strong>Paso 2 (Calcular Límite Estático Máximo):</strong> <br>$$f_{s,\\text{máx}} = \\mu_s \\cdot N = 0.50 \\times 100\\text{ N} = 50\\text{ Newtons}$$</li><li><strong>Paso 3 (Comparar):</strong> La fuerza horizontal aplicada ($F = 40\\text{ N}$) no supera el umbral límite estático máximo ($f_{s,\\text{máx}} = 50\\text{ N}$). Por lo tanto, el bloque <strong>no se mueve</strong>.</li><li><strong>Paso 4 (Calcular Fricción Real):</strong> Como está en reposo estático, la fricción real se ajusta exactamente para equilibrar la fuerza aplicada: <br>$$f_s = F_{\\text{aplicada}} = 40\\text{ Newtons}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El bloque permanece en reposo y la fuerza de fricción real es de <strong>40 Newtons</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Calcular la fricción estática máxima como real:</strong> Responder directamente $50\\text{ N}$ como la fricción del ejemplo. Si la fricción estática fuera de $50\\text{ N}$ y solo empujamos con $40\\text{ N}$, ¡el bloque aceleraría solo hacia atrás rumbo a nosotros, lo cual viola la conservación de la energía!</li></ul>',
                    exercises: [
                        {
                            question: "Un bloque de 20 kg se desliza sobre un suelo horizontal rugoso con un coeficiente de fricción cinética de 0.20. ¿Cuál es el valor en Newtons de la fricción cinética? (g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "40",
                            hint: "Aplica fk = μ_k * N. En suelo plano horizontal, N = m * g = 20 * 10 = 200 N.",
                            feedbackCorrect: "¡Excelente! N = 200 N. fk = 0.20 * 200 N = 40 Newtons.",
                            feedbackIncorrect: "Incorrecto. Normal = 200 N. Fricción cinética = 0.2 * 200 = 40 Newtons.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Por qué es considerablemente más fácil arrastrar o empujar un refrigerador pesado una vez que ya ha comenzado a deslizarse que sacarlo del reposo absoluto?",
                            options: [
                                "Porque la masa del refrigerador disminuye con la velocidad.",
                                "Porque el coeficiente de fricción cinética (μ_k) es menor que el coeficiente de fricción estática (μ_s).",
                                "Porque la gravedad se anula temporalmente durante el deslizamiento.",
                                "Porque la normal se desplaza hacia atrás."
                            ],
                            correctAnswer: 1,
                            hint: "Compara el valor de los coeficientes de rozamiento antes y después de iniciar el movimiento.",
                            feedbackCorrect: "¡Perfecto! Al ser μ_k < μ_s, la fuerza necesaria para vencer la fricción en movimiento es menor que la requerida para el despegue.",
                            feedbackIncorrect: "Incorrecto. Se debe a que el coeficiente de fricción cinética es menor que el estático.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si duplicas la masa de un bloque que reposa sobre una mesa horizontal, ¿qué le ocurre al valor de la normal y al límite máximo de la fricción estática?",
                            options: [
                                "Ambos se reducen a la mitad.",
                                "Ambos se duplican.",
                                "La normal se duplica, pero el límite de fricción se mantiene idéntico.",
                                "Ambos se cuadruplican."
                            ],
                            correctAnswer: 1,
                            hint: "La normal en mesa horizontal es mg. La fricción máxima es μ_s * N. Ambas dependen linealmente de la masa.",
                            feedbackCorrect: "¡Excelente! Al duplicar la masa, se duplica el peso y la normal. Por ende, la fricción máxima (proporcional a la normal) también se duplica.",
                            feedbackIncorrect: "Incorrecto. Tanto la normal como la fricción estática máxima se duplican.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el coeficiente de fricción cinética si un bloque de 5 kg se desliza a velocidad constante impulsado por una fuerza horizontal de 15 N. (g = 10 m/s². Ingresa el número decimal con punto):",
                            correctAnswer: "0.3",
                            hint: "Velocidad constante implica aceleración nula. Por lo tanto, fk = F_aplicada = 15 N. La Normal es N = mg = 50 N. Despeja μ_k = fk / N.",
                            feedbackCorrect: "¡Perfecto! μ_k = 15 N / 50 N = 0.3 (adimensional).",
                            feedbackIncorrect: "Incorrecto. Normal = 50 N. μ_k = fk / Normal = 15 / 50 = 0.3.",
                            difficulty: "avanzado",
                            type: "short"
                        },
                        {
                            question: "¿Hacia dónde apunta la fuerza de fricción cinética que experimenta un bloque de madera si es arrastrado hacia el Norte?",
                            options: [
                                "Hacia el Este.",
                                "Hacia el Oeste.",
                                "Hacia el Sur.",
                                "Hacia el Norte."
                            ],
                            correctAnswer: 2,
                            hint: "La fricción cinética actúa paralela a la superficie y en sentido opuesto al deslizamiento real.",
                            feedbackCorrect: "¡Perfecto! Como desliza hacia el Norte, la fricción apunta en sentido opuesto, es decir, hacia el Sur.",
                            feedbackIncorrect: "Incorrecto. Se opone al sentido de deslizamiento (Norte), por lo que apunta al Sur.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La fricción se opone al deslizamiento. Fricción estática máxima ($f_{s,max} = \\mu_s N$) es mayor que la fricción cinética ($f_k = \\mu_k N$).",
                    videoPlaceholderText: "Video de Física: Rozamiento estático y dinámico y experimentos con planos inclinados."
                },
                {
                    id: "dinamica-movimiento-circular-uniforme",
                    title: "Lección 3.3: Dinámica del Movimiento Circular Uniforme",
                    introduction: "Calcula la aceleración y fuerza centrípeta necesarias para mantener a un cuerpo en órbita circular uniforme.",
                    explanationHtml: '<p>En el <strong>Movimiento Circular Uniforme (MCU)</strong>, aunque la rapidez lineal ($v$) del objeto sea constante, la dirección de su vector de velocidad cambia en cada instante. Este cambio de dirección genera una aceleración dirigida radialmente hacia el centro de la trayectoria circular, denominada <strong>aceleración centrípeta ($a_c$)</strong>:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$a_c = \\frac{v^2}{r}$$</p><p class="mt-2 text-slate-700">Por la Segunda Ley de Newton, la fuerza neta encargada de producir esta aceleración centrípeta es la <strong>Fuerza Centrípeta ($F_c$)</strong>, que apunta siempre al centro del círculo:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$F_c = m \\cdot a_c = \\frac{m \\cdot v^2}{r}$$</p><p class="mt-2 text-slate-707">La Fuerza Centrípeta **no es una fuerza nueva o física independiente**; es simplemente el nombre que recibe la fuerza neta resultante encargada de desviar al móvil (puede ser la fricción lateral de las llantas en una curva, la tensión en una honda o la atracción gravitatoria en un satélite).</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuaciones Dinámicas Circulares</p><p class="text-xs font-mono font-bold text-primary">a_c = v&sup2; / r &nbsp;|&nbsp; F_c = m &bull; v&sup2; / r</p><p class="text-xs text-slate-500">Masa (m), velocidad lineal (v), radio de giro (r).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">MOVIMIENTO CIRCULAR (Fc)</text><circle cx="150" cy="70" r="35" fill="none" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3" /><circle cx="150" cy="70" r="2.5" fill="#475569" /><text x="150" y="82" font-size="6.5" fill="#475569" text-anchor="middle">Centro</text><line x1="150" y1="70" x2="175" y2="45" stroke="#94a3b8" stroke-width="1" /><text x="166" y="62" font-size="6.5" fill="#64748b" font-weight="bold">r = 50m</text><circle cx="175" cy="45" r="5" fill="#3b82f6" /><line x1="175" y1="45" x2="153" y2="23" stroke="#ef4444" stroke-width="2" /><polygon points="156,22 150,20 152,26" fill="#ef4444" /><text x="155" y="16" font-size="7" fill="#b91c1c" font-weight="bold">v = 10 m/s</text><line x1="175" y1="45" x2="155" y2="65" stroke="#10b981" stroke-width="2" /><polygon points="159,65 152,68 156,61" fill="#10b981" /><text x="172" y="58" font-size="7" fill="#047857" font-weight="bold">Fc = 2,000 N</text></svg>',
                    svgDescription: "Un auto recorre una curva circular. Su vector velocidad (rojo) es tangente a la órbita. Su vector fuerza centrípeta (verde) apunta en dirección perpendicular hacia el centro del giro.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un automóvil de $1,000\\text{ kg}$ toma una curva circular plana de $50\\text{ metros}$ de radio a una rapidez constante de $10\\text{ m/s}$. Calcula la fuerza de fricción lateral mínima que deben ejercer los neumáticos para que el auto no derrape.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Identificar la Fuerza Centrípeta):</strong> La fricción estática lateral entre llanta y asfalto es la única fuerza neta que apunta al centro y actúa como la fuerza centrípeta: <br>$$f_s = F_c = \\frac{m \\cdot v^2}{r}$$</li><li><strong>Paso 2 (Reemplazar y calcular):</strong> <br>$$f_s = \\frac{1,000\\text{ kg} \\times (10\\text{ m/s})^2}{50\\text{ m}}$$ <br>$$f_s = \\frac{1,000 \\times 100}{50} = \\frac{100,000}{50} = 2,000\\text{ Newtons}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La fuerza de fricción lateral mínima requerida es de <strong>2,000 Newtons</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Dibujar la fuerza centrífuga:</strong> Incluir la \"fuerza centrífuga\" (hacia afuera) en el DCL del auto. La fuerza centrífuga no es una fuerza real ejercida por ningún agente físico; es una sensación inercial ficticia debido a que tu cuerpo quiere seguir recto por inercia mientras el auto gira.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cuál es la magnitud de la aceleración centrípeta en m/s² de una partícula que viaja a rapidez constante de 6 m/s en un círculo de radio 4 metros? (Ingresa el número decimal con punto):",
                            correctAnswer: "9.0",
                            hint: "Aplica ac = v² / r. Reemplaza v = 6 y r = 4.",
                            feedbackCorrect: "¡Excelente! ac = 6² / 4 = 36 / 4 = 9.0 m/s².",
                            feedbackIncorrect: "Incorrecto. ac = v²/r = 36 / 4 = 9.0 m/s².",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si reduces a la mitad el radio de una trayectoria circular pero mantienes la velocidad lineal del objeto constante, ¿qué le ocurre a su aceleración centrípeta?",
                            options: [
                                "Se reduce a la mitad.",
                                "Se duplica.",
                                "Se mantiene constante.",
                                "Se reduce a la cuarta parte."
                            ],
                            correctAnswer: 1,
                            hint: "La aceleración centrípeta es inversamente proporcional al radio de la curva (ac = v²/r).",
                            feedbackCorrect: "¡Excelente! Al ser inversamente proporcional al radio, al reducir el radio a la mitad, la aceleración centrípeta se duplica.",
                            feedbackIncorrect: "Incorrecto. Al dividir el radio por 2, la aceleración centrípeta se duplica.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Si duplicas la velocidad de un carro en una curva circular de radio fijo, ¿cuántas veces aumenta la fuerza centrípeta requerida para no derrapar?",
                            options: [
                                "Aumenta 2 veces (se duplica).",
                                "Aumenta 4 veces (se cuadruplica).",
                                "Aumenta 8 veces.",
                                "Se mantiene idéntica."
                            ],
                            correctAnswer: 1,
                            hint: "La fuerza centrípeta es proporcional al cuadrado de la velocidad (Fc = m * v² / r).",
                            feedbackCorrect: "¡Perfecto! Al depender del cuadrado de la velocidad, duplicar la velocidad implica (2)² = 4 veces más fuerza lateral requerida.",
                            feedbackIncorrect: "Incorrecto. Depende del cuadrado de la velocidad, por lo que aumenta 4 veces.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Qué fuerza física real actúa como fuerza centrípeta que desvía y mantiene a la Luna en su órbita circular alrededor de la Tierra?",
                            options: [
                                "La tensión de un cable espacial invisible.",
                                "La fuerza de atracción gravitatoria ejercida por la Tierra.",
                                "La fricción estática del vacío lunar.",
                                "La fuerza de empuje magnético polar."
                            ],
                            correctAnswer: 1,
                            hint: "Es una fuerza de campo a distancia que atrae de forma mutua a las masas de los astros.",
                            feedbackCorrect: "¡Excelente! La gravedad terrestre actúa como la fuerza centrípeta neta encargada de mantener a la Luna orbitando.",
                            feedbackIncorrect: "Incorrecto. Es la fuerza de atracción gravitatoria terrestre.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Un niño hace girar una piedra de 0.5 kg atada a un cordón de 1.5 metros de longitud con una rapidez constante de 3 m/s. Calcula la tensión del cordón en Newtons. (Ingresa solo el número entero):",
                            correctAnswer: "3",
                            hint: "La tensión es la fuerza centrípeta: T = m * v² / r. Reemplaza m = 0.5, v = 3 y r = 1.5.",
                            feedbackCorrect: "¡Excelente! T = 0.5 * 3² / 1.5 = 0.5 * 9 / 1.5 = 4.5 / 1.5 = 3 Newtons.",
                            feedbackIncorrect: "Incorrecto. T = m*v²/r = 0.5 * 9 / 1.5 = 3 Newtons.",
                            difficulty: "avanzado",
                            type: "short"
                        }
                    ],
                    summaryHtml: "El MCU requiere una aceleración centrípeta hacia el centro ($a_c = v^2/r$) provista por una fuerza centrípeta neta ($F_c = mv^2/r$).",
                    videoPlaceholderText: "Video de Física: Fuerza centrípeta explicada con cubetas de agua giratorias."
                }
            ]
        }
    ]
};

function run() {
    console.log("Leyendo academic_content.js...");
    let content = fs.readFileSync(ACADEMIC_FILE, "utf8");

    const startNewton = content.indexOf('    "leyes-newton": `');
    const endNewton = content.indexOf('`,\n\n    "trabajo-energia-potencia":');

    if (startNewton === -1 || endNewton === -1) {
        console.error("No se pudo encontrar el bloque leyes-newton original.");
        process.exit(1);
    }

    console.log("Encontradas posiciones en disco para inyección quirúrgica de Leyes de Newton.");

    const leyesNewtonJS = '    "leyes-newton": ' + JSON.stringify(leyesNewtonData, null, 4);

    let newContent = content.slice(0, startNewton) + 
                     leyesNewtonJS + 
                     content.slice(endNewton + 1);

    console.log("Escribiendo cambios en academic_content.js...");
    fs.writeFileSync(ACADEMIC_FILE, newContent, "utf8");
    console.log("¡Curso de Leyes de Newton inyectado con éxito!");
}

try {
    run();
} catch (e) {
    console.error("Error crítico durante la inyección:", e);
    process.exit(1);
}
