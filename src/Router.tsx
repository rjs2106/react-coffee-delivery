import { Routes, Route } from 'react-router-dom';

// Layouts
import { Wrapper } from './layouts/Wrapper';

// Pages
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />} >
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}