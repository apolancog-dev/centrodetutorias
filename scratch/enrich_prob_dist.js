const fs = require("fs");
const path = require("path");

const ACADEMIC_FILE = path.join(__dirname, "..", "academic_content.js");

const distribucionesProbabilidadData = {
    isRichCourse: true,
    title: "Distribuciones de Probabilidad",
    units: [
        {
            title: "Unidad 1: Variables Aleatorias y Distribuciones Discretas",
            lessons: [
                {
                    id: "concepto-variable-aleatoria",
                    title: "Lección 1.1: Concepto de Variable Aleatoria",
                    introduction: "Define y clasifica variables aleatorias en discretas y continuas mediante el análisis lógico de su dominio y rango.",
                    explanationHtml: '<p>En la teoría de la probabilidad, una <strong>variable aleatoria ($X$)</strong> no es una variable algebraica común. Es una <strong>función matemática</strong> que asigna un valor numérico real a cada uno de los resultados posibles de un espacio muestral ($\\Omega$) generado por un experimento aleatorio.</p><p class="mt-2">Las variables aleatorias se clasifican de forma estricta según el conjunto de valores que pueden tomar:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Variables Aleatorias Discretas:</strong> Son aquellas cuyo rango es un conjunto finito o infinito numerable (contable). Toman valores enteros y aislados (ej. número de alumnos que asisten a tutoría: 0, 1, 2...).</li><li><strong>Variables Aleatorias Continuas:</strong> Son aquellas cuyo rango abarca un intervalo infinito no numerable de números reales. Pueden tomar cualquier valor decimal intermedio y provienen de mediciones físicas (ej. el tiempo exacto que dura una tutoría: 45.23 minutos, la temperatura en Quetzaltenango).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Definición Formal</p><p class="text-xs font-mono font-bold text-primary">X: &Omega; &rarr; &reals; &nbsp;|&nbsp; Discreta (Contable) vs Continua (Medible)</p><p class="text-xs text-slate-550">Una variable aleatoria traduce sucesos del mundo real (ej. "cae cara") a números reales puros (ej. "1").</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">VARIABLE ALEATORIA COMO FUNCIÓN</text><ellipse cx="60" cy="65" rx="35" ry="25" fill="#eff6ff" stroke="#3b82f6" stroke-width="1" /><text x="60" y="60" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">Espacio &Omega;</text><text x="45" y="75" font-size="7.5" fill="#1e40af" text-anchor="middle">{Cara}</text><text x="75" y="75" font-size="7.5" fill="#1e40af" text-anchor="middle">{Escudo}</text><line x1="125" y1="90" x2="255" y2="90" stroke="#475569" stroke-width="1.5" /><circle cx="160" cy="90" r="3" fill="#ef4444" /><text x="160" y="102" font-size="8" font-weight="bold" fill="#b91c1c" text-anchor="middle">0</text><circle cx="220" cy="90" r="3" fill="#10b981" /><text x="220" y="102" font-size="8" font-weight="bold" fill="#047857" text-anchor="middle">1</text><text x="260" y="93" font-size="8.5" font-family="serif" font-style="italic" fill="#475569">R</text><path d="M 60 78 C 80 110, 130 95, 155 90.5" fill="none" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="2,2" marker-end="url(#arrow)" /><path d="M 75 75 C 110 50, 180 65, 215 88.5" fill="none" stroke="#10b981" stroke-width="1.2" stroke-dasharray="2,2" marker-end="url(#arrow)" /><text x="135" y="45" font-size="9.5" font-weight="bold" fill="#3b82f6" text-anchor="middle">X(s)</text></svg>',
                    svgDescription: "Representación de una variable aleatoria X como una función que mapea los sucesos cualitativos del espacio muestral {Cara, Escudo} a los valores numéricos discretos {1, 0} en la recta real.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Clasifica de forma analítica las siguientes variables en un centro escolar: a) La cantidad de respuestas correctas en un test de 5 preguntas, b) La estatura en metros de los tutores de CEDETU en Antigua Guatemala.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Analizar variable a:</strong> Las respuestas correctas se obtienen mediante un conteo de elementos individuales. El rango de valores posibles es $\\{0, 1, 2, 3, 4, 5\\}$. Son valores discretos y aislados. Por lo tanto, es una **Variable Aleatoria Discreta**.</li><li><strong>Paso 2: Analizar variable b:</strong> La estatura es una magnitud física continua que se mide con un instrumento. No pasa saltando de 1.70m a 1.80m de golpe; admite infinitos valores decimales intermedios (ej. 1.7345m) dependiendo de la precisión del metro. Por lo tanto, es una **Variable Aleatoria Continua**.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> a) Variable aleatoria discreta, b) Variable aleatoria continua.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Creer que el dinero es discreto:</strong> Pensar que la variable "salario" es discreta porque los centavos se cortan en dos decimales. Teóricamente, el dinero mide valor financiero continuo y se modela en estadística avanzada utilizando variables continuas.</li></ul>',
                    exercises: [
                        {
                            question: "Clasifica la variable aleatoria 'número de materias reprobadas por un estudiante en el ciclo escolar'. Escribe 'discreta' o 'continua':",
                            correctAnswer: "discreta",
                            hint: "Piensa si puedes reprobar 1.5 materias o si solo toma valores enteros contables como 0, 1, 2...",
                            feedbackCorrect: "¡Excelente! Solo se pueden reprobar números enteros de materias, por lo tanto es una variable discreta.",
                            feedbackIncorrect: "Incorrecto. Se mide en valores enteros contables, por lo que es 'discreta'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Clasifica 'la temperatura exacta del aula de tutorías en Quetzaltenango medida con un termómetro digital de alta precisión'. Escribe 'discreta' o 'continua':",
                            correctAnswer: "continua",
                            hint: "La temperatura es una medición física que admite infinitos decimales intermedios.",
                            feedbackCorrect: "¡Perfecto! Al ser una magnitud física que admite decimales en un intervalo, es continua.",
                            feedbackIncorrect: "Incorrecto. La temperatura varía de forma fluida y continua, por lo que es 'continua'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el dominio de definición matemático de una función de variable aleatoria X?",
                            options: [
                                "La recta de los números reales R.",
                                "El espacio muestral Omega que contiene todos los resultados posibles del experimento.",
                                "La suma de las probabilidades individuales.",
                                "El conjunto vacío de sucesos imposibles."
                            ],
                            correctAnswer: 1,
                            hint: "La función toma elementos del espacio de resultados reales y los convierte en números.",
                            feedbackCorrect: "¡Brillante! El dominio es el espacio muestral Omega, y su rango es un subconjunto de los reales.",
                            feedbackIncorrect: "Incorrecto. Su dominio es el espacio muestral Omega del experimento.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Clasifica 'la distancia en kilómetros que recorre un estudiante para llegar al centro de tutorías'. Escribe 'discreta' o 'continua':",
                            correctAnswer: "continua",
                            hint: "La distancia se mide en longitud y admite fracciones y decimales de cualquier tamaño.",
                            feedbackCorrect: "¡Excelente! La distancia es de naturaleza continua, admite decimales.",
                            feedbackIncorrect: "Incorrecto. Admite infinitas subdivisiones métricas, por lo tanto es 'continua'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Clasifica la variable aleatoria 'número de caras obtenidas al lanzar 3 monedas al aire'. Escribe 'discreta' o 'continua':",
                            correctAnswer: "discreta",
                            hint: "Solo puedes obtener 0, 1, 2 o 3 caras. Valores enteros contables.",
                            feedbackCorrect: "¡Perfecto! Los resultados son contables e individuales, es una variable discreta.",
                            feedbackIncorrect: "Incorrecto. Se cuentan elementos enteros, es 'discreta'.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Una variable aleatoria ($X$) asigna números a los resultados de un espacio muestral. Puede ser discreta (valores enteros contables) o continua (valores decimales medibles).",
                    videoPlaceholderText: "Video de Probabilidad: Qué es una variable aleatoria y ejemplos de clasificación."
                },
                {
                    id: "funcion-masa-probabilidad",
                    title: "Lección 1.2: Función de Masa de Probabilidad",
                    introduction: "Estructura y valida distribuciones de probabilidad discreta aplicando los dos axiomas fundamentales de probabilidad.",
                    explanationHtml: '<p>Para una variable aleatoria discreta $X$, no utilizamos curvas continuas. En su lugar, definimos una <strong>Función de Masa de Probabilidad (FMP)</strong>, denotada como $P(X = x)$ o $p(x)$, que asigna de forma directa una probabilidad exacta a cada valor posible $x$ de la variable.</p><p class="mt-2">Para que una función sea una FMP válida, debe cumplir estrictamente con los siguientes **dos axiomas fundamentales**:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>1. No negatividad:</strong> Cada probabilidad individual debe ser mayor o igual a cero y menor o igual a uno: <br>$$0 \\le P(X = x) \\le 1$$</li><li><strong>2. Suma Unitaria:</strong> La suma de todas las probabilidades asociadas a cada uno de los valores posibles del rango de la variable debe ser exactamente igual a uno: <br>$$\\sum P(X = x) = 1.00$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Condiciones de Masa de Probabilidad</p><p class="text-xs font-mono font-bold text-primary">0 &le; P(X = x) &le; 1 &nbsp;|&nbsp; &sum; P(X = x) = 1.00</p><p class="text-xs text-slate-550">Si la suma de probabilidades es diferente de 1.00, la distribución está mal definida.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">FUNCIÓN DE MASA DE PROBABILIDAD</text><line x1="40" y1="100" x2="260" y2="100" stroke="#94a3b8" stroke-width="1.5" /><line x1="40" y1="30" x2="40" y2="100" stroke="#94a3b8" stroke-width="1" /><text x="32" y="93" font-size="7" fill="#64748b" text-anchor="end">0.0</text><text x="32" y="65" font-size="7" fill="#64748b" text-anchor="end">0.5</text><text x="32" y="37" font-size="7" fill="#64748b" text-anchor="end">1.0</text><line x1="80" y1="100" x2="80" y2="72" stroke="#3b82f6" stroke-width="3" /><circle cx="80" cy="72" r="4.5" fill="#1d4ed8" /><text x="80" y="112" font-size="8" font-weight="bold" fill="#475569" text-anchor="middle">x = 0</text><text x="80" y="62" font-size="7.5" font-weight="bold" fill="#1d4ed8" text-anchor="middle">0.40</text><line x1="150" y1="100" x2="150" y2="65" stroke="#10b981" stroke-width="3" /><circle cx="150" cy="65" r="4.5" fill="#047857" /><text x="150" y="112" font-size="8" font-weight="bold" fill="#475569" text-anchor="middle">x = 1</text><text x="150" y="55" font-size="7.5" font-weight="bold" fill="#047857" text-anchor="middle">0.50</text><line x1="220" y1="100" x2="220" y2="93" stroke="#f59e0b" stroke-width="3" /><circle cx="220" cy="93" r="4.5" fill="#b45309" /><text x="220" y="112" font-size="8" font-weight="bold" fill="#475569" text-anchor="middle">x = 2</text><text x="220" y="83" font-size="7.5" font-weight="bold" fill="#b45309" text-anchor="middle">0.10</text></svg>',
                    svgDescription: "Gráfico de bastones de una función de masa de probabilidad para x = {0, 1, 2} con probabilidades {0.40, 0.50, 0.10}. Nota que la suma total es exactamente 1.00.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Se diseña una variable discreta $X$ que describe la cantidad de tutorías solicitadas al día. Se proponen las probabilidades: $P(1) = 0.45$, $P(2) = 0.35$ y $P(3) = k$. Determina analíticamente el valor que debe tomar la constante $k$ para que la distribución sea válida.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Aplicar axioma de la suma unitaria:</strong> La suma de todas las probabilidades debe dar exactamente 1: <br>$$P(1) + P(2) + P(3) = 1.00$$</li><li><strong>Paso 2: Reemplazar valores conocidos:</strong> <br>$$0.45 + 0.35 + k = 1.00$$</li><li><strong>Paso 3: Despejar la variable k:</strong> <br>$$0.80 + k = 1.00 \\implies k = 1.00 - 0.80 = 0.20$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El valor de $k$ debe ser exactamente <strong>0.20</strong>. Dado que $0.20$ es positivo y menor a 1, la FMP es válida.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Ignorar probabilidades negativas:</strong> Dar como válida una distribución cuya suma da 1.00 pero que tiene un valor negativo como $P(X) = -0.20$ y otro mayor a 1 como $P(Y) = 1.20$. Recuerda que cada probabilidad individual debe estar estrictamente en el intervalo $[0, 1]$.</li></ul>',
                    exercises: [
                        {
                            question: "Si una distribución discreta tiene P(0) = 0.15, P(1) = 0.55 y P(2) = k, ¿cuál debe ser el valor numérico decimal de k para que sea válida? (Ingresa el número con punto decimal):",
                            correctAnswer: "0.3",
                            hint: "Aplica el axioma de la suma: 0.15 + 0.55 + k = 1.00.",
                            feedbackCorrect: "¡Excelente! k = 1.00 - 0.70 = 0.30.",
                            feedbackIncorrect: "Incorrecto. k debe ser 1.00 - (0.15 + 0.55) = 0.30.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Es válida la siguiente función de probabilidad: P(1) = 0.70, P(2) = -0.10, P(3) = 0.40? Escribe 'si' o 'no':",
                            correctAnswer: "no",
                            hint: "Verifica si alguna de las probabilidades propuestas viola la regla de no negatividad.",
                            feedbackCorrect: "¡Perfecto! No es válida porque existe una probabilidad negativa (P(2) = -0.10), lo cual es imposible.",
                            feedbackIncorrect: "Incorrecto. No es válida porque las probabilidades no pueden ser negativas.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si lanzas un dado justo de 6 caras, ¿cuál es el valor decimal exacto de la probabilidad acumulada F(2) = P(X <= 2)? (Redondea a 3 decimales usando punto):",
                            correctAnswer: "0.333",
                            hint: "Suma la probabilidad de obtener 1 y obtener 2: 1/6 + 1/6 = 2/6 = 1/3.",
                            feedbackCorrect: "¡Excelente! F(2) = P(1) + P(2) = 2/6 = 0.333.",
                            feedbackIncorrect: "Incorrecto. P(X <= 2) = P(1) + P(2) = 2/6 = 0.333.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si la función de distribución acumulada para X = 2 es F(2) = 0.75 y para X = 3 es F(3) = 0.90, ¿cuál es la probabilidad exacta de que la variable tome el valor 3, P(X = 3)? (Ingresa el número con punto):",
                            correctAnswer: "0.15",
                            hint: "Aplica la propiedad de la acumulada: P(X = x) = F(x) - F(x-1).",
                            feedbackCorrect: "¡Excelente! P(X=3) = F(3) - F(2) = 0.90 - 0.75 = 0.15.",
                            feedbackIncorrect: "Incorrecto. P(X=3) = F(3) - F(2) = 0.90 - 0.75 = 0.15.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuál de las siguientes condiciones define de forma correcta la función de distribución acumulada F(x) para una variable discreta?",
                            options: [
                                "F(x) = P(X = x)",
                                "F(x) = P(X <= x) = sum_{x_i <= x} P(X = x_i)",
                                "F(x) = P(X > x) = 1 - P(X <= x)",
                                "F(x) = sum P(X = x) = 1.00"
                            ],
                            correctAnswer: 1,
                            hint: "La palabra 'acumulada' indica que suma todas las probabilidades hasta el valor de interés inclusive.",
                            feedbackCorrect: "¡Perfecto! F(x) representa la probabilidad acumulada P(X <= x).",
                            feedbackIncorrect: "Incorrecto. Por definición acumulada, F(x) = P(X <= x).",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La función de masa de probabilidad $P(X = x)$ asigna probabilidades a valores discretos de modo que $0 \\le P(X) \\le 1$ y su suma sea exactamente 1.00.",
                    videoPlaceholderText: "Video de Probabilidad: Cómo verificar si una tabla es una distribución de probabilidad válida."
                },
                {
                    id: "valor-esperado-varianza-discreta",
                    title: "Lección 1.3: Valor Esperado y Varianza Discreta",
                    introduction: "Calcula el valor esperado, varianza y desviación estándar de variables discretas para predecir comportamientos promedio.",
                    explanationHtml: '<p>Para resumir el comportamiento de una variable aleatoria discreta, calculamos sus parámetros poblacionales principales:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Valor Esperado ($E[X]$ o $\\mu$):</strong> Es el promedio ponderado de todos los valores posibles de la variable, utilizando sus probabilidades individuales como ponderación. Representa el valor medio teórico a largo plazo si repitiéramos el experimento infinitas veces: <br>$$E[X] = \\mu = \\sum x_i \\cdot P(X = x_i)$$</li><li><strong>Varianza ($Var[X]$ o $\\sigma^2$):</strong> Mide la dispersión promedio al cuadrado de los valores con respecto a su media: <br>$$Var[X] = \\sigma^2 = \\sum (x_i - \\mu)^2 \\cdot P(X = x_i)$$ o mediante la fórmula computacional simplificada: <br>$$Var[X] = E[X^2] - \\mu^2 = \\left(\\sum x_i^2 \\cdot P(X = x_i)\\right) - \\mu^2$$</li><li><strong>Desviación Estándar ($\\sigma$):</strong> Es la raíz cuadrada de la varianza, expresada en las mismas unidades originales de la variable.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuaciones Clave de Parámetros</p><p class="text-xs font-mono font-bold text-primary">&mu; = &sum;x_i P(x_i) &nbsp;|&nbsp; &sigma;^2 = &sum;x_i^2 P(x_i) - &mu;^2 &nbsp;|&nbsp; &sigma; = &radic;&sigma;^2</p><p class="text-xs text-slate-550">El valor esperado no tiene que ser un valor que la variable pueda tomar realmente (ej. 2.2 hijos).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">VALOR ESPERADO COMO BALANCÍN</text><line x1="30" y1="80" x2="270" y2="80" stroke="#475569" stroke-width="2" /><circle cx="60" cy="72" r="6" fill="#3b82f6" stroke="#1d4ed8" /><text x="60" y="62" font-size="7.5" fill="#1e40af" font-weight="bold" text-anchor="middle">x = 1</text><circle cx="210" cy="72" r="6" fill="#3b82f6" stroke="#1d4ed8" /><text x="210" y="62" font-size="7.5" fill="#1e40af" font-weight="bold" text-anchor="middle">x = 3</text><polygon points="150,80 142,98 158,98" fill="#ef4444" stroke="#b91c1c" stroke-width="1" /><text x="150" y="110" font-size="8.5" fill="#b91c1c" font-weight="bold" text-anchor="middle">Media &mu; = 2.2</text></svg>',
                    svgDescription: "El valor esperado interpretado físicamente como el punto de equilibrio o baricentro de una palanca. Con valores x=1 (prob 0.40) y x=3 (prob 0.60), el balancín se equilibra exactamente en 2.2.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Una variable discreta $X$ toma los valores $1$ y $3$ con probabilidades $P(1) = 0.40$ y $P(3) = 0.60$. Calcula de forma detallada su valor esperado, varianza y desviación estándar.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Calcular el Valor Esperado ($\\mu$):</strong> <br>$$\\mu = (1 \\cdot 0.40) + (3 \\cdot 0.60) = 0.40 + 1.80 = 2.20$$</li><li><strong>Paso 2: Calcular el segundo momento ($E[X^2]$):</strong> <br>$$E[X^2] = (1^2 \\cdot 0.40) + (3^2 \\cdot 0.60) = (1 \\cdot 0.40) + (9 \\cdot 0.60) = 0.40 + 5.40 = 5.80$$</li><li><strong>Paso 3: Calcular la Varianza ($\\sigma^2$):</strong> <br>$$\\sigma^2 = E[X^2] - \\mu^2 = 5.80 - (2.20)^2 = 5.80 - 4.84 = 0.96$$</li><li><strong>Paso 4: Calcular la Desviación Estándar ($\\sigma$):</strong> <br>$$\\sigma = \\sqrt{0.96} \\approx 0.98$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultados:</strong> El valor esperado es <strong>2.20</strong>, la varianza es <strong>0.96</strong> y la desviación estándar es <strong>0.98</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar elevar la media al cuadrado:</strong> Restar la media directamente $\\mu$ en lugar de restar su cuadrado $\\mu^2$ al calcular la varianza: $Var[X] = E[X^2] - \\mu$ (Incorrecto). Recuerda usar siempre la fórmula correcta $E[X^2] - \\mu^2$.</li></ul>',
                    exercises: [
                        {
                            question: "Calcula el valor esperado de una variable aleatoria X que toma los valores 0 y 10 con igual probabilidad de 0.50 cada uno. (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "Multiplica cada valor por su probabilidad y suma: E[X] = 0*0.50 + 10*0.50.",
                            feedbackCorrect: "¡Excelente! E[X] = 0 + 5 = 5.",
                            feedbackIncorrect: "Incorrecto. El valor esperado es (0 * 0.5) + (10 * 0.5) = 5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si el valor esperado de una distribución es 3 y E[X^2] es 13, ¿cuál es el valor numérico entero de la varianza? (Ingresa solo el número entero):",
                            correctAnswer: "4",
                            hint: "Aplica la fórmula Var[X] = E[X^2] - (E[X])^2.",
                            feedbackCorrect: "¡Perfecto! Varianza = 13 - 3^2 = 13 - 9 = 4.",
                            feedbackIncorrect: "Incorrecto. Varianza = E[X^2] - μ^2 = 13 - 3^2 = 4.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Con los datos del ejercicio anterior (Varianza = 4), ¿cuánto vale la desviación estándar? (Ingresa solo el número entero):",
                            correctAnswer: "2",
                            hint: "Calcula la raíz cuadrada de la varianza obtenida.",
                            feedbackCorrect: "¡Excelente! La desviación estándar es la raíz cuadrada de 4, que es 2.",
                            feedbackIncorrect: "Incorrecto. σ = √Var = √4 = 2.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si una rifa en Antigua vende boletos a Q10 y el premio tiene un valor esperado de ganancia matemática neta de -Q3 para el jugador, ¿cuál es la interpretación correcta?",
                            options: [
                                "Que el jugador ganará Q3 fijos en cada boleto que compre.",
                                "Que si el jugador compra muchos boletos a largo plazo, perderá en promedio Q3 por cada boleto comprado.",
                                "Que la rifa es una estafa y nadie ganará nada.",
                                "Que la varianza del premio es cero."
                            ],
                            correctAnswer: 1,
                            hint: "Un valor esperado negativo de ganancia indica pérdidas promedio acumuladas en repeticiones.",
                            feedbackCorrect: "¡Perfecto! Representa el comportamiento promedio a largo plazo: una pérdida promedio de Q3 por boleto.",
                            feedbackIncorrect: "Incorrecto. Significa que a la larga se perderán en promedio Q3 por boleto comprado.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Calcula E[X^2] si la variable X toma el valor 2 con probabilidad 0.30 y el valor 4 con probabilidad 0.70. (Ingresa el número con punto decimal):",
                            correctAnswer: "12.4",
                            hint: "Eleva cada valor al cuadrado, multiplícalo por su probabilidad y suma: E[X^2] = 2^2*0.30 + 4^2*0.70.",
                            feedbackCorrect: "¡Excelente! E[X^2] = 4*0.30 + 16*0.70 = 1.20 + 11.20 = 12.40.",
                            feedbackIncorrect: "Incorrecto. E[X^2] = 4*0.30 + 16*0.70 = 12.40.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "El valor esperado ($\\mu = \\sum x_i P(x_i)$) representa la media teórica a largo plazo, y la varianza ($\\sigma^2 = E[X^2] - \\mu^2$) mide la variabilidad de la distribución.",
                    videoPlaceholderText: "Video de Probabilidad: Cómo calcular media y varianza de una tabla de probabilidad paso a paso."
                }
            ]
        },
        {
            title: "Unidad 2: La Distribución Binomial",
            lessons: [
                {
                    id: "proceso-bernoulli-binomial",
                    title: "Lección 2.1: El Proceso de Bernoulli y la Distribución Binomial",
                    introduction: "Identifica si un problema del mundo real cumple con los 4 supuestos lógicos de un experimento binomial.",
                    explanationHtml: '<p>Muchos experimentos aleatorios prácticos consisten en una serie de pruebas repetidas donde solo hay dos resultados lógicos posibles: el cliente compra o no compra, el examen es aprobado o reprobado, el artículo está defectuoso o excelente. Estos problemas se modelan con la <strong>distribución binomial</strong>.</p><p class="mt-2">Un experimento binomial es el resultado de un <strong>Proceso de Bernoulli</strong> que debe cumplir de forma rigurosa con los siguientes 4 postulados:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>1. n Ensayos Fijos:</strong> El experimento consta de un número entero fijo y predeterminado de ensayos repetidos independientes ($n$).</li><li><strong>2. Resultados Dicotómicos:</strong> Cada ensayo admite únicamente dos resultados posibles: **Éxito** (lo que buscamos medir) y **Fracaso** (el complemento).</li><li><strong>3. Probabilidad Constante:</strong> La probabilidad de éxito ($p$) es constante en cada una de las pruebas. La probabilidad de fracaso se denota como $q = 1 - p$.</li><li><strong>4. Independencia:</strong> El resultado de cualquier ensayo no afecta ni tiene influencia sobre el resultado de los demás ensayos.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Parámetros Binomiales</p><p class="text-xs font-mono font-bold text-primary">n = ensayos &nbsp;|&nbsp; p = prob. éxito &nbsp;|&nbsp; q = 1 - p (prob. fracaso)</p><p class="text-xs text-slate-550">Si las extracciones son sin reemplazo en grupos pequeños, p cambia y el proceso deja de ser binomial.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ÁRBOL DE BERNOULLI</text><circle cx="60" cy="60" r="6" fill="#475569" /><line x1="66" y1="60" x2="160" y2="35" stroke="#3b82f6" stroke-width="1.5" /><line x1="66" y1="60" x2="160" y2="85" stroke="#ef4444" stroke-width="1.5" /><rect x="160" y="25" width="80" height="20" fill="#eff6ff" stroke="#3b82f6" rx="4" /><text x="200" y="37" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">Éxito (p)</text><rect x="160" y="75" width="80" height="20" fill="#fef2f2" stroke="#ef4444" rx="4" /><text x="200" y="87" font-size="8" font-weight="bold" fill="#b91c1c" text-anchor="middle">Fracaso (q = 1-p)</text><text x="110" y="40" font-size="8.5" font-weight="bold" fill="#2563eb" text-anchor="middle">p</text><text x="110" y="85" font-size="8.5" font-weight="bold" fill="#dc2626" text-anchor="middle">1 - p</text></svg>',
                    svgDescription: "Diagrama de decisión de un único ensayo de Bernoulli. Se ramifica en un éxito con probabilidad p o en un fracaso con probabilidad q = 1-p.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Lanzas un dado de 6 caras 8 veces. Consideras como "éxito" obtener un número par en el dado. Analiza de forma teórica si este caso se modela como una distribución binomial y define sus parámetros.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Evaluar los postulados.</strong> <br>1) Hay $n = 8$ lanzamientos fijos. (Cumple).<br>2) Cada dado solo puede dar Par (Éxito) o Impar (Fracaso). (Dicotómico, cumple).<br>3) La probabilidad de obtener par es constante: 3 de 6 caras $\\implies p = 0.50$ en cada lanzamiento. (Cumple).<br>4) Lanzar un dado no afecta los resultados siguientes. (Independiente, cumple).</li><li><strong>Paso 2: Definir parámetros de la distribución.</strong> <br>El número de ensayos es $n = 8$, y la probabilidad de éxito es $p = 0.50$. La variable $X$ modela la cantidad de éxitos obtenidos, denotado como: <br>$$X \\sim B(8, 0.50)$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> El experimento es perfectamente binomial con parámetros $n = 8$ y $p = 0.50$.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Aplicar binomial en muestreos sin reemplazo:</strong> Extraer 5 cartas consecutivas de una baraja sin volver a meterlas. Al no haber reemplazo, la probabilidad de éxito $p$ cambia en cada extracción, violando el postulado 3. Esto se modela con la distribución hipergeométrica, no la binomial.</li></ul>',
                    exercises: [
                        {
                            question: "Si la probabilidad de éxito p de un experimento binomial es 0.18, ¿cuál es el valor decimal de la probabilidad de fracaso q? (Ingresa el número con punto decimal):",
                            correctAnswer: "0.82",
                            hint: "Aplica q = 1 - p. Resta 1.00 - 0.18.",
                            feedbackCorrect: "¡Excelente! q = 1.00 - 0.18 = 0.82.",
                            feedbackIncorrect: "Incorrecto. q se calcula como 1 - p = 1.00 - 0.18 = 0.82.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si una variable aleatoria X sigue una distribución binomial de la forma X ~ B(12, 0.35), ¿cuál es el número total de ensayos n en el experimento? (Ingresa solo el número entero):",
                            correctAnswer: "12",
                            hint: "En la denotación X ~ B(n, p), el primer número entero corresponde a la cantidad de ensayos.",
                            feedbackCorrect: "¡Perfecto! n = 12.",
                            feedbackIncorrect: "Incorrecto. La denotación X ~ B(n, p) indica que n = 12.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Con los mismos datos del ejercicio anterior X ~ B(12, 0.35), ¿cuál es el número máximo posible de éxitos que se pueden obtener en la práctica? (Ingresa solo el número entero):",
                            correctAnswer: "12",
                            hint: "No se pueden obtener más éxitos que el número total de ensayos realizados.",
                            feedbackCorrect: "¡Excelente! El máximo de éxitos posible es n = 12.",
                            feedbackIncorrect: "Incorrecto. El número máximo de éxitos es igual al total de ensayos: 12.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Se extraen 3 bolas sin reemplazo de una urna pequeña que contiene 5 bolas rojas y 5 azules. ¿Es un experimento binomial si definimos éxito como extraer bola roja?",
                            options: [
                                "Sí, porque solo hay dos colores posibles (rojo o azul).",
                                "No, porque al ser 'sin reemplazo' la probabilidad de extraer roja cambia en cada turno, violando el supuesto de probabilidad constante.",
                                "Sí, porque el número de ensayos es pequeño (n = 3).",
                                "No, porque las bolas azules pesan más."
                            ],
                            correctAnswer: 1,
                            hint: "La clave está en si la probabilidad p permanece constante en cada bola que sacamos.",
                            feedbackCorrect: "¡Excelente! Sin reemplazo las extracciones no son independientes, por lo que no es binomial.",
                            feedbackIncorrect: "Incorrecto. Al ser sin reemplazo la probabilidad p no es constante; no es binomial.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "En un examen de selección múltiple de 10 preguntas, cada pregunta tiene 4 opciones y solo una es correcta. Si respondes al azar, ¿cuál es el valor decimal de p?",
                            correctAnswer: "0.25",
                            hint: "Divide 1 opción correcta entre 4 opciones posibles.",
                            feedbackCorrect: "¡Perfecto! p = 1/4 = 0.25.",
                            feedbackIncorrect: "Incorrecto. Al haber una opción correcta de cuatro, p = 1/4 = 0.25.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Un proceso binomial consta de $n$ ensayos independientes con resultados dicotómicos (éxito con probabilidad $p$ constante, o fracaso con $q = 1-p$).",
                    videoPlaceholderText: "Video de Probabilidad: Qué es un experimento binomial y sus condiciones teóricas."
                },
                {
                    id: "formula-binomial",
                    title: "Lección 2.2: La Fórmula Binomial",
                    introduction: "Calcula probabilidades binomiales exactas para k éxitos utilizando la fórmula combinatoria y factoriales.",
                    explanationHtml: '<p>La <strong>Fórmula de Probabilidad Binomial</strong> calcula de forma exacta la probabilidad de obtener exactamente $k$ éxitos en un total de $n$ ensayos independientes:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot q^{n-k}$$</p><p class="mt-2 text-slate-700">Donde:</p><ul class="list-disc pl-5 space-y-1.5 my-2"><li><strong>$\\binom{n}{k}$ (Coeficiente Combinatorio):</strong> Representa el número de formas diferentes en que se pueden ordenar $k$ éxitos en $n$ posiciones. Se calcula mediante factoriales: <br>$$\\binom{n}{k} = C(n, k) = \\frac{n!}{k! \\cdot (n-k)!}$$</li><li><strong>$p^k$:</strong> Probabilidad de que ocurran los $k$ éxitos individuales.</li><li><strong>$q^{n-k}$:</strong> Probabilidad de que ocurran los $n-k$ fracasos restantes.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuación Binomial Exacta</p><p class="text-xs font-mono font-bold text-primary">P(X=k) = C(n,k) * p^k * q^(n-k) &nbsp;|&nbsp; C(n,k) = n! / [k!(n-k)!]</p><p class="text-xs text-slate-550">Herramienta: n! es el producto de todos los enteros desde 1 hasta n (ej: 3! = 3*2*1 = 6).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">DESGLOSE FÓRMULA BINOMIAL</text><rect x="20" y="28" width="260" height="82" fill="#eff6ff" stroke="#bfdbfe" rx="8" /><text x="150" y="48" font-size="11.5" font-family="monospace" font-weight="extrabold" fill="#1e40af" text-anchor="middle">P(X = k) = C(n, k) &middot; p^k &middot; q^(n-k)</text><line x1="60" y1="58" x2="60" y2="78" stroke="#3b82f6" stroke-width="1" stroke-dasharray="2,2" /><text x="60" y="88" font-size="7" fill="#1d4ed8" font-weight="bold" text-anchor="middle">Combinatoria</text><text x="60" y="96" font-size="6.5" fill="#475569" text-anchor="middle">Formas de ordenar</text><line x1="148" y1="58" x2="148" y2="78" stroke="#10b981" stroke-width="1" stroke-dasharray="2,2" /><text x="148" y="88" font-size="7" fill="#047857" font-weight="bold" text-anchor="middle">Éxitos</text><text x="148" y="96" font-size="6.5" fill="#475569" text-anchor="middle">p elevado a k</text><line x1="225" y1="58" x2="225" y2="78" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2,2" /><text x="225" y="88" font-size="7" fill="#b45309" font-weight="bold" text-anchor="middle">Fracasos</text><text x="225" y="96" font-size="6.5" fill="#475569" text-anchor="middle">q elevado a (n-k)</text></svg>',
                    svgDescription: "Desglose visual y pedagógico de cada término en la fórmula binomial: combinaciones posibles, potencia de éxitos y potencia de fracasos.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un vendedor de CEDETU en Antigua sabe que la probabilidad de cerrar una venta con un interesado es del 80% ($p = 0.80$, $q = 0.20$). Si hoy atiende a $3\\text{ clientes}$ independientes ($n = 3$), calcula la probabilidad de que cierre exactamente 2 ventas ($k = 2$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Calcular el coeficiente combinatorio $\\binom{3}{2}$ o $C(3,2)$:</strong> <br>$$\\binom{3}{2} = \\frac{3!}{2! \\cdot (3-2)!} = \\frac{3 \\cdot 2 \\cdot 1}{(2 \\cdot 1) \\cdot 1!} = \\frac{6}{2 \\cdot 1} = 3$$ Existen 3 combinaciones ordenadas posibles (V-V-N, V-N-V, N-V-V).</li><li><strong>Paso 2: Calcular el término de éxitos y fracasos:</strong> <br>$$p^k = (0.80)^2 = 0.64$$ <br>$$q^{n-k} = (0.20)^{3-2} = (0.20)^1 = 0.20$$</li><li><strong>Paso 3: Multiplicar todo en la fórmula binomial:</strong> <br>$$P(X = 2) = 3 \\cdot 0.64 \\cdot 0.20 = 3 \\cdot 0.128 = 0.384$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La probabilidad de cerrar exactamente 2 ventas es del <strong>0.384</strong> o <strong>38.4%</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir las potencias de p y q:</strong> Elevar $p$ al número de fracasos y $q$ al número de éxitos por descuido. Ten presente que el éxito $p$ va asociado a los $k$ éxitos requeridos ($p^k$), y el fracaso $q$ al resto ($q^{n-k}$).</li></ul>',
                    exercises: [
                        {
                            question: "Calcula el coeficiente combinatorio C(4, 2) de forma exacta. (Ingresa solo el número entero):",
                            correctAnswer: "6",
                            hint: "Aplica la fórmula: 4! / (2! * 2!). Reemplaza factoriales: 24 / (2 * 2) = 24 / 4.",
                            feedbackCorrect: "¡Excelente! C(4,2) = 6.",
                            feedbackIncorrect: "Incorrecto. C(4,2) = 24 / (2 * 2) = 6.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Lanzas 3 monedas justas al aire (p = 0.50, q = 0.50). ¿Cuál es el valor decimal de la probabilidad de obtener exactamente 3 caras (k = 3)? (Ingresa el número con punto decimal):",
                            correctAnswer: "0.125",
                            hint: "Aplica la fórmula binomial con n = 3, k = 3 y p = 0.50. C(3,3) = 1.",
                            feedbackCorrect: "¡Perfecto! P(X=3) = 1 * (0.50)^3 * (0.50)^0 = 0.125.",
                            feedbackIncorrect: "Incorrecto. La probabilidad es C(3,3)*(0.5)^3 = 0.125.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si la probabilidad de que una semilla germine es 90% (p = 0.90, q = 0.10) en Sololá. Si se plantan 3 semillas, ¿cuál es la probabilidad decimal de que germinen exactamente las 3? (Ingresa el número con punto decimal):",
                            correctAnswer: "0.729",
                            hint: "Aplica la fórmula binomial con n = 3, k = 3 y p = 0.90. C(3,3) = 1.",
                            feedbackCorrect: "¡Excelente! P(X=3) = 1 * (0.90)^3 * (0.10)^0 = 0.729.",
                            feedbackIncorrect: "Incorrecto. P(X=3) = (0.90)^3 = 0.729.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Calcula el valor entero del coeficiente combinatorio C(5, 1). (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "C(n, 1) siempre es igual a n por definición combinatoria.",
                            feedbackCorrect: "¡Excelente! C(5,1) = 5.",
                            feedbackIncorrect: "Incorrecto. C(5,1) = 5! / (1! * 4!) = 5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si X ~ B(3, 0.50), calcula la probabilidad exacta de obtener exactamente 1 éxito, P(X = 1). (Ingresa el número con punto decimal):",
                            correctAnswer: "0.375",
                            hint: "Aplica la fórmula: C(3, 1) * p^1 * q^2 = 3 * 0.5 * 0.25.",
                            feedbackCorrect: "¡Perfecto! P(X=1) = 3 * 0.5 * 0.25 = 0.375.",
                            feedbackIncorrect: "Incorrecto. P(X=1) = 3 * 0.125 = 0.375.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La fórmula binomial $P(X = k) = \\binom{n}{k} p^k q^{n-k}$ calcula la probabilidad de obtener exactamente $k$ éxitos en $n$ ensayos repetidos.",
                    videoPlaceholderText: "Video de Probabilidad: Cómo calcular probabilidades con la fórmula binomial paso a paso."
                },
                {
                    id: "media-desviacion-binomial",
                    title: "Lección 2.3: Media y Desviación Estándar Binomial",
                    introduction: "Calcula de forma simplificada la media, varianza y desviación estándar de una distribución binomial sin usar sumatorias complejas.",
                    explanationHtml: '<p>Una de las mayores ventajas de la distribución binomial es que, debido a su estructura simétrica de ensayos idénticos, no necesitamos aplicar las largas fórmulas de sumatoria de variables discretas para calcular sus parámetros poblacionales. Podemos hallarlos de forma **directa e instantánea** mediante las siguientes ecuaciones deducidas analíticamente:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Media (Valor Esperado, $\\mu$):</strong> Representa el número promedio esperado de éxitos que se obtendrán al realizar los $n$ ensayos: <br>$$\\mu = n \\cdot p$$</li><li><strong>Varianza ($\\sigma^2$):</strong> Mide la variabilidad al cuadrado del número de éxitos obtenidos: <br>$$\\sigma^2 = n \\cdot p \\cdot q$$</li><li><strong>Desviación Estándar ($\\sigma$):</strong> Mide la dispersión típica alrededor del promedio en unidades de éxitos: <br>$$\\sigma = \\sqrt{n \\cdot p \\cdot q}$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmulas Abreviadas Binomiales</p><p class="text-xs font-mono font-bold text-primary">&mu; = n * p &nbsp;|&nbsp; &sigma;^2 = n * p * q &nbsp;|&nbsp; &sigma; = &radic;(n * p * q)</p><p class="text-xs text-slate-550">Herramienta: Al usar estas fórmulas, recuerda que q = 1 - p siempre.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ENVELOPE PARÁMETROS BINOMIALES</text><path d="M 40 100 Q 150 20 260 100" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="2,2" /><line x1="150" y1="100" x2="150" y2="40" stroke="#10b981" stroke-width="2.5" /><circle cx="150" cy="40" r="4" fill="#047857" /><line x1="150" y1="60" x2="200" y2="60" stroke="#ef4444" stroke-width="1.5" /><circle cx="200" cy="60" r="3" fill="#b91c1c" /><text x="150" y="112" font-size="8.5" font-weight="bold" fill="#475569" text-anchor="middle">n = 100 | p = 0.20</text><text x="142" y="55" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="end">Media &mu; = 20</text><text x="175" y="53" font-size="8" font-weight="bold" fill="#b91c1c" text-anchor="middle">Desv &sigma; = 4</text></svg>',
                    svgDescription: "Distribución de probabilidad binomial suavizada como una campana. Muestra la media central mu = 20 (verde) y la desviación estándar sigma = 4 (roja) para X ~ B(100, 0.20).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Una variable binomial se define como $X \\sim B(100, 0.20)$. Calcula su media, varianza y desviación estándar de forma directa.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Identificar parámetros base:</strong> <br>$$n = 100$$ <br>$$p = 0.20 \\implies q = 1 - 0.20 = 0.80$$</li><li><strong>Paso 2: Calcular la Media ($\\mu$):</strong> <br>$$\\mu = n \\cdot p = 100 \\cdot 0.20 = 20\\text{ éxitos}$$</li><li><strong>Paso 3: Calcular la Varianza ($\\sigma^2$):</strong> <br>$$\\sigma^2 = n \\cdot p \\cdot q = 100 \\cdot 0.20 \\cdot 0.80 = 20 \\cdot 0.80 = 16$$</li><li><strong>Paso 4: Calcular la Desviación Estándar ($\\sigma$):</strong> <br>$$\\sigma = \\sqrt{16} = 4\\text{ éxitos}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> En 100 ensayos, se esperan obtener en promedio <strong>20 éxitos</strong>, con una desviación estándar típica de <strong>4 éxitos</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar multiplicar por q:</strong> Calcular la desviación estándar de la binomial como $\\sigma = \\sqrt{n \\cdot p}$ (Incorrecto). Esto corresponde a la aproximación de Poisson, no a la binomial. Recuerda incluir siempre el factor $q$ en la varianza: $\\sigma^2 = n \\cdot p \\cdot q$.</li></ul>',
                    exercises: [
                        {
                            question: "Si X ~ B(50, 0.60), ¿cuál es el valor numérico entero de su media o valor esperado? (Ingresa solo el número entero):",
                            correctAnswer: "30",
                            hint: "Aplica la fórmula μ = n * p. Reemplaza n = 50 y p = 0.60.",
                            feedbackCorrect: "¡Excelente! Media = 50 * 0.60 = 30 éxitos.",
                            feedbackIncorrect: "Incorrecto. μ = n * p = 50 * 0.60 = 30.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula el valor numérico decimal de la varianza para la variable X ~ B(10, 0.50). (Ingresa el número con punto decimal):",
                            correctAnswer: "2.5",
                            hint: "Aplica la fórmula Var = n * p * q. Reemplaza n = 10, p = 0.50 y q = 0.50.",
                            feedbackCorrect: "¡Perfecto! Varianza = 10 * 0.50 * 0.50 = 2.50.",
                            feedbackIncorrect: "Incorrecto. La varianza es 10 * 0.5 * 0.5 = 2.5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si la media de una distribución binomial es 10 y p = 0.20, ¿cuál es el valor numérico entero de la cantidad de ensayos n? (Ingresa solo el número entero):",
                            correctAnswer: "50",
                            hint: "Despeja n de la fórmula de la media: n = μ / p = 10 / 0.20.",
                            feedbackCorrect: "¡Excelente! n = 10 / 0.20 = 50.",
                            feedbackIncorrect: "Incorrecto. n = μ / p = 10 / 0.20 = 50.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula la desviación estándar de X ~ B(200, 0.50) redondeada a dos decimales con punto:",
                            correctAnswer: "7.07",
                            hint: "Calcula la raíz cuadrada de la varianza: √(200 * 0.50 * 0.50) = √50.",
                            feedbackCorrect: "¡Perfecto! σ = √50 = 7.07.",
                            feedbackIncorrect: "Incorrecto. σ = √(200 * 0.25) = √50 ≈ 7.07.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si la varianza de una variable aleatoria binomial es 9 y n = 100, ¿cuál es el valor numérico entero de la desviación estándar? (Ingresa solo el número entero):",
                            correctAnswer: "3",
                            hint: "La desviación estándar es la raíz cuadrada de la varianza: σ = √Var.",
                            feedbackCorrect: "¡Excelente! σ = √9 = 3.",
                            feedbackIncorrect: "Incorrecto. La desviación estándar es √Var = √9 = 3.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Los parámetros binomiales abreviados son: media $\\mu = n p$, varianza $\\sigma^2 = n p q$ y desviación estándar $\\sigma = \\sqrt{n p q}$.",
                    videoPlaceholderText: "Video de Probabilidad: Media y desviación estándar en la distribución binomial."
                }
            ]
        },
        {
            title: "Unidad 3: La Distribución Normal",
            lessons: [
                {
                    id: "caracteristicas-distribucion-normal",
                    title: "Lección 3.1: Características de la Distribución Normal",
                    introduction: "Comprende la geometría y propiedades teóricas de la campana de Gauss y la Regla Empírica de dispersión.",
                    explanationHtml: '<p>La <strong>distribución normal (o campana de Gauss)</strong> es la distribución de probabilidad continua más importante de la ciencia. Modela variables naturales y sociales como estaturas, coeficientes intelectuales, errores de medición y rendimiento académico.</p><p class="mt-2">Sus propiedades teóricas fundamentales son:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Simetría Perfecta:</strong> La curva es perfectamente simétrica con respecto a su centro. La **media, mediana y moda coinciden** exactamente en el punto central.</li><li><strong>Asintótica:</strong> La curva es asintótica al eje $X$, lo que significa que se extiende infinitamente a izquierda ($-\\infty$) y derecha ($+\\infty$) sin tocar nunca el eje horizontal.</li><li><strong>Área Unitaria:</strong> El área total bajo la curva representa la certeza absoluta (100%), por ende es igual a **1.00**.</li><li><strong>Regla Empírica:</strong> <br>1) El intervalo $\\mu \\pm 1\\sigma$ contiene el **68.27%** de los datos.<br>2) El intervalo $\\mu \\pm 2\\sigma$ contiene el **95.45%** de los datos.<br>3) El intervalo $\\mu \\pm 3\\sigma$ contiene el **99.73%** de los datos.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Regla Empírica Normal</p><p class="text-xs font-mono font-bold text-primary">&mu; &plusmn; 1&sigma; = 68.2% &nbsp;|&nbsp; &mu; &plusmn; 2&sigma; = 95.4% &nbsp;|&nbsp; &mu; &plusmn; 3&sigma; = 99.7%</p><p class="text-xs text-slate-550">El punto más alto de la campana coincide siempre con la media poblacional &mu;.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">LA CAMPANA DE GAUSS</text><line x1="20" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="1.5" /><path d="M 30 100 C 90 100, 100 30, 150 30 C 200 30, 210 100, 270 100" fill="none" stroke="#3b82f6" stroke-width="2" /><line x1="150" y1="30" x2="150" y2="100" stroke="#10b981" stroke-width="1.5" /><circle cx="150" cy="30" r="3" fill="#047857" /><text x="150" y="112" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">Media &mu; = Mediana = Moda</text><line x1="110" y1="65" x2="190" y2="65" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" /><text x="150" y="60" font-size="7" fill="#b91c1c" font-weight="bold" text-anchor="middle">68.2% central</text><line x1="110" y1="65" x2="110" y2="100" stroke="#94a3b8" stroke-width="0.8" /><line x1="190" y1="65" x2="190" y2="100" stroke="#94a3b8" stroke-width="0.8" /><text x="110" y="112" font-size="7.5" fill="#475569" text-anchor="middle">&mu;-&sigma;</text><text x="190" y="112" font-size="7.5" fill="#475569" text-anchor="middle">&mu;+&sigma;</text></svg>',
                    svgDescription: "Representación geométrica de la campana de Gauss. Simétrica en la media (línea central verde) y con límites de la Regla Empírica a una desviación estándar (68.2% del área en rojo).",
                    workedExampleHtml: '<p><strong>Problema:</strong> El peso medio de unos sacos de abono producidos en Tecpán es de 80 kg, con una desviación estándar de 5 kg. Si la distribución es normal, ¿entre qué pesos exactos cae el 68.2% central de la producción?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Aplicar la Regla Empírica.</strong> De acuerdo con la regla, el 68.2% central de los datos cae en el intervalo de una desviación estándar sobre y bajo la media: <br>$$\\mu \\pm \\sigma$$</li><li><strong>Paso 2: Calcular el límite inferior:</strong> <br>$$\\text{Límite inferior} = \\mu - \\sigma = 80 - 5 = 75\\text{ kg}$$</li><li><strong>Paso 3: Calcular el límite superior:</strong> <br>$$\\text{Límite superior} = \\mu + \\sigma = 80 + 5 = 85\\text{ kg}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> El 68.2% central de los sacos tiene un peso comprendido entre <strong>75 kg y 85 kg</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Pensar que la curva toca el suelo:</strong> Dibujar la campana de Gauss cerrándose y tocando el eje horizontal en los extremos de ±3 o ±4 desviaciones estándar. La campana es asintótica; se acerca infinitamente al eje X pero nunca llega a tocarlo en teoría.</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué porcentaje aproximado de las observaciones se encuentra dentro de ±2 desviaciones estándar de la media según la Regla Empírica de la distribución normal? (Ingresa solo el número entero sin el símbolo %):",
                            correctAnswer: "95",
                            hint: "La regla establece porcentajes fijos: ±1σ = 68.2%, ±2σ = 95.4%, ±3σ = 99.7%.",
                            feedbackCorrect: "¡Excelente! Aproximadamente el 95% (95.4% de forma exacta) de los datos cae en ±2σ.",
                            feedbackIncorrect: "Incorrecto. Equivale a aproximadamente el 95%.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué porcentaje de los datos de una muestra cae por encima del valor de la media en una distribución normal perfecta? (Ingresa solo el número entero sin el símbolo %):",
                            correctAnswer: "50",
                            hint: "La campana de Gauss es perfectamente simétrica con respecto a su promedio central.",
                            feedbackCorrect: "¡Perfecto! Al ser simétrica, exactamente la mitad (50%) de los datos se ubican sobre la media.",
                            feedbackIncorrect: "Incorrecto. Por simetría perfecta, el 50% de los datos están sobre la media.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si la media de estatura en Antigua es 160 cm con σ = 10 cm, ¿cuál es el rango para el 99.7% central de los datos? (Escribe el rango en formato [min, max] con espacio tras la coma):",
                            correctAnswer: "[130, 190]",
                            hint: "Para el 99.7% aplicamos la regla: μ ± 3σ. Calcula 160 - 30 y 160 + 30.",
                            feedbackCorrect: "¡Excelente! Rango = 160 ± 30 = [130, 190] cm.",
                            feedbackIncorrect: "Incorrecto. Rango = 160 ± 3(10) = [130, 190] cm.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el valor matemático del área total exacta encerrada bajo la curva de densidad normal de probabilidad?",
                            correctAnswer: "1",
                            hint: "Representa el espacio muestral completo y la certeza absoluta de la variable continua.",
                            feedbackCorrect: "¡Excelente! El área total es exactamente 1.00 (el 100%).",
                            feedbackIncorrect: "Incorrecto. El área total bajo cualquier curva de densidad siempre es igual a 1.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué parámetro de la distribución define de forma geométrica el ancho o grado de aplanamiento de la campana de Gauss?",
                            options: [
                                "La media poblacional (μ)",
                                "La desviación estándar (σ)",
                                "La mediana muestral (Me)",
                                "La asimetría de Pearson"
                            ],
                            correctAnswer: 1,
                            hint: "Mide la dispersión física de los datos; un valor mayor ensancha la curva.",
                            feedbackCorrect: "¡Perfecto! La desviación estándar (σ) determina el grado de dispersión y aplanamiento de la curva.",
                            feedbackIncorrect: "Incorrecto. Es la desviación estándar (σ) la que define el ancho de la campana.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La distribución normal es simétrica y tiene forma de campana. Cumple con la regla empírica, concentrando 68.2% en $\\mu \\pm \\sigma$ y 95.4% en $\\mu \\pm 2\\sigma$.",
                    videoPlaceholderText: "Video de Probabilidad: Las increíbles propiedades de la curva de distribución normal."
                },
                {
                    id: "tipificacion-puntajes-z",
                    title: "Lección 3.2: Tipificación y Puntajes Z",
                    introduction: "Aprende a transformar cualquier variable normal general X a la normal estándar Z para poder realizar comparaciones directas.",
                    explanationHtml: '<p>Dado que cada variable en el mundo real tiene su propia media ($\\mu$) y desviación estándar ($\\sigma$), no podemos tener una tabla de probabilidad para cada caso posible. Para solucionarlo, aplicamos el proceso de <strong>tipificación (o estandarización)</strong>.</p><p class="mt-2">Consiste en transformar la variable aleatoria normal original $X \\sim N(\\mu, \\sigma)$ en una variable normal estándar universal **$Z \\sim N(0, 1)$**, que posee una media fija de **0** y una desviación estándar de **1**.</p><p class="mt-2">El **Puntaje Z** representa la cantidad exacta de desviaciones estándar que un valor específico $X$ se encuentra por encima (Z positivo) o por debajo (Z negativo) de la media poblacional. Se calcula con la fórmula:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$Z = \\frac{X - \\mu}{\\sigma}$$</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuación de Tipificación</p><p class="text-xs font-mono font-bold text-primary">Z = (X - &mu;) / &sigma; &nbsp;|&nbsp; Z ~ N(0, 1)</p><p class="text-xs text-slate-550">Herramienta: Si Z = 1.5, significa que el valor está a 1.5 desviaciones por encima del promedio.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">PROCESO DE TIPIFICACIÓN</text><line x1="30" y1="55" x2="270" y2="55" stroke="#cbd5e1" stroke-width="1.5" /><circle cx="150" cy="55" r="4.5" fill="#3b82f6" /><text x="150" y="47" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">X = &mu; (60)</text><circle cx="210" cy="55" r="4.5" fill="#ef4444" /><text x="210" y="47" font-size="8" font-weight="bold" fill="#b91c1c" text-anchor="middle">X = 76</text><line x1="30" y1="95" x2="270" y2="95" stroke="#94a3b8" stroke-width="1.5" /><circle cx="150" cy="95" r="4.5" fill="#10b981" /><text x="150" y="107" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">Z = 0</text><circle cx="210" cy="95" r="4.5" fill="#f59e0b" /><text x="210" y="107" font-size="8.5" font-weight="bold" fill="#d97706" text-anchor="middle">Z = 2.00</text><path d="M 175 60 C 180 72, 180 78, 175 90" fill="none" stroke="#475569" stroke-width="1" stroke-dasharray="2,2" marker-end="url(#arrow)" /><text x="192" y="77" font-size="7.5" fill="#475569" font-weight="bold" text-anchor="middle">Transforma</text></svg>',
                    svgDescription: "Esquema de tipificación. Un valor original X=76 en una distribución con media 60 y desviación 8, se mapea directamente a un valor tipificado Z=2.00 en la recta Z con media 0.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un estudiante de bachillerato en Antigua Guatemala obtiene una calificación de 76 puntos en un examen de matemáticas que tiene una media poblacional de $\\mu = 60$ puntos y una desviación estándar de $\\sigma = 8$ puntos. Calcula su puntaje $Z$ e interprétalo.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Identificar las variables:</strong> <br>$$X = 76\\text{ puntos}$$ <br>$$\\mu = 60\\text{ puntos}$$ <br>$$\\sigma = 8\\text{ puntos}$$</li><li><strong>Paso 2: Aplicar la fórmula de tipificación:</strong> <br>$$Z = \\frac{X - \\mu}{\\sigma} = \\frac{76 - 60}{8} = \\frac{16}{8} = 2.00$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Interpretación:</strong> El puntaje $Z$ del estudiante es de <strong>+2.00</strong>. Esto nos indica que su nota está exactamente a <strong>2 desviaciones estándar por encima del promedio</strong> del grupo, situándolo en un rango de excelencia.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Restar al revés en el numerador:</strong> Calcular $Z$ como $(\\mu - X) / \\sigma$ por descuido. Si el valor es mayor a la media, el puntaje $Z$ debe ser estrictamente positivo. Cambiar el orden de la resta altera el signo algebraico, lo cual conducirá a un cálculo de área de probabilidad erróneo en las tablas.</li></ul>',
                    exercises: [
                        {
                            question: "Calcula el puntaje Z para X = 45, si la media poblacional es μ = 50 y la desviación estándar es σ = 5. (Ingresa el número con signo negativo si corresponde, usando punto):",
                            correctAnswer: "-1",
                            hint: "Aplica Z = (X - μ) / σ. Reemplaza: Z = (45 - 50) / 5.",
                            feedbackCorrect: "¡Excelente! Z = -5 / 5 = -1.00.",
                            feedbackIncorrect: "Incorrecto. Z = (45 - 50) / 5 = -1.00.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si el puntaje Z de un estudiante en un examen es exactamente 0, ¿qué podemos afirmar sobre su nota original X?",
                            options: [
                                "Que obtuvo una nota de cero puntos en el examen.",
                                "Que su nota es exactamente igual a la media aritmética del grupo.",
                                "Que reprobó el examen con la peor nota.",
                                "Que su nota es igual a la desviación estándar."
                            ],
                            correctAnswer: 1,
                            hint: "Sustituye Z = 0 en Z = (X - μ) / σ y despeja X.",
                            feedbackCorrect: "¡Perfecto! Un Z = 0 indica que el valor coincide de forma exacta con la media poblacional.",
                            feedbackIncorrect: "Incorrecto. Un puntaje Z de 0 indica que X es igual a la media.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el valor numérico original X si sabemos que Z = 1.5, la media es μ = 100 y la desviación estándar es σ = 10. (Ingresa solo el número entero):",
                            correctAnswer: "115",
                            hint: "Despeja X de la fórmula: X = μ + Z * σ = 100 + 1.5 * 10.",
                            feedbackCorrect: "¡Excelente! X = 100 + 15 = 115.",
                            feedbackIncorrect: "Incorrecto. X = 100 + (1.5 * 10) = 115.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el valor numérico de la desviación estándar de la distribución normal estándar Z? (Ingresa solo el número entero):",
                            correctAnswer: "1",
                            hint: "La distribución normal estándar universal se define como Z ~ N(0, 1). El segundo parámetro es...",
                            feedbackCorrect: "¡Excelente! La desviación estándar de Z es exactamente 1.",
                            feedbackIncorrect: "Incorrecto. Por definición, la desviación estándar de Z es 1.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula el puntaje Z para X = 120 si la media es μ = 100 y la desviación es σ = 15. (Redondea a dos decimales con punto):",
                            correctAnswer: "1.33",
                            hint: "Z = (120 - 100) / 15 = 20 / 15 = 4/3.",
                            feedbackCorrect: "¡Perfecto! Z = 1.33.",
                            feedbackIncorrect: "Incorrecto. Z = 20 / 15 = 1.33.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La tipificación mapea $X$ a la normal estándar $Z \\sim N(0, 1)$ mediante $Z = \\frac{X - \\mu}{\\sigma}$. Un puntaje $Z$ indica a cuántas desviaciones del promedio se sitúa el valor.",
                    videoPlaceholderText: "Video de Probabilidad: Qué es el puntaje Z y cómo estandarizar variables continuas."
                },
                {
                    id: "tablas-normales-calculo-areas",
                    title: "Lección 3.3: Uso de Tablas Normales y Cálculo de Áreas",
                    introduction: "Aprende a calcular probabilidades acumuladas e intervalos de área utilizando la tabla Z estándar de Gauss.",
                    explanationHtml: '<p>Una vez que hemos tipificado la variable al puntaje $Z$, podemos utilizar la <strong>Tabla de Distribución Normal Estándar</strong> (Tabla Z) para hallar el área exacta bajo la curva, que equivale de forma matemática a la probabilidad.</p><p class="mt-2">Las tablas Z entregan por defecto el **área acumulada hacia la izquierda** de un puntaje dado, es decir, $P(Z \\le z)$. Para calcular otros casos de interés, aplicamos las siguientes propiedades de simetría y complemento:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Probabilidad Menor que ($P(Z \\le z)$):</strong> Se busca directamente el valor de la intersección de la fila y columna del puntaje en la tabla.</li><li><strong>Probabilidad Mayor que ($P(Z > z)$):</strong> Como el área total es 1, usamos el complemento: <br>$$P(Z > z) = 1 - P(Z \\le z)$$</li><li><strong>Área entre dos puntos ($P(a \\le Z \\le b)$):</strong> Restamos el área menor de la mayor: <br>$$P(a \\le Z \\le b) = P(Z \\le b) - P(Z \\le a)$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Propiedades de Área Z</p><p class="text-xs font-mono font-bold text-primary">P(Z &gt; z) = 1 - P(Z &le; z) &nbsp;|&nbsp; P(a &le; Z &le; b) = P(Z &le; b) - P(Z &le; a)</p><p class="text-xs text-slate-550">Herramienta: Por simetría de la campana, P(Z &le; -z) = P(Z &ge; z) = 1 - P(Z &le; z).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ÁREA BAJO LA CURVA NORMAL</text><line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" stroke-width="1.5" /><path d="M 30 100 C 90 100, 100 30, 150 30 C 200 30, 210 100, 270 100" fill="none" stroke="#3b82f6" stroke-width="1.5" /><path d="M 30 100 C 90 100, 100 30, 150 30 C 170 30, 180 50, 190 73.5 L 190 100 Z" fill="#eff6ff" stroke="none" /><line x1="190" y1="73.5" x2="190" y2="100" stroke="#1d4ed8" stroke-width="1.5" /><circle cx="190" cy="73.5" r="3" fill="#1d4ed8" /><text x="190" y="112" font-size="8.5" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Z = 1.00</text><text x="120" y="70" font-size="9" fill="#1e40af" font-weight="bold" text-anchor="middle">Área = 0.8413</text></svg>',
                    svgDescription: "Curva normal estándar mostrando el área sombreada en azul a la izquierda de Z = 1.00, que corresponde exactamente a un área de 0.8413 en la tabla Z.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Si la tabla Z indica que para un puntaje $z = 1.00$ el área acumulada a la izquierda es de $0.8413$, calcula la probabilidad de que un valor aleatorio de Z sea mayor a $1.00$, $P(Z > 1.00)$.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Identificar el caso de interés:</strong> Se busca la probabilidad "mayor que" (área a la derecha de Z = 1.00).</li><li><strong>Paso 2: Aplicar la propiedad del complemento:</strong> <br>$$P(Z > 1.00) = 1 - P(Z \\le 1.00)$$</li><li><strong>Paso 3: Reemplazar el valor de la tabla y calcular:</strong> <br>$$P(Z > 1.00) = 1 - 0.8413 = 0.1587$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La probabilidad es de <strong>0.1587</strong>, equivalente al <strong>15.87%</strong> de la distribución normal.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar restar el complemento en "mayor que":</strong> Tomar directamente el área de la tabla ($0.8413$) para responder a una pregunta de probabilidad "mayor que". Las tablas estándar solo dan acumulados izquierdos; si te piden "mayor que" o "más de", es obligatorio restar el valor de 1.</li></ul>',
                    exercises: [
                        {
                            question: "Calcula P(Z <= 0.00) de forma exacta aplicando simetría de la campana. (Ingresa el número con punto decimal):",
                            correctAnswer: "0.5",
                            hint: "La media de la normal estándar es 0, lo que divide el área simétrica en dos partes exactamente iguales.",
                            feedbackCorrect: "¡Excelente! P(Z <= 0.00) = 0.5000 por simetría perfecta de la campana.",
                            feedbackIncorrect: "Incorrecto. Al ser simétrica la campana, la mitad del área es 0.5000.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si P(Z <= 1.96) = 0.9750 y P(Z <= -1.96) = 0.0250, calcula la probabilidad exacta de que Z esté entre -1.96 y 1.96, P(-1.96 <= Z <= 1.96):",
                            correctAnswer: "0.95",
                            hint: "Resta las áreas acumuladas: P(Z <= 1.96) - P(Z <= -1.96).",
                            feedbackCorrect: "¡Perfecto! Área central = 0.9750 - 0.0250 = 0.9500 (el 95% de confianza).",
                            feedbackIncorrect: "Incorrecto. Se restan las áreas: 0.9750 - 0.0250 = 0.9500.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si la tabla Z indica que P(Z <= 2.00) = 0.9772, ¿cuál es la probabilidad decimal de que Z sea mayor que 2.00? (Ingresa el número con punto decimal):",
                            correctAnswer: "0.0228",
                            hint: "Aplica la propiedad del complemento para mayor que: 1.00 - P(Z <= 2.00).",
                            feedbackCorrect: "¡Excelente! P(Z > 2.00) = 1.00 - 0.9772 = 0.0228.",
                            feedbackIncorrect: "Incorrecto. Se calcula con el complemento: 1 - 0.9772 = 0.0228.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si P(Z <= 1.00) = 0.8413, calcula la probabilidad acumulada P(Z <= -1.00) aplicando la propiedad de simetría de colas. (Ingresa el número con punto decimal):",
                            correctAnswer: "0.1587",
                            hint: "Por simetría, P(Z <= -z) es idéntico al complemento de P(Z <= z): 1.00 - 0.8413.",
                            feedbackCorrect: "¡Perfecto! P(Z <= -1.00) = 1.00 - 0.8413 = 0.1587.",
                            feedbackIncorrect: "Incorrecto. Por simetría de la campana es 1.00 - 0.8413 = 0.1587.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Aproximadamente, ¿a qué valor absoluto de puntaje Z crítico corresponde dejar un área central del 95% aproximado?",
                            options: [
                                "1.00",
                                "1.96",
                                "2.58",
                                "3.00"
                            ],
                            correctAnswer: 1,
                            hint: "Deja un 2.5% libre en cada una de las dos colas extremas de la campana.",
                            feedbackCorrect: "¡Excelente! ±1.96 desviaciones estándar contiene el 95.00% del área central normal.",
                            feedbackIncorrect: "Incorrecto. El valor crítico es ±1.96.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Las tablas Z entregan el área a la izquierda $P(Z \\le z)$. Usamos el complemento $1 - P(Z \\le z)$ para áreas derechas y restamos áreas para intervalos centrales.",
                    videoPlaceholderText: "Video de Probabilidad: Cómo leer la tabla Z de distribución normal estándar en un minuto."
                }
            ]
        }
    ]
};

const targetPath = ACADEMIC_FILE;

function run() {
    console.log("Leyendo academic_content.js...");
    let content = fs.readFileSync(targetPath, "utf8");

    // Buscamos quirúrgicamente el bloque de distribuciones-probabilidad
    const startIdx = content.indexOf('    "distribuciones-probabilidad": `');
    const endIdx = content.indexOf('`,\n\n    "inferencia-estadistica":');

    if (startIdx === -1 || endIdx === -1) {
        console.error("No se pudo encontrar el bloque distribuciones-probabilidad original.");
        process.exit(1);
    }

    console.log("Encontradas posiciones en disco para inyección quirúrgica de Distribuciones de Probabilidad.");

    const richJS = '    "distribuciones-probabilidad": ' + JSON.stringify(distribucionesProbabilidadData, null, 4);

    let newContent = content.slice(0, startIdx) + 
                     richJS + 
                     content.slice(endIdx + 1);

    console.log("Escribiendo cambios en academic_content.js...");
    fs.writeFileSync(targetPath, newContent, "utf8");
    console.log("¡Curso de Distribuciones de Probabilidad inyectado con éxito!");
}

try {
    run();
} catch (e) {
    console.error("Error crítico durante la inyección:", e);
    process.exit(1);
}
