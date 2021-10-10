import { useEffect, useState } from 'react';

export default function Pagination(data, component, title, pageLimit, dataLimit) {
  // const [posts, setPosts] = useState([]);
  // const [error, setError] = useState('');

  // useEffect(() => { ... }, [] );

  // if (error) return <h1>{error}</h1>;

  return (
      <div>
        {data.length > 0 ? (
          <>
            <Pagination
              data={data}
              RenderComponent={component}
              title={title}
              pageLimit={pageLimit}
              dataLimit={dataLimit}
            />
          </>
        ) : (
         <h1>No ${title} found</h1>
        )}
      </div>
  );
}
