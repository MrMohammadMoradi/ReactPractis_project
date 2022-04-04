

function Card({image, title, cardtext}) {
    return(
        <div className="recipesCard py-3 px-2">
            <img className="CardImage w-100" src= {image} alt="PostImag" />
            <div className="CardDescription bg-danger p-3">
                <h3 className="Title fs-4">{title}</h3>
                <p className="Description text-white-50 pb-4 mb-0">{cardtext}</p>
            </div>
            <button className="SeeMore bg-warning py-2"> More... </button>

        </div>
    )
}

export default Card;