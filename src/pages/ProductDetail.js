import React from 'react';
import {useParams} from 'react-router-dom';

function ProductDetailPage () {
  const params = useParams ();

  return (
    <React.Fragment>
      <h1>Product Details!</h1>
      <p>
        {params.productId}
      </p>
    </React.Fragment>
  );
}

export default ProductDetailPage;
