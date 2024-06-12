import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';

export default function Cards(props) {
  const navigate = useNavigate();

  let { page } = useParams();

  const { data } = props;
  const [currentItems, setCurrenItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const itemsPerPage = 9;
  
  useEffect(() => {
    const itemOffset = ((page ? page -1  : 0) * itemsPerPage) % data.length;
    const endOffset = itemOffset + itemsPerPage;
    setCurrenItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [page, data])

  function HandlePageClick(event) {
    // navigate(`./page/${event.selected + 1}`)

    navigate(`/teams/page/${event.selected + 1}`)
  };

  function HandleCardClick(event, props) {
    navigate(`/teams/${props.name}`, {state: {name: props.name, 
                                            country: props.country, 
                                            league: props.league, 
                                            venue: props.venue, 
                                            city: props.city, 
                                            top_players: props.top_players, 
                                            image: props.image}})
  };


  return (
    <>
      <div className='cards'>
        {currentItems.map(card => {
          return (
            <div className='pageCard' onClick={(event) => HandleCardClick(event, card)}>
              <img src={card.image} alt={card.name}></img>
              <hr></hr>
              <p className='ver-center'>{card.name}</p>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={HandlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeClassName='active'
        hrefBuilder={(page, pageCount, selected) =>
          page >= 1 && page <= pageCount ? `players/page/${page}` : '#'
        }
        hrefAllControls
        forcePage={parseInt(page) -1}
      />
    </>
  );
}










// import {useState, useEffect} from 'react';
// import ReactPaginate from 'react-paginate';
// import { useNavigate } from 'react-router-dom';

// export default function Cards(props) {
//   let navigate = useNavigate()
//   const { data } = props;
//   const [currentItems, setCurrenItems] = useState([])
//   const [pageCount, setPageCount] = useState(0)
//   const [itemOffset, setItemOffset] = useState(0);
//   const itemsPerPage = 9;

//   useEffect(() => {
//     const endOffset = itemOffset + itemsPerPage;
//     setCurrenItems(data.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(data.length / itemsPerPage));
//   }, [itemOffset, itemsPerPage, data ])

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % data.length;
//     setItemOffset(newOffset);
//   };

//   function HandleCardClick(event, props) {
//     navigate(`./${props.name}`, {state: {name: props.name, 
//                                             country: props.country, 
//                                             league: props.league, 
//                                             venue: props.venue, 
//                                             city: props.city, 
//                                             top_players: props.top_players, 
//                                             image: props.image}})
//   };

//   return (
//     <>
//       <div className='cards'>
//         {currentItems.map(card => {
//           return (
//             // <div className='pageCard' onClick={() => alert("Hello from here")}>
//             <div className='pageCard' onClick={(event) => HandleCardClick(event, card)}>
//               <img src={card.image} alt={card.name}></img>
//               <p className='ver-center'>{card.name}</p>
//             </div>
//           );
//         })}
//       </div>
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//         containerClassName="pagination"
//         pageLinkClassName='page-num'
//         previousLinkClassName='page-num'
//         nextLinkClassName='page-num'
//         activeLinkClassName='active'
//       />
//     </>
//   );
// }