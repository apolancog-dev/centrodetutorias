const fs = require("fs");
const path = require("path");

const ACADEMIC_FILE = path.join(__dirname, "..", "academic_content.js");

const calculoUniversitarioData = {
    isRichCourse: true,
    title: "Cálculo Diferencial e Integral",
    units: [
        {
            title: "Unidad 1: Límites y Continuidad",
            lessons: [
                {
                    id: "concepto-intuitivo-limite",
                    title: "Lección 1.1: Concepto Intuitivo de Límite y Límites Laterales",
                    introduction: "El límite es la base teórica de todo el cálculo. Descubre cómo una función se aproxima a un valor aunque nunca llegue a tocarlo.",
                    explanationHtml: '<p>El <strong>límite</strong> de una función $f(x)$ cuando $x$ se aproxima a un valor $a$ es el valor $L$ al que se acercan los valores de la función. Se denota como:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\lim_{x \\to a} f(x) = L$$</p><p class="mt-2">Para que este límite exista de forma rigurosa en $a$, los <strong>límites laterales</strong> (aproximaciones por la izquierda y la derecha) deben existir y ser exactamente iguales:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Límite por la izquierda ($x \\to a^{-}$):</strong> Aproximarse usando valores ligeramente menores que $a$.</li><li><strong>Límite por la derecha ($x \\to a^{+}$):</strong> Aproximarse usando valores ligeramente mayores que $a$.</li></ul><p class="text-center font-bold text-slate-800 bg-slate-50 p-2 rounded border">Existencia: $\\lim_{x \\to a} f(x) = L \\iff \\lim_{x \\to a^{-}} f(x) = \\lim_{x \\to a^{+}} f(x) = L$</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Condición de Existencia de un Límite</p><p class="text-xs font-mono font-bold text-primary">lim(x&rarr;a&macr;) = lim(x&rarr;a&ordm;) = L</p><p class="text-xs text-slate-500">Si los límites laterales dan valores diferentes, el límite general NO existe en ese punto.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">LÍMITES LATERALES</text><line x1="40" y1="90" x2="260" y2="90" stroke="#64748b" stroke-width="1" /><line x1="60" y1="20" x2="60" y2="105" stroke="#64748b" stroke-width="1" /><path d="M 60 75 L 145 45" stroke="#3b82f6" stroke-width="2" /><circle cx="150" cy="43" r="4" fill="none" stroke="#ef4444" stroke-width="1.5" /><path d="M 155 41 L 240 15" stroke="#3b82f6" stroke-width="2" /><line x1="150" y1="90" x2="150" y2="47" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><text x="150" y="103" font-size="8" fill="#475569" font-weight="bold" text-anchor="middle">a = 4</text><line x1="60" y1="43" x2="146" y2="43" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><text x="53" y="46" font-size="8" fill="#475569" font-weight="bold" text-anchor="end">L = 11</text><path d="M 110 50 L 130 46" fill="none" stroke="#059669" stroke-width="1.5" marker-end="url(#arrow)" /><path d="M 190 25 L 170 31" fill="none" stroke="#059669" stroke-width="1.5" /></svg>',
                    svgDescription: "Una gráfica de función lineal continua que tiene un punto vacío (agujero) a x = 4, con flechas laterales que se aproximan a la misma altura y = 11, mostrando que el límite existe.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Considera la función continua $f(x) = 2x + 3$. Evalúa el límite cuando $x$ tiende a $4$.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Al tratarse de una función polinómica lineal, no presenta discontinuidades ni divisiones entre cero en su dominio.</li><li><strong>Paso 2:</strong> Podemos evaluar el valor de $x = 4$ directamente por sustitución directa: <br>$$\\lim_{x \\to 4} (2x + 3) = 2(4) + 3$$</li><li><strong>Paso 3:</strong> Resuelve aritméticamente: $2(4) + 3 = 8 + 3 = 11$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El límite cuando x tiende a 4 es de exactamente <strong>11</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir evaluar el límite con evaluar la función:</strong> En funciones con huecos (discontinuidades evitables), $f(a)$ puede no existir o valer otra cosa, pero el límite $\\lim_{x \\to a} f(x)$ sí existe perfectamente porque solo mide la aproximación a los lados del punto.</li></ul>',
                    exercises: [
                        {
                            question: "Evalúa el límite directo de la función f(x) = x² - 5 cuando x tiende a 3. (Ingresa solo el número entero):",
                            correctAnswer: "4",
                            hint: "Al ser una función continua cuadrática, realiza sustitución directa evaluando x = 3.",
                            feedbackCorrect: "¡Excelente! 3² - 5 = 9 - 5 = 4.",
                            feedbackIncorrect: "Incorrecto. Sustituye x=3: 3² - 5 = 9 - 5 = 4.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si el límite lateral por la izquierda de una función tiende a +5 y por la derecha tiende a -5 en x = a, ¿cuánto vale el límite general en x = a?",
                            options: [
                                "0",
                                "5",
                                "-5",
                                "No existe"
                            ],
                            correctAnswer: 3,
                            hint: "Recuerda que para la existencia del límite general, ambos límites laterales deben aproximarse exactamente al mismo valor real.",
                            feedbackCorrect: "¡Perfecto! Como los límites laterales son desiguales (5 ≠ -5), el límite general no existe.",
                            feedbackIncorrect: "Incorrecto. Al ser los límites laterales desiguales (+5 y -5), el límite general no existe.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Evalúa el límite directo: lim_{x -> 2} (3x - 1). (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "Sustituye x = 2 en la ecuación lineal directa.",
                            feedbackCorrect: "¡Excelente! 3 * 2 - 1 = 6 - 1 = 5.",
                            feedbackIncorrect: "Incorrecto. Reemplaza x=2: 3(2) - 1 = 5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué representa rigurosamente un límite lateral por la izquierda?",
                            options: [
                                "El valor de la función evaluando números muy grandes y positivos.",
                                "La aproximación al valor de x utilizando valores ligeramente menores a él (por su izquierda).",
                                "La pendiente de la recta tangente inclinada hacia el cuadrante negativo.",
                                "El punto de intersección de la curva con el eje vertical y."
                            ],
                            correctAnswer: 1,
                            hint: "Izquierda en la recta real representa números menores (e.g. 3.99, 3.999 approaching 4).",
                            feedbackCorrect: "¡Perfecto! El límite por la izquierda evalúa valores menores que se acercan a la cota por su lado izquierdo.",
                            feedbackIncorrect: "Incorrecto. Se trata de aproximarse por valores ligeramente menores.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Evalúa el comportamiento de la función f(x) = 1/x cuando x tiende a 0. ¿Qué se concluye sobre su límite?",
                            options: [
                                "El límite es exactamente 0.",
                                "El límite es exactamente 1.",
                                "El límite no existe porque los laterales tienden a infinitos opuestos (-inf y +inf).",
                                "El límite es infinito positivo constante."
                            ],
                            correctAnswer: 2,
                            hint: "Si te acercas a 0 por la izquierda con negativos pequeños (e.g., -0.01) da -100. Por la derecha (e.g., 0.01) da +100.",
                            feedbackCorrect: "¡Excelente! Al divergir los laterales hacia -infinito y +infinito, el límite general no existe.",
                            feedbackIncorrect: "Incorrecto. Divergen a signos contrarios en el infinito, por ende no existe.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Los límites determinan el valor esperado de aproximación de una función en un punto analítico. La convergencia y congruencia de los límites laterales fundamentan la continuidad de funciones.",
                    videoPlaceholderText: "Video de Cálculo: Concepto intuitivo de límites y laterales explicados con animaciones."
                },
                {
                    id: "limites-indeterminados-factorizacion",
                    title: "Lección 1.2: Límites Indeterminados por Factorización",
                    introduction: "Aprende a romper la indeterminación 0/0 mediante simplificación algebraica y factorización rigurosa.",
                    explanationHtml: '<p>Al evaluar límites racionales (fracciones) mediante sustitución directa, suele ocurrir que obtenemos la forma <strong>indeterminada</strong> $0/0$:</p><p class="text-center font-mono font-bold text-red-500 my-1">$$\\lim_{x \\to a} \\frac{P(x)}{Q(x)} = \\frac{0}{0}$$</p><p class="mt-2">Esto **no significa** que el límite no exista o sea infinito. Significa que hay un factor común algebraico $(x - a)$ en el numerador y en el denominador que causa los ceros y que debe cancelarse. El procedimiento algebraico es:</p><ol class="list-decimal pl-5 space-y-1.5 my-3"><li><strong>Factorizar:</strong> Descomponer el numerador y/o denominador en factores.</li><li><strong>Simplificar:</strong> Cancelar el término común $(x - a)$ que genera la indeterminación.</li><li><strong>Reevaluar:</strong> Sustituir el valor de $a$ en la expresión simplificada restante.</li></ol>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Método de Factorización para 0/0</p><p class="text-xs font-mono font-bold text-primary">lim (x&sup2; - a&sup2;) / (x - a) &rArr; lim (x-a)(x+a) / (x-a) = lim (x+a) = 2a</p><p class="text-xs text-slate-500">Las factorizaciones más comunes son diferencia de cuadrados y trinomios.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">EVITAR INDETERMINACIÓN 0/0</text><rect x="25" y="38" width="110" height="50" fill="#fef2f2" stroke="#fca5a5" rx="6" /><text x="80" y="53" font-size="8" fill="#991b1b" font-weight="bold" text-anchor="middle">Sustitución Directa</text><text x="80" y="72" font-size="12" font-family="monospace" fill="#991b1b" font-weight="bold" text-anchor="middle">0 / 0</text><path d="M 140 63 L 160 63" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2,2" /><rect x="165" y="38" width="110" height="50" fill="#eff6ff" stroke="#bfdbfe" rx="6" /><text x="220" y="53" font-size="8" fill="#1e40af" font-weight="bold" text-anchor="middle">Factorizar &amp; Cancelar</text><text x="220" y="75" font-size="14" font-family="monospace" fill="#2563eb" font-weight="extrabold" text-anchor="middle">L = 6</text></svg>',
                    svgDescription: "Esquema que ilustra el proceso para resolver un límite indeterminado. Muestra cómo la sustitución inicial arroja un error 0/0 que se elude factorizando y cancelando factores comunes para dar 6.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Evalúa el límite indeterminado: $$\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$$</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Evaluar):</strong> Reemplazamos $x = 3$ directo: <br>$$\\frac{3^2 - 9}{3 - 3} = \\frac{9 - 9}{0} = \\frac{0}{0}$$ (Indeterminado).</li><li><strong>Paso 2 (Factorizar):</strong> El numerador $x^2 - 9$ es una diferencia de cuadrados perfectos: $(x + 3)(x - 3)$.</li><li><strong>Paso 3 (Simplificar):</strong> Cancelamos el factor común $(x - 3)$ en el numerador y denominador: <br>$$\\lim_{x \\to 3} \\frac{(x + 3)(x - 3)}{x - 3} = \\lim_{x \\to 3} (x + 3)$$</li><li><strong>Paso 4 (Reevaluar):</strong> Evaluamos $x = 3$ en la expresión restante: $3 + 3 = 6$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El valor del límite es exactamente <strong>6</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Responder que el límite es cero o que no existe:</strong> Dejar la respuesta como $0/0$. Esta forma es una indeterminación, lo que exige obligatoriamente un proceso algebraico para hallar la verdadera tendencia de aproximación.</li></ul>',
                    exercises: [
                        {
                            question: "Evalúa el límite: lim_{x -> 2} [(x² - 4) / (x - 2)]. (Ingresa solo el número entero):",
                            correctAnswer: "4",
                            hint: "Factoriza la diferencia de cuadrados en el numerador como (x-2)(x+2), cancela (x-2) y evalúa en 2.",
                            feedbackCorrect: "¡Excelente! (x+2) evaluado en 2 es 2 + 2 = 4.",
                            feedbackIncorrect: "Incorrecto. Factoriza y cancela: (x-2)(x+2) / (x-2) = x+2. Evaluado en 2 es 4.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Resuelve el límite: lim_{x -> 5} [(x² - 5x) / (x - 5)]. (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "Factoriza el numerador por término común x, quedando x(x - 5). Cancela y evalúa.",
                            feedbackCorrect: "¡Perfecto! x(x-5)/(x-5) = x. Evaluado en 5 es 5.",
                            feedbackIncorrect: "Incorrecto. Factoriza por término común: x(x-5)/(x-5) = x. El límite es 5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Resuelve el límite indeterminado: lim_{x -> 1} [(x² - 2x + 1) / (x - 1)]. (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "El numerador es un Trinomio Cuadrado Perfecto que se factoriza como (x - 1)². Cancela uno y evalúa.",
                            feedbackCorrect: "¡Excelente! (x-1)²/(x-1) = x - 1. Evaluado en 1 es 1 - 1 = 0.",
                            feedbackIncorrect: "Incorrecto. (x-1)² / (x-1) = x-1. Evaluado en 1 da 0.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Resuelve el límite indeterminado: lim_{x -> -3} [(x² + 5x + 6) / (x + 3)]. (Ingresa solo el número entero, incluyendo signo si aplica):",
                            correctAnswer: "-1",
                            hint: "Factoriza el trinomio cuadrático cuadrando dos números que multiplicados den 6 y sumados 5 (3 y 2).",
                            feedbackCorrect: "¡Excelente! (x+3)(x+2)/(x+3) = x + 2. Evaluado en -3 da -3 + 2 = -1.",
                            feedbackIncorrect: "Incorrecto. (x+3)(x+2)/(x+3) = x+2. Evaluado en -3 es -1.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Qué significado geométrico tiene obtener la indeterminación 0/0 en una función racional?",
                            options: [
                                "La curva tiene una asíntota vertical infinita.",
                                "La función tiene una discontinuidad evitable (un hueco puntual) en ese valor de x.",
                                "La gráfica corta al eje x en un ángulo recto de 90°.",
                                "La función es constante y paralela al eje horizontal."
                            ],
                            correctAnswer: 1,
                            hint: "Significa que podemos eludir la discontinuidad simplificando la fracción. Queda un hueco pero no un salto al infinito.",
                            feedbackCorrect: "¡Excelente! Representa un hueco o discontinuidad evitable, lo que significa que el límite existe aunque la función no esté definida ahí.",
                            feedbackIncorrect: "Incorrecto. Representa una discontinuidad evitable o removible (hueco).",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La indeterminación del tipo $0/0$ en límites racionales representa discontinuidades evitables puntuales que se resuelven mediante el uso de factorización y simplificación analítica.",
                    videoPlaceholderText: "Video de Cálculo: Cómo resolver cualquier límite indeterminado 0/0 en minutos."
                },
                {
                    id: "limites-infinito-asintotas",
                    title: "Lección 1.3: Límites al Infinito y Asíntotas",
                    introduction: "Explora las tendencias en los extremos infinitos de las funciones y aprende a deducir asíntotas horizontales.",
                    explanationHtml: '<p>Los <strong>límites al infinito</strong> evalúan el comportamiento de una función $f(x)$ cuando la variable $x$ crece sin límites hacia el infinito positivo ($x \\to \\infty$) o negativo ($x \\to -\\infty$).</p><p>Para funciones racionales $\\frac{P(x)}{Q(x)}$ al infinito, dividimos de forma analítica todos los términos del numerador y denominador entre la **mayor potencia de x que aparezca en el denominador**. Aplicamos el teorema límite:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\lim_{x \\to \\infty} \\frac{k}{x^n} = 0 \\quad (\\text{para } n > 0)$$</p><p class="mt-2"><strong>Asíntota Horizontal:</strong> Si $\\lim_{x \\to \\infty} f(x) = L$ (un número real real), la recta horizontal $y = L$ es una asíntota a la que la función se aproxima en sus extremos.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Regla de Grados en el Infinito</p><p class="text-xs font-mono font-bold text-primary">Grado Num = Grado Den &rArr; L&iacute;mite = Coef. Principal Num / Coef. Principal Den</p><p class="text-xs text-slate-550">Grado Num &lt; Grado Den &rArr; L&iacute;mite = 0 &nbsp;|&nbsp; Grado Num &gt; Grado Den &rArr; L&iacute;mite = &infin;</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ASÍNTOTA HORIZONTAL</text><line x1="40" y1="90" x2="260" y2="90" stroke="#64748b" stroke-width="1" /><line x1="60" y1="20" x2="60" y2="110" stroke="#64748b" stroke-width="1" /><line x1="40" y1="55" x2="260" y2="55" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" /><text x="255" y="48" font-size="8" fill="#ef4444" font-weight="bold" text-anchor="end">y = 1.5</text><path d="M 65 110 C 80 70 120 57 260 56" fill="none" stroke="#3b82f6" stroke-width="2" /></svg>',
                    svgDescription: "Gráfica que muestra una curva azul aproximándose sin llegar a tocar a una línea horizontal punteada roja de altura y = 1.5, representando visualmente una asíntota horizontal.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Calcula el límite al infinito: $$\\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{2x^2 - 1}$$</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica la potencia más alta en el denominador, la cual es $x^2$.</li><li><strong>Paso 2:</strong> Divide analíticamente cada uno de los términos entre $x^2$: <br>$$\\lim_{x \\to \\infty} \\frac{\\frac{3x^2}{x^2} + \\frac{5x}{x^2}}{\\frac{2x^2}{x^2} - \\frac{1}{x^2}} = \\lim_{x \\to \\infty} \\frac{3 + \\frac{5}{x}}{2 - \\frac{1}{x^2}}$$</li><li><strong>Paso 3:</strong> Aplica el límite sabiendo que los términos $\\frac{5}{x}$ y $\\frac{1}{x^2}$ tienden a cero cuando $x \\to \\infty$: <br>$$\\frac{3 + 0}{2 - 0} = \\frac{3}{2} = 1.5$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El límite es <strong>3/2 (o 1.5)</strong>. Esto indica una asíntota horizontal en $y = 1.5$.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Creer que dividir entre cero al infinito se indefine:</strong> Confundir $\\frac{k}{0}$ (indefinido) con $\\frac{k}{\\infty}$ (cero). Repetir siempre: dividir una constante por un número infinitamente grande da cero.</li></ul>',
                    exercises: [
                        {
                            question: "Resuelve el límite al infinito: lim_{x -> ∞} (5 / x³). (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "Aplica el teorema directo. Al crecer el denominador infinitamente con constante fija, la fracción colapsa.",
                            feedbackCorrect: "¡Excelente! 5 dividido entre un número infinitamente grande tiende a 0.",
                            feedbackIncorrect: "Incorrecto. lim (k / x^n) al infinito siempre es 0.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Resuelve el límite racional al infinito: lim_{x -> ∞} [(2x + 8) / (4x - 3)]. (Ingresa la fracción simplificada, ej: 1/2 o 2/4):",
                            correctAnswer: "1/2",
                            hint: "Dado que el grado del numerador y del denominador son iguales (1), el límite es la razón de sus coeficientes principales: 2/4.",
                            feedbackCorrect: "¡Perfecto! 2/4 simplifica a 1/2.",
                            feedbackIncorrect: "Incorrecto. Razón de coeficientes es 2/4 = 1/2.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Resuelve el límite: lim_{x -> ∞} [(x² + 5) / (2x³ - 10)]. (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "Observa los grados de los polinomios. El denominador tiene grado 3, mayor que el numerador que tiene grado 2.",
                            feedbackCorrect: "¡Excelente! Como el grado del denominador es mayor, el límite al infinito es automáticamente 0.",
                            feedbackIncorrect: "Incorrecto. Si el denominador crece más rápido (mayor grado), el límite es 0.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Qué tipo de asíntota geométrica se ubica en los valores de x donde el denominador de una función racional simplificada se anula (hace cero)?",
                            options: [
                                "Asíntota Horizontal",
                                "Asíntota Vertical",
                                "Asíntota Oblicua",
                                "Asíntota Coplanares"
                            ],
                            correctAnswer: 1,
                            hint: "Cuando el denominador tiende a cero, la función explota y se va verticalmente hacia el infinito positivo o negativo.",
                            feedbackCorrect: "¡Perfecto! Se trata de una asíntota vertical (recta x = a).",
                            feedbackIncorrect: "Incorrecto. Se denomina asíntota vertical.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el límite al infinito de f(x) = (3x² - 1) / (x + 2). ¿A qué valor tiende?",
                            options: [
                                "3",
                                "0",
                                "No existe (tiende al infinito ya que el grado del numerador es mayor)",
                                "-0.5"
                            ],
                            correctAnswer: 2,
                            hint: "El grado del numerador es 2 y el del denominador es 1. El numerador crece muchísimo más rápido.",
                            feedbackCorrect: "¡Excelente! Al ser el grado del numerador mayor, la función tiende al infinito y por tanto el límite no converge.",
                            feedbackIncorrect: "Incorrecto. Tiende al infinito porque el numerador tiene mayor grado.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Los límites al infinito determinan el comportamiento extremo asintótico de funciones racionales y trascendentes, permitiendo dibujar e identificar límites de control y asíntotas horizontales.",
                    videoPlaceholderText: "Video de Cálculo: Cómo calcular límites al infinito mediante atajos de grados de polinomios."
                }
            ]
        },
        {
            title: "Unidad 2: La Derivada y sus Reglas",
            lessons: [
                {
                    id: "definicion-derivada-pendiente",
                    title: "Lección 2.1: Definición de la Derivada",
                    introduction: "Comprende de forma intuitiva y matemática la derivada como la razón de cambio instantánea y la pendiente de una recta tangente.",
                    explanationHtml: '<p>La <strong>derivada</strong> mide el cambio de una variable con respecto a otra en un instante exacto. Geométricamente, representa la **pendiente de la recta tangente** a una curva $f(x)$ en un punto específico.</p><p>Formalmente, se define a través de un límite que describe la aproximación de una recta secante hacia una recta tangente al acercar dos puntos a una distancia $h$ que tiende a cero:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$</p><p class="mt-2">Si este límite existe, decimos que la función es **derivable** en ese punto.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Definición Formal por Límite</p><p class="text-xs font-mono font-bold text-primary">f\'(x) = lim(h&rarr;0) [f(x+h) - f(x)] / h</p><p class="text-xs text-slate-500">Esta es la fórmula de la pendiente de Newton-Leibniz, el núcleo de la física moderna.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">LA RECTA TANGENTE (DERIVADA)</text><path d="M 40 100 Q 140 100 240 30" fill="none" stroke="#94a3b8" stroke-width="1" /><line x1="80" y1="110" x2="230" y2="20" stroke="#ef4444" stroke-width="2" /><circle cx="150" cy="74" r="4" fill="#ef4444" /><text x="160" y="79" font-size="9" fill="#ef4444" font-weight="bold">P(x, f(x))</text><text x="150" y="105" font-size="8" fill="#334155" text-anchor="middle">Pendiente m = f\'(x)</text></svg>',
                    svgDescription: "Una curva suave gris sobre la cual se traza una línea recta roja que toca de forma perfecta y única en el punto P, representando geométricamente la recta tangente y su pendiente derivada.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Encuentra la derivada de la función cuadrática $f(x) = x^2$ aplicando la definición formal de límite.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Plantea la fórmula de la definición: $$\\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h}$$</li><li><strong>Paso 2:</strong> Desarrolla el binomio al cuadrado: <br>$$\\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h}$$</li><li><strong>Paso 3:</strong> Cancela los términos $x^2$ y $-x^2$: <br>$$\\lim_{h \\to 0} \\frac{2xh + h^2}{h}$$</li><li><strong>Paso 4:</strong> Factoriza $h$ en el numerador y simplifica con el denominador para evitar división por cero: <br>$$\\lim_{h \\to 0} \\frac{h(2x + h)}{h} = \\lim_{h \\to 0} (2x + h)$$</li><li><strong>Paso 5:</strong> Evalúa el límite haciendo $h = 0$: $2x + 0 = 2x$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La derivada de $x^2$ es exactamente <strong>2x</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Dividir entre h al inicio:</strong> Hacer $h=0$ en el primer paso. Esto arroja de forma errónea una división por cero. Primero debes desarrollar algebraicamente y cancelar la $h$ antes de evaluar.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cuál es la interpretación geométrica exacta de la derivada de una función en un punto específico?",
                            options: [
                                "El área bajo la curva en un tramo horizontal.",
                                "La pendiente de la recta tangente a la curva en ese punto.",
                                "La longitud de arco de la curva entre dos cotas de X.",
                                "La intersección con el eje Y vertical."
                            ],
                            correctAnswer: 1,
                            hint: " Newton definió la derivada para hallar la inclinación de la recta que roza la curva en un solo punto.",
                            feedbackCorrect: "¡Perfecto! Geométricamente, la derivada representa exactamente la pendiente de la recta tangente.",
                            feedbackIncorrect: "Incorrecto. Representa la pendiente de la recta tangente.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si f(x) = 5x + 2, ¿cuánto vale su derivada f'(x) en cualquier punto? (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "f(x) es una función lineal (línea recta). La pendiente de una recta es siempre constante e igual a su coeficiente lineal.",
                            feedbackCorrect: "¡Excelente! La derivada mide la pendiente de la recta, la cual es siempre 5.",
                            feedbackIncorrect: "Incorrecto. Al ser lineal, su derivada es constante e igual a su pendiente: 5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula la derivada de f(x) = 3x usando la definición de límite. (Ingresa solo el número entero):",
                            correctAnswer: "3",
                            hint: "Plantea lim [3(x+h) - 3x] / h. Desarrolla el numerador, cancela 3x y divide entre h.",
                            feedbackCorrect: "¡Perfecto! lim (3h / h) = 3.",
                            feedbackIncorrect: "Incorrecto. lim [3(x+h) - 3x]/h = lim 3h/h = 3.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si una función es constante f(x) = 10, ¿cuál es su derivada f'(x)? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "Una constante no cambia (su tasa de cambio o pendiente es nula). Aplica la definición con f(x+h)=10.",
                            feedbackCorrect: "¡Excelente! Las constantes tienen derivada cero porque su tasa de cambio es nula.",
                            feedbackIncorrect: "Incorrecto. La derivada de toda función constante siempre es 0.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿En qué valor de x la pendiente de la recta tangente a la parábola y = x² es igual a cero? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "La derivada es y' = 2x. Iguala la derivada a cero y despeja x.",
                            feedbackCorrect: "¡Perfecto! 2x = 0 implica x = 0. Es el vértice inferior de la parábola.",
                            feedbackIncorrect: "Incorrecto. La derivada es 2x. Se hace cero en x = 0.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La derivada representa el cambio instantáneo modelado de forma infinitesimal. Su interpretación como la pendiente de la recta tangente abre las puertas a la física y al análisis de curvas.",
                    videoPlaceholderText: "Video de Cálculo: Entendiendo la derivada y la recta tangente en 5 minutos."
                },
                {
                    id: "reglas-basicas-derivacion",
                    title: "Lección 2.2: Reglas Básicas de Derivación",
                    introduction: "Descubre las reglas y teoremas sistemáticos para derivar funciones polinómicas y racionales sin límites extensos.",
                    explanationHtml: '<p>Calcular la derivada por la definición formal de límite es laborioso. Por ello, empleamos reglas deducidas sistemáticamente:</p><ul class="list-disc pl-5 space-y-2 my-3"><li><strong>Regla de la Constante:</strong> La derivada de una constante es cero. <br>$$\\frac{d}{dx}[c] = 0$$</li><li><strong>Regla de la Potencia:</strong> Baja el exponente multiplicando y réstale 1 al exponente original: <br>$$\\frac{d}{dx}[x^n] = n x^{n-1}$$</li><li><strong>Regla de la Suma/Resta:</strong> Se derivan los términos de forma independiente: <br>$$[f(x) \\pm g(x)]\' = f\'(x) \\pm g\'(x)$$</li><li><strong>Regla del Producto:</strong> La derivada del primero por el segundo sin derivar, más el primero sin derivar por la derivada del segundo: <br>$$[f \\cdot g]\' = f\' \\cdot g + f \\cdot g\'$$</li><li><strong>Regla del Cociente:</strong> Derivada de arriba por abajo sin derivar, menos arriba sin derivar por derivada de abajo, todo entre abajo al cuadrado: <br>$$\\left[\\frac{f}{g}\\right]\' = \\frac{f\' \\cdot g - f \\cdot g\'}{g^2}$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Tabla de Reglas de Derivación</p><p class="text-xs font-mono font-bold text-primary">d/dx[x&bull;] = n&bull;x&bull;&macr;&sup1; &nbsp;|&nbsp; d/dx[k&bull;u] = k&bull;u\'</p><p class="text-xs text-slate-500">Ejemplo: Derivada de 5x³ es 5 &bull; 3x² = 15x².</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">REGLAS DE DERIVACIÓN</text><rect x="25" y="38" width="115" height="65" fill="#eff6ff" stroke="#bfdbfe" rx="6" /><text x="82.5" y="53" font-size="8" fill="#1e40af" font-weight="bold" text-anchor="middle">Regla de la Potencia</text><text x="82.5" y="70" font-size="10" font-family="monospace" fill="#1e40af" font-weight="bold" text-anchor="middle">d/dx[xⁿ] = n·xⁿ⁻¹</text><text x="82.5" y="88" font-size="8" font-family="monospace" fill="#1e40af" text-anchor="middle">d/dx[x³] = 3x²</text><rect x="160" y="38" width="115" height="65" fill="#ecfdf5" stroke="#a7f3d0" rx="6" /><text x="217.5" y="53" font-size="8" fill="#065f46" font-weight="bold" text-anchor="middle">Regla de Suma</text><text x="217.5" y="70" font-size="9" font-family="monospace" fill="#065f46" font-weight="bold" text-anchor="middle">[f &plusmn; g]\' = f\' &plusmn; g\'</text><text x="217.5" y="88" font-size="8" font-family="monospace" fill="#065f46" text-anchor="middle">[x³ + x]\' = 3x² + 1</text></svg>',
                    svgDescription: "Esquema comparativo que muestra la Regla de la Potencia a la izquierda con su fórmula y ejemplo (x³ derivado da 3x²), y la Regla de la Suma a la derecha.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Deriva la función polinómica compleja: $f(x) = 4x^3 - 5x^2 + 2$ aplicando las reglas básicas.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica que la función es una suma/resta de términos individuales. Derivamos cada uno por separado.</li><li><strong>Paso 2 (Término 1):</strong> Para $4x^3$, aplica la regla de la potencia ($x^3 \\to 3x^2$) multiplicando por la constante: <br>$4 \\times 3x^2 = 12x^2$.</li><li><strong>Paso 3 (Término 2):</strong> Para $-5x^2$, de la misma forma ($x^2 \\to 2x$): <br>$-5 \\times 2x = -10x$.</li><li><strong>Paso 4 (Término 3):</strong> Para la constante $+2$, su derivada es $0$.</li><li><strong>Paso 5:</strong> Une los términos derivados: $f\'(x) = 12x^2 - 10x$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La derivada es $f\'(x) = 12x^2 - 10x$.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Derivar de forma incorrecta cocientes o productos:</strong> Pensar que la derivada de una fracción es la derivada del de arriba entre la del de abajo. ¡Completamente incorrecto! Es obligatorio aplicar la fórmula extendida del cociente.</li></ul>',
                    exercises: [
                        {
                            question: "Deriva aplicando la regla de la potencia: f(x) = 7x⁴. Escribe la respuesta en minúsculas sin espacios (usa ^ para potencias, ej: 28x^3):",
                            correctAnswer: "28x^3",
                            hint: "Baja el 4 multiplicando al 7 (7 * 4 = 28) y réstale 1 al exponente 4 (4 - 1 = 3).",
                            feedbackCorrect: "¡Excelente! La derivada de 7x⁴ es 28x³.",
                            feedbackIncorrect: "Incorrecto. 7 * 4 * x^(4-1) = 28x³.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Deriva: f(x) = x⁵ - 3x² + 8. Escribe en minúsculas sin espacios (ej: 5x^4-6x):",
                            correctAnswer: "5x^4-6x",
                            hint: "Deriva cada término de forma independiente. La derivada de una constante (8) es cero.",
                            feedbackCorrect: "¡Perfecto! Queda 5x⁴ - 6x.",
                            feedbackIncorrect: "Incorrecto. La solución correcta es '5x^4-6x'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Deriva usando la regla del producto: f(x) = x² * (3x + 1). Simplifica por completo y escribe en minúsculas sin espacios (ej: 9x^2+2x):",
                            correctAnswer: "9x^2+2x",
                            hint: "Aplica [f * g]' = f'g + fg'. Aquí f = x² y g = 3x + 1. f' = 2x, g' = 3. Opera y suma.",
                            feedbackCorrect: "¡Excelente! f' = 2x(3x + 1) + 3x² = 6x² + 2x + 3x² = 9x² + 2x.",
                            feedbackIncorrect: "Incorrecto. Al aplicar la regla del producto y simplificar obtienes '9x^2+2x'.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Calcula la derivada analítica de la función f(x) = √x.",
                            options: [
                                "1 / (2&radic;x)",
                                "&radic;x / 2",
                                "x&macr;&sup1;",
                                "1"
                            ],
                            correctAnswer: 0,
                            hint: "Escribe la raíz como exponente fraccionario: x^(1/2). Aplica potencia: (1/2)x^(-1/2). Baja el exponente negativo.",
                            feedbackCorrect: "¡Excelente! La derivada es 1 / (2√x) o (1/2)x^(-1/2).",
                            feedbackIncorrect: "Incorrecto. x^(1/2) derivado es (1/2)x^(-1/2) = 1 / (2√x).",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Calcula la derivada de f(x) = 3/x². Escribe la expresión en minúsculas sin espacios:",
                            correctAnswer: "-6/x^3",
                            hint: "Escribe la función como 3x^(-2) y aplica la regla de la potencia multiplicando -2 * 3 y restando 1 al exponente.",
                            feedbackCorrect: "¡Perfecto! -2 * 3x^(-3) = -6/x³.",
                            feedbackIncorrect: "Incorrecto. Reescribe como 3x⁻²; derivado da -6x⁻³ o '-6/x^3'.",
                            difficulty: "avanzado",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Las reglas operativas de derivación sistematizan el cálculo del cambio instantáneo de polinomios, fracciones y multiplicaciones, eludiendo la necesidad de límites.",
                    videoPlaceholderText: "Video de Cálculo: Memoriza las reglas básicas de derivación de forma divertida."
                },
                {
                    id: "regla-de-la-cadena",
                    title: "Lección 2.3: La Regla de la Cadena",
                    introduction: "Domina la derivación de funciones compuestas o anidadas aplicando la célebre Regla de la Cadena.",
                    explanationHtml: '<p>Una función es <strong>compuesta</strong> si contiene otra función en su interior ($f(g(x))$, una función dentro de otra). Para derivarlas, debemos aplicar la **Regla de la Cadena**.</p><p>Esta regla establece que derivamos primero la función exterior dejando el interior completamente intacto, y multiplicamos el resultado por la derivada de la función interior (la derivada de adentro):</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\frac{d}{dx}[f(g(x))] = f\'(g(x)) \\cdot g\'(x)$$</p><p class="mt-2">Es muy útil para derivar binomios elevados a potencias grandes, funciones trigonométricas y exponenciales complejas.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Regla de la Cadena</p><p class="text-xs font-mono font-bold text-primary">[uⁿ]\' = n &bull; u&bull;&macr;&sup1; &bull; u\' &nbsp;|&nbsp; [sen(u)]\' = cos(u) &bull; u\'</p><p class="text-xs text-slate-500">Recuerda multiplicar siempre por la derivada interna u\'.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">REGLA DE LA CADENA (COMPUESTA)</text><rect x="25" y="38" width="250" height="65" fill="#eff6ff" stroke="#bfdbfe" rx="8" /><text x="150" y="55" font-size="11" font-family="monospace" fill="#1e40af" font-weight="bold" text-anchor="middle">y = f( g(x) )</text><text x="150" y="78" font-size="12" font-family="monospace" fill="#2563eb" font-weight="extrabold" text-anchor="middle">y\' = f\'(g(x)) &bull; g\'(x)</text><text x="150" y="93" font-size="7" fill="#64748b" text-anchor="middle">Derivada Ext. (Int. Igual) &bull; Derivada Int.</text></svg>',
                    svgDescription: "Diagrama esquemático que divide de forma didáctica la Regla de la Cadena en sus dos componentes de multiplicación: la derivada de la estructura exterior con interior intacto por la derivada interna.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Deriva la función compuesta: $f(x) = (3x^2 + 5)^4$ aplicando la regla de la cadena.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica el interior ($g(x) = 3x^2 + 5$) y la estructura exterior (potencia $u^4$).</li><li><strong>Paso 2 (Derivada Exterior):</strong> Deriva la potencia 4 dejando el interior sin cambiar: <br>$4(3x^2 + 5)^3$.</li><li><strong>Paso 3 (Derivada Interior):</strong> Deriva el binomio interno: $(3x^2 + 5)\' = 6x$.</li><li><strong>Paso 4 (Multiplicar):</strong> Multiplica ambos resultados: <br>$f\'(x) = 4(3x^2 + 5)^3 \\times 6x$.</li><li><strong>Paso 5:</strong> Simplifica los términos numéricos: $f\'(x) = 24x(3x^2 + 5)^3$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> $f\'(x) = 24x(3x^2 + 5)^3$.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar multiplicar por la derivada interna:</strong> Derivar $(x^2+1)^3$ como $3(x^2+1)^2$. ¡Error grave! Se debe multiplicar por $(x^2+1)\'=2x$, dando la respuesta correcta $6x(x^2+1)^2$.</li></ul>',
                    exercises: [
                        {
                            question: "Deriva aplicando la regla de la cadena: f(x) = (2x - 1)⁵. Escribe la respuesta en minúsculas sin espacios (ej: 10(2x-1)^4):",
                            correctAnswer: "10(2x-1)^4",
                            hint: "Deriva el exterior (5 * u^4) y multiplica por la derivada interna de (2x - 1), la cual es 2.",
                            feedbackCorrect: "¡Excelente! 5(2x-1)⁴ * 2 = 10(2x-1)⁴.",
                            feedbackIncorrect: "Incorrecto. Exterior es 5(2x-1)⁴; multiplicado por la interna (2) da 10(2x-1)⁴.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Deriva: f(x) = sen(3x). Escribe en minúsculas sin espacios (ej: 3cos(3x)):",
                            correctAnswer: "3cos(3x)",
                            hint: "La derivada de sen(u) es cos(u) * u'. Aquí u = 3x, por lo que u' = 3.",
                            feedbackCorrect: "¡Perfecto! La derivada es 3cos(3x).",
                            feedbackIncorrect: "Incorrecto. sen(3x) derivado es cos(3x) * 3 = '3cos(3x)'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Deriva la función exponencial: f(x) = e^(x²). Escribe en minúsculas sin espacios (ej: 2xe^(x^2)):",
                            correctAnswer: "2xe^(x^2)",
                            hint: "La derivada de e^u es e^u * u'. En este caso u = x², por lo que u' = 2x.",
                            feedbackCorrect: "¡Excelente! La derivada es 2xe^(x²).",
                            feedbackIncorrect: "Incorrecto. e^(x²) * (x²)' = 2xe^(x²).",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Calcula la derivada analítica de la función logarítmica f(x) = ln(4x).",
                            options: [
                                "4 / x",
                                "1 / x",
                                "1 / (4x)",
                                "4x"
                            ],
                            correctAnswer: 1,
                            hint: "La derivada de ln(u) es u' / u. Aquí u = 4x, su derivada es 4. Divide 4 / 4x y simplifica.",
                            feedbackCorrect: "¡Excelente! 4 / 4x simplifica a 1/x.",
                            feedbackIncorrect: "Incorrecto. u'/u = 4 / 4x = 1/x.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Deriva la función compuesta de dos potencias: f(x) = (x³ + 2x)³. Escribe la respuesta simplificada multiplicando el coeficiente 3 por la derivada interna al final (ej: 3(x^3+2x)^2*(3x^2+2)):",
                            correctAnswer: "3(x^3+2x)^2*(3x^2+2)",
                            hint: "Aplica potencia exterior: 3(x³+2x)². Multiplica por la derivada de adentro: (3x² + 2).",
                            feedbackCorrect: "¡Perfecto! Queda 3(x³ + 2x)² * (3x² + 2).",
                            feedbackIncorrect: "Incorrecto. La solución correcta es '3(x^3+2x)^2*(3x^2+2)'.",
                            difficulty: "avanzado",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La Regla de la Cadena permite el análisis de sistemas compuestos o anidados multiplicando sistemáticamente razones de cambio escalonadas.",
                    videoPlaceholderText: "Video de Cálculo: Ejercicios resueltos paso a paso con la Regla de la Cadena."
                }
            ]
        },
        {
            title: "Unidad 3: Optimización e Integración",
            lessons: [
                {
                    id: "optimizacion-aplicada",
                    title: "Lección 3.1: Optimización",
                    introduction: "Utiliza la derivada para encontrar los puntos de máxima eficiencia o mínimo costo en problemas reales de ingeniería y negocios.",
                    explanationHtml: '<p>La <strong>optimización</strong> es una de las aplicaciones más potentes del cálculo. Consiste en encontrar los valores máximos (máxima ganancia, volumen, eficiencia) o mínimos (mínimo costo, material, tiempo) de una función.</p><p>El procedimiento matemático fundamental se basa en el **criterio de la primera derivada**:</p><ol class="list-decimal pl-5 space-y-1.5 my-3"><li><strong>Planteamiento:</strong> Escribir la fórmula de la función a optimizar en términos de una sola variable.</li><li><strong>Derivar:</strong> Calcular la primera derivada de la función.</li><li><strong>Puntos Críticos:</strong> Igualar la derivada a cero ($f\'(x) = 0$) y resolver para $x$.</li><li><strong>Verificación:</strong> Utilizar el criterio de la segunda derivada ($f\'\'(x) > 0 \\to \\text{mínimo}$, $f\'\'(x) < 0 \\to \\text{máximo}$) para corroborar el punto crítico.</li></ol>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Algoritmo de Optimización</p><p class="text-xs font-mono font-bold text-primary">1. f\'(x) = 0 &rArr; hallar x_cr&iacute;tico &nbsp;|&nbsp; 2. f\'\'(x_cr&iacute;tico) &rArr; evaluar signo</p><p class="text-xs text-slate-500">Si la segunda derivada en el punto da negativa, se trata de un máximo local.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">MÁXIMOS Y MÍNIMOS (OPTIMIZACIÓN)</text><path d="M 40 100 Q 140 10 240 100" fill="none" stroke="#3b82f6" stroke-width="2" /><line x1="90" y1="32.5" x2="190" y2="32.5" stroke="#ef4444" stroke-width="1.5" /><circle cx="140" cy="32.5" r="4" fill="#ef4444" /><text x="140" y="25" font-size="8" fill="#ef4444" font-weight="bold" text-anchor="middle">Máximo: f\'(x) = 0</text></svg>',
                    svgDescription: "Una parábola cóncava hacia abajo que ilustra un punto máximo en la cúspide con una línea recta tangente completamente horizontal, demostrando que f'(x) = 0.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un fabricante en Escuintla quiere diseñar una caja rectangular de cartón abierta de volumen máximo a partir de una pieza de cartón de 12 cm por 12 cm cortando cuadrados iguales de lado $x$ en las cuatro esquinas. Determina la medida de $x$ para lograr el volumen máximo.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Escribe la fórmula del volumen de la caja: <br>$V(x) = x(12 - 2x)(12 - 2x) = 4x^3 - 48x^2 + 144x$.</li><li><strong>Paso 2:</strong> Calcula la primera derivada del volumen: <br>$V\'(x) = 12x^2 - 96x + 144$.</li><li><strong>Paso 3:</strong> Iguala a cero para hallar puntos críticos: <br>$12x^2 - 96x + 144 = 0 \\Rightarrow x^2 - 8x + 12 = 0$.</li><li><strong>Paso 4:</strong> Factoriza la ecuación cuadrática: $(x - 6)(x - 2) = 0$. Los puntos críticos son $x = 6$ y $x = 2$.</li><li><strong>Paso 5:</strong> Evalúa los puntos. Si cortas $6$ cm, barres toda la hoja (volumen 0). Por lo tanto, el volumen máximo se da en $x = 2$ cm.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El corte en la esquina debe medir <strong>2 cm</strong> para lograr el volumen máximo.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>No validar el punto crítico:</strong> Encontrar $x$ pero no evaluar si corresponde al máximo o al mínimo. En ocasiones el problema exige minimizar costos y se termina maximizándolos por no usar la segunda derivada.</li></ul>',
                    exercises: [
                        {
                            question: "Encuentra el número positivo x tal que sumado con su recíproco (1/x) dé la menor suma posible. (Ingresa solo el número entero):",
                            correctAnswer: "1",
                            hint: "Plantea S(x) = x + 1/x. Deriva S'(x) = 1 - 1/x². Iguala a cero y despeja x.",
                            feedbackCorrect: "¡Excelente! 1 - 1/x² = 0 => x² = 1. El número es 1.",
                            feedbackIncorrect: "Incorrecto. S'(x) = 1 - 1/x² = 0, lo que da x = 1.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un granjero tiene 200 metros de cerca para delimitar un terreno rectangular. ¿Cuál es el área máxima en m² que puede encerrar? (Ingresa solo el número entero):",
                            correctAnswer: "2500",
                            hint: "Para un perímetro fijo, el rectángulo de área máxima siempre es un cuadrado perfecto. Divide el perímetro entre 4 para obtener el lado y elévalo al cuadrado.",
                            feedbackCorrect: "¡Perfecto! Lado = 50 m. Área máxima = 50 * 50 = 2500 m².",
                            feedbackIncorrect: "Incorrecto. El área máxima se da con un cuadrado de 50m de lado: 50² = 2500 m².",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Qué propiedad geométrica mide el criterio de la segunda derivada f''(x) evaluada en un punto crítico?",
                            options: [
                                "La pendiente de la recta secante.",
                                "La concavidad de la curva (si es positiva es mínimo, si es negativa es máximo).",
                                "La intersección exacta con el origen del plano.",
                                "El área de aproximación al eje horizontal."
                            ],
                            correctAnswer: 1,
                            hint: "La segunda derivada evalúa la tasa de cambio de la pendiente, es decir, cómo se curva la función.",
                            feedbackCorrect: "¡Excelente! Mide la concavidad, siendo la herramienta fundamental para clasificar máximos y mínimos.",
                            feedbackIncorrect: "Incorrecto. Mide la concavidad de la función.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Encuentra dos números reales positivos cuya suma sea exactamente 20 y su producto sea el máximo posible. (Ingresa el número como producto de ambos, ej: 10 y 10):",
                            correctAnswer: "10 y 10",
                            hint: "Para que el producto de dos números sumados sea máximo, ambos números deben ser iguales (20 / 2 = 10).",
                            feedbackCorrect: "¡Perfecto! Los números son 10 y 10, arrojando un producto máximo de 100.",
                            feedbackIncorrect: "Incorrecto. El producto es máximo cuando los números son iguales: 10 y 10.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿En qué valor de x la función y = x³ - 3x tiene un máximo local?",
                            options: [
                                "x = 1",
                                "x = -1",
                                "x = 0",
                                "x = 3"
                            ],
                            correctAnswer: 1,
                            hint: "Deriva y' = 3x² - 3 = 0 => x = ±1. Aplica segunda derivada y'' = 6x y busca cuál da un resultado negativo.",
                            feedbackCorrect: "¡Excelente! y''(-1) = -6 (negativo, máximo local).",
                            feedbackIncorrect: "Incorrecto. y' = 3x²-3 = 0 en x=±1. y'' = 6x; en x=-1 la concavidad es negativa, por tanto es máximo.",
                            difficulty: "avanzado",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La optimización matemática aplica la anulación de la primera derivada para identificar y verificar puntos críticos de máxima productividad y mínimo desperdicio.",
                    videoPlaceholderText: "Video de Cálculo: Cómo resolver problemas de optimización de forma sistemática."
                },
                {
                    id: "antiderivada-integracion-indefinida",
                    title: "Lección 3.2: La Antiderivada e Integración Indefinida",
                    introduction: "Aprende el proceso inverso de la derivación y descubre la constante de integración C.",
                    explanationHtml: '<p>La <strong>integración</strong> es el proceso inverso de la derivación. Dada una función $f(x)$, buscamos otra función $F(x)$ llamada **antiderivada** tal que $F\'(x) = f(x)$.</p><p>La <strong>integral indefinida</strong> representa el conjunto de todas las antiderivadas de una función. Debido a que la derivada de cualquier constante es cero, al integrar debemos sumar siempre una **constante de integración C**:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\int f(x) \\, dx = F(x) + C$$</p><p class="mt-2 font-bold text-slate-800">Reglas fundamentales de integración:</p><ul class="list-disc pl-5 space-y-1.5 my-2"><li><strong>Regla de la Potencia:</strong> Suma 1 al exponente y divide entre ese mismo valor obtenido: <br>$$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (\\text{para } n \\neq -1)$$</li><li><strong>Regla del Logaritmo:</strong> <br>$$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$$</li><li><strong>Regla Exponencial:</strong> <br>$$\\int e^x \\, dx = e^x + C$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Regla Fundamental de la Potencia</p><p class="text-xs font-mono font-bold text-primary">&int; xⁿ dx = xⁿ&bull;&sup1; / (n+1) + C</p><p class="text-xs text-slate-500">Recuerda siempre añadir "+ C" al finalizar de integrar de forma indefinida.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">FAMILIA DE ANTIDERIVADAS (+ C)</text><line x1="40" y1="90" x2="260" y2="90" stroke="#64748b" stroke-width="1" /><line x1="60" y1="20" x2="60" y2="110" stroke="#64748b" stroke-width="1" /><path d="M 60 70 Q 140 10 240 70" fill="none" stroke="#3b82f6" stroke-width="2" /><text x="210" y="45" font-size="8" fill="#1e40af" font-weight="bold">y = x² + 2</text><path d="M 60 85 Q 140 25 240 85" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2" /><text x="210" y="65" font-size="8" fill="#047857" font-weight="bold">y = x² + 0</text><path d="M 60 100 Q 140 40 240 100" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2" /><text x="210" y="85" font-size="8" fill="#b45309" font-weight="bold">y = x² - 2</text></svg>',
                    svgDescription: "Un plano cartesiano que muestra tres parábolas idénticas apiladas verticalmente. Ilustra de forma visual que la constante C desplaza la curva verticalmente pero conserva intactas sus derivadas (pendientes).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Calcula la integral indefinida polinómica: $$\\int (3x^2 - 4x + 5) \\, dx$$</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Integra de forma lineal término a término aplicando la regla de la potencia.</li><li><strong>Paso 2 (Término 1):</strong> Para $3x^2$, suma 1 a la potencia ($2+1=3$) y divide: <br>$$3 \\times \\frac{x^3}{3} = x^3$$</li><li><strong>Paso 3 (Término 2):</strong> Para $-4x$, de la misma forma ($1+1=2$): <br>$$-4 \\times \\frac{x^2}{2} = -2x^2$$</li><li><strong>Paso 4 (Término 3):</strong> Para la constante $5$, la integral es simplemente $5x$.</li><li><strong>Paso 5:</strong> Une todos los resultados y **agrega la constante C**: $x^3 - 2x^2 + 5x + C$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La integral es $x^3 - 2x^2 + 5x + C$.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar colocar la constante C:</strong> En exámenes de cálculo universitario, omitir la constante "+ C" en integrales indefinidas suele penalizarse gravemente.</li></ul>',
                    exercises: [
                        {
                            question: "Resuelve la integral indefinida: ∫ x⁴ dx. Escribe la respuesta en minúsculas sin espacios (usa ^, ej: (x^5)/5+C):",
                            correctAnswer: "(x^5)/5+C",
                            hint: "Suma 1 al exponente (4 + 1 = 5) y divide toda la expresión entre ese mismo número 5. Suma la constante +C.",
                            feedbackCorrect: "¡Excelente! La integral es (x^5)/5+C.",
                            feedbackIncorrect: "Incorrecto. La regla de la potencia da '(x^5)/5+C'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Resuelve la integral de una constante: ∫ 8 dx. Escribe en minúsculas sin espacios (ej: 8x+C):",
                            correctAnswer: "8x+C",
                            hint: "La integral de una constante k es simplemente kx. Suma +C.",
                            feedbackCorrect: "¡Perfecto! Queda 8x + C.",
                            feedbackIncorrect: "Incorrecto. La solución correcta es '8x+C'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Resuelve la integral: ∫ e^x dx. Escribe en minúsculas sin espacios (ej: e^x+C):",
                            correctAnswer: "e^x+C",
                            hint: "La función exponencial e^x es la única función que es su propia derivada y su propia integral.",
                            feedbackCorrect: "¡Excelente! La respuesta es e^x + C.",
                            feedbackIncorrect: "Incorrecto. Al ser idéntica a sí misma, da 'e^x+C'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula la integral trigonométrica: ∫ cos(x) dx.",
                            options: [
                                "sen(x) + C",
                                "-sen(x) + C",
                                "cos(x) + C",
                                "-cos(x) + C"
                            ],
                            correctAnswer: 0,
                            hint: "Piensa al revés: ¿cuál es la función cuya derivada da exactamente cos(x)?",
                            feedbackCorrect: "¡Excelente! La derivada de sen(x) es cos(x), por ende la integral de cos(x) es sen(x) + C.",
                            feedbackIncorrect: "Incorrecto. Es sen(x) + C (la integral de seno es -coseno, pero la de coseno es +seno).",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Resuelve la integral con exponente negativo: ∫ 1/x² dx. Escribe en minúsculas sin espacios (ej: -1/x+C):",
                            correctAnswer: "-1/x+C",
                            hint: "Reescribe 1/x² como x^(-2). Suma 1 al exponente: -2 + 1 = -1. Divide entre -1 y reordena.",
                            feedbackCorrect: "¡Perfecto! x^(-1) / -1 = -1/x + C.",
                            feedbackIncorrect: "Incorrecto. ∫ x⁻² dx = x⁻¹/-1 = -1/x + C, escrito '-1/x+C'.",
                            difficulty: "avanzado",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La integración indefinida reconstruye la función original a partir de su tasa de cambio. La inclusión de la constante $C$ modela el rango de desfase vertical infinito de la familia de antiderivadas.",
                    videoPlaceholderText: "Video de Cálculo: Entendiendo la antiderivada y por qué sumamos la constante C."
                },
                {
                    id: "integral-definida-area",
                    title: "Lección 3.3: La Integral Definida",
                    introduction: "Calcula de forma exacta el área delimitada bajo curvas complejas aplicando el Teorema Fundamental del Cálculo.",
                    explanationHtml: '<p>La <strong>integral definida</strong> representa de forma rigurosa el área neta acumulada bajo la curva de una función $f(x)$ y por encima del eje horizontal $x$, acotada entre los límites verticales $x = a$ y $x = b$.</p><p>El **Teorema Fundamental del Cálculo** conecta de manera brillante la antiderivada con el área, dictando que solo requerimos evaluar los límites en la antiderivada $F(x)$:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\int_{a}^{b} f(x) \\, dx = F(b) - F(a)$$</p><p class="mt-2">Donde $F(x)$ es cualquier antiderivada de $f(x)$ sin necesidad de sumar la constante $C$ (ya que se cancela en la resta: $(F(b) + C) - (F(a) + C) = F(b) - F(a)$).</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Teorema Fundamental del Cálculo</p><p class="text-xs font-mono font-bold text-primary">&int;[a&rarr;b] f(x) dx = F(b) - F(a)</p><p class="text-xs text-slate-500">Evalúa siempre el límite SUPERIOR primero (b) y réstale el inferior (a).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ÁREA BAJO LA CURVA (INTEGRAL)</text><path d="M 80 90 L 80 50 Q 140 30 200 68 L 200 90 Z" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" /><path d="M 50 90 L 250 90" stroke="#64748b" stroke-width="1" /><path d="M 80 90 L 80 40 M 200 90 L 200 60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><path d="M 60 60 Q 140 20 240 85" fill="none" stroke="#2563eb" stroke-width="2" /><text x="80" y="102" font-size="8" fill="#475569" font-weight="bold" text-anchor="middle">a = 0</text><text x="200" y="102" font-size="8" fill="#475569" font-weight="bold" text-anchor="middle">b = 3</text><text x="140" y="65" font-size="9" fill="#1e40af" font-weight="bold" text-anchor="middle">&Aacute;rea = 9</text></svg>',
                    svgDescription: "Una curva azul que delimita una región sombreada en azul suave entre dos límites punteados x = 0 y x = 3, representando la integral definida y su área calculada de 9.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Calcula el área bajo la curva de la función continua $f(x) = x^2$ acotada entre $x = 0$ y $x = 3$.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Halla la integral indefinida (antiderivada $F(x)$) de $x^2$: <br>$$F(x) = \\int x^2 \\, dx = \\frac{x^3}{3}$$</li><li><strong>Paso 2:</strong> Evalúa la antiderivada en el límite superior $b = 3$: <br>$$F(3) = \\frac{3^3}{3} = \\frac{27}{3} = 9$$</li><li><strong>Paso 3:</strong> Evalúa la antiderivada en el límite inferior $a = 0$: <br>$$F(0) = \\frac{0^3}{3} = 0$$</li><li><strong>Paso 4:</strong> Resta los resultados según el Teorema: <br>$$F(3) - F(0) = 9 - 0 = 9$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El área neta bajo la curva es exactamente de <strong>9 unidades cuadradas</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Restar al revés:</strong> Evaluar $F(a) - F(b)$. Esto arroja un área de signo contrario (negativo). Haz siempre: $F(\\text{superior}) - F(\\text{inferior})$.</li></ul>',
                    exercises: [
                        {
                            question: "Evalúa la integral definida: ∫_{1}^{3} 2x dx. (Ingresa solo el número entero):",
                            correctAnswer: "8",
                            hint: "La antiderivada de 2x es x². Evalúa el límite superior 3² y réstale el inferior 1².",
                            feedbackCorrect: "¡Excelente! 3² - 1² = 9 - 1 = 8.",
                            feedbackIncorrect: "Incorrecto. F(x) = x². F(3) - F(1) = 9 - 1 = 8.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el significado geométrico exacto de la integral definida ∫_{a}^{b} f(x) dx si f(x) >= 0?",
                            options: [
                                "La longitud de la recta secante que cruza la función.",
                                "La pendiente de la recta tangente promedio entre a y b.",
                                "El área de la región plana acotada por la función, el eje X y las verticales x = a y x = b.",
                                "El volumen de una esfera en revolución cartesiana."
                            ],
                            correctAnswer: 2,
                            hint: "Visualiza la zona comprendida entre la curva y el piso de la gráfica (eje X) dentro del intervalo.",
                            feedbackCorrect: "¡Excelente! Representa de forma matemática exacta el área bajo la curva.",
                            feedbackIncorrect: "Incorrecto. Representa el área bajo la curva en el intervalo cerrado.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Evalúa la integral definida trigonométrica: ∫_{0}^{π} sen(x) dx. (Ingresa solo el número entero):",
                            correctAnswer: "2",
                            hint: "La antiderivada de sen(x) es -cos(x). Evalúa: -cos(pi) - (-cos(0)). Recuerda que cos(pi) = -1 y cos(0) = 1.",
                            feedbackCorrect: "¡Perfecto! -(-1) - (-1) = 1 + 1 = 2.",
                            feedbackIncorrect: "Incorrecto. [-cos(x)]_{0}^{π} = -cos(π) - (-cos(0)) = 1 + 1 = 2.",
                            difficulty: "avanzado",
                            type: "short"
                        },
                        {
                            question: "Resuelve la integral definida: ∫_{1}^{2} 3x² dx. (Ingresa solo el número entero):",
                            correctAnswer: "7",
                            hint: "La antiderivada es x³. Evalúa 2³ y réstale 1³.",
                            feedbackCorrect: "¡Excelente! 2³ - 1³ = 8 - 1 = 7.",
                            feedbackIncorrect: "Incorrecto. F(x) = x³. F(2) - F(1) = 8 - 1 = 7.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuánto vale la integral definida de cualquier función impar f(x) integrada en un intervalo perfectamente simétrico [-a, a]?",
                            options: [
                                "2 * F(a)",
                                "0 (Las áreas de signo contrario a la izquierda y derecha se anulan)",
                                "Infinito positivo",
                                "-1"
                            ],
                            correctAnswer: 1,
                            hint: "Las funciones impares son simétricas respecto al origen; el área a la izquierda del eje y es el espejo negativo del área a la derecha.",
                            feedbackCorrect: "¡Excelente! Al ser simétricas e impares, las áreas se cancelan entre sí, resultando en exactamente 0.",
                            feedbackIncorrect: "Incorrecto. Se anulan mutuamente, dando como resultado 0.",
                            difficulty: "avanzado",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La integral definida consolida el cálculo al unificar la derivación con la medición de áreas complejas de límites curvos a través del Teorema Fundamental del Cálculo.",
                    videoPlaceholderText: "Video de Cálculo: Demostración y aplicaciones de la Integral Definida y áreas."
                }
            ]
        }
    ]
};

function run() {
    console.log("Leyendo academic_content.js...");
    let content = fs.readFileSync(ACADEMIC_FILE, "utf8");

    const startCalculus = content.indexOf('    "calculo-universitario": `');
    const endCalculus = content.indexOf('`,\n\n    "intro-fisica":');

    if (startCalculus === -1 || endCalculus === -1) {
        console.error("No se pudo encontrar el bloque calculo-universitario original.");
        process.exit(1);
    }

    console.log("Encontradas posiciones en disco para inyección quirúrgica de Cálculo.");

    const calculoUniversitarioJS = '    "calculo-universitario": ' + JSON.stringify(calculoUniversitarioData, null, 4);

    let newContent = content.slice(0, startCalculus) + 
                     calculoUniversitarioJS + 
                     content.slice(endCalculus + 1);

    console.log("Escribiendo cambios en academic_content.js...");
    fs.writeFileSync(ACADEMIC_FILE, newContent, "utf8");
    console.log("¡Curso de Cálculo Universitario inyectado con éxito!");
}

try {
    run();
} catch (e) {
    console.error("Error crítico durante la inyección:", e);
    process.exit(1);
}
