import React from 'react';
import {Link} from 'react-router-dom';

// DATABASE
const PRODUCTS = [
  {id: 'p1', title: 'Product 1'},
  {id: 'p2', title: 'Product 2'},
  {id: 'p3', title: 'Product 3'},
];

function ProductsPage () {
  return (
    <React.Fragment>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map (prod => (
          <li key={prod.id}>
            <Link to={`${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
        {/* <li><Link to = '/products/'>Product 1</Link></li>
        <li><Link>Product 2</Link></li>
        <li><Link>Product 3</Link></li> */}

      </ul>
    </React.Fragment>
  );
}
export default ProductsPage;
