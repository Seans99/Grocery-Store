import { useState, useEffect } from "react";
import Product from "./Product";
import ProductDetail from "./ProductDetail";

export default function ProductList() {

  // state variable holding th id of the
  // product detail we are currently showing 
  // (or zero if not showing any detail)
  const [detailId, setDetailId] = useState(0);

  // state variable that we will store our variables in
  const [products, setProducts] = useState([]);

  // remember the scroll position in the list
  const [scrollMemory, setScrollMemory] = useState(0);

  // read the product data when this component mounts
  useEffect(async () => {
    setProducts(await (await fetch("src/public/products.json")).json());
  }, []);

  // a function for a product to call when the user wants
  // to show the product details
  function goToDetail(id) {
    setScrollMemory(window.scrollY);
    window.scrollTo(0, 0); // scroll to top
    setDetailId(id);
  }

  // function for a product detail
  // when the user clicks the "Back" button
  function goToList() {
    setDetailId(0);
    // since it takes a little time for React
    // to react on the state change and show the list again
    // we wait 100 ms before setting the scroll position of the list
    setTimeOut(() => window.scrollTo(0, scrollMemory), 100);
  }

  return <>
    {
      /* 
      Show the product list unless 
      there is a detail to show
      */
      !detailId &&
      products.map(product =>
        <Product
          key={product.id}
          {...{ product, goToDetail }}
        />
      )
    }

    {
      /* Show details about a product */
      detailId && <ProductDetail {...{
        product: products.find(x => x.id === detailId),
        goToList
      }} />
    }
  </>
}