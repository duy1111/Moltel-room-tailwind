import { Routes, Route } from "react-router-dom";
import { Home, Login,RentalHouse,RentalApartment,RentalRoom,RentalSpace,HomePage } from "./containers/Public";
import { path } from "./utils/constant";
function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={'*'} element={<HomePage/>} />

          <Route path={path.CHO_THUE_CAN_HO} element={<RentalApartment/>} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace/>} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom/>} />
          <Route path={path.NHA_CHO_THUE} element={<RentalHouse/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
