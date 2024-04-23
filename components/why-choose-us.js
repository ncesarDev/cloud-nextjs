import React from "react";
import SectionTitle from "./global/section-title";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdEngineering } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";

const WhyChooseUs = () => {
  return (
    <div className="wChoose section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="wChoose__intro">
            <img className="logo" src="images/icologo.png"/>
              <SectionTitle title="Por qué elegir Newlands" position="left" />
              <p className="fs-4">Expertos en Bienes Raíces</p>
              <p>
                Estamos orgullosos de ser los expertos que buscan la casa soñada para sus clientes.
              </p>
              <img
                src="images/Wchoose.jpg"
                alt="wChoose"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <div className="wChoose__content">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <VscWorkspaceTrusted />
                    </div>
                    <h3>Empresa de Confianza</h3>
                    <p>
                    Nos dedicamos a proveer a nuestros clientes la más alta calidad de atención en el negocio.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <MdEngineering />
                    </div>
                    <h3>Experiencia</h3>
                    <p>
                    Asesoramiento especializado en locales para empresas como para individuos, respaldada por una sólida experiencia en el sector.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <TbCertificate />
                    </div>
                    <h3>Conocenos</h3>
                    <p>
                    Nuestra marca deriva de la fusión de dos palabras de lengua inglesa “new” de nuevo y “lands” de tierras, horizontes, lo cual nos habla de una apertura, de nuevas posibilidades hacia el futuro.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <FiHelpCircle />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                    Brindamos contacto, atención y solución a las necesidades específicas de nuestros clientes presentes y futuros, nacionales o del extranjero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
