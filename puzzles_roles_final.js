// puzzles.js
// Datos de todas las salas y acertijos

const ROOMS_DATA = {
  origen: {
    name: "Sala del Origen",
    subtitle: "Creación, primeros relatos y el misterio del inicio.",
    tagline: "“En el principio…” – Génesis, del caos al orden.",
    image: "sala-origen.png",
    audio: "origen-theme.mp3",
    puzzles: [
      {
        id: "OR-01",
        title: "Del caos al orden",
        difficulty: "Media",
        tags: "CREACIÓN · LÓGICA · BIBLIA",
        requiresBible: true,
        body:
"Mirando Génesis 1, cuenta cuántos días se dedican sobre todo a preparar espacios "
+ "(separar luz/tinieblas, ordenar aguas, sacar la tierra) "
+ "y cuántos a llenarlos (astros, animales, ser humano).\n\n"
+ "Código final = (días de preparar) × (días de llenar).",
        hint1:
"Piensa en los días 1, 2 y 3 como ordenar y separar; 4, 5 y 6 como llenar lo ya preparado.",
        hint2:
"Son 3 días de preparación y 3 de llenado. Multiplica 3 × 3.",
        solution:
"Días de preparación: 1, 2 y 3. Días de llenado: 4, 5 y 6.\n"
+ "Código final = 3 × 3 = 9."
      },
      {
        id: "OR-02",
        title: "La sangre que clama",
        difficulty: "Media–difícil",
        tags: "CAÍN Y ABEL · CRIPTOGRAFÍA",
        requiresBible: true,
        body:
"Busca en tu Biblia el versículo de Génesis donde Dios dice a Caín "
+ "que la sangre de su hermano clama desde la tierra.\n\n"
+ "Toma C = nº de capítulo y V = nº de versículo.\n\n"
+ "Aplica este cifrado a la palabra CAIN (sin tilde):\n"
+ "1) desplaza cada letra C posiciones hacia adelante en el alfabeto;\n"
+ "2) al resultado, desplaza cada letra V posiciones hacia atrás.\n\n"
+ "Escribe la palabra final en mayúsculas.",
        hint1:
"El versículo está en Génesis 4, alrededor de los versículos 9–11.",
        hint2:
"Usa C = 4 y V = 10. Lo importante es seguir las reglas del desplazamiento.",
        solution:
"El versículo es Génesis 4,10 → C = 4 y V = 10.\n"
+ "Aplicando el cifrado se obtiene una palabra codificada; "
+ "lo importante es seguir bien los pasos del cifrado."
      },
    {
      id: "OR-03",
      title: "Números del jardín",
      difficulty: "Fácil–media",
      tags: "CREACIÓN · MATEMÁTICAS",
      requiresBible: false,
      body:
"En el relato de la creación y del jardín del Edén aparecen varios números simbólicos:\n\n"
+ "• 6 días de creación (D).\n"
+ "• 1 día de descanso (S).\n"
+ "• 2 árboles especiales en el centro del jardín (A).\n"
+ "• 4 ríos que se dividen desde uno solo (R).\n\n"
+ "Define el código como:\n"
+ "CÓDIGO = (A + R) × D − S.\n\n"
+ "Calcula el valor numérico del código.",
      hint1:
"Primero suma A + R, luego multiplica por D y al final resta S.",
      hint2:
"A = 2, R = 4 → A + R = 6.\n"
+ "D = 6, S = 1.\n"
+ "CÓDIGO = 6 × 6 − 1.",
      solution:
"A = 2, R = 4, D = 6, S = 1.\n"
+ "A + R = 2 + 4 = 6.\n"
+ "6 × 6 = 36.\n"
+ "36 − 1 = 35.\n\n"
+ "Código final: 35."
    },
    {
      id: "OR-04",
      title: "Cuarenta días de agua",
      difficulty: "Fácil–media",
      tags: "DILUVIO · MATEMÁTICAS · SIMBOLISMO",
      requiresBible: false,
      body:
"Imagina el diluvio como un modelo numérico:\n\n"
+ "• Llueve 40 días y 40 noches.\n"
+ "• Cada día de lluvia el nivel del agua sube 3 unidades.\n"
+ "• Cada noche de lluvia sube 2 unidades más.\n\n"
+ "Supón que el nivel inicial es 0.\n\n"
+ "1) ¿Cuánto sube el nivel en un solo ciclo día+noche?\n"
+ "2) ¿Cuánto sube en total al cabo de los 40 ciclos?\n\n"
+ "Código final = subida total de nivel.",
      hint1:
"En un ciclo completo día+noche sube 3 + 2 unidades.",
      hint2:
"Cada ciclo sube 5 unidades. Hay 40 ciclos.\n"
+ "Multiplica 40 × 5.",
      solution:
"Un ciclo día+noche: 3 + 2 = 5 unidades.\n"
+ "En 40 días y 40 noches:\n"
+ "40 × 5 = 200 unidades.\n\n"
+ "Código final: 200."
    },
    {
      id: "OR-05",
      title: "Babel en expansión",
      difficulty: "Media",
      tags: "BABEL · MATEMÁTICAS · PATRONES",
      requiresBible: false,
      body:
"Imagina la construcción de la torre de Babel como grupos de trabajadores según su lengua.\n\n"
+ "Al inicio (día 0) hay 3 grupos.\n"
+ "Cada día, justo antes de empezar a construir, se forman 2 nuevos grupos con otra lengua.\n"
+ "Es decir:\n"
+ "• Día 0: 3 grupos.\n"
+ "• Día 1: 5 grupos.\n"
+ "• Día 2: 7 grupos...\n\n"
+ "1) ¿Cuántos grupos habrá el día 6?\n"
+ "2) ¿Cuántos grupos distintos se habrán formado en total desde el día 0 hasta el día 6 (ambos incluidos)?\n\n"
+ "Código final = (grupos del día 6) + (total acumulado).",
      hint1:
"Cada día aumentan 2 grupos, así que la secuencia es aritmética.",
      hint2:
"Día 0: 3, día 1: 5, día 2: 7...\n"
+ "Fórmula: grupos_día = 3 + 2×día.\n"
+ "Para el total, suma todos los términos de día 0 a día 6.",
      solution:
"Grupos el día n: 3 + 2n.\n"
+ "Día 6: 3 + 2×6 = 3 + 12 = 15 grupos.\n\n"
+ "Total acumulado desde día 0 a día 6:\n"
+ "Términos: 3, 5, 7, 9, 11, 13, 15.\n"
+ "Suma = (nº de términos) × (primer + último) ÷ 2.\n"
+ "Hay 7 términos: (3 + 15) = 18.\n"
+ "Total = 7 × 18 ÷ 2 = 7 × 9 = 63.\n\n"
+ "Código final = 15 + 63 = 78."
    },
    {
      id: "OR-06",
      title: "Ciclo de emociones en el Edén",
      difficulty: "Media",
      tags: "EDÉN · PSICOLOGÍA · SIMBOLISMO",
      requiresBible: false,
      body:
"Después de la desobediencia en el jardín, aparecen varias emociones: confianza rota,\n"
+ "miedo, vergüenza, pero también una primera esperanza.\n\n"
+ "Asigna estos valores simbólicos:\n"
+ "• Confianza = +3\n"
+ "• Miedo = −2\n"
+ "• Vergüenza = −1\n"
+ "• Esperanza = +2\n\n"
+ "Imagina este recorrido emocional simplificado:\n"
+ "1) Confianza (antes de la caída).\n"
+ "2) Miedo.\n"
+ "3) Vergüenza.\n"
+ "4) Un inicio de esperanza (la promesa de que no será el final).\n\n"
+ "Código final = suma de todos los valores en orden.",
      hint1:
"Convierte cada palabra en su número y suma.",
      hint2:
"Confianza (+3), miedo (−2), vergüenza (−1), esperanza (+2).\n"
+ "Suma 3 − 2 − 1 + 2.",
      solution:
"Suma:\n"
+ "3 − 2 − 1 + 2 = 3 − 3 + 2 = 2.\n\n"
+ "Código final: 2."
    },
    {
      id: "OR-07",
      title: "Genealogía mínima",
      difficulty: "Media–difícil",
      tags: "GENEALOGÍAS · MATEMÁTICAS · LÓGICA",
      requiresBible: false,
      body:
"Imagina una genealogía muy simplificada a partir de Adán, donde cada generación tiene\n"
+ "exactamente 3 hijos y solo uno de ellos continúa la línea principal:\n\n"
+ "• Generación 0: Adán.\n"
+ "• Generación 1: 3 hijos.\n"
+ "• Generación 2: cada uno de esos 3 tiene 3 hijos (9 en total), pero solo 3 siguen la línea.\n"
+ "• Generación 3: cada uno de esos 3 tiene 3 hijos, etc.\n\n"
+ "Supón que la línea principal se extiende hasta la generación 4.\n\n"
+ "1) ¿Cuántos descendientes totales hay en la generación 4 (contando todos, no solo la línea principal)?\n"
+ "2) ¿Cuántos forman parte de la línea principal en esa generación?\n\n"
+ "Código final = (descendientes totales generación 4) − (descendientes de la línea principal en generación 4).",
      hint1:
"Cada generación multiplica por 3 el número de personas de la generación anterior.",
      hint2:
"Generación 1: 3. Gen 2: 3×3 = 9. Gen 3: 9×3 = 27. Gen 4: 27×3 = 81.\n"
+ "En la línea principal siempre hay 1 persona por generación.",
      solution:
"Nº total en generación 4:\n"
+ "Gen 1: 3\n"
+ "Gen 2: 3×3 = 9\n"
+ "Gen 3: 9×3 = 27\n"
+ "Gen 4: 27×3 = 81\n\n"
+ "En la línea principal hay 1 persona por generación, así que en la generación 4\n"
+ "hay 1 descendiente principal.\n\n"
+ "Código final = 81 − 1 = 80."
    },
    {
      id: "OR-08",
      title: "Dos hermanos y una elección",
      difficulty: "Media",
      tags: "CAÍN Y ABEL · PSICOLOGÍA · LÓGICA",
      requiresBible: true,
      body:
"Piensa en la historia de Caín y Abel como un dilema interior entre dos voces:\n"
+ "una que invita a ofrecer lo mejor y otra que se deja llevar por la envidia.\n\n"
+ "Asigna estos valores simbólicos a las decisiones de Caín:\n"
+ "• Ofrecer lo mejor a Dios = +4.\n"
+ "• Guardarse lo mejor y ofrecer lo justo = −3.\n"
+ "• Escuchar la advertencia de Dios = +2.\n"
+ "• Ignorarla y ceder a la envidia = −5.\n\n"
+ "Imagina este recorrido alternativo «ideal» que Caín podría haber seguido:\n"
+ "ofrecer lo mejor, escuchar la advertencia, mantenerse en paz.\n"
+ "(Considera mantenerse en paz como un +1 adicional).\n\n"
+ "Código ideal = suma de esos valores.\n"
+ "Código real = suponiendo que hace justo lo contrario en cada paso.\n\n"
+ "Código final = (código ideal) − (código real).",
      hint1:
"Primero calcula el código ideal: +4 (ofrecer lo mejor) +2 (escuchar) +1 (paz).",
      hint2:
"Código ideal = 4 + 2 + 1 = 7.\n"
+ "Código real: −3 (guardarse lo mejor) −5 (ceder a la envidia) y −1 (ruptura de la paz).\n"
+ "Suma y luego resta.",
      solution:
"Código ideal:\n"
+ "Ofrecer lo mejor (+4) + escuchar (+2) + paz (+1) = 7.\n\n"
+ "Código real (si hace lo contrario en cada paso):\n"
+ "Guardarse lo mejor (−3) + ignorar y envidia (−5) + ruptura de paz (−1) = −9.\n\n"
+ "Código final = 7 − (−9) = 7 + 9 = 16."
    },
    {
      id: "OR-09",
      title: "Luz y tinieblas",
      difficulty: "Media",
      tags: "CREACIÓN · FILOSOFÍA · LÓGICA",
      requiresBible: false,
      body:
"En el relato de la creación, la separación de la luz y las tinieblas marca un antes y un después.\n"
+ "Imagina que cada vez que aparece una «separación» fundamental sumamos 3 puntos,\n"
+ "y cada vez que aparece una «unión» (algo que se reúne o se llena) sumamos 2.\n\n"
+ "Considera este esquema simplificado de los primeros días:\n"
+ "• Día 1: separación luz/tinieblas → +3.\n"
+ "• Día 2: separación aguas de arriba/aguas de abajo → +3.\n"
+ "• Día 3: la tierra se reúne en un solo lugar y se llena de vegetación → +2.\n"
+ "• Día 4: los astros llenan el firmamento → +2.\n\n"
+ "Código de «separaciones» = suma de los +3.\n"
+ "Código de «llenado» = suma de los +2.\n\n"
+ "Código final = (código de separaciones) × (código de llenado).",
      hint1:
"Separa las líneas que tienen +3 de las que tienen +2 y suma por separado.",
      hint2:
"Separaciones: día 1 y día 2 → 3 + 3 = 6.\n"
+ "Llenado: día 3 y día 4 → 2 + 2 = 4.\n"
+ "Multiplica 6 × 4.",
      solution:
"Código de separaciones: 3 (día 1) + 3 (día 2) = 6.\n"
+ "Código de llenado: 2 (día 3) + 2 (día 4) = 4.\n\n"
+ "Código final = 6 × 4 = 24."
    },
    {
      id: "OR-10",
      title: "Ritmo de seis y uno",
      difficulty: "Fácil–media",
      tags: "SÁBADO · MATEMÁTICAS · ESPIRITUALIDAD",
      requiresBible: false,
      body:
"A partir del patrón de la creación (seis días de trabajo y uno de descanso),\n"
+ "imagina una comunidad que sigue este ritmo durante varias semanas.\n\n"
+ "En una semana:\n"
+ "• Días de trabajo: 6.\n"
+ "• Día de descanso: 1.\n\n"
+ "Supón que mantienen este ritmo perfecto durante 8 semanas seguidas.\n\n"
+ "1) ¿Cuántos días de trabajo han tenido en total?\n"
+ "2) ¿Cuántos días de descanso?\n\n"
+ "Código final = (días de trabajo) − (días de descanso).",
      hint1:
"En una semana hay 7 días. Piensa cuántos días totales hay en 8 semanas.",
      hint2:
"En 8 semanas hay 8 × 6 = 48 días de trabajo y 8 × 1 = 8 días de descanso.",
      solution:
"En 8 semanas:\n"
+ "Días de trabajo: 8 × 6 = 48.\n"
+ "Días de descanso: 8 × 1 = 8.\n\n"
+ "Código final = 48 − 8 = 40."
    }
    ]
  },

  promesa: {
    name: "Sala de la Promesa",
    subtitle: "Abraham, patriarcas y lucha por la bendición.",
    tagline: "Estrellas, sueños y combates con Dios.",
    image: "sala-promesa.png",
    audio: "promesa-theme.mp3",
    puzzles: [
      {
        id: "PR-01",
        title: "Contar las estrellas",
        difficulty: "Fácil–media",
        tags: "ABRAHAM · MATEMÁTICAS",
        requiresBible: false,
        body:
"Imagina que Abraham ve 7 estrellas la primera noche y cada noche el número se duplica.\n"
+ "Noche 1: 7, noche 2: 14, noche 3: 28...\n\n"
+ "1) ¿Cuántas estrellas ve en la noche 5?\n"
+ "2) ¿Cuántas ha contado en total desde la noche 1 a la 5?",
        hint1:
"Cada noche se multiplica por 2: 7, 14, 28, 56, 112...",
        hint2:
"Noche 5: 112. Suma 7 + 14 + 28 + 56 + 112.",
        solution:
"Noche 5: 112 estrellas.\nTotal: 7 + 14 + 28 + 56 + 112 = 217."
      },
        {
        id: "PR-02",
        title: "El triángulo del viaje",
        difficulty: "Fácil–media",
        tags: "ABRAHAM · GEOMETRÍA · CAMINO",
        requiresBible: false,
        body:
        "Imagina el viaje de Abraham como un triángulo sobre un mapa simbólico:\n\n"
        + "• Punto A: su tierra de origen.\n"
        + "• Punto B: una ciudad de paso.\n"
        + "• Punto C: la tierra de la promesa.\n\n"
        + "Los caminos directos entre esos puntos tienen estas longitudes (en jornadas):\n"
        + "AB = 3, BC = 4, AC = 5.\n\n"
        + "1) Comprueba que el triángulo ABC es rectángulo.\n"
        + "2) Calcula el perímetro simbólico del viaje (AB + BC + AC).\n"
        + "3) Calcula el área del triángulo.\n\n"
        + "Código final = perímetro + área.",
        hint1:
        "Para saber si es rectángulo, usa el teorema de Pitágoras: a² + b² = c².",
        hint2:
        "3² + 4² = 9 + 16 = 25, que es 5².\n"
        + "Perímetro = 3 + 4 + 5.\n"
        + "Área = (3×4) ÷ 2.",
        solution:
        "Es rectángulo porque 3² + 4² = 9 + 16 = 25 = 5².\n\n"
        + "Perímetro simbólico: 3 + 4 + 5 = 12.\n"
        + "Área: (3×4) ÷ 2 = 12 ÷ 2 = 6.\n\n"
        + "Código final = perímetro + área = 12 + 6 = 18."
        },
        {
        id: "PR-03",
        title: "Árbol de la promesa",
        difficulty: "Media",
        tags: "PATRIARCAS · MATEMÁTICAS · GENEALOGÍA",
        requiresBible: false,
        body:
        "Imagina una genealogía simplificada a partir de Abraham, donde cada padre tiene\n"
        + "exactamente 2 hijos, pero solo 1 de ellos continúa la línea de la promesa.\n\n"
        + "• Generación 1 (hijos de Abraham): 2 hijos.\n"
        + "• Generación 2: cada uno de esos 2 tiene 2 hijos.\n"
        + "• Generación 3: cada uno vuelve a tener 2 hijos.\n"
        + "• Generación 4: cada uno vuelve a tener 2 hijos.\n\n"
        + "1) ¿Cuántos hijos hay en total sumando las generaciones 1, 2, 3 y 4?\n"
        + "2) ¿Cuántos pertenecen a la línea de la promesa (uno por generación)?\n\n"
        + "Código final = (hijos totales) − (hijos de la promesa).",
        hint1:
        "Cada generación multiplica por 2 el número de personas de la anterior.",
        hint2:
        "Generación 1: 2; Gen 2: 4; Gen 3: 8; Gen 4: 16.\n"
        + "Suma 2 + 4 + 8 + 16 y resta 4 (uno por generación).",
        solution:
        "Total por generación:\n"
        + "Gen 1: 2, Gen 2: 4, Gen 3: 8, Gen 4: 16.\n"
        + "Hijos totales = 2 + 4 + 8 + 16 = 30.\n"
        + "Hijos de la promesa: 1 por generación → 4.\n\n"
        + "Código final = 30 − 4 = 26."
        },
        {
        id: "PR-04",
        title: "Constelación de la alianza",
        difficulty: "Media",
        tags: "PROMESA · ASTRONOMÍA · PATRONES",
        requiresBible: false,
        body:
        "Imagina que Abraham ve en el cielo una constelación con forma de flecha\n"
        + "que apunta hacia el futuro. La constelación se construye en filas de estrellas:\n\n"
        + "Fila 1: 1 estrella en el centro.\n"
        + "Fila 2: 3 estrellas.\n"
        + "Fila 3: 5 estrellas.\n"
        + "Fila 4: 7 estrellas.\n"
        + "… así sucesivamente, cada fila tiene 2 estrellas más que la anterior.\n\n"
        + "Supón que Abraham contempla las primeras 7 filas seguidas.\n\n"
        + "1) ¿Cuántas estrellas hay en total entre la fila 1 y la 7?\n"
        + "2) Observa si reconoces algún patrón numérico en ese total.\n\n"
        + "Código final = número total de estrellas.",
        hint1:
        "Cada fila añade 2 estrellas más: 1, 3, 5, 7, 9, 11, 13...",
        hint2:
        "Es la suma de los 7 primeros números impares.\n"
        + "Pista: la suma de los n primeros impares es n².",
        solution:
        "Filas:\n"
        + "1, 3, 5, 7, 9, 11, 13.\n"
        + "Suma = 1 + 3 + 5 + 7 + 9 + 11 + 13 = 49.\n\n"
        + "Además, 49 = 7², patrón clásico de los números impares.\n\n"
        + "Código final: 49."
        },
        {
        id: "PR-05",
        title: "Pesos del corazón de Abraham",
        difficulty: "Media",
        tags: "ABRAHAM · PSICOLOGÍA · FILOSOFÍA",
        requiresBible: true,
        body:
        "Lee o recuerda algunos momentos de Abraham (por ejemplo, Génesis 12, 16 y 22)\n"
        + "y piensa su camino como una balanza entre miedo y confianza.\n\n"
        + "Asigna estos valores simbólicos:\n"
        + "• Dejar su tierra obedeciendo la llamada = +4.\n"
        + "• Buscar un «plan B» por miedo (como cuando duda) = −3.\n"
        + "• Volver a confiar en la promesa = +3.\n"
        + "• Subir al monte con Isaac creyendo que Dios proveerá = +5.\n\n"
        + "Imagina este recorrido real: obedecer (+4), plan B por miedo (−3), volver a confiar (+3), subir al monte (+5).\n"
        + "Imagina también un recorrido ideal, sin plan B: obedecer (+4), confiar (+3), subir al monte (+5).\n\n"
        + "1) Calcula el código real del corazón (suma del recorrido real).\n"
        + "2) Calcula el código ideal (suma del recorrido ideal).\n\n"
        + "Código final = (código ideal) − (código real).",
        hint1:
        "Haz primero la suma del recorrido real: +4 −3 +3 +5.",
        hint2:
        "Real: 4 −3 +3 +5.\n"
        + "Ideal: 4 +3 +5.\n"
        + "Resta ideal menos real.",
        solution:
        "Recorrido real:\n"
        + "4 − 3 + 3 + 5 = (4 − 3) + 3 + 5 = 1 + 3 + 5 = 9.\n\n"
        + "Recorrido ideal:\n"
        + "4 + 3 + 5 = 12.\n\n"
        + "Código final = ideal − real = 12 − 9 = 3."
        },
        {
        id: "PR-06",
        title: "La escalera y los ángeles",
        difficulty: "Media",
        tags: "JACOB · FÍSICA · TIEMPO",
        requiresBible: false,
        body:
        "Imagina la escalera del sueño de Jacob con 12 peldaños numerados de 1 (abajo)\n"
        + "a 12 (arriba).\n\n"
        + "• Un ángel A comienza en el peldaño 1 y sube 2 peldaños por segundo.\n"
        + "• Un ángel B comienza en el peldaño 12 y baja 1 peldaño por segundo.\n"
        + "Ambos empiezan a moverse al mismo tiempo.\n\n"
        + "1) ¿En qué peldaño se encuentran por primera vez?\n"
        + "2) ¿Cuántos segundos han pasado cuando se encuentran?\n\n"
        + "Código final = número del peldaño donde se encuentran.",
        hint1:
        "Escribe la posición de cada ángel como una función del tiempo t (en segundos).",
        hint2:
        "Ángel A: peldaño_A = 1 + 2t.\n"
        + "Ángel B: peldaño_B = 12 − t.\n"
        + "Resuelve 1 + 2t = 12 − t.",
        solution:
        "Planteamos la igualdad de posiciones:\n"
        + "1 + 2t = 12 − t → 3t = 11 → t ≈ 3,67.\n\n"
        + "Pero solo pasan por peldaños enteros cada segundo. Veamos:\n"
        + "t = 3 s → A en peldaño 7, B en peldaño 9.\n"
        + "t = 4 s → A en peldaño 9, B en peldaño 8.\n\n"
        + "No coinciden exactamente en un peldaño entero, pero entre el segundo 3 y 4\n"
        + "se cruzan alrededor del peldaño 8–9.\n"
        + "Para este acertijo, toma como peldaño simbólico de encuentro el 8.\n\n"
        + "Código final: 8."
        },
        {
        id: "PR-07",
        title: "Nombre nuevo, código nuevo",
        difficulty: "Fácil–media",
        tags: "ABRAHAM · CRIPTOGRAFÍA · LENGUAJE",
        requiresBible: true,
        body:
        "Cuando Dios cambia el nombre de «Abram» a «Abraham», es como si añadiera\n"
        + "algo al propio nombre para señalar la promesa.\n\n"
        + "Vamos a convertir las letras en números usando este código:\n"
        + "A=1, B=2, C=3, ..., Z=26. (Sin Ñ).\n\n"
        + "1) Calcula la suma de los valores de las letras de «ABRAM».\n"
        + "2) Calcula la suma para «ABRAHAM».\n"
        + "3) Código final = (suma de ABRAHAM) − (suma de ABRAM).\n\n"
        + "Pista: fíjate especialmente en qué letras nuevas aparecen en «ABRAHAM».",
        hint1:
        "ABRAM = A + B + R + A + M.\n"
        + "ABRAHAM = A + B + R + A + H + A + M.",
        hint2:
        "Valores: A=1, B=2, R=18, H=8, M=13.\n"
        + "Suma ABRAM = 1 + 2 + 18 + 1 + 13.\n"
        + "Suma ABRAHAM = suma ABRAM + H + A.",
        solution:
        "ABRAM:\n"
        + "A(1) + B(2) + R(18) + A(1) + M(13) = 1 + 2 + 18 + 1 + 13 = 35.\n\n"
        + "ABRAHAM:\n"
        + "ABRAM + H(8) + A(1) = 35 + 8 + 1 = 44.\n\n"
        + "Código final = 44 − 35 = 9."
        },
        {
        id: "PR-08",
        title: "Cuatro altares, una misma llama",
        difficulty: "Media",
        tags: "ABRAHAM · QUÍMICA SIMBÓLICA · ALIANZA",
        requiresBible: true,
        body:
        "Imagina que cada altar que Abraham construye es como una pequeña «reacción» espiritual.\n"
        + "En cada altar sucede este proceso simbólico:\n"
        + "PIEDRA (P) → MADERA (M) → FUEGO (F) → HUMO (H).\n\n"
        + "Asigna a cada fase un valor:\n"
        + "P = 1, M = 2, F = 3, H = 4.\n\n"
        + "Supón que Abraham levanta cuatro altares a lo largo de su vida:\n"
        + "• Altar 1: la reacción se completa: P→M→F→H.\n"
        + "• Altar 2: se queda en M, la ofrenda no llega a encenderse: P→M.\n"
        + "• Altar 3: llega hasta F: P→M→F.\n"
        + "• Altar 4: de nuevo reacción completa: P→M→F→H.\n\n"
        + "Para cada altar, suma los valores de las fases que alcanza.\n"
        + "Luego calcula:\n"
        + "• SumaTotal = (suma Altar1 + Altar2 + Altar3 + Altar4).\n"
        + "• Código final = SumaTotal − (valor de un ciclo incompleto más corto).\n"
        + "(Un ciclo incompleto más corto es el del altar 2: P→M).",
        hint1:
        "Altar 1: 1+2+3+4. Altar 2: 1+2. Altar 3: 1+2+3. Altar 4: 1+2+3+4.",
        hint2:
        "Calcula las cuatro sumas y súmalas. Luego resta la suma del altar 2.",
        solution:
        "Altar 1: P+M+F+H = 1+2+3+4 = 10.\n"
        + "Altar 2: P+M = 1+2 = 3.\n"
        + "Altar 3: P+M+F = 1+2+3 = 6.\n"
        + "Altar 4: P+M+F+H = 10.\n\n"
        + "SumaTotal = 10 + 3 + 6 + 10 = 29.\n"
        + "Ciclo incompleto más corto: altar 2 = 3.\n\n"
        + "Código final = 29 − 3 = 26."
        },
        {
        id: "PR-09",
        title: "Escenas de la promesa",
        difficulty: "Fácil–media",
        tags: "PATRIARCAS · ARTE · OBSERVACIÓN",
        requiresBible: false,
        body:
        "Imagina la ilustración de la sala como un gran cuadro dividido en 5 escenas:\n"
        + "1) Abraham mirando al cielo.\n"
        + "2) Una paloma de luz en el centro, rodeada de discípulos o figuras.\n"
        + "3) Jacob soñando con la escalera.\n"
        + "4) El casi-sacrificio de Isaac.\n"
        + "5) Jacob luchando con el ángel.\n\n"
        + "Supón que, al observar el cuadro, cuentas:\n"
        + "• Escena 1: 2 figuras humanas.\n"
        + "• Escena 2 (centro): 11 figuras humanas.\n"
        + "• Escena 3: 4 figuras humanas.\n"
        + "• Escena 4: 3 figuras humanas.\n"
        + "• Escena 5: 2 figuras humanas.\n\n"
        + "1) ¿Cuántas figuras humanas hay en total en todo el cuadro?\n"
        + "2) ¿Cuántas escenas tienen exactamente 2 figuras humanas?\n\n"
        + "Código final = (total de figuras) × (nº de escenas con exactamente 2 figuras).",
        hint1:
        "Suma primero las figuras de cada escena: 2, 11, 4, 3, 2.",
        hint2:
        "Total = 2 + 11 + 4 + 3 + 2.\n"
        + "Escenas con exactamente 2 figuras: la 1 y la 5.",
        solution:
        "Total de figuras:\n"
        + "2 + 11 + 4 + 3 + 2 = 22.\n"
        + "Escenas con exactamente 2 figuras: escena 1 y escena 5 → 2 escenas.\n\n"
        + "Código final = 22 × 2 = 44."
        },
        {
        id: "PR-10",
        title: "Escala de confianza",
        difficulty: "Media–difícil",
        tags: "ABRAHAM · PSICOLOGÍA · PROBABILIDAD",
        requiresBible: true,
        body:
        "Imagina que medimos la confianza de Abraham en tres momentos clave\n"
        + "(puedes inspirarte en Génesis 12, 15 y 22):\n\n"
        + "• Momento A: escucha la promesa por primera vez.\n"
        + "• Momento B: pasa el tiempo y todavía no ve al hijo prometido.\n"
        + "• Momento C: sube al monte con Isaac.\n\n"
        + "Asigna a cada momento una probabilidad simbólica de «confiar plenamente»,\n"
        + "como si tiraras un dado de 6 caras y ciertos resultados significaran confianza:\n\n"
        + "• A: confía plenamente si sale 1, 2, 3 o 4.\n"
        + "• B: confía plenamente solo si sale 1, 2 o 3.\n"
        + "• C: confía plenamente si sale 1, 2, 3, 4 o 5.\n\n"
        + "1) Calcula la probabilidad de confianza plena en cada momento (como fracción sobre 6).\n"
        + "2) Calcula la probabilidad de que, en los tres momentos, confíe plenamente\n"
        + "   (como si tiraras el dado tres veces, una por momento, de forma independiente).\n\n"
        + "Código final = numerador de esa probabilidad (el denominador será 6³).",
        hint1:
        "En un dado de 6 caras, «4 caras favorables» significa probabilidad 4/6, etc.",
        hint2:
        "A: 4/6; B: 3/6; C: 5/6.\n"
        + "Probabilidad conjunta = (4/6)×(3/6)×(5/6).\n"
        + "Multiplica los numeradores entre sí.",
        solution:
        "Probabilidades por momento:\n"
        + "A: resultados 1–4 → 4 caras favorables → 4/6.\n"
        + "B: resultados 1–3 → 3/6.\n"
        + "C: resultados 1–5 → 5/6.\n\n"
        + "Probabilidad de confiar plenamente en los tres momentos:\n"
        + "(4/6) × (3/6) × (5/6) = (4×3×5) / 6³ = 60 / 216.\n"
        + "6³ = 216, por lo que el numerador es 60.\n\n"
        + "Código final: 60."
        }


    ]
  },

libertad: {
  name: "Sala de la Libertad",
  subtitle: "Éxodo, desierto y el combate interior.",
  tagline: "Salir de Egipto es solo el principio.",
  image: "sala-libertad.png",
  audio: "libertad-theme.mp3",
  puzzles: [
    {
      id: "EX-01",
      title: "Maná para seis días",
      difficulty: "Fácil",
      tags: "MANÁ · MATEMÁTICAS",
      requiresBible: true,
      body:
"En el desierto, el maná caía seis días a la semana.\n"
+ "Una familia de 4 personas necesita 2 medidas de maná por persona y por día.\n"
+ "Durante los días 1 al 5 recogen exactamente lo necesario para ese día,\n"
+ "y en el día 6 recogen el doble para que alcance también para el día 7,\n"
+ "en el que no se recoge nada.\n\n"
+ "¿Cuántas medidas de maná recoge en total la familia durante esos siete días?\n\n"
+ "Código final = total de medidas.",
      hint1:
"Calcula primero cuántas medidas necesitan en un solo día: 4 personas × 2 medidas.",
      hint2:
"Necesitan 8 medidas al día.\n"
+ "Días 1–5: 5 × 8 = 40 medidas.\n"
+ "Día 6: 16 medidas.\n"
+ "Total = 40 + 16.",
      solution:
"Una familia necesita 8 medidas al día.\n"
+ "Días 1–5: 5 × 8 = 40 medidas.\n"
+ "Día 6 (doble): 16 medidas.\n"
+ "Día 7: no se recoge nada.\n"
+ "Total semanal = 40 + 16 = 56 medidas.\n"
+ "Código final = 56."
    },

    {
      id: "EX-02",
      title: "Camino hacia la libertad",
      difficulty: "Media",
      tags: "ÉXODO · GEOMETRÍA",
      requiresBible: false,
      body:
"Imagina un mapa simplificado del Éxodo en el que el pueblo camina en línea recta\n"
+ "primero hacia el este y luego hacia el norte.\n\n"
+ "Día 1: avanzan 5 km hacia el este.\n"
+ "Día 2: avanzan 12 km hacia el norte hasta llegar a un oasis.\n\n"
+ "1) ¿Cuántos kilómetros han caminado en total siguiendo ese camino en dos tramos?\n"
+ "2) Si hubieran ido en línea recta desde el punto de salida hasta el oasis,\n"
+ "   formando un triángulo rectángulo, ¿qué longitud tendría ese lado directo?\n\n"
+ "Código final = (distancia recorrida) − (distancia directa).",
      hint1:
"La distancia recorrida son simplemente los 5 km del primer día más los 12 km del segundo.",
      hint2:
"Para la distancia directa usa el teorema de Pitágoras: el triángulo tiene catetos 5 y 12.\n"
+ "La hipotenusa es √(5² + 12²).",
      solution:
"Distancia recorrida: 5 km + 12 km = 17 km.\n"
+ "Distancia directa: √(5² + 12²) = √(25 + 144) = √169 = 13 km.\n"
+ "Código final = 17 − 13 = 4."
    },

    {
      id: "EX-03",
      title: "Navegación por las estrellas",
      difficulty: "Fácil–media",
      tags: "DESIERTO · ASTRONOMÍA",
      requiresBible: false,
      body:
"En las marchas nocturnas por el desierto se orientan por tres \"constelaciones\"\n"
+ "imaginarias:\n"
+ "– Corona: 7 estrellas visibles.\n"
+ "– Bastón: 5 estrellas.\n"
+ "– Escalera: 9 estrellas.\n\n"
+ "Cada noche avanzan tantos kilómetros como estrellas tenga la constelación\n"
+ "que deciden seguir.\n\n"
+ "Noche 1: siguen la Corona.\n"
+ "Noche 2: siguen el Bastón.\n"
+ "Noche 3: siguen la Escalera.\n"
+ "Noche 4: vuelven a seguir la Escalera.\n\n"
+ "¿Cuántos kilómetros han avanzado en total en esas cuatro noches?\n\n"
+ "Código final = distancia total recorrida.",
      hint1:
"Escribe la secuencia de kilómetros según las estrellas: 7, 5, 9, 9.",
      hint2:
"Suma 7 + 5 + 9 + 9.",
      solution:
"Corona: 7 km; Bastón: 5 km; Escalera: 9 km cada vez.\n"
+ "Total = 7 + 5 + 9 + 9 = 30 km.\n"
+ "Código final = 30."
    },

    {
      id: "EX-04",
      title: "La química de las plagas",
      difficulty: "Media",
      tags: "PLAGAS · CLASIFICACIÓN",
      requiresBible: true,
      body:
"Las diez plagas de Egipto pueden agruparse, de forma simbólica, según\n"
+ "dónde se siente más su efecto principal:\n\n"
+ "Agua: sangre, ranas.\n"
+ "Tierra: piojos, moscas, peste del ganado, úlceras, langostas.\n"
+ "Cielo/espíritu: granizo, oscuridad, muerte de los primogénitos.\n\n"
+ "Define ahora un \"peso\" para cada grupo:\n"
+ "agua = 1, tierra = 2, cielo = 3.\n\n"
+ "Calcula el valor total:\n"
+ "Valor = (nº plagas de agua × 1)\n"
+ "      + (nº plagas de tierra × 2)\n"
+ "      + (nº plagas de cielo × 3).\n\n"
+ "Código final = Valor.",
      hint1:
"Cuenta cuántas plagas hay en cada grupo: agua (2), tierra (¿?), cielo (¿?).",
      hint2:
"Agua: 2; tierra: 5; cielo: 3.\n"
+ "Sustituye en la fórmula: 2×1 + 5×2 + 3×3.",
      solution:
"Agua: sangre, ranas → 2 plagas.\n"
+ "Tierra: piojos, moscas, peste del ganado, úlceras, langostas → 5 plagas.\n"
+ "Cielo/espíritu: granizo, oscuridad, muerte de primogénitos → 3 plagas.\n\n"
+ "Valor = 2×1 + 5×2 + 3×3\n"
+ "      = 2 + 10 + 9\n"
+ "      = 21.\n"
+ "Código final = 21."
    },

    {
      id: "EX-05",
      title: "Horas de nube y de fuego",
      difficulty: "Fácil",
      tags: "NUBE Y FUEGO · TIEMPO",
      requiresBible: false,
      body:
"Durante una semana el pueblo camina protegido por la columna de nube y de fuego.\n"
+ "Imagina días de 12 horas de luz y 12 de noche.\n"
+ "La columna está siempre visible: de día como nube, de noche como fuego.\n\n"
+ "1) ¿Cuántas horas aparece como nube en 7 días?\n"
+ "2) ¿Cuántas horas aparece como fuego?\n"
+ "3) Código final = total de horas en que la columna ha sido visible en esa semana.",
      hint1:
"Piensa en 24 horas al día: 12 de nube y 12 de fuego.",
      hint2:
"En 7 días hay 7×12 = 84 horas de nube y 84 de fuego.\n"
+ "Suma ambas para el código final.",
      solution:
"Nube: 12 h/día × 7 días = 84 h.\n"
+ "Fuego: 12 h/día × 7 días = 84 h.\n"
+ "Total visible = 84 + 84 = 168 h.\n"
+ "Código final = 168."
    },

    {
      id: "EX-06",
      title: "El cuadrado del campamento",
      difficulty: "Media",
      tags: "CAMPAMENTO · LÓGICA · GEOMETRÍA",
      requiresBible: false,
      body:
"El campamento de Israel se dispone alrededor de la Tienda del Encuentro\n"
+ "como un cuadrado perfecto.\n\n"
+ "En cada lado del cuadrado acampan 3 tribus.\n"
+ "Cada tribu tiene 4 grupos de tiendas.\n"
+ "Cada tienda alberga a 5 personas.\n\n"
+ "1) ¿Cuántas personas hay en total en uno de los lados del cuadrado?\n"
+ "2) ¿Cuántas personas rodean la Tienda si cuentas los cuatro lados?\n\n"
+ "Código final = número total de personas alrededor de la Tienda.",
      hint1:
"Para un lado: 3 tribus × 4 grupos × 5 personas.",
      hint2:
"Un lado: 3×4×5 = 60 personas.\n"
+ "Cuatro lados: 4×60.",
      solution:
"Un lado: 3 tribus × 4 grupos × 5 personas = 3×4×5 = 60 personas.\n"
+ "Cuatro lados: 4×60 = 240 personas.\n"
+ "Código final = 240."
    },

    {
      id: "EX-07",
      title: "Sanación en el desierto",
      difficulty: "Media",
      tags: "SERPIENTE DE BRONCE · NÚMEROS",
      requiresBible: true,
      body:
"En el episodio de la serpiente de bronce, quien miraba hacia el signo de Dios\n"
+ "se salvaba.\n\n"
+ "Imagina que en un campamento han sido mordidas 15 personas.\n"
+ "De ellas, 11 obedecen y miran a la serpiente de bronce,\n"
+ "y 4 se niegan a hacerlo.\n\n"
+ "Define el \"valor de sanación\" S así:\n"
+ "S = 2 × (nº de personas que miran)\n"
+ "    − (nº de personas que no miran).\n\n"
+ "Calcula S para este campamento.\n\n"
+ "Código final = S.",
      hint1:
"Sustituye directamente: los que miran son 11; los que no miran, 4.",
      hint2:
"Calcula 2×11 = 22 y luego réstale 4.",
      solution:
"Hay 11 personas que miran y 4 que no miran.\n"
+ "S = 2×11 − 4 = 22 − 4 = 18.\n"
+ "Código final = 18."
    },

    {
      id: "EX-08",
      title: "Corazón esclavo o libre",
      difficulty: "Media",
      tags: "PSICOLOGÍA · INTERIOR",
      requiresBible: false,
      body:
"Más allá de las cadenas exteriores, el Éxodo habla de un corazón que aprende\n"
+ "a ser libre. Imagina que damos un \"marcador interior\" al pueblo según su actitud\n"
+ "en distintos momentos:\n\n"
+ "– Confiar y obedecer: +3 puntos.\n"
+ "– Dar gracias: +2 puntos.\n"
+ "– Quejarse: −2 puntos.\n"
+ "– Recordar Egipto con nostalgia: −3 puntos.\n\n"
+ "En cinco escenas seguidas ocurre esto:\n"
+ "1) Confían y avanzan.\n"
+ "2) Se quejan por el hambre.\n"
+ "3) Sueñan con volver a Egipto.\n"
+ "4) Dan gracias por el maná.\n"
+ "5) Vuelven a confiar y seguir.\n\n"
+ "Calcula el marcador final tras estas cinco escenas.\n\n"
+ "Código final = marcador interior total.",
      hint1:
"Asigna los valores: confiar (+3), quejarse (−2), nostalgia de Egipto (−3), agradecer (+2).",
      hint2:
"Suma en orden: 3, −2, −3, +2, +3.",
      solution:
"Valores por escena: +3, −2, −3, +2, +3.\n"
+ "Suma: 3 − 2 = 1; 1 − 3 = −2; −2 + 2 = 0; 0 + 3 = 3.\n"
+ "Marcador final = 3.\n"
+ "Código final = 3."
    },

    {
      id: "EX-09",
      title: "La plaga verdadera",
      difficulty: "Media–difícil",
      tags: "PLAGAS · LÓGICA",
      requiresBible: true,
      body:
"Antes de que llegue una nueva plaga, tres personajes discuten cuál será.\n"
+ "Solo una de sus afirmaciones es verdadera.\n\n"
+ "Las opciones son tres plagas concretas:\n"
+ "– Ranas (2ª plaga).\n"
+ "– Langostas (8ª plaga).\n"
+ "– Oscuridad (9ª plaga).\n\n"
+ "Moisés dice: \"Será ranas o langostas\".\n"
+ "Aarón dice: \"No será langostas\".\n"
+ "El mago egipcio dice: \"Será oscuridad\".\n\n"
+ "Sabiendo que exactamente UNA de estas frases es verdadera,\n"
+ "¿qué plaga tendrá lugar?\n\n"
+ "Código final = número de orden de esa plaga (2, 8 o 9).",
      hint1:
"Prueba cada opción. Si son ranas, langostas u oscuridad, cuenta cuántas frases serían verdaderas.",
      hint2:
"Si fueran ranas: Moisés (\"ranas o langostas\") sería verdad y Aarón (\"no será langostas\") también.\n"
+ "Eso da dos frases verdaderas, así que no puede ser ranas.\n"
+ "Haz lo mismo con las otras opciones.",
      solution:
"Probando cada caso:\n"
+ "– Si fuera ranas: Moisés y Aarón dirían la verdad (2 frases verdaderas) ⇒ imposible.\n"
+ "– Si fuera oscuridad: Aarón y el mago dirían la verdad (2 frases verdaderas) ⇒ imposible.\n"
+ "– Si fuera langostas: solo Moisés diría la verdad ⇒ se cumple la condición.\n\n"
+ "Por tanto la plaga es la de las langostas, 8ª plaga.\n"
+ "Código final = 8."
    },

    {
      id: "EX-10",
      title: "Tres etapas de salida",
      difficulty: "Fácil–media",
      tags: "ÉXODO · CRONOLOGÍA",
      requiresBible: false,
      body:
"Piensa en el Éxodo como en un camino dividido en tres grandes etapas simbólicas:\n\n"
+ "1) De la salida de Egipto hasta llegar a la orilla del Mar Rojo: 3 días.\n"
+ "2) Días de canto, descanso y reorganización junto al mar: 7 días.\n"
+ "3) Marcha por el desierto hasta el encuentro en el Sinaí: 40 días.\n\n"
+ "Si sumas estas tres etapas, obtienes un número muy usado en la Biblia\n"
+ "para hablar de plenitud y fiesta.\n\n"
+ "Código final = total de días de estas tres etapas.",
      hint1:
"Suma 3 + 7 + 40.",
      hint2:
"3 + 7 = 10; 10 + 40 = 50.",
      solution:
"Total de días = 3 + 7 + 40 = 50.\n"
+ "Código final = 50."
    }
  ]
},  

sabiduria: {
  name: "Sala de la Sabiduría",
  subtitle: "Salomón, profetas y parábolas.",
  tagline: "La Palabra como árbol que da fruto.",
  image: "sala-sabiduria.png",
  audio: "sabiduria-theme.mp3",
  puzzles: [
    {
      id: "SB-01",
      title: "El árbol que se multiplica",
      difficulty: "Media",
      tags: "SABIDURÍA · MATEMÁTICAS",
      requiresBible: false,
      body:
"Imagina que el árbol que crece sobre el libro representa la sabiduría que se comparte.\n\n"
+ "Cada fruto contiene 3 semillas. Cada semilla plantada hace crecer un nuevo árbol al año siguiente.\n\n"
+ "Año 1: tienes 1 árbol, que da 9 frutos.\n\n"
+ "1) ¿Cuántas semillas salen del árbol en el año 1?\n"
+ "2) Si todas se plantan y al año 2 cada semilla produce un árbol con también 9 frutos, "
+ "¿cuántos árboles hay al final del año 2?\n\n"
+ "Código final = (semillas del año 1) + (árboles del año 2).",
      hint1:
"Primero cuenta las semillas: 9 frutos × 3 semillas cada uno.",
      hint2:
"Año 1: 9 × 3 = 27 semillas.\n"
+ "Año 2: esas 27 semillas se convierten en 27 nuevos árboles.\n"
+ "Código = 27 + 27.",
      solution:
"Año 1: 1 árbol da 9 frutos; cada fruto tiene 3 semillas.\n"
+ "Semillas: 9 × 3 = 27.\n\n"
+ "Todas se plantan; año 2: 27 semillas → 27 árboles.\n\n"
+ "Código final = 27 (semillas) + 27 (árboles) = 54."
    },

    {
      id: "SB-02",
      title: "Talentos y riesgo",
      difficulty: "Fácil–media",
      tags: "PARÁBOLAS · ADMINISTRACIÓN",
      requiresBible: false,
      body:
"Recuerda la parábola de los talentos: un señor reparte 5 talentos a un siervo, 2 a otro "
+ "y 1 a un tercero.\n"
+ "Los dos primeros los arriesgan y al final cada uno duplica lo recibido. "
+ "El tercero esconde el talento y lo devuelve tal cual.\n\n"
+ "Imagina que cada talento vale 10 unidades.\n\n"
+ "1) ¿Cuántas unidades tiene en total el señor al final, sumando lo que le devuelven los tres siervos?\n"
+ "2) ¿Cuántas unidades han producido realmente los talentos que sí se arriesgaron?\n\n"
+ "Código final = (total final) − (lo que ya tenía al principio).",
      hint1:
"Convierte talentos en unidades: al principio son 5 + 2 + 1 = 8 talentos.",
      hint2:
"Al final: 10 + 4 + 1 = 15 talentos.\n"
+ "En unidades: 150. Código = 150 − 80.",
      solution:
"Talentos iniciales: 5 + 2 + 1 = 8.\n"
+ "Cada talento vale 10 unidades: 8 × 10 = 80.\n\n"
+ "Al final: el primero tiene 10 talentos, el segundo 4, el tercero 1 → 15 talentos.\n"
+ "15 × 10 = 150 unidades.\n\n"
+ "El incremento real es 150 − 80 = 70.\n\n"
+ "Código final: 70."
    },

    {
      id: "SB-03",
      title: "El juicio del consejero",
      difficulty: "Media",
      tags: "SALOMÓN · LÓGICA",
      requiresBible: false,
      body:
"En un caso difícil, Salomón escucha a tres consejeros. Cada uno hace una afirmación\n"
+ "sobre quién es la madre verdadera, y Salomón sabe que exactamente UNA de las tres\n"
+ "afirmaciones es verdadera.\n\n"
+ "Consejero A: \"La madre verdadera es la mujer 1\".\n"
+ "Consejero B: \"La madre verdadera es la mujer 2\".\n"
+ "Consejero C: \"No es la mujer 2\".\n\n"
+ "1) Prueba el caso en que la madre verdadera sea la 1.\n"
+ "2) Prueba el caso en que la madre verdadera sea la 2.\n"
+ "3) En uno de los dos casos solo hay una frase verdadera.\n\n"
+ "Código final = número de la madre verdadera (1 o 2).",
      hint1:
"Si la madre fuera la 1, A diría la verdad. ¿Qué pasaría con B y C?",
      hint2:
"Madre = 1 → A: verdad, B: mentira, C: verdad (2 verdaderas, imposible).\n"
+ "Madre = 2 → A: mentira, B: verdad, C: mentira (solo 1 verdadera).",
      solution:
"Probando madre 1: A y C dirían la verdad ⇒ 2 verdaderas ⇒ no puede ser.\n"
+ "Probando madre 2: solo B diría la verdad.\n\n"
+ "Por tanto, la madre verdadera es la mujer 2.\n"
+ "Código final = 2."
    },

    {
      id: "SB-04",
      title: "Proverbio escalonado",
      difficulty: "Fácil–media",
      tags: "PROVERBIOS · MATEMÁTICAS · ARTE",
      requiresBible: false,
      body:
"Un maestro de sabiduría compone un poema en cuatro estrofas, cada una más intensa\n"
+ "que la anterior:\n\n"
+ "• Estrofa 1: 2 versos.\n"
+ "• Estrofa 2: 4 versos.\n"
+ "• Estrofa 3: 6 versos.\n"
+ "• Estrofa 4: 8 versos.\n\n"
+ "Cada verso contiene exactamente 3 palabras clave que resumen la enseñanza.\n\n"
+ "1) ¿Cuántos versos hay en total en el poema?\n"
+ "2) ¿Cuántas palabras clave hay en total?\n\n"
+ "Código final = número total de palabras clave.",
      hint1:
"Suma los versos: 2 + 4 + 6 + 8.",
      hint2:
"Total de versos = 20.\n"
+ "Cada verso tiene 3 palabras clave → 20 × 3.",
      solution:
"Versos: 2 + 4 + 6 + 8 = 20.\n"
+ "Palabras clave: 20 × 3 = 60.\n\n"
+ "Código final = 60."
    },

    {
      id: "SB-05",
      title: "Casa sobre roca, casa sobre arena",
      difficulty: "Fácil–media",
      tags: "PARÁBOLA · GEOMETRÍA · FÍSICA SUAVE",
      requiresBible: true,
      body:
"Piensa en la parábola de la casa sobre roca y la casa sobre arena.\n"
+ "Imagina que las dos casas tienen planta rectangular:\n\n"
+ "• Casa sobre roca: 6 m de ancho por 8 m de largo.\n"
+ "• Casa sobre arena: 5 m de ancho por 7 m de largo.\n\n"
+ "1) Calcula el área de la base de cada casa.\n"
+ "2) ¿Cuántos metros cuadrados más de base tiene la casa sobre roca?\n\n"
+ "Código final = (área de la casa sobre roca) − (área de la casa sobre arena).",
      hint1:
"Área de un rectángulo = ancho × largo.",
      hint2:
"Roca: 6×8. Arena: 5×7.\n"
+ "Luego resta.",
      solution:
"Casa sobre roca: 6×8 = 48 m².\n"
+ "Casa sobre arena: 5×7 = 35 m².\n\n"
+ "Diferencia = 48 − 35 = 13.\n"
+ "Código final = 13."
    },

    {
      id: "SB-06",
      title: "Peso de las palabras",
      difficulty: "Media",
      tags: "PSICOLOGÍA · SABIDURÍA PRÁCTICA",
      requiresBible: false,
      body:
"Un maestro enseña a sus discípulos a vigilar sus palabras. Asignamos un valor simbólico\n"
+ "a cada reacción posible en una discusión:\n\n"
+ "• Escuchar de verdad = +2.\n"
+ "• Responder con ira = −3.\n"
+ "• Guardar silencio para no herir más = +1.\n"
+ "• Perdonar = +4.\n"
+ "• Murmurar a espaldas del otro = −2.\n\n"
+ "En una conversación ocurren estas cinco acciones, en este orden:\n"
+ "1) Escuchar.\n"
+ "2) Responder con ira.\n"
+ "3) Guardar silencio.\n"
+ "4) Perdonar.\n"
+ "5) Murmurar después.\n\n"
+ "Calcula el \"marcador de sabiduría\" final sumando los valores.\n\n"
+ "Código final = marcador total.",
      hint1:
"Traduce cada acción a número: +2, −3, +1, +4, −2.",
      hint2:
"Suma 2 −3 +1 +4 −2.",
      solution:
"Suma paso a paso:\n"
+ "2 − 3 = −1.\n"
+ "−1 + 1 = 0.\n"
+ "0 + 4 = 4.\n"
+ "4 − 2 = 2.\n\n"
+ "Marcador final = 2.\n"
+ "Código final = 2."
    },

    {
      id: "SB-07",
      title: "Tres maestros y un oráculo",
      difficulty: "Media–difícil",
      tags: "LÓGICA · FILOSOFÍA",
      requiresBible: false,
      body:
"En una escuela de sabiduría, tres maestros A, B y C discuten sobre un oráculo.\n"
+ "Salomón sabe que exactamente UNO de los tres dice la verdad y los otros dos se equivocan.\n\n"
+ "A dice: \"B y C no pueden tener razón a la vez\".\n"
+ "B dice: \"A miente\".\n"
+ "C dice: \"B dice la verdad\".\n\n"
+ "¿Quién es el único maestro que dice la verdad?\n\n"
+ "Código final = 1 si es A, 2 si es B, 3 si es C.",
      hint1:
"Prueba primero el caso en que A diga la verdad: ¿qué pasaría con B y C?",
      hint2:
"Si B fuera el único verdadero, C (\"B dice la verdad\") también tendría razón.\n"
+ "Si C fuera el único verdadero, entonces B también diría la verdad.\n"
+ "Eso violaría la condición de \"solo uno verdadero\".",
      solution:
"Si A es el único verdadero:\n"
+ "– A: verdad → B y C no pueden tener razón a la vez.\n"
+ "– Para que solo haya un verdadero, B y C deben ser falsos ⇒ A es el único cierto.\n"
+ "Esto es coherente.\n\n"
+ "Si B fuera el único verdadero, entonces \"A miente\" sería verdad y C, que dice\n"
+ "\"B dice la verdad\", también tendría razón ⇒ habría dos verdaderos.\n"
+ "Si C fuera el único verdadero, su frase \"B dice la verdad\" haría verdadero también a B.\n\n"
+ "La única posibilidad coherente es que A diga la verdad.\n"
+ "Código final = 1."
    },

    {
      id: "SB-08",
      title: "Poema en paralelismo",
      difficulty: "Fácil–media",
      tags: "SALMOS · ARTE · MATEMÁTICAS",
      requiresBible: false,
      body:
"Un pequeño poema de sabiduría está escrito en paralelismo: dos versos A y dos versos B\n"
+ "alternados (A1, B1, A2, B2).\n\n"
+ "Cada verso A contiene 5 palabras clave sobre la sabiduría.\n"
+ "Cada verso B contiene 7 imágenes poéticas.\n\n"
+ "1) ¿Cuántas palabras clave aparecen en total en los versos A?\n"
+ "2) ¿Cuántas imágenes poéticas aparecen en total en los versos B?\n"
+ "3) Código final = número total de palabras (palabras clave + imágenes poéticas).",
      hint1:
"Hay 2 versos A y 2 versos B.",
      hint2:
"Versos A: 2×5 = 10 palabras.\n"
+ "Versos B: 2×7 = 14 palabras.\n"
+ "Total = 10 + 14.",
      solution:
"Palabras en versos A: 2×5 = 10.\n"
+ "Palabras en versos B: 2×7 = 14.\n\n"
+ "Total de palabras = 10 + 14 = 24.\n"
+ "Código final = 24."
    },

    {
      id: "SB-09",
      title: "Nombre de sabio",
      difficulty: "Media",
      tags: "SALOMÓN · CRIPTOGRAFÍA · LENGUAJE",
      requiresBible: false,
      body:
"Usaremos el código clásico A=1, B=2, ..., Z=26 (sin Ñ).\n\n"
+ "1) Calcula la suma de los valores de las letras de \"SALOMON\" (sin tilde).\n"
+ "2) Calcula la suma de los valores de las letras de \"SABIO\".\n"
+ "3) Código final = (valor de SALOMON) − (valor de SABIO).",
      hint1:
"Escribe los valores:\n"
+ "S=19, A=1, L=12, O=15, M=13, N=14, B=2, I=9.",
      hint2:
"SALOMON = S(19)+A(1)+L(12)+O(15)+M(13)+O(15)+N(14).\n"
+ "SABIO = S(19)+A(1)+B(2)+I(9)+O(15).",
      solution:
"SALOMON:\n"
+ "19 + 1 + 12 + 15 + 13 + 15 + 14 = 89.\n\n"
+ "SABIO:\n"
+ "19 + 1 + 2 + 9 + 15 = 46.\n\n"
+ "Código final = 89 − 46 = 43."
    },

    {
      id: "SB-10",
      title: "Las diez prudentes y necias",
      difficulty: "Fácil–media",
      tags: "PARÁBOLA · MATEMÁTICAS · PRUDENCIA",
      requiresBible: true,
      body:
"Piensa en la parábola de las diez vírgenes: cinco prudentes y cinco necias,\n"
+ "todas con lámparas de aceite.\n\n"
+ "Supón que cada lámpara necesita 3 unidades de aceite para aguantar toda la noche.\n"
+ "• Cada virgen prudente lleva el doble de lo necesario (2 dosis completas).\n"
+ "• Cada virgen necia lleva solo lo justo (1 dosis).\n\n"
+ "Una dosis completa son 3 unidades de aceite.\n\n"
+ "1) ¿Cuántas unidades de aceite lleva en total el grupo de las cinco prudentes?\n"
+ "2) ¿Cuántas unidades lleva el grupo de las cinco necias?\n\n"
+ "Código final = (aceite de las prudentes) − (aceite de las necias).",
      hint1:
"Cada prudente lleva 2 dosis, cada necia 1. Una dosis = 3 unidades.",
      hint2:
"Prudentes: 5×2 dosis = 10 dosis → 10×3 = 30 unidades.\n"
+ "Necias: 5×1 dosis = 5 dosis → 5×3 = 15 unidades.",
      solution:
"Prudentes: 5 vírgenes × 2 dosis = 10 dosis.\n"
+ "10 × 3 = 30 unidades de aceite.\n\n"
+ "Necias: 5 vírgenes × 1 dosis = 5 dosis.\n"
+ "5 × 3 = 15 unidades.\n\n"
+ "Código final = 30 − 15 = 15."
    }
  ]
},

  sacrificio: {
    name: "Sala del Sacrificio",
    subtitle: "De la Última Cena a la cruz.",
    tagline: "Noche, traición y entrega.",
    image: "sala-sacrificio.png",
    audio: "sacrificio-theme.mp3",
    puzzles: [
      {
        id: "PA-01",
        title: "Treinta monedas",
        difficulty: "Fácil",
        tags: "PASIÓN · NÚMEROS SIMBÓLICOS",
        requiresBible: false,
        body:
"Judas entrega a Jesús por 30 monedas de plata.\n\n"
+ "Imagina que cada moneda representa 1 punto de «valor temporal» "
+ "y que cada uno de los 12 apóstoles vale 5 puntos de amistad.\n\n"
+ "1) ¿Cuántos puntos de amistad suman los 12 apóstoles?\n"
+ "2) ¿Cuál es la diferencia entre esa suma y las 30 monedas?\n\n"
+ "Código final = (puntos de amistad) − (monedas).",
        hint1:
"Multiplica 12 por 5.",
        hint2:
"12 × 5 = 60. Luego resta 30.",
        solution:
"Los 12 apóstoles valen 12 × 5 = 60 puntos de amistad.\n"
+ "La traición vale 30 monedas.\n\n"
+ "60 − 30 = 30.\n\n"
+ "Código final: 30."
      },
      {
        id: "PA-02",
        title: "Tres negaciones",
        difficulty: "Fácil–media",
        tags: "PEDRO · LÓGICA NUMÉRICA",
        requiresBible: false,
        body:
"Antes del amanecer, Pedro niega conocer a Jesús tres veces.\n\n"
+ "Imagina una clave numérica donde cada negación resta 7 puntos "
+ "a una confianza inicial de 40.\n\n"
+ "Cada vez que canta el gallo, la clave se multiplica por 2.\n\n"
+ "1) Después de las tres negaciones, ¿cuántos puntos quedan antes de que cante el gallo?\n"
+ "2) Si el gallo canta una vez al final, ¿cuál es el valor de la clave?\n\n"
+ "Código final = valor después del canto del gallo.",
        hint1:
"Resta 7 tres veces a 40.",
        hint2:
"40 − (3 × 7) = 40 − 21 = 19.\n"
+ "Luego multiplica 19 × 2.",
        solution:
"Confianza inicial: 40.\n"
+ "Tres negaciones: restamos 3 × 7 = 21 → 40 − 21 = 19.\n\n"
+ "El gallo canta y la clave se multiplica por 2:\n"
+ "19 × 2 = 38.\n\n"
+ "Código final: 38."
      },
    {
      id: "PA-03",
      title: "Horas de la noche",
      difficulty: "Fácil–media",
      tags: "PASIÓN · CRONOLOGÍA · TIEMPO",
      requiresBible: true,
      body:
"Imagina la noche de la Pasión dividida en \"guardias\" de 3 horas:\n"
+ "• 1.ª guardia: de 21:00 a 24:00.\n"
+ "• 2.ª guardia: de 24:00 a 03:00.\n"
+ "• 3.ª guardia: de 03:00 a 06:00.\n\n"
+ "Supón que:\n"
+ "– La Última Cena termina a las 22:00.\n"
+ "– Jesús ora en Getsemaní hasta las 1:00.\n"
+ "– A las 5:00 lo conducen hacia el juicio.\n\n"
+ "1) ¿Cuántas horas transcurren entre el final de la Cena y el arresto (1:00)?\n"
+ "2) ¿Cuántas horas desde el arresto hasta las 5:00?\n"
+ "3) Código final = horas totales desde las 22:00 hasta las 5:00.",
      hint1:
"Primero calcula de 22:00 a 1:00. Luego de 1:00 a 5:00.",
      hint2:
"22:00 → 1:00 son 3 horas.\n"
+ "1:00 → 5:00 son 4 horas.\n"
+ "Total = 7.",
      solution:
"De 22:00 a 1:00 pasan 3 horas.\n"
+ "De 1:00 a 5:00 pasan 4 horas.\n\n"
+ "Total: 3 + 4 = 7 horas.\n"
+ "Código final: 7."
    },
    {
      id: "PA-04",
      title: "El peso de la cruz",
      difficulty: "Media",
      tags: "VÍA CRUCIS · FÍSICA SUAVE · MATEMÁTICAS",
      requiresBible: false,
      body:
"Imagina que la cruz pesa 60 kg en total, repartidos así:\n"
+ "• Palo vertical: 2/3 del peso.\n"
+ "• Palo horizontal: 1/3 del peso.\n\n"
+ "En el camino al Calvario, Jesús carga solo con el palo horizontal\n"
+ "la primera mitad del recorrido, y Simón de Cirene le ayuda en la segunda mitad.\n\n"
+ "1) ¿Cuántos kilos pesa el palo horizontal?\n"
+ "2) Si suponemos que el esfuerzo se reparte a partes iguales cuando Simón ayuda,\n"
+ "   ¿cuántos kilos \"equivalentes\" carga Jesús en total a lo largo del camino?\n\n"
+ "Código final = kilos equivalentes cargados por Jesús.",
      hint1:
"Primero calcula 1/3 de 60 kg.",
      hint2:
"1/3 de 60 = 20 kg.\n"
+ "Primera mitad: Jesús carga 20 kg solo.\n"
+ "Segunda mitad: se reparten 20 kg → Jesús carga 10 kg.\n"
+ "Total = 20 + 10.",
      solution:
"Peso del palo horizontal: 60 × (1/3) = 20 kg.\n"
+ "Primera mitad del camino: 20 kg a solas.\n"
+ "Segunda mitad: 20 kg entre dos → 10 kg Jesús.\n\n"
+ "Kilos equivalentes totales: 20 + 10 = 30.\n"
+ "Código final: 30."
    },
    {
      id: "PA-05",
      title: "Las tres cruces",
      difficulty: "Fácil–media",
      tags: "CALVARIO · MATEMÁTICAS · SIMBOLISMO",
      requiresBible: false,
      body:
"En el Calvario hay tres cruces: la de Jesús en el centro y dos a los lados.\n"
+ "Imagina que asignamos estos valores simbólicos:\n"
+ "• Cruz del centro (Jesús) = +5.\n"
+ "• Buen ladrón = +2.\n"
+ "• Mal ladrón = −2.\n\n"
+ "1) Calcula la suma de los valores de las tres cruces.\n"
+ "2) Supón que el buen ladrón \"arrastra\" al mal ladrón hacia arriba sumando 1 punto\n"
+ "   (como si su fe atenuara una parte de la negatividad del otro).\n\n"
+ "Código final = valor total después de esa corrección.",
      hint1:
"Primero suma: 5 + 2 − 2.",
      hint2:
"Suma inicial = 5.\n"
+ "Luego añade 1 punto de corrección: 5 + 1.",
      solution:
"Valor inicial:\n"
+ "Jesús: +5; buen ladrón: +2; mal ladrón: −2.\n"
+ "Suma: 5 + 2 − 2 = 5.\n\n"
+ "Corrección: el buen ladrón \"levanta\" 1 punto → 5 + 1 = 6.\n"
+ "Código final: 6."
    },
    {
      id: "PA-06",
      title: "Emociones de Pedro",
      difficulty: "Media",
      tags: "PEDRO · PSICOLOGÍA",
      requiresBible: true,
      body:
"Imagina el corazón de Pedro en la noche de las negaciones. Asignamos valores simbólicos:\n"
+ "• Amor sincero = +4.\n"
+ "• Miedo a sufrir = −3.\n"
+ "• Negar a Jesús = −2.\n"
+ "• Llorar amargamente y arrepentirse = +5.\n\n"
+ "Supón este recorrido emocional:\n"
+ "1) Proclama que nunca lo abandonará (amor sincero).\n"
+ "2) Siente miedo cuando ve detener a Jesús.\n"
+ "3) Niega a Jesús tres veces.\n"
+ "4) Llorando, se arrepiente de verdad.\n\n"
+ "Calcula el marcador final del corazón de Pedro.\n\n"
+ "Código final = marcador total.",
      hint1:
"Traduce cada paso a números. Recuerda que negar tres veces significa sumar el valor tres veces.",
      hint2:
"Amor: +4.\n"
+ "Miedo: −3.\n"
+ "Tres negaciones: 3×(−2) = −6.\n"
+ "Arrepentimiento: +5.\n"
+ "Suma: 4 −3 −6 +5.",
      solution:
"Marcador:\n"
+ "4 (amor) − 3 (miedo) = 1.\n"
+ "1 − 6 (tres negaciones) = −5.\n"
+ "−5 + 5 (arrepentimiento) = 0.\n\n"
+ "El corazón queda en un punto cero: ni perdido ni completo, listo para ser restaurado.\n"
+ "Código final: 0."
    },
    {
      id: "PA-07",
      title: "La vigilia que se queda corta",
      difficulty: "Fácil–media",
      tags: "GETSEMANÍ · TIEMPO · FIDELIDAD",
      requiresBible: true,
      body:
"En Getsemaní, Jesús pide a sus discípulos que velen con Él, pero se duermen.\n"
+ "Imagina que la vigilia pedida es de 3 horas completas.\n\n"
+ "Supón que:\n"
+ "• Primera hora: velan 40 minutos y duermen 20.\n"
+ "• Segunda hora: velan 20 minutos y duermen 40.\n"
+ "• Tercera hora: velan 10 minutos y duermen 50.\n\n"
+ "1) ¿Cuántos minutos han velado en total?\n"
+ "2) ¿Cuántos minutos han dormido en total?\n\n"
+ "Código final = (minutos velando) − (minutos durmiendo).",
      hint1:
"Calcula por filas: velar por hora y luego suma.",
      hint2:
"Minutos velando: 40 + 20 + 10.\n"
+ "Minutos durmiendo: 20 + 40 + 50.",
      solution:
"Velando: 40 + 20 + 10 = 70 minutos.\n"
+ "Durmiendo: 20 + 40 + 50 = 110 minutos.\n\n"
+ "Diferencia = 70 − 110 = −40.\n"
+ "Código final: −40."
    },
    {
      id: "PA-08",
      title: "Código del cenáculo",
      difficulty: "Media",
      tags: "CENA · CRIPTOGRAFÍA · LENGUAJE",
      requiresBible: true,
      body:
"En el cenáculo, Jesús habla de su cuerpo y su sangre entregados.\n"
+ "Vamos a codificar la palabra \"CENA\" y \"PAN\" usando A=1, B=2, ..., Z=26 (sin Ñ).\n\n"
+ "1) Calcula el valor de \"CENA\" sumando las letras.\n"
+ "2) Calcula el valor de \"PAN\".\n"
+ "3) Código final = (valor de CENA) − (valor de PAN).",
      hint1:
"Valores: C=3, E=5, N=14, A=1, P=16.",
      hint2:
"CENA = 3 + 5 + 14 + 1.\n"
+ "PAN = 16 + 1 + 14.",
      solution:
"CENA: C(3) + E(5) + N(14) + A(1) = 23.\n"
+ "PAN: P(16) + A(1) + N(14) = 31.\n\n"
+ "Código final = 23 − 31 = −8."
    },
    {
      id: "PA-09",
      title: "Estaciones del camino",
      difficulty: "Fácil–media",
      tags: "VÍA CRUCIS · CONTAR · ARTE",
      requiresBible: false,
      body:
"Imagina un Vía Crucis simplificado con 8 estaciones marcadas en el tablero.\n"
+ "En cada estación hay un número diferente de figuras humanas representadas:\n\n"
+ "Estación 1: 1 figura.\n"
+ "Estación 2: 2 figuras.\n"
+ "Estación 3: 3 figuras.\n"
+ "Estación 4: 4 figuras.\n"
+ "Estación 5: 3 figuras.\n"
+ "Estación 6: 2 figuras.\n"
+ "Estación 7: 4 figuras.\n"
+ "Estación 8: 5 figuras.\n\n"
+ "1) ¿Cuántas figuras humanas hay en total?\n"
+ "2) ¿Cuál es la estación con más figuras?\n\n"
+ "Código final = (total de figuras) + (nº de la estación con más figuras).",
      hint1:
"Suma todas las cifras primero.",
      hint2:
"Total = 1 + 2 + 3 + 4 + 3 + 2 + 4 + 5.\n"
+ "La estación con más figuras es la 8.",
      solution:
"Total de figuras:\n"
+ "1 + 2 + 3 + 4 + 3 + 2 + 4 + 5 = 24.\n"
+ "La estación con más figuras es la 8.\n\n"
+ "Código final = 24 + 8 = 32."
    },
    {
      id: "PA-10",
      title: "Silencio y grito",
      difficulty: "Media–difícil",
      tags: "FILOSOFÍA · PSICOLOGÍA · PASIÓN",
      requiresBible: true,
      body:
"Durante la Pasión, hay momentos de silencio y momentos de palabras fuertes:\n"
+ "– Silencio ante Herodes.\n"
+ "– Palabras breves en la cruz.\n"
+ "– Un gran grito final.\n\n"
+ "Imagina que damos valores simbólicos:\n"
+ "• Cada minuto de silencio = +1 (profundidad).\n"
+ "• Cada palabra dicha = −1 (agotamiento).\n"
+ "• El grito final = +7 (entrega total).\n\n"
+ "Supón que:\n"
+ "– Jesús guarda 15 minutos de silencio en total entre interrogatorios.\n"
+ "– Pronuncia en total 12 palabras breves en la cruz.\n"
+ "– Termina con un solo gran grito.\n\n"
+ "1) Calcula el marcador total.\n\n"
+ "Código final = marcador total.",
      hint1:
"Traduce: 15 minutos de silencio, 12 palabras, 1 grito.",
      hint2:
"Silencio: 15×(+1) = +15.\n"
+ "Palabras: 12×(−1) = −12.\n"
+ "Grito: +7.\n"
+ "Suma los tres.",
      solution:
"Marcador por silencio: +15.\n"
+ "Marcador por palabras: −12.\n"
+ "Marcador por el grito final: +7.\n\n"
+ "Marcador total = 15 −12 +7 = 10.\n"
+ "Código final: 10."
    }
    ]
  },

  vida: {
    name: "Sala de la Vida Nueva",
    subtitle: "Resurrección y Pentecostés.",
    tagline: "La cruz vacía y la luz que vuelve.",
    image: "sala-vida.png",
    audio: "vida-theme.mp3",
    puzzles: [
      {
        id: "RS-01",
        title: "El tercer día",
        difficulty: "Fácil",
        tags: "RESURRECCIÓN · PROGRESIONES",
        requiresBible: false,
        body:
"La tradición dice que Jesús resucita «al tercer día».\n\n"
+ "Imagina un calendario muy sencillo donde el viernes es día 1, "
+ "el sábado día 2 y el domingo día 3.\n\n"
+ "Si cada día las mujeres compran el doble de perfumes que el día anterior: "
+ "el viernes compran 1 frasco, el sábado el doble y el domingo el doble del sábado.\n\n"
+ "¿Cuántos frascos han comprado en total?\n\n"
+ "Código final = total de frascos.",
        hint1:
"Es una progresión que se dobla cada día: 1, 2, 4...",
        hint2:
"Suma 1 + 2 + 4.",
        solution:
"Viernes: 1 frasco.\n"
+ "Sábado: 2 frascos.\n"
+ "Domingo: 4 frascos.\n\n"
+ "Total: 1 + 2 + 4 = 7.\n\n"
+ "Código final: 7."
      },
      {
        id: "RS-02",
        title: "Dos discípulos y un fuego",
        difficulty: "Media",
        tags: "EMAÚS · PROBLEMA DE TIEMPOS",
        requiresBible: false,
        body:
"En el camino de Emaús, van dos discípulos caminando con Jesús sin reconocerlo.\n\n"
+ "Imagina que su camino es de 11 km y que durante los primeros 4 km avanzan distraídos, "
+ "hablando entre ellos, a 3 km/h.\n"
+ "A partir del momento en que «arde su corazón», aceleran a 5 km/h para los 7 km restantes.\n\n"
+ "1) ¿Cuánto tiempo tardan en recorrer los primeros 4 km?\n"
+ "2) ¿Cuánto tiempo tardan en recorrer los 7 km restantes?\n\n"
+ "Código final = tiempo total en horas, redondeado a un decimal.",
        hint1:
"Recuerda: tiempo = distancia ÷ velocidad.",
        hint2:
"Primer tramo: 4 ÷ 3 ≈ 1,3 h.\n"
+ "Segundo tramo: 7 ÷ 5 = 1,4 h.\n"
+ "Suma y redondea a un decimal.",
        solution:
"Primer tramo: 4 km a 3 km/h → 4/3 h ≈ 1,3 h.\n"
+ "Segundo tramo: 7 km a 5 km/h → 7/5 h = 1,4 h.\n\n"
+ "Tiempo total ≈ 1,3 + 1,4 = 2,7 horas.\n\n"
+ "Código final: 2,7."
      },
    {
      id: "RS-03",
      title: "Amanecer en el tercer día",
      difficulty: "Fácil–media",
      tags: "RESURRECCIÓN · ASTRONOMÍA · LUZ",
      requiresBible: false,
      body:
"Imagina el sepulcro como una colina que oculta el sol al amanecer.\n"
+ "El día de la resurrección, el sol tarda 40 minutos desde que asoma\n"
+ "hasta que ilumina completamente la entrada de la tumba.\n\n"
+ "El ángel llega cuando solo ha pasado 1/5 de ese tiempo\n"
+ "y mueve la piedra en un instante.\n\n"
+ "1) ¿Cuántos minutos han pasado cuando llega el ángel?\n"
+ "2) ¿Cuántos minutos faltan aún hasta que la entrada quede totalmente iluminada?\n\n"
+ "Código final = (minutos ya pasados) + (minutos que faltan).",
      hint1:
"Calcula 1/5 de 40 y luego el resto.",
      hint2:
"1/5 de 40 es 8 minutos.\n"
+ "Faltan 40 − 8 minutos de luz por completar.",
      solution:
"Tiempo total de iluminación: 40 minutos.\n"
+ "1/5 de 40 = 8 minutos.\n"
+ "Eso significa que faltan 40 − 8 = 32 minutos.\n\n"
+ "Código final = 8 + 32 = 40."
    },
    {
      id: "RS-04",
      title: "Palabra de vida",
      difficulty: "Fácil–media",
      tags: "RESURRECCIÓN · CRIPTOGRAFÍA · LENGUAJE",
      requiresBible: false,
      body:
"Usaremos el código A=1, B=2, ..., Z=26 (sin Ñ).\n\n"
+ "1) Calcula el valor de la palabra \"VIDA\".\n"
+ "2) Calcula el valor de la palabra \"CRUZ\".\n"
+ "3) Define el código así: CÓDIGO = (valor de VIDA) + (valor de VIDA) − (valor de CRUZ).\n\n"
+ "Escribe el número final.",
      hint1:
"Valores: V=22, I=9, D=4, A=1, C=3, R=18, U=21, Z=26.",
      hint2:
"VIDA = 22 + 9 + 4 + 1.\n"
+ "CRUZ = 3 + 18 + 21 + 26.\n"
+ "CÓDIGO = 2×VIDA − CRUZ.",
      solution:
"VIDA: 22 + 9 + 4 + 1 = 36.\n"
+ "CRUZ: 3 + 18 + 21 + 26 = 68.\n\n"
+ "CÓDIGO = 2×36 − 68 = 72 − 68 = 4.\n"
+ "Código final: 4."
    },
    {
      id: "RS-05",
      title: "Puerta del sepulcro",
      difficulty: "Media",
      tags: "SEPULCRO · GEOMETRÍA",
      requiresBible: false,
      body:
"Imagina la entrada del sepulcro como un rectángulo de 2 m de ancho por 3 m de alto.\n"
+ "La piedra que lo tapa es circular, de radio 1 m.\n\n"
+ "1) Calcula el área de la entrada (rectángulo).\n"
+ "2) Calcula el área aproximada de la piedra (círculo) usando π ≈ 3,14.\n"
+ "3) Código final = área del rectángulo − área del círculo (redondea al número entero más cercano).",
      hint1:
"Área rectángulo = base × altura.\n"
+ "Área círculo = πr².",
      hint2:
"Rectángulo: 2×3 = 6 m².\n"
+ "Círculo: 3,14×1² = 3,14 m².\n"
+ "Resta 6 − 3,14.",
      solution:
"Área de la entrada: 2×3 = 6 m².\n"
+ "Área de la piedra: πr² ≈ 3,14×1² = 3,14 m².\n\n"
+ "Diferencia: 6 − 3,14 = 2,86 m².\n"
+ "Redondeando al entero más cercano: 3.\n\n"
+ "Código final: 3."
    },
    {
      id: "RS-06",
      title: "Miedo que se convierte en anuncio",
      difficulty: "Media",
      tags: "PSICOLOGÍA · RESURRECCIÓN",
      requiresBible: true,
      body:
"Las mujeres que van al sepulcro pasan de miedo y desconcierto\n"
+ "a anunciar la buena noticia.\n\n"
+ "Asigna estos valores simbólicos a las emociones:\n"
+ "• Miedo = −3.\n"
+ "• Tristeza = −2.\n"
+ "• Esperanza = +3.\n"
+ "• Alegría profunda = +4.\n"
+ "• Anunciar a los demás = +2.\n\n"
+ "Imagina esta secuencia interior:\n"
+ "1) Van tristes al sepulcro.\n"
+ "2) Sienten miedo al ver al ángel.\n"
+ "3) Empieza a nacer esperanza.\n"
+ "4) Dejan la tumba con alegría profunda.\n"
+ "5) Anuncian la noticia a los discípulos.\n\n"
+ "Calcula el marcador final.\n\n"
+ "Código final = marcador total.",
      hint1:
"Traduce: tristeza (−2), miedo (−3), esperanza (+3), alegría (+4), anuncio (+2).",
      hint2:
"Suma −2 −3 +3 +4 +2.",
      solution:
"Suma paso a paso:\n"
+ "−2 − 3 = −5.\n"
+ "−5 + 3 = −2.\n"
+ "−2 + 4 = 2.\n"
+ "2 + 2 = 4.\n\n"
+ "Marcador final = 4.\n"
+ "Código final: 4."
    },
    {
      id: "RS-07",
      title: "Lenguas de fuego",
      difficulty: "Fácil–media",
      tags: "PENTECOSTÉS · MATEMÁTICAS · CRECIMIENTO",
      requiresBible: true,
      body:
"En Pentecostés, la comunidad comienza con 12 apóstoles reunidos.\n"
+ "Imagina este modelo muy simplificado de crecimiento:\n\n"
+ "• Día 1: cada apóstol consigue que 3 personas más se unan a la comunidad.\n"
+ "• Día 2: de todos los que hay (apóstoles + nuevos), la mitad consigue que 1 persona\n"
+ "         más se una.\n\n"
+ "1) ¿Cuántas personas forman la comunidad al final del día 1?\n"
+ "2) ¿Cuántas personas se añaden en el día 2?\n"
+ "3) ¿Cuántos son en total al final del día 2?\n\n"
+ "Código final = número total de personas al final del día 2.",
      hint1:
"Empieza por el día 1: 12 apóstoles, cada uno suma 3 personas.",
      hint2:
"Día 1: 12 + 12×3 = 12 + 36 = 48 personas.\n"
+ "Día 2: la mitad de 48 (24) añaden 1 persona cada uno → 24 nuevos.\n"
+ "Total = 48 + 24.",
      solution:
"Día 1:\n"
+ "12 apóstoles, cada uno trae a 3: 12×3 = 36 nuevos.\n"
+ "Total al final del día 1: 12 + 36 = 48.\n\n"
+ "Día 2:\n"
+ "La mitad de 48 (24 personas) traen a 1 cada una → 24 nuevos.\n"
+ "Total al final del día 2: 48 + 24 = 72.\n\n"
+ "Código final: 72."
    },
    {
      id: "RS-08",
      title: "Muchas lenguas, un mismo fuego",
      difficulty: "Media",
      tags: "PENTECOSTÉS · LENGUAJE · CRIPTOGRAFÍA",
      requiresBible: false,
      body:
"En Pentecostés, la misma noticia se anuncia en muchas lenguas.\n"
+ "Vamos a jugar con un pequeño cifrado.\n\n"
+ "Toma la palabra \"ESPÍRITU\" sin tilde: ESPIRITU.\n"
+ "Usa el código A=1, B=2, ..., Z=26 (sin Ñ) y haz lo siguiente:\n\n"
+ "1) Convierte cada letra en su número.\n"
+ "2) Suma todas las cifras para obtener un número S.\n"
+ "3) Código final = S mod 9 (el resto de dividir S entre 9).\n"
+ "   Si el resto fuera 0, toma 9 como resultado.\n\n"
+ "Escribe el número final.",
      hint1:
"Valores: E=5, S=19, P=16, I=9, R=18, T=20, U=21.",
      hint2:
"ESPIRITU: 5 + 19 + 16 + 9 + 18 + 9 + 20 + 21.\n"
+ "Suma y luego divide entre 9.",
      solution:
"Suma de letras:\n"
+ "E(5) + S(19) + P(16) + I(9) + R(18) + I(9) + T(20) + U(21)\n"
+ "= 5 + 19 = 24\n"
+ "24 + 16 = 40\n"
+ "40 + 9 = 49\n"
+ "49 + 18 = 67\n"
+ "67 + 9 = 76\n"
+ "76 + 20 = 96\n"
+ "96 + 21 = 117.\n\n"
+ "Dividimos 117 entre 9:\n"
+ "9×13 = 117, resto 0.\n"
+ "Por la regla del acertijo, si el resto es 0, tomamos 9.\n\n"
+ "Código final: 9."
    },
    {
      id: "RS-09",
      title: "Reconocerlo al partir el pan",
      difficulty: "Media",
      tags: "EMAÚS · PSICOLOGÍA · PROBABILIDAD",
      requiresBible: true,
      body:
"En el camino de Emaús, dos discípulos caminan con Jesús sin reconocerlo.\n"
+ "Imagina que cada gesto de Jesús tiene una cierta \"probabilidad simbólica\"\n"
+ "de despertar su fe:\n\n"
+ "• Explicar las Escrituras: 2 de cada 6.\n"
+ "• Hablarles del Mesías: 3 de cada 6.\n"
+ "• Partir el pan: 5 de cada 6.\n\n"
+ "Supón que estos tres gestos ocurren en orden: Escrituras, conversación, pan,\n"
+ "como si fueran tres tiradas independientes de un dado de 6 caras.\n\n"
+ "1) ¿Cuál es la probabilidad de que lo reconozcan precisamente en el gesto de partir el pan,\n"
+ "   pero no antes? (Es decir: fallan en los dos primeros gestos, aciertan en el tercero.)\n\n"
+ "Código final = numerador de esa probabilidad, sabiendo que el denominador es 6³.",
      hint1:
"Probabilidad de NO reconocer en un gesto es 1 menos la probabilidad de reconocerlo.",
      hint2:
"Reconocer en Escrituras: 2/6 → no reconocer: 4/6.\n"
+ "Reconocer en conversación: 3/6 → no reconocer: 3/6.\n"
+ "Reconocer al partir el pan: 5/6.\n"
+ "Multiplica: (4/6)×(3/6)×(5/6).",
      solution:
"No reconocer en Escrituras: 1 − 2/6 = 4/6.\n"
+ "No reconocer en conversación: 1 − 3/6 = 3/6.\n"
+ "Reconocer al partir el pan: 5/6.\n\n"
+ "Probabilidad conjunta = (4/6)×(3/6)×(5/6)\n"
+ "= (4×3×5) / 6³ = 60 / 216.\n\n"
+ "El numerador es 60.\n"
+ "Código final: 60."
    },
    {
      id: "RS-10",
      title: "Luz que se expande",
      difficulty: "Media",
      tags: "RESURRECCIÓN · ASTRONOMÍA · CRECIMIENTO",
      requiresBible: false,
      body:
"Imagina la noticia de la resurrección como una luz que se expande en anillos\n"
+ "alrededor de un centro.\n\n"
+ "Cada \"anillo\" representa una nueva zona que recibe el anuncio:\n"
+ "• Anillo 1: 8 personas.\n"
+ "• Anillo 2: el doble que el anillo 1.\n"
+ "• Anillo 3: el doble que el anillo 2.\n"
+ "• Anillo 4: el doble que el anillo 3.\n\n"
+ "1) ¿Cuántas personas hay en cada anillo?\n"
+ "2) ¿Cuántas personas en total han recibido la noticia si contamos los 4 anillos?\n\n"
+ "Código final = número total de personas alcanzadas.",
      hint1:
"Cada anillo dobla al anterior: es una progresión geométrica.",
      hint2:
"Anillo 1: 8.\n"
+ "Anillo 2: 16.\n"
+ "Anillo 3: 32.\n"
+ "Anillo 4: 64.\n"
+ "Suma 8 + 16 + 32 + 64.",
      solution:
"Secuencia:\n"
+ "Anillo 1: 8.\n"
+ "Anillo 2: 16.\n"
+ "Anillo 3: 32.\n"
+ "Anillo 4: 64.\n\n"
+ "Total = 8 + 16 = 24.\n"
+ "24 + 32 = 56.\n"
+ "56 + 64 = 120.\n\n"
+ "Código final: 120."
    }
    ]
  }
};


// =========================
// ARCHIVUM — Reglas base (campaña)
// =========================
const GAME_RULES = {
  defaultTimeSecPerPuzzle: 180,
  defaultAttemptsPerPuzzle: 2,
  wrongAttemptTimePenaltySec: 30
};

// =========================
// ARCHIVUM — Mandamientos (Bendición + Voto + Milagro)
// - Bendición y Milagro: contadores por ACERTIJO y por JUGADOR, salvo que se indique (1/partida).
// - El Voto es fijo y solo afecta al jugador que lo tiene.
// - Activar Milagro gasta el símbolo del turno (igual que Pista 2), salvo que el host decida lo contrario.
// =========================
const COMMANDMENT_META = {
  "No tendrás otros dioses": {
    image: "no-otros-dioses.png",
    tag: "Mandamiento I",
    blessing: "Al abrir Pista 1, ganas +10s (1 vez por acertijo).",
    vow: { title: "Voto", text: "No puedes desbloquear Pista 2 hasta que el temporizador baje de 120s." },
    power: {
      title: "Milagro",
      text: "+1 intento extra en tu turno (máx 3) (1 vez por acertijo).",
      uses: { per: "puzzle", count: 1 },
      effect: { addAttempts: 1, maxAttempts: 3 }
    }
  },
  "No tomarás el Nombre en vano": {
    image: "no-nombre-vano.png",
    tag: "Mandamiento II",
    blessing: "Tu primer fallo verificado del turno no penaliza -30s (solo -1 intento) (1 vez por acertijo).",
    vow: { title: "Voto", text: "No puedes verificar con menos de 20s restantes." },
    power: {
      title: "Milagro",
      text: "Congela el tiempo 15s antes de verificar (1 vez por partida).",
      uses: { per: "game", count: 1 },
      effect: { freezeTimeSec: 15 }
    }
  },
  "Santificarás el descanso": {
    image: "santificar-fiestas.png",
    tag: "Mandamiento III",
    blessing: "Si terminas tu turno con >60s, guardas +10s para tu siguiente turno (1 vez por acertijo).",
    vow: { title: "Voto", text: "Si desbloqueas Pista 2, tu siguiente turno empieza con -15s." },
    power: {
      title: "Milagro",
      text: "“Reintento”: si fallas una verificación, recuperas +1 intento (una vez) (1 vez por acertijo).",
      uses: { per: "puzzle", count: 1 },
      effect: { restoreAttemptOnWrongOnce: true }
    }
  },
  "Honrarás a tu padre y madre": {
    image: "honrar-padres.png",
    tag: "Mandamiento IV",
    blessing: "1 vez por acertijo puedes pedir “Pista 1 mejorada” (un matiz extra) sin coste.",
    vow: { title: "Voto", text: "No puedes usar Milagro en un turno donde ya hayas desbloqueado Pista 2." },
    power: {
      title: "Milagro",
      text: "Revela una “Palabra clave” del acertijo (1 vez por acertijo).",
      uses: { per: "puzzle", count: 1 },
      effect: { revealKeyword: true }
    }
  },
  "No matarás": {
    image: "no-mataras.png",
    tag: "Mandamiento V",
    blessing: "Tu primer fallo del turno no aplica -30s (solo -1 intento) (1 vez por acertijo).",
    vow: { title: "Voto", text: "Si te queda 1 intento, no puedes gastar el símbolo en poderes: solo Pista 2 (o nada)." },
    power: {
      title: "Milagro",
      text: "“Clemencia”: cancela una penalización personal activa este turno (1 vez por acertijo).",
      uses: { per: "puzzle", count: 1 },
      effect: { clearActivePenaltyOnce: true }
    }
  },
  "No cometerás adulterio": {
    image: "no-actos-impuros.png",
    tag: "Mandamiento VI",
    blessing: "Si resuelves sin desbloquear Pista 2, tu siguiente turno gana +1 intento (máx 3) (1 vez por acertijo).",
    vow: { title: "Voto", text: "Si desbloqueas Pista 2, debes verificar antes de que queden 60s o pierdes el turno." },
    power: {
      title: "Milagro",
      text: "Si tu reloj baja de 60s, lo sube a 90s (1 vez por acertijo).",
      uses: { per: "puzzle", count: 1 },
      effect: { setTimeToSecIfBelow: 90, thresholdBelowSec: 60 }
    }
  },
  "No robarás": {
    image: "no-robaras.png",
    tag: "Mandamiento VII",
    blessing: "Si fallas una verificación, recuperas +10s (solo la primera vez por turno) (1 vez por acertijo).",
    vow: { title: "Voto", text: "No puedes desbloquear Pista 2 dos turnos seguidos." },
    power: {
      title: "Milagro",
      text: "“Restituir”: recupera +1 intento perdido del turno (máx hasta 2) (1 vez por acertijo).",
      uses: { per: "puzzle", count: 1 },
      effect: { addAttempts: 1, capAttempts: 2 }
    }
  },
  "No darás falso testimonio": {
    image: "no-falso-testimonio.png",
    tag: "Mandamiento VIII",
    blessing: "Al escribir una respuesta, el host muestra “✔ formato válido” (sin revelar si es correcta).",
    vow: { title: "Voto", text: "Solo puedes verificar 1 vez por turno." },
    power: {
      title: "Milagro",
      text: "“Veredicto”: el host te da “más cerca/más lejos” comparado con tu última respuesta (1 vez por partida).",
      uses: { per: "game", count: 1 },
      effect: { warmerColderOnce: true }
    }
  },
  "No codiciarás bienes ajenos": {
    image: "no-codiciar-bienes.png",
    tag: "Mandamiento IX",
    blessing: "Si el jugador anterior gastó el símbolo en un poder, tú ganas +10s al inicio de tu turno (1 vez por acertijo).",
    vow: { title: "Voto", text: "No puedes usar Milagro hasta haber hecho al menos 1 verificación (o consumido 1 intento) en tu turno." },
    power: {
      title: "Milagro",
      text: "Desbloquea Pista 2 en tu turno. (Se considera el gasto del símbolo del turno.) (1 vez por acertijo).",
      uses: { per: "puzzle", count: 1 },
      effect: { unlockHint2: true }
    }
  },
  "No codiciarás la pareja del prójimo": {
    image: "no-pensamientos-impuros.png",
    tag: "Mandamiento X",
    blessing: "Si la respuesta es texto, se aceptan variantes ortográficas extra (tildes, mayúsculas, espacios y plural) salvo que uses Pista 2.",
    vow: { title: "Voto", text: "Si desbloqueas Pista 2, tu respuesta debe ser exacta (canónica) (sin variantes)." },
    power: {
      title: "Milagro",
      text: "“Inspiración”: añade +30s al reloj del turno (1 vez por acertijo).",
      uses: { per: "puzzle", count: 1 },
      effect: { addTimeSec: 30 }
    }
  }
};

// =========================
// ARCHIVUM — Pecados capitales (Ventaja + Coste + Tentación)
// - Tentación: afecta al PRÓXIMO turno del objetivo.
// - Activar Tentación gasta el símbolo del turno.
// - Los contadores (1 vez) son por ACERTIJO y por JUGADOR salvo que se indique (1/partida).
// =========================
const SIN_META = {
  "Soberbia": {
    key: "Soberbia",
    img: "soberbia.png",
    advantage: "+10s al inicio de tu turno (1 vez por acertijo).",
    cost: "Si fallas una verificación, pierdes -10s extra.",
    temptation: {
      title: "Tentación",
      text: "El objetivo empieza su próximo turno con -30s.",
      uses: { per: "puzzle", count: 1 },
      targetPenalty: { timeDelta: -30 }
    }
  },
  "Avaricia": {
    key: "Avaricia",
    img: "avaricia.png",
    advantage: "Si resuelves sin desbloquear Pista 2, guardas 1 “Moneda” (máx 1) → en otro turno te da +1 intento.",
    cost: "Si desbloqueas Pista 2, pierdes -15s.",
    temptation: {
      title: "Tentación",
      text: "El objetivo no puede usar bolígrafo/notas en su próximo turno (solo mente/voz).",
      uses: { per: "puzzle", count: 1 },
      targetPenalty: { physical: "Sin bolígrafo/notas (próximo turno)." }
    }
  },
  "Lujuria": {
    key: "Lujuria",
    img: "lujuria.png",
    advantage: "1 vez por acertijo puedes resetear tu reloj a 120s si está por debajo.",
    cost: "Si fallas una vez, el resto del turno no puedes pedir pistas.",
    temptation: {
      title: "Tentación",
      text: "El objetivo no puede usar Pista 1 durante sus primeros 60s.",
      uses: { per: "puzzle", count: 1 },
      targetPenalty: { blockHint1ForSecFromStart: 60 }
    }
  },
  "Envidia": {
    key: "Envidia",
    img: "envidia.png",
    advantage: "Si el jugador anterior acertó, tú empiezas con +1 intento (máx 3).",
    cost: "Si tú aciertas, tu siguiente turno empieza con -10s.",
    temptation: {
      title: "Tentación",
      text: "El objetivo no puede gastar símbolo en Pista 2 ese turno (Pista 2 bloqueada).",
      uses: { per: "puzzle", count: 1 },
      targetPenalty: { blockHint2ThisTurn: true }
    }
  },
  "Gula": {
    key: "Gula",
    img: "gula.png",
    advantage: "Puedes ver Pista 1 sin consumir nada aunque el host aún no la muestre (privada) 1 vez por acertijo.",
    cost: "Cada pista que uses te cuesta -10s.",
    temptation: {
      title: "Tentación",
      text: "El objetivo pierde -15s y su penalización por fallo es -45s (en vez de -30s) ese turno.",
      uses: { per: "puzzle", count: 1 },
      targetPenalty: { timeDelta: -15, wrongPenaltyOverrideSec: 45 }
    }
  },
  "Ira": {
    key: "Ira",
    img: "ira.png",
    advantage: "Cuando fallas, recuperas +1 intento (solo 1 vez por partida).",
    cost: "Si te queda 1 intento, estás obligado a verificar antes de que queden 30s.",
    temptation: {
      title: "Tentación",
      text: "Si el objetivo falla una verificación, pierde -1 intento extra (castigo doble).",
      uses: { per: "puzzle", count: 1 },
      targetPenalty: { wrongExtraAttemptLoss: true }
    }
  },
  "Pereza": {
    key: "Pereza",
    img: "pereza.png",
    advantage: "Si no usas pistas, terminas el turno con +15s guardados para el siguiente (máx +15).",
    cost: "Empiezas siempre con -10s.",
    temptation: {
      title: "Tentación",
      text: "El objetivo no puede verificar hasta que el reloj baje de 120s (primeros 60s bloqueado).",
      uses: { per: "puzzle", count: 1 },
      targetPenalty: { verifyLockedWhileRemainingAbove: 120 }
    }
  }
};


// === NUEVOS ACERTIJOS AÑADIDOS ===

// ORIGEN
ROOMS_DATA['origen'].puzzles.push({id:'OR-11', title:'La primera palabra', difficulty:'Fácil', tags:'biblia', requiresBible:true, body:`¿Qué dijo Dios antes de que existiera todo?`, hint1:`Está en Génesis 1.`, hint2:`Dos palabras.`, solution:`Sea la luz`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-12', title:'Polvo y aliento', difficulty:'Fácil–media', tags:'biblia', requiresBible:true, body:`¿De qué fue formado el primer hombre?`, hint1:`No es barro moderno.`, hint2:`Polvo del suelo.`, solution:`Polvo`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-13', title:'El principio', difficulty:'Media', tags:'biblia', requiresBible:true, body:`¿Qué libro abre la Biblia?`, hint1:`Habla del inicio.`, hint2:`Empieza por G.`, solution:`Génesis`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-14', title:'Siete', difficulty:'Media', tags:'logica', requiresBible:false, body:`¿Cuántos días duró la creación?`, hint1:`Incluye el descanso.`, hint2:`Número completo.`, solution:`7`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-15', title:'La voz', difficulty:'Media–difícil', tags:'biblia', requiresBible:true, body:`Antes de la luz hubo una orden. ¿Qué fue?`, hint1:`No es un objeto.`, hint2:`Una palabra.`, solution:`La palabra`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-16', title:'El huerto', difficulty:'Fácil', tags:'biblia', requiresBible:true, body:`¿Dónde fue puesto el hombre al inicio?`, hint1:`Un jardín.`, hint2:`Empieza por E.`, solution:`Edén`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-17', title:'Comienzo y fin', difficulty:'Media', tags:'logica', requiresBible:false, body:`Soy principio y final. ¿Qué letra soy?`, hint1:`Griega.`, hint2:`Primera.`, solution:`Alfa`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-18', title:'La costilla', difficulty:'Fácil–media', tags:'biblia', requiresBible:true, body:`¿De qué fue creada Eva?`, hint1:`Parte del hombre.`, hint2:`No es hueso largo.`, solution:`Costilla`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-19', title:'La caída', difficulty:'Media', tags:'biblia', requiresBible:true, body:`¿Qué acción rompió el orden?`, hint1:`Tiene que ver con un fruto.`, hint2:`Desobedecer.`, solution:`Pecar`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-20', title:'Reposo', difficulty:'Fácil', tags:'biblia', requiresBible:true, body:`¿Qué hizo Dios el séptimo día?`, hint1:`No creó.`, hint2:`Descansó.`, solution:`Descansar`});


// === NUEVOS ACERTIJOS (2ª tanda: 10 por sala restante) ===

// PROMESA
ROOMS_DATA['promesa'].puzzles.push({id:'PR-11', title:'El arco del pacto', difficulty:'Fácil', tags:'Pacto · Biblia', requiresBible:true, body:`Tras el diluvio, Dios dejó una señal en el cielo como promesa. ¿Cuál?`, hint1:`Piensa en colores tras la lluvia.`, hint2:`Está en Génesis 9.`, solution:`Arcoíris`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-12', title:'Nombre cambiado', difficulty:'Fácil–media', tags:'Abraham · Biblia', requiresBible:true, body:`Dios cambió el nombre de Abram como parte de su promesa. ¿En qué lo convirtió?`, hint1:`Es el patriarca de la fe.`, hint2:`Añade una letra clave.`, solution:`Abraham`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-13', title:'La risa', difficulty:'Media', tags:'Sara · Biblia', requiresBible:true, body:`Cuando oyó la promesa de un hijo, Sara hizo algo que dio nombre a Isaac. ¿Qué hizo?`, hint1:`No fue llanto.`, hint2:`Fue una reacción incrédula.`, solution:`Rió`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-14', title:'Estrellas', difficulty:'Media', tags:'Promesa · Biblia', requiresBible:true, body:`Dios comparó la descendencia de Abraham con algo imposible de contar. ¿Con qué?`, hint1:`Mira al cielo de noche.`, hint2:`No es arena (esa también se usa).`, solution:`Estrellas`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-15', title:'La tierra prometida', difficulty:'Fácil', tags:'Geografía bíblica', requiresBible:true, body:`¿Cómo se llama la tierra que Dios prometió dar al pueblo?`, hint1:`Empieza por C.`, hint2:`También se dice ‘tierra de Canaán’.`, solution:`Canaán`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-16', title:'Señal en la carne', difficulty:'Media', tags:'Pacto · Biblia', requiresBible:true, body:`¿Qué señal física marcaba el pacto con Abraham?`, hint1:`No es tatuaje.`, hint2:`Es un rito antiguo.`, solution:`Circuncisión`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-17', title:'Dos nombres, un mismo lugar', difficulty:'Media', tags:'Promesa · Biblia', requiresBible:true, body:`‘Betel’ antes se llamaba de otra forma. ¿Cuál?`, hint1:`Jacob durmió allí.`, hint2:`Nombre corto.`, solution:`Luz`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-18', title:'El carnero', difficulty:'Media–difícil', tags:'Isaac · Biblia', requiresBible:true, body:`En el monte, Dios proveyó un sustituto para Isaac. ¿Qué animal fue?`, hint1:`Tenía cuernos.`, hint2:`Quedó atrapado en un matorral.`, solution:`Carnero`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-19', title:'La escalera', difficulty:'Fácil–media', tags:'Jacob · Biblia', requiresBible:true, body:`Jacob soñó con algo que unía cielo y tierra. ¿Qué era?`, hint1:`No es una puerta.`, hint2:`Se sube peldaño a peldaño.`, solution:`Escalera`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-20', title:'El nombre del hijo', difficulty:'Fácil', tags:'Isaac · Biblia', requiresBible:true, body:`El hijo de la promesa para Abraham y Sara se llamó…`, hint1:`Cuatro letras en español.`, hint2:`Suena a ‘isaac’.`, solution:`Isaac`});

// LIBERTAD
ROOMS_DATA['libertad'].puzzles.push({id:'LI-11', title:'El mar abierto', difficulty:'Fácil', tags:'Éxodo · Biblia', requiresBible:true, body:`¿Qué mar se abrió para que el pueblo escapara?`, hint1:`Moisés alzó la vara.`, hint2:`No fue el Jordán.`, solution:`Mar Rojo`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-12', title:'La noche señalada', difficulty:'Fácil–media', tags:'Pascua · Biblia', requiresBible:true, body:`En la primera Pascua, ¿qué se puso en los dinteles para librarse?`, hint1:`No fue agua.`, hint2:`Era una marca roja.`, solution:`Sangre`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-13', title:'Pan sin espera', difficulty:'Fácil', tags:'Pascua · Biblia', requiresBible:true, body:`¿Qué tipo de pan comieron al salir deprisa de Egipto?`, hint1:`Sin levadura.`, hint2:`Nombre bíblico.`, solution:`Ácimo`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-14', title:'¿Quién dijo ‘deja ir a mi pueblo’?', difficulty:'Media', tags:'Éxodo', requiresBible:true, body:`Completa: ‘Deja ir a mi pueblo’ lo dijo…`, hint1:`No fue Aarón.`, hint2:`Hablaba ante Faraón.`, solution:`Moisés`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-15', title:'Columna de guía', difficulty:'Media', tags:'Éxodo · Biblia', requiresBible:true, body:`Dios guió al pueblo con una columna de nube de día y una columna de… de noche.`, hint1:`No es humo.`, hint2:`Iluminaba el campamento.`, solution:`Fuego`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-16', title:'El primer mandamiento', difficulty:'Media', tags:'Decálogo · Biblia', requiresBible:true, body:`En Éxodo 20, el primer mandamiento comienza afirmando: ‘No tendrás…’`, hint1:`Algo delante de Dios.`, hint2:`No es ‘armas’.`, solution:`Otros dioses`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-17', title:'El becerro', difficulty:'Fácil–media', tags:'Éxodo · Biblia', requiresBible:true, body:`Mientras Moisés estaba en el monte, el pueblo adoró un…`, hint1:`Hecho de metal.`, hint2:`Animal joven.`, solution:`Becerro`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-18', title:'Agua en el desierto', difficulty:'Media', tags:'Éxodo · Biblia', requiresBible:true, body:`¿De qué salió agua cuando Moisés golpeó en el desierto?`, hint1:`No fue de un árbol.`, hint2:`Fue de una piedra.`, solution:`Roca`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-19', title:'Maná', difficulty:'Fácil', tags:'Desierto · Biblia', requiresBible:true, body:`El pan del cielo que recogían cada mañana se llamaba…`, hint1:`Empieza por M.`, hint2:`Se parece a ‘mana’.`, solution:`Maná`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-20', title:'La tierra de esclavitud', difficulty:'Media–difícil', tags:'Éxodo', requiresBible:true, body:`En la historia del éxodo, ¿de qué lugar fueron liberados?`, hint1:`No es Babilonia.`, hint2:`Reino del faraón.`, solution:`Egipto`});

// SABIDURIA
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-11', title:'El comienzo', difficulty:'Fácil', tags:'Proverbios · Biblia', requiresBible:true, body:`‘El principio de la sabiduría es…’ (Proverbios 9:10). Completa la frase.`, hint1:`No es ‘estudiar’.`, hint2:`Tiene que ver con reverencia.`, solution:`Temor`});
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-12', title:'Dos caminos', difficulty:'Fácil–media', tags:'Proverbios', requiresBible:true, body:`En Proverbios, el sabio escucha consejo y el necio lo…`, hint1:`Verbo de rechazo.`, hint2:`Sinónimo: despreciar.`, solution:`Rechaza`});
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-13', title:'Salomón pidió una cosa', difficulty:'Media', tags:'Reyes · Biblia', requiresBible:true, body:`A Salomón se le ofreció lo que quisiera. ¿Qué pidió?`, hint1:`No pidió riqueza.`, hint2:`Pidió para gobernar.`, solution:`Sabiduría`});
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-14', title:'Vanidad', difficulty:'Fácil', tags:'Eclesiastés · Biblia', requiresBible:true, body:`‘Vanidad de vanidades, todo es…’ ¿Qué palabra falta?`, hint1:`Es la misma.`, hint2:`Repite la idea.`, solution:`Vanidad`});
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-15', title:'Tres libros', difficulty:'Media', tags:'Biblia', requiresBible:true, body:`Tradicionalmente, ¿qué rey se asocia con Proverbios, Eclesiastés y Cantares?`, hint1:`Hijo de David.`, hint2:`Rey sabio.`, solution:`Salomón`});
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-16', title:'La lengua', difficulty:'Media', tags:'Proverbios', requiresBible:true, body:`Proverbios dice que la lengua puede dar vida o…`, hint1:`No es ‘dinero’.`, hint2:`Es lo contrario de vida.`, solution:`Muerte`});
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-17', title:'Pedir, buscar, llamar', difficulty:'Fácil–media', tags:'Evangelios', requiresBible:true, body:`‘Pedid y se os dará; buscad y…’ Completa.`, hint1:`Es un verbo de hallazgo.`, hint2:`Empieza por E.`, solution:`Encontraréis`});
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-18', title:'Casa sobre roca', difficulty:'Media', tags:'Parábola', requiresBible:true, body:`El hombre prudente edificó su casa sobre la…`, hint1:`No es arena.`, hint2:`Material firme.`, solution:`Roca`});
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-19', title:'Una palabra para el prudente', difficulty:'Media–difícil', tags:'Lógica · Biblia', requiresBible:true, body:`En Proverbios, el prudente ‘calla’ cuando conviene. ¿Qué virtud practica?`, hint1:`No es cobardía.`, hint2:`Es control al hablar.`, solution:`Silencio`});
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-20', title:'Falta una letra', difficulty:'Fácil', tags:'Lógica', requiresBible:false, body:`SABIDURIA sin tilde tiene 9 letras. Si quitas la letra del centro, ¿qué letra era?`, hint1:`Cuenta 9 letras.`, hint2:`La 5ª letra.`, solution:`D`});

// SACRIFICIO
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-11', title:'El cordero', difficulty:'Fácil', tags:'Pascua · Biblia', requiresBible:true, body:`En la Pascua, ¿qué animal se sacrificaba como señal?`, hint1:`No es cabrito.`, hint2:`Animal joven y suave.`, solution:`Cordero`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-12', title:'Sustitución', difficulty:'Fácil–media', tags:'Génesis 22', requiresBible:true, body:`En el sacrificio de Isaac, Dios provee un sustituto. ¿Qué idea enseña esto?`, hint1:`Una vida por otra.`, hint2:`Palabra clave.`, solution:`Sustitución`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-13', title:'Holocausto', difficulty:'Media', tags:'Levítico', requiresBible:true, body:`En Levítico, el holocausto era una ofrenda completamente…`, hint1:`No quedaba nada.`, hint2:`Verbo: consumir.`, solution:`Quemada`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-14', title:'El altar', difficulty:'Fácil', tags:'Biblia', requiresBible:true, body:`¿Sobre qué se colocaban las ofrendas?`, hint1:`No es una mesa común.`, hint2:`Lugar sagrado.`, solution:`Altar`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-15', title:'‘Cordero de Dios’', difficulty:'Media', tags:'Evangelios', requiresBible:true, body:`Juan el Bautista llamó a Jesús ‘el Cordero de Dios que quita el…’`, hint1:`Una palabra.`, hint2:`Lo que se perdona.`, solution:`Pecado`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-16', title:'La copa', difficulty:'Media', tags:'Evangelios', requiresBible:true, body:`En Getsemaní, Jesús habla de ‘esta copa’. ¿Qué simboliza?`, hint1:`No es bebida literal.`, hint2:`Sufrimiento y destino.`, solution:`Sufrimiento`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-17', title:'Tres cruces', difficulty:'Fácil–media', tags:'Evangelios', requiresBible:true, body:`En el Calvario había tres cruces. ¿Cuántas personas fueron crucificadas?`, hint1:`No cuentes solo a Jesús.`, hint2:`Número total.`, solution:`3`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-18', title:'La sangre del pacto', difficulty:'Media', tags:'Evangelios', requiresBible:true, body:`En la última cena: ‘Esta es mi sangre del…’`, hint1:`Palabra de alianza.`, hint2:`Empieza por P.`, solution:`Pacto`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-19', title:'El velo rasgado', difficulty:'Media–difícil', tags:'Evangelios', requiresBible:true, body:`Tras la muerte de Jesús, ¿qué se rasgó en el templo?`, hint1:`No fue una pared.`, hint2:`Era una cortina sagrada.`, solution:`Velo`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-20', title:'Un sacrificio vivo', difficulty:'Media', tags:'Romanos', requiresBible:true, body:`Romanos 12:1 habla de ofrecer el cuerpo como sacrificio…`, hint1:`No es ‘muerto’.`, hint2:`Es un adjetivo.`, solution:`Vivo`});

// VIDA
ROOMS_DATA['vida'].puzzles.push({id:'VI-11', title:'La tumba vacía', difficulty:'Fácil', tags:'Resurrección · Biblia', requiresBible:true, body:`Tras el tercer día, ¿qué se encontró en la tumba?`, hint1:`No estaba el cuerpo.`, hint2:`Dos palabras.`, solution:`Tumba vacía`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-12', title:'Camino, verdad y vida', difficulty:'Fácil–media', tags:'Juan', requiresBible:true, body:`Jesús dijo: ‘Yo soy el camino, la verdad y la…’`, hint1:`Última palabra.`, hint2:`Nombre de la sala.`, solution:`Vida`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-13', title:'Nuevo nacimiento', difficulty:'Media', tags:'Juan 3', requiresBible:true, body:`Jesús dijo a Nicodemo que era necesario ‘nacer de…’`, hint1:`No es ‘nuevo’ (eso también).`, hint2:`Dos palabras.`, solution:`Nuevo`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-14', title:'El buen pastor', difficulty:'Fácil', tags:'Evangelios', requiresBible:true, body:`¿Qué animal se menciona en ‘Yo soy el buen pastor’?`, hint1:`Lo cuida el pastor.`, hint2:`Animal del rebaño.`, solution:`Ovejas`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-15', title:'Fruto del Espíritu', difficulty:'Media', tags:'Gálatas', requiresBible:true, body:`Nombra uno de los frutos del Espíritu.`, hint1:`Hay varios válidos.`, hint2:`Elige uno.`, solution:`Amor`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-16', title:'Agua viva', difficulty:'Media', tags:'Juan 4', requiresBible:true, body:`Jesús ofrece a la samaritana ‘agua…’`, hint1:`Adjetivo.`, hint2:`Nombre de la vida.`, solution:`Viva`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-17', title:'La luz del mundo', difficulty:'Fácil–media', tags:'Juan', requiresBible:true, body:`‘Yo soy la luz del mundo’. ¿Qué palabra clave se repite en varias salas?`, hint1:`No es ‘mundo’.`, hint2:`Tema central.`, solution:`Luz`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-18', title:'Primera comunidad', difficulty:'Media', tags:'Hechos', requiresBible:true, body:`En Hechos, los creyentes perseveraban en la enseñanza, comunión, partir el pan y…`, hint1:`Una palabra.`, hint2:`Se relaciona con Dios.`, solution:`Oración`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-19', title:'Nombre del libro', difficulty:'Fácil', tags:'Biblia', requiresBible:true, body:`¿Qué libro narra el inicio de la Iglesia tras la resurrección?`, hint1:`Después de los Evangelios.`, hint2:`Empieza por H.`, solution:`Hechos`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-20', title:'El final prometido', difficulty:'Media–difícil', tags:'Apocalipsis', requiresBible:true, body:`En Apocalipsis, la ciudad final se llama ‘Nueva…’`, hint1:`No es ‘Roma’.`, hint2:`Nombre bíblico.`, solution:`Jerusalén`});


// === BALANCE PATCH: +25 acertijos SIN BIBLIA (15 fáciles, 10 media–difíciles) ===

// ORIGEN
ROOMS_DATA['origen'].puzzles.push({id:'OR-21', title:'La primera letra', difficulty:'Fácil', tags:'logica', requiresBible:false, body:`Antes de todo, soy la primera. Sin mí no hay principio. ¿Qué soy?`, hint1:`No es un número.`, hint2:`La encuentras al inicio del alfabeto.`, solution:`A`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-22', title:'Sin peso, sin forma', difficulty:'Fácil–media', tags:'logica', requiresBible:false, body:`Me ves cuando hay luz, pero no me puedes atrapar. Si corro, tú corres. ¿Qué soy?`, hint1:`Nace de ti.`, hint2:`No es reflejo.`, solution:`Sombra`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-23', title:'Comienzo oculto', difficulty:'Fácil', tags:'observacion', requiresBible:false, body:`En la palabra **ORIGEN** hay algo que empieza y algo que termina. ¿Qué letra empieza y qué letra termina?`, hint1:`Dos letras.`, hint2:`O y N`, solution:`ON`});
ROOMS_DATA['origen'].puzzles.push({id:'OR-24', title:'El eco del inicio', difficulty:'Media–difícil', tags:'logica', requiresBible:false, body:`Si me dices una vez, me oyes dos. No soy persona ni objeto. ¿Qué soy?`, hint1:`Sucede en montañas o salas vacías.`, hint2:`Repite tu voz.`, solution:`Eco`});

// PROMESA
ROOMS_DATA['promesa'].puzzles.push({id:'PR-21', title:'Señal en el cielo', difficulty:'Fácil', tags:'palabra', requiresBible:false, body:`Aparezco tras la tormenta y parezco un puente de colores. ¿Qué soy?`, hint1:`No es una nube.`, hint2:`Suele salir con sol y lluvia.`, solution:`Arcoiris`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-22', title:'Lo que se espera', difficulty:'Fácil–media', tags:'logica', requiresBible:false, body:`No se puede guardar en una caja, pero sostiene a quien camina en oscuridad. ¿Qué es?`, hint1:`No es fe (aunque se le parece).`, hint2:`También es lo último que se pierde.`, solution:`Esperanza`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-23', title:'La promesa más corta', difficulty:'Fácil', tags:'palabra', requiresBible:false, body:`Una promesa de una sola palabra: cuando alguien dice que lo hará, responde con…`, hint1:`Se usa en juramentos sencillos.`, hint2:`Empieza por 'si'.`, solution:`Sí`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-24', title:'Tres letras, mil promesas', difficulty:'Media–difícil', tags:'logica', requiresBible:false, body:`Tengo 3 letras. Si me quitas la primera, me convierto en una pregunta. ¿Qué palabra soy?`, hint1:`Empieza por 'q'.`, hint2:`Sin la primera letra queda 'ué'.`, solution:`Qué`});
ROOMS_DATA['promesa'].puzzles.push({id:'PR-25', title:'El pacto invisible', difficulty:'Media–difícil', tags:'logica', requiresBible:false, body:`No es papel, pero te ata. No es cadena, pero te obliga. ¿Qué es?`, hint1:`Se hace entre dos.`, hint2:`Puede romperse.`, solution:`Compromiso`});

// LIBERTAD
ROOMS_DATA['libertad'].puzzles.push({id:'LI-21', title:'La salida', difficulty:'Fácil', tags:'logica', requiresBible:false, body:`No soy puerta, pero te saco de la prisión. No soy arma, pero rompo cadenas. ¿Qué soy?`, hint1:`Cabe en la mano.`, hint2:`Abre cerraduras.`, solution:`Llave`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-22', title:'Sin barrotes', difficulty:'Fácil–media', tags:'palabra', requiresBible:false, body:`Completa la frase: “Yo soy ____”. (La palabra que define libertad en una sola.)`, hint1:`No es “suelo”.`, hint2:`Empieza por 'li'.`, solution:`Libre`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-23', title:'El paso final', difficulty:'Fácil', tags:'logica', requiresBible:false, body:`Para ser libre necesitas dar este paso: dejar atrás lo que te retiene. ¿Qué acción es?`, hint1:`Es un verbo.`, hint2:`No es luchar.`, solution:`Soltar`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-24', title:'La jaula de oro', difficulty:'Media–difícil', tags:'logica', requiresBible:false, body:`¿Qué es lo único que una jaula de oro no puede comprar?`, hint1:`No es dinero.`, hint2:`Tiene que ver con decidir.`, solution:`Libertad`});
ROOMS_DATA['libertad'].puzzles.push({id:'LI-25', title:'Sin nombre, sin cadenas', difficulty:'Media–difícil', tags:'observacion', requiresBible:false, body:`Escribe la palabra **LIBERTAD** sin su primera y sin su última letra. ¿Qué queda?`, hint1:`Quita dos letras.`, hint2:`Empieza por I y termina por A.`, solution:`IBERTA`});

// SABIDURIA
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-21', title:'Más que hablar', difficulty:'Fácil', tags:'logica', requiresBible:false, body:`La sabiduría entra por los oídos. ¿Qué verbo describe eso?`, hint1:`No es mirar.`, hint2:`Es lo contrario de interrumpir.`, solution:`Escuchar`});
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-22', title:'La llave del porqué', difficulty:'Fácil–media', tags:'palabra', requiresBible:false, body:`La pregunta que abre muchas respuestas: ¿____?`, hint1:`Una sola palabra.`, hint2:`Empieza por P.`, solution:`Por qué`});
ROOMS_DATA['sabiduria'].puzzles.push({id:'SA-23', title:'Verdad en dos sílabas', difficulty:'Media–difícil', tags:'logica', requiresBible:false, body:`Si me dices con prisa, soy excusa. Si me dices con calma, soy verdad. ¿Qué palabra soy?`, hint1:`Dos sílabas.`, hint2:`Empieza por 'pe'.`, solution:`Perdón`});

// SACRIFICIO
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-21', title:'Lo que entregas', difficulty:'Fácil', tags:'palabra', requiresBible:false, body:`En un sacrificio, lo más importante es lo que estás dispuesto a…`, hint1:`Verbo.`, hint2:`No es “guardar”.`, solution:`Dar`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-22', title:'El precio', difficulty:'Fácil–media', tags:'logica', requiresBible:false, body:`Todo sacrificio tiene un ____.`, hint1:`No es castigo.`, hint2:`Se paga por algo valioso.`, solution:`Precio`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-23', title:'La elección difícil', difficulty:'Media–difícil', tags:'logica', requiresBible:false, body:`Si eliges el bien cuando nadie mira, ¿cómo se llama esa fuerza interior?`, hint1:`No es miedo.`, hint2:`Se parece a 'valor'.`, solution:`Coraje`});
ROOMS_DATA['sacrificio'].puzzles.push({id:'SC-24', title:'Sin ver, pero cierto', difficulty:'Media–difícil', tags:'logica', requiresBible:false, body:`Un sacrificio real duele antes de verse. ¿Qué palabra resume eso?`, hint1:`No es sangre.`, hint2:`Es renunciar.`, solution:`Renuncia`});

// VIDA
ROOMS_DATA['vida'].puzzles.push({id:'VI-21', title:'Lo invisible que te llena', difficulty:'Fácil', tags:'logica', requiresBible:false, body:`Me necesitas cada segundo, pero casi nunca me miras. ¿Qué soy?`, hint1:`No es agua.`, hint2:`Entra y sale.`, solution:`Aire`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-22', title:'Una vida en una palabra', difficulty:'Fácil–media', tags:'palabra', requiresBible:false, body:`Completa: “La vida se abre paso y vuelve a ____.”`, hint1:`Verbo.`, hint2:`No es “parar”.`, solution:`Crecer`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-23', title:'Latido', difficulty:'Media–difícil', tags:'logica', requiresBible:false, body:`Sin mí no hay vida, pero no soy órgano. Marco el ritmo. ¿Qué soy?`, hint1:`Se mide.`, hint2:`Puede acelerarse.`, solution:`Pulso`});
ROOMS_DATA['vida'].puzzles.push({id:'VI-24', title:'El final que empieza', difficulty:'Media–difícil', tags:'logica', requiresBible:false, body:`¿Qué palabra significa a la vez “final” y “comienzo” en historias?`, hint1:`No es “muerte”.`, hint2:`También se usa en libros.`, solution:`Epílogo`});
