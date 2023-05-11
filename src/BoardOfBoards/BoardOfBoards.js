import Board from "../Board/Board";
import calculateLines from "./functionality/calculateLines";
import calculateWinner from "./functionality/calculateWinner";
const BoardOfBoards = ({ turn, winner, winnerHandler, nextTurnHandler }) => {
    const [linesThatWin, setLinesThatWin] = useState([]);


    useEffect(() => {
        setLinesThatWin(calculateLines(3));
    }, [])
    return (
        <>
            <Board turn={nextTurn} winner={isWinner} winnerHandler={handleSetIsWinner} nextTurnHandler={handleNextTurn} />
        </>
    );
}

export default BoardOfBoards;

import { INITIAL_STATE, boardReducer, actionTypes } from "./reducers/boardReducer";


const Board = ({ turn, winner, winnerHandler, nextTurnHandler }) => {

    const [state, dispatch] = useReducer(boardReducer, INITIAL_STATE);


    const squareClickHandler = (who) => {
        if (who.value !== '' || winner !== '')
            return;
        who.value = turn ? 'O' : 'X';
        dispatch({ type: actionTypes.UPDATE_VALUE, payload: who });
        const winnerResult = calculateWinner(linesThatWin, state);
        if (winnerResult)
            winnerHandler(winnerResult);
        nextTurnHandler(turn);
    }

    return (
        <div className={styles.board}>
            {
                state &&
                state.map((posAndVal) => {
                    return <Square key={posAndVal.id} posAndVal={posAndVal} clickHandler={squareClickHandler} />;
                })
            }
        </div>
    )
}

