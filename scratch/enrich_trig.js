const fs = require("fs");
const path = require("path");

const ACADEMIC_FILE = path.join(__dirname, "..", "academic_content.js");

const trigonometriaFundamentalData = {
    isRichCourse: true,
    title: "Trigonometría Fundamental",
    units: [
        {
            title: "Unidad 1: Razones Trigonométricas en el Triángulo Rectángulo",
            lessons: [
                {
                    id: "razones-basicas-soh-cah-toa",
                    title: "Lección 1.1: Seno, Coseno y Tangente (SOH-CAH-TOA)",
                    introduction: "La trigonometría conecta los ángulos de un triángulo con las proporciones de sus lados. Domina las tres funciones básicas.",
                    explanationHtml: '<p>En un triángulo rectángulo, respecto a uno de sus ángulos agudos $\\theta$, definimos las tres razones trigonométricas fundamentales a partir de la longitud de sus lados:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Seno (sen o sin):</strong> Razón entre el cateto opuesto y la hipotenusa. <br>$$\\operatorname{sen}(\\theta) = \\frac{\\text{Cateto Opuesto}}{\\text{Hipotenusa}} \\quad \\text{(SOH)}$$</li><li><strong>Coseno (cos):</strong> Razón entre el cateto adyacente y la hipotenusa. <br>$$\\cos(\\theta) = \\frac{\\text{Cateto Adyacente}}{\\text{Hipotenusa}} \\quad \\text{(CAH)}$$</li><li><strong>Tangente (tan):</strong> Razón entre el cateto opuesto y el adyacente. <br>$$\\tan(\\theta) = \\frac{\\text{Cateto Opuesto}}{\\text{Cateto Adyacente}} \\quad \\text{(TOA)}$$</li></ul><p class="mt-2">Estas razones son constantes para un mismo ángulo, independientemente del tamaño del triángulo rectángulo.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Regla Mnemotécnica SOH-CAH-TOA</p><p class="text-xs font-mono font-bold text-primary">SOH: sen = O/H &nbsp;&bull;&nbsp; CAH: cos = A/H &nbsp;&bull;&nbsp; TOA: tan = O/A</p><p class="text-xs text-slate-500">Recuerda: La hipotenusa siempre es el lado mayor, opuesto al ángulo recto de 90&deg;.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">RAZONES TRIGONOMÉTRICAS</text><polygon points="60,95 200,95 200,35" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" /><rect x="190" y="85" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1" /><path d="M 80 95 A 20 20 0 0 0 78 86" fill="none" stroke="#ef4444" stroke-width="2" /><text x="85" y="90" font-size="9" fill="#ef4444" font-weight="bold">&theta;</text><text x="130" y="106" font-size="8" fill="#1e40af" font-weight="bold" text-anchor="middle">Cateto Adyacente = 4</text><text x="235" y="65" font-size="8" fill="#1e40af" font-weight="bold" text-anchor="middle">Cateto Opuesto = 3</text><text x="110" y="55" font-size="8" fill="#d97706" font-weight="bold" text-anchor="middle">Hipotenusa = 5</text></svg>',
                    svgDescription: "Un triángulo rectángulo con lados de longitud 3 (opuesto), 4 (adyacente) y 5 (hipotenusa) respecto a un ángulo marcado como teta, que sirve de base para los cálculos de SOH-CAH-TOA.",
                    workedExampleHtml: '<p><strong>Problema:</strong> En un triángulo rectángulo con catetos de 3 cm y 4 cm, calcula el seno y coseno del ángulo menor $\\theta$ (el opuesto al lado de 3 cm).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Determina la hipotenusa ($h$) usando el Teorema de Pitágoras: <br>$h = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ cm.</li><li><strong>Paso 2:</strong> Para el ángulo menor $\\theta$, el cateto opuesto ($O$) mide 3 cm y el cateto adyacente ($A$) mide 4 cm.</li><li><strong>Paso 3:</strong> Calcula el seno: $\\operatorname{sen}(\\theta) = \\frac{O}{H} = \\frac{3}{5} = 0.60$.</li><li><strong>Paso 4:</strong> Calcula el coseno: $\\cos(\\theta) = \\frac{A}{H} = \\frac{4}{5} = 0.80$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> $\\operatorname{sen}(\\theta) = 0.6$ y $\\cos(\\theta) = 0.8$.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir opuesto con adyacente:</strong> Identifica primero el ángulo de referencia $\\theta$. El cateto adyacente es el que toca al ángulo; el opuesto está justo al frente.</li></ul>',
                    exercises: [
                        {
                            question: "Si en un triángulo rectángulo la hipotenusa mide 13 y el cateto opuesto a un ángulo A es 5, calcula cos(A). Ingresa la respuesta como fracción decimal (ej: 0.92 o 12/13):",
                            correctAnswer: "12/13",
                            hint: "Primero calcula el cateto adyacente usando Pitágoras: sqrt(13^2 - 5^2) = 12. Luego divide adyacente/hipotenusa.",
                            feedbackCorrect: "¡Excelente! Cateto adyacente = 12, entonces cos(A) = 12/13.",
                            feedbackIncorrect: "Incorrecto. Cateto adyacente es 12, por lo tanto cos(A) = 12/13.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el valor de la tangente de un ángulo si sabemos que su seno es 0.6 y su coseno es 0.8? (Ingresa solo el número decimal con punto):",
                            correctAnswer: "0.75",
                            hint: "Usa la identidad de división tan(x) = sen(x) / cos(x). Divide 0.6 entre 0.8.",
                            feedbackCorrect: "¡Perfecto! tan = 0.6 / 0.8 = 0.75.",
                            feedbackIncorrect: "Incorrecto. tan = sen/cos = 0.6/0.8 = 0.75.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si la tangente de un ángulo es exactamente 1, ¿qué relación geométrica tienen sus catetos?",
                            options: [
                                "El cateto opuesto mide el doble que el adyacente.",
                                "El cateto opuesto y el adyacente miden exactamente lo mismo.",
                                "El cateto adyacente es igual a la hipotenusa.",
                                "La hipotenusa mide exactamente 1 cm."
                            ],
                            correctAnswer: 1,
                            hint: "Dado que tan = opuesto / adyacente, para que el resultado sea 1, el numerador y el denominador deben ser iguales.",
                            feedbackCorrect: "¡Excelente! Al ser la tangente igual a 1, ambos catetos son idénticos, lo que corresponde a un ángulo de 45°.",
                            feedbackIncorrect: "Incorrecto. tan = O/A = 1 implica que O = A (ambos catetos miden lo mismo).",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Calcula sen(B) en forma de fracción si los dos catetos de un triángulo rectángulo miden 5 cm y 12 cm, y B es el ángulo opuesto al lado de 12 cm:",
                            correctAnswer: "12/13",
                            hint: "Calcula la hipotenusa con Pitágoras: sqrt(5^2 + 12^2) = 13. Luego divide opuesto/hipotenusa.",
                            feedbackCorrect: "¡Perfecto! La hipotenusa es 13, por ende sen(B) = 12/13.",
                            feedbackIncorrect: "Incorrecto. Hipotenusa = 13. Opuesto a B es 12, por lo que sen(B) = 12/13.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el valor máximo posible que puede tomar el seno o el coseno de cualquier ángulo agudo en un triángulo rectángulo?",
                            options: [
                                "Puede tomar cualquier valor hasta el infinito.",
                                "Siempre es estrictamente menor a 1.",
                                "Es exactamente 1 en todos los casos.",
                                "Siempre es mayor a 2."
                            ],
                            correctAnswer: 1,
                            hint: "Recuerda que la hipotenusa es siempre el lado más largo del triángulo rectángulo. ¿Qué pasa al dividir un número menor entre uno mayor?",
                            feedbackCorrect: "¡Perfecto! Al ser la hipotenusa mayor que los catetos, las fracciones de sen y cos siempre son menores a 1.",
                            feedbackIncorrect: "Incorrecto. Al dividir un cateto entre la hipotenusa (que es mayor), el resultado siempre es menor a 1.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Las razones trigonométricas fundamentales vinculan proporciones dimensionales a valores angulares fijos en triángulos rectángulos.",
                    videoPlaceholderText: "Video de Trigonometría: SOH-CAH-TOA y razones trigonométricas básicas."
                },
                {
                    id: "razones-reciprocas-csc-sec-cot",
                    title: "Lección 1.2: Razones Recíprocas (Cosecante, Secante, Cotangente)",
                    introduction: "Aprende a definir las funciones cosecante, secante y cotangente como el inverso multiplicativo de las tres básicas.",
                    explanationHtml: '<p>Cada una de las razones trigonométricas fundamentales posee un <strong>recíproco multiplicativo</strong>. Se definen intercambiando el numerador y denominador de las fórmulas clásicas:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Cosecante (csc o cosec):</strong> Recíproco del seno. <br>$$\\csc(\\theta) = \\frac{1}{\\operatorname{sen}(\\theta)} = \\frac{\\text{Hipotenusa}}{\\text{Cateto Opuesto}}$$</li><li><strong>Secante (sec):</strong> Recíproco del coseno. <br>$$\\sec(\\theta) = \\frac{1}{\\cos(\\theta)} = \\frac{\\text{Hipotenusa}}{\\text{Cateto Adyacente}}$$</li><li><strong>Cotangente (cot o ctg):</strong> Recíproco de la tangente. <br>$$\\cot(\\theta) = \\frac{1}{\\tan(\\theta)} = \\frac{\\text{Cateto Adyacente}}{\\text{Cateto Opuesto}}$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Relaciones de Reciprocidad</p><p class="text-xs font-mono font-bold text-primary">sen &bull; csc = 1 &nbsp;|&nbsp; cos &bull; sec = 1 &nbsp;|&nbsp; tan &bull; cot = 1</p><p class="text-xs text-slate-500">Ejemplo: Si sen = 3/5 &rArr; csc = 5/3.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">RAZONES RECÍPROCAS</text><polygon points="50,95 180,95 180,45" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" /><path d="M 70 95 A 20 20 0 0 0 68 87" fill="none" stroke="#059669" stroke-width="2" /><text x="74" y="91" font-size="9" fill="#059669" font-weight="bold">&theta;</text><text x="205" y="55" font-size="8" fill="#3b82f6" font-weight="bold">sen = O/H</text><text x="205" y="65" font-size="8" fill="#10b981" font-weight="bold">csc = H/O</text><text x="205" y="80" font-size="8" fill="#3b82f6" font-weight="bold">cos = A/H</text><text x="205" y="90" font-size="8" fill="#10b981" font-weight="bold">sec = H/A</text></svg>',
                    svgDescription: "Triángulo rectángulo con flechas ilustrativas que muestran el emparejamiento inverso entre las funciones seno-cosecante y coseno-secante.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Si el $\\cos(\\theta) = 5/13$, calcula la $\\sec(\\theta)$ y la $\\csc(\\theta)$ sabiendo que el cateto opuesto mide 12.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Secante):</strong> La secante es el inverso del coseno: $\\sec(\\theta) = \\frac{1}{\\cos(\\theta)} = \\frac{13}{5}$.</li><li><strong>Paso 2:</strong> Identifica el seno. Con opuesto = 12 e hipotenusa = 13, tenemos $\\operatorname{sen}(\\theta) = \\frac{12}{13}$.</li><li><strong>Paso 3 (Cosecante):</strong> La cosecante es el inverso del seno: $\\csc(\\theta) = \\frac{1}{\\operatorname{sen}(\\theta)} = \\frac{13}{12}$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> $\\sec(\\theta) = 13/5$ y $\\csc(\\theta) = 13/12$.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Emparejar secante con seno y cosecante con coseno:</strong> Se tiende a agruparlas mal por similitud del nombre. Recuerda que la letra inicial cambia: el recíproco de <strong>S</strong>eno es <strong>C</strong>osecante y el de <strong>C</strong>oseno es <strong>S</strong>ecante.</li></ul>',
                    exercises: [
                        {
                            question: "Si tan(A) = 3/4, ¿cuál es el valor de la cotangente de A? (Ingresa la fracción, ej: 4/3):",
                            correctAnswer: "4/3",
                            hint: "La cotangente es el recíproco directo de la tangente. Simplemente invierte la fracción.",
                            feedbackCorrect: "¡Excelente! cot(A) = 1 / tan(A) = 4/3.",
                            feedbackIncorrect: "Incorrecto. Al ser recíproco de tan(A) = 3/4, cot(A) es 4/3.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si sen(x) = 1/2, ¿cuánto vale la cosecante de x? (Ingresa solo el número entero):",
                            correctAnswer: "2",
                            hint: "La cosecante es el recíproco del seno. Invierte la fracción 1/2.",
                            feedbackCorrect: "¡Perfecto! csc(x) = 1 / (1/2) = 2.",
                            feedbackIncorrect: "Incorrecto. csc(x) = 1 / sen(x) = 1 / (1/2) = 2.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula sec(y) en forma de fracción si el cateto adyacente es 8 cm y la hipotenusa es 10 cm:",
                            correctAnswer: "5/4",
                            hint: "La secante es Hipotenusa / Cateto Adyacente. Divide 10 entre 8 y simplifica la fracción.",
                            feedbackCorrect: "¡Excelente! sec(y) = 10 / 8 = 5/4.",
                            feedbackIncorrect: "Incorrecto. sec = H / A = 10 / 8 = 5/4.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el valor resultante del producto de sen(A) por csc(A)? (Ingresa solo el número entero):",
                            correctAnswer: "1",
                            hint: "Recuerda que sen(A) = O/H y csc(A) = H/O. Multiplica ambas expresiones.",
                            feedbackCorrect: "¡Perfecto! Al ser razones recíprocas directas, su multiplicación siempre da 1.",
                            feedbackIncorrect: "Incorrecto. Cualquier número multiplicado por su recíproco es 1: sen(A) * csc(A) = 1.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si cos(B) = 0.8, ¿cuál es el valor exacto de sec(B)? (Ingresa el número decimal con punto):",
                            correctAnswer: "1.25",
                            hint: "La secante es 1/cos. Divide 1 entre 0.8.",
                            feedbackCorrect: "¡Excelente! sec(B) = 1 / 0.8 = 1.25.",
                            feedbackIncorrect: "Incorrecto. sec(B) = 1/cos = 1 / 0.8 = 1.25.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Las razones trigonométricas recíprocas (csc, sec, cot) completan las proporciones del triángulo rectángulo y se definen como la inversión aritmética de las razones primarias.",
                    videoPlaceholderText: "Video de Trigonometría: Entendiendo cosecante, secante y cotangente sin memorizar."
                },
                {
                    id: "angulos-elevacion-depresion",
                    title: "Lección 1.3: Ángulos de Elevación y Depresión",
                    introduction: "Aprende a plantear y resolver modelos trigonométricos para calcular alturas y distancias inaccesibles mediante ángulos visuales.",
                    explanationHtml: '<p>Los ángulos visuales se forman a partir de una línea de referencia llamada <strong>línea visual horizontal</strong> (el nivel del ojo del observador):</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Ángulo de Elevación:</strong> Ángulo formado hacia arriba entre la horizontal y la línea visual del observador al apuntar a un objeto elevado.</li><li><strong>Ángulo de Depresión:</strong> Ángulo formado hacia abajo entre la horizontal y la línea visual al apuntar a un objeto situado por debajo.</li></ul><p class="mt-2 text-slate-700">Por la propiedad de rectas paralelas cortadas por una transversal, el ángulo de depresión de un observador hacia un objeto es exactamente congruente con el ángulo de elevación del objeto hacia el observador.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmula Clave de Altura</p><p class="text-xs font-mono font-bold text-primary">tan(&theta;) = Altura / Distancia</p><p class="text-xs text-slate-550">Despeje: Altura = Distancia &bull; tan(&theta;).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ÁNGULOS VISUALES</text><line x1="40" y1="95" x2="220" y2="95" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" /><text x="35" y="98" font-size="8" fill="#64748b" text-anchor="end">Horizontal</text><line x1="40" y1="95" x2="220" y2="35" stroke="#ef4444" stroke-width="1.5" /><line x1="220" y1="95" x2="220" y2="35" stroke="#3b82f6" stroke-width="2" /><path d="M 65 95 A 25 25 0 0 0 62 87" fill="none" stroke="#ef4444" stroke-width="2" /><text x="72" y="90" font-size="8" fill="#ef4444" font-weight="bold">&theta; = 30°</text><text x="130" y="108" font-size="8" fill="#334155" text-anchor="middle">Distancia = 50m</text><text x="230" y="65" font-size="8" fill="#1e40af" font-weight="bold">H</text></svg>',
                    svgDescription: "Esquema visual de un ángulo de elevación de 30° desde un punto en el suelo hacia la cima de una torre. Se marca la distancia horizontal de 50m y la altura H como cateto opuesto.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un topógrafo en el pie del Volcán de Agua mide un ángulo de elevación de $30^\\circ$ hacia la cima de una antena de telecomunicaciones. Si el topógrafo se encuentra a una distancia horizontal de $50$ metros de la base de la antena, ¿cuál es la altura de la antena?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Dibuja la situación. Se forma un triángulo rectángulo donde el cateto adyacente es $50$ m, la altura es el cateto opuesto ($H$) y el ángulo es $30^\\circ$.</li><li><strong>Paso 2:</strong> Usa la tangente, que conecta opuesto y adyacente: $\\tan(30^\\circ) = \\frac{H}{50}$.</li><li><strong>Paso 3:</strong> Despeja $H$: $H = 50 \\times \\tan(30^\\circ)$.</li><li><strong>Paso 4:</strong> Con $\\tan(30^\\circ) \\approx 0.577$: $H = 50 \\times 0.577 = 28.85$ metros.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La altura de la antena es de <strong>28.85 metros</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Medir el ángulo de depresión respecto a la vertical:</strong> El ángulo de depresión se mide siempre hacia abajo a partir de la horizontal imaginaria, nunca pegado a la pared vertical.</li></ul>',
                    exercises: [
                        {
                            question: "Si el ángulo de elevación de un cometa es 45° y la longitud del hilo estirado es de 20 metros, calcula la altura aproximada del cometa en metros. (Pista: el hilo es la hipotenusa, sen(45°) ≈ 0.707. Ingresa decimal con punto, ej: 14.14):",
                            correctAnswer: "14.14",
                            hint: "Usa la función seno: sen(45°) = Altura / Hilo. Altura = 20 * sen(45°).",
                            feedbackCorrect: "¡Excelente! Altura = 20 * 0.7071 = 14.14 metros.",
                            feedbackIncorrect: "Incorrecto. Altura = 20 * sen(45°) = 20 * 0.707 = 14.14 metros.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Desde un faro a 60 metros sobre el nivel del mar, el ángulo de depresión a un barco es de 30°. ¿Cuál es la distancia horizontal al barco en metros? (tan(30°) ≈ 0.577. Ingresa decimal con punto, ej: 103.97):",
                            correctAnswer: "103.97",
                            hint: "El ángulo de depresión de 30° es igual al de elevación desde el barco. Plantea tan(30°) = 60 / Distancia. Distancia = 60 / tan(30°).",
                            feedbackCorrect: "¡Excelente! Distancia = 60 / 0.5773 = 103.97 metros.",
                            feedbackIncorrect: "Incorrecto. Distancia = 60 / tan(30°) = 60 / 0.5773 = 103.97 metros.",
                            difficulty: "avanzado",
                            type: "short"
                        },
                        {
                            question: "Si estás a 10 metros de un árbol y el ángulo de elevación a su copa es de exactamente 45°, ¿cuánto mide la altura del árbol en metros? (Ingresa solo el número entero):",
                            correctAnswer: "10",
                            hint: "Recuerda que tan(45°) = 1. Plantea tan(45°) = Altura / 10.",
                            feedbackCorrect: "¡Excelente! Como el ángulo es de 45°, el triángulo es isósceles. La altura es igual a la distancia: 10 metros.",
                            feedbackIncorrect: "Incorrecto. tan(45°) = 1, por ende Altura = 10 * 1 = 10 metros.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un observador en un globo aerostático mira un punto en el suelo con un ángulo de depresión de 20°. ¿Qué ángulo de elevación tendrá el punto en el suelo hacia el globo?",
                            options: [
                                "20°",
                                "70°",
                                "90°",
                                "160°"
                            ],
                            correctAnswer: 0,
                            hint: "Aplica la propiedad de ángulos alternos internos entre paralelas formadas por la horizontal del globo y la del suelo.",
                            feedbackCorrect: "¡Perfecto! Por paralelismo, el ángulo de depresión es idéntico al ángulo de elevación: 20°.",
                            feedbackIncorrect: "Incorrecto. Ambos ángulos son de igual magnitud debido a la propiedad de alternos internos: 20°.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Una rampa de carga mide 10 metros de largo y se eleva a una altura vertical de 5 metros. ¿Cuál es el ángulo de inclinación de la rampa en grados?",
                            options: [
                                "30°",
                                "45°",
                                "60°",
                                "90°"
                            ],
                            correctAnswer: 0,
                            hint: "La altura es el cateto opuesto (5) y el largo de la rampa es la hipotenusa (10). Calcula sen(x) = 5/10 = 0.5.",
                            feedbackCorrect: "¡Excelente! sen(x) = 0.5, el cual corresponde a un ángulo notable de 30°.",
                            feedbackIncorrect: "Incorrecto. sen(x) = 5/10 = 0.5. El ángulo cuyo seno vale 0.5 es 30°.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Los ángulos de elevación y depresión formalizan visualizaciones direccionales que se resuelven de forma directa mediante proporciones trigonométricas de triángulos rectángulos.",
                    videoPlaceholderText: "Video de Trigonometría: Ejercicios típicos de ángulos de elevación y depresión."
                }
            ]
        },
        {
            title: "Unidad 2: Círculo Unitario y Funciones Trigonométricas",
            lessons: [
                {
                    id: "circulo-unitario-radianes",
                    title: "Lección 2.1: El Círculo Unitario y Radianes",
                    introduction: "Descubre el círculo de radio 1 que permite expandir las funciones trigonométricas a cualquier ángulo de la recta real.",
                    explanationHtml: '<p>El <strong>círculo unitario</strong> es un círculo con radio $r = 1$ centrado en el origen del plano cartesiano $(0,0)$. Todo punto $P(x,y)$ sobre su circunferencia cumple con la ecuación del círculo $x^2 + y^2 = 1$.</p><p class="mt-2">Si trazamos un rayo desde el origen que forme un ángulo $\\theta$ con el eje $x$ positivo, las coordenadas cartesianas del punto $P$ se definen exactamente como:</p><p class="text-center font-mono font-bold text-primary my-2">x = cos(&theta;) &nbsp;|&nbsp; y = sen(&theta;)</p><p class="mt-3"><strong>Los Radianes:</strong> Unidad de medida angular basada en la longitud del arco del círculo unitario. Una vuelta completa a la circunferencia ($360^\\circ$) equivale a $2\\pi$ radianes. Para convertir grados a radianes, multiplicamos por $\\frac{\\pi}{180^\\circ}$.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmulas de Conversión Angular</p><p class="text-xs font-mono font-bold text-primary">Radianes = Grados &bull; &pi; / 180</p><p class="text-xs font-mono font-bold text-primary">Grados = Radianes &bull; 180 / &pi;</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">CÍRCULO UNITARIO (r = 1)</text><circle cx="100" cy="70" r="38" fill="none" stroke="#3b82f6" stroke-width="1.5" /><line x1="55" y1="70" x2="145" y2="70" stroke="#64748b" stroke-width="1" /><line x1="100" y1="25" x2="100" y2="115" stroke="#64748b" stroke-width="1" /><line x1="100" y1="70" x2="127" y2="43" stroke="#ef4444" stroke-width="1.5" /><circle cx="127" cy="43" r="2.5" fill="#ef4444" /><text x="135" y="40" font-size="8" fill="#ef4444" font-weight="bold">P(cos &theta;, sen &theta;)</text><text x="210" y="55" font-size="9" fill="#1e40af" font-weight="bold">Ecuación Círculo:</text><text x="210" y="67" font-size="9" fill="#334155" font-weight="bold">x² + y² = 1</text><text x="210" y="85" font-size="9" fill="#059669" font-weight="bold">180° = &pi; Radianes</text></svg>',
                    svgDescription: "El círculo unitario de radio 1 graficado en el plano cartesiano. Muestra un radio que define un punto P con coordenadas (cos teta, sen teta) en el primer cuadrante.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Convierte un ángulo notable de $60^\\circ$ a radianes exactos en términos de $\\pi$.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Usa la fórmula de conversión de grados a radianes: $\\text{Radianes} = \\text{Grados} \\times \\frac{\\pi}{180^\\circ}$.</li><li><strong>Paso 2:</strong> Reemplaza los grados: $\\text{Radianes} = 60^\\circ \\times \\frac{\\pi}{180^\\circ}$.</li><li><strong>Paso 3:</strong> Simplifica la fracción dividiendo numerador y denominador entre 60: <br>$$\\frac{60}{180} = \\frac{1}{3}$$</li><li><strong>Paso 4:</strong> Expresa el resultado final: $\\frac{\\pi}{3}$ radianes.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> $60^\\circ$ equivale exactamente a <strong>&pi;/3 radianes</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir la equivalencia básica:</strong> Pensar que $360^\\circ = \\pi$ en lugar de $2\\pi$. Recuerda: $\\pi$ radianes equivale exactamente a media vuelta ($180^\\circ$).</li></ul>',
                    exercises: [
                        {
                            question: "Convierte un ángulo de 90° a radianes. Escribe la respuesta exacta en minúsculas sin espacios (ej: pi/2 o pi/3):",
                            correctAnswer: "pi/2",
                            hint: "Divide 90 entre 180 y simplifica la fracción. Acompáñala de pi en el numerador.",
                            feedbackCorrect: "¡Excelente! 90° / 180° * pi = pi/2 radianes.",
                            feedbackIncorrect: "Incorrecto. 90/180 simplifica a 1/2, por ende queda 'pi/2'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Convierte pi/4 radianes a grados sexagesimales. (Ingresa solo el número entero):",
                            correctAnswer: "45",
                            hint: "Sustituye pi por 180° en la fracción y divide 180 entre 4.",
                            feedbackCorrect: "¡Perfecto! 180° / 4 = 45°.",
                            feedbackIncorrect: "Incorrecto. pi radianes = 180°. 180 / 4 = 45 grados.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuál de los siguientes puntos en el plano cartesiano pertenece de forma exacta a la circunferencia del círculo unitario?",
                            options: [
                                "(1, 1)",
                                "(0.5, 0.5)",
                                "(0, -1)",
                                "(2, 0)"
                            ],
                            correctAnswer: 2,
                            hint: "El punto debe cumplir rigurosamente la ecuación x^2 + y^2 = 1. Eleva al cuadrado las coordenadas y evalúa.",
                            feedbackCorrect: "¡Excelente! 0² + (-1)² = 0 + 1 = 1. Pertenece al círculo unitario (en el eje y negativo).",
                            feedbackIncorrect: "Incorrecto. Solamente (0, -1) cumple x² + y² = 1.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿En qué cuadrante del plano cartesiano la coordenada x (coseno) es negativa y la coordenada y (seno) es positiva?",
                            options: [
                                "Primer Cuadrante",
                                "Segundo Cuadrante",
                                "Tercer Cuadrante",
                                "Cuarto Cuadrante"
                            ],
                            correctAnswer: 1,
                            hint: "Coseno es negativo a la izquierda del eje y. Seno es positivo arriba del eje x. Ubica la intersección.",
                            feedbackCorrect: "¡Perfecto! En el segundo cuadrante, x es negativa y y es positiva.",
                            feedbackIncorrect: "Incorrecto. En el segundo cuadrante el coseno es negativo y el seno es positivo.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el valor exacto de sen(270°) utilizando las propiedades del círculo unitario. (Ingresa solo el número entero, incluyendo signo si aplica):",
                            correctAnswer: "-1",
                            hint: "El ángulo de 270° apunta directo hacia abajo en el eje y negativo. Recuerda que sen(teta) es la coordenada y.",
                            feedbackCorrect: "¡Perfecto! El punto es (0, -1) en el círculo unitario, por lo que la coordenada y es -1.",
                            feedbackIncorrect: "Incorrecto. A 270°, el punto es (0, -1); por lo tanto, el seno es -1.",
                            difficulty: "avanzado",
                            type: "short"
                        }
                    ],
                    summaryHtml: "El círculo unitario modela las funciones trigonométricas convirtiéndolas en coordenadas del plano real, permitiendo su definición matemática para ángulos de cualquier magnitud y signo.",
                    videoPlaceholderText: "Video de Trigonometría: El círculo unitario explicado paso a paso y de forma fácil."
                },
                {
                    id: "identidades-trigonometricas-pitagoricas",
                    title: "Lección 2.2: Identidades Trigonométricas Pitagóricas",
                    introduction: "Aprende las identidades que simplifican demostraciones y ecuaciones trigonométricas complejas.",
                    explanationHtml: '<p>Las <strong>identidades trigonométricas</strong> son igualdades matemáticas que se cumplen para cualquier ángulo. Las <strong>identidades pitagóricas</strong> provienen directamente del Teorema de Pitágoras aplicado en el círculo unitario ($x^2 + y^2 = 1$):</p><p class="mt-2 font-mono font-bold text-slate-800">1. Identidad Pitagórica Fundamental:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">sen²(&theta;) + cos²(&theta;) = 1</p><p class="mt-3">A partir de esta, dividiendo toda la ecuación entre $\\cos^2(\\theta)$ o $\\operatorname{sen}^2(\\theta)$, deducimos otras dos identidades secundarias:</p><p class="text-center font-mono font-extrabold text-primary my-2">2. &nbsp; 1 + tan²(&theta;) = sec²(&theta;)</p><p class="text-center font-mono font-extrabold text-primary my-2">3. &nbsp; 1 + cot²(&theta;) = csc²(&theta;)</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Identidades Pitagóricas Derivadas</p><p class="text-xs font-mono font-bold text-primary">sen&sup2; = 1 - cos&sup2; &nbsp;|&nbsp; cos&sup2; = 1 - sen&sup2;</p><p class="text-xs text-slate-500">Útiles para transformar funciones de seno a coseno y viceversa en ecuaciones de física.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">IDENTIDADES PITAGÓRICAS</text><rect x="25" y="38" width="250" height="65" fill="#eff6ff" stroke="#bfdbfe" rx="8" /><text x="150" y="58" font-size="14" font-family="monospace" fill="#1e40af" font-weight="bold" text-anchor="middle">sen²&theta; + cos²&theta; = 1</text><text x="150" y="80" font-size="9" font-family="sans-serif" fill="#2563eb" text-anchor="middle">1 + tan²&theta; = sec²&theta; &nbsp;|&nbsp; 1 + cot²&theta; = csc²&theta;</text></svg>',
                    svgDescription: "Esquema tipográfico que destaca en grande la identidad pitagórica fundamental sen²teta + cos²teta = 1 y sus dos fórmulas derivadas de secante y cosecante.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Si sabemos que el $\\cos(\\theta) = \\frac{4}{5}$ en el primer cuadrante, calcula de forma exacta el valor de $\\operatorname{sen}(\\theta)$ utilizando la identidad pitagórica fundamental.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Plantea la identidad pitagórica: $\\operatorname{sen}^2(\\theta) + \\cos^2(\\theta) = 1$.</li><li><strong>Paso 2:</strong> Despeja el término de seno cuadrado: $\\operatorname{sen}^2(\\theta) = 1 - \\cos^2(\\theta)$.</li><li><strong>Paso 3:</strong> Sustituye el valor del coseno: $\\operatorname{sen}^2(\\theta) = 1 - \\left(\\frac{4}{5}\\right)^2 = 1 - \\frac{16}{25}$.</li><li><strong>Paso 4:</strong> Resta las fracciones: $\\operatorname{sen}^2(\\theta) = \\frac{25}{25} - \\frac{16}{25} = \\frac{9}{25}$.</li><li><strong>Paso 5:</strong> Extrae raíz cuadrada en ambos lados (positiva por ser primer cuadrante): $\\operatorname{sen}(\\theta) = \\sqrt{\\frac{9}{25}} = \\frac{3}{5}$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El valor de $\\operatorname{sen}(\\theta)$ es de exactamente <strong>3/5 (o 0.6)</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar elevar las funciones al cuadrado:</strong> Sumar $\\operatorname{sen}(\\theta) + \\cos(\\theta) = 1$. ¡Totalmente falso! La identidad solo se cumple con los cuadrados de las funciones.</li></ul>',
                    exercises: [
                        {
                            question: "Si sen(x) = 0.6 en el primer cuadrante, calcula cos(x) usando la identidad fundamental: (Ingresa solo el número decimal con punto):",
                            correctAnswer: "0.8",
                            hint: "Despeja cos^2(x) = 1 - sen^2(x) = 1 - 0.36 = 0.64. Luego saca la raíz de 0.64.",
                            feedbackCorrect: "¡Excelente! cos(x) = sqrt(0.64) = 0.8.",
                            feedbackIncorrect: "Incorrecto. cos²(x) = 1 - 0.6² = 0.64, por lo que cos(x) = 0.8.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Simplifica algebraicamente la expresión trigonométrica: (1 - sen²(A)) / cos²(A). (Ingresa solo el número entero):",
                            correctAnswer: "1",
                            hint: "Sustituye el numerador (1 - sen^2(A)) por su equivalente según la identidad pitagórica, que es cos^2(A).",
                            feedbackCorrect: "¡Perfecto! cos²(A) / cos²(A) = 1.",
                            feedbackIncorrect: "Incorrecto. Por identidad fundamental 1 - sen²(A) = cos²(A). Dividido entre cos²(A) da 1.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuál de las siguientes igualdades es la simplificación correcta para la expresión: sec²(&theta;) - tan²(&theta;)?",
                            options: [
                                "0",
                                "1",
                                "sen²(&theta;)",
                                "cos²(&theta;)"
                            ],
                            correctAnswer: 1,
                            hint: "Parte de la identidad pitagórica secundaria: 1 + tan²(x) = sec²(x). Despeja restando tan²(x) en ambos lados.",
                            feedbackCorrect: "¡Excelente! sec²(x) - tan²(x) = 1. Es otra forma de la identidad secundaria.",
                            feedbackIncorrect: "Incorrecto. Dado que 1 + tan²(x) = sec²(x), al restar tan²(x) obtenemos 1.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si sabemos que cot²(y) = 3, calcula el valor exacto de la cosecante cuadrada csc²(y) usando identidades. (Ingresa solo el número entero):",
                            correctAnswer: "4",
                            hint: "Usa la identidad pitagórica 1 + cot²(y) = csc²(y). Suma 1 a 3.",
                            feedbackCorrect: "¡Perfecto! csc²(y) = 1 + 3 = 4.",
                            feedbackIncorrect: "Incorrecto. csc²(y) = 1 + cot²(y) = 1 + 3 = 4.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Demuestra a qué equivale la expresión: cos(&theta;) &bull; tan(&theta;).",
                            options: [
                                "1",
                                "sen(&theta;)",
                                "sec(&theta;)",
                                "cot(&theta;)"
                            ],
                            correctAnswer: 1,
                            hint: "Sustituye la tangente por su identidad de cociente: tan(x) = sen(x) / cos(x). Luego simplifica.",
                            feedbackCorrect: "¡Excelente! cos(x) * (sen(x) / cos(x)) cancela los cosenos, dando sen(x).",
                            feedbackIncorrect: "Incorrecto. tan = sen/cos. Multiplicada por cos se cancela el coseno, dejando únicamente el seno.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Las identidades pitagóricas simplifican formulaciones de variables complejas al convertirlas en igualdades de constantes en trigonometría.",
                    videoPlaceholderText: "Video de Trigonometría: Demostración y memorización rápida de identidades pitagóricas."
                },
                {
                    id: "graficas-funciones-trigonometricas",
                    title: "Lección 2.3: Gráficas de las Funciones Seno, Coseno y Tangente",
                    introduction: "Aprende a reconocer y analizar las ondas periódicas de las tres principales funciones trigonométricas.",
                    explanationHtml: '<p>Al graficar las funciones trigonométricas con el ángulo en el eje horizontal ($x$, expresado en radianes) y la razón en el eje vertical ($y$), se obtienen patrones repetitivos llamados <strong>gráficas periódicas</strong>:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Función Seno ($y = \\operatorname{sen} x$):</strong> Una onda suave continua (sinusoide). Pasa por el origen $(0,0)$. Su período es $2\\pi$ y su amplitud oscila estrictamente entre $-1$ y $1$.</li><li><strong>Función Coseno ($y = \\cos x$):</strong> Onda idéntica a la del seno pero desplazada hacia la izquierda en $\\pi/2$ radianes (desfase). Parte del punto máximo $(0,1)$ en el eje $y$.</li><li><strong>Función Tangente ($y = \\tan x$):</strong> Gráfica discontinua que tiene líneas verticales llamadas **asíntotas** cada $\\pi$ radianes (donde el coseno vale cero y la división se indefine). Su período es $\\pi$ y su rango abarca desde $-\\infty$ hasta $+\\infty$.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Propiedades de las Ondas</p><p class="text-xs font-mono font-bold text-primary">Periodo de sen/cos = 2&pi; &nbsp;|&nbsp; Periodo de tan = &pi;</p><p class="text-xs text-slate-500">Amplitud de sen/cos = 1. Rango de tan = (-&infin;, +&infin;).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ONDAS SENO Y COSENO (0 a 2&pi;)</text><line x1="30" y1="70" x2="270" y2="70" stroke="#64748b" stroke-width="1" /><line x1="40" y1="20" x2="40" y2="110" stroke="#64748b" stroke-width="1" /><path d="M 40 70 Q 95 20 150 70 T 260 70" fill="none" stroke="#10b981" stroke-width="2" /><text x="210" y="38" font-size="8" fill="#047857" font-weight="bold">y = sen(x)</text><path d="M 40 30 Q 95 120 150 70 T 260 30" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2" /><text x="210" y="52" font-size="8" fill="#d97706" font-weight="bold">y = cos(x)</text><text x="40" y="70" font-size="7" fill="#64748b" text-anchor="end">0</text><text x="150" y="82" font-size="7" fill="#64748b" text-anchor="middle">&pi;</text><text x="260" y="82" font-size="7" fill="#64748b" text-anchor="middle">2&pi;</text></svg>',
                    svgDescription: "Gráfica superpuesta de las ondas de seno (verde continua) y coseno (naranja punteada) desde 0 hasta 2pi radianes, ilustrando el desfase relativo entre ambas.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Identifica el valor del período y los puntos de cruce con el eje horizontal de la función $y = \\operatorname{sen} x$ en el intervalo $[0, 2\\pi]$.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> La onda del seno completa un ciclo completo de subida y bajada entre $0$ y $2\\pi$. Por lo tanto, su período es $2\\pi$ radianes.</li><li><strong>Paso 2:</strong> Analiza dónde corta la curva el eje horizontal (donde $y = 0$).</li><li><strong>Paso 3:</strong> La función vale cero en tres puntos específicos de este ciclo: $x = 0$, $x = \\pi$ (medio ciclo) y $x = 2\\pi$ (final de ciclo).</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> Período $= 2\\pi$. Cruces en $x = 0, \\pi, 2\\pi$.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Creer que la tangente llega a 1 como máximo:</strong> La tangente no está limitada como el seno y el coseno. Sube y baja infinitamente sin tocar las asíntotas.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cuál es la amplitud máxima de la función básica y = cos(x)? (Ingresa solo el número entero):",
                            correctAnswer: "1",
                            hint: "La amplitud es el desplazamiento máximo desde la línea central (cero) hasta su pico. Coseno oscila entre -1 y +1.",
                            feedbackCorrect: "¡Excelente! La amplitud de la función coseno pura es exactamente 1.",
                            feedbackIncorrect: "Incorrecto. Coseno tiene una amplitud de 1 (oscila de -1 a 1).",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el período completo en radianes de la función y = tan(x)?",
                            options: [
                                "pi/2",
                                "pi",
                                "2pi",
                                "Infinito"
                            ],
                            correctAnswer: 1,
                            hint: "La tangente se repite mucho más rápido que el seno y el coseno. Corta el eje horizontal en cada pi.",
                            feedbackCorrect: "¡Excelente! El período de la función tangente es exactamente pi radianes.",
                            feedbackIncorrect: "Incorrecto. El período de la tangente es pi; el del seno y coseno es 2pi.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Si evaluamos la función y = sen(x) en el valor exacto x = pi/2 radianes (90°), ¿qué resultado vertical se obtiene? (Ingresa solo el número entero):",
                            correctAnswer: "1",
                            hint: "A 90° la coordenada vertical y en el círculo unitario alcanza su punto máximo positivo.",
                            feedbackCorrect: "¡Perfecto! sen(pi/2) = 1.",
                            feedbackIncorrect: "Incorrecto. El seno alcanza su valor máximo de 1 a pi/2 radianes (90°).",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cómo se denominan las líneas verticales imaginarias en la gráfica de la tangente donde la función no está definida y la curva se dispara al infinito?",
                            options: [
                                "Vértices",
                                "Asíntotas",
                                "Intersecciones",
                                "Parábolas"
                            ],
                            correctAnswer: 1,
                            hint: "Son líneas que la curva se aproxima infinitamente sin llegar a tocarlas jamás.",
                            feedbackCorrect: "¡Perfecto! Se denominan asíntotas verticales y ocurren donde cos(x) = 0.",
                            feedbackIncorrect: "Incorrecto. Se llaman asíntotas verticales.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Si evaluamos y = cos(0), ¿qué valor se obtiene en el eje y? (Ingresa solo el número entero):",
                            correctAnswer: "1",
                            hint: "Coseno de cero representa el punto de inicio de la onda sobre el eje y. Piensa en la coordenada x a 0°.",
                            feedbackCorrect: "¡Excelente! cos(0) = 1. La onda del coseno parte de su altura máxima.",
                            feedbackIncorrect: "Incorrecto. cos(0) = 1. (sen(0) es 0).",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Las gráficas trigonométricas modelan ondas oscilatorias periódicas continuas y discontinuas que describen fenómenos físicos como el sonido, la luz y las corrientes eléctricas.",
                    videoPlaceholderText: "Video de Trigonometría: Graficando seno, coseno y tangente de forma interactiva."
                }
            ]
        },
        {
            title: "Unidad 3: Resolución de Triángulos Oblicuángulos y Leyes Fundamentales",
            lessons: [
                {
                    id: "ley-de-senos",
                    title: "Lección 3.1: Ley de Senos",
                    introduction: "Aprende a resolver triángulos que no tienen un ángulo recto (oblicuángulos) utilizando proporcionalidades angulares.",
                    explanationHtml: '<p>Un triángulo <strong>oblicuángulo</strong> es aquel que no posee ningún ángulo recto (de $90^\\circ$). Para resolverlos (encontrar lados o ángulos desconocidos) no podemos usar Pitágoras ni razones directas; requerimos leyes especiales.</p><p>La <strong>Ley de Senos</strong> establece que en cualquier triángulo, las longitudes de los lados son proporcionales a los senos de sus respectivos ángulos opuestos:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\frac{a}{\\operatorname{sen} A} = \\frac{b}{\\operatorname{sen} B} = \\frac{c}{\\operatorname{sen} C}$$</p><p class="mt-2 font-bold text-slate-800">¿Cuándo se debe aplicar?</p><ul class="list-disc pl-5 space-y-1.5 my-2"><li>Cuando se conocen <strong>dos ángulos y cualquier lado</strong> (caso ALA o AAL).</li><li>Cuando se conocen <strong>dos lados y el ángulo opuesto a uno de ellos</strong> (caso LLA).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ley de Senos</p><p class="text-xs font-mono font-bold text-primary">a / sen(A) = b / sen(B) = c / sen(C)</p><p class="text-xs text-slate-550">Recuerda: Los lados en minúsculas (a, b, c) se oponen directamente a los ángulos en mayúsculas (A, B, C).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">LEY DE SENOS (OBLICUÁNGULO)</text><polygon points="50,95 240,95 180,35" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" /><text x="40" y="98" font-size="9" fill="#1e40af" font-weight="bold">A</text><text x="250" y="98" font-size="9" fill="#1e40af" font-weight="bold">B</text><text x="180" y="28" font-size="9" fill="#1e40af" font-weight="bold">C</text><text x="145" y="105" font-size="8" fill="#64748b" text-anchor="middle">Lado c</text><text x="218" y="65" font-size="8" fill="#64748b" text-anchor="middle">Lado a</text><text x="105" y="65" font-size="8" fill="#64748b" text-anchor="middle">Lado b</text></svg>',
                    svgDescription: "Un triángulo oblicuángulo con los tres vértices marcados en mayúsculas (A, B, C) y sus lados correspondientes opuestos marcados en minúsculas (a, b, c).",
                    workedExampleHtml: '<p><strong>Problema:</strong> En un triángulo oblicuángulo, el ángulo $A$ mide $30^\\circ$, el ángulo $B$ mide $45^\\circ$ y el lado $a$ mide $10$ cm. Calcula la longitud del lado $b$.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica los datos. $A = 30^\\circ$, $B = 45^\\circ$, $a = 10$. Queremos hallar $b$. Es aplicable la Ley de Senos.</li><li><strong>Paso 2:</strong> Escribe la proporción correspondiente: <br>$$\\frac{a}{\\operatorname{sen} A} = \\frac{b}{\\operatorname{sen} B}$$</li><li><strong>Paso 3:</strong> Sustituye las medidas conocidas: <br>$$\\frac{10}{\\operatorname{sen}(30^\\circ)} = \\frac{b}{\\operatorname{sen}(45^\\circ)}$$</li><li><strong>Paso 4:</strong> Con $\\operatorname{sen}(30^\\circ) = 0.5$ y $\\operatorname{sen}(45^\\circ) \\approx 0.707$: <br>$$\\frac{10}{0.5} = \\frac{b}{0.707} \\Rightarrow 20 = \\frac{b}{0.707}$$</li><li><strong>Paso 5:</strong> Despeja $b$ multiplicando: $b = 20 \\times 0.707 = 14.14$ cm.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El lado b mide aproximadamente <strong>14.14 cm</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Emparejar mal lados y ángulos:</strong> Colocar en la proporción un lado dividido entre el seno de un ángulo no opuesto. $a$ siempre se opone a $A$; $b$ a $B$; $c$ a $C$.</li></ul>',
                    exercises: [
                        {
                            question: "En un triángulo, A = 30°, B = 45°, y a = 10. Calcula el lado b aproximado. (Ingresa decimal con punto, ej: 14.14):",
                            correctAnswer: "14.14",
                            hint: "Plantea a/sen(A) = b/sen(B). b = (10 * sen(45°)) / sen(30°). sen(45°) ≈ 0.707, sen(30°) = 0.5.",
                            feedbackCorrect: "¡Excelente! b = (10 * 0.7071) / 0.5 = 14.14 cm.",
                            feedbackIncorrect: "Incorrecto. Queda (10 * 0.707) / 0.5 = 14.14.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si en un triángulo, el lado a = 8 cm y sen(A) = 0.4. Si el lado b = 10 cm, ¿cuánto vale sen(B)? (Ingresa el número decimal con punto):",
                            correctAnswer: "0.5",
                            hint: "Usa la ley de senos: 8 / 0.4 = 10 / sen(B). Despeja sen(B) = (10 * 0.4) / 8.",
                            feedbackCorrect: "¡Excelente! sen(B) = 4 / 8 = 0.5.",
                            feedbackIncorrect: "Incorrecto. sen(B) = (10 * 0.4) / 8 = 4 / 8 = 0.5.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Bajo cuál de las siguientes condiciones es estrictamente imposible aplicar de forma directa la Ley de Senos?",
                            options: [
                                "Conocemos dos ángulos y un lado.",
                                "Conocemos dos lados y el ángulo opuesto a uno de ellos.",
                                "Conocemos los tres lados del triángulo pero ningún ángulo interno.",
                                "Conocemos dos ángulos y el lado comprendido entre ellos."
                            ],
                            correctAnswer: 2,
                            hint: "Para aplicar la ley de senos necesitas al menos un par completo de lado y su ángulo opuesto. Si no tienes ningún ángulo, no tienes ningún seno.",
                            feedbackCorrect: "¡Excelente! Al conocer únicamente los tres lados (LLL), se indefine la ley de senos y es obligatorio utilizar la Ley de Cosenos.",
                            feedbackIncorrect: "Incorrecto. Si conoces solo los tres lados, no puedes usar ley de senos; debes usar ley de cosenos.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "En un triángulo, el lado c mide 6 m y el ángulo C mide 90°. ¿Cuál es la razón de proporcionalidad c/sen(C)? (Ingresa solo el número entero):",
                            correctAnswer: "6",
                            hint: "Calcula sen(90°). Recuerda que sen(90°) = 1. Divide c entre 1.",
                            feedbackCorrect: "¡Perfecto! c / sen(90°) = 6 / 1 = 6.",
                            feedbackIncorrect: "Incorrecto. sen(90°) = 1, por lo que la proporción es 6 / 1 = 6.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si la suma de dos ángulos de un triángulo es 120°, ¿cuánto vale el seno del tercer ángulo?",
                            options: [
                                "0.5",
                                "0.866",
                                "1.0",
                                "0.707"
                            ],
                            correctAnswer: 1,
                            hint: "El tercer ángulo debe completar los 180°. Resta 180 - 120 = 60°. Luego calcula sen(60°).",
                            feedbackCorrect: "¡Excelente! El ángulo restante mide 60°. El sen(60°) es aproximado a 0.866.",
                            feedbackIncorrect: "Incorrecto. Tercer ángulo = 60°. sen(60°) ≈ 0.866.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La Ley de Senos permite resolver triángulos oblicuángulos estableciendo proporciones racionales de congruencia entre lados y sus ángulos opuestos.",
                    videoPlaceholderText: "Video de Trigonometría: Cuándo y cómo aplicar la Ley de Senos con ejercicios."
                },
                {
                    id: "ley-de-cosenos",
                    title: "Lección 3.2: Ley de Cosenos",
                    introduction: "Descubre la ley que generaliza el Teorema de Pitágoras para cualquier tipo de triángulo oblicuángulo.",
                    explanationHtml: '<p>La <strong>Ley de Cosenos</strong> es una herramienta potente que generaliza el Teorema de Pitágoras para abarcar cualquier tipo de triángulo (incluyendo oblicuángulos). Establece que el cuadrado de un lado es igual a la suma de los cuadrados de los otros dos lados, menos el doble producto de estos lados por el coseno del ángulo comprendido entre ellos:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">c² = a² + b² - 2ab cos(C)</p><p class="mt-3">También podemos plantearla para los otros lados:</p><ul class="list-disc pl-5 space-y-1 my-2"><li>$a^2 = b^2 + c^2 - 2bc \\cos(A)$</li><li>$b^2 = a^2 + c^2 - 2ac \\cos(B)$</li></ul><p class="mt-2 font-bold text-slate-800">¿Cuándo se debe aplicar?</p><ul class="list-disc pl-5 space-y-1.5 my-2"><li>Cuando se conocen <strong>dos lados y el ángulo comprendido</strong> entre ellos (caso LAL).</li><li>Cuando se conocen <strong>los tres lados</strong> y ningún ángulo (caso LLL).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ley de Cosenos</p><p class="text-xs font-mono font-bold text-primary">c&sup2; = a&sup2; + b&sup2; - 2ab cos(C)</p><p class="text-xs text-slate-500">Si C = 90&deg;, cos(90&deg;) = 0 &rArr; c&sup2; = a&sup2; + b&sup2; (se convierte en Pitágoras).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">LEY DE COSENOS (CASO L-A-L)</text><polygon points="60,95 240,95 180,35" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" /><path d="M 75 95 A 15 15 0 0 0 70 85" fill="none" stroke="#ef4444" stroke-width="1.5" /><text x="80" y="90" font-size="8" fill="#ef4444" font-weight="bold">C = 60°</text><text x="105" y="60" font-size="8" fill="#1e40af" font-weight="bold">a = 10 cm</text><text x="210" y="60" font-size="8" fill="#d97706" font-weight="bold">b = 12 cm</text><text x="150" y="105" font-size="8" fill="#047857" font-weight="bold" text-anchor="middle">Lado c descon.</text></svg>',
                    svgDescription: "Un triángulo oblicuángulo que resalta un ángulo de 60° y sus dos lados adyacentes de 10 y 12 cm, mostrando que el lado opuesto c se calcula con la Ley de Cosenos.",
                    workedExampleHtml: '<p><strong>Problema:</strong> En un triángulo, los lados $a$ y $b$ miden $10$ cm y $12$ cm respectivamente, y el ángulo $C$ comprendido entre ellos mide $60^\\circ$. Calcula el lado $c$.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica que tienes el caso Lado-Ángulo-Lado (LAL). Aplica la Ley de Cosenos: <br>$c^2 = a^2 + b^2 - 2ab \\cos(C)$.</li><li><strong>Paso 2:</strong> Reemplaza con los valores conocidos: <br>$c^2 = 10^2 + 12^2 - 2(10)(12)\\cos(60^\\circ)$.</li><li><strong>Paso 3:</strong> Opera los cuadrados y la multiplicación: <br>$c^2 = 100 + 144 - 240 \\cos(60^\\circ) = 244 - 240 \\cos(60^\\circ)$.</li><li><strong>Paso 4:</strong> Con $\\cos(60^\\circ) = 0.5$: <br>$c^2 = 244 - 240(0.5) = 244 - 120 = 124$.</li><li><strong>Paso 5:</strong> Extrae la raíz cuadrada de $124$: <br>$c = \\sqrt{124} \\approx 11.14$ cm.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La longitud del lado c es de aproximadamente <strong>11.14 cm</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar restar el último término:</strong> Resolver la ecuación como $a^2 + b^2 + 2ab \\cos(C)$. Recuerda que la fórmula exige una resta: $-2ab \\cos(C)$.</li><li><strong>Hacer mal el orden de operaciones:</strong> Operar $(a^2 + b^2 - 2ab) \\times \\cos(C)$. ¡Error fatal! La multiplicación de $2ab \\cos(C)$ debe resolverse antes de restarla de la suma de los cuadrados.</li></ul>',
                    exercises: [
                        {
                            question: "Calcula c² si a = 3, b = 4, y el ángulo comprendido C mide 60°. (cos(60°) = 0.5. Ingresa solo el número entero):",
                            correctAnswer: "13",
                            hint: "Aplica c² = 3² + 4² - 2(3)(4)cos(60°). Desarrolla los términos uno a uno respetando la prioridad de la multiplicación.",
                            feedbackCorrect: "¡Excelente! c² = 9 + 16 - 24(0.5) = 25 - 12 = 13.",
                            feedbackIncorrect: "Incorrecto. c² = 9 + 16 - 24(0.5) = 25 - 12 = 13.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si los tres lados de un triángulo miden a = 5, b = 5, y c = 5 (triángulo equilátero), calcula cos(C) usando la ley de cosenos. (Ingresa decimal con punto, ej: 0.5):",
                            correctAnswer: "0.5",
                            hint: "Usa c² = a² + b² - 2ab cos(C). Plantea 25 = 25 + 25 - 50 cos(C). Despeja cos(C).",
                            feedbackCorrect: "¡Excelente! 25 = 50 - 50 cos(C) => 50 cos(C) = 25 => cos(C) = 0.5.",
                            feedbackIncorrect: "Incorrecto. cos(C) = (5² + 5² - 5²) / (2*5*5) = 25 / 50 = 0.5.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Bajo qué caso de resolución de triángulos es mandatorio aplicar la Ley de Cosenos por no poderse usar la Ley de Senos?",
                            options: [
                                "Conocemos dos lados y el ángulo opuesto a uno de ellos.",
                                "Conocemos dos ángulos y un lado.",
                                "Conocemos dos lados y el ángulo comprendido entre ellos (LAL).",
                                "Conocemos un ángulo y su cateto opuesto."
                            ],
                            correctAnswer: 2,
                            hint: "Busca aquella combinación donde no se tenga una pareja completa de lado y ángulo opuesto para poder dividir en proporciones.",
                            feedbackCorrect: "¡Excelente! El caso Lado-Ángulo-Lado (LAL) requiere iniciar de forma obligatoria con la Ley de Cosenos.",
                            feedbackIncorrect: "Incorrecto. El caso Lado-Ángulo-Lado (LAL) exige ley de cosenos.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si en la fórmula c² = a² + b² - 2ab cos(C), evaluamos un ángulo recto C = 90°, ¿en qué teorema fundamental se convierte la ley?",
                            options: [
                                "Teorema de Tales",
                                "Teorema de Pitágoras",
                                "Teorema de Euclides",
                                "Identidad de Euler"
                            ],
                            correctAnswer: 1,
                            hint: "Recuerda que cos(90°) = 0. Multiplica ese cero por el término -2ab y mira lo que queda.",
                            feedbackCorrect: "¡Perfecto! Al valer cos(90°) = 0, el término se anula y queda a² + b² = c² (Teorema de Pitágoras).",
                            feedbackIncorrect: "Incorrecto. Se reduce exactamente al Teorema de Pitágoras ya que cos(90°) = 0.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Calcula c² si a = 5, b = 8 y el ángulo C = 90°. (Ingresa solo el número entero):",
                            correctAnswer: "89",
                            hint: "Al ser C = 90°, cos(C) = 0. Aplica el Teorema de Pitágoras directo: c² = a² + b².",
                            feedbackCorrect: "¡Perfecto! c² = 25 + 64 = 89.",
                            feedbackIncorrect: "Incorrecto. Como es un ángulo recto se convierte en Pitágoras: 5² + 8² = 25 + 64 = 89.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La Ley de Cosenos permite resolver cualquier triángulo al unificar dinámicamente las longitudes de sus tres lados con el coseno del ángulo opuesto.",
                    videoPlaceholderText: "Video de Trigonometría: Ley de Cosenos explicada de forma sencilla con ejemplos reales."
                },
                {
                    id: "area-triangulos-heron-trigonometrica",
                    title: "Lección 3.3: Área de Triángulos: Fórmula de Herón y Fórmula Trigonométrica",
                    introduction: "Aprende a calcular el área de cualquier triángulo cuando no conoces la altura vertical directa.",
                    explanationHtml: '<p>Calcular el área de un triángulo con la fórmula tradicional $\\text{Área} = \\frac{b \\times h}{2}$ requiere conocer la altura perpendicular ($h$). Si no la conocemos, tenemos dos fórmulas excelentes según los datos disponibles:</p><p class="mt-2 font-bold text-slate-800">1. Fórmula Trigonométrica del Área:</p><p class="text-slate-700">Se aplica cuando conocemos <strong>dos lados y el ángulo comprendido</strong> ($A, B, C$):</p><p class="text-center font-mono font-extrabold text-primary my-2">$$\\text{Área} = \\frac{1}{2} a b \\operatorname{sen}(C)$$</p><p class="mt-3 font-bold text-slate-800">2. Fórmula de Herón:</p><p class="text-slate-700">Se aplica cuando conocemos únicamente <strong>las longitudes de los tres lados</strong> ($a, b, c$). Primero calculamos el **semiperímetro** ($s$):</p><p class="text-center font-mono font-bold text-slate-800">$$s = \\frac{a + b + c}{2}$$</p><p class="text-slate-700">Luego aplicamos la fórmula de Herón:</p><p class="text-center font-mono font-extrabold text-primary my-2">$$\\text{Área} = \\sqrt{s(s - a)(s - b)(s - c)}$$</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmulas Avanzadas de Área</p><p class="text-xs font-mono font-bold text-primary">Trigonométrica: A = 0.5 &bull; a &bull; b &bull; sen(C)</p><p class="text-xs font-mono font-bold text-primary">Herón: A = &radic;[s(s-a)(s-b)(s-c)]</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ÁREA SIN ALTURA CONOCIDA</text><polygon points="60,95 240,95 180,35" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" /><text x="145" y="105" font-size="8" fill="#1e40af" font-weight="bold">Lado c = 8 cm</text><text x="220" y="65" font-size="8" fill="#1e40af" font-weight="bold">Lado a = 6 cm</text><text x="95" y="65" font-size="8" fill="#d97706" font-weight="bold">Lado b = 5 cm</text><text x="150" y="114" font-size="7" fill="#64748b" text-anchor="middle">Usa Herón con s = (6+5+8)/2 = 9.5</text></svg>',
                    svgDescription: "Un triángulo oblicuángulo con lados marcados de 5, 6 y 8 cm. Explica que al no tener altura se calcula con el semiperímetro de Herón.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Calcula el área de un triángulo cuyos lados miden $a = 5$ cm, $b = 6$ cm y $c = 7$ cm usando la fórmula de Herón.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Calcula el semiperímetro ($s$): <br>$$s = \\frac{a+b+c}{2} = \\frac{5+6+7}{2} = \\frac{18}{2} = 9\\text{ cm}$$</li><li><strong>Paso 2:</strong> Escribe la fórmula de Herón: <br>$$\\text{Área} = \\sqrt{s(s - a)(s - b)(s - c)}$$</li><li><strong>Paso 3:</strong> Reemplaza las variables: <br>$$\\text{Área} = \\sqrt{9(9 - 5)(9 - 6)(9 - 7)} = \\sqrt{9(4)(3)(2)}$$</li><li><strong>Paso 4:</strong> Opera la multiplicación interior: <br>$$\\text{Área} = \\sqrt{9 \\times 4 \\times 3 \\times 2} = \\sqrt{216}$$</li><li><strong>Paso 5:</strong> Calcula la raíz cuadrada de $216$: <br>$$\\text{Área} \\approx 14.70\\text{ cm}^2$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El área del triángulo es de aproximadamente <strong>14.70 cm²</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir semiperímetro con perímetro:</strong> Olvidar dividir la suma de los tres lados entre 2 antes de aplicar la fórmula de Herón, lo que arroja errores exponenciales en la raíz.</li></ul>',
                    exercises: [
                        {
                            question: "Calcula el semiperímetro (s) de un triángulo cuyos lados miden 6 cm, 8 cm y 10 cm: (Ingresa solo el número entero):",
                            correctAnswer: "12",
                            hint: "El semiperímetro es la mitad de la suma de los tres lados: s = (a + b + c) / 2.",
                            feedbackCorrect: "¡Excelente! s = (6 + 8 + 10) / 2 = 24 / 2 = 12 cm.",
                            feedbackIncorrect: "Incorrecto. Suma los lados y divide entre 2: (6 + 8 + 10) / 2 = 12.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula el área aproximada en cm² de un triángulo si a = 10 cm, b = 8 cm, y el ángulo C = 30°. (sen(30°) = 0.5. Ingresa solo el número entero):",
                            correctAnswer: "20",
                            hint: "Aplica la fórmula trigonométrica: Área = 0.5 * a * b * sen(C). Multiplica 0.5 * 10 * 8 * 0.5.",
                            feedbackCorrect: "¡Excelente! Área = 0.5 * 10 * 8 * 0.5 = 20 cm².",
                            feedbackIncorrect: "Incorrecto. Área = 0.5 * 10 * 8 * sen(30°) = 40 * 0.5 = 20.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Aplica la fórmula de Herón para hallar el área exacta en cm² de un triángulo cuyos lados miden 3 cm, 4 cm y 5 cm. (Pista: s = 6. Ingresa solo el número entero):",
                            correctAnswer: "6",
                            hint: "Con s = 6, Área = sqrt(6 * (6-3) * (6-4) * (6-5)) = sqrt(6 * 3 * 2 * 1).",
                            feedbackCorrect: "¡Perfecto! Área = sqrt(36) = 6 cm².",
                            feedbackIncorrect: "Incorrecto. Área = sqrt(6 * 3 * 2 * 1) = sqrt(36) = 6.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si en la fórmula trigonométrica del área, el ángulo C comprendido es de 90°, ¿a qué fórmula clásica se reduce la expresión?",
                            options: [
                                "Área = L²",
                                "Área = (Base * Altura) / 2",
                                "Fórmula de Herón",
                                "Teorema de Pitágoras"
                            ],
                            correctAnswer: 1,
                            hint: "Recuerda que sen(90°) = 1. Sustituye este valor en la fórmula Área = 0.5 * a * b * sen(C).",
                            feedbackCorrect: "¡Excelente! Al ser sen(90°) = 1, la expresión se convierte exactamente en (a * b) / 2, la fórmula clásica.",
                            feedbackIncorrect: "Incorrecto. Se reduce a la fórmula clásica de Base * Altura / 2.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "En un triángulo con lados a = 5 cm y b = 12 cm, ¿cuál es el área máxima que podría tener modificando su ángulo comprendido?",
                            options: [
                                "30 cm²",
                                "60 cm²",
                                "120 cm²",
                                "No tiene límite máximo"
                            ],
                            correctAnswer: 0,
                            hint: "El área es máxima cuando sen(C) es máximo. El valor máximo del seno es 1, lo cual ocurre a los 90°.",
                            feedbackCorrect: "¡Perfecto! El área máxima se logra a 90°: 0.5 * 5 * 12 * 1 = 30 cm².",
                            feedbackIncorrect: "Incorrecto. El máximo es a 90° (sen = 1): 0.5 * 5 * 12 = 30 cm².",
                            difficulty: "avanzado",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La Fórmula Trigonométrica y la Fórmula de Herón independizan el cálculo del área de la necesidad de conocer la altura perpendicular, abriendo ricas aplicaciones prácticas.",
                    videoPlaceholderText: "Video de Trigonometría: Fórmula de Herón y trigonométrica de área explicadas con ejemplos."
                }
            ]
        }
    ]
};

function run() {
    console.log("Leyendo academic_content.js...");
    let content = fs.readFileSync(ACADEMIC_FILE, "utf8");

    const startTrig = content.indexOf('    "trigonometria-fundamental": `');
    const endTrig = content.indexOf('`,\n\n    "calculo-universitario":');

    if (startTrig === -1 || endTrig === -1) {
        console.error("No se pudo encontrar el bloque trigonometria-fundamental original.");
        process.exit(1);
    }

    console.log("Encontradas posiciones en disco para inyección quirúrgica de Trigonometría.");

    const trigonometriaFundamentalJS = '    "trigonometria-fundamental": ' + JSON.stringify(trigonometriaFundamentalData, null, 4);

    let newContent = content.slice(0, startTrig) + 
                     trigonometriaFundamentalJS + 
                     content.slice(endTrig + 1);

    console.log("Escribiendo cambios en academic_content.js...");
    fs.writeFileSync(ACADEMIC_FILE, newContent, "utf8");
    console.log("¡Curso de Trigonometría Fundamental inyectado con éxito!");
}

try {
    run();
} catch (e) {
    console.error("Error crítico durante la inyección:", e);
    process.exit(1);
}
