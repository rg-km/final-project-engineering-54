import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Scrollpage(props) {
    const path = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [path]);

    return <>{props.children}</>
}