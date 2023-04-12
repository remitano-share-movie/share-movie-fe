import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ListOfFilm from "./components/Film/ListOfFilm";
import { useLocalContext } from "./context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthMiddleware from "./middlewares/auth.middleware";
import ShareFilm from "./components/Film/ShareFilm";

function App() {
  const { dataInfo, authLogin, setDataInfo, setAuthLogin } = useLocalContext;

  const [loadingAuth, setloadingAuth] = useState(true);

  

  return (
    <div>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<ListOfFilm />} />
            <Route
              exact
              path="/share"
              element={
                <AuthMiddleware>
                  <ShareFilm />
                </AuthMiddleware>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
