import { useNavigate } from "react-router-dom"
import { BoxContainer, Button } from "./style"


export function Box({ cap }) {
    const navigation = useNavigate()

    return (
        <BoxContainer>
            <h1>{cap.chapter}: {cap.tittle}</h1>
            <Button onClick={() => navigation("/details", { state: { cap } })}>
                Detalhes
            </Button>
        </BoxContainer>
    )
}