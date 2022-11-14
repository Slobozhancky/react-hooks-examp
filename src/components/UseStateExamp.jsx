import React from "react";

function UseStateExamp() {
    let [numbers, setNumbers] = React.useState([1, 2, 3, 4]);
    function addNumber() {
        let newNum = numbers[numbers.length - 1];
        // в массив numbers мы будем добавлять новое число
        // где берем 1м аргументом - все что есть в массиве ...numbers
        // 2м аргументом, передаем число которое хотим добавить
        setNumbers([...numbers, ++newNum]);
    }

    let items = numbers.map((num, index) => (
        <li key={`${num} + ${index}`}>{num}</li>
    ));

    return (
        <>
            <ul>{items}</ul>
            <button onClick={addNumber}>Add new num</button>
        </>
    );
}

export default UseStateExamp;
