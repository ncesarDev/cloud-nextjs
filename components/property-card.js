import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaBath } from "react-icons/fa6";
import { MdBed, MdCall } from "react-icons/md";
import { API_URL } from "../config";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FaCameraRetro } from "react-icons/fa";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp} from 'react-icons/fa';
import { BiSolidDirections } from "react-icons/bi";
import { FaWarehouse } from "react-icons/fa";


const PropertyCard = ({ property,categories }) => {
  const {
    image,
    price,
    slug,
    title,
    rating,
    type,
    location,
    phone,
    beds,
    baths,
    propertyType,
    sqft,
  } = property?.attributes;
  const cate=property.attributes.categories.data[0]?.attributes.categoryname;
  const ubi=property.attributes.ubicationcity;
  const formattedPrice = parseInt(price, 10).toLocaleString().replace(/,/g, '.');
  return (
    <div className="col-md-6 col-lg-4 mb-4 property">
      <div className="featured-list__item">
        <div className="featured-list__item--image">
          <img
            className="img-fluid"
            src={
              image?.data !== null
                ? `${API_URL}${image?.data[0]?.attributes.url}`
                : "/images/404.jpg"
            }
            alt={title}
          />
          {propertyType !== null && (
            <div className="popular">{propertyType}</div>
          )}
          <span className="popular_2"> En {cate} <GoArrowUpRight/></span>
          
          <div className="price">$ {formattedPrice}</div>
          <div className="ubication"><FaMapMarkerAlt/> {ubi}</div>
          <Link className="property-name" href={`/property/${slug}`}>
            <div className="camera"><FaCameraRetro/></div>
          </Link>
          
        </div>
        <div className="featured-list__item__info">
          <div className="featured-list__item__info--title">
            <h3>
              <Link className="property-name" href={`/property/${slug}`}>
                {title}
              </Link>
            </h3>
          </div>
          <div className="featured-list__item__info--ratting">
            <span>
              <AiFillStar />
              {rating}
            </span>{" "}
            Calificación
          </div>
          <ul className="featured-list__item__info--list">
            <li>
              <span><FaWarehouse/> Tipo: {type}</span>
            </li>
       
            <li>
            <span><BiSolidDirections/> Dirección: {location}</span>
              
            </li>
            <li>
            <FaWhatsapp/>Contacto:<a href={`tel${phone}`}>{phone}</a>
            </li>
          </ul>
          <ul className="featured-list__item__info--expert">
            <li>
              <MdBed /> {beds} Domitorios
            </li>
            <li>
              <FaBath/> {baths} Baños
            </li>
            <li>
              <AiOutlineAntDesign />{sqft} m<sup>2</sup>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
