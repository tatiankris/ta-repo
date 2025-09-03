import {useResizeDetector} from "./useResizeDetector.ts";

const ResizeDetector = () => {
    const size = useResizeDetector()
    console.log("Resize:", size)

    return null
}

export {ResizeDetector}
