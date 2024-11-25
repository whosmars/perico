import React from "react";

export const Testimonials = (props) => {
  // URL of the PDF file you want to embed
  const pdfUrl = "/perico/example.pdf";

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>UNAMARKET</h2>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Consulta toda la información de nuestro proyecto en el siguiente PDF:
            </p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Consultar información en PDF
            </a>
            <div style={{ marginTop: "40px" }}>
              <img
                src="img/about-1.jpg"
                className="img-responsive"
                alt=""
                style={{ width: "20%", margin: "0 auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
