import React from 'react'
import Tourcard from '../../Shared/Tourcard'

import { Col } from 'react-bootstrap'
import useFetch from './../../Hook/useFetch'
import { BASE_URL } from './../../Utils/config'

function FeaturedList() {
  const {data: featuredTour } = useFetch(`${BASE_URL}/tours`)
  return (
    <>
    { featuredTour?.map((tour)=>(
        <Col lg='3' className='mb-4' key={tour._id}><Tourcard tour={tour}/>
        </Col>
       ) )}
    </>
  )
}

export default FeaturedList



// import React, { useState, useEffect } from 'react';
// import Tourcard from '../../Shared/Tourcard';
// import { Col } from 'react-bootstrap';
// import axios from 'axios';
// import { BASE_URL } from './../../Utils/config';

// function FeaturedList() {
//   const [featuredTour, setFeaturedTour] = useState([]);

//   useEffect(() => {
//     axios.get(`${BASE_URL}/tours/`)
//       .then(response => {
//         setFeaturedTour(response.data);
//       })
//       .catch(error => {
//         // console.error('Error fetching featured tours:', error);
//       });
//   }, []);

//   return (
//     <>
//       {featuredTour.map(tour => (
//         <Col lg='3' className='mb-4' key={tour._id}>
//           <Tourcard tour={tour} />
//         </Col>
//       ))}
//     </>
//   );
// }

// export default FeaturedList;
