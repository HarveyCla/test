

const Card = (props) => {
    const {title, image, desc} = props;
    return(
        <div className="cards">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <img src={image} alt="" />
            <div className="card-over">
                <p>{desc}</p>
            </div>
        </div>
        
    )
}
export default Card;