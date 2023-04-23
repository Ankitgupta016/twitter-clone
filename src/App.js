import "./App.css";

import SideBar from "./components/SideBar";
import Twites from "./components/Twites";
import Search from "./components/Search";

function App() {
  return (
    <div className="twitter">
      <SideBar />
       <Twites />
     <Search />
    </div>
  );
}

export default App;
