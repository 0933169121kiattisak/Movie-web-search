import "./App.css";
import axios from "axios";
import Detail from "./components/Detail";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    s: "sherlock",
    results: [],
    seleted: {},
  });

  const apiUrl = "https://www.omdbapi.com/?apikey=a2526df0";

  const searchInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const search = (e) => {
    console.log(e.target.value)
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        console.log(results);

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const openDetail = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;
      setState((prevState) => {
        return { ...prevState, seleted: result };
      });
    });
  };

  const closeDatail = () => {
    setState((prevState) => {
      return { ...prevState, seleted: {} };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Mania</h1>
      </header>
      <main>
        <Search searchInput={searchInput} search={search} />
        <div className="container">
          {state.results.map((e) => (
            <div className="item" onClick={() => openDetail(e.imdbID)}>
              <img src={e.Poster} alt=""/>
              <h3>{e.Title}</h3>
            </div>
          ))}
        </div>
        {typeof state.seleted.Title != "undefined" ? (
          <Detail selected={state.seleted} closeDetail={closeDatail} />
        ) : (
          false
        )} 
      </main>
    </div>
  );
}

export default App;


