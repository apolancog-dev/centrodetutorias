const fs = require("fs");
const path = require("path");

const ACADEMIC_FILE = path.join(__dirname, "..", "academic_content.js");

const vectoresFisicaData = {
    isRichCourse: true,
    title: "Vectores en Física",
    units: [
        {
            title: "Unidad 1: Magnitudes Escalares y Vectoriales",
            lessons: [
                {
                    id: "magnitudes-escalares-vectoriales",
                    title: "Lección 1.1: Magnitudes Escalares y Vectoriales",
                    introduction: "En física, las magnitudes se dividen en dos categorías según la información necesaria para definirlas completamente: escalares y vectoriales.",
                    explanationHtml: '<p>Para describir la naturaleza física, medimos propiedades llamadas magnitudes. Estas se clasifican en:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Magnitud Escalar:</strong> Se describe completamente con un número y su correspondiente unidad de medida. No posee orientación espacial. <br><em>Ejemplos:</em> Temperatura ($37^\\circ\\text{C}$), masa ($5\\text{ kg}$), volumen ($2\\text{ L}$), tiempo ($5\\text{ s}$), distancia ($10\\text{ m}$).</li><li><strong>Magnitud Vectorial:</strong> Requiere un valor numérico (módulo o magnitud), una unidad de medida, y además, una **dirección y sentido** para ser explicada por completo. <br><em>Ejemplos:</em> Velocidad ($80\\text{ km/h al norte}$), desplazamiento ($5\\text{ m a } 30^\\circ$), fuerza ($10\\text{ N hacia abajo}$), aceleración.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Conceptos Fundamentales</p><p class="text-xs font-mono font-bold text-primary">Rapidez = Escalar (e.g. 10 m/s) &nbsp;&bull;&nbsp; Velocidad = Vector (e.g. 10 m/s al Este)</p><p class="text-xs text-slate-500">Módulo: Es el tamaño absoluto del vector (siempre un valor positivo, e.g. |A| = 10 N).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ESCALAR VS VECTOR</text><rect x="25" y="38" width="110" height="55" fill="#eff6ff" stroke="#bfdbfe" rx="8" /><text x="80" y="55" font-size="9" fill="#1e40af" font-weight="bold" text-anchor="middle">Magnitud Escalar</text><text x="80" y="75" font-size="14" font-family="monospace" fill="#2563eb" font-weight="bold" text-anchor="middle">37°C</text><text x="80" y="87" font-size="7" fill="#64748b" text-anchor="middle">Temperatura (Solo valor/unidad)</text><rect x="165" y="38" width="110" height="55" fill="#fef2f2" stroke="#fca5a5" rx="8" /><text x="220" y="53" font-size="9" fill="#991b1b" font-weight="bold" text-anchor="middle">Magnitud Vectorial</text><line x1="185" y1="75" x2="245" y2="75" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" /><polygon points="245,71 255,75 245,79" fill="#ef4444" /><text x="220" y="67" font-size="8" font-family="monospace" fill="#ef4444" font-weight="bold" text-anchor="middle">v = 80 km/h</text><text x="220" y="88" font-size="7" fill="#64748b" text-anchor="middle">Velocidad (Valor, dir. y sentido)</text></svg>',
                    svgDescription: "Comparación gráfica de una magnitud escalar (temperatura de 37°C) y una vectorial (velocidad representada con una flecha dirigida v = 80 km/h).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Clasifica las siguientes variables en magnitudes escalares o vectoriales: 1) El viento sopla a $20\\text{ km/h}$ rumbo al Volcán de Agua en dirección suroeste, 2) Una maleta tiene un peso de $15\\text{ libras}$.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Viento):</strong> Se nos indica la rapidez ($20\\text{ km/h}$), las unidades y un rumbo específico hacia el suroeste. Al incluir orientación espacial, se trata de una **velocidad**, la cual es una <strong>magnitud vectorial</strong>.</li><li><strong>Paso 2 (Maleta):</strong> Se nos indica un valor numérico y una unidad ($15\\text{ lb}$). La masa o el peso escalar de la maleta se define por completo sin necesidad de una dirección espacial. Es una <strong>magnitud escalar</strong>.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> 1) Vectorial, 2) Escalar.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir rapidez con velocidad:</strong> La rapidez es escalar (ej. "el auto va a 100 km/h"), mientras que la velocidad exige obligatoriamente dirección (ej. "el auto va a 100 km/h al oeste").</li></ul>',
                    exercises: [
                        {
                            question: "Clasifica el tiempo transcurrido de 45 minutos. Escribe si es 'escalar' o 'vectorial' en minúsculas:",
                            correctAnswer: "escalar",
                            hint: "Piensa si necesitas decir '45 minutos al norte' para entender cuánto tiempo pasó.",
                            feedbackCorrect: "¡Excelente! El tiempo es una magnitud escalar pura.",
                            feedbackIncorrect: "Incorrecto. El tiempo no posee dirección espacial, por lo que es 'escalar'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Es la aceleración de la gravedad hacia el centro de la Tierra una magnitud de tipo vectorial?",
                            options: [
                                "Sí, porque posee módulo, unidad de medida, y una dirección fija hacia el centro terrestre.",
                                "No, porque la gravedad afecta a todos los objetos por igual.",
                                "No, la gravedad es una constante escalar pura de valor 9.8 m/s².",
                                "Sí, pero solo cuando los objetos están cayendo en el aire."
                            ],
                            correctAnswer: 0,
                            hint: "Para ser vectorial necesita tener una magnitud, unidades y una dirección y sentido definidos.",
                            feedbackCorrect: "¡Perfecto! La aceleración de la gravedad es un vector que apunta verticalmente hacia abajo.",
                            feedbackIncorrect: "Incorrecto. Tiene dirección vertical hacia abajo, por lo que es vectorial.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Clasifica la temperatura ambiental medida en la ciudad de Quetzaltenango. Escribe si es 'escalar' o 'vectorial' en minúsculas:",
                            correctAnswer: "escalar",
                            hint: "La temperatura se define en su totalidad por un número y la escala de grados, sin orientación en el espacio.",
                            feedbackCorrect: "¡Excelente! La temperatura es una magnitud escalar.",
                            feedbackIncorrect: "Incorrecto. La temperatura no tiene dirección, es una magnitud 'escalar'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Es la fuerza de empuje de una grúa que jala un bus en Ciudad de Guatemala un vector?",
                            options: [
                                "No, porque es una máquina física.",
                                "Sí, porque para saber el efecto del jalón es indispensable definir la intensidad y la dirección de la fuerza.",
                                "No, las fuerzas son escalares y el movimiento resultante es vectorial.",
                                "Sí, pero solo si la grúa se desplaza en línea recta."
                            ],
                            correctAnswer: 1,
                            hint: "Las fuerzas son interacciones que deforman o cambian el movimiento en direcciones específicas.",
                            feedbackCorrect: "¡Excelente! Toda fuerza es un vector ya que su efecto depende de hacia dónde empuje o jale.",
                            feedbackIncorrect: "Incorrecto. Las fuerzas son magnitudes vectoriales obligatoriamente.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Cómo se define de forma física y geométrica el 'módulo' de un vector?",
                            options: [
                                "Es el ángulo de orientación medido respecto a la horizontal.",
                                "Es el tamaño o longitud del vector, representado por un valor numérico siempre positivo.",
                                "Es el punto exacto de aplicación u origen de la fuerza.",
                                "Es la inversión de sentido del vector multiplicada por -1."
                            ],
                            correctAnswer: 1,
                            hint: "El módulo representa la magnitud o 'largo' de la flecha del vector.",
                            feedbackCorrect: "¡Perfecto! El módulo cuantifica el tamaño absoluto del vector y siempre es positivo.",
                            feedbackIncorrect: "Incorrecto. El módulo es la longitud o intensidad absoluta del vector.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Las magnitudes físicas se clasifican en escalares (solo valor y unidad) y vectoriales (módulo, unidad, dirección y sentido), siendo estas últimas fundamentales para modelar interacciones espaciales.",
                    videoPlaceholderText: "Video de Física: Diferencias fundamentales entre escalares y vectores con ejemplos cotidianos."
                },
                {
                    id: "representacion-grafica-vectores",
                    title: "Lección 1.2: Representación Gráfica de Vectores",
                    introduction: "Aprende a dibujar vectores como flechas dirigidas en el plano cartesiano empleando escalas geométricas adecuadas.",
                    explanationHtml: '<p>Gráficamente, un <strong>vector</strong> se representa mediante un segmento de recta dirigido (una flecha) trazado sobre un sistema de coordenadas. Sus elementos geométricos son:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Origen (o cola):</strong> Punto inicial de aplicación del vector ($P$).</li><li><strong>Extremo (o cabeza):</strong> Punta de la flecha que indica el sentido ($Q$).</li><li><strong>Línea de Acción:</strong> Recta infinita sobre la cual descansa el vector.</li><li><strong>Módulo:</strong> Longitud proporcional de la flecha dibujada según una escala establecida (ej. $1\\text{ cm} = 10\\text{ Newtons}$).</li><li><strong>Dirección:</strong> Ángulo $\\theta$ medido con respecto al eje X positivo en sentido antihorario (posición normal).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Elementos del Vector Graficado</p><p class="text-xs font-mono font-bold text-primary">Dirección (&theta;): Medido en sentido antihorario a partir del eje +X</p><p class="text-xs text-slate-500">Sentido: Indicado por la punta de la flecha (ej. Noroeste, Suroeste).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">DIBUJO DE VECTOR EN PLANO</text><line x1="40" y1="90" x2="260" y2="90" stroke="#94a3b8" stroke-width="1" /><line x1="150" y1="25" x2="150" y2="105" stroke="#94a3b8" stroke-width="1" /><line x1="150" y1="90" x2="90" y2="40" stroke="#2563eb" stroke-width="2" /><polygon points="90,44 85,36 94,39" fill="#2563eb" /><path d="M 150 90 A 20 20 0 0 0 170 90" fill="none" stroke="#e11d48" stroke-width="1" /><path d="M 150 90 A 20 20 0 0 1 102 70" fill="none" stroke="#059669" stroke-width="1.5" /><text x="115" y="83" font-size="8" fill="#059669" font-weight="bold">143°</text><text x="158" y="77" font-size="8" fill="#e11d48" font-weight="bold">37°</text><line x1="150" y1="90" x2="180" y2="90" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" /></svg>',
                    svgDescription: "Un vector de desplazamiento dibujado en el segundo cuadrante a 143° medido antihorariamente desde el eje X positivo. Se muestra el ángulo complementario de referencia de 37° con el eje X negativo.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Representa gráficamente un vector de desplazamiento de $50\\text{ metros}$ en dirección $143^\\circ$ (segundo cuadrante). ¿Cuál es su ángulo de referencia respecto al eje X negativo?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Dibuja el eje cartesiano $X-Y$. Sitúa el origen en $(0,0)$.</li><li><strong>Paso 2:</strong> Mide $143^\\circ$ con el transportador desde el eje X positivo en sentido antihorario (girando a la izquierda). La línea cruzará al segundo cuadrante.</li><li><strong>Paso 3:</strong> Traza la flecha del vector. Si usamos la escala $1\\text{ cm} = 10\\text{ m}$, la flecha debe medir $5\\text{ cm}$.</li><li><strong>Paso 4 (Ángulo de Referencia):</strong> El eje X negativo está en la horizontal a $180^\\circ$. El ángulo de referencia $\\phi$ con el eje horizontal más cercano es: <br>$$\\phi = 180^\\circ - 143^\\circ = 37^\\circ$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El vector se ubica en el segundo cuadrante, y su ángulo de referencia con el eje X negativo es de <strong>37°</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Medir ángulos en sentido horario:</strong> Los ángulos de dirección estándar siempre se miden girando en sentido antihorario a partir de la rama positiva del eje X.</li></ul>',
                    exercises: [
                        {
                            question: "¿En qué cuadrante (números romanos: I, II, III, IV) del plano cartesiano se localiza un vector cuya dirección angular estándar es de 210°?",
                            correctAnswer: "III",
                            hint: "Compara los límites angulares de los cuadrantes: I (0° a 90°), II (90° a 180°), III (180° a 270°), IV (270° a 360°).",
                            feedbackCorrect: "¡Excelente! 210° cae entre 180° y 270°, perteneciendo al tercer cuadrante (III).",
                            feedbackIncorrect: "Incorrecto. 210° está en el tercer cuadrante (III), ya que es mayor a 180° y menor a 270°.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si defines una escala gráfica de 1 cm = 5 N, ¿cuántos cm debe medir la flecha física de un vector de fuerza de 35 N? (Ingresa solo el número):",
                            correctAnswer: "7",
                            hint: "Divide el módulo del vector de fuerza entre la escala establecida: 35 / 5.",
                            feedbackCorrect: "¡Perfecto! 35 N / 5 N/cm = 7 cm de longitud de flecha.",
                            feedbackIncorrect: "Incorrecto. Con la escala dada, 35 / 5 = 7 cm.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el sentido cardinal exacto de un vector situado sobre el eje Y negativo?",
                            options: [
                                "Norte",
                                "Sur",
                                "Este",
                                "Oeste"
                            ],
                            correctAnswer: 1,
                            hint: "El eje Y vertical apunta hacia arriba (Norte) en su lado positivo y hacia abajo (Sur) en su lado negativo.",
                            feedbackCorrect: "¡Excelente! El eje Y negativo corresponde al sentido cardinal Sur.",
                            feedbackIncorrect: "Incorrecto. Y negativo apunta verticalmente hacia abajo, lo que es el Sur.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si un vector de velocidad apunta exactamente en dirección Sureste (SE), ¿cuál es su dirección angular en posición estándar?",
                            options: [
                                "45°",
                                "135°",
                                "225°",
                                "315°"
                            ],
                            correctAnswer: 3,
                            hint: "El Sureste está a la mitad exacta del cuarto cuadrante. Resta 45° a 360° (o suma 270° + 45°).",
                            feedbackCorrect: "¡Perfecto! El Sureste en posición estándar es 360° - 45° = 315°.",
                            feedbackIncorrect: "Incorrecto. Está a 315° en posición estándar.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Cómo se grafican dos vectores considerados opuestos?",
                            options: [
                                "Como dos flechas perpendiculares que forman un ángulo recto.",
                                "Como dos flechas de igual módulo (tamaño) y dirección (paralelas) pero sentidos contrarios.",
                                "Como dos vectores que comparten la misma cabeza y cola en el origen.",
                                "Como dos flechas que tienen diferente longitud y apuntan a 90°."
                            ],
                            correctAnswer: 1,
                            hint: "Vectores opuestos contrarrestan sus sentidos mutuamente sin cambiar su tamaño.",
                            feedbackCorrect: "¡Excelente! Son paralelos, del mismo tamaño, pero sus flechas apuntan a 180° de desfase.",
                            feedbackIncorrect: "Incorrecto. Tienen igual magnitud, dirección, pero sentidos contrarios.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La representación gráfica de vectores mediante flechas a escala en el plano cartesiano permite visualizar la orientación de variables como fuerzas y desplazamientos de forma geométrica.",
                    videoPlaceholderText: "Video de Física: Cómo dibujar vectores a escala utilizando transportador y regla."
                },
                {
                    id: "sistemas-coordenadas-polares-cartesianas",
                    title: "Lección 1.3: Sistemas de Coordenadas",
                    introduction: "Domina la conversión analítica de vectores entre coordenadas polares $(R, \\theta)$ y cartesianas $(x, y)$ utilizando trigonometría.",
                    explanationHtml: '<p>En el plano bidimensional, un vector se puede definir bajo dos formatos de coordenadas equivalentes:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Coordenadas Polares $(R, \\theta)$:</strong> Expresan al vector por su magnitud o radio $R$ (longitud) y su ángulo de dirección $\\theta$. <br><em>Ejemplo:</em> $(10\\text{ m}, 30^\\circ)$.</li><li><strong>Coordenadas Cartesianas $(x, y)$:</strong> Expresan al vector por sus componentes rectangulares horizontal ($x$) y vertical ($y$). <br><em>Ejemplo:</em> $(8.66, 5.00)\\text{ m}$.</li></ul><p class="mt-2 font-bold text-slate-800">Fórmulas de Conversión:</p><ul class="list-disc pl-5 space-y-1 my-2"><li><strong>De Cartesianas a Polares:</strong> <br>$$R = \\sqrt{x^2 + y^2} \\quad \\theta = \\tan^{-1}\\left(\\frac{y}{x}\\right)$$</li><li><strong>De Polares a Cartesianas:</strong> <br>$$x = R \\cos(\\theta) \\quad y = R \\operatorname{sen}(\\theta)$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Conversión de Coordenadas</p><p class="text-xs font-mono font-bold text-primary">x = R cos(&theta;) &nbsp;|&nbsp; y = R sen(&theta;)</p><p class="text-xs font-mono font-bold text-primary">R = &radic;(x&sup2; + y&sup2;) &nbsp;|&nbsp; &theta; = arctan(y/x)</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">POLARES &lt;=&gt; CARTESIANAS</text><line x1="40" y1="95" x2="260" y2="95" stroke="#94a3b8" stroke-width="1.5" /><line x1="60" y1="25" x2="60" y2="105" stroke="#94a3b8" stroke-width="1.5" /><line x1="60" y1="95" x2="210" y2="45" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" /><polygon points="210,49 214,42 206,44" fill="#2563eb" /><line x1="210" y1="45" x2="210" y2="95" stroke="#059669" stroke-width="1.2" stroke-dasharray="2,2" /><line x1="60" y1="45" x2="210" y2="45" stroke="#d97706" stroke-width="1" stroke-dasharray="2,2" /><path d="M 80 95 A 20 20 0 0 0 78 88" fill="none" stroke="#ef4444" stroke-width="1.5" /><text x="85" y="90" font-size="8" fill="#ef4444" font-weight="bold">30°</text><text x="135" y="60" font-size="9" fill="#1e40af" font-weight="bold">R = 10</text><text x="135" y="105" font-size="8" fill="#b45309" font-weight="bold" text-anchor="middle">x = 8.66</text><text x="222" y="70" font-size="8" fill="#047857" font-weight="bold">y = 5.00</text></svg>',
                    svgDescription: "Un vector en el primer cuadrante con magnitud R = 10 y ángulo de 30 grados. Muestra mediante proyecciones punteadas los componentes cartesianos resultantes x = 8.66 e y = 5.00.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un excursionista en Petén viaja en una dirección descrita por el vector polar $(10\\text{ km}, 30^\\circ)$. Expresa esta posición en coordenadas cartesianas.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica los parámetros polares: magnitud $R = 10\\text{ km}$ y dirección $\\theta = 30^\\circ$.</li><li><strong>Paso 2:</strong> Calcula la componente horizontal $x$ con el coseno: <br>$$x = R \\cos(\\theta) = 10 \\cos(30^\\circ)$$ <br>Con $\\cos(30^\\circ) \\approx 0.866$: <br>$x = 10 \\times 0.866 = 8.66\\text{ km}$.</li><li><strong>Paso 3:</strong> Calcula la componente vertical $y$ con el seno: <br>$$y = R \\operatorname{sen}(\\theta) = 10 \\operatorname{sen}(30^\\circ)$$ <br>Con $\\operatorname{sen}(30^\\circ) = 0.50$: <br>$y = 10 \\times 0.50 = 5.00\\text{ km}$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El vector expresado en coordenadas cartesianas es <strong>(8.66, 5.00) km</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Intercambiar funciones trigonométricas:</strong> Usar el seno para la componente horizontal ($x$) y el coseno para la componente vertical ($y$). Recuerda que si el ángulo se mide con respecto a la horizontal, $x$ va con coseno e $y$ con seno.</li></ul>',
                    exercises: [
                        {
                            question: "Convierte el vector en coordenadas cartesianas (3, 4) cm a coordenadas polares en el primer cuadrante. Escribe en formato (magnitud,ángulo°) sin espacios (ej: (5,53.13°)):",
                            correctAnswer: "(5,53.13°)",
                            hint: "Calcula R = sqrt(3^2 + 4^2) = 5. Luego calcula el ángulo con arctan(4/3) ≈ 53.13°.",
                            feedbackCorrect: "¡Excelente! El vector en polares es (5,53.13°).",
                            feedbackIncorrect: "Incorrecto. R = 5, θ = arctan(4/3) ≈ 53.13°. Se representa como '(5,53.13°)'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula el componente horizontal x en Newtons de un vector de fuerza cuya magnitud polar es de 50 N y tiene 60° de dirección. (Ingresa solo el número entero):",
                            correctAnswer: "25",
                            hint: "Usa la fórmula x = R * cos(theta). Reemplaza R = 50 y cos(60°) = 0.5.",
                            feedbackCorrect: "¡Excelente! x = 50 * cos(60°) = 50 * 0.5 = 25 N.",
                            feedbackIncorrect: "Incorrecto. x = 50 * cos(60°) = 50 * 0.5 = 25.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Convierte a coordenadas cartesianas el vector polar (8 m, 180°). Escribe la respuesta como par ordenado sin espacios (ej: (-8,0)):",
                            correctAnswer: "(-8,0)",
                            hint: "Aplica x = 8 * cos(180°) e y = 8 * sen(180°). Recuerda que cos(180°) = -1 y sen(180°) = 0.",
                            feedbackCorrect: "¡Perfecto! El vector es (-8,0).",
                            feedbackIncorrect: "Incorrecto. Apunta directamente a la izquierda: (-8,0).",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si las componentes de un vector son (-3, -3) m, ¿en qué cuadrante se localiza y cuál es su dirección angular en posición estándar?",
                            options: [
                                "Segundo cuadrante, dirección de 135°",
                                "Tercer cuadrante, dirección de 225°",
                                "Tercer cuadrante, dirección de 45°",
                                "Cuarto cuadrante, dirección de 315°"
                            ],
                            correctAnswer: 1,
                            hint: "Al ser ambas componentes negativas, pertenece al tercer cuadrante. El ángulo base es arctan(-3/-3) = 45°. Suma 180° por estar en el III cuadrante.",
                            feedbackCorrect: "¡Excelente! Al estar en el tercer cuadrante, sumamos 180° al ángulo de referencia, resultando en 225°.",
                            feedbackIncorrect: "Incorrecto. Se localiza en el tercer cuadrante a una dirección de 225°.",
                            difficulty: "avanzado",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el módulo o magnitud en Newtons del vector cuyas componentes cartesianas son (12, 5) N. (Ingresa solo el número entero):",
                            correctAnswer: "13",
                            hint: "Aplica el Teorema de Pitágoras: R = sqrt(x^2 + y^2) = sqrt(12^2 + 5^2).",
                            feedbackCorrect: "¡Perfecto! R = sqrt(144 + 25) = sqrt(169) = 13 N.",
                            feedbackIncorrect: "Incorrecto. R = sqrt(12² + 5²) = sqrt(169) = 13.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Las coordenadas polares y cartesianas describen el mismo vector mediante parámetros geométricos o componentes ortogonales. La trigonometría básica proporciona el puente bidireccional exacto de conversión.",
                    videoPlaceholderText: "Video de Física: Conversión entre coordenadas polares y cartesianas explicada desde cero."
                }
            ]
        },
        {
            title: "Unidad 2: Métodos Geométricos y Operaciones Básicas",
            lessons: [
                {
                    id: "suma-grafica-vectores",
                    title: "Lección 2.1: Suma Gráfica de Vectores (Triángulo y Polígono)",
                    introduction: "Comprende la suma de vectores desde una perspectiva puramente visual utilizando los métodos del triángulo y del polígono.",
                    explanationHtml: '<p>A diferencia de los escalares, los vectores no se suman de forma puramente aritmética debido a sus direcciones. El **método gráfico** más elemental es el **método de cabeza y cola (o del polígono)**:</p><ol class="list-decimal pl-5 space-y-1.5 my-3"><li><strong>Paso 1:</strong> Traza el primer vector $\\vec{A}$ a escala partiendo del origen del plano.</li><li><strong>Paso 2:</strong> Dibuja el segundo vector $\\vec{B}$ a escala, pero colocando su origen (cola) exactamente en la cabeza (extremo) del primer vector.</li><li><strong>Paso 3:</strong> Repite el proceso consecutivamente para todos los vectores que desees sumar.</li><li><strong>Paso 4:</strong> El <strong>vector resultante $\\vec{R}$</strong> es la flecha directa trazada desde el origen del primer vector hasta la punta o extremo del último vector.</li></ol>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ley del Polígono</p><p class="text-xs font-mono font-bold text-primary">R = A + B + C + ...</p><p class="text-xs text-slate-500">Si el polígono se cierra sobre sí mismo (la punta del último toca la cola del primero), la resultante es cero.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">SUMA DE VECTORES: COLA A PUNTA</text><line x1="40" y1="95" x2="260" y2="95" stroke="#94a3b8" stroke-width="1" /><line x1="60" y1="20" x2="60" y2="105" stroke="#94a3b8" stroke-width="1" /><line x1="60" y1="95" x2="160" y2="95" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" /><polygon points="160,91 170,95 160,99" fill="#2563eb" /><text x="110" y="87" font-size="8" fill="#1e40af" font-weight="bold">Vector A (3m al Este)</text><line x1="170" y1="95" x2="170" y2="40" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" /><polygon points="166,40 170,30 174,40" fill="#f59e0b" /><text x="180" y="65" font-size="8" fill="#b45309" font-weight="bold">Vector B (4m al Norte)</text><line x1="60" y1="95" x2="170" y2="30" stroke="#ef4444" stroke-width="2" stroke-linecap="round" /><polygon points="164,34 170,30 172,38" fill="#ef4444" /><text x="100" y="55" font-size="10" fill="#ef4444" font-weight="bold">Resultante R = 5m</text></svg>',
                    svgDescription: "Suma gráfica de dos vectores perpendiculares A (3m al Este) y B (4m al Norte) colocados uno a continuación del otro. Se traza el vector resultante R de magnitud 5m formando un triángulo rectángulo.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un aventurero camina en el Parque Nacional Tikal $3\\text{ km}$ hacia el este y luego $4\\text{ km}$ hacia el norte. Dibuja e interpreta la suma gráfica resultante.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Traza el vector $\\vec{A}$ como una flecha horizontal de $3\\text{ cm}$ (escala $1\\text{ cm} = 1\\text{ km}$) apuntando hacia la derecha (este).</li><li><strong>Paso 2:</strong> Justo en la punta de la flecha de $\\vec{A}$, traza el vector $\\vec{B}$ vertical de $4\\text{ cm}$ hacia arriba (norte).</li><li><strong>Paso 3:</strong> Dibuja la línea resultante $\\vec{R}$ que va desde el inicio (origen de $\\vec{A}$) hasta la punta final de $\\vec{B}$.</li><li><strong>Paso 4:</strong> Mide con regla la resultante. Mide exactamente $5\\text{ cm}$, lo que equivale a $5\\text{ km}$ de desplazamiento en sentido noreste.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El vector de desplazamiento neto resultante tiene un módulo de <strong>5 km</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Dibujar todos los vectores partiendo del origen común:</strong> Si los dibujas naciendo del mismo punto, estás aplicando erróneamente el método para fuerzas concurrentes pero no el método del polígono/triángulo, anulando la suma gráfica.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cómo se denomina formalmente al vector único que produce exactamente el mismo efecto físico que la suma de todos los vectores del sistema?",
                            options: [
                                "Vector Equilibrante",
                                "Vector Resultante",
                                "Vector Nulo o Vacío",
                                "Vector Ortogonal"
                            ],
                            correctAnswer: 1,
                            hint: "Es el vector que 'resulta' de realizar la suma de todos los componentes.",
                            feedbackCorrect: "¡Excelente! Se llama vector resultante y representa la suma vectorial del sistema.",
                            feedbackIncorrect: "Incorrecto. Se le llama vector resultante.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si sumas gráficamente un vector de fuerza de 10 N al Este con otro vector de fuerza de 10 N al Oeste, ¿cuánto vale el módulo de la fuerza resultante en Newtons? (Ingresa solo el número):",
                            correctAnswer: "0",
                            hint: "Ambos vectores son de igual módulo pero tienen sentidos exactamente opuestos. Se contrarrestan linealmente.",
                            feedbackCorrect: "¡Perfecto! Las fuerzas se cancelan, dando una resultante de 0 N.",
                            feedbackIncorrect: "Incorrecto. Al apuntar en sentidos opuestos con igual módulo, se restan: 10 - 10 = 0.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Caminas 8 metros hacia el Norte y luego 6 metros hacia el Sur en línea recta. ¿Cuál es la magnitud en metros de tu desplazamiento resultante neto? (Ingresa solo el número):",
                            correctAnswer: "2",
                            hint: "Representa el movimiento: +8 en el eje vertical positivo, y luego -6 hacia abajo. Resta algebraicamente.",
                            feedbackCorrect: "¡Excelente! Te has desplazado 2 metros netos hacia el Norte respecto al origen.",
                            feedbackIncorrect: "Incorrecto. El desplazamiento resultante es la distancia neta al origen: 8 - 6 = 2.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "En el método gráfico del triángulo, ¿dónde se sitúa de forma exacta el origen o cola del vector resultante?",
                            options: [
                                "En la cabeza del último vector sumado.",
                                "En el origen o cola del primer vector de la secuencia de suma.",
                                "En el centro geométrico del triángulo formado.",
                                "En el vértice opuesto al ángulo recto."
                            ],
                            correctAnswer: 1,
                            hint: "El vector resultante cierra el camino trazado, partiendo de donde empezó todo.",
                            feedbackCorrect: "¡Perfecto! El vector resultante siempre nace en el origen del primer vector y muere en la punta del último.",
                            feedbackIncorrect: "Incorrecto. Nace en la cola o inicio del primer vector.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si sumas tres vectores coplanares y al dibujarlos la cabeza del tercer vector coincide exactamente con la cola del primer vector (cerrando el triángulo continuo), ¿cuánto vale el módulo de su resultante?",
                            correctAnswer: "0",
                            hint: "Si terminas exactamente en el mismo punto donde iniciaste la caminata, no te has desplazado de tu posición inicial.",
                            feedbackCorrect: "¡Excelente! Al cerrarse la trayectoria continua, la resultante neta es exactamente cero (vector nulo).",
                            feedbackIncorrect: "Incorrecto. Si la figura gráfica se cierra de forma continua sobre sí misma, la resultante es 0.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La suma gráfica de vectores (cabeza y cola) establece la base geométrica intuitiva de la resultante, modelando trayectorias físicas de forma visual.",
                    videoPlaceholderText: "Video de Física: Suma de vectores por el método del polígono y del triángulo."
                },
                {
                    id: "metodo-del-paralelogramo",
                    title: "Lección 2.2: Método del Paralelogramo",
                    introduction: "Aprende a sumar dos vectores concurrentes que comparten el mismo origen geométrico y calcula la resultante analíticamente.",
                    explanationHtml: '<p>El <strong>método del paralelogramo</strong> es un procedimiento gráfico y analítico útil para sumar dos vectores concurrentes (que parten del mismo origen). Consiste en dibujar líneas paralelas a cada vector en sus extremos para cerrar un paralelogramo. La resultante $\\vec{R}$ es la diagonal que nace del origen común.</p><p>Para calcular analíticamente el módulo de la resultante, empleamos la ley de cosenos adaptada para suma vectorial:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$R = \\sqrt{A^2 + B^2 + 2AB \\cos(\\theta)}$$</p><p class="mt-2">Donde $\\theta$ es el ángulo formado entre ambos vectores naciendo de su origen común. (Nota el signo **positivo** del término duplicado, a diferencia de la ley de cosenos para triángulos ordinarios).</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmula de Resultante Concurrente</p><p class="text-xs font-mono font-bold text-primary">R = &radic;(A&sup2; + B&sup2; + 2AB cos(&theta;))</p><p class="text-xs text-slate-500">Si &theta; = 90&deg;, cos(90&deg;) = 0 &rArr; R = &radic;(A&sup2; + B&sup2;) (Teorema de Pitágoras clásico).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">MÉTODO DEL PARALELOGRAMO</text><line x1="60" y1="95" x2="160" y2="95" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" /><polygon points="160,91 170,95 160,99" fill="#2563eb" /><text x="115" y="105" font-size="8" fill="#1e40af" font-weight="bold">F1 = 3 N</text><line x1="60" y1="95" x2="110" y2="45" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" /><polygon points="110,49 114,42 106,44" fill="#2563eb" /><text x="75" y="45" font-size="8" fill="#1e40af" font-weight="bold">F2 = 4 N</text><line x1="170" y1="95" x2="220" y2="45" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><line x1="110" y1="45" x2="220" y2="45" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><line x1="60" y1="95" x2="220" y2="45" stroke="#ef4444" stroke-width="2" stroke-linecap="round" /><polygon points="218,50 220,45 214,46" fill="#ef4444" /><text x="150" y="65" font-size="10" fill="#ef4444" font-weight="bold">R ≈ 6.08 N</text><path d="M 80 95 A 20 20 0 0 0 75 80" fill="none" stroke="#ef4444" stroke-width="1" /><text x="85" y="90" font-size="7" fill="#ef4444">60°</text></svg>',
                    svgDescription: "Dos vectores F1 de 3 N y F2 de 4 N que nacen del mismo origen formando un ángulo de 60 grados. Líneas punteadas completan el paralelogramo, y una diagonal roja muestra la fuerza resultante R de 6.08 N.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Dos fuerzas concurrentes de $F_1 = 3\\text{ N}$ y $F_2 = 4\\text{ N}$ tiran de un mismo gancho con un ángulo de $60^\\circ$ entre ellas. Calcula la magnitud analítica de la fuerza resultante.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica que los vectores son concurrentes y conoces el ángulo entre ellos. Aplica la variante vectorial de la Ley de Cosenos: <br>$$R = \\sqrt{F_1^2 + F_2^2 + 2F_1F_2 \\cos(\\theta)}$$</li><li><strong>Paso 2:</strong> Reemplaza con los valores conocidos: <br>$$R = \\sqrt{3^2 + 4^2 + 2(3)(4) \\cos(60^\\circ)}$$</li><li><strong>Paso 3:</strong> Opera los cuadrados y la multiplicación: <br>$$R = \\sqrt{9 + 16 + 24 \\cos(60^\\circ)}$$</li><li><strong>Paso 4:</strong> Reemplaza el coseno notable $\\cos(60^\\circ) = 0.5$: <br>$$R = \\sqrt{25 + 24(0.5)} = \\sqrt{25 + 12} = \\sqrt{37}$$</li><li><strong>Paso 5:</strong> Extrae la raíz cuadrada de $37$: $R \\approx 6.08\\text{ Newtons}$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La magnitud de la fuerza resultante es de aproximadamente <strong>6.08 N</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Usar el signo menos del teorema trigonométrico clásico:</strong> Aplicar $-2AB\\cos(\\theta)$ en lugar de la suma $+2AB\\cos(\\theta)$. Recuerda que para la diagonal larga del paralelogramo vectorial (resultante de la suma), el término duplicado se suma.</li></ul>',
                    exercises: [
                        {
                            question: "Si dos vectores de módulos 5 y 12 actúan de forma perpendicular (ángulo de 90°), calcula el módulo de la resultante. (Ingresa solo el número entero):",
                            correctAnswer: "13",
                            hint: "Dado que cos(90°) = 0, el término duplicado se anula por completo, reduciendo la fórmula a Pitágoras: R = sqrt(5^2 + 12^2).",
                            feedbackCorrect: "¡Excelente! R = sqrt(25 + 144) = sqrt(169) = 13.",
                            feedbackIncorrect: "Incorrecto. Se reduce a Pitágoras: sqrt(5² + 12²) = 13.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si tienes dos vectores de fuerza de magnitudes 10 N y 6 N, ¿cuál es el rango de magnitud posible (mínima y máxima) para la fuerza resultante final al variar el ángulo entre ellos?",
                            options: [
                                "De 0 N a 16 N",
                                "De 4 N a 16 N",
                                "De 6 N a 10 N",
                                "Siempre es exactamente 11.66 N"
                            ],
                            correctAnswer: 1,
                            hint: "La resultante máxima ocurre cuando apuntan en el mismo sentido (suma directa: 10 + 6). La mínima cuando son opuestos (resta directa: 10 - 6).",
                            feedbackCorrect: "¡Excelente! Rango de magnitud va desde la diferencia (4 N) hasta la suma (16 N).",
                            feedbackIncorrect: "Incorrecto. La resultante varía entre |A-B| (4 N) y A+B (16 N).",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el módulo en Newtons de la resultante de dos vectores de 3 N y 5 N que apuntan exactamente en la misma dirección (ángulo de 0°). (Ingresa solo el número entero):",
                            correctAnswer: "8",
                            hint: "Cuando dos vectores tienen un ángulo de 0°, cos(0°) = 1, lo que permite sumarlos de forma aritmética directa: A + B.",
                            feedbackCorrect: "¡Excelente! Al apuntar al mismo sentido, se suman de forma directa: 3 + 5 = 8 Newtons.",
                            feedbackIncorrect: "Incorrecto. Si van al mismo sentido, se suman aritméticamente: 3 + 5 = 8.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Dos vectores de igual módulo F forman un ángulo de 120° entre sí. Calcula el módulo de la resultante en términos de F.",
                            options: [
                                "F * &radic;3",
                                "F / 2",
                                "F",
                                "2F"
                            ],
                            correctAnswer: 2,
                            hint: "Usa la ley de cosenos con A=F, B=F y cos(120°) = -0.5. Desarrolla y simplifica los términos.",
                            feedbackCorrect: "¡Excelente! R = sqrt(F² + F² + 2F²(-0.5)) = sqrt(2F² - F²) = sqrt(F²) = F. Se forma un triángulo equilátero.",
                            feedbackIncorrect: "Incorrecto. A 120°, la resultante de dos vectores idénticos es exactamente igual a F.",
                            difficulty: "avanzado",
                            type: "multiple"
                        },
                        {
                            question: "¿Qué dirección geométrica tiene el vector resultante de dos vectores coplanares de igual módulo que nacen del mismo origen?",
                            options: [
                                "Apunta a 90° de ambos vectores.",
                                "Es la bisectriz exacta del ángulo formado por los dos vectores.",
                                "Apunta en sentido opuesto al vector más largo.",
                                "Tiene una dirección de 45° en todos los casos."
                            ],
                            correctAnswer: 1,
                            hint: "Al ser de igual módulo, el paralelogramo es un rombo perfecto. La diagonal divide al ángulo en partes iguales.",
                            feedbackCorrect: "¡Perfecto! Al ser de idéntica magnitud, la resultante divide al ángulo exactamente por la mitad (bisectriz).",
                            feedbackIncorrect: "Incorrecto. Divide al ángulo a la mitad, actuando como la bisectriz.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El método del paralelogramo unifica la suma de vectores concurrentes. La variante de la Ley de Cosenos ($R = \\sqrt{A^2 + B^2 + 2AB \\cos\\theta}$) permite calcular magnitudes resultantes para cualquier abertura angular.",
                    videoPlaceholderText: "Video de Física: Suma de fuerzas concurrentes por el método del paralelogramo analítico."
                },
                {
                    id: "multiplicacion-vector-escalar",
                    title: "Lección 2.3: Multiplicación de un Vector por un Escalar",
                    introduction: "Descubre cómo los números reales (escalares) pueden contraer, dilatar o invertir el sentido de un vector físico.",
                    explanationHtml: '<p>Multiplicar un vector $\\vec{A}$ por un número real llamado <strong>escalar ($k$)</strong> produce un nuevo vector $\\vec{B} = k\\vec{A}$. Las propiedades del nuevo vector son:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Módulo:</strong> Se multiplica linealmente por el valor absoluto del escalar: <br>$$|\\vec{B}| = |k| \\cdot |\\vec{A}|$$</li><li><strong>Dirección:</strong> La línea de acción y dirección angular base se conserva paralela en todos los casos.</li><li><strong>Sentido:</strong> <br>-- Si $k$ es **positivo ($k > 0$)**, el sentido del vector se mantiene **idéntico**. <br>-- Si $k$ es **negativo ($k < 0$)**, el sentido del vector se **invierte por completo** ($180^\\circ$ de desfase).</li></ul><p class="mt-2 text-slate-700">Analíticamente, multiplicamos cada componente del vector cartesiano por el escalar: $k(x, y) = (kx, ky)$.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Operación Escalar</p><p class="text-xs font-mono font-bold text-primary">k &bull; (Ax, Ay) = (kAx, kAy)</p><p class="text-xs text-slate-500">Ejemplo: -2 &bull; (3, -4) = (-6, 8).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ESCALADO DE VECTORES</text><line x1="40" y1="90" x2="260" y2="90" stroke="#94a3b8" stroke-width="1" /><line x1="150" y1="25" x2="150" y2="105" stroke="#94a3b8" stroke-width="1" /><line x1="150" y1="90" x2="190" y2="70" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" /><polygon points="190,74 194,68 186,70" fill="#2563eb" /><text x="175" y="60" font-size="8" fill="#1e40af" font-weight="bold">u = (2,1)</text><line x1="150" y1="90" x2="230" y2="50" stroke="#059669" stroke-width="1.5" stroke-linecap="round" /><polygon points="230,54 234,48 226,50" fill="#059669" /><text x="215" y="42" font-size="8" fill="#047857" font-weight="bold">2u = (4,2)</text><line x1="150" y1="90" x2="110" y2="110" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" /><polygon points="110,106 106,112 114,110" fill="#ef4444" /><text x="115" y="105" font-size="8" fill="#991b1b" font-weight="bold">-u = (-2,-1)</text></svg>',
                    svgDescription: "Gráfica que muestra un vector base u = (2, 1) en azul, su duplicado escalar 2u = (4, 2) en verde (mismo sentido, doble tamaño), y su opuesto -u = (-2, -1) en rojo (sentido invertido).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un auto de carreras viaja a velocidad constante descrita por el vector cartesiano $\\vec{v} = (3, 4)\\text{ m/s}$. Si el piloto acelera al triple de velocidad, ¿cuál es su nuevo vector de velocidad?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica el escalar de aumento: $k = 3$.</li><li><strong>Paso 2:</strong> Multiplica analíticamente cada componente del vector cartesiano de velocidad por el escalar: <br>$$\\vec{v}_{\\text{nuevo}} = 3 \\cdot (3\\text{ m/s}, 4\\text{ m/s}) = (3 \\cdot 3, 3 \\cdot 4)\\text{ m/s}$$</li><li><strong>Paso 3:</strong> Opera aritméticamente: $\\vec{v}_{\\text{nuevo}} = (9, 12)\\text{ m/s}$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El nuevo vector de velocidad es de <strong>(9, 12) m/s</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar el signo en la magnitud final:</strong> Escribir que la magnitud de $-2\\vec{A}$ es $-20$ cm. ¡Error! Las magnitudes y módulos de vectores son longitudes físicas reales, por lo que siempre deben expresarse con valores positivos ($+20$ cm).</li></ul>',
                    exercises: [
                        {
                            question: "Si un vector de fuerza A tiene una magnitud de 10 cm, ¿cuál es el módulo del vector resultante -2A en cm? (Ingresa solo el número positivo):",
                            correctAnswer: "20",
                            hint: "El módulo o magnitud física representa un tamaño absoluto, por lo que es inmune a signos de dirección. Multiplica 10 por el valor absoluto |-2|.",
                            feedbackCorrect: "¡Excelente! Magnitud = | -2 | * 10 = 20 cm.",
                            feedbackIncorrect: "Incorrecto. El módulo siempre es positivo: |-2| * 10 = 20 cm.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué le ocurre exactamente al sentido de un vector si es multiplicado por el escalar real de valor -1?",
                            options: [
                                "Permanece idéntico pero su magnitud colapsa a cero.",
                                "Se gira en un ángulo recto de 90° respecto a la horizontal.",
                                "Se invierte por completo hacia la dirección exactamente opuesta (180° de desfase).",
                                "La dirección se mantiene paralela pero el módulo se duplica."
                            ],
                            correctAnswer: 2,
                            hint: "Multiplicar por -1 cambia el sentido de la punta de la flecha al extremo contrario en la misma recta.",
                            feedbackCorrect: "¡Perfecto! Invertir el signo cambia el sentido a su opuesto con 180° de desfase angular.",
                            feedbackIncorrect: "Incorrecto. Se invierte exactamente en el sentido opuesto.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si el vector A es igual a (5, -2) N, calcula las componentes cartesianas del vector resultante de la operación 4A. Escribe la respuesta como par ordenado sin espacios (ej: (20,-8)):",
                            correctAnswer: "(20,-8)",
                            hint: "Multiplica cada componente (horizontal x y vertical y) de forma independiente por el escalar 4: 4*5 y 4*-2.",
                            feedbackCorrect: "¡Excelente! 4 * (5, -2) = (20, -8) N.",
                            feedbackIncorrect: "Incorrecto. Multiplica cada parte por 4: (20, -8).",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si multiplicas un vector que tiene dirección angular estándar de 45° por el escalar negativo -3, ¿cuál es la dirección angular en grados del nuevo vector resultante?",
                            correctAnswer: "225",
                            hint: "Multiplicar por un escalar negativo gira el vector exactamente 180° respecto a su posición original. Suma 45° + 180°.",
                            feedbackCorrect: "¡Perfecto! Al invertirse, la dirección es 45° + 180° = 225°.",
                            feedbackIncorrect: "Incorrecto. Suma 180° al ángulo original por ser un escalar negativo: 45° + 180° = 225°.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cómo se define de forma rigurosa un 'vector unitario' en física?",
                            options: [
                                "Es un vector que tiene un módulo exactamente igual a 0.",
                                "Es un vector sin dimensiones físicas cuya magnitud o módulo es exactamente igual a 1.",
                                "Es un vector que solo tiene componentes en el eje X.",
                                "Es el vector resultante de multiplicar por 10."
                            ],
                            correctAnswer: 1,
                            hint: "Se representan comúnmente como i, j, k y sirven para marcar de forma pura una dirección espacial.",
                            feedbackCorrect: "¡Excelente! Un vector unitario tiene un módulo inmune de 1 y sirve exclusivamente para indicar dirección.",
                            feedbackIncorrect: "Incorrecto. Es un vector sin dimensiones de magnitud exactamente igual a 1.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La multiplicación de un vector por un escalar amplifica, reduce o invierte la intensidad y sentido de la variable vectorial manteniéndola paralela en su dirección base.",
                    videoPlaceholderText: "Video de Física: Multiplicación de un vector por un escalar de forma analítica y gráfica."
                }
            ]
        },
        {
            title: "Unidad 3: Componentes Rectangulares y Aplicaciones",
            lessons: [
                {
                    id: "descomposicion-vectores-componentes",
                    title: "Lección 3.1: Descomposición de Vectores en Componentes",
                    introduction: "Aprende a proyectar un vector inclinado sobre las componentes ortogonales X e Y empleando funciones trigonométricas.",
                    explanationHtml: '<p>Descomponer un vector consiste en dividir su efecto tridimensional o bidimensional en **componentes ortogonales independientes** alineadas con los ejes rectangulares del plano cartesiano ($X, Y$).</p><p>Si medimos el ángulo de dirección estándar $\\theta$ respecto a la horizontal (eje X positivo), los componentes se calculan de forma exacta como:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Componente Horizontal ($A_x$):</strong> <br>$$A_x = A \\cos(\\theta)$$</li><li><strong>Componente Vertical ($A_y$):</strong> <br>$$A_y = A \\operatorname{sen}(\\theta)$$</li></ul><p class="mt-2">Donde $A$ representa el módulo o magnitud total del vector de fuerza, velocidad o desplazamiento.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Proyección de Componentes</p><p class="text-xs font-mono font-bold text-primary">Ax = A cos(&theta;) &nbsp;|&nbsp; Ay = A sen(&theta;)</p><p class="text-xs text-slate-550">Nota: Si el ángulo se define respecto a la vertical, los roles trigonométricos de sen/cos se invierten.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">DESCOMPOSICIÓN DE FUERZA</text><line x1="40" y1="95" x2="260" y2="95" stroke="#94a3b8" stroke-width="1.5" /><line x1="60" y1="25" x2="60" y2="105" stroke="#94a3b8" stroke-width="1.5" /><line x1="60" y1="95" x2="200" y2="45" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" /><polygon points="200,49 204,42 196,44" fill="#2563eb" /><line x1="200" y1="45" x2="200" y2="95" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><line x1="60" y1="45" x2="200" y2="45" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" /><text x="130" y="62" font-size="9" fill="#1e40af" font-weight="bold">F = 40 N</text><path d="M 80 95 A 20 20 0 0 0 78 86" fill="none" stroke="#ef4444" stroke-width="1.5" /><text x="85" y="90" font-size="8" fill="#ef4444" font-weight="bold">30°</text><text x="130" y="107" font-size="8" fill="#b45309" font-weight="bold" text-anchor="middle">Fx = 34.64 N</text><text x="210" y="70" font-size="8" fill="#047857" font-weight="bold">Fy = 20 N</text></svg>',
                    svgDescription: "Un vector de fuerza F = 40 N a 30 grados. Muestra las componentes rectangulares proyectadas en los ejes: Fx horizontal de 34.64 N y Fy vertical de 20 N.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un niño jala un carrito de madera en una plaza de Antigua Guatemala aplicando una fuerza de $40\\text{ Newtons}$ a través de una cuerda inclinada a $30^\\circ$ con el suelo. Calcula la componente horizontal de la fuerza que realmente tira del carrito.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Identifica los datos: Magnitud de la fuerza $F = 40\\text{ N}$, dirección angular horizontal $\\theta = 30^\\circ$.</li><li><strong>Paso 2:</strong> Plantea la ecuación de la componente horizontal ($x$) con coseno: <br>$$F_x = F \\cos(\\theta)$$</li><li><strong>Paso 3:</strong> Reemplaza y opera: $F_x = 40 \\cos(30^\\circ)$. <br>Con $\\cos(30^\\circ) \\approx 0.866$: <br>$F_x = 40 \\times 0.866 = 34.64\\text{ Newtons}$.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La componente de fuerza útil horizontal es de <strong>34.64 Newtons</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Asumir que X siempre es con coseno e Y con seno:</strong> Esto es correcto únicamente si el ángulo se mide con respecto a la horizontal. Si se define respecto a la vertical, las componentes se invierten ($A_x = A\\operatorname{sen}\\theta$ y $A_y = A\\cos\\theta$). Lee siempre el enunciado con cuidado.</li></ul>',
                    exercises: [
                        {
                            question: "Calcula la componente vertical en Newtons de una fuerza de 100 N aplicada con una inclinación de 45° respecto al suelo. (Usa sen(45°) ≈ 0.707. Ingresa decimal con punto, ej: 70.7):",
                            correctAnswer: "70.7",
                            hint: "Usa la fórmula vertical: Fy = F * sen(theta). Reemplaza F = 100 y sen(45°) ≈ 0.707.",
                            feedbackCorrect: "¡Excelente! Fy = 100 * 0.707 = 70.7 N.",
                            feedbackIncorrect: "Incorrecto. Fy = 100 * sen(45°) = 70.7.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un vector de velocidad de magnitud 20 m/s apunta en dirección de 270° (hacia abajo). Escribe sus componentes cartesianos en formato (x,y) sin espacios (ej: (0,-20)):",
                            correctAnswer: "(0,-20)",
                            hint: "Aplica x = 20*cos(270°) e y = 20*sen(270°). Recuerda que cos(270°) = 0 y sen(270°) = -1.",
                            feedbackCorrect: "¡Perfecto! El vector cartesiano es (0,-20). No tiene componente horizontal.",
                            feedbackIncorrect: "Incorrecto. Apunta directo en el eje y negativo: '(0,-20)'.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Calcula la componente horizontal x en metros de un vector de desplazamiento de 12 m de longitud a una dirección angular de 120° en posición normal. (Ingresa solo el número entero, incluyendo signo si aplica):",
                            correctAnswer: "-6",
                            hint: "Usa Ax = A * cos(theta). Reemplaza A = 12 y cos(120°) = -0.5.",
                            feedbackCorrect: "¡Excelente! Ax = 12 * cos(120°) = 12 * -0.5 = -6 m.",
                            feedbackIncorrect: "Incorrecto. Ax = 12 * cos(120°) = 12 * -0.5 = -6.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si un vector tiene componentes Ax = 8 N y Ay = -8 N, ¿cuál es su dirección angular en grados en posición normal?",
                            options: [
                                "45°",
                                "135°",
                                "225°",
                                "315°"
                            ],
                            correctAnswer: 3,
                            hint: "x es positiva e y es negativa, por ende el vector está en el cuarto cuadrante. El ángulo es 360° - 45°.",
                            feedbackCorrect: "¡Excelente! Al ubicarse en el cuarto cuadrante con componentes de igual módulo, la dirección es 315°.",
                            feedbackIncorrect: "Incorrecto. Está en el cuarto cuadrante a una dirección de 315°.",
                            difficulty: "avanzado",
                            type: "multiple"
                        },
                        {
                            question: "¿Qué significa de forma geométrica que dos componentes de un vector sean ortogonales?",
                            options: [
                                "Que apuntan en la misma dirección y sentido.",
                                "Que son perpendiculares entre sí, formando un ángulo de 90°.",
                                "Que tienen magnitudes contrarias de signos inversos.",
                                "Que se anulan mutuamente dando un vector resultante cero."
                            ],
                            correctAnswer: 1,
                            hint: "Las proyecciones cartesianas sobre los ejes X e Y forman una esquina recta.",
                            feedbackCorrect: "¡Perfecto! Ortogonales significa perpendiculares, formando un ángulo de 90°.",
                            feedbackIncorrect: "Incorrecto. Significa que son mutuamente perpendiculares (forman 90°).",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La descomposición rectangular de vectores proyecta fuerzas y velocidades sobre ejes coordenados perpendiculares independientes empleando las funciones seno y coseno.",
                    videoPlaceholderText: "Video de Física: Cómo descomponer un vector en sus componentes cartesianas."
                },
                {
                    id: "suma-analitica-vectores-componentes",
                    title: "Lección 3.2: Suma Analítica de Vectores por Componentes",
                    introduction: "Descubre el método analítico, el procedimiento más exacto y riguroso para sumar cualquier cantidad de vectores.",
                    explanationHtml: '<p>El <strong>método analítico por componentes</strong> es el procedimiento de suma más exacto y robusto en física, ya que evita las imprecisiones instrumentales de los dibujos a mano. El algoritmo sistemático es:</p><ol class="list-decimal pl-5 space-y-2 my-3"><li><strong>Paso 1 (Descomponer):</strong> Calcula los componentes horizontales ($A_x$) y verticales ($A_y$) de cada vector utilizando las funciones $\\cos(\\theta)$ y $\\operatorname{sen}(\\theta)$.</li><li><strong>Paso 2 (Sumar X):</strong> Suma algebraicamente todas las componentes horizontales para hallar la resultante horizontal: <br>$$R_x = \\sum A_x = A_{1x} + B_{2x} + C_{3x} + ...$$</li><li><strong>Paso 3 (Sumar Y):</strong> Suma algebraicamente todas las componentes verticales para hallar la resultante vertical: <br>$$R_y = \\sum A_y = A_{1y} + B_{2y} + C_{3y} + ...$$</li><li><strong>Paso 4 (Reconstruir):</strong> Calcula la magnitud de la resultante total mediante Pitágoras: <br>$$R = \\sqrt{R_x^2 + R_y^2}$$</li><li><strong>Paso 5 (Dirección):</strong> Determina el ángulo de dirección: $\\theta = \\tan^{-1}\\left|\\frac{R_y}{R_x}\\right|$, ajustando su cuadrante según el signo de $R_x$ y $R_y$.</li></ol>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Algoritmo de Suma Analítica</p><p class="text-xs font-mono font-bold text-primary">Rx = &Sigma;Ax &nbsp;|&nbsp; Ry = &Sigma;Ay &nbsp;|&nbsp; R = &radic;(Rx&sup2; + Ry&sup2;)</p><p class="text-xs text-slate-550">Ten cuidado con los signos negativos de los componentes al sumar.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">RECONSTRUCCIÓN DE RESULTANTE</text><line x1="40" y1="95" x2="260" y2="95" stroke="#94a3b8" stroke-width="1" /><line x1="60" y1="20" x2="60" y2="105" stroke="#94a3b8" stroke-width="1" /><line x1="60" y1="95" x2="160" y2="95" stroke="#b45309" stroke-width="2" stroke-linecap="round" /><text x="110" y="105" font-size="8" fill="#b45309" font-weight="bold">Rx = 5</text><line x1="160" y1="95" x2="160" y2="35" stroke="#047857" stroke-width="2" stroke-linecap="round" /><text x="170" y="65" font-size="8" fill="#047857" font-weight="bold">Ry = 10</text><line x1="60" y1="95" x2="160" y2="35" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" /><polygon points="158,40 160,35 154,37" fill="#ef4444" /><text x="100" y="55" font-size="9" fill="#991b1b" font-weight="bold">R = 11.18 N</text></svg>',
                    svgDescription: "Diagrama que muestra la reconstrucción analítica del vector resultante R a partir de sus componentes acumulados Rx = 5 y Ry = 10, aplicando el teorema de Pitágoras.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Suma analíticamente los vectores concurrentes de fuerza: $\\vec{A} = (5\\text{ N}, 0^\\circ)$ y $\\vec{B} = (10\\text{ N}, 90^\\circ)$.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Descompón cada vector en sus componentes $(x, y)$: <br>-- Vector A: $A_x = 5 \\cos(0^\\circ) = 5\\text{ N}$, $A_y = 5 \\operatorname{sen}(0^\\circ) = 0\\text{ N}$. <br>-- Vector B: $B_x = 10 \\cos(90^\\circ) = 0\\text{ N}$, $B_y = 10 \\operatorname{sen}(90^\\circ) = 10\\text{ N}$.</li><li><strong>Paso 2:</strong> Suma las componentes horizontales: $R_x = 5 + 0 = 5\\text{ Newtons}$.</li><li><strong>Paso 3:</strong> Suma las componentes verticales: $R_y = 0 + 10 = 10\\text{ Newtons}$.</li><li><strong>Paso 4:</strong> Reconstruye la magnitud resultante: <br>$$R = \\sqrt{R_x^2 + R_y^2} = \\sqrt{5^2 + 10^2} = \\sqrt{25 + 100} = \\sqrt{125} \\approx 11.18\\text{ N}$$</li><li><strong>Paso 5:</strong> Determina la dirección angular: <br>$$\\theta = \\tan^{-1}\\left(\\frac{10}{5}\\right) = \\tan^{-1}(2) \\approx 63.43^\\circ$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El vector de fuerza resultante tiene un módulo de <strong>11.18 N</strong> y una dirección de <strong>63.43°</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar colocar los signos a las componentes:</strong> No asignar signo negativo a las componentes que apuntan hacia el oeste (-X) o sur (-Y). Esto provoca una suma incorrecta de las fuerzas acumuladas.</li></ul>',
                    exercises: [
                        {
                            question: "Suma los vectores en formato cartesiano: A = (3, 5) N y B = (-2, -3) N. Escribe el vector resultante en formato (x,y) sin espacios (ej: (1,2)):",
                            correctAnswer: "(1,2)",
                            hint: "Suma las componentes x de forma independiente (3 + -2) y las componentes y (5 + -3).",
                            feedbackCorrect: "¡Excelente! El vector resultante es (1,2) N.",
                            feedbackIncorrect: "Incorrecto. Suma término a término: (3-2, 5-3) = (1,2).",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula el módulo resultante exacto de tres fuerzas concurrentes de 10 N, 20 N y 30 N que apuntan todas en sentido Norte (90°). (Ingresa solo el número entero):",
                            correctAnswer: "60",
                            hint: "Al tener la misma dirección y sentido, sus componentes X son todas 0 y las Y se suman directamente.",
                            feedbackCorrect: "¡Perfecto! Al ser colineales del mismo sentido, se suman de forma aritmética directa: 10 + 20 + 30 = 60 Newtons.",
                            feedbackIncorrect: "Incorrecto. Apuntan al mismo sentido, se suman directamente: 10+20+30 = 60.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si la componente resultante Rx = -3 m y Ry = 3 m, calcula la dirección angular de la resultante en posición estándar en grados. (Ingresa solo el número entero):",
                            correctAnswer: "135",
                            hint: "Calcula arctan(3/-3) = -45°. Como x es negativa e y es positiva, el vector está en el II cuadrante; suma 180°.",
                            feedbackCorrect: "¡Excelente! Dirección = -45° + 180° = 135°.",
                            feedbackIncorrect: "Incorrecto. Al ubicarse en el segundo cuadrante, la dirección es 180° - 45° = 135°.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Suma los vectores de fuerza F₁ = (8, -2) N y F₂ = (-5, 6) N. Calcula la magnitud en Newtons del vector resultante final. (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "Suma las componentes: Rx = 8 - 5 = 3, Ry = -2 + 6 = 4. Reconstruye la magnitud con Pitágoras: R = sqrt(3^2 + 4^2).",
                            feedbackCorrect: "¡Perfecto! R = sqrt(9 + 16) = sqrt(25) = 5 Newtons.",
                            feedbackIncorrect: "Incorrecto. El vector suma es (3, 4). Su magnitud es sqrt(3² + 4²) = 5.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Por qué el método analítico por componentes es el preferido sobre el método gráfico en ingeniería y arquitectura?",
                            options: [
                                "Porque es mucho más rápido de dibujar en cuadernos.",
                                "Porque elimina la imprecisión instrumental del trazado de líneas y el uso de transportadores, ofreciendo un resultado matemático exacto.",
                                "Porque no requiere el uso de sumas ni funciones trigonométricas.",
                                "Porque solo sirve para vectores de igual dirección."
                            ],
                            correctAnswer: 1,
                            hint: "El método analítico se apoya en cálculos rigurosos del álgebra ordinaria en lugar de estimaciones visuales de dibujo.",
                            feedbackCorrect: "¡Perfecto! El método analítico elimina errores sistemáticos de medición del dibujo técnico.",
                            feedbackIncorrect: "Incorrecto. Se prefiere por su precisión matemática absoluta.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La suma analítica por componentes descompone vectores coplanares en el plano cartesiano para resolver sumatorias aritméticas horizontales y verticales independientes de alta precisión.",
                    videoPlaceholderText: "Video de Física: Suma analítica de múltiples vectores por componentes rectangulares."
                },
                {
                    id: "aplicaciones-fisica-fuerzas-equilibrio",
                    title: "Lección 3.3: Aplicaciones en Física (Fuerzas y Equilibrio)",
                    introduction: "Utiliza los vectores para resolver problemas de estática y estabilidad estructural aplicando la Primera Ley de Newton.",
                    explanationHtml: '<p>En física, un sistema de fuerzas concurrentes aplicadas sobre un cuerpo se encuentra en **equilibrio traslacional** si la fuerza resultante neta vectorial es exactamente cero.</p><p>Para resolver estos sistemas en el plano bidimensional, aplicamos la Primera Ley de Newton dividiéndola en dos ecuaciones independientes de equilibrio escalar:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Equilibrio en X (fuerzas horizontales):</strong> <br>$$\\sum F_x = 0 \\quad \\text{(Fuerzas a la derecha = Fuerzas a la izquierda)}$$</li><li><strong>Equilibrio en Y (fuerzas verticales):</strong> <br>$$\\sum F_y = 0 \\quad \\text{(Fuerzas hacia arriba = Fuerzas hacia abajo)}$$</li></ul><p class="mt-2 text-slate-700">Esto permite determinar tensiones en cables de puentes, postes y estructuras edilicias complejas.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Condiciones de Equilibrio de Newton</p><p class="text-xs font-mono font-bold text-primary">&Sigma;Fx = 0 &nbsp;|&nbsp; &Sigma;Fy = 0</p><p class="text-xs text-slate-550">DCL (Diagrama de Cuerpo Libre): Dibuja todas las fuerzas aisladas antes de plantear la sumatoria.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="20" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">SISTEMA EN EQUILIBRIO TRASLACIONAL</text><circle cx="150" cy="55" r="10" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2" /><line x1="150" y1="55" x2="230" y2="35" stroke="#ef4444" stroke-width="2" stroke-linecap="round" /><polygon points="228,39 235,33 225,32" fill="#ef4444" /><text x="210" y="28" font-size="8" fill="#991b1b" font-weight="bold">T1 = 100 N</text><line x1="150" y1="55" x2="70" y2="35" stroke="#ef4444" stroke-width="2" stroke-linecap="round" /><polygon points="75,32 65,33 72,39" fill="#ef4444" /><text x="90" y="28" font-size="8" fill="#991b1b" font-weight="bold">T2 = 100 N</text><line x1="150" y1="55" x2="150" y2="105" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" /><polygon points="146,100 150,105 154,100" fill="#f59e0b" /><text x="162" y="90" font-size="8" fill="#b45309" font-weight="bold">Peso = 100 N</text></svg>',
                    svgDescription: "Un diagrama de fuerzas concurrentes de un semáforo (peso 100 N hacia abajo) sostenido por dos tensiones inclinadas a 30 grados respecto a la horizontal, ilustrando el equilibrio en Y.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un semáforo de $100\\text{ Newtons}$ de peso cuelga simétricamente en equilibrio de dos cables tensores que forman ángulos de $30^\\circ$ con la horizontal a cada lado. Calcula el valor de la tensión ($T$) en cada cable.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1:</strong> Dibuja el Diagrama de Cuerpo Libre (DCL). En el nudo central convergen 3 fuerzas: el peso de $100\\text{ N}$ hacia abajo, la tensión $T$ a $30^\\circ$ a la derecha, y la tensión $T$ a $30^\\circ$ a la izquierda.</li><li><strong>Paso 2:</strong> Plantea la ecuación de equilibrio vertical (eje Y): <br>$$\\sum F_y = 0 \\Rightarrow T_y + T_y - \\text{Peso} = 0$$</li><li><strong>Paso 3:</strong> Sustituye las componentes verticales por su expresión trigonométrica ($T_y = T \\operatorname{sen}(30^\\circ)$): <br>$$T \\operatorname{sen}(30^\\circ) + T \\operatorname{sen}(30^\\circ) - 100 = 0 \\Rightarrow 2T \\operatorname{sen}(30^\\circ) = 100$$</li><li><strong>Paso 4:</strong> Reemplaza $\\operatorname{sen}(30^\\circ) = 0.5$: <br>$$2T(0.5) = 100 \\Rightarrow T = 100\\text{ Newtons}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La tensión en cada cable de soporte es de <strong>100 Newtons</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar que hay dos cables tensores sosteniendo la carga:</strong> Escribir $T \\operatorname{sen}(30^\\circ) = 100$ y dar $T = 200\\text{ N}$. Recuerde que la carga vertical se distribuye equitativamente entre ambos cables ($2T_y = 100$).</li></ul>',
                    exercises: [
                        {
                            question: "Un hermoso cuadro de 50 N de peso cuelga simétricamente de un solo cable tensor vertical. ¿Cuál es la tensión en Newtons del cable? (Ingresa solo el número entero):",
                            correctAnswer: "50",
                            hint: "Para que esté en equilibrio vertical, la sumatoria de fuerzas Fy = 0. La tensión hacia arriba debe ser igual al peso hacia abajo.",
                            feedbackCorrect: "¡Excelente! Tensión = Peso = 50 N.",
                            feedbackIncorrect: "Incorrecto. Al estar suspendido verticalmente por un único cable, la tensión sostiene la totalidad del peso: 50 N.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el valor resultante de la sumatoria neta de todas las fuerzas vectoriales que actúan sobre un camión estacionado en perfecto equilibrio sobre una colina de Quetzaltenango? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "El enunciado indica que el camión está en perfecto equilibrio traslacional. Aplica la Primera Ley de Newton.",
                            feedbackCorrect: "¡Perfecto! Al estar en equilibrio, la sumatoria de todas las fuerzas (fuerza neta) es exactamente 0 N.",
                            feedbackIncorrect: "Incorrecto. Por ley de equilibrio, la fuerza neta resultante es obligatoriamente 0.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un bloque de masa m = 20 kg está apoyado en reposo sobre una mesa horizontal. Calcula el valor de la fuerza Normal vertical en Newtons que ejerce la mesa sobre el bloque. (Usa g = 9.8 m/s². Ingresa solo el número entero):",
                            correctAnswer: "196",
                            hint: "La sumatoria de fuerzas verticales es Normal - Peso = 0. Normal = Peso = m * g.",
                            feedbackCorrect: "¡Excelente! Peso = 20 kg * 9.8 m/s² = 196 N. Por ende, la Normal mide 196 N.",
                            feedbackIncorrect: "Incorrecto. Normal = Peso = 20 * 9.8 = 196 N.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Tres fuerzas horizontales tiran de un anillo central en un experimento. Si la fuerza F₁ = 10 N apunta al Este, la fuerza F₂ = 15 N apunta al Oeste. ¿Cuál debe ser la magnitud y sentido de la fuerza F₃ para mantener el anillo en perfecto equilibrio?",
                            options: [
                                "5 N al Este",
                                "5 N al Oeste",
                                "25 N al Este",
                                "25 N al Oeste"
                            ],
                            correctAnswer: 0,
                            hint: "Suma los vectores conocidos: +10 (Este) y -15 (Oeste) = -5 N. F₃ debe equilibrar contrarrestando con signo opuesto.",
                            feedbackCorrect: "¡Excelente! F₃ = +5 N (apuntando al Este) para que la suma total sea exactamente cero.",
                            feedbackIncorrect: "Incorrecto. F₁ + F₂ = -5 N (Oeste). F₃ debe valer +5 N (Este) para equilibrar.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Qué ley física fundamental de la mecánica establece que si la sumatoria de fuerzas sobre un cuerpo es nula, este permanecerá en reposo o MRU?",
                            options: [
                                "Segunda Ley de Newton",
                                "Primera Ley de Newton (Ley de la Inercia)",
                                "Tercera Ley de Newton (Acción y Reacción)",
                                "Ley de la Gravitación Universal"
                            ],
                            correctAnswer: 1,
                            hint: "Es la ley que define el comportamiento de los cuerpos cuando no actúan fuerzas externas desbalanceadas.",
                            feedbackCorrect: "¡Perfecto! Es la Primera Ley de Newton o de la Inercia, la base de la estática de partículas.",
                            feedbackIncorrect: "Incorrecto. Es la Primera Ley de Newton (Ley de la Inercia).",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El equilibrio traslacional exige vectorialmente que la sumatoria de fuerzas concurrentes sea nula, resolviéndose mediante sistemas independientes de ecuaciones horizontales y verticales.",
                    videoPlaceholderText: "Video de Física: Resolución de problemas de estática y diagramas de cuerpo libre (DCL)."
                }
            ]
        }
    ]
};

function run() {
    console.log("Leyendo academic_content.js...");
    let content = fs.readFileSync(ACADEMIC_FILE, "utf8");

    const startVectors = content.indexOf('    "vectores-fisica": `');
    const endVectors = content.indexOf('`,\n\n    "fisica-movimiento":');

    if (startVectors === -1 || endVectors === -1) {
        console.error("No se pudo encontrar el bloque vectores-fisica original.");
        process.exit(1);
    }

    console.log("Encontradas posiciones en disco para inyección quirúrgica de Vectores.");

    const vectoresFisicaJS = '    "vectores-fisica": ' + JSON.stringify(vectoresFisicaData, null, 4);

    let newContent = content.slice(0, startVectors) + 
                     vectoresFisicaJS + 
                     content.slice(endVectors + 1);

    console.log("Escribiendo cambios en academic_content.js...");
    fs.writeFileSync(ACADEMIC_FILE, newContent, "utf8");
    console.log("¡Curso de Vectores en Física inyectado con éxito!");
}

try {
    run();
} catch (e) {
    console.error("Error crítico durante la inyección:", e);
    process.exit(1);
}
