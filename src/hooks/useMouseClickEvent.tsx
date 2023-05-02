import { useEffect, useState } from "react";

const useMouseClickEvent = () => {
    const [mouseDown, setMouseDown] = useState(false);

    const handleMouseDown = () => {
        setMouseDown(true);
        console.log('mouse down');
    };

    const handleMouseUp = () => {
        setMouseDown(false);
        console.log('mouse up');
    };
    useEffect(() => {
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
    return mouseDown;
}
export default useMouseClickEvent;