import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom/client";
import {Button} from "react-bootstrap";

const RightTopInfo = () => {
    const data = [123456, 123456, 123456, 123456, 123456, 1234567];
    const [count, setCount] = useState(0);


    useEffect(() => {
        window.localStorage.setItem('count', count);
        console.log(count);
    }, [count]);

    const increaseCount = () => {
        setCount(count + 1);
    }
    const decreaseCount = () => {
        setCount(count - 1);
    }

    return (
        <div className={"right-top-info"}>
            <div className={"buy-sell"}>
                <button className={"buy-button"}>
                    BUY
                </button>
                <button className={"sell-button"}>
                    SELL
                </button>
            </div>
            <div className={"info2"}>
                Market
            </div>
            <div className={"amount-total"}>
                <div className={"amount-chip"}>
                    Amount
                </div>
                <div className={"total-chip"}>
                    Total
                </div>
            </div>
            <div className={"plus-minus"}>
                <button onClick={decreaseCount} className={"minus-button"}>
                    -
                </button>
                <div className={"numbers"}>
                    {count}
                </div>
                <button onClick={increaseCount} className={"plus-button"}>
                    +
                </button>
            </div>
            <div className={'buy-line'}>
                <button className={"buy"}>
                    BUY
                </button>
            </div>
        </div>
    );
};

export default RightTopInfo;