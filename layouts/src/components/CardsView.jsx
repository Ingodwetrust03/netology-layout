import ShopCard from "./ShopCard";

export default function CardsView (items) {
    return (
        <div className="cards">
            {items.items.map((item, index) => <ShopCard  key={index} product={item}></ShopCard>)}
        </div>
    )
}