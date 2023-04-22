import { Routes, Route } from "react-router-dom";
import { Home, Login,Rental,HomePage,DetailPost } from "./containers/Public";
import { path } from "./utils/constant";
function App() {
  return (
    <div className=" w-full bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.DETAIL_POST__TITLE___POSTID} element={<DetailPost/>} />
          <Route path={path.DETAIL_POST} element={<DetailPost/>} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={'*'} element={<HomePage/>} />

          <Route path={path.CHO_THUE_CAN_HO} element={<Rental/>} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<Rental/>} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental/>} />
          <Route path={path.NHA_CHO_THUE} element={<Rental/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
