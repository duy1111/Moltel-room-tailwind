import { Routes, Route } from "react-router-dom";
import { Home, Login,Rental,HomePage,DetailPost,SearchDetail } from "./containers/Public";
import { path } from "./utils/constant";
import { CreatePost, EditProfile, ManagePost, System,Contact } from "./containers/System";
import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import * as actions from './store/actions';

function App() {
  let dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth)

  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getCurrentUser());
    },1000)
    
},[isLoggedIn])
useEffect(() => {
  dispatch(actions.getPrices());
  dispatch(actions.getArea());
  dispatch(actions.getProvince());

}, []);
  return (
    <div className=" w-full bg-primary overflow-hidden">
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
          <Route path={path.SEARCH} element={<SearchDetail/>} />
        </Route>
        <Route path={path.SYSTEM} element={<System/>} >
          <Route path={path.CREATE_POST} element={<CreatePost/>} />
          <Route path={path.MANAGE_POST} element={<ManagePost/>} /> 
          <Route path={path.EDIT_PROFILE} element={<EditProfile/>} /> 
          <Route path={path.CONTACT} element={<Contact/>} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
