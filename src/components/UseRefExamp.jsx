import React from "react";

function UseRefExamp() {
    let [items, setItems] = React.useState([1, 2, 3, 4, 5]);
    const ulRef = React.useRef();
    function handleScroll() {
        console.log("Scroll");
    }

    let element = document.querySelector("ul");
    console.log(element);

    // React.useEffect(() => {
    //     ulRef.current.addEventListener("scroll", handleScroll);
    // }, []);

    function addItems() {
        setItems([...items, ++items[items.length - 1]]);
    }
    function removeScrollEvent() {
        console.log(ulRef);
        ulRef.current.removeEventListener("scroll", handleScroll);
    }

    return (
        <div className="userRefWrapper">
            <ul ref={ulRef}>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={addItems}>Add item</button>
            <button onClick={removeScrollEvent}>Remove scroll event</button>
        </div>
    );
}

export default UseRefExamp;
