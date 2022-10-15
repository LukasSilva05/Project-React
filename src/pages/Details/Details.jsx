import { Link, useLocation } from "react-router-dom"

export function Details() {
    const location = useLocation()

    return (
        <div>
            <h1>{location.state.chapter}: {location.state.tittle}</h1>
            <Link to="/">Voltar</Link>
        </div>
    )
}