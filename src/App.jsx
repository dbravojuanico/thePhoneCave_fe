import { Route, Routes } from "react-router-dom";
import "./App.css";
import PhoneList from "../pages/phoneList";
import PhoneDetails from "../pages/PhoneDetails";
import Landing from "../pages/Landing";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Landing />
          </div>
        }
      />
      <Route
        path="/phones"
        element={
          <div>
            <PhoneList />
          </div>
        }
      />
      <Route
        path="phones/:id"
        element={
          <div>
            <PhoneDetails />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
