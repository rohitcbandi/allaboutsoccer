import Item from "./Item"
import './SearchResultsList.css'

const SearchResultsList = ({ searchResults, model }) => {
    // go through search results, map each one to an item component (link), and set to results variable
    const results = searchResults.map(item => <Item key={item.id} item={item} model={model}/>)
    model = results.length ? model : ''

    // check if there are any results (if results, display results: if no results, display "no matching posts")
    const content = results.length ? results : ['No Matching Results']
    console.log(content)

    const listItems = content.map((item) =><ul>{item}</ul>);

    return (
        <>
        <div align="right" id="menu" >
            {listItems}
        </div>
        
        </>
    )
}
export default SearchResultsList