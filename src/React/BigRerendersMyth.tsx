import {useState} from "react";

const MythChild = ({a}: { a: number }) => {
    console.log("Render-MythChild")
    return <div>Child - a: {a}</div>
}

function MythParent() {
    const [state, setState] = useState(0);

    let a = 0
    console.log("Render-MythParent")
    return (
        <div className="App">
            <h2>Big Rerenders Myth</h2>
                {/*
                При клике на кнопку а меняется, что можно отследить в консоли,
                но при этом никто не ререндерится,
                хоть а и передается как пропс в MythChild (т.е. пропс меняется, а компонент не перерендеривается)
                */}
            <button onClick={() => {
                a++
                console.log(`Зачение a: ${a}`)
            }}>
                nostateChangeA
            </button>

            <MythChild a={a}/>

                {/*
                При клике на кнопку state меняется,
                при этом ререндерится MythParent, где объявлен useState, и его дочерний компонент - MythChild,
                хоть при этом пропсы MythChild и НЕ МЕНЯЮТСЯ. (state мы вообще никуда не передаем)
                */}
            <button onClick={() => {
                setState(state + 1)
            }}>
                setState
            </button>
            <span> state: {state}</span>
        </div>
    );
}

export { MythParent };
