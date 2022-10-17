import { BoxContainer, Button } from '../pages/Home/style'
import { useNavigate } from "react-router-dom"

export function Box({ cap }) {
    const navigation = useNavigate()
    console.log(cap)
    return (
        <BoxContainer>
            <h1>{cap.chapter}: {cap.tittle}</h1>
            <Button onClick={() => navigation("/details", { state: { cap } })}>
                Detalhes
            </Button>
        </BoxContainer>
    )
}