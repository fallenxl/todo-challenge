import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import PrivateRoute from "./pages/PrivateRoute";
import Home from "./pages/Home";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const { user, userIsLoading } = useSelector((state) => state.user);
  console.log(userIsLoading);
  return (
    <div className="app max-w-xl min-h-screen mx-auto">
      <Router>
        {!userIsLoading ? (
          <>
            <Header />
            <Routes>
              <Route element={<PrivateRoute user={user} />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<Navigate to="/auth" />} replace />
            </Routes>
            <Footer />
          </>
        ) : (
          <LoadingPage />
        )}
      </Router>
    </div>
  );
}

export default App;
