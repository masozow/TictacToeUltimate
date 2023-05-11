import styles from './square.module.css';

const Square = ({ posAndVal, clickHandler }) => {

    return (
        <input type="button" value={posAndVal.value} onClick={() => clickHandler(posAndVal)} />
    );
}

export default Square;