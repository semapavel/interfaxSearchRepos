import React from "react";
import "./app.less";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import UserPage from "./userPage/UserPage";
import CommitsPage from "./commitsPage/CommitsPage";
const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:login" element={<UserPage />} />
          <Route path="/:login/:repoName" element={<CommitsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
