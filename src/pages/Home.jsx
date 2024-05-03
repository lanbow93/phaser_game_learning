import { useState } from "react"
import Game from "../components/Game"

function Home(){
    const [starCount, setStarCount] = useState(0)

    function updateCount(){
        setStarCount(starCount + 1)
    }
    return <div className="home">
        <h1>Stars: {starCount}</h1>
        <Game updateCount={updateCount}/>
    </div>
}

export default Home