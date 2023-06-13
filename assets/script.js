const formulario = document.querySelector('form');
const listaPresupuestos = document.querySelector('#lista-presupuestos');
const presupuestoInicial = {
  nombre: 'Presupuesto inicial',
  descripcion: 'Detalles',
  monto: 1000000
};
let montoActual = presupuestoInicial.monto;

function agregarPresupuesto(nombre, descripcion, monto) {
  const nuevoPresupuesto = document.createElement('li');

  let montoRestante = nombre === presupuestoInicial.nombre ? montoActual : montoActual - parseInt(monto);
  nuevoPresupuesto.innerText = `${nombre} - ${descripcion} - $${monto}, Monto restante: $${montoRestante}`;

  listaPresupuestos.appendChild(nuevoPresupuesto);
}

agregarPresupuesto(presupuestoInicial.nombre, presupuestoInicial.descripcion, presupuestoInicial.monto);

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const descripcion = document.querySelector('#descripcion').value;
  const monto = document.querySelector('#monto').value;

  montoActual -= parseInt(monto);

  agregarPresupuesto(nombre, descripcion, monto);

  const montoRestanteInicial = montoActual;
  const presupuestoInicialElemento = document.querySelector('li');
  presupuestoInicialElemento.innerText = `${presupuestoInicial.nombre} - ${presupuestoInicial.descripcion} - $${presupuestoInicial.monto}, Monto restante: $${montoRestanteInicial}`;

  formulario.reset();
});
