/*
In a board of nXn squares (where n%2!==0):
    - There are 2n+2 available lines to win.
    - Find a way to calculate those lines
    - Each line has a total number of columnsSize elements (columnsSize=n)
    - Number of columns (columnsSize) = number of rows
    - Board of 3x3, positions in array: [0,1,2,3,4,5,6,7,8,9];
    - Lines in a 3x3 board (means n=3):
        * Vertical (n steps between elements)
          [0,3,6] 
          [1,4,7]
          [2,5,8]
        * Horizontal (step of 1 between elements, cutting on n-1, 2n-1, 3n-1)
          [0,1,2]
          [3,4,5]
          [6,7,8]
        * Diagonal 
          [0,4,8]
          [2,4,6]
          (
            diagonal explanation:
            - first: first element of first row, then 2nd element of 2nd row, then 3rd elemnt of third row
            - second: last element of first row, then last-1 element of second row, then last-2 element of last row
          )
    */

const calculateLines = (columnsSize = 3) => {
    const totalSquaresInBoard = columnsSize * columnsSize;
    const endsOfLines = []
    for (let index = columnsSize - 1; index < totalSquaresInBoard; index += columnsSize) {
        endsOfLines.push(index);
    }

    //Horizontal lines
    const horizontalTotalLines = [];
    let horizontalLine = [];
    for (let i = 0; i < totalSquaresInBoard; i++) {
        horizontalLine.push(i);
        if (endsOfLines.includes(i)) {
            horizontalTotalLines.push(horizontalLine);
            horizontalLine = [];
        }
    }

    //Vertical lines
    const verticalTotalLines = [];
    const constantPartOfLimitOfInnerCircle = totalSquaresInBoard - columnsSize;
    for (let index = 0; index < columnsSize; index++) {
        const verticalLine = [];
        const limitOfInnerCicle = constantPartOfLimitOfInnerCircle + index;
        for (let j = index; j <= limitOfInnerCicle; j += columnsSize) {
            verticalLine.push(j);
        }
        verticalTotalLines.push(verticalLine);
    }

    //Diagonal lines
    const firstDiagonal = []
    const secondDiagonal = []
    const endOfFirstLine = endsOfLines[0];
    let acumulatorForSecondDiagonal = endOfFirstLine;
    for (let index = 0; index < totalSquaresInBoard; index += columnsSize + 1) {
        firstDiagonal.push(index);
        secondDiagonal.push(acumulatorForSecondDiagonal);
        acumulatorForSecondDiagonal += endOfFirstLine;
    }
    return [...horizontalTotalLines, ...verticalTotalLines, firstDiagonal, secondDiagonal];
}

export default calculateLines;