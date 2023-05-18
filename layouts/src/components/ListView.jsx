import ShopItem from "./ShopItem";

export default function ListView (items) {
    return (
        <div className="list">
            {items.items.map(item => <ShopItem  product={item}></ShopItem>)}
        </div>
    )
}