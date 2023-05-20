export default function ShopItem (product) {
    return (
        <div className="shop-card in-list" >
            <img src={product.product.img} />
            <h1>{product.name}</h1>
            <div className="color-block">{product.product.color}</div>
            <div className="price-block">$ {product.product.price}</div>
            <button type="button" id="addToCart">Add to cart</button>
        </div>
    )
}