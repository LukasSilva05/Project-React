import { useNavigate } from "react-router-dom"

export function Box({ cap }) {
    const navigation = useNavigate()
    return (
        <BoxContainer>
            <h1>{cap.chapter}</h1>
            <Button onClick={() => navigation("/details", { state: { cap } })}>
                Detalhes do Capítulo
            </Button>
        </BoxContainer>
    )
}