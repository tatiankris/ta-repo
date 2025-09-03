import React, {useState} from "react";

// (Тут реакт отходит от классического цикла ререндеров)
const MythChildMemo = React.memo(({a, state}: { a: number, state: number }) => {
    console.log("Render-MythChildMemo")
    return <div>
        <div>Child - a: {a}</div>
        <div>Child - toPropsState: {state}</div>
    </div>
})

function MythParentMemo() {
    const [parentState, setParentState] = useState(0);
    const [toPropsState, setToPropsState] = useState(0);

    let a = 0

    console.log("Render-MythParentMemo")
    return (
        <div className="App">
            <h2>Big Rerenders Myth: React.memo()</h2>
            {/*
                При изменении a все также ничего не происходит
                */}
            <button onClick={() => {a++
                console.log(`Зачение a: ${a}`)
            }}>
                nostateChangeA
            </button>

            <MythChildMemo a={a} state={toPropsState}/>

            {/* Child теперь обернут в memo, и поэтому при изменении стейта родителя,
            от которого наш дочерний не зависит, Child НЕ БУДЕТ ререндерится
            */}
            <div>
                <button onClick={() => {
                    setParentState(parentState + 1)
                }}>
                    setParentState
                </button>
                <span> parentState: {parentState}</span>
            </div>

            {/*
                Т.к. toPropsState мы передаем в пропсах нашему Child,
                то он будет ререндерится, т.к. memo отслеживает изменение пропсов компонента,
                и в зависимости от этого вызывает ререндер.
            */}
            <div>
                <button onClick={() => {
                    setToPropsState(toPropsState + 1)
                }}>
                    setToPropsState
                </button>
                <span> toPropsState: {toPropsState}</span>
            </div>
        </div>
    );
}

export { MythParentMemo };
