import { useEffect, useState } from "react"
import "./App.css"
import Search from "./components/Search"
import Filter from "./components/Filter";
import fetchGameList from "./api";
import Card from "./components/Card";

function App() {
    const [search, setSearch] = useState("");
    const [platform, setPlatform] = useState("all");

    const [games, setGames] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const list = games.filter(game => {
        if (platform === "pc") return game.platform === "PC (Windows)";
        if (platform === "browser") return game.platform === "Web Browser";
        return true;
    }).filter(game => search.trim() ? game.title.trim().toLowerCase().includes(search.trim().toLowerCase()) : true);

    useEffect(() => {
        fetchGameList().then((list) => setGames(list)).catch(() => setError(true)).finally(() => setLoading(false));
    }, []);
    return (
        <>
            <header className="header">
                <h1 className="title">My Games Store</h1>
                <Search onChange={setSearch} on="desktop" />
            </header>
            <main className="main">
                <Search onChange={setSearch} on="mobile" />
                <Filter filter={platform} onChange={setPlatform} />

                {loading && <div className="loader">Loading games...</div>}
                {error && <div className="error">An unknown Error occurred.</div>}


                {search.trim() && list.length === 0 && <div className="error">No matching game found.</div>}

                <div className="grid">
                    {list.map(game => <Card key={game.id} data={game} />)}
                </div>
            </main>
        </>
    )
}

export default App