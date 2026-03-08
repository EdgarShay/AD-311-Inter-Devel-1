import "./App.css";

import { ContentA } from "./components/ContentA";
import { ContentB } from "./components/ContentB";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentA />
      <ContentB />
      <Footer />
    </div>
  );
}

export default App;