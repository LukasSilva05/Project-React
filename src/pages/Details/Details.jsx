import { useLocation, useNavigate } from "react-router-dom"
import { Container, Button } from "./style"
import { Global } from "../../Global/style"

export function Details() {
    const location = useLocation()
    const navigation = useNavigate()
    const cap = location.state.cap

    return (
        <Container>
            <Global />
            <h1>{cap.tittle}</h1>
            <p>{cap.resume}</p>
            <div>
                <Button onClick={() => navigation("/")}>Voltar</Button>
                <div>
                    <a href={cap.download} target="_blank"><Button>Baixar PDF</Button></a>
                    <a target="_blank"><Button>Mapa Mental</Button></a>
                    <a href={cap.flashcards} target="_blank"><Button>Flashcards</Button></a>
                </div>
            </div>
        </Container>
    )
}