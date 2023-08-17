export async function fetchProducts(url) {
  const response = await fetch(url);
  return response.json();
}

export async function fetchProductDetail(url) {
  console.log("url",url)
  const response = await fetch(url);
  return response.json();
}