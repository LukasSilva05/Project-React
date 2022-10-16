import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../../components/Box/style"

export function Details() {
    const location = useLocation()
    const navigation = useNavigate()

    return (
        <div>
            <h1>{location.state.cap.chapter}: {location.state.cap.tittle}</h1>
            <p>{location.state.cap.resume}</p>
            <Button onClick={() => navigation("/")}>Voltar</Button>
            <a href={location.state.cap.flashcards} target="_blank"><Button>Flashcards</Button></a>
        </div>
    )
}