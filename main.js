
// #region 1. VARIABLES

// Products Grid -> Botonera de todos los Productos
const productsGrid  = document.querySelector("#productsGrid")
const topPG         = document.querySelector("#top_pg");
const upPG          = document.querySelector("#up_pg");
const downPG        = document.querySelector("#down_pg");
const bottomPG      = document.querySelector("#bottom_pg");

// Summary Receipt -> Resumen de Comprobante de Pago
const kindReceipt = document.querySelector("#kind-receipt")

// Global Variables
let pressed = false;
let directionality = "";
let timer;

// #endregion

// #region 2. FUNCTIONS

function startApp() {
  console.log("Iniciando :D ...");
}

function bucle() {
  if   (pressed) scrollPG()
  else clearInterval(timer)
}

function scrollPG() {
  if (directionality === "up") productsGrid.scroll(0, productsGrid.scrollTop - 72);
  if (directionality === "down") productsGrid.scroll(0, productsGrid.scrollTop + 72);
}

// #endregion

// #region 3. EVENT LISTENERS

function loadEventListeners() {
  // Cuando carga el DOM del documento
  document.addEventListener("DOMContentLoaded", startApp);

  // BOTON "DOWN" DE GRID PRODUCTS

  // cuando se hace click
  downPG.addEventListener("click", () => scrollPG() );
  // cuando se presiona el click
  downPG.addEventListener("mousedown", () => {
    pressed = true;
    directionality = "down";
    timer = setInterval( () => bucle(), 100);
  });
  // cuando se levanta el click
  downPG.addEventListener("mouseup", () => pressed = false);
  // cuando el cursor del mouse sale del boton
  downPG.addEventListener("mouseleave", () => pressed = false);

  // BOTON "UP" DE GRID PRODUCTS
  
  // cuando se hace click
  upPG.addEventListener( "click", () => scrollPG() );
  // cuando se presiona el click
  upPG.addEventListener("mousedown", () => {
    pressed = true;
    directionality = "up";
    timer = setInterval( () => bucle(), 100);
  });
  // cuando se levanta el click
  upPG.addEventListener("mouseup", () => pressed = false);
  // cuando el cursor del mouse sale del boton
  upPG.addEventListener("mouseleave", () => pressed = false);

  // Cuando se mueve la rueda del mouse
  kindReceipt.addEventListener("wheel", (e) => {
    // Si e.deltaY es mayor a 0 hacemos un scroll derecho de e.deltaY - 100, sino de e.deltaY + 100
    kindReceipt.scrollLeft += e.deltaY > 0 ? (e.deltaY - 100) : (e.deltaY + 100);
  });

}

loadEventListeners() // cargamos los eventos de escucha

// #endregion


