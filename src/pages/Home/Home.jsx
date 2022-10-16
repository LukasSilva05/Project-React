import { getChapter } from '../../data/data'
import { Global } from "../../Global/style"
import { Container } from "./style"
import { useNavigate } from "react-router-dom"
import { BoxContainer, Button } from './style'

export function Home() {
  const chapters = getChapter()
  const navigation = useNavigate()

  return (
    <Container>
      <Global />
      {chapters.map(cap => {
        return (
          <BoxContainer>
            <h1>{cap.chapter}</h1>
            <Button onClick={() => navigation("/details", { state: { cap } })}>
              Detalhes do Capítulo
            </Button>
          </BoxContainer>
        )
      })}
    </Container>
  )
}

