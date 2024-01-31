import Price from "./Price";
import Description from "./Description";
export default function Product({title, idx}) {
  let price = [["$39.99","$29.99"],["$35","$29"],["$15","$9"],["$25.99","$19.99"]]
  let discription = [["Genuine leather","Multiple card slots"],["LED mood lighting","Whisper-quiet operation"],["Waterproof","Customizable straps"],["Rich","Handpicked blends"]]
    return (
        <div className="product">
        <h3>{title}</h3>
        <Description discription={discription[idx]}/>
        <Price price={price[idx]}/>
        </div>
    )
}