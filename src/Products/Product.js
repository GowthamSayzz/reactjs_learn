function Product({ product, updateCart, removeItemsinCart }) {

    function handleAddtoCart(){
        updateCart();
    }

    function handleRemoveCartItem(){
        removeItemsinCart();
    }

    return (
        <div className="col-3">
            <div className="card shadow">
                <img src={product.thumbnail} className="card-img" />
                <div className="card-body">
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <div>
                        <i className="bi bi-currency-rupee">{product.price}</i>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary me-2" onClick={addtoCart => handleAddtoCart()}>Add to cart</button>
                        <button className="btn btn-danger" onClick={removeCartItem => handleRemoveCartItem()}>Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;