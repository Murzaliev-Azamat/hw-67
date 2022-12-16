import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {addNumber, deleteSymbol, toggleCheck} from "./IntercomSlice";
import './Intercom.css';

const PASSWORD = 1337;

const Intercom = () => {
  const dispatch = useDispatch();
  const intercom = useSelector((state: RootState) => state.intercom);

  const allNumbers = parseInt(intercom.numbers.join(''));

  let symbols: string[] = [];

  for (let i = 0; i < intercom.numbers.length; i++) {
    symbols.push('*');
  }

  let info = (
    <div className="display">{symbols}</div>
  )

  if (intercom.checkedPassword && allNumbers === PASSWORD) {
    info = (
        <div className="display-granted">Access Granted</div>
    )
  }

  if (intercom.checkedPassword && allNumbers !== PASSWORD) {
    info = (
      <div className="display-denied">Access Denied</div>
    )
  }

  // let buttons = null;
  //
  // for (let i = 0; i < 9; i++) {
  //   buttons = (
  //     <button onClick={() => dispatch(addNumber(i))} className="btn">i</button>
  //     )
  //   return buttons
  // }

  return (
    <>
      {info}
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {/*{buttons}*/}
        <button onClick={() => dispatch(addNumber(1))} className="btn">1</button>
        <button onClick={() => dispatch(addNumber(2))} className="btn">2</button>
        <button onClick={() => dispatch(addNumber(3))} className="btn">3</button>
        <button onClick={() => dispatch(addNumber(4))} className="btn">4</button>
        <button onClick={() => dispatch(addNumber(5))} className="btn">5</button>
        <button onClick={() => dispatch(addNumber(6))} className="btn">6</button>
        <button onClick={() => dispatch(addNumber(7))} className="btn">7</button>
        <button onClick={() => dispatch(addNumber(8))} className="btn">8</button>
        <button onClick={() => dispatch(addNumber(9))} className="btn">9</button>
        <button onClick={() => dispatch(deleteSymbol())} className="btn">{"<"}</button>
        <button className="btn">0</button>
        <button onClick={() => dispatch(toggleCheck())} className="btn">E</button>
      </div>
    </>
  );
};

export default Intercom;