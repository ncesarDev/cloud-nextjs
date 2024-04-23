import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Card, Container, Row, Col } from 'react-bootstrap';
import { GoLocation } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { MAILCHAIMP } from "../../config";
import { MdOutlineMailOutline, MdCall } from "react-icons/md";
import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";

//SUBSCRIBE FORM


const Footer = () => {
  const [message, setMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');

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
      setMessage('¡Se ha enviado tu correo correctamente!');
    }
    setModalOpen(true);
  };



  const closeModal = () => {
    setModalOpen(false);
    setMessage('');
    setEmailInput('');
  };
  const handleInputChange = (event) => {
    setEmailInput(event.target.value);
  };
  return (
    <div className="footer footer-padding-t">
      <div className="container">

        <div className="row">
          <div className="footer__top mx-auto">
            <h3>Recibe Asesoria de Newlands</h3>

            <form form id="footer-form" action="https://formspree.io/f/xpzvovra" method="POST" onSubmit={handleSubmit}>
              <div className="footer__subscribe">
                <div className="w-100">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={emailInput}
                    onChange={handleInputChange}
                    required
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="button-primary mt-4">
                    Mandar Email
                  </button>
                </div>
              </div>
            </form>
            <div className={`modal ${modalOpen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Gracias por comunicarte con Newlands</h5>
                    <button type="button" className="close" onClick={closeModal}>
                      <span><IoMdCloseCircle /></span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>{message}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Volver</button>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>


        <div className="row footer-padding">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 ">
            <div className="footer__logo">
              <h1>Newlands</h1>
            </div>
            <div className="container_email_footer">
              <MdOutlineMailOutline /> inmobiliaria@newlands.com.mx
            </div>
            <div className="container_email_footer">
              <MdOutlineMailOutline /> ana@newlands.com.mx
            </div>


            <div className="container_phone_footer">
              <a
                aria-label="Whatsapp"
                href="tel:4621717984"
              >
                <FaWhatsapp className="phone_footer" />
              </a>
              4621717984
            </div>
            <div className="container_phone_footer_1">
              <a
                aria-label="Whatsapp"
                href="tel:4624903002"
              >
                <FaWhatsapp className="phone_footer" />
              </a>
              4624903002
            </div>
            <div className="container_phone_footer_2">
              <a
                aria-label="Whatsapp"
                href="tel:4621896868"
              >
                <FaWhatsapp className="phone_footer" />
              </a>
              4621896868
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer__content">
              <h3>Ubicación del lugar</h3>
              <ul>
                <li>
                  Blvd. villas de Irapuato # 1443 Local 08 Soriana Cibeles
                </li>
                <li>
                  Col. Quinta Villas , .P. 36643
                  Irapuato, Guanajuato
                </li>
                <li>
                  <GoLocation />{" "}
                  <a
                    href="https://www.google.com/maps/place/United+States/@37.2755783,-104.6571311,5z/data=!3m1!4b1!4m5!3m4!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Ubicacion en el Mapa
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer__social">
              <h3>Nuestras Redes Sociales</h3>
              <p>Visita todas nuestras plataformas que certifiquen nuestro compromiso</p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/newlandsinmobiliaria"
                    aria-label="Facebook"
                    className="icon"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/InmobiliariaNe1"
                    aria-label="Twitter"
                    className="icon"
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/newlandsinmobiliaria/"
                    aria-label="Instagram"
                    className="icon"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Whatsapp"
                    href="tel:4621717984"
                    className="icon"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a
                    aria-label="Whatsapp"
                    href="https://www.youtube.com/channel/UCEkrZzXagFMlyeJrewHJTOw?view_as=subscriber"
                    className="icon"
                  >
                    <FaYoutube />
                  </a>
                </li>


              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyright m-20px-t m-20px-b">
          <div className="row">
            <div className="col-12">
              <p className="m-0 text-center">&copy; {new Date().getFullYear()} Newlands Inmobiliaria y Servicios <AiFillHeart /> by <a href="https://s3.amazonaws.com/assets.moveglobally.com/organization_files/30443/AVISO_20DE_20PRIVACIDAD.pdf">Aviso de privacidad</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
