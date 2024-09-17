/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import About from "./pages/AboutUs/About";
import Moreinfo from "./pages/moreinfo/Moreinfo";
import Footer from "./components/footer/Footer";
import TopHeader from "./components/header/topHeader/TopHeader";
import PageNotFound from "./pages/notFound/PageNotFound";
import Contact from "./pages/contact/Contact";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Register from "./pages/user/register/Register";
import Login from "./pages/user/login/Login";
import Profile from "./pages/user/profile/Profile";
import ChangePassword from "./pages/user/changePassword/ChangePassword";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import AdminDashboard from "./components/admin/AdminDashboard";
import { profile } from "./redux/features/authSlice";
import AddAdminProduct from "./components/admin/addAdminProduct/AddAdminProduct";
import { ContextProvider } from "./context/Context";
const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(profile());
    }
  }, [dispatch, isAuthenticated]);
  return (
    <>
    <ContextProvider>
      <Router>
        <TopHeader isAuthenticated={isAuthenticated} user={user} />
        <ToastContainer />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/change/password"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ChangePassword />
              </ProtectedRoute>
            }
          />
          <Route path="/product/details/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/more-info" element={<Moreinfo />} />
          <Route
            path="/admin-hamrobazar-dashboard-panel"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
              >
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add/admin/products"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
              >
                <AddAdminProduct />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      </ContextProvider>
    </>
  );
};

export default App;
