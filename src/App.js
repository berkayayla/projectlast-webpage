import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Images from "./components/Images";
import Grafik from "./components/Grafik";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Images />
      <Grafik />
      <Table />
    </div>
  );
}

export default App;
