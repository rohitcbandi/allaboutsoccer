const SearchBar = ({ items, setSearchResults }) => {

    // function for search
    const handleSearchChange = (e) => {
        // if input is empty (nothing was searched yet), set search results to all original items
        if (!e.target.value) return setSearchResults([])

        // look for items where the title includes the search result, then filter through all items and put in array (include lowercase searches)
        const resultsArray = items.filter(item => item.name.toLowerCase().includes(e.target.value) || item.name.includes(e.target.value))

        // set the search results to the results array
        setSearchResults(resultsArray)

        console.log(resultsArray)

    }

    return (
        <>
            <input 
                    className="search__input"
                    type="text"
                    id="search"
                    placeholder="Search"
                    onChange={handleSearchChange}
            />
        </>
    )
}
export default SearchBar