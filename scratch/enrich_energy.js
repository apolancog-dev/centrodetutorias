const fs = require("fs");
const path = require("path");

const ACADEMIC_FILE = path.join(__dirname, "..", "academic_content.js");

const trabajoEnergiaPotenciaData = {
    isRichCourse: true,
    title: "Trabajo, Energía y Potencia",
    units: [
        {
            title: "Unidad 1: Trabajo Mecánico",
            lessons: [
                {
                    id: "trabajo-mecanico-fuerza-constante",
                    title: "Lección 1.1: Trabajo Mecánico de una Fuerza Constante",
                    introduction: "Calcula el trabajo mecánico realizado por fuerzas constantes sobre un objeto en desplazamiento aplicando el factor de inclinación angular.",
                    explanationHtml: '<p>En física clásica, se realiza <strong>trabajo mecánico ($W$)</strong> sobre un cuerpo únicamente cuando una fuerza externa aplicada desplaza a dicho cuerpo a lo largo de una distancia. El trabajo mide la cantidad de energía transferida al cuerpo por medio de dicha fuerza. Su unidad de medida en el Sistema Internacional (SI) es el <strong>Julio ($J$)</strong>, donde $1\\text{ J} = 1\\text{ N}\\cdot\\text{m}$.</p><p class="mt-2 text-slate-700">La ecuación general fundamental es:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$W = F \\cdot d \\cdot \\cos(\\theta)$$</p><p class="mt-2 text-slate-700">Donde:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>$F$:</strong> Magnitud de la fuerza constante aplicada ($N$).</li><li><strong>$d$:</strong> Distancia total del desplazamiento rectilíneo ($m$).</li><li><strong>$\\theta$:</strong> Ángulo geométrico formado entre el vector de fuerza y el vector de desplazamiento.</li></ul><p class="mt-2 text-slate-700">Dependiendo de la dirección de la fuerza, el signo del trabajo varía:</p><ul class="list-disc pl-5 space-y-1.5 my-2"><li><strong>Trabajo Positivo ($W > 0$):</strong> La fuerza ayuda al movimiento ($0^{\\circ} \\le \\theta < 90^{\\circ}$).</li><li><strong>Trabajo Nulo ($W = 0$):</strong> La fuerza es **perpendicular** al movimiento ($\\theta = 90^{\\circ}$).</li><li><strong>Trabajo Negativo ($W < 0$):</strong> La fuerza se opone activamente al movimiento ($90^{\\circ} < \\theta \\le 180^{\\circ}$).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Trabajo de Fuerza Constante</p><p class="text-xs font-mono font-bold text-primary">W = F &bull; d &bull; cos(&theta;)</p><p class="text-xs text-slate-500">Nota: cos(90&deg;) = 0 (fuerzas perpendiculares al movimiento no realizan trabajo).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">TRABAJO: W = F &bull; d &bull; cos(&theta;)</text><line x1="30" y1="90" x2="270" y2="90" stroke="#94a3b8" stroke-width="1.5" /><rect x="50" y="55" width="60" height="35" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="4" /><line x1="110" y1="72" x2="160" y2="47" stroke="#ef4444" stroke-width="2" /><polygon points="156,44 163,45 159,51" fill="#ef4444" /><text x="150" y="38" font-size="8" fill="#b91c1c" font-weight="bold">Fuerza F</text><line x1="110" y1="72" x2="165" y2="72" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><path d="M 130 72 A 20 20 0 0 0 126 64" fill="none" stroke="#475569" stroke-width="1" /><text x="133" y="69" font-size="8" fill="#475569">&theta; = 60&deg;</text><line x1="80" y1="102" x2="220" y2="102" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" /><polygon points="218,98 226,102 218,106" fill="#10b981" /><text x="150" y="112" font-size="8.5" fill="#047857" font-weight="bold" text-anchor="middle">Desplazamiento d = 15m</text></svg>',
                    svgDescription: "Un bloque jalado 15 metros por una fuerza F a un ángulo de θ = 60° con respecto al suelo horizontal (dirección de desplazamiento d). El trabajo efectivo transferido al bloque es F·d·cos(60°).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Una persona arrastra una maleta en una estación de autobuses de Guatemala una distancia de $15\\text{ metros}$ aplicando una fuerza constante de $50\\text{ Newtons}$ a través de una correa que forma un ángulo de $60^{\\circ}$ con el suelo horizontal. Calcula el trabajo realizado sobre la maleta (sabiendo que $\\cos(60^{\\circ}) = 0.5$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Escribir Fórmula):</strong> <br>$$W = F \\cdot d \\cdot \\cos(\\theta)$$</li><li><strong>Paso 2 (Reemplazar valores y operar):</strong> <br>$$W = 50\\text{ N} \\times 15\\text{ m} \\times \\cos(60^{\\circ})$$ <br>$$W = 750 \\times 0.50 = 375\\text{ Julios}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El trabajo mecánico útil realizado sobre la maleta fue de <strong>375 Julios</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Multiplicar directo omitiendo el ángulo:</strong> Calcular $W = 50 \\times 15 = 750\\text{ J}$, ignorando la correa inclinada. Solo si la fuerza es perfectamente paralela a la trayectoria ($\theta = 0^{\circ}$, $\cos(0^{\circ}) = 1$) podemos omitir el coseno.</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué trabajo mecánico en Julios realiza una fuerza horizontal constante de 20 N que empuja un bloque a lo largo de 5 metros en la misma dirección y sentido del movimiento? (Ingresa solo el número entero):",
                            correctAnswer: "100",
                            hint: "Al viajar en la misma dirección y sentido, el ángulo θ es 0° y cos(0°) = 1. Aplica W = F * d.",
                            feedbackCorrect: "¡Excelente! W = 20 N * 5 m * cos(0°) = 100 Julios.",
                            feedbackIncorrect: "Incorrecto. W = F * d = 20 * 5 = 100 Julios.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Cargas una cubeta con agua de 10 kg en la mano y caminas horizontalmente a velocidad constante una distancia de 20 metros. ¿Cuánto trabajo mecánico en Julios realiza la fuerza vertical de tus brazos sobre la cubeta? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "Compara la dirección de la fuerza vertical de tus brazos de soporte con el desplazamiento estrictamente horizontal.",
                            feedbackCorrect: "¡Excelente! La fuerza vertical de tus brazos y el desplazamiento horizontal forman un ángulo de 90°. Al ser cos(90°) = 0, el trabajo es nulo.",
                            feedbackIncorrect: "Incorrecto. Las fuerzas perpendiculares al movimiento no realizan trabajo mecánico, por lo que el trabajo es 0.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Una fuerza de fricción constante de 15 N se opone al movimiento de un trineo que avanza en línea recta una distancia de 6 metros. ¿Cuál es el trabajo realizado en Julios por la fuerza de fricción? (Ingresa el número entero, incluyendo signo si aplica):",
                            correctAnswer: "-90",
                            hint: "La fricción se opone al movimiento, lo que significa un ángulo de 180° con el desplazamiento y cos(180°) = -1.",
                            feedbackCorrect: "¡Excelente! W = 15 N * 6 m * cos(180°) = -90 Julios. Es trabajo negativo.",
                            feedbackIncorrect: "Incorrecto. Al oponerse al movimiento, cos(180°) = -1, dando un trabajo de -90 Julios.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula el trabajo mecánico en Julios necesario para elevar verticalmente y con velocidad constante un saco de cemento de 50 kg una altura de 2 metros en una construcción. (g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "1000",
                            hint: "La fuerza vertical requerida es igual al peso del saco w = m * g = 50 * 10 = 500 N. El desplazamiento es hacia arriba a favor de la fuerza (θ = 0°).",
                            feedbackCorrect: "¡Perfecto! Fuerza = 500 N. W = 500 N * 2 m * cos(0°) = 1,000 Julios.",
                            feedbackIncorrect: "Incorrecto. Peso = 500 N. Trabajo = 500 * 2 = 1,000 Julios.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es la interpretación física del concepto de 'trabajo neto total' sobre un cuerpo?",
                            options: [
                                "Es el trabajo realizado únicamente por la fuerza de fricción.",
                                "Es la suma algebraica de los trabajos individuales realizados por cada una de las fuerzas externas que actúan sobre el cuerpo.",
                                "Es la energía potencial almacenada en el campo gravitacional.",
                                "Es el producto de la velocidad del cuerpo por el tiempo."
                            ],
                            correctAnswer: 1,
                            hint: "Mide la transferencia neta acumulada sobre la masa a partir de todas las interacciones físicas.",
                            feedbackCorrect: "¡Excelente! El trabajo neto total es igual a la suma algebraica de todos los trabajos individuales.",
                            feedbackIncorrect: "Incorrecto. El trabajo neto es la suma de los trabajos individuales de todas las fuerzas actuantes.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El trabajo mide la energía transferida por una fuerza a lo largo de una distancia ($W = Fd\\cos(\\theta)$). Fuerzas a 90° del movimiento hacen trabajo nulo.",
                    videoPlaceholderText: "Video de Física: Concepto de trabajo mecánico y el significado de su signo."
                },
                {
                    id: "trabajo-multiples-fuerzas",
                    title: "Lección 1.2: Trabajo de Múltiples Fuerzas Concurrentes",
                    introduction: "Aprende a evaluar el trabajo mecánico neto sobre un cuerpo calculando y sumando algebraicamente el trabajo de cada una de las fuerzas aplicadas.",
                    explanationHtml: '<p>Cuando un cuerpo es sometido a la acción simultánea de varias fuerzas (como Peso, Normal, Fuerza de Empuje y Fricción), existen dos métodos equivalentes para calcular el <strong>trabajo mecánico neto o resultante ($W_{\\text{neto}}$)</strong> realizado sobre él:</p><p class="mt-2 font-bold text-slate-800">Método A: Sumatoria de Trabajos Individuales</p><p class="text-slate-700">Calculamos de forma independiente el trabajo mecánico realizado por cada fuerza y los sumamos de forma estrictamente algebraica (respetando sus signos):</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$W_{\\text{neto}} = W_1 + W_2 + W_3 + \\dots + W_n$$</p><p class="mt-2 font-bold text-slate-800">Método B: Trabajo de la Fuerza Resultante</p><p class="text-slate-700">Hallamos en primer lugar la fuerza resultante neta en la dirección del movimiento ($\\sum F_x$) y la multiplicamos por la distancia del desplazamiento:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$W_{\\text{neto}} = \\left( \\sum F_x \\right) \\cdot d$$</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Trabajo Neto Resultante</p><p class="text-xs font-mono font-bold text-primary">W_neto = &sum;W_individuales = F_neta &bull; d</p><p class="text-xs text-slate-500">Recuerda: El trabajo de la Normal y el Peso en superficies horizontales es cero.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">TRABAJO NETO (W_neto)</text><line x1="30" y1="90" x2="270" y2="90" stroke="#94a3b8" stroke-width="1.5" /><rect x="110" y="55" width="80" height="35" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="4" /><line x1="150" y1="55" x2="150" y2="30" stroke="#10b981" stroke-width="1.5" /><polygon points="147,32 150,27 153,32" fill="#10b981" /><text x="154" y="36" font-size="6.5" fill="#047857" font-weight="bold">N (W=0)</text><line x1="150" y1="72" x2="150" y2="105" stroke="#475569" stroke-width="1.5" /><polygon points="147,103 150,108 153,103" fill="#475569" /><text x="154" y="104" font-size="6.5" fill="#475569" font-weight="bold">w (W=0)</text><line x1="190" y1="72" x2="235" y2="72" stroke="#3b82f6" stroke-width="2" /><polygon points="233,69 239,72 233,75" fill="#3b82f6" /><text x="210" y="65" font-size="7" fill="#1e40af" font-weight="bold">F_emp = 50N</text><line x1="110" y1="90" x2="65" y2="90" stroke="#ef4444" stroke-width="2" /><polygon points="67,93 61,90 67,87" fill="#ef4444" /><text x="80" y="83" font-size="7" fill="#b91c1c" font-weight="bold" text-anchor="middle">fk = 20N</text></svg>',
                    svgDescription: "Un bloque de madera arrastrado horizontalmente. El Peso y la Normal ejercen trabajos nulos (90° del movimiento). La fuerza de empuje realiza trabajo positivo y la fricción trabajo negativo. El trabajo neto es el balance de ambos.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un bloque de $10\\text{ kg}$ es arrastrado $5\\text{ metros}$ sobre un piso horizontal rugoso por una fuerza horizontal constante de empuje de $50\\text{ N}$. Si la fuerza de fricción cinética es constante e igual a $20\\text{ N}$, calcula el trabajo neto total realizado sobre el bloque (usa $g = 10\\text{ m/s}^2$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Trabajo del Empuje):</strong> A favor del movimiento ($\\theta = 0^{\\circ}$): <br>$$W_{\\text{empuje}} = F \\cdot d \\cdot \\cos(0^{\\circ}) = 50\\text{ N} \\times 5\\text{ m} \\times 1 = 250\\text{ Julios}$$</li><li><strong>Paso 2 (Trabajo de la Fricción):</strong> En contra del movimiento ($\\theta = 180^{\\circ}$): <br>$$W_{\\text{fricción}} = f_k \\cdot d \\cdot \\cos(180^{\\circ}) = 20\\text{ N} \\times 5\\text{ m} \\times (-1) = -100\\text{ Julios}$$</li><li><strong>Paso 3 (Trabajo de Normal y Peso):</strong> Al actuar verticalmente y ser el movimiento puramente horizontal, formulan $90^{\\circ}$: <br>$$W_{\\text{peso}} = 0\\text{ J} \\quad \\text{y} \\quad W_{\\text{normal}} = 0\\text{ J}$$</li><li><strong>Paso 4 (Sumar):</strong> <br>$$W_{\\text{neto}} = W_{\\text{empuje}} + W_{\\text{fricción}} + W_{\\text{peso}} + W_{\\text{normal}}$$ <br>$$W_{\\text{neto}} = 250 - 100 + 0 + 0 = 150\\text{ Julios}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El trabajo mecánico neto total realizado sobre el bloque es de <strong>150 Julios</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar el signo negativo de la fricción:</strong> Sumar de forma directa el trabajo de la fricción como positivo ($250 + 100 = 350\\text{ J}$), lo cual daría un resultado erróneo y violaría las leyes físicas. La fricción roba energía, por lo que su trabajo resta.</li></ul>',
                    exercises: [
                        {
                            question: "Un bloque es arrastrado 10 m horizontalmente. Si la fuerza de empuje realiza un trabajo de 400 J y la fricción realiza -150 J, ¿cuánto vale el trabajo neto en Julios? (Ingresa solo el número entero):",
                            correctAnswer: "250",
                            hint: "Suma algebraicamente los trabajos individuales: W_neto = W_empuje + W_friccion.",
                            feedbackCorrect: "¡Excelente! W_neto = 400 J + (-150 J) = 250 Julios.",
                            feedbackIncorrect: "Incorrecto. W_neto = 400 - 150 = 250 Julios.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué trabajo mecánico en Julios realiza la fuerza normal que ejerce la calle sobre las llantas de un auto que avanza sobre una avenida recta plana? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "La normal actúa perpendicular a la superficie, es decir, vertical hacia arriba, mientras el vehículo se desplaza en el eje horizontal.",
                            feedbackCorrect: "¡Perfecto! Al ser la normal perpendicular al desplazamiento (ángulo de 90°), su trabajo es nulo (0 J).",
                            feedbackIncorrect: "Incorrecto. Por ser perpendicular a la trayectoria, el trabajo de la normal es exactamente 0.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si un bloque de 5 kg desciende por una rampa inclinada de 3 metros de longitud libre de fricción, ¿cuál es el trabajo neto en Julios realizado por la gravedad sobre el bloque? (g = 10 m/s², ángulo de la rampa = 30° de modo que sen(30°) = 0.5. Ingresa solo el número entero):",
                            correctAnswer: "75",
                            hint: "La fuerza activa cuesta abajo en el DCL es la componente paralela del peso: F = m * g * sen(30°) = 5 * 10 * 0.5 = 25 N. Multiplica esta fuerza por la distancia de 3 metros.",
                            feedbackCorrect: "¡Perfecto! Fuerza paralela = 25 N. Trabajo = 25 N * 3 m = 75 Julios.",
                            feedbackIncorrect: "Incorrecto. Componente paralela del peso = 25 N. Trabajo = 25 * 3 = 75 Julios.",
                            difficulty: "avanzado",
                            type: "short"
                        },
                        {
                            question: "Si el trabajo mecánico neto realizado sobre un cuerpo es estrictamente positivo (W_neto > 0), ¿qué le ocurre a su velocidad?",
                            options: [
                                "La velocidad disminuye (el objeto desacelera).",
                                "La velocidad aumenta (el objeto acelera).",
                                "La velocidad se mantiene constante en MRU.",
                                "La velocidad se reduce instantáneamente a cero."
                            ],
                            correctAnswer: 1,
                            hint: "Un trabajo positivo implica una transferencia de energía hacia el cuerpo, aumentando su energía de movimiento.",
                            feedbackCorrect: "¡Excelente! Un trabajo neto positivo aumenta la energía cinética de la masa, provocando un aumento en su velocidad.",
                            feedbackIncorrect: "Incorrecto. Un trabajo neto positivo acelera el objeto, aumentando su velocidad.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si el trabajo neto total sobre un objeto en movimiento es exactamente cero, ¿cuál es su estado de movimiento?",
                            options: [
                                "El objeto se encuentra en reposo absoluto o en movimiento a velocidad constante (MRU).",
                                "El objeto describe un movimiento acelerado de despegue.",
                                "El objeto cae libremente en el vacío.",
                                "El objeto orbita de forma helicoidal acelerada."
                            ],
                            correctAnswer: 0,
                            hint: "Trabajo neto nulo implica aceleración nula por el Teorema del Trabajo y la Energía. Revisa los casos de aceleración cero.",
                            feedbackCorrect: "¡Excelente! Al no haber transferencia neta de energía, la velocidad se mantiene constante o nula.",
                            feedbackIncorrect: "Incorrecto. Trabajo nulo implica aceleración nula, caracterizando al reposo o al MRU.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El trabajo neto es el balance total de transferencia energética ($W_{neto} = \\sum W = F_{neta} \\cdot d$). Determina de forma directa si un objeto acelera o frena.",
                    videoPlaceholderText: "Video de Física: Resolución de problemas de trabajo de múltiples fuerzas concurrentes."
                },
                {
                    id: "trabajo-fuerzas-variables-elastica",
                    title: "Lección 1.3: Trabajo de Fuerzas Variables (Fuerza Elástica)",
                    introduction: "Aprende a calcular el trabajo mecánico desarrollado por fuerzas variables como la elástica de un resorte usando áreas e integrales.",
                    explanationHtml: '<p>Si la fuerza aplicada sobre un cuerpo varía a lo largo de la distancia, no es posible aplicar la fórmula directa del producto lineal ($W = F \\cdot d$). Matemáticamente, el trabajo mecánico equivale de forma exacta al <strong>área bajo la curva</strong> en un gráfico de Fuerza versus Posición ($F$ vs $x$).</p><p class="mt-2 text-slate-700">El ejemplo por excelencia de fuerza variable es la **fuerza elástica de un resorte** que obedece la **Ley de Hooke** ($F_e = k \\cdot x$), donde $k$ es la constante elástica del resorte en $N/m$ y $x$ es la deformación con respecto al equilibrio. El trabajo requerido para estirar o comprimir un resorte una distancia $x$ se calcula como el área del triángulo de la gráfica $F$-$x$:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$W_e = \\frac{1}{2} k \\cdot x^2$$</p><p class="mt-2 text-slate-705">Esta cantidad representa también la energía elástica que queda almacenada en el resorte deformado.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Trabajo de Fuerza Elástica (Hooke)</p><p class="text-xs font-mono font-bold text-primary">W_e = &frac12; &bull; k &bull; x&sup2;</p><p class="text-xs text-slate-500">Importante: La distancia de estiramiento x debe ingresarse estrictamente en metros (m).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">TRABAJO ELÁSTICO: ½kx²</text><line x1="30" y1="95" x2="270" y2="95" stroke="#94a3b8" stroke-width="1.5" /><rect x="30" y="40" width="10" height="55" fill="#cbd5e1" stroke="#94a3b8" /><path d="M 40 68 L 50 68 L 55 58 L 65 78 L 75 58 L 85 78 L 95 58 L 105 78 L 115 58 L 125 68 L 135 68" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><rect x="135" y="48" width="40" height="40" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="3" /><line x1="175" y1="48" x2="215" y2="48" stroke="#cbd5e1" stroke-dasharray="2,2" /><line x1="215" y1="48" x2="215" y2="90" stroke="#cbd5e1" stroke-dasharray="2,2" /><line x1="215" y1="68" x2="175" y2="68" stroke="#f59e0b" stroke-width="1.5" /><polygon points="178,65 172,68 178,71" fill="#f59e0b" /><text x="195" y="62" font-size="8" fill="#b45309" font-weight="bold" text-anchor="middle">x = 10 cm</text></svg>',
                    svgDescription: "Un resorte ideal con constante elástica k acoplado a un bloque es comprimido una distancia x = 10 cm (0.10 metros) desde su posición de equilibrio. El trabajo acumulado equivale a ½kx².",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un dinamómetro escolar posee un resorte con una constante elástica $k = 200\\text{ N/m}$. Calcula el trabajo mecánico necesario para estirar el resorte una distancia de $10\\text{ cm}$ desde su longitud de equilibrio.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Homogeneizar unidades):</strong> La distancia del estiramiento está dada en centímetros. Debemos convertirla obligatoriamente a metros: <br>$$x = 10\\text{ cm} = 0.10\\text{ metros}$$</li><li><strong>Paso 2 (Escribir Fórmula):</strong> <br>$$W_e = \\frac{1}{2} k \\cdot x^2$$</li><li><strong>Paso 3 (Reemplazar y calcular):</strong> <br>$$W_e = 0.5 \\times 200\\text{ N/m} \\times (0.10\\text{ m})^2$$ <br>$$W_e = 100 \\times 0.01 = 1\\text{ Julio}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El trabajo mecánico necesario para estirar el resorte es de exactamente <strong>1 Julio</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Introducir centímetros directamente en la fórmula:</strong> Multiplicar $0.5 \\times 200 \\times 10^2 = 10,000\\text{ J}$, lo cual daría un valor de energía absurdo y gigante. Convierta siempre a metros en el SI.</li><li><strong>Olvidar el exponente cuadrático:</strong> Escribir $\\frac{1}{2}kx$ en lugar de $\\frac{1}{2}kx^2$.</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué magnitud de fuerza en Newtons ejerce un resorte de constante k = 500 N/m al ser comprimido una distancia de 0.2 metros? (Ingresa solo el número entero):",
                            correctAnswer: "100",
                            hint: "Aplica de forma directa la Ley de Hooke para la fuerza: Fe = k * x.",
                            feedbackCorrect: "¡Excelente! Fe = 500 N/m * 0.2 m = 100 Newtons.",
                            feedbackIncorrect: "Incorrecto. Fe = k * x = 500 * 0.2 = 100 Newtons.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula el trabajo mecánico en Julios realizado para comprimir una distancia de 0.2 metros al resorte del ejercicio anterior (k = 500 N/m). (Ingresa solo el número entero):",
                            correctAnswer: "10",
                            hint: "Aplica la fórmula del trabajo elástico: We = 0.5 * k * x². Reemplaza k = 500 y x = 0.2.",
                            feedbackCorrect: "¡Perfecto! We = 0.5 * 500 * (0.2)² = 250 * 0.04 = 10 Julios.",
                            feedbackIncorrect: "Incorrecto. We = 0.5 * 500 * 0.04 = 10 Julios.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cómo se calcula gráficamente el trabajo mecánico si se te presenta un gráfico con la Fuerza en el eje Y y la Posición en el eje X?",
                            options: [
                                "Calculando la pendiente de la recta tangente.",
                                "Calculando el área de la figura geométrica bajo la línea de la curva de la gráfica.",
                                "Multiplicando el valor máximo de fuerza por el tiempo medio.",
                                "Dividiendo el eje Y entre el eje X."
                            ],
                            correctAnswer: 1,
                            hint: "La operación de multiplicar fuerza por cambio de posición equivale en geometría analítica a...",
                            feedbackCorrect: "¡Excelente! El área bajo la curva en un gráfico F-x representa el trabajo mecánico total acumulado.",
                            feedbackIncorrect: "Incorrecto. El trabajo equivale analíticamente al área bajo la curva de la gráfica F-x.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si estiras un resorte el doble de la distancia original, ¿cuántas veces aumenta el trabajo elástico requerido para realizarlo?",
                            options: [
                                "Aumenta 2 veces (se duplica).",
                                "Aumenta 4 veces (se cuadruplica).",
                                "Se mantiene constante.",
                                "Se reduce a la mitad."
                            ],
                            correctAnswer: 1,
                            hint: "El trabajo elástico depende del cuadrado de la distancia de estiramiento (x²).",
                            feedbackCorrect: "¡Perfecto! Al depender del cuadrado, estirar el doble ($2$) implica que el trabajo aumenta ($2^2 = 4$) veces.",
                            feedbackIncorrect: "Incorrecto. Depende del cuadrado de la deformación, por ende se cuadruplica (4 veces).",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el trabajo en Julios realizado por una fuerza constante de 10 N que actúa a lo largo de 5 metros, resuelto geométricamente como el área de un rectángulo en un gráfico de F vs x. (Ingresa solo el número entero):",
                            correctAnswer: "50",
                            hint: "El área de un rectángulo es Base * Altura. La base es el desplazamiento d = 5 m y la altura es F = 10 N.",
                            feedbackCorrect: "¡Perfecto! Área = 5 m * 10 N = 50 Julios.",
                            feedbackIncorrect: "Incorrecto. Área del rectángulo = 5 * 10 = 50 Julios.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "El trabajo de fuerzas variables es el área bajo la curva F-x. Para resortes que obedecen la Ley de Hooke, el trabajo acumulado es $W_e = \\frac{1}{2} k x^2$.",
                    videoPlaceholderText: "Video de Física: El concepto de fuerza elástica y el trabajo de resortes analizado gráficamente."
                }
            ]
        },
        {
            title: "Unidad 2: Energía Cinética y Potencial",
            lessons: [
                {
                    id: "energia-cinetica-teorema-trabajo",
                    title: "Lección 2.1: Energía Cinética y el Teorema del Trabajo y la Energía",
                    introduction: "Calcula la energía cinética de un cuerpo en movimiento y aplica el potente Teorema del Trabajo y la Energía para resolver velocidades.",
                    explanationHtml: '<p>La <strong>energía</strong> es la capacidad que posee un cuerpo o sistema para realizar trabajo mecánico. Se mide en <strong>Julios ($J$)</strong>.</p><p class="mt-2 text-slate-700">La <strong>energía cinética ($E_c$)</strong> es la energía que posee un cuerpo debido exclusivamente a su estado de movimiento o velocidad. Se calcula con:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$E_c = \\frac{1}{2} m \\cdot v^2$$</p><p class="mt-2 text-slate-700">El **Teorema del Trabajo y la Energía** establece un puente fundamental entre la dinámica y la cinemática: el trabajo neto total realizado por fuerzas externas sobre un cuerpo es igual al cambio o variación en su energía cinética:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$W_{\\text{neto}} = \\Delta E_c = E_{c,\\text{final}} - E_{c,\\text{inicial}}$$</p><p class="mt-2 text-slate-707">Si partimos del reposo, $E_{c,\\text{inicial}} = 0$, lo que simplifica la ecuación a: $W_{\\text{neto}} = \\frac{1}{2} m v_f^2$.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Teorema del Trabajo y la Energía</p><p class="text-xs font-mono font-bold text-primary">Ec = &frac12; &bull; m &bull; v&sup2; &nbsp;|&nbsp; W_neto = Ec_final - Ec_inicial</p><p class="text-xs text-slate-500">Masa (m) en kg, velocidad (v) en m/s. Ec se mide en Julios (J).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">TEOREMA DEL TRABAJO Y EC</text><line x1="30" y1="90" x2="270" y2="90" stroke="#94a3b8" stroke-width="1.5" /><rect x="40" y="55" width="40" height="25" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="3" /><text x="60" y="70" font-size="7" fill="#1e40af" font-weight="bold" text-anchor="middle">vi = 0</text><text x="60" y="103" font-size="7" fill="#475569" text-anchor="middle">Ec_i = 0 J</text><line x1="90" y1="67" x2="190" y2="67" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3" /><polygon points="187,64 193,67 187,70" fill="#10b981" /><text x="140" y="60" font-size="8" fill="#047857" font-weight="bold" text-anchor="middle">W_neto = 16 J</text><rect x="200" y="55" width="40" height="25" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" rx="3" /><text x="220" y="70" font-size="7" fill="#b91c1c" font-weight="bold" text-anchor="middle">vf = 4 m/s</text><text x="220" y="103" font-size="7" fill="#475569" text-anchor="middle">Ec_f = 16 J</text></svg>',
                    svgDescription: "Un carro de juguete de 2 kg parte del reposo (Ec = 0 J). Una fuerza neta realiza un trabajo neto de 16 J sobre él. Toda esta energía se transforma en energía cinética final, haciendo que el carro adquiera una velocidad de 4 m/s.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un carro de juguete de $2\\text{ kg}$ parte del reposo y es empujado por una fuerza neta constante que realiza un trabajo neto de $16\\text{ Julios}$. Calcula la velocidad final del carro.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Plantear Teorema):</strong> <br>$$W_{\\text{neto}} = E_{c,f} - E_{c,i}$$ <br>Como parte del reposo, $E_{c,i} = 0$: <br>$$W_{\\text{neto}} = \\frac{1}{2} m v_f^2$$</li><li><strong>Paso 2 (Sustituir datos):</strong> <br>$$16 = \\frac{1}{2} (2\\text{ kg}) \\cdot v_f^2$$ <br>$$16 = 1 \\cdot v_f^2 \\Rightarrow v_f^2 = 16$$</li><li><strong>Paso 3 (Despejar velocidad con raíz cuadrada):</strong> <br>$$v_f = \\sqrt{16} = 4\\text{ m/s}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La velocidad final del carro de juguete es de <strong>4 m/s</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar extraer la raíz cuadrada:</strong> Despejar $v_f^2 = 16$ y responder $16\\text{ m/s}$ de velocidad, lo cual es incorrecto. No olvide despejar el exponente cuadrático aplicando raíz.</li></ul>',
                    exercises: [
                        {
                            question: "Calcula la energía cinética en Julios de un atleta de 70 kg que corre a una velocidad de 6 m/s en Antigua. (Ingresa solo el número entero):",
                            correctAnswer: "1260",
                            hint: "Aplica Ec = 0.5 * m * v². Reemplaza m = 70 y v = 6. Recuerda elevar 6 al cuadrado.",
                            feedbackCorrect: "¡Excelente! Ec = 0.5 * 70 kg * (6 m/s)² = 35 * 36 = 1,260 Julios.",
                            feedbackIncorrect: "Incorrecto. Ec = 0.5 * m * v² = 0.5 * 70 * 36 = 1,260 Julios.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si duplicas la velocidad de un automóvil en la carretera, ¿cuántas veces aumenta su energía cinética?",
                            options: [
                                "Se duplica (aumenta 2 veces).",
                                "Aumenta 4 veces (se cuadruplica).",
                                "Aumenta 8 veces.",
                                "Se mantiene constante."
                            ],
                            correctAnswer: 1,
                            hint: "La energía cinética depende directamente del cuadrado de la velocidad del móvil (v²).",
                            feedbackCorrect: "¡Perfecto! Al ser proporcional al cuadrado de la velocidad, duplicarla (2) implica que la energía cinética aumenta (2² = 4) veces.",
                            feedbackIncorrect: "Incorrecto. Varía con el cuadrado de la velocidad, por ende aumenta 4 veces.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Un bloque de 4 kg tiene una energía cinética inicial de 50 J. Si una fuerza horizontal constante realiza sobre él un trabajo neto de 30 J, ¿cuál es su energía cinética final en Julios? (Ingresa solo el número entero):",
                            correctAnswer: "80",
                            hint: "Aplica el Teorema del Trabajo y la Energía: W_neto = Ec_final - Ec_inicial. Despeja Ec_final.",
                            feedbackCorrect: "¡Perfecto! Ec_final = Ec_inicial + W_neto = 50 J + 30 J = 80 Julios.",
                            feedbackIncorrect: "Incorrecto. Ec_final = 50 + 30 = 80 Julios.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Con los datos del ejercicio anterior (m = 4 kg, Ec_final = 80 J), calcula la magnitud de su velocidad final en m/s. (Ingresa el número decimal con punto aproximado, ej: 6.32):",
                            correctAnswer: "6.32",
                            hint: "Plantea Ec_final = 0.5 * m * vf² => 80 = 0.5 * 4 * vf². Despeja vf aplicando raíz cuadrada.",
                            feedbackCorrect: "¡Excelente! 80 = 2 * vf² => vf² = 40 => vf = sqrt(40) ≈ 6.32 m/s.",
                            feedbackIncorrect: "Incorrecto. vf = sqrt(80/2) = sqrt(40) ≈ 6.32 m/s.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Qué ocurre con la energía cinética de un automóvil si el conductor aplica a fondo los frenos y se detiene por completo?",
                            options: [
                                "Se duplica por la fuerza de fricción.",
                                "Se reduce exactamente a cero.",
                                "Se transforma en energía potencial elástica.",
                                "Se disipa en el espacio en forma de masa."
                            ],
                            correctAnswer: 1,
                            hint: "La velocidad de un cuerpo en reposo absoluto es cero.",
                            feedbackCorrect: "¡Excelente! Al ser v = 0, la energía cinética (½mv²) se reduce a cero, transformándose en calor en los frenos por fricción.",
                            feedbackIncorrect: "Incorrecto. Al detenerse (velocidad cero), la energía cinética se reduce a cero.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La energía cinética depende de la velocidad al cuadrado ($E_c = \\frac{1}{2} m v^2$). El trabajo neto es el causante de alterar esta energía ($W_{neto} = \\Delta E_c$).",
                    videoPlaceholderText: "Video de Física: Energía cinética y la demostración experimental del Teorema del Trabajo."
                },
                {
                    id: "energia-potencial-gravitatoria",
                    title: "Lección 2.2: Energía Potencial Gravitatoria",
                    introduction: "Aprende a evaluar la energía potencial gravitatoria acumulada en masas elevadas y comprende la relevancia del nivel de referencia.",
                    explanationHtml: '<p>La <strong>energía potencial gravitatoria ($E_p$ o $U_g$)</strong> es la energía que posee un cuerpo debido a su posición elevada con respecto a un campo gravitatorio. Se trata de energía almacenada que tiene el potencial de transformarse en energía cinética al descender.</p><p class="mt-2 text-slate-700">La ecuación fundamental para calcularla es:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$E_p = m \\cdot g \\cdot h$$</p><p class="mt-2 text-slate-700">Donde:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>$m$:</strong> Masa del cuerpo ($kg$).</li><li><strong>$g$:</strong> Aceleración de la gravedad local ($m/s^2$).</li><li><strong>$h$:</strong> Altura medida de forma vertical ($m$).</li></ul><p class="mt-2 text-slate-700"><strong>El Nivel de Referencia ($h = 0$):</strong> La energía potencial es relativa. Para medir la altura $h$, es obligatorio elegir primero de forma arbitraria un nivel de referencia en el espacio. Un mismo objeto puede tener $E_p = 300\\text{ J}$ con respecto al suelo del primer piso, pero tener $E_p = 0\\text{ J}$ si tomamos como referencia la mesa sobre la que está apoyado.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Energía Potencial Gravitatoria</p><p class="text-xs font-mono font-bold text-primary">E_p = m &bull; g &bull; h</p><p class="text-xs text-slate-500">Recuerda: La altura h debe ser la distancia VERTICAL, sin importar la trayectoria.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ENERGÍA POTENCIAL: mgh</text><line x1="30" y1="105" x2="270" y2="105" stroke="#94a3b8" stroke-width="1.5" /><text x="50" y="115" font-size="7.5" fill="#64748b">Ref: h = 0m (Ep = 0)</text><rect x="180" y="50" width="80" height="6" fill="#cbd5e1" /><line x1="220" y1="50" x2="220" y2="105" stroke="#cbd5e1" stroke-width="2" /><rect x="200" y="56" width="40" height="25" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="3" /><text x="220" y="72" font-size="7" font-weight="bold" fill="#1e40af" text-anchor="middle">m = 5 kg</text><line x1="140" y1="56" x2="140" y2="105" stroke="#f59e0b" stroke-width="1.5" /><polygon points="137,59 140,53 143,59" fill="#f59e0b" /><polygon points="137,102 140,108 143,102" fill="#f59e0b" /><text x="130" y="85" font-size="8.5" fill="#b45309" font-weight="bold" text-anchor="end">h = 6 m</text><text x="220" y="94" font-size="7.5" fill="#10b981" font-weight="bold" text-anchor="middle">Ep = 300 J</text></svg>',
                    svgDescription: "Una caja de 5 kg se encuentra suspendida a h = 6 metros sobre el suelo (nivel de referencia h = 0). La energía potencial gravitatoria acumulada es Ep = mgh = 5 * 10 * 6 = 300 J.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un bloque de piedra de $5\\text{ kg}$ está sobre el borde de un andamio a una altura de $6\\text{ metros}$ sobre el suelo en una obra constructiva en Tecpán. Calcula su energía potencial gravitatoria con respecto al suelo y con respecto a una mesa situada a $1.5\\text{ metros}$ de altura en el suelo (usa $g = 10\\text{ m/s}^2$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Con respecto al Suelo):</strong> La altura total vertical es $h = 6\\text{ m}$: <br>$$E_{p,\\text{suelo}} = m \\cdot g \\cdot h = 5\\text{ kg} \\times 10\\text{ m/s}^2 \\times 6\\text{ m} = 300\\text{ Julios}$$</li><li><strong>Paso 2 (Con respecto a la Mesa):</strong> Medimos la altura relativa desde la mesa hasta la piedra ($h_{\\text{mesa}} = 6 - 1.5 = 4.5\\text{ m}$): <br>$$E_{p,\\text{mesa}} = m \\cdot g \\cdot h_{\\text{mesa}} = 5\\text{ kg} \\times 10\\text{ m/s}^2 \\times 4.5\\text{ m} = 225\\text{ Julios}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> Su Ep con respecto al suelo es de <strong>300 J</strong> y con respecto a la mesa es de <strong>225 J</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Medir distancias inclinadas en vez de la altura vertical:</strong> Al subir un objeto por una rampa inclinada de $10\\text{ m}$ de longitud y que alcanza una altura vertical final de $3\\text{ m}$, usar $10\\text{ m}$ en el cálculo. La gravedad tira verticalmente, por lo que solo importa la altura vertical $h = 3\\text{ m}$.</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué energía potencial en Julios almacena un saco de maíz de 20 kg elevado a una altura de 4 metros? (g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "800",
                            hint: "Aplica Ep = m * g * h. Reemplaza m = 20, g = 10 y h = 4.",
                            feedbackCorrect: "¡Excelente! Ep = 20 kg * 10 m/s² * 4 m = 800 Julios.",
                            feedbackIncorrect: "Incorrecto. Ep = m * g * h = 20 * 10 * 4 = 800 Julios.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si desciendes un bloque de 5 kg desde una altura de 10 metros hasta 6 metros sobre el suelo, ¿cuánta energía potencial en Julios pierde? (g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "200",
                            hint: "Calcula la variación de altura Δh = 10 m - 6 m = 4 m. Luego opera la pérdida de energía potencial como m * g * Δh.",
                            feedbackCorrect: "¡Perfecto! Altura perdida = 4 m. Pérdida Ep = 5 kg * 10 m/s² * 4 m = 200 Julios.",
                            feedbackIncorrect: "Incorrecto. La diferencia de altura es 4m. Energía perdida = 5 * 10 * 4 = 200 Julios.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Puede la energía potencial gravitatoria tomar valores numéricos negativos?",
                            options: [
                                "No, las energías siempre son escalares estrictamente positivos.",
                                "Sí, si el objeto se sitúa por debajo del nivel de referencia elegido (h = 0).",
                                "Solo en el espacio exterior.",
                                "Solo si el peso se anula."
                            ],
                            correctAnswer: 1,
                            hint: "Revisa qué ocurre en la fórmula Ep = mgh si la coordenada h queda por debajo del origen (y < 0).",
                            feedbackCorrect: "¡Excelente! Al ser la altura relativa, si el cuerpo está por debajo del origen h = 0, la energía potencial es negativa.",
                            feedbackIncorrect: "Incorrecto. Sí puede ser negativa si el objeto se ubica por debajo del nivel de referencia.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Calcula la masa en kg de un objeto si almacena exactamente 150 J de energía potencial gravitatoria al ser elevado a una altura vertical de 3 metros. (g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "Despeja la masa de la fórmula de energía potencial: m = Ep / (g * h). Reemplaza Ep = 150, g = 10 y h = 3.",
                            feedbackCorrect: "¡Excelente! m = 150 J / (10 * 3) = 150 / 30 = 5 kg.",
                            feedbackIncorrect: "Incorrecto. Masa m = Ep / (g * h) = 150 / 30 = 5 kg.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un excursionista de 70 kg escala una montaña en Petén ganando una altura vertical de 100 metros. ¿Cuánto trabajo mecánico en Julios realiza la fuerza de gravedad sobre el excursionista mientras sube? (g = 10 m/s². Ingresa el valor entero con signo negativo):",
                            correctAnswer: "-70000",
                            hint: "La gravedad tira hacia abajo y el excursionista se desplaza hacia arriba (ángulo de 180°). El trabajo de la gravedad es negativo y equivale a -m * g * h.",
                            feedbackCorrect: "¡Perfecto! Como se opone a la subida, la gravedad realiza un trabajo negativo de -70,000 Julios (restando energía).",
                            feedbackIncorrect: "Incorrecto. Al ir en sentido contrario, el trabajo de la gravedad es -m * g * h = -70,000 Julios.",
                            difficulty: "avanzado",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La energía potencial gravitatoria se define por la posición elevada ($E_p = mgh$). Su valor es relativo al nivel de referencia ($h=0$) seleccionado.",
                    videoPlaceholderText: "Video de Física: La energía potencial gravitatoria y el diseño de montañas rusas."
                },
                {
                    id: "energia-potencial-elastica",
                    title: "Lección 2.3: Energía Potencial Elástica",
                    introduction: "Calcula la energía potencial almacenada en materiales elásticos deformados y resuelve conversiones dinámicas.",
                    explanationHtml: '<p>La <strong>energía potencial elástica ($E_{pe}$ o $U_e$)</strong> es la energía almacenada en materiales elásticos (como resortes, ligas, ballestas o amortiguadores) cuando son sometidos a una deformación temporal por estiramiento o compresión.</p><p class="mt-2 text-slate-700">La ecuación para calcular la energía almacenada en un resorte ideal es:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$E_{pe} = \\frac{1}{2} k \\cdot x^2$$</p><p class="mt-2 text-slate-700">Donde:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>$k$:</strong> Constante elástica del resorte ($N/m$).</li><li><strong>$x$:</strong> Distancia de deformación (estiramiento o compresión) con respecto a la longitud natural sin carga ($m$).</li></ul><p class="mt-2 text-slate-705">Al igual que la gravitatoria, esta energía queda almacenada en el resorte y al liberarse se convierte de forma veloz en energía cinética de cualquier objeto acoplado a él.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Energía Potencial Elástica</p><p class="text-xs font-mono font-bold text-primary">E_pe = &frac12; &bull; k &bull; x&sup2;</p><p class="text-xs text-slate-500">k representa la rigidez del resorte, x es la deformación en metros.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ENERGÍA ELÁSTICA ALMACENADA</text><line x1="30" y1="95" x2="270" y2="95" stroke="#94a3b8" stroke-width="1.5" /><rect x="30" y="40" width="10" height="55" fill="#cbd5e1" stroke="#94a3b8" /><path d="M 40 68 L 47 68 L 50 58 L 54 78 L 58 58 L 62 78 L 66 58 L 70 78 L 74 58 L 81 68 L 88 68" fill="none" stroke="#475569" stroke-width="2" stroke-linejoin="round" /><rect x="88" y="48" width="40" height="40" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" rx="3" /><text x="108" y="72" font-size="7" font-weight="bold" fill="#b91c1c" text-anchor="middle">Epe = 0.5 J</text><text x="150" y="60" font-size="7" fill="#475569">k = 400 N/m</text><text x="150" y="72" font-size="7" fill="#475569">x = 5 cm (0.05m)</text></svg>',
                    svgDescription: "Un resorte comprimido 5 cm con una constante de 400 N/m. Almacena una energía potencial elástica de exactly 0.5 Julios. Al liberar el bloqueo, se transformará en energía de movimiento.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un juguete lanzador posee un resorte interno con constante elástica $k = 400\\text{ N/m}$. Si el resorte se comprime exactamente $5\\text{ cm}$ para cargar una pequeña esfera de $0.1\\text{ kg}$, calcula la energía elástica almacenada en el resorte.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Convertir deformación a metros):</strong> <br>$$x = 5\\text{ cm} = 0.05\\text{ metros}$$</li><li><strong>Paso 2 (Escribir Fórmula):</strong> <br>$$E_{pe} = \\frac{1}{2} k \\cdot x^2$$</li><li><strong>Paso 3 (Reemplazar y operar):</strong> <br>$$E_{pe} = 0.5 \\times 400\\text{ N/m} \\times (0.05\\text{ m})^2$$ <br>$$E_{pe} = 200 \\times 0.0025 = 0.5\\text{ Julios}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La energía potencial elástica almacenada en el resorte cargado es de <strong>0.5 Julios</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar elevar la deformación al cuadrado:</strong> Calcular $0.5 \\times 400 \\times 0.05 = 10\\text{ J}$. Eleve siempre $x$ al cuadrado antes de multiplicar por la constante.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cuánta energía potencial elástica en Julios almacena un resorte de rigidez k = 1,000 N/m al ser comprimido una distancia de 0.1 metros? (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "Aplica Epe = 0.5 * k * x². Reemplaza k = 1,000 y x = 0.1.",
                            feedbackCorrect: "¡Excelente! Epe = 0.5 * 1000 N/m * (0.1 m)² = 500 * 0.01 = 5 Julios.",
                            feedbackIncorrect: "Incorrecto. Epe = 0.5 * 1000 * 0.01 = 5 Julios.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si un resorte almacena exactamente 8 Julios de energía potencial elástica al ser estirado 0.2 metros, ¿cuál es el valor de su constante elástica k en N/m? (Ingresa solo el número entero):",
                            correctAnswer: "400",
                            hint: "Despeja k de la fórmula Epe = 0.5 * k * x². Es decir, k = 2 * Epe / x².",
                            feedbackCorrect: "¡Perfecto! k = 2 * 8 J / (0.2 m)² = 16 / 0.04 = 400 N/m.",
                            feedbackIncorrect: "Incorrecto. k = 16 / 0.04 = 400 N/m.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si duplicas el estiramiento o compresión de un resorte, ¿qué le ocurre a la cantidad de energía potencial elástica que almacena?",
                            options: [
                                "Se reduce a la mitad.",
                                "Se duplica (aumenta 2 veces).",
                                "Se cuadruplica (aumenta 4 veces).",
                                "Se mantiene idéntica."
                            ],
                            correctAnswer: 2,
                            hint: "La energía elástica depende directamente del cuadrado de la distancia de deformación (x²).",
                            feedbackCorrect: "¡Excelente! Al depender del cuadrado, duplicar la deformación ($2$) cuadruplica ($2^2 = 4$) la energía almacenada.",
                            feedbackIncorrect: "Incorrecto. Depende del cuadrado de la deformación, por ende se cuadruplica.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Una liga elástica tiene una constante k = 100 N/m. ¿Qué estiramiento en metros se necesita para almacenar exactamente 2 Julios de energía elástica? (Ingresa el número decimal con punto):",
                            correctAnswer: "0.2",
                            hint: "Despeja x² de la fórmula: x² = 2 * Epe / k = 4 / 100 = 0.04. Saca la raíz cuadrada de 0.04 para hallar x.",
                            feedbackCorrect: "¡Excelente! x² = 0.04 => x = sqrt(0.04) = 0.2 metros.",
                            feedbackIncorrect: "Incorrecto. x = sqrt(4 / 100) = sqrt(0.04) = 0.2 metros.",
                            difficulty: "avanzado",
                            type: "short"
                        },
                        {
                            question: "¿En qué tipo de energía se transforma principalmente la energía elástica acumulada en la cuerda tensa de un arco cuando el arquero suelta la flecha?",
                            options: [
                                "En energía potencial gravitatoria de la cuerda.",
                                "En energía cinética (movimiento) de la flecha.",
                                "En energía magnética polar.",
                                "En masa inercial."
                            ],
                            correctAnswer: 1,
                            hint: "La cuerda tensa empuja a la flecha, transfiriendo energía para hacerla volar.",
                            feedbackCorrect: "¡Perfecto! Toda la energía elástica se transfiere de forma rápida convirtiéndose en energía de movimiento (cinética) de la flecha.",
                            feedbackIncorrect: "Incorrecto. Se transforma en energía cinética para hacer avanzar a la flecha.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La energía potencial elástica se acumula en materiales deformados ($E_{pe} = \\frac{1}{2} k x^2$). Es proporcional a la rigidez $k$ y al cuadrado de la deformación $x^2$.",
                    videoPlaceholderText: "Video de Física: Energía elástica en catapultas y ballestas antiguas."
                }
            ]
        },
        {
            title: "Unidad 3: Conservación de la Energía y Potencia",
            lessons: [
                {
                    id: "conservacion-energia-mecanica",
                    title: "Lección 3.1: Conservación de la Energía Mecánica",
                    introduction: "Resuelve problemas mecánicos complejos aplicando la Ley de Conservación de la Energía Mecánica en sistemas libres de fricción.",
                    explanationHtml: '<p>La **Ley de Conservación de la Energía** establece que la energía no se crea ni se destruye, solo se transforma de una forma a otra. En un sistema ideal (libre de fricción, resistencia del aire y otras fuerzas no conservativas), la <strong>Energía Mecánica Total ($E_m$)</strong> (que es la suma de la energía cinética y las energías potenciales) permanece **estrictamente constante** en todo punto de la trayectoria:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$E_{m,\\text{inicial}} = E_{m,\\text{final}}$$</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$E_{ci} + E_{pi} = E_{cf} + E_{pf}$$</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\frac{1}{2} m v_i^2 + m g h_i + \\frac{1}{2} k x_i^2 = \\frac{1}{2} m v_f^2 + m g h_f + \\frac{1}{2} k x_f^2$$</p><p class="mt-2 text-slate-707">Este principio es una herramienta poderosísima en ingeniería: nos permite conocer velocidades y alturas en cualquier punto de un recorrido complejo sin necesidad de conocer las aceleraciones en el trayecto.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ley de Conservación Mecánica</p><p class="text-xs font-mono font-bold text-primary">Ei = Ef &rArr; Ec_i + Ep_i = Ec_f + Ep_f</p><p class="text-xs text-slate-500">Nota: En caída libre sin fricción partiendo del reposo: v_f = &radic;(2gh).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">CONSERVACIÓN DE ENERGÍA (Ei = Ef)</text><path d="M 40 40 Q 140 120 260 100" fill="none" stroke="#94a3b8" stroke-width="2" /><rect x="35" y="23" width="20" height="12" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1" rx="2" /><text x="45" y="15" font-size="7" fill="#1e40af" font-weight="bold" text-anchor="middle">Cima (vi=0)</text><text x="15" y="32" font-size="6.5" fill="#047857">Ep = 2500 J</text><text x="15" y="42" font-size="6.5" fill="#b91c1c">Ec = 0 J</text><rect x="140" y="80" width="20" height="12" fill="#fca5a5" stroke="#ef4444" stroke-width="1" rx="2" /><text x="150" y="98" font-size="7" fill="#b91c1c" font-weight="bold" text-anchor="middle">Base (vf=10m/s)</text><text x="175" y="82" font-size="6.5" fill="#047857">Ep = 0 J</text><text x="175" y="92" font-size="6.5" fill="#b91c1c">Ec = 2500 J</text></svg>',
                    svgDescription: "Una patinadora en una rampa ideal libre de fricción. En la cima (altura máxima) toda su energía es Potencial. En el punto más bajo (altura nula), toda la Ep se convirtió en energía de movimiento Cinética. Ei = Ef = 2500 J.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Una patinadora de $50\\text{ kg}$ parte del reposo desde la cima de una rampa circular de $5\\text{ metros}$ de altura en un parque de Xela. Calcula su velocidad en la base de la rampa (usa $g = 10\\text{ m/s}^2$ y desprecia la fricción).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Plantear Conservación):</strong> <br>$$E_{ci} + E_{pi} = E_{cf} + E_{pf}$$</li><li><strong>Paso 2 (Identificar variables en estados):</strong> <br>- Inicial (cima, reposo): $E_{ci} = 0$, $E_{pi} = m \\cdot g \\cdot h$ <br>- Final (base, altura cero): $E_{pf} = 0$, $E_{cf} = \\frac{1}{2} m v_f^2$</li><li><strong>Paso 3 (Igualar y simplificar masa en ambos lados):</strong> <br>$$m \\cdot g \\cdot h = \\frac{1}{2} m v_f^2 \\Rightarrow g \\cdot h = \\frac{1}{2} v_f^2$$ <br>$$\\text{Despejando: } v_f^2 = 2 g h \\Rightarrow v_f = \\sqrt{2 g h}$$</li><li><strong>Paso 4 (Calcular):</strong> <br>$$v_f = \\sqrt{2 \\times 10\\text{ m/s}^2 \\times 5\\text{ m}} = \\sqrt{100} = 10\\text{ m/s}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La velocidad de la patinadora en la base es de <strong>10 m/s</strong> (nota que la velocidad no depende de la masa de la persona).</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Escribir la masa en la ecuación cuando se puede simplificar:</strong> Incluir los $50\\text{ kg}$ en la calculadora. Al cancelarse a ambos lados, es más ágil simplificar la variable $m$ algebraicamente para evitar errores aritméticos.</li></ul>',
                    exercises: [
                        {
                            question: "Si dejas caer libremente un objeto de 3 kg desde una altura de 45 metros, ¿con qué velocidad en m/s choca contra el suelo? (g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "30",
                            hint: "Aplica la conservación: mgh = 0.5 * m * v² => v = sqrt(2 * g * h). Reemplaza g = 10 y h = 45.",
                            feedbackCorrect: "¡Excelente! v = sqrt(2 * 10 * 45) = sqrt(900) = 30 m/s.",
                            feedbackIncorrect: "Incorrecto. v = sqrt(2*g*h) = sqrt(2*10*45) = sqrt(900) = 30 m/s.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Qué ocurre con la energía mecánica total de un péndulo oscilante en condiciones ideales sin resistencia del aire?",
                            options: [
                                "Disminuye gradualmente en cada oscilación hasta detenerse.",
                                "Se mantiene estrictamente constante en todo momento, oscilando continuamente entre cinética y potencial.",
                                "Aumenta en cada oscilación por la fuerza de inercia.",
                                "Se reduce a la mitad al pasar por el centro."
                            ],
                            correctAnswer: 1,
                            hint: "En condiciones ideales libres de fricción, la energía total mecánica no se destruye, solo cambia de forma.",
                            feedbackCorrect: "¡Perfecto! La energía mecánica total es constante, transformándose de potencial (en los extremos elevados) a cinética (en el centro bajo).",
                            feedbackIncorrect: "Incorrecto. Se mantiene constante transformándose cíclicamente de cinética a potencial.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Un bloque se desliza sin fricción. Si en la parte más alta del plano inclinado tiene Ep = 100 J y Ec = 20 J, ¿cuál será su energía cinética en Julios cuando llega a la base si la altura se reduce a cero? (Ingresa solo el número entero):",
                            correctAnswer: "120",
                            hint: "Aplica Ei = Ef. En la cima, Ei = Ep + Ec. En la base, Ep = 0, por lo que Ef = Ec.",
                            feedbackCorrect: "¡Excelente! Ei = 100 + 20 = 120 J. En la base, Ep = 0, por lo que Ec = 120 Julios por conservación.",
                            feedbackIncorrect: "Incorrecto. Energía total = 100 + 20 = 120 J. En la base toda la energía es cinética, es decir, 120 Julios.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cómo se define formalmente una 'fuerza conservativa' en física clásica?",
                            options: [
                                "Es una fuerza que conserva la temperatura del cuerpo.",
                                "Es una fuerza cuyo trabajo realizado sobre un objeto para desplazarlo entre dos puntos es independiente de la trayectoria seguida, dependiendo solo de los puntos inicial y final.",
                                "Es una fuerza que no puede realizar trabajo negativo.",
                                "Es la fuerza de fricción en movimiento."
                            ],
                            correctAnswer: 1,
                            hint: "La gravedad y la fuerza elástica son ejemplos de fuerzas conservativas; su trabajo en bucles cerrados es nulo.",
                            feedbackCorrect: "¡Excelente! El trabajo de una fuerza conservativa depende únicamente del punto de inicio y de llegada, no del camino.",
                            feedbackIncorrect: "Incorrecto. Es aquella fuerza cuyo trabajo realizado no depende de la trayectoria recorrida, solo de la posición inicial y final.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Si un proyectil es lanzado verticalmente hacia arriba a una velocidad inicial de 20 m/s, ¿cuál es la altura máxima en metros que alcanza? (g = 10 m/s². Ingresa solo el número entero):",
                            correctAnswer: "20",
                            hint: "En la altura máxima, la velocidad es cero. Toda la Ec inicial (0.5 * m * vi²) se transforma en Ep final (m * g * h). Despeja h = vi² / (2 * g).",
                            feedbackCorrect: "¡Perfecto! h = (20)² / (2 * 10) = 400 / 20 = 20 metros.",
                            feedbackIncorrect: "Incorrecto. Altura máxima h = vi² / 2g = 400 / 20 = 20 metros.",
                            difficulty: "avanzado",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La energía total mecánica se conserva en sistemas libres de fricción ($E_i = E_f$). Toda pérdida potencial se traduce en ganancia cinética.",
                    videoPlaceholderText: "Video de Física: Leyes de conservación mecánica demostradas en un péndulo de demolición."
                },
                {
                    id: "sistemas-no-conservativos-friccion",
                    title: "Lección 3.2: Sistemas No Conservativos (Pérdidas por Fricción)",
                    introduction: "Aprende a analizar sistemas mecánicos reales donde la fricción disipa energía mecánica en forma de calor disipado.",
                    explanationHtml: '<p>En los sistemas reales, actúan **fuerzas no conservativas** (como la fricción cinética o la resistencia del aire). El trabajo realizado por estas fuerzas ($W_{\\text{nc}}$) disipa energía mecánica, retirándola del sistema en forma de energía térmica (calor y desgaste de las superficies).</p><p class="mt-2 text-slate-700">La ecuación de conservación se modifica agregando el trabajo de las fuerzas no conservativas:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$E_{\\text{inicial}} + W_{\\text{nc}} = E_{\\text{final}}$$</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$(E_{ci} + E_{pi}) + W_{\\text{nc}} = (E_{cf} + E_{pf})$$</p><p class="mt-2 text-slate-700">Como la fricción siempre actúa en sentido opuesto al desplazamiento, su trabajo siempre es estrictamente **negativo** ($W_{\\text{nc}} = -f_k \\cdot d$), reduciendo la energía mecánica final:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$(E_{ci} + E_{pi}) - f_k \\cdot d = (E_{cf} + E_{pf})$$</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Balance de Energía No Conservativa</p><p class="text-xs font-mono font-bold text-primary">Ei - f_k &bull; d = Ef &nbsp;|&nbsp; W_friccion = Ef - Ei</p><p class="text-xs text-slate-500">Recuerda: El trabajo de la fricción siempre resta energía (signo negativo).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">SISTEMAS NO CONSERVATIVOS</text><polygon points="40,95 240,95 240,40" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" /><g transform="translate(140,68) rotate(-15.5)"><rect x="-15" y="-10" width="30" height="20" fill="#fca5a5" stroke="#ef4444" stroke-width="1" rx="2" /><line x1="0" y1="0" x2="-25" y2="0" stroke="#f59e0b" stroke-width="1.5" /><polygon points="-22,-3 -27,0 -22,3" fill="#f59e0b" /></g><text x="75" y="55" font-size="7.5" fill="#047857" font-weight="bold">Ei = 200 J</text><text x="145" y="50" font-size="7" fill="#b45309" font-weight="bold">W_fricción = -120 J (Calor)</text><text x="210" y="85" font-size="7.5" fill="#b91c1c" font-weight="bold">Ef = 80 J</text></svg>',
                    svgDescription: "Un bloque deslizando cuesta abajo. Su energía mecánica inicial es de 200 J. Debido a la fricción, se realiza un trabajo no conservativo de -120 J (calor disipado). La energía mecánica final en la base se reduce a 80 J.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un bloque de $10\\text{ kg}$ se desliza por una rampa de $5\\text{ metros}$ de longitud desde una altura de $2\\text{ metros}$ en Antigua. Si llega a la base con una velocidad de $4\\text{ m/s}$ debido a la fricción, calcula el trabajo realizado por la fuerza de fricción sobre el bloque (usa $g = 10\\text{ m/s}^2$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Calcular Energía Inicial en la cima):</strong> <br>Partiendo del reposo ($E_{ci} = 0$): <br>$$E_i = E_{pi} = m \\cdot g \\cdot h = 10\\text{ kg} \\times 10\\text{ m/s}^2 \\times 2\\text{ m} = 200\\text{ Julios}$$</li><li><strong>Paso 2 (Calcular Energía Final en la base):</strong> <br>Como $h = 0$, toda la energía en la base es cinética: <br>$$E_f = E_{cf} = \\frac{1}{2} m v_f^2 = 0.5 \\times 10\\text{ kg} \\times (4\\text{ m/s})^2 = 5 \\times 16 = 80\\text{ Julios}$$</li><li><strong>Paso 3 (Aplicar Balance No Conservativo):</strong> <br>$$E_i + W_{\\text{fricción}} = E_f$$ <br>$$200 + W_{\\text{fricción}} = 80$$</li><li><strong>Paso 4 (Despejar el trabajo):</strong> <br>$$W_{\\text{fricción}} = 80 - 200 = -120\\text{ Julios}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El trabajo realizado por la fricción es de <strong>-120 Julios</strong> (el sistema disipó 120 Julios en forma de calor).</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar el signo negativo de fricción:</strong> Escribir $+120\\text{ J}$ como respuesta. Recuerde que al ser una pérdida energética, el trabajo de fricción debe ser negativo, indicando que el sistema perdió energía útil.</li></ul>',
                    exercises: [
                        {
                            question: "Si un bloque con energía mecánica inicial de 150 J pierde 40 J por fricción al deslizar por una rampa, ¿cuál es su energía final en la base en Julios? (Ingresa solo el número entero):",
                            correctAnswer: "110",
                            hint: "Aplica Ef = Ei + W_nc. Recuerda que la pérdida es un trabajo negativo: W_nc = -40 J.",
                            feedbackCorrect: "¡Excelente! Ef = 150 J - 40 J = 110 Julios.",
                            feedbackIncorrect: "Incorrecto. Ef = 150 - 40 = 110 Julios.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿En qué forma de energía se disipa comúnmente la energía mecánica 'perdida' por rozamiento en los pistones de un motor?",
                            options: [
                                "En energía eléctrica acumulada.",
                                "En energía térmica o calor.",
                                "En energía potencial química.",
                                "En masa gravitacional."
                            ],
                            correctAnswer: 1,
                            hint: "Toca una superficie rugosa que ha sido frotada intensamente y siente su temperatura.",
                            feedbackCorrect: "¡Perfecto! La fricción excita los átomos de la superficie aumentando su temperatura (calor disipado).",
                            feedbackIncorrect: "Incorrecto. Se disipa en forma de energía térmica (calor).",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Un bloque de 5 kg se desliza sobre una mesa rugosa horizontal partiendo con una velocidad de 6 m/s y se detiene tras recorrer 3 metros. Calcula el trabajo realizado por la fricción en Julios. (Ingresa el valor entero con signo negativo):",
                            correctAnswer: "-90",
                            hint: "Como se detiene, Ef = 0. Calcula la energía cinética inicial: Ei = 0.5 * m * vi² = 0.5 * 5 * 36 = 90 J. Aplica W_friccion = Ef - Ei.",
                            feedbackCorrect: "¡Excelente! Ei = 90 J, Ef = 0 J. Trabajo de fricción = 0 - 90 = -90 Julios.",
                            feedbackIncorrect: "Incorrecto. Ei = 0.5 * 5 * 36 = 90 J. W_friccion = 0 - 90 = -90 Julios.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Con los datos del ejercicio anterior (m = 5 kg, d = 3 m, W_fricción = -90 J), calcula la magnitud de la fuerza de fricción constante en Newtons que detuvo al bloque. (Ingresa solo el número entero):",
                            correctAnswer: "30",
                            hint: "Aplica W = F * d * cos(180°) => W = -f * d. Reemplaza W = -90 y d = 3 m.",
                            feedbackCorrect: "¡Excelente! -90 J = -f * 3 m => f = 30 Newtons.",
                            feedbackIncorrect: "Incorrecto. f = |W|/d = 90 / 3 = 30 Newtons.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Es aplicable el Principio de Conservación de la Energía Total a un sistema real que presenta rozamiento?",
                            options: [
                                "No, la fricción destruye la energía de forma absoluta.",
                                "Sí, porque aunque la energía mecánica disminuya, la energía total (incluyendo el calor disipado) se mantiene constante.",
                                "Solo si el objeto cae verticalmente.",
                                "Solo si el coeficiente de fricción es cero."
                            ],
                            correctAnswer: 1,
                            hint: "La energía mecánica no se conserva por la fricción, pero la energía total del universo sí se mantiene.",
                            feedbackCorrect: "¡Excelente! La energía total se conserva siempre; la energía 'perdida' es solo energía útil disipada en calor.",
                            feedbackIncorrect: "Incorrecto. El principio de conservación de la energía total es universal; la energía no se destruye, solo se calienta.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "En sistemas reales, las fuerzas no conservativas disipan energía mecánica ($E_i + W_{nc} = E_f$). El trabajo de la fricción es siempre negativo.",
                    videoPlaceholderText: "Video de Física: La física de la fricción en frenos y la disipación térmica explicada."
                },
                {
                    id: "potencia-rendimiento-mecanico",
                    title: "Lección 3.3: Potencia y Rendimiento Mecánico",
                    introduction: "Aprende a calcular la potencia mecánica desarrollada por motores ($P=W/t$) y evalúa el porcentaje de eficiencia o rendimiento.",
                    explanationHtml: '<p>En la práctica de la ingeniería, no basta con saber cuánto trabajo realiza una máquina; es crucial saber con qué rapidez lo hace y cuánta de la energía consumida es verdaderamente aprovechada:</p><p class="mt-2 font-bold text-slate-800">1. Potencia Mecánica ($P$)</p><p class="text-slate-700">Mide la rapidez con la que se realiza un trabajo o se transfiere energía. Su unidad de medida en el SI es el <strong>Vatio o Watt ($W$)</strong>, donde $1\\text{ W} = 1\\text{ J/s}$.</p><p class="mt-2 text-slate-700">Fórmulas fundamentales:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$P = \\frac{W}{t} \\quad \\text{y} \\quad P = F \\cdot v$$</p><p class="mt-2 text-slate-700">donde $v$ es la velocidad constante. Otra unidad industrial común es el Caballo de Fuerza ($1\\text{ HP} \\approx 746\\text{ W}$).</p><p class="mt-2 font-bold text-slate-800">2. Eficiencia o Rendimiento ($\\eta$)</p><p class="text-slate-700">Representa la fracción o porcentaje de la energía suministrada a una máquina que es verdaderamente convertida en trabajo mecánico útil. Debido a pérdidas inevitables por fricción y calor, el rendimiento **siempre es menor al $100\\%$**:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\eta = \\left( \\frac{\\text{Potencia Útil}}{\\text{Potencia Suministrada}} \\right) \\times 100\\%$$</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Potencia y Eficiencia</p><p class="text-xs font-mono font-bold text-primary">P = W / t &nbsp;|&nbsp; P = F &bull; v &nbsp;|&nbsp; &eta; = (P_util / P_sumin) &times; 100%</p><p class="text-xs text-slate-500">1 HP = 746 W. kW = 1000 W.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">POTENCIA Y RENDIMIENTO (&eta;)</text><rect x="40" y="45" width="60" height="40" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" rx="6" /><text x="70" y="68" font-size="8" font-family="sans-serif" font-weight="bold" fill="#1e40af" text-anchor="middle">MOTOR</text><circle cx="120" cy="55" r="10" fill="#cbd5e1" stroke="#475569" stroke-width="1.5" /><line x1="100" y1="55" x2="120" y2="55" stroke="#475569" stroke-width="1.5" /><line x1="130" y1="55" x2="130" y2="85" stroke="#475569" stroke-width="1.5" /><rect x="118" y="85" width="24" height="20" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5" rx="2" /><text x="130" y="97" font-size="7.5" fill="#991b1b" font-weight="bold" text-anchor="middle">M</text><text x="70" y="105" font-size="7.5" fill="#475569" text-anchor="middle">P_suministrada = 1000 W</text><text x="155" y="65" font-size="7.5" fill="#047857" font-weight="bold">P_útil = 800 W</text><text x="155" y="77" font-size="8" fill="#10b981" font-weight="bold">Eficiencia &eta; = 80%</text></svg>',
                    svgDescription: "Un motor eléctrico que consume 1000 W de potencia eléctrica de entrada (suministrada). Por fricciones y calor, pierde 200 W, entregando 800 W de potencia mecánica útil para elevar la caja. Su eficiencia es del 80%.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un motor eléctrico en Escuintla eleva un montacargas de $200\\text{ kg}$ a una altura de $15\\text{ metros}$ en un tiempo de $10\\text{ segundos}$ con velocidad constante. Calcula la potencia útil desarrollada por el motor y exprésala en caballos de fuerza (HP) (sabiendo que $g = 10\\text{ m/s}^2$ y $1\\text{ HP} \\approx 746\\text{ W}$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Calcular Trabajo Útil realizado):</strong> <br>$$W = m \\cdot g \\cdot h = 200\\text{ kg} \\times 10\\text{ m/s}^2 \\times 15\\text{ m} = 30,000\\text{ Julios}$$</li><li><strong>Paso 2 (Calcular Potencia útil en Watts):</strong> <br>$$P = \\frac{W}{t} = \\frac{30,000\\text{ J}}{10\\text{ s}} = 3,000\\text{ Watts (W)}$$</li><li><strong>Paso 3 (Convertir a HP):</strong> <br>$$P_{\\text{HP}} = \\frac{3,000\\text{ W}}{746\\text{ W/HP}} \\approx 4.02\\text{ HP}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultados:</strong> Potencia útil = <strong>3,000 Watts</strong> (equivalente a aprox. <strong>4.0 HP</strong>).</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir potencia eléctrica de red con la útil:</strong> Ignorar las pérdidas internas de calor del motor. La potencia suministrada por la red eléctrica siempre supera a la potencia mecánica real entregada en el eje.</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué potencia mecánica en Watts desarrolla una grúa que realiza exactamente 5,000 Julios de trabajo en un lapso de 20 segundos? (Ingresa solo el número entero):",
                            correctAnswer: "250",
                            hint: "Aplica la fórmula directa de la potencia: P = W / t. Reemplaza W = 5,000 y t = 20.",
                            feedbackCorrect: "¡Excelente! P = 5,000 J / 20 s = 250 Watts.",
                            feedbackIncorrect: "Incorrecto. Potencia P = W/t = 5000 / 20 = 250 Watts.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si un motor eléctrico consume 1,000 Watts de potencia de la red pero solo entrega 800 Watts de potencia mecánica útil en su eje, ¿cuál es el porcentaje de rendimiento o eficiencia del motor? (Ingresa solo el número entero sin el símbolo %):",
                            correctAnswer: "80",
                            hint: "Aplica η = (Potencia útil / Potencia suministrada) * 100.",
                            feedbackCorrect: "¡Perfecto! η = (800 / 1000) * 100 = 80%.",
                            feedbackIncorrect: "Incorrecto. Eficiencia = (800 / 1000) * 100 = 80.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula la potencia útil en Watts desarrollada por un tractor que tira de un arado con una fuerza constante de 2,000 N a una velocidad constante de 3 m/s. (Ingresa solo el número entero):",
                            correctAnswer: "6000",
                            hint: "Usa la fórmula de potencia a velocidad constante: P = F * v. Reemplaza F = 2,000 y v = 3.",
                            feedbackCorrect: "¡Excelente! P = 2,000 N * 3 m/s = 6,000 Watts (equivalente a 6 kW).",
                            feedbackIncorrect: "Incorrecto. P = F * v = 2000 * 3 = 6,000 Watts.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuántos Kilowatts (kW) de potencia equivalen aproximadamente a 10 caballos de fuerza (HP)? (Sabiendo que 1 HP ≈ 746 W. Ingresa el número decimal con punto):",
                            correctAnswer: "7.46",
                            hint: "Multiplica 10 HP por 746 W/HP para obtener la potencia en Watts. Luego divide entre 1,000 para pasar a kW.",
                            feedbackCorrect: "¡Excelente! 10 HP = 7,460 Watts = 7.46 Kilowatts.",
                            feedbackIncorrect: "Incorrecto. 10 HP * 746 W/HP = 7460 W = 7.46 kW.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Un motor eléctrico de 150 Watts de potencia útil trabaja de forma continua durante un minuto. ¿Cuánto trabajo mecánico en Julios realiza? (Ingresa solo el número entero):",
                            correctAnswer: "9000",
                            hint: "Homogeneiza unidades: un minuto equivale a 60 segundos. Despeja el trabajo como W = P * t.",
                            feedbackCorrect: "¡Perfecto! W = 150 W * 60 s = 9,000 Julios.",
                            feedbackIncorrect: "Incorrecto. Un minuto = 60s. Trabajo = 150 * 60 = 9,000 Julios.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La potencia mide la rapidez de transferencia de energía ($P=W/t$). El rendimiento ($\eta = \\frac{P_{util}}{P_{sumin}} \\times 100\\%$) mide la eficiencia real de una máquina.",
                    videoPlaceholderText: "Video de Física: Potencia, torque y eficiencia mecánica en motores industriales."
                }
            ]
        }
    ]
};

function run() {
    console.log("Leyendo academic_content.js...");
    let content = fs.readFileSync(ACADEMIC_FILE, "utf8");

    const startEnergy = content.indexOf('    "trabajo-energia-potencia": `');
    const endEnergy = content.indexOf('`,\n\n    "curso-estadistica-aplicada":');

    if (startEnergy === -1 || endEnergy === -1) {
        console.error("No se pudo encontrar el bloque trabajo-energia-potencia original.");
        process.exit(1);
    }

    console.log("Encontradas posiciones en disco para inyección quirúrgica de Trabajo, Energía y Potencia.");

    const trabajoEnergiaPotenciaJS = '    "trabajo-energia-potencia": ' + JSON.stringify(trabajoEnergiaPotenciaData, null, 4);

    let newContent = content.slice(0, startEnergy) + 
                     trabajoEnergiaPotenciaJS + 
                     content.slice(endEnergy + 1);

    console.log("Escribiendo cambios en academic_content.js...");
    fs.writeFileSync(ACADEMIC_FILE, newContent, "utf8");
    console.log("¡Curso de Trabajo, Energía y Potencia inyectado con éxito!");
}

try {
    run();
} catch (e) {
    console.error("Error crítico durante la inyección:", e);
    process.exit(1);
}
