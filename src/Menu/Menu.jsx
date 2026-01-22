import React from "react";
import "./Menu.css";

const menuSections = [
  {
    title: "Para compartir",
    items: [
      {
        name: "ALBÓNDIGAS INDONESIO (6 PIEZAS)",
        desc: "Indonesian meatballs (6 pieces)",
        price: "5,95",
      },
      {
        name: "CROQUETAS CARNE GUISADA (4 PIEZAS)",
        desc: "Croquettes of stew meat (4 pieces)",
        price: "7,95",
      },
      {
        name: "CROQUETAS DE QUESO (6 PIEZAS)",
        desc: "Croquettes of cheese (6 pieces)",
        price: "7,95",
      },
      {
        name: "ROLLITO DE PRIMAVERA CON POLLO KETJAP (4 PIEZAS)",
        desc: "Spring roll with chicken and ketjap (4 pieces)",
        price: "6,95",
      },
      {
        name: "ROLLITO DE PRIMAVERA CON TERNERA RENDANG (4 PIEZAS)",
        desc: "Spring roll with rendang beef stew (4 pieces)",
        price: "6,95",
      },
      {
        name: "PASTEL THAI DE PESCADO CON SALSA DE CHILI (4 PIEZAS)",
        desc: "Thai fish cake with chili sauce (4 pieces)",
        price: "6,95",
      },
      {
        name: "GAMBA DE TEMPURA CON SALSA DE PICANTE",
        desc: "Shrimp tempura with spicy mayonnaise",
        price: "9,95",
      },
      {
        name: "MINI HAMBURGUESA (2 PIEZAS)",
        desc: "Mini burger (2 pieces)",
        price: "5,95",
      },
      {
        name: "POLLO BROCHETA BOEMBOE",
        desc: "Chicken skewer boemboe",
        price: "8,95",
      },
      {
        name: "MOLLEJAS CON LENTEJAS",
        desc: "Sweetbreads with lentils",
        price: "15,50",
      },
      {
        name: "PATATAS BRAVA CON SALSA TRUFA Y PARMESANO",
        desc: "Patatas brava with truffle sauce and parmesan",
        price: "4,95",
      },
      {
        name: "PATATAS BRAVA CON MAYONAISE DE PICANTE",
        desc: "Patatas brava with spicy mayonnaise",
        price: "4,95",
      },
    ],
  },
  {
    title: "Tablas",
    items: [
      {
        name: "PLATO QUESO",
        desc: "Platter of cheese",
        price: "14,50",
      },
      {
        name: "PLATO JAMÓN",
        desc: "Platter of jamón",
        price: "9,50",
      },
    ],
  },
  {
    title: "Especial",
    items: [
      {
        name: "TARTAR DE ATÚN BARBATE CON AGUACATE",
        desc: "Tuna tartare with avocado",
        price: "13,50",
      },
    ],
  },
  {
    title: "Sopas",
    items: [
      {
        name: "SOPA DE MOSTAZA",
        desc: "Mustard soup",
        price: "7,50",
      },
      {
        name: "BISQUE DE GAMBAS",
        desc: "Prawn bisque",
        price: "7,50",
      },
    ],
  },
  {
    title: "Ensaladas",
    items: [
      {
        name: "ENSALADA THAI CON PEPINO Y MANGO",
        desc: "Thai salad with cucumber and mango",
        price: "9,50",
      },
      {
        name: "ENSALADA CÉSAR CON POLLO, PARMESANO Y ANCHOAS",
        desc: "Cesar salad with chicken, parmesan cheese and anchovies",
        price: "9,50",
      },
    ],
  },
  {
    title: "Pasta",
    items: [
      {
        name: "GNOCCHI PARMESANO, ALBAHACA",
        desc: "Gnocchi parmesan with basil",
        price: "9,50",
      },
    ],
  },
  {
    title: "Pescados y guisos",
    items: [
      {
        name: "PESCADO CON SALSA ANTIBOISE",
        desc: "White fish with antoiboise sauce",
        price: "11,50",
      },
      {
        name: "PESCADO FRITO CON SALSA DE TÁRTARE",
        desc: "Fried fish with tartare sauce",
        price: "11,50",
      },
      {
        name: "GUISO DE TERNERA",
        desc: "Beef stew",
        price: "11,50",
      },
      {
        name: "CONFIT DE PATO CON CHUCRUT A LA HOLANDESA",
        desc: "Duck confit with sauerkraut hotchpotch",
        price: "12,50",
      },
    ],
  },
  {
    title: "Extras",
    items: [
      {
        name: "PAN",
        desc: "Bread",
        price: "3,50",
      },
    ],
  },
  {
    title: "Postres",
    items: [
      {
        name: "PAN DE PLÁTANO CON HELADO DE VAINILLA",
        desc: "Banana bread with vanilla ice cream",
        price: "7,50",
      },
      {
        name: "DAMA BLANCA",
        desc: "Dame blanche",
        price: "7,50",
      },
      {
        name: "CRÈME BRULÉE",
        desc: "Crème brûlée",
        price: "7,50",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="menuPage">
      <div className="menuPanel">
        <h1 className="menuHeading">MENÚ</h1>
        <div className="menuDivider" aria-hidden="true">* * *</div>

        {menuSections.map((section) => (
          <React.Fragment key={section.title}>
            <section className="menuSection">
              <h2 className="menuSectionTitle">{section.title}</h2>
              <div className="menuDivider" aria-hidden="true">* * *</div>

              <div className="menuItemsTwoCol">
                {section.items.map((item) => (
                  <article className="menuItem" key={item.name}>
                    <h3 className="menuItemName">{item.name}</h3>
                    <p className="menuItemDesc">{item.desc}</p>
                    <p className="menuItemPrice">{item.price} €</p>
                  </article>
                ))}
              </div>
            </section>

            {/* ✅ FULL-WIDTH SECTION SEPARATOR */}
            <div className="sectionSeparator" aria-hidden="true" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};



export default Menu;
