import { BrowserRouter, Routes, Route } from "react-router-dom";
import moment from "moment";

import Title from "./components/Title";
import Label from "./components/Label";

import { routes } from "./routes";

function App() {
  const today = moment().format("MMMM Do YYYY");
  const dayOfWeek = moment().format("dddd");

  return (
    <>
      <BrowserRouter>
        <div className="page">
          <div className="date-header">
            <Title bold={true}>My Day</Title>
            <br />
            <Label>{`${dayOfWeek}, ${today}`}</Label>
          </div>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.to} element={route.element} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
