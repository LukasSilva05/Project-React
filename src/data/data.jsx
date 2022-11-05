import { useEffect, useState } from "react"
import axios from "axios"

export function getChapter() {
    const [chapters, setChapters] = useState([])

    useEffect(() => {
        async function fetchChapter() {
            const response = await axios('https://api-projeto-react.herokuapp.com')
            const data = response.data
            setChapters(data)
        }
        fetchChapter()
    }, [])

    return chapters
}