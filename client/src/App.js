import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home";
import Login from "./Components/Login/Login";
import NewUser from "./Components/Login/NewUser";
import Pedals from "./Components/Pedals/Pedals";
import MyPedals from "./Components/Pedals/MyPedals";
import NewPedal from "./Components/Pedals/NewPedal";
import PedalBoards from "./Components/PedalBoard/PedalBoards";
import NewPedalBoard from "./Components/PedalBoard/NewPedalBoard";
import useToken from "./useToken";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [pedals, setPedals] = useState([]);
  const [pedalboards, setPedalboards] = useState([]);

  // useEffect(() => {
  //   async function fetchPedals() {
  //     const result = await fetch("");
  //     if (result.ok) {
  //       const data = await result.json();
  //       setPedals(data);
  //     }
  //   }
  // });
  useEffect(() => {
    fetch("http://localhost:3000/pedals")
      .then((r) => r.json())
      .then((pedals) => {
        console.log(pedals);
        setPedals(pedals);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/pedalboards")
      .then((r) => r.json())
      .then((pedalboards) => {
        console.log("pbnj", pedalboards);
        setPedalboards(pedalboards);
      });
  }, []);

  function addNewPedal(newPedal) {
    const updatedPedalArray = [...pedals, newPedal];
    setPedals(updatedPedalArray);
  }

  function addNewPedalboard(newPedalboard) {
    const updatedPedalboardArray = [...pedalboards, newPedalboard];
    setPedalboards(updatedPedalboardArray);
  }

  // const { token, setToken } = useToken();

  // if (!token) {
  //   return (
  //     <Router>
  //       <div className="App">
  //         <Navbar />
  //         <Switch>
  //           <Route path="/newuser">
  //             <NewUser />
  //           </Route>
  //           <Route path="/">
  //             <Login setToken={setToken} />
  //           </Route>
  //         </Switch>
  //       </div>
  //     </Router>
  //   );
  // }
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/newuser">
              <NewUser />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/pedals">
              <Pedals
                pedals={pedals}
                setPedals={setPedals}
                addNewPedal={addNewPedal}
              />
            </Route>
            <Route path="/mypedals">
              <MyPedals pedals={pedals} />
            </Route>
            <Route path="/newpedal">
              <NewPedal />
            </Route>
            <Route path="/pedalboards">
              <PedalBoards
                pedals={pedals}
                id={pedalboards.id}
                pedalboards={pedalboards}
                setPedalboards={setPedalboards}
                addNewPedalboard={addNewPedalboard}
              />
            </Route>
            <Route path="/newpedalboard" addNewPedalboard={addNewPedalboard}>
              <NewPedalBoard pedals={pedals} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
