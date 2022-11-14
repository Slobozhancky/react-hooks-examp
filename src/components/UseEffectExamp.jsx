import React from "react";

function UseEffectExamp() {
    function addNumber() {
        let newNum = numbers[numbers.length - 1];
        // в массив numbers мы будем добавлять новое число
        // где берем 1м аргументом - все что есть в массиве ...numbers
        // 2м аргументом, передаем число которое хотим добавить
        setNumbers([...numbers, ++newNum]);
    }

    let [numbers, setNumbers] = React.useState([1, 2]);
    let [count, setCount] = React.useState(0);

    // componentWillMount
    React.useEffect(() => {
        console.log("COMPONENT WILL MOUNT");
    }, []);

    // componentDidUpdate - реагирует на любые изменения (не указываем зависимости [])
    React.useEffect(() => {
        console.log("COMPONENT DID UPDATE");
    });

    // componentDidUpdate с исполизованием зависимостей (следим за изменениями в numbers)
    React.useEffect(() => {
        console.log("COMPONENT DID UPDATE");
    }, [numbers]);

    // componentDidUpdate с исполизованием зависимостей (следим за изменениями в count)
    React.useEffect(() => {
        console.log("COMPONENT DID UPDATE");
    }, [count]);

    // componentWillMount +  componentWillUnmount
    React.useEffect(() => {
        console.log("COMPONENT DID UPDATE");
        return () => {
            console.log("COMPONENT WILL DELETE");
        };
    });

    return (
        <>
            <h3>{count}</h3>
            <button onClick={() => setCount((num) => num + 1)}>
                Increment
            </button>
            <ul>
                {numbers.map((num, index) => (
                    <li key={`${num} + ${index}`}>{num}</li>
                ))}
            </ul>
            <button onClick={addNumber}>Add new num</button>
        </>
    );
}

export default UseEffectExamp;

// export class UseEffectExamp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             numbers: [1, 2, 3, 4],
//         };

//         this.addItem = this.addItem.bind(this);
//     }

//     addItem() {
//         let num = this.state.numbers[this.state.numbers.length - 1];
//         this.setState({ numbers: [...this.state.numbers, ++num] });
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log(
//             { prevProps: prevProps, prevState: prevState },
//             { props: this.props, state: this.state }
//         );
//     }

//     componentDidMount() {
//         console.log("Component mount");
//     }

//     componentWillUnmount(){
//         console.log('Component unmount');
//     }

//     render() {
//         return (
//             <>
//                 <ul>
//                     {this.state.numbers.map((num, i) => (
//                         <li key={num + i}>{num}</li>
//                     ))}
//                 </ul>
//                 <button onClick={this.addItem}>Add</button>
//             </>
//         );
//     }
// }

// export default UseEffectExamp;
