import React from 'react';

export default function Pagination({ totalPages, handleClick }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  return (
    <div>
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => handleClick(num)}
        >{num}</button>
      ))}
    </div>
  );
}

// // import { useEffect, useState } from 'react';

// import { useState } from 'react';

// export default function Pagination(data, component, title, pageLimit, dataLimit) {
//   // const [posts, setPosts] = useState([]);
//   // const [error, setError] = useState('');

//   // useEffect(() => { ... }, [] );

//   // if (error) return <h1>{error}</h1>;

//   // get park hikes, set state,

//   return (
//       <div>
//         {data.length > 0 ? (
//           <>
//             <Pagination
//               data={data}
//               RenderComponent={component}
//               title={title}
//               pageLimit={pageLimit}
//               dataLimit={dataLimit}
//             />
//           </>
//         ) : (
//          <h1>No ${title} found</h1>
//         )}
//       </div>
//   );
// }
