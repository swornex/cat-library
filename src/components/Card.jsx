const Card = ({ className, name, email, id }) => {
    return (
        <div className={`card ${className}`}>
            <div className="img-wrapper">
                <img
                    className="img"
                    src={`https://robohash.org/${id}?set=set4&size=180x180`}
                    alt={name}
                ></img>
            </div>
            <div className="text-container">
                <h3>{name}</h3>
                <h5>{email}</h5>
            </div>
        </div>
    );
};

export default Card;
