import './App.css'
import { useCallback, useMemo, useState } from 'react'
import Child1 from './child1'
import Child2 from './child2'
import Child3 from './child3'
import Child4 from './child4'


let list = new Set()
function App() {
  console.log("App rendered")

  const [num, setNum] = useState(10)
  const [count, setCount] = useState(0)
  const form = useMemo(() => count + 1, [count])
  const countUp = useCallback(() => {
    setCount(count + 1)
  }, [count])
  list.add(countUp)

  console.log(list.size)

  return <>
    <h2>count {num}</h2>
    <button onClick={() => setNum(num + 1)}>Up</button>
    <Child1 />
    <Child2 />
    <Child3 />
    <Child4 />

  </>

}
export default App
