const precios = [100 , 200, 500, 1000, 150];

function calcularPrecioTotal() {
    const precioconiva = precios.map(precio=> precio * 1.21);
   console.log(precioconiva)
}
calcularPrecioTotal(precios);

