export default function Price({price}) {
    return (
        <div className="price">
        <del>{price[0]}</del>
        &nbsp;&nbsp;&nbsp;
        <b>{price[1]}</b>
        </div>
    )
}