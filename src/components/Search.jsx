const Search = ({ setCats, originalData }) => {
    const handleChange = (value) => {
        const filteredCats = originalData.filter((cat) =>
            cat.name.toLowerCase().includes(value.toLowerCase())
        );

        setCats(filteredCats);
    };

    return (
        <div className="search-wrapper">
            <input
                className="search-bar"
                type="text"
                placeholder="Search your favorite cat..."
                onChange={(e) => {
                    handleChange(e.target.value);
                }}
            />
        </div>
    );
};

export default Search;
