import {useEffect, useLayoutEffect, useState} from "react";

type TProps = {
    setValue: (v: number) => void;
}
const Child = ({ setValue }: TProps) => {
    // debugger
    const [value, setValueChild] = useState(6);
    console.log("Child----useState", value)

    useEffect(() => {
        console.log("Child----useEffect", setValue)
        setValueChild(7)
        // debugger

        return () => {
            setValue(666)
            console.log("Child----Unmount", setValue)
        }
    }, []);

    useLayoutEffect(() => {
        console.log("Child----useLayoutEffect")
        // debugger

        return () => {
            console.log("Child----LAYOUTUnmount")
        }
    }, []);

    return <div id={"child-id"}>
        <div>{`Child----valueState: ${value}`}</div>
    </div>
}

const Parent = () => {
    // debugger
    const [value, setValue] = useState(0);
    console.log("Parent----useState", value)

    useEffect(() => {
        console.log("Parent----useEffect")
        setValue(1)
        setValue(2)
        setValue(3)
        // debugger

        return () => {
            console.log("Parent----Unmount")
        }
    }, []);

    useLayoutEffect(() => {
        console.log("Parent----useLayoutEffect")
        // debugger
        return () => {
            console.log("Parent----LAYOUTUnmount")
        }
    }, []);

    const onClick = () => {
        setValue(value + 1)
        setValue(value + 2)
        setValue(value + 3)
    }

    return <div id={"parent-id"}>
        <div onClick={onClick}>{`Parent----valueState: ${value}`}</div>
        <Child setValue={setValue} />
    </div>
}

export { Parent }
