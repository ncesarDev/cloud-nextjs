import Link from "next/link";
import SectionTitle from "./global/section-title";
import PropertyCard from "./property-card";

const PropertyListing = ({ data }) => {
  return (
    <div className="featured-list section-padding">
      <div className="container">
     
        <div className='container-services mt-5'>
                <h1 className="display-3-services">
                   Haz <spam className="title-header-services">Realidad tus Sueños</spam> De Tener
                    <spam className="title-header-services">Tu Casa Propia</spam>
                </h1>
                <p className="subtitle mb-5">
                Mira todas las propiedades que tenemos para ti
                </p>
            </div>
        <div className="featured-listing__wrapper">
          <div className="row">
            {data === null || undefined || 0 ? (
              <span className="error">Propiedad No Enlistada</span>
            ) : null}
            {data?.slice(0, 6).map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
          {data === null || undefined || 0 ? (
            ""
          ) : (
            <div className="text-center mt-4">
              <Link href="/all-property" className="button-primary">
                Ver Todas las Propiedades
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
