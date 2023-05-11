const calculateWinner = (arrayOfLines = [], arrayOfObjectsValues = []) => {
    let result = '';
    arrayOfLines.forEach(element => {
        const [first, second, third] = [...element];
        if (arrayOfObjectsValues[first].value !== '' && arrayOfObjectsValues[second].value !== '' && arrayOfObjectsValues[third].value !== '') {
            if ((arrayOfObjectsValues[first].value === arrayOfObjectsValues[second].value && arrayOfObjectsValues[second].value === arrayOfObjectsValues[third].value)) {
                result = arrayOfObjectsValues[first].value;
                return;
            }
        }
    });
    return result;
}

export default calculateWinner;