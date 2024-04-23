import { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Layout from "../components/global/layout";
import { API_URL } from "../config";
import AllPropertyNav from "../components/all-property-nav-copy";
import PropertyCard from "../components/property-card";
import PropertyCard2 from "../components/property-card2";
import ProductListCard from "../components/product-list-card";
import InnerPageLayout from "../components/inner-page-layout";
import Pagination from "../components/pagination";
import SectionTitle from "../components/global/section-title";





const AllProperty2 = ({ property }) => {
    const { data } = property;
    const [view, setView] = useState(false);


    //
    const [filter, setFilter] = useState("all"); // Estado para almacenar el filtro seleccionado
    const [uniquetypess, setUniquetypess] = useState([]); // Estado para almacenar los valores únicos de 'types'
    const [filterLocation, setFilterLocation] = useState("all");
    const [uniqueLocations, setUniqueLocations] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minBeds, setMinBeds] = useState('');
    const [minBaths, setMinBaths] = useState('');
    const [minSqft, setMinSqft] = useState('');
    const [maxSqft, setMaxSqft] = useState('');


    useEffect(() => {
        // Obtener valores únicos de types al cargar el componente
        const uniqueTypes = [...new Set(data.map((property) => property.attributes.type))];
        setUniquetypess(uniqueTypes);

        const uniqueLocations = [...new Set(data.map((property) => property.attributes.ubicationcity
        ))];
        setUniqueLocations(uniqueLocations);
    }, [data]);

    // Filtrar propiedades según el filtro seleccionado
    const filteredData = data.filter(
        (property) => filter === "all" || property.attributes.type === filter
            &&
            (filterLocation === "all" || property.attributes.ubicationcity === filterLocation) &&
            (!minPrice || (property.attributes.price && parseInt(property.attributes.price) >= parseInt(minPrice))) &&
            (!maxPrice || (property.attributes.price && parseInt(property.attributes.price) <= parseInt(maxPrice))) &&
            (!minBeds || (property.attributes.beds && parseInt(property.attributes.beds) == parseInt(minBeds))) &&
            (!minBaths || (property.attributes.baths && parseInt(property.attributes.baths) == parseInt(minBaths))) &&
            (!minSqft || (property.attributes.sqft && parseInt(property.attributes.sqft) >= parseInt(minSqft))) &&
            (!maxSqft || (property.attributes.sqft && parseInt(property.attributes.sqft) <= parseInt(maxSqft)))
    );




    //

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


    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const propertyData = data?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <Layout>
            <InnerPageLayout title="¿Que es lo que Buscas? Encuentra tu Propiedad" />
            <div className="all-property featured-list section-padding">

                <div className="container">

                    <AllPropertyNav

                        searchProperty={searchProperty}

                    />
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <SectionTitle title="Filtra Propiedades en Newlands" position="left" />
                            <div className="row">
                                <div className="col-md-12 mb-2" >
                                    <span className="span_filter">Tipo de Propiedad</span>
                                    {/* Menú desplegable para seleccionar el filtro */}
                                    <select
                                        className="form-select"
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                    >

                                        <option value="all">Todas las Propiedades</option>
                                        {uniquetypess.map((types) => (
                                            <option key={types} value={types}>{types}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-12 mb-2">
                                    <span className="span_filter">Ubicación</span>
                                    {/* Menú desplegable para seleccionar la ubicación */}
                                    <select
                                        className="form-select"
                                        value={filterLocation}
                                        onChange={(e) => setFilterLocation(e.target.value)}
                                    >
                                        <option value="all">Todos</option>
                                        {uniqueLocations.map((ubication) => (
                                            <option key={ubication} value={ubication}>{ubication}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="row">
                                    <span className="span_filter">Precios</span>
                                    <div className="col-md-6 mb-2">
                                        {/* Input para el precio mínimo */}
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Mínimo"
                                            value={minPrice}
                                            onChange={(e) => setMinPrice(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-2">
                                        {/* Input para el precio máximo */}
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Máximo"
                                            value={maxPrice}
                                            onChange={(e) => setMaxPrice(e.target.value)}
                                        />
                                    </div>

                                </div>


                                <div className="row">
                                    <span>Dormitorios y Baños</span>
                                    <div className="col-md-12 mb-2">
                                        {/* Input para el número mínimo de dormitorios */}
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Número de Dormitorios"
                                            value={minBeds}
                                            onChange={(e) => setMinBeds(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        {/* Input para el número mínimo de baños */}
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Número Baños"
                                            value={minBaths}
                                            onChange={(e) => setMinBaths(e.target.value)}
                                        />
                                    </div>
                                </div>


                                <div className="row">
                                    <span>Tamaño del Terreno </span>
                                    <div className="col-md-12 mb-2">
                                        {/* Input para el tamaño mínimo del terreno */}
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Tamaño mínimo del terreno (sqft)"
                                            value={minSqft}
                                            onChange={(e) => setMinSqft(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        {/* Input para el tamaño máximo del terreno */}
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Tamaño máximo del terreno (sqft)"
                                            value={maxSqft}
                                            onChange={(e) => setMaxSqft(e.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div id="property-list">
                                {view ? (
                                    <Tabs defaultActiveKey="all">
                                        <Tab eventKey="all">
                                            <div className="row ">
                                                {filteredData.map((property) => (
                                                    <PropertyCard2 property={property} key={property.id} />
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
                                    </Tabs>
                                ) : (
                                    <div className="row">
                                        {filteredData.map((property) => (
                                            <PropertyCard2 property={property} key={property.id} />
                                        ))}
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>







                </div>
            </div>


        </Layout >
    );
};

export default AllProperty2;

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/properties?populate=*`);
    const property = await res.json();

    return {
        props: { property },
    };
}
