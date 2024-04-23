import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaBath } from "react-icons/fa6";
import { MdBed, MdCall } from "react-icons/md";
import { API_URL } from "../config";
import Link from "next/link";
import { AiOutlineAntDesign } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { FaWarehouse } from "react-icons/fa";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaCameraRetro } from "react-icons/fa";

const ProductListCard = ({ property, categories }) => {
  const {
    image,
    price,
    slug,
    title,
    location,
    phone,
    beds,
    baths,
    propertyType,
    sqft,
  } = property?.attributes;
  const cate = property.attributes.categories.data[0]?.attributes.categoryname
  const ubi = property.attributes.ubicationcity;
  const formattedPrice = parseInt(price, 10).toLocaleString().replace(/,/g, '.');

  return (
    <>
      <div className="property col-12 mb-4">
        <div className="list-view">
          <div className="row">
            <div className="col-md-5">
              <div className="list-view--image h-100">
                <img
                  className="img-card_2 img-fluid "
                  src={
                    image?.data !== null
                      ? `${API_URL}${image?.data[0]?.attributes.url}`
                      : "/images/404.jpg"
                  }
                  alt={title}
                />
                {propertyType !== null && (
                  <div className="popular"> {propertyType}</div>
                )}

                <div className="ubication"><FaMapMarkerAlt /> {ubi}
                
                
                </div>
                <Link className="property-name" href={`/property/${slug}`}>
                  <div className="camera"><FaCameraRetro /></div>
                </Link>
                <span className="type"><FaWarehouse className="mb-1" />  {property.attributes.type}</span>
                <span className="popular_2"> En {cate} <GoArrowUpRight /></span>
              </div>
            </div>
            <div className="col-md-7 col-lg-6 offset-lg-1">
              <div className="list-view__info">
                <div className="list-view__info--title">
                  <h3>
                    <Link className="property-name" href={`/property/${slug}`}>
                      {property.attributes.title}
                    </Link>
                  </h3>
                </div>
                <div className="list-view__info--price">${formattedPrice}</div>
                <div className="list-view__info--ratting">
                  <span>
                    <AiFillStar />
                    {property.attributes.rating}
                  </span>{" "}
                  Calificación
                </div>
                <ul className="list-view__info--list">
                  <li>
                    <GoLocation /> {location}
                  </li>
                  <li>
                    <MdCall /> <Link href={`tel${phone}`}>{phone}</Link>
                  </li>
                </ul>
                <ul className="featured-list__item__info--expert">
                  <li>
                    <MdBed /> {beds} Dormitorios
                  </li>
                  <li>
                    <FaBath /> {baths} Baños
                  </li>
                  <li>
                    <AiOutlineAntDesign />{sqft}m<sup>2</sup>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListCard;
