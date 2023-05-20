export default function ShopCard (product) {
    return (
        <div className="shop-card" >
            <h1>{product.product.name}</h1>
            <div className="color-block">{product.product.color}</div>
            <img src={product.product.img} />
            <div className="price-block">$ {product.product.price}</div>
            <button type="button" id="addToCart">Add to cart</button>
        </div>
            )
    }