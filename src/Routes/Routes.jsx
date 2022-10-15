import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Details } from "../pages/Details/Details";
import { Home } from "../pages/Home/Home";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
                <Route path="*" element={
                    <>
                        <h1>O caminho não existe</h1>
                        <Link to="/">Voltar</Link>
                    </>
                } />
            </Routes>
        </Router>
    )
}