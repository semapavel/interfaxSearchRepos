import React from "react";
import "./app.less";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import UserPage from "./userPage/UserPage";
import CommitsPage from "./commitsPage/CommitsPage";
const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/interfaxSearchRepos" element={<Main />} />
          <Route path="/interfaxSearchRepos/:login" element={<UserPage />} />
          <Route path="/interfaxSearchRepos/:login/:repoName" element={<CommitsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
