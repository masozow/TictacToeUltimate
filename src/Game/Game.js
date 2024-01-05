import { useState } from "react";
import Board from "../Board/Board"

const Game = (props) => {
    const [isWinner, setIsWinner] = useState('');
    const [nextTurn, setNextTurn] = useState(false)

    const handleSetIsWinner = (winner) => {
        setIsWinner(winner);
    }

    const handleNextTurn = (turn) => {
        setNextTurn(!turn);
    }

    return (
        <div style={{ margin: 'auto' }}>
            {!isWinner ? <h3>Next turn: {nextTurn ? 'O' : 'X'}</h3> : <h3>Winner: {isWinner}</h3>}
            <Board turn={nextTurn} winner={isWinner} winnerHandler={handleSetIsWinner} nextTurnHandler={handleNextTurn} />
        </div>
    )
}

export default Game;