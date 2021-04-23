import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const Title = () => {
    const location = useLocation()

    useEffect(() => {
        const title = location.pathname.slice(1, 1000)
        const replaceStringWithLineBreak = (str) => str.replace(/\//g, "-")
        document.title = `Ivy's Nails | ${replaceStringWithLineBreak(title.charAt(0).toUpperCase() + title.slice(1)) || "Home"}`
    }, [location])

    return <></>
}

export default Title