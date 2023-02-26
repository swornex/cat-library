import Card from "./Card";

const CardList = ({ cats, isPending }) => {
    return (
        <div className="card-wrapper">
            {!isPending
                ? cats
                    ? cats.map((cat, index) => (
                          <Card
                              key={index}
                              className="item"
                              name={cat.name}
                              email={cat.email}
                              id={cat.id}
                          />
                      ))
                    : "No Cats Found"
                : "Loading..."}
        </div>
    );
};

export default CardList;
