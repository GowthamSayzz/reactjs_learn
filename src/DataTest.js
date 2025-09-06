import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, makeZero } from "./Store/counter";

function DataTest(){

    let counter = useSelector(state => state.counter);
    let dispatch = useDispatch();

    function handleIncrement(){
        dispatch(increment(""));
    }

    function handleDecrement(){
        dispatch(decrement(""));
    }

    function handlemakeZero(){
        dispatch(makeZero(""));
    }

    return (
        <div className="container">
            <div className="row">
                <Header />
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <h1>Counter</h1>
                    <h3 className="text-primary text-center">
                    {
                        counter
                    }
                    </h3>
                    <button className="btn btn-success me-2" onClick={e => handleIncrement()}>+</button>
                    <button className="btn btn-danger me-2" onClick={e=> handleDecrement()}>-</button>
                    <button className="btn btn-warning me-2" onClick={e=> handlemakeZero()}>Reset</button>
                </div>
            </div>
            <div className="row">
                <Footer />
            </div>
        </div>
    )
}

export default DataTest;