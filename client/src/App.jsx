import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProtectRoute from "./config/ProtectRoute";

import {Toaster} from 'react-hot-toast'
import { baseUrl } from "./config/config";
import { userExists } from "./redux/reducers/authSlice";
import Loading from "./shared/Loading";

// Lazy Loading
const Events = lazy(() => import("./pages/Events"));
const NewEvent = lazy(() => import("./components/NewEvent"));
const Login = lazy(() => import("./pages/Login"));
const AllEvents = lazy(() => import("./pages/AllEvents"));

function App() {
  const dispatch = useDispatch();
  const { isAdmin, isAuthenticated } = useSelector((state) => state.auth);
  

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axios.get(`${baseUrl}/user/my-profile`, {
          withCredentials: true,
        });
        dispatch(
          userExists({
            user: response?.data?.user,
            isAdmin: response?.data?.user?.isAdmin,
          })
        );
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }
    fetchProfile();
  }, [dispatch]);

  console.log("isAuth app",isAuthenticated,isAdmin)

  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          
          <Route element={<ProtectRoute admin={isAdmin} isAuth={isAuthenticated}  />}>
            <Route path="/new-event" element={<NewEvent />} />
            <Route path="/events" element={<AllEvents />} />
            <Route path="/events/:id" element={<Events />} />
          </Route>

          
          <Route element={<ProtectRoute isAuth={isAuthenticated} admin={!isAdmin} />}>
            <Route path="/events" element={<AllEvents />} />
            <Route path="/events/:id" element={<Events />} />
          </Route>

          
          <Route
            path="/"
            element={<ProtectRoute isAuth={!isAuthenticated} redirect="/events"><Login /></ProtectRoute>}
          />
          {/* <Route path="/loader" element={<Loading/>}/> */}
          <Route path="*" element={<h1>Page not found...</h1>}  />
        </Routes>
      </Suspense>
      <Toaster position='bottom-center'/>
    </Router>
  );
}

export default App;
