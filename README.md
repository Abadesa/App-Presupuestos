# Readme - Control de Presupuestos

Este código implementa una funcionalidad de control de presupuestos utilizando JavaScript y HTML. Permite agregar presupuestos y llevar un registro de los mismos, mostrando el monto inicial y el monto restante en cada uno de ellos.

## Instrucciones de uso

1. Descarga los archivos `index.html` y `script.js`.
2. Abre `index.html` en tu navegador web.
3. Se mostrará un formulario donde podrás ingresar los datos de un nuevo presupuesto: nombre, descripción y monto.
4. Haz clic en el botón "Agregar" o presiona la tecla Enter para agregar el presupuesto.
5. El presupuesto se agregará a la lista de presupuestos y se mostrará su nombre, descripción, monto y monto restante.
6. El monto restante se actualiza automáticamente cada vez que se agrega un presupuesto.
7. El presupuesto inicial se muestra en la parte superior de la lista y muestra el monto restante total.

## Detalles de implementación

El código utiliza JavaScript y el modelo de objetos del documento (DOM) para interactuar con los elementos HTML y manipular su contenido.

### Variables

- `formulario`: referencia al elemento `<form>` del documento HTML.
- `listaPresupuestos`: referencia al elemento con el id `lista-presupuestos`, que representa la lista donde se mostrarán los presupuestos.
- `presupuestoInicial`: objeto que contiene la información del presupuesto inicial, incluyendo nombre, descripción y monto.
- `montoActual`: variable que almacena el monto actual restante, inicializada con el monto del presupuesto inicial.

### Funciones

- `agregarPresupuesto(nombre, descripcion, monto)`: función que agrega un nuevo presupuesto a la lista de presupuestos. Crea un nuevo elemento `<li>` y establece su contenido con los datos del presupuesto y el monto restante correspondiente.
- `formulario.addEventListener('submit', function(evento) {...})`: función que se ejecuta cuando se envía el formulario. Previene la recarga de la página, obtiene los valores ingresados en los campos del formulario, actualiza el monto actual restando el monto ingresado y llama a la función `agregarPresupuesto` para agregar el presupuesto a la lista. Luego, actualiza el monto restante del presupuesto inicial y reinicia el formulario.

<<<<<<< HEAD
![image](/img/Dise%C3%B1o.jpg)
=======
![image](![image](https://github.com/Abadesa/app-presupuestos/assets/126904176/616985b2-27e0-44e6-844b-034e38c4e869))
>>>>>>> f5d2d639894005c6cabd63207957f957c02e3155

## Notas adicionales

- El código asume que existe un formulario con los siguientes elementos:
  - Un campo de texto con el id `nombre` para ingresar el nombre del presupuesto.
  - Un campo de texto con el id `descripcion` para ingresar la descripción del presupuesto.
  - Un campo de texto con el id `monto` para ingresar el monto del presupuesto.
  - Un botón o un elemento de tipo `submit` para enviar el formulario.
- El código también asume que existe un elemento `<ul>` con el id `lista-presupuestos` donde se mostrarán los presupuestos.
- El código utiliza la función `parseInt` para convertir el valor del monto ingresado a un número entero antes de restarlo al monto actual. Esto asegura que se realice una operación aritmética adecuada.
- Puedes modificar el código para adaptarlo a tus necesidades o agregar funcionalidades adicionales.
