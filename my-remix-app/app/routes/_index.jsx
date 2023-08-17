import React from 'react';
import { Link, useLoaderData } from '@remix-run/react';
import loadProductListData from '../viewmodels/ProductListViewModel';

export const loader = async () => {
  let nextUrl = 'https://mocki.io/v1/59906f35-d5d5-40f7-8d44-53fd26eb3a05';
  let allProducts = {
    horizontalProducts: [],
    products: []
  };

  while (nextUrl) {
    try {
      let data = await loadProductListData(nextUrl);
      if (data.data.result.nextUrl) {
        allProducts.horizontalProducts.push(...data.data.result.horizontalProducts);
        allProducts.products.push(...data.data.result.products);
        nextUrl = data.data.result.nextUrl;
      } else {
        nextUrl = null;
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      nextUrl = null;
    }
  }
  return allProducts;
};

export default function Index() {
  const allProducts = useLoaderData();
  return (
    <div>
        <h2 >Horizontal Products</h2>
      <div className="horizontal-products">
  

{allProducts.horizontalProducts?.map(product => (
  <div key={product.code} className="product-item">
   <p>%{product.dropRatio}</p>
   <Link to={`/product/${product.code}`}>
      <img className="product-item img" src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
        </Link>
    <p>{product.countOfPrices} satici</p>
    <p>{product.price} TL</p>
    <p>{product.followCount}+ takip</p>
  </div>
))}
    </div>
   
    <h2>Vertical Products</h2>
 <div className="product-grid ">

      {allProducts.products.map(product => (
        <div key={product.code} className="product-item">
      <Link to={`/product/${product.code}`}>
      <img className="product-item img" src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
       
        </Link>
        </div>
      ))}
 </div> 
     
    </div> 
  );
}
