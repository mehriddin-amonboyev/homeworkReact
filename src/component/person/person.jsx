import "./person.css"

function Person({ img, name, title }) {
    return (
        <div className="person__block">
            <div className="person__image">
                <img className="person__img" src={img} alt="person rasmi" />
            </div>
            <h3 className="person__name">{name}</h3>
            <p className="person__block_title">{title}</p>
        </div>
    )
}

export default Person;