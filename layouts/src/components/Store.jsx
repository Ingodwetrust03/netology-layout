import {useEffect, useState} from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";


export default function Store (){

    let dataJson
    let productsArr = []

    const [cards, setView] = useState([])
    const [viewType, setViewType] = useState("view_module")

    const getProductCards = () => {
        fetch('/src/products.json')
            .then (response => response.json())
            .then((json) => {
                dataJson = json

                dataJson.map(item => productsArr.push(item))
                setView(productsArr)
            })
    }


    useEffect(() => {
        getProductCards()
    }, [])


    const changeIcon = (e) => {
        if(e.target.getAttribute("icon") === "view_module"){
            setViewType("view_list")
        } else {
            setViewType("view_module")
        }
    }


    return (
        <div className="store">
            <IconSwitch icon={viewType} onSwitch={changeIcon}/>
            <div className="products-row">
                {viewType === "view_module"  ? <CardsView items={cards}></CardsView> : <ListView  items={cards}></ListView>}
            </div>
        </div>
    )
}