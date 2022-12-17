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

  let btnNumbers = [];

  for (let i = 1; i <= 9; i++) {
    btnNumbers.push(<button key={i} onClick={() => dispatch(addNumber(i))} className="btn">{i}</button>);
  }

  return (
    <>
      {info}
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {btnNumbers}
        <button onClick={() => dispatch(deleteSymbol())} className="btn">{"<"}</button>
        <button className="btn">0</button>
        <button onClick={() => dispatch(toggleCheck())} className="btn">E</button>
      </div>
    </>
  );
};

export default Intercom;