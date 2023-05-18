import ShopCard from "./ShopCard";

export default function CardsView (items) {
    return (
        <div className="cards">
            {items.items.map(item => <ShopCard product={item}></ShopCard>)}
        </div>
    )
}