import {useEffect, useRef, useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {fromEvent} from "rxjs";
import {MythParent} from "./React/BigRerendersMyth.tsx";
import {MythParentMemo} from "./React/BigRerendersMythMemo.tsx";
import {ResizeDetector} from "./React/hooks/ResizeDetector.tsx";

const Child = ({a}: { a: number }) => {
    console.log("RenderChild")
    return <div>Child{a}</div>
}

function App() {
    // const [click, setClick] = useState(false);
	// const ref = useRef<HTMLDivElement>(null)
    // const source = fromEvent(ref.current, 'click');
	//
	// const subscription = source.subscribe((x) => {
	// 	setClick(!click)
	// })
    return (
        <div className="App">
			{/*<div ref={ref} style={{ height: 300, width: 400, backgroundColor: click ? "blue" : "green" }}>*/}
			{/*</div>*/}

			{/*<button onClick={() => {*/}
			{/*	subscription.unsubscribe()*/}
			{/*}}>Unsubscribe*/}
			{/*</button>*/}
            <ResizeDetector />
            <MythParent />
            <MythParentMemo />
        </div>
    );
}

export default App;
