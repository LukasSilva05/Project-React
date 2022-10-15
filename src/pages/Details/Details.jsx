import { Link, useLocation, useNavigate } from "react-router-dom"

export function Details() {
    const location = useLocation()
    const navigation = useNavigate()

    return (
        <div>
            <h1>{location.state.cap.chapter}: {location.state.cap.tittle}</h1>
            <p>{location.state.cap.resume}</p>
            <button onClick={() => navigation("/")}>Voltar</button>
            <a href={location.state.cap.flashcards} target="_blank"><button>Flashcards</button></a>
        </div>
    )
}