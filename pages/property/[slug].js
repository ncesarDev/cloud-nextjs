import Skeleton from "react-loading-skeleton";
import Layout from "../../components/global/layout";
import PropertyCard from "../../components/property-card";
import { API_URL } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SectionTitle from "../../components/global/section-title";
import {
  MdBed,
  MdOutlineKeyboardArrowLeft,
  MdOutlineNavigateNext,
  MdSquareFoot,
} from "react-icons/md";
import { GiBathtub, GiMechanicGarage } from "react-icons/gi";
import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaVoteYea,
} from "react-icons/fa";
import md from "markdown-it";

import { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import { FaCheckCircle } from "react-icons/fa";

const PropertyPage = ({ properties, slug }) => {
  const property = properties?.filter((data) => data?.attributes.slug === slug);

  const {
    image,
    price,
    title,
    description,
    rating,
    location,
    date,
    beds,
    baths,
    user,
    propertyFeature,
    propertyType,
    categories,
    sqft,
  } = property[0]?.attributes;

  const formattedPrice = parseInt(price, 10).toLocaleString().replace(/,/g, '.');

  const relatedProperty = properties?.filter(
    (data) =>
      data?.attributes.categories.data[0]?.attributes.categoryname ===
      categories?.data[0]?.attributes.categoryname
  );

  //añadir
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCarouselSelect = (selectedIndex) => {
    setSelectedImageIndex(selectedIndex);
  };

  return (
    <Layout title={title}>
      {property === null ? (
        <div className="loader">
          <Skeleton />
        </div>
      ) : (
        <div className="single-page">
          <div className="rwo">
            <div className="col-12">
              <Swiper
                className="single-page__swiper"
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                autoplay
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {image.data === null ? "Image not available" : ""}
                {image?.data.map((images, index) => (
                  <SwiperSlide key={images.id}>
                    <img
                      className="img-fluid swiper-image"
                      src={`${API_URL}${images.attributes.url}`}
                      alt={title}
                      onClick={() => handleImageClick(index)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="control_slider">
                <div className="prev">
                  <MdOutlineKeyboardArrowLeft />
                </div>
                <div className="next">
                  <MdOutlineNavigateNext />
                </div>
              </div>

            </div>
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>
                  {title}
                  <div className="location_modal">
                    <GoLocation /> {location}
                  </div>

                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Carousel
                  activeIndex={selectedImageIndex}
                  onSelect={handleCarouselSelect}
                  interval={null} // Para detener la animación automática del Carousel
                >
                  {image.data.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100 swiper-image-modal"
                        src={`${API_URL}${image.attributes.url}`}
                        alt={title}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Modal.Body>
            </Modal>



          </div>
          <div className="container">
            <div className="single-page__top">
              <h3>
                {title} <span>{propertyType}</span>
              </h3>
              <span className="price">${formattedPrice}</span>
              <ul>
                <li>
                  <GoLocation /> {location}
                </li>
                <li>
                  <span>
                    <AiFillStar />
                    {rating}
                  </span>
                  Calificación
                </li>
              </ul>
            </div>
          </div>
          <div className="section-bg section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="description-card">
                    <div className="description-card__header">
                      <h4>Detalles de la Propiedad</h4>
                    </div>
                    <div className="description-card__body">
                      <ul>
                        <li>
                          <span>
                            <MdBed />
                            Dormitorios
                          </span>{" "}
                          <span>{beds}</span>
                        </li>
                        <li>
                          <span>
                            <GiBathtub />
                            Baños
                          </span>{" "}
                          <span>{baths}</span>
                        </li>
                        <li>
                          <span>
                            <AiOutlineHome />
                            Area (De Construcción)
                          </span>{" "}
                          <span>{sqft} m<sup>2</sup></span>
                        </li>
                        <li>
                          <span>
                            <GiMechanicGarage />
                            Garages
                          </span>{" "}
                          <span>2</span>
                        </li>
                        <li>
                          <span>
                            <FaVoteYea />
                            Fecha de Publicación
                          </span>{" "}
                          <span>
                            {new Date(date).toLocaleDateString("en-US")}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {description === null ? (
                    ""
                  ) : (
                    <div className="description-card">
                      <div className="description-card__header">
                        <h4>Descripción</h4>
                      </div>
                      <div className="description-card__body">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: md().render(description),
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {propertyFeature === null ? (
                    ""
                  ) : (
                    <div className="description-card">
                      <div className="description-card__header">
                        <h4>Caracteristicas  Principales</h4>
                      </div>
                      <div className="feature_card__body  features">
                        <ul>
                          {propertyFeature.map((features) => (
                            <li key={features.id}>

                              <span className="icon-feature">
                                <FaCheckCircle /> {features.feature}
                              </span>

                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-4">
                  <div className="description-sidebar">
                
                    <div className="description-sidebar__header">
                    <img className=" logo" src="../images/icologo.png" alt="hero" />
                      <h4>Newlands Inmobiliaria y Servicios</h4>
                    </div>
                    <div className="description-sidebar__body">
                      <h4 className="username">
                        {user.data.attributes.username}
                      </h4>
                      <p className="mb-0">{user.data.attributes.whatsApp}</p>
                      <p>{user.data.attributes.email}</p>
                      <ul>
                        <li>
                          <a
                            href={user.data.attributes.facebook}
                            className="icon"
                          >
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a
                            href={user.data.attributes.twitter}
                            className="icon"
                          >
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a
                            href={user.data.attributes.instagram}
                            className="icon"
                          >
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`tel:${user.data.attributes.whatsApp}`}
                            className="icon"
                          >
                            <FaWhatsapp />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="similar">
            <div className="featured-list section-padding">
              <div className="container">
                <SectionTitle position="left" title="Propiedades Similiares" />
                <div className="featured-listing__wrapper">
                  <div className="row">
                    {relatedProperty?.slice(0, 3).map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PropertyPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const allProperty = await res.json();
  const properties = allProperty.data;

  return {
    props: {
      properties,
      slug,
    },
  };
}
