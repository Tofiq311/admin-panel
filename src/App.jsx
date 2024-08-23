import {useContext} from 'react'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import List from './Components/List/List'
import Single from './Components/Single/Single'
import New from './Components/New/New'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { productInputs, userInputs } from './Formsource'
import './Style/Dark.scss'
import { DarkModeContext } from "./Context/DarkModeContext";
import { AuthContext } from "./Context/AuthContext";

const App = () => {

  const { darkMode } = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
      <Route path='/'>
      <Route path="login" element={<Login />} />
      <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
         <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


