import React from "react";
import { useFetch } from "./useFetch";

function Child4 () {

    const { result, error, loading, refetch } = useFetch("https://fakestoreapi.com/products")

    console.log("Child4 rendered")
    return <div>
        <h2>Child 4</h2>

        {loading && <p>Loading...</p>}
        {result && <p>{result.length}</p>}
        {error && <p>{error.message}</p>}

        <button onClick={refetch}>Refetch</button>


    </div>
}

export default React.memo(Child4)