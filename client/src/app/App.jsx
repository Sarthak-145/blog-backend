import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicLayout from '../layouts/PublicLayout';

import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* without token */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* with token */}
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
