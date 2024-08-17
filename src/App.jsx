import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Luna Kips" animal="Dump" breed="dumpiestDump"/>
        <Pet name="Leona" animal="Cat" breed="Tabby"/>
        <Pet name="Charlie" animal="Cat" breed="Russian Blue"/>
        <Pet name="Sadniko" animal="Dog" breed="Siberian Husky"/>
        <Pet name="Anzu" animal="Bird" breed="Goodest Boi"/>
        <Pet name="Shadow" animal="Bird" breed="Parakeet"/> */}
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
