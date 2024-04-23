import { BsFillGridFill } from "react-icons/bs";
import { HiViewList } from "react-icons/hi";

const AllPropertyNav = ({ data, setView, view, searchProperty }) => {
  return (
    <div className="col-12">
      <div className="property-nav">
        <div className="property-nav__view">
          <button
            onClick={() => setView(false)}
            className={view ? "sort-btn" : "active sort-btn"}
            aria-label="Grid view"
          >
            <BsFillGridFill  />
          </button>

          <button
            onClick={() => setView(true)}
            className={view === false ? "sort-btn" : "active sort-btn"}
            aria-label="List view"
          >
            <HiViewList />
          </button>
        </div>

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

export default AllPropertyNav;
