const fs = require("fs");
const path = require("path");

const ACADEMIC_FILE = path.join(__dirname, "..", "academic_content.js");

const cursoEstadisticaAplicadaData = {
    isRichCourse: true,
    title: "Estadística Descriptiva",
    units: [
        {
            title: "Unidad 1: Organización y Presentación de Datos",
            lessons: [
                {
                    id: "tablas-frecuencia-datos-no-agrupados",
                    title: "Lección 1.1: Tablas de Frecuencia para Datos No Agrupados",
                    introduction: "Aprende a estructurar un conjunto de datos desordenados en una tabla de distribución de frecuencias absolutas, acumuladas, relativas y porcentuales.",
                    explanationHtml: '<p>En estadística, la organización de la información recolectada es el primer paso indispensable. Para datos cuantitativos no agrupados o cualitativos discretos, utilizamos una <strong>tabla de distribución de frecuencias</strong> que contiene las siguientes variables:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Frecuencia Absoluta ($f_i$):</strong> Es el número de veces que se repite un valor específico ($x_i$) en el conjunto de observaciones. La suma de todas las frecuencias absolutas es igual al tamaño de la muestra ($n$).</li><li><strong>Frecuencia Acumulada ($F_i$):</strong> Es la suma sucesiva acumulada de las frecuencias absolutas hasta el intervalo o valor actual.</li><li><strong>Frecuencia Relativa ($fr_i$):</strong> Es la proporción que representa la frecuencia absoluta con respecto al tamaño de la muestra. Se calcula como: <br>$$fr_i = \\frac{f_i}{n}$$ la suma de todas las frecuencias relativas debe ser exactamente igual a **1.00**.</li><li><strong>Frecuencia Porcentual ($f\\%_i$):</strong> Es la frecuencia relativa expresada en términos de porcentaje. Se calcula multiplicándola por 100: <br>$$f\\%_i = fr_i \\times 100\\%$$ la suma de todas las frecuencias porcentuales debe dar exactamente **100%**.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Ecuaciones de Frecuencia</p><p class="text-xs font-mono font-bold text-primary">n = &sum;f_i &nbsp;|&nbsp; fr_i = f_i / n &nbsp;|&nbsp; f%_i = fr_i &times; 100%</p><p class="text-xs text-slate-550">Herramienta: La suma de fr_i siempre es 1.00, y la suma de f%_i siempre es 100%.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">TABLA DE FRECUENCIAS</text><rect x="20" y="28" width="260" height="18" fill="#eff6ff" stroke="#bfdbfe" rx="3" /><text x="40" y="40" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">Valor x</text><text x="90" y="40" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">f (abs)</text><text x="140" y="40" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">F (acum)</text><text x="190" y="40" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">fr (rel)</text><text x="240" y="40" font-size="8" font-weight="bold" fill="#1e40af" text-anchor="middle">f% (porc)</text><line x1="20" y1="46" x2="280" y2="46" stroke="#e2e8f0" stroke-width="1" /><text x="40" y="58" font-size="8" fill="#334155" text-anchor="middle">0 hijos</text><text x="90" y="58" font-size="8" fill="#334155" text-anchor="middle">2</text><text x="140" y="58" font-size="8" fill="#334155" text-anchor="middle">2</text><text x="190" y="58" font-size="8" fill="#334155" text-anchor="middle">0.20</text><text x="240" y="58" font-size="8" fill="#334155" text-anchor="middle">20%</text><line x1="20" y1="64" x2="280" y2="64" stroke="#e2e8f0" stroke-width="1" /><text x="40" y="76" font-size="8" fill="#334155" text-anchor="middle">1 hijo</text><text x="90" y="76" font-size="8" fill="#334155" text-anchor="middle">4</text><text x="140" y="76" font-size="8" fill="#334155" text-anchor="middle">6</text><text x="190" y="76" font-size="8" fill="#334155" text-anchor="middle">0.40</text><text x="240" y="76" font-size="8" fill="#334155" text-anchor="middle">40%</text><line x1="20" y1="82" x2="280" y2="82" stroke="#e2e8f0" stroke-width="1" /><text x="40" y="94" font-size="8" fill="#334155" text-anchor="middle">2 hijos</text><text x="90" y="94" font-size="8" fill="#334155" text-anchor="middle">4</text><text x="140" y="94" font-size="8" fill="#334155" text-anchor="middle">10</text><text x="190" y="94" font-size="8" fill="#334155" text-anchor="middle">0.40</text><text x="240" y="94" font-size="8" fill="#334155" text-anchor="middle">40%</text><line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" stroke-width="1" /><text x="40" y="112" font-size="8.5" font-weight="bold" fill="#475569" text-anchor="middle">Total</text><text x="90" y="112" font-size="8.5" font-weight="bold" fill="#475569" text-anchor="middle">n = 10</text><text x="140" y="112" font-size="8.5" fill="#475569" text-anchor="middle">-</text><text x="190" y="112" font-size="8.5" font-weight="bold" fill="#475569" text-anchor="middle">1.00</text><text x="240" y="112" font-size="8.5" font-weight="bold" fill="#475569" text-anchor="middle">100%</text></svg>',
                    svgDescription: "Tabla de distribución de frecuencias estructurada para una muestra de 10 familias según número de hijos. Muestra las sumatorias de frecuencias absolutas n = 10, relativas 1.00 y porcentuales 100%.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Se encuestó a $10\\text{ familias}$ de un condominio en Guatemala sobre la cantidad de hijos que tienen. Los datos brutos fueron: 2, 1, 0, 2, 3, 2, 1, 0, 1, 2. Organiza y calcula las frecuencias del valor "2 hijos" en la tabla.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Frecuencia Absoluta $f$):</strong> Contamos cuántas familias tienen exactamente 2 hijos en los datos: [2, 2, 2, 2]. Son exactamente 4 familias: <br>$$f = 4$$</li><li><strong>Paso 2 (Frecuencia Acumulada $F$):</strong> Sumamos las frecuencias de las filas anteriores (0 hijos = 2 familias; 1 hijo = 3 familias) más las 4 familias de esta fila: <br>$$F = 2 + 3 + 4 = 9\\text{ familias}$$</li><li><strong>Paso 3 (Frecuencia Relativa $fr$):</strong> Dividimos la absoluta entre el tamaño de la muestra ($n = 10$): <br>$$fr = \\frac{4}{10} = 0.40$$</li><li><strong>Paso 4 (Frecuencia Porcentual $f\\%$):</strong> Multiplicamos la relativa por 100: <br>$$f\\% = 0.40 \\times 100\\% = 40\\%$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El valor de "2 hijos" posee una frecuencia absoluta de <strong>4</strong>, acumulada de <strong>9</strong>, relativa de <strong>0.40</strong> y porcentual de <strong>40%</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Sumatorias erróneas:</strong> Cometer errores aritméticos al sumar de corrido las frecuencias relativas o porcentuales. Recuerda que la relativa **debe** sumar exactamente 1.00 (o 0.999 por redondeo) y las porcentuales 100%.</li></ul>',
                    exercises: [
                        {
                            question: "En una muestra de 20 estudiantes de bachillerato en Antigua, 5 obtuvieron una nota de excelencia. ¿Cuál es el valor decimal de la frecuencia relativa de alumnos excelentes? (Ingresa el número decimal con punto):",
                            correctAnswer: "0.25",
                            hint: "Aplica fr = f / n. Reemplaza f = 5 y n = 20.",
                            feedbackCorrect: "¡Excelente! fr = 5 / 20 = 0.25.",
                            feedbackIncorrect: "Incorrecto. La frecuencia relativa es 5 / 20 = 0.25.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Con los mismos datos del ejercicio anterior (frecuencia relativa = 0.25), ¿a qué porcentaje de alumnos equivale? (Ingresa solo el número entero sin el símbolo %):",
                            correctAnswer: "25",
                            hint: "Multiplica la frecuencia relativa 0.25 por 100 para convertirla a porcentual.",
                            feedbackCorrect: "¡Perfecto! 0.25 * 100 = 25%.",
                            feedbackIncorrect: "Incorrecto. Equivale a 0.25 * 100 = 25%.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si la frecuencia acumulada del tercer intervalo en una tabla de datos es 15 y la frecuencia absoluta del cuarto intervalo es 6, ¿cuál es la frecuencia acumulada del cuarto intervalo? (Ingresa solo el número entero):",
                            correctAnswer: "21",
                            hint: "La frecuencia acumulada actual es la acumulada anterior más la absoluta actual: F_actual = F_anterior + f_actual.",
                            feedbackCorrect: "¡Excelente! F_4 = F_3 + f_4 = 15 + 6 = 21.",
                            feedbackIncorrect: "Incorrecto. F_4 = F_3 + f_4 = 15 + 6 = 21.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué tipo de gráfico estadístico es el más adecuado y formal para representar las frecuencias de una variable cualitativa nominal (como el color favorito)?",
                            options: [
                                "Histograma de barras pegadas.",
                                "Gráfico de sectores circulares (pastel) o de barras separadas.",
                                "Polígono de frecuencias continuas.",
                                "Ojiva acumulada."
                            ],
                            correctAnswer: 1,
                            hint: "Las variables cualitativas no son numéricas continuas, por lo que no deben graficarse con barras adyacentes pegadas.",
                            feedbackCorrect: "¡Perfecto! Las variables categóricas o nominales se ilustran de forma ideal en diagramas de pastel o gráficos de barra clásicos con espacios de separación.",
                            feedbackIncorrect: "Incorrecto. Para variables cualitativas nominales lo adecuado es usar pastel o barras separadas.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "En una encuesta de satisfacción en Xela, 8 personas respondieron estar en nivel 'Muy Satisfecho' de un total de 40 encuestados. ¿Cuál es el porcentaje que representa esta respuesta? (Ingresa solo el número entero sin el símbolo %):",
                            correctAnswer: "20",
                            hint: "Primero calcula la frecuencia relativa: 8 / 40. Luego multiplica por 100.",
                            feedbackCorrect: "¡Excelente! fr = 8/40 = 0.20. Porcentaje = 0.20 * 100 = 20%.",
                            feedbackIncorrect: "Incorrecto. El porcentaje es (8 / 40) * 100 = 20%.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Las tablas de frecuencias organizan observaciones mediante el cálculo de frecuencias absolutas ($f$), acumuladas ($F$), relativas ($fr = f/n$) y porcentuales ($f\\% = fr \\times 100\\%$).",
                    videoPlaceholderText: "Video de Matemáticas: Cómo estructurar una tabla de frecuencias paso a paso sin cometer errores."
                },
                {
                    id: "histogramas-poligonos-frecuencia",
                    title: "Lección 1.2: Histogramas y Polígonos de Frecuencia",
                    introduction: "Aprende a diseñar e interpretar diagramas de barras pegadas e histogramas para variables cuantitativas continuas agrupadas.",
                    explanationHtml: '<p>Cuando trabajamos con variables cuantitativas continuas (como estaturas, pesos o tiempo) que poseen una gran cantidad de valores únicos, agrupamos los datos en **intervalos de clase**. Para representarlos gráficamente, disponemos de dos herramientas muy potentes:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Histograma:</strong> Es un gráfico formado por barras verticales rectangulares **unidas y pegadas entre sí** (sin espacios intermedios). La base de cada barra representa el intervalo de clase (delimitado por sus límites reales) en el eje horizontal ($X$), y la altura representa la frecuencia absoluta ($f_i$) en el eje vertical ($Y$).</li><li><strong>Polígono de Frecuencias:</strong> Es un gráfico de líneas que se forma uniendo con segmentos rectos los puntos medios de la base superior de cada barra del histograma. Estos puntos medios corresponden a las **marcas de clase ($x_m$)**, que representan el valor central de cada intervalo: <br>$$x_m = \\frac{\\text{Límite inferior} + \\text{Límite superior}}{2}$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Marca de Clase e Intervalo</p><p class="text-xs font-mono font-bold text-primary">x_m = (L_inf + L_sup) / 2</p><p class="text-xs text-slate-550">Amplitud = L_sup - L_inf. En el histograma, las barras van pegadas.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">HISTOGRAMA Y POLÍGONO</text><line x1="40" y1="100" x2="270" y2="100" stroke="#94a3b8" stroke-width="1.5" /><line x1="40" y1="30" x2="40" y2="100" stroke="#94a3b8" stroke-width="1" /><text x="32" y="93" font-size="7" fill="#64748b" text-anchor="end">0</text><text x="32" y="70" font-size="7" fill="#64748b" text-anchor="end">6</text><text x="32" y="47" font-size="7" fill="#64748b" text-anchor="end">12</text><rect x="50" y="85" width="40" height="15" fill="#eff6ff" stroke="#3b82f6" stroke-width="1" /><rect x="90" y="45" width="40" height="55" fill="#eff6ff" stroke="#3b82f6" stroke-width="1" /><rect x="130" y="60" width="40" height="40" fill="#eff6ff" stroke="#3b82f6" stroke-width="1" /><rect x="170" y="70" width="40" height="30" fill="#eff6ff" stroke="#3b82f6" stroke-width="1" /><text x="50" y="109" font-size="7.5" fill="#475569" text-anchor="middle">1.40</text><text x="90" y="109" font-size="7.5" fill="#475569" text-anchor="middle">1.50</text><text x="130" y="109" font-size="7.5" fill="#475569" text-anchor="middle">1.60</text><text x="170" y="109" font-size="7.5" fill="#475569" text-anchor="middle">1.70</text><text x="210" y="109" font-size="7.5" fill="#475569" text-anchor="middle">1.80</text><path d="M 30 100 L 70 92.5 L 110 45 L 150 60 L 190 70 L 230 100" fill="none" stroke="#ef4444" stroke-width="2" /><circle cx="70" cy="92.5" r="2.5" fill="#b91c1c" /><circle cx="110" cy="45" r="2.5" fill="#b91c1c" /><circle cx="150" cy="60" r="2.5" fill="#b91c1c" /><circle cx="190" cy="70" r="2.5" fill="#b91c1c" /></svg>',
                    svgDescription: "Un histograma de estaturas en metros de estudiantes con barras continuas. Se ilustra superpuesto el polígono de frecuencias (línea roja) uniendo las marcas de clase de cada barra.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un grupo de estudio midió la estatura de varios estudiantes en Antigua, organizando los datos en intervalos. Si la clase [1.50m - 1.60m) posee una frecuencia de $12\\text{ alumnos}$, calcula su marca de clase e indica cómo se representa visualmente esta barra en el histograma.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Calcular Marca de Clase $x_m$):</strong> La marca de clase es el punto medio del intervalo: <br>$$x_m = \\frac{1.50 + 1.60}{2} = \\frac{3.10}{2} = 1.55\\text{ metros}$$</li><li><strong>Paso 2 (Amplitud del Intervalo):</strong> El ancho de la barra en el eje X es la diferencia de los límites: <br>$$\\text{Amplitud} = 1.60 - 1.50 = 0.10\\text{ m}$$</li><li><strong>Paso 3 (Trazado en Histograma):</strong> La barra se dibuja como un rectángulo vertical que inicia exactamente sobre el valor 1.50 de la recta X, termina en 1.60 (ancho de 0.10) y se eleva verticalmente hasta una altura de 12 unidades en el eje Y. Al ser un histograma, esta barra queda perfectamente unida y pegada a las barras colindantes de los intervalos adyacentes.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Conclusión:</strong> La marca de clase es de <strong>1.55m</strong> y la barra tiene un ancho de <strong>0.10m</strong> y una altura de <strong>12</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Barras separadas:</strong> Dibujar el histograma con espacios de separación entre las columnas verticales. Esto es un error muy común; las barras separadas se usan solo para categorías cualitativas discretas (gráfico de barras). En variables cuantitativas continuas (histograma), las barras deben ir pegadas para ilustrar la continuidad del eje X.</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué representa conceptualmente la 'marca de clase' en una tabla de distribución de frecuencias agrupadas?",
                            options: [
                                "La suma acumulada de las frecuencias absolutas.",
                                "El punto medio o valor central representativo de un intervalo de clase.",
                                "El límite superior del último intervalo de datos.",
                                "La altura de la barra en el histograma."
                            ],
                            correctAnswer: 1,
                            hint: "Se calcula sumando el límite inferior más el superior y dividiendo el resultado entre 2.",
                            feedbackCorrect: "¡Excelente! La marca de clase representa el valor central que tipifica al intervalo.",
                            feedbackIncorrect: "Incorrecto. Representa el punto medio o promedio central de los límites del intervalo.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si un intervalo de clase en una tabla de datos de Xela va de [20 a 30) años, ¿cuál es el valor numérico de su marca de clase? (Ingresa solo el número entero):",
                            correctAnswer: "25",
                            hint: "Suma los límites: 20 + 30. Luego divide el resultado de la suma entre 2.",
                            feedbackCorrect: "¡Perfecto! x_m = (20 + 30) / 2 = 50 / 2 = 25.",
                            feedbackIncorrect: "Incorrecto. La marca de clase es (20 + 30) / 2 = 25.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si la base de una columna en un histograma de pesos va desde 10.5 kg hasta 15.5 kg, ¿cuál es el valor numérico de la amplitud o ancho de ese intervalo? (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "La amplitud es la diferencia entre el límite superior y el límite inferior de la clase.",
                            feedbackCorrect: "¡Excelente! Amplitud = 15.5 - 10.5 = 5 kg.",
                            feedbackIncorrect: "Incorrecto. La amplitud es la resta de los límites: 15.5 - 10.5 = 5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Para qué tipo de variables estadísticas es ideal y recomendado el uso de una gráfica de sectores circulares (pastel) en lugar de un histograma?",
                            options: [
                                "Para variables cuantitativas continuas agrupadas.",
                                "Para variables cualitativas nominales o categóricas que representan porcentajes de un todo.",
                                "Para variables algebraicas de límites infinitos.",
                                "Para análisis de correlaciones lineales."
                            ],
                            correctAnswer: 1,
                            hint: "El pastel ilustra cómo se divide una torta total en porciones porcentuales de categorías no continuas.",
                            feedbackCorrect: "¡Perfecto! La gráfica de pastel es idónea para ilustrar la partición porcentual de variables categóricas o cualitativas.",
                            feedbackIncorrect: "Incorrecto. Es recomendado para variables cualitativas nominales o categóricas.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "El polígono de frecuencias se forma conectando marcas de clase. Para cerrarlo sobre el eje X, ¿qué valor de frecuencia se asume para las marcas de clase adicionales añadidas a los extremos? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "Para que la línea toque el suelo (eje X), la altura o frecuencia en esos puntos extremos debe ser nula.",
                            feedbackCorrect: "¡Excelente! Se añaden marcas de clase ficticias a los extremos con frecuencia 0 para anclar y cerrar el polígono.",
                            feedbackIncorrect: "Incorrecto. Se asume frecuencia 0 para que la gráfica toque el eje X y cierre el área.",
                            difficulty: "intermedio",
                            type: "short"
                        }
                    ],
                    summaryHtml: "Los histogramas grafican variables continuas mediante barras adyacentes pegadas. Los polígonos de frecuencia conectan linealmente las marcas de clase ($x_m = (L_{inf} + L_{sup})/2$).",
                    videoPlaceholderText: "Video de Matemáticas: Cómo dibujar histogramas y polígonos de frecuencia de forma fácil en excel y a mano."
                },
                {
                    id: "diagramas-caja-bigotes-boxplot",
                    title: "Lección 1.3: Diagramas de Caja y Bigotes (Boxplot)",
                    introduction: "Representa visualmente la dispersión, mediana y asimetría de un conjunto de datos a partir del resumen de los cinco números.",
                    explanationHtml: '<p>El <strong>Diagrama de Caja y Bigotes (o Boxplot)</strong> es una representación gráfica sumamente potente para evaluar visualmente la dispersión, simetría y presencia de valores atípicos en una muestra. Se construye a partir del **resumen de los cinco números**:</p><ol class="list-decimal pl-5 space-y-1.5 my-3"><li>Valor Mínimo (no atípico).</li><li>Primer Cuartil ($Q_1$): Marca el 25% de los datos acumulados.</li><li>Mediana o Segundo Cuartil ($Q_2$): Divide la muestra al 50%.</li><li>Tercer Cuartil ($Q_3$): Marca el 75% de los datos acumulados.</li><li>Valor Máximo (no atípico).</li></ol><p class="mt-2 text-slate-700">La "caja" del diagrama abarca desde $Q_1$ hasta $Q_3$, concentrando el **50% central de los datos**. Su ancho se denomina **Rango Intercuartílico ($RIC$)**: $$RIC = Q_3 - Q_1$$ Los "bigotes" son líneas que se extienden desde la caja hasta los valores límites mínimo y máximo no atípicos.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Rango Intercuartílico</p><p class="text-xs font-mono font-bold text-primary">RIC = Q3 - Q1</p><p class="text-xs text-slate-500">Límites para atípicos: Inferior = Q1 - 1.5*RIC &nbsp;|&nbsp; Superior = Q3 + 1.5*RIC</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">DIAGRAMA DE CAJA Y BIGOTES</text><line x1="30" y1="95" x2="270" y2="95" stroke="#cbd5e1" stroke-width="1" /><text x="30" y="107" font-size="7" fill="#64748b" text-anchor="middle">40</text><text x="90" y="107" font-size="7" fill="#64748b" text-anchor="middle">55</text><text x="150" y="107" font-size="7" fill="#64748b" text-anchor="middle">70</text><text x="210" y="107" font-size="7" fill="#64748b" text-anchor="middle">85</text><text x="250" y="107" font-size="7" fill="#64748b" text-anchor="middle">95</text><line x1="30" y1="60" x2="90" y2="60" stroke="#475569" stroke-width="1.5" /><line x1="30" y1="50" x2="30" y2="70" stroke="#475569" stroke-width="1.5" /><rect x="90" y="40" width="120" height="40" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" /><line x1="150" y1="40" x2="150" y2="80" stroke="#10b981" stroke-width="2" /><line x1="210" y1="60" x2="250" y2="60" stroke="#475569" stroke-width="1.5" /><line x1="250" y1="50" x2="250" y2="70" stroke="#475569" stroke-width="1.5" /><text x="30" y="32" font-size="7" fill="#475569" text-anchor="middle" font-weight="bold">Min: 40</text><text x="90" y="32" font-size="7" fill="#1e40af" text-anchor="middle" font-weight="bold">Q1: 55</text><text x="150" y="32" font-size="7" fill="#047857" text-anchor="middle" font-weight="bold">Med: 70</text><text x="210" y="32" font-size="7" fill="#1e40af" text-anchor="middle" font-weight="bold">Q3: 85</text><text x="250" y="32" font-size="7" fill="#475569" text-anchor="middle" font-weight="bold">Max: 95</text></svg>',
                    svgDescription: "Un diagrama de caja y bigotes (boxplot) dibujado a escala sobre una línea numérica. La caja azul encierra desde Q1=55 a Q3=85 (RIC=30). La línea central verde marca la mediana de 70 y los bigotes conectan con el mínimo 40 y máximo 95.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un docente recopila los cuartiles de las calificaciones de su grupo sobre 100 puntos en Xela: Mínimo = 40, $Q_1 = 55$, Mediana = 70, $Q_3 = 85$, Máximo = 95. Diseña el Boxplot, calcula el Rango Intercuartílico e indica qué porcentaje de estudiantes obtuvo notas superiores a 85 puntos.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Calcular Rango Intercuartílico $RIC$):</strong> Restamos el tercer cuartil menos el primer cuartil: <br>$$RIC = Q_3 - Q_1 = 85 - 55 = 30\\text{ puntos}$$</li><li><strong>Paso 2 (Diseñar visualmente la Caja):</strong> La caja se traza como un rectángulo que inicia en 55 en la escala horizontal y termina en 85. Se dibuja una línea vertical verde en la mediana de 70. Los bigotes se extienden a la izquierda hasta 40 y a la derecha hasta 95.</li><li><strong>Paso 3 (Porcentaje superior a 85):</strong> 85 puntos corresponde al tercer cuartil ($Q_3$). Por definición estadística, los cuartiles dividen la distribución en partes iguales de 25%. El área por encima de $Q_3$ representa exactamente el 25% de la muestra.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultados:</strong> El Rango Intercuartílico es de <strong>30 puntos</strong>, y el <strong>25% de los alumnos</strong> obtuvo una nota superior a 85 puntos.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir proporciones por el tamaño visual de la caja:</strong> Pensar que la sección entre $Q_1$ y la Mediana tiene más datos que la sección entre Mediana y $Q_3$ porque la primera es más ancha visualmente en la caja. ¡Falso! Cada una de las cuatro regiones (Min-$Q_1$, $Q_1$-Med, Med-$Q_3$, $Q_3$-Max) contiene de forma exacta el **25% de las observaciones**. El ancho solo indica la dispersión de ese tramo.</li></ul>',
                    exercises: [
                        {
                            question: "¿Qué porcentaje de las observaciones de una muestra se encuentra acumulado de forma exacta dentro de la 'caja' de un boxplot (entre Q1 y Q3)? (Ingresa solo el número entero sin el símbolo %):",
                            correctAnswer: "50",
                            hint: "La caja abarca desde el primer cuartil (25%) hasta el tercer cuartil (75%). Resta ambas proporciones.",
                            feedbackCorrect: "¡Excelente! La caja concentra el 50% central de la distribución de datos.",
                            feedbackIncorrect: "Incorrecto. La caja contiene exactamente el 50% de las observaciones.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cómo se calcula formalmente el Rango Intercuartílico (RIC) de una distribución?",
                            options: [
                                "Restando el valor máximo menos el valor mínimo.",
                                "Sumando el primer cuartil más el tercer cuartil y dividiendo por dos.",
                                "Restando el tercer cuartil menos el primer cuartil (Q3 - Q1).",
                                "Multiplicando la mediana por la desviación estándar."
                            ],
                            correctAnswer: 2,
                            hint: "Mide el ancho de la caja del boxplot. Se calcula como...",
                            feedbackCorrect: "¡Perfecto! El RIC es la diferencia Q3 - Q1, midiendo la dispersión del 50% central.",
                            feedbackIncorrect: "Incorrecto. El Rango Intercuartílico se calcula como Q3 - Q1.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si el primer cuartil (Q1) de una muestra es 12 y el tercer cuartil (Q3) es 20, ¿cuál es el valor numérico del Rango Intercuartílico (RIC)? (Ingresa solo el número entero):",
                            correctAnswer: "8",
                            hint: "Aplica la fórmula RIC = Q3 - Q1. Reemplaza Q3 = 20 y Q1 = 12.",
                            feedbackCorrect: "¡Excelente! RIC = 20 - 12 = 8.",
                            feedbackIncorrect: "Incorrecto. RIC = 20 - 12 = 8.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cómo se representan típicamente de forma visual los datos atípicos extremos (outliers) en un Boxplot estándar?",
                            options: [
                                "Con una línea gruesa vertical continua.",
                                "Mediante puntos, asteriscos o círculos dibujados de forma aislada fuera de la línea de los bigotes.",
                                "Haciendo la caja del diagrama más ancha.",
                                "No se dibujan, se omiten del gráfico."
                            ],
                            correctAnswer: 1,
                            hint: "Los datos atípicos caen más allá de 1.5 veces el RIC desde los cuartiles y se marcan por separado.",
                            feedbackCorrect: "¡Excelente! Los outliers se dibujan como puntos o asteriscos aislados fuera de los bigotes.",
                            feedbackIncorrect: "Incorrecto. Se marcan como puntos o asteriscos fuera de los límites de los bigotes.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si observas que la línea de la mediana en un Boxplot está situada muy cerca del borde izquierdo de la caja (cercana a Q1), ¿qué nos indica sobre la asimetría de los datos?",
                            options: [
                                "Que la distribución es perfectamente simétrica.",
                                "Que existe una asimetría positiva (o hacia la derecha).",
                                "Que la varianza de la muestra es cero.",
                                "Que no hay datos en el primer cuartil."
                            ],
                            correctAnswer: 1,
                            hint: "Si la mediana está a la izquierda, hay una cola de valores más estirada hacia la derecha de la distribución.",
                            feedbackCorrect: "¡Perfecto! Una mediana desplazada a la izquierda de la caja revela una distribución con asimetría positiva o a la derecha.",
                            feedbackIncorrect: "Incorrecto. Indica asimetría positiva o hacia la derecha.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "Los diagramas de caja (Boxplots) resumen gráficamente la mediana, dispersión ($RIC = Q_3 - Q_1$) y asimetría de datos mediante el resumen de cinco números.",
                    videoPlaceholderText: "Video de Matemáticas: Cómo interpretar un diagrama de caja y bigotes en segundos."
                }
            ]
        },
        {
            title: "Unidad 2: Medidas de Tendencia Central",
            lessons: [
                {
                    id: "media-aritmetica-promedio",
                    title: "Lección 2.1: Media Aritmética (Promedio)",
                    introduction: "Calcula el promedio aritmético de datos no agrupados e interpreta analíticamente su sensibilidad ante valores extremos.",
                    explanationHtml: '<p>Las <strong>medidas de tendencia central</strong> son valores numéricos que localizan el centro de gravedad o punto medio de una distribución de datos. La más conocida y utilizada es la <strong>media aritmética (o promedio, $\\bar{x}$)</strong>.</p><p class="mt-2 text-slate-700">Para datos no agrupados, se calcula sumando la totalidad de los valores observados y dividiendo el resultado de la suma entre el tamaño total de la muestra ($n$):</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$\\bar{x} = \\frac{\\sum x_i}{n}$$</p><p class="mt-2 text-slate-700"><strong>Sensibilidad ante datos atípicos:</strong> La media es una medida **muy sensible** a valores extremadamente altos o bajos (outliers). Un solo examen con nota cero jalará el promedio del estudiante hacia abajo dramáticamente, incluso si en los demás exámenes obtuvo notas sobresalientes. Por ende, la media no es representativa en distribuciones con asimetría extrema.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Media Aritmética Muestral</p><p class="text-xs font-mono font-bold text-primary">x̄ = &sum;x_i / n</p><p class="text-xs text-slate-550">Suma total de los datos dividida entre la cantidad de observaciones n.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">MEDIA COMO PUNTO DE APOYO</text><line x1="30" y1="80" x2="270" y2="80" stroke="#475569" stroke-width="2" /><circle cx="50" cy="72" r="6" fill="#3b82f6" stroke="#1d4ed8" /><text x="50" y="62" font-size="7.5" fill="#1e40af" font-weight="bold" text-anchor="middle">40</text><circle cx="170" cy="72" r="6" fill="#3b82f6" stroke="#1d4ed8" /><text x="170" y="62" font-size="7.5" fill="#1e40af" font-weight="bold" text-anchor="middle">80</text><circle cx="210" cy="72" r="6" fill="#3b82f6" stroke="#1d4ed8" /><text x="210" y="62" font-size="7.5" fill="#1e40af" font-weight="bold" text-anchor="middle">90</text><circle cx="250" cy="72" r="6" fill="#3b82f6" stroke="#1d4ed8" /><circle cx="250" cy="59" r="6" fill="#3b82f6" stroke="#1d4ed8" /><text x="250" y="49" font-size="7.5" fill="#1e40af" font-weight="bold" text-anchor="middle">95 (x2)</text><polygon points="170,80 162,98 178,98" fill="#ef4444" stroke="#b91c1c" stroke-width="1" /><text x="170" y="110" font-size="8.5" fill="#b91c1c" font-weight="bold" text-anchor="middle">Media &mu; = 80</text></svg>',
                    svgDescription: "La media aritmética interpretada como el centro de equilibrio o punto de apoyo de una palanca. Los pesos representan las notas [40, 80, 90, 95, 95]. El punto de equilibrio perfecto se ubica exactamente en la media 80.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Las calificaciones de un estudiante en $5\\text{ tareas}$ de matemáticas de CEDETU son: 80, 95, 90, 40 y 95. Calcula su nota promedio e interpreta el efecto de la nota más baja.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Sumar la totalidad de datos):</strong> <br>$$\\sum x_i = 80 + 95 + 90 + 40 + 95 = 400\\text{ puntos}$$</li><li><strong>Paso 2 (Dividir por el total de tareas $n = 5$):</strong> <br>$$\\bar{x} = \\frac{400}{5} = 80\\text{ puntos}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado y Análisis:</strong> El promedio del alumno es de <strong>80 puntos</strong>. Nota cómo el dato atípico bajo de 40 puntos (producido quizás por no entregar una tarea) afectó drásticamente el promedio final, restándole representatividad al esfuerzo de sus otras notas de 90 y 95.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Ignorar valores nulos (ceros):</strong> Omitir los datos con valor cero al calcular la suma en el numerador pero incluirlos en $n$ en el denominador (o viceversa, no contarlos en $n$ lo que inflaría falsamente la media real). Todo dato, valga cero o no, es parte de la muestra.</li></ul>',
                    exercises: [
                        {
                            question: "Calcula el valor de la media aritmética de los siguientes datos numéricos: 12, 15, 18, 20, 25. (Ingresa solo el número entero):",
                            correctAnswer: "18",
                            hint: "Suma los 5 datos y divide el resultado total entre 5.",
                            feedbackCorrect: "¡Excelente! Suma = 90. Media = 90 / 5 = 18.",
                            feedbackIncorrect: "Incorrecto. La suma es 90, dividida entre 5 es 18.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Un comerciante en Sololá registra ventas diarias de Q200 el lunes, Q350 el martes y Q650 el miércoles. ¿Cuál fue su venta promedio diaria en Quetzales en ese lapso de 3 días? (Ingresa solo el número entero):",
                            correctAnswer: "400",
                            hint: "Suma las tres ventas y divide el total entre 3 días.",
                            feedbackCorrect: "¡Perfecto! Suma = 1200. Promedio = 1200 / 3 = 400 Quetzales.",
                            feedbackIncorrect: "Incorrecto. (200 + 350 + 650) / 3 = 1200 / 3 = 400.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si el promedio de las notas de 4 exámenes de un estudiante es exactamente 85 puntos, ¿cuántos puntos sumaron en total sus 4 exámenes? (Ingresa solo el número entero):",
                            correctAnswer: "340",
                            hint: "A partir de x̄ = Suma / n, despeja la Suma multiplicando el Promedio por n.",
                            feedbackCorrect: "¡Excelente! Suma total = Promedio * n = 85 * 4 = 340 puntos.",
                            feedbackIncorrect: "Incorrecto. Suma = 85 * 4 = 340 puntos.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si agregas un valor atípico extremadamente grande (por ejemplo, 1,000) a una pequeña muestra de datos cuyos valores oscilan entre 10 y 20, ¿qué le ocurre a la media?",
                            options: [
                                "Se reduce a la mitad por la ley de compensación.",
                                "Aumenta de forma drástica, demostrando la alta sensibilidad de la media ante outliers.",
                                "Se mantiene estrictamente igual porque la media solo mide el centro modal.",
                                "Se reduce a cero instantáneamente."
                            ],
                            correctAnswer: 1,
                            hint: "La media suma todos los datos individuales; un dato gigante elevará fuertemente el numerador.",
                            feedbackCorrect: "¡Perfecto! La media es sumamente sensible a los datos atípicos, arrastrándose en su dirección.",
                            feedbackIncorrect: "Incorrecto. Al ser sensible, aumenta fuertemente en presencia de valores extremos altos.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "En una oficina pequeña de Antigua Guatemala, las edades de los 6 empleados son: 25, 28, 30, 25, 40, 26 años. ¿Cuál es el promedio de edad del personal? (Ingresa solo el número entero):",
                            correctAnswer: "29",
                            hint: "Suma las 6 edades y divide el resultado de la suma entre 6.",
                            feedbackCorrect: "¡Excelente! Suma = 174. Promedio = 174 / 6 = 29 años.",
                            feedbackIncorrect: "Incorrecto. La media es 174 / 6 = 29 años.",
                            difficulty: "básico",
                            type: "short"
                        }
                    ],
                    summaryHtml: "La media aritmética es el promedio de los datos ($\\bar{x} = \\sum x_i/n$). Es altamente sensible a los valores extremos y outliers de la distribución.",
                    videoPlaceholderText: "Video de Matemáticas: Concepto de media aritmética y su sensibilidad ante extremos explicada visualmente."
                },
                {
                    id: "mediana-valor-central",
                    title: "Lección 2.2: Mediana (El Valor Central)",
                    introduction: "Aprende a determinar la mediana de una muestra ordenando los datos y diferenciando muestras pares e impares.",
                    explanationHtml: '<p>La <strong>mediana (denotada como $\\tilde{x}$ o $Me$)</strong> es la medida de tendencia central que representa el valor de la posición intermedia o central de una distribución. Divide la muestra en dos partes exactamente iguales: el 50% de los datos queda por debajo y el 50% por encima.</p><p class="mt-2 text-slate-700"><strong>Paso Obligatorio e Indispensable:</strong> Para hallar la mediana, los datos **deben ordenarse de menor a mayor** (o mayor a menor) de forma estricta.</p><p class="mt-2 text-slate-700">Una vez ordenados, identificamos el tamaño de la muestra ($n$):</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li>Si $n$ es <strong>impar:</strong> La mediana es el dato que ocupa la posición central exacta: <br>$$\\text{Posición} = \\frac{n+1}{2}$$</li><li>Si $n$ es <strong>par:</strong> No hay un único dato central. La mediana se calcula como el **promedio aritmético de los dos datos centrales del medio**.</li></ul><p class="mt-2 text-slate-705">A diferencia de la media, la mediana es una medida **robusta**; no se altera en absoluto por la presencia de datos extremos o atípicos.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Determinación de la Mediana</p><p class="text-xs font-mono font-bold text-primary">Ordenar Datos &rArr; Buscar posición central</p><p class="text-xs text-slate-500">n impar: central directo &nbsp;|&nbsp; n par: promedio de los dos datos centrales.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">MEDIANA: DATOS ORDENADOS</text><text x="150" y="32" font-size="7.5" fill="#475569" font-weight="bold" text-anchor="middle">Ejemplo n = 6 (Par): Promedio de los del centro</text><rect x="35" y="42" width="30" height="20" fill="#eff6ff" stroke="#cbd5e1" rx="3" /><text x="50" y="55" font-size="8" fill="#1e40af" text-anchor="middle">5</text><rect x="75" y="42" width="30" height="20" fill="#eff6ff" stroke="#cbd5e1" rx="3" /><text x="90" y="55" font-size="8" fill="#1e40af" text-anchor="middle">8</text><rect x="115" y="42" width="30" height="20" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="3" /><text x="130" y="55" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">10</text><rect x="155" y="42" width="30" height="20" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" rx="3" /><text x="170" y="55" font-size="8.5" font-weight="bold" fill="#047857" text-anchor="middle">12</text><rect x="195" y="42" width="30" height="20" fill="#eff6ff" stroke="#cbd5e1" rx="3" /><text x="210" y="55" font-size="8" fill="#1e40af" text-anchor="middle">15</text><rect x="235" y="42" width="30" height="20" fill="#eff6ff" stroke="#cbd5e1" rx="3" /><text x="250" y="55" font-size="8" fill="#1e40af" text-anchor="middle">20</text><path d="M 130 67 L 130 78 L 150 78 L 150 67" fill="none" stroke="#10b981" stroke-width="1.2" /><text x="150" y="92" font-size="9.5" fill="#047857" font-weight="bold" text-anchor="middle">Mediana = (10 + 12)/2 = 11</text></svg>',
                    svgDescription: "Cálculo de la mediana de una muestra de tamaño par (n=6). Los datos ordenados muestran como valores centrales a 10 y 12. La mediana es el promedio de ambos: 11.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Se registraron las siguientes velocidades de motociclistas en una avenida de Xela: 12 m/s, 5 m/s, 20 m/s, 8 m/s, 15 m/s, 10 m/s. Determina el valor de la mediana.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Ordenar de menor a mayor):</strong> <br>$$5, \\; 8, \\; 10, \\; 12, \\; 15, \\; 20$$</li><li><strong>Paso 2 (Identificar n):</strong> Contamos las observaciones: hay 6 datos ($n = 6$, que es una cantidad **par**).</li><li><strong>Paso 3 (Promediar los dos datos del medio):</strong> Los dos datos centrales en las posiciones 3 y 4 son **10** y **12**: <br>$$\\text{Mediana} = \\frac{10 + 12}{2} = \\frac{22}{2} = 11\\text{ m/s}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El valor de la mediana de velocidades es de <strong>11 m/s</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Calcular sin ordenar:</strong> Tomar los datos desordenados originales y buscar el del medio [2, 1, 0, 2, 3...]. Esto anula por completo el concepto de mediana; los datos **deben** estar ordenados en una serie de menor a mayor primero.</li></ul>',
                    exercises: [
                        {
                            question: "Calcula el valor numérico de la mediana de la siguiente serie de datos desordenada: 7, 3, 9, 12, 5. (Ingresa solo el número entero):",
                            correctAnswer: "7",
                            hint: "Primero ordena los 5 datos de menor a mayor. Al ser impar (n=5), selecciona el dato de la posición central.",
                            feedbackCorrect: "¡Excelente! Ordenados: 3, 5, 7, 9, 12. El dato del centro es 7.",
                            feedbackIncorrect: "Incorrecto. Ordenados: 3, 5, 7, 9, 12. La mediana es 7.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula el valor de la mediana para las siguientes mediciones: 150, 200, 180, 160. (Ingresa solo el número entero):",
                            correctAnswer: "170",
                            hint: "Ordena los 4 datos de menor a mayor. Al ser par (n=4), promedia los dos datos que quedan en el centro.",
                            feedbackCorrect: "¡Perfecto! Ordenados: 150, 160, 180, 200. Mediana = (160 + 180) / 2 = 170.",
                            feedbackIncorrect: "Incorrecto. Ordenados: 150, 160, 180, 200. Promedio central = (160 + 180) / 2 = 170.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si reportas que la mediana de salarios de una cooperativa en Antigua es de Q4,500, ¿cuál es su interpretación estadística correcta?",
                            options: [
                                "Que el salario promedio de todos es Q4,500.",
                                "Que el 50% de los trabajadores gana un salario de Q4,500 o menos, y el otro 50% gana Q4,500 o más.",
                                "Que el salario más común y repetido es Q4,500.",
                                "Que ningún trabajador gana más de Q4,500."
                            ],
                            correctAnswer: 1,
                            hint: "La mediana divide de forma exacta a la muestra ordenada en dos mitades del 50%.",
                            feedbackCorrect: "¡Excelente! La mediana divide exactamente al 50% de la población de datos.",
                            feedbackIncorrect: "Incorrecto. Significa que la mitad (50%) gana Q4,500 o menos y la otra mitad Q4,500 o más.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Calcula la mediana de la serie de datos: 0, 0, 1, 2, 5, 8, 10. (Ingresa solo el número entero):",
                            correctAnswer: "2",
                            hint: "Los datos ya están ordenados de menor a mayor. Cuenta el tamaño n (impar) e identifica el elemento central.",
                            feedbackCorrect: "¡Excelente! n = 7 (impar). La posición central 4 es ocupada por el valor 2.",
                            feedbackIncorrect: "Incorrecto. Al estar ordenados, el valor del centro es 2.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Qué ocurre con el valor numérico de la mediana si cambiamos el valor del dato más grande de una muestra por otro valor diez veces mayor?",
                            options: [
                                "La mediana se multiplica por 10.",
                                "La mediana permanece sin cambios, demostrando su robustez ante valores extremos.",
                                "La mediana se reduce a cero.",
                                "La mediana se vuelve igual a la media."
                            ],
                            correctAnswer: 1,
                            hint: "El cambio de un valor extremo no altera el orden ni el valor del elemento que se sitúa en la posición central.",
                            feedbackCorrect: "¡Perfecto! La mediana es robusta y los cambios en extremos lejanos no le afectan.",
                            feedbackIncorrect: "Incorrecto. Se mantiene idéntica al ser una medida robusta no afectada por atípicos.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La mediana divide la muestra ordenada al 50% ($Me$). En muestras impares es el dato central; en pares es el promedio de los dos centrales.",
                    videoPlaceholderText: "Video de Matemáticas: El concepto de mediana y por qué los analistas la prefieren a la media en salarios."
                },
                {
                    id: "moda-valor-mas-frecuente",
                    title: "Lección 2.3: Moda (El Valor Más Frecuente)",
                    introduction: "Identifica el valor o valores con mayor frecuencia absoluta e interpreta asimetrías de curvas.",
                    explanationHtml: '<p>La tercera medida de tendencia central es la <strong>moda (denotada como $Mo$)</strong>. Se define simplemente como el valor o categoría que ocurre con la **mayor frecuencia absoluta** en un conjunto de observaciones.</p><p class="mt-2 text-slate-700">Propiedades y clasificaciones de la moda:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Cualitativa y Cuantitativa:</strong> Es la única medida de tendencia central que se puede aplicar a variables de tipo cualitativo nominal (como color favorito, marca o procedencia).</li><li><strong>Unimodal:</strong> La muestra tiene un único valor dominante.</li><li><strong>Bimodal:</strong> Hay dos valores distintos que empatan con la misma frecuencia máxima absoluta.</li><li><strong>Multimodal:</strong> Existen tres o más valores con la misma frecuencia máxima absoluta.</li><li><strong>Amodal (Sin moda):</strong> Ocurre cuando todos los valores de la muestra se repiten exactamente la misma cantidad de veces, no existiendo un valor dominante.</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Moda en Distribuciones</p><p class="text-xs font-mono font-bold text-primary">Moda = Valor con mayor frecuencia absoluta (f)</p><p class="text-xs text-slate-550">Una muestra puede no tener moda o tener múltiples modas.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">MODA: MÁXIMA FRECUENCIA</text><line x1="40" y1="95" x2="260" y2="95" stroke="#94a3b8" stroke-width="1.5" /><rect x="60" y="80" width="30" height="15" fill="#eff6ff" stroke="#3b82f6" /><text x="75" y="106" font-size="7" fill="#475569" text-anchor="middle">Negro (1)</text><rect x="105" y="80" width="30" height="15" fill="#eff6ff" stroke="#3b82f6" /><text x="120" y="106" font-size="7" fill="#475569" text-anchor="middle">Verde (1)</text><rect x="150" y="65" width="30" height="30" fill="#eff6ff" stroke="#3b82f6" /><text x="165" y="106" font-size="7" fill="#475569" text-anchor="middle">Rojo (2)</text><rect x="195" y="50" width="30" height="45" fill="#fffbeb" stroke="#d97706" stroke-width="2" /><text x="210" y="106" font-size="7.5" font-weight="bold" fill="#b45309" text-anchor="middle">Azul (3)</text><text x="210" y="44" font-size="7" font-weight="bold" fill="#b45309" text-anchor="middle">MODA</text></svg>',
                    svgDescription: "Un gráfico de barras para la venta de camisas. Las frecuencias muestran como moda de categoría al color Azul (altura de 3), por encima del Rojo (2), Verde (1) y Negro (1).",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un comerciante en Xela registra los colores de camisas vendidos en su tienda durante la mañana: Azul, Rojo, Azul, Verde, Rojo, Azul, Negro. Determina el valor de la moda.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Contar las frecuencias individuales):</strong> <br>- Negro: 1 venta <br>- Verde: 1 venta <br>- Rojo: 2 ventas <br>- Azul: 3 ventas</li><li><strong>Paso 2 (Identificar el valor de frecuencia dominante):</strong> El color **Azul** se repite 3 veces, siendo la mayor frecuencia absoluta.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La moda ($Mo$) es de categoría <strong>Azul</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir la frecuencia con el valor modal:</strong> Responder que la moda es \"3\" en lugar de \"Azul\" en el ejemplo anterior. Recuerda que la moda es la variable o categoría ($x_i = \\text{Azul}$), y \"3\" es solo el contador de su frecuencia.</li></ul>',
                    exercises: [
                        {
                            question: "¿Cuál es el valor o valores modales de la siguiente serie de datos: 4, 5, 5, 6, 7, 7, 8?",
                            options: [
                                "Únicamente 6.",
                                "Únicamente 5.",
                                "5 y 7 (bimodal).",
                                "No tiene moda."
                            ],
                            correctAnswer: 2,
                            hint: "Cuenta cuántas veces se repite cada número e identifica cuál o cuáles tienen el mayor conteo.",
                            feedbackCorrect: "¡Excelente! Los números 5 y 7 se repiten 2 veces cada uno, empatando en la máxima frecuencia. La muestra es bimodal.",
                            feedbackIncorrect: "Incorrecto. Es bimodal con valores de 5 y 7.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "¿Cuál es la moda de la siguiente serie de observaciones: 10, 12, 14, 16?",
                            options: [
                                "La moda es 0.",
                                "La moda es 13.",
                                "No tiene moda (es amodal), ya que todos los datos se repiten exactamente una vez.",
                                "16 por ser el valor máximo."
                            ],
                            correctAnswer: 2,
                            hint: "Cuando no hay ningún valor que tenga una frecuencia superior a los demás, la muestra carece de moda.",
                            feedbackCorrect: "¡Excelente! Como no hay un dato dominante, se reporta que no tiene moda.",
                            feedbackIncorrect: "Incorrecto. Carece de moda al repetirse todos igual.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "En un salón de clases, las estaturas medidas son: 1.60m, 1.65m, 1.60m, 1.70m, 1.60m, 1.65m. ¿Cuál es el valor de la moda en metros? (Ingresa el decimal con punto):",
                            correctAnswer: "1.6",
                            hint: "Cuenta las repeticiones: 1.60m aparece 3 veces, 1.65m aparece 2 veces y 1.70m una vez.",
                            feedbackCorrect: "¡Excelente! La moda es 1.6m (o 1.60m) con 3 repeticiones.",
                            feedbackIncorrect: "Incorrecto. La moda es 1.6m con 3 repeticiones.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Para qué tipo de variables estadísticas es la Moda la ÚNICA medida de tendencia central que se puede aplicar matemáticamente?",
                            options: [
                                "Variables cuantitativas continuas.",
                                "Variables cualitativas nominales o categóricas.",
                                "Variables algebraicas vectoriales.",
                                "Distribuciones logarítmicas."
                            ],
                            correctAnswer: 1,
                            hint: "No puedes sumar ni ordenar categorías nominales como 'marca de auto' para hacer promedios o medianas.",
                            feedbackCorrect: "¡Perfecto! Para variables nominales cualitativas, la moda es la única medida de centro aplicable.",
                            feedbackIncorrect: "Incorrecto. Es aplicable únicamente como centro a variables cualitativas nominales.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si analizas la serie: 3, 3, 3, 5, 5, 5, 8, 8, 8. ¿Cuál es la moda de esta serie de datos?",
                            options: [
                                "La moda es 3, 5 y 8.",
                                "No tiene moda, ya que todos los datos presentan la misma frecuencia máxima (3 veces cada uno), no habiendo dominancia.",
                                "La moda es 5.",
                                "La moda es la media 5.33."
                            ],
                            correctAnswer: 1,
                            hint: "Si todos los elementos de la muestra tienen idéntica frecuencia, ningún elemento destaca sobre otro.",
                            feedbackCorrect: "¡Excelente! Al repetirse todos exactamente la misma cantidad de veces, la muestra es amodal.",
                            feedbackIncorrect: "Incorrecto. No tiene moda al no haber dominancia de frecuencia.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La moda es el valor o categoría con mayor frecuencia absoluta ($Mo$). Es aplicable a variables cuantitativas y cualitativas nominales.",
                    videoPlaceholderText: "Video de Matemáticas: Las medidas de tendencia central comparadas en curvas simétricas y asimétricas."
                }
            ]
        },
        {
            title: "Unidad 3: Medidas de Dispersión",
            lessons: [
                {
                    id: "rango-desviacion-media",
                    title: "Lección 3.1: Rango y Desviación Media",
                    introduction: "Calcula el rango total y evalúa la desviación media de una muestra para cuantificar la dispersión respecto al promedio.",
                    explanationHtml: '<p>Las medidas de tendencia central nos indican dónde está el centro de los datos, pero no nos dicen qué tan dispersos o separados están. Las <strong>medidas de dispersión</strong> evalúan esta variabilidad:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Rango ($R$):</strong> Es la medida de dispersión más sencilla. Mide la distancia total de la distribución restando el valor máximo menos el valor mínimo: <br>$$R = X_{\\text{máx}} - X_{\\text{mín}}$$</li><li><strong>Desviación Media ($DM$):</strong> Es el promedio aritmético de las distancias o diferencias absolutas de cada dato de la muestra con respecto a la media aritmética ($\\bar{x}$): <br>$$DM = \\frac{\\sum |x_i - \\bar{x}|}{n}$$</li></ul><p class="mt-2 text-slate-700">El uso de las barras de **valor absoluto** en la desviación media es de carácter obligatorio; de lo contrario, las desviaciones negativas se cancelarían matemáticamente con las positivas, sumando siempre exactamente cero.</p>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Rango y Desviación Media</p><p class="text-xs font-mono font-bold text-primary">R = X_max - X_min &nbsp;|&nbsp; DM = &sum;|x_i - x̄| / n</p><p class="text-xs text-slate-550">Nota: El valor absoluto |x_i - x̄| elimina los signos negativos de las desviaciones.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">RANGO Y DESVIACIÓN MEDIA</text><line x1="30" y1="65" x2="270" y2="65" stroke="#94a3b8" stroke-width="1.5" /><circle cx="50" cy="65" r="4.5" fill="#ef4444" /><text x="50" y="80" font-size="7.5" fill="#b91c1c" font-weight="bold" text-anchor="middle">Mín = 2</text><circle cx="150" cy="65" r="4" fill="#10b981" /><text x="150" y="80" font-size="7.5" fill="#047857" font-weight="bold" text-anchor="middle">Media = 4</text><circle cx="250" cy="65" r="4.5" fill="#ef4444" /><text x="250" y="80" font-size="7.5" fill="#b91c1c" font-weight="bold" text-anchor="middle">Máx = 6</text><line x1="50" y1="38" x2="250" y2="38" stroke="#3b82f6" stroke-width="1.5" /><polygon points="53,35 45,38 53,41" fill="#3b82f6" /><polygon points="247,35 255,38 247,41" fill="#3b82f6" /><text x="150" y="32" font-size="8.5" fill="#1e40af" font-weight="bold" text-anchor="middle">Rango = 6 - 2 = 4</text><path d="M 50 65 Q 100 50 150 65" fill="none" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="2,2" /><text x="100" y="47" font-size="7.5" fill="#b45309" font-weight="bold" text-anchor="middle">d_1 = 2</text><path d="M 150 65 Q 200 50 250 65" fill="none" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="2,2" /><text x="200" y="47" font-size="7.5" fill="#b45309" font-weight="bold" text-anchor="middle">d_2 = 2</text><text x="150" y="106" font-size="8" fill="#475569" text-anchor="middle">Desviación Media = (2 + 0 + 2) / 3 = 1.33</text></svg>',
                    svgDescription: "Cálculo visual de rango y desviaciones en una serie [2, 4, 6] (media = 4). Muestra la envergadura del Rango (azul) y las desviaciones absolutas a la media (arcos amarillos) de 2 unidades cada una.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Calcula el rango y la desviación media del conjunto de datos: 2, 4, 6 (sabiendo que su media aritmética es $\\bar{x} = 4$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Calcular Rango $R$):</strong> Identificamos el máximo (6) y mínimo (2): <br>$$R = X_{\\text{máx}} - X_{\\text{mín}} = 6 - 2 = 4$$</li><li><strong>Paso 2 (Calcular desviaciones absolutas $|x_i - \\bar{x}|$):</strong> <br>- Para 2: $|2 - 4| = |-2| = 2$ <br>- Para 4: $|4 - 4| = |0| = 0$ <br>- Para 6: $|6 - 4| = |2| = 2$</li><li><strong>Paso 3 (Promediar desviaciones):</strong> Sumamos los valores absolutos y dividimos entre $n = 3$: <br>$$DM = \\frac{2 + 0 + 2}{3} = \\frac{4}{3} \\approx 1.33$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultados:</strong> El Rango es de <strong>4</strong> y la Desviación Media es de aproximadamente <strong>1.33</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Ignorar las barras de valor absoluto:</strong> Sumar las desviaciones con sus signos originales: $(2 - 4) + (4 - 4) + (6 - 4) = -2 + 0 + 2 = 0$. En matemáticas, la suma de las desviaciones directas con respecto a la media siempre es **cero**, por lo que usar valor absoluto es obligatorio para medir distancias reales.</li></ul>',
                    exercises: [
                        {
                            question: "Calcula el valor del rango de la siguiente serie de observaciones: 15, 30, 20, 85, 40. (Ingresa solo el número entero):",
                            correctAnswer: "70",
                            hint: "Identifica el valor máximo (85) y el valor mínimo (15) y restalos.",
                            feedbackCorrect: "¡Excelente! Rango = 85 - 15 = 70.",
                            feedbackIncorrect: "Incorrecto. Rango = 85 - 15 = 70.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si observas que la muestra de calificaciones de un colegio en Antigua tiene un rango extremadamente pequeño (por ejemplo, 3 puntos sobre 100), ¿qué nos indica sobre el grupo?",
                            options: [
                                "Que el grupo tiene una altísima dispersión y es muy heterogéneo.",
                                "Que el grupo es sumamente homogéneo y casi todos obtuvieron notas casi idénticas.",
                                "Que la media de calificaciones es muy baja.",
                                "Que todos los alumnos reprobaron."
                            ],
                            correctAnswer: 1,
                            hint: "Un rango pequeño significa que la distancia entre el mejor y el peor alumno es mínima.",
                            feedbackCorrect: "¡Perfecto! Un rango reducido revela homogeneidad extrema en los datos.",
                            feedbackIncorrect: "Incorrecto. Significa que el grupo de datos es muy homogéneo.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el valor de la desviación media de los datos: 10 y 20 (cuya media aritmética es 15). (Ingresa solo el número entero):",
                            correctAnswer: "5",
                            hint: "Calcula la distancia absoluta de cada dato a la media: |10 - 15| = 5, |20 - 15| = 5. Luego promedia ambas distancias.",
                            feedbackCorrect: "¡Excelente! Distancias = 5 y 5. Promedio de desviaciones = (5 + 5) / 2 = 5.",
                            feedbackIncorrect: "Incorrecto. Las desviaciones a la media son 5 y 5; su promedio es 5.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si todos los datos recolectados en una muestra son idénticos (por ejemplo: 5, 5, 5, 5), ¿cuánto vale la desviación media? (Ingresa solo el número entero):",
                            correctAnswer: "0",
                            hint: "Si todos los datos son iguales a 5, la media es 5. La distancia de cada dato a la media es nula.",
                            feedbackCorrect: "¡Perfecto! Al no haber dispersión ni diferencias, la desviación media es exactamente 0.",
                            feedbackIncorrect: "Incorrecto. Si no hay dispersión la desviación media es 0.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "En una carrera de atletismo escolar, el tiempo promedio de los corredores es de 12 segundos con una desviación media de 0.5 segundos. ¿Qué nos indica esto?",
                            options: [
                                "Que todos los atletas corrieron en exactamente 12.5 segundos.",
                                "Que la mayoría de los atletas registraron tiempos situados a una distancia promedio de 0.5 segundos del promedio general (entre 11.5 y 12.5 segundos).",
                                "Que el atleta más lento tardó 12.5 segundos.",
                                "Que la varianza de los tiempos es infinita."
                            ],
                            correctAnswer: 1,
                            hint: "La desviación media cuantifica la distancia típica o separación promedio de los datos respecto al centro.",
                            feedbackCorrect: "¡Perfecto! Describe de forma intuitiva la separación promedio de los tiempos individuales del promedio central.",
                            feedbackIncorrect: "Incorrecto. Indica que la dispersión promedio de los corredores respecto a la media es de 0.5 segundos.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El rango mide la envergadura de los extremos ($R = Max - Min$). La desviación media promedia las distancias absolutas de cada dato a la media ($DM = \\sum |x_i - \\bar{x}|/n$).",
                    videoPlaceholderText: "Video de Matemáticas: Concepto intuitivo de dispersión y cómo calcular el rango y desviación media."
                },
                {
                    id: "varianza-desviacion-estandar-muestral",
                    title: "Lección 3.2: Varianza y Desviación Estándar Muestral",
                    introduction: "Domina el cálculo y la interpretación de la varianza y la desviación estándar muestral aplicando el factor corrector n - 1.",
                    explanationHtml: '<p>En la práctica estadística avanzada, la desviación media es poco utilizada porque el valor absoluto es difícil de operar algebraicamente en cálculo diferencial. En su lugar, elevamos las desviaciones al cuadrado para eliminar los signos negativos, lo que da origen a las dos medidas reinas de la dispersión:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Varianza Muestral ($s^2$):</strong> Promedia los cuadrados de las diferencias de cada dato respecto a la media. Para una **muestra**, dividimos entre $n - 1$ (corrección de Bessel) para corregir el sesgo de subestimación poblacional: <br>$$s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n - 1}$$</li><li><strong>Desviación Estándar Muestral ($s$):</strong> Al elevar al cuadrado en la varianza, las unidades físicas también se elevan (ej. pesos en $kg^2$). Para regresar a las unidades originales del problema, extraemos la raíz cuadrada de la varianza: <br>$$s = \\sqrt{s^2}$$</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Varianza y Desviación Estándar Muestral</p><p class="text-xs font-mono font-bold text-primary">s&sup2; = &sum;(x_i - x̄)&sup2; / (n - 1) &nbsp;|&nbsp; s = &radic;s&sup2;</p><p class="text-xs text-slate-550">Nota: Usar n - 1 en el denominador de la varianza al trabajar con muestras.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">VARIANZA &amp; DESVIACIÓN ESTÁNDAR</text><rect x="15" y="32" width="80" height="40" fill="#eff6ff" stroke="#bfdbfe" rx="4" /><text x="55" y="45" font-size="7" font-weight="bold" fill="#1e40af" text-anchor="middle">1. Restas</text><text x="55" y="55" font-size="7" fill="#64748b" text-anchor="middle">(x_i - &mu;)</text><text x="55" y="65" font-size="7" fill="#64748b" text-anchor="middle">-2, 0, +2</text><rect x="110" y="32" width="80" height="40" fill="#ecfdf5" stroke="#a7f3d0" rx="4" /><text x="150" y="45" font-size="7" font-weight="bold" fill="#065f46" text-anchor="middle">2. Cuadrados</text><text x="150" y="55" font-size="7" fill="#64748b" text-anchor="middle">(x_i - &mu;)&sup2;</text><text x="150" y="65" font-size="7" fill="#64748b" text-anchor="middle">4, 0, 4 (Suma=8)</text><rect x="205" y="32" width="80" height="40" fill="#fffbeb" stroke="#fde68a" rx="4" /><text x="245" y="45" font-size="7" font-weight="bold" fill="#d97706" text-anchor="middle">3. Varianza (s&sup2;)</text><text x="245" y="55" font-size="7" fill="#64748b" text-anchor="middle">Suma / (n - 1)</text><text x="245" y="65" font-size="7" fill="#d97706" font-weight="bold" text-anchor="middle">s&sup2; = 8 / 2 = 4</text><path d="M 150 78 L 150 88" stroke="#cbd5e1" stroke-width="1.5" /><polygon points="147,86 150,91 153,86" fill="#cbd5e1" /><text x="150" y="106" font-size="10" fill="#047857" font-weight="bold" text-anchor="middle">Desviación Estándar s = &radic;s&sup2; = &radic;4 = 2</text></svg>',
                    svgDescription: "Flujo paso a paso para el cálculo muestral de la varianza s² y la desviación estándar s de una serie [3, 5, 7] (media=5). Se detalla la resta de la media, elevación al cuadrado, división entre n-1 (muestral) y la extracción final de la raíz.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Calcula la varianza muestral y la desviación estándar de la serie de datos: 3, 5, 7 (la media es $\\bar{x} = 5$, tamaño de la muestra $n = 3$).</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Calcular diferencias al cuadrado $(x_i - \\bar{x})^2$):</strong> <br>- Para 3: $(3 - 5)^2 = (-2)^2 = 4$ <br>- Para 5: $(5 - 5)^2 = (0)^2 = 0$ <br>- Para 7: $(7 - 5)^2 = (2)^2 = 4$</li><li><strong>Paso 2 (Sumatoria de cuadrados):</strong> Sumamos las diferencias cuadráticas: <br>$$\\sum (x_i - \\bar{x})^2 = 4 + 0 + 4 = 8$$</li><li><strong>Paso 3 (Calcular Varianza Muestral dividiendo entre $n - 1$):</strong> Como $n = 3$, dividimos entre $3 - 1 = 2$: <br>$$s^2 = \\frac{8}{2} = 4\\text{ unidades}^2$$</li><li><strong>Paso 4 (Calcular Desviación Estándar):</strong> Extraemos la raíz cuadrada de la varianza: <br>$$s = \\sqrt{s^2} = \\sqrt{4} = 2\\text{ unidades}$$</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultados:</strong> La varianza muestral es de <strong>4</strong> y la desviación estándar muestral es de <strong>2</strong>.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Dividir entre n en muestras:</strong> Dividir la suma de cuadrados entre $n$ directamente ($8 / 3 = 2.67$) para calcular la varianza de una muestra. Recuerda usar siempre $n - 1$ en el denominador para varianzas **muestrales** (la división entre $n$ se reserva de forma exclusiva para poblaciones completas).</li></ul>',
                    exercises: [
                        {
                            question: "Si la varianza muestral de un conjunto de mediciones es de 16, ¿cuál es el valor numérico de la desviación estándar? (Ingresa solo el número entero):",
                            correctAnswer: "4",
                            hint: "La desviación estándar es la raíz cuadrada de la varianza: s = sqrt(s²).",
                            feedbackCorrect: "¡Excelente! s = sqrt(16) = 4.",
                            feedbackIncorrect: "Incorrecto. La desviación estándar es la raíz cuadrada de la varianza: sqrt(16) = 4.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si la desviación estándar medida de los pesos de sacos de café es de 3 libras, ¿cuánto vale su varianza muestral? (Ingresa solo el número entero):",
                            correctAnswer: "9",
                            hint: "La varianza es el cuadrado de la desviación estándar: s² = s * s.",
                            feedbackCorrect: "¡Excelente! Varianza = 3² = 9.",
                            feedbackIncorrect: "Incorrecto. La varianza es el cuadrado de la desviación estándar: 3² = 9.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Calcula el valor numérico de la varianza muestral de las observaciones: 10 y 20 (la media es 15, n = 2). (Ingresa solo el número entero):",
                            correctAnswer: "50",
                            hint: "Calcula las diferencias al cuadrado: (10 - 15)² = 25 y (20 - 15)² = 25 (Suma = 50). Divide entre n - 1, que para n = 2 es exactamente 1.",
                            feedbackCorrect: "¡Perfecto! Varianza muestral = 50 / (2 - 1) = 50.",
                            feedbackIncorrect: "Incorrecto. Suma de cuadrados = 50. Dividiendo entre 2-1=1 da 50.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "Con los datos del ejercicio anterior (varianza muestral = 50), calcula el valor de su desviación estándar aproximada: (Ingresa el número decimal con punto aproximado, ej: 7.07):",
                            correctAnswer: "7.07",
                            hint: "Extrae la raíz cuadrada de la varianza: s = sqrt(50).",
                            feedbackCorrect: "¡Excelente! s = sqrt(50) ≈ 7.07.",
                            feedbackIncorrect: "Incorrecto. La desviación estándar es sqrt(50) ≈ 7.07.",
                            difficulty: "intermedio",
                            type: "short"
                        },
                        {
                            question: "¿Puede la varianza o desviación estándar de una muestra de datos reales dar alguna vez un resultado numérico negativo?",
                            options: [
                                "Sí, si la media es negativa.",
                                "No, al basarse en sumatorias de diferencias elevadas al cuadrado y raíces de números positivos, el resultado es siempre positivo o cero.",
                                "Solo si todos los datos son negativos.",
                                "Solo si el tamaño de muestra n es menor a 10."
                            ],
                            correctAnswer: 1,
                            hint: "Los cuadrados de números reales son siempre positivos o nulos, y las raíces cuadradas principales son no negativas.",
                            feedbackCorrect: "¡Perfecto! Tanto la varianza como la desviación estándar son medidas de magnitud absoluta siempre no negativas.",
                            feedbackIncorrect: "Incorrecto. Son medidas intrínsecamente no negativas por sus definiciones cuadráticas.",
                            difficulty: "básico",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "La varianza muestral ($s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n - 1}$) promedia diferencias cuadráticas. La desviación estándar ($s = \\sqrt{s^2}$) retorna las unidades originales.",
                    videoPlaceholderText: "Video de Matemáticas: Varianza muestral y desviación estándar explicadas con fórmulas y calculadora de bolsillo."
                },
                {
                    id: "coeficiente-de-variacion-cv",
                    title: "Lección 3.3: Coeficiente de Variación (CV)",
                    introduction: "Compara la variabilidad relativa de muestras con diferentes medias o unidades calculando el Coeficiente de Variación.",
                    explanationHtml: '<p>La desviación estándar ($s$) mide la dispersión en unidades absolutas. Sin embargo, no nos permite comparar la variabilidad de dos variables con **unidades de medida diferentes** (ej. comparar la dispersión de la estatura en metros con el peso en kilogramos), ni de variables con **promedios muy distantes** (ej. la dispersión del peso de ratones vs el peso de elefantes).</p><p class="mt-2 text-slate-700">Para solucionar esto, definimos el <strong>Coeficiente de Variación ($CV$)</strong>. Es una medida de dispersión relativa adimensional que expresa la desviación estándar como un porcentaje de la media aritmética de la muestra:</p><p class="text-center font-mono font-extrabold text-primary text-base my-2">$$CV = \\left( \\frac{s}{\\bar{x}} \\right) \\times 100\\%$$</p><p class="mt-2 text-slate-700"><strong>Interpretación de la Homogeneidad:</strong></p><ul class="list-disc pl-5 space-y-1.5 my-2"><li>Un $CV \\le 10\\%$ indica una dispersión muy baja (los datos son **altamente homogéneos** y estables).</li><li>Un $CV > 30\\%$ revela una alta dispersión relativa (datos **heterogéneos** con alta variabilidad).</li></ul>',
                    formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Coeficiente de Variación</p><p class="text-xs font-mono font-bold text-primary">CV = (s / x̄) &times; 100%</p><p class="text-xs text-slate-550">s representa la desviación estándar, x̄ representa la media de la muestra.</p></div>',
                    svgGraphic: '<svg viewBox="0 0 300 120" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="300" height="120" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" rx="16" /><text x="150" y="18" font-size="10" font-family="sans-serif" font-weight="extrabold" fill="#64748b" text-anchor="middle" letter-spacing="1">COEFICIENTE DE VARIACIÓN (CV)</text><rect x="25" y="32" width="115" height="50" fill="#eff6ff" stroke="#bfdbfe" rx="6" /><text x="82" y="44" font-size="7.5" font-weight="bold" fill="#1e40af" text-anchor="middle">ESTATURAS</text><text x="82" y="55" font-size="7" fill="#475569" text-anchor="middle">Media = 1.60 m</text><text x="82" y="65" font-size="7" fill="#475569" text-anchor="middle">Desv. s = 0.08 m</text><text x="82" y="76" font-size="8" font-weight="bold" fill="#10b981" text-anchor="middle">CV = 5% (Homogéneo)</text><rect x="160" y="32" width="115" height="50" fill="#fffbeb" stroke="#fde68a" rx="6" /><text x="217" y="44" font-size="7.5" font-weight="bold" fill="#b45309" text-anchor="middle">PESOS</text><text x="217" y="55" font-size="7" fill="#475569" text-anchor="middle">Media = 50 kg</text><text x="217" y="65" font-size="7" fill="#475569" text-anchor="middle">Desv. s = 5 kg</text><text x="217" y="76" font-size="8" font-weight="bold" fill="#ef4444" text-anchor="middle">CV = 10% (Más disperso)</text><text x="150" y="106" font-size="8.5" fill="#334155" font-weight="bold" text-anchor="middle">CV = (s / &mu;) &times; 100%</text></svg>',
                    svgDescription: "Comparación de dispersión relativa mediante el Coeficiente de Variación. Las estaturas (CV=5%) presentan menor variabilidad relativa y son más homogéneas que los pesos (CV=10%), a pesar de tener unidades distintas.",
                    workedExampleHtml: '<p><strong>Problema:</strong> Un salón de clases de Antigua tiene una estatura media de $1.60\\text{ m}$ con desviación estándar $s = 0.08\\text{ m}$. Otro grupo de estudiantes tiene un peso medio de $50\\text{ kg}$ con desviación estándar $s = 5\\text{ kg}$. ¿Cuál de los dos conjuntos de datos presenta mayor variabilidad relativa?</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1 (Calcular CV de Estaturas):</strong> <br>$$CV_{\\text{estaturas}} = \\left( \\frac{0.08}{1.60} \\right) \\times 100\\% = 0.05 \\times 100\\% = 5\\%$$</li><li><strong>Paso 2 (Calcular CV de Pesos):</strong> <br>$$CV_{\\text{pesos}} = \\left( \\frac{5}{50} \\right) \\times 100\\% = 0.10 \\times 100\\% = 10\\%$$</li><li><strong>Paso 3 (Comparar):</strong> El Coeficiente de Variación de los pesos (10%) duplica al de las estaturas (5%).</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> El **peso de los alumnos** exhibe una variabilidad relativa mayor (es más heterogéneo) que su estatura.</p>',
                    commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Invertir el cociente de la fórmula:</strong> Dividir la media entre la desviación estándar: $\\bar{x} / s$. Recuerde que la desviación estándar ($s$) va en el numerador para reflejar el cambio relativo de la variabilidad respecto a la media de la distribución.</li></ul>',
                    exercises: [
                        {
                            question: "Si la media de una muestra de datos es 40 y su desviación estándar es 8, ¿cuál es el porcentaje del Coeficiente de Variación? (Ingresa solo el número entero sin el símbolo %):",
                            correctAnswer: "20",
                            hint: "Aplica CV = (s / x̄) * 100. Reemplaza s = 8 y x̄ = 40.",
                            feedbackCorrect: "¡Excelente! CV = (8 / 40) * 100% = 0.20 * 100 = 20%.",
                            feedbackIncorrect: "Incorrecto. CV = (8 / 40) * 100 = 20%.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "Si comparas dos muestras de salarios en Antigua, la Muestra A con CV del 45% y la Muestra B con CV del 15%. ¿Cuál muestra se considera más homogénea?",
                            options: [
                                "La Muestra A con CV de 45%.",
                                "La Muestra B con CV de 15%.",
                                "Ambas son igual de homogéneas.",
                                "Ninguna, el CV no mide la homogeneidad."
                            ],
                            correctAnswer: 1,
                            hint: "Un menor coeficiente de variación indica que los datos están más concentrados y estables alrededor de la media.",
                            feedbackCorrect: "¡Perfecto! A menor CV, mayor homogeneidad y estabilidad de los datos.",
                            feedbackIncorrect: "Incorrecto. La Muestra B (15%) es mucho más homogénea al tener menor variabilidad relativa.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Calcula el Coeficiente de Variación si la media de las observaciones es 10 y su desviación estándar es 1.5. (Ingresa el número decimal con punto y sin el símbolo %):",
                            correctAnswer: "15",
                            hint: "Aplica CV = (1.5 / 10) * 100.",
                            feedbackCorrect: "¡Excelente! CV = (1.5 / 10) * 100% = 15%.",
                            feedbackIncorrect: "Incorrecto. CV = (1.5 / 10) * 100 = 15.",
                            difficulty: "básico",
                            type: "short"
                        },
                        {
                            question: "¿Cuál es la ventaja fundamental de usar el Coeficiente de Variación (CV) frente a la desviación estándar común (s)?",
                            options: [
                                "El CV calcula la mediana de forma directa.",
                                "El CV es una medida adimensional que permite comparar la dispersión relativa de variables con diferentes unidades de medida o medias muy diferentes.",
                                "El CV elimina la necesidad de contar con una media.",
                                "El CV es independiente del tamaño de muestra n."
                            ],
                            correctAnswer: 1,
                            hint: "La desviación estándar tiene unidades físicas, el CV es un porcentaje puro.",
                            feedbackCorrect: "¡Excelente! Al ser un porcentaje adimensional, el CV es ideal para comparar dispersiones de escalas o variables totalmente diferentes.",
                            feedbackIncorrect: "Incorrecto. Permite comparar la variabilidad relativa de muestras con diferentes medias o unidades.",
                            difficulty: "básico",
                            type: "multiple"
                        },
                        {
                            question: "Si el Coeficiente de Variación de las ventas semanales de una sucursal en Escuintla es de apenas 8%, ¿qué diagnóstico reportas a la gerencia?",
                            options: [
                                "Que las ventas tienen una dispersión altísima y caótica.",
                                "Que las ventas son sumamente estables y tienen una variabilidad muy baja, indicando consistencia comercial.",
                                "Que las ventas promedio cayeron a cero.",
                                "Que se debe cambiar el modelo de negocio."
                            ],
                            correctAnswer: 1,
                            hint: "Un CV menor al 10% se considera de muy baja variabilidad o alta estabilidad.",
                            feedbackCorrect: "¡Perfecto! Un CV del 8% representa una excelente estabilidad y baja variabilidad en la facturación semanal.",
                            feedbackIncorrect: "Incorrecto. Indica consistencia y estabilidad comercial al ser menor al 10%.",
                            difficulty: "intermedio",
                            type: "multiple"
                        }
                    ],
                    summaryHtml: "El coeficiente de variación ($CV = \\frac{s}{\\bar{x}} \\times 100\\%$) es adimensional y permite comparar la dispersión relativa de variables con diferentes medias o unidades.",
                    videoPlaceholderText: "Video de Matemáticas: Comparando variabilidad de variables con el Coeficiente de Variación."
                }
            ]
        }
    ]
};

const lawsStatsOriginalStart = '    "curso-estadistica-aplicada":';

function run() {
    console.log("Leyendo academic_content.js...");
    let content = fs.readFileSync(ACADEMIC_FILE, "utf8");

    const startStats = content.indexOf('    "curso-estadistica-aplicada": `');
    const endStats = content.indexOf('`,\n\n    "intro-estadistica":');

    if (startStats === -1 || endStats === -1) {
        console.error("No se pudo encontrar el bloque curso-estadistica-aplicada original.");
        process.exit(1);
    }

    console.log("Encontradas posiciones en disco para inyección quirúrgica de Estadística Descriptiva.");

    const statsJS = '    "curso-estadistica-aplicada": ' + JSON.stringify(cursoEstadisticaAplicadaData, null, 4);

    let newContent = content.slice(0, startStats) + 
                     statsJS + 
                     content.slice(endStats + 1);

    console.log("Escribiendo cambios en academic_content.js...");
    fs.writeFileSync(ACADEMIC_FILE, newContent, "utf8");
    console.log("¡Curso de Estadística Descriptiva inyectado con éxito!");
}

try {
    run();
} catch (e) {
    console.error("Error crítico durante la inyección:", e);
    process.exit(1);
}
