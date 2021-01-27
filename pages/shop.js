import React, { Component, useState, useCallback, useEffect, useContext } from "react";
// import * as THREE from "three";
import Product from "../components/Products/Product";
import { ShopContext } from "../context/ShopContext";

// import { useFrame, Canvas } from "react-three-fiber";


function Shop(){
  const {fetchAllCollections, collections} = useContext(ShopContext);

  // const [products, setProducts] = useState([]);
  // const [items] = useState(products);
  
  useEffect(() => {
    fetchAllCollections(); 
  }, []);

  // unravel all products in collections
  const collectionsWithProducts = collections.map((collection) => { 
    if (collection.products.length != 0) { 
      return collection.products.map((product) => { 
        return (
          <Product
            collection={collection.title}
            key={product.id}
            product={product}
          />
        );
      })
    }
  });

  // // count number of products in each 
  // let collection = {};
  // let products = [];
  // collections.reduce((aggregator, collection) => { 
  //   if (collection.products.length != 0) { 
  //     let index = collection.products.length + aggregator; 
  //     collectionsDict[collection.title] = index;

  //     products.push(collection.products);
  //     return index;
  //   }
  // }, 0)

  
  console.log(collectionsWithProducts, "proddd")

  // if timeout than say error loading
  if (collections.length == 0) return <h2>Collections are loading</h2>

  return (
      
    <div className="shop-container">
      {collectionsWithProducts}
    </div>
  );
}

export default Shop;
