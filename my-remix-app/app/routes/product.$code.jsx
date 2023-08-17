import { Link, useLoaderData } from "@remix-run/react";
import { loadProductDetailData } from "../viewmodels/ProductListViewModel";

export let loader = async ({ params }) => {
  const { code } = params;
  const productDetail = await loadProductDetailData(code);
  return productDetail;
};
export default function ProductDetail() {
  const allProducts = useLoaderData();

  const {
    imageUrl,
    badge,
    lastUpdate,
    freeShipping,
    mkName,
    productName,
    price,
    storageOptions,
    rating,
    countOfPrices,
    followCount
  } = allProducts.code;
  return (
    <div>
      <div className="product-item ">
        <h2>Product Detail</h2>
        <h5>{mkName}</h5>
        <h5>{rating}</h5>
        <h5>{productName}</h5>
        <h3>{badge}</h3>
        <img src={imageUrl} alt={productName} />

        <p>kapasite secenekleri:</p>
        <p>{storageOptions.join("  ")}</p>
        <p> {price} TL</p>
        <p> {countOfPrices}</p>
        {freeShipping ? <p> Ucretsiz Kargo </p> : ""}
        <p>{followCount}</p>
        <p>Son Guncelleme:{lastUpdate}</p>
        <Link to="/">
          <h1>Geri Git</h1>
        </Link>
      </div>
    </div>
  );
}
