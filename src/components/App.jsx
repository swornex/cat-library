import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "./CardList";
import Search from "./Search";

function App() {
    const [cats, setCats] = useState();
    const [isPending, setIsPending] = useState(true);
    const [originalData, setOriginalData] = useState();

    const fetchCats = async () => {
        try {
            setIsPending(true);

            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );

            const cats = response.data;

            setCats(cats);
            setOriginalData(cats);
        } catch (e) {
            console.log(e.message);
        } finally {
            setIsPending(false);
        }
    };
    useEffect(() => {
        fetchCats();
    }, []);

    return (
        <div className="App">
            <h1 className="title">Cat-Library</h1>
            <Search setCats={setCats} originalData={originalData} />
            <CardList cats={cats} isPending={isPending} />
        </div>
    );
}
export default App;
