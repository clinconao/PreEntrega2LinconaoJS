class boletaHonorario {
    constructor(nombre, servicio, monto, tasaRetencion, anio, bolsillo) {
        this.nombre = nombre;
        this.servicio = servicio;
        this.monto = monto;
        this.tasaRetencion = tasaRetencion;
        this.anio = anio;
        this.bolsillo = bolsillo;
    }

}

const cantBoletas = parseInt(prompt("¿Cuántas boletas quieres calcular?"))
const servicios = []

for (let i = 0; i < cantBoletas; i++) {
    const nombre = prompt("Ingresar nombre");
    const servicio = prompt("Ingrese nombre del servicio realizado");
    const monto = prompt("Ingrese monto a cobrar por el servicio")
    const tasaRetencion = prompt("Ingresa tu tasa de retención (solo numeros enteros)")
    const anio = prompt("Ingresa el año en que realizaste el servicio")
    const calculo = monto / 100 * tasaRetencion
    const bolsillo = monto - calculo
    const serv = new boletaHonorario (nombre, servicio, monto, tasaRetencion, anio, bolsillo)
    servicios.push(serv)
}

console.log(servicios)

alert("Tus boletas fueron cargadas con éxito")