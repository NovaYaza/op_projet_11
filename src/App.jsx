import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/Home.jsx';
import About from '@pages/About/About.jsx';
import Layout from '@components/Layout/Layout.jsx';
import Logement from '@pages/Logement/Logement.jsx';
import NotFound from '@pages/NotFound/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
