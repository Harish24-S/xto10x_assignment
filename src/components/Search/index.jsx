import "./Search.css"
import { FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Search({ onChange, on }) {
    return (
        <form className={`search ${on}`}>
            <input type="search" id="search" placeholder="Search your favorite games here...." onChange={(e) => onChange(e.target.value)} />
            <label htmlFor="search"><FaSearch /></label>
        </form>
    )
}

export default Search