import React from "react";
import "./Whine.css";

const wineSections = [
  {
    title: "CAVA",
    items: [
      {
        name: "PALACIO DE BORNOS BRUT",
        details: "Verdejo, Rueda, España",
        glass: "5,50",
        bottle: "24,50",
      },
      {
        name: "MIM ROSÉ BRUT RESERVA",
        details: "Pinot Noir, Penedès, España",
        glass: "",
        bottle: "29,50",
      },
    ],
  },
  {
    title: "BLANCO / WHITE",
    items: [
      {
        name: "COLAGON",
        details: "Verdejo, Rueda, España",
        glass: "3,90",
        bottle: "19,50",
      },
      {
        name: "VERGEL",
        details: "Sauvignon blanc, D.O. Alicante, España",
        glass: "",
        bottle: "19,50",
      },
      {
        name: "NIUS",
        details: "Sauvignon Blanc / Verdejo, Rueda España",
        glass: "",
        bottle: "23,50",
      },
      {
        name: "SEÑORIO DE SARRIA",
        details: "Chardonnay, Navarra, España",
        glass: "4,75",
        bottle: "24,50",
      },
      {
        name: "VEIGA DA PRINCESA",
        details: "Albariño, D.O. Rías Baixas, España",
        glass: "",
        bottle: "25,50",
      },
    ],
  },
  {
    title: "ROSADO / ROSE",
    items: [
      {
        name: "VERMADOR",
        details: "Monastrell, D.O. Alicante, España",
        glass: "3,90",
        bottle: "19,50",
      },
      {
        name: "PURE",
        details: "Syrah, Grenache, Provence, Francia",
        glass: "4,50",
        bottle: "22,50",
      },
    ],
  },
  {
    title: "TINTO / RED",
    items: [
      {
        name: "JA!",
        details: "Tempranillo, La Mancha, España",
        glass: "3,90",
        bottle: "19,50",
      },
      {
        name: "DOMINIO DE BORNOS ROBLE",
        details: "Tempranillo Ribera de Duero, España",
        glass: "4,50",
        bottle: "22,50",
      },
      {
        name: "CALA 1",
        details: "Syrah, Cabernet Sauvignon, Tempranilla · La Mancha, España",
        glass: "",
        bottle: "21,00",
      },
      {
        name: "MARTÍNEZ CORTA",
        details: "Tempranillo Rioja, España",
        glass: "",
        bottle: "23,00",
      },
      {
        name: "DOMINIO DE BORNOS CRIANZA",
        details: "Tempranillo Ribera del Duero, España",
        glass: "",
        bottle: "25,50",
      },
    ],
  },
];

const Whine = () => {
  return (
    <div className="winePage">
      <div className="winePanel">
        <h1 className="wineHeading">VINO / WINE</h1>

        <div className="wineTopDivider" aria-hidden="true">
          * * *
        </div>

        <div className="wineLegend" aria-label="Price legend">
          <div className="wineLegendItem">
            <div className="wineLegendLabel">Copa</div>
            <div className="wineLegendSub">Glass</div>
          </div>
          <div className="wineLegendItem">
            <div className="wineLegendLabel">Botella</div>
            <div className="wineLegendSub">Bottle</div>
          </div>
        </div>

        <div className="wineLegendDivider" aria-hidden="true">
          * * *
        </div>

        {wineSections.map((section) => (
          <React.Fragment key={section.title}>
            <section className="wineSection">
              <h2 className="wineSectionTitle">{section.title}</h2>
              <div className="wineDivider" aria-hidden="true">
                * * *
              </div>

              <div className="wineItemsTwoCol">
                {section.items.map((w) => (
                  <article className="wineItem" key={w.name}>
                    <h3 className="wineName">{w.name}</h3>
                    <p className="wineDetails">{w.details}</p>

                    <div className="winePrices">
                      <div className="winePriceBlock">
                        <div className="winePriceLabel">Copa</div>
                        <div className="winePriceValue">
                          {w.glass ? `${w.glass} €` : "—"}
                        </div>
                      </div>

                      <div className="winePriceBlock">
                        <div className="winePriceLabel">Botella</div>
                        <div className="winePriceValue">
                          {w.bottle ? `${w.bottle} €` : "—"}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="wineSectionSeparator" aria-hidden="true" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Whine;