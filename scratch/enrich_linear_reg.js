const fs = require("fs");
const path = require("path");

const ACADEMIC_FILE = path.join(__dirname, "..", "academic_content.js");

const regresionLinealData = {
    isRichCourse: true,
    title: "Regresión Lineal Simple",
    units: [
        {
            title: "Unidad 1: Correlación y Diagramas de Dispersión",
            lessons: [
                {
                    id: "diagramas-dispersion",
                    title: "Lección 1.1: Diagramas de Dispersión",
                    introduction: "Aprende a graficar e interpretar nubes de puntos bidimensionales para identificar patrones de asociación visual.",
                    explanationHtml: '<p>En estadística bidimensional, cuando estudiamos de forma simultánea dos variables cuantitativas medidas en un mismo conjunto de elementos (ej. las horas de estudio $x$ y la calificación del examen $y$), la primera herramienta indispensable es el <strong>Diagrama de Dispersión (o Scatter Plot)</strong>.</p><p class="mt-2">Consiste en representar cada par de observaciones $(x_i, y_i)$ como un único punto en el **plano cartesiano de dos dimensiones**:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Eje Horizontal ($X$):</strong> Aloja a la variable independiente, explicativa o predictora.</li><li><strong>Eje Vertical ($Y$):</strong> Aloja a la variable dependiente o de respuesta.</li></ul><p class="mt-2 text-slate-700">Al observar la "nube de puntos" resultante, podemos identificar visualmente la forma de la relación: si tiene una tendencia lineal ascendente (positiva), descendente (negativa), o si los puntos están tan dispersos que no revelan ninguna relación (correlación nula).</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Glosario de Ejes Cartesianos</p><p class="text-xs font-mono font-bold text-primary">Eje X: Predictora (Independiente) &nbsp;|&nbsp; Eje Y: Respuesta (Dependiente)</p><p class="text-xs text-slate-550">La forma de la nube de puntos sugiere qué tipo de modelo (lineal, cuadrático, etc.) se ajusta mejor.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">PATRONES DE DISPERSIÓN</text><line x1="30" y1="95" x2="100" y2="95" stroke="#94a3b8" stroke-width="1" /><line x1="30" y1="40" x2="30" y2="95" stroke="#94a3b8" stroke-width="1" /><circle cx="45" cy="85" r="2.5" fill="#3b82f6" /><circle cx="55" cy="75" r="2.5" fill="#3b82f6" /><circle cx="65" cy="65" r="2.5" fill="#3b82f6" /><circle cx="75" cy="55" r="2.5" fill="#3b82f6" /><circle cx="85" cy="45" r="2.5" fill="#3b82f6" /><text x="65" y="108" font-size="7.5" fill="#1e40af" font-weight="bold" text-anchor="middle">Positiva (+)</text><line x1="120" y1="95" x2="190" y2="95" stroke="#94a3b8" stroke-width="1" /><line x1="120" y1="40" x2="120" y2="95" stroke="#94a3b8" stroke-width="1" /><circle cx="135" cy="45" r="2.5" fill="#ef4444" /><circle cx="145" cy="55" r="2.5" fill="#ef4444" /><circle cx="155" cy="65" r="2.5" fill="#ef4444" /><circle cx="165" cy="75" r="2.5" fill="#ef4444" /><circle cx="175" cy="85" r="2.5" fill="#ef4444" /><text x="155" y="108" font-size="7.5" fill="#b91c1c" font-weight="bold" text-anchor="middle">Negativa (-)</text><line x1="210" y1="95" x2="280" y2="95" stroke="#94a3b8" stroke-width="1" /><line x1="210" y1="40" x2="210" y2="95" stroke="#94a3b8" stroke-width="1" /><circle cx="225" cy="55" r="2.5" fill="#64748b" /><circle cx="235" cy="85" r="2.5" fill="#64748b" /><circle cx="245" cy="45" r="2.5" fill="#64748b" /><circle cx="255" cy="75" r="2.5" fill="#64748b" /><circle cx="265" cy="60" r="2.5" fill="#64748b" /><text x="245" y="108" font-size="7.5" fill="#475569" font-weight="bold" text-anchor="middle">Nula (0)</text></svg>',
                    svgDescription: "Tres diagramas de dispersión a escala mostrando correlación lineal positiva (azul, ascendente), correlación lineal negativa (roja, descendente) y correlación nula (gris, sin patrón).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un profesor en Antigua Guatemala recopila datos de las horas de estudio a la semana ($x$) y las calificaciones obtenidas en matemáticas ($y$) de 3 alumnos en Xela: $(1, 50)$, $(3, 70)$, y $(5, 90)$. Grafica mentalmente la nube de puntos y describe la tendencia lineal observada.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Identificar las coordenadas cartesianas:</strong> <br>Punto 1: $(1, 50)$ <br>Punto 2: $(3, 70)$ <br>Punto 3: $(5, 90)$</li><li><strong>Paso 2: Evaluar la tendencia de los valores:</strong> A medida que la variable explicativa $x$ aumenta ($1 \\to 3 \\to 5$), la variable dependiente de calificaciones $y$ también aumenta de forma constante ($50 \\to 70 \\to 90$).</li><li><strong>Paso 3: Conclusión visual.</strong> Al unir los puntos en el plano, forman una recta perfecta con pendiente ascendente.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> El diagrama de dispersión muestra una <strong>tendencia lineal positiva perfecta</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Intercambiar los ejes cartesianos:</strong> Colocar la variable dependiente $Y$ en el eje horizontal y la independiente $X$ en el vertical por distracción. Recuerda que la predictora **siempre** define el avance en la recta X.</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué variable de estudio se ubica de forma tradicional en el eje horizontal X de un diagrama de dispersión?",
                            options: [
                                "La variable dependiente o explicada.",
                                "La variable independiente, predictora o explicativa.",
                                "La desviación estándar muestral.",
                                "La frecuencia absoluta acumulada."
                            ],
                            correctAnswer: 1,
                            hint: "Es la variable que 'causa' o explica los cambios de la otra variable.",
                            feedbackCorrect: "¡Excelente! La variable independiente o predictora se ubica siempre en el eje X.",
                            feedbackIncorrect: "Incorrecto. Se sitúa la variable independiente o explicativa.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Cómo se describe la tendencia de una nube de puntos que forma un círculo disperso y sin ninguna dirección definida?",
                            options: [
                                "Tendencia lineal positiva fuerte.",
                                "Tendencia lineal negativa moderada.",
                                "Ausencia de correlación o tendencia lineal nula.",
                                "Tendencia cuadrática perfecta."
                            ],
                            correctAnswer: 2,
                            hint: "Si no hay líneas o curvas discernibles, el azar domina la relación.",
                            feedbackCorrect: "¡Perfecto! Una nube de puntos circular e informal indica que no hay correlación.",
                            feedbackIncorrect: "Incorrecto. Indica ausencia de correlación o tendencia lineal nula.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Lógicamente, ¿cómo esperas que sea la tendencia en un diagrama de dispersión de 'horas semanales de videojuegos' versus 'calificación escolar promedio'? Escribe 'positiva' o 'negativa':",
                            correctAnswer: "negativa",
                            hint: "A mayor cantidad de horas jugando videojuegos sin control, menor tiempo de estudio y menores notas promedio.",
                            feedbackCorrect: "¡Excelente! Es una relación inversa, por lo tanto la tendencia es negativa.",
                            feedbackIncorrect: "Incorrecto. Al ser una relación inversa, la tendencia esperada es 'negativa'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Se pueden cruzar y graficar una variable cuantitativa (ej. peso) y una cualitativa nominal (ej. color favorito) en un diagrama de dispersión clásico? Escribe 'si' o 'no':",
                            correctAnswer: "no",
                            hint: "El plano cartesiano bidimensional exige de forma estricta que ambos ejes sean numéricos continuos o discretos.",
                            feedbackCorrect: "¡Perfecto! No se puede, ya que el diagrama de dispersión exige estrictamente variables cuantitativas en ambos ejes.",
                            feedbackIncorrect: "Incorrecto. No, requiere que ambas variables sean estrictamente de tipo numérico.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué nos indica visualmente encontrar una nube de puntos con forma clara de U o de parábola en el plano cartesiano?",
                            options: [
                                "Que las variables no tienen ninguna relación entre sí.",
                                "Que existe una relación de tipo no lineal (cuadrática o curva) entre las variables.",
                                "Que la media aritmética es cero.",
                                "Que hay un error de muestreo aleatorio."
                            ],
                            correctAnswer: 1,
                            hint: "La forma de parábola indica relación matemática, pero no en línea recta.",
                            feedbackCorrect: "¡Perfecto! Revela una relación de tipo cuadrático o curvo, no una relación lineal clásica.",
                            feedbackIncorrect: "Incorrecto. Indica una relación no lineal o curva entre las variables.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Los diagramas de dispersión representan pares de datos $(x, y)$ en el plano cartesiano. Permiten identificar visualmente correlaciones positivas, negativas o nulas.",
                    videoPlaceholderText: "Video de Regresión: Cómo dibujar e interpretar diagramas de dispersión en Excel y a mano."
                },
                {
                    id: "coeficiente-correlacion-pearson",
                    title: "Lección 1.2: El Coeficiente de Correlación de Pearson",
                    introduction: "Calcula e interpreta el coeficiente r de Pearson para cuantificar la fuerza y dirección de la asociación lineal.",
                    explanationHtml: '<p>Aunque el diagrama de dispersión nos da una estimación visual intuitiva de la relación, la ciencia exige rigurosidad matemática. Para **cuantificar** de forma exacta la fuerza y la dirección de la relación lineal entre dos variables, calculamos el <strong>Coeficiente de Correlación Lineal de Pearson ($r$)</strong>.</p><p class="mt-2">El valor de $r$ fluctúa estrictamente en el intervalo cerrado de **$-1.00$ a $+1.00$**:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>r = +1.00:</strong> Correlación lineal positiva perfecta. Los puntos están alineados sobre una línea ascendente.</li><li><strong>Valores cercanos a +1.00:</strong> Correlación lineal positiva fuerte (ej. $r = 0.85$).</li><li><strong>r = 0.00:</strong> Correlación nula. No existe ninguna relación lineal entre las variables.</li><li><strong>Valores cercanos a -1.00:</strong> Correlación lineal negativa fuerte (ej. $r = -0.90$).</li><li><strong>r = -1.00:</strong> Correlación lineal negativa perfecta. Los puntos están alineados sobre una línea descendente.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuación de Pearson</p><p class="text-xs font-mono font-bold text-primary">r = Cov(X,Y) / (&sigma;_x * &sigma;_y) &nbsp;|&nbsp; -1.00 &le; r &le; 1.00</p><p class="text-xs text-slate-550">Herramienta: El signo de r indica la dirección; el valor absoluto mide la fuerza de la relación.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">RANGO COEFICIENTE DE PEARSON</text><line x1="30" y1="65" x2="270" y2="65" stroke="#94a3b8" stroke-width="2" /><circle cx="30" cy="65" r="5" fill="#ef4444" /><text x="30" y="80" font-size="8.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">r = -1.0</text><circle cx="150" cy="65" r="5" fill="#475569" /><text x="150" y="80" font-size="8.5" font-weight="bold" fill="#475569" text-anchor="middle">r = 0.0</text><circle cx="270" cy="65" r="5" fill="#10b981" /><text x="270" y="80" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">r = 1.0</text><text x="90" y="53" font-size="8.5" fill="#ef4444" text-anchor="middle">Asociación Inv.</text><text x="210" y="53" font-size="8.5" fill="#10b981" text-anchor="middle">Asociación Dir.</text></svg>',
                    svgDescription: "Escala lineal del coeficiente r de Pearson. Muestra la transición desde correlación inversa perfecta -1.0 (rojo) a correlación directa perfecta +1.0 (verde), con el centro de correlación nula 0.0 (gris).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un estudio agrícola en Tecpán determina que el coeficiente de correlación lineal de Pearson entre el presupuesto invertido en riego ($x$) y la cosecha de café en quintales ($y$) es de $r = 0.85$. Interpreta detalladamente la fuerza y dirección de esta correlación.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Analizar la dirección por el signo.</strong> El valor de $r$ es positivo ($+0.85$). Esto indica una **relación lineal directa**: a mayor inversión en riego, se espera en promedio obtener una mayor cantidad de quintales cosechados.</li><li><strong>Paso 2: Analizar la fuerza por el valor absoluto.</strong> El valor absoluto $|r| = 0.85$ se encuentra muy cercano a $1.00$. Esto representa una **relación lineal positiva muy fuerte**.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> Existe una correlación lineal directa y muy fuerte ($r = 0.85$) entre el presupuesto de riego y la producción de café.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Creer que los signos menos indican debilidad:</strong> Pensar que un coeficiente $r = -0.92$ representa una correlación débil en comparación con $r = 0.40$ debido al signo negativo. Recuerda que el signo indica únicamente la dirección; la fuerza la da el valor absoluto. Un $r = -0.92$ es una correlación extremadamente fuerte (inversa), mucho más sólida que una de $0.40$.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cuál es el valor del coeficiente r de Pearson para dos variables estadísticas que tienen una relación lineal positiva perfecta? (Ingresa el número decimal con punto):",
                            correctAnswer: "1",
                            hint: "Es el valor máximo positivo posible en la escala del coeficiente de Pearson.",
                            feedbackCorrect: "¡Excelente! r = 1.00 para una relación lineal positiva perfecta.",
                            feedbackIncorrect: "Incorrecto. El valor máximo es exactly 1.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si calculas r = -0.92 entre dos variables en Antigua, ¿cómo describes la relación lineal entre ambas variables?",
                            options: [
                                "Relación lineal positiva fuerte.",
                                "Relación lineal negativa o inversa muy fuerte.",
                                "Ausencia total de relación lineal.",
                                "Relación no lineal extremadamente débil."
                            ],
                            correctAnswer: 1,
                            hint: "El signo menos indica que es inversa (negativa), y 0.92 está muy cerca de -1.",
                            feedbackCorrect: "¡Perfecto! r = -0.92 indica una relación lineal inversa (negativa) muy fuerte.",
                            feedbackIncorrect: "Incorrecto. Se describe como una relación lineal inversa o negativa muy fuerte.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si la correlación entre la estatura y el peso de estudiantes en Xela es r = 0.72, ¿cómo se clasifica según su fuerza? (Escribe 'debil', 'moderada' o 'fuerte'):",
                            correctAnswer: "fuerte",
                            hint: "Los valores de 0.70 a 0.90 se consideran correlaciones de fuerza fuerte a moderadamente alta.",
                            feedbackCorrect: "¡Excelente! Un valor de 0.72 representa una correlación lineal fuerte.",
                            feedbackIncorrect: "Incorrecto. Se clasifica como una correlación 'fuerte'.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué le ocurre al valor de r si multiplicamos todas las mediciones de X por 10 (por ejemplo, al pasar la escala de metros a decímetros)?",
                            options: [
                                "Se multiplica por 10.",
                                "Se reduce a la décima parte.",
                                "Se mantiene estrictamente idéntico, ya que r es una medida adimensional e independiente de las escalas.",
                                "Se eleva al cuadrado."
                            ],
                            correctAnswer: 2,
                            hint: "El coeficiente de correlación de Pearson r está estandarizado y no tiene unidades físicas.",
                            feedbackCorrect: "¡Perfecto! r es adimensional, por lo que no cambia al alterar las escalas de medida.",
                            feedbackIncorrect: "Incorrecto. Se mantiene idéntico al ser una medida adimensional estandarizada.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Cuál es el valor exacto del coeficiente r de Pearson para dos variables que se comportan de forma perfectamente inversa? (Ingresa el signo negativo):",
                            correctAnswer: "-1",
                            hint: "Es el valor mínimo posible en la escala del coeficiente de Pearson.",
                            feedbackCorrect: "¡Excelente! r = -1.00 representa una relación lineal negativa perfecta.",
                            feedbackIncorrect: "Incorrecto. Es exactly -1.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "El coeficiente $r$ de Pearson mide la fuerza y sentido lineal de dos variables. Su rango es $[-1.0, 1.0]$. El signo da el sentido (positivo/negativo) y el valor absoluto da la fuerza.",
                    videoPlaceholderText: "Video de Regresión: Cómo calcular paso a paso el coeficiente r de Pearson usando tablas de sumatorias."
                },
                {
                    id: "correlacion-versus-causalidad",
                    title: "Lección 1.3: Correlación versus Causalidad",
                    introduction: "Desarrolla el pensamiento crítico estadístico aprendiendo a diferenciar correlación de causa y efecto.",
                    explanationHtml: '<p>Este es el principio ético y analítico más importante de la ciencia de datos: <strong>Correlación no implica Causalidad</strong>.</p><p class="mt-2">Que dos variables $X$ e $Y$ tengan un coeficiente de Pearson muy alto ($r \\approx 0.95$) o una tendencia lineal perfecta en el diagrama de dispersión, **no significa** que los cambios en la variable $X$ sean la causa directa de los cambios en $Y$. Esta asociación puede deberse a:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Variable de Confusión (Oculta):</strong> Existe una tercera variable externa $Z$ no medida que influye de forma directa y paralela sobre $X$ y sobre $Y$ (ej. la temperatura ambiental).</li><li><strong>Relación Bidireccional:</strong> $Y$ influye sobre $X$ al mismo tiempo que $X$ sobre $Y$.</li><li><strong>Correlación Espuria (Coincidencia):</strong> Dos variables sin relación alguna muestran correlación simplemente por azar o casualidad temporal.</li></ul><p class="mt-2 text-slate-705">Para demostrar causalidad científica inequívoca, se requiere realizar un **experimento diseñado controlado** con asignación aleatoria, no un simple análisis observacional de datos.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Postulado de Causalidad</p><p class="text-base font-mono font-extrabold text-primary">Correlación &ne; Causalidad &nbsp;|&nbsp; Requiere Experimento Controlado</p><p class="text-xs text-slate-500">Regla: No afirmes causa y efecto a partir de un simple coeficiente r observacional.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">VARIABLE DE CONFUSIÓN OCULTA</text><rect x="110" y="30" width="80" height="20" fill="#eff6ff" stroke="#3b82f6" rx="4" /><text x="150" y="42" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">Clima Soleado (Z)</text><rect x="20" y="78" width="80" height="20" fill="#fef2f2" stroke="#ef4444" rx="4" /><text x="60" y="90" font-size="7.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Venta Helados (X)</text><rect x="200" y="78" width="80" height="20" fill="#fef2f2" stroke="#ef4444" rx="4" /><text x="240" y="90" font-size="7.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Quemaduras (Y)</text><path d="M 125 50 L 80 78" stroke="#1d4ed8" stroke-width="1.2" marker-end="url(#arrow)" /><path d="M 175 50 L 220 78" stroke="#1d4ed8" stroke-width="1.2" marker-end="url(#arrow)" /><path d="M 105 88 L 195 88" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="2,2" /><text x="150" y="102" font-size="8.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Falsa Causalidad (r alto)</text></svg>',
                    svgDescription: "Ejemplo clásico de variable de confusión. El clima soleado de verano (Z) causa de forma real tanto el incremento en la venta de helados (X) como el aumento en las quemaduras solares (Y), creando una correlación espuria.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un estudio observacional en Quetzaltenango encuentra una alta correlación positiva entre la cantidad de helados vendidos al día ($x$) y la cantidad de quemaduras por el sol registradas ($y$) en los centros de salud. ¿Significa analíticamente que comer helados provoca quemaduras solares?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Evaluar la existencia de variables ocultas.</strong> Buscamos si existe un factor común que cause ambos efectos.</li><li><strong>Paso 2: Identificar la variable de confusión.</strong> El clima soleado y caluroso (Z) es el causante de que la gente compre helados para refrescarse y de que se exponga al sol en piscinas, quemándose la piel.</li><li><strong>Paso 3: Diagnosticar la relación.</strong> No hay causalidad directa entre helado y quemadura ($X \\to Y$ es falso). La correlación es espuria, generada por la variable oculta del clima (Z).</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> No hay causa y efecto; la correlación se debe a la variable de confusión del clima.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Afirmar relaciones de causa y efecto en la prensa:</strong> Publicar o reportar que un aumento en el uso de una app de educación "provoca" mejores notas académicas basándose únicamente en un estudio observacional simple sin grupo de control controlado. ¡Mantén siempre el rigor crítico!</li></ul>',
                    exercises: [
                        {
                            question: "¿Cómo se denomina formalmente en estadística a una variable no medida que influye tanto en la predictora como en la de respuesta, sugiriendo una falsa causalidad?",
                            options: [
                                "Variable de correlación.",
                                "Variable de confusión o variable oculta.",
                                "Estadístico de sesgo.",
                                "Ordenada de control."
                            ],
                            correctAnswer: 1,
                            hint: "Es una variable ajena que confunde la relación lineal directa haciéndola parecer real.",
                            feedbackCorrect: "¡Excelente! Se llama variable de confusión o variable oculta.",
                            feedbackIncorrect: "Incorrecto. Se denomina variable de confusión o variable oculta.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si encuentras una correlación muy alta entre el tamaño del zapato de los niños y su nivel de lectura en una escuela de Antigua, ¿cuál es la variable explicativa real oculta?",
                            options: [
                                "El color de los zapatos.",
                                "La edad del niño.",
                                "La cantidad de libros leídos.",
                                "El tamaño de la biblioteca escolar."
                            ],
                            correctAnswer: 1,
                            hint: "A mayor edad, los niños calzan más grande y a la vez saben leer libros más complejos.",
                            feedbackCorrect: "¡Perfecto! La variable oculta real es la edad del niño.",
                            feedbackIncorrect: "Incorrecto. La variable real oculta es la edad del niño.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Se puede establecer causalidad directa a partir de un diagrama de dispersión observacional que arroja un coeficiente de Pearson r = 0.99? Escribe 'si' o 'no':",
                            correctAnswer: "no",
                            hint: "Un coeficiente r alto indica asociación lineal fuerte, pero no prueba la dirección del flujo causal.",
                            feedbackCorrect: "¡Excelente! No se puede establecer causalidad basándose solo en r, se requiere un diseño experimental.",
                            feedbackIncorrect: "Incorrecto. No, r = 0.99 no demuestra causalidad por sí solo.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Da un ejemplo de correlación espuria o coincidencia absurda sin sentido en la vida cotidiana.",
                            options: [
                                "A mayor lluvia, mayor venta de paraguas.",
                                "La correlación temporal entre la cantidad de películas de un actor de Hollywood y el consumo de chocolate en el país.",
                                "A mayor estudio, mejores notas en física.",
                                "A mayor velocidad, menor tiempo de llegada."
                            ],
                            correctAnswer: 1,
                            hint: "Busca una relación de variables que coinciden numéricamente pero no tienen ninguna lógica ni conexión real.",
                            feedbackCorrect: "¡Excelente! Las películas del actor y el chocolate no tienen ninguna conexión física, es espuria.",
                            feedbackIncorrect: "Incorrecto. La coincidencia temporal del chocolate y las películas es una correlación espuria típica.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Cuál es la única metodología de diseño científico válida para probar de forma inequívoca una relación de causa y efecto?",
                            options: [
                                "Aumentar el tamaño de la muestra observacional n.",
                                "Realizar un experimento diseñado controlado con asignación aleatoria de tratamientos y grupo de control.",
                                "Calcular el coeficiente de determinación R².",
                                "Dibujar una línea recta a mano sobre los puntos."
                            ],
                            correctAnswer: 1,
                            hint: "Requiere manipular activamente una variable aislando todos los demás factores de confusión.",
                            feedbackCorrect: "¡Excelente! Solo un experimento diseñado controlado demuestra causalidad científica.",
                            feedbackIncorrect: "Incorrecto. Exige un experimento diseñado controlado con grupo de control.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Correlación no implica causalidad. Las variables pueden asociarse debido a variables de confusión ocultas, relaciones bidireccionales o simple coincidencia (correlación espuria).",
                    videoPlaceholderText: "Video de Regresión: Divertidos ejemplos de correlaciones espurias que demuestran que correlación no es causalidad."
                }
            ]
        },
        {
            title: "Unidad 2: El Modelo de Regresión por Mínimos Cuadrados",
            lessons: [
                {
                    id: "recta-regresion-minimos-cuadrados",
                    title: "Lección 2.1: La Recta de Regresión ŷ = mx + b",
                    introduction: "Aprende a calcular la ecuación de la recta de mejor ajuste utilizando las fórmulas de Mínimos Cuadrados.",
                    explanationHtml: '<p>Cuando confirmamos la existencia de una relación lineal fuerte mediante el diagrama de dispersión y el coeficiente de Pearson, el siguiente paso es modelar dicha relación con una línea recta para predecir futuros valores. Ajustamos una recta de regresión de la forma:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\hat{y} = m \\cdot x + b$$</p><p class="mt-2 text-slate-700">Para hallar la pendiente ($m$) y la ordenada al origen ($b$) que garanticen el mejor ajuste, aplicamos el criterio de <strong>Mínimos Cuadrados</strong>, el cual minimiza la suma de las distancias verticales al cuadrado de los puntos a la recta. Las fórmulas son:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$m = \\frac{n\\sum x_i y_i - \\sum x_i \\sum y_i}{n\\sum x_i^2 - (\\sum x_i)^2}$$</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$b = \\bar{y} - m \\cdot \\bar{x}$$</p><p class="mt-2 text-slate-700">Donde $\\bar{x}$ e $\\bar{y}$ representan las medias aritméticas muestrales de ambas variables.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuación de Regresión Lineal</p><p class="text-xs font-mono font-bold text-primary">ŷ = mx + b &nbsp;|&nbsp; m = Pendiente &nbsp;|&nbsp; b = Ordenada al Origen</p><p class="text-xs text-slate-550">Herramienta: Ten cuidado de no confundir la sumatoria de cuadrados &sum;x^2 con (&sum;x)^2 en el denominador.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">RECTA DE MÍNIMOS CUADRADOS</text><line x1="40" y1="100" x2="260" y2="100" stroke="#cbd5e1" stroke-width="1.5" /><line x1="40" y1="30" x2="40" y2="100" stroke="#cbd5e1" stroke-width="1.5" /><line x1="50" y1="90" x2="250" y2="40" stroke="#3b82f6" stroke-width="2" /><circle cx="70" cy="80" r="3.5" fill="#ef4444" /><line x1="70" y1="80" x2="70" y2="85" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" /><circle cx="150" cy="65.5" r="4.5" fill="#10b981" /><text x="150" y="78" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">(x̄, ȳ)</text><circle cx="210" cy="45" r="3.5" fill="#ef4444" /><line x1="210" y1="45" x2="210" y2="50" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" /></svg>',
                    svgDescription: "Recta de regresión de mínimos cuadrados (línea azul) ajustada a una nube de puntos. El punto verde central (x̄, ȳ) es el centroide por donde la recta de mínimos cuadrados pasa de forma obligada.",
                    workedExampleHtml: '<p><strong>Problema:</strong> A partir de los datos simplificados de 3 parcelas de estudio en Guatemala: $(1, 2)$, $(2, 4)$ y $(3, 5)$. Calcula de forma detallada la recta de regresión de mínimos cuadrados.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Realizar las sumatorias de control:</strong> <br>$$n = 3, \\quad \\sum x = 6, \\quad \\sum y = 11$$ <br>$$\\sum x^2 = 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14$$ <br>$$\\sum xy = (1 \\cdot 2) + (2 \\cdot 4) + (3 \\cdot 5) = 2 + 8 + 15 = 25$$</li><li><strong>Paso 2: Calcular la pendiente $m$:</strong> <br>$$m = \\frac{3(25) - (6)(11)}{3(14) - 6^2} = \\frac{75 - 66}{42 - 36} = \\frac{9}{6} = 1.50$$</li><li><strong>Paso 3: Calcular la ordenada al origen $b$:</strong> <br>Medias: $\\bar{x} = 6/3 = 2$, $\\bar{y} = 11/3 = 3.67$. <br>$$b = \\bar{y} - m \\cdot \\bar{x} = 3.67 - 1.50(2) = 3.67 - 3.00 = 0.67$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La ecuación de la recta de regresión por mínimos cuadrados es <strong>$\\hat{y} = 1.50x + 0.67$</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir sumatoria de cuadrados con cuadrado de sumatoria:</strong> Utilizar $(\\sum x)^2 = 6^2 = 36$ en lugar de $\\sum x^2 = 14$ en las sumatorias de la pendiente. Recuerde que el primer término es la suma de los valores al cuadrado y el segundo es la suma simple total elevada al cuadrado.</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué propiedad geométrica representa la ordenada al origen b de la recta de regresión ŷ = mx + b en el plano cartesiano?",
                            options: [
                                "Es la inclinación o pendiente de la recta.",
                                "Es el punto donde la recta interseca exactamente al eje vertical Y (cuando x = 0).",
                                "Es el promedio geométrico de los datos de x.",
                                "Es la varianza residual."
                            ],
                            correctAnswer: 1,
                            hint: "Si colocas x = 0 en la ecuación, ŷ = b. Geométricamente representa el corte con...",
                            feedbackCorrect: "¡Excelente! b representa el intercepto con el eje Y.",
                            feedbackIncorrect: "Incorrecto. Representa el punto donde la recta cruza el eje vertical Y.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si la ecuación de una recta de regresión es ŷ = 2x + 10, ¿cuál es el valor numérico entero estimado de y si x es igual a 5? (Ingresa solo el número entero):",
                            correctAnswer: "20",
                            hint: "Sustituye x = 5 en la ecuación y resuelve: ŷ = 2*(5) + 10.",
                            feedbackCorrect: "¡Perfecto! ŷ = 2*5 + 10 = 20.",
                            feedbackIncorrect: "Incorrecto. ŷ = 2*(5) + 10 = 20.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Por qué punto de coordenadas medias obligadas (x̄, ȳ) pasa siempre de forma geométrica exacta la recta de regresión ajustada por mínimos cuadrados?",
                            options: [
                                "Por el origen de coordenadas (0, 0).",
                                "Por el centroide o punto de medias (x̄, ȳ).",
                                "Por el valor máximo de la muestra.",
                                "Por ningún punto fijo, varía caóticamente."
                            ],
                            correctAnswer: 1,
                            hint: "Es el punto que equilibra las distancias verticales promedio de todos los datos.",
                            feedbackCorrect: "¡Excelente! La recta de mínimos cuadrados siempre pasa por el centroide (x̄, ȳ).",
                            feedbackIncorrect: "Incorrecto. Pasa exactamente por el punto de coordenadas medias (x̄, ȳ).",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el valor decimal exacto de la pendiente m si sabemos que n = 5, ∑x = 10, ∑y = 20, ∑x² = 30 y ∑xy = 50. (Ingresa solo el número entero):",
                            correctAnswer: "1",
                            hint: "Aplica m = (n*∑xy - ∑x*∑y) / (n*∑x² - (∑x)²). Reemplaza: (5*50 - 10*20) / (5*30 - 10^2).",
                            feedbackCorrect: "¡Excelente! m = (250 - 200) / (150 - 100) = 50 / 50 = 1.",
                            feedbackIncorrect: "Incorrecto. m = (250-200) / (150-100) = 50/50 = 1.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Qué representa conceptualmente la variable y con un circunflejo (ŷ) en la ecuación de regresión lineal simple?",
                            options: [
                                "El valor real observado en la muestra experimental.",
                                "El valor promedio estimado o predicho por la recta de regresión.",
                                "La desviación típica de los datos de y.",
                                "La suma de los errores al cuadrado."
                            ],
                            correctAnswer: 1,
                            hint: "El acento circunflejo o sombrero indica estimación a partir de un modelo.",
                            feedbackCorrect: "¡Perfecto! ŷ representa el valor predicho o estimado por el modelo de la recta.",
                            feedbackIncorrect: "Incorrecto. Representa el valor predicho o estimado de la variable dependiente.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La recta de mínimos cuadrados $\\hat{y} = mx + b$ minimiza la suma de errores al cuadrado. Pasa obligatoriamente por el centroide $(\\bar{x}, \\bar{y})$.",
                    videoPlaceholderText: "Video de Regresión: Cómo calcular los coeficientes de mínimos cuadrados a mano de forma rápida."
                },
                {
                    id: "interpretacion-pendiente-ordenada",
                    title: "Lección 2.2: Interpretación de la Pendiente y la Ordenada",
                    introduction: "Aprende a interpretar físicamente la pendiente m y la ordenada al origen b en contextos de negocios y economía.",
                    explanationHtml: '<p>Calcular la recta es un proceso mecánico; la verdadera analítica de negocios consiste en saber qué significan la pendiente ($m$) y la ordenada al origen ($b$) para tomar decisiones ejecutivas informadas:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Pendiente ($m$):</strong> Representa el **cambio promedio esperado en la variable dependiente $Y$ por cada unidad adicional que aumenta la variable explicativa $X$**.<br>1) Si $m$ es positiva, indica que por cada incremento unitario en $X$, $Y$ aumenta en promedio $m$ unidades.<br>2) Si $m$ es negativa, por cada incremento unitario en $X$, $Y$ disminuye en promedio $m$ unidades.</li><li><strong>Ordenada al Origen ($b$):</strong> Representa el **valor promedio esperado de la variable dependiente $Y$ cuando la variable predictora $X$ es exactamente igual a cero** ($X = 0$). Solo tiene interpretación física si $X = 0$ tiene sentido contextual en el estudio.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Significado Físico de Coeficientes</p><p class="text-xs font-mono font-bold text-primary">m = Tasa de cambio promedio de Y por unidad X</p><p class="text-xs font-mono font-bold text-primary">b = Valor base promedio de Y cuando X = 0</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">INTERPRETACIÓN DE COEFICIENTES</text><line x1="40" y1="100" x2="260" y2="100" stroke="#cbd5e1" stroke-width="1.5" /><line x1="40" y1="30" x2="40" y2="100" stroke="#cbd5e1" stroke-width="1.5" /><line x1="40" y1="90" x2="240" y2="50" stroke="#3b82f6" stroke-width="2.5" /><circle cx="40" cy="90" r="4.5" fill="#f59e0b" /><text x="48" y="85" font-size="8" font-weight="bold" fill="#b45309">Corte b = 5.0</text><line x1="140" y1="70" x2="190" y2="70" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2" /><line x1="190" y1="70" x2="190" y2="60" stroke="#10b981" stroke-width="1.5" /><text x="165" y="80" font-size="7.5" fill="#047857" text-anchor="middle">Aumenta X = 1</text><text x="212" y="65" font-size="7.5" fill="#047857" font-weight="bold" text-anchor="middle">m = 0.8</text></svg>',
                    svgDescription: "Interpretación visual de coeficientes. La ordenada b=5.0 es el corte en el eje vertical cuando X=0. La pendiente m=0.8 es la altura en verde que sube la recta (Y) al avanzar una unidad a la derecha (X).",
                    workedExampleHtml: '<p><strong>Problema:</strong> En Tecpán, una recta de regresión estima el consumo de combustible de un generador en un aserradero en galones ($y$) a partir de las horas de operación ($x$): $\\hat{y} = 0.8x + 5.0$. Interpreta detalladamente qué significan los coeficientes $0.8$ y $5.0$ para el jefe de producción.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Interpretar la pendiente ($m = 0.8$):</strong> Mide el cambio de Y por cada unidad de X. <br>**Interpretación:** Por cada hora adicional que opera el generador, el consumo de combustible aumenta en promedio exactamente en $0.8\\text{ galones}$.</li><li><strong>Paso 2: Interpretar la ordenada al origen ($b = 5.0$):</strong> Mide el valor cuando $X = 0$. <br>**Interpretación:** Si el generador está encendido pero operando a cero horas de trabajo útil ($x = 0$, ralentí o arranque), consume un promedio inicial fijo de $5.0\\text{ galones}$ de combustible de base.</li></ol>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Interpretar la ordenada al origen sin sentido físico:</strong> Intentar explicar la ordenada al origen de una regresión de peso versus estatura ($ŷ = 60x - 30$) afirmando que una persona con estatura de cero metros pesa $-30\\text{ kg}$ de forma teórica. Esto no tiene sentido biológico. Si el valor cero no está en el rango de los datos de la muestra, la ordenada al origen es solo una constante de ajuste matemático y no debe interpretarse físicamente.</li></ul>',
                    exercises: [
                        {
                            question: "Si la recta de ventas de una tienda en Antigua es y = 50x + 1000, donde x representa la cantidad de anuncios colocados, ¿cuál es el valor numérico en Quetzales de las ventas base esperadas si no colocan ningún anuncio (x = 0)? (Ingresa solo el número entero):",
                            correctAnswer: "1000",
                            hint: "Sustituye x = 0 en la ecuación de ventas dada y resuelve.",
                            feedbackCorrect: "¡Excelente! Las ventas base cuando x = 0 son de Q1,000.00.",
                            feedbackIncorrect: "Incorrecto. Es el valor de la ordenada al origen: 1000.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Con la misma recta del ejercicio anterior (y = 50x + 1000), ¿en cuántos Quetzales aumentan las ventas promedio por cada anuncio adicional colocado? (Ingresa solo el número entero):",
                            correctAnswer: "50",
                            hint: "Mide el incremento promedio de y por unidad de x, el cual corresponde a la pendiente m.",
                            feedbackCorrect: "¡Perfecto! Aumentan Q50.00 en promedio por cada anuncio colocado.",
                            feedbackIncorrect: "Incorrecto. El incremento unitario lo da la pendiente, que es 50.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "En la ecuación de regresión y = -2.5x + 100, ¿qué significa físicamente que la pendiente sea negativa (m = -2.5)?",
                            options: [
                                "Que por cada unidad que aumenta x, la variable dependiente y disminuye en promedio 2.5 unidades.",
                                "Que el modelo de regresión lineal no sirve para predecir.",
                                "Que hay una probabilidad negativa de error.",
                                "Que la ordenada al origen es menor a 100."
                            ],
                            correctAnswer: 0,
                            hint: "El signo negativo indica una relación inversa: al aumentar una, la otra disminuye.",
                            feedbackCorrect: "¡Excelente! La pendiente negativa indica la tasa de disminución de y por unidad x.",
                            feedbackIncorrect: "Incorrecto. Significa que y disminuye en promedio 2.5 unidades por cada aumento unitario de x.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Es útil y recomendado interpretar físicamente la ordenada al origen b si todo el soporte de datos medidos para x se encuentra muy alejado de cero (ej. x entre 100 y 500 llamadas)? Escribe 'si' o 'no':",
                            correctAnswer: "no",
                            hint: "Si x = 0 está muy fuera de tus datos reales medidos, extrapolar b carece de sentido práctico.",
                            feedbackCorrect: "¡Excelente! No es recomendado, ya que representa una extrapolación extrema sin validez física.",
                            feedbackIncorrect: "Incorrecto. No, en ese caso b es solo una constante matemática sin significado real.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si una ecuación de regresión de costo de envío estima y = 1.20x + 0.50 dólares, ¿cuál es el incremento de costo en dólares si enviamos un paquete que pesa 10 kg adicionales (x aumenta en 10)? (Ingresa el número con punto decimal):",
                            correctAnswer: "12",
                            hint: "Multiplica el incremento de peso (10) por la pendiente unitaria (1.20).",
                            feedbackCorrect: "¡Perfecto! Incremental = 10 * 1.20 = 12.00 dólares.",
                            feedbackIncorrect: "Incorrecto. El incremento es 1.20 * 10 = 12 dólares.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La pendiente $m$ indica la tasa de cambio promedio de $Y$ por unidad de $X$. La ordenada $b$ es el promedio base de $Y$ cuando $X=0$.",
                    videoPlaceholderText: "Video de Regresión: Cómo interpretar la pendiente y el intercepto en reportes de negocios reales."
                },
                {
                    id: "prediccion-e-interpolacion",
                    title: "Lección 2.3: Predicción e Interpolación",
                    introduction: "Aprende a realizar predicciones de Y utilizando la recta, diferenciando interpolación segura de extrapolación riesgosa.",
                    explanationHtml: '<p>La mayor utilidad práctica de la regresión lineal es la **predicción**: utilizar la ecuación ajustada para estimar el valor promedio de la variable dependiente $\\hat{y}$ para un valor de interés de la variable explicativa $x$.</p><p class="mt-2">Sin embargo, no todas las predicciones tienen la misma validez científica. Clasificamos las proyecciones en dos categorías según la ubicación de $x$:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>1. Interpolación:</strong> Consiste en predecir valores de $Y$ para una variable explicativa $x$ que se encuentra **dentro del rango original de los datos** medidos en la muestra. Es un procedimiento **seguro, confiable y estadísticamente válido**.</li><li><strong>2. Extrapolación:</strong> Consiste en predecir para valores de $x$ situados **muy fuera del rango original de los datos**. Es una práctica de **alto riesgo analítico**, ya que asume de forma ciega que la tendencia lineal se mantiene infinitamente, ignorando límites físicos y económicos.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Regiones de Predicción</p><p class="text-xs font-mono font-bold text-primary">Rango [x_min, x_max] = Interpolación Segura &nbsp;|&nbsp; Fuera del rango = Extrapolación</p><p class="text-xs text-slate-550">Advertencia: En el mundo real, los modelos lineales suelen saturarse o doblarse fuera de su rango.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">INTERPOLACIÓN VS EXTRAPOLACIÓN</text><line x1="30" y1="90" x2="270" y2="90" stroke="#cbd5e1" stroke-width="1.5" /><rect x="60" y="80" width="120" height="20" fill="#d1fae5" stroke="#10b981" rx="3" /><text x="120" y="93" font-size="8" font-weight="bold" fill="#065f46" text-anchor="middle">Soporte Muestra [10, 50]</text><circle cx="120" cy="55" r="4.5" fill="#10b981" /><text x="120" y="45" font-size="7.5" font-weight="bold" fill="#065f46" text-anchor="middle">x = 30 (Seguro)</text><circle cx="230" cy="55" r="4.5" fill="#ef4444" /><text x="230" y="45" font-size="7.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">x = 80 (Riesgo)</text><line x1="120" y1="50" x2="120" y2="80" stroke="#475569" stroke-width="0.8" stroke-dasharray="2,2" /><line x1="230" y1="50" x2="230" y2="90" stroke="#475569" stroke-width="0.8" stroke-dasharray="2,2" /></svg>',
                    svgDescription: "Esquema de soporte de datos de regresión. Valores dentro del rango de muestra (verde) son interpolaciones seguras; valores lejanos (rojo) representan extrapolación de alto riesgo.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un estudio de rendimiento agrícola en Escuintla mide la producción de caña de azúcar ($y$) en toneladas para temperaturas ($x$) registradas en la muestra entre 25°C y 35°C, obteniendo la recta $\\hat{y} = 4x + 10$. Evalúa de forma crítica la validez de proyectar para: a) 30°C, b) 5°C.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Analizar caso a (30°C):</strong> El valor 30°C está dentro del rango medido [25°C, 35°C]. Es una **interpolación segura y válida**: <br>$$\\hat{y} = 4(30) + 10 = 120 + 10 = 130\\text{ toneladas}$$</li><li><strong>Paso 2: Analizar caso b (5°C):</strong> El valor 5°C está muy alejado del rango. Aplicar la recta daría $\\hat{y} = 4(5) + 10 = 30\\text{ t}$. Sin embargo, biológicamente a 5°C la caña de azúcar se congela y la producción real es cero. Es una **extrapolación inválida de alto riesgo**.</li></ol>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confiar ciegamente en extrapolaciones lejanas:</strong> Proyectar las ventas de un negocio para un presupuesto publicitario 10 veces mayor que el medido usando la recta de mínimos cuadrados. Las relaciones comerciales suelen saturarse debido a leyes de rendimientos decrecientes y no se mantienen lineales a gran escala.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cómo se denomina formalmente a la predicción de un valor de Y para una variable explicativa X que se encuentra dentro del rango de datos experimentales recopilados?",
                            options: [
                                "Extrapolación.",
                                "Interpolación de datos.",
                                "Deducción de varianza.",
                                "Axioma muestral."
                            ],
                            correctAnswer: 1,
                            hint: "La palabra lleva el prefijo latino 'inter' que significa entre o dentro.",
                            feedbackCorrect: "¡Excelente! Se llama interpolación de datos y es muy confiable.",
                            feedbackIncorrect: "Incorrecto. Se denomina interpolación.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si tu rango medido va de 10 a 50 llamadas diarias de ventas y utilizas la recta para estimar las ventas de 500 llamadas diarias, ¿qué proceso estadístico estás realizando?",
                            options: [
                                "Interpolación segura.",
                                "Extrapolación de alto riesgo.",
                                "Masa de probabilidad discreta.",
                                "Teorema del Límite Central."
                            ],
                            correctAnswer: 1,
                            hint: "Consiste en proyectar fuera del soporte medido original.",
                            feedbackCorrect: "¡Perfecto! Estás extrapolando de forma arriesgada muy fuera de la muestra.",
                            feedbackIncorrect: "Incorrecto. Estás realizando una extrapolación de alto riesgo.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "En la recta de regresión ŷ = 0.50x + 20, calcula el valor predicho o estimado para x = 80. (Ingresa solo el número entero):",
                            correctAnswer: "60",
                            hint: "Sustituye x = 80 en la ecuación: ŷ = 0.50*(80) + 20.",
                            feedbackCorrect: "¡Excelente! ŷ = 40 + 20 = 60.",
                            feedbackIncorrect: "Incorrecto. ŷ = 0.50*(80) + 20 = 60.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Por qué la extrapolación extrema representa un gran peligro financiero o físico en la toma de decisiones?",
                            options: [
                                "Porque los cálculos de factoriales se vuelven infinitos.",
                                "Porque las tendencias de la naturaleza y del mercado suelen saturarse, cambiar de curvatura o romperse fuera del rango de datos observados.",
                                "Porque el error estándar se reduce a cero.",
                                "Porque los residuos se vuelven positivos."
                            ],
                            correctAnswer: 1,
                            hint: "Piensa si un negocio puede crecer linealmente al infinito sin límites físicos.",
                            feedbackCorrect: "¡Excelente! Las tendencias de la naturaleza y economía suelen saturarse fuera del rango medido.",
                            feedbackIncorrect: "Incorrecto. Las tendencias se saturan o rompen fuera del soporte medido original.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Si realizas una predicción para x = 30 si tu muestra original mide valores de x entre 20 y 40, ¿es el resultado confiable? Escribe 'si' o 'no':",
                            correctAnswer: "si",
                            hint: "Al encontrarse 30 dentro del soporte medido [20, 40], se considera una interpolación confiable.",
                            feedbackCorrect: "¡Perfecto! Sí, es una interpolación segura dentro del rango de datos experimentales.",
                            feedbackIncorrect: "Incorrecto. Sí, es una interpolación estándar segura.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La predicción estima $\\hat{y}$ para un valor de $x$. La interpolación (dentro del rango muestral) es segura; la extrapolación (fuera del rango) es riesgosa debido a cambios de tendencia.",
                    videoPlaceholderText: "Video de Regresión: Interpolación y extrapolación explicada con ejemplos de la vida real."
                }
            ]
        },
        {
            title: "Unidad 3: Coeficiente de Determinación y Análisis de Residuos",
            lessons: [
                {
                    id: "coeficiente-determinacion-r2",
                    title: "Lección 3.1: Coeficiente de Determinación R²",
                    introduction: "Calcula y evalúa la bondad de ajuste del modelo lineal mediante el Coeficiente de Determinación R².",
                    explanationHtml: '<p>Ajustar una recta de regresión por mínimos cuadrados es fácil, pero ¿cómo sabemos si ese modelo lineal es realmente bueno y útil para predecir? Para medir la calidad y bondad de ajuste de nuestra recta, calculamos el <strong>Coeficiente de Determinación ($R^2$ o $r^2$)</strong>.</p><p class="mt-2">El $R^2$ representa la <strong>proporción de la variabilidad total de la variable dependiente $Y$ que es explicada de forma satisfactoria por la variable independiente $X$ a través del modelo de la recta de regresión</strong>. En modelos de regresión lineal simple, se calcula de forma directa elevando al cuadrado el coeficiente de correlación de Pearson:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$R^2 = r^2$$</p><p class="mt-2 text-slate-700">El valor de $R^2$ fluctúa entre **0 y 1** (de **0% a 100%**):</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>R² = 1.00 (100%):</strong> Ajuste perfecto. La recta explica la totalidad de los datos y todos los puntos están situados exactamente sobre la recta.</li><li><strong>R² = 0.81 (81%):</strong> Excelente ajuste. El 81% de la variación de Y se explica por X, y el 19% se debe a factores inexplicados.</li><li><strong>R² = 0.00 (0%):</strong> El modelo lineal no explica absolutamente nada de la variación y no sirve para predecir.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Bondad de Ajuste R²</p><p class="text-xs font-mono font-bold text-primary">R^2 = r^2 &nbsp;|&nbsp; R^2 = Variación Explicada / Variación Total</p><p class="text-xs text-slate-550">Herramienta: En ciencias sociales, un R² de 40% puede ser sumamente valioso e informativo.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">EXPLICACIÓN DE VARIANZA R²</text><circle cx="90" cy="65" r="30" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" /><circle cx="110" cy="65" r="20" fill="#d1fae5" stroke="#10b981" stroke-width="1.5" /><text x="90" y="68" font-size="9.5" font-weight="bold" fill="#1e40af">Y</text><text x="110" y="68" font-size="9.5" font-weight="bold" fill="#047857">X</text><rect x="155" y="40" width="115" height="55" fill="#f0fdf4" stroke="#86efac" rx="6" /><text x="212.5" y="58" font-size="8" font-weight="extrabold" fill="#047857" text-anchor="middle">R² = 81% (Explicado)</text><text x="212.5" y="78" font-size="7.5" fill="#475569" text-anchor="middle">19% de variación</text><text x="212.5" y="88" font-size="7.5" fill="#475569" text-anchor="middle">de Y no explicada por X</text></svg>',
                    svgDescription: "Esquema de varianza compartida. El coeficiente R²=81% indica la porción de área verde solapada (explicada por X), dejando un 19% de variación de Y debido a otros factores.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un analista en Antigua Guatemala determina que el coeficiente de correlación lineal entre el presupuesto publicitario ($x$) y las ventas ($y$) de una empresa es de $r = 0.90$. Calcula el Coeficiente de Determinación $R^2$ e interpreta el resultado para la gerencia de finanzas.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Calcular $R^2$ elevando al cuadrado el coeficiente de correlación de Pearson:</strong> <br>$$R^2 = r^2 = (0.90)^2 = 0.81$$</li><li><strong>Paso 2: Expresar en porcentaje:</strong> <br>$$0.81 \\times 100\\% = 81\\%$$</li><li><strong>Paso 3: Interpretar en el contexto.</strong> <br>**Significado:** El **81% de la variación total observada en las ventas** de la empresa se puede explicar satisfactoriamente mediante el modelo de la recta de regresión a partir del presupuesto publicitario invertido. El **19% restante de la variación** se debe a otros factores inexplicados o variables ajenas al modelo simple (ej. competencia, calidad del producto).</li></ol>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir R² con r:</strong> Atribuirle a un $R^2$ de $64\\%$ una correlación directa del $64\\%$. Recuerde que la correlación lineal es $r = \\pm \\sqrt{R^2} = \\pm \\sqrt{0.64} = \\pm 0.80$. R² y r representan conceptos analíticos diferentes; no los confunda.</li></ul>',
                    exercises: [
                        {
                            question: "Si el coeficiente de correlación lineal de Pearson es r = -0.80, ¿cuál es el valor decimal del coeficiente de determinación R²? (Ingresa el número con punto decimal):",
                            correctAnswer: "0.64",
                            hint: "Eleva al cuadrado el valor de r: (-0.80)^2. Recuerda que al elevar al cuadrado, el resultado es siempre positivo.",
                            feedbackCorrect: "¡Excelente! R² = (-0.80)^2 = 0.64 (o 64%).",
                            feedbackIncorrect: "Incorrecto. R² = (-0.80)^2 = 0.64.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el valor del coeficiente de determinación R² si la recta de regresión lineal explica el 100% de la variación de los datos muestrales? (Ingresa el número entero):",
                            correctAnswer: "1",
                            hint: "Representa el ajuste perfecto donde el modelo explica de forma total la variable.",
                            feedbackCorrect: "¡Perfecto! R² = 1.00 o 100%.",
                            feedbackIncorrect: "Incorrecto. Equivale exactamente a 1.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si el coeficiente de determinación de un modelo es R² = 0.49, calcula el valor absoluto del coeficiente de correlación r de Pearson. (Ingresa el número con punto decimal):",
                            correctAnswer: "0.7",
                            hint: "Calcula la raíz cuadrada de R²: √0.49.",
                            feedbackCorrect: "¡Excelente! |r| = √0.49 = 0.70.",
                            feedbackIncorrect: "Incorrecto. |r| = √0.49 = 0.70.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Qué porcentaje de la variación de la variable dependiente Y queda INEXPLICADO en un modelo lineal que tiene un R² de 0.75? (Ingresa solo el número entero sin el símbolo %):",
                            correctAnswer: "25",
                            hint: "Resta el porcentaje explicado al 100%: 100% - 75%.",
                            feedbackCorrect: "¡Perfecto! Queda inexplicado el 25% de la variación (100% - 75%).",
                            feedbackIncorrect: "Incorrecto. La variación inexplicada es 100% - 75% = 25%.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si el R² de un modelo lineal es prácticamente cero (0.01), ¿cuál es tu conclusión estadística sobre la utilidad de la recta de regresión?",
                            options: [
                                "Que la recta tiene un ajuste perfecto.",
                                "Que la recta de regresión no tiene ninguna capacidad de predicción lineal y el modelo no es útil.",
                                "Que se debe usar una muestra más pequeña.",
                                "Que la pendiente es infinita."
                            ],
                            correctAnswer: 1,
                            hint: "Un R² cercano a cero indica que la variable explicativa X no explica los cambios de Y.",
                            feedbackCorrect: "¡Excelente! Un R² muy cercano a cero indica que la recta no es útil para estimaciones lineales.",
                            feedbackIncorrect: "Incorrecto. Significa que el modelo lineal no tiene utilidad práctica de predicción.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El Coeficiente de Determinación $R^2 = r^2$ mide el porcentaje de la variabilidad total de $Y$ explicada por $X$ mediante el modelo de regresión. Oscila entre $0$ y $1$ ($0\\%$ a $100\\%$).",
                    videoPlaceholderText: "Video de Regresión: Qué es el coeficiente de determinación R2 y cómo evaluar la bondad de ajuste."
                },
                {
                    id: "definicion-analisis-residuos",
                    title: "Lección 3.2: Definición y Análisis de Residuos",
                    introduction: "Aprende a calcular los residuos individuales e interpreta su distribución gráfica para validar la homocedasticidad.",
                    explanationHtml: '<p>Ningún modelo matemático es perfecto; siempre existen discrepancias entre lo estimado por la recta y lo que realmente ocurre en la realidad. Mapeamos estos errores individuales calculando los <strong>Residuos ($e_i$)</strong>.</p><p class="mt-2">Un residuo representa la **distancia vertical** desde el punto de dato real observado $y_i$ hasta el valor promedio estimado por la recta de regresión $\\hat{y}_i$:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$e_i = y_i - \\hat{y}_i$$</p><p class="mt-2 text-slate-700">Propiedades y validaciones de los residuos:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Signo del Residuo:</strong> <br>1) Si $e_i > 0$ (positivo), el dato real está por encima de la recta (subestimación).<br>2) Si $e_i < 0$ (negativo), el dato real está por debajo de la recta (sobreestimación).</li><li><strong>Suma de Residuos:</strong> En la regresión de mínimos cuadrados, la suma (y el promedio) de todos los residuos es **exactamente cero** ($\\sum e_i = 0.00$).</li><li><strong>Homocedasticidad:</strong> Para que el modelo lineal sea óptimo, los residuos graficados versus X deben distribuirse de forma totalmente aleatoria, como una banda horizontal homogénea alrededor de la línea cero, sin mostrar patrones lógicos de curvas o de embudo.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuación del Residuo</p><p class="text-xs font-mono font-bold text-primary">e = y - ŷ &nbsp;|&nbsp; &sum;e = 0.00</p><p class="text-xs text-slate-550">Si los residuos forman una U, el modelo lineal es incorrecto y se requiere una curva cuadrática.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">GEOMETRÍA DEL RESIDUO</text><line x1="40" y1="90" x2="260" y2="90" stroke="#cbd5e1" stroke-width="1.5" /><line x1="40" y1="90" x2="260" y2="40" stroke="#3b82f6" stroke-width="2" /><circle cx="160" cy="50" r="3.5" fill="#ef4444" /><line x1="160" y1="50" x2="160" y2="62.7" stroke="#10b981" stroke-width="1.5" /><circle cx="160" cy="62.7" r="3" fill="#10b981" /><text x="160" y="42" font-size="7.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Real y = 10</text><text x="168" y="58" font-size="7.5" font-weight="bold" fill="#047857">Residuo e = +2</text><text x="160" y="74" font-size="7.5" fill="#1e40af" text-anchor="middle">Estimado ŷ = 8</text></svg>',
                    svgDescription: "Geometría del error residual. Muestra la distancia vertical e = y - ŷ desde el punto observado real y=10 (rojo) hasta el valor estimado de la recta ŷ=8 (verde), resultando en un residuo positivo de +2.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Para una observación real en Antigua Guatemala con coordenadas $A(2, 10)$, la recta de regresión estima una predicción $\\hat{y} = 3x + 2$. Calcula detalladamente el residuo de esta observación e interpreta el signo obtenido.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Identificar el valor real observado ($y$):</strong> <br>$$y = 10\\text{ unidades}$$</li><li><strong>Paso 2: Calcular el valor estimado ($\\hat{y}$):</strong> Sustituimos $x = 2$ en la ecuación: <br>$$\\hat{y} = 3(2) + 2 = 6 + 2 = 8\\text{ unidades}$$</li><li><strong>Paso 3: Aplicar la fórmula del residuo:</strong> <br>$$e = y - \\hat{y} = 10 - 8 = +2\\text{ unidades}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Interpretación:</strong> El residuo es de <strong>+2</strong>. Dado que es positivo, indica que la recta subestimó el valor real, el cual se sitúa 2 unidades por encima de lo predicho por el modelo.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Calcular el residuo al revés:</strong> Restar el real del estimado $\\hat{y} - y$ por descuido. Esto dará un residuo de $-2$ incorrecto, invirtiendo la dirección lógica del error. Recuerda la regla alfabética nemotécnica: la **R** de **R**esiduo es **R**eal menos **E**stimado ($y - \\hat{y}$).</li></ul>',
                    exercises: [
                        {
                            question: "Si la recta de regresión estima una predicción de 100 unidades y el valor real observado es 95, ¿cuál es el valor numérico entero del residuo? (Ingresa el signo negativo si corresponde):",
                            correctAnswer: "-5",
                            hint: "Aplica la fórmula: e = y - ŷ. Reemplaza y = 95 y ŷ = 100.",
                            feedbackCorrect: "¡Excelente! e = 95 - 100 = -5. Al ser negativo, la recta sobreestimó el valor real.",
                            feedbackIncorrect: "Incorrecto. e = y - ŷ = 95 - 100 = -5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué nos indica encontrar una clara figura acampanada o en forma de U al graficar los residuos versus la variable explicativa X?",
                            options: [
                                "Que el modelo de regresión lineal es perfectamente correcto.",
                                "Que la relación entre las variables no es lineal, y el modelo óptimo es una curva cuadrática o curvo.",
                                "Que la desviación estándar es infinita.",
                                "Que la muestra es demasiado grande."
                            ],
                            correctAnswer: 1,
                            hint: "Cualquier patrón curvo en los residuos revela que la linealidad se ha roto.",
                            feedbackCorrect: "¡Perfecto! Un patrón en U indica que la relación no es lineal y se requiere un modelo curvo.",
                            feedbackIncorrect: "Incorrecto. Indica que la relación real de los datos es de tipo curvo o no lineal.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Cuál es el valor numérico exacto de la suma (y el promedio) de todos los residuos verticales en una regresión ajustada por mínimos cuadrados? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "Por propiedad de mínimos cuadrados, los errores positivos y negativos se cancelan de forma matemática perfecta.",
                            feedbackCorrect: "¡Excelente! La sumatoria de todos los residuos de mínimos cuadrados siempre es exactamente cero.",
                            feedbackIncorrect: "Incorrecto. Por diseño matemático, la suma de residuos siempre da 0.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Si el residuo de una predicción específica es exactamente cero, ¿qué nos indica geométricamente sobre esa observación en el plano cartesiano?",
                            options: [
                                "Que el punto de dato real se encuentra ubicado de forma exacta sobre la recta de regresión.",
                                "Que el punto está en el origen (0, 0).",
                                "Que la varianza de la muestra es nula.",
                                "Que hay una probabilidad del 100% de error."
                            ],
                            correctAnswer: 0,
                            hint: "Si e = 0, entonces y = ŷ. El dato real coincide con el estimado de la recta.",
                            feedbackCorrect: "¡Perfecto! Indica que el punto real está exactamente sobre la línea de regresión.",
                            feedbackIncorrect: "Incorrecto. Significa que el punto observado está situado exactamente sobre la recta.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Cómo se define de forma estándar el concepto de 'homocedasticidad' en el análisis de residuos?",
                            options: [
                                "Que todos los residuos tienen signo positivo.",
                                "Que la varianza de los residuos es constante a lo largo de todos los valores de la variable predictora x.",
                                "Que el coeficiente R² es igual a la unidad.",
                                "Que la media muestral de los residuos es cero."
                            ],
                            correctAnswer: 1,
                            hint: "El prefijo griego 'homo' significa igual, y 'cedasticidad' se refiere a la dispersión de la varianza.",
                            feedbackCorrect: "¡Perfecto! Homocedasticidad significa que la varianza de los residuos es constante.",
                            feedbackIncorrect: "Incorrecto. Se refiere a que la variabilidad de los residuos se mantiene constante.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El residuo es la distancia vertical $e = y - \\hat{y}$ entre el dato real y el estimado. La suma de todos los residuos de mínimos cuadrados es exactamente 0.00.",
                    videoPlaceholderText: "Video de Regresión: Cómo graficar y analizar los residuos para validar la linealidad de tus modelos."
                },
                {
                    id: "casos-practicos-regresion-estadistica",
                    title: "Lección 3.3: Casos Prácticos Aplicados a Agronegocios y Finanzas",
                    introduction: "Resuelve casos de estudio prácticos de proyección financiera en Guatemala integrando de forma completa regresión y R².",
                    explanationHtml: '<p>En la realidad de los agronegocios y las finanzas de Guatemala, la regresión lineal simple nos permite modelar cómo las inversiones influyen de forma directa en los ingresos o rendimientos de producción de una cooperativa o empresa.</p><p class="mt-2">Un análisis financiero integral exige evaluar de forma secuencial:</p><ol class="list-decimal pl-5 space-y-1.5 my-3"><li>1. Estimar la ecuación de mínimos cuadrados a partir de los datos históricos de parcelas piloto o sucursales comerciales.</li><li>2. Validar la bondad de ajuste del modelo mediante el coeficiente $R^2$ para saber si es confiable.</li><li>3. Verificar si el presupuesto de proyección se encuentra dentro del rango de soporte muestral (interpolación segura).</li><li>4. Proyectar los ingresos esperados y evaluar la viabilidad de los retornos de inversión.</li></ol>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Modelo Integrado Financiero</p><p class="text-xs font-mono font-bold text-primary">ŷ = mx + b &rArr; Validar R^2 &rArr; Verificar rango X &rArr; Proyectar ingresos</p><p class="text-xs text-slate-550">Herramienta: Úsalo para planificar presupuestos de riego, abono y campañas publicitarias.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">PROYECCIÓN DE AGRONEGOCIOS</text><line x1="40" y1="100" x2="260" y2="100" stroke="#cbd5e1" stroke-width="1.5" /><line x1="40" y1="30" x2="40" y2="100" stroke="#cbd5e1" stroke-width="1.5" /><line x1="40" y1="90" x2="220" y2="40" stroke="#3b82f6" stroke-width="2.5" /><circle cx="130" cy="65" r="4.5" fill="#10b981" /><text x="130" y="55" font-size="7.5" font-weight="bold" fill="#047857" text-anchor="middle">Proyección: 76 quintales</text><line x1="130" y1="65" x2="130" y2="100" stroke="#475569" stroke-width="0.8" stroke-dasharray="2,2" /><text x="130" y="110" font-size="7" fill="#475569" font-weight="bold" text-anchor="middle">Riego X = Q3,000</text></svg>',
                    svgDescription: "Gráfico de proyección aplicada a agronegocios. Ilustra la estimación de una cosecha de 76 quintales de café para una inversión de riego de Q3,000 dentro del rango de soporte.",
                    workedExampleHtml: '<p><strong>Caso Práctico:</strong> Una cooperativa en Sololá recopila datos de sacos de café producidos en quintales ($y$) a partir del presupuesto de riego invertido en miles de Quetzales ($x$) en 5 parcelas de estudio, obteniendo la recta de regresión: $\\hat{y} = 12x + 40$, con un $R^2 = 0.85$ y un rango medido de inversión entre Q1,000 y Q5,000 ($x$ de 1 a 5). Realiza una proyección de quintales cosechados para una inversión de riego de Q3,000 ($x = 3$) e interpreta.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Evaluar la seguridad de la predicción.</strong> La inversión solicitada de Q3,000 ($x = 3$) se ubica dentro del rango muestral medido $[1, 5]$. Por lo tanto, es una **interpolación segura y estadísticamente válida**.</li><li><strong>Paso 2: Calcular la predicción:</strong> Sustituimos $x = 3$ en la recta: <br>$$\\hat{y} = 12(3) + 40 = 36 + 40 = 76\\text{ quintales}$$</li><li><strong>Paso 3: Evaluar con R².</strong> El $R^2 = 85\\%$ indica que el riego explica de forma excelente la variabilidad de la producción de café. La estimación es altamente sólida para planificar la facturación anual de la cooperativa.</li></ol>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Invertir sumas astronómicas basándose en extrapolaciones de rectas:</strong> Proyectar cosechas gigantescas para una inversión de Q100,000 usando la recta $\\hat{y} = 12(100) + 40$ por prisa. Los cultivos agrícolas tienen límites físicos de saturación y espacio; la relación lineal se romperá inevitablemente y la extrapolación conducirá a pérdidas de capital.</li></ul>',
                    exercises: [
                        {
                            question: "Con el modelo anterior (ŷ = 12x + 40), ¿cuántos quintales base se esperan cosechar en promedio si la inversión de riego es cero (x = 0)? (Ingresa solo el número entero):",
                            correctAnswer: "40",
                            hint: "Corresponde al valor de la ordenada al origen b cuando la variable predictora riego es nula.",
                            feedbackCorrect: "¡Excelente! Se cosechan 40 quintales de base por riego natural sin inversión extra.",
                            feedbackIncorrect: "Incorrecto. Es el intercepto b = 40 quintales.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuántos quintales promedio de café aumenta la cosecha por cada mil Quetzales adicionales invertidos en riego según el modelo? (Ingresa solo el número entero):",
                            correctAnswer: "12",
                            hint: "Es la tasa de cambio unitaria de y por incremento de x, representada por la pendiente m.",
                            feedbackCorrect: "¡Perfecto! Aumenta 12 quintales por cada mil Quetzales invertidos.",
                            feedbackIncorrect: "Incorrecto. Lo determina la pendiente m = 12 quintales.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si la cooperativa quiere estimar la producción para una inversión de Q50,000 (x = 50) basándose en este modelo piloto de 5 parcelas, ¿es una predicción segura?",
                            options: [
                                "Sí, porque el R² es del 85% y es muy alto.",
                                "No, porque es una extrapolación extrema de altísimo riesgo comercial fuera del rango de datos [1, 5].",
                                "Sí, porque las plantas necesitan riego constante.",
                                "Sí, porque la pendiente es positiva."
                            ],
                            correctAnswer: 1,
                            hint: "Evalúa si 50 está dentro del soporte medido [1, 5] de parcelas piloto.",
                            feedbackCorrect: "¡Excelente! Es una extrapolación lejana y representa un gran riesgo comercial.",
                            feedbackIncorrect: "Incorrecto. No, representa una extrapolación extrema de alto riesgo.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si en una parcela real con inversión de Q2,000 (x = 2) la cosecha real fue de 60 quintales, calcula el residuo con respecto a la predicción. (Ingresa el signo negativo si corresponde):",
                            correctAnswer: "-4",
                            hint: "Predicción ŷ = 12*(2) + 40 = 64. Aplica: e = y - ŷ = 60 - 64.",
                            feedbackCorrect: "¡Perfecto! Residuo e = 60 - 64 = -4 quintales. La recta sobreestimó la cosecha de esta parcela.",
                            feedbackIncorrect: "Incorrecto. e = 60 - (12*2 + 40) = 60 - 64 = -4.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Qué factor representa el 15% de variación inexplicada por el R² del riego en la producción de café de la cooperativa?",
                            options: [
                                "Un error matemático en la sumatoria.",
                                "Variables de confusión y factores ambientales no incluidos en el modelo simple (calidad del suelo, lluvia natural, plagas).",
                                "La ordenada al origen b.",
                                "El tamaño de la muestra n."
                            ],
                            correctAnswer: 1,
                            hint: "El R² mide la varianza explicada; el resto se debe a variables e influencias externas no modeladas.",
                            feedbackCorrect: "¡Excelente! El 15% restante se debe a factores ambientales e influencias externas no modeladas.",
                            feedbackIncorrect: "Incorrecto. Representa a las variables y factores no incluidos en el modelo lineal simple.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "En finanzas y agronegocios, la regresión simple proyecta ingresos y producciones basadas en inversiones. R² valida su solidez y el soporte de X asegura predicciones viables.",
                    videoPlaceholderText: "Video de Regresión: Caso de estudio completo de proyección de ventas agrícolas en una cooperativa en Guatemala."
                }
            ]
        }
    ]
};

const targetPath = ACADEMIC_FILE;

function run() {
    console.log("Leyendo academic_content.js...");
    let content = fs.readFileSync(targetPath, "utf8");

    // Buscamos quirúrgicamente el bloque de regresion-lineal
    const startIdx = content.indexOf('    "regresion-lineal": `');
    const endIdx = content.indexOf('`,\n\n    "algebra-lineal":');

    if (startIdx === -1 || endIdx === -1) {
        console.error("No se pudo encontrar el bloque regresion-lineal original.");
        process.exit(1);
    }

    console.log("Encontradas posiciones en disco para inyección quirúrgica de Regresión Lineal.");

    const richJS = '    "regresion-lineal": ' + JSON.stringify(regresionLinealData, null, 4);

    let newContent = content.slice(0, startIdx) + 
                     richJS + 
                     content.slice(endIdx + 1);

    console.log("Escribiendo cambios en academic_content.js...");
    fs.writeFileSync(targetPath, newContent, "utf8");
    console.log("¡Curso de Regresión Lineal inyectado con éxito!");
}

try {
    run();
} catch (e) {
    console.error("Error crítico durante la inyección:", e);
    process.exit(1);
}
