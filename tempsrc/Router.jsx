import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Configurator from './pages/Configurator'; // Create this file if it doesn't exist

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/configurator" element={<Configurator />} />
        </Routes>
    );
}

export default Router;