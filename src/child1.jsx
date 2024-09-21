import React from "react";
import { useFetch } from "./useFetch";

function Child1() {
    const { loading, result, error, refetch } = useFetch("https://fakestoreapi.com/products")

    return <>
        <h1>Child 1</h1>

        {loading && <p>Loading...</p>}
        {result && <p>{result.length}</p>}
        {error && <p>{error.message}</p>}
        <button onClick={refetch}>Refetch</button>
    </>
}

export default React.memo(Child1) 