import { Link, useNavigate } from "react-router-dom"
import getChapter from "../../data/data"

export function Home() {
  const chapters = getChapter()
  const navigation = useNavigate()

  return (
    <div>
      {chapters.map(cap => {
        return (
          <h1>
            {cap.chapter}
            <button onClick={() => {
              navigation("/details", {
                state: {
                  chapter: cap.chapter,
                  tittle: cap.tittle
                }
              })
            }}
            >
              Ir para o capitulo
            </button>
          </h1>
        )
      })}
    </div>
  )
}

