import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import SectionTitle from "./global/section-title";
import PropertyCard from "./property-card";

const FeaturedListing = ({ data }) => {
  const [key, setKey] = useState("rent");
  const featured = data?.filter(
    (property) => property.attributes.propertyType === "destacado"
  );

  const propertyRent = featured?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname === "renta"
  );
  const propertySale = featured?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname === "venta"
  );

  const propertytemporaryincome= featured?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname === "rentas temporales"
  );

  return (
    <div className="featured-list section-padding">
      <div className="container">
        <div className='container-services'>
                <h1 className="display-3-services">
                    Te presentamos <spam className="title-header-services">Las Propiedades</spam> Mas
                    <spam className="title-header-services"> Destacadas</spam>
                </h1>
                <p className="subtitle mb-5">
                   Escoge y dale un vistazo a tu proximo hogar
                </p>
            </div>
        <div className="featured-listing__wrapper">
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            id="controlled-tab-example-listing"
          >
            <Tab eventKey="rent" title="En Renta">
              <div className="row justify-content-center">
                {data === null || undefined || 0 ? (
                  <span className="error">Propiedad No Disponible para Renta</span>
                ) : null}
                {propertyRent?.slice(0, 3).map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
              </div>
            </Tab>
            <Tab eventKey="sale" title="En Venta">
              <div className="row justify-content-center">
                {data === null || undefined || 0 ? (
                  <span className="error">Propiedad No Disponible para Venta</span>
                ) : null}
                {propertySale?.slice(0, 3).map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
              </div>
            </Tab>
            <Tab eventKey="temporaryincome" title="Rentas Temporales">
              <div className="row justify-content-center">
                {data === null || undefined || 0 ? (
                  <span className="error">Propiedad No Disponible para Venta</span>
                ) : null}
                {propertytemporaryincome?.slice(0, 3).map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListing;
