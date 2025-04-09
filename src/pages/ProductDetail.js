import React from 'react';
import {Link, useParams} from 'react-router-dom';

function ProductDetailPage () {
  const params = useParams ();

  return (
    <React.Fragment>
      <h1>Product Details!</h1>
      <p>
        {params.productId}
      </p>
      <p><Link to=".." relative='path'>Back</Link></p>
    </React.Fragment>
  );
}

export default ProductDetailPage;
