import { Box } from "../../components/Box/Box"
import { getChapter } from '../../data/data'
import { Global } from "../../Global/style"
import { Container } from "./style"

export function Home() {
  const chapters = getChapter()

  return (
    <Container>
      <Global />
      {chapters.map(cap => <Box key={cap.id} cap={cap} />)}
    </Container>
  )
}

