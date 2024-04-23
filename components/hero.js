import { useRouter } from "next/router";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  const router = useRouter();
  const [key, setKey] = useState("rent");
  const [query, setQuery] = useState("");
  const querySearchHandler = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  const submitHandlerRent = (e) => {
    e.preventDefault();
    router.push(`/search-rent?query=${query}`);
  };
  const submitHandlerSale = (e) => {
    e.preventDefault();
    router.push(`/search-sale?query=${query}`);
  };
  const submitHandlerRentTemp = (e) => {
    e.preventDefault();
    router.push(`/search-renttemp?query=${query}`);
  };
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-3">Encuentra <span className="span_title">
            La Casa De Tus
            </span> Sueños Ahora </h1>
            <p className="location mb-5">
            Si está pensando mudarte o comprar una casa en <strong>IRAPUATO</strong>, póngase en contacto con nosotros
            </p>
            <p className="location-2 mb-5">
            <HiLocationMarker/>Busque por tipo de propiedad, ubicación o punto de referencia
            </p>
            <Tabs
              id="controlled-tab-example-hero"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="rent" title="Renta">
                <form className="hero__search" onSubmit={submitHandlerRent}>
                  <input
                    onChange={querySearchHandler}
                    type="text"
                    placeholder="Buscar..."
                  />
                  <button type="submit" aria-label="Search for-rent">
                    <BsSearch />
                  </button>
                </form>
              </Tab>
              <Tab eventKey="sale" title="Venta">
                <form className="hero__search" onSubmit={submitHandlerSale}>
                  <input
                    onChange={querySearchHandler}
                    type="text"
                    placeholder="Buscar..."
                  />
                  <button type="submit" aria-label="Search for-sale">
                    <BsSearch />
                  </button>
                </form>
              </Tab>
              <Tab eventKey="renta_temporal" title="Rentas Temporales">
                <form className="hero__search" onSubmit={submitHandlerRentTemp}>
                  <input
                    onChange={querySearchHandler}
                    type="text"
                    placeholder="Buscar..."
                  />
                  <button type="submit" aria-label="Search rent temporal">
                    <BsSearch />
                  </button>
                </form>
              </Tab>
            </Tabs>
          </div>
          <div className="col-lg-6">
            <div className="hero__image">
              <img src="images/hero.jpg" alt="hero" />
              <div className="image-two">
                <img src="images/house1.jpg" alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
