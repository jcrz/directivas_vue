/**
 * Tarea: Práctica de Directivas
 * 
 * - Directiva v-if
 * - Directiva v-for
 * 
 * Añade una lista de cosas que te gustaria aprender, y una segunda lista. Un encabezado
 * (header) a cada una de las listas. Usa la directiva v-if y una variable para determinar
 * si los encabezados se mustran o no. También usar la directiva v-for para generar las 
 * listas de forma dinámica.
 * 
 * Como bonus añade otra directiva v-if para mostrar únicamente un item por medio en la 
 * segunda lista. 
 */

const app = new Vue({
    el: '#app',
    data: {
        esVisible: true,
        itemsTech: [
            "HTML",
            "CSS",
            "Vue",
            "Webpack"
        ],
        itemsMarketing: [
            "Marketing digital",
            "Heramientas de edición",
            "Embudo de ventas",
            "Crear una Marca",
            "Estrategias de venta"
        ]
    }
});


