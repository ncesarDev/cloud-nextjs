import { BsFillGridFill } from "react-icons/bs";
import { HiViewList } from "react-icons/hi";

const AllPropertyNavCopy = ({searchProperty }) => {
  return (
    <div className="col-12">
      <div className="property-nav">
       

        <div className="sort-selection">
          <form>
            <input
              id="search-input"
              onKeyUp={searchProperty}
              placeholder="Buscar Propiedad"
              type="text"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AllPropertyNavCopy;
