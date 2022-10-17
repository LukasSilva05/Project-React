import { getChapter } from '../../data/data'
import { Global } from "../../Global/style"
import { Container } from "./style"
import { Box } from '../../components/Box'

export function Home() {
  const chapters = getChapter()
  return (
    <Container>
      <Global />
      {chapters.map(cap => <Box cap={cap} />)}
    </Container>
  )
}

