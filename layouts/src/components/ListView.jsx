import ShopItem from "./ShopItem";

export default function ListView (items) {
    return (
        <div className="list">
            {items.items.map((item, index) => <ShopItem key={index} product={item}></ShopItem>)}
        </div>
    )
}