const myobject = {
    nombre : "Fran Espino",
    edad: 24,
    cursos: ["javascript", "android","react"],
    horario: {
        nocturno: true,
        diurno: false
    },
    saludo: function saludar(){
        console.log(`Hola alumnos de Idat ${this.nombre}`)
    },
    todosLosCursos: function  () {
        let i = 0
        console.log(this.cursos.length -1)
        while(i <= this.cursos.length -1){
            console.log(`Cursos ${i} :  ${this.cursos[i]}`)
            i = i + 1
        }
    }
}

myobject.todosLosCursos()

function saluda1(){
    console.log("Saludando 1...")
}

const saludo2 = () =>{
    console.log("Saludando 2...")
}