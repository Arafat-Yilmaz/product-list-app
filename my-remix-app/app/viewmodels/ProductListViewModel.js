import { fetchProducts,fetchProductDetail } from '../utils/api';
import ProductModel from '../models/ProductModel';

export default async function loadProductListData(nextUrl) {
  const data = await fetchProducts(nextUrl);
  return {
    data
  };
}
export  async function loadProductDetailData(code) {
    console.log("params: ",code)
    const url = `https://mocki.io/v1/1a1fb542-22d1-4919-914a-750114879775?code=${code}`;
    const productData = await fetchProductDetail(url);
    return new ProductModel(productData.result);
  }