import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import StockPage from '../pages/StockPage/StockPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/stock" element={<StockPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
