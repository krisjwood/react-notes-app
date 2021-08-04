import { MdSearch } from "react-icons/md"

const Search = ({ handleSearch }) => {
    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3em" />
            <input 
                type="text" 
                onChange={(event) => handleSearch(event.target.value)} 
                placeholder="Search notes..." 
            />
        </div>
    )
}

export default Search