import { useEffect, useState } from "react"

const cache = {}

export const useFetch = (url) => {
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = () => {                
        if (cache[url] && (Date.now() - cache[url].times < 240000)) {
            setResult(cache[url].data)
            setLoading(false)
        } else {
            setLoading(true)
            setTimeout(() => {
                fetch(url)
                    .then((res) => res.json())
                    .then((data) => {
                        setResult(data)
                        cache[url] = {
                            data: data,
                            times: Date.now()
                        }
                    })
                    .catch((err) => setError(err))
                    .finally(() => setLoading(false))
            }, 1000)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    const refetch = () => {
        delete cache[url]
        fetchData()
        
    }
    return { result, error, loading, refetch }
}
    