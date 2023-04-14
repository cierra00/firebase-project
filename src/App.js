import React from "react";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemRoutes from "./routes/ItemRoutes";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import ProductProvider from "./components/context/ProductContext"
import SearchPage from "./pages/SearchPage";
import SingleProduct from "./pages/SingleProduct";
import SignInForm from "./pages/SignInForm";
import { AuthContextProvider } from "./components/context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";


export default function App() {
  return(
    
   <>
   <AuthContextProvider>
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<SignInForm />} />
    <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
    <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
    <Route path="/search" element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
    <Route path="/products" element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />
    <Route path="/*" element={<ProtectedRoute>< SingleProduct/></ProtectedRoute>} />
    <Route path="*" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
    <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
    
  </Routes>
   <Footer />
   </BrowserRouter>
      </ AuthContextProvider>
   </>
  )
}

