import {useCallback, useEffect, useRef, useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {fromEvent} from "rxjs";
import {MythParent} from "./React/BigRerendersMyth.tsx";
import {MythParentMemo} from "./React/BigRerendersMythMemo.tsx";
import {ResizeDetector} from "./React/hooks/ResizeDetector.tsx";
import {Parent} from "./React/LearnRenderMount/Parent.tsx";
import { init as initSub } from "./myObservable/MySubject.ts"
import { init } from "./myObservable/ObservableImplem-interval.ts"
// import { init } from "./myObservable/ObservableImplem-of-from.ts"
// import { init } from "./myObservable/ObservableImplement.ts"
// import {init} from "./Memo/foo.ts"
//
initSub();
init();

const Child = ({a}: { a: number }) => {
    // console.log("RenderChild")
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
    const [mount, setMount] = useState(true)
    const handleMount = useCallback(() => {
        setMount(!mount)
    }, [mount])


    return (
        <div className="App">
			{/*<div ref={ref} style={{ height: 300, width: 400, backgroundColor: click ? "blue" : "green" }}>*/}
			{/*</div>*/}

			{/*<button onClick={() => {*/}
			{/*	subscription.unsubscribe()*/}
			{/*}}>Unsubscribe*/}
			{/*</button>*/}


            {/*<ResizeDetector />*/}
            {/*<MythParent />*/}
            {/*<MythParentMemo />*/}
            {/*{*/}
            {/*    [*/}
            {/*    <div>1</div>,*/}
            {/*    <div>2</div>,*/}
            {/*    <div>3</div>,*/}
            {/*    <div>4</div>,*/}
            {/*    ]*/}
            {/*}*/}
            {/*{{div: <div>IN OBJ</div>}}*/}

        {/*    ///*/}

        {/*    {mount ? <Parent/> : null}*/}
        {/*    <button onClick={handleMount}>{mount ? "Unmount" : "Mount"}</button>*/}
        </div>
    );
}

export default App;
