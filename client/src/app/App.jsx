import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from '../layouts/PublicLayout';

import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { PrivateLayout } from '../layouts/PrivateLayout';
import Home from '../pages/Home';
import { AuthProvider } from '../../test';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* without token */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* with token */}
          <Route element={<PrivateLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
