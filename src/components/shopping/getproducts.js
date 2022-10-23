const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products/category/men\'s clothing')
    let data = await response.json()
    return data
  }

  export default fetchProducts;