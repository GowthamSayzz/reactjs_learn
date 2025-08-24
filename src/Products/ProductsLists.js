import { useEffect, useState } from "react";
import Footer from "../Shared/Footer.js";
import Header from "../Shared/Header.js";
import axios from "axios";
import Product from "./Product.js";

function ProductsList() {

    let [products, setProducts] = useState([]);
    let [noOfCartItems, setNoOfcartItems] = useState(0);

    function updateCart() {
        setNoOfcartItems(noOfCartItems + 1)
    }

    function removeItemsinCart(){
        if(noOfCartItems <= 0){
            alert("Items count is already 0");
            return
        }
        setNoOfcartItems(noOfCartItems - 1);
    }

    useEffect(() => {
        async function getProductList() {
            let apiResponse = await axios.get('https://dummyjson.com/products');

            let data = apiResponse.data.products.map(product => {
                product.is_fav = false;
                return product;
            })
            setProducts(data);
            console.log(data);
        }

        getProductList()
    }, [])

    // function handleFav(data) {
    //     let tempData = products.map(product => {
    //         if (product.id === data.id) {
    //             if (data.is_fav === false) {
    //                 product.is_fav = true;
    //             } else {
    //                 product.is_fav = false;
    //             }
    //         }
    //         return product;
    //     })
    //     setProducts(tempData);
    // }


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
            </div>
            <div className="row mt-5 mb-5">
                {/* {
                    products.map( product => (
                        <div className="col-3" key={product.id}>
                            <div className="card shadow">
                                <img src={product.thumbnail} alt={product.thumbnail} className="card-img-top" />
                                <h4 className="card-title"> {product.title}</h4>
                                <h6 className="card-text"> {product.description} </h6>
                                <div>
                                    <button  className="btn btn-primary" onClick={e => handleFav(product)}><i className="bi bi-heart"></i>
                                    {
                                        product.is_fav === true && <span>Remove</span>
                                    }
                                    {
                                        product.is_fav === false && <span>Add</span>
                                    }
                                    </button>
                                </div>
                            </div>  
                        </div>
                    ))
                } */}
                
                <div className="col-12">
                    <h4>Cart: {noOfCartItems} items</h4>
                </div>
                {
                    products.map(product => (
                        <Product product={product} updateCart={updateCart} removeItemsinCart={removeItemsinCart} />
                    ))
                }
            </div>
            <div className="row">
                <Footer />
            </div>
        </div>
    )
}

export default ProductsList;