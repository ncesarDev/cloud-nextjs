import React, { useState } from "react";
import Layout from "../components/global/layout";
import InnerPageLayout from "../components/inner-page-layout";
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const RentorSeller = () => {
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numero_telefonico, setNumeroTelefonico] = useState('');
  const [subject, setSubject] = useState('');
  const [messageContent, setMessageContent] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const response = await fetch(event.target.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    const result = await response.json();
    if (!response.ok) {
      setMessage(result.errors.map(error => error.message).join(', '));
    } else {
      setMessage('¡Se ha enviado tus datos correctamente!');
    }
    setModalOpen(true);
    clearInputs();
  };



  const closeModal = () => {
    setModalOpen(false);
    setMessage('');
    clearInputs();

  };

  const clearInputs = () => {
    setName('');
    setEmail('');
    setNumeroTelefonico('');
    setSubject('');
    setMessageContent('');
  };
  const handleInputChange = (event) => {
    setEmailInput(event.target.value);
  };
  return (
    <Layout>
      <InnerPageLayout title="¿Quiere vender o rentar?" />
      <div className="contact">
        <div className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="contact__info">
                  <h4>Dirección</h4>
                  <p>Blvd. villas de Irapuato # 1443 Local 08 Soriana Cibeles</p>
                  <p>
                    Col. Quinta Villas , .P. 36643
                  </p>

                </div>
                <div className="contact__info">
                  <h4>Correos</h4>
                  <p>inmobiliaria@newlands.com.mx</p>
                  <p>ana@newlands.com.mx</p>
                </div>
                <div className="contact__info">
                  <h4>Phone</h4>
                  <a href="tel:4621717984"><FaWhatsapp /> 4621717984</a>
                  <br />
                  <a href="tel:4624903002"><FaWhatsapp /> 4624903002</a>
                  <br />
                  <a href="tel:4621896868"><FaWhatsapp /> 4621896868</a>
                </div>
                <div className="d-flex justify-content-center">
                  Visita nuestras redes sociales
                  <Nav.Link href="tel:4621717984" className=" red_social mt-2">
                <FaWhatsapp />
              </Nav.Link>
                  <Nav.Link href="https://www.facebook.com/newlandsinmobiliaria" className=" red_social mt-2">
                    <FaFacebook />
                  </Nav.Link>
                  <Nav.Link href="https://twitter.com/InmobiliariaNe1" className="  red_social mt-2">
                    <FaXTwitter />
                  </Nav.Link>
                  <Nav.Link href="https://www.youtube.com/channel/UCEkrZzXagFMlyeJrewHJTOw?view_as=subscriber" className="  red_social mt-2">
                    <FaYoutube />
                  </Nav.Link>
                  <Nav.Link href="https://www.instagram.com/newlandsinmobiliaria/" className="  red_social mt-2">
                    <FaInstagram />
                  </Nav.Link>
                </div>


              </div>
              <div className="col-lg-8">
                <form id="contact-rentorseller" action="https://formspree.io/f/xvoedzvl" method="POST" onSubmit={handleSubmit}>
                  <div className="d-lg-flex gap-lg-3 input">
                    <div className="w-100">
                      <label htmlFor="name">Nombres</label>
                      <input
                        name="name"
                        id="name"
                        required
                        type="text"
                        placeholder="Nombres"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="w-100">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label htmlFor="numero telefonico">Número Telefónico</label>
                    <input
                      name="numero_telefonico"
                      id="numero_telefonico"
                      required
                      type="tel"
                      pattern="[0-9]*"
                      placeholder="Número telefónico"
                      title="Por favor, ingresa solo números."
                      value={numero_telefonico}
                      onChange={(e) => setNumeroTelefonico(e.target.value)}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="subject">Asunto</label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      type="text"
                      placeholder="Asunto"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      type="text"
                      rows="3"
                      placeholder="Mensaje"
                      value={messageContent}
                      onChange={(e) => setMessageContent(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="button-primary">
                      Enviar Datos
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className={`modal ${modalOpen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Newlands recibió tus datos</h5>
              <button type="button" className="close" onClick={closeModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RentorSeller