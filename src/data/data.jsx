import { useEffect, useState } from "react"

function getChapter() {
    const [chapters, setChapters] = useState([])

    useEffect(() => {
        async function fetchChapter() {
            const response = await fetch('https://api-projeto-react.herokuapp.com')
            const data = await response.json()

            setChapters(data)
        }
        fetchChapter()
    }, [])

    return chapters
}

export default getChapter