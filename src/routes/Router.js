import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductsPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
