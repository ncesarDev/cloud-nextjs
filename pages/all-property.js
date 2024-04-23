import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Layout from "../components/global/layout";
import { API_URL } from "../config";
import AllPropertyNav from "../components/all-property-nav";
import PropertyCard from "../components/property-card";
import ProductListCard from "../components/product-list-card";
import InnerPageLayout from "../components/inner-page-layout";
import Pagination from "../components/pagination";
import Link from "next/link";
import { FaFilter } from "react-icons/fa6";

const AllProperty = ({ property }) => {
  const { data } = property;
  const [view, setView] = useState(false);

  const searchProperty = () => {
    var searchKeyword, i, txtValue;
    let input = document.getElementById("search-input");
    let filter = input.value.toUpperCase();
    let allProperty = document.getElementById("property-list");
    let property = allProperty.getElementsByClassName("property");

    for (i = 0; i < property.length; i++) {
      searchKeyword = property[i].getElementsByClassName("property-name")[0];
      txtValue = searchKeyword.textContent || searchKeyword.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        property[i].style.display = "";
      } else {
        property[i].style.display = "none";
      }
    }
  };

  const [key, setKey] = useState("all");

  const propertyRent = data?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname === "renta"
  );
  const propertySale = data?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname === "venta"
  );
  const propertytemporaryincome = data?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname === "rentas temporales"
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const propertyData = data?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <InnerPageLayout title="Mira Todas Nuestras Propiedades" />
      <div className="all-property featured-list section-padding">
        
        <div className="container">
        
          <AllPropertyNav
            setView={setView}
            searchProperty={searchProperty}
            view={view}
            data={data}
          />
          <Link className="link-Filter" href="/filter-property">
          <FaFilter/> Buscar Por Filtros
        </Link>
          <div id="property-list">
            {view ? (
              <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab id="controlled-tab-example" eventKey="all" title="Todos">
                  <div className="row">
                    {data === null && (
                      <span className="error">Propiedad no encontrada</span>
                    )}
                    {propertyData?.map((property) => (
                      <ProductListCard property={property} key={property.id} />
                    ))}
                  </div>
                  {data.length > 6 ? (
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={data?.length}
                      paginate={paginate}
                    />
                  ) : (
                    ""
                  )}
                </Tab>
                <Tab eventKey="rent" title="Renta">
                  <div className="row">
                    {data === null && (
                      <span className="error">Property not available</span>
                    )}
                    {propertyRent?.map((property) => (
                      <ProductListCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="sale" title="Venta">
                  <div className="row">
                    <span className="error">
                      {data === null && (
                        <span className="error">
                          Property not available for sale
                        </span>
                      )}
                    </span>
                    {propertySale?.map((property) => (
                      <ProductListCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>

                <Tab eventKey="temporaryincome" title="Rentas Temporales">
                  <div className="row">
                    <span className="error">
                      {data === null && (
                        <span className="error">
                          Property not available for sale
                        </span>
                      )}
                    </span>
                    {propertytemporaryincome?.map((property) => (
                      <ProductListCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>


              </Tabs>
            ) : (
              <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="all" title="todo">
                  <div className="row">
                    {data === null || undefined || 0 ? (
                      <span className="error">Property not available</span>
                    ) : null}
                    {propertyData?.map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                  {data.length > 6 ? (
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={data?.length}
                      paginate={paginate}
                    />
                  ) : (
                    ""
                  )}
                </Tab>
                <Tab eventKey="rent" title="Renta">
                  <div className="row">
                    {data === null || undefined || 0 ? (
                      <span className="error">
                        Property not available for rent
                      </span>
                    ) : null}
                    {propertyRent?.map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="sale" title="Venta">
                  <div className="row">
                    {data === null || undefined || 0 ? (
                      <span className="error">
                        Property not available for Sale
                      </span>
                    ) : null}
                    {propertySale?.map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="temporaryincome" title="Rentas Temporales">
                  <div className="row justify-content-center">
                    {data === null || undefined || 0 ? (
                      <span className="error">Propiedad No Disponible para Venta</span>
                    ) : null}
                    {propertytemporaryincome?.map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProperty;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const property = await res.json();

  return {
    props: { property },
  };
}
