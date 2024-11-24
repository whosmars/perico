import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
<<<<<<< HEAD
          <h2>Nuestra Vision</h2>
          <p>
          Nuestro objetivo es mejorar la calidad de vida de los estudiantes a través de innovación, colaboración y prácticas responsables, creando un impacto positivo en la comunidad universitaria.
=======
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
>>>>>>> f15f3c7031c2414e93ec113bcf66fa50275cce9d
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
