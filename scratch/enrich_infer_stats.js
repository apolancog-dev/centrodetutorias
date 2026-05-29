const fs = require("fs");
const path = require("path");

const ACADEMIC_FILE = path.join(__dirname, "..", "academic_content.js");

const inferenciaEstadisticaData = {
    isRichCourse: true,
    title: "Inferencia Estadística Básica",
    units: [
        {
            title: "Unidad 1: Distribuciones Muestrales y el Teorema del Límite Central",
            lessons: [
                {
                    id: "muestras-distribucion-medias",
                    title: "Lección 1.1: Muestras y Distribución de Medias",
                    introduction: "Diferencia parámetros y estadísticos comprendiendo la variabilidad aleatoria de los promedios muestrales.",
                    explanationHtml: '<p>En la práctica científica, casi nunca medimos a la población entera debido a costos y tiempo. En su lugar, recolectamos una **muestra** de tamaño $n$.</p><p class="mt-2">Es vital distinguir los valores numéricos calculados en ambos niveles:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Parámetro:</strong> Es una medida numérica que describe una característica de la <strong>población entera</strong>. Se representa con letras griegas (ej. la media poblacional $\\mu$, desviación estándar $\\sigma$). Es un valor fijo pero generalmente desconocido.</li><li><strong>Estadístico:</strong> Es una medida numérica calculada a partir de los datos de una <strong>muestra</strong>. Se representa con letras latinas (ej. media muestral $\\bar{x}$, desviación muestral $s$). Es una variable aleatoria porque varía de una muestra a otra.</li></ul><p class="mt-2 text-slate-700">Si tomáramos infinitas muestras aleatorias independientes de tamaño $n$ de una población y calculáramos el promedio $\\bar{x}$ de cada una, esos promedios formarían su propia distribución de probabilidad, conocida como la <strong>Distribución Muestral de Medias</strong>.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Población vs Muestra</p><p class="text-xs font-mono font-bold text-primary">Media: &mu; (Pob) vs x̄ (Mues) &nbsp;|&nbsp; Desviación: &sigma; (Pob) vs s (Mues)</p><p class="text-xs text-slate-550">La diferencia numérica entre el estadístico muestral x̄ y el parámetro &mu; se llama error de muestreo.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">POBLACIÓN Y MUESTRAS</text><ellipse cx="70" cy="65" rx="40" ry="30" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" /><text x="70" y="52" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">Población &mu;</text><circle cx="50" cy="72" r="8" fill="#ecfdf5" stroke="#10b981" /><circle cx="85" cy="75" r="8" fill="#ecfdf5" stroke="#10b981" /><circle cx="70" cy="78" r="8" fill="#ecfdf5" stroke="#10b981" /><line x1="110" y1="65" x2="200" y2="65" stroke="#475569" stroke-width="1.2" stroke-dasharray="3,3" marker-end="url(#arrow)" /><rect x="200" y="45" width="80" height="40" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5" rx="6" /><text x="240" y="58" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">Muestras</text><text x="240" y="73" font-size="8" fill="#047857" text-anchor="middle">x̄_1, x̄_2, x̄_3...</text></svg>',
                    svgDescription: "Esquema conceptual de muestreo. De una gran población con media fija mu se extraen múltiples muestras aleatorias representativas, cada una con su propia media muestral x̄.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Se sabe que la media de la estatura de todos los jóvenes en Guatemala es $\\mu = 1.65$ m. Un equipo de CEDETU toma 50 muestras independientes de tamaño $n = 40$ alumnos cada una. ¿Alrededor de qué valor se centrarán los promedios de estas muestras?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Identificar el parámetro de interés.</strong> El promedio poblacional es $\\mu = 1.65$ m.</li><li><strong>Paso 2: Aplicar la propiedad de las medias muestrales.</strong> Por definición y simetría, la media de la distribución muestral de medias (denotada como $\\mu_{\\bar{x}}$) es exactamente igual al promedio real de la población entera: <br>$$\\mu_{\\bar{x}} = \\mu$$</li><li><strong>Paso 3: Concluir en el contexto.</strong> Al ser $\\mu_{\\bar{x}} = 1.65$ m, los promedios de las 50 muestras individuales se centrarán y distribuirán exactamente alrededor de 1.65 metros.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> Los promedios muestrales se agruparán alrededor del parámetro poblacional <strong>1.65m</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Creer que x̄ es igual a &mu; en cada muestra:</strong> Esperar que una sola muestra pequeña nos entregue de forma exacta el valor de la población, olvidando que existe variabilidad muestral (azar) y error de muestreo.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cómo se denomina formalmente a la diferencia numérica entre el estadístico obtenido en una muestra y el verdadero parámetro de la población?",
                            options: [
                                "Desviación estándar de error.",
                                "Error de muestreo.",
                                "Intervalo de sesgo.",
                                "Diferencia de varianza."
                            ],
                            correctAnswer: 1,
                            hint: "Es el error inevitable debido a que medimos solo una parte de la población en lugar del total.",
                            feedbackCorrect: "¡Excelente! La diferencia se denomina error de muestreo y se debe al azar del proceso de selección.",
                            feedbackIncorrect: "Incorrecto. Se denomina 'Error de muestreo'.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si el promedio de edad de todos los habitantes de un municipio (población) es exactamente 28 años, ¿cuál es el valor esperado de la media muestral x̄? (Ingresa solo el número entero):",
                            correctAnswer: "28",
                            hint: "Por propiedad de estimación insesgada, E[x̄] es idéntico a la media de la población μ.",
                            feedbackCorrect: "¡Perfecto! E[x̄] = μ = 28 años.",
                            feedbackIncorrect: "Incorrecto. El valor esperado de la media muestral es igual al promedio poblacional μ = 28.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué le ocurre a la dispersión o variabilidad de los promedios muestrales a medida que el tamaño n de cada muestra aumenta?",
                            options: [
                                "Aumenta proporcionalmente.",
                                "Disminuye, haciendo que los promedios muestrales se concentren más cerca de la media poblacional real.",
                                "Se mantiene estrictamente igual.",
                                "Se reduce a cero instantáneamente."
                            ],
                            correctAnswer: 1,
                            hint: "A mayor muestra, más información representativa recopilas y menos dispersión tienen tus promedios.",
                            feedbackCorrect: "¡Excelente! Al aumentar el tamaño de muestra, los promedios tienen menor dispersión y mayor precisión.",
                            feedbackIncorrect: "Incorrecto. La dispersión disminuye notablemente al aumentar el tamaño n.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Es la media muestral x̄ un estimador insesgado de la media poblacional μ? Escribe 'si' o 'no':",
                            correctAnswer: "si",
                            hint: "Un estimador es insesgado si su valor esperado (promedio teórico) es idéntico al parámetro real.",
                            feedbackCorrect: "¡Excelente! Sí, porque su valor esperado E[x̄] es exactamente igual a μ.",
                            feedbackIncorrect: "Incorrecto. Sí, la media de la muestra es un estimador insesgado.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cómo se denota matemáticamente de forma estándar la media de la distribución muestral de medias?",
                            options: [
                                "s_x",
                                "μ_x̄",
                                "σ^2",
                                "x̄_p"
                            ],
                            correctAnswer: 1,
                            hint: "Lleva la letra mu de promedio poblacional con el subíndice de la media muestral.",
                            feedbackCorrect: "¡Perfecto! Se denota como μ_x̄.",
                            feedbackIncorrect: "Incorrecto. Se representa mediante el símbolo μ_x̄.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La distribución muestral de medias es la distribución de los promedios $\\bar{x}$ de infinitas muestras de tamaño $n$. Su media es idéntica a la poblacional ($\\mu_{\\bar{x}} = \\mu$).",
                    videoPlaceholderText: "Video de Estadística: Qué es la distribución muestral de medias explicada intuitivamente."
                },
                {
                    id: "teorema-limite-central",
                    title: "Lección 1.2: El Teorema del Límite Central (TLC)",
                    introduction: "Comprende el Teorema del Límite Central y aprende a calcular el error estándar de la media.",
                    explanationHtml: '<p>El <strong>Teorema del Límite Central (TLC)</strong> es el pilar de la inferencia estadística. Establece que, sin importar la forma de la distribución original de la población (puede ser sesgada, uniforme o totalmente extraña), la **distribución muestral de medias** se aproximará a una **distribución normal** a medida que el tamaño de la muestra ($n$) se vuelva grande.</p><p class="mt-2">Las condiciones y parámetros que establece el TLC son:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Tamaño de Muestra ($n \\ge 30$):</strong> Si la población original no es normal, se considera que una muestra de $n \\ge 30$ observaciones es suficiente para que se cumpla la aproximación normal de forma sólida.</li><li><strong>Media de Medias:</strong> La media de la distribución de medias es igual a la poblacional: <br>$$\\mu_{\\bar{x}} = \\mu$$</li><li><strong>Error Estándar de la Media ($\\sigma_{\\bar{x}}$):</strong> Es la desviación estándar de la distribución de promedios. Mide la variabilidad promedio de las estimaciones y disminuye al aumentar la muestra: <br>$$\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Error Estándar de la Media</p><p class="text-xs font-mono font-bold text-primary">&sigma;_x̄ = &sigma; / &radic;n</p><p class="text-xs text-slate-550">Herramienta: Si no conoces la desviación poblacional &sigma;, puedes estimarla usando la muestral s.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">TEOREMA DEL LÍMITE CENTRAL</text><path d="M 30 55 L 90 55 L 90 95 L 30 95 Z" fill="#eff6ff" stroke="#3b82f6" stroke-width="1" /><text x="60" y="50" font-size="7.5" fill="#1e40af" font-weight="bold" text-anchor="middle">Población Sesgada</text><path d="M 170 95 C 200 95, 205 40, 225 40 C 245 40, 250 95, 280 95" fill="none" stroke="#10b981" stroke-width="1.8" /><text x="225" y="32" font-size="7.5" fill="#065f46" font-weight="bold" text-anchor="middle">Medias Muestrales Normales</text><path d="M 105 70 L 155 70" stroke="#475569" stroke-width="1.2" stroke-dasharray="2,2" marker-end="url(#arrow)" /><text x="130" y="82" font-size="7" fill="#475569" font-weight="bold" text-anchor="middle">n &ge; 30</text></svg>',
                    svgDescription: "Esquema del TLC. Una población original sesgada y no normal (izquierda) se convierte en una distribución de medias muestrales perfectamente normal y acampanada (derecha) para muestras n >= 30.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un productor de café en Antigua Guatemala empaque bolsas cuya desviación estándar poblacional de peso es $\\sigma = 24\\text{ gramos}$. Si un inspector toma una muestra aleatoria de $n = 36\\text{ bolsas}$, calcula analíticamente el error estándar de la media.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Identificar las variables.</strong> <br>$$\\sigma = 24\\text{ g}$$ <br>$$n = 36\\text{ bolsas}$$</li><li><strong>Paso 2: Aplicar la fórmula del error estándar ($\\sigma_{\\bar{x}}$):</strong> <br>$$\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}$$</li><li><strong>Paso 3: Realizar el cálculo aritmético:</strong> <br>$$\\sigma_{\\bar{x}} = \\frac{24}{\\sqrt{36}} = \\frac{24}{6} = 4\\text{ gramos}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> El error estándar de la media es de <strong>4 gramos</strong>. Esto mide la dispersión promedio esperada de los promedios de las muestras.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Dividir entre n directamente:</strong> Calcular el error estándar como $\\sigma / n$ en lugar de $\\sigma / \\sqrt{n}$. La reducción de la variabilidad muestral es proporcional a la raíz cuadrada de la muestra, no a la muestra directa.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cuál es el tamaño mínimo de muestra (n) sugerido por la teoría estadística para poder aplicar con seguridad el TLC si la población original no es normal?",
                            options: [
                                "n >= 10",
                                "n >= 30",
                                "n >= 100",
                                "n >= 5"
                            ],
                            correctAnswer: 1,
                            hint: "Es el valor estándar que garantiza una convergencia de la distribución muestral a la normalidad.",
                            feedbackCorrect: "¡Excelente! El umbral estándar sugerido es de n >= 30 observaciones.",
                            feedbackIncorrect: "Incorrecto. Se sugiere un tamaño mínimo de muestra de n >= 30.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si la desviación estándar poblacional es σ = 10 gramos y tomamos una muestra de n = 100 elementos, ¿cuál es el valor decimal del error estándar? (Ingresa el número con punto decimal):",
                            correctAnswer: "1",
                            hint: "Aplica la fórmula: σ_x̄ = σ / √n. Reemplaza σ = 10 y n = 100.",
                            feedbackCorrect: "¡Perfecto! Error estándar = 10 / √100 = 10 / 10 = 1.00.",
                            feedbackIncorrect: "Incorrecto. El error estándar es 10 / √100 = 1.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué le ocurre al error estándar de la media si cuadruplicamos el tamaño n de la muestra (ej. de 25 a 100)?",
                            options: [
                                "Se cuadruplica también.",
                                "Se duplica.",
                                "Se reduce exactamente a la mitad.",
                                "Se reduce a la cuarta parte."
                            ],
                            correctAnswer: 2,
                            hint: "La muestra está dentro de una raíz cuadrada en el denominador: 1 / √4.",
                            feedbackCorrect: "¡Excelente! Al cuadruplicar n, su raíz √4 = 2 en el denominador reduce el error estándar a la mitad.",
                            feedbackIncorrect: "Incorrecto. Se reduce a la mitad debido al efecto de la raíz cuadrada.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Si la población de origen ya es perfectamente normal, ¿es necesario tener n >= 30 para que la distribución muestral de medias sea normal? Escribe 'si' o 'no':",
                            correctAnswer: "no",
                            hint: "Si los datos individuales ya son normales, su promedio será perfectamente normal sin importar el tamaño de muestra.",
                            feedbackCorrect: "¡Perfecto! Si la población es normal, la distribución muestral es normal para cualquier tamaño n.",
                            feedbackIncorrect: "Incorrecto. No, si la población es normal, la distribución de medias es normal para cualquier n.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula el error estándar de la media si la desviación poblacional es σ = 15 y la muestra es n = 25. (Ingresa solo el número entero):",
                            correctAnswer: "3",
                            hint: "Aplica σ_x̄ = 15 / √25.",
                            feedbackCorrect: "¡Excelente! Error estándar = 15 / 5 = 3.",
                            feedbackIncorrect: "Incorrecto. σ_x̄ = 15 / 5 = 3.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "El TLC garantiza que la distribución muestral de medias es normal para $n \\ge 30$, con media $\\mu$ y error estándar de la media $\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}$.",
                    videoPlaceholderText: "Video de Inferencia: Demostración visual e intuitiva del Teorema del Límite Central."
                },
                {
                    id: "aplicaciones-distribucion-muestral",
                    title: "Lección 1.3: Aplicaciones de la Distribución Muestral",
                    introduction: "Calcula la probabilidad de obtener medias muestrales en rangos específicos aplicando la tipificación normal modificada.",
                    explanationHtml: '<p>Una de las mayores aplicaciones del TLC y de las distribuciones muestrales es calcular la probabilidad de que una muestra aleatoria de tamaño $n$ arroje una media muestral ($\\bar{x}$) que se encuentre en un rango de interés.</p><p class="mt-2">Para lograr esto, adaptamos la fórmula de tipificación normal. En lugar de usar la desviación estándar individual $\\sigma$, **debemos utilizar el error estándar de la media en el denominador**:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$Z = \\frac{\\bar{x} - \\mu}{\\sigma_{\\bar{x}}} = \\frac{\\bar{x} - \\mu}{\\sigma / \\sqrt{n}}$$</p><p class="mt-2 text-slate-700">El puntaje $Z$ resultante se busca en la tabla normal estándar Z común para hallar la probabilidad acumulada izquierda o derecha requerida.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuación de Tipificación de Medias</p><p class="text-xs font-mono font-bold text-primary">Z = (x̄ - &mu;) / (&sigma; / &radic;n)</p><p class="text-xs text-slate-550">Herramienta: Úsala siempre que te pregunten por la probabilidad del promedio de un grupo.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">PROBABILIDAD DE LA MEDIA</text><line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" stroke-width="1.5" /><path d="M 30 100 C 90 100, 100 30, 150 30 C 200 30, 210 100, 270 100" fill="none" stroke="#3b82f6" stroke-width="1.5" /><path d="M 210 73.5 C 210 73.5, 220 95, 230 100 L 270 100 C 270 100, 240 100, 210 100 Z" fill="#fee2e2" stroke="none" /><line x1="210" y1="73.5" x2="210" y2="100" stroke="#ef4444" stroke-width="1.5" /><circle cx="210" cy="73.5" r="3" fill="#ef4444" /><text x="210" y="112" font-size="8.5" font-weight="bold" fill="#ef4444" text-anchor="middle">Z = 2.00</text><text x="245" y="80" font-size="7.5" fill="#b91c1c" font-weight="bold" text-anchor="middle">Área = 2.28%</text></svg>',
                    svgDescription: "Curva muestral de promedios. Ilustra el cálculo de la cola superior para un puntaje Z = 2.00, que corresponde a una probabilidad pequeña de 2.28%.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Las calificaciones de una prueba nacional tienen una media poblacional de $\\mu = 100$ puntos y una desviación estándar de $\\sigma = 15$ puntos. Si seleccionamos una muestra aleatoria de $n = 25$ estudiantes, calcula la probabilidad de que la media de la muestra sea mayor a 106 puntos. (Dato de tabla: $P(Z \\le 2.00) = 0.9772$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Calcular el error estándar ($\\sigma_{\\bar{x}}$):</strong> <br>$$\\sigma_{\\bar{x}} = \\frac{15}{\\sqrt{25}} = \\frac{15}{5} = 3\\text{ puntos}$$</li><li><strong>Paso 2: Tipificar la media de la muestra ($\\bar{x} = 106$):</strong> <br>$$Z = \\frac{\\bar{x} - \\mu}{\\sigma_{\\bar{x}}} = \\frac{106 - 100}{3} = \\frac{6}{3} = 2.00$$</li><li><strong>Paso 3: Calcular la probabilidad "mayor a 106" (cola a la derecha):</strong> <br>$$P(\\bar{x} > 106) = P(Z > 2.00) = 1 - P(Z \\le 2.00) = 1 - 0.9772 = 0.0228$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La probabilidad de que la media muestral sea mayor a 106 puntos es de apenas <strong>0.0228</strong> o <strong>2.28%</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Usar la desviación estándar individual:</strong> Calcular $Z$ usando la desviación estándar $\\sigma = 15$ directamente en el denominador en lugar del error estándar $\\sigma_{\\bar{x}} = 3$. Esto daría un $Z = 0.40$ incorrecto, duplicando falsamente la probabilidad real.</li></ul>',
                    exercises: [
                        {
                            question: "Si μ = 50, σ = 8 y n = 16, calcula el puntaje Z para una media muestral x̄ = 52. (Ingresa el número con punto decimal):",
                            correctAnswer: "1",
                            hint: "Error estándar = 8 / √16 = 2. Z = (52 - 50) / 2.",
                            feedbackCorrect: "¡Excelente! Z = 2 / 2 = 1.00.",
                            feedbackIncorrect: "Incorrecto. Z = (52 - 50) / (8 / √16) = 1.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué probabilidad hay de obtener un promedio muestral menor o igual a la media poblacional real en una distribución muestral perfectamente simétrica? (Ingresa el número decimal con punto):",
                            correctAnswer: "0.5",
                            hint: "La media muestral coincide con el centro de simetría de la campana normal.",
                            feedbackCorrect: "¡Perfecto! Al ser simétrica la campana, la probabilidad es exactamente 0.5000.",
                            feedbackIncorrect: "Incorrecto. Por simetría de la distribución, la probabilidad es 0.5000.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si n = 36 y σ = 12, calcula el puntaje Z para x̄ = 46 si la media poblacional es μ = 50. (Ingresa el signo negativo si corresponde):",
                            correctAnswer: "-2",
                            hint: "Error estándar = 12 / √36 = 2. Z = (46 - 50) / 2.",
                            feedbackCorrect: "¡Excelente! Z = -4 / 2 = -2.00.",
                            feedbackIncorrect: "Incorrecto. Z = (46 - 50) / 2 = -2.00.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Por qué es mucho más difícil encontrar una muestra de 100 estudiantes con un promedio de estatura extremo que encontrar a un solo estudiante con ese mismo valor extremo?",
                            options: [
                                "Porque las muestras grandes son más costosas de medir.",
                                "Porque en grupos grandes las estaturas altas y bajas se promedian y cancelan entre sí, reduciendo el error estándar.",
                                "Porque los estudiantes altos evitan ser medidos en las muestras.",
                                "Porque la desviación estándar de la población aumenta."
                            ],
                            correctAnswer: 1,
                            hint: "Piensa en el efecto del tamaño de la muestra n sobre el error estándar σ_x̄.",
                            feedbackCorrect: "¡Perfecto! En grupos grandes la variabilidad se compensa y el error estándar es mucho más estrecho.",
                            feedbackIncorrect: "Incorrecto. Las variaciones individuales se cancelan al promediarse en grupos grandes.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Si el puntaje Z calculado para una media muestral es exactamente 0, ¿cuánto vale dicha media muestral?",
                            options: [
                                "Es igual a cero.",
                                "Es exactamente igual al promedio poblacional μ.",
                                "Es igual a la desviación estándar de la muestra.",
                                "Es un dato atípico imposible."
                            ],
                            correctAnswer: 1,
                            hint: "Sustituye Z = 0 en Z = (x̄ - μ) / σ_x̄ y despeja x̄.",
                            feedbackCorrect: "¡Excelente! Si Z = 0, entonces x̄ es idéntico a la media poblacional μ.",
                            feedbackIncorrect: "Incorrecto. Indica que la media de la muestra es igual a la poblacional μ.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Para calcular probabilidades sobre promedios grupales, tipificamos la media mediante la ecuación $Z = \\frac{\\bar{x} - \\mu}{\\sigma/\\sqrt{n}}$ y buscamos el área en la tabla Z.",
                    videoPlaceholderText: "Video de Inferencia: Resolución de problemas prácticos de probabilidad de medias muestrales."
                }
            ]
        },
        {
            title: "Unidad 2: Intervalos de Confianza",
            lessons: [
                {
                    id: "estimacion-puntual-margen-error",
                    title: "Lección 2.1: Estimación Puntual y Margen de Error",
                    introduction: "Comprende qué es un estimador puntual y aprende a calcular el margen de error de una estimación.",
                    explanationHtml: '<p>En estadística inferencial, buscamos estimar parámetros poblacionales desconocidos (como la media real $\\mu$) a partir de muestras. Disponemos de dos metodologías:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Estimación Puntual:</strong> Consiste en proponer un **único valor numérico** (un punto) como la mejor aproximación al parámetro. El estimador puntual ideal de la media poblacional $\\mu$ es la **media muestral $\\bar{x}$**.</li><li><strong>Estimación por Intervalo:</strong> Consiste en proponer un **rango de valores** que tiene una alta probabilidad de contener el parámetro real. Se construye sumando y restando un **Margen de Error ($E$)** a la estimación puntual: <br>$$\\text{Intervalo} = \\bar{x} \\pm E$$</li></ul><p class="mt-2 text-slate-700">El **Margen de Error ($E$)** depende del nivel de confianza requerido ($Z$ crítico) y de la variabilidad del estimador:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$E = Z_{\\alpha/2} \\cdot \\left( \\frac{\\sigma}{\\sqrt{n}} \\right)$$</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Margen de Error de la Media</p><p class="text-xs font-mono font-bold text-primary">E = Z_crit * (&sigma; / &radic;n) &nbsp;|&nbsp; I.C. = [x̄ - E, x̄ + E]</p><p class="text-xs text-slate-550">Herramienta: Al sumar y restar E a la media de la muestra, creas los límites de confianza.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">INTERVALO Y MARGEN DE ERROR</text><line x1="30" y1="80" x2="270" y2="80" stroke="#cbd5e1" stroke-width="1.5" /><circle cx="150" cy="80" r="5" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5" /><text x="150" y="70" font-size="8.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Estimador x̄</text><line x1="70" y1="92" x2="230" y2="92" stroke="#10b981" stroke-width="2" /><line x1="70" y1="87" x2="70" y2="97" stroke="#10b981" stroke-width="2" /><line x1="230" y1="87" x2="230" y2="97" stroke="#10b981" stroke-width="2" /><text x="110" y="105" font-size="7.5" font-weight="bold" fill="#047857" text-anchor="middle">- E</text><text x="190" y="105" font-size="7.5" font-weight="bold" fill="#047857" text-anchor="middle">+ E</text><text x="150" y="114" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">Intervalo de Confianza</text></svg>',
                    svgDescription: "Visualización gráfica de un intervalo de confianza. La media muestral (estimación puntual) se sitúa en el centro, y los límites del intervalo se extienden a los lados sumando y restando el margen de error E.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un analista político realiza encuestas en Xela. En una muestra de 100 personas, encuentra que la media muestral de edad es $\\bar{x} = 35\\text{ años}$ y calcula analíticamente un margen de error de $E = 2\\text{ años}$. Construye el intervalo de confianza e interpreta la estimación.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Identificar la estimación puntual y margen de error.</strong> <br>$$\\bar{x} = 35\\text{ años}$$ <br>$$E = 2\\text{ años}$$</li><li><strong>Paso 2: Calcular el límite inferior:</strong> <br>$$\\text{Límite inferior} = \\bar{x} - E = 35 - 2 = 33\\text{ años}$$</li><li><strong>Paso 3: Calcular el límite superior:</strong> <br>$$\\text{Límite superior} = \\bar{x} + E = 35 + 2 = 37\\text{ años}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El intervalo de confianza es <strong>[33, 37] años</strong>. Significa que estimamos con alto nivel de seguridad que el promedio de edad real de la población se encuentra entre 33 y 37 años.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir estimación puntual con por intervalo:</strong> Proponer un rango de valores cuando te preguntan la estimación puntual. La estimación puntual exige estrictamente **un único número entero o decimal** (ej. la media 35).</li></ul>',
                    exercises: [
                        {
                            question: "¿Cuál es el estadístico o estimador puntual ideal y más común para estimar la media poblacional μ?",
                            options: [
                                "La mediana muestral (Me).",
                                "La media aritmética de la muestra (x̄).",
                                "La desviación estándar muestral (s).",
                                "El rango intercuartílico de la muestra."
                            ],
                            correctAnswer: 1,
                            hint: "Es el promedio de los datos de la muestra, el cual es un estimador insesgado de la población.",
                            feedbackCorrect: "¡Excelente! La media muestral x̄ es el mejor estimador puntual de la media poblacional.",
                            feedbackIncorrect: "Incorrecto. Es la media muestral x̄.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si el intervalo de confianza obtenido para el peso medio es [45, 55] kg, ¿cuál fue la estimación puntual promedio x̄ de la muestra? (Ingresa solo el número entero):",
                            correctAnswer: "50",
                            hint: "La estimación puntual se encuentra exactamente en el punto medio o promedio del intervalo.",
                            feedbackCorrect: "¡Perfecto! x̄ = (45 + 55) / 2 = 50 kg.",
                            feedbackIncorrect: "Incorrecto. La media muestral es el punto medio del intervalo: (45+55)/2 = 50.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Con los mismos datos del ejercicio anterior (intervalo [45, 55]), ¿cuál fue el margen de error E utilizado? (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "El margen de error es la distancia desde el centro del intervalo (50) hasta cualquiera de los extremos.",
                            feedbackCorrect: "¡Excelente! El margen de error E es de 5 kg (50 ± 5).",
                            feedbackIncorrect: "Incorrecto. E = Límite superior - Media = 55 - 50 = 5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si mantenemos los datos de la muestra fijos, ¿qué ocurre con el margen de error si disminuimos el nivel de confianza (por ejemplo, del 95% al 90%)?",
                            options: [
                                "Aumenta.",
                                "Disminuye, haciendo el intervalo más estrecho y preciso, pero con mayor riesgo de error.",
                                "Se mantiene estrictamente igual.",
                                "Se duplica instantáneamente."
                            ],
                            correctAnswer: 1,
                            hint: "Un menor nivel de confianza requiere un Z crítico menor (1.645 < 1.96), lo que reduce el margen E.",
                            feedbackCorrect: "¡Perfecto! Al bajar la confianza, el Z crítico disminuye y el margen E se reduce.",
                            feedbackIncorrect: "Incorrecto. Disminuye, estrechando el intervalo al requerir un menor Z crítico.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Si aumenta la variabilidad poblacional (desviación σ más alta), ¿qué le ocurre al margen de error E?",
                            options: [
                                "Disminuye.",
                                "Aumenta, reduciendo la precisión de la estimación.",
                                "Se mantiene igual.",
                                "Se reduce a la mitad."
                            ],
                            correctAnswer: 1,
                            hint: "La desviación estándar σ está en el numerador del margen de error: E = Z * σ / √n.",
                            feedbackCorrect: "¡Excelente! A mayor variabilidad de los datos, mayor es el margen de error de la estimación.",
                            feedbackIncorrect: "Incorrecto. Aumenta, ya que los datos son más dispersos y la estimación es menos precisa.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La estimación puntual ofrece un único valor ($\\bar{x}$) para estimar $\\mu$. El intervalo de confianza añade un margen de error ($E = Z \\frac{\\sigma}{\\sqrt{n}}$) para dar un rango de estimación.",
                    videoPlaceholderText: "Video de Inferencia: Concepto de estimación puntual y margen de error explicados gráficamente."
                },
                {
                    id: "construccion-intervalos-media",
                    title: "Lección 2.2: Construcción de Intervalos de Confianza para la Media",
                    introduction: "Aprende a construir intervalos de confianza para la media poblacional con desviación conocida para niveles del 95% y 99%.",
                    explanationHtml: '<p>Para construir un intervalo de confianza de la media poblacional con desviación estándar conocida ($\\sigma$), utilizamos la distribución normal Z.</p><p class="mt-2">La fórmula de construcción es:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\text{I.C.} = \\bar{x} \\pm Z_{\\alpha/2} \\cdot \\left( \\frac{\\sigma}{\\sqrt{n}} \\right)$$</p><p class="mt-2 text-slate-700">El valor **Z crítico ($Z_{\\alpha/2}$)** depende del nivel de confianza elegido (área central):</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Nivel de Confianza del 95% ($\alpha = 0.05$):</strong> Se utiliza un valor crítico de **$Z = 1.96$**. Deja un 2.5% de probabilidad en cada cola extrema.</li><li><strong>Nivel de Confianza del 99% ($\alpha = 0.01$):</strong> Se utiliza un valor crítico de **$Z = 2.58$**. Deja un 0.5% en cada cola extrema.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Valores Críticos Z Frecuentes</p><p class="text-xs font-mono font-bold text-primary">Confianza 90%: Z = 1.645 &nbsp;|&nbsp; Confianza 95%: Z = 1.96 &nbsp;|&nbsp; Confianza 99%: Z = 2.58</p><p class="text-xs text-slate-550">Herramienta: A mayor nivel de confianza, el valor Z aumenta, ensanchando el intervalo.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">INTERVALOS DE SIMULACIÓN</text><line x1="50" y1="30" x2="50" y2="100" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" /><text x="42" y="65" font-size="8" fill="#b91c1c" font-weight="bold" text-anchor="end">Media Real &mu;</text><line x1="20" y1="45" x2="110" y2="45" stroke="#10b981" stroke-width="2" /><circle cx="65" cy="45" r="3.5" fill="#047857" /><line x1="30" y1="70" x2="120" y2="70" stroke="#10b981" stroke-width="2" /><circle cx="75" cy="70" r="3.5" fill="#047857" /><line x1="70" y1="95" x2="160" y2="95" stroke="#ef4444" stroke-width="2" /><circle cx="115" cy="95" r="3.5" fill="#b91c1c" /><text x="175" y="99" font-size="7.5" fill="#b91c1c" font-weight="bold">¡Falla, no contiene a &mu;!</text></svg>',
                    svgDescription: "Simulación de múltiples intervalos de confianza. En promedio, el 95% de ellos contienen la media real mu (verde), pero existe un 5% que fallan por el azar de la muestra (rojo).",
                    workedExampleHtml: '<p><strong>Problema:</strong> En Antigua Guatemala, una muestra aleatoria de $n = 64\\text{ hogares}$ consume en promedio $\\bar{x} = 12\\text{ litros}$ de leche a la semana. Si sabemos por estudios nacionales que la desviación poblacional es $\\sigma = 2\\text{ litros}$, construye un intervalo de confianza del 95% para estimar el consumo real promedio de toda la ciudad.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Identificar datos y Z crítico.</strong> <br>$$\\bar{x} = 12\\text{ l, } \\sigma = 2\\text{ l, } n = 64$$ <br>Para 95% de confianza, $$Z = 1.96$$</li><li><strong>Paso 2: Calcular el Margen de Error ($E$):</strong> <br>$$E = Z \\cdot \\left( \\frac{\\sigma}{\\sqrt{n}} \\right) = 1.96 \\cdot \\left( \\frac{2}{\\sqrt{64}} \\right) = 1.96 \\cdot \\left( \\frac{2}{8} \\right) = 1.96 \\cdot 0.25 = 0.49\\text{ litros}$$</li><li><strong>Paso 3: Calcular límites del I.C.:</strong> <br>$$\\text{Límite inferior} = 12 - 0.49 = 11.51\\text{ litros}$$ <br>$$\\text{Límite superior} = 12 + 0.49 = 12.49\\text{ litros}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> El intervalo de confianza del 95% es <strong>[11.51, 12.49] litros</strong> de leche a la semana.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Usar el Z crítico erróneo:</strong> Utilizar 1.96 para calcular un intervalo de confianza del 99% por distracción. Recuerda que el nivel de confianza y el Z crítico están enlazados; el 99% exige mayor amplitud y usa $Z = 2.58$.</li></ul>',
                    exercises: [
                        {
                            question: "Construye el intervalo de confianza del 99% (Z = 2.58) si x̄ = 100, σ = 10, y n = 100. (Ingresa el rango resultante en formato [min, max] con un espacio tras la coma y dos decimales):",
                            correctAnswer: "[97.42, 102.58]",
                            hint: "Error estándar = 10 / √100 = 1. Margen de error = 2.58 * 1 = 2.58. Calcula 100 ± 2.58.",
                            feedbackCorrect: "¡Excelente! I.C. del 99% = [97.42, 102.58].",
                            feedbackIncorrect: "Incorrecto. E = 2.58 * 1 = 2.58. El intervalo es [97.42, 102.58].",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es el valor numérico del Z crítico utilizado de forma estándar para construir un intervalo de confianza del 90%? (Ingresa el número decimal con punto):",
                            correctAnswer: "1.645",
                            hint: "Deja un 5% de área en cada una de las dos colas extremas de la campana normal estándar.",
                            feedbackCorrect: "¡Perfecto! El valor Z crítico para 90% es 1.645.",
                            feedbackIncorrect: "Incorrecto. Para el 90% se usa Z = 1.645.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si un intervalo del 95% con ciertos datos da [10.2, 14.8], ¿cómo esperas que sea el intervalo si subes la confianza al 99% con los mismos datos?",
                            options: [
                                "Será más estrecho.",
                                "Será más ancho, expandiendo el rango para asegurar la mayor confianza solicitada.",
                                "Se mantendrá estrictamente igual.",
                                "Se desplazará hacia la izquierda."
                            ],
                            correctAnswer: 1,
                            hint: "A mayor nivel de seguridad exigido, el rango de estimación debe expandirse.",
                            feedbackCorrect: "¡Excelente! Para asegurar una mayor confianza (99% vs 95%), el intervalo debe ensancharse.",
                            feedbackIncorrect: "Incorrecto. Será más ancho ya que requiere mayor seguridad, lo que expande el margen.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el margen de error E para un intervalo de confianza del 95% (Z = 1.96) si la desviación es σ = 6 y el tamaño muestral es n = 36. (Ingresa el número con punto decimal):",
                            correctAnswer: "1.96",
                            hint: "Error estándar = 6 / √36 = 1. Margen de error = 1.96 * 1.",
                            feedbackCorrect: "¡Excelente! Margen de error = 1.96 * (6 / 6) = 1.96.",
                            feedbackIncorrect: "Incorrecto. E = 1.96 * 1 = 1.96.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué ocurre con el ancho de un intervalo de confianza si multiplicamos el tamaño de la muestra n por 4, manteniendo la confianza y desviación constantes?",
                            options: [
                                "Se cuadruplica.",
                                "Se reduce exactamente a la mitad, mejorando notablemente la precisión.",
                                "Se reduce a la cuarta parte.",
                                "No se altera en absoluto."
                            ],
                            correctAnswer: 1,
                            hint: "La muestra n está dentro de una raíz cuadrada en el denominador de la fórmula de error.",
                            feedbackCorrect: "¡Perfecto! Al cuadruplicar n, la raíz de 4 es 2 en el denominador, lo que divide el margen E entre 2.",
                            feedbackIncorrect: "Incorrecto. Al cuadruplicar n, el margen y el ancho se reducen a la mitad.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Los intervalos de confianza para la media se calculan como $\\bar{x} \\pm Z \\frac{\\sigma}{\\sqrt{n}}$. Se usan valores críticos fijos: $Z = 1.96$ para el 95% y $Z = 2.58$ para el 99%.",
                    videoPlaceholderText: "Video de Inferencia: Cómo calcular e interpretar intervalos de confianza con Z paso a paso."
                },
                {
                    id: "interpretacion-intervalos-confianza",
                    title: "Lección 2.3: Interpretación de los Intervalos de Confianza",
                    introduction: "Aprende a interpretar de forma correcta y rigurosa el significado estadístico de un intervalo de confianza.",
                    explanationHtml: '<p>La interpretación de un intervalo de confianza es una de las tareas más críticas de la analítica. Cometer errores conceptuales al redactar reportes científicos es extremadamente común.</p><p class="mt-2"><strong>Lo que NO significa:</strong> Un intervalo de confianza del 95% de $[10, 20]$ **no** significa que "el 95% de los datos de la muestra están entre 10 y 20", ni tampoco que "hay un 95% de probabilidad de que la media real esté entre 10 y 20" una vez calculado el intervalo.</p><p class="mt-2"><strong>La Interpretación Correcta:</strong> El término "confianza" describe el **comportamiento a largo plazo del método de muestreo**. Significa que si repitiéramos este experimento de muestreo 100 veces y construyéramos 100 intervalos de la misma forma:</p><p class="mt-2 text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl">"Aproximadamente 95 de esos 100 intervalos contendrán el verdadero parámetro poblacional real ($\\mu$), mientras que 5 intervalos fallarán debido al azar del muestreo."</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Significancia y Confianza</p><p class="text-xs font-mono font-bold text-primary">Confianza: 1 - &alpha; &nbsp;|&nbsp; Significancia (riesgo de falla): &alpha;</p><p class="text-xs text-slate-550">Una vez calculado con datos reales, el parámetro &mu; está o no está (probabilidad es 0 o 1).</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">DISTRIBUCIÓN Y CONFIANZA</text><line x1="40" y1="90" x2="260" y2="90" stroke="#cbd5e1" stroke-width="1.5" /><path d="M 50 90 C 100 90, 110 35, 150 35 C 190 35, 200 90, 250 90" fill="none" stroke="#3b82f6" stroke-width="1.5" /><path d="M 80 90 C 100 90, 110 35, 150 35 C 190 35, 200 90, 220 90 Z" fill="#ecfdf5" stroke="none" /><line x1="80" y1="67" x2="80" y2="90" stroke="#10b981" stroke-width="1" /><line x1="220" y1="67" x2="220" y2="90" stroke="#10b981" stroke-width="1" /><text x="150" y="70" font-size="9.5" fill="#047857" font-weight="bold" text-anchor="middle">Confianza 95%</text><text x="60" y="85" font-size="7" fill="#b91c1c" font-weight="bold" text-anchor="middle">2.5%</text><text x="240" y="85" font-size="7" fill="#b91c1c" font-weight="bold" text-anchor="middle">2.5%</text></svg>',
                    svgDescription: "Curva de confianza normal. Muestra el 95% del área central de aceptación (verde) y las colas extremas de error alpha que suman el 5% restante.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Una encuesta nacional en Guatemala reporta el apoyo a una propuesta de ley con un intervalo de confianza del 95% de $[48\\%, 52\\%]$. Explica si podemos afirmar con seguridad del 95% que la propuesta tiene el apoyo de la mayoría absoluta de los ciudadanos.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Evaluar los límites del intervalo.</strong> El intervalo de confianza abarca desde el 48% (minoría) hasta el 52% (mayoría).</li><li><strong>Paso 2: Analizar el significado.</strong> El rango estimado contiene valores menores a la mayoría absoluta (menores al 50%). Por lo tanto, no podemos asegurar que el verdadero porcentaje de apoyo de toda la población sea mayor al 50%.</li><li><strong>Paso 3: Conclusión.</strong> Existe lo que en política se llama un "empate técnico" estadístico; el resultado no es concluyente con respecto al triunfo electoral absoluto de la propuesta.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> No, el intervalo no garantiza la mayoría absoluta porque contiene valores inferiores al 50%.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Afirmar probabilidades fijas sobre límites constantes:</strong> Decir "la probabilidad de que la media real esté entre 12 y 15 es 95%". En estadística matemática, una vez calculado el intervalo, los límites son constantes fijas y el parámetro real es otra constante fija; el parámetro o está adentro o está afuera (probabilidad es 1 o 0). Lo correcto es decir que tenemos un "95% de confianza en el método".</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué parámetro poblacional estamos tratando de estimar de forma exclusiva al construir el intervalo de confianza x̄ ± E?",
                            options: [
                                "La desviación estándar de la población (σ).",
                                "La media poblacional real (μ).",
                                "La varianza muestral (s^2).",
                                "La proporción de datos atípicos."
                            ],
                            correctAnswer: 1,
                            hint: "x̄ es el estimador de la media central del grupo de estudio.",
                            feedbackCorrect: "¡Excelente! Estamos estimando la media poblacional real μ.",
                            feedbackIncorrect: "Incorrecto. Se busca estimar la media poblacional real μ.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si reportas que el promedio de notas en Antigua está en el intervalo [72, 78] con 95% de confianza, ¿dónde estimas que se ubica el promedio real poblacional? (Escribe los límites como rango [min, max] con espacio):",
                            correctAnswer: "[72, 78]",
                            hint: "El intervalo de confianza contiene los límites de estimación calculados directamente.",
                            feedbackCorrect: "¡Perfecto! Estimamos que la media real está entre 72 y 78 puntos.",
                            feedbackIncorrect: "Incorrecto. Los límites son [72, 78] puntos.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si un analista afirma: 'El 95% de todos los alumnos individuales obtuvieron notas comprendidas entre 72 y 78 puntos', ¿es correcta esta interpretación? Escribe 'si' o 'no':",
                            correctAnswer: "no",
                            hint: "El intervalo de confianza estima el promedio de la población de estudiantes, no la nota individual de cada uno.",
                            feedbackCorrect: "¡Excelente! Es incorrecta, ya que el intervalo estima el parámetro promedio, no las observaciones individuales.",
                            feedbackIncorrect: "Incorrecto. No, describe dispersión individual, no estima la media poblacional.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Qué significa un nivel de significancia de α = 0.05 en el contexto de la estimación por intervalos de confianza?",
                            options: [
                                "Que el 5% de los datos son incorrectos.",
                                "Que existe un 5% de riesgo o probabilidad de que el intervalo construido no contenga la media poblacional real.",
                                "Que la media muestral tiene un sesgo de 5 unidades.",
                                "Que la varianza es igual al 5% de la media."
                            ],
                            correctAnswer: 1,
                            hint: "α representa la probabilidad de cometer un error al rechazar o estimar (complemento de la confianza).",
                            feedbackCorrect: "¡Perfecto! Representa el 5% de riesgo de que el intervalo no capture a la media real.",
                            feedbackIncorrect: "Incorrecto. Representa el riesgo del 5% de que el intervalo no contenga al parámetro real.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Es posible construir un intervalo de confianza del 100% de seguridad absoluta que tenga un ancho finito práctico? Escribe 'si' o 'no':",
                            correctAnswer: "no",
                            hint: "Para tener el 100% de certeza absoluta, el rango tendría que extenderse desde menos infinito a más infinito, lo cual es inútil.",
                            feedbackCorrect: "¡Excelente! No es posible en estadística práctica, ya que exigiría límites infinitos.",
                            feedbackIncorrect: "Incorrecto. No, un intervalo del 100% de certeza tendría límites infinitos.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Un intervalo de confianza describe la tasa de acierto a largo plazo del método. Una confianza del 95% significa que 95 de cada 100 intervalos construidos contendrán al parámetro $\\mu$.",
                    videoPlaceholderText: "Video de Inferencia: Errores comunes al interpretar intervalos de confianza en proyectos reales."
                }
            ]
        },
        {
            title: "Unidad 3: Pruebas de Hipótesis Introductorias",
            lessons: [
                {
                    id: "hipotesis-nula-alternativa",
                    title: "Lección 3.1: Hipótesis Nula y Alternativa",
                    introduction: "Aprende a formular de forma lógica la hipótesis nula ($H_0$) y alternativa ($H_1$) para pruebas de una y dos colas.",
                    explanationHtml: '<p>Una <strong>Prueba de Hipótesis</strong> es un procedimiento estadístico estructurado para decidir si la evidencia de una muestra respalda o contradice una afirmación científica o comercial sobre una población.</p><p class="mt-2">Toda prueba requiere formular de forma rigurosa dos hipótesis lógicas excluyentes:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Hipótesis Nula ($H_0$):</strong> Representa el **status quo** o la afirmación de que "no hay cambios, efectos o diferencias". Es la hipótesis que se asume verdadera al inicio y que buscamos someter a prueba. **Siempre debe contener el signo de igualdad** ($=$, $\\ge$, o $\\le$).</li><li><strong>Hipótesis Alternativa ($H_1$ o $H_a$):</strong> Representa la afirmación o sospecha que el investigador busca demostrar. Contiene signos de desigualdad o diferencia ($\\ne$, $<$, o $>$) y define la dirección de la prueba (dos colas o una cola).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Tipos de Pruebas y Signos</p><p class="text-xs font-mono font-bold text-primary">Dos colas: H_1: &mu; &ne; &mu;_0 &nbsp;|&nbsp; Cola derecha: H_1: &mu; &gt; &mu;_0 &nbsp;|&nbsp; Cola izquierda: H_1: &mu; &lt; &mu;_0</p><p class="text-xs text-slate-550">Regla de Oro: La igualdad siempre pertenece a la hipótesis nula H_0.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">DISEÑO DE HIPÓTESIS</text><rect x="20" y="40" width="115" height="55" fill="#eff6ff" stroke="#bfdbfe" rx="8" /><text x="77.5" y="58" font-size="9" fill="#1e40af" font-weight="extrabold" text-anchor="middle">HIPÓTESIS NULA H₀</text><text x="77.5" y="78" font-size="8.5" fill="#1e40af" font-weight="bold" text-anchor="middle">&mu; = 100</text><text x="77.5" y="88" font-size="7" fill="#475569" text-anchor="middle">Status quo (Igualdad)</text><rect x="165" y="40" width="115" height="55" fill="#ecfdf5" stroke="#a7f3d0" rx="8" /><text x="222.5" y="58" font-size="9" fill="#065f46" font-weight="extrabold" text-anchor="middle">HIPÓTESIS ALT H₁</text><text x="222.5" y="78" font-size="8.5" fill="#065f46" font-weight="bold" text-anchor="middle">&mu; &ne; 100 o &mu; &lt; 100</text><text x="222.5" y="88" font-size="7" fill="#475569" text-anchor="middle">Sospecha (Desigualdad)</text></svg>',
                    svgDescription: "Comparativa conceptual entre la hipótesis nula H0 (representa igualdad y no cambio) y la hipótesis alternativa H1 (representa sospecha y desigualdad).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un fabricante de focos en Escuintla afirma en su publicidad que la duración promedio de sus focos es de $1,000\\text{ horas}$. Un inspector comercial sospecha que la duración real promedio de los focos es menor a la anunciada. Plantea de forma teórica las hipótesis de la prueba.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Plantear la Hipótesis Nula ($H_0$).</strong> Representa la afirmación del fabricante (status quo con igualdad): <br>$$H_0: \\mu = 1,000\\text{ horas}$$</li><li><strong>Paso 2: Plantear la Hipótesis Alternativa ($H_1$).</strong> Refleja la sospecha del inspector de que la duración es menor: <br>$$H_1: \\mu < 1,000\\text{ horas}$$</li><li><strong>Paso 3: Definir la dirección.</strong> Al usar el signo menor que ($<$), se trata de una prueba de una cola hacia la izquierda.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> $H_0: \\mu = 1,000\\text{ h}$ versus $H_1: \\mu < 1,000\\text{ h}$ (una cola a la izquierda).</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Colocar desigualdades en H0:</strong> Escribir $H_0: \\mu < 100$ en un problema por prisa. Recuerda que la hipótesis nula $H_0$ **siempre** lleva el signo de igualdad ($=$, $\\ge$, o $\\le$). Las desigualdades estrictas ($<$, $>$, o $\\ne$) pertenecen exclusivamente a $H_1$.</li></ul>',
                    exercises: [
                        {
                            question: "Formula la hipótesis alternativa H₁ si la hipótesis nula es H₀: μ = 80 y el investigador sospecha que el promedio real es diferente de 80. (Escribe la hipótesis sin espacios en formato H1:mu!=80 o similar):",
                            correctAnswer: "H1:mu!=80",
                            hint: "La palabra 'diferente' indica una desigualdad estricta de dos colas (!=). Usa 'mu' para representar la media.",
                            feedbackCorrect: "¡Excelente! H1: mu != 80.",
                            feedbackIncorrect: "Incorrecto. Se formula como H1:mu!=80.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué tipo de prueba de hipótesis (de una o dos colas) se plantea de forma lógica si la hipótesis alternativa es H₁: μ > 50?",
                            options: [
                                "Prueba de una cola a la izquierda.",
                                "Prueba de una cola a la derecha.",
                                "Prueba de dos colas.",
                                "Prueba de cola central."
                            ],
                            correctAnswer: 1,
                            hint: "El signo mayor que (>) apunta hacia el extremo superior derecho de la recta numérica.",
                            feedbackCorrect: "¡Perfecto! Al ser mayor que, la zona de rechazo se ubica en la cola derecha.",
                            feedbackIncorrect: "Incorrecto. Al ser mayor que, corresponde a una prueba de una cola a la derecha.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Un tutor de CEDETU en Antigua afirma que su método intensivo aumenta la nota promedio de matemáticas por encima de 85 puntos. Formula la hipótesis alternativa H₁ correspondiente sin espacios (ej. H1:mu>85):",
                            correctAnswer: "H1:mu>85",
                            hint: "La frase 'por encima de' indica una desigualdad mayor que (>).",
                            feedbackCorrect: "¡Excelente! H1: mu > 85.",
                            feedbackIncorrect: "Incorrecto. Se formula como H1:mu>85.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Por qué asumimos científicamente que la hipótesis nula H₀ es verdadera al inicio de cualquier prueba de hipótesis?",
                            options: [
                                "Porque los fabricantes nunca mienten.",
                                "Por el principio de presunción de inocencia científica; se requiere evidencia estadística muy sólida para rechazar el estatus quo.",
                                "Porque la hipótesis alternativa es siempre falsa.",
                                "Porque simplifica las ecuaciones de varianza."
                            ],
                            correctAnswer: 1,
                            hint: "Al igual que en un juicio, no podemos declarar culpable a una afirmación sin pruebas contundentes.",
                            feedbackCorrect: "¡Excelente! Se asume verdadera para exigir rigor; solo la rechazamos si la evidencia es abrumadora.",
                            feedbackIncorrect: "Incorrecto. Se asume verdadera por presunción de inocencia del status quo.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si planteas una prueba de dos colas con H₁: μ ≠ 100, ¿dónde se localiza geométricamente la zona de rechazo en la campana de Gauss?",
                            options: [
                                "Únicamente en el extremo derecho.",
                                "Únicamente en el extremo izquierdo.",
                                "Dividida en partes iguales en ambos extremos (colas) de la distribución.",
                                "Justo en el centro de la campana."
                            ],
                            correctAnswer: 2,
                            hint: "El signo diferente (≠) indica diferencias tanto por exceso como por defecto.",
                            feedbackCorrect: "¡Perfecto! En una prueba de dos colas, la zona de rechazo se divide en los dos extremos.",
                            feedbackIncorrect: "Incorrecto. Se divide en partes iguales en ambos extremos o colas.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Una prueba de hipótesis evalúa la hipótesis nula $H_0$ (no cambio, lleva $=$) frente a la hipótesis alternativa $H_1$ (sospecha del investigador, lleva $\\ne$, $<$ o $>$).",
                    videoPlaceholderText: "Video de Inferencia: Cómo redactar las hipótesis nula y alternativa sin equivocarse."
                },
                {
                    id: "error-tipoi-tipoii-significancia",
                    title: "Lección 3.2: Error Tipo I, Error Tipo II y Nivel de Significancia",
                    introduction: "Define y diferencia analíticamente los errores de decisión Tipo I y Tipo II en pruebas estadísticas.",
                    explanationHtml: '<p>Dado que tomamos decisiones basadas en muestras aleatorias y no en certezas absolutas, siempre existe el riesgo de cometer un error en nuestra conclusión estadistica. Clasificamos estos errores en dos tipos:</p><table class="min-w-full my-3 border border-slate-200 text-xs font-sans bg-white rounded-lg"><thead><tr class="bg-slate-100"><th class="p-2 border font-bold">Decisión \\ Realidad</th><th class="p-2 border font-bold">H0 es Verdadera</th><th class="p-2 border font-bold">H0 es Falsa</th></tr></thead><tbody><tr><td class="p-2 border font-bold bg-slate-50">No Rechazar H0</td><td class="p-2 border text-emerald-700 bg-emerald-50/30">Decisión Correcta</td><td class="p-2 border text-amber-700 bg-amber-50/40 font-bold">Error Tipo II (&beta;)</td></tr><tr><td class="p-2 border font-bold bg-slate-50">Rechazar H0</td><td class="p-2 border text-red-700 bg-red-50/40 font-bold">Error Tipo I (&alpha;)</td><td class="p-2 border text-emerald-700 bg-emerald-50/30 font-bold">Decisión Correcta (Potencia)</td></tr></tbody></table><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Error Tipo I (Falso Positivo):</strong> Rechazar la hipótesis nula $H_0$ cuando en realidad es verdadera. La probabilidad máxima permitida se fija mediante el **nivel de significancia ($\\alpha$)** (generalmente $\\alpha = 0.05$).</li><li><strong>Error Tipo II (Falso Negativo):</strong> No rechazar la hipótesis nula $H_0$ cuando en realidad es falsa. Su probabilidad se denota como $\\beta$.</li><li><strong>Potencia de la Prueba ($1-\\beta$):</strong> Probabilidad de rechazar correctamente $H_0$ cuando es falsa.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Probabilidad de Errores</p><p class="text-xs font-mono font-bold text-primary">&alpha; = P(Error Tipo I) = P(Rechazar H_0 | H_0 es verdadera)</p><p class="text-xs font-mono font-bold text-primary">&beta; = P(Error Tipo II) = P(No Rechazar H_0 | H_0 es falsa)</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">RIESGOS DE ERROR</text><rect x="40" y="30" width="105" height="32" fill="#fef2f2" stroke="#fca5a5" stroke-width="1" rx="4" /><text x="92.5" y="42" font-size="7.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Error Tipo I (&alpha;)</text><text x="92.5" y="52" font-size="6.5" fill="#7f1d1d" text-anchor="middle">Rechazar H₀ siendo VERDADERA</text><rect x="155" y="30" width="105" height="32" fill="#fffbeb" stroke="#fcd34d" stroke-width="1" rx="4" /><text x="207.5" y="42" font-size="7.5" font-weight="bold" fill="#b45309" text-anchor="middle">Error Tipo II (&beta;)</text><text x="207.5" y="52" font-size="6.5" fill="#78350f" text-anchor="middle">No rechazar H₀ siendo FALSA</text><rect x="97" y="72" width="105" height="32" fill="#f0fdf4" stroke="#86efac" stroke-width="1" rx="4" /><text x="149.5" y="84" font-size="7.5" font-weight="bold" fill="#047857" text-anchor="middle">Potencia (1 - &beta;)</text><text x="149.5" y="94" font-size="6.5" fill="#064e3b" text-anchor="middle">Rechazar H₀ siendo FALSA</text></svg>',
                    svgDescription: "Esquema conceptual de los riesgos en pruebas de hipótesis. Ilustra el Error Tipo I (alfa), el Error Tipo II (beta) y la potencia de la prueba (1-beta) en celdas de colores estructurados.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un acusado penal es juzgado en Guatemala. Plantea las hipótesis lógicas e interpreta detalladamente qué representarían los Errores Tipo I y II en la toma de decisión del juez.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Formular la hipótesis nula ($H_0$).</strong> Por presunción de inocencia, se asume: <br>$$H_0: \\text{El acusado es inocente}$$</li><li><strong>Paso 2: Interpretar el Error Tipo I ($\\alpha$):</strong> Ocurre si el juez decide rechazar $H_0$ (culpable) siendo $H_0$ verdadera (inocente). <br>**Significado:** Enviar a la cárcel a una persona totalmente inocente (Falso Positivo de culpabilidad).</li><li><strong>Paso 3: Interpretar el Error Tipo II ($\\beta$):</strong> Ocurre si el juez decide no rechazar $H_0$ (libre) siendo $H_0$ falsa (culpable). <br>**Significado:** Declarar libre e inocente a un criminal culpable de delitos (Falso Negativo).</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> El Error Tipo I es encarcelar a un inocente; el Error Tipo II es dejar libre a un culpable.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Pensar que podemos reducir ambos a cero:</strong> Creer que podemos fijar $\\alpha = 0$ y $\\beta = 0$ a la vez. Al reducir el nivel de significancia $\\alpha$ (hacer más difícil rechazar $H_0$), aumenta automáticamente la probabilidad de cometer Error Tipo II ($\\beta$) para un tamaño de muestra fijo. La única forma de reducir ambos simultáneamente es aumentar el tamaño de muestra $n$.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cuál es el nivel de significancia (α) más comúnmente aceptado en la investigación científica y médica escolar? (Ingresa el número en decimal con punto):",
                            correctAnswer: "0.05",
                            hint: "Corresponde a permitir una probabilidad máxima del 5% de cometer un Error Tipo I.",
                            feedbackCorrect: "¡Excelente! El nivel de significancia más común es α = 0.05 o 5%.",
                            feedbackIncorrect: "Incorrecto. Se utiliza comúnmente α = 0.05.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si aumentamos considerablemente el tamaño de la muestra n en un experimento, ¿qué le ocurre a la probabilidad de cometer un Error Tipo II (β)?",
                            options: [
                                "Aumenta notablemente.",
                                "Disminuye, lo que aumenta la potencia y sensibilidad de la prueba.",
                                "Se mantiene estrictamente igual.",
                                "Se reduce a cero instantáneamente."
                            ],
                            correctAnswer: 1,
                            hint: "Una muestra mayor proporciona más información y potencia estadística para detectar diferencias reales.",
                            feedbackCorrect: "¡Perfecto! Al aumentar n, se incrementa la potencia de la prueba (1-β) y se reduce el Error Tipo II.",
                            feedbackIncorrect: "Incorrecto. Disminuye, lo que a su vez incrementa la potencia de la prueba.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Cómo se define formalmente la potencia de una prueba de hipótesis estadística?",
                            options: [
                                "La probabilidad de no cometer ningún tipo de error.",
                                "La probabilidad de rechazar correctamente la hipótesis nula cuando en realidad es falsa (1 - β).",
                                "La altura máxima de la campana de Gauss.",
                                "El producto de la media por la desviación estándar."
                            ],
                            correctAnswer: 1,
                            hint: "Mide la capacidad de la prueba para detectar un efecto o diferencia real.",
                            feedbackCorrect: "¡Excelente! La potencia de la prueba se define como 1 - β.",
                            feedbackIncorrect: "Incorrecto. Representa la probabilidad de rechazar correctamente H0 cuando es falsa.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "En un control de calidad en Antigua, rechazas un lote excelente de aguacates creyendo erróneamente que está en mal estado por un error de muestreo. ¿Qué tipo de error cometiste?",
                            options: [
                                "Error Tipo I (riesgo del productor).",
                                "Error Tipo II (riesgo del consumidor).",
                                "Error de interpolación.",
                                "Varianza nula."
                            ],
                            correctAnswer: 0,
                            hint: "Rechazaste la hipótesis nula (lote excelente) cuando en realidad era verdadera.",
                            feedbackCorrect: "¡Perfecto! Cometiste un Error Tipo I (Rechazar H0 siendo verdadera).",
                            feedbackIncorrect: "Incorrecto. Es un Error Tipo I, también llamado riesgo del productor.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Si el nivel de significancia de una prueba de hipótesis se fija en 1% (α = 0.01), ¿cuál es la probabilidad máxima permitida de cometer un Error Tipo I? (Ingresa solo el número sin el símbolo %):",
                            correctAnswer: "1",
                            hint: "El nivel de significancia α es, por definición, la probabilidad máxima permitida de cometer el Error Tipo I.",
                            feedbackCorrect: "¡Excelente! La probabilidad es exactamente del 1%.",
                            feedbackIncorrect: "Incorrecto. Equivale al 1% de forma directa.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "El Error Tipo I ($\\alpha$) ocurre al rechazar $H_0$ siendo verdadera; el Error Tipo II ($\\beta$) ocurre al no rechazar $H_0$ siendo falsa. Su control conjunto exige aumentar $n$.",
                    videoPlaceholderText: "Video de Inferencia: Comprendiendo el Error Tipo I y Error Tipo II con analogías divertidas."
                },
                {
                    id: "regla-decision-zona-rechazo-z",
                    title: "Lección 3.3: Regla de Decisión y Zona de Rechazo con Z",
                    introduction: "Resuelve pruebas de hipótesis completas para la media calculando el estadístico Z y decidiendo si se rechaza la hipótesis nula.",
                    explanationHtml: '<p>Para tomar la decisión final en una prueba de hipótesis formal sobre la media, seguimos una regla metodológica estructurada de 4 pasos:</p><ol class="list-decimal pl-5 space-y-2 my-3"><li><strong>1. Establecer Regla y Valor Crítico:</strong> Elegimos el nivel de significancia $\\alpha$ (ej. $\\alpha = 0.05$) y ubicamos el valor **$Z$ crítico** de la tabla que delimita la zona de rechazo (ej. $Z_{\\text{crítico}} = 1.645$ para una cola derecha, o $Z_{\\text{crítico}} = \\pm 1.96$ para dos colas).</li><li><strong>2. Calcular el Estadístico de Prueba ($Z_{\\text{cal}}$):</strong> Calculamos el valor tipificado de nuestra muestra utilizando el promedio observado $\\bar{x}$, la media supuesta $\\mu_0$ y el error estándar de la media: <br>$$Z_{\\text{cal}} = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}$$</li><li><strong>3. Comparar valores:</strong> Evaluamos si el $Z_{\\text{cal}}$ cae dentro de la zona de rechazo delimitada por el $Z_{\\text{crítico}}$.</li><li><strong>4. Conclusión contextualizada:</strong> Decidimos si **Rechazamos $H_0$** (hay evidencia de cambio) o **No Rechazamos $H_0$** (no hay evidencia suficiente).</li></ol>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Estadístico Z de Prueba</p><p class="text-xs font-mono font-bold text-primary">Z_cal = (x̄ - &mu;_0) / (&sigma; / &radic;n)</p><p class="text-xs text-slate-550">Regla del p-valor: Si el p-valor &le; &alpha;, se rechaza H_0. De lo contrario, no se rechaza.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">ZONA DE RECHAZO DE Z</text><line x1="20" y1="95" x2="280" y2="95" stroke="#94a3b8" stroke-width="1.5" /><path d="M 30 95 C 90 95, 100 35, 150 35 C 200 35, 210 95, 270 95" fill="none" stroke="#475569" stroke-width="1.5" /><path d="M 210 73.5 C 210 73.5, 220 95, 230 95 L 270 95 Z" fill="#fee2e2" stroke="none" /><line x1="210" y1="73.5" x2="210" y2="95" stroke="#ef4444" stroke-width="1.5" /><text x="210" y="105" font-size="7.5" font-weight="bold" fill="#ef4444" text-anchor="middle">Z_crit = 1.645</text><circle cx="230" cy="95" r="4.5" fill="#b91c1c" /><text x="230" y="114" font-size="8" font-weight="bold" fill="#b91c1c" text-anchor="middle">Z_cal = 2.00</text><text x="250" y="60" font-size="7.5" fill="#b91c1c" font-weight="bold" text-anchor="middle">RECHAZO</text></svg>',
                    svgDescription: "Gráfico de zona de rechazo para una prueba de cola derecha. Z crítico es 1.645 (línea roja). El Z calculado de la muestra es 2.00, situándose en la zona roja de rechazo de la hipótesis nula.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un fabricante de Sololá afirma que sus sacos de abono pesan $100\\text{ lb}$ en promedio, con una desviación poblacional de $\\sigma = 4\\text{ lb}$. Un inspector escéptico toma una muestra de $n = 64\\text{ sacos}$ y encuentra un promedio de $\\bar{x} = 99\\text{ lb}$. Realice una prueba de hipótesis con $\\alpha = 0.05$ para comprobar si los sacos vienen incompletos ($H_1: \\mu < 100\\text{ lb}$). (Dato crítico: $Z_{\\text{crítico}} = -1.645$ para cola izquierda).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Formular hipótesis.</strong> <br>$$H_0: \\mu = 100\\text{ lb}$$ <br>$$H_1: \\mu < 100\\text{ lb}\\text{ (Prueba de una cola a la izquierda)}$$</li><li><strong>Paso 2: Calcular el Z estadístico de la muestra ($Z_{\\text{cal}}$):</strong> <br>$$Z_{\\text{cal}} = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}} = \\frac{99 - 100}{4 / \\sqrt{64}} = \\frac{-1}{4 / 8} = \\frac{-1}{0.50} = -2.00$$</li><li><strong>Paso 3: Comparar con el valor crítico.</strong> <br>El valor obtenido $Z_{\\text{cal}} = -2.00$ es menor (más extremo a la izquierda) que el límite crítico $Z_{\\text{crítico}} = -1.645$. Cae en la zona de rechazo.</li><li><strong>Paso 4: Conclusión.</strong> Se rechaza la hipótesis nula $H_0$. Concluimos con un 95% de seguridad que los sacos vienen incompletos y el promedio real es menor a 100 lb.</li></ol>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Ignorar el signo en colas izquierdas:</strong> Comparar el valor absoluto de Z sin considerar el signo, concluyendo que $Z = -2.00$ no rechaza porque es "menor" que $-1.645$. En el eje negativo, ser menor significa estar más a la izquierda, es decir, más adentro de la zona de rechazo. ¡Ten cuidado con el análisis de signos!</li></ul>',
                    exercises: [
                        {
                            question: "Si Z calculado es 1.50 y el Z crítico para una cola a la derecha es 1.645, ¿cuál es tu decisión estadística?",
                            options: [
                                "Se rechaza la hipótesis nula H₀.",
                                "No se rechaza la hipótesis nula H₀. (1.50 < 1.645).",
                                "Se acepta la hipótesis alternativa H₁.",
                                "Se debe recalcular con una muestra mayor."
                            ],
                            correctAnswer: 1,
                            hint: "Compara si el valor calculado supera el umbral crítico de rechazo establecido.",
                            feedbackCorrect: "¡Excelente! Al ser Z_cal menor al crítico, no hay evidencia para rechazar la hipótesis nula.",
                            feedbackIncorrect: "Incorrecto. Como 1.50 < 1.645, no se rechaza la hipótesis nula H₀.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Cuál es el valor crítico Z necesario para una prueba de hipótesis bilateral (de dos colas) con un nivel de significancia α = 0.05? (Ingresa el número con formato +/- X.XX con punto):",
                            correctAnswer: "+/-1.96",
                            hint: "Divide α/2 = 0.0250 en cada extremo. El valor Z que deja 0.025 a la derecha es...",
                            feedbackCorrect: "¡Perfecto! Los valores críticos son +/-1.96.",
                            feedbackIncorrect: "Incorrecto. Los valores críticos bilaterales son +/-1.96.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si calculas un Z de -3.20 en una prueba de dos colas con α = 0.05 (Z crítico = +/-1.96), ¿cuál es tu decisión estadística?",
                            options: [
                                "No se rechaza H₀ porque el valor es muy pequeño.",
                                "Se rechaza la hipótesis nula H₀, ya que -3.20 cae en la zona extrema izquierda de rechazo.",
                                "Se debe cambiar a una prueba de una cola.",
                                "Se acepta H₀."
                            ],
                            correctAnswer: 1,
                            hint: "Compara si el valor absoluto de -3.20 supera el valor límite de 1.96.",
                            feedbackCorrect: "¡Excelente! Al ser -3.20 extremadamente menor a -1.96, se rechaza H0 con alta significancia.",
                            feedbackIncorrect: "Incorrecto. Se rechaza H0 ya que -3.20 está muy metido en la zona de rechazo.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "¿Cómo se define formalmente el 'p-valor' en una prueba de significancia estadística?",
                            options: [
                                "La probabilidad de cometer un Error Tipo I.",
                                "La probabilidad de obtener un resultado muestral tan extremo o más extremo que el observado, asumiendo que H₀ es verdadera.",
                                "El tamaño de la muestra dividido entre Z.",
                                "La probabilidad de que H₁ sea verdadera."
                            ],
                            correctAnswer: 1,
                            hint: "Mide qué tan raro es tu dato muestral bajo la suposición de que no hay cambios (H0 verdadera).",
                            feedbackCorrect: "¡Perfecto! Es la probabilidad de observar datos tan extremos como los obtenidos si H0 fuera cierta.",
                            feedbackIncorrect: "Incorrecto. Es la probabilidad de obtener datos tan o más extremos si H0 es cierta.",
                            difficulty: "intermedio",
                            type: "multiple"
                        },
                        {
                            question: "Si el p-valor de tu muestra es de 0.02 y tu nivel de significancia es α = 0.05, ¿cuál es tu decisión estadística?",
                            options: [
                                "No se rechaza H₀.",
                                "Se rechaza la hipótesis nula H₀. Regra de Oro: Si p-valor <= α, se rechaza H₀.",
                                "Se requiere repetir la recolección de datos.",
                                "Se acepta la hipótesis nula."
                            ],
                            correctAnswer: 1,
                            hint: "Aplica la regla de decisión basada en p-valor: compáralo con el nivel α.",
                            feedbackCorrect: "¡Excelente! Como p-valor (0.02) <= α (0.05), se rechaza la hipótesis nula.",
                            feedbackIncorrect: "Incorrecto. Como 0.02 <= 0.05, se rechaza la hipótesis nula.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Para resolver pruebas de hipótesis, comparamos el estadístico calculado $Z_{cal} = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}}$ con el $Z_{crit}$ de la tabla, o rechazamos $H_0$ si p-valor $\\le \\alpha$.",
                    videoPlaceholderText: "Video de Inferencia: Cómo resolver una prueba de hipótesis paso a paso de principio a fin."
                }
            ]
        }
    ]
};

const targetPath = ACADEMIC_FILE;

function run() {
    console.log("Leyendo academic_content.js...");
    let content = fs.readFileSync(targetPath, "utf8");

    // Buscamos quirúrgicamente el bloque de inferencia-estadistica
    const startIdx = content.indexOf('    "inferencia-estadistica": `');
    const endIdx = content.indexOf('`,\n\n    "regresion-lineal":');

    if (startIdx === -1 || endIdx === -1) {
        console.error("No se pudo encontrar el bloque inferencia-estadistica original.");
        process.exit(1);
    }

    console.log("Encontradas posiciones en disco para inyección quirúrgica de Inferencia Estadística.");

    const richJS = '    "inferencia-estadistica": ' + JSON.stringify(inferenciaEstadisticaData, null, 4);

    let newContent = content.slice(0, startIdx) + 
                     richJS + 
                     content.slice(endIdx + 1);

    console.log("Escribiendo cambios en academic_content.js...");
    fs.writeFileSync(targetPath, newContent, "utf8");
    console.log("¡Curso de Inferencia Estadística inyectado con éxito!");
}

try {
    run();
} catch (e) {
    console.error("Error crítico durante la inyección:", e);
    process.exit(1);
}
