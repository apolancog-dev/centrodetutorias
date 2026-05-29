// =====================================================================
// BASE DE DATOS DE CONTENIDO ACADÉMICO - CENTRO DE TUTORÍAS (CEDETU)
// =====================================================================
// Este archivo contiene el plan de estudios inicial para Matemáticas, 
// Física y Estadística, estructurado según las directrices pedagógicas.

window.ACADEMIC_CONTENT = {
    "mate-primaria": `# Curso: Matemáticas Básicas
* **Materia:** Matemáticas | **Nivel sugerido:** Primaria Alta
* **Público objetivo:** Estudiantes que necesitan consolidar las bases del cálculo numérico y operaciones básicas.
* **Objetivos de aprendizaje:** Comprender el valor posicional, dominar las cuatro operaciones fundamentales y resolver problemas de la vida cotidiana en Latinoamérica.

## Unidad 1: Números y Operaciones Fundamentales
### Lección 1.1: El Valor Posicional y Números Grandes
* **Objetivo:** Comprender cómo el valor de un dígito cambia según su posición en números hasta de seis cifras.
* **Explicación:** En nuestro sistema decimal, cada posición a la izquierda vale diez veces más. Por ejemplo, en el número 4,325, el '3' representa 300 unidades (centenas), mientras que en el número 3,425 representa 3,000 unidades (millares).
* **Ejemplo Resuelto:** Escribe el valor posicional del dígito 7 en el número 874,210.
  - *Paso 1:* Identifica la posición del 7. Está en la quinta posición de derecha a izquierda (decenas de millar).
  - *Paso 2:* Multiplica el dígito por su valor posicional: 7 × 10,000 = 70,000.
  - *Resultado:* El valor posicional de 7 es 70,000.
* **Errores Comunes:** Confundir decenas de millar con centenas de millar o ignorar los ceros intermedios.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el valor del dígito 5 en el número 154,230? (R: 50,000. Retroalimentación: El 5 está en la posición de unidades de millar).
  2. Escribe en cifras: Doscientos mil cuarenta y cinco. (R: 200,045. Retroalimentación: No olvides colocar ceros en las posiciones vacías).
  3. En una finca de Tecpán se cosecharon 45,670 manzanas. ¿Cuántas decenas de millar hay? (R: 4 decenas. Retroalimentación: El dígito en la posición de decenas de millar es 4).
  4. ¿Qué número se forma con 3 centenas de millar, 5 decenas y 2 unidades? (R: 300,052).
  5. Si sumas 1,000 al número 89,500, ¿qué dígito cambia en las decenas de millar? (R: El 8 cambia a 9, formando 90,500).
* **¿Necesitas ayuda?** Si tienes dudas sobre el valor posicional, ¡solicita una tutoría personalizada para practicar con bloques multibase interactivos!

### Lección 1.2: Suma y Resta con Llevadas y Préstamos
* **Objetivo:** Realizar sumas y restas complejas alineando correctamente los dígitos por su valor posicional.
* **Explicación:** Al sumar, si el resultado de una columna es 10 o más, "llevamos" la decena a la siguiente columna a la izquierda. Al restar, si el número de arriba es menor que el de abajo, debemos "pedir prestada" una decena a la columna de la izquierda.
* **Ejemplo Resuelto:** Resta 4,523 de 8,110.
  - *Paso 1:* Alinea verticalmente: 8110 - 4523.
  - *Paso 2:* En las unidades, 0 - 3 no se puede. Pedimos prestado a las decenas. El 0 se vuelve 10, y el 1 de las decenas se vuelve 0. 10 - 3 = 7.
  - *Paso 3:* En las decenas, 0 - 2 no se puede. Pedimos prestado a las centenas. El 0 se vuelve 10, y el 1 de las centenas se vuelve 0. 10 - 2 = 8.
  - *Paso 4:* En las centenas, 0 - 5 no se puede. Pedimos prestado a los millares. El 0 se vuelve 10, y el 8 se vuelve 7. 10 - 5 = 5.
  - *Paso 5:* En los millares, 7 - 4 = 3.
  - *Resultado:* 3,587.
* **Errores Comunes:** Olvidar restar el "préstamo" que se le hizo a la columna anterior.
* **Ejercicios de Práctica:**
  1. Resuelve: 45,600 - 12,850. (R: 32,750).
  2. Resuelve: 8,745 + 13,567. (R: 22,312).
  3. Si un comerciante de La Terminal compra mercadería por Q12,450 y paga con Q15,000, ¿cuánto recibe de vuelto? (R: Q2,550).
  4. Completa la cifra que falta: 4,5_3 + 1,280 = 5,843. (R: 6. Retroalimentación: 4,563 + 1,280 = 5,843).
  5. Resuelve: 10,000 - 4,321. (R: 5,679).
* **¿Necesitas ayuda?** Resolver restas con varios ceros seguidos puede ser confuso. ¡Un tutor de CEDETU te enseñará el truco definitivo para dominarlas!

### Lección 1.3: Multiplicación por Dos y Tres Cifras
* **Objetivo:** Multiplicar números grandes dejando el espacio correspondiente al cambiar de valor posicional en los productos parciales.
* **Explicación:** Al multiplicar por un número de varias cifras, multiplicamos primero por las unidades, luego por las decenas (dejando un espacio vacío o un cero a la derecha en la segunda línea) y luego por las centenas (dejando dos espacios vacíos), sumando finalmente todos los productos parciales.
* **Ejemplo Resuelto:** Multiplica 245 × 13.
  - *Paso 1:* Multiplica 245 × 3 = 735.
  - *Paso 2:* Multiplica 245 × 10 = 2450 (escribimos 245 dejando un espacio: 245_).
  - *Paso 3:* Suma ambos resultados: 735 + 2450 = 3,185.
  - *Resultado:* 3,185.
* **Errores Comunes:** No alinear los productos parciales o colocarlos todos desde la primera columna de la derecha.
* **Ejercicios de Práctica:**
  1. Multiplica: 125 × 24. (R: 3,000).
  2. Si una caja de lápices cuesta Q15 y un colegio compra 120 cajas, ¿cuál es el costo total? (R: Q1,800).
  3. Multiplica: 452 × 112. (R: 50,624).
  4. Un camión transporta 75 sacos de café de 125 libras cada uno. ¿Cuántas libras lleva en total? (R: 9,375 libras).
  5. Multiplica: 805 × 45. (R: 36,225).
* **¿Necesitas ayuda?** ¿Te cuesta recordar las tablas de multiplicar o te pierdes al sumar las llevadas? ¡Agenda una clase de apoyo rápido para repasar las tablas con juegos prácticos!

## Evaluación Unidad 1
* Resuelve: 150,000 - (12,450 × 8). (R: 50,400. Retroalimentación: Primero multiplica 12,450 × 8 = 99,600. Luego resta 150,000 - 99,600 = 50,400).
* ¿Qué número representa 4 centenas de millar, 8 unidades de millar y 3 decenas? (R: 408,030).
* Un bus de transporte extraurbano recorre 125 kilómetros diarios. ¿Cuántos kilómetros recorre en 30 días? (R: 3,750 km).

---

## Unidad 2: Fracciones, Decimales y Porcentajes
### Lección 2.1: Concepto de Fracción y Simplificación
* **Objetivo:** Representar fracciones de forma visual e identificar fracciones equivalentes mediante la simplificación.
* **Explicación:** Una fracción representa partes de un todo. El numerador indica cuántas partes tomamos y el denominador en cuántas partes iguales se dividió el todo. Simplificar consiste en dividir el numerador y el denominador por el mismo número para obtener la fracción más sencilla equivalente.
* **Ejemplo Resuelto:** Simplifica la fracción 18/24 a su mínima expresión.
  - *Paso 1:* Busca un divisor común para 18 y 24. Ambos se pueden dividir por 2: 18÷2 / 24÷2 = 9/12.
  - *Paso 2:* Busca un divisor común para 9 y 12. Ambos se pueden dividir por 3: 9÷3 / 12÷3 = 3/4.
  - *Paso 3:* Dado que 3/4 no tiene más divisores comunes aparte del 1, la fracción está simplificada.
  - *Resultado:* 3/4.
* **Errores Comunes:** Dividir el numerador por un número y el denominador por otro diferente.
* **Ejercicios de Práctica:**
  1. Simplifica 20/50. (R: 2/5. Retroalimentación: Divide ambos entre 10).
  2. ¿Qué fracción de una pizza queda si se divide en 8 partes y te comes 3? (R: 5/8).
  3. Simplifica 12/36. (R: 1/3).
  4. Convierte la fracción impropia 7/3 en número mixto. (R: 2 1/3. Retroalimentación: 7 dividido entre 3 da 2 con residuo 1).
  5. ¿Son equivalentes las fracciones 2/3 y 8/12? (R: Sí. Retroalimentación: Si multiplicas 2/3 por 4 arriba y abajo obtienes 8/12).
* **¿Necesitas ayuda?** Las fracciones equivalentes son la base para sumar fracciones heterogéneas. ¡Pide una tutoría para verlas de forma visual con esquemas circulares interactivos!

### Lección 2.2: Operaciones con Decimales
* **Objetivo:** Sumar, restar y multiplicar números decimales alineando correctamente el punto decimal.
* **Explicación:** Para sumar o restar decimales, debemos alinear los números verticalmente de forma que los puntos decimales coincidan en la misma columna. En la multiplicación, multiplicamos de forma normal y luego colocamos el punto decimal en el resultado final contando la suma de las posiciones decimales de ambos factores.
* **Ejemplo Resuelto:** Multiplica 4.5 × 1.2.
  - *Paso 1:* Multiplica de forma normal como si fueran enteros: 45 × 12 = 540.
  - *Paso 2:* Cuenta las posiciones decimales. 4.5 tiene una y 1.2 tiene otra (dos en total).
  - *Paso 3:* Coloca el punto decimal en 540 contando dos espacios de derecha a izquierda: 5.40.
  - *Resultado:* 5.4.
* **Errores Comunes:** No alinear los puntos decimales al sumar o restar, o copiar el punto en la misma columna al multiplicar.
* **Ejercicios de Práctica:**
  1. Suma: 12.5 + 3.84. (R: 16.34).
  2. Resta: 15.0 - 4.25. (R: 10.75).
  3. Si una libra de aguacates cuesta Q6.50 y compras 3.5 libras, ¿cuánto gastas? (R: Q22.75).
  4. Resuelve: 0.5 × 0.2. (R: 0.1. Retroalimentación: 5 × 2 = 10; colocamos el punto contando dos posiciones hacia la izquierda: 0.10, que es igual a 0.1).
  5. Divide: 4.5 ÷ 0.5. (R: 9. Retroalimentación: Equivale a dividir 45 entre 5).
* **¿Necesitas ayuda?** La multiplicación de decimales pequeños suele causar confusión respecto a la posición del cero. ¡Haz un diagnóstico rápido con un tutor de CEDETU!

### Lección 2.3: Porcentajes y su Conversión
* **Objetivo:** Calcular el porcentaje de un número y convertir porcentajes a decimales y fracciones fácilmente.
* **Explicación:** Un porcentaje (%) representa una fracción sobre 100. Por ejemplo, 25% significa "25 de cada 100" o 25/100, que simplificado es 1/4 o en decimal 0.25. Para calcular el porcentaje de un número, multiplicamos el número por el decimal equivalente del porcentaje.
* **Ejemplo Resuelto:** Calcula el 15% de Q200.
  - *Paso 1:* Convierte 15% a decimal dividiendo entre 100: 15 ÷ 100 = 0.15.
  - *Paso 2:* Multiplica el número por el decimal: 200 × 0.15 = 30.
  - *Resultado:* Q30.
* **Errores Comunes:** Multiplicar directamente por el entero del porcentaje (ej. multiplicar por 15 en lugar de 0.15).
* **Ejercicios de Práctica:**
  1. Calcula el 20% de 80. (R: 16. Retroalimentación: 80 × 0.20 = 16).
  2. Convierte 75% a fracción simplificada. (R: 3/4).
  3. Si una chumpa cuesta Q300 y tiene el 10% de descuento, ¿cuál es el precio final? (R: Q270. Retroalimentación: El descuento es Q30, por lo que pagas Q300 - Q30 = Q270).
  4. ¿Qué decimal representa el 5%? (R: 0.05. Retroalimentación: Cuidado, 0.5 representa el 50%).
  5. En un salón de 40 alumnos, el 60% son mujeres. ¿Cuántas mujeres hay? (R: 24).
* **¿Necesitas ayuda?** Los porcentajes son cruciales para entender ofertas, intereses y estadísticas en la vida real. ¡Asegura tu comprensión con un tutor dedicado!

## Evaluación Unidad 2
* Si gastas Q45.50 en el mercado y pagas con un billete de Q100, ¿cuánto te queda? (R: Q54.50).
* Simplifica a su mínima expresión: 36/48. (R: 3/4).
* Si una tablet cuesta Q1,200 y tiene un impuesto del 12% de IVA, ¿cuánto pagas en total? (R: Q1,344. Retroalimentación: El IVA es Q144. Q1,200 + Q144 = Q1,344).

---

## Unidad 3: Resolución de Problemas Cotidianos
### Lección 3.1: Método de Resolución de 4 Pasos (Polya)
* **Objetivo:** Aplicar los cuatro pasos sistemáticos para resolver cualquier problema matemático verbal con éxito.
* **Explicación:** George Polya diseñó un método universal: 1) Entender el problema (¿cuáles son los datos y la pregunta?), 2) Trazar un plan (¿qué operación debo hacer?), 3) Ejecutar el plan (hacer el cálculo matemático de forma limpia) y 4) Examinar la solución (¿tiene sentido el resultado obtenido?).
* **Ejemplo Resuelto:** María compró 3 cartones de huevos a Q35 cada uno y Q15 de pan. Si pagó con un billete de Q200, ¿cuánto recibió de vuelto?
  - *Paso 1: Entender:* Datos: 3 cartones a Q35 c/u, pan por Q15, pago con Q200. Pregunta: Vuelto.
  - *Paso 2: Plan:* Calcular el gasto de los huevos (3 × 35), sumar el pan (+ 15) y restar el total del billete (200 - total).
  - *Paso 3: Ejecutar:* 3 × Q35 = Q105. Q105 + Q15 = Q120. Q200 - Q120 = Q80.
  - *Paso 4: Examinar:* El vuelto es Q80, lo cual es lógico ya que gastó más de la mitad del billete.
  - *Resultado:* Q80.
* **Errores Comunes:** Empezar a operar números sin haber comprendido qué pregunta realmente el problema.
* **Ejercicios de Práctica:**
  1. Un camión lleva 15 cajas con 12 botellas de jugo cada una. Si vende 40 botellas, ¿cuántas quedan? (R: 140 botellas. Retroalimentación: Total = 15 × 12 = 180. Quedan = 180 - 40 = 140).
  2. Si para hacer una receta de pastel se necesitan 2.5 tazas de harina y quieres hacer 4 pasteles, ¿cuánta harina necesitas? (R: 10 tazas).
  3. Juan ahorra Q5 diarios. ¿En cuántos días habrá ahorrado Q350? (R: 70 días).
  4. Un agricultor de Sololá cosecha 480 zanahorias y las empaca en bolsas de 12 unidades. ¿Cuántas bolsas llena en total? (R: 40 bolsas).
  5. Una bomba de agua extrae 45 litros por minuto. ¿Cuántos litros extraerá en hora y media? (R: 4,050 litros. Retroalimentación: Hora y media son 90 minutos. 45 × 90 = 4,050).
* **¿Necesitas ayuda?** Los problemas de planteo verbal suelen ser la mayor dificultad en las escuelas. ¡Aprende a traducir el lenguaje ordinario al matemático con tu tutor!

### Lección 3.2: La Regla de Tres Simple y Directa
* **Objetivo:** Plantear y resolver problemas de proporcionalidad directa utilizando la regla de tres.
* **Explicación:** Cuando dos magnitudes son directamente proporcionales (si una aumenta, la otra también en la misma proporción), podemos usar la regla de tres. Multiplicamos de forma cruzada los datos conocidos y dividimos el resultado entre el tercer dato para hallar la incógnita.
* **Ejemplo Resuelto:** Si 5 libras de frijol cuestan Q40, ¿cuánto costarán 12 libras del mismo frijol?
  - *Paso 1:* Plantea la proporción:
    5 libras ---> Q40
    12 libras ---> Qx
  - *Paso 2:* Multiplica cruzado: 12 × 40 = 480.
  - *Paso 3:* Divide por el tercer término: 480 ÷ 5 = 96.
  - *Resultado:* Q96.
* **Errores Comunes:** Multiplicar en línea recta en lugar de cruzado en proporciones directas.
* **Ejercicios de Práctica:**
  1. Si 3 lapiceros cuestan Q10.50, ¿cuánto cuestan 8 lapiceros? (R: Q28.00).
  2. Un automóvil recorre 180 km con 3 galones de gasolina. ¿Cuántos km recorrerá con 8 galones? (R: 480 km).
  3. Si 12 trabajadores cosechan un campo de café en 4 días, ¿cuánto tardarán 6 trabajadores? (R: 8 días. Retroalimentación: ¡Ojo! Este es un caso de proporcionalidad inversa: a menos trabajadores, más tiempo. Se opera 12 × 4 / 6 = 8).
  4. Para pintar una pared de 20 metros cuadrados se necesitan 4 galones de pintura. ¿Cuántos galones se necesitan para 50 metros cuadrados? (R: 10 galones).
  5. Si un dólar equivale a Q7.80, ¿cuántos quetzales son $150? (R: Q1,170).
* **¿Necesitas ayuda?** Saber distinguir entre proporcionalidad directa e inversa es vital para no equivocarse en física y finanzas. ¡Un tutor de CEDETU te lo explicará con ejemplos muy divertidos!

### Lección 3.3: Unidades de Medida Locales y Conversiones
* **Objetivo:** Convertir unidades del Sistema Internacional a unidades de medida tradicionales de uso común en Guatemala (libras, quintales, varas).
* **Explicación:** En nuestro país conviven unidades de peso como el quintal (100 libras) o la arroba (25 libras) y de longitud como la vara (aprox. 84 cm). Conocer las equivalencias exactas nos permite resolver problemas de compra, venta y terrenos agrícolas de forma real.
* **Ejemplo Resuelto:** Un agricultor tiene 3.5 quintales de café pergamino. ¿A cuántas libras equivale esta cosecha?
  - *Paso 1:* Establece la equivalencia: 1 quintal (qq) = 100 libras (lb).
  - *Paso 2:* Multiplica la cantidad de quintales por 100: 3.5 × 100 = 350.
  - *Resultado:* 350 libras.
* **Errores Comunes:** Multiplicar por 25 al pasar de quintales a libras (confundiéndolo con arrobas).
* **Ejercicios de Práctica:**
  1. Si un saco de maíz pesa 2 arrobas, ¿cuántas libras pesa en total? (R: 50 lb. Retroalimentación: 1 arroba = 25 libras. 2 × 25 = 50).
  2. Un terreno mide 30 varas de ancho. Si cada vara mide 0.84 metros, ¿cuántos metros de ancho mide el terreno? (R: 25.2 metros).
  3. Convierte 450 libras a quintales. (R: 4.5 quintales. Retroalimentación: 450 ÷ 100 = 4.5).
  4. Si compras 3 libras de carne y cada libra cuesta Q32.00, pero la balanza marca en kilogramos y te da 1.36 kg, ¿está correcto? (R: Sí. Retroalimentación: 1 kg es aprox. 2.2 lb. 1.36 kg × 2.2 = 3 lb).
  5. ¿Cuántas arrobas hay en un lote de 200 libras de azúcar? (R: 8 arrobas. Retroalimentación: 200 ÷ 25 = 8).
* **¿Necesitas ayuda?** Las conversiones de unidades locales suelen ser muy confusas en las tareas escolares de primaria y básico. ¡Pide ayuda a tu tutor para hacer tu propio recetario de conversión!

## Evaluación Unidad 3
* Si 8 sacos de abono orgánico cuestan Q640, ¿cuánto cuestan 15 sacos del mismo abono? (R: Q1,200).
* Un comerciante de Chichicastenango compra artesanías por un valor de Q1,800. Si las vende todas obteniendo una ganancia del 25% sobre el precio de compra, ¿cuál fue el monto total obtenido en las ventas? (R: Q2,250. Retroalimentación: Ganancia = 1,800 × 0.25 = Q450. Venta = 1,800 + 450 = Q2,250).
* ¿Cuántas libras de frijol hay en 6.5 quintales? (R: 650 libras).
`,

    "aritmetica-esencial": `# Curso: Aritmética Esencial
* **Materia:** Matemáticas | **Nivel sugerido:** Primaria / Secundaria
* **Público objetivo:** Alumnos que inician secundaria o bachillerato y desean pulir sus destrezas numéricas avanzadas.
* **Objetivos de aprendizaje:** Operar con números enteros positivos y negativos, dominar la divisibilidad y resolver razones y proporciones matemáticas.

## Unidad 1: Propiedades de las Operaciones y Enteros
### Lección 1.1: Ley de Signos en Suma y Resta
* **Objetivo:** Operar números positivos y negativos aplicando la regla de adición y sustracción de números enteros.
* **Explicación:** Al operar signos en suma y resta: números con signos iguales se suman y se conserva el mismo signo. Números con signos diferentes se restan (el mayor menos el menor) y se coloca el signo del número con mayor valor absoluto.
* **Ejemplo Resuelto:** Resuelve: -15 + 8 - 3 + 20.
  - *Paso 1:* Agrupa los negativos: -15 y -3 = -18.
  - *Paso 2:* Agrupa los positivos: +8 y +20 = +28.
  - *Paso 3:* Opera ambos resultados: -18 + 28. Como tienen signos diferentes, restamos: 28 - 18 = 10. El 28 es mayor y positivo.
  - *Resultado:* 10.
* **Errores Comunes:** Aplicar la ley de signos de la multiplicación ("menos por menos da más") a las operaciones de suma y resta.
* **Ejercicios de Práctica:**
  1. Resuelve: -7 - 12. (R: -19. Retroalimentación: Signos iguales se suman y mantienen el signo).
  2. Resuelve: -25 + 40. (R: 15).
  3. Resuelve: 8 - (-5). (R: 13. Retroalimentación: Restar un negativo equivale a sumar: 8 + 5 = 13).
  4. Si la temperatura en Quetzaltenango baja a -2°C y luego sube 10°C por la tarde, ¿cuál es la temperatura final? (R: 8°C).
  5. Resuelve: -10 + 4 - 8 + 12. (R: -2).
* **¿Necesitas ayuda?** La recta numérica es la mejor forma de entender los enteros. ¡Toma una tutoría virtual y domina los números negativos de forma visual!

### Lección 1.2: Ley de Signos en Multiplicación y División
* **Objetivo:** Multiplicar y dividir números enteros aplicando de forma estricta las tablas de signos de Meta.
* **Explicación:** La ley de signos para multiplicación y división establece:
  * (+) × (+) = (+)  |  (-) × (-) = (+)  (Signos iguales dan positivo)
  * (+) × (-) = (-)  |  (-) × (+) = (-)  (Signos diferentes dan negativo)
* **Ejemplo Resuelto:** Resuelve: (-24) ÷ (-3) × (-2).
  - *Paso 1:* Divide (-24) entre (-3). Menos entre menos da más: 24 ÷ 3 = +8.
  - *Paso 2:* Multiplica (+8) por (-2). Más por menos da menos: 8 × 2 = -16.
  - *Resultado:* -16.
* **Errores Comunes:** Confundir estas reglas con las de la suma y restar en lugar de multiplicar.
* **Ejercicios de Práctica:**
  1. Resuelve: (-5) × (-8). (R: 40).
  2. Resuelve: (-36) ÷ 4. (R: -9).
  3. Resuelve: (-2) × 3 × (-4). (R: 24. Retroalimentación: (-2) × 3 = -6; (-6) × (-4) = 24).
  4. Resuelve: 100 ÷ (-10) ÷ (-1). (R: 10).
  5. Si una cuenta bancaria pierde Q150 mensuales por un seguro automatizado, ¿cuál es el saldo acumulado perdido tras 6 meses? (R: -900).
* **¿Necesitas ayuda?** No dejes que un simple signo arruine toda tu tarea de álgebra. ¡Un tutor de CEDETU te dará consejos mnemotécnicos muy fáciles de recordar!

### Lección 1.3: Jerarquía de Operaciones (PEMDAS)
* **Objetivo:** Resolver operaciones combinadas aplicando el orden estricto de precedencia matemática.
* **Explicación:** Para resolver operaciones complejas, debemos seguir el orden **PEMDAS**:
  1. **P**aréntesis y corchetes de adentro hacia afuera.
  2. **E**xponentes y raíces.
  3. **M**ultiplicaciones y **D**ivisiones (de izquierda a derecha).
  4. **A**diciones y **S**ustracciones (de izquierda a derecha).
* **Ejemplo Resuelto:** Resuelve: 8 + 2 × (3² - 5) ÷ 2.
  - *Paso 1:* Opera dentro del paréntesis (exponente primero): 3² = 9. El paréntesis queda: (9 - 5) = 4.
  - *Paso 2:* Reemplaza: 8 + 2 × 4 ÷ 2.
  - *Paso 3:* Multiplicación y división de izquierda a derecha: 2 × 4 = 8. Luego, 8 ÷ 2 = 4.
  - *Paso 4:* Suma final: 8 + 4 = 12.
  - *Resultado:* 12.
* **Errores Comunes:** Sumar primero 8 + 2 al inicio, violando la regla de que la multiplicación va antes de la suma.
* **Ejercicios de Práctica:**
  1. Resuelve: 15 - 3 × 4 + 2. (R: 5. Retroalimentación: 3 × 4 = 12; 15 - 12 + 2 = 5).
  2. Resuelve: (5 + 3)² ÷ 4 - 6. (R: 10. Retroalimentación: 8² ÷ 4 - 6 = 64 ÷ 4 - 6 = 16 - 6 = 10).
  3. Resuelve: 4 + 12 ÷ 3 × 2. (R: 12. Retroalimentación: 12 ÷ 3 = 4; 4 × 2 = 8; 4 + 8 = 12).
  4. Resuelve: 2 × [3 + (8 - 2 × 3)]. (R: 10).
  5. Resuelve: 10² - 3 × 5² + (4 × 5). (R: 45).
* **¿Necesitas ayuda?** La jerarquía de operaciones es el tema donde más se cometen errores en los exámenes. ¡Practica paso a paso con un tutor calificado de CEDETU!

## Evaluación Unidad 1
* Resuelve: -12 + (-45) ÷ (-9) × 3. (R: 3. Retroalimentación: (-45)÷(-9) = 5; 5 × 3 = 15; -12 + 15 = 3).
* Resuelve: [3 × (2 + 4)²] ÷ 12. (R: 9. Retroalimentación: 3 × 6² = 3 × 36 = 108. 108 ÷ 12 = 9).
* Un buzo desciende a 15 metros bajo el nivel del mar (-15 m). Sube 8 metros y luego desciende otros 5 metros. ¿A qué profundidad se encuentra? (R: -12 metros).

---

## Unidad 2: Múltiplos, Divisores y Factorización
### Lección 2.1: Criterios de Divisibilidad y Números Primos
* **Objetivo:** Identificar si un número es divisible entre 2, 3, 5 o 10 rápidamente y conocer los números primos básicos.
* **Explicación:** Un número es divisible:
  * Entre 2: si termina en cifra par (0, 2, 4, 6, 8).
  * Entre 3: si la suma de sus dígitos es un múltiplo de 3.
  * Entre 5: si termina en 0 o 5.
  * Entre 10: si termina en 0.
  Un número primo solo tiene dos divisores: el 1 y él mismo (ej. 2, 3, 5, 7, 11, 13, 17, 19).
* **Ejemplo Resuelto:** ¿Es el número 285 divisible entre 3 y entre 5?
  - *Paso 1 Divisibilidad por 3:* Suma los dígitos: 2 + 8 + 5 = 15. Como 15 es múltiplo de 3, sí es divisible entre 3.
  - *Paso 2 Divisibilidad por 5:* Termina en 5, por lo tanto, sí es divisible entre 5.
  - *Resultado:* Sí, es divisible por ambos.
* **Errores Comunes:** Pensar que todos los números impares son números primos (ejemplo: 9 o 15 no son primos porque se pueden dividir entre 3).
* **Ejercicios de Práctica:**
  1. ¿Cuáles de los siguientes números son primos: 9, 11, 15, 17, 21? (R: 11 y 17).
  2. ¿Es el número 432 divisible entre 3? (R: Sí. Retroalimentación: 4 + 3 + 2 = 9, el cual es divisible entre 3).
  3. ¿Es el número 900 divisible entre 2, 3, 5 y 10 al mismo tiempo? (R: Sí).
  4. ¿Cuál es el número primo más cercano a 30? (R: 31. Retroalimentación: 29 también es primo y es el más cercano por debajo).
  5. ¿Es el número 1,023 divisible por 3? (R: Sí. Retroalimentación: 1 + 0 + 2 + 3 = 6).
* **¿Necesitas ayuda?** Aprender divisibilidad es clave para simplificar fracciones complejas. ¡Pregunta a un tutor para resolver tus dudas de forma rápida!

### Lección 2.2: Factorización en Factores Primos
* **Objetivo:** Descomponer cualquier número compuesto en una multiplicación de factores primos utilizando el árbol de factores o divisiones sucesivas.
* **Explicación:** Todo número compuesto puede escribirse como un producto único de números primos. Para descomponerlo, lo dividimos sistemáticamente entre los números primos menores (2, 3, 5, 7...) hasta llegar al número 1.
* **Ejemplo Resuelto:** Descompón en factores primos el número 120.
  - *Paso 1:* Dividimos entre 2: 120 ÷ 2 = 60.
  - *Paso 2:* Dividimos entre 2: 60 ÷ 2 = 30.
  - *Paso 3:* Dividimos entre 2: 30 ÷ 2 = 15.
  - *Paso 4:* Como 15 no se puede entre 2, dividimos entre 3: 15 ÷ 3 = 5.
  - *Paso 5:* Dividimos entre 5: 5 ÷ 5 = 1. Hemos terminado.
  - *Resultado:* 120 = 2 × 2 × 2 × 3 × 5 = 2³ × 3 × 5.
* **Errores Comunes:** Colocar factores que no son números primos en el resultado (ejemplo: 120 = 10 × 12).
* **Ejercicios de Práctica:**
  1. Descompón el número 60. (R: 2² × 3 × 5).
  2. Descompón el número 45. (R: 3² × 5).
  3. Descompón el número 98. (R: 2 × 7²).
  4. ¿Cuál es la descomposición del número 100? (R: 2² × 5²).
  5. Descompón el número 101. (R: 101. Retroalimentación: 101 ya es un número primo).
* **¿Necesitas ayuda?** La factorización prima es el "ADN" de los números. ¡Toma una tutoría interactiva de CEDETU para dominar este concepto!

### Lección 2.3: Mínimo Común Múltiplo (mcm) y Máximo Común Divisor (MCD)
* **Objetivo:** Calcular el mcm y el MCD de dos o más números para resolver problemas de periodicidad y distribución.
* **Explicación:** 
  * **mcm (Mínimo Común Múltiplo):** El múltiplo común más pequeño. Se descompone hasta llegar a 1 en todos los números y se multiplican todos los factores.
  * **MCD (Máximo Común Divisor):** El mayor divisor común. Solo dividimos por factores que puedan dividir a **todos** los números simultáneamente.
* **Ejemplo Resuelto:** Encuentra el mcm y el MCD de 12 y 18.
  - *Descomposición Conjunta:*
    - Mitad (entre 2): 12 ÷ 2 = 6, 18 ÷ 2 = 9 (El 2 divide a ambos, sirve para MCD).
    - Mitad (entre 2): 6 ÷ 2 = 3, 9 no se puede (queda 9). (Solo sirve para mcm).
    - Tercera (entre 3): 3 ÷ 3 = 1, 9 ÷ 3 = 3 (El 3 divide a ambos, sirve para MCD).
    - Tercera (entre 3): 1, 3 ÷ 3 = 1.
  - *Cálculo de mcm:* Multiplica todos los factores: 2 × 2 × 3 × 3 = 36.
  - *Cálculo de MCD:* Multiplica los factores que dividieron a ambos al mismo tiempo: 2 × 3 = 6.
  - *Resultado:* mcm = 36, MCD = 6.
* **Errores Comunes:** Confundir los conceptos y calcular el mcm cuando el problema exige aplicar MCD o viceversa.
* **Ejercicios de Práctica:**
  1. Encuentra el mcm de 8 y 12. (R: 24).
  2. Encuentra el MCD de 24 y 36. (R: 12).
  3. Un médico receta una pastilla a Luis cada 6 horas y otra cada 8 horas. Si se las toma juntas a las 8:00 AM, ¿en cuántas horas volverá a tomárselas juntas? (R: 24 horas. Retroalimentación: mcm(6,8) = 24).
  4. Una costurera tiene dos listones de 40 cm y 60 cm. Quiere cortarlos en pedazos iguales lo más largos posible sin desperdiciar. ¿Cuánto debe medir cada pedazo? (R: 20 cm. Retroalimentación: MCD(40,60) = 20).
  5. Calcula el mcm de 5, 10 y 15. (R: 30).
* **¿Necesitas ayuda?** Los problemas de mcm y MCD vienen en casi todas las evaluaciones de admisión. ¡Asegura tus puntos aprendiendo los trucos con tu tutor!

## Evaluación Unidad 2
* Factoriza completamente en números primos el número 250. (R: 2 × 5³).
* Si una alarma de seguridad suena cada 15 minutos y otra suena cada 20 minutos, ¿cada cuántos minutos sonarán simultáneamente? (R: 60 minutos. Retroalimentación: mcm(15,20) = 60).
* Encuentra el MCD de 45, 75 y 90. (R: 15. Retroalimentación: Los tres números se pueden dividir entre 3 y luego entre 5 simultáneamente. 3 × 5 = 15).

---

## Unidad 3: Razones, Proporciones y Regla de Tres
### Lección 3.1: Razones y Proporciones Fundamentales
* **Objetivo:** Comprender qué es una razón (comparación entre dos números) y resolver proporciones aplicando la propiedad fundamental.
* **Explicación:** Una razón es el cociente de dos cantidades \`a/b\`. Una proporción es la igualdad de dos razones: \`a/b = c/d\`. La propiedad fundamental de las proporciones dice que los productos cruzados son iguales: \`a × d = b × c\` (los extremos por los medios).
* **Ejemplo Resuelto:** Encuentra el valor de $x$ en la proporción: $4/5 = 12/x$.
  - *Paso 1:* Multiplica cruzado: 4 × x = 5 × 12.
  - *Paso 2:* Opera: 4x = 60.
  - *Paso 3:* Despeja x: x = 60 ÷ 4 = 15.
  - *Resultado:* x = 15.
* **Errores Comunes:** Multiplicar en línea recta en lugar de cruzado.
* **Ejercicios de Práctica:**
  1. Resuelve para x: 3/x = 9/15. (R: 5).
  2. En una receta, la razón de agua a arroz es de 2 a 1. Si cocinas 3 tazas de arroz, ¿cuánta agua necesitas? (R: 6 tazas).
  3. En un colegio de Guatemala, la razón de aprobados a reprobados es de 7 a 2. Si hay 14 reprobados, ¿cuántos aprobaron? (R: 49. Retroalimentación: 7/2 = x/14; x = 7 × 14 ÷ 2 = 49).
  4. Resuelve para y: y/8 = 10/16. (R: 5).
  5. ¿Son proporcionales las razones 3/4 y 9/12? (R: Sí. Retroalimentación: 3 × 12 = 36 y 4 × 9 = 36).
* **¿Necesitas ayuda?** Las proporciones son la base de los mapas a escala y planos de arquitectura. ¡Aprende a resolverlas de forma fácil con un tutor especializado!

### Lección 3.2: Regla de Tres Inversa
* **Objetivo:** Resolver problemas de proporcionalidad inversa donde el aumento de una magnitud produce la disminución de la otra en la misma proporción.
* **Explicación:** Si las magnitudes son inversamente proporcionales, multiplicamos los datos conocidos en línea recta (en horizontal) y dividimos el resultado entre el tercer dato para hallar la incógnita.
* **Ejemplo Resuelto:** Si 4 albañiles construyen una barda en 6 días, ¿cuántos días tardarán 8 albañiles si trabajan al mismo ritmo?
  - *Paso 1:* Plantea el problema:
    4 albañiles ---> 6 días
    8 albañiles ---> x días
    *(A más albañiles, tardarán menos días. Es inversa).*
  - *Paso 2:* Multiplica en línea recta: 4 × 6 = 24.
  - *Paso 3:* Divide por el tercer término: 24 ÷ 8 = 3.
  - *Resultado:* 3 días.
* **Errores Comunes:** Operar de forma cruzada por costumbre, lo cual daría 12 días, lo cual no es lógico ya que más personas trabajando deberían tardar menos tiempo.
* **Ejercicios de Práctica:**
  1. Si un auto tarda 3 horas en llegar a Quetzaltenango yendo a 80 km/h, ¿cuánto tardará a una velocidad de 120 km/h? (R: 2 horas. Retroalimentación: 3 × 80 ÷ 120 = 2).
  2. Un agricultor tiene comida para alimentar a 20 gallinas durante 15 días. Si vende 5 gallinas, ¿para cuántos días le alcanzará el alimento? (R: 20 días. Retroalimentación: Quedan 15 gallinas. 20 × 15 ÷ 15 = 20 días).
  3. 3 llaves de agua llenan un estanque en 8 horas. ¿Cuánto tardarán 6 llaves iguales? (R: 4 horas).
  4. Si para limpiar una calle en Antigua Guatemala se necesitan 10 voluntarios trabajando durante 6 horas, ¿cuántos voluntarios se necesitan para hacerlo en 3 horas? (R: 20 voluntarios).
  5. Un saco de maíz sirve para alimentar 8 cerdos durante 9 días. ¿Cuánto dura el saco si se tienen 12 cerdos? (R: 6 días).
* **¿Necesitas ayuda?** La regla de tres inversa confunde a 9 de cada 10 estudiantes. ¡Toma una clase personalizada con CEDETU y garantízate una excelente nota en tu examen!

### Lección 3.3: Regla de Tres Compuesta
* **Objetivo:** Resolver problemas que involucren tres o más magnitudes directa o inversamente proporcionales utilizando métodos analíticos estructurados.
* **Explicación:** En la regla de tres compuesta intervienen más de dos magnitudes. Planteamos la relación de todas ellas con la incógnita de forma ordenada y determinamos si son relaciones directas o inversas para multiplicar o dividir los factores correspondientes.
* **Ejemplo Resuelto:** Si 5 grifos iguales consumen 100 litros de agua en 4 horas, ¿cuántos litros consumirán 8 grifos en 6 horas?
  - *Paso 1:* Plantea las columnas:
    Grifos --- Horas --- Litros
    5 ------ 4 ------ 100
    8 ------ 6 ------ x
  - *Paso 2:* Analiza respecto a la incógnita (Litros):
    - Grifos a Litros: A más grifos, más litros (Directa: multiplicamos por 8/5).
    - Horas a Litros: A más horas, más litros (Directa: multiplicamos por 6/4).
  - *Paso 3:* Opera: x = 100 × (8/5) × (6/4) = 100 × 48 / 20 = 4,800 ÷ 20 = 240.
  - *Resultado:* 240 litros.
* **Errores Comunes:** Multiplicar todas las relaciones en el mismo sentido sin verificar si alguna es inversa.
* **Ejercicios de Práctica:**
  1. Si 6 tejedores de Santiago Atitlán elaboran 30 bufandas en 10 días, ¿cuántas bufandas elaborarán 8 tejedores en 15 días? (R: 60 bufandas. Retroalimentación: 30 × (8/6) × (15/10) = 60).
  2. Si 3 impresoras imprimen 1,500 volantes en 2 horas, ¿cuántas horas tardarán 4 impresoras en imprimir 4,000 volantes? (R: 4 horas. Retroalimentación: 2 × (3/4) × (4,000/1,500) = 4 horas).
  3. Si 10 obreros abren una zanja de 100 metros en 8 días, ¿cuántos días tardarán 15 obreros en abrir una zanja de 150 metros? (R: 8 días).
  4. Una fábrica necesita 5 máquinas para producir 2,500 latas en 6 horas. ¿Cuántas latas producirán 3 máquinas en 8 horas? (R: 2,000 latas).
  5. 8 grifos tardan 12 horas en llenar 4 depósitos de agua. ¿Cuánto tardarán 6 grifos en llenar 3 depósitos iguales? (R: 12 horas).
* **¿Necesitas ayuda?** La regla de tres compuesta requiere una guía clara y paso a paso. ¡Aprende el método infalible del 'Quien-Tiempo-Acción' con tu tutor de CEDETU!

## Evaluación Unidad 3
* Si 12 vacas consumen 60 kg de pasto en un día, ¿cuántos kg consumirán 18 vacas en el mismo lapso? (R: 90 kg).
* Si 6 pintores tardan 8 días en pintar un colegio, ¿cuántos pintores se necesitan para terminar la pintura en 3 días? (R: 16 pintores. Retroalimentación: Regla de tres inversa. 6 × 8 ÷ 3 = 16).
* Si 4 obreros de construcción pavimentan 80 metros de carretera en 5 días, ¿cuántos metros pavimentarán 6 obreros en 10 días? (R: 240 metros. Retroalimentación: 80 × (6/4) × (10/5) = 240).
`,

    "algebra-basica": `# Curso: Álgebra Básica
* **Materia:** Matemáticas | **Nivel sugerido:** Secundaria / Diversificado
* **Público objetivo:** Estudiantes de bachillerato o ciclo básico que se inician en el razonamiento algebraico de variables y funciones.
* **Objetivos de aprendizaje:** Traducir expresiones a lenguaje algebraico, simplificar polinomios, factorizar binomios y trinomios, y resolver ecuaciones lineales de primer grado.

## Unidad 1: Lenguaje Algebraico y Operaciones con Polinomios
### Lección 1.1: Traducción a Lenguaje Algebraico
* **Objetivo:** Expresar situaciones y enunciados en lenguaje ordinario utilizando variables, coeficientes y operadores matemáticos.
* **Explicación:** El álgebra utiliza letras (variables) como $x, y, a, b$ para representar números desconocidos. Traducir al lenguaje algebraico consiste en identificar las palabras clave del enunciado:
  * "El doble de un número": $2x$
  * "La mitad de un número": $x/2$ o $(1/2)x$
  * "La suma de dos números consecutivos": $x + (x + 1)$
  * "Un número aumentado en 5": $x + 5$
* **Ejemplo Resuelto:** Traduce algebraicamente: "El triple de un número disminuido en el cuadrado de otro número".
  - *Paso 1:* Representa "un número" con una variable, por ejemplo, $x$. Su triple es $3x$.
  - *Paso 2:* Representa "otro número" con una segunda variable diferente, por ejemplo, $y$. Su cuadrado es $y^2$.
  - *Paso 3:* Une ambos términos con el operador correspondiente a "disminuido" (resta): $3x - y^2$.
  - *Resultado:* $3x - y^2$.
* **Errores Comunes:** Utilizar la misma variable para representar dos números que no se ha aclarado si son iguales.
* **Ejercicios de Práctica:**
  1. Traduce: "La suma de dos números diferentes". (R: x + y).
  2. Traduce: "El área de un rectángulo cuyo largo es el doble de su ancho". (R: A = 2x², donde x es el ancho).
  3. Traduce: "La edad de Juan dentro de 8 años". (R: x + 8. Retroalimentación: Si su edad actual es x, en el futuro se suma 8).
  4. Traduce: "El cociente de la suma de dos números entre su diferencia". (R: (a + b) / (a - b)).
  5. Traduce: "Tres números enteros consecutivos". (R: x, x + 1, x + 2).
* **¿Necesitas ayuda?** La transición al álgebra es el principal reto escolar. ¡Agenda una tutoría hoy y aprende a "pensar en variables" de forma amigable!

### Lección 1.2: Reducción de Términos Semejantes
* **Objetivo:** Agrupar y simplificar monomios sumando o restando sus coeficientes únicamente si tienen la misma parte literal y exponentes.
* **Explicación:** Dos términos son semejantes si tienen exactamente las mismas variables elevadas a los mismos exponentes. Para reducirlos, solo sumamos algebraicamente sus coeficientes numéricos y mantenemos idéntica la parte literal.
* **Ejemplo Resuelto:** Simplifica la expresión: $5x^2y - 3xy^2 + 8x^2y + 10xy^2$.
  - *Paso 1:* Identifica los semejantes a $x^2y$: $5x^2y$ y $8x^2y$. Suma coeficientes: $(5+8)x^2y = 13x^2y$.
  - *Paso 2:* Identifica los semejantes a $xy^2$: $-3xy^2$ y $10xy^2$. Suma coeficientes: $(-3+10)xy^2 = 7xy^2$.
  - *Paso 3:* Agrupa ambos resultados: $13x^2y + 7xy^2$.
  - *Resultado:* $13x^2y + 7xy^2$.
* **Errores Comunes:** Sumar exponentes o juntar términos con variables diferentes (ejemplo: sumar $2x + 3y = 5xy$, lo cual es incorrecto).
* **Ejercicios de Práctica:**
  1. Simplifica: 7x - 3y + 2x - 5y. (R: 9x - 8y).
  2. Simplifica: 3a²b - 5a²b + 8a²b. (R: 6a²b).
  3. Resuelve la suma: (2x² - 3x + 5) + (x² + 5x - 8). (R: 3x² + 2x - 3).
  4. Resta: (8y - 3) - (5y + 2). (R: 3y - 5. Retroalimentación: Cuidado con cambiar los signos del segundo binomio).
  5. Simplifica: ab + 2bc - 3ab + bc. (R: -2ab + 3bc).
* **¿Necesitas ayuda?** Reducir términos semejantes es como clasificar frutas. ¡Un tutor de CEDETU te enseñará divertidas analogías que te ayudarán a no equivocarte nunca!

### Lección 1.3: Multiplicación de Polinomios y Productos Notables
* **Objetivo:** Multiplicar monomios y polinomios aplicando la propiedad distributiva y conocer las fórmulas de productos notables básicos.
* **Explicación:** Al multiplicar monomios, multiplicamos coeficientes y **sumamos** los exponentes de las mismas variables. Para polinomios, usamos la propiedad distributiva término a término.
  * **Binomio al cuadrado:** $(a + b)^2 = a^2 + 2ab + b^2$
  * **Binomios conjugados:** $(a + b)(a - b) = a^2 - b^2$
* **Ejemplo Resuelto:** Multiplica $(x + 3)(x - 3)$ y $(2x + 3)^2$.
  - *Caso 1: Conjugados:* $(x + 3)(x - 3) = x^2 - 3^2 = x^2 - 9$.
  - *Caso 2: Binomio al cuadrado:* $(2x + 3)^2 = (2x)^2 + 2(2x)(3) + 3^2 = 4x^2 + 12x + 9$.
  - *Resultados:* $x^2 - 9$ y $4x^2 + 12x + 9$.
* **Errores Comunes:** Elevar un binomio al cuadrado como si solo fuera el cuadrado de sus términos: $(a+b)^2 = a^2 + b^2$, olvidando el término del medio $2ab$.
* **Ejercicios de Práctica:**
  1. Multiplica: 2x × (3x² - 5). (R: 6x³ - 10x).
  2. Desarrolla: (x + 5)². (R: x² + 10x + 25).
  3. Desarrolla: (2y - 4)(2y + 4). (R: 4y² - 16).
  4. Desarrolla: (a - 3)². (R: a² - 6a + 9).
  5. Multiplica: (x + 2)(x + 3). (R: x² + 5x + 6).
* **¿Necesitas ayuda?** Los productos notables ahorran muchísimo tiempo en álgebra. ¡Aprende a memorizarlos visualmente con tu tutor de forma lúdica!

## Evaluación Unidad 1
* Reduce completamente: 12x²y - 3xy² - 8x²y + 10xy² - 4x²y. (R: 7xy². Retroalimentación: 12x²y - 8x²y - 4x²y = 0x²y; -3xy² + 10xy² = 7xy²).
* Desarrolla usando productos notables: (3x - 4)². (R: 9x² - 24x + 16).
* Traduce a lenguaje algebraico: "El cociente del triple de un número entre la suma de otros dos números diferentes". (R: 3x / (y + z)).

---

## Unidad 2: Métodos de Factorización
### Lección 2.1: Factor Común y Factor Común por Agrupación
* **Objetivo:** Factorizar expresiones identificando el máximo común divisor numérico y las variables repetidas con su menor exponente.
* **Explicación:** Factorizar es el proceso inverso a multiplicar; consiste en escribir una suma como una multiplicación. Si todos los términos tienen algo en común (número o letra), lo extraemos dividiendo cada término original por ese factor común.
* **Ejemplo Resuelto:** Factoriza la expresión: $6x^3 + 12x^2 - 18x$.
  - *Paso 1:* Encuentra el MCD de los coeficientes 6, 12 y 18, el cual es 6.
  - *Paso 2:* Identifica la variable que se repite en todos los términos con su menor exponente: en este caso, $x^1$ (o $x$).
  - *Paso 3:* El factor común es $6x$. Divide cada término: $6x^3 ÷ 6x = x^2$, $12x^2 ÷ 6x = 2x$, $-18x ÷ 6x = -3$.
  - *Paso 4:* Expresa como multiplicación: $6x(x^2 + 2x - 3)$.
  - *Resultado:* $6x(x^2 + 2x - 3)$.
* **Errores Comunes:** No extraer el MCD más alto posible o ignorar exponentes al dividir.
* **Ejercicios de Práctica:**
  1. Factoriza: 5x² - 15x. (R: 5x(x - 3)).
  2. Factoriza: a²b + ab². (R: ab(a + b)).
  3. Factoriza: 8x³y² - 12x²y³. (R: 4x²y²(2x - 3y)).
  4. Factoriza por agrupación: ax + ay + bx + by. (R: (a + b)(x + y). Retroalimentación: Agrupa a(x+y) + b(x+y) = (a+b)(x+y)).
  5. Factoriza: 7m - 14n. (R: 7(m - 2n)).
* **¿Necesitas ayuda?** El factor común es el método básico para simplificar cualquier ecuación compleja. ¡Asegura este pilar con tutorías dinámicas!

### Lección 2.2: Factorización de Trinomios
* **Objetivo:** Factorizar trinomios de la forma $x^2 + bx + c$ y trinomios cuadrados perfectos de forma rápida y analítica.
* **Explicación:** 
  * Para $x^2 + bx + c$: buscamos dos números que **multiplicados** den el término independiente $c$, y que **sumados o restados** den el coeficiente central $b$.
  * **Trinomio Cuadrado Perfecto (TCP):** Si el primer y tercer término tienen raíces cuadradas exactas ($a$ y $b$), y el término central es el doble producto de estas raíces ($2ab$), se factoriza como un binomio al cuadrado: $(a \pm b)^2$.
* **Ejemplo Resuelto:** Factoriza los trinomios: $x^2 + 5x + 6$ y $x^2 - 6x + 9$.
  - *Caso 1:* Buscamos dos números que multiplicados den 6 y sumados den 5. Estos números son 3 y 2. Queda: $(x + 3)(x + 2)$.
  - *Caso 2:* La raíz de $x^2$ es $x$, la de 9 es 3. El doble producto es $2(x)(3) = 6x$ (coincide con el centro). Como el signo central es negativo, queda: $(x - 3)^2$.
  - *Resultados:* $(x + 3)(x + 2)$ y $(x - 3)^2$.
* **Errores Comunes:** Confundir los signos al buscar los dos números en trinomios del tipo $x^2 + bx + c$.
* **Ejercicios de Práctica:**
  1. Factoriza: x² - 5x + 6. (R: (x - 3)(x - 2). Retroalimentación: Dos números que multiplicados den 6 y sumados den -5 son -3 y -2).
  2. Factoriza el TCP: x² + 10x + 25. (R: (x + 5)²).
  3. Factoriza: x² + 2x - 8. (R: (x + 4)(x - 2). Retroalimentación: Multiplicados den -8 y sumados den 2: 4 y -2).
  4. Factoriza el TCP: 4y² - 12y + 9. (R: (2y - 3)²).
  5. Factoriza: x² - x - 12. (R: (x - 4)(x + 3)).
* **¿Necesitas ayuda?** Factorizar trinomios requiere muchísima práctica y entender las reglas de signos. ¡Tu tutor de CEDETU te dará una guía de práctica para volverte un experto!

### Lección 2.3: Diferencia de Cuadrados
* **Objetivo:** Identificar y factorizar binomios formados por la resta de dos cuadrados perfectos utilizando binomios conjugados.
* **Explicación:** Una diferencia de cuadrados de la forma $a^2 - b^2$ se descompone siempre en el producto de dos binomios conjugados: $(a + b)(a - b)$. Extraemos la raíz cuadrada de cada término y los escribimos sumándose y restándose.
* **Ejemplo Resuelto:** Factoriza la expresión: $16x^2 - 49$.
  - *Paso 1:* Obtén la raíz cuadrada del primer término: $\sqrt{16x^2} = 4x$.
  - *Paso 2:* Obtén la raíz del segundo término: $\sqrt{49} = 7$.
  - *Paso 3:* Escribe los binomios conjugados: $(4x + 7)(4x - 7)$.
  - *Resultado:* $(4x + 7)(4x - 7)$.
* **Errores Comunes:** Intentar factorizar una suma de cuadrados ($a^2 + b^2$) de la misma manera (esto no tiene solución en los números reales).
* **Ejercicios de Práctica:**
  1. Factoriza: x² - 25. (R: (x + 5)(x - 5)).
  2. Factoriza: 4a² - 9b². (R: (2a + 3b)(2a - 3b)).
  3. Factoriza: m² - 1. (R: (m + 1)(m - 1)).
  4. Factoriza: 100 - y². (R: (10 + y)(10 - y)).
  5. ¿Se puede factorizar x² + 16 usando diferencia de cuadrados? (R: No. Retroalimentación: Al ser una suma no se puede factorizar con este método en números reales).
* **¿Necesitas ayuda?** La diferencia de cuadrados es el método más rápido y satisfactorio de factorizar en álgebra. ¡Aprende a reconocerlo al instante con ayuda de tu tutor!

## Evaluación Unidad 2
* Factoriza completamente: 5x³ - 20x. (R: 5x(x + 2)(x - 2). Retroalimentación: Primero saca factor común 5x(x² - 4). Luego factoriza la diferencia de cuadrados (x+2)(x-2)).
* Factoriza el trinomio: x² - 7x + 10. (R: (x - 5)(x - 2)).
* Factoriza: 9x² - 64. (R: (3x + 8)(3x - 8)).

---

## Unidad 3: Ecuaciones Lineales y Sistemas
### Lección 3.1: Ecuaciones de Primer Grado de una Variable
* **Objetivo:** Resolver ecuaciones lineales agrupando términos semejantes y aplicando correctamente las reglas del despeje algebraico.
* **Explicación:** Una ecuación es una balanza en equilibrio. Para hallar el valor de la incógnita $x$ debemos "despejarla" pasándola a un lado de la igualdad y los números al otro, siguiendo esta regla al mover términos:
  * Si suma, pasa a restar (y viceversa).
  * Si multiplica, pasa a dividir (y viceversa) con el mismo signo.
* **Ejemplo Resuelto:** Resuelve la ecuación: $5x - 7 = 2x + 8$.
  - *Paso 1:* Agrupa los términos con $x$ en el lado izquierdo: Pasa $2x$ restando: $5x - 2x - 7 = 8 \Rightarrow 3x - 7 = 8$.
  - *Paso 2:* Agrupa los números a la derecha: Pasa -7 sumando: $3x = 8 + 7 \Rightarrow 3x = 15$.
  - *Paso 3:* Despeja $x$: Pasa el 3 dividiendo: $x = 15 ÷ 3 \Rightarrow x = 5$.
  - *Resultado:* x = 5.
* **Errores Comunes:** Cambiar el signo al pasar un número a dividir o multiplicar.
* **Ejercicios de Práctica:**
  1. Resuelve: 3x + 5 = 20. (R: x = 5).
  2. Resuelve: 8x - 4 = 4x + 12. (R: x = 4).
  3. Resuelve: 2(x - 3) = 10. (R: x = 8. Retroalimentación: Aplica propiedad distributiva primero: 2x - 6 = 10).
  4. Resuelve: 5 - x = 2x - 7. (R: x = 4).
  5. Resuelve: x/3 + 4 = 7. (R: x = 9. Retroalimentación: Pasa restando el 4: x/3 = 3; luego pasa multiplicando el 3: x = 9).
* **¿Necesitas ayuda?** Despejar ecuaciones es la habilidad definitiva de la matemática escolar y universitaria. ¡Domina las ecuaciones con tu tutor de forma práctica!

### Lección 3.2: Planteo de Problemas con Ecuaciones
* **Objetivo:** Resolver problemas prácticos traduciendo el enunciado a una ecuación lineal de primer grado.
* **Explicación:** Para resolver problemas con ecuaciones, definimos la incógnita $x$, planteamos la relación matemática descrita por el problema en forma de igualdad y despejamos $x$.
* **Ejemplo Resuelto:** La suma de tres números enteros consecutivos es 72. ¿Cuáles son los números?
  - *Paso 1:* Plantea los números en lenguaje algebraico: $x$ (el primero), $x+1$ (el segundo) y $x+2$ (el tercero).
  - *Paso 2:* Escribe la ecuación de la suma: $x + (x + 1) + (x + 2) = 72$.
  - *Paso 3:* Simplifica: $3x + 3 = 72$.
  - *Paso 4:* Despeja $x$: $3x = 72 - 3 \Rightarrow 3x = 69 \Rightarrow x = 69 ÷ 3 = 23$.
  - *Paso 5:* Encuentra los números consecutivos: 23, 24 y 25.
  - *Resultado:* Los números son 23, 24 y 25.
* **Errores Comunes:** Olvidar plantear todos los términos respecto a la misma variable de referencia.
* **Ejercicios de Práctica:**
  1. El doble de la edad de Pedro más 10 años es igual a 40. ¿Cuál es su edad? (R: 15 años. Retroalimentación: 2x + 10 = 40; 2x = 30; x = 15).
  2. Si al triple de un número le restas 8 obtienes 22. ¿Cuál es el número? (R: 10).
  3. En una tienda de Antigua, un pantalón cuesta el doble que una playera. Si compras ambos por Q150, ¿cuánto cuesta la playera? (R: Q50. Retroalimentación: x (playera) + 2x (pantalón) = 150; 3x = 150; x = 50).
  4. La suma de un número con su mitad es 15. ¿Cuál es el número? (R: 10. Retroalimentación: x + x/2 = 15; 1.5x = 15; x = 10).
  5. Un terreno rectangular tiene un largo que mide 5 metros más que su ancho. Si el perímetro mide 70 metros, ¿cuál es el ancho? (R: 15 metros. Retroalimentación: Perímetro = 2(ancho) + 2(largo) = 2x + 2(x + 5) = 70; 4x + 10 = 70; 4x = 60; x = 15).
* **¿Necesitas ayuda?** Traducir problemas de aplicación real suele ser un dolor de cabeza. ¡Un tutor especializado de CEDETU te enseñará a estructurarlos con esquemas simples!

### Lección 3.3: Sistemas de Ecuaciones Lineales 2x2 (Reducción)
* **Objetivo:** Resolver sistemas de dos ecuaciones lineales con dos incógnitas utilizando el método de reducción (eliminación).
* **Explicación:** Un sistema 2x2 representa dos condiciones que deben cumplirse para dos variables. El método de reducción consiste en multiplicar una o ambas ecuaciones por números adecuados de modo que al sumarlas verticalmente, una de las incógnitas se elimine, permitiendo despejar la otra.
* **Ejemplo Resuelto:** Resuelve el sistema:
  1) $2x + y = 8$
  2) $x - y = 1$
  - *Paso 1:* Suma verticalmente ambas ecuaciones de forma directa ya que los términos con $y$ tienen coeficientes opuestos ($+y$ y $-y$):
    $(2x + x) + (y - y) = 8 + 1 \Rightarrow 3x = 9$.
  - *Paso 2:* Despeja $x$: $x = 9 ÷ 3 = 3$.
  - *Paso 3:* Sustituye $x=3$ en la ecuación 2 para hallar $y$:
    $3 - y = 1 \Rightarrow -y = 1 - 3 \Rightarrow -y = -2 \Rightarrow y = 2$.
  - *Resultado:* x = 3, y = 2.
* **Errores Comunes:** Olvidar sumar o multiplicar los términos independientes a la derecha del signo igual al transformar las ecuaciones.
* **Ejercicios de Práctica:**
  1. Resuelve el sistema: x + y = 10 y x - y = 4. (R: x = 7, y = 3).
  2. Resuelve el sistema: 2x + 3y = 12 y 2x - y = 4. (R: x = 3, y = 2).
  3. En una granja hay gallinas (g) y vacas (v). Si contamos 20 cabezas y 50 patas, ¿cuántas vacas hay? (R: 5 vacas y 15 gallinas. Retroalimentación: g + v = 20; 2g + 4v = 50; operando por reducción obtenemos v = 5).
  4. Resuelve el sistema: 3x - y = 7 y 2x + y = 8. (R: x = 3, y = 2).
  5. Resuelve: 5x + 2y = 16 y 3x - 2y = 0. (R: x = 2, y = 3).
* **¿Necesitas ayuda?** Los sistemas de ecuaciones se aplican muchísimo en administración, economía y física. ¡Agenda una tutoría en CEDETU para dominarlos con ejercicios prácticos resueltos en vivo!

## Evaluación Unidad 3
* Resuelve la ecuación: 7x - (2x + 3) = 3(x + 5). (R: x = 9. Retroalimentación: 7x - 2x - 3 = 3x + 15; 5x - 3 = 3x + 15; 2x = 18; x = 9).
* Resuelve el sistema: 4x + 2y = 14 y 3x - 2y = 0. (R: x = 2, y = 3).
* Si dos pantalones y tres camisas cuestan Q410, y un pantalón y tres camisas cuestan Q290, ¿cuál es el precio de un pantalón? (R: Q120. Retroalimentación: Planteando 2p + 3c = 410 y p + 3c = 290; restando ambas ecuaciones eliminamos camisas: p = 120).
\`,

    // -----------------------------------------------------------------
    // B. FÍSICA
    // -----------------------------------------------------------------
    
    "fisica-movimiento": \`# Curso: Cinemática
* **Materia:** Ciencias | **Nivel sugerido:** Diversificado / Universidad
* **Público objetivo:** Alumnos que inician física clásica y necesitan dominar el movimiento y sus ecuaciones matemáticas.
* **Objetivos de aprendizaje:** Diferenciar entre distancia y desplazamiento, calcular velocidad media e interpretar el Movimiento Rectilíneo Uniforme (MRU) y Uniformemente Acelerado (MRUA).

## Unidad 1: Movimiento y Posición en Una Dimensión
### Lección 1.1: Distancia versus Desplazamiento
* **Objetivo:** Diferenciar de forma teórica y práctica entre una magnitud escalar (distancia) y una vectorial (desplazamiento).
* **Explicación:** La **distancia** es la longitud total de la trayectoria recorrida por un objeto sin importar el sentido (es un número siempre positivo, magnitud escalar). El **desplazamiento** es el cambio neto de posición de un objeto, medido en línea recta desde el punto de partida hasta el de llegada, e indica dirección (magnitud vectorial).
* **Ejemplo Resuelto:** Un repartidor de Antigua camina 50 metros al este y luego regresa 30 metros al oeste. ¿Cuál fue su distancia recorrida y su desplazamiento?
  - *Paso 1 Distancia:* Suma todas las longitudes: 50 m + 30 m = 80 m.
  - *Paso 2 Desplazamiento:* Toma en cuenta los sentidos. El este es positivo (+50 m) y el oeste es negativo (-30 m). Desplazamiento = +50 m - 30 m = +20 m (hacia el este).
  - *Resultado:* Distancia = 80 m, Desplazamiento = 20 m al este.
* **Errores Comunes:** Pensar que la distancia y el desplazamiento siempre valen lo mismo, lo cual solo ocurre en movimientos en línea recta sin cambios de sentido.
* **Ejercicios de Práctica:**
  1. Si corres alrededor de una pista circular de 400 metros y regresas exactamente al punto de partida, ¿cuál es tu distancia y tu desplazamiento? (R: Distancia = 400 m, Desplazamiento = 0 m).
  2. Un automóvil viaja 80 km hacia el norte y luego 60 km hacia el sur. ¿Cuál es su desplazamiento? (R: 20 km al norte).
  3. Un peatón camina 3 metros al norte y luego 4 metros al este. ¿Cuál es la distancia recorrida y cuál es el desplazamiento total en línea recta (módulo)? (R: Distancia = 7 m, Desplazamiento = 5 m. Retroalimentación: Usa el teorema de Pitágoras para el desplazamiento: √(3² + 4²) = 5).
  4. Si caminas 10 pasos hacia adelante y 10 pasos hacia atrás, ¿cuál es tu desplazamiento? (R: 0 pasos).
  5. Una hormiga recorre 1.5 metros por el borde de una regla. Si se arrepiente y regresa al inicio, ¿qué distancia recorrió? (R: 3.0 metros).
* **¿Necesitas ayuda?** La física vectorial requiere entender la diferencia entre "el camino largo" y "el atajo". ¡Un tutor de CEDETU te lo enseñará con sencillas animaciones interactivas!

### Lección 1.2: Velocidad y Rapidez
* **Objetivo:** Calcular la rapidez media (escalar) y la velocidad media (vectorial) a partir de la distancia, desplazamiento y tiempo empleado.
* **Explicación:** La **rapidez media** es la distancia dividida entre el tiempo total. La **velocidad media** es el desplazamiento dividido entre el tiempo empleado. En física, la velocidad lleva dirección, mientras que la rapidez no.
  * Rapidez media: $v = d / t$
  * Velocidad media: $\vec{v} = \Delta \vec{x} / t$
* **Ejemplo Resuelto:** Un bus extraurbano recorre 150 km en 2.5 horas. ¿Cuál fue su rapidez media en km/h y en m/s?
  - *Paso 1 km/h:* Divide la distancia por el tiempo: 150 km ÷ 2.5 h = 60 km/h.
  - *Paso 2 m/s:* Para convertir de km/h a m/s dividimos por 3.6: 60 ÷ 3.6 = 16.67 m/s.
  - *Resultado:* 60 km/h o 16.67 m/s.
* **Errores Comunes:** Olvidar convertir el tiempo a horas o a segundos según las unidades del Sistema Internacional requeridas.
* **Ejercicios de Práctica:**
  1. Si nadas 100 metros en 50 segundos, ¿cuál es tu rapidez media en m/s? (R: 2 m/s).
  2. Un ciclista viaja a una rapidez de 8 m/s. ¿Qué distancia recorrerá en un minuto? (R: 480 metros. Retroalimentación: 1 minuto = 60 segundos. Distancia = 8 × 60 = 480).
  3. Convierte 36 km/h a m/s. (R: 10 m/s. Retroalimentación: 36 ÷ 3.6 = 10).
  4. Un atleta corre 200 metros con rapidez constante de 5 m/s. ¿Cuánto tiempo tarda en recorrerlos? (R: 40 segundos. Retroalimentación: t = d/v = 200/5 = 40).
  5. Un rayo cae a 3,400 metros de distancia de ti. Si la velocidad del sonido es de 340 m/s, ¿cuántos segundos tardarás en escuchar el trueno? (R: 10 segundos).
* **¿Necesitas ayuda?** La conversión de unidades de velocidad (km/h a m/s) suele causar fallos en los parciales de física. ¡Asegura tus notas repasándolo con tu tutor!

### Lección 1.3: Movimiento Rectilíneo Uniforme (MRU)
* **Objetivo:** Resolver problemas de movimiento donde el objeto viaja en línea recta y a velocidad constante (sin aceleración).
* **Explicación:** En el MRU la velocidad no cambia; el objeto recorre distancias iguales en tiempos iguales. La ecuación clave es:
  * Distancia = Velocidad × Tiempo ($d = v \times t$)
* **Ejemplo Resuelto:** Dos automóviles de carga salen de Ciudad de Guatemala hacia Quetzaltenango (distancia de 200 km). El auto A viaja a 50 km/h constantes y el auto B a 80 km/h constantes. ¿Con cuánto tiempo de diferencia llegará el auto B respecto al A?
  - *Paso 1 Auto A:* Tiempo_A = d ÷ v_A = 200 km ÷ 50 km/h = 4 horas.
  - *Paso 2 Auto B:* Tiempo_B = d ÷ v_B = 200 km ÷ 80 km/h = 2.5 horas.
  - *Paso 3 Diferencia:* Tiempo_A - Tiempo_B = 4 h - 2.5 h = 1.5 horas.
  - *Resultado:* El auto B llegará 1.5 horas antes (1 hora y 30 minutos).
* **Errores Comunes:** Utilizar esta ecuación simple cuando el movimiento involucra aceleraciones o frenadas.
* **Ejercicios de Práctica:**
  1. ¿Qué distancia recorre un tren que viaja a 90 km/h constantes durante 4 horas? (R: 360 km).
  2. Si una onda de radio viaja a la velocidad de la luz (300,000 km/s), ¿cuántos segundos tarda en llegar a la Luna si la distancia es de 384,000 km? (R: 1.28 segundos).
  3. Si caminas a una velocidad constante de 1.5 m/s, ¿cuánto tardas en recorrer 150 metros? (R: 100 segundos).
  4. Un motociclista de la capital viaja a 20 m/s constantes. ¿Qué distancia en kilómetros recorre en media hora? (R: 36 km. Retroalimentación: Media hora = 1,800 segundos. Distancia = 20 × 1,800 = 36,000 m = 36 km).
  5. Dos corredores corren en sentidos opuestos alejándose con velocidades de 3 m/s y 5 m/s. ¿Qué distancia los separa tras 10 segundos? (R: 80 metros. Retroalimentación: Se alejan a una velocidad relativa de 3 + 5 = 8 m/s. d = 8 × 10 = 80).
* **¿Necesitas ayuda?** Los problemas de encuentro y persecución en MRU son desafíos clásicos de física de diversificado. ¡Domina los planteos de sistemas físicos con tu tutor de CEDETU!

## Evaluación Unidad 1
* Un auto viaja a 72 km/h constantes. ¿Cuántos metros recorre en un lapso de 15 segundos? (R: 300 metros. Retroalimentación: Convierte 72 km/h a m/s: 72 ÷ 3.6 = 20 m/s. Distancia = 20 × 15 = 300 m).
* Diferencia conceptual: Si das una vuelta a una cuadra de 100 metros por lado y vuelves al inicio, ¿cuál fue tu desplazamiento y la distancia? (R: Distancia = 400 m, Desplazamiento = 0 m).
* Si una señal de sonido tarda 4 segundos en rebotar del fondo del mar y la velocidad del sonido en el agua es 1,500 m/s, ¿cuál es la profundidad? (R: 3,000 metros. Retroalimentación: El sonido viaja de ida y vuelta, por lo que tarda 2 segundos de ida. Profundidad = 1,500 × 2 = 3,000 m).

---

## Unidad 2: Aceleración y MRUA
### Lección 2.1: El Concepto de Aceleración
* **Objetivo:** Calcular la aceleración media de un móvil a partir del cambio en su velocidad y el intervalo de tiempo.
* **Explicación:** La aceleración representa qué tan rápido cambia la velocidad de un objeto. Si un objeto aumenta su velocidad, la aceleración es positiva; si frena o disminuye su velocidad (desaceleración), la aceleración es negativa. La unidad de medida en el SI es metros por segundo al cuadrado ($m/s^2$).
  * Aceleración: $a = (v_f - v_i) / t$
* **Ejemplo Resuelto:** Un auto deportivo en la autopista de Escuintla parte del reposo y alcanza una velocidad de 30 m/s en un tiempo de 6 segundos. ¿Cuál fue su aceleración media?
  - *Paso 1:* Identifica los datos: velocidad inicial ($v_i = 0$ ya que parte del reposo), velocidad final ($v_f = 30$ m/s), tiempo ($t = 6$ s).
  - *Paso 2:* Aplica la fórmula: $a = (30 - 0) ÷ 6 = 30 ÷ 6 = 5$.
  - *Resultado:* Aceleración = $5 m/s^2$.
* **Errores Comunes:** Olvidar restar la velocidad inicial o confundir las unidades de aceleración con las de velocidad.
* **Ejercicios de Práctica:**
  1. Un vehículo frena pasando de 25 m/s a 5 m/s en 4 segundos. ¿Cuál fue su aceleración? (R: -5 m/s². Retroalimentación: Al frenar, la aceleración es negativa: (5 - 25)/4 = -5).
  2. Si una moto arranca con aceleración constante de 3 m/s², ¿cuál será su velocidad tras 8 segundos? (R: 24 m/s).
  3. Un objeto cae desde un edificio partiendo del reposo. Si la aceleración de la gravedad es de 9.8 m/s², ¿qué velocidad tendrá tras 3 segundos? (R: 29.4 m/s).
  4. ¿Cuánto tiempo tarda un corredor en pasar de 2 m/s a 8 m/s si acelera a razón de 1.5 m/s²? (R: 4 segundos. Retroalimentación: t = (8 - 2)/1.5 = 4).
  5. Un tren viaja a 40 m/s y frena a razón de -2 m/s². ¿Cuánto tiempo tarda en detenerse por completo? (R: 20 segundos).
* **¿Necesitas ayuda?** La aceleración mide el "cambio", no el movimiento mismo. ¡Toma una tutoría rápida en CEDETU y despeja todas tus dudas conceptuales!

### Lección 2.2: Ecuaciones del MRUA
* **Objetivo:** Resolver problemas de movimiento acelerado eligiendo y aplicando la ecuación correcta según los datos provistos.
* **Explicación:** En el MRUA la aceleración es constante. Existen 4 ecuaciones fundamentales para relacionar distancia ($d$), velocidad inicial ($v_i$), velocidad final ($v_f$), aceleración ($a$) y tiempo ($t$):
  1. $v_f = v_i + a \cdot t$
  2. $d = v_i \cdot t + (1/2) \cdot a \cdot t^2$
  3. $v_f^2 = v_i^2 + 2 \cdot a \cdot d$
  4. $d = ((v_i + v_f) / 2) \cdot t$
* **Ejemplo Resuelto:** Un auto acelera de 10 m/s a 20 m/s a lo largo de una distancia de 75 metros en línea recta. ¿Cuánto vale su aceleración?
  - *Paso 1:* Identifica datos: $v_i = 10$ m/s, $v_f = 20$ m/s, $d = 75$ m. Queremos $a$. El tiempo $t$ no está en los datos.
  - *Paso 2:* Elegimos la ecuación que no requiere tiempo (Ecuación 3): $v_f^2 = v_i^2 + 2ad$.
  - *Paso 3:* Reemplaza: $20^2 = 10^2 + 2 \cdot a \cdot 75 \Rightarrow 400 = 100 + 150a$.
  - *Paso 4:* Despeja $a$: $400 - 100 = 150a \Rightarrow 300 = 150a \Rightarrow a = 300 ÷ 150 = 2$.
  - *Resultado:* Aceleración = $2 m/s^2$.
* **Errores Comunes:** Escoger una ecuación que contenga dos variables desconocidas, haciendo imposible el despeje.
* **Ejercicios de Práctica:**
  1. Un auto parte del reposo y acelera a 4 m/s² durante 5 segundos. ¿Qué distancia recorre? (R: 50 metros. Retroalimentación: d = 0 × 5 + 0.5 × 4 × 5² = 50).
  2. Si un móvil viaja a 15 m/s y frena hasta detenerse en 30 metros, ¿cuál fue su desaceleración? (R: -3.75 m/s². Retroalimentación: 0 = 15² + 2 × a × 30; a = -225/60 = -3.75).
  3. Con los datos del ejercicio anterior, ¿cuánto tiempo tardó en detenerse? (R: 4 segundos. Retroalimentación: d = ((15 + 0)/2) × t; 30 = 7.5t; t = 4).
  4. Un avión necesita alcanzar 60 m/s para despegar. Si acelera a 3 m/s² desde el reposo, ¿qué longitud mínima de pista necesita? (R: 600 metros).
  5. Una motocicleta acelera a 2 m/s² partiendo del reposo. ¿Cuál será su velocidad final al cabo de recorrer 100 metros? (R: 20 m/s. Retroalimentación: v_f² = 0 + 2 × 2 × 100 = 400; v_f = 20).
* **¿Necesitas ayuda?** Aprender a elegir "cuál de las 4 fórmulas usar" es el truco dorado del MRUA. ¡Tu tutor de CEDETU te enseñará una tabla de selección infalible!

### Lección 2.3: Caída Libre y Tiro Vertical
* **Objetivo:** Resolver problemas de movimiento vertical bajo la influencia exclusiva de la gravedad terrestre.
* **Explicación:** La caída libre es un caso especial de MRUA en el eje vertical (Y), donde la aceleración siempre es igual a la gravedad de la Tierra ($g = 9.8 m/s^2$ o $10 m/s^2$ para simplificar cálculos). Al lanzar un objeto hacia arriba, su velocidad disminuye hasta llegar a cero en su punto más alto (altura máxima) y luego cae acelerando.
* **Ejemplo Resuelto:** Se deja caer una piedra desde un puente de 45 metros de altura. ¿Cuánto tiempo tardará en impactar contra el agua? (Usa $g = 10 m/s^2$).
  - *Paso 1:* Identifica datos: $v_i = 0$ (se deja caer), altura/distancia $d = 45$ m, gravedad $a = 10 m/s^2$.
  - *Paso 2:* Elegimos la fórmula de distancia vertical: $d = v_i \cdot t + (1/2) \cdot g \cdot t^2 \Rightarrow 45 = 0 \cdot t + (1/2) \cdot 10 \cdot t^2$.
  - *Paso 3:* Simplifica: $45 = 5 \cdot t^2$.
  - *Paso 4:* Despeja $t$: $t^2 = 45 ÷ 5 = 9 \Rightarrow t = \sqrt{9} = 3$.
  - *Resultado:* Tardará 3 segundos.
* **Errores Comunes:** Olvidar que la gravedad siempre jala hacia abajo, por lo que si definimos que hacia arriba es positivo, la gravedad debe ingresarse como negativa ($-9.8 m/s^2$).
* **Ejercicios de Práctica:**
  1. Si lanzas una pelota verticalmente hacia arriba a 20 m/s, ¿cuánto tiempo tarda en alcanzar su punto más alto? (Usa g = 10 m/s²). (R: 2 segundos. Retroalimentación: En la altura máxima v_f = 0. 0 = 20 - 10t; t = 2).
  2. Con los datos del ejercicio anterior, ¿cuál es la altura máxima alcanzada por la pelota? (R: 20 metros. Retroalimentación: d = ((20 + 0)/2) × 2 = 20 m).
  3. Se deja caer un objeto desde lo alto de una torre y tarda 4 segundos en tocar el suelo. ¿De qué altura cayó? (Usa g = 9.8 m/s²). (R: 78.4 metros. Retroalimentación: d = 0.5 × 9.8 × 4² = 78.4 m).
  4. ¿Con qué velocidad inicial se debe lanzar un objeto verticalmente hacia arriba para que alcance una altura de 80 metros? (Usa g = 10 m/s²). (R: 40 m/s).
  5. Una manzana cae de un árbol y toca el suelo en 0.8 segundos. ¿Con qué rapidez impacta el suelo? (Usa g = 10 m/s²). (R: 8 m/s).
* **¿Necesitas ayuda?** La física del movimiento vertical tiene reglas estrictas de signos según el marco de referencia que elijas. ¡Toma una clase con un tutor y olvídate de fallar por culpa de un signo!

## Evaluación Unidad 2
* Un auto de carreras parte del reposo con aceleración constante de 6 m/s². ¿Qué velocidad tendrá tras recorrer una distancia de 75 metros? (R: 30 m/s. Retroalimentación: v_f² = 0 + 2 × 6 × 75 = 900; v_f = 30).
* Se lanza un objeto verticalmente hacia arriba con una velocidad de 30 m/s. ¿Cuánto tiempo permanece en el aire en total antes de regresar al suelo? (Usa g = 10 m/s²). (R: 6 segundos. Retroalimentación: Tarda 3 segundos en subir y otros 3 segundos en bajar).
* Un conductor que viaja a 20 m/s ve un obstáculo y frena con desaceleración constante de -4 m/s². ¿Qué distancia recorre el auto antes de detenerse? (R: 50 metros).

---

## Unidad 3: Movimiento en Dos Dimensiones
### Lección 3.1: Composición de Movimientos (Tiro Parabólico)
* **Objetivo:** Resolver problemas de proyectiles analizando de forma independiente el eje horizontal (MRU) y el eje vertical (MRUA).
* **Explicación:** El tiro parabólico es el movimiento de un proyectil lanzado con cierto ángulo. Se descompone en dos movimientos simultáneos y perpendiculares:
  * **Eje X (horizontal):** Sin fuerzas que actúen, viaja con velocidad constante (MRU).
  * **Eje Y (vertical):** Afectado por la gravedad, experimenta aceleración constante (MRUA / Caída Libre).
* **Ejemplo Resuelto:** Una pelota es lanzada horizontalmente desde lo alto de una mesa de 1.25 metros de altura con una velocidad de 4 m/s. ¿A qué distancia de la base de la mesa caerá la pelota? (Usa $g = 10 m/s^2$).
  - *Paso 1 Tiempo de Caída (Eje Y):* $h = (1/2) \cdot g \cdot t^2 \Rightarrow 1.25 = 5t^2 \Rightarrow t^2 = 1.25 ÷ 5 = 0.25 \Rightarrow t = \sqrt{0.25} = 0.5$ segundos.
  - *Paso 2 Alcance Horizontal (Eje X):* $d = v_x \cdot t \Rightarrow d = 4 \text{ m/s} \times 0.5 \text{ s} = 2$ metros.
  - *Resultado:* Caerá a 2 metros de la base.
* **Errores Comunes:** Intentar mezclar la velocidad del eje X con las fórmulas de gravedad del eje Y.
* **Ejercicios de Práctica:**
  1. Si un proyectil es lanzado con velocidad horizontal de 15 m/s desde una altura de 20 metros, ¿cuánto tiempo tarda en caer? (Usa g = 10 m/s²). (R: 2 segundos).
  2. Con los datos del ejercicio anterior, ¿cuál es el alcance horizontal total del proyectil? (R: 30 metros. Retroalimentación: d = v_x × t = 15 × 2 = 30 m).
  3. Un deportista patea un balón con un ángulo tal que su velocidad inicial en el eje X es de 12 m/s y en el eje Y es de 20 m/s. ¿Cuál es el tiempo de vuelo del balón? (Usa g = 10 m/s²). (R: 4 segundos. Retroalimentación: Tarda 2 segundos en subir y 2 en bajar).
  4. Con los datos del ejercicio anterior, ¿cuál fue la distancia horizontal total (alcance) del balón? (R: 48 metros. Retroalimentación: d = v_x × t_vuelo = 12 × 4 = 48 m).
  5. ¿Qué velocidad vertical tiene un proyectil en su punto más alto de trayectoria parabólica? (R: 0 m/s. Retroalimentación: Toda la velocidad en ese punto es únicamente horizontal).
* **¿Necesitas ayuda?** El movimiento parabólico es el tema estrella en los exámenes finales de física de bachillerato. ¡Asegura tu comprensión practicando los componentes vectoriales con un tutor experto de CEDETU!

### Lección 3.2: Movimiento Circular Uniforme (MCU)
* **Objetivo:** Calcular el período, frecuencia, velocidad angular y aceleración centrípeta de un objeto con trayectoria circular constante.
* **Explicación:** En el MCU el objeto gira en círculos con rapidez constante. Aunque la rapidez no cambia, la **dirección** de la velocidad sí cambia continuamente. Este cambio de dirección genera una aceleración que apunta siempre hacia el centro del círculo, llamada **aceleración centrípeta** ($a_c$).
  * Velocidad angular: $\omega = 2\pi / T$
  * Aceleración centrípeta: $a_c = v^2 / r$
* **Ejemplo Resuelto:** Un objeto gira en una pista circular de 2 metros de radio con una velocidad tangencial constante de 6 m/s. ¿Cuál es su aceleración centrípeta?
  - *Paso 1:* Identifica datos: radio $r = 2$ m, velocidad $v = 6$ m/s.
  - *Paso 2:* Aplica la fórmula: $a_c = v^2 ÷ r = 6^2 ÷ 2 = 36 ÷ 2 = 18$.
  - *Resultado:* $18 m/s^2$.
* **Errores Comunes:** Pensar que la aceleración en el movimiento circular es cero porque el velocímetro marca una rapidez constante.
* **Ejercicios de Práctica:**
  1. Si un disco da 30 vueltas completas en un minuto, ¿cuál es su período en segundos? (R: 2 segundos. Retroalimentación: Período = tiempo / vueltas = 60 / 30 = 2).
  2. Con los datos del ejercicio anterior, ¿cuál es su frecuencia en Hertz (Hz)? (R: 0.5 Hz. Retroalimentación: Frecuencia = 1 / Período = 0.5).
  3. Un carro de juguete gira en un círculo de 0.5 metros de radio con rapidez constante. Si su aceleración centrípeta es de 8 m/s², ¿cuál es su rapidez lineal? (R: 2 m/s. Retroalimentación: v² = a_c × r = 8 × 0.5 = 4; v = √4 = 2).
  4. Calcula la velocidad angular (rad/s) de un ventilador que da una vuelta completa cada 0.2 segundos. (R: 31.4 rad/s. Retroalimentación: ω = 2π / T = 2 × 3.14 / 0.2 = 31.4).
  5. ¿Hacia dónde apunta la fuerza centrípeta que mantiene a un satélite girando alrededor de la Tierra? (R: Hacia el centro de la Tierra, provocada por la gravedad).
* **¿Necesitas ayuda?** Entender el movimiento circular es fundamental para entender poleas, engranajes y astronomía. ¡Toma una tutoría virtual en CEDETU y aclara tus conceptos!

### Lección 3.3: Aplicaciones Didácticas y del Entorno
* **Objetivo:** Resolver problemas de movimiento contextualizados a la infraestructura y geografía de Guatemala y Centroamérica.
* **Explicación:** Aplicar los conceptos de movimiento a situaciones locales (como las curvas de la autopista Palín-Escuintla, el recorrido de buses de transporte extraurbano, o los tiempos de caída en los barrancos de la capital) ayuda a que los conceptos físicos tengan verdadero sentido práctico.
* **Ejemplo Resuelto:** Un bus extraurbano recorre la carretera Interamericana de Ciudad de Guatemala a Tecpán (88 km). Si sale a las 7:00 AM y su rapidez promedio es de 44 km/h debido al tráfico de San Lucas, ¿a qué hora llegará a su destino?
  - *Paso 1:* Calcula el tiempo de viaje: $t = d ÷ v = 88 \text{ km} ÷ 44 \text{ km/h} = 2$ horas.
  - *Paso 2:* Suma el tiempo de viaje a la hora de salida: 7:00 AM + 2 horas = 9:00 AM.
  - *Resultado:* Llegará a las 9:00 AM.
* **Errores Comunes:** Trabajar con unidades de distancia en metros y de tiempo en horas sin hacer la homogeneización previa de las variables.
* **Ejercicios de Práctica:**
  1. Si un puente peatonal de la Calzada Roosevel tiene 6 metros de altura, ¿cuánto tardaría una moneda en golpear el asfalto si se deja caer libremente? (Usa g = 10 m/s²). (R: 1.1 segundos. Retroalimentación: t = √(2h/g) = √(12/10) = √1.2 = 1.1s).
  2. Un camión de carga de caña de azúcar viaja por la costa sur a 54 km/h. ¿A cuántos metros por segundo equivale esta velocidad? (R: 15 m/s. Retroalimentación: 54 / 3.6 = 15).
  3. Si vas en una curva de la bajada de las Cañas a Antigua a 10 m/s y el radio de curvatura es de 25 metros, ¿qué aceleración centrípeta experimentas? (R: 4 m/s²).
  4. Para evitar colisiones en la autopista, se requiere que la distancia de frenado de un auto a 80 km/h sea de 40 metros. ¿Qué desaceleración constante de frenos debe garantizar el auto? (R: -6.17 m/s²).
  5. Un niño suelta un barrilete gigante en Sumpango desde lo alto de una colina de 80 metros de altura. ¿Cuánto tardaría en llegar al suelo si cayera verticalmente como un cuerpo libre? (Usa g = 10 m/s²). (R: 4 segundos).
* **¿Necesitas ayuda?** La física se vive todos los días a nuestro alrededor. ¡Tu tutor de CEDETU te enseñará a ver el mundo con ojos de científico para que disfrutes y ganes tus materias!

## Evaluación Unidad 3
* Un objeto es lanzado desde un puente con una velocidad horizontal de 20 m/s y tarda 3 segundos en tocar el lecho del río. ¿Cuál es la altura del puente y a qué distancia horizontal de la vertical de lanzamiento cayó? (Usa g = 10 m/s²). (R: Altura = 45 m, Distancia horizontal = 60 m. Retroalimentación: h = 0.5 × 10 × 3² = 45 m. d = 20 × 3 = 60 m).
* Un auto de juguete recorre una pista circular de 4 metros de diámetro dando una vuelta completa cada 2 segundos. ¿Cuál es su velocidad lineal y su aceleración centrípeta? (R: Velocidad = 6.28 m/s, Aceleración centrípeta = 19.74 m/s². Retroalimentación: Radio r = 2m. v = 2πr / T = 12.56/2 = 6.28 m/s. a_c = v²/r = 39.48/2 = 19.74 m/s²).
* Si lanzas un balón de básquetbol con un ángulo de elevación de forma que su velocidad vertical inicial es de 8 m/s, ¿cuál es la altura máxima que alcanzará antes de empezar a caer? (Usa g = 10 m/s²). (R: 3.2 metros. Retroalimentación: h = v_iy² / 2g = 64 / 20 = 3.2 m).
\`,

    // -----------------------------------------------------------------
    // C. ESTADÍSTICA
    // -----------------------------------------------------------------
    
    "curso-estadistica-aplicada": \`# Curso: Estadística Descriptiva
* **Materia:** Matemáticas | **Nivel sugerido:** Diversificado / Universidad
* **Público objetivo:** Estudiantes de bachillerato, administración o ingeniería que se inician en el análisis exploratorio de datos.
* **Objetivos de aprendizaje:** Organizar datos en tablas de frecuencia, graficar distribuciones de datos, calcular las medidas de tendencia central y medir la variabilidad de una muestra.

## Unidad 1: Organización y Presentación de Datos
### Lección 1.1: Tablas de Frecuencia para Datos No Agrupados
* **Objetivo:** Organizar un conjunto de datos brutos en una tabla estructurada que muestre la frecuencia absoluta, acumulada, relativa y porcentual.
* **Explicación:** 
  * **Frecuencia Absoluta ($f$):** Número de veces que aparece un valor.
  * **Frecuencia Acumulada ($F$):** Suma sucesiva de las frecuencias absolutas.
  * **Frecuencia Relativa ($fr$):** Frecuencia absoluta dividida entre el total de datos ($n$).
  * **Frecuencia Porcentual ($f\%$):** Frecuencia relativa multiplicada por 100.
* **Ejemplo Resuelto:** Durante una semana se encuestó a 10 familias de un condominio sobre la cantidad de hijos que tienen. Los datos fueron: 2, 1, 0, 2, 3, 2, 1, 0, 1, 2. Organiza el dato '2 hijos' en la tabla.
  - *Paso 1 Frecuencia Absoluta:* Cuenta cuántas familias tienen exactamente 2 hijos. Los datos son: [2, 2, 2, 2]. Hay 4 familias. Frecuencia absoluta ($f = 4$).
  - *Paso 2 Frecuencia Relativa:* Divide el valor entre el total de encuestados ($n = 10$): $fr = 4 ÷ 10 = 0.40$.
  - *Paso 3 Frecuencia Porcentual:* Multiplica por 100: $f\% = 0.40 \times 100 = 40\%$.
  - *Resultado:* El valor 2 tiene una frecuencia de 4 familias, que representa el 40% del total.
* **Errores Comunes:** Sumar incorrectamente las frecuencias relativas; la suma de todas las frecuencias relativas debe dar exactamente 1 (o 100% en porcentuales).
* **Ejercicios de Práctica:**
  1. En una muestra de 20 estudiantes, 5 tienen notas excelentes. ¿Cuál es la frecuencia relativa de alumnos excelentes? (R: 0.25).
  2. Con los datos anteriores, ¿a qué porcentaje equivale? (R: 25%).
  3. Si la frecuencia acumulada del tercer intervalo en una tabla es 15 y la frecuencia absoluta del cuarto intervalo es 6, ¿cuál es la frecuencia acumulada del cuarto intervalo? (R: 21. Retroalimentación: F_4 = F_3 + f_4 = 15 + 6 = 21).
  4. ¿Qué tipo de gráfico es el más adecuado para representar la frecuencia de una variable cualitativa nominal (como el color favorito)? (R: Gráfico de barras o circular).
  5. En una encuesta de satisfacción, 8 personas respondieron "Muy Bueno" de un total de 40. ¿Cuál es el porcentaje de esta respuesta? (R: 20%).
* **¿Necesitas ayuda?** Construir tablas de frecuencias largas puede ser monótono y dar lugar a errores de conteo sencillos. ¡Aprende a estructurarlas con ayuda de tu tutor de forma divertida!

### Lección 1.2: Histogramas y Polígonos de Frecuencia
* **Objetivo:** Diseñar e interpretar gráficos de distribución de datos agrupados para variables cuantitativas continuas.
* **Explicación:** Un **histograma** es un gráfico de barras verticales pegadas entre sí, donde el ancho de la barra representa el intervalo de la clase (límites reales) y la altura representa la frecuencia. El **polígono de frecuencia** se forma uniendo con líneas rectas los puntos medios (marcas de clase) de las partes superiores de las barras del histograma.
* **Ejemplo Resuelto:** Un grupo de estudio midió la estatura en metros de 30 estudiantes y agrupó los datos en intervalos. El intervalo [1.50 - 1.60) tiene una frecuencia de 12 alumnos. ¿Cómo se dibuja esta barra en el histograma?
  - *Paso 1:* En el eje horizontal (X), marca el inicio en 1.50 y el final en 1.60.
  - *Paso 2:* En el eje vertical (Y), rotula las frecuencias de 1 en 1 o de 2 en 2 hasta llegar al menos a 12.
  - *Paso 3:* Dibuja una barra que inicie exactamente en 1.50, termine en 1.60 y tenga una altura de 12 unidades.
  - *Resultado:* Una barra rectangular de ancho 0.10 y altura 12.
* **Errores Comunes:** Dibujar el histograma con las barras separadas (esto es un gráfico de barras para datos categóricos, no un histograma de variables continuas).
* **Ejercicios de Práctica:**
  1. ¿Qué representa la "marca de clase" en una tabla de datos agrupados? (R: El punto medio del intervalo. Se calcula sumando el límite inferior más el superior y dividiendo entre 2).
  2. Si el intervalo es [20, 30), ¿cuál es su marca de clase? (R: 25).
  3. Si la base de una barra en un histograma va de 10.5 a 15.5, ¿cuál es la amplitud del intervalo? (R: 5).
  4. ¿Para qué tipo de datos es ideal el uso de una gráfica de sectores o pastel? (R: Para variables categóricas que representan porcentajes de un todo).
  5. Si el polígono de frecuencias toca el eje X al inicio y al final, ¿en qué valores lo hace? (R: En las marcas de clase ficticias anterior a la primera y posterior a la última con frecuencia cero).
* **¿Necesitas ayuda?** Interpretar gráficos estadísticos es una de las preguntas fijas del examen de matemáticas de admisión a la universidad. ¡Toma una tutoría en CEDETU y asegúrate esos puntos!

### Lección 1.3: Diagramas de Caja y Bigotes (Boxplot)
* **Objetivo:** Representar y analizar de forma visual la dispersión y asimetría de un conjunto de datos a partir de sus cinco medidas clave (mínimo, Q1, mediana, Q3 y máximo).
* **Explicación:** Un boxplot resume gráficamente la distribución de los datos. La "caja" contiene el 50% central de los datos, delimitada por el Primer Cuartil (Q1) a la izquierda y el Tercer Cuartil (Q3) a la derecha. Una línea interna marca la Mediana (Q2). Los "bigotes" se extienden hasta el valor mínimo y máximo no atípicos.
* **Ejemplo Resuelto:** Dados los cuartiles de un examen sobre 100 puntos: Mínimo = 40, Q1 = 55, Mediana = 70, Q3 = 85, Máximo = 95. ¿Qué porcentaje de alumnos obtuvieron una nota superior a 85 puntos?
  - *Paso 1:* Identifica que 85 puntos corresponde al Tercer Cuartil (Q3).
  - *Paso 2:* Por definición de cuartiles, el Q3 divide los datos dejando el 75% por debajo y el 25% por encima de su valor.
  - *Resultado:* El 25% de los alumnos obtuvo una nota superior a 85 puntos.
* **Errores Comunes:** Pensar que las cuatro secciones del boxplot (mínimo-Q1, Q1-mediana, mediana-Q3, Q3-máximo) tienen diferente cantidad de datos porque tienen diferente tamaño visual. Cada sección contiene exactamente el 25% de los datos.
* **Ejercicios de Práctica:**
  1. ¿Qué porcentaje de los datos se encuentra dentro de la "caja" de un boxplot? (R: El 50% de los datos).
  2. ¿Cómo se calcula el Rango Intercuartílico (RIC)? (R: Restando Q3 - Q1).
  3. Si Q1 = 12 y Q3 = 20, ¿cuánto vale el Rango Intercuartílico? (R: 8).
  4. En un boxplot, ¿cómo se representan los datos atípicos o muy extremos? (R: Con puntos o asteriscos fuera de los límites de los bigotes).
  5. Si la línea de la mediana está muy cerca del lado izquierdo de la caja (Q1), ¿qué nos indica sobre la asimetría de los datos? (R: Que los datos tienen una asimetría positiva o hacia la derecha).
* **¿Necesitas ayuda?** Los cuartiles y los diagramas de caja son abstractos y difíciles de graficar a mano. ¡Un tutor de CEDETU te enseñará a dominarlos de manera interactiva y muy sencilla!

## Unidad 2: Medidas de Tendencia Central
### Lección 2.1: Media Aritmética (Promedio)
* **Objetivo:** Calcular la media aritmética para conjuntos de datos agrupados y no agrupados, y comprender su sensibilidad ante valores extremos.
* **Explicación:** La media (promedio) es la suma de todos los valores de la muestra dividida entre el tamaño total de la muestra ($n$).
  * Media: $\bar{x} = \sum x_i / n$
* **Ejemplo Resuelto:** Las notas de 5 tareas de matemáticas de un alumno son: 80, 95, 90, 40 y 95. Calcula su promedio.
  - *Paso 1:* Suma todos los valores: 80 + 95 + 90 + 40 + 95 = 400.
  - *Paso 2:* Divide el total de la suma entre la cantidad de tareas ($n = 5$): 400 ÷ 5 = 80.
  - *Resultado:* La nota promedio es 80 puntos. (Nota cómo la tarea de 40 puntos jaló el promedio hacia abajo notablemente).
* **Errores Comunes:** No dividir por el total de elementos reales, o ignorar los valores que valen cero al hacer el promedio.
* **Ejercicios de Práctica:**
  1. Calcula la media de los siguientes datos: 12, 15, 18, 20, 25. (R: 18. Retroalimentación: Suma = 90; n = 5; 90 / 5 = 18).
  2. Un comerciante vende Q200 el lunes, Q350 el martes y Q650 el miércoles. ¿Cuál fue su venta promedio diaria en esos 3 días? (R: Q400).
  3. Si el promedio de 4 exámenes es 85, ¿cuánto deben sumar las notas de los 4 exámenes en total? (R: 340 puntos. Retroalimentación: Suma = Promedio × n = 85 × 4 = 340).
  4. Si agregas un dato extremo gigante (como 1,000) a una muestra de números entre 10 y 20, ¿qué le ocurre a la media? (R: Aumenta drásticamente. La media es muy sensible a datos atípicos).
  5. En una oficina de 6 empleados, las edades son: 25, 28, 30, 25, 40, 26. ¿Cuál es el promedio de edad? (R: 29 años).
* **¿Necesitas ayuda?** La media ponderada es otro concepto clave (usada para promedios de colegios y universidades). ¡Aprende a calcular tu zona académica con la guía de tu tutor de CEDETU!

### Lección 2.2: Mediana (El Valor Central)
* **Objetivo:** Determinar la mediana de un conjunto de datos ordenándolos previamente y diferenciando si el tamaño de la muestra es par o impar.
* **Explicación:** La mediana es el valor central que divide la muestra en dos partes exactamente iguales: el 50% de los datos queda por debajo y el 50% por encima.
  * *Paso Obligatorio:* Ordenar los datos de menor a mayor.
  * Si $n$ es **impar**: La mediana es el dato de la posición central: $(n + 1)/2$.
  * Si $n$ es **par**: La mediana es el promedio de los dos datos centrales del medio.
* **Ejemplo Resuelto:** Encuentra la mediana de las siguientes velocidades: 12 m/s, 5 m/s, 20 m/s, 8 m/s, 15 m/s, 10 m/s.
  - *Paso 1 Ordenar:* 5, 8, 10, 12, 15, 20.
  - *Paso 2 Identificar n:* Hay 6 datos ($n$ es par).
  - *Paso 3 Promediar los centrales:* Los dos datos del medio son 10 y 12. Mediana = (10 + 12) ÷ 2 = 11 m/s.
  - *Resultado:* Mediana = 11 m/s.
* **Errores Comunes:** Calcular la mediana directamente de la lista desordenada sin ordenarla previamente.
* **Ejercicios de Práctica:**
  1. Encuentra la mediana de: 7, 3, 9, 12, 5. (R: 7. Retroalimentación: Ordenados son 3, 5, 7, 9, 12. El del centro es 7).
  2. Encuentra la mediana de: 150, 200, 180, 160. (R: 170. Retroalimentación: Ordenados son 150, 160, 180, 200. Promedio de 160 y 180 es 170).
  3. Si la mediana de los salarios de una empresa es de Q4,500, ¿qué significa con respecto a los trabajadores? (R: Que el 50% de los trabajadores gana Q4,500 o menos, y el otro 50% gana Q4,500 o más).
  4. Encuentra la mediana de: 0, 0, 1, 2, 5, 8, 10. (R: 2).
  5. ¿Se ve afectada la mediana si cambiamos el dato más grande de una muestra por uno diez veces mayor? (R: No. La mediana es robusta y no le afectan los valores extremos atípicos).
* **¿Necesitas ayuda?** La robustez de la mediana es un concepto hermoso de la estadística. ¡Entiéndelo perfectamente con tu tutor de CEDETU y sácate un 100!

### Lección 2.3: Moda (El Valor Más Frecuente)
* **Objetivo:** Identificar el valor o valores con mayor frecuencia absoluta y comprender cuándo una muestra es bimodal, multimodal o no tiene moda.
* **Explicación:** La moda es simplemente el valor que ocurre con mayor frecuencia en una distribución de datos. Una muestra puede tener una única moda (unimodal), dos modas (bimodal), varias modas (multimodal) o ninguna moda si todos los datos se repiten la misma cantidad de veces (amodal).
* **Ejemplo Resuelto:** Determina la moda de los siguientes datos de colores de camisas vendidos en un almacén de Xela: Azul, Rojo, Azul, Verde, Rojo, Azul, Negro.
  - *Paso 1 Contar frecuencias:* Negro: 1, Verde: 1, Rojo: 2, Azul: 3.
  - *Paso 2 Identificar el mayor:* El color con mayor frecuencia es el Azul, con 3 repeticiones.
  - *Resultado:* Moda = Azul.
* **Errores Comunes:** Pensar que la moda siempre es un número único, o decir que la moda es cero en lugar de "no tiene moda" cuando todos los datos se repiten igual.
* **Ejercicios de Práctica:**
  1. ¿Cuál es la moda de: 4, 5, 5, 6, 7, 7, 8? (R: 5 y 7. Retroalimentación: Esta muestra es bimodal).
  2. ¿Cuál es la moda de: 10, 12, 14, 16? (R: No tiene moda. Retroalimentación: Todos los datos se repiten exactamente una vez).
  3. En un salón de clases, las estaturas son: 1.60m, 1.65m, 1.60m, 1.70m, 1.60m, 1.65m. ¿Cuál es la moda? (R: 1.60m).
  4. ¿Para qué tipo de variables (cualitativas o cuantitativas) es la moda la única medida de tendencia central que se puede aplicar? (R: Para variables cualitativas nominales).
  5. Si los datos son: 3, 3, 3, 5, 5, 5, 8, 8, 8. ¿Cuál es la moda? (R: No tiene moda. Retroalimentación: Aunque se repiten 3 veces, todos tienen la misma frecuencia máxima, por lo que no hay un valor único dominante).
* **¿Necesitas ayuda?** La moda es el dato de mayor popularidad. ¡Aprende a analizarla y graficarla en curvas de distribución con tu tutor!

## Evaluación Unidad 2
* Las edades de 7 amigos son: 12, 15, 12, 14, 13, 12, 16. Calcula la media, mediana y moda de sus edades. (R: Media = 13.0 años, Mediana = 12.0 años, Moda = 12.0 años. Retroalimentación: Suma = 91; 91/7 = 13. Ordenados: 12, 12, 12, 13, 14, 15, 16. El central es 13. El que más se repite es 12).
* Si las notas promedio de un estudiante en 3 materias son 70, 80 y 90, pero cada materia vale diferente porcentaje (Materia 1 vale 20%, Materia 2 vale 30% y Materia 3 vale 50%), ¿cuál es su promedio ponderado real? (R: 82 puntos. Retroalimentación: Promedio = 70×0.20 + 80×0.30 + 90×0.50 = 14 + 24 + 45 = 83).
* En un conjunto de datos ordenados de menor a mayor, el dato central es la mediana. ¿A qué percentil equivale esta medida? (R: Percentil 50. Retroalimentación: La mediana divide los datos exactamente al 50%).

---

## Unidad 3: Medidas de Dispersión
### Lección 3.1: Rango y Desviación Media
* **Objetivo:** Calcular el rango total y la desviación media de una muestra para cuantificar la dispersión de los datos respecto a la media.
* **Explicación:** 
  * **Rango:** La diferencia entre el valor máximo y el valor mínimo: $R = \text{Máx} - \text{Mín}$.
  * **Desviación Media (DM):** El promedio de las diferencias absolutas de cada dato respecto a la media aritmética de la muestra:
    $\text{DM} = \sum |x_i - \bar{x}| / n$
* **Ejemplo Resuelto:** Calcula el rango y la desviación media de los datos: 2, 4, 6 (la media de estos datos es $\bar{x} = 4$).
  - *Paso 1 Rango:* Máximo (6) - Mínimo (2) = 4.
  - *Paso 2 Desviaciones:*
    * Para 2: $|2 - 4| = 2$
    * Para 4: $|4 - 4| = 0$
    * Para 6: $|6 - 4| = 2$
  - *Paso 3 Desviación Media:* Promedia los valores absolutos: $(2 + 0 + 2) ÷ 3 = 4 ÷ 3 = 1.33$.
  - *Resultado:* Rango = 4, Desviación Media = 1.33.
* **Errores Comunes:** Olvidar aplicar el valor absoluto en la desviación media, lo que causaría que las desviaciones positivas y negativas se anularan sumando cero.
* **Ejercicios de Práctica:**
  1. Calcula el rango de los datos: 15, 30, 20, 85, 40. (R: 70. Retroalimentación: 85 - 15 = 70).
  2. ¿Qué significa un rango muy pequeño en una muestra de notas de exámenes? (R: Que el grupo es muy homogéneo y casi todos obtuvieron notas similares).
  3. Calcula la desviación media de los datos: 10 y 20 (la media es 15). (R: 5. Retroalimentación: |10-15| = 5; |20-15| = 5. Promedio = (5+5)/2 = 5).
  4. Si todos los datos de una muestra son idénticos (ej. 5, 5, 5, 5), ¿cuánto vale su desviación media? (R: 0).
  5. En una carrera de atletismo, el tiempo promedio es 12 segundos y la desviación media es 0.5 segundos. ¿En qué rango aproximado están la mayoría de los tiempos? (R: Entre 11.5 y 12.5 segundos).
* **¿Necesitas ayuda?** La dispersión mide qué tan "confiables" son los promedios. ¡Comprende este concepto crucial con ayuda de tu tutor de CEDETU!

### Lección 3.2: Varianza y Desviación Estándar Muestral
* **Objetivo:** Calcular la varianza y la desviación estándar de una muestra analizando el grado de dispersión promedio de los datos elevados al cuadrado.
* **Explicación:** La **varianza ($s^2$)** mide la dispersión promediando los cuadrados de las diferencias de cada dato respecto a la media. Para una muestra dividimos entre $n - 1$ (corrección de Bessel). La **desviación estándar ($s$)** es la raíz cuadrada de la varianza, lo que regresa la medida a las unidades originales de los datos.
  * Varianza muestral: $s^2 = \sum (x_i - \bar{x})^2 / (n - 1)$
  * Desviación estándar: $s = \sqrt{s^2}$
* **Ejemplo Resuelto:** Calcula la varianza y la desviación estándar de los datos: 3, 5, 7 (la media es $\bar{x} = 5$, tamaño $n = 3$).
  - *Paso 1 Diferencias al cuadrado:*
    * $(3 - 5)^2 = (-2)^2 = 4$
    * $(5 - 5)^2 = 0^2 = 0$
    * $(7 - 5)^2 = 2^2 = 4$
  - *Paso 2 Suma de cuadrados:* $4 + 0 + 4 = 8$.
  - *Paso 3 Varianza (dividir entre n - 1):* $s^2 = 8 ÷ (3 - 1) = 8 ÷ 2 = 4$.
  - *Paso 4 Desviación Estándar:* $s = \sqrt{4} = 2$.
  - *Resultado:* Varianza = 4, Desviación Estándar = 2.
* **Errores Comunes:** Dividir entre $n$ en lugar de $n - 1$ cuando se trata de una muestra y no de la población completa.
* **Ejercicios de Práctica:**
  1. Si la varianza de un conjunto de datos es 16, ¿cuál es su desviación estándar? (R: 4. Retroalimentación: √16 = 4).
  2. Si la desviación estándar del peso de unos sacos de café es de 3 libras, ¿cuánto vale su varianza? (R: 9. Retroalimentación: 3² = 9).
  3. Calcula la varianza muestral de los datos: 10 y 20 (la media es 15, n = 2). (R: 50. Retroalimentación: (10-15)² + (20-15)² = 25 + 25 = 50. Dividimos entre n - 1 = 1: 50/1 = 50).
  4. Con los datos anteriores, ¿cuál es su desviación estándar? (R: 7.07. Retroalimentación: √50 = 7.07).
  5. ¿Puede una varianza dar alguna vez un resultado negativo? (R: No. Al estar las diferencias elevadas al cuadrado, el resultado siempre es positivo o cero).
* **¿Necesitas ayuda?** La desviación estándar es la medida de dispersión más utilizada en ciencias y finanzas. ¡Asegura tu comprensión de esta fórmula con tu tutor de CEDETU!

### Lección 3.3: Coeficiente de Variación (CV)
* **Objetivo:** Calcular el coeficiente de variación para comparar la variabilidad relativa de dos muestras que tienen diferentes unidades de medida o medias muy distintas.
* **Explicación:** El coeficiente de variación ($CV$) expresa la desviación estándar como un porcentaje de la media aritmética. Al ser una unidad adimensional, nos permite saber con precisión cuál de dos conjuntos de datos es más homogéneo o tiene menor dispersión relativa.
  * Coeficiente de Variación: $CV = (s / \bar{x}) \times 100\%$
* **Ejemplo Resuelto:** Un salón de clases tiene una estatura media de 1.60 m con desviación estándar de 0.08 m. Otro salón tiene un peso medio de 50 kg con desviación estándar de 5 kg. ¿Cuál salón tiene datos más dispersos relativamente?
  - *Paso 1 CV Estaturas:* $(0.08 ÷ 1.60) \times 100\% = 0.05 \times 100\% = 5\%$.
  - *Paso 2 CV Pesos:* $(5 ÷ 50) \times 100\% = 0.10 \times 100\% = 10\%$.
  - *Paso 3 Comparación:* El CV de los pesos (10%) es mayor que el de las estaturas (5%).
  - *Resultado:* El peso de los alumnos tiene una variabilidad relativa mayor que su estatura.
* **Errores Comunes:** Expresar el coeficiente de variación sin el símbolo de porcentaje o dividir la media entre la desviación en lugar del revés.
* **Ejercicios de Práctica:**
  1. Si la media es 40 y la desviación estándar es 8, ¿cuál es el coeficiente de variación? (R: 20%. Retroalimentación: (8 / 40) × 100% = 20%).
  2. Si una muestra de salarios tiene un CV del 45% y otra del 15%, ¿cuál muestra es más homogénea? (R: La muestra con CV del 15%).
  3. Calcula el CV si la media es 10 y la desviación estándar es 1.5. (R: 15%).
  4. ¿Para qué sirve el coeficiente de variación en comparación con la desviación estándar común? (R: Para comparar la dispersión entre variables con diferentes unidades de medida o medias muy diferentes).
  5. Si el CV de las ventas semanales de un negocio es de 8%, ¿indica esto una gran estabilidad en las ventas? (R: Sí. Un CV menor al 10% se considera de muy baja variabilidad o alta estabilidad).
* **¿Necesitas ayuda?** Aprender a interpretar el coeficiente de variación te dará una ventaja analítica enorme en tus cursos de estadística. ¡Consúltalo con tu tutor de CEDETU!

## Evaluación Unidad 3
* Calcula el Rango, Varianza Muestral y Desviación Estándar de las siguientes temperaturas: 18°C, 20°C, 22°C (la media es 20°C). (R: Rango = 4°C, Varianza = 4, Desviación Estándar = 2°C. Retroalimentación: Suma de diferencias al cuadrado = (18-20)² + (20-20)² + (22-20)² = 4 + 0 + 4 = 8. Varianza = 8 / (3-1) = 4. Desviación = √4 = 2).
* Si dos proyectos de inversión tienen el mismo rendimiento promedio del 15% anual, pero el Proyecto A tiene una desviación estándar del 2% y el Proyecto B del 8%, ¿cuál proyecto es más riesgoso y por qué? (R: El Proyecto B. Tiene mayor desviación estándar, lo que representa una mayor variabilidad y por ende mayor riesgo).
* Si un conjunto de datos tiene una media de 50 y una desviación estándar de 5, ¿cuál es su coeficiente de variación? (R: 10%).
`,

    "geometria-plana": `# Curso: Geometría Plana
* **Materia:** Matemáticas | **Nivel sugerido:** Secundaria / Diversificado
* **Público objetivo:** Estudiantes de nivel básico y diversificado que desean dominar el cálculo de áreas, perímetros y razonamiento geométrico.
* **Objetivos de aprendizaje:** Comprender las propiedades de ángulos, triángulos y círculos, aplicar el Teorema de Pitágoras y calcular áreas de figuras compuestas en terrenos y construcciones reales.

## Unidad 1: Fundamentos de Geometría y Ángulos
### Lección 1.1: Puntos, Líneas, Planos y Segmentos
* **Objetivo:** Identificar y representar los elementos fundamentales de la geometría y operar con segmentos de recta.
* **Explicación:** La geometría se construye sobre el punto (posición sin dimensiones), la línea (sucesión infinita de puntos) y el plano (superficie bidimensional). Un segmento es la porción de recta delimitada por dos puntos.
* **Ejemplo Resuelto:** En una calle recta de Antigua Guatemala, hay tres faroles alineados A, B y C. Si la distancia de A a C es de 15 varas y de B a C es de 6 varas, calcula la distancia de A a B.
  - *Paso 1:* Grafica el segmento: A-------B----C.
  - *Paso 2:* Usa la propiedad de adición de segmentos: AB + BC = AC.
  - *Paso 3:* Sustituye valores: AB + 6 = 15. Despeja: AB = 15 - 6 = 9 varas.
  - *Resultado:* La distancia AB es 9 varas.
* **Errores Comunes:** Restar mal las posiciones de los segmentos o confundir rectas (infinitas) con segmentos (finitos).
* **Ejercicios de Práctica:**
  1. Si M es el punto medio del segmento PQ y PQ = 24 cm, ¿cuánto mide PM? (R: 12 cm. Retroalimentación: El punto medio divide al segmento en dos partes iguales).
  2. Si AB = 8 cm, BC = 5 cm y CD = 12 cm, y los puntos están alineados, calcula AD. (R: 25 cm).
  3. En un segmento RT de 18 m, un punto S está situado tal que RS = 2ST. Calcula ST. (R: 6 m. Retroalimentación: 3ST = 18; ST = 6).
  4. ¿Cuántos puntos de intersección como máximo pueden tener 3 rectas en un mismo plano? (R: 3 puntos).
  5. ¿Cómo se define un rayo o semirrecta? (R: Línea que tiene un punto de partida pero se extiende infinitamente en una dirección).
* **¿Necesitas ayuda?** Dibujar y visualizar segmentos es el inicio del arte geométrico. ¡Pide ayuda a tu tutor para hacer tus propias construcciones!

### Lección 1.2: Clasificación y Medición de Ángulos
* **Objetivo:** Clasificar los ángulos por su medida y resolver ecuaciones sencillas con ángulos complementarios y suplementarios.
* **Explicación:** Un ángulo es la abertura formada por dos rayos con un origen común llamado vértice. Se clasifican en: Agudo (<90°), Recto (90°), Obtuso (>90° y <180°) y Llano (180°).
  - **Ángulos Complementarios:** Suman 90°.
  - **Ángulos Suplementarios:** Suman 180°.
* **Ejemplo Resuelto:** Si el ángulo A mide 35°, calcula su ángulo complementario y suplementario.
  - *Paso 1 Complementario:* 90° - 35° = 55°.
  - *Paso 2 Suplementario:* 180° - 35° = 145°.
  - *Resultado:* Complementario = 55°, Suplementario = 145°.
* **Errores Comunes:** Confundir suplementarios (180°) con complementarios (90°).
* **Ejercicios de Práctica:**
  1. Encuentra el ángulo que es igual a su propio complemento. (R: 45°).
  2. Si dos ángulos suplementarios están en relación 2:3, ¿cuánto mide el menor? (R: 72°. Retroalimentación: 2x + 3x = 180; 5x = 180; x = 36. Menor = 2*36 = 72°).
  3. Un ángulo mide 110°. ¿De qué tipo es? (R: Obtuso).
  4. Calcula el valor de x si dos ángulos suplementarios miden (3x + 10) y (2x - 15). (R: x = 37. Retroalimentación: 5x - 5 = 180; 5x = 185; x = 37).
  5. ¿Cuánto mide el ángulo cóncavo que completa una vuelta entera a partir de un ángulo de 60°? (R: 300°).
* **¿Necesitas ayuda?** Los ángulos están en todas partes, desde las esquinas de tu cuarto hasta las pendientes de los volcanes de Guatemala. ¡Repásalos con tu tutor!

### Lección 1.3: Rectas Paralelas Cortadas por una Transversal
* **Objetivo:** Identificar y calcular las medidas de los ángulos correspondientes, alternos internos, alternos externos y opuestos por el vértice formados por paralelas y una secante.
* **Explicación:** Cuando una línea transversal corta a dos rectas paralelas, se forman 8 ángulos. Los opuestos por el vértice, correspondientes, alternos internos y alternos externos son congruentes (miden lo mismo).
* **Ejemplo Resuelto:** Si en un cruce de paralelas, un ángulo alterno interno mide 75°, ¿cuánto mide su colindante suplementario sobre la misma recta?
  - *Paso 1:* Los ángulos colindantes sobre una línea recta suman 180° (suplementarios).
  - *Paso 2:* Resta 180° - 75° = 105°.
  - *Resultado:* El ángulo suplementario mide 105°.
* **Errores Comunes:** Creer que todos los ángulos formados miden lo mismo, en vez de comprender que solo hay dos medidas posibles en todo el sistema (que suman 180°).
* **Ejercicios de Práctica:**
  1. Si un ángulo de un cruce mide 120°, ¿cuánto mide su ángulo opuesto por el vértice? (R: 120°).
  2. ¿Cómo se llaman los ángulos que están del mismo lado de la transversal y en la misma posición relativa? (R: Correspondientes).
  3. Si un ángulo interno es 60°, ¿cuánto mide el alterno externo correspondiente a la otra paralela? (R: 60° o 120° dependiendo de la posición; alterno interno y externo complementarios suman 180°).
  4. Si dos ángulos colaterales internos miden 2x y 3x, calcula x. (R: 36. Retroalimentación: Los colaterales internos suman 180°. 5x = 180; x = 36).
  5. ¿Qué propiedad cumplen los ángulos correspondientes? (R: Son iguales).
* **¿Necesitas ayuda?** Este tema es la clave para entender planos urbanos e ingeniería de carreteras. ¡Aprende el truco de la "Z" y la "F" con tu tutor de CEDETU!

## Evaluación Unidad 1
* Dos ángulos opuestos por el vértice miden 4x - 20 y 2x + 10. Calcula x y la medida de los ángulos. (R: x = 15, Ángulo = 40°. Retroalimentación: 4x - 20 = 2x + 10; 2x = 30; x = 15).
* Si el suplemento de un ángulo es el triple de su complemento, ¿cuánto mide el ángulo? (R: 45°. Retroalimentación: 180 - x = 3(90 - x); 180 - x = 270 - 3x; 2x = 90; x = 45).
* En un cruce de paralelas por una secante, si un ángulo conjugado interno mide 130°, ¿cuánto mide el otro? (R: 50°).

---

## Unidad 2: Triángulos y el Teorema de Pitágoras
### Lección 2.1: Clasificación de Triángulos y Ángulos Internos
* **Objetivo:** Clasificar triángulos por sus lados y ángulos, y aplicar el teorema de que la suma de los ángulos internos de todo triángulo es siempre 180°.
* **Explicación:** Triángulos por lados: Equilátero (3 lados iguales), Isósceles (2 iguales) y Escaleno (ninguno igual). Por ángulos: Acutángulo (agudos), Rectángulo (un ángulo recto de 90°) y Obtusángulo (un ángulo obtuso). La suma de los tres ángulos internos siempre es exactamente 180°.
* **Ejemplo Resuelto:** En un triángulo de un techo de una casa en Tecpán, dos de sus ángulos internos miden 50° y 70°. Calcula el tercer ángulo.
  - *Paso 1:* Plantea la ecuación: A + B + C = 180°.
  - *Paso 2:* Sustituye los conocidos: 50° + 70° + C = 180° => 120° + C = 180°.
  - *Paso 3:* Despeja C: C = 180° - 120° = 60°.
  - *Resultado:* El tercer ángulo mide 60°.
* **Errores Comunes:** Olvidar que un triángulo equilátero tiene siempre sus tres ángulos internos iguales a 60°.
* **Ejercicios de Práctica:**
  1. ¿Cuánto mide cada uno de los ángulos de un triángulo equilátero? (R: 60°).
  2. Si un triángulo isósceles tiene un ángulo de 100° en el vértice desigual, ¿cuánto mide cada uno de los otros dos ángulos de la base? (R: 40° cada uno. Retroalimentación: (180 - 100) / 2 = 40°).
  3. En un triángulo rectángulo, ¿cuánto suman los dos ángulos agudos? (R: 90°).
  4. Los ángulos de un triángulo son proporcionales a 1, 2 y 3. ¿Cuánto mide el mayor? (R: 90°. Retroalimentación: x + 2x + 3x = 180; 6x = 180; x = 30. El mayor mide 3*30 = 90°).
  5. ¿Es posible construir un triángulo cuyos lados midan 3 cm, 4 cm y 8 cm? (R: No. Retroalimentación: Por desigualdad triangular, la suma de los dos lados menores debe ser mayor que el tercero: 3 + 4 = 7, que es menor que 8).
* **¿Necesitas ayuda?** Las propiedades de los triángulos son las bases de las estructuras de puentes y techados estables. ¡Domínalos hoy mismo con tu tutor!

### Lección 2.2: El Teorema de Pitágoras y sus Aplicaciones
* **Objetivo:** Calcular la hipotenusa o un cateto de un triángulo rectángulo aplicando la fórmula fundamental $a^2 + b^2 = c^2$.
* **Explicación:** En todo triángulo rectángulo, el cuadrado de la longitud de la hipotenusa (el lado más largo opuesto al ángulo recto) es igual a la suma de los cuadrados de los catetos: $c = sqrt{a^2 + b^2}$.
* **Ejemplo Resuelto:** Para pintar una pared alta de una casa en Xela, se apoya una escalera de 5 metros contra la pared. Si la base de la escalera está a 3 metros de la pared, ¿a qué altura llega la escalera?
  - *Paso 1:* Identifica los datos. Hipotenusa (c) = 5 m. Cateto (a) = 3 m. Debemos hallar el cateto b (altura).
  - *Paso 2:* Despeja b del teorema: $b = sqrt{c^2 - a^2}$.
  - *Paso 3:* Sustituye y opera: $b = sqrt{5^2 - 3^2} = sqrt{25 - 9} = sqrt{16} = 4$ metros.
  - *Resultado:* La escalera alcanza una altura de 4 metros.
* **Errores Comunes:** Sumar siempre los cuadrados, incluso cuando lo que se está buscando es un cateto y no la hipotenusa.
* **Ejercicios de Práctica:**
  1. Calcula la hipotenusa si los catetos miden 6 cm y 8 cm. (R: 10 cm).
  2. Si un televisor mide 12 pulgadas de ancho y 9 pulgadas de alto, ¿de cuántas pulgadas es su diagonal? (R: 15 pulgadas).
  3. Calcula el cateto faltante si la hipotenusa es 13 cm y un cateto mide 5 cm. (R: 12 cm).
  4. Un poste de luz de 8 metros está sujeto por un cable tensor de 10 metros anclado al suelo. ¿A qué distancia del poste se ancla el cable? (R: 6 metros).
  5. Si un cuadrado tiene lados de 2 cm, ¿cuánto mide su diagonal? (R: 2.83 cm. Retroalimentación: d = √2² + 2² = √8 ≈ 2.83).
* **¿Necesitas ayuda?** El Teorema de Pitágoras es la herramienta matemática más útil del mundo real. ¡Conéctate con tu tutor de CEDETU para repasar ejercicios prácticos paso a paso!

### Lección 2.3: Congruencia y Semejanza de Triángulos
* **Objetivo:** Resolver problemas de medición indirecta utilizando los criterios de congruencia y semejanza de triángulos.
* **Explicación:** Dos triángulos son **congruentes** (idénticos) si tienen igual tamaño y forma. Son **semejantes** si tienen la misma forma pero diferente tamaño; sus lados correspondientes son proporcionales y sus ángulos iguales.
* **Ejemplo Resuelto:** Un árbol en el parque de Antigua Guatemala proyecta una sombra de 15 metros a la misma hora en que una persona de 1.80 metros de estatura proyecta una sombra de 3 metros. Calcula la altura del árbol.
  - *Paso 1:* Los triángulos formados por la luz del sol son semejantes.
  - *Paso 2:* Plantea la proporción: Altura Árbol / Altura Persona = Sombra Árbol / Sombra Persona.
  - *Paso 3:* Reemplaza: H / 1.80 = 15 / 3 => H / 1.80 = 5.
  - *Paso 4:* Despeja H: H = 5 × 1.80 = 9 metros.
  - *Resultado:* El árbol mide 9 metros de altura.
* **Errores Comunes:** Mezclar la posición de los lados correspondientes al armar la fracción proporcional.
* **Ejercicios de Práctica:**
  1. Si dos triángulos son semejantes en razón 1:3 y el perímetro del menor es 15 cm, ¿cuál es el perímetro del mayor? (R: 45 cm).
  2. ¿Qué criterio de semejanza se cumple si dos triángulos tienen sus tres ángulos correspondientes iguales? (R: Ángulo-Ángulo-Ángulo (AAA)).
  3. Los lados de un triángulo miden 4, 6 y 8 cm. Si un triángulo semejante tiene un lado menor de 12 cm, ¿cuánto mide su lado mayor? (R: 24 cm. Retroalimentación: La razón de semejanza es 12/4 = 3. Mayor = 8 * 3 = 24).
  4. ¿Cuál es el significado de congruencia en geometría? (R: Que las figuras tienen la misma forma y el mismo tamaño exacto).
  5. Un bastón de 1 metro plantado verticalmente proyecta una sombra de 1.5 metros. ¿Qué sombra proyectará un poste de 6 metros a la misma hora? (R: 9 metros).
* **¿Necesitas ayuda?** La semejanza de triángulos te permite medir montañas y edificios sin moverte del suelo. ¡Aprende sus aplicaciones con tu tutor!

## Evaluación Unidad 2
* Los lados de un terreno rectangular miden 15 metros y 20 metros. ¿Cuánto mide el sendero que cruza diagonalmente de una esquina a otra? (R: 25 metros. Retroalimentación: d = √15² + 20² = √225 + 400 = √625 = 25).
* Si un triángulo isósceles tiene lados congruentes de 13 cm y una base de 10 cm, calcula su altura con respecto a la base. (R: 12 cm. Retroalimentación: La altura divide la base en dos de 5 cm. h = √13² - 5² = 12).
* Si dos triángulos semejantes tienen áreas en razón 1:4, ¿en qué razón están sus lados? (R: 1:2. Retroalimentación: Las áreas de figuras semejantes varían con el cuadrado de la razón de sus lados).

---

## Unidad 3: Áreas, Perímetros y Polígonos
### Lección 3.1: Perímetro y Área de Cuadriláteros
* **Objetivo:** Calcular el perímetro y área de rectángulos, cuadrados, rombos y trapecios utilizando las fórmulas correspondientes.
* **Explicación:** 
  - **Cuadrado:** Perímetro $P = 4L$, Área $A = L^2$.
  - **Rectángulo:** $P = 2b + 2h$, $A = b 	imes h$.
  - **Trapecio:** $A = rac{(B + b) 	imes h}{2}$ donde B es base mayor y b base menor.
* **Ejemplo Resuelto:** Un terreno rectangular en Escuintla mide 40 metros de largo por 25 metros de ancho. Si se quiere circular con tres vueltas de alambre de púas, ¿cuántos metros de alambre se necesitan?
  - *Paso 1 Perímetro:* $P = 2(40) + 2(25) = 80 + 50 = 130$ metros.
  - *Paso 2 Tres Vueltas:* $130 	imes 3 = 390$ metros.
  - *Resultado:* Se necesitan 390 metros de alambre.
* **Errores Comunes:** Confundir la suma de lados (perímetro) con la multiplicación de lados (área).
* **Ejercicios de Práctica:**
  1. Calcula el área de un cuadrado cuyo perímetro mide 36 cm. (R: 81 cm². Retroalimentación: Lado = 36/4 = 9 cm; Área = 9² = 81).
  2. Un trapecio tiene bases de 12 cm y 8 cm, y una altura de 5 cm. ¿Cuál es su área? (R: 50 cm²).
  3. Calcula el área de un rombo cuyas diagonales miden 10 cm y 16 cm. (R: 80 cm². Retroalimentación: A = (D * d) / 2 = 160 / 2 = 80).
  4. Si un rectángulo tiene un área de 48 m² y su base mide 8 m, ¿cuánto mide su perímetro? (R: 28 metros. Retroalimentación: Altura = 48/8 = 6 m. Perímetro = 2(8+6) = 28).
  5. ¿Cuánto vale el perímetro de un rombo cuyos lados miden 7 cm cada uno? (R: 28 cm).
* **¿Necesitas ayuda?** Saber calcular áreas de terrenos es vital para cualquier negocio o proyecto constructivo. ¡Entrena estas habilidades con tu tutor!

### Lección 3.2: Perímetro y Área del Círculo
* **Objetivo:** Calcular la circunferencia y el área de un círculo utilizando el número Pi ($pi approx 3.1416$) dada su longitud de radio o diámetro.
* **Explicación:** Un círculo es la región delimitada por una circunferencia.
  - **Circunferencia (Perímetro):** $C = 2pi r$ o $C = pi d$.
  - **Área:** $A = pi r^2$.
* **Ejemplo Resuelto:** Una plaza circular en Quetzaltenango tiene un diámetro de 20 metros. Calcula su área y la longitud del borde de la plaza.
  - *Paso 1 Radio:* El radio es la mitad del diámetro: $r = 10$ metros.
  - *Paso 2 Área:* $A = pi 	imes 10^2 = 100 	imes 3.1416 = 314.16$ metros cuadrados.
  - *Paso 3 Borde:* $C = 2pi 	imes 10 = 20 	imes 3.1416 = 62.83$ metros.
  - *Resultado:* Área = 314.16 m², Borde = 62.83 m.
* **Errores Comunes:** Elevar el diámetro al cuadrado en la fórmula de área en lugar de usar el radio.
* **Ejercicios de Práctica:**
  1. Calcula la circunferencia de un círculo con radio de 7 cm. (R: 43.98 cm).
  2. Si la circunferencia de un neumático mide 188.4 cm, ¿cuánto mide su diámetro aproximado? (R: 60 cm. Retroalimentación: d = C/π = 188.4 / 3.14 = 60).
  3. Calcula el área de un círculo cuyo radio mide 5 cm. (R: 78.54 cm²).
  4. Si duplicamos el radio de un círculo, ¿cuántas veces aumenta su área? (R: 4 veces. Retroalimentación: El área es proporcional al cuadrado del radio).
  5. ¿Cuál es el área de un semicírculo cuyo radio mide 4 cm? (R: 25.13 cm². Retroalimentación: Área del círculo = 50.26 cm²; mitad = 25.13).
* **¿Necesitas ayuda?** Pi es el número más misterioso y fascinante de las matemáticas. ¡Explora todas sus propiedades y aplicaciones junto a tu tutor!

### Lección 3.3: Área de Figuras Compuestas
* **Objetivo:** Calcular el área de regiones complejas dividiéndolas en figuras elementales conocidas (rectángulos, triángulos y círculos).
* **Explicación:** En la vida cotidiana, los terrenos o piezas arquitectónicas no son perfectos rectángulos o círculos. Para calcular su área total, los descomponemos en partes más sencillas y sumamos (o restamos si hay vacíos) las áreas correspondientes.
* **Ejemplo Resuelto:** Una ventana tiene forma rectangular de 2 metros de alto por 1.2 metros de ancho, coronada por un semicírculo en la parte superior. Calcula el área total de la ventana.
  - *Paso 1 Rectángulo:* $A_1 = b 	imes h = 1.2 	imes 2 = 2.4$ metros cuadrados.
  - *Paso 2 Semicírculo:* El diámetro es el ancho de la ventana ($1.2$ m), por lo que el radio es $r = 0.6$ m.
    $A_2 = rac{pi r^2}{2} = rac{3.1416 	imes 0.36}{2} = 0.565$ metros cuadrados.
  - *Paso 3 Suma:* $A_{	ext{total}} = 2.4 + 0.565 = 2.965$ metros cuadrados.
  - *Resultado:* El área total de la ventana es 2.97 m².
* **Errores Comunes:** Olvidar dividir entre dos las áreas correspondientes a semicírculos o triángulos parciales.
* **Ejercicios de Práctica:**
  1. Un terreno rectangular mide 10 m x 6 m, y tiene una piscina circular de 2 m de radio en el centro. ¿Cuál es el área transitable del jardín? (R: 47.43 m². Retroalimentación: Área Jardín = 60 - π(2²) ≈ 60 - 12.57 = 47.43).
  2. Calcula el área de una figura formada por un cuadrado de 4 cm de lado con un triángulo equilátero acoplado a uno de sus lados. (R: 22.93 cm². Retroalimentación: Área Cuadrado = 16; Área Triángulo = (√3/4)*4² ≈ 6.93. Total = 22.93).
  3. Se tiene un marco rectangular exterior de 8 cm x 10 cm e interior de 6 cm x 8 cm. ¿Cuál es el área del marco de madera? (R: 32 cm²).
  4. Una loseta tiene la forma de un rectángulo de 10 cm x 15 cm al que se le han recortado cuatro esquinas cuadradas de 2 cm de lado cada una. ¿Cuál es el área final? (R: 134 cm². Retroalimentación: 150 - 4(4) = 134).
  5. ¿Cómo se calcula el área de una corona circular? (R: Restando el área del círculo menor del área del círculo mayor).
* **¿Necesitas ayuda?** La geometría de figuras compuestas requiere una excelente visión espacial. ¡Desarróllala hoy con herramientas interactivas al lado de tu tutor de CEDETU!

## Evaluación Unidad 3
* Un agricultor compra un terreno que consiste en un trapecio con bases de 80 m y 120 m, y una altura de 50 m. Si la hectárea de tierra cuesta Q20,000, ¿cuánto pagó en total? (Nota: 1 hectárea = 10,000 m²). (R: Q10,000. Retroalimentación: Área Trapecio = (120+80)*50/2 = 5,000 m² = 0.5 hectáreas. Costo = 0.5 * 20,000 = Q10,000).
* Calcula el área sombreada de un círculo de radio 6 cm inscrito en un cuadrado. (R: 7.73 cm². Retroalimentación: Área Cuadrado (lado 12) = 144 cm²; Área Círculo = π(6²) = 113.1 cm²; Área esquinas = 144 - 113.1 = 30.9 cm²; el área de una sola esquina es 30.9 / 4 ≈ 7.73).
* ¿Cuál es el perímetro de un triángulo equilátero que tiene la misma área que un rectángulo de base 9 cm y altura 4 cm? (R: No se puede calcular directamente sin conocer la altura del triángulo, pero se puede resolver aplicando h = (√3/2)*L. L ≈ 9.12 cm. Perímetro ≈ 27.35 cm).
`,

    "trigonometria-fundamental": `# Curso: Trigonometría Fundamental
* **Materia:** Matemáticas | **Nivel sugerido:** Diversificado
* **Público objetivo:** Estudiantes de último año de secundaria y bachillerato que se preparan para ingresar a carreras científicas o técnicas.
* **Objetivos de aprendizaje:** Dominar las razones trigonométricas, resolver cualquier tipo de triángulo rectángulo u oblicuángulo usando leyes de senos y cosenos, y verificar identidades fundamentales.

## Unidad 1: Razones Trigonométricas en el Triángulo Rectángulo
### Lección 1.1: Seno, Coseno y Tangente (SOH-CAH-TOA)
* **Objetivo:** Definir y calcular las razones seno, coseno y tangente a partir de los lados de un triángulo rectángulo.
* **Explicación:** En un triángulo rectángulo, respecto a un ángulo agudo $	heta$:
  - **Seno (sen):** Cateto Opuesto / Hipotenusa (SOH)
  - **Coseno (cos):** Cateto Adyacente / Hipotenusa (CAH)
  - **Tangente (tan):** Cateto Opuesto / Cateto Adyacente (TOA)
* **Ejemplo Resuelto:** En un triángulo rectángulo con catetos de 3 cm y 4 cm, calcula el seno y coseno del ángulo menor (opuesto al lado de 3 cm).
  - *Paso 1:* Calcula la hipotenusa: $h = sqrt{3^2 + 4^2} = 5$ cm.
  - *Paso 2:* Cateto opuesto al ángulo es 3 cm. Cateto adyacente es 4 cm.
  - *Paso 3:* $operatorname{sen}(	heta) = 3/5 = 0.60$. $cos(	heta) = 4/5 = 0.80$.
  - *Resultado:* $operatorname{sen}(	heta) = 0.6$, $cos(	heta) = 0.8$.
* **Errores Comunes:** Confundir el cateto opuesto con el adyacente debido a un mal posicionamiento visual del ángulo de referencia.
* **Ejercicios de Práctica:**
  1. Si en un triángulo rectángulo la hipotenusa es 13 y el cateto opuesto a un ángulo A es 5, ¿cuál es el valor de cos(A)? (R: 12/13. Retroalimentación: Cateto adyacente = √13² - 5² = 12).
  2. ¿Cuál es el valor de la tangente si el seno es 0.6 y el coseno es 0.8? (R: 0.75. Retroalimentación: tan = sen/cos = 0.6/0.8 = 0.75).
  3. Si la tangente de un ángulo es 1, ¿qué nos dice sobre los catetos del triángulo? (R: Que el cateto opuesto y el adyacente miden exactamente lo mismo).
  4. Calcula sen(B) si los catetos de un triángulo miden 5 y 12 cm, y B es el ángulo opuesto al lado de 12 cm. (R: 12/13).
  5. En un triángulo rectángulo, ¿cuál es el valor máximo posible para el seno o coseno de cualquier ángulo agudo? (R: Menor a 1. Retroalimentación: La hipotenusa siempre es mayor que los catetos).
* **¿Necesitas ayuda?** La regla SOH-CAH-TOA es la llave que abre toda la trigonometría. ¡Practica su memorización con la guía interactiva de tu tutor!

### Lección 1.2: Razones Recíprocas (Cosecante, Secante, Cotangente)
* **Objetivo:** Definir e identificar las razones cosecante, secante y cotangente como los recíprocos de las funciones trigonométricas básicas.
* **Explicación:** Las razones recíprocas se definen como la división inversa de los lados correspondientes:
  - **Cosecante ($csc$):** Hipotenusa / Cateto Opuesto = $1/operatorname{sen}(	heta)$
  - **Secante ($sec$):** Hipotenusa / Cateto Adyacente = $1/cos(	heta)$
  - **Cotangente ($operatorname{cot}$):** Cateto Adyacente / Cateto Opuesto = $1/	an(	heta)$
* **Ejemplo Resuelto:** Si el $cos(	heta) = 5/13$, calcula la $sec(	heta)$ y la $csc(	heta)$ (sabiendo que el cateto opuesto es 12).
  - *Paso 1 Secante:* Es el recíproco del coseno: $sec(	heta) = 1 / (5/13) = 13/5$.
  - *Paso 2 Cosecante:* Necesitamos el seno primero. $operatorname{sen}(	heta) = 	ext{Opuesto}/	ext{Hipotenusa} = 12/13$.
  - *Paso 3:* El recíproco es $csc(	heta) = 13/12$.
  - *Resultado:* $sec(	heta) = 13/5$, $csc(	heta) = 13/12$.
* **Errores Comunes:** Emparejar incorrectamente la secante con el seno y la cosecante con el coseno por similitud del nombre inicial.
* **Ejercicios de Práctica:**
  1. Si tan(A) = 3/4, ¿cuál es el valor de la cotangente de A? (R: 4/3).
  2. Si sen(x) = 1/2, ¿cuánto vale la cosecante de x? (R: 2).
  3. Calcula la sec(y) si el cateto adyacente es 8 cm y la hipotenusa es 10 cm. (R: 5/4. Retroalimentación: sec = Hipotenusa / Adyacente = 10/8 = 5/4).
  4. ¿Cuál es el producto de sen(A) por csc(A)? (R: 1. Retroalimentación: Al ser recíprocas, su multiplicación siempre es exactamente 1).
  5. Si cos(θ) = 0.8, calcula sec(θ). (R: 1.25. Retroalimentación: 1 / 0.8 = 5/4 = 1.25).
* **¿Necesitas ayuda?** Las razones recíprocas suelen olvidarse con facilidad si no se practican regularmente. ¡Asegura tus conocimientos programando una tutoría en CEDETU!

### Lección 1.3: Ángulos Notables (30°, 45°, 60°) sin Calculadora
* **Objetivo:** Deducir y memorizar las razones trigonométricas para los ángulos de 30°, 45° y 60° a partir de triángulos geométricos básicos.
* **Explicación:** 
  - **Triángulo 45°-45°:** Catetos = 1, Hipotenusa = $sqrt{2}$. $operatorname{sen}(45^{circ}) = cos(45^{circ}) = rac{sqrt{2}}{2}$, $	an(45^{circ}) = 1$.
  - **Triángulo 30°-60°:** Cateto menor = 1, hipotenusa = 2, cateto mayor = $sqrt{3}$.
    - $operatorname{sen}(30^{circ}) = 1/2$, $cos(30^{circ}) = rac{sqrt{3}}{2}$.
    - $operatorname{sen}(60^{circ}) = rac{sqrt{3}}{2}$, $cos(60^{circ}) = 1/2$.
* **Ejemplo Resuelto:** Calcula el valor exacto de la expresión: $operatorname{sen}(30^{circ}) + cos(60^{circ}) 	imes 	an(45^{circ})$.
  - *Paso 1:* Reemplaza las constantes trigonométricas: $operatorname{sen}(30^{circ}) = 1/2$, $cos(60^{circ}) = 1/2$, $	an(45^{circ}) = 1$.
  - *Paso 2:* Realiza la operación siguiendo la jerarquía: $1/2 + (1/2 	imes 1) = 1/2 + 1/2 = 1$.
  - *Resultado:* El valor exacto es 1.
* **Errores Comunes:** Depender totalmente de la calculadora y no saber trabajar con valores exactos en términos de fracciones y raíces cuadradas en los exámenes universitarios.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el valor exacto de tan(60°)? (R: √3).
  2. Resuelve: cos(45°) * sen(45°). (R: 1/2. Retroalimentación: (√2/2) * (√2/2) = 2/4 = 1/2).
  3. Calcula el valor exacto de csc(30°). (R: 2).
  4. ¿Para qué ángulo notable agudo el seno y el coseno valen exactamente lo mismo? (R: 45°).
  5. Resuelve: tan(30°) * cot(30°). (R: 1).
* **¿Necesitas ayuda?** Aprende la "regla de la mano" para calcular senos y cosenos notables mentalmente y en menos de 5 segundos. ¡Pregúntale a tu tutor!

## Evaluación Unidad 1
* En un triángulo rectángulo, un ángulo mide 30° y la hipotenusa mide 10 metros. Calcula la longitud de ambos catetos de forma exacta. (R: Cateto Opuesto = 5 m, Cateto Adyacente = 5√3 m ≈ 8.66 m. Retroalimentación: Opuesto = 10 * sen(30°) = 5; Adyacente = 10 * cos(30°) = 5√3).
* Si sen(x) = 3/5, calcula el valor de cos²(x) - sen²(x). (R: 7/25. Retroalimentación: Si sen(x) = 3/5, cos(x) = 4/5. La expresión queda: (16/25) - (9/25) = 7/25).
* Resuelve sin usar calculadora: [tan(45°) + sen(30°)] / cos(0°). (R: 1.5. Retroalimentación: [1 + 0.5] / 1 = 1.5).

---

## Unidad 2: El Círculo Unitario y Funciones Trigonométricas
### Lección 2.1: Radianes y Conversión de Ángulos
* **Objetivo:** Definir el radián como la unidad natural del ángulo y realizar conversiones fluidas entre grados y radianes utilizando el factor $pi = 180^{circ}$.
* **Explicación:** Un radián es el ángulo subtendido por un arco de circunferencia cuya longitud es igual al radio. Una vuelta entera a la circunferencia equivale a $360^{circ}$ o $2pi$ radianes. El factor de conversión es: $180^{circ} = pi 	ext{ rad}$.
* **Ejemplo Resuelto:** Convierte $120^{circ}$ a radianes de forma simplificada en términos de $pi$.
  - *Paso 1:* Multiplica los grados por el factor $rac{pi 	ext{ rad}}{180^{circ}}$: $120 	imes rac{pi}{180}$.
  - *Paso 2:* Simplifica la fracción dividiendo entre 60 arriba y abajo: $rac{120}{180} = rac{2}{3}$.
  - *Resultado:* $120^{circ}$ equivale a $rac{2pi}{3}$ radianes.
* **Errores Comunes:** Colocar el 180 arriba y el Pi abajo en el factor de conversión por error, multiplicando en vez de dividir.
* **Ejercicios de Práctica:**
  1. Convierte 45° a radianes. (R: π/4 rad).
  2. Convierte 3π/2 radianes a grados sexagesimales. (R: 270°).
  3. ¿A cuántos grados equivale exactamente 1 radián? (R: Aproximadamente 57.3°).
  4. Convierte 150° a radianes en su forma más simple. (R: 5π/6 rad).
  5. Expresa en radianes el ángulo de un giro completo. (R: 2π rad).
* **¿Necesitas ayuda?** Los radianes son obligatorios en cálculo avanzado e ingeniería. ¡Aprende a dominarlos de manera intuitiva y visual con tu tutor!

### Lección 2.2: Definición en el Círculo Unitario
* **Objetivo:** Definir las razones trigonométricas para cualquier ángulo en el plano cartesiano utilizando el círculo de radio $r = 1$.
* **Explicación:** El círculo unitario es un círculo centrado en el origen (0,0) con radio igual a 1. Para cualquier ángulo $	heta$ en posición normal, las coordenadas del punto de intersección $(x, y)$ con el círculo son:
  - $x = cos(	heta)$
  - $y = operatorname{sen}(	heta)$
  Esto extiende la trigonometría a ángulos mayores de 90° y negativos.
* **Ejemplo Resuelto:** Determina los valores exactos del seno y coseno para $	heta = 180^{circ}$ utilizando el círculo unitario.
  - *Paso 1:* Dibuja el círculo de radio 1.
  - *Paso 2:* Ubica el ángulo de 180° (media vuelta hacia la izquierda). Las coordenadas del punto en el círculo son $(-1, 0)$.
  - *Paso 3:* Dado que $x = cos(	heta)$ y $y = operatorname{sen}(	heta)$, extraemos: $cos(180^{circ}) = -1$ y $operatorname{sen}(180^{circ}) = 0$.
  - *Resultado:* $cos(180^{circ}) = -1$, $operatorname{sen}(180^{circ}) = 0$.
* **Errores Comunes:** Equivocarse con los signos positivo/negativo de las funciones trigonométricas en los cuadrantes II, III y IV.
* **Ejercicios de Práctica:**
  1. ¿En qué cuadrantes el seno de un ángulo es positivo? (R: Cuadrantes I y II).
  2. ¿Cuál es el valor del coseno de 90°? (R: 0. Retroalimentación: Las coordenadas a 90° son (0,1)).
  3. Calcula el valor de tan(270°). (R: No está definido. Retroalimentación: tan = sen/cos = -1/0, lo cual es una división por cero).
  4. ¿Qué signo tiene la tangente de un ángulo situado en el tercer cuadrante (III)? (R: Positivo. Retroalimentación: Tanto seno como coseno son negativos, por lo que su cociente es positivo).
  5. Halla el valor exacto de sen(300°). (R: -√3/2. Retroalimentación: Está en el IV cuadrante con un ángulo de referencia de 60°).
* **¿Necesitas ayuda?** El círculo unitario te permite resumir toda la trigonometría en un solo esquema mental. ¡Dibújalo paso a paso junto a tu tutor!

### Lección 2.3: Gráficas de Seno y Coseno
* **Objetivo:** Graficar las funciones trigonométricas analizando su amplitud, periodo y desfases.
* **Explicación:** Las funciones seno y coseno son periódicas y tienen una forma de onda (sinusoidal).
  - **Amplitud (A):** Altura máxima desde la línea central.
  - **Periodo (T):** Intervalo necesario para completar un ciclo completo ($2pi$ para las funciones básicas).
  - La ecuación general es: $y = A operatorname{sen}(B(x - C)) + D$.
* **Ejemplo Resuelto:** Determina la amplitud y el periodo de la función periódica: $y = 3 operatorname{sen}(2x)$.
  - *Paso 1 Amplitud:* El coeficiente que acompaña a la función es 3, por lo tanto, la amplitud $A = 3$.
  - *Paso 2 Periodo:* Usamos la fórmula: $T = 2pi / B$. Aquí $B = 2$.
  - *Paso 3:* $T = 2pi / 2 = pi$.
  - *Resultado:* Amplitud = 3, Periodo = $pi$.
* **Errores Comunes:** Confundir el coeficiente $B$ directamente con el periodo, en lugar de realizar la división respectiva.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el periodo de la función básica y = cos(x)? (R: 2π).
  2. Determina la amplitud de y = -5 cos(x). (R: 5. Retroalimentación: La amplitud siempre es un valor absoluto positivo).
  3. ¿Cuál es el periodo de la función y = sen(x/2)? (R: 4π. Retroalimentación: T = 2π / (1/2) = 4π).
  4. ¿En qué punto interseca al eje Y la gráfica de la función básica y = sen(x)? (R: En el origen (0,0)).
  5. ¿En qué punto interseca al eje Y la gráfica de la función y = cos(x)? (R: En el punto (0,1)).
* **¿Necesitas ayuda?** Las gráficas de ondas modelan desde el sonido musical hasta las señales de telecomunicaciones y electricidad. ¡Aprende a graficarlas con tu tutor de CEDETU!

## Evaluación Unidad 2
* Convierte a grados sexagesimales el ángulo de 5π/4 radianes. (R: 225°. Retroalimentación: 5 * 180 / 4 = 225°).
* Si un péndulo describe un arco de 10 cm con un brazo de 20 cm, ¿cuál es el ángulo de oscilación en radianes? (R: 0.5 radianes. Retroalimentación: Ángulo θ = Arco / Radio = 10 / 20 = 0.5 rad).
* Halla la amplitud y el periodo de la función: y = 2 cos(3x - π). (R: Amplitud = 2, Periodo = 2π/3).

---

## Unidad 3: Leyes de Senos, Cosenos e Identidades
### Lección 3.1: Ley de Senos
* **Objetivo:** Resolver triángulos oblicuángulos utilizando la Ley de Senos cuando se conocen dos ángulos y un lado o dos lados y el ángulo opuesto.
* **Explicación:** En cualquier triángulo de lados $a, b, c$ y ángulos opuestos $A, B, C$, se cumple la relación de proporcionalidad:
  $rac{a}{operatorname{sen}(A)} = rac{b}{operatorname{sen}(B)} = rac{c}{operatorname{sen}(C)}$
* **Ejemplo Resuelto:** Dos guardabosques en el Parque Nacional Tikal detectan una columna de humo en un punto C. Si el guardabosques A y B están separados por 10 km, y los ángulos medidos son $A = 40^{circ}$ y $B = 60^{circ}$, calcula la distancia desde el guardabosques A al incendio (lado b).
  - *Paso 1 Tercer Ángulo:* $C = 180^{circ} - (40^{circ} + 60^{circ}) = 80^{circ}$.
  - *Paso 2 Plantea Ley:* $rac{b}{operatorname{sen}(60^{circ})} = rac{10}{operatorname{sen}(80^{circ})}$.
  - *Paso 3 Despeja b:* $b = rac{10 	imes operatorname{sen}(60^{circ})}{operatorname{sen}(80^{circ})} = rac{10 	imes 0.866}{0.984} approx 8.8 	ext{ km}$.
  - *Resultado:* La distancia es de 8.8 km.
* **Errores Comunes:** Intentar aplicar la ley de senos cuando no se conoce ninguna pareja completa de lado y su correspondiente ángulo opuesto.
* **Ejercicios de Práctica:**
  1. En un triángulo, a = 12 cm, A = 30° y B = 45°. Calcula b. (R: 12√2 cm ≈ 16.97 cm).
  2. ¿Cuándo es ideal utilizar la Ley de Senos en lugar de la Ley de Cosenos? (R: Cuando se conocen dos ángulos y cualquier lado, o dos lados y el ángulo opuesto a uno de ellos).
  3. Si sen(A) = 0.5, sen(B) = 0.8 y el lado a mide 10 cm, ¿cuánto mide el lado b? (R: 16 cm).
  4. En un triángulo, b = 5 cm, B = 60° y C = 30°. Calcula el lado c. (R: 2.89 cm. Retroalimentación: c = 5 * sen(30°) / sen(60°) = 2.5 / 0.866 ≈ 2.89).
  5. ¿Qué ley se debe usar si se conocen los tres lados de un triángulo? (R: La Ley de Cosenos).
* **¿Necesitas ayuda?** La resolución de triángulos es una habilidad clave en la topografía y cartografía escolar. ¡Pide ayuda a tu tutor y domínala por completo!

### Lección 3.2: Ley de Cosenos
* **Objetivo:** Resolver triángulos oblicuángulos utilizando la Ley de Cosenos cuando se conocen dos lados y el ángulo comprendido entre ellos, o los tres lados del triángulo.
* **Explicación:** La Ley de Cosenos es una generalización del Teorema de Pitágoras para cualquier triángulo:
  $c^2 = a^2 + b^2 - 2ab cos(C)$
  Sirve para hallar el tercer lado o despejar cualquier ángulo.
* **Ejemplo Resuelto:** Un agricultor tiene un terreno triangular con dos linderos que miden $a = 80$ metros y $b = 100$ metros, los cuales forman un ángulo de $60^{circ}$ entre sí. Calcula la longitud del tercer lindero (c).
  - *Paso 1 Plantea Ley:* $c^2 = 80^2 + 100^2 - 2(80)(100) cos(60^{circ})$.
  - *Paso 2 Opera:* $c^2 = 6,400 + 10,000 - 16,000 	imes (0.5) = 16,400 - 8,000 = 8,400$.
  - *Paso 3:* $c = sqrt{8,400} approx 91.65$ metros.
  - *Resultado:* El tercer lindero mide 91.65 metros.
* **Errores Comunes:** Olvidar el término restado $2ab cos(C)$ o equivocarse en el orden de las operaciones, sumando primero todo antes de multiplicar por el coseno.
* **Ejercicios de Práctica:**
  1. Si a = 3 cm, b = 4 cm y el ángulo comprendido es C = 90°, ¿qué valor da la Ley de Cosenos para c? (R: 5 cm. Retroalimentación: cos(90°) = 0, reduciéndose al Teorema de Pitágoras).
  2. Calcula el valor de cos(C) si los tres lados de un triángulo miden a = 5, b = 6 y c = 7. (R: 0.20. Retroalimentación: 49 = 25 + 36 - 60cos(C); 60cos(C) = 12; cos(C) = 0.2).
  3. En un triángulo, x = 10, y = 15 y Z = 120°. Calcula z. (R: 21.79. Retroalimentación: z² = 100 + 225 - 300(-0.5) = 325 + 150 = 475).
  4. ¿Se puede usar la Ley de Cosenos en un triángulo rectángulo? (R: Sí, da exactamente el mismo resultado que Pitágoras).
  5. Si los tres lados de un triángulo son iguales, ¿cuál es el coseno de cualquiera de sus ángulos? (R: 0.5. Retroalimentación: Todos sus ángulos miden 60° y cos(60°) = 0.5).
* **¿Necesitas ayuda?** La Ley de Cosenos es imprescindible en vectores de física y navegación aérea. ¡Aprende a despejarla perfectamente con CEDETU!

### Lección 3.3: Identidades Trigonométricas Fundamentales
* **Objetivo:** Demostrar y simplificar expresiones complejas utilizando las identidades pitagóricas y por cociente.
* **Explicación:** Las identidades son igualdades trigonométricas válidas para cualquier ángulo. Las básicas son:
  - **Pitagórica:** $operatorname{sen}^2(	heta) + cos^2(	heta) = 1$
  - **Por cociente:** $	an(	heta) = rac{operatorname{sen}(	heta)}{cos(	heta)}$, $operatorname{cot}(	heta) = rac{cos(	heta)}{operatorname{sen}(	heta)}$
  - **Recíprocas:** $1 + 	an^2(	heta) = sec^2(	heta)$, $1 + operatorname{cot}^2(	heta) = csc^2(	heta)$
* **Ejemplo Resuelto:** Simplifica la expresión: $cos(x) 	imes 	an(x) 	imes csc(x)$.
  - *Paso 1:* Convierte todo a términos de seno y coseno:
    $	an(x) = rac{operatorname{sen}(x)}{cos(x)}$  y  $csc(x) = rac{1}{operatorname{sen}(x)}$.
  - *Paso 2:* Multiplica todos los términos:
    $cos(x) 	imes rac{operatorname{sen}(x)}{cos(x)} 	imes rac{1}{operatorname{sen}(x)}$.
  - *Paso 3:* Cancela términos repetidos arriba y abajo: queda exactamente 1.
  - *Resultado:* La expresión simplificada es igual a 1.
* **Errores Comunes:** Tratar a los términos trigonométricos como variables simples separadas del ángulo (por ejemplo, escribir "sen" en vez de "sen(x)").
* **Ejercicios de Práctica:**
  1. Simplifica: sen(x) * cot(x). (R: cos(x)).
  2. ¿A qué es equivalente la expresión 1 - sen²(x)? (R: cos²(x). Retroalimentación: Proviene de la identidad pitagórica principal).
  3. Demuestra a qué es igual cos²(θ) * (1 + tan²(θ)). (R: 1. Retroalimentación: 1 + tan²(θ) = sec²(θ); cos²(θ) * sec²(θ) = 1).
  4. Simplifica: [sec²(x) - 1] / tan²(x). (R: 1).
  5. ¿A qué equivale csc(x) / sec(x)? (R: cot(x). Retroalimentación: (1/sen) / (1/cos) = cos/sen = cot).
* **¿Necesitas ayuda?** Demostrar identidades trigonométricas requiere paciencia, lógica y trucos de álgebra. ¡Vuélvete un maestro de la simplificación junto a tu tutor!

## Evaluación Unidad 3
* Demuestra que la expresión (sen(x) + cos(x))² - 2sen(x)cos(x) es idéntica a 1. (R: Queda demostrado aplicando el binomio al cuadrado: sen²(x) + 2sen(x)cos(x) + cos²(x) - 2sen(x)cos(x) = sen²(x) + cos²(x) = 1).
* En un triángulo oblicuángulo, a = 8 cm, b = 10 cm y el ángulo C mide 45°. Calcula el lado c de forma aproximada. (R: 7.07 cm. Retroalimentación: c² = 64 + 100 - 160*cos(45°) ≈ 164 - 113.14 = 50.86 => c ≈ 7.13 cm).
* Si un faro de 30 metros de altura observa un barco en el lago de Amatitlán con un ángulo de depresión de 15°, ¿a qué distancia se encuentra el barco de la base del faro? (R: 111.96 metros. Retroalimentación: d = 30 / tan(15°) = 30 / 0.2679 ≈ 111.96 m).

---
`,

    "calculo-universitario": `# Curso: Cálculo Diferencial e Integral
* **Materia:** Matemáticas | **Nivel sugerido:** Universidad
* **Público objetivo:** Estudiantes universitarios y de diversificado que inician sus cursos de análisis matemático y cálculo.
* **Objetivos de aprendizaje:** Comprender límites, derivadas, optimización e integración para resolver problemas reales en ingeniería y ciencias.

## Unidad 1: Límites y Continuidad
### Lección 1.1: Concepto Intuitivo de Límite y Límites Laterales
* **Objetivo:** Comprender la definición informal de límite como la aproximación a un valor y resolver límites laterales gráficamente.
* **Explicación:** El límite de una función $f(x)$ cuando $x$ tiende a un valor $a$ es el valor al que se aproxima la función. Escribimos $lim_{x 	o a} f(x) = L$. Para que el límite exista, los límites laterales por la izquierda ($x 	o a^{-}$) y por la derecha ($x 	o a^{+}$) deben ser exactamente iguales.
* **Ejemplo Resuelto:** Considera la función $f(x) = 2x + 3$. Evalúa el límite cuando $x$ tiende a 4.
  - *Paso 1:* Como la función es continua (una línea recta), podemos evaluar directamente el valor de x en la función.
  - *Paso 2:* Reemplaza $x = 4$ en $2x + 3$: $2(4) + 3 = 8 + 3 = 11$.
  - *Resultado:* El límite cuando $x 	o 4$ es 11.
* **Errores Comunes:** Confundir el valor del límite con el valor de la función en ese punto; a veces la función no está definida en un punto, pero su límite en ese punto sí existe.
* **Ejercicios de Práctica:**
  1. Evalúa el límite de f(x) = x² - 5 cuando x tiende a 3. (R: 4).
  2. Si el límite de una función por la izquierda es 5 y por la derecha es -5, ¿existe el límite en ese punto? (R: No. Retroalimentación: Los límites laterales deben ser iguales).
  3. Evalúa lim_{x -> 2} (3x - 1). (R: 5).
  4. ¿Qué representa formalmente un límite lateral por la izquierda? (R: La aproximación al valor de x utilizando valores ligeramente menores a él).
  5. Evalúa el límite cuando x tiende a 0 de f(x) = 1/x. (R: No existe. Retroalimentación: Por la izquierda tiende a -infinito y por la derecha a +infinito).
* **¿Necesitas ayuda?** Los límites son la base de todo el cálculo universitario. ¡Consolida este concepto abstracto con las explicaciones visuales de tu tutor!

### Lección 1.2: Límites Indeterminados por Factorización
* **Objetivo:** Resolver límites racionales que presentan la indeterminación del tipo $0/0$ utilizando álgebra y factorización.
* **Explicación:** Si al evaluar directamente obtenemos la forma indeterminada $0/0$, significa que hay un factor común arriba y abajo que está causando el cero. Debemos factorizar numerador y denominador, cancelar el factor común y volver a evaluar.
* **Ejemplo Resuelto:** Evalúa el límite: $lim_{x 	o 3} rac{x^2 - 9}{x - 3}$.
  - *Paso 1 Evaluar:* $rac{3^2 - 9}{3 - 3} = rac{0}{0}$. (Indeterminado).
  - *Paso 2 Factorizar:* El numerador es una diferencia de cuadrados: $x^2 - 9 = (x + 3)(x - 3)$.
  - *Paso 3 Cancelar:* La expresión queda: $lim_{x 	o 3} rac{(x + 3)(x - 3)}{x - 3} = lim_{x 	o 3} (x + 3)$.
  - *Paso 4 Reevaluar:* Sustituye $x = 3$: $3 + 3 = 6$.
  - *Resultado:* El límite es 6.
* **Errores Comunes:** Dejar la respuesta como $0/0$ o pensar que el límite es cero o infinito en lugar de realizar el proceso algebraico correspondiente.
* **Ejercicios de Práctica:**
  1. Evalúa lim_{x -> 2} [(x² - 4) / (x - 2)]. (R: 4).
  2. Resuelve el límite lim_{x -> 5} [(x² - 5x) / (x - 5)]. (R: 5. Retroalimentación: Factor común x(x-5) / (x-5) = x).
  3. Resuelve lim_{x -> 1} [(x² - 2x + 1) / (x - 1)]. (R: 0. Retroalimentación: TCP (x-1)² / (x-1) = x-1; evalúa en 1: 1-1 = 0).
  4. Resuelve lim_{x -> -3} [(x² + 5x + 6) / (x + 3)]. (R: -1. Retroalimentación: (x+3)(x+2) / (x+3) = x+2; evalúa en -3: -3+2 = -1).
  5. ¿Qué significa algebraicamente obtener la forma 0/0 al evaluar un límite? (R: Que la función tiene una discontinuidad evitable en ese punto).
* **¿Necesitas ayuda?** La factorización es el salvavidas del cálculo. ¡Repasa trinomios y diferencias de cuadrados al instante con tu tutor de CEDETU!

### Lección 1.3: Límites al Infinito y Asíntotas
* **Objetivo:** Calcular límites cuando la variable independiente tiende a infinito y determinar la existencia de asíntotas horizontales.
* **Explicación:** Para calcular límites cuando $x 	o infty$ en funciones racionales, dividimos cada término de la expresión entre la variable elevada a la mayor potencia que aparezca en el denominador. Aplicamos la regla fundamental: $lim_{x 	o infty} rac{k}{x^n} = 0$.
* **Ejemplo Resuelto:** Calcula el límite: $lim_{x 	o infty} rac{3x^2 + 5x}{2x^2 - 1}$.
  - *Paso 1 Identificar Mayor Potencia:* La mayor potencia en el denominador es $x^2$.
  - *Paso 2 Dividir todo:* $rac{3x^2/x^2 + 5x/x^2}{2x^2/x^2 - 1/x^2} = rac{3 + 5/x}{2 - 1/x^2}$.
  - *Paso 3 Aplicar Límite:* Los términos $5/x$ y $1/x^2$ tienden a cero cuando $x 	o infty$.
  - *Paso 4:* Queda $rac{3 + 0}{2 - 0} = 3/2$.
  - *Resultado:* El límite es 3/2 (Esto indica que la función tiene una asíntota horizontal en $y = 1.5$).
* **Errores Comunes:** Confundir los grados del numerador y denominador al aplicar el análisis directo de potencias.
* **Ejercicios de Práctica:**
  1. Resuelve: lim_{x -> ∞} (5 / x³). (R: 0).
  2. Resuelve: lim_{x -> ∞} [(2x + 8) / (4x - 3)]. (R: 1/2).
  3. Resuelve: lim_{x -> ∞} [(x² + 5) / (2x³ - 10)]. (R: 0. Retroalimentación: El grado del denominador es mayor).
  4. ¿Qué tipo de asíntota se localiza en los puntos donde el denominador de una función racional simplificada se anula? (R: Asíntota vertical).
  5. Calcula el límite cuando x tiende a infinito de f(x) = (3x² - 1) / (x + 2). (R: Infinito. Retroalimentación: El grado del numerador es mayor).
* **¿Necesitas ayuda?** Entender el infinito de forma analítica es una de las mayores bellezas de la matemática superior. ¡Asegura tu comprensión con tu tutor de CEDETU!

## Evaluación Unidad 1
* Evalúa: lim_{x -> 4} [(x² - 16) / (x² - 5x + 4)]. (R: 8/3. Retroalimentación: Factoriza (x-4)(x+4) / (x-4)(x-1) = (x+4)/(x-1). Evalúa en 4: (4+4)/(4-1) = 8/3).
* Encuentra las asíntotas verticales de la función f(x) = (2x + 1) / (x² - 9). (R: x = 3 y x = -3. Retroalimentación: Los valores que hacen cero el denominador son las raíces de x²-9 = 0).
* Evalúa: lim_{x -> ∞} [(4x² - 5x + 2) / (3 - 5x²)]. (R: -4/5. Retroalimentación: Dividiendo entre x², queda 4 / -5 = -4/5).

---

## Unidad 2: La Derivada y sus Reglas
### Lección 2.1: Definición de la Derivada
* **Objetivo:** Comprender conceptualmente la derivada como la razón de cambio instantánea y la pendiente de la recta tangente.
* **Explicación:** La derivada mide el cambio de una variable con respecto a otra. Geométricamente, representa la pendiente de la recta tangente a la curva en un punto específico. Formalmente se define mediante el límite:
  $f'(x) = lim_{h 	o 0} rac{f(x+h) - f(x)}{h}$
* **Ejemplo Resuelto:** Encuentra la derivada de la función $f(x) = x^2$ usando la definición de límite.
  - *Paso 1 Plantea Límite:* $lim_{h 	o 0} rac{(x+h)^2 - x^2}{h}$.
  - *Paso 2 Desarrolla:* $lim_{h 	o 0} rac{x^2 + 2xh + h^2 - x^2}{h} = lim_{h 	o 0} rac{2xh + h^2}{h}$.
  - *Paso 3 Factoriza y Simplifica:* $lim_{h 	o 0} rac{h(2x + h)}{h} = lim_{h 	o 0} (2x + h)$.
  - *Paso 4 Evalúa h = 0:* $2x + 0 = 2x$.
  - *Resultado:* La derivada de $x^2$ es $2x$.
* **Errores Comunes:** Cancelar la variable $h$ del denominador antes de haber factorizado y simplificado el numerador, cometiendo división por cero.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el significado geométrico de la derivada en un punto dado de una curva? (R: La pendiente de la recta tangente en ese punto).
  2. Si f(x) = 5x + 2, ¿cuánto vale su derivada en cualquier punto? (R: 5. Retroalimentación: Es una línea recta de pendiente constante igual a 5).
  3. Calcula la derivada de f(x) = 3x usando la definición de límite. (R: 3).
  4. Si una función es constante f(x) = 10, ¿cuál es su derivada? (R: 0. Retroalimentación: Las constantes no cambian, su razón de cambio es cero).
  5. ¿En qué punto la pendiente de la recta tangente a la curva y = x² es igual a cero? (R: En el vértice (0,0). Retroalimentación: y' = 2x = 0 => x = 0).
* **¿Necesitas ayuda?** La derivada es la base del movimiento y el cambio físico. ¡Domina su concepto junto a un tutor experto de CEDETU!

### Lección 2.2: Reglas Básicas de Derivación
* **Objetivo:** Derivar funciones algebraicas aplicando de forma directa las reglas de la potencia, constante, suma, producto y cociente de funciones.
* **Explicación:** Reglas fundamentales:
  - **Potencia:** $rac{d}{dx}[x^n] = n x^{n-1}$.
  - **Suma/Resta:** $[f(x) pm g(x)]' = f'(x) pm g'(x)$.
  - **Producto:** $[f cdot g]' = f' cdot g + f cdot g'$.
  - **Cociente:** $[rac{f}{g}]' = rac{f' cdot g - f cdot g'}{g^2}$.
* **Ejemplo Resuelto:** Deriva la función: $f(x) = 4x^3 - 5x^2 + 2$.
  - *Paso 1 Aplica Potencia:* Para $4x^3$ queda $4 	imes 3x^2 = 12x^2$.
  - *Paso 2 Aplica Potencia:* Para $-5x^2$ queda $-5 	imes 2x = -10x$.
  - *Paso 3 Constante:* La derivada de 2 es 0.
  - *Paso 4 Suma todo:* $12x^2 - 10x$.
  - *Resultado:* $f'(x) = 12x^2 - 10x$.
* **Errores Comunes:** Restar mal las potencias al derivar (por ejemplo, derivar $1/x = x^{-1}$ y decir que es $-1x^0$ en lugar de $-1x^{-2} = -1/x^2$).
* **Ejercicios de Práctica:**
  1. Deriva: f(x) = 7x⁴. (R: 28x³).
  2. Deriva: f(x) = x⁵ - 3x² + 8. (R: 5x⁴ - 6x).
  3. Deriva usando la regla del producto: f(x) = x² * (3x + 1). (R: 9x² + 2x. Retroalimentación: f' = 2x(3x+1) + x²(3) = 6x² + 2x + 3x² = 9x² + 2x).
  4. Deriva: f(x) = √x. (R: 1 / (2√x). Retroalimentación: x^{1/2} derivado es (1/2)x^{-1/2}).
  5. ¿Cuál es la derivada de f(x) = 3/x²? (R: -6/x³. Retroalimentación: 3x^{-2} derivado es -6x^{-3}).
* **¿Necesitas ayuda?** Las reglas de derivación son sistemáticas y muy lógicas. ¡Vuélvete veloz aplicándolas en tus tareas escolares con CEDETU!

### Lección 2.3: La Regla de la Cadena
* **Objetivo:** Calcular la derivada de funciones compuestas de la forma $f(g(x))$ aplicando la Regla de la Cadena.
* **Explicación:** Si una función es compuesta, derivamos la función exterior dejando el interior igual, y multiplicamos el resultado por la derivada de la función interior:
  $rac{d}{dx}[f(g(x))] = f'(g(x)) 	imes g'(x)$
* **Ejemplo Resuelto:** Deriva la función: $f(x) = (3x^2 + 5)^4$.
  - *Paso 1 Exterior:* Deriva la potencia exterior (potencia 4): $4(3x^2 + 5)^3$.
  - *Paso 2 Interior:* Deriva la función interior $(3x^2 + 5)' = 6x$.
  - *Paso 3 Multiplica todo:* $4(3x^2 + 5)^3 	imes 6x = 24x(3x^2 + 5)^3$.
  - *Resultado:* $f'(x) = 24x(3x^2 + 5)^3$.
* **Errores Comunes:** Olvidar multiplicar por la derivada del término interior al aplicar la regla de la potencia.
* **Ejercicios de Práctica:**
  1. Deriva: f(x) = (2x - 1)⁵. (R: 10(2x - 1)⁴).
  2. Deriva: f(x) = sen(3x). (R: 3 cos(3x). Retroalimentación: Derivada de sen(u) es cos(u) * u').
  3. Deriva: f(x) = e^{x²}. (R: 2x e^{x²}. Retroalimentación: Derivada de e^u es e^u * u').
  4. Deriva: f(x) = ln(4x). (R: 1/x. Retroalimentación: (4) / (4x) = 1/x).
  5. Deriva: f(x) = (x³ + 2x)³. (R: 3(x³ + 2x)² * (3x² + 2)).
* **¿Necesitas ayuda?** La regla de la cadena es la clave para derivar cualquier función científica compleja. ¡Domínala al lado de tu tutor con ejercicios guiados!

## Evaluación Unidad 2
* Deriva la función racional: f(x) = (2x - 3) / (x + 1). (R: 5 / (x + 1)². Retroalimentación: f' = [2(x+1) - (2x-3)(1)] / (x+1)² = [2x + 2 - 2x + 3] / (x+1)² = 5/(x+1)²).
* Si la posición de una partícula está dada por s(t) = t³ - 6t² + 9t metros, ¿cuál es su velocidad en t = 2 segundos? (Nota: La velocidad es la derivada de la posición). (R: -3 m/s. Retroalimentación: v(t) = s'(t) = 3t² - 12t + 9. Evaluada en 2: 3(4) - 24 + 9 = -3).
* Deriva la función: y = cos²(4x). (R: -8 cos(4x) sen(4x). Retroalimentación: Aplica potencia exterior, luego coseno, luego el término 4x).

---

## Unidad 3: Optimización e Integración
### Lección 3.1: Optimización
* **Objetivo:** Resolver problemas de la vida real que impliquen encontrar máximos o mínimos locales aplicando el criterio de la primera derivada.
* **Explicación:** Para maximizar o minimizar una función:
  1. Planteamos la ecuación matemática de la función a optimizar en términos de una sola variable.
  2. Derivamos la función.
  3. Igualamos la derivada a cero para encontrar los puntos críticos ($f'(x) = 0$).
  4. Evaluamos si es un máximo o mínimo.
* **Ejemplo Resuelto:** Un fabricante en Escuintla quiere diseñar una caja rectangular de cartón abierta de volumen máximo a partir de una pieza de cartón de 12 cm por 12 cm cortando cuadrados iguales en las esquinas. Determina el tamaño de la esquina (x) para el volumen máximo.
  - *Paso 1 Ecuación Volumen:* $V(x) = x(12 - 2x)(12 - 2x) = x(144 - 48x + 4x^2) = 4x^3 - 48x^2 + 144x$.
  - *Paso 2 Derivar:* $V'(x) = 12x^2 - 96x + 144$.
  - *Paso 3 Puntos Críticos (igualar a 0 y simplificar):* $x^2 - 8x + 12 = 0 Rightarrow (x - 6)(x - 2) = 0$. Los puntos críticos son $x = 6$ y $x = 2$.
  - *Paso 4 Evaluar:* Un corte de 6 cm vacía la caja (volumen 0). Por lo tanto, el máximo volumen ocurre con $x = 2$ cm.
  - *Resultado:* El cuadrado de la esquina debe medir 2 cm de lado.
* **Errores Comunes:** Encontrar el punto crítico pero no verificar mediante la primera o segunda derivada si este representa el máximo o el mínimo buscado.
* **Ejercicios de Práctica:**
  1. Encuentra el número positivo que sumado con su recíproco dé la menor suma posible. (R: 1. Retroalimentación: S(x) = x + 1/x; S'(x) = 1 - 1/x² = 0 => x² = 1).
  2. Un granjero tiene 200 metros de cerca para delimitar un terreno rectangular. ¿Cuál es el área máxima que puede encerrar? (R: 2,500 m². Retroalimentación: El rectángulo de mayor área con perímetro fijo siempre es un cuadrado de lado P/4 = 50 m. Área = 2500).
  3. ¿Qué mide el criterio de la segunda derivada en un punto crítico? (R: La concavidad. Si f''(x) > 0 es un mínimo local, si f''(x) < 0 es un máximo local).
  4. Encuentra dos números cuya suma sea 20 y su producto sea el máximo posible. (R: 10 y 10).
  5. ¿En qué punto la función y = x³ - 3x tiene un máximo local? (R: x = -1. Retroalimentación: y' = 3x²-3 = 0 => x = ±1. y'' = 6x; y''(-1) < 0 => Máximo).
* **¿Necesitas ayuda?** La optimización es el campo más potente del cálculo aplicado a finanzas y diseño. ¡Aprende a resolver estos problemas con tu tutor de CEDETU!

### Lección 3.2: La Antiderivada e Integración Indefinida
* **Objetivo:** Calcular la antiderivada de funciones básicas aplicando de forma inversa las reglas de derivación y sumando la constante de integración C.
* **Explicación:** La integración es el proceso inverso a la derivación. La integral indefinida de una función representa el conjunto de todas las antiderivadas:
  $int x^n , dx = rac{x^{n+1}}{n+1} + C quad (	ext{para } n 
eq -1)$
  $int rac{1}{x} , dx = ln|x| + C$
* **Ejemplo Resuelto:** Calcula la integral indefinida: $int (3x^2 - 4x + 5) , dx$.
  - *Paso 1 Integra término a término:*
    * $int 3x^2 , dx = 3 	imes rac{x^3}{3} = x^3$.
    * $int -4x , dx = -4 	imes rac{x^2}{2} = -2x^2$.
    * $int 5 , dx = 5x$.
  - *Paso 2 Agrega Constante:* Junta los resultados y suma C: $x^3 - 2x^2 + 5x + C$.
  - *Resultado:* $x^3 - 2x^2 + 5x + C$.
* **Errores Comunes:** Olvidar sumar la constante de integración $C$ al finalizar una integral indefinida.
* **Ejercicios de Práctica:**
  1. Resuelve: ∫ x⁴ dx. (R: x⁵/5 + C).
  2. Resuelve: ∫ 8 dx. (R: 8x + C).
  3. Resuelve: ∫ e^x dx. (R: e^x + C).
  4. Calcula la integral de f(x) = cos(x). (R: sen(x) + C).
  5. Resuelve: ∫ 1/x² dx. (R: -1/x + C. Retroalimentación: ∫ x^{-2} dx = x^{-1}/-1 = -1/x).
* **¿Necesitas ayuda?** Integrar requiere imaginación y muchísima práctica algebraica. ¡Consolida tus bases con tu tutor y sácate un 100!

### Lección 3.3: La Integral Definida
* **Objetivo:** Calcular el área bajo la curva de una función continua en un intervalo cerrado aplicando el Teorema Fundamental del Cálculo.
* **Explicación:** La integral definida representa el área acumulada bajo la curva de una función $f(x)$ entre dos límites de integración $a$ y $b$. El Teorema Fundamental del Cálculo establece:
  $int_{a}^{b} f(x) , dx = F(b) - F(a)$
  donde $F(x)$ es cualquier antiderivada de $f(x)$.
* **Ejemplo Resuelto:** Calcula el área bajo la curva de la función $f(x) = x^2$ entre $x = 0$ y $x = 3$.
  - *Paso 1 Integra:* $F(x) = int x^2 , dx = rac{x^3}{3}$.
  - *Paso 2 Evalúa Límite Superior:* $F(3) = rac{3^3}{3} = rac{27}{3} = 9$.
  - *Paso 3 Evalúa Límite Inferior:* $F(0) = rac{0^3}{3} = 0$.
  - *Paso 4 Resta:* $F(3) - F(0) = 9 - 0 = 9$.
  - *Resultado:* El área bajo la curva es 9 unidades cuadradas.
* **Errores Comunes:** Restar al revés $F(a) - F(b)$ o cometer errores aritméticos al evaluar fracciones en los límites de integración.
* **Ejercicios de Práctica:**
  1. Evalúa la integral definida: ∫_{1}^{3} 2x dx. (R: 8. Retroalimentación: F(x) = x²; F(3) - F(1) = 9 - 1 = 8).
  2. ¿Qué significado geométrico tiene la integral definida ∫_{a}^{b} f(x) dx si f(x) >= 0? (R: El área de la región delimitada por la función, el eje X y las rectas verticales x = a y x = b).
  3. Evalúa la integral: ∫_{0}^{π} sen(x) dx. (R: 2. Retroalimentación: F(x) = -cos(x). -cos(π) - (-cos(0)) = -(-1) + 1 = 2).
  4. Resuelve: ∫_{1}^{2} 3x² dx. (R: 7. Retroalimentación: F(x) = x³; F(2) - F(1) = 8 - 1 = 7).
  5. ¿Cuánto vale la integral definida de cualquier función impar f(x) integrada en un intervalo simétrico [-a, a]? (R: 0. Retroalimentación: Las áreas de signo contrario a la izquierda y derecha se anulan mutuamente).
* **¿Necesitas ayuda?** Las integrales definidas son la cumbre del cálculo de bachillerato y primer año de universidad. ¡Asegura tu comprensión de este tema crucial con tu tutor de CEDETU!

## Evaluación Unidad 3
* Resuelve la integral indefinida por sustitución: ∫ 2x (x² + 1)³ dx. (R: (x² + 1)⁴ / 4 + C. Retroalimentación: u = x²+1, du = 2xdx. ∫ u³ du = u⁴/4 + C).
* Calcula el área exacta entre la curva y = 4 - x² y el eje X. (Nota: Los límites son las raíces de la ecuación: x = -2 y x = 2). (R: 32/3 ≈ 10.67 unidades cuadradas. Retroalimentación: ∫_{-2}^{2} (4-x²) dx = [4x - x³/3]_{-2}^{2} = (8 - 8/3) - (-8 + 8/3) = 16 - 16/3 = 32/3).
* Si el costo marginal de producción en una fábrica está dado por C'(x) = 5x + 10, y el costo fijo es C(0) = Q100, encuentra la función de costo total C(x). (R: C(x) = 2.5x² + 10x + 100).
`,

    "intro-fisica": `# Curso: Introducción a la Física
* **Materia:** Ciencias | **Nivel sugerido:** Secundaria
* **Público objetivo:** Alumnos que inician su formación científica y quieren entender los cimientos de la física moderna y el método científico.
* **Objetivos de aprendizaje:** Comprender qué estudia la física, aplicar el método científico a experimentos locales y resolver problemas analíticos mediante estimaciones precisas e incertidumbres de medición.

## Unidad 1: La Naturaleza de la Física
### Lección 1.1: Qué Estudia la Física y su Relación con Otras Ciencias
* **Objetivo:** Definir la física como ciencia fundamental y reconocer su interrelación con la química, biología y astronomía.
* **Explicación:** La física estudia los componentes fundamentales del universo: la materia, la energía, el espacio, el tiempo y las interacciones entre ellos. Intenta explicar desde el comportamiento de las partículas subatómicas hasta el movimiento de las galaxias.
* **Ejemplo Resuelto:** Clasifica los siguientes eventos como fenómenos físicos o químicos: 1) El agua del lago de Amatitlán evaporándose, 2) Un trozo de madera quemándose en una fogata en Tecpán.
  - *Paso 1 Evaporación:* El agua cambia de estado líquido a gaseoso, pero sigue siendo agua ($H_2O$). Es un cambio físico.
  - *Paso 2 Combustión:* La madera se transforma en cenizas, dióxido de carbono y vapor de agua, alterando su estructura molecular. Es un cambio químico.
  - *Resultado:* 1) Físico, 2) Químico.
* **Errores Comunes:** Pensar que cualquier cambio que involucre calor es químico, olvidando que los cambios de estado de la materia son físicos.
* **Ejercicios de Práctica:**
  1. ¿Qué rama de la física estudia el movimiento de los cuerpos sin atender a las causas que lo producen? (R: Cinemática).
  2. ¿Es el arcoíris que se observa en Panajachel un fenómeno óptico de la física? (R: Sí. Se produce por la refracción y reflexión de la luz en gotas de agua).
  3. ¿Qué estudia la termodinámica? (R: El calor, la temperatura y sus transformaciones en trabajo mecánico).
  4. La fotosíntesis de las plantas en Petén es un objeto de estudio conjunto de la biología y la: (R: Química / Bioquímica).
  5. ¿Cómo se llama la rama de la física que estudia las fuerzas y el equilibrio de los cuerpos? (R: Estática).
* **¿Necesitas ayuda?** La física no son solo fórmulas, es entender cómo funciona el universo real. ¡Explórala de forma apasionante junto a tu tutor de CEDETU!

### Lección 1.2: El Método Científico en Física
* **Objetivo:** Aplicar las etapas del método científico a problemas prácticos y entender la diferencia entre hipótesis, teoría y ley.
* **Explicación:** El método científico es un camino ordenado: Observación, Planteamiento del problema, Formulación de hipótesis, Experimentación, Análisis de resultados y Conclusión. Una hipótesis es una explicación provisional; una teoría es una explicación amplia respaldada por experimentos; una ley es una descripción matemática universal de un fenómeno.
* **Ejemplo Resuelto:** Un estudiante en Xela observa que el agua hierve a menor temperatura que en el Puerto de San José. Formula una hipótesis.
  - *Paso 1 Observación:* La temperatura de ebullición del agua varía con la altitud.
  - *Paso 2 Factor Clave:* Xela está a 2,330 m y el puerto a nivel del mar. La presión atmosférica es menor a mayor altitud.
  - *Paso 3 Hipótesis:* "La temperatura de ebullición del agua disminuye al disminuir la presión atmosférica del entorno".
  - *Resultado:* Hipótesis planteada de forma científica y medible.
* **Errores Comunes:** Tratar a las teorías como "simples opiniones" que no han sido comprobadas, cuando en ciencia una teoría es un modelo altamente verificado.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el paso del método científico donde se ponen a prueba las hipótesis? (R: Experimentación).
  2. Si los resultados de un experimento contradicen tu hipótesis, ¿qué debes hacer? (R: Descartar o modificar la hipótesis y plantear un nuevo experimento).
  3. ¿Cómo se le llama a una descripción matemática resumida de un comportamiento de la naturaleza? (R: Ley física).
  4. Un grupo de estudiantes mide el tiempo de caída de varias piedras. ¿Qué paso del método realizan? (R: Experimentación y recolección de datos).
  5. ¿Por qué es fundamental la reproducibilidad en la experimentación científica? (R: Para asegurar que cualquier otro científico pueda repetir el experimento y obtener los mismos resultados, validando el descubrimiento).
* **¿Necesitas ayuda?** Aprender a diseñar tus propios proyectos de ciencias escolares es facilísimo si cuentas con la guía estructurada de tu tutor. ¡Planifica tu experimento hoy!

### Lección 1.3: Historia de la Física (Clásica vs. Moderna)
* **Objetivo:** Identificar los periodos de la física, desde Galileo y Newton hasta Einstein y la mecánica cuántica, reconociendo sus límites de aplicación.
* **Explicación:** La **Física Clásica** (estudia objetos grandes y a velocidades mucho menores que la luz) incluye la mecánica de Newton, el electromagnetismo de Maxwell y la termodinámica. La **Física Moderna** (estudia lo infinitamente pequeño como átomos, o lo infinitamente rápido a velocidad cercana a la luz) surge a inicios del siglo XX con la Teoría de la Relatividad de Einstein y la Mecánica Cuántica.
* **Ejemplo Resuelto:** Si diseñas un puente en Ciudad de Guatemala, ¿qué tipo de física debes aplicar: clásica o moderna?
  - *Paso 1:* Analiza el objeto (puente, tamaño macroscópico) y las condiciones (estático, sin velocidades cercanas a la luz).
  - *Paso 2:* La física clásica (mecánica newtoniana) es 100% exacta y suficiente para modelar estas fuerzas.
  - *Resultado:* Física Clásica.
* **Errores Comunes:** Pensar que la física moderna "anuló" a la clásica; en realidad, la física clásica sigue siendo perfectamente correcta para el mundo cotidiano y es un caso límite de la moderna.
* **Ejercicios de Práctica:**
  1. ¿Quién es considerado el padre del método experimental en la física? (R: Galileo Galilei).
  2. ¿Qué físico formuló las leyes del movimiento y de la gravitación universal en el siglo XVII? (R: Isaac Newton).
  3. ¿Qué teoría introdujo Albert Einstein a principios del siglo XX para explicar fenómenos a velocidades extremas? (R: Teoría de la Relatividad).
  4. ¿En qué rango de tamaño se hace indispensable aplicar la mecánica cuántica en lugar de la mecánica clásica? (R: A escala atómica y subatómica).
  5. ¿Qué físico unificó la electricidad y el magnetismo en un solo conjunto de ecuaciones matemáticas? (R: James Clerk Maxwell).
* **¿Necesitas ayuda?** La historia de la física es una aventura fascinante de mentes brillantes. ¡Conversa con tu tutor sobre los misterios del cosmos y la materia!

## Evaluación Unidad 1
* ¿Cuál es la diferencia principal entre una ley física y una teoría científica? (R: La ley describe matemáticamente cómo ocurre un fenómeno, mientras que la teoría explica el mecanismo subyacente y el porqué ocurre).
* Si quieres estudiar el choque de dos autos de juguete, ¿qué física aplicas y qué ramas se involucran? (R: Física Clásica, ramas de Mecánica y Cinemática).
* Un científico propone: "Los planetas se mueven porque hay ángeles empujándolos". ¿Es esto una hipótesis científica válida? (R: No. No es falsable ni se puede someter a experimentación u observación empírica medible).

---

## Unidad 2: Modelos y Resolución de Problemas
### Lección 2.1: Modelos en Ciencias
* **Objetivo:** Comprender la necesidad de simplificar la realidad mediante modelos ideales (como la "partícula puntual") para resolver problemas físicos.
* **Explicación:** La realidad física es sumamente compleja (viento, fricción del aire, rotación de los cuerpos, etc.). Para resolver problemas, los físicos "modelan" u omiten detalles secundarios. El modelo más común es la **partícula puntual**: tratar a un objeto gigante como si toda su masa se concentrara en un solo punto matemático sin volumen.
* **Ejemplo Resuelto:** Al calcular el tiempo de viaje de un bus extraurbano desde la capital hasta Quetzaltenango, ¿por qué es válido tratar al bus como una partícula puntual?
  - *Paso 1:* La longitud del bus es de aprox. 12 metros, mientras que la distancia del viaje es de 200,000 metros (200 km).
  - *Paso 2:* Dado que la distancia recorrida es inmensamente mayor que el tamaño del bus, los detalles de su forma y volumen no influyen en el tiempo de viaje.
  - *Resultado:* El modelo de partícula puntual es totalmente válido y simplifica el cálculo.
* **Errores Comunes:** Querer incluir todas las variables reales del universo en un problema escolar de primer año, lo cual hace los cálculos imposibles de resolver sin necesidad.
* **Ejercicios de Práctica:**
  1. ¿Qué es un "fluido ideal" en física de líquidos? (R: Un fluido imaginario sin viscosidad ni fricción interna, incompresible).
  2. ¿Qué propiedad geométrica se omite al tratar a una pelota como una "partícula puntual"? (R: Su volumen, forma y rotación).
  3. En física de caída libre, ¿qué factor atmosférico solemos ignorar como primera aproximación? (R: La resistencia o fricción del aire).
  4. ¿Qué es un modelo matemático en física? (R: Una ecuación o fórmula que describe y predice con precisión el comportamiento de un sistema real).
  5. ¿Es válido tratar a la Tierra como una partícula puntual cuando calculamos su órbita alrededor del Sol? (R: Sí. Su tamaño es despreciable comparado con la distancia al Sol).
* **¿Necesitas ayuda?** Aprender a simplificar problemas complejos es el mayor secreto de los ingenieros exitosos. ¡Entrénalo junto a tu tutor de CEDETU!

### Lección 2.2: Estrategia de 4 Pasos para Resolver Problemas de Física
* **Objetivo:** Resolver problemas de física aplicando de forma sistemática la estrategia de plantear, dibujar, operar y verificar la lógica física del resultado.
* **Explicación:** Para resolver problemas complejos:
  1. **Visualizar y Dibujar:** Hacer un bosquejo del sistema con todos los datos conocidos y la incógnita (esquema físico).
  2. **Modelar Matemáticamente:** Elegir las ecuaciones físicas correspondientes.
  3. **Operar:** Sustituir los valores numéricos de forma limpia en el despeje correspondiente.
  4. **Evaluar:** Verificar si el resultado tiene sentido físico (por ejemplo, si un auto va a 800 km/s en una carretera de Guatemala, ¡hay un error de cálculo!).
* **Ejemplo Resuelto:** Un auto acelera de forma constante y recorre 100 metros en 5 segundos. Calcula su velocidad promedio.
  - *Paso 1 Dibujar:* Dibuja el auto, marca la posición inicial 0 y final 100 m, tiempo transcurrido 5 s.
  - *Paso 2 Modelo:* Velocidad promedio $v = d / t$.
  - *Paso 3 Operar:* $v = 100 	ext{ m} / 5 	ext{ s} = 20 	ext{ m/s}$.
  - *Paso 4 Evaluar:* 20 m/s equivale a 72 km/h, lo cual es totalmente normal para un automóvil en una autopista.
  - *Resultado:* 20 m/s.
* **Errores Comunes:** Empezar a meter números en la calculadora sin tener un esquema claro ni verificar las unidades de medida.
* **Ejercicios de Práctica:**
  1. Si calculas la masa de una manzana de Sololá y tu resultado da 250 kg, ¿dónde está el error? (R: En las unidades o en la escala de cálculo. Una manzana pesa aprox. 0.15 kg).
  2. ¿Cuál es el primer paso indispensable al abordar un problema de física de fuerzas? (R: Realizar un diagrama de cuerpo libre (DCL)).
  3. Si un ciclista recorre 15 km en media hora, ¿cuál es su velocidad promedio en km/h? (R: 30 km/h. Retroalimentación: v = 15 / 0.5 = 30).
  4. ¿Para qué sirve analizar las unidades de medida a lo largo de las operaciones de un despeje? (R: Para verificar que no hayamos despejado mal; si buscamos tiempo, el resultado final debe quedar en segundos).
  5. Si un avión comercial vuela a una velocidad constante, ¿qué valor tiene su aceleración? (R: Cero. Retroalimentación: La aceleración mide el cambio de velocidad; si la velocidad es constante, la aceleración es nula).
* **¿Necesitas ayuda?** La física escolar a veces intimida por la cantidad de fórmulas. ¡Aprende el método sistemático de CEDETU y saca notas perfectas en tus exámenes!

### Lección 2.3: Estimación y Órdenes de Magnitud
* **Objetivo:** Estimar magnitudes físicas de forma rápida y razonada sin necesidad de instrumentos de medición precisos, utilizando potencias de 10.
* **Explicación:** Estimar consiste en hallar un valor aproximado y lógico a un problema cuando no tenemos datos exactos. Un **orden de magnitud** es la potencia de 10 más cercana al valor de una cantidad. Nos permite validar cálculos complejos rápidamente.
* **Ejemplo Resuelto:** Estima cuántas tazas de café se consumen en Guatemala en un solo día.
  - *Paso 1:* Población de Guatemala: aprox. 18 millones ($1.8 	imes 10^7$ personas).
  - *Paso 2:* Supongamos que un tercio de la población toma café activamente, consumiendo en promedio 2 tazas al día. Esto es aprox. 6 millones de personas consumiendo 2 tazas = 12 millones de tazas.
  - *Paso 3 Potencia de 10:* 12 millones es $1.2 	imes 10^7$. El orden de magnitud es $10^7$ tazas.
  - *Resultado:* Orden de magnitud $10^7$ tazas diarias.
* **Errores Comunes:** Pensar que estimar es simplemente "adivinar" al azar, sin seguir un razonamiento de variables lógico y proporcional.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el orden de magnitud en metros de la estatura promedio de un estudiante guatemalteco? (R: 10⁰ metros. Retroalimentación: Estatura ≈ 1.6 m, la potencia más cercana de 10 es 10⁰ = 1).
  2. Estima el número de cabellos en la cabeza de una persona si la densidad es de 100 cabellos por cm² y la cabeza tiene un área de 1,000 cm². (R: 100,000 cabellos. Orden de magnitud 10⁵).
  3. ¿Cuál es el orden de magnitud en segundos de un día completo de 24 horas? (R: 10⁵ segundos. Retroalimentación: Un día tiene 86,400 segundos; aproximado es 10⁵).
  4. Estima el volumen aproximado en litros de un cubo de 10 cm de lado. (R: 1 litro. Retroalimentación: Volumen = 10*10*10 = 1,000 cm³ = 1 litro).
  5. Si una persona camina a 1 m/s, ¿cuántos kilómetros aproximados recorrerá en una caminata activa de 3 horas? (R: Aproximadamente 11 km. Retroalimentación: 3 horas = 10,800 s. Distancia = 1 * 10,800 = 10.8 km).
* **¿Necesitas ayuda?** Las estimaciones de Fermi son una herramienta analítica increíblemente valorada en entrevistas de trabajo de tecnología y finanzas. ¡Aprende a dominarlas con tu tutor!

## Evaluación Unidad 2
* Si resuelves la aceleración de una pelota de fútbol al ser pateada y tu resultado da 0.05 m/s², ¿es este un valor físicamente lógico para el mundo real? (R: No. Es una aceleración extremadamente pequeña; para acelerar un balón a una velocidad de juego en fracciones de segundo se requieren aceleraciones mayores a 10 m/s²).
* Estima el número de latidos del corazón de una persona promedio a lo largo de una vida de 75 años (supón 70 latidos por minuto). (R: Aproximadamente 2.76 x 10⁹ latidos. Orden de magnitud 10⁹).
* ¿Cuál es el modelo físico básico para estudiar el movimiento de los planetas sin considerar sus continentes, océanos o rotaciones? (R: Modelo de esfera homogénea o partícula puntual en el centro de gravedad).

---

## Unidad 3: Mediciones e Incertidumbre
### Lección 3.1: Medición Directa e Indirecta
* **Objetivo:** Diferenciar entre mediciones directas (con instrumentos de escala) e indirectas (mediante el cálculo de fórmulas) en laboratorios de física.
* **Explicación:** 
  - **Medición Directa:** Se obtiene comparando la magnitud directamente con un patrón de un instrumento de medida (ej. medir el largo de una mesa con una cinta métrica o el tiempo con un cronómetro).
  - **Medición Indirecta:** Se calcula a partir de aplicar fórmulas matemáticas sobre mediciones directas (ej. calcular el volumen de un bloque a partir de medir sus tres aristas directas $V = a cdot b cdot c$).
* **Ejemplo Resuelto:** Para calcular la velocidad de un tuk-tuk en Panajachel, se mide la distancia de una cuadra con cinta métrica (100 m) y el tiempo que tarda en cruzarla con un cronómetro (10 s). ¿Qué tipos de mediciones realizaste?
  - *Paso 1:* Distancia (100 m) y tiempo (10 s) se leen directamente de los instrumentos. Son mediciones directas.
  - *Paso 2:* La velocidad se calcula con la fórmula $v = d / t$ ($100 / 10 = 10$ m/s). Es una medición indirecta.
  - *Resultado:* Distancia y tiempo son directas, velocidad es indirecta.
* **Errores Comunes:** Pensar que toda medición en física requiere un sensor especial directo, ignorando que la mayoría de variables complejas se calculan indirectamente.
* **Ejercicios de Práctica:**
  1. ¿Qué tipo de medición es el área de un círculo obtenida tras medir su radio con un calibrador y calcular A = πr²? (R: Medición indirecta).
  2. Si lees la temperatura en Antigua usando un termómetro analógico de mercurio, ¿qué medición realizas? (R: Medición directa).
  3. ¿Cuál es el instrumento clásico de precisión utilizado para medir longitudes de milímetros y fracciones de milímetro en piezas mecánicas? (R: Calibrador Vernier o micrómetro).
  4. Para medir la densidad de una piedra de Amatitlán, mides su masa en una balanza y su volumen por desplazamiento de agua. ¿Qué tipo de medición es la densidad? (R: Medición indirecta).
  5. ¿Cómo se define el término "patrón de medida"? (R: Una referencia física estándar e invariable utilizada para definir el valor de una unidad de medida).
* **¿Necesitas ayuda?** Dominar los instrumentos de laboratorio te dará una ventaja tremenda en tus clases prácticas de secundaria y bachillerato. ¡Repásalos con tu tutor!

### Lección 3.2: Precisión, Exactitud e Incertidumbre
* **Objetivo:** Diferenciar claramente entre precisión (repetibilidad de las medidas) y exactitud (cercanía al valor real), y reportar mediciones con su incertidumbre.
* **Explicación:** 
  - **Exactitud:** Qué tan cerca está una medición del valor real aceptado.
  - **Precisión:** Qué tan cercanas entre sí están las mediciones sucesivas tomadas de la misma manera (consistencia).
  - **Incertidumbre:** El rango de duda asociado a toda medición experimental (se reporta como $V pm Delta V$).
* **Ejemplo Resuelto:** Tres estudiantes miden la aceleración de la gravedad g (cuyo valor real es 9.8 m/s²). El estudiante A obtiene: 9.79, 9.81, 9.80 m/s². El estudiante B obtiene: 9.20, 9.21, 9.20 m/s². Analiza su precisión y exactitud.
  - *Paso 1 Estudiante A:* Los datos son consistentes entre sí (precisos) y están sumamente cerca de 9.8 (exactos).
  - *Paso 2 Estudiante B:* Los datos son muy consistentes entre sí (precisos), pero están alejados del valor real 9.8 (inexactos).
  - *Resultado:* El Estudiante A es preciso y exacto; el Estudiante B es preciso pero inexacto (probablemente debido a un error sistemático o instrumento descalibrado).
* **Errores Comunes:** Utilizar los términos "precisión" y "exactitud" como si significaran exactamente lo mismo en contextos científicos.
* **Ejercicios de Práctica:**
  1. Si un reloj analógico de pared en Chichicastenango está atrasado por exactamente 2 horas pero funciona perfectamente marcando siempre la misma diferencia, ¿es exacto o preciso? (R: Es preciso pero inexacto).
  2. ¿Cómo se expresa una medida física reportada con su incertidumbre absoluta si el valor es 5.4 metros y la tolerancia del instrumento es de 0.1 metros? (R: 5.4 ± 0.1 m).
  3. ¿Cuál es el error de escala de una regla común graduada en milímetros? (R: ±0.5 mm o ±1 mm dependiendo del criterio del laboratorio).
  4. ¿Qué tipo de error en mediciones se reduce repitiendo el experimento muchas veces y promediando los resultados? (R: Los errores aleatorios).
  5. ¿Qué causa típicamente los errores sistemáticos en un experimento? (R: Instrumentos descalibrados, fallas de diseño en el método de experimentación o sesgos del observador).
* **¿Necesitas ayuda?** La teoría de errores es crucial para reportar reportes científicos exitosos en bachillerato y universidad. ¡Asegura tu zona con ayuda de tu tutor de CEDETU!

### Lección 3.3: Error Absoluto, Relativo y Porcentual
* **Objetivo:** Calcular el error absoluto, relativo y porcentual de una medición experimental con respecto a un valor teórico aceptado.
* **Explicación:** 
  - **Error Absoluto ($E_a$):** Valor absoluto de la diferencia entre el valor medido ($V_m$) y el valor real ($V_r$): $E_a = |V_m - V_r|$.
  - **Error Relativo ($E_r$):** Error absoluto dividido entre el valor real: $E_r = E_a / V_r$.
  - **Error Porcentual ($E_p$):** Error relativo multiplicado por 100: $E_p = E_r 	imes 100%$.
* **Ejemplo Resuelto:** Un grupo de laboratorio en Xela mide la constante de la gravedad y obtiene $9.5 	ext{ m/s}^2$. Si el valor teórico aceptado es $9.8 	ext{ m/s}^2$, calcula el error absoluto y el error porcentual de la medición.
  - *Paso 1 Error Absoluto:* $E_a = |9.5 - 9.8| = 0.3 	ext{ m/s}^2$.
  - *Paso 2 Error Relativo:* $E_r = 0.3 / 9.8 approx 0.0306$.
  - *Paso 3 Error Porcentual:* $E_p = 0.0306 	imes 100% = 3.06%$.
  - *Resultado:* Error Absoluto = 0.3 m/s², Error Porcentual = 3.06%.
* **Errores Comunes:** Dividir entre el valor medido en lugar de dividir entre el valor teórico real en la fórmula de error relativo.
* **Ejercicios de Práctica:**
  1. Si mides una distancia teórica de 50 metros y tu instrumento marca 49 metros, ¿cuál es tu error absoluto? (R: 1 metro).
  2. Con los datos anteriores, calcula el error porcentual. (R: 2%).
  3. Si un experimento tiene un error porcentual del 15%, ¿se considera de alta precisión en un laboratorio de física escolar? (R: No. En general se buscan errores menores al 5% o 10% en prácticas escolares estándar).
  4. Calcula el error absoluto si el valor real es 100 y el medido es 105. (R: 5).
  5. Si el error relativo de una medida es 0.005, ¿a qué porcentaje equivale? (R: 0.5%).
* **¿Necesitas ayuda?** Aprende los métodos matemáticos para propagar errores en sumas, productos y potencias en tus fórmulas físicas con tu tutor de CEDETU. ¡Toma el control hoy!

## Evaluación Unidad 3
* Si un carpintero de Antigua mide una tabla y reporta L = 120.4 ± 0.2 cm, ¿cuál es el porcentaje de incertidumbre relativa de la medición? (R: 0.166%. Retroalimentación: Incertidumbre Relativa = (0.2 / 120.4) * 100% ≈ 0.166%).
* ¿Cuál es la diferencia entre un error aleatorio y un error sistemático? (R: El error aleatorio ocurre al azar, cambia de signo y magnitud y se reduce promediando; el sistemático desvía las medidas siempre en el mismo sentido debido a fallas constantes en el instrumento o método).
* En un experimento de refracción, se obtiene un índice del agua de 1.36. Si el valor real es 1.33, calcula el error porcentual. (R: 2.26%. Retroalimentación: |1.36 - 1.33|/1.33 * 100% = 0.03 / 1.33 * 100% ≈ 2.26%).
`,

    "magnitudes-unidades": `# Curso: Magnitudes y Unidades
* **Materia:** Ciencias | **Nivel sugerido:** Secundaria / Diversificado
* **Público objetivo:** Estudiantes que desean dominar el uso del Sistema Internacional, las conversiones de unidades y las cifras significativas aplicadas a problemas prácticos de ciencias.
* **Objetivos de aprendizaje:** Diferenciar magnitudes fundamentales de derivadas, dominar el análisis dimensional y realizar conversiones de unidades compuestas y de notación científica con total fluidez.

## Unidad 1: El Sistema Internacional y Análisis Dimensional
### Lección 1.1: Magnitudes Fundamentales y Derivadas del SI
* **Objetivo:** Clasificar las magnitudes físicas en fundamentales y derivadas del Sistema Internacional y reconocer sus respectivas unidades estándar.
* **Explicación:** La física se basa en medir magnitudes. El Sistema Internacional (SI) define **7 magnitudes fundamentales** de las cuales se construyen todas las demás: longitud (metro, m), masa (kilogramo, kg), tiempo (segundo, s), corriente eléctrica (amperio, A), temperatura (kelvin, K), cantidad de sustancia (mol) e intensidad luminosa (candela, cd). Las **magnitudes derivadas** son combinaciones de las fundamentales (ej. velocidad: m/s, área: m², fuerza: Newton = kg·m/s²).
* **Ejemplo Resuelto:** Determina si la velocidad y la temperatura son magnitudes fundamentales o derivadas.
  - *Paso 1:* La temperatura está en la lista de las 7 magnitudes fundamentales del SI (se mide en Kelvin o Celsius).
  - *Paso 2:* La velocidad se calcula dividiendo distancia (longitud) entre tiempo. Su unidad es m/s (combinación de metro y segundo). Es derivada.
  - *Resultado:* Temperatura es fundamental, velocidad es derivada.
* **Errores Comunes:** Pensar que la fuerza o la energía son magnitudes fundamentales porque se miden con instrumentos simples (dinamómetros, etc.).
* **Ejercicios de Práctica:**
  1. ¿Cuál es la unidad básica del SI para la masa? (R: El kilogramo (kg). Cuidado: no es el gramo).
  2. Clasifica la densidad como magnitud fundamental o derivada. (R: Derivada. Se mide en kg/m³).
  3. ¿Cuál es la unidad fundamental de temperatura en el Sistema Internacional? (R: El Kelvin (K)).
  4. La fuerza se mide en Newtons (N). Escribe un Newton en términos de unidades fundamentales del SI. (R: kg·m/s²).
  5. ¿Cuáles son las tres magnitudes fundamentales de la mecánica clásica? (R: Longitud, Masa y Tiempo).
* **¿Necesitas ayuda?** Comprender el origen de las unidades te facilitará recordar cualquier fórmula de física. ¡Domínalo de forma muy didáctica con tu tutor!

### Lección 1.2: Unidades Tradicionales y del Sistema Inglés
* **Objetivo:** Identificar las unidades clásicas del Sistema Inglés (libras, pies, pulgadas, galones) y unidades tradicionales latinoamericanas, reconociendo su equivalencia con el SI.
* **Explicación:** Aunque el SI es el estándar científico universal, en el comercio y la vida diaria de Latinoamérica y Estados Unidos conviven unidades del Sistema Inglés (longitud: pie, pulgada, milla; masa: libra, onza; volumen: galón) y tradicionales locales (quintal: 100 lb; arroba: 25 lb; vara: 84 cm).
* **Ejemplo Resuelto:** Un letrero de tránsito en una autopista de Guatemala marca que la velocidad máxima es de 80 km/h. Un auto americano marca su velocidad en millas por hora (mph). ¿Cuál es la equivalencia aproximada? (Dato: 1 milla ≈ 1.609 km).
  - *Paso 1:* Convierte 80 km a millas dividiendo por 1.609: $80 / 1.609 approx 49.7$ millas.
  - *Resultado:* 80 km/h equivale aproximadamente a 50 mph.
* **Errores Comunes:** Confundir la libra métrica (500 gramos, muy usada en mercados de Guatemala) con la libra internacional estándar (453.6 gramos).
* **Ejercicios de Práctica:**
  1. ¿Cuántas pulgadas hay en un pie? (R: 12 pulgadas).
  2. Si un terreno mide 10 varas de largo y una vara equivale a 0.84 metros, ¿cuánto mide el largo en metros? (R: 8.4 metros).
  3. ¿Cuántas libras estándar equivalen exactamente a una arroba? (R: 25 libras).
  4. Si compras un galón de gasolina en una estación, ¿a cuántos litros equivale aproximadamente? (R: 3.785 litros).
  5. Convierte 3 pies a pulgadas. (R: 36 pulgadas).
* **¿Necesitas ayuda?** Saber operar con unidades del sistema inglés es indispensable para tareas escolares y estudios universitarios técnicos. ¡Repásalas de forma práctica con tu tutor!

### Lección 1.3: Análisis Dimensional
* **Objetivo:** Utilizar las dimensiones fundamentales [L] longitud, [M] masa y [T] tiempo para comprobar la homogeneidad dimensional de fórmulas físicas y deducir unidades.
* **Explicación:** El análisis dimensional estudia la naturaleza de las magnitudes físicas sin importar sus unidades numéricas. Representamos longitud como [L], masa como [M] y tiempo como [T]. Toda ecuación física debe ser dimensionalmente homogénea: las dimensiones de la parte izquierda deben coincidir exactamente con las de la parte derecha.
* **Ejemplo Resuelto:** Comprueba si la ecuación de la distancia del movimiento uniformemente acelerado es dimensionalmente correcta: $d = v_0 t + rac{1}{2} a t^2$.
  - *Paso 1 Dimensiones de la izquierda:* La distancia $d$ tiene dimensión de longitud: $[d] = L$.
  - *Paso 2 Dimensiones del primer término de la derecha:* Velocidad ($L T^{-1}$) multiplicada por tiempo ($T$): $[v_0 t] = (L T^{-1}) cdot T = L$.
  - *Paso 3 Dimensiones del segundo término:* La constante numérica 1/2 no tiene dimensión. Aceleración ($L T^{-2}$) multiplicada por tiempo al cuadrado ($T^2$): $[a t^2] = (L T^{-2}) cdot T^2 = L$.
  - *Resultado:* Dado que todos los términos de la ecuación tienen dimensión de longitud ($L$), la ecuación es dimensionalmente correcta.
* **Errores Comunes:** Incluir constantes numéricas puras (como 1/2, $pi$, o 5) en el análisis dimensional, cuando en realidad son adimensionales (no tienen unidades ni dimensión).
* **Ejercicios de Práctica:**
  1. ¿Cuáles son las dimensiones de la velocidad promedio? (R: [L][T]⁻¹).
  2. ¿Cuál es la fórmula dimensional de la fuerza (Masa x Aceleración)? (R: [M][L][T]⁻²).
  3. Determina si la fórmula de la energía E = m c² es dimensionalmente correcta (donde m es masa y c es velocidad de la luz). (R: Sí. Dimensiones de energía son [M][L]²[T]⁻²).
  4. ¿Cuál es la dimensión de la presión (Fuerza / Área)? (R: [M][L]⁻¹[T]⁻²).
  5. Si una constante física k tiene unidades de N·m/kg², ¿cuáles son sus dimensiones? (R: [L]³[M]⁻¹[T]⁻²).
* **¿Necesitas ayuda?** El análisis dimensional es un filtro maravilloso para saber si planteaste mal una fórmula en un examen antes de resolverla. ¡Aprende todos sus secretos con CEDETU!

## Evaluación Unidad 1
* Deduce la fórmula dimensional de la potencia mecánica (Trabajo / Tiempo). (R: [M][L]²[T]⁻³. Retroalimentación: Trabajo = Fuerza * Distancia = [M][L]²[T]⁻²; dividido entre Tiempo [T] da [M][L]²[T]⁻³).
* Si una ecuación física es A = B + C, ¿qué relación dimensional debe cumplirse entre las tres variables? (R: Las tres variables A, B y C deben tener exactamente las mismas dimensiones fundamentales).
* ¿Es el radián una unidad dimensional en física? (R: No. El radián es una unidad adimensional de ángulo plano; representa una razón de longitudes arco/radio, quedando [L]/[L] = 1).

---

## Unidad 2: Conversión de Unidades y Notación Científica
### Lección 2.1: El Método del Factor de Conversión
* **Objetivo:** Realizar conversiones de unidades simples de forma rápida utilizando el método de multiplicación por factores de fracción equivalentes a 1.
* **Explicación:** El factor de conversión consiste en multiplicar la cantidad original por una fracción que represente una equivalencia de unidades. La unidad que deseamos eliminar debe colocarse en la posición contraria de la fracción (si la original está arriba, en el factor debe ir abajo) para que se cancelen algebraicamente.
* **Ejemplo Resuelto:** Convierte 150 centímetros a metros de forma estructurada.
  - *Paso 1 Equivalencia:* 1 metro (m) = 100 centímetros (cm).
  - *Paso 2 Plantea el factor:* Coloca cm abajo para cancelarlo: $150 	ext{ cm} 	imes left( rac{1 	ext{ m}}{100 	ext{ cm}} ight)$.
  - *Paso 3 Opera:* $rac{150 	imes 1}{100} = 1.5$ metros.
  - *Resultado:* 1.5 metros.
* **Errores Comunes:** Colocar las unidades en el factor al revés, lo que resulta en multiplicar en lugar de dividir (ej. multiplicar por 100 y decir que 150 cm son 15,000 metros).
* **Ejercicios de Práctica:**
  1. Convierte 3.5 kilómetros a metros. (R: 3,500 metros).
  2. Si una carretera mide 5 millas, ¿cuántos kilómetros mide aproximadamente? (1 milla = 1.609 km). (R: 8.05 km).
  3. Convierte 48 horas a días. (R: 2 días).
  4. ¿Cuántos gramos hay en 2.5 kilogramos? (R: 2,500 gramos).
  5. Convierte 120 pulgadas a pies. (1 pie = 12 pulgadas). (R: 10 pies).
* **¿Necesitas ayuda?** Los factores de conversión eliminan toda confusión en física y química. ¡Domina este método infalible junto a tu tutor de CEDETU!

### Lección 2.2: Conversión de Unidades Compuestas (Velocidad y Densidad)
* **Objetivo:** Convertir unidades complejas compuestas por cocientes o productos (como km/h a m/s o g/cm³ a kg/m³) de forma encadenada.
* **Explicación:** Para convertir unidades compuestas, multiplicamos sucesivamente por los factores de conversión de cada una de las unidades involucradas en el orden deseado, cancelando una a una las unidades antiguas.
* **Ejemplo Resuelto:** Un bus extraurbano viaja por la autopista a $90 	ext{ km/h}$. Convierte esta velocidad a metros por segundo ($m/s$).
  - *Paso 1 Factor de Longitud:* 1 km = 1,000 m. Coloca km abajo: $rac{90 	ext{ km}}{	ext{h}} 	imes left( rac{1,000 	ext{ m}}{1 	ext{ km}} ight)$.
  - *Paso 2 Factor de Tiempo:* 1 h = 3,600 s. Coloca h arriba para cancelarlo: $rac{90 	ext{ km}}{	ext{h}} 	imes left( rac{1,000 	ext{ m}}{1 	ext{ km}} ight) 	imes left( rac{1 	ext{ h}}{3,600 	ext{ s}} ight)$.
  - *Paso 3 Opera:* $rac{90 	imes 1,000}{3,600} = rac{90,000}{3,600} = 25 	ext{ m/s}$.
  - *Resultado:* 25 m/s. (Nota de atajo rápido: dividir km/h entre 3.6 da directamente m/s).
* **Errores Comunes:** Olvidar elevar al cuadrado o al cubo el factor de conversión cuando se trabaja con áreas o volúmenes (ejemplo: decir que 1 m² son 100 cm² en lugar de 10,000 cm²).
* **Ejercicios de Práctica:**
  1. Convierte 10 m/s a km/h. (R: 36 km/h. Retroalimentación: Multiplica por 3.6).
  2. Si la densidad de una piedra de Amatitlán es de 2.5 g/cm³, ¿cuál es su densidad en kg/m³? (R: 2,500 kg/m³. Retroalimentación: g/cm³ se multiplica por 1,000 para pasar a kg/m³).
  3. Convierte un área de 5 metros cuadrados a centímetros cuadrados. (R: 50,000 cm². Retroalimentación: 1 m² = 10,000 cm²).
  4. Si un grifo vierte agua a 12 litros por minuto, ¿cuál es su caudal en litros por segundo? (R: 0.2 L/s. Retroalimentación: 12 / 60 = 0.2).
  5. Convierte 72 km/h a m/s. (R: 20 m/s).
* **¿Necesitas ayuda?** Las unidades compuestas de volumen y densidad confunden a muchos estudiantes por la potencia cúbica. ¡Aprende el método seguro con tu tutor de CEDETU!

### Lección 2.3: Notación Científica y Prefijos Métricos
* **Objetivo:** Expresar números gigantescos o infinitesimales en notación científica y utilizar prefijos métricos estándar (Mega, Giga, micro, nano).
* **Explicación:** La notación científica escribe cantidades como el producto de un número entre 1 y 10 multiplicado por una potencia de 10 ($a 	imes 10^n$). Los prefijos métricos sustituyen potencias de 10 comunes:
  - **Kilo (k):** $10^3$ | **Mega (M):** $10^6$ | **Giga (G):** $10^9$
  - **Mili (m):** $10^{-3}$ | **Micro ($mu$):** $10^{-6}$ | **Nano (n):** $10^{-9}$
* **Ejemplo Resuelto:** Expresa la distancia promedio de la Tierra a la Luna (aprox. 384,000,000 metros) en notación científica y utilizando prefijos de Mega.
  - *Paso 1 Notación Científica:* Mueve el punto decimal 8 posiciones a la izquierda: $3.84 	imes 10^8$ metros.
  - *Paso 2 Prefijos:* $10^6$ equivale a "Mega (M)". Así, 384,000,000 m = 384 Megametros (Mm).
  - *Resultado:* $3.84 	imes 10^8$ m o 384 Mm.
* **Errores Comunes:** Colocar potencias positivas para decimales extremadamente pequeños (ej. decir que el radio de un átomo es $1.5 	imes 10^{10}$ metros en lugar de $1.5 	imes 10^{-10}$ metros).
* **Ejercicios de Práctica:**
  1. Expresa en notación científica el grosor de una hoja de papel de 0.00012 metros. (R: 1.2 x 10⁻⁴ m).
  2. ¿A cuántos quetzales equivale un premio monetario de 5 Megaquetzales (MQ)? (R: Q5,000,000).
  3. Si la longitud de onda de un láser de laboratorio es de 650 nanómetros (nm), exprésalo en metros con notación científica. (R: 6.5 x 10⁻⁷ m. Retroalimentación: 650 x 10⁻⁹ = 6.5 x 10⁻⁷).
  4. Convierte 45,000 Kilómetros a Megámetros (Mm). (R: 45 Mm).
  5. Escribe en su forma extendida el número 3.2 x 10⁻³. (R: 0.0032).
* **¿Necesitas ayuda?** La notación científica es el idioma del universo a gran y pequeña escala. ¡Aprende a dominar las leyes de exponentes con tu tutor de CEDETU!

## Evaluación Unidad 2
* Resuelve y expresa en notación científica el resultado de la siguiente operación: (3.0 x 10⁵ m) x (2.0 x 10⁻² m). (R: 6.0 x 10³ m². Retroalimentación: Multiplica los números: 3*2 = 6; suma los exponentes: 5 + (-2) = 3).
* Si una señal de internet viaja a una velocidad de 15 Gigabytes por segundo (GB/s), ¿a cuántos Bytes por segundo equivale en notación científica? (R: 1.5 x 10¹⁰ B/s. Retroalimentación: 15 x 10⁹ = 1.5 x 10¹⁰).
* Convierte una tasa de flujo de 900 kg/m³ a g/cm³. (R: 0.90 g/cm³).

---

## Unidad 3: Cifras Significativas y Redondeo
### Lección 3.1: Identificación de Cifras Significativas
* **Objetivo:** Identificar la cantidad de cifras significativas de cualquier número medido aplicando de forma estricta las reglas de los ceros.
* **Explicación:** Las cifras significativas son los dígitos confiables que se conocen de una medición. Reglas:
  1. Todos los dígitos distintos de cero son significativos.
  2. Los ceros entre dígitos distintos de cero son significativos (ej. 105 tiene 3 cifras).
  3. Los ceros a la izquierda del primer dígito distinto de cero **no** son significativos (ej. 0.0025 tiene 2 cifras).
  4. Los ceros al final de un decimal **sí** son significativos (ej. 45.00 tiene 4 cifras).
* **Ejemplo Resuelto:** Determina el número de cifras significativas en las siguientes mediciones: a) 0.0450 m, b) 8,002 kg.
  - *Paso 1 en 0.0450:* Los ceros a la izquierda no cuentan. El 4, 5 y el cero final a la derecha sí cuentan. Hay 3 cifras significativas.
  - *Paso 2 en 8,002:* Los ceros están intercalados entre dígitos no nulos. Cuentan todos. Hay 4 cifras significativas.
  - *Resultado:* a) 3 cifras, b) 4 cifras.
* **Errores Comunes:** Contar todos los ceros de un decimal pequeño como significativos por el simple hecho de estar escritos.
* **Ejercicios de Práctica:**
  1. ¿Cuántas cifras significativas tiene el valor 0.005? (R: 1 cifra).
  2. ¿Cuántas cifras significativas tiene 120.0 cm? (R: 4 cifras. Retroalimentación: El cero después del punto decimal indica precisión instrumental).
  3. ¿Cuántas cifras significativas tiene 4,500 metros si es una aproximación al millar? (R: 2 cifras. En notación científica es 4.5 x 10³).
  4. Identifica las cifras significativas en 1.0020 gramos. (R: 5 cifras).
  5. Si un instrumento tiene una precisión de décimas de milímetro y reportas L = 15.30 cm, ¿cuántas cifras significativas reportas? (R: 4 cifras).
* **¿Necesitas ayuda?** Las cifras significativas reflejan la realidad y honestidad de tu instrumento en el laboratorio. ¡Aprende a reportarlas correctamente con tu tutor!

### Lección 3.2: Operaciones con Cifras Significativas
* **Objetivo:** Realizar sumas, restas, multiplicaciones y divisiones conservando la cantidad correcta de cifras significativas en el resultado final.
* **Explicación:** Reglas operativas:
  - **Suma y Resta:** El resultado debe tener la misma cantidad de **posiciones decimales** que el dato que tenga menos decimales de todos.
  - **Multiplicación y División:** El resultado debe tener la misma cantidad de **cifras significativas totales** que el dato con menor número de cifras significativas.
* **Ejemplo Resuelto:** Un estudiante mide las dimensiones de una placa metálica rectangular: largo = $12.35 	ext{ cm}$ (4 cifras, 2 decimales) y ancho = $4.2 	ext{ cm}$ (2 cifras, 1 decimal). Calcula el área total aplicando las reglas de cifras significativas.
  - *Paso 1 Multiplicación básica:* $12.35 	imes 4.2 = 51.87 	ext{ cm}^2$.
  - *Paso 2 Aplicar regla de multiplicación:* La menor cantidad de cifras significativas en los factores es 2 (del ancho 4.2). El resultado final debe redondearse a exactamente 2 cifras significativas.
  - *Paso 3 Redondear:* 51.87 se redondea a 52.
  - *Resultado:* Área = $52 	ext{ cm}^2$.
* **Errores Comunes:** Dejar en el resultado final de una división todos los decimales que arroja la calculadora, dando una falsa impresión de precisión del experimento.
* **Ejercicios de Práctica:**
  1. Resuelve con cifras significativas: 15.42 + 8.1. (R: 23.5. Retroalimentación: Se limita a 1 decimal porque 8.1 solo tiene un decimal).
  2. Resuelve con cifras significativas: 4.0 x 1.25. (R: 5.0. Retroalimentación: Se limita a 2 cifras por el 4.0).
  3. Resta: 125.37 - 100.0. (R: 25.4. Retroalimentación: Se limita a 1 decimal).
  4. Divide: 36.0 / 3.00. (R: 12.0. Retroalimentación: Ambos datos tienen 3 cifras significativas).
  5. Multiplica: 0.0050 x 20.0. (R: 0.10. Retroalimentación: 0.0050 tiene 2 cifras; 20.0 tiene 3 cifras. El resultado debe tener 2 cifras: 0.10).
* **¿Necesitas ayuda?** Operar con decimales y cifras significativas es un dolor de cabeza común en los primeros laboratorios de química y física de bachillerato. ¡Asegura tu reporte con ayuda de tu tutor de CEDETU!

### Lección 3.3: Criterios de Redondeo en Ciencias
* **Objetivo:** Aplicar de forma uniforme los criterios de redondeo científicos, incluido el redondeo simétrico al entero par más cercano cuando el dígito a eliminar es exactamente 5.
* **Explicación:** Para redondear a un número determinado de cifras:
  - Si el dígito siguiente a eliminar es menor que 5, el último dígito conservado se queda igual.
  - Si es mayor que 5, el último dígito aumenta en 1.
  - Si es exactamente 5 (o 5 seguido de ceros): por convención científica se redondea al número par más cercano para evitar sesgar los datos estadísticamente.
* **Ejemplo Resuelto:** Redondea a 3 cifras significativas las mediciones: a) 4.234, b) 8.126, c) 2.345 (el dígito a eliminar es exactamente 5).
  - *Paso 1 en 4.234:* El cuarto dígito es 4 (<5). Se queda como 4.23.
  - *Paso 2 en 8.126:* El cuarto dígito es 6 (>5). Sube a 8.13.
  - *Paso 3 en 2.345:* El dígito a eliminar es exactamente 5. El dígito anterior es 4 (que es par). Por lo tanto, se queda como 2.34 (si fuera 2.335, se redondearía a 2.34 también para aproximarlo al par más cercano).
  - *Resultado:* a) 4.23, b) 8.13, c) 2.34.
* **Errores Comunes:** Redondear siempre hacia arriba en todos los casos que terminen en 5, lo cual acumula sesgos positivos sistemáticos en grandes bases de datos.
* **Ejercicios de Práctica:**
  1. Redondea 15.65 a 3 cifras significativas aplicando la regla del entero par. (R: 15.6).
  2. Redondea 0.002376 a 2 cifras significativas. (R: 0.0024).
  3. Redondea 98.25 a 3 cifras significativas usando la regla del entero par. (R: 98.2. Retroalimentación: 2 es par).
  4. Redondea 345,600 a 2 cifras significativas en notación científica. (R: 3.5 x 10⁵).
  5. ¿Cuál es el resultado de redondear 1.999 a 3 cifras significativas? (R: 2.00).
* **¿Necesitas ayuda?** Aprender las convenciones internacionales de redondeo te preparará de forma excelente para cursos universitarios de metrología. ¡Consúltalo con tu tutor de CEDETU!

## Evaluación Unidad 3
* Si sumas tres longitudes medidas por diferentes personas en un terreno de Antigua: 12.3 m (1 decimal), 150.45 m (2 decimales) y 0.234 m (3 decimales). ¿Cuál es la longitud total reportada con el número correcto de cifras significativas? (R: 163.0 m. Retroalimentación: Suma directa = 162.984. Se limita a 1 decimal por el término 12.3. Al redondear 162.984 a 1 decimal da 163.0 m).
* ¿Cuántas cifras significativas reporta un cronómetro digital que marca 0.0040 segundos? (R: 2 cifras. Los ceros a la izquierda no cuentan; el 4 y el cero final sí).
* Resuelve y redondea correctamente la operación: 45.3 / 2.50. (R: 18.1. Retroalimentación: 45.3 tiene 3 cifras; 2.50 tiene 3 cifras; el resultado debe tener 3 cifras: 18.12 se redondea a 18.1).
`,

    "vectores-fisica": `# Curso: Vectores en Física
* **Materia:** Ciencias | **Nivel sugerido:** Diversificado
* **Público objetivo:** Alumnos de bachillerato e ingeniería que desean comprender de forma profunda el álgebra de vectores y su aplicación práctica a fuerzas y movimientos en dos dimensiones.
* **Objetivos de aprendizaje:** Representar vectores gráfica y analíticamente en planos cartesianos, realizar sumas analíticas de vectores mediante componentes ortogonales y resolver aplicaciones prácticas de vectores en física de fuerzas concurrentes.

## Unidad 1: Magnitudes Escalares y Vectoriales
### Lección 1.1: Magnitudes Escalares y Vectoriales
* **Objetivo:** Diferenciar conceptualmente entre magnitudes que solo requieren un valor numérico y unidades (escalares) y aquellas que exigen dirección y sentido (vectoriales).
* **Explicación:** 
  - **Magnitud Escalar:** Se describe por completo con un número y su correspondiente unidad de medida (ej. temperatura: 37°C, masa: 5 kg, distancia: 10 m, tiempo: 5 s).
  - **Magnitud Vectorial:** Requiere un valor numérico (módulo), unidad y además una **dirección y sentido** para ser explicada con claridad (ej. velocidad: 80 km/h al norte, desplazamiento: 5 metros a 30° al este, fuerza: 10 N hacia abajo).
* **Ejemplo Resuelto:** Clasifica las siguientes variables en magnitudes escalares o vectoriales: 1) El viento sopla a 20 km/h rumbo al volcán de Agua en dirección suroeste, 2) Una maleta tiene un peso de 15 libras.
  - *Paso 1 Viento:* Se describe con una rapidez (20 km/h) y una dirección rumbo al volcán. Es una magnitud vectorial (velocidad).
  - *Paso 2 Maleta:* Se describe solo con su peso/masa de 15 libras. Es una magnitud escalar (masa/peso escalar).
  - *Resultado:* 1) Vectorial, 2) Escalar.
* **Errores Comunes:** Confundir rapidez (escalar, ej. 80 km/h) con velocidad (vectorial, ej. 80 km/h al oeste).
* **Ejercicios de Práctica:**
  1. Clasifica el tiempo de 45 minutos como escalar o vectorial. (R: Escalar).
  2. ¿Es la aceleración de gravedad hacia el centro de la Tierra una magnitud vectorial? (R: Sí. Tiene magnitud, unidad y dirección hacia abajo).
  3. Clasifica la temperatura ambiental en Quetzaltenango como escalar o vectorial. (R: Escalar).
  4. ¿Es la fuerza de empuje de una grúa que jala un bus en Ciudad de Guatemala un vector? (R: Sí. Requiere dirección para saber hacia dónde se desplaza el bus).
  5. ¿Cómo se define el término "módulo" o "magnitud" de un vector? (R: Es el tamaño o longitud del vector, representado por un valor numérico positivo e inmune a la dirección).
* **¿Necesitas ayuda?** Aprender a pensar en vectores te abrirá las puertas al mundo de la física clásica. ¡Conéctate con tu tutor de CEDETU y repasa los conceptos básicos!

### Lección 1.2: Representación Gráfica de Vectores
* **Objetivo:** Dibujar vectores en un plano cartesiano utilizando escalas adecuadas e identificar sus elementos geométricos (origen, extremo, ángulo).
* **Explicación:** Gráficamente un vector se representa como una flecha orientada en el plano cartesiano. Sus componentes clave son:
  - **Origen o cola:** Punto de partida del vector.
  - **Extremo o cabeza:** Punto de llegada indicado por la punta de la flecha.
  - **Módulo:** Longitud física de la flecha dibujada según una escala elegida (ej. 1 cm = 10 Newtons).
  - **Dirección:** Ángulo $	heta$ medido con respecto al eje X positivo en sentido antihorario.
* **Ejemplo Resuelto:** Representa gráficamente un vector de desplazamiento de 50 metros en dirección 143° (segundo cuadrante). ¿Cuál es su ángulo de referencia respecto al eje X negativo?
  - *Paso 1 Dibujar:* Dibuja los ejes X e Y. Ubica el transportador en el origen y marca 143° partiendo del eje X positivo en sentido antihorario. Dibuja la línea de la flecha.
  - *Paso 2 Ángulo de Referencia:* El eje X negativo está en 180°. El ángulo de referencia es la diferencia: $180^{circ} - 143^{circ} = 37^{circ}$.
  - *Resultado:* El vector se ubica en el segundo cuadrante y forma un ángulo de 37° con el eje X negativo.
* **Errores Comunes:** Medir el ángulo de dirección partiendo desde el eje Y o en sentido horario, violando la convención cartesiana estándar.
* **Ejercicios de Práctica:**
  1. ¿En qué cuadrante se localiza un vector cuya dirección angular es de 210°? (R: Tercer cuadrante (III)).
  2. Si defines una escala de 1 cm = 5 N, ¿cuántos cm debe medir la flecha de un vector de fuerza de 35 N? (R: 7 cm).
  3. ¿Cuál es el sentido de un vector situado sobre el eje Y negativo? (R: Hacia abajo).
  4. Si un vector apunta directamente hacia el sureste, ¿cuál es su dirección angular en posición normal? (R: 315°).
  5. ¿Cómo se representan dos vectores opuestos que tienen igual módulo y dirección pero sentidos contrarios? (R: Como dos flechas de igual tamaño paralelas que apuntan en direcciones opuestas).
* **¿Necesitas ayuda?** La física experimental requiere un dibujo técnico pulido y preciso de tus vectores. ¡Aprende a trazarlos de forma limpia con tu tutor de CEDETU!

### Lección 1.3: Sistemas de Coordenadas
* **Objetivo:** Convertir la representación de vectores de coordenadas polares $(R, 	heta)$ a coordenadas cartesianas $(x, y)$ y viceversa en el plano.
* **Explicación:** 
  - **Coordenadas Polares:** Expresan al vector por su magnitud $R$ y su dirección angular $	heta$: $(R, 	heta)$.
  - **Coordenadas Cartesianas:** Expresan al vector por sus componentes horizontal y vertical $(x, y)$.
  - Las fórmulas de conversión son:
    - Cartesianas a Polares: $R = sqrt{x^2 + y^2}$, $	heta = 	an^{-1}(y/x)$.
    - Polares a Cartesianas: $x = R cos(	heta)$, $y = R operatorname{sen}(	heta)$.
* **Ejemplo Resuelto:** Un excursionista en Petén viaja en una dirección descrita por el vector polar $(10 	ext{ km}, 30^{circ})$. Expresa esta posición en coordenadas cartesianas.
  - *Paso 1 Componente x:* $x = 10 cos(30^{circ}) = 10 	imes 0.866 = 8.66 	ext{ km}$.
  - *Paso 2 Componente y:* $y = 10 operatorname{sen}(30^{circ}) = 10 	imes 0.50 = 5.00 	ext{ km}$.
  - *Resultado:* El vector en coordenadas cartesianas es $(8.66, 5.00) 	ext{ km}$.
* **Errores Comunes:** Usar el coseno para calcular el componente vertical y el seno para el horizontal por distracción o mala memorización de fórmulas.
* **Ejercicios de Práctica:**
  1. Convierte el vector cartesiano (3, 4) cm a coordenadas polares. (R: (5 cm, 53.13°)).
  2. Calcula el componente horizontal x de un vector de fuerza de 50 N a 60° de dirección. (R: 25 N).
  3. Convierte a cartesianas el vector polar (8 m, 180°). (R: (-8, 0) m).
  4. Si un vector tiene componentes (-3, -3) m, ¿en qué cuadrante se localiza y cuál es su dirección en posición normal? (R: Tercer cuadrante, dirección de 225°).
  5. Calcula el módulo del vector cuyas componentes cartesianas son (12, 5) N. (R: 13 N).
* **¿Necesitas ayuda?** La trigonometría y los vectores están totalmente entrelazados. ¡Pide ayuda a tu tutor de CEDETU y aclara tus dudas al instante!

## Evaluación Unidad 1
* Un barco en el lago de Atitlán zarpa con rumbo norte $60^{circ}$ este (lo que equivale a una dirección de $30^{circ}$ en posición estándar) y viaja 12 km. Expresa su vector de desplazamiento en coordenadas polares y cartesianas. (R: Polar = (12 km, 30°); Cartesiana = (10.39, 6.00) km. Retroalimentación: x = 12cos(30°) = 10.39; y = 12sen(30°) = 6).
* Si las componentes de un vector de velocidad son v_x = -8 m/s y v_y = 6 m/s, calcula su magnitud y dirección angular en posición estándar. (R: Magnitud = 10 m/s, Dirección = 143.13°. Retroalimentación: v = √(-8)²+6² = 10. θ = tan⁻¹(6/-8) = -36.87°. Como está en el II cuadrante, sumamos 180° = 143.13°).
* ¿Qué componente de un vector es nula si este apunta verticalmente hacia abajo? (R: La componente horizontal x es exactamente cero).

---

## Unidad 2: Métodos Geométricos y Operaciones Básicas
### Lección 2.1: Suma Gráfica de Vectores (Triángulo y Polígono)
* **Objetivo:** Sumar múltiples vectores mediante el método gráfico de cabeza y cola (cola del segundo vector en la cabeza del primero) y trazar el vector resultante.
* **Explicación:** Para sumar vectores de forma gráfica:
  1. Dibuja el primer vector a escala con su respectivo ángulo partiendo del origen.
  2. Dibuja el segundo vector con su respectiva dirección y tamaño, pero colocando su origen exactamente en la punta de la flecha (extremo) del primer vector.
  3. Repite para todos los vectores (método del polígono).
  4. El **vector resultante** es la flecha trazada desde el origen del primer vector hasta la punta del último vector dibujado.
* **Ejemplo Resuelto:** Un aventurero camina en el Parque de Tikal 3 cm (a escala) al este y luego 4 cm al norte. Traza e interpreta gráficamente el vector resultante.
  - *Paso 1:* Dibuja un vector horizontal de 3 cm apuntando a la derecha (este).
  - *Paso 2:* En la punta de ese vector, dibuja un vector vertical de 4 cm apuntando hacia arriba (norte).
  - *Paso 3:* Traza una línea recta desde el origen hasta la punta del segundo vector. Dibuja la cabeza allí.
  - *Resultado:* El vector resultante forma la hipotenusa de un triángulo rectángulo de lados 3 y 4. Su longitud física es de 5 cm orientada hacia el noreste.
* **Errores Comunes:** Dibujar todos los vectores partiendo simultáneamente del mismo origen al aplicar el método del polígono, lo cual anula el resultado.
* **Ejercicios de Práctica:**
  1. ¿Cómo se le llama al vector que produce el mismo efecto que todos los vectores del sistema sumados juntos? (R: Vector Resultante).
  2. Si sumas un vector de 10 N al este con otro de 10 N al oeste, ¿cuál es el módulo del vector resultante? (R: 0 N. Se anulan mutuamente).
  3. Si caminas 8 m al norte y luego 6 m al sur, ¿cuál es tu desplazamiento resultante neto de forma gráfica? (R: 2 m hacia el norte).
  4. En el método del triángulo, ¿cuál es el origen del vector resultante? (R: El origen o cola del primer vector de la suma).
  5. Si sumas tres vectores que forman un triángulo cerrado continuo (la cabeza del tercero coincide con la cola del primero), ¿cuánto vale la resultante? (R: Vector Nulo o Cero).
* **¿Necesitas ayuda?** La suma gráfica ayuda a desarrollar una intuición espectacular para la física antes de programar fórmulas. ¡Practícala de forma dinámica con tu tutor!

### Lección 2.2: Método del Paralelogramo
* **Objetivo:** Calcular la magnitud del vector resultante de dos vectores concurrentes utilizando el método del paralelogramo y la Ley de Cosenos para vectores.
* **Explicación:** Si dos vectores parten del mismo origen, podemos trazar líneas paralelas a cada uno en sus extremos formando un paralelogramo. La resultante es la diagonal que parte del origen común. Su magnitud se calcula con la variante de la Ley de Cosenos:
  $R = sqrt{A^2 + B^2 + 2AB cos(	heta)}$
  donde $	heta$ es el ángulo entre los dos vectores concurrentes.
* **Ejemplo Resuelto:** Dos fuerzas concurrentes de $F_1 = 3 	ext{ N}$ y $F_2 = 4 	ext{ N}$ actúan sobre un mismo anillo con un ángulo de $60^{circ}$ entre ellas. Calcula la magnitud de la fuerza resultante.
  - *Paso 1 Plantea Fórmula:* $R = sqrt{3^2 + 4^2 + 2(3)(4) cos(60^{circ})}$.
  - *Paso 2 Opera:* $R = sqrt{9 + 16 + 24 	imes (0.5)} = sqrt{25 + 12} = sqrt{37}$.
  - *Paso 3:* $R approx 6.08$ Newtons.
  - *Resultado:* La magnitud de la fuerza resultante es de 6.08 N.
* **Errores Comunes:** Usar el signo menos del teorema de cosenos matemático clásico (que busca el lado opuesto de un triángulo) en lugar del signo más, que es el correcto al sumar vectores concurrentes en diagonal.
* **Ejercicios de Práctica:**
  1. Si dos vectores concurrentes de módulos 5 y 12 son perpendiculares (ángulo de 90°), ¿cuál es el módulo de la resultante? (R: 13. Retroalimentación: cos(90°) = 0, reduciéndose a Pitágoras).
  2. ¿Cuál es el rango de magnitud posible para la resultante de dos vectores de 10 N y 6 N al variar el ángulo entre ellos? (R: Entre 4 N y 16 N).
  3. Calcula la resultante de dos vectores de 3 N y 5 N que apuntan en la misma dirección (ángulo 0°). (R: 8 N. Retroalimentación: cos(0°) = 1; R = √3²+5²+30 = √64 = 8).
  4. Dos vectores iguales de magnitud F forman un ángulo de 120° entre sí. ¿Cuál es la magnitud de su resultante? (R: F. Retroalimentación: R = √F²+F²+2F²cos(120°) = √2F² - F² = F).
  5. ¿Qué dirección geométrica tiene la resultante de dos vectores de igual módulo que parten del mismo origen? (R: La bisectriz del ángulo formado por los dos vectores).
* **¿Necesitas ayuda?** El método del paralelogramo es fundamental para analizar la suspensión y el equilibrio de objetos. ¡Domínalo junto a tu tutor de CEDETU!

### Lección 2.3: Multiplicación de un Vector por un Escalar
* **Objetivo:** Multiplicar un vector por un número real (escalar) analizando cómo se modifica su módulo, dirección o sentido.
* **Explicación:** Al multiplicar un vector $ec{A}$ por un escalar $k$:
  - El nuevo módulo es $|k| cdot M$.
  - Si $k$ es **positivo**, la dirección y el sentido del vector se mantienen idénticos.
  - Si $k$ es **negativo**, el sentido del vector se invierte exactamente a la dirección opuesta ($180^{circ}$ de desfase).
* **Ejemplo Resuelto:** Un auto viaja a una velocidad constante descrita por el vector $ec{v} = (3 	ext{ m/s}, 4 	ext{ m/s})$ (cartesiano). Si acelera al triple, ¿cuál es su nuevo vector de velocidad?
  - *Paso 1:* Multiplica cada componente por el escalar $k = 3$:
    $ec{v}_{	ext{nuevo}} = 3 	imes (3, 4) = (3 	imes 3, 3 	imes 4) = (9, 12) 	ext{ m/s}$.
  - *Resultado:* El nuevo vector de velocidad es $(9, 12)$ m/s (la magnitud aumentó de 5 m/s a 15 m/s, pero mantiene la misma dirección).
* **Errores Comunes:** Olvidar multiplicar el componente vertical o cambiar el signo incorrectamente.
* **Ejercicios de Práctica:**
  1. Si un vector A tiene magnitud de 10 cm, ¿cuál es la magnitud del vector -2A? (R: 20 cm. Retroalimentación: El módulo siempre es positivo).
  2. ¿Qué le ocurre al sentido de un vector de fuerza si se multiplica por el escalar -1? (R: Se invierte exactamente en sentido contrario).
  3. Si A = (5, -2) N, calcula el vector resultante de 4A. (R: (20, -8) N).
  4. Si multiplicas un vector con dirección de 45° por el escalar -3, ¿cuál es la dirección angular del nuevo vector en posición normal? (R: 225°. Retroalimentación: 45° + 180° = 225°).
  5. ¿Qué es un "vector unitario"? (R: Un vector con magnitud exactamente igual a 1, utilizado para indicar una dirección en el espacio).
* **¿Necesitas ayuda?** La multiplicación escalar se utiliza para modelar las leyes físicas como F = ma. ¡Compréndela a fondo con ayuda de tu tutor de CEDETU!

## Evaluación Unidad 2
* Si dos fuerzas concurrentes F_1 y F_2 de igual módulo F producen una resultante de magnitud F√3, ¿cuál es el ángulo formado entre ellas? (R: 60°. Retroalimentación: R² = 3F² = F² + F² + 2F²cos(θ); F² = 2F²cos(θ); cos(θ) = 0.5; θ = 60°).
* Si A = (-3, 4) m y B = (12, 5) m, calcula el vector suma resultante S = A + B y su módulo. (R: S = (9, 9) m; Módulo = 9√2 m ≈ 12.73 m. Retroalimentación: S_x = -3+12 = 9; S_y = 4+5 = 9. Módulo = √9²+9² = 9√2).
* Si multiplicas un vector de desplazamiento de 5 metros hacia el este por un escalar de -0.5, ¿cuál es el vector resultante final? (R: 2.5 metros hacia el oeste).

---

## Unidad 3: Componentes Rectangulares y Aplicaciones
### Lección 3.1: Descomposición de Vectores en Componentes
* **Objetivo:** Calcular los componentes ortogonales de un vector a partir de su módulo y dirección empleando funciones trigonométricas.
* **Explicación:** Descomponer un vector consiste en proyectarlo sobre los ejes coordenados X e Y. Estos componentes actúan de forma independiente y se calculan como:
  - Componente horizontal: $A_x = A cos(	heta)$
  - Componente vertical: $A_y = A operatorname{sen}(	heta)$
  donde $A$ es la magnitud y $	heta$ el ángulo de dirección en posición normal.
* **Ejemplo Resuelto:** Un niño jala un carrito de madera en una plaza de Antigua aplicando una fuerza de 40 Newtons a través de una cuerda que forma un ángulo de $30^{circ}$ con el suelo. Calcula la componente horizontal de la fuerza que realmente tira del carro.
  - *Paso 1 Identificar:* Magnitud $F = 40$ N. Ángulo $	heta = 30^{circ}$.
  - *Paso 2 Componente Horizontal:* $F_x = F cos(30^{circ})$.
  - *Paso 3 Operar:* $F_x = 40 	imes 0.866 = 34.64$ Newtons.
  - *Resultado:* La fuerza útil horizontal que tira del carrito es de 34.64 N.
* **Errores Comunes:** Asumir que la componente horizontal siempre es con el coseno y la vertical con el seno; esto solo se cumple si el ángulo de referencia se mide respecto al eje horizontal X.
* **Ejercicios de Práctica:**
  1. Calcula la componente vertical de una fuerza de 100 N aplicada a 45° con la horizontal. (R: 70.71 N).
  2. Si un vector de velocidad de magnitud 20 m/s apunta en dirección de 270°, ¿cuáles son sus componentes cartesianos? (R: (0, -20) m/s).
  3. Calcula el componente horizontal x de un vector de desplazamiento de 12 m a 120° de dirección. (R: -6 m. Retroalimentación: 12 * cos(120°) = -6).
  4. Si un vector A tiene componentes A_x = 8 y A_y = -8, ¿cuánto vale su dirección en posición normal? (R: 315°).
  5. ¿Qué significa que dos componentes de un vector sean ortogonales? (R: Que son perpendiculares entre sí, formando un ángulo de 90°).
* **¿Necesitas ayuda?** La descomposición vectorial es la base para resolver cualquier problema de física clásica de nivel universitario. ¡Asegura tu destreza con tu tutor de CEDETU!

### Lección 3.2: Suma Analítica de Vectores por Componentes
* **Objetivo:** Sumar cualquier cantidad de vectores de forma exacta descomponiéndolos en sus componentes cartesianas, sumando los componentes en X e Y de forma independiente y reconstruyendo el vector resultante.
* **Explicación:** El método analítico es el más exacto:
  1. Descompón cada vector del sistema en sus componentes $(x, y)$.
  2. Suma algebraicamente todas las componentes horizontales para hallar la resultante en X: $R_x = sum A_x$.
  3. Suma algebraicamente todas las componentes verticales para hallar la resultante en Y: $R_y = sum A_y$.
  4. Calcula la magnitud del vector resultante final: $R = sqrt{R_x^2 + R_y^2}$.
  5. Determina la dirección angular: $	heta = 	an^{-1}(R_y / R_x)$, ajustando según el cuadrante.
* **Ejemplo Resuelto:** Suma analíticamente los vectores: $ec{A} = (5 	ext{ N}, 0^{circ})$ y $ec{B} = (10 	ext{ N}, 90^{circ})$.
  - *Paso 1 Descomponer:*
    - Vector A: $A_x = 5 cos(0^{circ}) = 5 	ext{ N}$, $A_y = 0 	ext{ N}$.
    - Vector B: $B_x = 0 	ext{ N}$, $B_y = 10 cos(0^{circ}) = 10 	ext{ N}$.
  - *Paso 2 Sumar:* $R_x = 5 + 0 = 5 	ext{ N}$. $R_y = 0 + 10 = 10 	ext{ N}$.
  - *Paso 3 Reconstruir Magnitud:* $R = sqrt{5^2 + 10^2} = sqrt{25 + 100} = sqrt{125} approx 11.18 	ext{ Newtons}$.
  - *Paso 4 Dirección:* $	heta = 	an^{-1}(10 / 5) = 	an^{-1}(2) approx 63.43^{circ}$.
  - *Resultado:* Magnitud = 11.18 N, Dirección = 63.43°.
* **Errores Comunes:** Olvidar colocar los signos negativos a las componentes que apuntan hacia el eje X negativo (oeste) o Y negativo (sur) al hacer la suma.
* **Ejercicios de Práctica:**
  1. Suma los vectores coplanares A = (3, 5) y B = (-2, -3). (R: (1, 2)).
  2. Calcula la resultante de tres fuerzas de 10 N, 20 N y 30 N que apuntan al norte (90°). (R: 60 N al norte).
  3. Si R_x = -3 y R_y = 3, calcula el ángulo de dirección de la resultante ajustado al segundo cuadrante. (R: 135°. Retroalimentación: tan⁻¹(3/-3) = -45°; sumamos 180° = 135°).
  4. Suma los vectores cartesianos F₁ = (8, -2) N y F₂ = (-5, 6) N. Calcula la magnitud de la resultante. (R: 5 N. Retroalimentación: R = (3, 4) N. Magnitud = √3²+4² = 5).
  5. ¿Por qué es el método analítico preferido sobre el método gráfico en ingeniería? (R: Porque no depende de la precisión del dibujo a mano y evita errores sistemáticos de medición instrumental).
* **¿Necesitas ayuda?** La suma analítica por componentes es la pregunta fija en exámenes parciales universitarios de física. ¡Practícala paso a paso de forma divertida junto a tu tutor de CEDETU!

### Lección 3.3: Aplicaciones en Física (Fuerzas y Equilibrio)
* **Objetivo:** Resolver problemas de estática y equilibrio traslacional aplicando la primera ley de Newton en términos vectoriales ($sum F_x = 0$ y $sum F_y = 0$).
* **Explicación:** Un sistema de fuerzas concurrentes está en equilibrio traslacional si la fuerza resultante neta es exactamente cero. Vectorialmente, esto exige resolver un sistema de dos ecuaciones independientes:
  - $sum F_x = 0$ (La suma de fuerzas horizontales es cero).
  - $sum F_y = 0$ (La suma de fuerzas verticales es cero).
* **Ejemplo Resuelto:** Un semáforo de 100 Newtons de peso cuelga simétricamente de dos cables tensores que forman ángulos de $30^{circ}$ con la horizontal a cada lado. Calcula la tensión (T) en cada cable.
  - *Paso 1 DCL y Ecuación Vertical:* Las fuerzas verticales que sostienen el semáforo son las componentes de las tensiones: $T_y + T_y - 	ext{Peso} = 0 Rightarrow 2 T operatorname{sen}(30^{circ}) - 100 = 0$.
  - *Paso 2 Opera:* Dado que $operatorname{sen}(30^{circ}) = 0.5$, la ecuación queda: $2 T (0.5) - 100 = 0$.
  - *Paso 3 Despeja:* $T - 100 = 0 Rightarrow T = 100 	ext{ Newtons}$.
  - *Resultado:* La tensión en cada cable de la instalación es de 100 Newtons.
* **Errores Comunes:** Olvidar incluir el peso propio del cuerpo o mezclar las componentes verticales de las tensiones con el coseno.
* **Ejercicios de Práctica:**
  1. Si un cuadro decorativo de 50 N de peso cuelga de un solo cable vertical, ¿cuál es la tensión de dicho cable? (R: 50 N).
  2. ¿Cuál es el valor de la fuerza resultante que actúa sobre un camión estacionado en una pendiente pronunciada de Xela si se encuentra en perfecto equilibrio? (R: 0 Newtons).
  3. Si un objeto de 20 kg se apoya en una mesa horizontal, ¿cuál es el valor de la fuerza normal vertical hacia arriba que ejerce la mesa? (g = 9.8 m/s²). (R: 196 N).
  4. Tres fuerzas tiran de un bloque. Si F₁ = 10 N al este y F₂ = 15 N al oeste, ¿cuál debe ser la magnitud y dirección de F₃ para mantener el bloque en equilibrio? (R: 5 N al este).
  5. ¿Qué ley física establece que para que un objeto no acelere, la fuerza neta vectorial sobre él debe ser nula? (R: Primera Ley de Newton o de la Inercia).
* **¿Necesitas ayuda?** La física de tensiones y cables requiere dominar sistemas de ecuaciones algebraicas sencillas. ¡Aprende a plantearlas con tu tutor de CEDETU y garantiza tu éxito!

## Evaluación Unidad 3
* Tres fuerzas coplanares actúan sobre un perno: F_1 = (10, 8) N, F_2 = (-4, 6) N y F_3 = (-6, -14) N. ¿Está el perno en equilibrio traslacional y cuál es la fuerza resultante neta? (R: Sí, está en perfecto equilibrio traslacional y la resultante es nula. Retroalimentación: ∑F_x = 10 - 4 - 6 = 0; ∑F_y = 8 + 6 - 14 = 0).
* Un bloque de 10 kg es arrastrado sobre un piso horizontal sin fricción por una fuerza de 50 N que forma un ángulo de 37° con la horizontal. Calcula la aceleración horizontal del bloque. (Dato: cos(37°) ≈ 0.8). (R: 4.0 m/s². Retroalimentación: F_x = 50 * 0.8 = 40 N. Aceleración a = F_x / m = 40 / 10 = 4 m/s²).
* Si tiras de un cable con una fuerza descrita por el vector polar (100 N, 240°), calcula sus componentes cartesianos. (R: (-50, -86.6) N. Retroalimentación: x = 100cos(240°) = -50; y = 100sen(240°) = -86.6).
`,

    "fisica-movimiento": `# Curso: Cinemática
* **Materia:** Ciencias | **Nivel sugerido:** Diversificado / Universidad
* **Público objetivo:** Alumnos que inician física clásica y necesitan dominar el movimiento y sus ecuaciones matemáticas.
* **Objetivos de aprendizaje:** Diferenciar entre distancia y desplazamiento, calcular velocidad media e interpretar el Movimiento Rectilíneo Uniforme (MRU) y Uniformemente Acelerado (MRUA).

## Unidad 1: Movimiento y Posición en Una Dimensión
### Lección 1.1: Distancia versus Desplazamiento
* **Objetivo:** Diferenciar de forma teórica y práctica entre una magnitud escalar (distancia) y una vectorial (desplazamiento).
* **Explicación:** La **distancia** es la longitud total de la trayectoria recorrida por un objeto sin importar el sentido (es un número siempre positivo, magnitud escalar). El **desplazamiento** es el cambio neto de posición de un objeto, medido en línea recta desde el punto de partida hasta el de llegada, e indica dirección (magnitud vectorial).
* **Ejemplo Resuelto:** Un repartidor de Antigua camina 50 metros al este y luego regresa 30 metros al oeste. ¿Cuál fue su distancia recorrida y su desplazamiento?
  - *Paso 1 Distancia:* Suma todas las longitudes: 50 m + 30 m = 80 m.
  - *Paso 2 Desplazamiento:* Toma en cuenta los sentidos. El este es positivo (+50 m) y el oeste es negativo (-30 m). Desplazamiento = +50 m - 30 m = +20 m (hacia el este).
  - *Resultado:* Distancia = 80 m, Desplazamiento = 20 m al este.
* **Errores Comunes:** Pensar que la distancia y el desplazamiento siempre valen lo mismo, lo cual solo ocurre en movimientos en línea recta sin cambios de sentido.
* **Ejercicios de Práctica:**
  1. Si corres alrededor de una pista circular de 400 metros y regresas exactamente al punto de partida, ¿cuál es tu distancia y tu desplazamiento? (R: Distancia = 400 m, Desplazamiento = 0 m).
  2. Un automóvil viaja 80 km hacia el norte y luego 60 km hacia el sur. ¿Cuál es su desplazamiento? (R: 20 km al norte).
  3. Un peatón camina 3 metros al norte y luego 4 metros al este. ¿Cuál es la distancia recorrida y cuál es el desplazamiento total en línea recta (módulo)? (R: Distancia = 7 m, Desplazamiento = 5 m. Retroalimentación: Usa el teorema de Pitágoras para el desplazamiento: √(3² + 4²) = 5).
  4. Si caminas 10 pasos hacia adelante y 10 pasos hacia atrás, ¿cuál es tu desplazamiento? (R: 0 pasos).
  5. Una hormiga recorre 1.5 metros por el borde de una regla. Si se arrepiente y regresa al inicio, ¿qué distancia recorrió? (R: 3.0 metros).
* **¿Necesitas ayuda?** La física vectorial requiere entender la diferencia entre "el camino largo" y "el atajo". ¡Un tutor de CEDETU te lo enseñará con sencillas animaciones interactivas!

### Lección 1.2: Velocidad y Rapidez
* **Objetivo:** Calcular la rapidez media (escalar) y la velocidad media (vectorial) a partir de la distancia, desplazamiento y tiempo empleado.
* **Explicación:** La **rapidez media** es la distancia dividida entre el tiempo total. La **velocidad media** es el desplazamiento dividido entre el tiempo empleado. En física, la velocidad lleva dirección, mientras que la rapidez no.
  * Rapidez media: $v = d / t$
  * Velocidad media: $\vec{v} = \Delta \vec{x} / t$
* **Ejemplo Resuelto:** Un bus extraurbano recorre 150 km en 2.5 horas. ¿Cuál fue su rapidez media en km/h y en m/s?
  - *Paso 1 km/h:* Divide la distancia por el tiempo: 150 km ÷ 2.5 h = 60 km/h.
  - *Paso 2 m/s:* Para convertir de km/h a m/s dividimos por 3.6: 60 ÷ 3.6 = 16.67 m/s.
  - *Resultado:* 60 km/h o 16.67 m/s.
* **Errores Comunes:** Olvidar convertir el tiempo a horas o a segundos según las unidades del Sistema Internacional requeridas.
* **Ejercicios de Práctica:**
  1. Si nadas 100 metros en 50 segundos, ¿cuál es tu rapidez media en m/s? (R: 2 m/s).
  2. Un ciclista viaja a una rapidez de 8 m/s. ¿Qué distancia recorrerá en un minuto? (R: 480 metros. Retroalimentación: 1 minuto = 60 segundos. Distancia = 8 × 60 = 480).
  3. Convierte 36 km/h a m/s. (R: 10 m/s. Retroalimentación: 36 ÷ 3.6 = 10).
  4. Un atleta corre 200 metros con rapidez constante de 5 m/s. ¿Cuánto tiempo tarda en recorrerlos? (R: 40 segundos. Retroalimentación: t = d/v = 200/5 = 40).
  5. Un rayo cae a 3,400 metros de distancia de ti. Si la velocidad del sonido es de 340 m/s, ¿cuántos segundos tardarás en escuchar el trueno? (R: 10 segundos).
* **¿Necesitas ayuda?** La conversión de unidades de velocidad (km/h a m/s) suele causar fallos en los parciales de física. ¡Asegura tus notas repasándolo con tu tutor!

### Lección 1.3: Movimiento Rectilíneo Uniforme (MRU)
* **Objetivo:** Resolver problemas de movimiento donde el objeto viaja en línea recta y a velocidad constante (sin aceleración).
* **Explicación:** En el MRU la velocidad no cambia; el objeto recorre distancias iguales en tiempos iguales. La ecuación clave es:
  * Distancia = Velocidad × Tiempo ($d = v \times t$)
* **Ejemplo Resuelto:** Dos automóviles de carga salen de Ciudad de Guatemala hacia Quetzaltenango (distancia de 200 km). El auto A viaja a 50 km/h constantes y el auto B a 80 km/h constantes. ¿Con cuánto tiempo de diferencia llegará el auto B respecto al A?
  - *Paso 1 Auto A:* Tiempo_A = d ÷ v_A = 200 km ÷ 50 km/h = 4 horas.
  - *Paso 2 Auto B:* Tiempo_B = d ÷ v_B = 200 km ÷ 80 km/h = 2.5 horas.
  - *Paso 3 Diferencia:* Tiempo_A - Tiempo_B = 4 h - 2.5 h = 1.5 horas.
  - *Resultado:* El auto B llegará 1.5 horas antes (1 hora y 30 minutos).
* **Errores Comunes:** Utilizar esta ecuación simple cuando el movimiento involucra aceleraciones o frenadas.
* **Ejercicios de Práctica:**
  1. ¿Qué distancia recorre un tren que viaja a 90 km/h constantes durante 4 horas? (R: 360 km).
  2. Si una onda de radio viaja a la velocidad de la luz (300,000 km/s), ¿cuántos segundos tarda en llegar a la Luna si la distancia es de 384,000 km? (R: 1.28 segundos).
  3. Si caminas a una velocidad constante de 1.5 m/s, ¿cuánto tardas en recorrer 150 metros? (R: 100 segundos).
  4. Un motociclista de la capital viaja a 20 m/s constantes. ¿Qué distancia en kilómetros recorre en media hora? (R: 36 km. Retroalimentación: Media hora = 1,800 segundos. Distancia = 20 × 1,800 = 36,000 m = 36 km).
  5. Dos corredores corren en sentidos opuestos alejándose con velocidades de 3 m/s y 5 m/s. ¿Qué distancia los separa tras 10 segundos? (R: 80 metros. Retroalimentación: Se alejan a una velocidad relativa de 3 + 5 = 8 m/s. d = 8 × 10 = 80).
* **¿Necesitas ayuda?** Los problemas de encuentro y persecución en MRU son desafíos clásicos de física de diversificado. ¡Domina los planteos de sistemas físicos con tu tutor de CEDETU!

## Evaluación Unidad 1
* Un auto viaja a 72 km/h constantes. ¿Cuántos metros recorre en un lapso de 15 segundos? (R: 300 metros. Retroalimentación: Convierte 72 km/h a m/s: 72 ÷ 3.6 = 20 m/s. Distancia = 20 × 15 = 300 m).
* Diferencia conceptual: Si das una vuelta a una cuadra de 100 metros por lado y vuelves al inicio, ¿cuál fue tu desplazamiento y la distancia? (R: Distancia = 400 m, Desplazamiento = 0 m).
* Si una señal de sonido tarda 4 segundos en rebotar del fondo del mar y la velocidad del sonido en el agua es 1,500 m/s, ¿cuál es la profundidad? (R: 3,000 metros. Retroalimentación: El sonido viaja de ida y vuelta, por lo que tarda 2 segundos de ida. Profundidad = 1,500 × 2 = 3,000 m).

---

## Unidad 2: Aceleración y MRUA
### Lección 2.1: El Concepto de Aceleración
* **Objetivo:** Calcular la aceleración media de un móvil a partir del cambio en su velocidad y el intervalo de tiempo.
* **Explicación:** La aceleración representa qué tan rápido cambia la velocidad de un objeto. Si un objeto aumenta su velocidad, la aceleración es positiva; si frena o disminuye su velocidad (desaceleración), la aceleración es negativa. La unidad de medida en el SI es metros por segundo al cuadrado ($m/s^2$).
  * Aceleración: $a = (v_f - v_i) / t$
* **Ejemplo Resuelto:** Un auto deportivo en la autopista de Escuintla parte del reposo y alcanza una velocidad de 30 m/s en un tiempo de 6 segundos. ¿Cuál fue su aceleración media?
  - *Paso 1:* Identifica los datos: velocidad inicial ($v_i = 0$ ya que parte del reposo), velocidad final ($v_f = 30$ m/s), tiempo ($t = 6$ s).
  - *Paso 2:* Aplica la fórmula: $a = (30 - 0) ÷ 6 = 30 ÷ 6 = 5$.
  - *Resultado:* Aceleración = $5 m/s^2$.
* **Errores Comunes:** Olvidar restar la velocidad inicial o confundir las unidades de aceleración con las de velocidad.
* **Ejercicios de Práctica:**
  1. Un vehículo frena pasando de 25 m/s a 5 m/s en 4 segundos. ¿Cuál fue su aceleración? (R: -5 m/s². Retroalimentación: Al frenar, la aceleración es negativa: (5 - 25)/4 = -5).
  2. Si una moto arranca con aceleración constante de 3 m/s², ¿cuál será su velocidad tras 8 segundos? (R: 24 m/s).
  3. Un objeto cae desde un edificio partiendo del reposo. Si la aceleración de la gravedad es de 9.8 m/s², ¿qué velocidad tendrá tras 3 segundos? (R: 29.4 m/s).
  4. ¿Cuánto tiempo tarda un corredor en pasar de 2 m/s a 8 m/s si acelera a razón de 1.5 m/s²? (R: 4 segundos. Retroalimentación: t = (8 - 2)/1.5 = 4).
  5. Un tren viaja a 40 m/s y frena a razón de -2 m/s². ¿Cuánto tiempo tarda en detenerse por completo? (R: 20 segundos).
* **¿Necesitas ayuda?** La aceleración mide el "cambio", no el movimiento mismo. ¡Toma una tutoría rápida en CEDETU y despeja todas tus dudas conceptuales!

### Lección 2.2: Ecuaciones del MRUA
* **Objetivo:** Resolver problemas de movimiento acelerado eligiendo y aplicando la ecuación correcta según los datos provistos.
* **Explicación:** En el MRUA la aceleración es constante. Existen 4 ecuaciones fundamentales para relacionar distancia ($d$), velocidad inicial ($v_i$), velocidad final ($v_f$), aceleración ($a$) y tiempo ($t$):
  1. $v_f = v_i + a \cdot t$
  2. $d = v_i \cdot t + (1/2) \cdot a \cdot t^2$
  3. $v_f^2 = v_i^2 + 2 \cdot a \cdot d$
  4. $d = ((v_i + v_f) / 2) \cdot t$
* **Ejemplo Resuelto:** Un auto acelera de 10 m/s a 20 m/s a lo largo de una distancia de 75 metros en línea recta. ¿Cuánto vale su aceleración?
  - *Paso 1:* Identifica datos: $v_i = 10$ m/s, $v_f = 20$ m/s, $d = 75$ m. Queremos $a$. El tiempo $t$ no está en los datos.
  - *Paso 2:* Elegimos la ecuación que no requiere tiempo (Ecuación 3): $v_f^2 = v_i^2 + 2ad$.
  - *Paso 3:* Reemplaza: $20^2 = 10^2 + 2 \cdot a \cdot 75 \Rightarrow 400 = 100 + 150a$.
  - *Paso 4:* Despeja $a$: $400 - 100 = 150a \Rightarrow 300 = 150a \Rightarrow a = 300 ÷ 150 = 2$.
  - *Resultado:* Aceleración = $2 m/s^2$.
* **Errores Comunes:** Escoger una ecuación que contenga dos variables desconocidas, haciendo imposible el despeje.
* **Ejercicios de Práctica:**
  1. Un auto parte del reposo y acelera a 4 m/s² durante 5 segundos. ¿Qué distancia recorre? (R: 50 metros. Retroalimentación: d = 0 × 5 + 0.5 × 4 × 5² = 50).
  2. Si un móvil viaja a 15 m/s y frena hasta detenerse en 30 metros, ¿cuál fue su desaceleración? (R: -3.75 m/s². Retroalimentación: 0 = 15² + 2 × a × 30; a = -225/60 = -3.75).
  3. Con los datos del ejercicio anterior, ¿cuánto tiempo tardó en detenerse? (R: 4 segundos. Retroalimentación: d = ((15 + 0)/2) × t; 30 = 7.5t; t = 4).
  4. Un avión necesita alcanzar 60 m/s para despegar. Si acelera a 3 m/s² desde el reposo, ¿qué longitud mínima de pista necesita? (R: 600 metros).
  5. Una motocicleta acelera a 2 m/s² partiendo del reposo. ¿Cuál será su velocidad final al cabo de recorrer 100 metros? (R: 20 m/s. Retroalimentación: v_f² = 0 + 2 × 2 × 100 = 400; v_f = 20).
* **¿Necesitas ayuda?** Aprender a elegir "cuál de las 4 fórmulas usar" es el truco dorado del MRUA. ¡Tu tutor de CEDETU te enseñará una tabla de selección infalible!

### Lección 2.3: Caída Libre y Tiro Vertical
* **Objetivo:** Resolver problemas de movimiento vertical bajo la influencia exclusiva de la gravedad terrestre.
* **Explicación:** La caída libre es un caso especial de MRUA en el eje vertical (Y), donde la aceleración siempre es igual a la gravedad de la Tierra ($g = 9.8 m/s^2$ o $10 m/s^2$ para simplificar cálculos). Al lanzar un objeto hacia arriba, su velocidad disminuye hasta llegar a cero en su punto más alto (altura máxima) y luego cae acelerando.
* **Ejemplo Resuelto:** Se deja caer una piedra desde un puente de 45 metros de altura. ¿Cuánto tiempo tardará en impactar contra el agua? (Usa $g = 10 m/s^2$).
  - *Paso 1:* Identifica datos: $v_i = 0$ (se deja caer), altura/distancia $d = 45$ m, gravedad $a = 10 m/s^2$.
  - *Paso 2:* Elegimos la fórmula de distancia vertical: $d = v_i \cdot t + (1/2) \cdot g \cdot t^2 \Rightarrow 45 = 0 \cdot t + (1/2) \cdot 10 \cdot t^2$.
  - *Paso 3:* Simplifica: $45 = 5 \cdot t^2$.
  - *Paso 4:* Despeja $t$: $t^2 = 45 ÷ 5 = 9 \Rightarrow t = \sqrt{9} = 3$.
  - *Resultado:* Tardará 3 segundos.
* **Errores Comunes:** Olvidar que la gravedad siempre jala hacia abajo, por lo que si definimos que hacia arriba es positivo, la gravedad debe ingresarse como negativa ($-9.8 m/s^2$).
* **Ejercicios de Práctica:**
  1. Si lanzas una pelota verticalmente hacia arriba a 20 m/s, ¿cuánto tiempo tarda en alcanzar su punto más alto? (Usa g = 10 m/s²). (R: 2 segundos. Retroalimentación: En la altura máxima v_f = 0. 0 = 20 - 10t; t = 2).
  2. Con los datos del ejercicio anterior, ¿cuál es la altura máxima alcanzada por la pelota? (R: 20 metros. Retroalimentación: d = ((20 + 0)/2) × 2 = 20 m).
  3. Se deja caer un objeto desde lo alto de una torre y tarda 4 segundos en tocar el suelo. ¿De qué altura cayó? (Usa g = 9.8 m/s²). (R: 78.4 metros. Retroalimentación: d = 0.5 × 9.8 × 4² = 78.4 m).
  4. ¿Con qué velocidad inicial se debe lanzar un objeto verticalmente hacia arriba para que alcance una altura de 80 metros? (Usa g = 10 m/s²). (R: 40 m/s).
  5. Una manzana cae de un árbol y toca el suelo en 0.8 segundos. ¿Con qué rapidez impacta el suelo? (Usa g = 10 m/s²). (R: 8 m/s).
* **¿Necesitas ayuda?** La física del movimiento vertical tiene reglas estrictas de signos según el marco de referencia que elijas. ¡Toma una clase con un tutor y olvídate de fallar por culpa de un signo!

## Evaluación Unidad 2
* Un auto de carreras parte del reposo con aceleración constante de 6 m/s². ¿Qué velocidad tendrá tras recorrer una distancia de 75 metros? (R: 30 m/s. Retroalimentación: v_f² = 0 + 2 × 6 × 75 = 900; v_f = 30).
* Se lanza un objeto verticalmente hacia arriba con una velocidad de 30 m/s. ¿Cuánto tiempo permanece en el aire en total antes de regresar al suelo? (Usa g = 10 m/s²). (R: 6 segundos. Retroalimentación: Tarda 3 segundos en subir y otros 3 segundos en bajar).
* Un conductor que viaja a 20 m/s ve un obstáculo y frena con desaceleración constante de -4 m/s². ¿Qué distancia recorre el auto antes de detenerse? (R: 50 metros).

---

## Unidad 3: Movimiento en Dos Dimensiones
### Lección 3.1: Composición de Movimientos (Tiro Parabólico)
* **Objetivo:** Resolver problemas de proyectiles analizando de forma independiente el eje horizontal (MRU) y el eje vertical (MRUA).
* **Explicación:** El tiro parabólico es el movimiento de un proyectil lanzado con cierto ángulo. Se descompone en dos movimientos simultáneos y perpendiculares:
  * **Eje X (horizontal):** Sin fuerzas que actúen, viaja con velocidad constante (MRU).
  * **Eje Y (vertical):** Afectado por la gravedad, experimenta aceleración constante (MRUA / Caída Libre).
* **Ejemplo Resuelto:** Una pelota es lanzada horizontalmente desde lo alto de una mesa de 1.25 metros de altura con una velocidad de 4 m/s. ¿A qué distancia de la base de la mesa caerá la pelota? (Usa $g = 10 m/s^2$).
  - *Paso 1 Tiempo de Caída (Eje Y):* $h = (1/2) \cdot g \cdot t^2 \Rightarrow 1.25 = 5t^2 \Rightarrow t^2 = 1.25 ÷ 5 = 0.25 \Rightarrow t = \sqrt{0.25} = 0.5$ segundos.
  - *Paso 2 Alcance Horizontal (Eje X):* $d = v_x \cdot t \Rightarrow d = 4 \text{ m/s} \times 0.5 \text{ s} = 2$ metros.
  - *Resultado:* Caerá a 2 metros de la base.
* **Errores Comunes:** Intentar mezclar la velocidad del eje X con las fórmulas de gravedad del eje Y.
* **Ejercicios de Práctica:**
  1. Si un proyectil es lanzado con velocidad horizontal de 15 m/s desde una altura de 20 metros, ¿cuánto tiempo tarda en caer? (Usa g = 10 m/s²). (R: 2 segundos).
  2. Con los datos del ejercicio anterior, ¿cuál es el alcance horizontal total del proyectil? (R: 30 metros. Retroalimentación: d = v_x × t = 15 × 2 = 30 m).
  3. Un deportista patea un balón con un ángulo tal que su velocidad inicial en el eje X es de 12 m/s y en el eje Y es de 20 m/s. ¿Cuál es el tiempo de vuelo del balón? (Usa g = 10 m/s²). (R: 4 segundos. Retroalimentación: Tarda 2 segundos en subir y 2 en bajar).
  4. Con los datos del ejercicio anterior, ¿cuál fue la distancia horizontal total (alcance) del balón? (R: 48 metros. Retroalimentación: d = v_x × t_vuelo = 12 × 4 = 48 m).
  5. ¿Qué velocidad vertical tiene un proyectil en su punto más alto de trayectoria parabólica? (R: 0 m/s. Retroalimentación: Toda la velocidad en ese punto es únicamente horizontal).
* **¿Necesitas ayuda?** El movimiento parabólico es el tema estrella en los exámenes finales de física de bachillerato. ¡Asegura tu comprensión practicando los componentes vectoriales con un tutor experto de CEDETU!

### Lección 3.2: Movimiento Circular Uniforme (MCU)
* **Objetivo:** Calcular el período, frecuencia, velocidad angular y aceleración centrípeta de un objeto con trayectoria circular constante.
* **Explicación:** En el MCU el objeto gira en círculos con rapidez constante. Aunque la rapidez no cambia, la **dirección** de la velocidad sí cambia continuamente. Este cambio de dirección genera una aceleración que apunta siempre hacia el centro del círculo, llamada **aceleración centrípeta** ($a_c$).
  * Velocidad angular: $\omega = 2\pi / T$
  * Aceleración centrípeta: $a_c = v^2 / r$
* **Ejemplo Resuelto:** Un objeto gira en una pista circular de 2 metros de radio con una velocidad tangencial constante de 6 m/s. ¿Cuál es su aceleración centrípeta?
  - *Paso 1:* Identifica datos: radio $r = 2$ m, velocidad $v = 6$ m/s.
  - *Paso 2:* Aplica la fórmula: $a_c = v^2 ÷ r = 6^2 ÷ 2 = 36 ÷ 2 = 18$.
  - *Resultado:* $18 m/s^2$.
* **Errores Comunes:** Pensar que la aceleración en el movimiento circular es cero porque el velocímetro marca una rapidez constante.
* **Ejercicios de Práctica:**
  1. Si un disco da 30 vueltas completas en un minuto, ¿cuál es su período en segundos? (R: 2 segundos. Retroalimentación: Período = tiempo / vueltas = 60 / 30 = 2).
  2. Con los datos del ejercicio anterior, ¿cuál es su frecuencia en Hertz (Hz)? (R: 0.5 Hz. Retroalimentación: Frecuencia = 1 / Período = 0.5).
  3. Un carro de juguete gira en un círculo de 0.5 metros de radio con rapidez constante. Si su aceleración centrípeta es de 8 m/s², ¿cuál es su rapidez lineal? (R: 2 m/s. Retroalimentación: v² = a_c × r = 8 × 0.5 = 4; v = √4 = 2).
  4. Calcula la velocidad angular (rad/s) de un ventilador que da una vuelta completa cada 0.2 segundos. (R: 31.4 rad/s. Retroalimentación: ω = 2π / T = 2 × 3.14 / 0.2 = 31.4).
  5. ¿Hacia dónde apunta la fuerza centrípeta que mantiene a un satélite girando alrededor de la Tierra? (R: Hacia el centro de la Tierra, provocada por la gravedad).
* **¿Necesitas ayuda?** Entender el movimiento circular es fundamental para entender poleas, engranajes y astronomía. ¡Toma una tutoría virtual en CEDETU y aclara tus conceptos!

### Lección 3.3: Aplicaciones Didácticas y del Entorno
* **Objetivo:** Resolver problemas de movimiento contextualizados a la infraestructura y geografía de Guatemala y Centroamérica.
* **Explicación:** Aplicar los conceptos de movimiento a situaciones locales (como las curvas de la autopista Palín-Escuintla, el recorrido de buses de transporte extraurbano, o los tiempos de caída en los barrancos de la capital) ayuda a que los conceptos físicos tengan verdadero sentido práctico.
* **Ejemplo Resuelto:** Un bus extraurbano recorre la carretera Interamericana de Ciudad de Guatemala a Tecpán (88 km). Si sale a las 7:00 AM y su rapidez promedio es de 44 km/h debido al tráfico de San Lucas, ¿a qué hora llegará a su destino?
  - *Paso 1:* Calcula el tiempo de viaje: $t = d ÷ v = 88 \text{ km} ÷ 44 \text{ km/h} = 2$ horas.
  - *Paso 2:* Suma el tiempo de viaje a la hora de salida: 7:00 AM + 2 horas = 9:00 AM.
  - *Resultado:* Llegará a las 9:00 AM.
* **Errores Comunes:** Trabajar con unidades de distancia en metros y de tiempo en horas sin hacer la homogeneización previa de las variables.
* **Ejercicios de Práctica:**
  1. Si un puente peatonal de la Calzada Roosevel tiene 6 metros de altura, ¿cuánto tardaría una moneda en golpear el asfalto si se deja caer libremente? (Usa g = 10 m/s²). (R: 1.1 segundos. Retroalimentación: t = √(2h/g) = √(12/10) = √1.2 = 1.1s).
  2. Un camión de carga de caña de azúcar viaja por la costa sur a 54 km/h. ¿A cuántos metros por segundo equivale esta velocidad? (R: 15 m/s. Retroalimentación: 54 / 3.6 = 15).
  3. Si vas en una curva de la bajada de las Cañas a Antigua a 10 m/s y el radio de curvatura es de 25 metros, ¿qué aceleración centrípeta experimentas? (R: 4 m/s²).
  4. Para evitar colisiones en la autopista, se requiere que la distancia de frenado de un auto a 80 km/h sea de 40 metros. ¿Qué desaceleración constante de frenos debe garantizar el auto? (R: -6.17 m/s²).
  5. Un niño suelta un barrilete gigante en Sumpango desde lo alto de una colina de 80 metros de altura. ¿Cuánto tardaría en llegar al suelo si cayera verticalmente como un cuerpo libre? (Usa g = 10 m/s²). (R: 4 segundos).
* **¿Necesitas ayuda?** La física se vive todos los días a nuestro alrededor. ¡Tu tutor de CEDETU te enseñará a ver el mundo con ojos de científico para que disfrutes y ganes tus materias!

## Evaluación Unidad 3
* Un objeto es lanzado desde un puente con una velocidad horizontal de 20 m/s y tarda 3 segundos en tocar el lecho del río. ¿Cuál es la altura del puente y a qué distancia horizontal de la vertical de lanzamiento cayó? (Usa g = 10 m/s²). (R: Altura = 45 m, Distancia horizontal = 60 m. Retroalimentación: h = 0.5 × 10 × 3² = 45 m. d = 20 × 3 = 60 m).
* Un auto de juguete recorre una pista circular de 4 metros de diámetro dando una vuelta completa cada 2 segundos. ¿Cuál es su velocidad lineal y su aceleración centrípeta? (R: Velocidad = 6.28 m/s, Aceleración centrípeta = 19.74 m/s². Retroalimentación: Radio r = 2m. v = 2πr / T = 12.56/2 = 6.28 m/s. a_c = v²/r = 39.48/2 = 19.74 m/s²).
* Si lanzas un balón de básquetbol con un ángulo de elevación de forma que su velocidad vertical inicial es de 8 m/s, ¿cuál es la altura máxima que alcanzará antes de empezar a caer? (Usa g = 10 m/s²). (R: 3.2 metros. Retroalimentación: h = v_iy² / 2g = 64 / 20 = 3.2 m).
\`,

    // -----------------------------------------------------------------
    // C. ESTADÍSTICA
    // -----------------------------------------------------------------
    
    "curso-estadistica-aplicada": \`# Curso: Estadística Descriptiva
* **Materia:** Matemáticas | **Nivel sugerido:** Diversificado / Universidad
* **Público objetivo:** Estudiantes de bachillerato, administración o ingeniería que se inician en el análisis exploratorio de datos.
* **Objetivos de aprendizaje:** Organizar datos en tablas de frecuencia, graficar distribuciones de datos, calcular las medidas de tendencia central y medir la variabilidad de una muestra.

## Unidad 1: Organización y Presentación de Datos
### Lección 1.1: Tablas de Frecuencia para Datos No Agrupados
* **Objetivo:** Organizar un conjunto de datos brutos en una tabla estructurada que muestre la frecuencia absoluta, acumulada, relativa y porcentual.
* **Explicación:** 
  * **Frecuencia Absoluta ($f$):** Número de veces que aparece un valor.
  * **Frecuencia Acumulada ($F$):** Suma sucesiva de las frecuencias absolutas.
  * **Frecuencia Relativa ($fr$):** Frecuencia absoluta dividida entre el total de datos ($n$).
  * **Frecuencia Porcentual ($f\%$):** Frecuencia relativa multiplicada por 100.
* **Ejemplo Resuelto:** Durante una semana se encuestó a 10 familias de un condominio sobre la cantidad de hijos que tienen. Los datos fueron: 2, 1, 0, 2, 3, 2, 1, 0, 1, 2. Organiza el dato '2 hijos' en la tabla.
  - *Paso 1 Frecuencia Absoluta:* Cuenta cuántas familias tienen exactamente 2 hijos. Los datos son: [2, 2, 2, 2]. Hay 4 familias. Frecuencia absoluta ($f = 4$).
  - *Paso 2 Frecuencia Relativa:* Divide el valor entre el total de encuestados ($n = 10$): $fr = 4 ÷ 10 = 0.40$.
  - *Paso 3 Frecuencia Porcentual:* Multiplica por 100: $f\% = 0.40 \times 100 = 40\%$.
  - *Resultado:* El valor 2 tiene una frecuencia de 4 familias, que representa el 40% del total.
* **Errores Comunes:** Sumar incorrectamente las frecuencias relativas; la suma de todas las frecuencias relativas debe dar exactamente 1 (o 100% en porcentuales).
* **Ejercicios de Práctica:**
  1. En una muestra de 20 estudiantes, 5 tienen notas excelentes. ¿Cuál es la frecuencia relativa de alumnos excelentes? (R: 0.25).
  2. Con los datos anteriores, ¿a qué porcentaje equivale? (R: 25%).
  3. Si la frecuencia acumulada del tercer intervalo en una tabla es 15 y la frecuencia absoluta del cuarto intervalo es 6, ¿cuál es la frecuencia acumulada del cuarto intervalo? (R: 21. Retroalimentación: F_4 = F_3 + f_4 = 15 + 6 = 21).
  4. ¿Qué tipo de gráfico es el más adecuado para representar la frecuencia de una variable cualitativa nominal (como el color favorito)? (R: Gráfico de barras o circular).
  5. En una encuesta de satisfacción, 8 personas respondieron "Muy Bueno" de un total de 40. ¿Cuál es el porcentaje de esta respuesta? (R: 20%).
* **¿Necesitas ayuda?** Construir tablas de frecuencias largas puede ser monótono y dar lugar a errores de conteo sencillos. ¡Aprende a estructurarlas con ayuda de tu tutor de forma divertida!

### Lección 1.2: Histogramas y Polígonos de Frecuencia
* **Objetivo:** Diseñar e interpretar gráficos de distribución de datos agrupados para variables cuantitativas continuas.
* **Explicación:** Un **histograma** es un gráfico de barras verticales pegadas entre sí, donde el ancho de la barra representa el intervalo de la clase (límites reales) y la altura representa la frecuencia. El **polígono de frecuencia** se forma uniendo con líneas rectas los puntos medios (marcas de clase) de las partes superiores de las barras del histograma.
* **Ejemplo Resuelto:** Un grupo de estudio midió la estatura en metros de 30 estudiantes y agrupó los datos en intervalos. El intervalo [1.50 - 1.60) tiene una frecuencia de 12 alumnos. ¿Cómo se dibuja esta barra en el histograma?
  - *Paso 1:* En el eje horizontal (X), marca el inicio en 1.50 y el final en 1.60.
  - *Paso 2:* En el eje vertical (Y), rotula las frecuencias de 1 en 1 o de 2 en 2 hasta llegar al menos a 12.
  - *Paso 3:* Dibuja una barra que inicie exactamente en 1.50, termine en 1.60 y tenga una altura de 12 unidades.
  - *Resultado:* Una barra rectangular de ancho 0.10 y altura 12.
* **Errores Comunes:** Dibujar el histograma con las barras separadas (esto es un gráfico de barras para datos categóricos, no un histograma de variables continuas).
* **Ejercicios de Práctica:**
  1. ¿Qué representa la "marca de clase" en una tabla de datos agrupados? (R: El punto medio del intervalo. Se calcula sumando el límite inferior más el superior y dividiendo entre 2).
  2. Si el intervalo es [20, 30), ¿cuál es su marca de clase? (R: 25).
  3. Si la base de una barra en un histograma va de 10.5 a 15.5, ¿cuál es la amplitud del intervalo? (R: 5).
  4. ¿Para qué tipo de datos es ideal el uso de una gráfica de sectores o pastel? (R: Para variables categóricas que representan porcentajes de un todo).
  5. Si el polígono de frecuencias toca el eje X al inicio y al final, ¿en qué valores lo hace? (R: En las marcas de clase ficticias anterior a la primera y posterior a la última con frecuencia cero).
* **¿Necesitas ayuda?** Interpretar gráficos estadísticos es una de las preguntas fijas del examen de matemáticas de admisión a la universidad. ¡Toma una tutoría en CEDETU y asegúrate esos puntos!

### Lección 1.3: Diagramas de Caja y Bigotes (Boxplot)
* **Objetivo:** Representar y analizar de forma visual la dispersión y asimetría de un conjunto de datos a partir de sus cinco medidas clave (mínimo, Q1, mediana, Q3 y máximo).
* **Explicación:** Un boxplot resume gráficamente la distribución de los datos. La "caja" contiene el 50% central de los datos, delimitada por el Primer Cuartil (Q1) a la izquierda y el Tercer Cuartil (Q3) a la derecha. Una línea interna marca la Mediana (Q2). Los "bigotes" se extienden hasta el valor mínimo y máximo no atípicos.
* **Ejemplo Resuelto:** Dados los cuartiles de un examen sobre 100 puntos: Mínimo = 40, Q1 = 55, Mediana = 70, Q3 = 85, Máximo = 95. ¿Qué porcentaje de alumnos obtuvieron una nota superior a 85 puntos?
  - *Paso 1:* Identifica que 85 puntos corresponde al Tercer Cuartil (Q3).
  - *Paso 2:* Por definición de cuartiles, el Q3 divide los datos dejando el 75% por debajo y el 25% por encima de su valor.
  - *Resultado:* El 25% de los alumnos obtuvo una nota superior a 85 puntos.
* **Errores Comunes:** Pensar que las cuatro secciones del boxplot (mínimo-Q1, Q1-mediana, mediana-Q3, Q3-máximo) tienen diferente cantidad de datos porque tienen diferente tamaño visual. Cada sección contiene exactamente el 25% de los datos.
* **Ejercicios de Práctica:**
  1. ¿Qué porcentaje de los datos se encuentra dentro de la "caja" de un boxplot? (R: El 50% de los datos).
  2. ¿Cómo se calcula el Rango Intercuartílico (RIC)? (R: Restando Q3 - Q1).
  3. Si Q1 = 12 y Q3 = 20, ¿cuánto vale el Rango Intercuartílico? (R: 8).
  4. En un boxplot, ¿cómo se representan los datos atípicos o muy extremos? (R: Con puntos o asteriscos fuera de los límites de los bigotes).
  5. Si la línea de la mediana está muy cerca del lado izquierdo de la caja (Q1), ¿qué nos indica sobre la asimetría de los datos? (R: Que los datos tienen una asimetría positiva o hacia la derecha).
* **¿Necesitas ayuda?** Los cuartiles y los diagramas de caja son abstractos y difíciles de graficar a mano. ¡Un tutor de CEDETU te enseñará a dominarlos de manera interactiva y muy sencilla!

## Unidad 2: Medidas de Tendencia Central
### Lección 2.1: Media Aritmética (Promedio)
* **Objetivo:** Calcular la media aritmética para conjuntos de datos agrupados y no agrupados, y comprender su sensibilidad ante valores extremos.
* **Explicación:** La media (promedio) es la suma de todos los valores de la muestra dividida entre el tamaño total de la muestra ($n$).
  * Media: $\bar{x} = \sum x_i / n$
* **Ejemplo Resuelto:** Las notas de 5 tareas de matemáticas de un alumno son: 80, 95, 90, 40 y 95. Calcula su promedio.
  - *Paso 1:* Suma todos los valores: 80 + 95 + 90 + 40 + 95 = 400.
  - *Paso 2:* Divide el total de la suma entre la cantidad de tareas ($n = 5$): 400 ÷ 5 = 80.
  - *Resultado:* La nota promedio es 80 puntos. (Nota cómo la tarea de 40 puntos jaló el promedio hacia abajo notablemente).
* **Errores Comunes:** No dividir por el total de elementos reales, o ignorar los valores que valen cero al hacer el promedio.
* **Ejercicios de Práctica:**
  1. Calcula la media de los siguientes datos: 12, 15, 18, 20, 25. (R: 18. Retroalimentación: Suma = 90; n = 5; 90 / 5 = 18).
  2. Un comerciante vende Q200 el lunes, Q350 el martes y Q650 el miércoles. ¿Cuál fue su venta promedio diaria en esos 3 días? (R: Q400).
  3. Si el promedio de 4 exámenes es 85, ¿cuánto deben sumar las notas de los 4 exámenes en total? (R: 340 puntos. Retroalimentación: Suma = Promedio × n = 85 × 4 = 340).
  4. Si agregas un dato extremo gigante (como 1,000) a una muestra de números entre 10 y 20, ¿qué le ocurre a la media? (R: Aumenta drásticamente. La media es muy sensible a datos atípicos).
  5. En una oficina de 6 empleados, las edades son: 25, 28, 30, 25, 40, 26. ¿Cuál es el promedio de edad? (R: 29 años).
* **¿Necesitas ayuda?** La media ponderada es otro concepto clave (usada para promedios de colegios y universidades). ¡Aprende a calcular tu zona académica con la guía de tu tutor de CEDETU!

### Lección 2.2: Mediana (El Valor Central)
* **Objetivo:** Determinar la mediana de un conjunto de datos ordenándolos previamente y diferenciando si el tamaño de la muestra es par o impar.
* **Explicación:** La mediana es el valor central que divide la muestra en dos partes exactamente iguales: el 50% de los datos queda por debajo y el 50% por encima.
  * *Paso Obligatorio:* Ordenar los datos de menor a mayor.
  * Si $n$ es **impar**: La mediana es el dato de la posición central: $(n + 1)/2$.
  * Si $n$ es **par**: La mediana es el promedio de los dos datos centrales del medio.
* **Ejemplo Resuelto:** Encuentra la mediana de las siguientes velocidades: 12 m/s, 5 m/s, 20 m/s, 8 m/s, 15 m/s, 10 m/s.
  - *Paso 1 Ordenar:* 5, 8, 10, 12, 15, 20.
  - *Paso 2 Identificar n:* Hay 6 datos ($n$ es par).
  - *Paso 3 Promediar los centrales:* Los dos datos del medio son 10 y 12. Mediana = (10 + 12) ÷ 2 = 11 m/s.
  - *Resultado:* Mediana = 11 m/s.
* **Errores Comunes:** Calcular la mediana directamente de la lista desordenada sin ordenarla previamente.
* **Ejercicios de Práctica:**
  1. Encuentra la mediana de: 7, 3, 9, 12, 5. (R: 7. Retroalimentación: Ordenados son 3, 5, 7, 9, 12. El del centro es 7).
  2. Encuentra la mediana de: 150, 200, 180, 160. (R: 170. Retroalimentación: Ordenados son 150, 160, 180, 200. Promedio de 160 y 180 es 170).
  3. Si la mediana de los salarios de una empresa es de Q4,500, ¿qué significa con respecto a los trabajadores? (R: Que el 50% de los trabajadores gana Q4,500 o menos, y el otro 50% gana Q4,500 o más).
  4. Encuentra la mediana de: 0, 0, 1, 2, 5, 8, 10. (R: 2).
  5. ¿Se ve afectada la mediana si cambiamos el dato más grande de una muestra por uno diez veces mayor? (R: No. La mediana es robusta y no le afectan los valores extremos atípicos).
* **¿Necesitas ayuda?** La robustez de la mediana es un concepto hermoso de la estadística. ¡Entiéndelo perfectamente con tu tutor de CEDETU y sácate un 100!

### Lección 2.3: Moda (El Valor Más Frecuente)
* **Objetivo:** Identificar el valor o valores con mayor frecuencia absoluta y comprender cuándo una muestra es bimodal, multimodal o no tiene moda.
* **Explicación:** La moda es simplemente el valor que ocurre con mayor frecuencia en una distribución de datos. Una muestra puede tener una única moda (unimodal), dos modas (bimodal), varias modas (multimodal) o ninguna moda si todos los datos se repiten la misma cantidad de veces (amodal).
* **Ejemplo Resuelto:** Determina la moda de los siguientes datos de colores de camisas vendidos en un almacén de Xela: Azul, Rojo, Azul, Verde, Rojo, Azul, Negro.
  - *Paso 1 Contar frecuencias:* Negro: 1, Verde: 1, Rojo: 2, Azul: 3.
  - *Paso 2 Identificar el mayor:* El color con mayor frecuencia es el Azul, con 3 repeticiones.
  - *Resultado:* Moda = Azul.
* **Errores Comunes:** Pensar que la moda siempre es un número único, o decir que la moda es cero en lugar de "no tiene moda" cuando todos los datos se repiten igual.
* **Ejercicios de Práctica:**
  1. ¿Cuál es la moda de: 4, 5, 5, 6, 7, 7, 8? (R: 5 y 7. Retroalimentación: Esta muestra es bimodal).
  2. ¿Cuál es la moda de: 10, 12, 14, 16? (R: No tiene moda. Retroalimentación: Todos los datos se repiten exactamente una vez).
  3. En un salón de clases, las estaturas son: 1.60m, 1.65m, 1.60m, 1.70m, 1.60m, 1.65m. ¿Cuál es la moda? (R: 1.60m).
  4. ¿Para qué tipo de variables (cualitativas o cuantitativas) es la moda la única medida de tendencia central que se puede aplicar? (R: Para variables cualitativas nominales).
  5. Si los datos son: 3, 3, 3, 5, 5, 5, 8, 8, 8. ¿Cuál es la moda? (R: No tiene moda. Retroalimentación: Aunque se repiten 3 veces, todos tienen la misma frecuencia máxima, por lo que no hay un valor único dominante).
* **¿Necesitas ayuda?** La moda es el dato de mayor popularidad. ¡Aprende a analizarla y graficarla en curvas de distribución con tu tutor!

## Evaluación Unidad 2
* Las edades de 7 amigos son: 12, 15, 12, 14, 13, 12, 16. Calcula la media, mediana y moda de sus edades. (R: Media = 13.0 años, Mediana = 12.0 años, Moda = 12.0 años. Retroalimentación: Suma = 91; 91/7 = 13. Ordenados: 12, 12, 12, 13, 14, 15, 16. El central es 13. El que más se repite es 12).
* Si las notas promedio de un estudiante en 3 materias son 70, 80 y 90, pero cada materia vale diferente porcentaje (Materia 1 vale 20%, Materia 2 vale 30% y Materia 3 vale 50%), ¿cuál es su promedio ponderado real? (R: 82 puntos. Retroalimentación: Promedio = 70×0.20 + 80×0.30 + 90×0.50 = 14 + 24 + 45 = 83).
* En un conjunto de datos ordenados de menor a mayor, el dato central es la mediana. ¿A qué percentil equivale esta medida? (R: Percentil 50. Retroalimentación: La mediana divide los datos exactamente al 50%).

---

## Unidad 3: Medidas de Dispersión
### Lección 3.1: Rango y Desviación Media
* **Objetivo:** Calcular el rango total y la desviación media de una muestra para cuantificar la dispersión de los datos respecto a la media.
* **Explicación:** 
  * **Rango:** La diferencia entre el valor máximo y el valor mínimo: $R = \text{Máx} - \text{Mín}$.
  * **Desviación Media (DM):** El promedio de las diferencias absolutas de cada dato respecto a la media aritmética de la muestra:
    $\text{DM} = \sum |x_i - \bar{x}| / n$
* **Ejemplo Resuelto:** Calcula el rango y la desviación media de los datos: 2, 4, 6 (la media de estos datos es $\bar{x} = 4$).
  - *Paso 1 Rango:* Máximo (6) - Mínimo (2) = 4.
  - *Paso 2 Desviaciones:*
    * Para 2: $|2 - 4| = 2$
    * Para 4: $|4 - 4| = 0$
    * Para 6: $|6 - 4| = 2$
  - *Paso 3 Desviación Media:* Promedia los valores absolutos: $(2 + 0 + 2) ÷ 3 = 4 ÷ 3 = 1.33$.
  - *Resultado:* Rango = 4, Desviación Media = 1.33.
* **Errores Comunes:** Olvidar aplicar el valor absoluto en la desviación media, lo que causaría que las desviaciones positivas y negativas se anularan sumando cero.
* **Ejercicios de Práctica:**
  1. Calcula el rango de los datos: 15, 30, 20, 85, 40. (R: 70. Retroalimentación: 85 - 15 = 70).
  2. ¿Qué significa un rango muy pequeño en una muestra de notas de exámenes? (R: Que el grupo es muy homogéneo y casi todos obtuvieron notas similares).
  3. Calcula la desviación media de los datos: 10 y 20 (la media es 15). (R: 5. Retroalimentación: |10-15| = 5; |20-15| = 5. Promedio = (5+5)/2 = 5).
  4. Si todos los datos de una muestra son idénticos (ej. 5, 5, 5, 5), ¿cuánto vale su desviación media? (R: 0).
  5. En una carrera de atletismo, el tiempo promedio es 12 segundos y la desviación media es 0.5 segundos. ¿En qué rango aproximado están la mayoría de los tiempos? (R: Entre 11.5 y 12.5 segundos).
* **¿Necesitas ayuda?** La dispersión mide qué tan "confiables" son los promedios. ¡Comprende este concepto crucial con ayuda de tu tutor de CEDETU!

### Lección 3.2: Varianza y Desviación Estándar Muestral
* **Objetivo:** Calcular la varianza y la desviación estándar de una muestra analizando el grado de dispersión promedio de los datos elevados al cuadrado.
* **Explicación:** La **varianza ($s^2$)** mide la dispersión promediando los cuadrados de las diferencias de cada dato respecto a la media. Para una muestra dividimos entre $n - 1$ (corrección de Bessel). La **desviación estándar ($s$)** es la raíz cuadrada de la varianza, lo que regresa la medida a las unidades originales de los datos.
  * Varianza muestral: $s^2 = \sum (x_i - \bar{x})^2 / (n - 1)$
  * Desviación estándar: $s = \sqrt{s^2}$
* **Ejemplo Resuelto:** Calcula la varianza y la desviación estándar de los datos: 3, 5, 7 (la media es $\bar{x} = 5$, tamaño $n = 3$).
  - *Paso 1 Diferencias al cuadrado:*
    * $(3 - 5)^2 = (-2)^2 = 4$
    * $(5 - 5)^2 = 0^2 = 0$
    * $(7 - 5)^2 = 2^2 = 4$
  - *Paso 2 Suma de cuadrados:* $4 + 0 + 4 = 8$.
  - *Paso 3 Varianza (dividir entre n - 1):* $s^2 = 8 ÷ (3 - 1) = 8 ÷ 2 = 4$.
  - *Paso 4 Desviación Estándar:* $s = \sqrt{4} = 2$.
  - *Resultado:* Varianza = 4, Desviación Estándar = 2.
* **Errores Comunes:** Dividir entre $n$ en lugar de $n - 1$ cuando se trata de una muestra y no de la población completa.
* **Ejercicios de Práctica:**
  1. Si la varianza de un conjunto de datos es 16, ¿cuál es su desviación estándar? (R: 4. Retroalimentación: √16 = 4).
  2. Si la desviación estándar del peso de unos sacos de café es de 3 libras, ¿cuánto vale su varianza? (R: 9. Retroalimentación: 3² = 9).
  3. Calcula la varianza muestral de los datos: 10 y 20 (la media es 15, n = 2). (R: 50. Retroalimentación: (10-15)² + (20-15)² = 25 + 25 = 50. Dividimos entre n - 1 = 1: 50/1 = 50).
  4. Con los datos anteriores, ¿cuál es su desviación estándar? (R: 7.07. Retroalimentación: √50 = 7.07).
  5. ¿Puede una varianza dar alguna vez un resultado negativo? (R: No. Al estar las diferencias elevadas al cuadrado, el resultado siempre es positivo o cero).
* **¿Necesitas ayuda?** La desviación estándar es la medida de dispersión más utilizada en ciencias y finanzas. ¡Asegura tu comprensión de esta fórmula con tu tutor de CEDETU!

### Lección 3.3: Coeficiente de Variación (CV)
* **Objetivo:** Calcular el coeficiente de variación para comparar la variabilidad relativa de dos muestras que tienen diferentes unidades de medida o medias muy distintas.
* **Explicación:** El coeficiente de variación ($CV$) expresa la desviación estándar como un porcentaje de la media aritmética. Al ser una unidad adimensional, nos permite saber con precisión cuál de dos conjuntos de datos es más homogéneo o tiene menor dispersión relativa.
  * Coeficiente de Variación: $CV = (s / \bar{x}) \times 100\%$
* **Ejemplo Resuelto:** Un salón de clases tiene una estatura media de 1.60 m con desviación estándar de 0.08 m. Otro salón tiene un peso medio de 50 kg con desviación estándar de 5 kg. ¿Cuál salón tiene datos más dispersos relativamente?
  - *Paso 1 CV Estaturas:* $(0.08 ÷ 1.60) \times 100\% = 0.05 \times 100\% = 5\%$.
  - *Paso 2 CV Pesos:* $(5 ÷ 50) \times 100\% = 0.10 \times 100\% = 10\%$.
  - *Paso 3 Comparación:* El CV de los pesos (10%) es mayor que el de las estaturas (5%).
  - *Resultado:* El peso de los alumnos tiene una variabilidad relativa mayor que su estatura.
* **Errores Comunes:** Expresar el coeficiente de variación sin el símbolo de porcentaje o dividir la media entre la desviación en lugar del revés.
* **Ejercicios de Práctica:**
  1. Si la media es 40 y la desviación estándar es 8, ¿cuál es el coeficiente de variación? (R: 20%. Retroalimentación: (8 / 40) × 100% = 20%).
  2. Si una muestra de salarios tiene un CV del 45% y otra del 15%, ¿cuál muestra es más homogénea? (R: La muestra con CV del 15%).
  3. Calcula el CV si la media es 10 y la desviación estándar es 1.5. (R: 15%).
  4. ¿Para qué sirve el coeficiente de variación en comparación con la desviación estándar común? (R: Para comparar la dispersión entre variables con diferentes unidades de medida o medias muy diferentes).
  5. Si el CV de las ventas semanales de un negocio es de 8%, ¿indica esto una gran estabilidad en las ventas? (R: Sí. Un CV menor al 10% se considera de muy baja variabilidad o alta estabilidad).
* **¿Necesitas ayuda?** Aprender a interpretar el coeficiente de variación te dará una ventaja analítica enorme en tus cursos de estadística. ¡Consúltalo con tu tutor de CEDETU!

## Evaluación Unidad 3
* Calcula el Rango, Varianza Muestral y Desviación Estándar de las siguientes temperaturas: 18°C, 20°C, 22°C (la media es 20°C). (R: Rango = 4°C, Varianza = 4, Desviación Estándar = 2°C. Retroalimentación: Suma de diferencias al cuadrado = (18-20)² + (20-20)² + (22-20)² = 4 + 0 + 4 = 8. Varianza = 8 / (3-1) = 4. Desviación = √4 = 2).
* Si dos proyectos de inversión tienen el mismo rendimiento promedio del 15% anual, pero el Proyecto A tiene una desviación estándar del 2% y el Proyecto B del 8%, ¿cuál proyecto es más riesgoso y por qué? (R: El Proyecto B. Tiene mayor desviación estándar, lo que representa una mayor variabilidad y por ende mayor riesgo).
* Si un conjunto de datos tiene una media de 50 y una desviación estándar de 5, ¿cuál es su coeficiente de variación? (R: 10%).
`,

    "leyes-newton": `# Curso: Leyes de Newton
* **Materia:** Ciencias | **Nivel sugerido:** Diversificado
* **Público objetivo:** Estudiantes de bachillerato y primeros semestres universitarios que buscan dominar las leyes fundamentales de la dinámica y la resolución de sistemas mecánicos con fricción.
* **Objetivos de aprendizaje:** Explicar y aplicar las tres Leyes de Newton a sistemas de partículas, dibujar Diagramas de Cuerpo Libre (DCL) perfectos y resolver problemas dinámicos con coeficientes de fricción estáticos y cinéticos.

## Unidad 1: Fuerzas y la Primera Ley (Inercia)
### Lección 1.1: El Concepto de Fuerza y sus Tipos
* **Objetivo:** Definir fuerza como una interacción vectorial e identificar las fuerzas mecánicas básicas (Peso, Normal, Tensión y Fricción).
* **Explicación:** Una fuerza es todo agente capaz de modificar la cantidad de movimiento o la forma de los materiales. Es vectorial y su unidad en el SI es el Newton ($N$). Tipos comunes:
  - **Peso ($ec{w}$):** Fuerza de atracción gravitatoria dirigida verticalmente hacia abajo ($w = mg$).
  - **Normal ($ec{N}$):** Fuerza de soporte perpendicular ejercida por una superficie sobre un objeto apoyado en ella.
  - **Tensión ($ec{T}$):** Fuerza de tracción transmitida a lo largo de cuerdas, cables o cadenas estiradas.
  - **Fricción ($ec{f}$):** Fuerza de resistencia al deslizamiento paralela a la superficie y opuesta al movimiento relativo.
* **Ejemplo Resuelto:** Un bloque de madera de 5 kg está en reposo apoyado sobre una mesa horizontal en Xela. Identifica y calcula las fuerzas verticales que actúan sobre el bloque. (g = 9.8 m/s²).
  - *Paso 1 Peso:* $w = mg = 5 	ext{ kg} 	imes 9.8 	ext{ m/s}^2 = 49 	ext{ Newtons}$ hacia abajo.
  - *Paso 2 Fuerza Normal:* Como el bloque está en equilibrio vertical, la fuerza normal compensa exactamente al peso: $N = w$.
  - *Resultado:* Peso = 49 N (abajo), Normal = 49 N (arriba).
* **Errores Comunes:** Dibujar la fuerza normal siempre apuntando verticalmente hacia arriba, ignorando que si la superficie está inclinada, la normal se inclina también para mantenerse perpendicular.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el peso en Newtons de un objeto de masa 10 kg en la Tierra? (R: 98 N).
  2. ¿Qué dirección geométrica tiene siempre la fuerza normal ejercida por una pared vertical sobre un bloque apoyado en ella? (R: Horizontal. Apuntando hacia afuera de la pared).
  3. Si la masa de una persona en la Tierra es de 60 kg, ¿cuál será su masa aproximada si viaja a la Luna? (R: 60 kg. Retroalimentación: La masa es la cantidad de materia e invariable; lo que varía con la gravedad es el peso).
  4. ¿Cómo se le llama a la fuerza que ejerce una cuerda tensa sobre un objeto atado a ella? (R: Tensión).
  5. ¿En qué dirección actúa la fuerza de fricción sobre un bloque que se desliza hacia la derecha? (R: Hacia la izquierda, oponiéndose al deslizamiento).
* **¿Necesitas ayuda?** Comprender las fuerzas de forma intuitiva te permitirá resolver con facilidad los problemas de dinámica. ¡Toma una tutoría hoy y domina las bases!

### Lección 1.2: Primera Ley de Newton (Inercia)
* **Objetivo:** Explicar la Primera Ley de Newton y analizar el comportamiento de los cuerpos cuando la fuerza neta resultante sobre ellos es nula.
* **Explicación:** La Primera Ley de Newton (Ley de la Inercia) establece que todo cuerpo permanece en su estado de reposo o de movimiento rectilíneo uniforme (MRU) a menos que actúe sobre él una fuerza neta externa que lo obligue a cambiar dicho estado. La **inercia** es la resistencia natural de la materia al cambio de velocidad.
* **Ejemplo Resuelto:** Un bus extraurbano frena bruscamente en una parada en Tecpán. Explica físicamente por qué los pasajeros salen proyectados hacia adelante.
  - *Paso 1 Estado Inicial:* Los pasajeros viajan a la misma velocidad constante del bus.
  - *Paso 2 Acción Externa:* El freno del bus aplica una fuerza de parada sobre el chasis y los asientos.
  - *Paso 3 Inercia:* Dado que no se aplica una fuerza de parada directa sobre los pasajeros, sus cuerpos tienden por inercia a mantener el movimiento rectilíneo constante que llevaban, desplazándose hacia adelante con respecto al bus en desaceleración.
  - *Resultado:* Es una consecuencia directa de la inercia de sus masas.
* **Errores Comunes:** Pensar que para que un objeto se mantenga en movimiento a velocidad constante se requiere una fuerza neta positiva activa, ignorando que el movimiento rectilíneo uniforme es un estado natural de equilibrio dinámico si no hay fricción.
* **Ejercicios de Práctica:**
  1. Si un disco de hockey se desliza sobre hielo liso sin fricción a 5 m/s, ¿cuál será su velocidad tras 10 segundos de recorrido libre? (R: 5 m/s. Retroalimentación: Al no haber fuerzas externas netas, mantiene su MRU indefinidamente).
  2. ¿Qué magnitud física mide la inercia de un cuerpo de forma cuantitativa? (R: Su masa inercial).
  3. Si la fuerza resultante sobre un objeto es cero, ¿cuáles son los dos estados de movimiento posibles en los que puede encontrarse? (R: Reposo o Movimiento Rectilíneo Uniforme (MRU)).
  4. ¿Por qué es obligatorio el uso del cinturón de seguridad en autos basándose en la primera ley de Newton? (R: Para aplicar una fuerza externa que detenga el cuerpo del pasajero e impida que choque contra el parabrisas por inercia).
  5. ¿Qué establece el concepto de equilibrio de una partícula? (R: Que la suma vectorial de todas las fuerzas externas que actúan sobre ella es nula (∑F = 0)).
* **¿Necesitas ayuda?** La inercia es uno de los conceptos más contraintuitivos pero fundamentales de la física clásica. ¡Discútelo con tu tutor para despejar todas tus dudas!

### Lección 1.3: Diagramas de Cuerpo Libre (DCL)
* **Objetivo:** Diseñar y trazar Diagramas de Cuerpo Libre perfectos aislando el cuerpo e identificando todas las fuerzas vectoriales externas que actúan sobre él.
* **Explicación:** Un Diagrama de Cuerpo Libre (DCL) es un bosquejo gráfico utilizado en física para analizar las fuerzas que actúan sobre un cuerpo libre de su entorno. Se representa al cuerpo como un punto o bloque y se dibujan todas las fuerzas como vectores que parten de su centro de gravedad.
* **Ejemplo Resuelto:** Un bloque de masa m se desliza hacia abajo en un plano inclinado de ángulo $	heta$ en Antigua. Dibuja y descompón el peso del bloque en el sistema de coordenadas alineado al plano.
  - *Paso 1 Identificar Fuerzas:* Peso ($w$, vertical hacia abajo), Normal ($N$, perpendicular al plano inclinado), Fricción ($f$, paralela al plano apuntando hacia arriba).
  - *Paso 2 Alinear Coordenadas:* Eje X paralelo al plano inclinado, eje Y perpendicular al plano.
  - *Paso 3 Descomponer el Peso:*
    - Componente vertical perpendicular: $w_y = mg cos(	heta)$.
    - Componente horizontal paralela que tira del bloque: $w_x = mg operatorname{sen}(	heta)$.
  - *Resultado:* El peso se descompone en $mg operatorname{sen}(	heta)$ (paralelo) y $mg cos(	heta)$ (perpendicular).
* **Errores Comunes:** Incluir fuerzas ficticias o internas en el DCL, o dibujar la fuerza "de movimiento" como si fuera una fuerza real externa sin que exista ningún agente físico que empuje al bloque.
* **Ejercicios de Práctica:**
  1. ¿Se debe dibujar la fuerza normal en el DCL de un objeto colgado de una cuerda en el aire? (R: No. Al no haber contacto con una superficie, no hay normal).
  2. ¿Cuántas fuerzas actúan sobre un bloque apoyado en una mesa horizontal si una cuerda tira de él horizontalmente y hay fricción? (R: 4 fuerzas: Peso, Normal, Tensión y Fricción).
  3. ¿Hacia dónde apunta el vector del peso propio en un DCL dibujado en un plano de coordenadas inclinado? (R: Verticalmente hacia abajo, formando un ángulo con los ejes del plano).
  4. ¿Qué fuerzas actúan sobre una manzana en caída libre libre de la resistencia del aire? (R: 1 fuerza: Únicamente su peso gravitatorio).
  5. ¿Cuál es el propósito fundamental de dibujar un DCL antes de escribir las ecuaciones matemáticas del problema? (R: Identificar de forma visual y sin omisiones todas las fuerzas para plantear correctamente la suma de componentes en X e Y).
* **¿Necesitas ayuda?** Trazar diagramas DCL limpios y ordenados es el paso más importante para resolver con éxito cualquier parcial de física. ¡Aprende a dibujarlos junto a tu tutor de CEDETU!

## Evaluación Unidad 1
* Un bloque de 8 kg cuelga del techo de un aula en Sololá sostenido por dos cuerdas verticales iguales. Dibuja el DCL del bloque y calcula la tensión en cada cuerda. (g = 9.8 m/s²). (R: Tensión = 39.2 Newtons en cada cuerda. Retroalimentación: Peso = 8*9.8 = 78.4 N. Equilibrio vertical: 2T - 78.4 = 0 => T = 39.2).
* Si un auto viaja a velocidad constante de 60 km/h en línea recta en una autopista plana, ¿cuánto vale la fuerza resultante neta ejercida por todos los factores mecánicos sobre el auto? (R: 0 Newtons. Retroalimentación: Al ser velocidad constante, la aceleración es nula y por tanto la fuerza neta es exactamente cero).
* ¿Cuál de las componentes del peso en un plano inclinado de ángulo θ es la encargada de hacer deslizar al bloque cuesta abajo? (R: La componente paralela al plano: w_x = mg sen(θ)).

---

## Unidad 2: La Segunda Ley de Newton (Fuerza y Aceleración)
### Lección 2.1: La Segunda Ley de Newton (F = ma)
* **Objetivo:** Aplicar la fórmula fundamental de la dinámica $ec{F} = m ec{a}$ para calcular fuerza, masa o aceleración en sistemas de una sola masa.
* **Explicación:** La Segunda Ley de Newton establece que la aceleración de un objeto es directamente proporcional a la fuerza neta resultante que actúa sobre él, tiene la misma dirección y sentido que dicha fuerza, e inversamente proporcional a la masa del cuerpo.
  - Ecuación matemática: $sum ec{F} = m ec{a}$.
  - Unidad de fuerza: $1 	ext{ Newton (N)} = 1 	ext{ kg} cdot 1 	ext{ m/s}^2$.
* **Ejemplo Resuelto:** Un bloque de 10 kg es empujado sobre una superficie horizontal lisa en Xela por una fuerza constante de 30 Newtons. Calcula la aceleración del bloque.
  - *Paso 1 Ecuación Dinámica:* $sum F_x = m a_x$. (Superficie lisa, no hay fricción).
  - *Paso 2 Sustituye valores:* $30 	ext{ N} = 10 	ext{ kg} cdot a$.
  - *Paso 3 Despeja:* $a = 30 / 10 = 3 	ext{ m/s}^2$.
  - *Resultado:* La aceleración del bloque es de 3 m/s².
* **Errores Comunes:** Olvidar que la fuerza F en la fórmula representa la **fuerza neta resultante** (la suma de todas las fuerzas en esa dirección), y no simplemente cualquier fuerza aplicada aislada.
* **Ejercicios de Práctica:**
  1. ¿Qué fuerza neta se necesita para acelerar un carrito de 5 kg a 4 m/s²? (R: 20 Newtons).
  2. Si aplicas una fuerza neta constante de 50 N a un objeto y este acelera a 2.5 m/s², ¿cuál es la masa del objeto? (R: 20 kg).
  3. Si duplicas la fuerza neta sobre un cuerpo pero mantienes su masa idéntica, ¿qué ocurre con su aceleración? (R: Se duplica).
  4. Si duplicas la masa de un objeto pero mantienes la fuerza neta constante, ¿qué ocurre con su aceleración? (R: Se reduce a la mitad).
  5. Un cohete de juguete tiene una masa de 2 kg. Si su motor produce un empuje vertical hacia arriba de 30 N, calcula su aceleración ascendente. (g = 10 m/s²). (R: 5 m/s². Retroalimentación: Fuerza neta vertical = Empuje - Peso = 30 - 20 = 10 N. Aceleración = 10 / 2 = 5).
* **¿Necesitas ayuda?** La segunda ley es la espina dorsal del movimiento acelerado. ¡Vuélvete un experto en resolver dinámicas variadas con ayuda de tu tutor de CEDETU!

### Lección 2.2: Masa versus Peso
* **Objetivo:** Diferenciar de forma teórica y analítica entre la masa inercial de un cuerpo (invariable) y su peso gravitatorio (variable con la gravedad g).
* **Explicación:** 
  - **Masa (m):** Medida cuantitativa de la inercia de un cuerpo, representa la resistencia al cambio de velocidad. Es una constante intrínseca de la materia y se mide en kilogramos ($kg$).
  - **Peso (w):** Fuerza de atracción gravitatoria ejercida sobre la masa. Varía dependiendo del campo gravitatorio del planeta. Se mide en Newtons ($N$).
    - Fórmula: $w = m g$.
* **Ejemplo Resuelto:** Un astronauta tiene una masa de 80 kg. Calcula su masa y su peso en la Tierra ($g_{	ext{Tierra}} = 9.8 	ext{ m/s}^2$) y en la Luna ($g_{	ext{Luna}} = 1.6 	ext{ m/s}^2$).
  - *Paso 1 Masa:* La masa es idéntica en cualquier lugar del universo. Masa = 80 kg.
  - *Paso 2 Peso en la Tierra:* $w_{	ext{Tierra}} = 80 	ext{ kg} 	imes 9.8 	ext{ m/s}^2 = 784 	ext{ Newtons}$.
  - *Paso 3 Peso en la Luna:* $w_{	ext{Luna}} = 80 	ext{ kg} 	imes 1.6 	ext{ m/s}^2 = 128 	ext{ Newtons}$.
  - *Resultado:* Masa = 80 kg en ambos; Peso = 784 N en Tierra y 128 N en la Luna.
* **Errores Comunes:** Expresar el peso en kilogramos en la vida diaria de los laboratorios escolares, lo cual es una confusión de lenguaje común (kilogramo-fuerza es otra unidad).
* **Ejercicios de Práctica:**
  1. Si un saco de maíz en Sololá pesa 490 Newtons, ¿cuál es su masa? (g = 9.8 m/s²). (R: 50 kg).
  2. ¿Cuál es el peso de una masa de 2 kg en la Luna si la gravedad lunar es 1.6 m/s²? (R: 3.2 Newtons).
  3. Si viajas al espacio exterior lejos de estrellas y planetas donde la gravedad es nula, ¿cuánto vale tu masa y tu peso? (R: Masa se mantiene idéntica, Peso = 0 Newtons).
  4. ¿Qué instrumento mide directamente el peso por extensión de un resorte calibrado? (R: El dinamómetro).
  5. ¿Con qué instrumento se compara e identifica la masa inercial estándar? (R: Con una balanza analítica clásica de dos platillos).
* **¿Necesitas ayuda?** La gravedad es una aceleración variable y misteriosa. ¡Entiende todas sus implicaciones y resuelve problemas de gravedad con tu tutor!

### Lección 2.3: Sistemas de Varias Masas (Máquina de Atwood)
* **Objetivo:** Resolver la aceleración y la tensión en sistemas con dos o más masas acopladas mediante cuerdas y poleas sin fricción.
* **Explicación:** Para resolver sistemas de múltiples masas:
  1. Dibuja el DCL de cada bloque por separado.
  2. Plantea la ecuación de la segunda ley para cada bloque en el sentido del movimiento esperado.
  3. Suma las ecuaciones algebraicas para eliminar la tensión interna del cable y despejar la aceleración del sistema.
  4. Sustituye la aceleración en cualquiera de las ecuaciones de DCL individuales para hallar la tensión.
* **Ejemplo Resuelto:** Una Máquina de Atwood consta de dos masas colgadas de una polea fija mediante un cable ideal. Si $m_1 = 3 	ext{ kg}$ y $m_2 = 2 	ext{ kg}$, calcula la aceleración del sistema y la tensión del cable. (g = 10 m/s²).
  - *Paso 1 Ecuaciones de Bloques:*
    - Bloque 1 (baja por ser mayor): $m_1 g - T = m_1 a Rightarrow 30 - T = 3a$.
    - Bloque 2 (sube): $T - m_2 g = m_2 a Rightarrow T - 20 = 2a$.
  - *Paso 2 Sumar ecuaciones:* $(30 - T) + (T - 20) = 3a + 2a Rightarrow 10 = 5a$.
  - *Paso 3 Despejar aceleración:* $a = 10 / 5 = 2 	ext{ m/s}^2$.
  - *Paso 4 Calcular Tensión:* Sustituye $a = 2$ en la ecuación 2: $T - 20 = 2(2) Rightarrow T = 24 	ext{ Newtons}$.
  - *Resultado:* Aceleración = 2 m/s², Tensión = 24 Newtons.
* **Errores Comunes:** Suponer que la tensión del cable es igual al peso de la masa mayor suspendida, lo que anularía la aceleración del sistema.
* **Ejercicios de Práctica:**
  1. Dos masas de 6 kg y 4 kg están en una máquina de Atwood. Calcula la aceleración del sistema. (g = 10 m/s²). (R: 2 m/s²).
  2. Si en una máquina de Atwood ambas masas son idénticas (m = 5 kg c/u), ¿cuál es la aceleración y la tensión? (R: Aceleración = 0 m/s²; Tensión = 50 N (si g = 10)).
  3. Una masa de 5 kg está sobre una mesa lisa horizontal y se jala por una cuerda horizontal que pasa por una polea en el borde de la cual cuelga otra masa de 5 kg. Calcula la aceleración. (g = 10 m/s²). (R: 5 m/s². Retroalimentación: m₂g = (m₁+m₂)a => 50 = 10a).
  4. Con los datos del ejercicio anterior, calcula la tensión en la cuerda. (R: 25 Newtons. Retroalimentación: T = m₁a = 5 * 5 = 25 N).
  5. ¿Qué propiedades debe cumplir un cable ideal en física de poleas? (R: Masa despreciable, inextensible y libre de fricción interna).
* **¿Necesitas ayuda?** La resolución de sistemas de poleas acopladas requiere un álgebra limpia y metódica de ecuaciones. ¡Domínala al instante de la mano de tu tutor de CEDETU!

## Evaluación Unidad 2
* Un ascensor de 800 kg de masa total asciende con una aceleración constante de 2.0 m/s². Calcula la tensión en el cable que eleva el ascensor. (g = 9.8 m/s²). (R: Tensión = 9,440 Newtons. Retroalimentación: T - mg = ma => T = m(g+a) = 800*(9.8 + 2.0) = 800 * 11.8 = 9,440).
* Si un empuje horizontal neto de 40 N produce una aceleración de 8 m/s² sobre un trineo de juguete, ¿cuál es la masa del trineo? (R: 5 kg).
* En una máquina de Atwood, si la masa mayor es de 15 kg y la aceleración medida del sistema es de 3 m/s², calcula el valor de la masa menor. (g = 10 m/s²). (R: 8.07 kg. Retroalimentación: a = (m₁ - m₂)g / (m₁ + m₂) => 3 = (15 - m₂)10 / (15 + m₂) => 45 + 3m₂ = 150 - 10m₂ => 13m₂ = 105 => m₂ ≈ 8.08 kg).

---

## Unidad 3: Tercera Ley de Newton y Fricción
### Lección 3.1: Tercera Ley de Newton (Acción y Reacción)
* **Objetivo:** Explicar la Tercera Ley de Newton e identificar las parejas de fuerzas acción-reacción que actúan en interacciones cotidianas.
* **Explicación:** La Tercera Ley de Newton establece que si un cuerpo A ejerce una fuerza sobre un cuerpo B (Acción), el cuerpo B ejerce simultáneamente una fuerza de igual magnitud pero en sentido opuesto sobre el cuerpo A (Reacción).
  - Ecuación: $ec{F}_{	ext{A sobre B}} = -ec{F}_{	ext{B sobre A}}$.
  - Las fuerzas de acción-reacción actúan sobre **cuerpos diferentes**, por lo tanto, nunca se cancelan entre sí.
* **Ejemplo Resuelto:** Un nadador empuja la pared de una piscina olímpica con sus pies para impulsarse. Explica la fuerza de acción-reacción.
  - *Paso 1 Acción:* Los pies del nadador ejercen una fuerza horizontal hacia atrás sobre la pared rígida.
  - *Paso 2 Reacción:* La pared ejerce simultáneamente una fuerza de igual magnitud pero horizontal hacia adelante sobre los pies del nadador.
  - *Resultado:* El nadador es impulsado hacia adelante debido a la fuerza de reacción de la pared sobre su cuerpo.
* **Errores Comunes:** Pensar que las fuerzas de acción y reacción se cancelan mutuamente porque tienen la misma magnitud y sentidos opuestos, olvidando que actúan sobre dos objetos distintos.
* **Ejercicios de Práctica:**
  1. Si la Tierra ejerce una fuerza gravitatoria de atracción de 600 N sobre una persona, ¿qué fuerza de atracción ejerce la persona sobre la Tierra? (R: 600 Newtons).
  2. ¿Por qué se siente un fuerte "retroceso" o "patada" en el hombro al disparar un rifle de caza? (R: Por la fuerza de reacción del proyectil impulsado hacia adelante sobre el rifle hacia atrás).
  3. Si empujas una pared con una fuerza de 100 N y no se mueve, ¿con qué fuerza empuja la pared a tu cuerpo? (R: 100 Newtons).
  4. ¿Cómo impulsa la hélice de un bote el avance del agua y del bote? (R: La hélice empuja el agua hacia atrás (acción); el agua reacciona empujando el bote hacia adelante (reacción)).
  5. ¿Por qué es imposible empujar un auto atascado desde el asiento de adentro empujando el tablero con las manos? (R: Porque son fuerzas internas al sistema mecánico del auto; se requiere una fuerza externa del piso contra los pies en el exterior).
* **¿Necesitas ayuda?** La tercera ley explica desde cómo caminamos hasta cómo los cohetes vuelan en el vacío del espacio exterior. ¡Aprende a analizarla con tu tutor!

### Lección 3.2: Fricción Estática y Cinética
* **Objetivo:** Calcular la fuerza de fricción estática máxima y cinética aplicando la fórmula fundamental $f = mu N$.
* **Explicación:** La fricción se produce por la rugosidad a escala microscópica de las superficies en contacto.
  - **Fricción Estática ($f_s$):** Actúa antes del deslizamiento. Su valor máximo es: $f_{s,	ext{máx}} = mu_s N$.
  - **Fricción Cinética ($f_k$):** Actúa durante el deslizamiento constante: $f_k = mu_k N$.
  - En general, $mu_s > mu_k$ (cuesta más empezar a mover un cuerpo que mantenerlo en movimiento).
* **Ejemplo Resuelto:** Un bloque de madera de 10 kg se encuentra sobre un piso horizontal en Antigua con coeficientes de fricción $mu_s = 0.50$ y $mu_k = 0.30$. Si aplicas una fuerza horizontal de $40 	ext{ Newtons}$, determina si el bloque se mueve y calcula la fuerza de fricción real. (g = 10 m/s²).
  - *Paso 1 Fuerza Normal:* $N = w = mg = 10 	ext{ kg} 	imes 10 	ext{ m/s}^2 = 100 	ext{ Newtons}$.
  - *Paso 2 Fricción Estática Máxima:* $f_{s,	ext{máx}} = mu_s N = 0.50 	imes 100 	ext{ N} = 50 	ext{ Newtons}$.
  - *Paso 3 Comparar Fuerzas:* La fuerza aplicada es de 40 N, que es menor que el límite máximo de resistencia estática (50 N). Por lo tanto, el bloque **no se mueve**.
  - *Paso 4 Fricción Real:* Dado que está en reposo, la fricción equilibra exactamente a la fuerza aplicada: $f_s = F_{	ext{aplicada}} = 40 	ext{ Newtons}$.
  - *Resultado:* El bloque no se mueve y la fuerza de fricción real es de 40 Newtons.
* **Errores Comunes:** Calcular directamente $mu_s N$ como la fricción real en todos los casos estáticos, olvidando que $mu_s N$ es un límite máximo y la fricción real es menor si la fuerza aplicada no supera ese límite.
* **Ejercicios de Práctica:**
  1. Si un bloque de 20 kg se desliza sobre el suelo horizontal con un coeficiente de fricción cinética de 0.20, ¿cuál es el valor de la fricción cinética? (g = 10 m/s²). (R: 40 N. Retroalimentación: N = 200 N; f_k = 0.2 * 200 = 40 N).
  2. ¿Por qué es más fácil jalar un mueble pesado una vez que ya ha comenzado a deslizarse que sacarlo del reposo absoluto? (R: Porque el coeficiente de fricción cinética (μ_k) es menor que el coeficiente de fricción estática (μ_s)).
  3. Si duplicas la masa de un bloque sobre una mesa horizontal, ¿qué ocurre con el valor de la fuerza normal y el límite máximo de fricción? (R: Ambos se duplican).
  4. Calcula el coeficiente de fricción cinética si un bloque de 5 kg se desliza a velocidad constante impulsado por una fuerza horizontal de 15 N. (g = 10 m/s²). (R: 0.30. Retroalimentación: f_k = F_aplicada = 15 N. N = 50 N. μ_k = 15 / 50 = 0.3).
  5. ¿Hacia dónde apunta la fuerza de fricción cinética sobre un bloque de madera que es empujado hacia el norte? (R: Hacia el sur).
* **¿Necesitas ayuda?** La fricción es el factor clave que diferencia los problemas escolares ideales de los problemas de ingeniería real. ¡Domínala al lado de tu tutor de CEDETU!

### Lección 3.3: Dinámica del Movimiento Circular Uniforme
* **Objetivo:** Resolver problemas de aceleración centrípeta y fuerzas centrales necesarias para mantener un cuerpo en una trayectoria circular constante.
* **Explicación:** Un cuerpo en movimiento circular uniforme cambia constantemente de dirección, lo que genera una **aceleración centrípeta ($a_c$)** dirigida hacia el centro del círculo: $a_c = v^2 / r$. La fuerza neta encargada de producir esta aceleración es la **Fuerza Centrípeta ($F_c$)**:
  $F_c = m a_c = rac{m v^2}{r}$
* **Ejemplo Resuelto:** Un auto de 1,000 kg toma una curva circular plana de 50 metros de radio en una carretera a una rapidez constante de $10 	ext{ m/s}$. Calcula la fuerza de fricción lateral mínima necesaria para que el auto no derrape.
  - *Paso 1 Ecuación Fuerza Centrípeta:* La fricción estática lateral actúa como la fuerza centrípeta que mantiene al auto en la curva: $f_s = F_c = rac{m v^2}{r}$.
  - *Paso 2 Opera:* $f_s = rac{1,000 	ext{ kg} 	imes 10^2}{50} = rac{1,000 	imes 100}{50} = rac{100,000}{50} = 2,000 	ext{ Newtons}$.
  - *Resultado:* Se requiere una fuerza de fricción lateral mínima de 2,000 N.
* **Errores Comunes:** Dibujar la "fuerza centrífuga" en el DCL del auto como si fuera una fuerza real externa que empuja hacia afuera de la curva; la fuerza centrífuga es en realidad una sensación ficticia producida por la inercia del cuerpo.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el valor de la aceleración centrípeta de un objeto con rapidez constante de 6 m/s en un círculo de 4 m de radio? (R: 9 m/s²).
  2. Si reduces a la mitad el radio de una trayectoria circular pero mantienes la velocidad lineal del objeto constante, ¿qué le ocurre a la aceleración centrípeta? (R: Se duplica).
  3. Si duplicas la velocidad de un auto en una curva de radio fijo, ¿cuántas veces aumenta la fuerza lateral necesaria para evitar el derrape? (R: 4 veces. Retroalimentación: La fuerza centrípeta es proporcional al cuadrado de la velocidad).
  4. ¿Qué fuerza actúa como fuerza centrípeta que mantiene a un satélite artificial en órbita circular alrededor de la Tierra? (R: La fuerza de atracción gravitatoria).
  5. Un niño hace girar una piedra de 0.5 kg atada a un cordón de 1.5 metros de longitud con una rapidez de 3 m/s. Calcula la tensión del cordón. (R: 3 Newtons. Retroalimentación: T = mv²/r = 0.5 * 9 / 1.5 = 3).
* **¿Necesitas ayuda?** El movimiento circular y las fuerzas centrípetas son fascinantes y se aplican a montañas rusas y satélites. ¡Compréndelas perfectamente con CEDETU!

## Evaluación Unidad 3
* Un bloque de 5 kg se lanza cuesta arriba sobre una rampa inclinada 30° con el suelo. Si el coeficiente de fricción cinética es de 0.20, calcula la desaceleración del bloque mientras sube. (g = 10 m/s²). (R: 6.73 m/s². Retroalimentación: Fuerzas que frenan cuesta abajo: w_x = mg sen(30°) = 25 N; f_k = μ_k mg cos(30°) = 0.2 * 50 * 0.866 = 8.66 N. Fuerza neta = -33.66 N. Desaceleración = 33.66 / 5 = 6.73).
* Una persona empuja una caja pesada de 50 kg sobre el suelo plano con una fuerza horizontal de 200 N. Si la caja acelera a 1.0 m/s², calcula el valor de la fuerza de fricción cinética. (R: 150 Newtons. Retroalimentación: F_aplicada - f_k = ma => 200 - f_k = 50 * 1 => f_k = 150).
* ¿Es el "coeficiente de fricción" una cantidad adimensional sin unidades físicas? (R: Sí. Al ser la razón de dos fuerzas (fricción/normal), las unidades se cancelan por completo, quedando un número puro sin dimensiones).
`,

    "trabajo-energia-potencia": `# Curso: Trabajo, Energía y Potencia
* **Materia:** Ciencias | **Nivel sugerido:** Diversificado / Universidad
* **Público objetivo:** Estudiantes que quieren comprender el concepto de energía, las leyes de conservación mecánica y el cálculo de potencia aplicada a motores y máquinas térmicas.
* **Objetivos de aprendizaje:** Definir y calcular el trabajo mecánico de fuerzas constantes, operar sistemas con energía cinética y potencial conservativos y no conservativos, y calcular la potencia de un motor mecánico de forma analítica.

## Unidad 1: Trabajo Mecánico
### Lección 1.1: Trabajo Mecánico de una Fuerza Constante
* **Objetivo:** Calcular el trabajo realizado por una fuerza constante sobre un objeto en movimiento rectilíneo utilizando la fórmula $W = F d cos(	heta)$.
* **Explicación:** En física, se realiza **trabajo mecánico ($W$)** cuando una fuerza externa desplaza a un objeto a lo largo de una distancia. Su unidad en el SI es el Julio ($1 	ext{ J} = 1 	ext{ N} cdot 	ext{m}$).
  - Fórmula: $W = F d cos(	heta)$.
  - $	heta$ es el ángulo formado entre el vector de fuerza y el vector de desplazamiento.
  - Si la fuerza es perpendicular al movimiento ($	heta = 90^{circ}$), el trabajo es exactamente cero.
* **Ejemplo Resuelto:** Una persona arrastra una maleta en una estación de autobuses de Guatemala una distancia de 15 metros aplicando una fuerza constante de 50 Newtons a través de una correa que forma un ángulo de $60^{circ}$ con el suelo. Calcula el trabajo realizado sobre la maleta.
  - *Paso 1 Plantea Fórmula:* $W = F d cos(	heta)$.
  - *Paso 2 Sustituye valores:* $W = 50 	ext{ N} 	imes 15 	ext{ m} 	imes cos(60^{circ})$.
  - *Paso 3 Opera:* $W = 750 	imes 0.50 = 375 	ext{ Julios}$.
  - *Resultado:* El trabajo realizado es de 375 Julios.
* **Errores Comunes:** Multiplicar de forma directa la fuerza total por la distancia en todos los casos, ignorando que el ángulo de inclinación de la fuerza reduce el trabajo mecánico útil.
* **Ejercicios de Práctica:**
  1. ¿Qué trabajo realiza una fuerza de 20 N que empuja un bloque a lo largo de 5 metros en la misma dirección del movimiento? (R: 100 Julios).
  2. Si cargas una cubeta de agua pesada de 10 kg y caminas horizontalmente a velocidad constante una distancia de 20 metros, ¿cuánto trabajo mecánico realiza la fuerza vertical de tus brazos sobre la cubeta? (R: 0 Julios. Retroalimentación: La fuerza de tus brazos es vertical y el movimiento horizontal (ángulo 90°)).
  3. Si una fuerza de fricción de 15 N se opone al movimiento de un trineo que avanza 6 metros, ¿cuál es el trabajo realizado por la fricción? (R: -90 Julios. Retroalimentación: El ángulo es 180° y cos(180°) = -1. Es trabajo negativo).
  4. Calcula el trabajo necesario para elevar verticalmente un saco de cemento de 50 kg una altura de 2 metros en una construcción. (g = 10 m/s²). (R: 1,000 Julios. Retroalimentación: Fuerza = Peso = 500 N; W = 500 * 2 = 1000).
  5. ¿Cuál es el significado de trabajo neto sobre un objeto? (R: La suma de los trabajos individuales realizados por cada una de las fuerzas que actúan sobre él).
* **¿Necesitas ayuda?** El trabajo mecánico es la transferencia de energía a través de fuerzas. ¡Aprende a analizar su signo y dirección con tu tutor de CEDETU!

### Lección 1.2: Trabajo de Múltiples Fuerzas Concurrentes
* **Objetivo:** Calcular el trabajo neto de un sistema calculando el trabajo individual realizado por múltiples fuerzas coplanares concurrentes y sumándolos algebraicamente.
* **Explicación:** Si sobre un objeto actúan varias fuerzas (Peso, Normal, Empuje, Fricción), el trabajo neto total ($W_{	ext{neto}}$) es la suma de los trabajos individuales:
  $W_{	ext{neto}} = W_1 + W_2 + W_3 + dots$
  También se puede calcular hallando primero la Fuerza Resultante Neta en la dirección del movimiento ($sum F_x$) y multiplicándola por la distancia: $W_{	ext{neto}} = (sum F_x) cdot d$.
* **Ejemplo Resuelto:** Un bloque de 10 kg es arrastrado 5 metros sobre un piso horizontal rugoso por una fuerza horizontal de empuje de 50 N. Si la fuerza de fricción cinética constante es de 20 N, calcula el trabajo neto total realizado sobre el bloque. (g = 10 m/s²).
  - *Paso 1 Trabajo de la fuerza de empuje:* $W_{	ext{empuje}} = 50 	ext{ N} 	imes 5 	ext{ m} 	imes cos(0^{circ}) = 250 	ext{ Julios}$.
  - *Paso 2 Trabajo de la fricción:* $W_{	ext{fricción}} = 20 	ext{ N} 	imes 5 	ext{ m} 	imes cos(180^{circ}) = -100 	ext{ Julios}$.
  - *Paso 3 Trabajo de Peso y Normal:* El movimiento es horizontal, por lo que $W_{	ext{peso}} = 0$ y $W_{	ext{normal}} = 0$.
  - *Paso 4 Sumar:* $W_{	ext{neto}} = 250 - 100 + 0 + 0 = 150 	ext{ Julios}$.
  - *Resultado:* El trabajo neto total es de 150 Julios.
* **Errores Comunes:** Olvidar restar el trabajo negativo realizado por la fuerza de fricción, lo cual exageraría la transferencia de energía neta.
* **Ejercicios de Práctica:**
  1. Un bloque avanza 10 m. Si el empuje hace un trabajo de 400 J y la fricción hace -150 J, ¿cuánto vale el trabajo neto? (R: 250 Julios).
  2. ¿Qué trabajo realiza la fuerza normal que ejerce la calle sobre un auto en movimiento plano? (R: 0 Julios).
  3. Si un bloque de 5 kg desciende por un plano inclinado de 3 metros de longitud sin fricción, ¿cuál es el trabajo neto realizado por el peso? (Ángulo rampa = 30°). (g = 10 m/s²). (R: 75 Julios. Retroalimentación: Fuerza paralela = mg sen(30°) = 25 N. Trabajo = 25 * 3 = 75).
  4. Si el trabajo neto realizado sobre un cuerpo es positivo, ¿qué le ocurre a su velocidad? (R: Aumenta. Acelera).
  5. Si el trabajo neto sobre un objeto es cero, ¿cuál es su tipo de movimiento? (R: Movimiento a velocidad constante (MRU) o reposo).
* **¿Necesitas ayuda?** Analizar el trabajo neto de múltiples fuerzas es el paso previo al Teorema de la Energía. ¡Consolida tus bases con tu tutor de CEDETU!

### Lección 1.3: Trabajo de Fuerzas Variables (Fuerza Elástica)
* **Objetivo:** Calcular el trabajo mecánico realizado por una fuerza variable (como la fuerza de un resorte que obedece la Ley de Hooke) empleando métodos analíticos.
* **Explicación:** Si la fuerza no es constante, no podemos usar la multiplicación directa. El trabajo equivale matemáticamente al área bajo la curva de un gráfico de Fuerza versus Posición (F vs x). Para un resorte que obedece la **Ley de Hooke ($F_e = kx$)**, el trabajo necesario para estirarlo o comprimirlo una distancia $x$ es:
  $W = rac{1}{2} k x^2$
  donde $k$ es la constante elástica del resorte en N/m.
* **Ejemplo Resuelto:** Un dinamómetro de laboratorio tiene un resorte con constante elástica $k = 200 	ext{ N/m}$. Calcula el trabajo mecánico necesario para estirar el resorte una distancia de $10 	ext{ cm}$ desde su longitud de equilibrio.
  - *Paso 1 Unidades:* Convierte $10$ cm a metros: $x = 0.10$ metros.
  - *Paso 2 Ecuación Trabajo Elástico:* $W = rac{1}{2} k x^2$.
  - *Paso 3 Opera:* $W = 0.5 	imes 200 	ext{ N/m} 	imes (0.10 	ext{ m})^2 = 100 	imes 0.01 = 1 	ext{ Julio}$.
  - *Resultado:* El trabajo mecánico necesario es de exactly 1 Julio.
* **Errores Comunes:** Olvidar elevar la distancia al cuadrado en la fórmula o no convertir los centímetros a metros, lo que arrojaría valores extremadamente altos e irreales.
* **Ejercicios de Práctica:**
  1. ¿Qué fuerza ejerce un resorte de k = 500 N/m al ser comprimido 0.2 metros? (R: 100 Newtons).
  2. Calcula el trabajo realizado para comprimir 0.2 metros el resorte anterior. (R: 10 Julios. Retroalimentación: W = 0.5 * 500 * (0.2)² = 250 * 0.04 = 10).
  3. ¿Cómo se halla gráficamente el trabajo mecánico si se tiene un gráfico de Fuerza en el eje Y y Posición en el eje X? (R: Calculando el área de la figura geométrica bajo la línea de la gráfica).
  4. Si estiras un resorte el doble de la distancia original, ¿cuántas veces aumenta el trabajo elástico requerido? (R: 4 veces. Retroalimentación: El trabajo es proporcional al cuadrado del estiramiento).
  5. ¿Cuál es el trabajo realizado por una fuerza constante de 10 N sobre una distancia de 5 m, calculado como el área de un gráfico F vs x? (R: 50 Julios. Área del rectángulo = 10 * 5 = 50).
* **¿Necesitas ayuda?** La fuerza elástica y el cálculo analítico de áreas son temas avanzados de física escolar. ¡Pide ayuda a tu tutor de CEDETU y prepárate para brillar!

## Evaluación Unidad 1
* Un bloque de 12 kg es arrastrado 8 metros cuesta arriba sobre un plano inclinado 37° sin fricción por una fuerza paralela a la rampa de 100 N. Calcula el trabajo neto. (g = 10 m/s², sen(37°) ≈ 0.6). (R: 224 Julios. Retroalimentación: Trabajo empuje = 100*8 = 800 J. Trabajo peso cuesta abajo = -mg sen(37°) * 8 = -120 * 0.6 * 8 = -576 J. W_neto = 800 - 576 = 224).
* Si un resorte de juguete se estira 5 cm requiriendo 0.5 Julios de trabajo, calcula la constante elástica k del resorte. (R: 400 N/m. Retroalimentación: 0.5 = 0.5 * k * (0.05)² => 1 = k * 0.0025 => k = 400).
* Si una fuerza constante actúa a un ángulo de 120° con el desplazamiento, ¿qué signo tiene el trabajo mecánico realizado y qué significa? (R: Signo negativo. Significa que la fuerza se opone parcialmente al movimiento y le resta energía al cuerpo).

---

## Unidad 2: Energía Cinética y Potencial
### Lección 2.1: Energía Cinética y el Teorema del Trabajo y la Energía
* **Objetivo:** Calcular la energía cinética de un cuerpo en movimiento ($E_c = rac{1}{2} m v^2$) y aplicar el Teorema del Trabajo y la Energía para resolver velocidades.
* **Explicación:** La **energía cinética ($E_c$)** es la energía que posee un cuerpo debido a su movimiento.
  - Fórmula: $E_c = rac{1}{2} m v^2$.
  - **Teorema del Trabajo y la Energía:** El trabajo neto total realizado por las fuerzas externas sobre una partícula es igual al cambio en su energía cinética:
    $W_{	ext{neto}} = Delta E_c = E_{c,	ext{final}} - E_{c,	ext{inicial}}$.
* **Ejemplo Resuelto:** Un carro de juguete de 2 kg parte del reposo y es empujado por una fuerza neta constante que realiza un trabajo neto de 16 Julios. Calcula la velocidad final del carro.
  - *Paso 1 Plantea Teorema:* $W_{	ext{neto}} = E_{c,f} - E_{c,i}$. (Como parte del reposo, $E_{c,i} = 0$).
  - *Paso 2 Sustituye valores:* $16 = rac{1}{2} m v_f^2 Rightarrow 16 = rac{1}{2} (2 	ext{ kg}) v_f^2$.
  - *Paso 3 Simplifica y Despeja:* $16 = v_f^2 Rightarrow v_f = sqrt{16} = 4 	ext{ m/s}$.
  - *Resultado:* La velocidad final del carro es de 4 m/s.
* **Errores Comunes:** Olvidar extraer la raíz cuadrada al despejar la velocidad a partir de la fórmula de energía cinética.
* **Ejercicios de Práctica:**
  1. Calcula la energía cinética de un atleta de 70 kg que corre a una velocidad de 6 m/s en un entrenamiento en Antigua. (R: 1,260 Julios).
  2. Si duplicas la velocidad de un carro en movimiento, ¿cuántas veces aumenta su energía cinética? (R: 4 veces. Retroalimentación: La energía cinética varía con el cuadrado de la velocidad).
  3. Un bloque de 4 kg tiene inicialmente una energía cinética de 50 J. Si se le realiza un trabajo neto de 30 J en la dirección del movimiento, ¿cuál es su nueva energía cinética final? (R: 80 Julios).
  4. Con los datos del ejercicio anterior, calcula la velocidad final del bloque. (R: 6.32 m/s. Retroalimentación: 80 = 0.5 * 4 * v² => 40 = v² => v ≈ 6.32).
  5. ¿Qué ocurre con la energía cinética de un auto si frena hasta detenerse por completo? (R: Se reduce a cero).
* **¿Necesitas ayuda?** El teorema del trabajo y la energía te permite calcular velocidades sin necesidad de resolver complejas fórmulas de cinemática de aceleración. ¡Consúltalo con tu tutor!

### Lección 2.2: Energía Potencial Gravitatoria
* **Objetivo:** Calcular la energía potencial gravitatoria de un objeto elevado ($E_p = m g h$) con respecto a un nivel de referencia elegido.
* **Explicación:** La **energía potencial gravitatoria ($E_p$ o $U_g$)** es la energía almacenada en un objeto debido a su posición elevada en un campo gravitatorio.
  - Fórmula: $E_p = m g h$.
  - Es fundamental elegir un **nivel de referencia** ($h = 0$) para medir la altura; la energía potencial es relativa a este nivel.
* **Ejemplo Resuelto:** Un bloque de piedra de 5 kg está sobre el borde de un andamio a una altura de 6 metros sobre el suelo en una obra constructiva en Tecpán. Calcula su energía potencial gravitatoria con respecto al suelo y con respecto a una mesa situada a 1.5 metros de altura en el suelo. (g = 10 m/s²).
  - *Paso 1 Respecto al Suelo:* Altura $h = 6$ m.
    $E_{p,	ext{suelo}} = m g h = 5 	ext{ kg} 	imes 10 	ext{ m/s}^2 	imes 6 	ext{ m} = 300 	ext{ Julios}$.
  - *Paso 2 Respecto a la Mesa:* Altura relativa $h = 6 - 1.5 = 4.5$ m.
    $E_{p,	ext{mesa}} = 5 	ext{ kg} 	imes 10 	ext{ m/s}^2 	imes 4.5 	ext{ m} = 225 	ext{ Julios}$.
  - *Resultado:* Ep respecto al suelo = 300 J, respecto a la mesa = 225 J.
* **Errores Comunes:** Olvidar que la altura h debe medirse de forma estrictamente vertical y perpendicular al suelo, sin importar si el objeto subió por una rampa inclinada.
* **Ejercicios de Práctica:**
  1. ¿Qué energía potencial almacena un saco de maíz de 20 kg a una altura de 4 metros? (g = 10 m/s²). (R: 800 Julios).
  2. Si bajas un bloque de 5 kg desde una altura de 10 metros hasta 6 metros sobre el suelo, ¿cuánta energía potencial pierde? (g = 10 m/s²). (R: 200 Julios. Retroalimentación: ΔEp = 5*10*(10-6) = 200).
  3. ¿Puede la energía potencial gravitatoria ser negativa? (R: Sí. Si el objeto se encuentra por debajo del nivel de referencia elegido (h = 0)).
  4. Calcula la masa de un objeto si almacena 150 J de energía potencial al ser elevado a 3 metros de altura. (g = 10 m/s²). (R: 5 kg).
  5. Si un excursionista de 70 kg escala una montaña en Petén ganando 100 metros de altura vertical, ¿cuánto trabajo realiza la gravedad sobre él? (g = 10 m/s²). (R: -70,000 Julios. Retroalimentación: La gravedad tira hacia abajo y él sube; realiza trabajo negativo).
* **¿Necesitas ayuda?** La energía potencial es una de las ideas más potentes de la física del diseño de montañas rusas y presas hidroeléctricas. ¡Asegura tu destreza con tu tutor de CEDETU!

### Lección 2.3: Energía Potencial Elástica
* **Objetivo:** Calcular la energía potencial elástica almacenada en resortes comprimidos o estirados ($E_{pe} = rac{1}{2} k x^2$) resolviendo problemas mecánicos.
* **Explicación:** La **energía potencial elástica ($E_{pe}$ o $U_e$)** es la energía almacenada en materiales elásticos (como resortes, ligas o ballestas) debido a su deformación temporal (compresión o estiramiento).
  - Fórmula: $E_{pe} = rac{1}{2} k x^2$.
  - Al liberar el resorte, toda esta energía almacenada se transforma rápidamente en energía cinética del cuerpo acoplado.
* **Ejemplo Resuelto:** Un juguete de resorte tiene una constante elástica $k = 400 	ext{ N/m}$. Si se comprime exactamente $5 	ext{ cm}$ para lanzar una pequeña bola de 0.1 kg, calcula la energía elástica almacenada en el resorte.
  - *Paso 1 Unidades:* Convierte $5$ cm a metros: $x = 0.05$ m.
  - *Paso 2 Ecuación:* $E_{pe} = rac{1}{2} k x^2$.
  - *Paso 3 Opera:* $E_{pe} = 0.5 	imes 400 	ext{ N/m} 	imes (0.05 	ext{ m})^2 = 200 	imes 0.0025 = 0.5 	ext{ Julios}$.
  - *Resultado:* La energía elástica almacenada es de exactly 0.5 Julios.
* **Errores Comunes:** Ignorar el exponente cuadrático o equivocarse en la constante k al cambiar las unidades de longitud de los centímetros a metros.
* **Ejercicios de Práctica:**
  1. ¿Cuánta energía potencial elástica almacena un resorte de k = 1,000 N/m al ser comprimido 0.1 metros? (R: 5 Julios).
  2. Si un resorte almacena 8 J de energía al ser estirado 0.2 m, ¿cuál es su constante elástica k? (R: 400 N/m. Retroalimentación: 8 = 0.5 * k * 0.04 => 8 = 0.02k => k = 400).
  3. Si duplicas la compresión de un resorte, ¿qué le ocurre a la cantidad de energía almacenada? (R: Se cuadruplica).
  4. Una liga tiene k = 100 N/m. ¿Qué estiramiento se necesita para almacenar 2 J de energía elástica? (R: 0.2 metros. Retroalimentación: 2 = 0.5 * 100 * x² => 2 = 50x² => x² = 0.04 => x = 0.2).
  5. ¿En qué tipo de energía se transforma la energía elástica acumulada en un arco cuando se dispara una flecha? (R: En energía cinética de la flecha).
* **¿Necesitas ayuda?** La física elástica es la base del diseño de amortiguadores de vehículos y sistemas de seguridad. ¡Aprende a dominarla paso a paso con tu tutor de CEDETU!

## Evaluación Unidad 2
* Si dejas caer una piedra de 2 kg desde un puente en Antigua de 20 metros de altura, calcula la energía potencial inicial y la energía cinética final justo un instante antes de chocar contra el suelo. (g = 10 m/s²). (R: Energía Potencial Inicial = 400 J, Energía Cinética Final = 400 J. Retroalimentación: Por conservación de la energía, toda la Ep inicial se transforma íntegramente en Ec final al no haber fricción).
* Si una flecha de 0.2 kg viaja con una energía cinética de 90 Julios, calcula su velocidad de avance. (R: 30 m/s. Retroalimentación: 90 = 0.5 * 0.2 * v² => 90 = 0.1 v² => v² = 900 => v = 30).
* Calcula la energía total almacenada en un sistema formado por un bloque de 2 kg elevado a 3 metros de altura con respecto a un resorte comprimido 10 cm con k = 500 N/m en el suelo. (g = 10 m/s²). (R: 62.5 Julios. Retroalimentación: Ep_gravitatoria = 2*10*3 = 60 J. Ep_elástica = 0.5 * 500 * (0.1)² = 2.5 J. Energía total = 60 + 2.5 = 62.5).

---

## Unidad 3: Conservación de la Energía y Potencia
### Lección 3.1: Conservación de la Energía Mecánica
* **Objetivo:** Resolver problemas mecánicos aplicando la Ley de Conservación de la Energía en sistemas ideales donde la energía mecánica total se mantiene constante ($E_i = E_f$).
* **Explicación:** La energía no se crea ni se destruye, solo se transforma. En un sistema ideal libre de fricción y otras fuerzas no conservativas, la **Energía Mecánica Total ($E_m$)** (suma de cinética y potencial) se mantiene constante a lo largo de toda la trayectoria:
  $E_{m,	ext{inicial}} = E_{m,	ext{final}} Rightarrow E_{ci} + E_{pi} = E_{cf} + E_{pf}$.
* **Ejemplo Resuelto:** Una patinadora de 50 kg parte del reposo desde la cima de una rampa circular de 5 metros de altura en un parque de Xela. Calcula su velocidad en la base de la rampa. (g = 10 m/s²).
  - *Paso 1 Ecuación de Conservación:* $E_{ci} + E_{pi} = E_{cf} + E_{pf}$.
  - *Paso 2 Identificar estados:*
    - Inicial (cima, reposo): $E_{ci} = 0$, $E_{pi} = mgh$.
    - Final (base, altura 0): $E_{cf} = rac{1}{2} mv_f^2$, $E_{pf} = 0$.
  - *Paso 3 Sustituye y cancela masa:* $mgh = rac{1}{2} mv_f^2 Rightarrow gh = rac{1}{2} v_f^2$.
  - *Paso 4 Despeja:* $v_f = sqrt{2gh} = sqrt{2 	imes 10 	ext{ m/s}^2 	imes 5 	ext{ m}} = sqrt{100} = 10 	ext{ m/s}$.
  - *Resultado:* La velocidad de la patinadora en la base es de 10 m/s. (Nota: ¡La velocidad no depende de la masa de la persona!).
* **Errores Comunes:** Incluir la masa en la calculadora cuando se simplifica en ambos lados de la ecuación de conservación, aumentando innecesariamente los pasos aritméticos.
* **Ejercicios de Práctica:**
  1. Si dejas caer un objeto de 3 kg desde 45 metros de altura, ¿con qué velocidad choca contra el suelo? (g = 10 m/s²). (R: 30 m/s. Retroalimentación: v = √2gh = √2*10*45 = √900 = 30).
  2. ¿Qué ocurre con la energía mecánica total de un péndulo oscilante ideal? (R: Se mantiene constante en todo momento; la energía oscila continuamente entre cinética en la base y potencial en los extremos).
  3. Un bloque se desliza sin fricción. Si en la parte alta tiene Ep = 100 J y Ec = 20 J, ¿cuál es su energía cinética en la base si la altura se reduce a cero? (R: 120 Julios).
  4. ¿Cómo se define formalmente una "fuerza conservativa"? (R: Una fuerza cuyo trabajo sobre una trayectoria cerrada es nulo; el trabajo realizado no depende del camino seguido, solo del punto inicial y final).
  5. Si un proyectil es lanzado verticalmente hacia arriba a 20 m/s, ¿cuál es la altura máxima que alcanza? (g = 10 m/s²). (R: 20 metros. Retroalimentación: 0.5 * v² = gh => 0.5 * 400 = 10h => 200 = 10h => h = 20).
* **¿Necesitas ayuda?** La conservación de la energía es la ley más fundamental de toda la física y la ingeniería. ¡Aprende a dominar su planteamiento analítico con tu tutor de CEDETU!

### Lección 3.2: Sistemas No Conservativos (Pérdidas por Fricción)
* **Objetivo:** Resolver problemas de energía en sistemas reales que incluyen pérdidas por fricción aplicando el teorema general del trabajo de las fuerzas no conservativas.
* **Explicación:** En la realidad hay fuerzas no conservativas (como la fricción o resistencia del aire). El trabajo realizado por estas fuerzas ($W_{	ext{nc}}$) disipa energía mecánica transformándola en calor. La ecuación general es:
  $E_{	ext{inicial}} + W_{	ext{nc}} = E_{	ext{final}} Rightarrow (E_{ci} + E_{pi}) - f_k d = (E_{cf} + E_{pf})$.
* **Ejemplo Resuelto:** Un bloque de 10 kg se desliza por una rampa de 5 metros de largo desde una altura de 2 metros en Antigua. Si llega a la base con una velocidad de $4 	ext{ m/s}$ debido a la fricción, calcula el trabajo realizado por la fuerza de fricción sobre el bloque. (g = 10 m/s²).
  - *Paso 1 Energía Inicial:* $E_i = mgh = 10 	ext{ kg} 	imes 10 	ext{ m/s}^2 	imes 2 	ext{ m} = 200 	ext{ Julios}$.
  - *Paso 2 Energía Final:* $E_f = rac{1}{2} mv_f^2 = 0.5 	imes 10 	ext{ kg} 	imes 4^2 = 5 	imes 16 = 80 	ext{ Julios}$.
  - *Paso 3 Ecuación:* $E_i + W_{	ext{fricción}} = E_f Rightarrow 200 + W_{	ext{fricción}} = 80$.
  - *Paso 4 Despeja:* $W_{	ext{fricción}} = 80 - 200 = -120 	ext{ Julios}$.
  - *Resultado:* El trabajo de la fricción es de -120 Julios (el sistema perdió 120 Julios de energía en forma de calor disipado).
* **Errores Comunes:** Olvidar que el trabajo de fricción siempre tiene signo negativo porque la fuerza se opone al sentido del movimiento del bloque.
* **Ejercicios de Práctica:**
  1. Si un bloque con E_i = 150 J pierde 40 J por fricción en una rampa, ¿cuál es su energía final en la base? (R: 110 Julios).
  2. ¿En qué forma de energía se disipa típicamente la energía mecánica "perdida" por fricción en un motor? (R: En energía térmica o calor).
  3. Un bloque de 5 kg se desliza sobre una mesa rugosa partiendo con v_i = 6 m/s y se detiene tras recorrer 3 metros. Calcula el trabajo de la fricción. (R: -90 Julios. Retroalimentación: Ec_i = 0.5 * 5 * 36 = 90 J; Ec_f = 0. W_fricción = Ec_f - Ec_i = -90 J).
  4. Con los datos del ejercicio anterior, calcula la fuerza de fricción constante que detuvo al bloque. (R: 30 Newtons. Retroalimentación: W = f * d => -90 = f * (-3) => f = 30 N).
  5. ¿Es aplicable el principio de conservación de la energía total en un sistema con fricción? (R: Sí. La energía mecánica disminuye, pero la energía total incluyendo el calor disipado sigue siendo exactamente la misma).
* **¿Necesitas ayuda?** La física de sistemas no conservativos es el pilar para entender el desgaste y la eficiencia en la industria. ¡Consúltalo con tu tutor de CEDETU!

### Lección 3.3: Potencia y Rendimiento Mecánico
* **Objetivo:** Calcular la potencia mecánica desarrollada por motores o fuerzas ($P = W/t$) y la eficiencia o rendimiento de sistemas mecánicos.
* **Explicación:** 
  - **Potencia ($P$):** La rapidez con la que se realiza un trabajo o se transfiere energía. Su unidad en el SI es el Vatio o Watt ($1 	ext{ W} = 1 	ext{ J/s}$). Otra unidad común es el caballo de fuerza ($1 	ext{ HP} approx 746 	ext{ W}$).
    - Fórmulas: $P = rac{W}{t}$ o $P = F cdot v$ (fuerza por velocidad constante).
  - **Eficiencia o Rendimiento ($eta$):** El porcentaje de energía o potencia útil obtenida con respecto a la total suministrada a la máquina:
    $eta = left( rac{	ext{Potencia Útil}}{	ext{Potencia Suministrada}} ight) 	imes 100%$.
* **Ejemplo Resuelto:** Un motor eléctrico en Escuintla eleva un elevador de carga de 200 kg a una altura de 15 metros en un tiempo de 10 segundos con velocidad constante. Calcula la potencia útil desarrollada por el motor y exprésala en HP. (g = 10 m/s²).
  - *Paso 1 Trabajo Útil:* $W = mgh = 200 	ext{ kg} 	imes 10 	ext{ m/s}^2 	imes 15 	ext{ m} = 30,000 	ext{ Julios}$.
  - *Paso 2 Potencia en Watts:* $P = W / t = 30,000 	ext{ J} / 10 	ext{ s} = 3,000 	ext{ Watts}$.
  - *Paso 3 Convertir a HP:* $3,000 	ext{ W} / 746 	ext{ W/HP} approx 4.02 	ext{ HP}$.
  - *Resultado:* Potencia Útil = 3,000 Watts (aprox. 4.0 HP).
* **Errores Comunes:** Confundir la potencia teórica total consumida de la red eléctrica por un motor con la potencia mecánica útil real que este entrega, ignorando las pérdidas internas en el cálculo de rendimiento.
* **Ejercicios de Práctica:**
  1. ¿Qué potencia desarrolla una grúa que realiza 5,000 Julios de trabajo en 20 segundos? (R: 250 Watts).
  2. Si un motor consume 1,000 Watts de energía de la red pero solo entrega 800 Watts de potencia mecánica útil, ¿cuál es su rendimiento o eficiencia? (R: 80%).
  3. Calcula la potencia desarrollada por un tractor que tira de un arado con una fuerza constante de 2,000 N a una velocidad constante de 3 m/s. (R: 6,000 Watts o 6 kW).
  4. ¿Cuántos Kilowatts (kW) son 10 HP? (R: 7.46 kW).
  5. ¿Cuánto trabajo realiza un motor de 150 Watts encendido durante un minuto? (R: 9,000 Julios. Retroalimentación: Trabajo = Potencia * Tiempo = 150 * 60 = 9000).
* **¿Necesitas ayuda?** La potencia y el rendimiento son la clave del ahorro energético y la productividad industrial. ¡Aprende a dominarlos con tu tutor de CEDETU!

## Evaluación Unidad 3
* Una bomba de agua de 2.0 HP de potencia útil debe llenar un estanque de 3,000 litros situado a 10 metros de altura en una finca de Tecpán. ¿Cuánto tiempo tardará en realizar la tarea? (Nota: 1 litro de agua = 1 kg de masa, 1 HP = 746 W, g = 10 m/s²). (R: 201 segundos ≈ 3.35 minutos. Retroalimentación: Trabajo necesario = mgh = 3000 * 10 * 10 = 300,000 J. Potencia útil = 2 * 746 = 1,492 W. Tiempo = W / P = 300,000 / 1,492 ≈ 201 s).
* Si un ciclista sube una colina a 5 m/s aplicando una fuerza de empuje constante de 60 N paralela al suelo, ¿cuál es la potencia desarrollada por sus piernas? (R: 300 Watts).
* ¿Es posible que una máquina real tenga una eficiencia o rendimiento del 100% o superior? (R: No. Por la Segunda Ley de la Termodinámica, siempre hay pérdidas inevitables de energía disipada por fricción y calor, haciendo que la eficiencia sea siempre menor al 100%).
`,

    "curso-estadistica-aplicada": `# Curso: Estadística Descriptiva
* **Materia:** Matemáticas | **Nivel sugerido:** Diversificado / Universidad
* **Público objetivo:** Estudiantes de bachillerato, administración o ingeniería que se inician en el análisis exploratorio de datos.
* **Objetivos de aprendizaje:** Organizar datos en tablas de frecuencia, graficar distribuciones de datos, calcular las medidas de tendencia central y medir la variabilidad de una muestra.

## Unidad 1: Organización y Presentación de Datos
### Lección 1.1: Tablas de Frecuencia para Datos No Agrupados
* **Objetivo:** Organizar un conjunto de datos brutos en una tabla estructurada que muestre la frecuencia absoluta, acumulada, relativa y porcentual.
* **Explicación:** 
  * **Frecuencia Absoluta ($f$):** Número de veces que aparece un valor.
  * **Frecuencia Acumulada ($F$):** Suma sucesiva de las frecuencias absolutas.
  * **Frecuencia Relativa ($fr$):** Frecuencia absoluta dividida entre el total de datos ($n$).
  * **Frecuencia Porcentual ($f\%$):** Frecuencia relativa multiplicada por 100.
* **Ejemplo Resuelto:** Durante una semana se encuestó a 10 familias de un condominio sobre la cantidad de hijos que tienen. Los datos fueron: 2, 1, 0, 2, 3, 2, 1, 0, 1, 2. Organiza el dato '2 hijos' en la tabla.
  - *Paso 1 Frecuencia Absoluta:* Cuenta cuántas familias tienen exactamente 2 hijos. Los datos son: [2, 2, 2, 2]. Hay 4 familias. Frecuencia absoluta ($f = 4$).
  - *Paso 2 Frecuencia Relativa:* Divide el valor entre el total de encuestados ($n = 10$): $fr = 4 ÷ 10 = 0.40$.
  - *Paso 3 Frecuencia Porcentual:* Multiplica por 100: $f\% = 0.40 \times 100 = 40\%$.
  - *Resultado:* El valor 2 tiene una frecuencia de 4 familias, que representa el 40% del total.
* **Errores Comunes:** Sumar incorrectamente las frecuencias relativas; la suma de todas las frecuencias relativas debe dar exactamente 1 (o 100% en porcentuales).
* **Ejercicios de Práctica:**
  1. En una muestra de 20 estudiantes, 5 tienen notas excelentes. ¿Cuál es la frecuencia relativa de alumnos excelentes? (R: 0.25).
  2. Con los datos anteriores, ¿a qué porcentaje equivale? (R: 25%).
  3. Si la frecuencia acumulada del tercer intervalo en una tabla es 15 y la frecuencia absoluta del cuarto intervalo es 6, ¿cuál es la frecuencia acumulada del cuarto intervalo? (R: 21. Retroalimentación: F_4 = F_3 + f_4 = 15 + 6 = 21).
  4. ¿Qué tipo de gráfico es el más adecuado para representar la frecuencia de una variable cualitativa nominal (como el color favorito)? (R: Gráfico de barras o circular).
  5. En una encuesta de satisfacción, 8 personas respondieron "Muy Bueno" de un total de 40. ¿Cuál es el porcentaje de esta respuesta? (R: 20%).
* **¿Necesitas ayuda?** Construir tablas de frecuencias largas puede ser monótono y dar lugar a errores de conteo sencillos. ¡Aprende a estructurarlas con ayuda de tu tutor de forma divertida!

### Lección 1.2: Histogramas y Polígonos de Frecuencia
* **Objetivo:** Diseñar e interpretar gráficos de distribución de datos agrupados para variables cuantitativas continuas.
* **Explicación:** Un **histograma** es un gráfico de barras verticales pegadas entre sí, donde el ancho de la barra representa el intervalo de la clase (límites reales) y la altura representa la frecuencia. El **polígono de frecuencia** se forma uniendo con líneas rectas los puntos medios (marcas de clase) de las partes superiores de las barras del histograma.
* **Ejemplo Resuelto:** Un grupo de estudio midió la estatura en metros de 30 estudiantes y agrupó los datos en intervalos. El intervalo [1.50 - 1.60) tiene una frecuencia de 12 alumnos. ¿Cómo se dibuja esta barra en el histograma?
  - *Paso 1:* En el eje horizontal (X), marca el inicio en 1.50 y el final en 1.60.
  - *Paso 2:* En el eje vertical (Y), rotula las frecuencias de 1 en 1 o de 2 en 2 hasta llegar al menos a 12.
  - *Paso 3:* Dibuja una barra que inicie exactamente en 1.50, termine en 1.60 y tenga una altura de 12 unidades.
  - *Resultado:* Una barra rectangular de ancho 0.10 y altura 12.
* **Errores Comunes:** Dibujar el histograma con las barras separadas (esto es un gráfico de barras para datos categóricos, no un histograma de variables continuas).
* **Ejercicios de Práctica:**
  1. ¿Qué representa la "marca de clase" en una tabla de datos agrupados? (R: El punto medio del intervalo. Se calcula sumando el límite inferior más el superior y dividiendo entre 2).
  2. Si el intervalo es [20, 30), ¿cuál es su marca de clase? (R: 25).
  3. Si la base de una barra en un histograma va de 10.5 a 15.5, ¿cuál es la amplitud del intervalo? (R: 5).
  4. ¿Para qué tipo de datos es ideal el uso de una gráfica de sectores o pastel? (R: Para variables categóricas que representan porcentajes de un todo).
  5. Si el polígono de frecuencias toca el eje X al inicio y al final, ¿en qué valores lo hace? (R: En las marcas de clase ficticias anterior a la primera y posterior a la última con frecuencia cero).
* **¿Necesitas ayuda?** Interpretar gráficos estadísticos es una de las preguntas fijas del examen de matemáticas de admisión a la universidad. ¡Toma una tutoría en CEDETU y asegúrate esos puntos!

### Lección 1.3: Diagramas de Caja y Bigotes (Boxplot)
* **Objetivo:** Representar y analizar de forma visual la dispersión y asimetría de un conjunto de datos a partir de sus cinco medidas clave (mínimo, Q1, mediana, Q3 y máximo).
* **Explicación:** Un boxplot resume gráficamente la distribución de los datos. La "caja" contiene el 50% central de los datos, delimitada por el Primer Cuartil (Q1) a la izquierda y el Tercer Cuartil (Q3) a la derecha. Una línea interna marca la Mediana (Q2). Los "bigotes" se extienden hasta el valor mínimo y máximo no atípicos.
* **Ejemplo Resuelto:** Dados los cuartiles de un examen sobre 100 puntos: Mínimo = 40, Q1 = 55, Mediana = 70, Q3 = 85, Máximo = 95. ¿Qué porcentaje de alumnos obtuvieron una nota superior a 85 puntos?
  - *Paso 1:* Identifica que 85 puntos corresponde al Tercer Cuartil (Q3).
  - *Paso 2:* Por definición de cuartiles, el Q3 divide los datos dejando el 75% por debajo y el 25% por encima de su valor.
  - *Resultado:* El 25% de los alumnos obtuvo una nota superior a 85 puntos.
* **Errores Comunes:** Pensar que las cuatro secciones del boxplot (mínimo-Q1, Q1-mediana, mediana-Q3, Q3-máximo) tienen diferente cantidad de datos porque tienen diferente tamaño visual. Cada sección contiene exactamente el 25% de los datos.
* **Ejercicios de Práctica:**
  1. ¿Qué porcentaje de los datos se encuentra dentro de la "caja" de un boxplot? (R: El 50% de los datos).
  2. ¿Cómo se calcula el Rango Intercuartílico (RIC)? (R: Restando Q3 - Q1).
  3. Si Q1 = 12 y Q3 = 20, ¿cuánto vale el Rango Intercuartílico? (R: 8).
  4. En un boxplot, ¿cómo se representan los datos atípicos o muy extremos? (R: Con puntos o asteriscos fuera de los límites de los bigotes).
  5. Si la línea de la mediana está muy cerca del lado izquierdo de la caja (Q1), ¿qué nos indica sobre la asimetría de los datos? (R: Que los datos tienen una asimetría positiva o hacia la derecha).
* **¿Necesitas ayuda?** Los cuartiles y los diagramas de caja son abstractos y difíciles de graficar a mano. ¡Un tutor de CEDETU te enseñará a dominarlos de manera interactiva y muy sencilla!

## Unidad 2: Medidas de Tendencia Central
### Lección 2.1: Media Aritmética (Promedio)
* **Objetivo:** Calcular la media aritmética para conjuntos de datos agrupados y no agrupados, y comprender su sensibilidad ante valores extremos.
* **Explicación:** La media (promedio) es la suma de todos los valores de la muestra dividida entre el tamaño total de la muestra ($n$).
  * Media: $\bar{x} = \sum x_i / n$
* **Ejemplo Resuelto:** Las notas de 5 tareas de matemáticas de un alumno son: 80, 95, 90, 40 y 95. Calcula su promedio.
  - *Paso 1:* Suma todos los valores: 80 + 95 + 90 + 40 + 95 = 400.
  - *Paso 2:* Divide el total de la suma entre la cantidad de tareas ($n = 5$): 400 ÷ 5 = 80.
  - *Resultado:* La nota promedio es 80 puntos. (Nota cómo la tarea de 40 puntos jaló el promedio hacia abajo notablemente).
* **Errores Comunes:** No dividir por el total de elementos reales, o ignorar los valores que valen cero al hacer el promedio.
* **Ejercicios de Práctica:**
  1. Calcula la media de los siguientes datos: 12, 15, 18, 20, 25. (R: 18. Retroalimentación: Suma = 90; n = 5; 90 / 5 = 18).
  2. Un comerciante vende Q200 el lunes, Q350 el martes y Q650 el miércoles. ¿Cuál fue su venta promedio diaria en esos 3 días? (R: Q400).
  3. Si el promedio de 4 exámenes es 85, ¿cuánto deben sumar las notas de los 4 exámenes en total? (R: 340 puntos. Retroalimentación: Suma = Promedio × n = 85 × 4 = 340).
  4. Si agregas un dato extremo gigante (como 1,000) a una muestra de números entre 10 y 20, ¿qué le ocurre a la media? (R: Aumenta drásticamente. La media es muy sensible a datos atípicos).
  5. En una oficina de 6 empleados, las edades son: 25, 28, 30, 25, 40, 26. ¿Cuál es el promedio de edad? (R: 29 años).
* **¿Necesitas ayuda?** La media ponderada es otro concepto clave (usada para promedios de colegios y universidades). ¡Aprende a calcular tu zona académica con la guía de tu tutor de CEDETU!

### Lección 2.2: Mediana (El Valor Central)
* **Objetivo:** Determinar la mediana de un conjunto de datos ordenándolos previamente y diferenciando si el tamaño de la muestra es par o impar.
* **Explicación:** La mediana es el valor central que divide la muestra en dos partes exactamente iguales: el 50% de los datos queda por debajo y el 50% por encima.
  * *Paso Obligatorio:* Ordenar los datos de menor a mayor.
  * Si $n$ es **impar**: La mediana es el dato de la posición central: $(n + 1)/2$.
  * Si $n$ es **par**: La mediana es el promedio de los dos datos centrales del medio.
* **Ejemplo Resuelto:** Encuentra la mediana de las siguientes velocidades: 12 m/s, 5 m/s, 20 m/s, 8 m/s, 15 m/s, 10 m/s.
  - *Paso 1 Ordenar:* 5, 8, 10, 12, 15, 20.
  - *Paso 2 Identificar n:* Hay 6 datos ($n$ es par).
  - *Paso 3 Promediar los centrales:* Los dos datos del medio son 10 y 12. Mediana = (10 + 12) ÷ 2 = 11 m/s.
  - *Resultado:* Mediana = 11 m/s.
* **Errores Comunes:** Calcular la mediana directamente de la lista desordenada sin ordenarla previamente.
* **Ejercicios de Práctica:**
  1. Encuentra la mediana de: 7, 3, 9, 12, 5. (R: 7. Retroalimentación: Ordenados son 3, 5, 7, 9, 12. El del centro es 7).
  2. Encuentra la mediana de: 150, 200, 180, 160. (R: 170. Retroalimentación: Ordenados son 150, 160, 180, 200. Promedio de 160 y 180 es 170).
  3. Si la mediana de los salarios de una empresa es de Q4,500, ¿qué significa con respecto a los trabajadores? (R: Que el 50% de los trabajadores gana Q4,500 o menos, y el otro 50% gana Q4,500 o más).
  4. Encuentra la mediana de: 0, 0, 1, 2, 5, 8, 10. (R: 2).
  5. ¿Se ve afectada la mediana si cambiamos el dato más grande de una muestra por uno diez veces mayor? (R: No. La mediana es robusta y no le afectan los valores extremos atípicos).
* **¿Necesitas ayuda?** La robustez de la mediana es un concepto hermoso de la estadística. ¡Entiéndelo perfectamente con tu tutor de CEDETU y sácate un 100!

### Lección 2.3: Moda (El Valor Más Frecuente)
* **Objetivo:** Identificar el valor o valores con mayor frecuencia absoluta y comprender cuándo una muestra es bimodal, multimodal o no tiene moda.
* **Explicación:** La moda es simplemente el valor que ocurre con mayor frecuencia en una distribución de datos. Una muestra puede tener una única moda (unimodal), dos modas (bimodal), varias modas (multimodal) o ninguna moda si todos los datos se repiten la misma cantidad de veces (amodal).
* **Ejemplo Resuelto:** Determina la moda de los siguientes datos de colores de camisas vendidos en un almacén de Xela: Azul, Rojo, Azul, Verde, Rojo, Azul, Negro.
  - *Paso 1 Contar frecuencias:* Negro: 1, Verde: 1, Rojo: 2, Azul: 3.
  - *Paso 2 Identificar el mayor:* El color con mayor frecuencia es el Azul, con 3 repeticiones.
  - *Resultado:* Moda = Azul.
* **Errores Comunes:** Pensar que la moda siempre es un número único, o decir que la moda es cero en lugar de "no tiene moda" cuando todos los datos se repiten igual.
* **Ejercicios de Práctica:**
  1. ¿Cuál es la moda de: 4, 5, 5, 6, 7, 7, 8? (R: 5 y 7. Retroalimentación: Esta muestra es bimodal).
  2. ¿Cuál es la moda de: 10, 12, 14, 16? (R: No tiene moda. Retroalimentación: Todos los datos se repiten exactamente una vez).
  3. En un salón de clases, las estaturas son: 1.60m, 1.65m, 1.60m, 1.70m, 1.60m, 1.65m. ¿Cuál es la moda? (R: 1.60m).
  4. ¿Para qué tipo de variables (cualitativas o cuantitativas) es la moda la única medida de tendencia central que se puede aplicar? (R: Para variables cualitativas nominales).
  5. Si los datos son: 3, 3, 3, 5, 5, 5, 8, 8, 8. ¿Cuál es la moda? (R: No tiene moda. Retroalimentación: Aunque se repiten 3 veces, todos tienen la misma frecuencia máxima, por lo que no hay un valor único dominante).
* **¿Necesitas ayuda?** La moda es el dato de mayor popularidad. ¡Aprende a analizarla y graficarla en curvas de distribución con tu tutor!

## Evaluación Unidad 2
* Las edades de 7 amigos son: 12, 15, 12, 14, 13, 12, 16. Calcula la media, mediana y moda de sus edades. (R: Media = 13.0 años, Mediana = 12.0 años, Moda = 12.0 años. Retroalimentación: Suma = 91; 91/7 = 13. Ordenados: 12, 12, 12, 13, 14, 15, 16. El central es 13. El que más se repite es 12).
* Si las notas promedio de un estudiante en 3 materias son 70, 80 y 90, pero cada materia vale diferente porcentaje (Materia 1 vale 20%, Materia 2 vale 30% y Materia 3 vale 50%), ¿cuál es su promedio ponderado real? (R: 82 puntos. Retroalimentación: Promedio = 70×0.20 + 80×0.30 + 90×0.50 = 14 + 24 + 45 = 83).
* En un conjunto de datos ordenados de menor a mayor, el dato central es la mediana. ¿A qué percentil equivale esta medida? (R: Percentil 50. Retroalimentación: La mediana divide los datos exactamente al 50%).

---

## Unidad 3: Medidas de Dispersión
### Lección 3.1: Rango y Desviación Media
* **Objetivo:** Calcular el rango total y la desviación media de una muestra para cuantificar la dispersión de los datos respecto a la media.
* **Explicación:** 
  * **Rango:** La diferencia entre el valor máximo y el valor mínimo: $R = \text{Máx} - \text{Mín}$.
  * **Desviación Media (DM):** El promedio de las diferencias absolutas de cada dato respecto a la media aritmética de la muestra:
    $\text{DM} = \sum |x_i - \bar{x}| / n$
* **Ejemplo Resuelto:** Calcula el rango y la desviación media de los datos: 2, 4, 6 (la media de estos datos es $\bar{x} = 4$).
  - *Paso 1 Rango:* Máximo (6) - Mínimo (2) = 4.
  - *Paso 2 Desviaciones:*
    * Para 2: $|2 - 4| = 2$
    * Para 4: $|4 - 4| = 0$
    * Para 6: $|6 - 4| = 2$
  - *Paso 3 Desviación Media:* Promedia los valores absolutos: $(2 + 0 + 2) ÷ 3 = 4 ÷ 3 = 1.33$.
  - *Resultado:* Rango = 4, Desviación Media = 1.33.
* **Errores Comunes:** Olvidar aplicar el valor absoluto en la desviación media, lo que causaría que las desviaciones positivas y negativas se anularan sumando cero.
* **Ejercicios de Práctica:**
  1. Calcula el rango de los datos: 15, 30, 20, 85, 40. (R: 70. Retroalimentación: 85 - 15 = 70).
  2. ¿Qué significa un rango muy pequeño en una muestra de notas de exámenes? (R: Que el grupo es muy homogéneo y casi todos obtuvieron notas similares).
  3. Calcula la desviación media de los datos: 10 y 20 (la media es 15). (R: 5. Retroalimentación: |10-15| = 5; |20-15| = 5. Promedio = (5+5)/2 = 5).
  4. Si todos los datos de una muestra son idénticos (ej. 5, 5, 5, 5), ¿cuánto vale su desviación media? (R: 0).
  5. En una carrera de atletismo, el tiempo promedio es 12 segundos y la desviación media es 0.5 segundos. ¿En qué rango aproximado están la mayoría de los tiempos? (R: Entre 11.5 y 12.5 segundos).
* **¿Necesitas ayuda?** La dispersión mide qué tan "confiables" son los promedios. ¡Comprende este concepto crucial con ayuda de tu tutor de CEDETU!

### Lección 3.2: Varianza y Desviación Estándar Muestral
* **Objetivo:** Calcular la varianza y la desviación estándar de una muestra analizando el grado de dispersión promedio de los datos elevados al cuadrado.
* **Explicación:** La **varianza ($s^2$)** mide la dispersión promediando los cuadrados de las diferencias de cada dato respecto a la media. Para una muestra dividimos entre $n - 1$ (corrección de Bessel). La **desviación estándar ($s$)** es la raíz cuadrada de la varianza, lo que regresa la medida a las unidades originales de los datos.
  * Varianza muestral: $s^2 = \sum (x_i - \bar{x})^2 / (n - 1)$
  * Desviación estándar: $s = \sqrt{s^2}$
* **Ejemplo Resuelto:** Calcula la varianza y la desviación estándar de los datos: 3, 5, 7 (la media es $\bar{x} = 5$, tamaño $n = 3$).
  - *Paso 1 Diferencias al cuadrado:*
    * $(3 - 5)^2 = (-2)^2 = 4$
    * $(5 - 5)^2 = 0^2 = 0$
    * $(7 - 5)^2 = 2^2 = 4$
  - *Paso 2 Suma de cuadrados:* $4 + 0 + 4 = 8$.
  - *Paso 3 Varianza (dividir entre n - 1):* $s^2 = 8 ÷ (3 - 1) = 8 ÷ 2 = 4$.
  - *Paso 4 Desviación Estándar:* $s = \sqrt{4} = 2$.
  - *Resultado:* Varianza = 4, Desviación Estándar = 2.
* **Errores Comunes:** Dividir entre $n$ en lugar de $n - 1$ cuando se trata de una muestra y no de la población completa.
* **Ejercicios de Práctica:**
  1. Si la varianza de un conjunto de datos es 16, ¿cuál es su desviación estándar? (R: 4. Retroalimentación: √16 = 4).
  2. Si la desviación estándar del peso de unos sacos de café es de 3 libras, ¿cuánto vale su varianza? (R: 9. Retroalimentación: 3² = 9).
  3. Calcula la varianza muestral de los datos: 10 y 20 (la media es 15, n = 2). (R: 50. Retroalimentación: (10-15)² + (20-15)² = 25 + 25 = 50. Dividimos entre n - 1 = 1: 50/1 = 50).
  4. Con los datos anteriores, ¿cuál es su desviación estándar? (R: 7.07. Retroalimentación: √50 = 7.07).
  5. ¿Puede una varianza dar alguna vez un resultado negativo? (R: No. Al estar las diferencias elevadas al cuadrado, el resultado siempre es positivo o cero).
* **¿Necesitas ayuda?** La desviación estándar es la medida de dispersión más utilizada en ciencias y finanzas. ¡Asegura tu comprensión de esta fórmula con tu tutor de CEDETU!

### Lección 3.3: Coeficiente de Variación (CV)
* **Objetivo:** Calcular el coeficiente de variación para comparar la variabilidad relativa de dos muestras que tienen diferentes unidades de medida o medias muy distintas.
* **Explicación:** El coeficiente de variación ($CV$) expresa la desviación estándar como un porcentaje de la media aritmética. Al ser una unidad adimensional, nos permite saber con precisión cuál de dos conjuntos de datos es más homogéneo o tiene menor dispersión relativa.
  * Coeficiente de Variación: $CV = (s / \bar{x}) \times 100\%$
* **Ejemplo Resuelto:** Un salón de clases tiene una estatura media de 1.60 m con desviación estándar de 0.08 m. Otro salón tiene un peso medio de 50 kg con desviación estándar de 5 kg. ¿Cuál salón tiene datos más dispersos relativamente?
  - *Paso 1 CV Estaturas:* $(0.08 ÷ 1.60) \times 100\% = 0.05 \times 100\% = 5\%$.
  - *Paso 2 CV Pesos:* $(5 ÷ 50) \times 100\% = 0.10 \times 100\% = 10\%$.
  - *Paso 3 Comparación:* El CV de los pesos (10%) es mayor que el de las estaturas (5%).
  - *Resultado:* El peso de los alumnos tiene una variabilidad relativa mayor que su estatura.
* **Errores Comunes:** Expresar el coeficiente de variación sin el símbolo de porcentaje o dividir la media entre la desviación en lugar del revés.
* **Ejercicios de Práctica:**
  1. Si la media es 40 y la desviación estándar es 8, ¿cuál es el coeficiente de variación? (R: 20%. Retroalimentación: (8 / 40) × 100% = 20%).
  2. Si una muestra de salarios tiene un CV del 45% y otra del 15%, ¿cuál muestra es más homogénea? (R: La muestra con CV del 15%).
  3. Calcula el CV si la media es 10 y la desviación estándar es 1.5. (R: 15%).
  4. ¿Para qué sirve el coeficiente de variación en comparación con la desviación estándar común? (R: Para comparar la dispersión entre variables con diferentes unidades de medida o medias muy diferentes).
  5. Si el CV de las ventas semanales de un negocio es de 8%, ¿indica esto una gran estabilidad en las ventas? (R: Sí. Un CV menor al 10% se considera de muy baja variabilidad o alta estabilidad).
* **¿Necesitas ayuda?** Aprender a interpretar el coeficiente de variación te dará una ventaja analítica enorme en tus cursos de estadística. ¡Consúltalo con tu tutor de CEDETU!

## Evaluación Unidad 3
* Calcula el Rango, Varianza Muestral y Desviación Estándar de las siguientes temperaturas: 18°C, 20°C, 22°C (la media es 20°C). (R: Rango = 4°C, Varianza = 4, Desviación Estándar = 2°C. Retroalimentación: Suma de diferencias al cuadrado = (18-20)² + (20-20)² + (22-20)² = 4 + 0 + 4 = 8. Varianza = 8 / (3-1) = 4. Desviación = √4 = 2).
* Si dos proyectos de inversión tienen el mismo rendimiento promedio del 15% anual, pero el Proyecto A tiene una desviación estándar del 2% y el Proyecto B del 8%, ¿cuál proyecto es más riesgoso y por qué? (R: El Proyecto B. Tiene mayor desviación estándar, lo que representa una mayor variabilidad y por ende mayor riesgo).
* Si un conjunto de datos tiene una media de 50 y una desviación estándar de 5, ¿cuál es su coeficiente de variación? (R: 10%).
`,

    "intro-estadistica": `# Curso: Introducción a la Estadística
* **Materia:** Matemáticas | **Nivel sugerido:** Secundaria / Diversificado
* **Público objetivo:** Alumnos de ciclo básico o bachillerato que inician su formación en el análisis de datos y la interpretación de estadísticas sociales o científicas.
* **Objetivos de aprendizaje:** Comprender el propósito de la estadística, clasificar variables cuantitativas y cualitativas, diseñar muestreos aleatorios libres de sesgo y organizar datos categóricos en tablas y gráficos estructurados.

## Unidad 1: Fundamentos de la Estadística y Datos
### Lección 1.1: Qué Estudia la Estadística y su Rol en la Toma de Decisiones
* **Objetivo:** Definir la estadística y reconocer su división en descriptiva e inferencial y su valor en decisiones reales en Latinoamérica.
* **Explicación:** La estadística es la ciencia que recolecta, organiza, presenta, analiza e interpreta datos para ayudar a una toma de decisiones más efectiva. Se divide en:
  - **Estadística Descriptiva:** Métodos para organizar, resumir y presentar datos de forma informativa (ej. promedios de notas escolares).
  - **Estadística Inferencial:** Métodos para estimar propiedades de una población basándose en los resultados de una muestra (ej. sondeos de intención de voto).
* **Ejemplo Resuelto:** Un director de colegio en Tecpán promedia las notas de sus 300 alumnos en matemáticas para evaluar el rendimiento escolar global. ¿Qué tipo de estadística está aplicando?
  - *Paso 1:* El director toma los datos de todos los alumnos, calcula el promedio y presenta los resultados informativos.
  - *Paso 2:* No está intentando predecir ni hacer suposiciones sobre otros colegios de Guatemala; solo describe el suyo.
  - *Resultado:* Estadística Descriptiva.
* **Errores Comunes:** Pensar que la estadística descriptiva e inferencial son excluyentes, cuando en realidad se complementan en cualquier estudio científico complejo.
* **Ejercicios de Práctica:**
  1. ¿Qué división de la estadística se encarga de realizar predicciones o generalizaciones sobre una población a partir de una muestra? (R: Estadística Inferencial).
  2. Si una empresa de Xela evalúa la calidad de un lote de 1,000 bombillas probando solo 50 de ellas, ¿qué tipo de estadística aplica? (R: Estadística Inferencial).
  3. ¿Cuál es el primer paso en cualquier estudio o investigación estadística seria? (R: La definición del problema y recolección de los datos).
  4. Si publicas el precio promedio del frijol en el mercado central de Ciudad de Guatemala, ¿qué tipo de estadística aplicas? (R: Estadística Descriptiva).
  5. ¿Por qué es crucial la estadística en las ciencias de la salud? (R: Para evaluar la efectividad de medicamentos y tratamientos mediante el análisis de datos de pacientes).
* **¿Necesitas ayuda?** La estadística es la herramienta más poderosa para convencer con datos reales. ¡Domina sus fundamentos con la ayuda de tu tutor de CEDETU!

### Lección 1.2: Tipos de Datos y Variables
* **Objetivo:** Clasificar variables en cualitativas (nominales, ordinales) y cuantitativas (discretas, continuas) de forma fluida.
* **Explicación:** Una variable es una característica de interés de un objeto o persona. Se clasifican en:
  - **Cualitativas (Categóricas):** Describen cualidades o categorías sin valor numérico intrínseco.
    - *Nominal:* Sin orden jerárquico (ej. color favorito, género, departamento de Guatemala).
    - *Ordinal:* Con orden jerárquico implícito (ej. grado escolar, nivel de satisfacción).
  - **Cuantitativas (Numéricas):** Expresan cantidades numéricas.
    - *Discreta:* Valores contables enteros aislados (ej. cantidad de hijos, autos vendidos).
    - *Continua:* Valores fraccionarios infinitos en un rango medible (ej. peso en libras, estatura, salario en Quetzales).
* **Ejemplo Resuelto:** Clasifica las siguientes variables de una encuesta escolar: a) Departamento de procedencia, b) Cantidad de materias aprobadas, c) Tiempo diario de estudio en horas.
  - *Paso 1 Departamento:* Es una cualidad sin orden. Cualitativa nominal.
  - *Paso 2 Cantidad de materias:* Se cuentan con enteros (1, 2, 3...). Cuantitativa discreta.
  - *Paso 3 Tiempo de estudio:* Se mide y puede tener fracciones (1.5 horas, 2.3 horas). Cuantitativa continua.
  - *Resultado:* a) Cualitativa nominal, b) Cuantitativa discreta, c) Cuantitativa continua.
* **Errores Comunes:** Tratar a las variables cuantitativas discretas como continuas al representarlas en histogramas o promediarlas de forma no lógica en la interpretación.
* **Ejercicios de Práctica:**
  1. Clasifica el "salario mensual en Quetzales" de los trabajadores de una fábrica de calzado en Antigua. (R: Cuantitativa continua).
  2. Clasifica el "color favorito de camiseta" vendido en un almacén. (R: Cualitativa nominal).
  3. Clasifica la "calificación de una tarea como Excelente, Bueno, Regular o Deficiente". (R: Cualitativa ordinal).
  4. ¿Qué tipo de variable es la "temperatura diaria promedio de Quetzaltenango"? (R: Cuantitativa continua).
  5. Clasifica la "cantidad de tuk-tuks registrados en Panajachel". (R: Cuantitativa discreta).
* **¿Necesitas ayuda?** Saber clasificar las variables es fundamental para elegir los gráficos y las fórmulas estadísticas correctas. ¡Repásalas con tu tutor de CEDETU!

### Lección 1.3: Población, Muestra, Parámetro y Estadístico
* **Objetivo:** Diferenciar entre los conceptos de población y muestra, y relacionarlos con los términos de parámetro y estadístico.
* **Explicación:** 
  - **Población:** Conjunto completo de todos los elementos, medidas o individuos de interés en un estudio.
  - **Muestra:** Subconjunto de la población elegido para ser estudiado de forma directa.
  - **Parámetro:** Un valor numérico que resume una característica de la **población** completa (ej. la media poblacional $mu$).
  - **Estadístico:** Un valor numérico calculado a partir de la **muestra** (ej. la media muestral $ar{x}$).
* **Ejemplo Resuelto:** Un analista político realiza una encuesta a 1,000 votantes en Guatemala y reporta que el 52% apoya al candidato A. Identifica la población, la muestra y el tipo de dato.
  - *Paso 1 Población:* Todos los votantes aptos registrados en Guatemala.
  - *Paso 2 Muestra:* Los 1,000 votantes efectivamente encuestados.
  - *Paso 3 Tipo de dato:* El 52% es un estadístico (calculado a partir de la muestra).
  - *Resultado:* Población = Votantes registrados, Muestra = 1,000 encuestados, Dato = Estadístico.
* **Errores Comunes:** Confundir parámetro (poblacional) con estadístico (muestral), asumiendo que los resultados de una pequeña encuesta representan la verdad absoluta de toda la población sin margen de error.
* **Ejercicios de Práctica:**
  1. ¿Cómo se define a una característica numérica calculada de una población completa? (R: Parámetro).
  2. Si mides la estatura promedio de todos los alumnos de un salón específico de 40 estudiantes, ¿el promedio obtenido es un parámetro o estadístico con respecto al salón? (R: Parámetro. El salón es tu población de interés).
  3. ¿Cuál es el término utilizado para el proceso de seleccionar una parte de la población para su estudio? (R: Muestreo).
  4. Si un biólogo analiza el pH del agua en 5 puntos diferentes del lago de Atitlán, ¿cuál es la muestra? (R: Los 5 puntos de agua tomados).
  5. ¿Por qué se prefiere trabajar con muestras en lugar de poblaciones completas en la mayoría de investigaciones de mercado? (R: Por economía de tiempo, menor costo y factibilidad logística).
* **¿Necesitas ayuda?** Entender la diferencia entre muestra y población te preparará perfectamente para tus cursos de metodología de investigación. ¡Asegura tu comprensión con tu tutor!

## Evaluación Unidad 1
* Una empresa encuestadora entrevista a 500 familias en Ciudad de Guatemala sobre su ingreso mensual promedio y obtiene Q8,500. Identifica la población de interés, la muestra y si Q8,500 es parámetro o estadístico. (R: Población = Todas las familias de Ciudad de Guatemala; Muestra = Las 500 familias entrevistadas; Q8,500 = Estadístico muestral).
* Clasifica las variables: 1) Código postal de tu dirección, 2) Número de páginas de un libro de texto de física. (R: 1) Cualitativa nominal. (Nota: Aunque son números, no expresan cantidad contable, son etiquetas de ubicación); 2) Cuantitativa discreta).
* ¿Cuál es el nombre del estudio estadístico que intenta recabar datos de la población completa en lugar de usar muestras? (R: Censo).

---

## Unidad 2: Métodos de Muestreo y Sesgos
### Lección 2.1: Muestreo Probabilístico
* **Objetivo:** Definir y clasificar los métodos de muestreo probabilístico (Aleatorio simple, sistemático y estratificado) reconociendo su importancia en la validez del estudio.
* **Explicación:** Un muestreo es probabilístico si todos los elementos de la población tienen una probabilidad conocida y no nula de ser seleccionados. Garantiza que la muestra sea representativa.
  - **Aleatorio Simple:** Selección al azar (ej. sorteo o tómbola).
  - **Sistemático:** Se elige un punto de partida y luego se selecciona cada $k$-ésimo elemento de una lista ordenada (ej. cada 10 personas).
  - **Estratificado:** Se divide la población en subgrupos homogéneos (estratos, ej. por edades o departamentos) y se toma una muestra aleatoria de cada uno.
* **Ejemplo Resuelto:** Un colegio tiene 600 alumnos de primaria y 400 de secundaria. Se quiere tomar una muestra de 100 alumnos respetando la proporción de nivel. ¿Cómo se hace?
  - *Paso 1:* Divide en estratos: Primaria (60% de la población) y Secundaria (40% de la población).
  - *Paso 2:* Calcula la muestra proporcional por estrato: Primaria = 60 alumnos, Secundaria = 40 alumnos.
  - *Paso 3:* Selecciona aleatoriamente 60 alumnos de la lista de primaria y 40 de secundaria.
  - *Resultado:* Muestreo Aleatorio Estratificado Proporcional aplicado correctamente.
* **Errores Comunes:** Confundir muestreo por conglomerados (grupos heterogéneos) con muestreo estratificado (grupos homogéneos).
* **Ejercicios de Práctica:**
  1. ¿Qué tipo de muestreo se realiza si seleccionas al azar cada 15 clientes que entran a un supermercado en Antigua? (R: Muestreo Sistemático).
  2. ¿Cuál es el muestreo donde cada miembro de la población tiene exactamente la misma probabilidad de ser seleccionado? (R: Muestreo Aleatorio Simple).
  3. En un censo de salud de Xela, se divide la población en vecindarios o cantones y se encuestan todos los hogares de 5 vecindarios elegidos al azar. ¿Qué muestreo es? (R: Muestreo por Conglomerados).
  4. ¿Por qué es fundamental el uso del muestreo probabilístico en investigaciones de mercado científicas? (R: Para evitar el sesgo de selección del encuestador y poder generalizar los resultados con validez matemática).
  5. Si tienes una población de 500 personas y quieres una muestra sistemática de 50, ¿cada cuántos elementos debes seleccionar a tu candidato? (R: Cada 10 personas).
* **¿Necesitas ayuda?** Diseñar un buen muestreo es el pilar invisible de cualquier tesis o investigación de éxito. ¡Aprende a estructurarlos de forma profesional junto a tu tutor de CEDETU!

### Lección 2.2: Muestreo No Probabilístico y Sesgos
* **Objetivo:** Identificar los métodos de muestreo no probabilístico (conveniencia, cuotas) y diagnosticar fuentes comunes de sesgos estadísticos.
* **Explicación:** 
  - **Muestreo No Probabilístico:** La selección no depende del azar, sino del criterio del investigador (ej. por conveniencia: encuestar a tus amigos o a los que pasan cerca). No se pueden generalizar los resultados estadísticamente.
  - **Sesgos Comunes:**
    - *Sesgo de Selección (o de conveniencia):* Muestra no representativa.
    - *Sesgo de No Respuesta:* Personas que deciden no participar y tienen opiniones diferentes.
    - *Sesgo de Respuesta (o de deseabilidad social):* Mentir en las respuestas por vergüenza.
* **Ejemplo Resuelto:** Un programa de radio en Guatemala pide a los oyentes que llamen para opinar sobre una nueva ley. El 90% llama para opinar en contra. ¿Es representativo este resultado?
  - *Paso 1:* La muestra está formada solo por las personas que escuchan esa estación de radio específica a esa hora (conveniencia).
  - *Paso 2:* Además, requiere la iniciativa del oyente para llamar (muestreo de respuesta voluntaria, donde las personas con opiniones extremas están más motivadas a participar).
  - *Resultado:* No es representativo. Presenta un severo sesgo de autoselección.
* **Errores Comunes:** Presentar encuestas realizadas en redes sociales (como Twitter o Facebook) como si fueran la opinión representativa de todo un país, ignorando las brechas digitales de edad e interés.
* **Ejercicios de Práctica:**
  1. ¿Cómo se llama al muestreo no probabilístico donde el investigador elige a los sujetos simplemente porque están más cerca y accesibles? (R: Muestreo por Conveniencia).
  2. Si un encuestador entrevista solo a las personas que salen de un gimnasio en Xela para evaluar la nutrición de toda la ciudad, ¿qué sesgo comete? (R: Sesgo de Selección).
  3. ¿Qué es el sesgo de no respuesta? (R: Ocurre cuando un porcentaje significativo de la muestra elegida se rehúsa a contestar, sesgando los resultados hacia quienes sí contestaron).
  4. Si haces preguntas de forma sesgada (ej. "¿No cree usted que el tráfico de la ciudad es insoportable?"), ¿qué tipo de sesgo induces? (R: Sesgo de Respuesta o de Redacción).
  5. ¿Se pueden aplicar fórmulas de margen de error e intervalos de confianza sobre muestras no probabilísticas? (R: No. La teoría de probabilidad exige muestreos estrictamente probabilísticos).
* **¿Necesitas ayuda?** Identificar sesgos te hará leer las noticias y estadísticas con un ojo analítico y crítico espectacular. ¡Entrénalo junto a tu tutor!

### Lección 2.3: Experimentos versus Estudios Observacionales
* **Objetivo:** Diferenciar entre un estudio observacional (sin intervención) y un experimento diseñado (con asignación aleatoria de tratamientos), identificando variables de confusión.
* **Explicación:** 
  - **Estudio Observacional:** El investigador solo observa y mide variables de interés sin alterar el entorno ni aplicar tratamientos (ej. registrar la dieta de los alumnos y sus notas). Solo muestra **correlación**, no causalidad.
  - **Experimento Diseñado:** El investigador asigna aleatoriamente tratamientos a los sujetos de estudio para observar el efecto directo de una variable independiente sobre la dependiente. Puede demostrar **causalidad**.
* **Ejemplo Resuelto:** Una escuela de natación quiere saber si su nuevo método intensivo funciona. Toma a 100 alumnos, divide a 50 en el grupo tradicional y a 50 en el intensivo al azar, comparando los tiempos al mes. ¿Es estudio o experimento?
  - *Paso 1:* El investigador intervino activamente aplicando un tratamiento (método tradicional vs. intensivo).
  - *Paso 2:* Los sujetos fueron asignados de forma aleatoria a cada tratamiento para aislar el efecto.
  - *Resultado:* Experimento Diseñado.
* **Errores Comunes:** Concluir relaciones de causa y efecto a partir de estudios meramente observacionales (ej. decir que el café causa buena memoria porque los estudiantes con buenas notas toman café, ignorando la variable de confusión de las horas de estudio).
* **Ejercicios de Práctica:**
  1. ¿Qué tipo de investigación estadística es aquella donde se registran las calificaciones y las horas de sueño de los estudiantes sin interferir? (R: Estudio Observacional).
  2. ¿Cuál es el propósito de utilizar un "grupo de control" en un experimento diseñado? (R: Servir como referencia o línea base de comparación, sin recibir el tratamiento activo).
  3. ¿Cómo se le llama a una variable oculta que influye tanto en la variable independiente como en la dependiente, sugiriendo una falsa causalidad? (R: Variable de Confusión).
  4. ¿Qué es un experimento de "doble ciego" en medicina? (R: Aquel donde ni los pacientes ni los médicos que evalúan los resultados saben quién recibió el tratamiento real y quién el placebo).
  5. ¿Se puede establecer una relación de causalidad inequívoca a partir de un estudio observacional? (R: No. Solo correlación).
* **¿Necesitas ayuda?** Diseñar experimentos es el método de oro de la ciencia moderna. ¡Aprende a plantearlos con rigor de la mano de tu tutor de CEDETU!

## Evaluación Unidad 2
* Un investigador quiere evaluar un nuevo abono para maíz en Sololá. Divide un terreno en 20 parcelas, aplica el nuevo abono a 10 parcelas elegidas al azar y el abono tradicional a las otras 10, midiendo la altura final del maíz al mes. ¿Es estudio o experimento, y cuál es el grupo de control? (R: Experimento Diseñado. El grupo de control son las 10 parcelas que recibieron el abono tradicional).
* ¿Qué tipo de sesgo se produce si al realizar una encuesta telefónica sobre la posesión de internet en Guatemala la muestra se toma del directorio de teléfonos fijos residenciales? (R: Sesgo de Selección (o de subcobertura), ya que se excluye a los hogares que solo usan teléfonos celulares o no tienen línea fija).
* ¿Qué es un "placebo" en el diseño de experimentos de medicamentos? (R: Una sustancia inactiva idéntica en apariencia al medicamento real dada al grupo de control para controlar el efecto psicológico de estar siendo tratado).

---

## Unidad 3: Organización de Datos Cualitativos
### Lección 3.1: Tablas de Frecuencia Cualitativas
* **Objetivo:** Construir tablas de distribución de frecuencias para variables categóricas cualitativas nominales y ordinales a partir de datos brutos.
* **Explicación:** Para organizar variables categóricas, contamos la cantidad de veces que ocurre cada categoría (Frecuencia Absoluta, $f$) y calculamos la proporción que representa del total de datos de la muestra ($n$).
  - **Frecuencia Relativa ($fr$):** $fr = f / n$.
  - **Frecuencia Porcentual ($f%$):** $f% = fr 	imes 100%$.
* **Ejemplo Resuelto:** En una muestra de 20 estudiantes de Antigua, se registran sus especialidades preferidas: Ciencias (C), Letras (L), Arte (A). Los datos son: C, L, C, A, C, L, C, C, A, L, C, L, A, C, C, L, A, C, L, C. Organiza la especialidad "Ciencias" en una tabla de frecuencia.
  - *Paso 1 Frecuencia Absoluta:* Cuenta cuántos prefieren Ciencias (C): hay 10 estudiantes ($f = 10$).
  - *Paso 2 Frecuencia Relativa:* Divide entre el total de datos ($n = 20$): $fr = 10 / 20 = 0.50$.
  - *Paso 3 Frecuencia Porcentual:* Multiplica por 100: $f% = 0.50 	imes 100% = 50%$.
  - *Resultado:* Ciencias tiene frecuencia absoluta 10, relativa 0.50 y representa el 50% de la muestra.
* **Errores Comunes:** Calcular frecuencias acumuladas para variables cualitativas nominales; la acumulación solo tiene sentido matemático si las categorías tienen un orden jerárquico implícito (variables cualitativas ordinales).
* **Ejercicios de Práctica:**
  1. Si en un estudio de 50 camisas vendidas en Xela, 15 son rojas, ¿cuál es la frecuencia porcentual de las camisas rojas? (R: 30%).
  2. ¿Cuál debe ser el valor exacto de la suma de todas las frecuencias relativas en cualquier tabla cualitativa? (R: 1).
  3. Si la frecuencia relativa de la categoría "Excelente" es de 0.18, ¿cuál es la frecuencia absoluta si el total de datos es n = 200? (R: 36).
  4. ¿Para qué tipo de variables es adecuado hacer una tabla de contingencia bidimensional? (R: Para dos variables cualitativas analizadas simultáneamente).
  5. Si tienes una muestra de 40 autos y 10 son de color negro, ¿cuál es su frecuencia relativa? (R: 0.25).
* **¿Necesitas ayuda?** La organización limpia de datos cualitativos es el inicio de cualquier reporte de negocios. ¡Aprende a automatizarla con tu tutor de CEDETU!

### Lección 3.2: Gráficos de Barras y Sectores (Pastel)
* **Objetivo:** Seleccionar y diseñar gráficos de barras (frecuencias absolutas) o de sectores circulares (proporciones) para representar variables categóricas cualitativas.
* **Explicación:** 
  - **Gráfico de Barras:** Ideal para comparar la frecuencia absoluta de categorías independientes. Las barras se dibujan separadas para indicar que los datos son categóricos disjuntos (a diferencia del histograma de variables continuas).
  - **Gráfico de Sectores (Pastel):** Ideal para representar partes de un todo de forma visual (frecuencias porcentuales). El ángulo de cada rebanada se calcula como: $alpha = 360^{circ} 	imes fr$.
* **Ejemplo Resuelto:** Un restaurante en Xela vende 3 tipos de platos típicos: Pepián (40%), Jocón (35%) y Kak'ik (25%). Calcula el ángulo que debe tener la rebanada del "Kak'ik" en el gráfico de sectores circular.
  - *Paso 1:* La frecuencia relativa del Kak'ik es $fr = 0.25$.
  - *Paso 2:* Multiplica por 360° para hallar el ángulo: $alpha = 360^{circ} 	imes 0.25 = 90^{circ}$.
  - *Resultado:* La rebanada del Kak'ik debe medir exactamente un ángulo de 90° (un cuarto del círculo).
* **Errores Comunes:** Diseñar gráficos de sectores circulares con demasiadas categorías (más de 6 o 7), lo cual hace el gráfico ilegible y confuso visualmente.
* **Ejercicios de Práctica:**
  1. ¿Qué tipo de gráfico es mejor para mostrar la tendencia de una variable cualitativa a lo largo de varios años? (R: Gráfico de barras agrupadas o líneas categóricas).
  2. Si la frecuencia porcentual de una categoría es del 10%, ¿cuál es el ángulo de su sector circular? (R: 36°).
  3. ¿Por qué se dibujan las barras separadas en un diagrama de barras cualitativo? (R: Para indicar que representan categorías discretas independientes y no intervalos continuos).
  4. Si quieres comparar las ventas de 3 sucursales en diferentes departamentos de Guatemala de forma directa, ¿cuál gráfico es ideal? (R: Gráfico de barras).
  5. ¿Qué propiedad debe cumplir la suma de todos los porcentajes representados en un gráfico de sectores circulares? (R: Debe ser exactamente el 100%).
* **¿Necesitas ayuda?** Diseñar gráficos estadísticos hermosos y que impacten visualmente es un arte valiosísimo en la escuela y el trabajo. ¡Domínalo junto a tu tutor de CEDETU!

### Lección 3.3: Diagrama de Pareto y Ley de 80/20
* **Objetivo:** Diseñar e interpretar un diagrama de Pareto ordenando frecuencias absolutas y acumuladas para identificar las categorías prioritarias en la toma de decisiones.
* **Explicación:** El Diagrama de Pareto es un gráfico de barras combinada con un polígono de frecuencias acumuladas. Las barras se ordenan de mayor a menor frecuencia absoluta de izquierda a derecha. Se basa en la **Ley de Pareto (Principio de 80/20)**: el 80% de los problemas o consecuencias provienen del 20% de las causas prioritarias.
* **Ejemplo Resuelto:** Un negocio de tutorías en Guatemala registra las razones de quejas de alumnos al mes: 1) Ejercicios confusos (60 quejas), 2) Plataforma lenta (30 quejas), 3) Horarios rígidos (10 quejas). Determina el porcentaje acumulado de las primeras dos categorías para aplicar el análisis de Pareto.
  - *Paso 1:* Total de quejas $n = 60 + 30 + 10 = 100$ quejas.
  - *Paso 2:* Ordena de mayor a menor: Ejercicios confusos ($f=60$), Plataforma lenta ($f=30$), Horarios ($f=10$).
  - *Paso 3 Frecuencias Porcentuales:* Ejercicios = 60%, Plataforma = 30%.
  - *Paso 4 Porcentaje Acumulado:* Primera categoría = 60%; Primera y segunda acumuladas = 60% + 30% = 90%.
  - *Resultado:* Al resolver las dos primeras categorías (Ejercicios y Plataforma) se solucionarían el 90% de las quejas totales del mes, validando el principio de Pareto.
* **Errores Comunes:** Graficar las categorías en orden desordenado o aleatorio en el eje horizontal del diagrama de Pareto, violando la regla de orden descendente indispensable.
* **Ejercicios de Práctica:**
  1. ¿En qué orden deben colocarse las barras en un diagrama de Pareto de izquierda a derecha? (R: De mayor a menor frecuencia absoluta).
  2. ¿Qué establece el principio de Pareto en términos de gestión y calidad? (R: Que aproximadamente el 80% de los efectos provienen del 20% de las causas).
  3. Si las frecuencias de fallas son: A = 80, B = 15, C = 5. ¿Cuál es el porcentaje de fallas acumulado que representan A y B juntos? (R: 95%).
  4. ¿Qué tipo de línea se superpone en el diagrama de Pareto para mostrar la acumulación? (R: Una gráfica de línea que representa el porcentaje acumulado (de 0% a 100%)).
  5. Si un negocio quiere mejorar la satisfacción del cliente en Xela aplicando Pareto, ¿en qué quejas debe enfocarse primero? (R: En las pocas quejas iniciales de la izquierda que representan la gran mayoría de la frecuencia absoluta acumulada).
* **¿Necesitas ayuda?** El Diagrama de Pareto es una de las herramientas de calidad industrial más famosas del mundo corporativo. ¡Aprende a construirla de forma fácil e interactiva junto a tu tutor!

## Evaluación Unidad 3
* Se encuestó a 50 personas sobre la razón de elegir el Centro de Tutorías: A) Profesores excelentes (25), B) Flexibilidad (15), C) Precio (10). Construye la tabla de frecuencias absolutas y porcentuales ordenadas de forma descendente y calcula el porcentaje acumulado de las dos primeras. (R: Profesores = 50%; Flexibilidad = 30%; Precio = 20%. Acumulado de las dos primeras = 80%. Retroalimentación: 25/50 = 50%; 15/50 = 30%; 50% + 30% = 80%).
* Si diseñas un gráfico circular de sectores para representar los datos de la encuesta anterior, ¿cuántos grados del círculo debe medir el sector de la categoría "Flexibilidad"? (R: 108°. Retroalimentación: 360° * 0.30 = 108°).
* ¿Para qué sirve cruzar la línea del 80% horizontal en el diagrama de Pareto? (R: Para identificar visualmente las causas prioritarias "vitales" a la izquierda de la intersección que causan la gran mayoría de problemas).
`,

    "probabilidad-basica": `# Curso: Probabilidad Básica
* **Materia:** Matemáticas | **Nivel sugerido:** Diversificado / Universidad
* **Público objetivo:** Estudiantes de bachillerato y universitarios que inician el estudio del azar, el cálculo de probabilidades y la toma de decisiones bajo incertidumbre.
* **Objetivos de aprendizaje:** Definir experimentos aleatorios y espacios muestrales, calcular probabilidades elementales usando la Regla de Laplace, aplicar reglas de suma y producto para eventos condicionales e independientes, y resolver problemas utilizando el Teorema de Bayes.

## Unidad 1: Fundamentos y Espacio Muestral
### Lección 1.1: Experimentos Aleatorios y Espacio Muestral
* **Objetivo:** Definir experimentos aleatorios, espacio muestral y eventos, identificando los resultados posibles en situaciones de juego y cotidianas.
* **Explicación:** 
  - **Experimento Aleatorio:** Aquel cuyo resultado no se puede predecir con certeza antes de realizarlo, incluso si se repite bajo las mismas condiciones (ej. lanzar un dado). Su contraparte es el experimento determinista (ej. calentar agua a 100°C).
  - **Espacio Muestral ($S$ o $Omega$):** El conjunto completo de todos los resultados posibles y distintos de un experimento aleatorio.
  - **Evento (o Suceso):** Cualquier subconjunto de resultados del espacio muestral (ej. obtener número par al lanzar un dado).
* **Ejemplo Resuelto:** Se lanzan dos monedas quetzal al aire al mismo tiempo. Escribe el espacio muestral completo del experimento y define el evento "obtener al menos un escudo (E)". (Nota: escudo E, cara C).
  - *Paso 1 Espacio Muestral:* Escribe las parejas posibles: $S = {CC, CE, EC, EE}$. Hay 4 resultados en total.
  - *Paso 2 Identificar Evento:* "Al menos un escudo" significa 1 o 2 escudos. Los resultados que cumplen son: $A = {CE, EC, EE}$.
  - *Resultado:* $S = {CC, CE, EC, EE}$ y $A = {CE, EC, EE}$.
* **Errores Comunes:** Omitir el orden en experimentos encadenados, asumiendo que obtener cara y escudo (CE) es el mismo resultado único que escudo y cara (EC) en el espacio muestral.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el espacio muestral de lanzar un dado de 6 caras común? (R: S = {1, 2, 3, 4, 5, 6}).
  2. Clasifica el experimento "soltar una piedra desde un puente de Antigua y ver si cae por gravedad" como determinista o aleatorio. (R: Determinista).
  3. Se lanza un dado y se define el evento "obtener un número mayor que 4". Escribe el subconjunto. (R: {5, 6}).
  4. ¿Cuántos resultados posibles contiene el espacio muestral de lanzar tres monedas al aire al mismo tiempo? (R: 8 resultados. Retroalimentación: 2³ = 8).
  5. ¿Cómo se define un "evento imposible" en teoría de probabilidad? (R: Aquel subconjunto que está vacío y no contiene ningún resultado del espacio muestral, su probabilidad es exactamente cero).
* **¿Necesitas ayuda?** Visualizar el espacio muestral es la base de todo el cálculo de probabilidad. ¡Toma una clase interactiva con tu tutor de CEDETU y domina este pilar!

### Lección 1.2: Definición Clásica de Probabilidad (Regla de Laplace)
* **Objetivo:** Calcular la probabilidad de eventos simples utilizando la fórmula fundamental de Laplace de casos favorables sobre casos posibles en espacios equiprobables.
* **Explicación:** Si todos los resultados de un espacio muestral son igualmente probables de ocurrir (equiprobables), la probabilidad de un evento $A$ se calcula mediante la **Regla de Laplace**:
  $P(A) = rac{	ext{Número de casos favorables a } A}{	ext{Número total de casos posibles en } S}$
  La probabilidad es un número decimal entre 0 y 1, que también se expresa como porcentaje (de 0% a 100%).
* **Ejemplo Resuelto:** En una tómbola escolar en Sololá hay 30 papeles numerados del 1 al 30. Si se extrae un papel al azar, ¿cuál es la probabilidad de que sea un número múltiplo de 5?
  - *Paso 1 Casos Posibles:* El espacio muestral completo tiene 30 resultados ($N = 30$).
  - *Paso 2 Casos Favorables:* Múltiplos de 5 entre 1 y 30: $A = {5, 10, 15, 20, 25, 30}$. Hay 6 números favorables ($n(A) = 6$).
  - *Paso 3 Aplicar Laplace:* $P(A) = 6 / 30 = 1 / 5 = 0.20$.
  - *Resultado:* La probabilidad es de 0.20 o 20%.
* **Errores Comunes:** Expresar probabilidades como números mayores que 1 o menores que 0, lo cual es una violación matemática grave de los axiomas de la probabilidad.
* **Ejercicios de Práctica:**
  1. ¿Cuál es la probabilidad de obtener un número par al lanzar un dado de 6 caras? (R: 0.50 o 50%).
  2. En una baraja de 52 cartas, ¿cuál es la probabilidad de extraer un as al azar? (R: 1/13 o 7.69%).
  3. Si en un salón de 40 estudiantes en Antigua 24 son mujeres, ¿cuál es la probabilidad de elegir un hombre al azar? (R: 0.40 o 40%. Retroalimentación: Hombres = 40 - 24 = 16. P = 16/40 = 0.4).
  4. ¿Cuál es la probabilidad de obtener exactamente 7 al lanzar un dado común de 6 caras? (R: 0. Evento imposible).
  5. En una bolsa hay 5 canicas rojas, 3 azules y 2 verdes. ¿Cuál es la probabilidad de extraer una canica azul? (R: 0.30 o 30%).
* **¿Necesitas ayuda?** La regla de Laplace es el punto de partida para resolver cualquier probabilidad de juegos de azar. ¡Practícala de forma divertida con tu tutor de CEDETU!

### Lección 1.3: Enfoque Frecuencial y Subjetivo
* **Objetivo:** Diferenciar entre la probabilidad clásica (Laplace), la probabilidad frecuencial (basada en la experimentación repetida) y la subjetiva (basada en el juicio de expertos).
* **Explicación:** 
  - **Enfoque Clásico (Laplace):** Se calcula a priori sin realizar el experimento, asumiendo simetría y equiprobabilidad.
  - **Enfoque Frecuencial (Empírico):** Se calcula a posteriori después de repetir el experimento un gran número de veces ($N$): $P(A) approx 	ext{Frecuencia Absoluta de } A / N$. Por la **Ley de los Grandes Números**, a mayor repetición, la probabilidad empírica se acerca a la teórica.
  - **Enfoque Subjetivo:** Se basa en la intuición, experiencia o juicio de una persona ante eventos no repetibles (ej. probabilidad de que un nuevo negocio en Xela sea exitoso).
* **Ejemplo Resuelto:** Un laboratorio farmacéutico en Guatemala prueba una vacuna en 10,000 voluntarios y registra que 9,850 desarrollaron inmunidad. ¿Qué probabilidad se está reportando y cuánto vale?
  - *Paso 1:* Los datos provienen de un registro empírico real repetido en una muestra gigante de personas. No es un análisis simétrico a priori.
  - *Paso 2 Cálculo:* $P(	ext{Inmunidad}) approx 9,850 / 10,000 = 0.985$.
  - *Resultado:* Probabilidad Frecuencial de 0.985 o 98.5%.
* **Errores Comunes:** Asumir que la probabilidad teórica de un dado de obtener un "6" (16.6%) significa que si lanzas el dado 6 veces obtendrás exactamente un 6 en la práctica, ignorando la variación aleatoria de muestras pequeñas.
* **Ejercicios de Práctica:**
  1. Si lanzas una moneda 1,000 veces y obtienes 512 caras, ¿cuál es la probabilidad frecuencial de obtener cara en esa moneda? (R: 0.512 o 51.2%).
  2. ¿Qué ley matemática establece que al aumentar indefinidamente el número de ensayos de un experimento, la probabilidad frecuencial tiende a coincidir con la probabilidad clásica teórica? (R: La Ley de los Grandes Números).
  3. Un economista estima: "Hay un 70% de probabilidad de que la inflación disminuya el próximo año en el país". ¿Qué enfoque aplica? (R: Enfoque Subjetivo).
  4. ¿Para qué tipo de situaciones o eventos es la probabilidad subjetiva la única forma viable de análisis? (R: Para eventos únicos, no repetibles y de los cuales no existen datos históricos masivos o condiciones simétricas).
  5. Si lanzas un dado 60 veces y obtienes el número 5 en 12 ocasiones, ¿cuál es su probabilidad empírica o frecuencial? (R: 0.20 o 20%).
* **¿Necesitas ayuda?** La probabilidad empírica es el motor de los seguros y la medicina real. ¡Aprende a analizarla de forma muy analítica al lado de tu tutor!

## Evaluación Unidad 1
* Se lanzan tres monedas al aire al mismo tiempo. Escribe el espacio muestral completo y calcula la probabilidad clásica de obtener exactamente dos caras (C) y un escudo (E). (R: S = {CCC, CCE, CEC, ECC, EEC, ECE, CEE, EEE}. Total = 8 resultados. Favorables a 2C y 1E = {CCE, CEC, ECC} (3 casos). P = 3/8 = 0.375 o 37.5%).
* Si una fábrica produce 5,000 piezas mecánicas y en el control de calidad se detectan 25 defectuosas, ¿cuál es la probabilidad empírica de que una pieza elegida al azar esté defectuosa? (R: 0.005 o 0.5%).
* ¿Cuál es la probabilidad del evento seguro (aquel que contiene todo el espacio muestral)? (R: Exactamente 1 o 100%).

---

## Unidad 2: Reglas de Probabilidad
### Lección 2.1: Regla de la Adición (Evento Unión)
* **Objetivo:** Calcular la probabilidad de la unión de dos eventos (evento A o evento B) diferenciando entre eventos mutuamente excluyentes y no excluyentes.
* **Explicación:** El evento unión ($A cup B$) ocurre si se cumple el evento A, el evento B o ambos al mismo tiempo.
  - **Eventos Mutuamente Excluyentes:** No pueden ocurrir al mismo tiempo (su intersección es vacía: $P(A cap B) = 0$).
    - Fórmula: $P(A cup B) = P(A) + P(B)$.
  - **Eventos No Excluyentes:** Sí pueden ocurrir juntos. Para no contar doble la intersección, la restamos:
    - Fórmula: $P(A cup B) = P(A) + P(B) - P(A cap B)$.
* **Ejemplo Resuelto:** Si extraes una carta al azar de una baraja estándar de 52 cartas, ¿cuál es la probabilidad de que la carta extraída sea un Rey (R) o un corazón (C)?
  - *Paso 1 Identificar Eventos:* Hay 4 Reyes ($P(R) = 4/52$) y 13 cartas de corazón ($P(C) = 13/52$).
  - *Paso 2 Intersección:* ¿Hay algún Rey que sea de corazón? Sí, el Rey de corazones ($P(R cap C) = 1/52$). Los eventos son no excluyentes.
  - *Paso 3 Aplicar Fórmula:* $P(R cup C) = rac{4}{52} + rac{13}{52} - rac{1}{52} = rac{16}{52} = rac{4}{13} approx 0.307$.
  - *Resultado:* La probabilidad es de 0.307 o 30.7%.
* **Errores Comunes:** Olvidar restar la intersección en eventos no excluyentes, lo que infla de forma irreal la probabilidad del evento unión.
* **Ejercicios de Práctica:**
  1. Al lanzar un dado, ¿cuál es la probabilidad de obtener un 3 o un 5? (R: 1/3 o 33.3%. Retroalimentación: Eventos mutuamente excluyentes: 1/6 + 1/6 = 2/6 = 1/3).
  2. En una urna hay 10 esferas: 4 rojas, 3 azules y 3 verdes. ¿Cuál es la probabilidad de extraer una esfera roja o verde? (R: 0.70 o 70%).
  3. En un salón de 30 estudiantes en Xela, 15 juegan fútbol, 10 juegan baloncesto y 5 juegan ambos deportes. Si eliges un estudiante al azar, ¿cuál es la probabilidad de que juegue fútbol o baloncesto? (R: 0.67 o 66.7%. Retroalimentación: P = 15/30 + 10/30 - 5/30 = 20/30 = 2/3).
  4. ¿Cómo se define el término "eventos mutuamente excluyentes"? (R: Eventos que no tienen elementos comunes y cuya probabilidad de ocurrir juntos es exactamente cero).
  5. Al lanzar un dado, ¿cuál es la probabilidad de obtener un número impar o un número múltiplo de 3? (R: 0.67 o 66.7%. Retroalimentación: Impares = {1,3,5} (P=3/6), Múltiplos 3 = {3,6} (P=2/6), Intersección = {3} (P=1/6). P = 3/6 + 2/6 - 1/6 = 4/6 = 2/3).
* **¿Necesitas ayuda?** La regla de la suma es fundamental para entender clasificaciones y agrupaciones de datos. ¡Domínala con tu tutor de CEDETU!

### Lección 2.2: Regla de la Multiplicación e Independencia
* **Objetivo:** Calcular la probabilidad de la intersección de dos eventos (evento A y evento B) aplicando la regla de multiplicación para eventos independientes y dependientes (muestreo con y sin reemplazo).
* **Explicación:** El evento intersección ($A cap B$) ocurre si se cumplen el evento A y el evento B al mismo tiempo de forma encadenada.
  - **Eventos Independientes:** La ocurrencia de uno no afecta en absoluto la probabilidad del otro (ej. lanzar una moneda dos veces).
    - Fórmula: $P(A cap B) = P(A) 	imes P(B)$.
  - **Eventos Dependientes (Condicionales):** La ocurrencia de uno altera la probabilidad del otro (ej. extraer cartas consecutivas sin devolverlas a la baraja).
    - Fórmula: $P(A cap B) = P(A) 	imes P(B|A)$  donde $P(B|A)$ es la probabilidad de B dado que A ya ocurrió.
* **Ejemplo Resuelto:** Una urna contiene 5 canicas rojas y 3 azules. Se extraen dos canicas una tras otra sin reemplazo (no se devuelven). Calcula la probabilidad de que ambas canicas extraídas sean rojas.
  - *Paso 1 Primera Extracción:* Hay 5 canicas rojas de un total de 8: $P(R_1) = 5/8$.
  - *Paso 2 Segunda Extracción (sin reemplazo):* Quedan 4 canicas rojas de un total de 7 canicas restantes: $P(R_2|R_1) = 4/7$.
  - *Paso 3 Multiplicación:* $P(R_1 cap R_2) = rac{5}{8} 	imes rac{4}{7} = rac{20}{56} = rac{5}{14} approx 0.357$.
  - *Resultado:* La probabilidad de extraer dos canicas rojas consecutivas es de 0.357 o 35.7%.
* **Errores Comunes:** Mantener el mismo denominador total en la segunda fracción en problemas de muestreo sin reemplazo, ignorando que el total de elementos de la urna disminuyó.
* **Ejercicios de Práctica:**
  1. Lanzas una moneda quetzal y un dado común al mismo tiempo. ¿Cuál es la probabilidad de obtener escudo y el número 6? (R: 1/12 o 8.33%. Retroalimentación: Eventos independientes: 1/2 * 1/6 = 1/12).
  2. Extraes dos cartas de una baraja de 52 cartas con reemplazo (devolviendo la primera). ¿Cuál es la probabilidad de obtener dos ases seguidos? (R: 1/169 o 0.59%. Retroalimentación: 4/52 * 4/52 = 1/13 * 1/13 = 1/169).
  3. En la misma baraja de 52 cartas, ¿cuál es la probabilidad de extraer dos ases seguidos sin reemplazo? (R: 1/221 o 0.45%. Retroalimentación: 4/52 * 3/51 = 1/13 * 1/17 = 1/221).
  4. Si la probabilidad de que llueva en Tecpán hoy es 0.60 y la de que llueva mañana es 0.50 de forma independiente, ¿cuál es la probabilidad de que llueva ambos días? (R: 0.30 o 30%).
  5. ¿Cómo se define el concepto de eventos independientes? (R: Eventos tales que la ocurrencia de uno no modifica en absoluto la probabilidad de ocurrencia del otro).
* **¿Necesitas ayuda?** Saber distinguir entre muestreos con y sin reemplazo es la base de los modelos de simulación y control industrial de calidad. ¡Aprende los trucos prácticos con tu tutor!

### Lección 2.3: La Probabilidad del Complemento
* **Objetivo:** Calcular la probabilidad de que un evento no ocurra utilizando la regla del complemento $P(A') = 1 - P(A)$ para simplificar problemas complejos del tipo "al menos uno".
* **Explicación:** El complemento de un evento $A$ (denotado como $A'$ o $A^c$) está formado por todos los resultados del espacio muestral que no pertenecen a $A$. Dado que todo el espacio muestral suma una probabilidad de 1:
  - Fórmula: $P(A') = 1 - P(A)$.
  Es sumamente útil para problemas de probabilidad del tipo "al menos uno", que serían eternos de calcular sumando casos individuales directos.
* **Ejemplo Resuelto:** Lanzas una moneda quetzal 4 veces consecutivas al aire. ¿Cuál es la probabilidad de obtener al menos un escudo (E) en los 4 lanzamientos?
  - *Paso 1 Identifica el Complemento:* Lo contrario de "obtener al menos un escudo" es el evento "no obtener ningún escudo en absoluto" (es decir, obtener puras caras: CCCC).
  - *Paso 2 Calcula el Complemento:* La probabilidad de obtener cara en un lanzamiento es 1/2. Al ser lanzamientos independientes:
    $P(	ext{CCCC}) = (1/2)^4 = 1/16 = 0.0625$.
  - *Paso 3 Aplica la Regla del Complemento:*
    $P(	ext{Al menos un Escudo}) = 1 - P(	ext{CCCC}) = 1 - 1/16 = 15/16 = 0.9375$.
  - *Resultado:* La probabilidad es de 0.9375 o 93.75%.
* **Errores Comunes:** Intentar calcular de forma directa todas las combinaciones posibles de obtener 1, 2, 3 o 4 escudos a pie, aumentando dramáticamente la probabilidad de cometer un error aritmético sencillo.
* **Ejercicios de Práctica:**
  1. Si la probabilidad de que un lote de abono de Sololá sea defectuoso es de 0.03, ¿cuál es la probabilidad de que sea un lote no defectuoso? (R: 0.97).
  2. Lanzas dos dados comunes al mismo tiempo. ¿Cuál es la probabilidad de obtener una suma de caras diferente de 7? (Nota: La probabilidad de sumar exactamente 7 es 6/36 = 1/6). (R: 5/6 o 83.3%).
  3. Si la probabilidad de fallar un tiro penal en fútbol es del 25%, ¿cuál es la probabilidad de anotar el gol? (R: 75%).
  4. Lanzas una moneda 3 veces. ¿Cuál es la probabilidad de obtener al menos una cara? (R: 7/8 o 87.5%. Retroalimentación: Complemento es puras escudos: EEE (P=1/8). 1 - 1/8 = 7/8).
  5. ¿Qué propiedad geométrica o axiomática fundamenta que la suma de la probabilidad de un evento y su complemento sea exactamente igual a 1? (R: El axioma de coligación y certidumbre del espacio muestral completo).
* **¿Necesitas ayuda?** La regla del complemento es la herramienta que ahorra más tiempo de examen en las pruebas de admisión universitaria. ¡Conoce todos sus usos lógicos junto a tu tutor de CEDETU!

## Evaluación Unidad 2
* En una encuesta de consumo en Xela, el 70% de las personas toma café, el 40% consume pan dulce en las tardes y el 30% hace ambas cosas simultáneamente. Si eliges una persona al azar, ¿cuál es la probabilidad de que consuma café o pan dulce? (R: 0.80 o 80%. Retroalimentación: P(A∪B) = 0.70 + 0.40 - 0.30 = 0.80).
* En un almacén de Antigua hay una caja con 10 bombillas, de las cuales 3 están quemadas. Si se extraen dos bombillas al azar una tras otra sin reemplazo, ¿cuál es la probabilidad de que ninguna esté quemada (ambas buenas)? (R: 7/15 ≈ 0.467. Retroalimentación: Primera buena = 7/10; Segunda buena = 6/9. P = 7/10 * 6/9 = 42/90 = 7/15).
* Si la probabilidad de que un estudiante apruebe el examen de admisión a la universidad es del 35%, ¿cuál es la probabilidad de que repruebe? (R: 65%).

---

## Unidad 3: Probabilidad Condicional y Teorema de Bayes
### Lección 3.1: Probabilidad Condicional
* **Objetivo:** Calcular la probabilidad de un evento A dado que ya ha ocurrido el evento B, aplicando la fórmula de probabilidad condicional.
* **Explicación:** La probabilidad condicional mide la probabilidad de un evento sabiendo que se ha restringido el espacio muestral debido a la ocurrencia de otro evento previo.
  - Fórmula: $P(A|B) = rac{P(A cap B)}{P(B)} quad (	ext{para } P(B) > 0)$.
  - $P(A|B)$ se lee "probabilidad de A dado B".
* **Ejemplo Resuelto:** En un salón de 100 estudiantes universitarios, 40 estudian ingeniería, 30 estudian física y 20 estudian ambas carreras al mismo tiempo. Si se elige al azar un estudiante que sabemos que estudia ingeniería (evento B), ¿cuál es la probabilidad de que también estudie física (evento A)?
  - *Paso 1 Identificar Probabilidades:* $P(	ext{Ingeniería}) = 40/100 = 0.40$. $P(	ext{Ambas}) = P(	ext{Física} cap 	ext{Ingeniería}) = 20/100 = 0.20$.
  - *Paso 2 Aplicar Fórmula:* $P(	ext{Física}|	ext{Ingeniería}) = rac{P(	ext{Física} cap 	ext{Ingeniería})}{P(	ext{Ingeniería})} = rac{0.20}{0.40} = 0.50$.
  - *Resultado:* Hay una probabilidad del 50% de que estudie física dado que ya sabemos que es estudiante de ingeniería. (Nota cómo el espacio muestral se redujo de 100 estudiantes totales a solo los 40 ingenieros).
* **Errores Comunes:** Dividir entre la probabilidad del evento condicionado $P(A)$ en lugar de dividir por el evento condición $P(B)$ en el denominador.
* **Ejercicios de Práctica:**
  1. Si P(A) = 0.30, P(B) = 0.60 y P(A ∩ B) = 0.18, calcula P(A|B). (R: 0.30. Retroalimentación: P(A|B) = 0.18 / 0.60 = 0.3. Como P(A|B) = P(A), los eventos son independientes).
  2. En un salón de 50 alumnos en Antigua, 20 juegan tenis. Si sabemos que 10 juegan tenis y squash, y elegimos a un tenista al azar, ¿cuál es la probabilidad de que juegue squash? (R: 0.50 o 50%).
  3. Si la probabilidad de que una máquina falle es 0.10 y la probabilidad de que falle por falta de lubricación es 0.08, ¿cuál es la probabilidad de que falte lubricación dado que la máquina ya falló? (R: 0.80 o 80%).
  4. ¿Cómo se expresa formalmente la probabilidad de que ocurra el evento Y bajo la condición de que el evento X ya haya ocurrido? (R: P(Y|X)).
  5. Si P(A|B) = 0.50 y P(B) = 0.40, calcula la probabilidad de la intersección P(A ∩ B). (R: 0.20. Retroalimentación: P(A ∩ B) = P(A|B) * P(B) = 0.5 * 0.4 = 0.2).
* **¿Necesitas ayuda?** La probabilidad condicional es fundamental para restringir bases de datos y hacer análisis demográficos selectivos. ¡Aprende a dominarla con tu tutor de CEDETU!

### Lección 3.2: Tablas de Contingencia y Diagramas de Árbol
* **Objetivo:** Organizar problemas de probabilidad condicional encadenados en diagramas de árbol o tablas de contingencia bidimensionales para resolver de forma visual e infalible.
* **Explicación:** 
  - **Tabla de Contingencia:** Tabla cruzada de dos variables cualitativas que muestra frecuencias conjuntas y totales marginales. Permite calcular probabilidades condicionales dividiendo la celda interna por el total de la fila o columna correspondiente.
  - **Diagrama de Árbol:** Representación gráfica de eventos encadenados por ramas. Las probabilidades de las ramas sucesivas representan probabilidades condicionales; la multiplicación de las ramas de un camino da la intersección.
* **Ejemplo Resuelto:** En un examen médico en Ciudad de Guatemala se evalúa a una población de fumadores (F) y no fumadores (NF) y la presencia de tos crónica (T) en la siguiente tabla:
  - F y T = 25 personas | F y No T = 15 personas (Total F = 40)
  - NF y T = 10 personas | NF y No T = 50 personas (Total NF = 60)
  - Total de personas encuestadas = 100.
  Si eliges a un fumador al azar de esta muestra, ¿cuál es la probabilidad de que tenga tos crónica?
  - *Paso 1 Restringir al estrato:* El problema pide "dado que es fumador". Nos enfocamos solo en la fila de Fumadores (Total F = 40).
  - *Paso 2 Casos Favorables:* Fumadores que tienen tos crónica = 25 personas.
  - *Paso 3 Calcular:* $P(	ext{Tos}|	ext{Fumador}) = 25 / 40 = 5/8 = 0.625$.
  - *Resultado:* Hay un 62.5% de probabilidad de tener tos crónica dentro del grupo de fumadores de la muestra.
* **Errores Comunes:** Dividir por el gran total de 100 encuestados al calcular una probabilidad condicionada en una tabla de contingencia, cometiendo un error conceptual básico.
* **Ejercicios de Práctica:**
  1. Con la tabla anterior, ¿cuál es la probabilidad de elegir a una persona con tos crónica en toda la muestra? (R: 0.35 o 35%. Retroalimentación: Total Tos = 25 + 10 = 35 de 100).
  2. ¿Qué representa la multiplicación de las probabilidades a lo largo de una sola rama de un diagrama de árbol? (R: La probabilidad de la intersección o conjunción de todos los eventos del camino).
  3. En un diagrama de árbol de dos etapas, si la primera rama tiene P(A) = 0.4 y la rama secundaria tiene P(B|A) = 0.7, ¿cuánto vale la probabilidad de la intersección P(A ∩ B)? (R: 0.28).
  4. ¿Qué propiedad debe cumplir la suma de las probabilidades de todas las ramas que parten de un mismo vértice o nodo común en un diagrama de árbol? (R: Debe ser exactamente igual a 1).
  5. Con la tabla del ejemplo resuelto, si eliges a una persona que no tiene tos crónica, ¿cuál es la probabilidad de que no sea fumadora? (R: 0.769 o 76.9%. Retroalimentación: Total No Tos = 15 + 50 = 65. No Fumadores y No Tos = 50. P = 50/65 ≈ 0.769).
* **¿Necesitas ayuda?** Los diagramas de árbol hacen sencillos los problemas de probabilidad condicional más enredados del bachillerato. ¡Construye los tuyos junto a tu tutor de CEDETU!

### Lección 3.3: Introducción al Teorema de Bayes
* **Objetivo:** Resolver problemas de probabilidad de causas (Teorema de Bayes) a partir de probabilidades a priori y verosimilitudes en contextos reales de diagnóstico y calidad.
* **Explicación:** El Teorema de Bayes calcula la probabilidad a posteriori de una causa o hipótesis $A_i$ dada la ocurrencia de un efecto o resultado observado $B$:
  $P(A_i|B) = rac{P(A_i) 	imes P(B|A_i)}{P(B)}$
  donde $P(B) = sum P(A_j) 	imes P(B|A_j)$ es la Ley de Probabilidad Total (la suma de todas las formas en las que puede ocurrir el efecto B).
* **Ejemplo Resuelto:** Una clínica de salud en Guatemala aplica una prueba para detectar una enfermedad que padece el 1% de la población (probabilidad a priori $P(E) = 0.01$). La prueba tiene una exactitud de diagnóstico (sensibilidad) del 95% para personas enfermas ($P(+|E) = 0.95$), pero da un 5% de falsos positivos en personas sanas ($P(+|S) = 0.05$). Si una persona al azar se hace la prueba y da positivo (+), ¿cuál es la probabilidad real de que esté enferma?
  - *Paso 1 Probabilidad Total de dar Positivo P(+):*
    $P(+) = P(E) cdot P(+|E) + P(S) cdot P(+|S) = 0.01 	imes 0.95 + 0.99 	imes 0.05 = 0.0095 + 0.0495 = 0.0590$.
  - *Paso 2 Aplicar Teorema de Bayes:*
    $P(E|+) = rac{P(E) cdot P(+|E)}{P(+)} = rac{0.0095}{0.0590} approx 0.161$.
  - *Resultado:* Hay solo un 16.1% de probabilidad de que la persona que dio positivo realmente tenga la enfermedad (Esto se debe a que la enfermedad es sumamente rara y el número absoluto de falsos positivos en personas sanas es mayor que el de verdaderos positivos).
* **Errores Comunes:** Confundir la exactitud teórica de la prueba en el laboratorio con la probabilidad real de estar enfermo dado un resultado positivo en la calle (lo cual confunde a muchos profesionales de la salud).
* **Ejercicios de Práctica:**
  1. Si una fábrica de Xela compra el 60% de sus insumos al Proveedor A y el 40% al Proveedor B. El Proveedor A tiene un 2% de piezas defectuosas y el B un 5%. Si se elige una pieza al azar y resulta defectuosa, calcula la probabilidad total de que sea defectuosa. (R: 0.032 o 3.2%).
  2. Con los datos anteriores, calcula la probabilidad de que provenga del Proveedor A dado que resultó defectuosa. (R: 0.375 o 37.5%. Retroalimentación: P(A|D) = (0.6 * 0.02) / 0.032 = 0.012 / 0.032 = 0.375).
  3. ¿Cómo se le conoce a la probabilidad inicial P(A_i) asignada a un evento antes de contar con nueva información o pruebas de diagnóstico en el Teorema de Bayes? (R: Probabilidad a Priori).
  4. ¿Qué es la "sensibilidad" de una prueba de diagnóstico médico en términos de probabilidad condicional? (R: La probabilidad de dar positivo dado que el paciente realmente padece la enfermedad: P(+|Enfermo)).
  5. Si P(A) = 0.50, P(B|A) = 0.20 y la probabilidad total P(B) = 0.25, calcula P(A|B). (R: 0.40. Retroalimentación: P(A|B) = 0.5 * 0.2 / 0.25 = 0.1 / 0.25 = 0.4).
* **¿Necesitas ayuda?** El Teorema de Bayes es uno de los logros más hermosos del razonamiento lógico matemático y es la base de los filtros de spam y la Inteligencia Artificial. ¡Vuélvete un experto en Bayes junto a tu tutor de CEDETU!

## Evaluación Unidad 3
* Tres máquinas A, B y C producen el 50%, 30% y 20% del total de artículos de una fábrica. Los porcentajes de artículos defectuosos de cada máquina son 1%, 2% y 3% respectivamente. Si se selecciona un artículo al azar y resulta defectuoso, ¿cuál es la probabilidad de que haya sido producido por la máquina C? (R: 0.353 o 35.3%. Retroalimentación: Probabilidad total defectuoso = 0.50*0.01 + 0.30*0.02 + 0.20*0.03 = 0.005 + 0.006 + 0.006 = 0.017. P(C|D) = (0.20 * 0.03) / 0.017 = 0.006 / 0.017 = 6/17 ≈ 0.353).
* En un colegio de Antigua, el 60% de los alumnos estudia inglés, el 40% estudia francés y el 20% estudia ambos. Si elegimos al azar a un alumno que estudia francés, ¿cuál es la probabilidad de que también estudie inglés? (R: 0.50 o 50%. Retroalimentación: P(I|F) = P(I∩F)/P(F) = 0.20 / 0.40 = 0.50).
* ¿Quién formuló originalmente el teorema que permite actualizar nuestras creencias estadísticas y estimaciones lógicas a partir de evidencias experimentales nuevas? (R: El reverendo y matemático británico Thomas Bayes en el siglo XVIII).
`,

    "distribuciones-probabilidad": `# Curso: Distribuciones de Probabilidad
* **Materia:** Matemáticas | **Nivel sugerido:** Universidad
* **Público objetivo:** Estudiantes universitarios y de diversificado que necesitan dominar el comportamiento probabilístico de variables aleatorias discretas y continuas.
* **Objetivos de aprendizaje:** Operar con variables aleatorias, calcular probabilidades binomiales exactas usando la fórmula combinatoria y resolver aplicaciones de la distribución normal estándar mediante tablas Z.

## Unidad 1: Variables Aleatorias y Distribuciones Discretas
### Lección 1.1: Concepto de Variable Aleatoria
* **Objetivo:** Definir y clasificar variables aleatorias en discretas y continuas analizando su dominio.
* **Explicación:** Una variable aleatoria es una función que asigna un valor numérico real a los resultados de un experimento aleatorio. Las discretas toman valores contables y aislados; las continuas toman infinitos valores en un intervalo medible.
* **Ejemplo Resuelto:** Clasifica: 1) El número de visitas a un sitio web de tutorías al día, 2) El tiempo que pasa un tutor con un alumno en segundos.
  - *Paso 1:* Las visitas se cuentan con enteros: 0, 1, 2... Es discreta.
  - *Paso 2:* El tiempo es continuo y admite fracciones infinitas de segundo. Es continua.
  - *Resultado:* 1) Discreta, 2) Continua.
* **Errores Comunes:** Pensar que porque redondeamos los salarios a centavos, la variable salario se vuelve discreta. Su naturaleza teórica sigue siendo continua.
* **Ejercicios de Práctica:**
  1. Clasifica la variable "número de respuestas correctas en un test de 5 preguntas". (R: Discreta).
  2. Clasifica "la temperatura exacta a la que opera el servidor de Supabase en Xela". (R: Continua).
  3. ¿Cuál es la unidad de medida de una variable aleatoria en sí? (R: Adimensional, el rango son números reales puros).
  4. Clasifica la "distancia recorrida por un tutor para dar una clase a domicilio en Antigua". (R: Continua).
  5. Clasifica la "cantidad de correos electrónicos de consulta recibidos hoy". (R: Discreta).
* **¿Necesitas ayuda?** Aprender a modelar el azar con variables aleatorias es el primer paso de la ciencia. ¡Hazlo con tu tutor de CEDETU!

### Lección 1.2: Función de Masa de Probabilidad
* **Objetivo:** Diseñar y validar funciones de masa de probabilidad para variables discretas.
* **Explicación:** La función de masa de probabilidad P(X = x) asigna una probabilidad a cada valor de una variable discreta. La suma de todas las probabilidades debe ser exactamente igual a 1, y cada una debe estar entre 0 y 1.
* **Ejemplo Resuelto:** Valida si P(1) = 0.3, P(2) = 0.5, P(3) = 0.2 es una distribución de probabilidad válida.
  - *Paso 1:* Verifica que cada probabilidad sea positiva y menor a 1. Sí (0.3, 0.5, 0.2 cumplen).
  - *Paso 2:* Suma las probabilidades: 0.3 + 0.5 + 0.2 = 1.0. Cumple.
  - *Resultado:* Es una distribución válida.
* **Errores Comunes:** Permitir sumas mayores a 1 o probabilidades negativas en la distribución.
* **Ejercicios de Práctica:**
  1. Calcula la probabilidad faltante P(3) si P(1) = 0.45 y P(2) = 0.35. (R: 0.20).
  2. ¿Es válida la distribución: P(1) = 0.6, P(2) = -0.1, P(3) = 0.5? (R: No. Hay una probabilidad negativa).
  3. En un dado justo de 6 caras, ¿cuál es la probabilidad de que X sea menor que 3? (R: 1/3 o 33.3%).
  4. ¿Qué es la función de distribución acumulada F(x)? (R: La función que acumula probabilidades: F(x) = P(X <= x)).
  5. Si F(2) = 0.70 y P(3) = 0.30, ¿cuánto vale F(3)? (R: 1.00. Retroalimentación: F(3) = F(2) + P(3) = 0.70 + 0.30 = 1.00).
* **¿Necesitas ayuda?** Construir distribuciones discretas es facilísimo si cuentas con la ayuda paso a paso de tu tutor. ¡Pruébalo hoy!

### Lección 1.3: Valor Esperado y Varianza Discreta
* **Objetivo:** Calcular la media poblacional y la varianza de una distribución discreta.
* **Explicación:** El valor esperado (media, μ) es la suma de cada valor multiplicado por su probabilidad: E[X] = ∑ x·P(X=x). La varianza (σ²) mide la dispersión: Var[X] = ∑ x²·P(X=x) - μ².
* **Ejemplo Resuelto:** Calcula el valor esperado de la V.A. X con P(1) = 0.40 y P(3) = 0.60.
  - *Paso 1:* Multiplica valor por probabilidad: 1 * 0.40 = 0.4.  3 * 0.60 = 1.8.
  - *Paso 2:* Suma los resultados: 0.4 + 1.8 = 2.2.
  - *Resultado:* El valor esperado es 2.2.
* **Errores Comunes:** Olvidar restar el cuadrado de la media (μ²) al calcular la varianza final.
* **Ejercicios de Práctica:**
  1. Si X toma los valores 0 y 10 con igual probabilidad, ¿cuál es su valor esperado? (R: 5).
  2. Calcula el valor esperado para lanzar una moneda donde Cara vale 1 y Escudo vale 0. (R: 0.5).
  3. Si la varianza es 4, ¿cuánto mide la desviación estándar? (R: 2).
  4. Calcula E[X²] si X toma 2 con probabilidad 0.3 y 4 con probabilidad 0.7. (R: 12.4. Retroalimentación: 2²*0.3 + 4²*0.7 = 1.2 + 11.2 = 12.4).
  5. ¿Qué significa un valor esperado de ganancia negativo en un casino? (R: Que el jugador perderá dinero en promedio si juega muchas veces).
* **¿Necesitas ayuda?** El valor esperado es clave para calcular primas de seguros e inversiones. ¡Domínalo junto a tu tutor de CEDETU!

## Evaluación Unidad 1
* Se define la variable discreta X con P(0)=0.2, P(1)=0.5, P(2)=0.3. Calcula la media. (R: 1.1. Retroalimentación: μ = 0*0.2 + 1*0.5 + 2*0.3 = 1.1).
* Con los datos anteriores, calcula la varianza. (R: 0.49. Retroalimentación: E[X²] = 0*0.2 + 1*0.5 + 4*0.3 = 1.7. Var = 1.7 - (1.1)² = 1.7 - 1.21 = 0.49).
* ¿Cuál es la desviación estándar de la distribución anterior? (R: 0.70. Retroalimentación: √0.49 = 0.70).

---

## Unidad 2: La Distribución Binomial
### Lección 2.1: El Proceso de Bernoulli y la Distribución Binomial
* **Objetivo:** Identificar si un problema real cumple con las condiciones para ser modelado mediante una distribución binomial.
* **Explicación:** Un experimento binomial consta de n ensayos de Bernoulli independientes. Cada ensayo solo tiene dos resultados: Éxito (probabilidad p constante) o Fracaso (probabilidad q = 1 - p).
* **Ejemplo Resuelto:** Evalúa si lanzar una moneda justa 10 veces anotando el número de caras es binomial.
  - *Paso 1:* Hay n = 10 ensayos fijos. Sí.
  - *Paso 2:* Solo hay dos resultados: Cara (éxito) o Escudo (fracaso). Sí.
  - *Paso 3:* Probabilidad p = 0.50 es constante. Sí.
  - *Paso 4:* Los lanzamientos son independientes. Sí.
  - *Resultado:* Sí, es binomial.
* **Errores Comunes:** Aplicar la binomial en muestreos sin reemplazo de poblaciones muy pequeñas, donde p cambia en cada extracción.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el valor del parámetro q si p = 0.15? (R: 0.85).
  2. ¿Cuántos resultados posibles tiene un ensayo de Bernoulli? (R: 2 resultados).
  3. Lanzas un dado de 6 caras 8 veces. ¿Es binomial si éxito es obtener un número impar? (R: Sí, con n = 8 y p = 0.50).
  4. ¿Qué parámetro de la binomial indica la cantidad total de repeticiones? (R: El parámetro n).
  5. Si X ~ B(15, 0.40), ¿cuántos éxitos como máximo se pueden obtener? (R: 15 éxitos).
* **¿Necesitas ayuda?** La distribución binomial modela desde el acierto de vacunas hasta el cierre de ventas. ¡Entiéndela junto a tu tutor!

### Lección 2.2: La Fórmula Binomial
* **Objetivo:** Calcular la probabilidad exacta de obtener k éxitos en n ensayos mediante la fórmula binomial.
* **Explicación:** La fórmula es: P(X = k) = C(n, k) * p^k * q^(n-k), donde C(n, k) = n! / (k! * (n-k)!) es el coeficiente combinatorio.
* **Ejemplo Resuelto:** Si la probabilidad de cerrar una venta es 80% (p = 0.80, q = 0.20), calcula la probabilidad de cerrar exactamente 2 ventas de 3 clientes independientes.
  - *Paso 1 Coeficiente:* C(3, 2) = 3! / (2! * 1!) = 3.
  - *Paso 2 Aplicar:* P(X = 2) = 3 * (0.80)² * (0.20)¹ = 3 * 0.64 * 0.20 = 0.384.
  - *Resultado:* La probabilidad es 38.4%.
* **Errores Comunes:** Calcular mal combinatorias o confundir las potencias de p y q.
* **Ejercicios de Práctica:**
  1. Calcula C(4, 2). (R: 6).
  2. Lanzas 3 monedas. ¿Cuál es la probabilidad de obtener exactamente 3 caras? (R: 0.125 o 12.5%. Retroalimentación: C(3,3)*(0.5)³ = 0.125).
  3. Si p = 0.30 y n = 3, calcula P(X = 0). (R: 0.343. Retroalimentación: 1 * (0.7)³ = 0.343).
  4. Calcula C(5, 1). (R: 5).
  5. Si X ~ B(3, 0.5), calcula P(X = 1). (R: 0.375).
* **¿Necesitas ayuda?** Resolver factoriales grandes a mano es aburrido. ¡Aprende los atajos de tu calculadora con tu tutor de CEDETU!

### Lección 2.3: Media y Desviación Estándar Binomial
* **Objetivo:** Calcular la media y desviación estándar de una distribución binomial de forma directa.
* **Explicación:** Para X ~ B(n, p):
  - Media (Valor esperado): μ = n·p.
  - Desviación Estándar: σ = √(n·p·q).
* **Ejemplo Resuelto:** Si X ~ B(100, 0.20), calcula su media y desviación estándar.
  - *Paso 1 Media:* μ = n·p = 100 * 0.20 = 20.
  - *Paso 2 Desviación:* σ = √(100 * 0.20 * 0.80) = √16 = 4.
  - *Resultado:* Media = 20, Desviación Estándar = 4.
* **Errores Comunes:** Olvidar que q = 1 - p al calcular la varianza bajo el radical de la desviación estándar.
* **Ejercicios de Práctica:**
  1. Si X ~ B(50, 0.60), ¿cuál es su media? (R: 30).
  2. Calcula la varianza de X ~ B(10, 0.50). (R: 2.5).
  3. Si la media es 10 y p = 0.20, ¿cuánto vale n? (R: 50. Retroalimentación: n = μ / p = 10 / 0.20 = 50).
  4. Calcula la desviación estándar de X ~ B(200, 0.50). (R: 7.07).
  5. Si la varianza de una binomial es 9 y n = 100, ¿cuánto vale la desviación estándar? (R: 3. Retroalimentación: σ = √Var = √9 = 3).
* **¿Necesitas ayuda?** La media binomial predice el resultado promedio de encuestas masivas. ¡Vuélvete un experto junto a tu tutor de CEDETU!

## Evaluación Unidad 2
* Un vendedor de Antigua contacta a 10 clientes potenciales al día. Si la tasa de éxito es 30% (p = 0.30), calcula el promedio esperado de ventas y la probabilidad de hacer exactamente 2 ventas. (R: Media μ = 3.0 ventas; Probabilidad P(X=2) ≈ 0.233. Retroalimentación: μ = 10 * 0.30 = 3.0. P(X=2) = C(10,2)*(0.30)²*(0.70)⁸ = 45 * 0.09 * 0.0576 ≈ 0.233).
* Si X ~ B(40, 0.25), calcula la varianza. (R: 7.5. Retroalimentación: 40 * 0.25 * 0.75 = 7.5).
* Si la media de una variable binomial es 15 y n = 30, ¿cuál es la probabilidad de éxito p? (R: 0.50).

---

## Unidad 3: La Distribución Normal
### Lección 3.1: Características de la Distribución Normal
* **Objetivo:** Comprender las propiedades teóricas de la curva de distribución normal y la regla empírica.
* **Explicación:** La distribución normal modela variables continuas simétricas. Su curva tiene forma de campana (Gauss). La media, mediana y moda coinciden en el centro. El área total es exactamente 1 (100%).
  - **Regla Empírica:** ±1σ contiene 68.2%, ±2σ contiene 95.4%, ±3σ contiene 99.7% de los datos.
* **Ejemplo Resuelto:** El peso medio de unos sacos en Xela es 80 kg con σ = 5 kg. ¿Entre qué pesos cae el 68.2% central de los sacos?
  - *Paso 1:* El 68.2% corresponde a ±1 desviación estándar de la media (μ ± σ).
  - *Paso 2:* Límite inferior = 80 - 5 = 75 kg. Límite superior = 80 + 5 = 85 kg.
  - *Resultado:* Entre 75 kg y 85 kg.
* **Errores Comunes:** Creer que la curva normal toca el eje X en algún punto, cuando es asintótica y se extiende infinitamente.
* **Ejercicios de Práctica:**
  1. ¿Qué porcentaje de datos cae por encima de la media en una distribución normal? (R: 50%).
  2. ¿Qué medida define el centro de la campana de Gauss? (R: La media poblacional (μ)).
  3. Si la media es 100 y σ = 15, ¿cuál es el rango para el 99.7% central de los datos? (R: [55, 145]).
  4. ¿Cuál es el área total bajo la curva normal de densidad de probabilidad? (R: 1.00).
  5. ¿Qué define el ancho o dispersión de la campana de Gauss? (R: La desviación estándar (σ)).
* **¿Necesitas ayuda?** La distribución normal es el modelo de la naturaleza por excelencia. ¡Aprende a interpretarla con tu tutor!

### Lección 3.2: Tipificación y Puntajes Z
* **Objetivo:** Transformar una variable normal general X a la normal estándar Z.
* **Explicación:** Para comparar e interpretar cualquier variable normal, restamos su media y dividimos entre su desviación estándar (tipificación): Z = (X - μ) / σ. Esto nos da un puntaje Z en la distribución estándar Z ~ N(0, 1).
* **Ejemplo Resuelto:** Una nota de examen tiene μ = 60 y σ = 8. Si obtienes 76 puntos, calcula tu puntaje Z.
  - *Paso 1:* Aplica la fórmula: Z = (X - μ) / σ.
  - *Paso 2:* Z = (76 - 60) / 8 = 16 / 8 = 2.00.
  - *Resultado:* Tu puntaje Z es 2.00 (estás a 2 desviaciones sobre la media).
* **Errores Comunes:** Restar al revés (μ - X), lo que altera el signo del puntaje Z obtenido.
* **Ejercicios de Práctica:**
  1. Calcula Z si X = 45, μ = 50 y σ = 5. (R: -1.00).
  2. Si Z = 0, ¿qué nos indica sobre el valor de X con respecto a la media? (R: Que X es exactamente igual a la media).
  3. Calcula el valor original X si Z = 1.5, μ = 100 y σ = 10. (R: 115. Retroalimentación: X = 100 + 1.5*10 = 115).
  4. ¿Cuál es la media de la distribución normal estándar Z? (R: 0).
  5. Calcula el puntaje Z para X = 120 si μ = 100 y σ = 15. (R: 1.33).
* **¿Necesitas ayuda?** La tipificación es fundamental para comparar exámenes y datos reales. ¡Domínala al instante con tu tutor de CEDETU!

### Lección 3.3: Uso de Tablas Normales y Cálculo de Áreas
* **Objetivo:** Calcular áreas bajo la curva normal estándar utilizando la tabla Z.
* **Explicación:** La tabla Z entrega el área a la izquierda del puntaje: P(Z <= z). Para mayor que usamos complemento: 1 - P(Z <= z). Para el área entre dos puntos restamos áreas: P(Z <= b) - P(Z <= a).
* **Ejemplo Resuelto:** Si la tabla Z indica que para z = 1.00 el área es 0.8413, calcula P(Z > 1.00).
  - *Paso 1:* Aplica complemento para mayor que: P(Z > 1.00) = 1 - P(Z <= 1.00).
  - *Paso 2:* 1 - 0.8413 = 0.1587.
  - *Resultado:* La probabilidad es 0.1587 o 15.87%.
* **Errores Comunes:** Confundir menor que con mayor que y olvidar restar el complemento de la tabla Z.
* **Ejercicios de Práctica:**
  1. Calcula P(Z <= 0.00) usando simetría. (R: 0.5000).
  2. Si P(Z <= 1.96) = 0.9750 y P(Z <= -1.96) = 0.0250, calcula P(-1.96 <= Z <= 1.96). (R: 0.9500 o 95%).
  3. Si la tabla Z indica P(Z <= 2.00) = 0.9772, calcula P(Z > 2.00). (R: 0.0228).
  4. Calcula P(Z <= -1.00) usando simetría si P(Z <= 1.00) = 0.8413. (R: 0.1587. Retroalimentación: P(Z <= -1) = P(Z >= 1) = 1 - 0.8413 = 0.1587).
  5. ¿A cuántas desviaciones estándar corresponde el área del 95% central aproximado? (R: ±1.96 desviaciones estándar).
* **¿Necesitas ayuda?** Aprender a leer la tabla Z es indispensable en estadística y ciencias. ¡Consolídalo paso a paso junto a tu tutor de CEDETU!

## Evaluación Unidad 3
* Los tiempos de entrega de un restaurante de Antigua se distribuyen de forma normal con una media de 30 minutos y σ = 5 minutos. ¿Cuál es la probabilidad de que un pedido tarde menos de 20 minutos? (Dato de tabla: P(Z <= -2.00) = 0.0228). (R: 0.0228 o 2.28%. Retroalimentación: Z = (20-30)/5 = -2.00. P(Z <= -2) = 0.0228).
* Con los datos anteriores, ¿cuál es la probabilidad de que tarde más de 35 minutos? (Dato: P(Z <= 1.00) = 0.8413). (R: 0.1587 o 15.87%. Retroalimentación: Z = (35-30)/5 = 1.00. P(Z > 1) = 1 - 0.8413 = 0.1587).
* ¿Qué valor de Z corresponde a un área acumulada de exactamente 0.5000 a la izquierda? (R: Z = 0.00).
`,

    "inferencia-estadistica": `# Curso: Inferencia Estadística Básica
* **Materia:** Matemáticas | **Nivel sugerido:** Universidad
* **Público objetivo:** Estudiantes de nivel universitario que desean comprender cómo realizar afirmaciones, estimaciones e hipótesis válidas sobre poblaciones basándose en muestras.
* **Objetivos de aprendizaje:** Comprender el Teorema del Límite Central y las distribuciones muestrales, calcular intervalos de confianza para la media con Z, y formular y resolver pruebas de hipótesis de una y dos colas.

## Unidad 1: Distribuciones Muestrales y el Teorema del Límite Central
### Lección 1.1: Muestras y Distribución de Medias
* **Objetivo:** Definir el concepto de distribución muestral de medias y comprender la variabilidad de muestras repetidas de una población.
* **Explicación:** En la realidad no mides a toda la población; tomas muestras. Si tomaras infinitas muestras del mismo tamaño $n$ y calcularas el promedio ($ar{x}$) de cada una, esos promedios formarían su propia distribución, llamada **distribución muestral de medias**.
* **Ejemplo Resuelto:** Si la media de estatura de toda Guatemala es $mu = 1.65$ m, y tomamos 50 muestras de tamaño $n=40$ alumnos, ¿alrededor de qué valor se centrarán los promedios de estas muestras?
  - *Paso 1:* Por definición, la media de la distribución muestral de medias ($mu_{ar{x}}$) es exactamente igual a la media poblacional ($mu$).
  - *Resultado:* Se centrarán exactamente en $1.65$ metros.
* **Errores Comunes:** Pensar que el promedio de una sola muestra pequeña debe ser exactamente igual al promedio de la población entera, olvidando el error de muestreo.
* **Ejercicios de Práctica:**
  1. ¿Cómo se le llama a la diferencia entre el estadístico de una muestra y el parámetro de la población? (R: Error de muestreo).
  2. Si la media poblacional es 80, ¿cuál es el valor esperado de la media muestral? (R: 80).
  3. ¿Qué ocurre con la variabilidad de las medias de muestras a medida que tomamos muestras de mayor tamaño? (R: Disminuye, las medias se concentran más cerca de la media real).
  4. ¿Es la media muestral un estimador insesgado de la media poblacional? (R: Sí. Su valor esperado es igual al parámetro).
  5. ¿Cómo se denota matemáticamente la media de la distribución muestral de medias? (R: μ_x̄).
* **¿Necesitas ayuda?** Las distribuciones muestrales son el puente entre el dato que mides y la verdad poblacional. ¡Acláralo con tu tutor de CEDETU!

### Lección 1.2: El Teorema del Límite Central (TLC)
* **Objetivo:** Explicar el Teorema del Límite Central y calcular el error estándar de la media.
* **Explicación:** El TLC establece que, para cualquier población con media $mu$ y desviación $sigma$, la distribución de medias de muestras grandes ($n ge 30$) será aproximadamente normal, con media $mu_{ar{x}} = mu$ y desviación estándar (error estándar de la media) igual a $sigma_{ar{x}} = sigma / sqrt{n}$.
* **Ejemplo Resuelto:** Un comerciante de Antigua tiene paquetes de café con desviación estándar $sigma = 24$ gramos. Si se toma una muestra de 36 paquetes, calcula el error estándar de la media.
  - *Paso 1:* Aplica la fórmula: $sigma_{ar{x}} = sigma / sqrt{n}$.
  - *Paso 2:* $sigma_{ar{x}} = 24 / sqrt{36} = 24 / 6 = 4$ gramos.
  - *Resultado:* El error estándar de la media es de 4 gramos.
* **Errores Comunes:** Dividir entre la muestra $n$ directamente en lugar de dividir por su raíz cuadrada $sqrt{n}$ al aplicar la fórmula.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el tamaño mínimo sugerido de muestra para aplicar el TLC si la población original no es normal? (R: n >= 30).
  2. Si la desviación poblacional es 10 y n = 100, calcula el error estándar de la media. (R: 1. Retroalimentación: 10 / √100 = 10/10 = 1).
  3. ¿Qué le ocurre al error estándar de la media si cuadruplicamos el tamaño de la muestra? (R: Se reduce a la mitad. Retroalimentación: √4 = 2 en el denominador).
  4. Si la población es originalmente normal, ¿se requiere n >= 30 para que la distribución de medias sea normal? (R: No. Si la población es normal, la distribución muestral es perfectamente normal para cualquier tamaño de muestra n).
  5. Calcula el error estándar si σ = 15 y n = 25. (R: 3. Retroalimentación: 15 / √25 = 15 / 5 = 3).
* **¿Necesitas ayuda?** El TLC permite usar la campana de Gauss incluso en poblaciones sesgadas o no normales. ¡Entiende su magia junto a tu tutor!

### Lección 1.3: Aplicaciones de la Distribución Muestral
* **Objetivo:** Calcular la probabilidad de que una media muestral caiga dentro de un rango específico aplicando la tipificación de medias $Z = (ar{x} - mu) / (sigma/sqrt{n})$.
* **Explicación:** Para calcular probabilidades sobre promedios de grupos (medias muestrales), usamos la fórmula de tipificación adaptada con el error estándar en el denominador:
  $Z = rac{ar{x} - mu}{sigma / sqrt{n}}$
* **Ejemplo Resuelto:** Una población tiene $mu = 100$ y $sigma = 15$. Si tomamos una muestra de $n = 25$ personas, calcula la probabilidad de que la media de la muestra sea mayor a 106. (Dato: P(Z <= 2.00) = 0.9772).
  - *Paso 1 Error Estándar:* $sigma_{ar{x}} = 15 / sqrt{25} = 15 / 5 = 3$.
  - *Paso 2 Tipificar:* $Z = (106 - 100) / 3 = 6 / 3 = 2.00$.
  - *Paso 3 Probabilidad mayor que:* $P(ar{x} > 106) = P(Z > 2.00) = 1 - 0.9772 = 0.0228$.
  - *Resultado:* La probabilidad es de 0.0228 o 2.28%.
* **Errores Comunes:** Usar la desviación estándar simple $sigma$ en lugar del error estándar $sigma / sqrt{n}$ al tipificar la media.
* **Ejercicios de Práctica:**
  1. Si μ = 50, σ = 8 y n = 16, calcula el puntaje Z para una media muestral x̄ = 52. (R: 1.00. Retroalimentación: Error estándar = 8/√16 = 2. Z = (52-50)/2 = 1.00).
  2. ¿Qué probabilidad hay de obtener un promedio muestral menor o igual a la media poblacional? (R: 0.5000 o 50% por simetría).
  3. Si n = 36, σ = 12, calcula el puntaje Z para x̄ = 46 si la media poblacional es μ = 50. (R: -2.00).
  4. ¿Por qué es mucho más difícil encontrar una muestra de 100 personas con un promedio extremo que encontrar a una sola persona con ese valor extremo? (R: Porque las variaciones individuales se promedian y cancelan entre sí en grupos grandes, reduciendo el error estándar).
  5. Si Z calculado para una media muestral es 0, ¿cuánto vale dicha media muestral? (R: Exactamente igual al promedio poblacional μ).
* **¿Necesitas ayuda?** La tipificación de medias es vital para el control estadístico de procesos industriales. ¡Asegura tu comprensión con tu tutor de CEDETU!

## Evaluación Unidad 1
* El peso medio de las naranjas en un huerto es de 200 gramos con una desviación estándar de 16 gramos. Si se selecciona una muestra aleatoria de 64 naranjas, calcula el error estándar de la media de esta muestra y la probabilidad de que su peso promedio sea menor a 196 gramos. (Dato: P(Z <= -2.00) = 0.0228). (R: Error estándar = 2 gramos; Probabilidad = 0.0228 o 2.28%. Retroalimentación: σ_x̄ = 16 / √64 = 2 g. Z = (196 - 200) / 2 = -4 / 2 = -2.00. P(Z <= -2) = 0.0228).
* Si el tamaño de la muestra de naranjas del ejercicio anterior se reduce a 16, ¿cuál es el nuevo error estándar? (R: 4 gramos. Retroalimentación: 16 / √16 = 4).
* ¿Qué nos indica el Teorema del Límite Central sobre la forma de la distribución muestral a medida que el tamaño de la muestra crece? (R: Que la forma de la distribución se aproxima cada vez más a una curva normal simétrica).

---

## Unidad 2: Intervalos de Confianza
### Lección 2.1: Estimación Puntual y Margen de Error
* **Objetivo:** Comprender la definición de estimación puntual y calcular el margen de error para estimar parámetros.
* **Explicación:** Una **estimación puntual** es un único número que estima un parámetro poblacional (ej. la media de la muestra $ar{x}$ estima a la media poblacional $mu$). Un **intervalo de confianza** añade un **margen de error (E)** a esa estimación para dar un rango de seguridad: $ar{x} pm E$. El margen de error depende del nivel de confianza (Z crítico) y de la desviación de los datos:
  $E = Z_{alpha/2} left( rac{sigma}{sqrt{n}} ight)$.
* **Ejemplo Resuelto:** Un analista político entrevista a 100 votantes en Xela. La media de edad de la muestra es de 35 años, y se calcula un margen de error de 2 años. Construye el intervalo de confianza.
  - *Paso 1:* Identifica la estimación puntual: $ar{x} = 35$ años.
  - *Paso 2:* Resta y suma el margen de error: Límite inferior = 35 - 2 = 33; Límite superior = 35 + 2 = 37.
  - *Resultado:* El intervalo de confianza es [33, 37] años.
* **Errores Comunes:** Confundir estimación puntual (un valor único) con estimación por intervalo (un rango).
* **Ejercicios de Práctica:**
  1. ¿Cuál es el estimador puntual más común de la media poblacional μ? (R: La media muestral (x̄)).
  2. Si el intervalo de confianza es [45, 55], ¿cuál fue la estimación puntual media de la muestra? (R: 50. Retroalimentación: El punto medio del intervalo).
  3. Con los datos anteriores, ¿cuánto vale el margen de error utilizado? (R: 5. Retroalimentación: La mitad del ancho del intervalo).
  4. ¿Qué parámetro de confianza se asocia comúnmente con un margen de error menor y más estrecho manteniendo los datos fijos? (R: Un menor nivel de confianza, como 90% en lugar de 95%).
  5. Si aumentamos la variabilidad de la población (σ mayor), ¿qué le ocurre al margen de error? (R: Aumenta, la estimación se vuelve menos precisa).
* **¿Necesitas ayuda?** El margen de error es el dato clave que define el rigor de cualquier encuesta científica. ¡Domina su cálculo junto a tu tutor de CEDETU!

### Lección 2.2: Construcción de Intervalos de Confianza para la Media
* **Objetivo:** Construir intervalos de confianza para la media poblacional con desviación conocida para niveles del 95% y 99%.
* **Explicación:** 
  - Para el 95% de confianza, usamos $Z = 1.96$ (deja 2.5% libre en cada cola de la campana).
  - Para el 99% de confianza, usamos $Z = 2.58$ (deja 0.5% en cada cola).
  - La fórmula es: $	ext{I.C.} = ar{x} pm Z left( rac{sigma}{sqrt{n}} ight)$.
* **Ejemplo Resuelto:** En Antigua, una muestra de $n = 64$ hogares consume en promedio $ar{x} = 12$ litros de leche a la semana. Si sabemos que la desviación poblacional es $sigma = 2$ litros, construye un intervalo de confianza del 95% para la media de consumo de toda la ciudad.
  - *Paso 1 Margen de Error:* $E = 1.96 	imes (2 / sqrt{64}) = 1.96 	imes (2 / 8) = 1.96 	imes 0.25 = 0.49$.
  - *Paso 2 Límites:* Límite inferior = 12 - 0.49 = 11.51; Límite superior = 12 + 0.49 = 12.49.
  - *Resultado:* El I.C. del 95% es [11.51, 12.49] litros semanales.
* **Errores Comunes:** Usar el valor crítico Z equivocado (ej. usar 1.96 para el 99% de confianza por prisa o distracción).
* **Ejercicios de Práctica:**
  1. Construye el I.C. del 99% si x̄ = 100, σ = 10, n = 100. (R: [97.42, 102.58]. Retroalimentación: E = 2.58 * 10 / 10 = 2.58).
  2. ¿Cuál es el valor crítico Z para un intervalo de confianza del 90%? (R: 1.645).
  3. Si construyes un intervalo del 95% [10.2, 14.8] y el cliente te pide un intervalo del 99% con los mismos datos, ¿será este más ancho o más estrecho? (R: Más ancho. Para tener mayor seguridad (99%), el rango estimado debe expandirse).
  4. Calcula el margen de error para un I.C. del 95% si σ = 6 y n = 36. (R: 1.96. Retroalimentación: 1.96 * 6/6 = 1.96).
  5. ¿Qué ocurre con el intervalo si mantenemos n = 100, σ = 10 pero reducimos la confianza al 0%? (R: Se reduce a un solo punto, que coincide exactamente con la media muestral x̄).
* **¿Necesitas ayuda?** Construir intervalos de confianza a mano es una de las mayores exigencias de los exámenes universitarios de estadística. ¡Pide ayuda a tu tutor hoy!

### Lección 2.3: Interpretación de los Intervalos de Confianza
* **Objetivo:** Interpretar de forma analítica y precisa el significado de un intervalo de confianza en reportes científicos y encuestas sociales reales.
* **Explicación:** Un intervalo de confianza no indica la probabilidad de que una observación individual esté dentro de él. Significa que si repitiéramos el muestreo muchas veces, el 95% (o 99%) de los intervalos construidos de esa forma contendrían el verdadero parámetro poblacional real $mu$.
* **Ejemplo Resuelto:** Una encuesta electoral en Guatemala reporta un apoyo a una propuesta de ley con un I.C. del 95% de [48%, 52%]. ¿Significa que la propuesta tiene asegurada la mayoría de votos?
  - *Paso 1:* El intervalo abarca valores tanto menores al 50% (como 48%) como mayores al 50% (como 52%).
  - *Paso 2:* No podemos afirmar con 95% de seguridad que el apoyo real sea mayor al 50%.
  - *Resultado:* No. Hay un "empate técnico" estadístico y el resultado no es concluyente con respecto a la mayoría absoluta.
* **Errores Comunes:** Decir que "hay un 95% de probabilidad de que la media real esté entre A y B". Una vez calculado el intervalo con números fijos, el parámetro real está o no está dentro de él (la probabilidad es 0 o 1). Lo que tiene probabilidad de 95% es el *método de construcción* de intervalos aleatorios.
* **Ejercicios de Práctica:**
  1. ¿Qué parámetro poblacional estamos estimando al construir el intervalo x̄ ± E? (R: La media poblacional real (μ)).
  2. Si reportas que la media de notas en Antigua está en [72, 78] con 95% de confianza, ¿dónde estimas que está el promedio real de toda la población de alumnos? (R: Entre 72 y 78 puntos).
  3. Si un analista dice: "El 95% de todos los alumnos obtuvieron notas entre 72 y 78", ¿es correcta esta interpretación del intervalo de confianza de la media? (R: No. Eso describe la dispersión individual, no estima el promedio de la población).
  4. ¿Qué significa un nivel de significancia de α = 0.05 en el contexto de intervalos de confianza? (R: Representa el 5% de riesgo restante de que nuestro intervalo sea uno de los pocos desafortunados que no contienen la media real poblacional).
  5. ¿Es posible tener 100% de confianza en estadística sin abarcar todo el espacio muestral de valores posibles (-infinito a +infinito)? (R: No. Para tener el 100% de certeza absoluta, el rango de estimación tendría que abrirse infinitamente, lo cual anula su utilidad práctica).
* **¿Necesitas ayuda?** La correcta interpretación de intervalos diferencia a un simple técnico de un verdadero analista científico. ¡Perfecciónala con tu tutor de CEDETU!

## Evaluación Unidad 2
* Se toma una muestra de 100 bolsas de abono en Sololá y se encuentra una media de 50 lb. Si la desviación poblacional es σ = 5 lb, construye un I.C. del 95% para estimar el peso real promedio de todo el lote de abono de la fábrica. (R: I.C. del 95% = [49.02, 50.98] libras. Retroalimentación: E = 1.96 * 5 / √100 = 1.96 * 0.5 = 0.98 lb. Límites = 50 ± 0.98 = [49.02, 50.98]).
* Si el cliente te pide reducir el margen de error a la mitad (E = 0.49 lb) manteniendo el 95% de confianza y la desviación constante, ¿qué tamaño de muestra n necesitas? (R: n = 400. Retroalimentación: Para reducir el error a la mitad, la muestra debe cuadruplicarse: 100 * 4 = 400).
* ¿Es el margen de error de un intervalo de confianza mayor para el 99% que para el 95% de confianza con los mismos datos? (R: Sí. Al subir el nivel de seguridad exigido, el valor crítico Z aumenta de 1.96 a 2.58, lo que incrementa el margen de error).

---

## Unidad 3: Pruebas de Hipótesis Introductorias
### Lección 3.1: Hipótesis Nula y Alternativa
* **Objetivo:** Formular la hipótesis nula ($H_0$) y alternativa ($H_1$) para pruebas de una y dos colas a partir de enunciados lógicos reales.
* **Explicación:** 
  - **Hipótesis Nula ($H_0$):** Afirma que no hay cambios, diferencias o efectos. Contiene siempre el signo de igualdad ($=$, $le$, $ge$). Se asume verdadera hasta que los datos demuestren lo contrario.
  - **Hipótesis Alternativa ($H_1$):** La afirmación que el investigador busca demostrar o probar. Contiene signos de desigualdad ($
e$, $<$, $>$).
* **Ejemplo Resuelto:** Un fabricante de focos en Escuintla afirma que sus focos duran en promedio $1,000$ horas ($H_0: mu = 1,000$ h). Un comprador corporativo sospecha que la duración real es menor a la anunciada. Plantea las hipótesis.
  - *Paso 1 Hipótesis Nula:* Representa el estatus quo o afirmación oficial: $H_0: mu = 1,000$ horas.
  - *Paso 2 Hipótesis Alternativa:* Refleja la sospecha del comprador (menor que): $H_1: mu < 1,000$ horas. (Prueba de una cola a la izquierda).
  - *Resultado:* $H_0: mu = 1,000$ h, $H_1: mu < 1,000$ h.
* **Errores Comunes:** Colocar la desigualdad ($<$, $>$, o $
e$) en la hipótesis nula, lo que invalida el diseño probabilístico de la prueba de significancia.
* **Ejercicios de Práctica:**
  1. Formula H₁ si H₀ es μ = 80 y el investigador sospecha que el promedio real es diferente de 80. (R: H₁: μ ≠ 80).
  2. ¿Qué tipo de prueba de hipótesis (de una o dos colas) se plantea si la hipótesis alternativa es H₁: μ > 50? (R: Prueba de una cola a la derecha).
  3. Formula las hipótesis si un tutor en Antigua afirma que su método intensivo aumenta la nota promedio de matemáticas por encima de 85 puntos. (R: H₀: μ = 85, H₁: μ > 85).
  4. ¿Por qué se asume que la hipótesis nula es verdadera al inicio de una prueba? (R: Por el principio de presunción de inocencia científica; se requiere evidencia sólida para poder descartar el estatus quo).
  5. Si planteas una prueba de dos colas con H₁: μ ≠ 100, ¿en qué partes de la campana se localiza la zona de rechazo? (R: En ambos extremos o colas de la distribución, dividiendo el nivel de significancia α/2 en cada una).
* **¿Necesitas ayuda?** Formular las hipótesis correctamente es el 50% del éxito en cualquier problema de inferencia. ¡Aprende a plantearlas con tu tutor de CEDETU!

### Lección 3.2: Error Tipo I, Error Tipo II y Nivel de Significancia
* **Objetivo:** Definir y diferenciar de forma analítica el Error Tipo I, Error Tipo II y el nivel de significancia $alpha$.
* **Explicación:** 
  - **Error Tipo I ($alpha$):** Rechazar la hipótesis nula $H_0$ cuando en realidad es verdadera (Falso Positivo). La probabilidad máxima permitida se fija mediante el **nivel de significancia ($alpha$)** (ej. $alpha = 0.05$).
  - **Error Tipo II ($eta$):** No rechazar la hipótesis nula $H_0$ cuando en realidad es falsa y el cambio sí existe (Falso Negativo).
  - La **Potencia de la prueba ($1-eta$)** es la probabilidad de rechazar $H_0$ correctamente cuando es falsa.
* **Ejemplo Resuelto:** Un tribunal de justicia penal en Guatemala debe juzgar a un acusado. Formula la hipótesis nula e interpreta los Errores Tipo I y II.
  - *Paso 1 Hipótesis Nula:* El acusado es inocente ($H_0$).
  - *Paso 2 Error Tipo I:* Declarar culpable al acusado cuando en realidad es inocente (Falso Positivo, un inocente a la cárcel).
  - *Paso 3 Error Tipo II:* Declarar libre e inocente al acusado cuando en realidad es culpable (Falso Negativo, un criminal libre).
  - *Resultado:* El Error Tipo I es encarcelar a un inocente; el Error Tipo II es dejar libre a un culpable.
* **Errores Comunes:** Pensar que podemos reducir a cero ambos errores al mismo tiempo; al reducir $alpha$ (riesgo de Error Tipo I), aumenta automáticamente $eta$ (riesgo de Error Tipo II) para una muestra fija.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el nivel de significancia α más utilizado en la investigación científica y médica escolar? (R: α = 0.05 o 5%).
  2. Si aumentamos el tamaño de la muestra n en un experimento, ¿qué le ocurre a la probabilidad de cometer Error Tipo II? (R: Disminuye, lo que aumenta la potencia y sensibilidad de la prueba).
  3. ¿Cómo se define formalmente la potencia de una prueba de hipótesis? (R: La probabilidad de rechazar correctamente la hipótesis nula cuando es falsa (1 - β)).
  4. En un control de calidad en Antigua, rechazas un lote excelente creyendo que está defectuoso por un error en la muestra. ¿Qué error cometiste? (R: Error Tipo I o riesgo del productor).
  5. Si el nivel de significancia se fija en 1% (α = 0.01), ¿cuál es la probabilidad máxima permitida de cometer un Error Tipo I? (R: 1%).
* **¿Necesitas ayuda?** La teoría de errores es crucial para tomar decisiones médicas e industriales libres de riesgos catastróficos. ¡Compréndela perfectamente con tu tutor de CEDETU!

### Lección 3.3: Regla de Decisión y Zona de Rechazo con Z
* **Objetivo:** Resolver pruebas de hipótesis para la media calculando el estadístico Z y comparándolo con el valor Z crítico para decidir si se rechaza $H_0$.
* **Explicación:** Para resolver una prueba de hipótesis:
  1. Planteamos $H_0$ y $H_1$. Elegimos el nivel de significancia $alpha$.
  2. Identificamos el valor Z crítico que delimita la zona de rechazo (ej. para $alpha = 0.05$ de una cola a la derecha, $Z_{	ext{crítico}} = 1.645$).
  3. Calculamos el **Z calculado ($Z_{	ext{cal}}$)** a partir de la muestra: $Z_{	ext{cal}} = rac{ar{x} - mu_0}{sigma/sqrt{n}}$.
  4. Si $Z_{	ext{cal}}$ cae en la zona de rechazo (es decir, $Z_{	ext{cal}} ge 1.645$ para una cola derecha), **rechazamos $H_0$**. De lo contrario, no la rechazamos.
* **Ejemplo Resuelto:** Un fabricante de Sololá afirma que sus sacos de abono pesan $100 	ext{ lb}$ ($sigma = 4 	ext{ lb}$). Un inspector mide una muestra de $n = 64$ sacos y encuentra un promedio de $ar{x} = 99 	ext{ lb}$. Realice la prueba con $alpha = 0.05$ para ver si los sacos vienen incompletos ($H_1: mu < 100$ lb). (Dato: $Z_{	ext{crítico}} = -1.645$ para cola izquierda).
  - *Paso 1 Ecuaciones:* $H_0: mu = 100$ lb vs. $H_1: mu < 100$ lb.
  - *Paso 2 Calcular Z estadístico:*
    $Z_{	ext{cal}} = rac{99 - 100}{4 / sqrt{64}} = rac{-1}{4 / 8} = rac{-1}{0.5} = -2.00$.
  - *Paso 3 Comparar con Crítico:* El valor $Z_{	ext{cal}} = -2.00$ es menor que el valor límite crítico $Z_{	ext{crítico}} = -1.645$ (cae en la zona de rechazo de la cola izquierda).
  - *Resultado:* Se rechaza la hipótesis nula $H_0$. Concluimos con un 95% de seguridad que los sacos vienen incompletos y el fabricante miente.
* **Errores Comunes:** Comparar el valor absoluto de Z sin considerar los signos negativos en las pruebas de una cola izquierda, cometiendo errores de conclusión.
* **Ejercicios de Práctica:**
  1. Si Z calculado es 1.50 y el Z crítico para una cola a la derecha es 1.645, ¿cuál es tu decisión estadística? (R: No se rechaza la hipótesis nula H₀. 1.50 < 1.645).
  2. ¿Cuál es el Z crítico necesario para una prueba de dos colas con α = 0.05? (R: Z = ±1.96).
  3. Si calculas un Z de -3.20 en una prueba de dos colas con α = 0.05 (Z crítico = ±1.96), ¿cuál es tu conclusión? (R: Se rechaza la hipótesis nula. -3.20 cae en la zona extrema de rechazo izquierda).
  4. ¿Cómo se define formalmente el "p-valor" de una prueba de hipótesis? (R: La probabilidad de obtener un resultado muestral tan extremo o más extremo que el observado, asumiendo que la hipótesis nula es verdadera).
  5. Si p-valor = 0.02 y tu nivel de significancia es α = 0.05, ¿cuál es la decisión? (R: Se rechaza la hipótesis nula. Regla: si p-valor <= α, se rechaza H₀).
* **¿Necesitas ayuda?** Las pruebas de hipótesis con Z son la clave para aprobar tus cursos de estadística universitaria con excelencia. ¡Consigue tus mejores notas entrenando con tu tutor de CEDETU!

## Evaluación Unidad 3
* Un analista de calidad en Antigua quiere evaluar si una máquina llena botellas con un volumen promedio diferente de 500 ml. Si sabemos que la desviación es σ = 10 ml y se toma una muestra de n = 25 botellas que da un promedio de x̄ = 505 ml, realice la prueba con α = 0.05. (Z crítico = ±1.96). (R: Se rechaza H₀. Concluimos que el promedio es significativamente diferente de 500 ml. Retroalimentación: Error estándar = 10 / √25 = 2. Z_cal = (505 - 500) / 2 = 5 / 2 = 2.50. Como 2.50 > 1.96, se rechaza H₀).
* Con el ejercicio anterior, si Z calculado hubiera dado 1.80, ¿cuál sería la decisión? (R: No se rechaza H₀. 1.80 está dentro del rango de aceptación [-1.96, 1.96]).
* ¿Qué significa que un resultado sea "estadísticamente significativo" en una prueba? (R: Que la diferencia observada es demasiado grande como para atribuirse al simple azar, lo que obliga a rechazar la hipótesis de no cambio H₀).

---

## Unidad 4: Regresión Lineal Simple
### Lección 5.1: Diagramas de Dispersión y Coeficiente de Pearson
* **Objetivo:** Graficar la relación entre dos variables en diagramas de dispersión y calcular e interpretar la fuerza del coeficiente de correlación r de Pearson.
* **Explicación:** Un diagrama de dispersión representa gráficamente la relación entre una variable explicativa x y otra dependiente y.
  - El **Coeficiente de Pearson ($r$)** mide el grado de asociación lineal. Su valor fluctúa estrictamente entre -1 y 1. Un valor cercano a 1 o -1 indica una relación lineal muy fuerte; cercano a 0 indica que no hay relación lineal.
* **Ejemplo Resuelto:** Un profesor en Antigua recopila horas semanales de estudio (x) y notas de matemáticas (y) de 5 alumnos: (2, 60), (4, 70), (6, 80), (8, 90), (10, 100). Calcula r e interpreta.
  - *Paso 1:* Grafica los puntos. Muestran una línea perfecta ascendente.
  - *Paso 2:* Dado que los aumentos de y son perfectamente proporcionales al aumento de x, el coeficiente de correlación de Pearson es r = 1.00.
  - *Resultado:* Correlación lineal positiva perfecta.
* **Errores Comunes:** Concluir de forma precipitada que porque r es alto, una variable causa la otra (correlación no es causalidad).
* **Ejercicios de Práctica:**
  1. ¿Qué tipo de relación mide el coeficiente de Pearson r? (R: Únicamente la relación de tipo lineal).
  2. Si r = -0.92, ¿cómo se describe la relación entre ambas variables? (R: Relación lineal negativa o inversa muy fuerte).
  3. Lógicamente, ¿qué tipo de correlación esperas encontrar entre la velocidad de un carro y el tiempo de viaje? (R: Correlación negativa o inversa).
  4. ¿Qué valor tiene el coeficiente de Pearson si no existe ninguna relación lineal entre las variables? (R: 0.00).
  5. ¿Se puede aplicar la correlación de Pearson a variables cualitativas nominales (como color favorito)? (R: No. Exige estrictamente variables cuantitativas numéricas).
* **¿Necesitas ayuda?** Los diagramas de dispersión permiten detectar patrones ocultos de consumo en los negocios. ¡Visualízalos con ayuda de tu tutor de CEDETU!

### Lección 5.2: La Ecuación de la Recta de Mínimos Cuadrados
* **Objetivo:** Calcular e interpretar la ecuación de la recta de regresión ŷ = mx + b por mínimos cuadrados.
* **Explicación:** La regresión lineal simple calcula la recta que minimiza los errores de predicción.
  - **Pendiente (m):** El cambio promedio esperado en y por cada unidad que aumenta x.
  - **Ordenada al origen (b):** El valor promedio esperado de y cuando x es exactamente cero.
* **Ejemplo Resuelto:** Una recta de regresión estima el rendimiento de maíz en Tecpán: ŷ = 0.05x + 1.2, donde x es el abono aplicado en kg. Interpreta m y b.
  - *Paso 1 m = 0.05:* Por cada kg adicional de abono, el rendimiento aumenta en promedio 0.05 toneladas.
  - *Paso 2 b = 1.2:* Si no aplicas abono (x = 0), el rendimiento natural esperado es de 1.2 toneladas.
  - *Resultado:* Interpretación física y contextualizada completada con éxito.
* **Errores Comunes:** Extrapolar predicciones a valores de x extremadamente lejanos al rango de los datos originales del experimento.
* **Ejercicios de Práctica:**
  1. Si la ecuación es y = 4x + 50, calcula el valor estimado de y para x = 10. (R: 90).
  2. ¿Cuál es el método estándar para ajustar la mejor recta de regresión? (R: El método de Mínimos Cuadrados).
  3. Si la pendiente es negativa (m = -1.5), ¿qué le ocurre a y a medida que x aumenta? (R: Disminuye).
  4. En y = -0.5x + 80, calcula y para x = 100. (R: 30. Retroalimentación: -50 + 80 = 30).
  5. ¿Qué nombre recibe la variable y en un análisis de regresión? (R: Variable dependiente, de respuesta o explicada).
* **¿Necesitas ayuda?** La regresión es la herramienta preferida de los analistas de presupuestos. ¡Aprende a formularla al instante junto a tu tutor de CEDETU!

### Lección 5.3: Coeficiente de Determinación y Residuos
* **Objetivo:** Calcular y analizar el Coeficiente de Determinación R² y evaluar los residuos.
* **Explicación:** 
  - **Coeficiente de Determinación (R²):** Proporción de la variabilidad total de y explicada por x a través de la recta. Es el cuadrado del coeficiente de Pearson: R² = r².
  - **Residuo (e):** El error de predicción de la recta: e = y - ŷ.
* **Ejemplo Resuelto:** Si la correlación entre ventas (y) y comerciales (x) es r = 0.90, calcula R² e interpreta para la gerencia.
  - *Paso 1 R²:* (0.90)² = 0.81 o 81%.
  - *Resultado:* El 81% de la variación de las ventas se explica por los comerciales de TV a través de la recta; el 19% restante se debe a otros factores.
* **Errores Comunes:** Confundir R² con r, atribuyéndoles exactamente el mismo valor porcentual por descuido.
* **Ejercicios de Práctica:**
  1. Si r = -0.80, ¿cuánto vale el coeficiente de determinación R²? (R: 0.64 o 64%).
  2. Si la recta estima tardar 10 horas y en la realidad tarda 12 horas, ¿cuánto vale el residuo e? (R: 2 horas. Retroalimentación: e = y - ŷ = 12 - 10 = 2).
  3. ¿Cuál es el promedio esperado de todos los residuos calculados por mínimos cuadrados en un modelo lineal? (R: Exactamente cero (0)).
  4. Si R² es del 100%, ¿qué nos indica sobre los puntos en el diagrama de dispersión? (R: Que todos los puntos están situados exactamente sobre la recta de regresión).
  5. Si el 49% de la variabilidad de las ventas se explica por la publicidad, ¿cuánto vale el coeficiente r de Pearson? (R: 0.70. Retroalimentación: √0.49 = 0.70).
* **¿Necesitas ayuda?** Analizar los residuos te indicará si tu modelo lineal es correcto o si necesitas otro tipo de curvas. ¡Pregúntale a tu tutor de CEDETU!

## Evaluación Unidad 4
* Una recta de regresión para predecir el peso en kg (y) a partir de la estatura en metros (x) es: ŷ = 60x - 30. Si un estudiante de Antigua mide 1.80 metros y pesa 80 kg, calcula su peso estimado por la recta y su residuo. (R: Peso estimado ŷ = 78 kg; Residuo e = 2 kg. Retroalimentación: ŷ = 60*(1.80) - 30 = 108 - 30 = 78 kg. Residuo e = 80 - 78 = 2 kg).
* Si r = 0.80, ¿qué porcentaje de la variación de la variable dependiente no se explica por la independiente? (R: 36%. Retroalimentación: R² = 0.64 o 64% explicada. No explicada = 100% - 64% = 36%).
* ¿Qué signo tiene el residuo si la recta de regresión sobreestimó el valor real observado? (R: Signo negativo. Retroalimentación: e = y - ŷ; si ŷ > y, entonces e < 0).
`,

    "regresion-lineal": `# Curso: Regresión Lineal Simple
* **Materia:** Matemáticas | **Nivel sugerido:** Universidad
* **Público objetivo:** Alumnos universitarios que desean dominar el modelado estadístico, la optimización de mínimos cuadrados y el análisis predictivo bidimensional.
* **Objetivos de aprendizaje:** Representar y analizar correlaciones cuantitativas, calcular la recta de mínimos cuadrados, evaluar la bondad de ajuste mediante R² e interpretar el análisis de residuos en casos prácticos empresariales.

## Unidad 1: Correlación y Diagramas de Dispersión
### Lección 1.1: Diagramas de Dispersión
* **Objetivo:** Graficar y analizar visualmente diagramas de dispersión bidimensionales identificando patrones lineales y no lineales.
* **Explicación:** Un diagrama de dispersión representa gráficamente la relación entre dos variables cuantitativas de un mismo conjunto de datos. La variable independiente se coloca en el eje X y la dependiente en el eje Y.
* **Ejemplo Resuelto:** Grafica los puntos de estudio y nota de 3 alumnos en Xela: (1, 50), (3, 70), (5, 90). Describe la tendencia observada.
  - *Paso 1:* Marca (1,50) en el plano cartesiano.
  - *Paso 2:* Marca (3,70) y (5,90).
  - *Paso 3:* Une los puntos mentalmente. Se observa una tendencia lineal ascendente constante.
  - *Resultado:* Tendencia lineal positiva.
* **Errores Comunes:** Intercambiar la posición de los ejes X e Y por descuido al graficar.
* **Ejercicios de Práctica:**
  1. ¿Qué variable se ubica tradicionalmente en el eje horizontal X de un diagrama de dispersión? (R: Variable independiente o explicativa).
  2. ¿Qué tendencia describe una nube de puntos que forma un círculo disperso sin dirección? (R: Ausencia de relación o correlación nula).
  3. Lógicamente, ¿cómo esperas que sea la tendencia en un diagrama de dispersión de "horas de videojuegos" versus "promedio académico"? (R: Tendencia lineal negativa o descendente).
  4. ¿Se pueden graficar variables cuantitativas y cualitativas cruzadas en un diagrama de dispersión clásico? (R: No. Exige estrictamente que ambas variables sean numéricas continuas o discretas).
  5. ¿Qué nos indica una tendencia no lineal en forma de U en el diagrama de dispersión? (R: Que existe una relación de tipo cuadrático o parabólico entre las variables, y no un modelo lineal).
* **¿Necesitas ayuda?** La representación visual es el inicio indispensable de cualquier análisis de datos científico. ¡Aprende a graficar como un experto con tu tutor de CEDETU!

### Lección 1.2: El Coeficiente de Correlación de Pearson
* **Objetivo:** Calcular e interpretar el valor del coeficiente de correlación r de Pearson para cuantificar la fuerza de la asociación lineal.
* **Explicación:** El coeficiente r de Pearson mide la fuerza y dirección de la relación lineal entre dos variables. Su rango es estricto de -1.0 a 1.0. Un valor cercano a 1 indica correlación positiva fuerte; cercano a -1 indica negativa fuerte; y cercano a 0 indica correlación nula.
* **Ejemplo Resuelto:** Si la correlación entre ventas agrícolas en Tecpán y lluvias mensuales es r = 0.85, interpreta la fuerza y dirección.
  - *Paso 1 Dirección:* El valor de r es positivo (+0.85), por lo tanto la relación es directa (a mayor lluvia, mayor venta en promedio).
  - *Paso 2 Fuerza:* 0.85 está muy cerca de 1.00. Es una correlación lineal positiva muy fuerte.
  - *Resultado:* Correlación lineal positiva muy fuerte.
* **Errores Comunes:** Atribuirle a un r = -0.90 una relación débil solo por el signo menos, ignorando que el signo indica sentido y el valor absoluto indica la fuerza.
* **Ejercicios de Práctica:**
  1. ¿Cuál es el coeficiente r de Pearson para una relación lineal ascendente perfecta? (R: 1.00).
  2. Si r = -0.15, ¿cómo describes la relación lineal entre las variables? (R: Relación lineal negativa extremadamente débil o prácticamente nula).
  3. Si la correlación entre altura y peso de estudiantes en Antigua es r = 0.72, ¿cómo se clasifica? (R: Correlación lineal positiva moderada a fuerte).
  4. ¿Qué ocurre con el valor de r si multiplicamos todas las unidades de x por 10 (ej. pasar de metros a decímetros)? (R: Se mantiene idéntico. r es adimensional e independiente de las escalas de medida elegidas).
  5. ¿Cuál es el valor de r para dos variables que se comportan de forma perfectamente inversa? (R: -1.00).
* **¿Necesitas ayuda?** El cálculo analítico del coeficiente r requiere una tabla sumatoria meticulosa. ¡Domínala al instante con el método simplificado de tu tutor de CEDETU!

### Lección 1.3: Correlación versus Causalidad
* **Objetivo:** Diferenciar de forma crítica entre correlación y causalidad diagnosticando variables ocultas en casos de estudio reales.
* **Explicación:** Que dos variables estén altamente correlacionadas no significa que una sea la causa de la otra. Pueden estar influenciadas por una tercera variable externa oculta (variable de confusión), o ser una simple coincidencia. Para demostrar causalidad, se requiere un experimento diseñado controlado.
* **Ejemplo Resuelto:** Un estudio en Xela encuentra una alta correlación positiva entre la cantidad de helados vendidos al día y la cantidad de quemaduras por el sol registradas. ¿Significa que comer helado provoca quemaduras por el sol?
  - *Paso 1:* Analiza si hay una variable común a ambos efectos.
  - *Paso 2:* La temperatura ambiental y los días soleados de verano influyen tanto en el deseo de comer helado como en el riesgo de quemarse la piel bajo el sol.
  - *Resultado:* No hay causalidad. La correlación se debe a la variable oculta del clima soleado.
* **Errores Comunes:** Publicar reportes comerciales afirmando que un producto causa un efecto positivo basándose en un simple análisis observacional de correlación sin grupo de control.
* **Ejercicios de Práctica:**
  1. ¿Qué es una "variable de confusión" en el análisis estadístico? (R: Una variable no medida que influye tanto en la predictora como en la de respuesta, sugiriendo una falsa causalidad).
  2. Si encuentras una correlación alta entre el tamaño del pie de los niños y su nivel de lectura, ¿cuál es la variable explicativa real oculta? (R: La edad del niño).
  3. ¿Se puede establecer causalidad inequívoca a partir de un diagrama de dispersión con r = 0.99? (R: No. Exige un experimento diseñado aleatorizado).
  4. Da un ejemplo de correlación espuria o coincidencia absurda sin sentido en la vida cotidiana. (R: La correlación entre la venta de películas de un actor y la importación de cacao en el país).
  5. ¿Cuál es la única forma metodológica válida de probar científicamente una relación de causa y efecto? (R: Realizar un experimento diseñado controlado con asignación aleatoria de tratamientos y grupo de control).
* **¿Necesitas ayuda?** Desarrollar un pensamiento analítico y crítico ante las estadísticas te protegerá de decisiones comerciales equivocadas. ¡Asegura tus bases con tu tutor!

## Unidad 2: El Modelo de Regresión por Mínimos Cuadrados
### Lección 2.1: La Recta de Regresión ŷ = mx + b
* **Objetivo:** Calcular la ecuación de la recta de regresión que mejor se ajuste a los datos mediante el criterio de Mínimos Cuadrados.
* **Explicación:** La regresión lineal simple busca ajustar una línea recta de la forma ŷ = mx + b. Las fórmulas por mínimos cuadrados son:
  - Pendiente: $m = rac{nsum xy - sum x sum y}{nsum x^2 - (sum x)^2}$.
  - Ordenada al origen: $b = ar{y} - mar{x}$.
  Esta recta minimiza la suma de las distancias verticales al cuadrado de los puntos a la recta.
* **Ejemplo Resuelto:** A partir de los datos simplificados de 3 puntos: (1, 2), (2, 4), (3, 5). Calcula la recta de regresión.
  - *Paso 1 Sumatorias:* ∑x = 6, ∑y = 11, ∑x² = 14, ∑xy = 25, n = 3.
  - *Paso 2 Pendiente m:*
    $m = rac{3(25) - (6)(11)}{3(14) - 6^2} = rac{75 - 66}{42 - 36} = rac{9}{6} = 1.5$.
  - *Paso 3 Ordenada b:* Promedio x = 2, Promedio y = 3.67.
    $b = 3.67 - 1.5(2) = 3.67 - 3.0 = 0.67$.
  - *Resultado:* La ecuación de la recta de regresión es ŷ = 1.5x + 0.67.
* **Errores Comunes:** Confundir la sumatoria de cuadrados (∑x²) con el cuadrado de la sumatoria ((∑x)²) en el denominador de la fórmula de la pendiente.
* **Ejercicios de Práctica:**
  1. ¿Qué propiedad geométrica tiene la ordenada al origen b en el plano cartesiano? (R: Es el punto donde la recta interseca exactamente al eje vertical Y).
  2. Si la ecuación de la recta de regresión es y = 2x + 10, calcula el valor estimado de y para x = 5. (R: 20).
  3. ¿Cuál es el promedio aritmético de todos los puntos de datos (x̄, ȳ) con respecto a la recta de regresión por mínimos cuadrados? (R: Es un punto de paso obligado; la recta de mínimos cuadrados siempre pasa exactamente por el punto de coordenadas (x̄, ȳ)).
  4. Calcula la pendiente m si n = 5, ∑x = 10, ∑y = 20, ∑x² = 30, ∑xy = 50. (R: 1.00. Retroalimentación: m = (5*50 - 10*20) / (5*30 - 100) = (250-200)/(150-100) = 50/50 = 1).
  5. ¿Qué representa la variable y con un circunflejo (ŷ) en la ecuación de regresión? (R: El valor estimado o predicho de la variable dependiente por el modelo de la recta).
* **¿Necesitas ayuda?** El cálculo de mínimos cuadrados es largo y requiere absoluta concentración. ¡Vuélvete un maestro de la precisión matemática junto a tu tutor de CEDETU!

### Lección 2.2: Interpretación de la Pendiente y la Ordenada
* **Objetivo:** Interpretar físicamente la pendiente m y la ordenada al origen b en casos prácticos y reales de economía y agronegocios.
* **Explicación:** 
  - **m (Pendiente):** La tasa de cambio promedio de y por cada unidad adicional que aumenta x.
  - **b (Ordenada al origen):** El valor inicial o de base promedio de y cuando la variable predictora x es exactamente cero.
* **Ejemplo Resuelto:** Una recta de regresión estima el consumo de combustible de un generador en un aserradero de Tecpán en galones (y) a partir de las horas de operación (x): ŷ = 0.8x + 5.0. Interpreta los coeficientes.
  - *Paso 1 Pendiente m = 0.8:* Por cada hora adicional que opera el generador, el consumo de combustible aumenta en promedio exactamente en 0.8 galones.
  - *Paso 2 Ordenada b = 5.0:* Si el generador está encendido pero sin operar (cero horas de trabajo útil, x = 0), consume un promedio inicial de base de 5.0 galones (combustible de arranque y ralentí).
  - *Resultado:* Coeficientes interpretados de forma física real y aplicada.
* **Errores Comunes:** Interpretar la ordenada al origen de forma directa incluso cuando un valor x = 0 no tiene ningún sentido físico o práctico en la realidad del negocio (ej. predecir el peso de una persona de estatura cero, lo cual es imposible).
* **Ejercicios de Práctica:**
  1. Si la recta de ventas es y = 50x + 1000, donde x son anuncios, ¿cuál es la venta base promedio sin anuncios? (R: Q1,000.00).
  2. Con la recta anterior, ¿cuánto aumentan las ventas promedio por cada anuncio adicional colocado? (R: Q50.00).
  3. En y = -2.5x + 100, ¿qué significa que la pendiente sea -2.5? (R: Que por cada unidad que aumenta x, la variable dependiente y disminuye en promedio 2.5 unidades).
  4. ¿Es útil interpretar la ordenada al origen si el soporte de datos de la muestra de x está muy alejado de cero (ej. x entre 100 y 500)? (R: No. En ese caso, la ordenada b es solo una constante de ajuste matemático sin interpretación física real confiable).
  5. Si un modelo estima y = 1.2x + 0.5, ¿cuál es el incremento de y si x aumenta en 10 unidades? (R: 12 unidades. Retroalimentación: 1.2 * 10 = 12).
* **¿Necesitas ayuda?** La correcta interpretación de coeficientes diferencia a un programador básico de un verdadero científico de datos aplicado a negocios. ¡Entrénala hoy junto a tu tutor de CEDETU!

### Lección 2.3: Predicción e Interpolación
* **Objetivo:** Realizar predicciones y estimaciones de la variable dependiente y utilizando la recta de regresión, diferenciando entre interpolación segura y extrapolación riesgosa.
* **Explicación:** 
  - **Predicción:** Sustituir un valor de x en la ecuación de la recta para calcular el valor promedio estimado ŷ.
  - **Interpolación:** Predecir para un valor de x situado dentro del rango de los datos medidos en la muestra (seguro y altamente confiable).
  - **Extrapolación:** Predecir para un valor de x situado muy fuera del rango de datos originales de la muestra (riesgoso, asume que la tendencia lineal se mantiene infinitamente, lo cual suele ser falso).
* **Ejemplo Resuelto:** Un estudio de rendimiento de cultivos en Escuintla mide la producción de caña (y) para temperaturas (x) registradas entre 25°C y 35°C. Se obtiene la recta: ŷ = 4x + 10. Evalúe la validez de predecir la producción para: a) 30°C, b) 5°C.
  - *Paso 1 Caso 30°C:* El valor 30°C se encuentra dentro del rango de medición de la muestra [25°C, 35°C]. Es una interpolación totalmente válida y altamente confiable: ŷ = 4(30) + 10 = 130 toneladas.
  - *Paso 2 Caso 5°C:* El valor 5°C está sumamente alejado del rango de la muestra. Predecir daría 30 toneladas, pero en la realidad a 5°C la caña de azúcar se congela y muere (producción cero). Es una extrapolación inválida y peligrosa.
  - *Resultado:* a) Interpolación válida (130 t), b) Extrapolación de alto riesgo e inválida en la práctica.
* **Errores Comunes:** Confiar ciegamente en cualquier predicción de extrapolación lejana de la recta de regresión, cometiendo errores catastróficos en proyecciones de mediano y largo plazo en negocios.
* **Ejercicios de Práctica:**
  1. ¿Qué nombre recibe la predicción de un valor de y para una variable predictora x que se encuentra dentro del intervalo de los datos experimentales recolectados? (R: Interpolación).
  2. Si tu rango de x es de 10 a 50 llamadas de ventas y utilizas la recta para estimar las ventas de 500 llamadas de ventas, ¿qué proceso realizas? (R: Extrapolación de alto riesgo).
  3. En la recta y = 0.5x + 20, calcula el valor predicho para x = 80. (R: 60).
  4. ¿Por qué la extrapolación extrema es de alto riesgo en física y economía? (R: Porque las tendencias lineales de la naturaleza o del comportamiento del mercado suelen saturarse, cambiar de curvatura o romperse fuera del rango observado).
  5. Si interpolas para x = 30 si el rango medido es de 20 a 40, ¿es el resultado confiable? (R: Sí, es una interpolación estándar segura).
* **¿Necesitas ayuda?** Aprende a colocar márgenes de error a tus predicciones de regresión para presentarlas de forma totalmente profesional ante directivos. ¡Consúltalo con tu tutor de CEDETU!

## Unidad 3: Coeficiente de Determinación y Análisis de Residuos
### Lección 3.1: Coeficiente de Determinación R²
* **Objetivo:** Calcular y evaluar el Coeficiente de Determinación R² para medir qué porcentaje de la variación total de y es explicada por el modelo lineal de x.
* **Explicación:** El Coeficiente de Determinación ($R^2$ o $r^2$) mide la bondad de ajuste del modelo de regresión lineal. Es igual al cuadrado del coeficiente de correlación de Pearson. Representa la proporción de la variabilidad total de la variable de respuesta explicada por la variable explicativa a través de la recta. Toma valores de 0 a 1 (0% a 100%).
* **Ejemplo Resuelto:** Si el coeficiente de correlación entre el tiempo de preparación ($x$) y la velocidad de ensamble ($y$) es $r = 0.80$, calcula R² e interpreta para el control de calidad de la fábrica.
  - *Paso 1:* Eleva al cuadrado: $R^2 = (0.80)^2 = 0.64$.
  - *Paso 2 Expresar en porcentaje:* $64%$.
  - *Resultado:* El R² es del 64%. Significa que el 64% de la variación total de la velocidad de ensamble se puede explicar por el tiempo de preparación mediante la recta de regresión; el 36% restante se debe a otros factores inexplicados o variables ocultas ajenas al modelo.
* **Errores Comunes:** Pensar que un modelo con R² de 50% es inútil; en ciencias sociales y economía, modelos con R² de 30% a 50% son sumamente valiosos e informativos si las variables tienen un p-valor significativo.
* **Ejercicios de Práctica:**
  1. Si r = -0.90, ¿cuánto vale el coeficiente de determinación R²? (R: 0.81 o 81%).
  2. ¿Cuál es el valor del R² si la recta de regresión lineal explica el 100% de los datos muestrales? (R: 1.00 o 100%).
  3. Si R² = 0.49, calcula el valor absoluto del coeficiente de correlación de Pearson r. (R: 0.70. Retroalimentación: √0.49 = 0.70).
  4. ¿Qué porcentaje de la variación queda inexplicado en un modelo lineal que tiene un R² de 0.75? (R: 25% de variación inexplicada).
  5. Si el R² de un modelo es prácticamente 0, ¿cuál es tu conclusión sobre la utilidad de la recta de regresión lineal? (R: Que la recta no tiene ninguna capacidad de predicción lineal y el modelo no es útil).
* **¿Necesitas ayuda?** La bondad de ajuste es el parámetro oficial para validar la solidez científica de cualquier modelo econométrico. ¡Asegura tu comprensión de R² con tu tutor de CEDETU!

### Lección 3.2: Definición y Análisis de Residuos
* **Objetivo:** Calcular los residuos de cada observación e interpretar su distribución gráfica básica para diagnosticar la homogeneidad del modelo.
* **Explicación:** Un **residuo ($e_i$)** es el error de predicción individual, que representa la distancia vertical desde el punto de dato real observado $y_i$ hasta el valor estimado de la recta $hat{y}_i$:
  - Fórmula: $e_i = y_i - hat{y}_i$.
  - Los residuos actúan como un indicador de la calidad del ajuste. Gráficamente, para que el modelo lineal sea óptimo, los residuos dibujados en un gráfico versus x deben distribuirse de forma totalmente aleatoria y homogénea alrededor de la línea horizontal de cero (homocedasticidad).
* **Ejemplo Resuelto:** Para un punto de dato real $A(2, 10)$, la recta de regresión estima una predicción $hat{y} = 3(2) + 2 = 8$. Calcula el residuo de esta observación.
  - *Paso 1:* Identifica el valor real observed: $y = 10$.
  - *Paso 2:* Identifica el valor estimado: $hat{y} = 8$.
  - *Paso 3:* Aplica la fórmula del residuo: $e = y - hat{y} = 10 - 8 = 2$.
  - *Resultado:* El residuo es de +2. (Significa que el dato real está 2 unidades por encima de lo estimado por la recta).
* **Errores Comunes:** Calcular el residuo al revés $hat{y} - y$, lo que invierte erróneamente la dirección y el signo lógico del error de predicción.
* **Ejercicios de Práctica:**
  1. Si la recta estima 100 y el valor real observado es 95, ¿cuánto vale el residuo? (R: -5. Retroalimentación: 95 - 100 = -5).
  2. ¿Qué nos indica un conjunto de residuos que forma una clara figura en U o de parábola al graficarlos versus X? (R: Que la relación entre las variables no es lineal, y el modelo óptimo es cuadrático o curvo).
  3. ¿Cuál es el promedio matemático exacto de todos los residuos verticales obtenidos en una regresión por mínimos cuadrados? (R: Exactamente cero (0)).
  4. Si el residuo de una predicción es exactamente cero, ¿qué significa con respecto al punto en el plano? (R: Que el punto real observado está situado exactamente sobre la recta de regresión).
  5. ¿Cómo se define el concepto de homocedasticidad en residuos? (R: Que la varianza de los residuos es constante a lo largo de todos los valores de la variable predictora x).
* **¿Necesitas ayuda?** El análisis de residuos es el paso de control de calidad obligatorio en cualquier reporte econométrico avanzado. ¡Aprende a interpretarlo de forma interactiva con tu tutor de CEDETU!

### Lección 3.3: Casos Prácticos Aplicados a Agronegocios y Finanzas
* **Objetivo:** Resolver un caso de estudio real de proyección de ventas agrícolas en Guatemala aplicando de forma integrada la correlación, regresión, R² y predicción.
* **Explicación:** En agronegocios y finanzas, la regresión permite modelar cómo las inversiones influyen en los rendimientos o ingresos reales. Un análisis integrado permite proyectar escenarios financieros seguros fundamentados en la evidencia de los datos históricos de la empresa.
* **Ejemplo Resuelto:** Una cooperativa en Sololá registra la cantidad de sacos de café producidos en quintales ($y$) a partir del presupuesto de riego invertido en miles de Quetzales ($x$) en 5 parcelas piloto, obteniendo la recta de regresión: $hat{y} = 12x + 40$, con un $R^2 = 0.85$ y un rango medido de inversión $x$ entre Q1,000 y Q5,000. Realice una proyección de quintales cosechados para una inversión de Q3,000 (x = 3).
  - *Paso 1 Evaluar si es seguro:* La inversión solicitada x = 3 se encuentra dentro de la muestra medida [1, 5] (miles de Quetzales). Es una interpolación segura y confiable.
  - *Paso 2 Calcular Predicción:* $hat{y} = 12(3) + 40 = 36 + 40 = 76$ quintales de café.
  - *Paso 3 Interpretar R²:* El R² del 85% indica que el modelo es altamente sólido y que el 85% de la variación en la cosecha de café se explica por el presupuesto de riego, haciendo la proyección muy confiable para el presupuesto anual.
  - *Resultado:* Cosecha proyectada de 76 quintales con alta confiabilidad.
* **Errores Comunes:** Lanzarse a invertir presupuestos astronómicos basándose en extrapolaciones de rectas que no han tomado en cuenta que los terrenos tienen límites físicos de saturación y capacidad de producción.
* **Ejercicios de Práctica:**
  1. Con el modelo anterior, ¿cuántos quintales base se esperan cosechar si la inversión de riego es cero (x = 0)? (R: 40 quintales).
  2. ¿Cuánto aumenta en promedio la cosecha de café por cada mil Quetzales adicionales invertidos en riego según el modelo? (R: 12 quintales).
  3. Si la cooperativa quiere estimar la producción para una inversión de Q50,000 (x = 50) basándose en este modelo piloto de 5 parcelas, ¿es una predicción segura? (R: No. Es una extrapolación extrema de altísimo riesgo comercial).
  4. Si en una parcela real con inversión x = 2 la cosecha fue de 60 quintales, calcula el residuo con respecto a la estimación del modelo. (R: -4 quintales. Retroalimentación: ŷ = 12*2 + 40 = 64. e = 60 - 64 = -4).
  5. ¿Qué factor ajeno al riego (como la lluvia natural o calidad del suelo) representa el 15% de variación inexplicada del R² de este caso? (R: Variables de confusión y factores ambientales no incluidos en el modelo simple).
* **¿Necesitas ayuda?** La estadística aplicada a los agronegocios reales de Latinoamérica genera un valor económico enorme e inmediato. ¡Aprende a formular tus propios casos prácticos y proyecciones de negocios al lado de tu tutor de CEDETU!

## Evaluación Unidad 3
* Un modelo de regresión lineal estima los ingresos mensuales de un local de artesanías en Antigua en miles de Quetzales (y) a partir de las visitas de turistas extranjeros en cientos (x): ŷ = 2.5x + 3.0. Si el local recibe 400 turistas extranjeros al mes (x = 4), calcula la proyección de ingresos y explica el significado de la ordenada b = 3.0. (R: Proyección de ingresos = Q13,000.00 al mes; b = 3.0 representa un ingreso base promedio de Q3,000.00 mensuales generados por clientes locales fijos sin visitas de turistas extranjeros. Retroalimentación: ŷ = 2.5*4 + 3 = 10 + 3 = 13 (en miles = Q13,000). b = 3.0 es el valor cuando x = 0).
* Si r = -0.95 entre la temperatura ambiente de almacenamiento y la vida útil del café pergamino en días, ¿cuánto vale la bondad de ajuste R²? (R: 0.9025 o 90.25%).
* ¿Qué nos indica un residuo positivo alto e = 8.5 en el caso práctico de ingresos de artesanías? (R: Que el local obtuvo Q8,500.00 de ingresos reales adicionales por encima de lo que el promedio de visitas del mes estimaba, indicando una venta excepcional o de gran valor).
`,

    "algebra-lineal": {
        isRichCourse: true,
        title: "Álgebra Lineal",
        units: [
            {
                title: "Unidad 1: Vectores y espacio vectorial",
                lessons: [
                    {
                        id: "que-es-un-vector",
                        title: "Lección 1.1: ¿Qué es un vector?",
                        introduction: "Un vector es el bloque fundamental del álgebra lineal. Representa una cantidad física con magnitud, dirección y sentido, o una lista de números en ciencias de datos.",
                        explanationHtml: '<p>En el mundo físico, existen cantidades que podemos describir con un solo número (escalares), como la temperatura (25 °C) o la masa (5 kg). Sin embargo, otras cantidades requieren más información: si te dicen que empujes una caja con una fuerza de 10 Newtons, preguntarás: <strong>¿hacia dónde?</strong></p><p class="mt-3">Un <strong>vector</strong> resuelve este problema agrupando tres propiedades esenciales:</p><ol class="list-decimal pl-5 space-y-1.5 my-3"><li><strong>Magnitud:</strong> El tamaño o longitud del vector (cuánto mide).</li><li><strong>Dirección:</strong> La línea sobre la que actúa (ej. horizontal o a 30° respecto al eje x).</li><li><strong>Sentido:</strong> Hacia dónde apunta (indicado por la punta de la flecha).</li></ol><p class="mt-3">En álgebra lineal, representamos un vector en el plano bidimensional como un par ordenado <span class="px-2 py-0.5 bg-slate-100 rounded text-slate-800 font-mono font-bold">v = (x, y)</span>, donde <em>x</em> indica el desplazamiento horizontal y <em>y</em> el vertical desde el origen.</p>',
                        formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Fórmula Clave: Magnitud (o Norma)</p><p class="text-xl font-mono font-extrabold text-primary">|\\vec{v}| = \\sqrt{x^2 + y^2}</p><p class="text-xs text-slate-500">Derivada directamente del Teorema de Pitágoras, donde las componentes del vector son los catetos y la magnitud es la hipotenusa.</p></div>',
                        svgGraphic: '<svg viewBox="-10 -10 220 220" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="200" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" /><line x1="0" y1="160" x2="200" y2="160" stroke="#94a3b8" stroke-width="1.5" /><line x1="40" y1="0" x2="40" y2="200" stroke="#94a3b8" stroke-width="1.5" /><polygon points="200,160 193,156 193,164" fill="#94a3b8" /><polygon points="40,0 36,7 44,7" fill="#94a3b8" /><text x="185" y="175" font-size="10" font-family="sans-serif" font-weight="bold" fill="#64748b">X</text><text x="25" y="15" font-size="10" font-family="sans-serif" font-weight="bold" fill="#64748b">Y</text><line x1="40" y1="160" x2="160" y2="160" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" /><line x1="160" y1="160" x2="160" y2="70" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" /><line x1="40" y1="160" x2="157" y2="72" stroke="#2563eb" stroke-width="3" /><polygon points="160,70 149,74 154,82" fill="#2563eb" /><circle cx="160" cy="70" r="4" fill="#1e3a8a" /><text x="90" y="172" font-size="9" font-family="sans-serif" fill="#2563eb" font-weight="bold">x = 4</text><text x="168" y="120" font-size="9" font-family="sans-serif" fill="#10b981" font-weight="bold">y = 3</text><text x="100" y="100" font-size="11" font-family="sans-serif" fill="#2563eb" font-weight="extrabold">v = (4, 3)</text><text x="65" y="135" font-size="11" font-family="sans-serif" fill="#f59e0b" font-weight="extrabold">|v| = 5</text></svg>',
                        svgDescription: "Representación gráfica del vector v = (4, 3) en el plano cartesiano. La magnitud se calcula como la raíz de 4² + 3² = 5.",
                        workedExampleHtml: '<p><strong>Problema:</strong> Calcula la magnitud de un vector fuerza representado por <span class="font-mono font-bold">f = (-5, 12)</span> Newtons.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Paso 1: Identifica las componentes.</strong> La componente horizontal es <em>x = -5</em> y la vertical es <em>y = 12</em>.</li><li><strong>Paso 2: Aplica la fórmula.</strong> Elevamos al cuadrado: <em>(-5)² = 25</em> y <em>12² = 144</em>. Cualquier negativo al cuadrado se vuelve positivo.</li><li><strong>Paso 3: Suma los resultados.</strong> <em>25 + 144 = 169</em>.</li><li><strong>Paso 4: Extrae la raíz cuadrada.</strong> <em>\\sqrt{169} = 13</em>.</li></ol><p class="mt-3 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-3 rounded-xl"><strong>Resultado:</strong> La magnitud del vector fuerza es exactamente <strong>13 Newtons</strong>.</p>',
                        commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Ignorar el signo negativo al elevar al cuadrado:</strong> Escribir (-5)² = -25 es un error común. La magnitud física siempre es un número positivo y real.</li><li><strong>Confundir coordenadas con distancias:</strong> Un vector con componente (-3, 0) tiene una longitud real de 3 unidades positivas, nunca negativa.</li></ul>',
                        exercises: [
                            {
                                question: "Si el vector velocidad de un móvil es v = (3, 4), ¿cuál es su rapidez (magnitud del vector)?",
                                correctAnswer: "5",
                                hint: "Usa la fórmula de la magnitud: \\sqrt{x^2 + y^2}.",
                                feedbackCorrect: "¡Excelente! La rapidez es de 5 unidades. 3² + 4² = 25, y la raíz cuadrada de 25 es 5.",
                                feedbackIncorrect: "Revisa los cálculos: eleva 3 al cuadrado (9) y 4 al cuadrado (16). Suma ambos (25) y calcula la raíz cuadrada.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "¿Cuál es la componente en el eje Y (vertical) del vector de posición w = (-8, 15)?",
                                correctAnswer: "15",
                                hint: "En el par ordenado (x, y), el primer valor representa a la X y el segundo a la Y.",
                                feedbackCorrect: "¡Correcto! En el vector (-8, 15), la componente en X es -8 y la componente en Y es 15.",
                                feedbackIncorrect: "Ten cuidado, la primera componente es X (-8) y la segunda componente es Y.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si un vector tiene origen en el punto (0, 0) y su extremo final se ubica en las coordenadas (6, 8), ¿cuánto mide su vector?",
                                correctAnswer: "10",
                                hint: "Las coordenadas del extremo representan las componentes del vector. Aplica la magnitud para (6, 8).",
                                feedbackCorrect: "¡Perfecto! La longitud del vector es 10. \\sqrt{6^2 + 8^2} = 10.",
                                feedbackIncorrect: "Revisa la suma: 6² = 36 y 8² = 64. 36 + 64 = 100. La raíz de 100 es 10.",
                                difficulty: "intermedio",
                                type: "short"
                            },
                            {
                                question: "¿Cuál de las siguientes magnitudes físicas se clasifica como una cantidad ESCALAR en lugar de una cantidad vectorial?",
                                options: [
                                    "La velocidad de un viento soplando a 40 km/h al Norte",
                                    "El desplazamiento de una hormiga 2 metros a la izquierda",
                                    "La temperatura ambiental registrada de 22 °C",
                                    "La fuerza de atracción magnética de 3 Newtons hacia abajo"
                                ],
                                correctAnswer: 2,
                                hint: "Una cantidad escalar queda completamente explicada con un número y su unidad, sin requerir dirección ni sentido.",
                                feedbackCorrect: "¡Muy bien! La temperatura de 22 °C es una cantidad escalar, ya que no tiene sentido decir '22 °C hacia el Norte'. Las demás sí requieren dirección y sentido.",
                                feedbackIncorrect: "Incorrecto. Recuerda que la velocidad, fuerza y desplazamiento tienen dirección y sentido (son vectores). La temperatura no.",
                                difficulty: "básico",
                                type: "multiple"
                            },
                            {
                                question: "Si un vector en el plano cartesiano es a = (0, -6), ¿hacia qué dirección y sentido apunta exactamente?",
                                options: [
                                    "Hacia la derecha (eje X positivo)",
                                    "Hacia la izquierda (eje X negativo)",
                                    "Hacia arriba (eje Y positivo)",
                                    "Hacia abajo (eje Y negativo)"
                                ],
                                correctAnswer: 3,
                                hint: "Dado que x = 0, no hay movimiento lateral. Observa que y = -6 (negativa).",
                                feedbackCorrect: "¡Correcto! Como x = 0 y la componente y es negativa (-6), el vector apunta directamente sobre el eje Y negativo, es decir, hacia abajo.",
                                feedbackIncorrect: "Revisa las componentes: x = 0 significa que no se desplaza horizontalmente. La componente y es -6, que al ser negativa indica dirección hacia abajo.",
                                difficulty: "intermedio",
                                type: "multiple"
                            }
                        ],
                        summaryHtml: "En esta lección aprendimos que un vector representa magnitud, dirección y sentido, formalizándose como un par ordenado (x, y) cuya magnitud se calcula usando el Teorema de Pitágoras.",
                        videoPlaceholderText: "Video de Álgebra Lineal: Conceptos fundamentales y representación de vectores."
                    },
                    {
                        id: "suma-resta-vectores",
                        title: "Lección 1.2: Suma y resta de vectores",
                        introduction: "La suma y resta de vectores nos permite combinar desplazamientos o fuerzas. Aprenderás a resolverlo analítica y geométricamente.",
                        explanationHtml: '<p>Para sumar dos vectores de forma analítica, simplemente sumamos sus componentes correspondientes. Es decir, sumamos X con X, e Y con Y.</p><p class="mt-3">Si <span class="font-mono font-bold">u = (u1, u2)</span> y <span class="font-mono font-bold">v = (v1, v2)</span>, entonces:</p><p class="mt-2 text-center font-mono font-bold text-primary text-base">u + v = (u1 + v1, u2 + v2)</p><p class="mt-3">De la misma manera, para restar restamos componente a componente:</p><p class="mt-2 text-center font-mono font-bold text-primary text-base">u - v = (u1 - v1, u2 - v2)</p><p class="mt-3 font-semibold">Interpretación geométrica (Método del Triángulo):</p><p>Colocamos el origen del segundo vector en el extremo del primero. El vector suma resultante se dibuja desde el origen del primero hasta el extremo del segundo.</p>',
                        formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Suma y Resta Analítica</p><p class="text-lg font-mono font-extrabold text-primary">\\vec{u} \\pm \\vec{v} = (u_x \\pm v_x, u_y \\pm v_y)</p><p class="text-xs text-slate-500">Se opera estrictamente componente a componente respetando las leyes de signos.</p></div>',
                        svgGraphic: '<svg viewBox="-10 -10 220 220" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="200" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" /><line x1="0" y1="160" x2="200" y2="160" stroke="#94a3b8" stroke-width="1.5" /><line x1="40" y1="0" x2="40" y2="200" stroke="#94a3b8" stroke-width="1.5" /><polygon points="200,160 193,156 193,164" fill="#94a3b8" /><polygon points="40,0 36,7 44,7" fill="#94a3b8" /><!-- Vector u (1, 3) --><line x1="40" y1="160" x2="68" y2="73" stroke="#2563eb" stroke-width="3" /><polygon points="70,70 59,76 66,82" fill="#2563eb" /><text x="45" y="110" font-size="10" font-family="sans-serif" fill="#2563eb" font-weight="bold">u</text><!-- Vector v (3, 1) colocado en extremo de u --><line x1="70" y1="70" x2="157" y2="42" stroke="#10b981" stroke-width="3" /><polygon points="160,40 149,44 154,52" fill="#10b981" /><text x="110" y="50" font-size="10" font-family="sans-serif" fill="#10b981" font-weight="bold">v</text><!-- Resultante u + v (4, 4) --><line x1="40" y1="160" x2="157" y2="42" stroke="#f59e0b" stroke-width="3" /><polygon points="160,40 148,46 153,54" fill="#f59e0b" /><text x="95" y="90" font-size="11" font-family="sans-serif" fill="#f59e0b" font-weight="extrabold">u + v = (4, 4)</text></svg>',
                        svgDescription: "Suma geométrica por método del triángulo. El vector u = (1, 3) y el vector v = (3, 1) se combinan para dar el vector resultante u + v = (4, 4).",
                        workedExampleHtml: '<p><strong>Problema:</strong> Dados los vectores <span class="font-mono">u = (3, 8)</span> y <span class="font-mono">v = (-1, 4)</span>, calcula <span class="font-mono">u + v</span> y <span class="font-mono">u - v</span>.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Suma u + v:</strong> Sumamos componentes: <br>x: 3 + (-1) = 2 <br>y: 8 + 4 = 12. <br>Resultado suma: <strong>(2, 12)</strong>.</li><li><strong>Resta u - v:</strong> Restamos componentes respetando signos: <br>x: 3 - (-1) = 3 + 1 = 4 <br>y: 8 - 4 = 4. <br>Resultado resta: <strong>(4, 4)</strong>.</li></ol>',
                        commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Sumar componentes cruzadas:</strong> Sumar la X del primero con la Y del segundo es un error muy común bajo presión. Mantén X con X, e Y con Y.</li><li><strong>Errores de signo en la resta:</strong> Al restar una componente negativa, recuerda que menos por menos da más: 5 - (-2) = 5 + 2 = 7.</li></ul>',
                        exercises: [
                            {
                                question: "Si u = (2, 5) y v = (4, -1), ¿cuál es la componente horizontal X del vector suma u + v?",
                                correctAnswer: "6",
                                hint: "Suma directamente las primeras componentes de ambos vectores: 2 + 4.",
                                feedbackCorrect: "¡Excelente! La componente X de la suma es 6.",
                                feedbackIncorrect: "Revisa la suma simple de las primeras componentes: 2 + 4 = 6.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si a = (7, 3) y b = (2, -4), ¿cuál es la componente vertical Y del vector resta a - b?",
                                correctAnswer: "7",
                                hint: "Resta la componente Y de b a la de a: 3 - (-4). Ten cuidado con la ley de signos.",
                                feedbackCorrect: "¡Perfecto! Al restar un negativo se suma: 3 - (-4) = 3 + 4 = 7.",
                                feedbackIncorrect: "Recuerda la ley de signos: 3 - (-4) equivale a 3 + 4.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Dados u = (-3, 2) y v = (3, 2), ¿cuál es el vector suma resultante en formato de par ordenado? (Escríbelo sin espacios, ej: (0,4))",
                                correctAnswer: "(0,4)",
                                hint: "Suma las componentes correspondientes: X: -3 + 3 = 0, Y: 2 + 2 = 4.",
                                feedbackCorrect: "¡Excelente trabajo! El vector suma es el vector vertical (0, 4).",
                                feedbackIncorrect: "Revisa las sumas por componente: X: -3+3 = 0. Y: 2+2 = 4. Formato esperado: (0,4).",
                                difficulty: "intermedio",
                                type: "short"
                            },
                            {
                                question: "Geométricamente, si sumas dos vectores u y v colocando el inicio de v en el extremo final de u, ¿cómo se dibuja la resultante u + v?",
                                options: [
                                    "Desde la punta de v hasta el origen de u",
                                    "Desde el origen de u hasta la punta final de v",
                                    "Uniendo los dos orígenes en el punto medio",
                                    "Dibujando una línea perpendicular al eje X"
                                ],
                                correctAnswer: 1,
                                hint: "El vector resultante representa el camino directo desde el punto de partida inicial hasta el destino final.",
                                feedbackCorrect: "¡Correcto! El método del triángulo define la resultante trazando el vector desde el punto de partida (origen de u) hasta el de llegada (punta de v).",
                                feedbackIncorrect: "Incorrecto. El vector resultante va del inicio de la trayectoria (origen del primer vector) al final de la misma (punta del segundo vector).",
                                difficulty: "básico",
                                type: "multiple"
                            },
                            {
                                question: "La resta de vectores u - v se puede definir matemáticamente como:",
                                options: [
                                    "La multiplicación cruzada de sus componentes",
                                    "Sumar a u el opuesto de v, es decir: u + (-v)",
                                    "Dividir las magnitudes de u y v respectivamente",
                                    "La distancia absoluta entre sus coordenadas de extremo"
                                ],
                                correctAnswer: 1,
                                hint: "Restar una cantidad es equivalente a sumar su inverso aditivo.",
                                feedbackCorrect: "¡Excelente! Restar el vector v es exactamente igual a sumar el vector opuesto -v (mismo tamaño pero en sentido contrario).",
                                feedbackIncorrect: "Incorrecto. En álgebra lineal, la resta u - v se formaliza y visualiza como la suma u + (-v).",
                                difficulty: "intermedio",
                                type: "multiple"
                            }
                        ],
                        summaryHtml: "En esta lección aprendimos que la suma y resta de vectores se realiza componente a componente en la parte analítica, y mediante el método del triángulo en la parte geométrica.",
                        videoPlaceholderText: "Video de Álgebra Lineal: Suma y resta analítica y geométrica de vectores."
                    },
                    {
                        id: "multiplicacion-escalar",
                        title: "Lección 1.3: Multiplicación de un vector por un escalar",
                        introduction: "Aprende cómo un número real (escalar) altera la magnitud y el sentido de un vector al multiplicarlo.",
                        explanationHtml: '<p>En álgebra lineal, un número real se denomina <strong>escalar</strong>. Cuando multiplicamos un vector por un escalar, multiplicamos cada una de sus componentes por ese número.</p><p class="mt-3">Si <span class="font-mono font-bold">v = (x, y)</span> y <span class="font-mono font-bold">k</span> es un escalar, el vector resultante es:</p><p class="mt-2 text-center font-mono font-bold text-primary text-base">k * v = (k*x, k*y)</p><p class="mt-3 font-semibold">Efectos geométricos del escalar k:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li>Si <strong>k > 1</strong>, el vector se estira (amplifica su magnitud).</li><li>Si <strong>0 < k < 1</strong>, el vector se encoge.</li><li>Si <strong>k < 0</strong>, el vector cambia a la dirección opuesta (sentido contrario).</li></ul>',
                        formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Multiplicación Escalar</p><p class="text-lg font-mono font-extrabold text-primary">k \\vec{v} = (k x, k y)</p><p class="text-xs text-slate-500">El escalar se distribuye multiplicando a todas y cada una de las componentes del vector.</p></div>',
                        svgGraphic: '<svg viewBox="-10 -10 220 220" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="200" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" /><line x1="0" y1="100" x2="200" y2="100" stroke="#94a3b8" stroke-width="1.5" /><line x1="100" y1="0" x2="100" y2="200" stroke="#94a3b8" stroke-width="1.5" /><polygon points="200,100 193,96 193,104" fill="#94a3b8" /><polygon points="100,0 96,7 104,7" fill="#94a3b8" /><!-- Vector original u (2, 1) -> (40, 20) px --><line x1="100" y1="100" x2="140" y2="80" stroke="#2563eb" stroke-width="3" /><polygon points="140,80 131,83 135,91" fill="#2563eb" /><text x="120" y="75" font-size="9" font-family="sans-serif" fill="#2563eb" font-weight="bold">u (2,1)</text><!-- Vector 2u (4, 2) --><line x1="100" y1="100" x2="180" y2="60" stroke="#f59e0b" stroke-width="2" stroke-dasharray="2,2" /><polygon points="180,60 171,63 175,71" fill="#f59e0b" /><text x="155" y="55" font-size="9" font-family="sans-serif" fill="#f59e0b" font-weight="bold">2u (4,2)</text><!-- Vector -u (-2, -1) --><line x1="100" y1="100" x2="60" y2="120" stroke="#ef4444" stroke-width="3" /><polygon points="60,120 69,117 65,109" fill="#ef4444" /><text x="65" y="135" font-size="9" font-family="sans-serif" fill="#ef4444" font-weight="bold">-u (-2,-1)</text></svg>',
                        svgDescription: "Multiplicación de un vector por un escalar. Se muestra u = (2, 1), su duplicado 2u = (4, 2) y su opuesto -u = (-2, -1).",
                        workedExampleHtml: '<p><strong>Problema:</strong> Dado el vector <span class="font-mono font-bold">v = (-3, 6)</span>, calcula el vector resultante al multiplicarlo por los escalares <em>k = 3</em> y <em>k = -0.5</em>.</p><ol class="list-decimal pl-5 space-y-2 mt-2"><li><strong>Multiplicación por k = 3:</strong> Multiplicamos componentes: <br>x: 3 * (-3) = -9 <br>y: 3 * 6 = 18. <br>Resultado: <strong>(-9, 18)</strong>.</li><li><strong>Multiplicación por k = -0.5:</strong> Multiplicamos componentes: <br>x: -0.5 * (-3) = 1.5 <br>y: -0.5 * 6 = -3. <br>Resultado: <strong>(1.5, -3)</strong>.</li></ol>',
                        commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Multiplicar solo una componente:</strong> Olvidar multiplicar la Y por el escalar es sumamente común. El escalar escala a todo el espacio vector uniformemente.</li><li><strong>Errores de signo con escalares negativos:</strong> No olvides cambiar el sentido (y los signos) de todas las componentes al multiplicar por números negativos.</li></ul>',
                        exercises: [
                            {
                                question: "Si v = (3, -2) y lo multiplicamos por el escalar k = 4, ¿cuál es la nueva componente vertical Y?",
                                correctAnswer: "-8",
                                hint: "Multiplica directamente la componente Y del vector original (-2) por el escalar 4.",
                                feedbackCorrect: "¡Excelente! La componente Y del vector resultante es -8.",
                                feedbackIncorrect: "Calcula el producto simple respetando el signo: -2 * 4 = -8.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si al multiplicar el vector original w por 3 se obtiene el vector (12, -9), ¿cuál es la componente horizontal X de w?",
                                correctAnswer: "4",
                                hint: "Haz el proceso inverso: divide la componente X del vector resultante (12) entre el escalar 3.",
                                feedbackCorrect: "¡Perfecto! La componente X del vector original es 4, ya que 4 * 3 = 12.",
                                feedbackIncorrect: "Divide 12 entre 3 para hallar el valor inicial de la componente X.",
                                difficulty: "intermedio",
                                type: "short"
                            },
                            {
                                question: "Si multiplicamos el vector v = (-6, 8) por el escalar k = 0.5, ¿cuál es la magnitud o norma del vector resultante?",
                                correctAnswer: "5",
                                hint: "Primero calcula el vector resultante (0.5 * -6, 0.5 * 8) = (-3, 4) y luego calcula su magnitud.",
                                feedbackCorrect: "¡Brillante! El vector escalado es (-3, 4), cuya magnitud es exactamente 5.",
                                feedbackIncorrect: "Multiplica las componentes por 0.5 para obtener (-3, 4). Luego calcula la raíz de (-3)² + 4² = 25.",
                                difficulty: "intermedio",
                                type: "short"
                            },
                            {
                                question: "¿Qué efecto geométrico produce en un vector multiplicarlo por el escalar k = -2?",
                                options: [
                                    "Duplica su tamaño y mantiene su sentido original",
                                    "Reduce su longitud a la mitad y cambia a sentido opuesto",
                                    "Duplica su longitud y gira su sentido a la dirección opuesta (180°)",
                                    "Rota el vector 90° hacia la derecha manteniendo su tamaño"
                                ],
                                correctAnswer: 2,
                                hint: "El valor absoluto del escalar (|2|) duplica la longitud. El signo negativo invierte el sentido.",
                                feedbackCorrect: "¡Correcto! Multiplicar por -2 duplica la longitud del vector y, debido al signo negativo, invierte su sentido a 180°.",
                                feedbackIncorrect: "Incorrecto. El número 2 duplica su tamaño y el signo menos cambia el sentido al opuesto.",
                                difficulty: "básico",
                                type: "multiple"
                            },
                            {
                                question: "Si multiplicamos cualquier vector v = (x, y) por el escalar k = 0, el resultado es:",
                                options: [
                                    "El mismo vector original v",
                                    "Un número escalar de valor cero",
                                    "El vector nulo (0, 0)",
                                    "Un vector con componentes infinitas"
                                ],
                                correctAnswer: 2,
                                hint: "Multiplica cada componente (x, y) por 0.",
                                feedbackCorrect: "¡Exacto! Cualquier vector multiplicado por cero colapsa en el origen, dando origen al vector nulo (0, 0).",
                                feedbackIncorrect: "Incorrecto. Multiplicar las componentes (x, y) por 0 da como resultado las componentes (0, 0), que representa el vector nulo.",
                                difficulty: "básico",
                                type: "multiple"
                            }
                        ],
                        summaryHtml: "En esta lección aprendimos que la multiplicación escalar altera la magnitud del vector proporcionalmente y puede cambiar su sentido si el escalar es negativo.",
                        videoPlaceholderText: "Video de Álgebra Lineal: Multiplicación por un escalar y sus propiedades visuales."
                    }
                ]
            },
            {
                title: "Unidad 2: Matrices y operaciones",
                lessons: [
                    {
                        id: "que-es-una-matriz",
                        title: "Lección 2.1: ¿Qué es una matriz?",
                        introduction: "Una matriz es un arreglo bidimensional de números ordenados en filas y columnas. Se usa para representar datos y sistemas complejos.",
                        explanationHtml: '<p>En matemáticas, una <strong>matriz</strong> es una tabla rectangular de números. Decimos que tiene dimensión <strong>m x n</strong>, donde <em>m</em> es el número de filas (horizontales) y <em>n</em> es el número de columnas (verticales).</p><p class="mt-3">Ejemplo de una matriz A de dimensión 2x3:</p><p class="mt-2 text-center font-mono font-bold text-primary text-base">A = [ [1, 2, 3], [4, 5, 6] ]</p>',
                        formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Representación General</p><p class="text-base font-mono font-extrabold text-primary">A_{m \\times n} = [a_{i,j}]</p><p class="text-xs text-slate-500">Donde i indica la fila y j la columna de cada elemento de la matriz.</p></div>',
                        svgGraphic: '<svg viewBox="0 0 200 100" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="100" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" /><!-- Brackets --><path d="M 30 15 L 15 15 L 15 85 L 30 85" fill="none" stroke="#1e3a8a" stroke-width="3" /><path d="M 170 15 L 185 15 L 185 85 L 170 85" fill="none" stroke="#1e3a8a" stroke-width="3" /><!-- Matrix Elements --><text x="40" y="45" font-size="16" font-family="sans-serif" font-weight="bold" fill="#1e293b">a11</text><text x="100" y="45" font-size="16" font-family="sans-serif" font-weight="bold" fill="#1e293b">a12</text><text x="150" y="45" font-size="16" font-family="sans-serif" font-weight="bold" fill="#1e293b">a13</text><text x="40" y="75" font-size="16" font-family="sans-serif" font-weight="bold" fill="#1e293b">a21</text><text x="100" y="75" font-size="16" font-family="sans-serif" font-weight="bold" fill="#1e293b">a22</text><text x="150" y="75" font-size="16" font-family="sans-serif" font-weight="bold" fill="#1e293b">a23</text></svg>',
                        svgDescription: "Representación visual de una matriz A de dimensión 2x3 con sus respectivos índices de fila y columna.",
                        workedExampleHtml: '<p><strong>Problema:</strong> Identifica el tamaño de la matriz y el elemento a21 en: B = [ [3, 5], [-1, 8], [0, 4] ].</p><p class="mt-2">Tiene 3 filas y 2 columnas, por lo que su dimensión es <strong>3x2</strong>. El elemento a21 está en la fila 2, columna 1, el cual es <strong>-1</strong>.</p>',
                        commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Confundir Filas con Columnas:</strong> Recuerda siempre mencionar primero las filas (horizontal) y luego las columnas (vertical).</li></ul>',
                        exercises: [
                            {
                                question: "¿Cuántas filas tiene una matriz de tamaño 4x3?",
                                correctAnswer: "4",
                                hint: "La dimensión se expresa como filas x columnas.",
                                feedbackCorrect: "¡Muy bien! Tiene 4 filas.",
                                feedbackIncorrect: "Recuerda que la dimensión se escribe como fila x columna. El primer número es el número de filas.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si C = [ [9, 2], [5, -3] ], ¿cuál es el valor del elemento c22?",
                                correctAnswer: "-3",
                                hint: "Busca la fila 2 and la columna 2.",
                                feedbackCorrect: "¡Correcto! El valor es -3.",
                                feedbackIncorrect: "El elemento c22 se ubica en la segunda fila, segunda columna.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si una matriz tiene 10 elementos en total y tiene 5 filas, ¿cuántas columnas debe tener?",
                                correctAnswer: "2",
                                hint: "Multiplica filas por columnas para obtener los elementos totales.",
                                feedbackCorrect: "¡Excelente! 5 filas * 2 columnas = 10 elementos.",
                                feedbackIncorrect: "Divide el número total de elementos (10) entre el número de filas (5).",
                                difficulty: "intermedio",
                                type: "short"
                            },
                            {
                                question: "¿Cómo se le llama a una matriz que tiene el mismo número de filas y columnas?",
                                options: [
                                    "Matriz rectangular",
                                    "Matriz identidad",
                                    "Matriz cuadrada",
                                    "Matriz nula"
                                ],
                                correctAnswer: 2,
                                hint: "Al tener lados iguales se asemeja a un cuadrado geométrico.",
                                feedbackCorrect: "¡Exacto! Una matriz con igual número de filas y columnas es una matriz cuadrada.",
                                feedbackIncorrect: "Incorrecto. Se llama matriz cuadrada porque su disposición forma un cuadrado.",
                                difficulty: "básico",
                                type: "multiple"
                            },
                            {
                                question: "Si una matriz tiene dimensión 1x5, se le conoce comúnmente como:",
                                options: [
                                    "Matriz columna",
                                    "Matriz fila o vector fila",
                                    "Matriz transpuesta",
                                    "Matriz diagonal"
                                ],
                                correctAnswer: 1,
                                hint: "Tiene una única fila y múltiples columnas.",
                                feedbackCorrect: "¡Correcto! Una matriz de 1xn es un vector fila o matriz fila.",
                                feedbackIncorrect: "Incorrecto. Al tener una única fila, es una matriz fila.",
                                difficulty: "básico",
                                type: "multiple"
                            }
                        ],
                        summaryHtml: "Una matriz es un arreglo rectangular de m filas y n columnas. Su dimensión se indica como m x n y cada elemento se denota por su posición a(i,j).",
                        videoPlaceholderText: "Video de Álgebra Lineal: Introducción a las matrices y dimensiones."
                    },
                    {
                        id: "suma-resta-matrices",
                        title: "Lección 2.2: Suma y resta de matrices",
                        introduction: "La suma y resta de matrices requiere que tengan la misma dimensión. Se realiza elemento a elemento.",
                        explanationHtml: '<p>Para poder sumar o restar dos matrices, es un **requisito indispensable** que tengan exactamente la misma dimensión. Si tienen dimensiones distintas, la operación **no está definida**.</p><p class="mt-3">La suma se realiza sumando los elementos correspondientes que ocupan la misma posición:</p><p class="mt-2 text-center font-mono font-bold text-primary text-base">C_{ij} = A_{ij} + B_{ij}</p>',
                        formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Operación Matricial</p><p class="text-base font-mono font-extrabold text-primary">A + B = [a_{i,j} + b_{i,j}]</p><p class="text-xs text-slate-500">Se opera cada posición por separado y de forma independiente.</p></div>',
                        svgGraphic: '<svg viewBox="0 0 200 80" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="80" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" /><text x="15" y="45" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1e293b">[A] 2x2</text><text x="75" y="45" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1e293b">+</text><text x="95" y="45" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1e293b">[B] 2x2</text><text x="150" y="45" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1e293b">=</text><text x="170" y="45" font-size="12" font-family="sans-serif" font-weight="bold" fill="#2563eb">[C] 2x2</text></svg>',
                        svgDescription: "Suma de matrices. Únicamente se pueden operar matrices de la misma dimensión, dando como resultado otra matriz de igual dimensión.",
                        workedExampleHtml: '<p><strong>Ejemplo:</strong> Suma [ [1, 2], [3, 4] ] y [ [5, 6], [7, 8] ]. <br>El resultado es [ [1+5, 2+6], [3+7, 4+8] ] = <strong>[ [6, 8], [10, 12] ]</strong>.</p>',
                        commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Intentar sumar dimensiones distintas:</strong> Un error común en exámenes es intentar sumar una matriz de 2x3 con una de 3x2. ¡Es imposible!</li></ul>',
                        exercises: [
                            {
                                question: "Si sumamos A de 3x4 y B de 3x4, ¿cuál es la dimensión de la matriz resultante?",
                                correctAnswer: "3x4",
                                hint: "La dimensión de la matriz suma es idéntica a la de las matrices originales.",
                                feedbackCorrect: "¡Correcto! La dimensión se mantiene igual: 3x4.",
                                feedbackIncorrect: "Recuerda que la suma no altera las dimensiones de las matrices.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si A = [ [2] ] y B = [ [-5] ], ¿cuál es el único elemento de A + B?",
                                correctAnswer: "-3",
                                hint: "Suma los elementos correspondientes: 2 + (-5).",
                                feedbackCorrect: "¡Muy bien! 2 + (-5) = -3.",
                                feedbackIncorrect: "Opera la suma respetando las leyes de signos: 2 - 5.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si C = A - B, donde a11 = 10 y b11 = -3, ¿cuál es el elemento c11?",
                                correctAnswer: "13",
                                hint: "Resta los elementos respetando signos: 10 - (-3).",
                                feedbackCorrect: "¡Excelente! Menos por menos da más: 10 - (-3) = 13.",
                                feedbackIncorrect: "Ten cuidado: 10 - (-3) es equivalente a 10 + 3.",
                                difficulty: "intermedio",
                                type: "short"
                            },
                            {
                                question: "¿Es posible realizar la suma de una matriz columna de 3x1 con una matriz fila de 1x3?",
                                options: [
                                    "Sí, sumando de forma cruzada",
                                    "No, porque tienen distintas dimensiones y la suma no está definida",
                                    "Sí, transponiendo ambas primero",
                                    "Sólo si todos los elementos son positivos"
                                ],
                                correctAnswer: 1,
                                hint: "Verifica si las dimensiones 3x1 y 1x3 son idénticas.",
                                feedbackCorrect: "¡Correcto! No se pueden sumar ya que 3x1 no es igual a 1x3.",
                                feedbackIncorrect: "Incorrecto. Al no tener la misma dimensión, la suma matricial es imposible y no está definida.",
                                difficulty: "básico",
                                type: "multiple"
                            },
                            {
                                question: "La resta matricial A - B cumple con la propiedad conmutativa (es decir, A - B = B - A):",
                                options: [
                                    "Sí, siempre",
                                    "No, al igual que en los números reales el orden altera el signo resultante",
                                    "Sí, pero sólo para matrices cuadradas",
                                    "Sí, si todos sus elementos son ceros"
                                ],
                                correctAnswer: 1,
                                hint: "Piensa si en los números reales 5 - 3 es igual a 3 - 5.",
                                feedbackCorrect: "¡Excelente! La resta no es conmutativa. A - B da como resultado la matriz opuesta a B - A.",
                                feedbackIncorrect: "Incorrecto. Al igual que en aritmética básica, restar altera los signos si se cambia el orden del minuendo y sustraendo.",
                                difficulty: "intermedio",
                                type: "multiple"
                            }
                        ],
                        summaryHtml: "Para sumar o restar matrices deben tener igual dimensión. La operación se hace componente por componente.",
                        videoPlaceholderText: "Video de Álgebra Lineal: Suma y resta de matrices con ejemplos reales."
                    },
                    {
                        id: "multiplicacion-matrices",
                        title: "Lección 2.3: Multiplicación de matrices",
                        introduction: "La multiplicación de matrices es una operación de filas por columnas. Conoce el método y sus restricciones.",
                        explanationHtml: '<p>La multiplicación de dos matrices **A** y **B** es posible **únicamente** si el número de columnas de A es igual al número de filas de B.</p><p class="mt-3">Si multiplicamos A de dimensión <em>m x n</em> por B de dimensión <em>n x p</em>, la matriz resultante C tendrá dimensiones <strong>m x p</strong>.</p><p class="mt-3">El elemento Cij se obtiene multiplicando la fila <em>i</em> de A por la columna <em>j</em> de B, sumando los productos parciales.</p>',
                        formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Multiplicación de Matrices</p><p class="text-base font-mono font-extrabold text-primary">C_{i,j} = \\sum_{k=1}^n a_{i,k} \\cdot b_{k,j}</p><p class="text-xs text-slate-500">Se realiza multiplicando término a término fila por columna.</p></div>',
                        svgGraphic: '<svg viewBox="0 0 200 80" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="80" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" /><text x="15" y="45" font-size="11" font-family="sans-serif" font-weight="bold" fill="#1e293b">[A] 2x3</text><text x="75" y="45" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1e293b">×</text><text x="95" y="45" font-size="11" font-family="sans-serif" font-weight="bold" fill="#1e293b">[B] 3x5</text><text x="150" y="45" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1e293b">=</text><text x="170" y="45" font-size="11" font-family="sans-serif" font-weight="bold" fill="#2563eb">[C] 2x5</text></svg>',
                        svgDescription: "Multiplicación de matrices. Las dimensiones internas de ambas matrices deben coincidir (3 = 3), resultando en las dimensiones externas (2x5).",
                        workedExampleHtml: '<p><strong>Ejemplo:</strong> Multiplica [ [1, 2] ] (1x2) por [ [3], [4] ] (2x1). <br>El elemento único es 1*3 + 2*4 = 3 + 8 = 11. La matriz resultante es <strong>[ [11] ]</strong> de 1x1.</p>',
                        commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Multiplicar elemento a elemento:</strong> Es el error más grave de principiantes. Multiplicar matrices no es multiplicar sus elementos en la misma posición, sino filas por columnas.</li></ul>',
                        exercises: [
                            {
                                question: "Si multiplicamos A de dimensión 2x3 por B de dimensión 3x4, ¿cuál es la dimensión de la matriz resultante?",
                                correctAnswer: "2x4",
                                hint: "La matriz resultante tiene las filas de la primera y las columnas de la segunda.",
                                feedbackCorrect: "¡Excelente! La matriz resultante C es de 2x4.",
                                feedbackIncorrect: "Incorrecto. Se toman las filas de A (2) y las columnas de B (4) para obtener la dimensión final.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si multiplicamos una matriz de 5x2 por otra de 2x1, ¿cuántos elementos tendrá en total la matriz resultante?",
                                correctAnswer: "5",
                                hint: "Calcula la dimensión resultante (5x1) y multiplica filas por columnas.",
                                feedbackCorrect: "¡Muy bien! El resultado es una matriz columna de 5x1, con 5 elementos.",
                                feedbackIncorrect: "Primero determina las dimensiones finales (5x1). Una matriz de 5x1 contiene exactamente 5 elementos.",
                                difficulty: "intermedio",
                                type: "short"
                            },
                            {
                                question: "Si A = [ [1, 3] ] y B = [ [2], [4] ], ¿cuál es el valor del único elemento en el resultado A × B?",
                                correctAnswer: "14",
                                hint: "Calcula 1*2 + 3*4.",
                                feedbackCorrect: "¡Perfecto! 1*2 + 3*4 = 2 + 12 = 14.",
                                feedbackIncorrect: "Revisa la operación de filas por columnas: 1*2 = 2, 3*4 = 12. Suma ambos resultados.",
                                difficulty: "intermedio",
                                type: "short"
                            },
                            {
                                question: "La multiplicación de matrices cumple con la propiedad conmutativa (es decir, A × B = B × A):",
                                options: [
                                    "Sí, siempre",
                                    "No, en general la multiplicación matricial NO es conmutativa",
                                    "Sí, pero sólo si ambas son cuadradas",
                                    "Sí, si una de ellas es la matriz nula"
                                ],
                                correctAnswer: 1,
                                hint: "Piensa si cambiar el orden de las matrices puede alterar la factibilidad de la multiplicación o su tamaño.",
                                feedbackCorrect: "¡Excelente! La multiplicación matricial no es conmutativa. De hecho, a menudo A x B es factible pero B x A ni siquiera se puede calcular.",
                                feedbackIncorrect: "Incorrecto. El orden en la multiplicación matricial es sumamente estricto y en general A × B ≠ B × A.",
                                difficulty: "básico",
                                type: "multiple"
                            },
                            {
                                question: "¿Qué requisito deben cumplir dos matrices A y B para que se pueda calcular la multiplicación A × B?",
                                options: [
                                    "Tener exactamente la misma dimensión",
                                    "Que el número de columnas de A sea igual al número de filas de B",
                                    "Que ambas sean matrices cuadradas del mismo tamaño",
                                    "Que todos los elementos de ambas matrices sean enteros y positivos"
                                ],
                                correctAnswer: 1,
                                hint: "Revisa la dimensión interna de los factores en la multiplicación.",
                                feedbackCorrect: "¡Correcto! El número de columnas del primer factor (A) debe coincidir estrictamente con el número de filas del segundo factor (B).",
                                feedbackIncorrect: "Incorrecto. Revisa las reglas de multiplicación matricial: columnas de la primera igual a filas de la segunda.",
                                difficulty: "básico",
                                type: "multiple"
                            }
                        ],
                        summaryHtml: "La multiplicación de matrices opera filas por columnas. Solo es factible si las columnas de A igualan las filas de B, dando una matriz C de tamaño filas de A x columnas de B.",
                        videoPlaceholderText: "Video de Álgebra Lineal: Multiplicación de matrices paso a paso."
                    }
                ]
            },
            {
                title: "Unidad 3: Sistemas de ecuaciones lineales",
                lessons: [
                    {
                        id: "sistemas-lineales-representacion",
                        title: "Lección 3.1: Sistemas lineales y representación matricial",
                        introduction: "Aprende cómo plantear sistemas de ecuaciones de forma matricial usando la elegante forma A * X = B.",
                        explanationHtml: '<p>Un **sistema de ecuaciones lineales** puede expresarse de forma matricial compacta. Esto simplifica enormemente su resolución y análisis.</p><p class="mt-3">El sistema de ecuaciones:</p><p class="font-mono text-center my-2">2x + 3y = 8 <br> 4x - y = 2</p><p class="mt-3">Se representa en forma matricial como <strong>AX = B</strong>, donde A es la matriz de coeficientes, X es el vector de variables, y B es el de constantes:</p>',
                        formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Forma Matricial Compacta</p><p class="text-base font-mono font-extrabold text-primary">A \\cdot X = B</p><p class="text-xs text-slate-500">Donde A es la matriz de coeficientes, X es el vector de incógnitas y B el de resultados.</p></div>',
                        svgGraphic: '<svg viewBox="0 0 200 80" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="80" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" /><text x="25" y="45" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1e293b">[A]</text><text x="55" y="45" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1e293b">·</text><text x="75" y="45" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1e293b">[X]</text><text x="110" y="45" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1e293b">=</text><text x="135" y="45" font-size="12" font-family="sans-serif" font-weight="bold" fill="#2563eb">[B]</text></svg>',
                        svgDescription: "Forma matricial compacta AX = B. Une la matriz de coeficientes A y las variables X con el vector columna B.",
                        workedExampleHtml: '<p><strong>Ejemplo:</strong> Representa matricialmente: <br>x + y = 3 <br>2x + 5y = 12. <br>La matriz A es [ [1, 1], [2, 5] ], X es [ [x], [y] ] y B es [ [3], [12] ].</p>',
                        commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar ordenar las variables:</strong> Si una ecuación tiene variables desordenadas (ej. 3y + 2x = 8), debes ordenarla primero respecto a X e Y antes de escribir la matriz de coeficientes.</li></ul>',
                        exercises: [
                            {
                                question: "Si el sistema es: 5x = 10, ¿cuál es el coeficiente a11 en la matriz de coeficientes A?",
                                correctAnswer: "5",
                                hint: "El coeficiente que acompaña a la variable x en la primera ecuación.",
                                feedbackCorrect: "¡Muy bien! El coeficiente es 5.",
                                feedbackIncorrect: "Revisa el coeficiente que acompaña a la única variable x.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si representamos: 2x - 3y = 7, ¿cuál es el valor del elemento a12 en la matriz A?",
                                correctAnswer: "-3",
                                hint: "Es el coeficiente de la segunda variable (y) en la primera fila. Recuerda el signo.",
                                feedbackCorrect: "¡Correcto! El coeficiente es -3.",
                                feedbackIncorrect: "Ten cuidado con los signos: el coeficiente de y es -3.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "En AX = B, si la matriz A es de dimensión 3x3, ¿de qué tamaño debe ser el vector columna de incógnitas X?",
                                correctAnswer: "3x1",
                                hint: "Para poder multiplicarse, el número de filas de X debe coincidir con las columnas de A (3).",
                                feedbackCorrect: "¡Excelente! X debe ser un vector columna de 3x1.",
                                feedbackIncorrect: "Para cumplir la regla de multiplicación matricial, X debe ser de tamaño 3x1.",
                                difficulty: "intermedio",
                                type: "short"
                            },
                            {
                                question: "¿Qué elementos componen la llamada Matriz Ampliada (o aumentada) de un sistema de ecuaciones?",
                                options: [
                                    "Las incógnitas unidas a las constantes",
                                    "La matriz de coeficientes A con el vector columna B como columna adicional",
                                    "La suma de la matriz A y la matriz B",
                                    "Los determinantes de las submatrices cuadradas"
                                ],
                                correctAnswer: 1,
                                hint: "Es la matriz que resume toda la información numérica del sistema de forma consolidada.",
                                feedbackCorrect: "¡Perfecto! La matriz aumentada coloca el vector B al lado derecho de la matriz A, separado comúnmente por una línea vertical.",
                                feedbackIncorrect: "Incorrecto. Se construye acoplando el vector B al lado derecho de la matriz A.",
                                difficulty: "básico",
                                type: "multiple"
                            },
                            {
                                question: "Si un sistema de ecuaciones lineales tiene más variables que ecuaciones, se clasifica como un sistema:",
                                options: [
                                    "Sobredeterminado",
                                    "Subdeterminado",
                                    "Incompatible",
                                    "Homogéneo"
                                ],
                                correctAnswer: 1,
                                hint: "Tiene pocas restricciones y típicamente poseerá infinitas soluciones.",
                                fillbackCorrect: "¡Brillante! Se conoce como sistema subdeterminado.",
                                feedbackIncorrect: "Incorrecto. Al tener menos ecuaciones que incógnitas, es un sistema subdeterminado.",
                                difficulty: "intermedio",
                                type: "multiple"
                            }
                        ],
                        summaryHtml: "Un sistema de ecuaciones se puede representar de forma matricial compacta como AX = B, o resumida como una matriz aumentada [A|B].",
                        videoPlaceholderText: "Video de Álgebra Lineal: Representación matricial de sistemas de ecuaciones."
                    },
                    {
                        id: "eliminacion-gauss",
                        title: "Lección 3.2: Método de eliminación de Gauss",
                        introduction: "Aprende el poderoso algoritmo de Gauss para resolver sistemas lineales transformando matrices.",
                        explanationHtml: '<p>El <strong>Método de Eliminación de Gauss</strong> consiste en aplicar operaciones elementales por fila sobre la matriz aumentada para transformarla en una **matriz triangular superior**.</p><p class="mt-3">Las operaciones válidas sobre las filas son:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li>Intercambiar dos filas entre sí.</li><li>Multiplicar una fila por un número real distinto de cero.</li><li>Sumar a una fila el múltiplo de otra fila.</li></ul><p class="mt-3">Una vez triangularizada la matriz, resolvemos las incógnitas de abajo hacia arriba mediante sustitución hacia atrás.</p>',
                        formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Eliminación de Gauss</p><p class="text-base font-mono font-extrabold text-primary">[A | B] \\rightarrow [U | Y]</p><p class="text-xs text-slate-500">Donde U representa una matriz triangular superior facilitando el despeje secuencial.</p></div>',
                        svgGraphic: '<svg viewBox="0 0 200 80" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="80" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" /><path d="M 25 15 L 10 15 L 10 65 L 25 65" fill="none" stroke="#64748b" stroke-width="2" /><path d="M 175 15 L 190 15 L 190 65 L 175 65" fill="none" stroke="#64748b" stroke-width="2" /><!-- Matrix Elements (Triangular Superior) --><text x="35" y="35" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1e293b">1</text><text x="75" y="35" font-size="12" font-family="sans-serif" fill="#64748b">3</text><text x="115" y="35" font-size="12" font-family="sans-serif" fill="#64748b">5</text><text x="35" y="55" font-size="12" font-family="sans-serif" font-weight="bold" fill="#ef4444">0</text><text x="75" y="55" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1e293b">1</text><text x="115" y="55" font-size="12" font-family="sans-serif" fill="#64748b">2</text><line x1="140" y1="15" x2="140" y2="65" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="2,2" /><text x="155" y="35" font-size="12" font-family="sans-serif" fill="#10b981" font-weight="bold">6</text><text x="155" y="55" font-size="12" font-family="sans-serif" fill="#10b981" font-weight="bold">4</text></svg>',
                        svgDescription: "Eliminación de Gauss. Se busca obtener ceros por debajo de la diagonal principal para facilitar la resolución.",
                        workedExampleHtml: '<p><strong>Ejemplo:</strong> Resuelve [ [1, 1 | 3], [0, 2 | 4] ]. <br>De la segunda fila: 2y = 4 => <strong>y = 2</strong>. <br>Sustituyendo en la primera: x + y = 3 => x + 2 = 3 => <strong>x = 1</strong>.</p>',
                        commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Olvidar aplicar operaciones al vector B:</strong> Al modificar una fila, debes aplicar la misma operación aritmética a la constante del lado derecho. ¡Si lo olvidas, dañarás el resultado!</li></ul>',
                        exercises: [
                            {
                                question: "Si en la fila F2 = (2, 4, 8) restamos 2 veces la fila F1 = (1, 1, 3), ¿cuál es el nuevo primer elemento de la fila F2?",
                                correctAnswer: "0",
                                hint: "Calcula 2 - 2*(1). El objetivo de Gauss es precisamente crear ceros.",
                                feedbackCorrect: "¡Muy bien! Se ha eliminado el primer elemento, creando el cero deseado.",
                                feedbackIncorrect: "Revisa la resta elemental: 2 - 2 * 1 = 0.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si la matriz aumentada triangular final es: [ [1, 2 | 5], [0, 1 | 2] ], ¿cuál es el valor final de la variable Y?",
                                correctAnswer: "2",
                                hint: "Observa la segunda fila: 0*x + 1*y = 2.",
                                feedbackCorrect: "¡Correcto! Directamente y = 2.",
                                feedbackIncorrect: "La última ecuación simplificada define de forma directa que 1y = 2.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Con la matriz anterior, calcula el valor final de la variable X mediante sustitución hacia atrás.",
                                correctAnswer: "1",
                                hint: "Sustituye y = 2 en la primera ecuación: x + 2*(2) = 5.",
                                feedbackCorrect: "¡Excelente! x + 4 = 5 => x = 1.",
                                feedbackIncorrect: "Sustituye y = 2: x + 2(2) = 5 => x + 4 = 5 => x = 1.",
                                difficulty: "intermedio",
                                type: "short"
                            },
                            {
                                question: "¿Cuál de las siguientes NO se clasifica como una operación fila elemental permitida en el método de Gauss?",
                                options: [
                                    "Intercambiar el orden de dos filas",
                                    "Sumar una constante diferente de cero a cada elemento de la fila",
                                    "Multiplicar todos los elementos de una fila por una constante no nula",
                                    "Sumar a una fila el múltiplo escalar de otra fila"
                                ],
                                correctAnswer: 1,
                                hint: "Las operaciones deben preservar las soluciones de las ecuaciones lineales. Pensar si sumar una constante a una ecuación la mantiene equivalente.",
                                feedbackCorrect: "¡Correcto! Sumar una constante a una fila no es una operación elemental válida, ya que altera por completo la equivalencia del sistema.",
                                feedbackIncorrect: "Incorrecto. Recuerda que no está permitido sumar un número suelto a los elementos de una fila. Las demás sí son operaciones elementales.",
                                difficulty: "básico",
                                type: "multiple"
                            },
                            {
                                question: "Si durante la eliminación de Gauss una fila de coeficientes se vuelve completamente ceros, pero el elemento constante de B correspondiente es diferente de cero (ej. 0 = 5), el sistema se clasifica como:",
                                options: [
                                    "Sistema con infinitas soluciones",
                                    "Sistema incompatible (sin solución)",
                                    "Sistema compatible determinado",
                                    "Sistema de rango nulo"
                                ],
                                correctAnswer: 1,
                                hint: "La expresión 0 = 5 representa una contradicción matemática insalvable.",
                                feedbackCorrect: "¡Exacto! El sistema no posee ninguna combinación de soluciones y se clasifica como incompatible.",
                                feedbackIncorrect: "Incorrecto. Obtener 0 = 5 es una contradicción absurda, lo que significa que el sistema no tiene solución.",
                                difficulty: "intermedio",
                                type: "multiple"
                            }
                        ],
                        summaryHtml: "El algoritmo de eliminación de Gauss simplifica matrices aumentadas aplicando operaciones elementales sobre filas hasta obtener una forma triangular superior.",
                        videoPlaceholderText: "Video de Álgebra Lineal: Algoritmo de Gauss y operaciones elementales."
                    },
                    {
                        id: "interpretacion-geometrica-sistemas",
                        title: "Lección 3.3: Interpretación geométrica de los sistemas",
                        introduction: "Descubre la geometría detrás de las ecuaciones. Rectas en el plano e intersecciones de soluciones.",
                        explanationHtml: '<p>Cada ecuación lineal en un sistema de dos variables representa una **recta en el plano bidimensional**.</p><p class="mt-3">El conjunto de soluciones del sistema corresponde al **punto exacto de intersección** de las rectas:</p><ul class="list-disc pl-5 space-y-1.5 my-3"><li><strong>Una solución (Determinado):</strong> Las rectas se cruzan en un solo punto.</li><li><strong>Sin solución (Incompatible):</strong> Las rectas son paralelas y nunca se tocan.</li><li><strong>Infinitas soluciones (Indeterminado):</strong> Las rectas son coincidentes (la misma recta sobrepuesta).</li></ul>',
                        formulaBoxHtml: '<div class="space-y-1"><p class="text-[10px] font-extrabold uppercase text-slate-400">Clasificación Geométrica</p><p class="text-xs text-slate-600">Determinado = Secantes | Incompatible = Paralelas distantes | Indeterminado = Paralelas coincidentes.</p></div>',
                        svgGraphic: '<svg viewBox="-10 -10 220 220" class="w-full max-w-[280px]" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="200" height="200" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" /><line x1="0" y1="100" x2="200" y2="100" stroke="#94a3b8" stroke-width="1.5" /><line x1="100" y1="0" x2="100" y2="200" stroke="#94a3b8" stroke-width="1.5" /><!-- Recta 1: y = x (diagonal) --><line x1="20" y1="180" x2="180" y2="20" stroke="#2563eb" stroke-width="2.5" /><!-- Recta 2: y = -x + 200 (inversa) --><line x1="20" y1="20" x2="180" y2="180" stroke="#ef4444" stroke-width="2.5" /><!-- Point (100, 100) --><circle cx="100" cy="100" r="5" fill="#f59e0b" /><text x="110" y="95" font-size="10" font-family="sans-serif" fill="#f59e0b" font-weight="extrabold">Solución Única</text></svg>',
                        svgDescription: "Dos rectas secantes cruzándose en un único punto del plano, representando la solución única de un sistema compatible determinado.",
                        workedExampleHtml: '<p><strong>Ejemplo práctico:</strong> Las rectas y = x y y = -x + 4 se cruzan en el punto <strong>(2, 2)</strong>. Este punto es la única solución del sistema.</p>',
                        commonMistakesHtml: '<ul class="list-disc pl-5 space-y-2 text-red-950 bg-red-50/40 p-4 rounded-xl"><li><strong>Asumir que paralelas se cruzan en el infinito:</strong> En el plano real bidimensional de estudio, las rectas paralelas simplemente no tienen puntos en común, indicando ausencia absoluta de soluciones.</li></ul>',
                        exercises: [
                            {
                                question: "Si dos rectas son paralelas y distintas, ¿cuántas soluciones tiene el sistema de ecuaciones?",
                                correctAnswer: "0",
                                hint: "Las rectas paralelas nunca se intersectan.",
                                feedbackCorrect: "¡Correcto! Al no cruzarse nunca, no hay ningún punto en común, teniendo cero soluciones.",
                                feedbackIncorrect: "Recuerda que paralelas distantes nunca se cruzan en ningún punto.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si dos rectas se cruzan en el punto (3, 5), ¿cuál es el valor de la variable Y en la solución?",
                                correctAnswer: "5",
                                hint: "La solución del sistema se expresa en coordenadas cartesianas como (x, y).",
                                feedbackCorrect: "¡Muy bien! El valor de Y es 5.",
                                feedbackIncorrect: "En el par ordenado (3, 5), la coordenada vertical es Y = 5.",
                                difficulty: "básico",
                                type: "short"
                            },
                            {
                                question: "Si una ecuación es el doble exacto de la otra (ej. x+y=2 y 2x+2y=4), ¿cuántas soluciones tiene el sistema?",
                                correctAnswer: "infinitas",
                                hint: "Las rectas son coincidentes (es exactamente la misma recta). Escribe 'infinitas'.",
                                feedbackCorrect: "¡Excelente! Al ser la misma recta, todos sus puntos coinciden, teniendo infinitas soluciones.",
                                feedbackIncorrect: "Al ser coincidentes, todos los puntos de la línea son soluciones. Escribe 'infinitas'.",
                                difficulty: "intermedio",
                                type: "short"
                            },
                            {
                                question: "¿Qué representa gráficamente cada una de las ecuaciones en un sistema de dos variables?",
                                options: [
                                    "Una parábola o curva cuadrática",
                                    "Una línea recta en el plano cartesiano",
                                    "Un plano tridimensional",
                                    "Un círculo con centro en el origen"
                                ],
                                correctAnswer: 1,
                                hint: "Se llaman ecuaciones 'lineales' por una razón geométrica muy particular.",
                                feedbackCorrect: "¡Correcto! Cada ecuación lineal de dos variables define de forma exacta una recta en el plano de dos dimensiones.",
                                feedbackIncorrect: "Incorrecto. Al ser de grado uno (lineales), definen geométricamente líneas rectas en el plano cartesiano.",
                                difficulty: "básico",
                                type: "multiple"
                            },
                            {
                                question: "Si un sistema lineal tiene tres variables (x, y, z), ¿qué figura geométrica representa cada ecuación en el espacio tridimensional?",
                                options: [
                                    "Una recta en el espacio",
                                    "Un plano infinito",
                                    "Una esfera centrada",
                                    "Un cilindro recto"
                                ],
                                correctAnswer: 1,
                                hint: "Las ecuaciones lineales de tres dimensiones definen superficies planas.",
                                fillbackCorrect: "¡Brillante! En el espacio tridimensional R³, cada ecuación representa un plano bidimensional infinito.",
                                feedbackIncorrect: "Incorrecto. En 3D, una ecuación lineal define un plano tridimensional.",
                                difficulty: "intermedio",
                                type: "multiple"
                            }
                        ],
                        summaryHtml: "Los sistemas de ecuaciones representan rectas en el plano. Pueden cruzarse en un único punto (compatible determinado), ser paralelas (incompatible), o coincidir en toda su extensión (indeterminado).",
                        videoPlaceholderText: "Video de Álgebra Lineal: Geometría de los sistemas lineales y planos cartesianos."
                    }
                ]
            }
        ]
    }
};

// Sincronizar el contenido con la colección estática de cursos
if (window.STATIC_COURSES) {
    window.STATIC_COURSES.forEach(c => {
        if (window.ACADEMIC_CONTENT[c.slug]) {
            c.body_content = window.ACADEMIC_CONTENT[c.slug];
        }
    });
}
