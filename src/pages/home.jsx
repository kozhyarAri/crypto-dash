import CoinCard from "../components/CoinCard";
import LimitSelector from "../components/LimitSelector";
import FilterInput from "../components/FilterInput";
import SortSelector from "../components/SortSelector";
import Spinner from "../components/Spinner";

const HomePage = ({
  coins,
  loading,
  error,
  limit,
  filter,
  sortBy,
  setLimit,
  setFilter,
  setSortBy,
}) => {
  const filterCoins = coins
    .filter((coin) => {
      return (
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
      );
    })
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case "market_cap_desc":
          return b.market_cap - a.market_cap;
        case "market_cap_asc":
          return a.market_cap - b.market_cap;
        case "price_desc":
          return b.current_price - a.current_price;
        case "price_asc":
          return a.current_price - b.current_price;
        case "change_desc":
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case "change_asc":
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
        default:
          return 0;
      }
    });
  return (
    <div>
      <h1>🚀Crypto Dashboard</h1>

      <div className="top-controls">
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <LimitSelector limit={limit} onLimitChange={setLimit} />
        <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
      </div>
      {error && <div className="error">X {error}</div>}
      {loading && <Spinner />}
      {!loading && !error && (
        <main className="grid">
          {filterCoins.map((coin) => (
            <CoinCard coin={coin} key={coin.id} />
          ))}
        </main>
      )}
      <footer
        style={{
          marginTop: "2rem",
          padding: "1rem 0",
          textAlign: "center",
          background: "#222",
          color: "#fff",
          fontSize: "1rem",
          letterSpacing: "0.5px",
        }}
      >
        Made by{" "}
        <a
          href="https://www.kozhyarari.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#61dafb",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Kozhyar Ari
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
