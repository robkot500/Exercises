import React, { useState, useEffect } from 'react'
import Main from './Main'
import Section from './Section'

function Header() {

    var x = window.matchMedia("(max-width: 600px)")
    const [width, setWidth] = useState(x.matches)
    useEffect(() => {
        const isDesktop = window.matchMedia("screen and (min-width: 600px)");
        isDesktop.addListener(function (event) {
            if (event.matches) {
                console.log(event.matches, 'ggggg')
                setWidth(prevState => false)
                console.log(width, 'width min')
            }
        }, []);
    });
    useEffect(() => {
        const isMobile = window.matchMedia("screen and (max-width: 599px)");
        isMobile.addListener(function (event) {
            if (event.matches) {
                console.log(event.matches, 'ssssss')
                setWidth(prevState => true)
                console.log(width, ' width max')
            }
        }, []);
    });
    if (width === false) {
        return (
            <Main />
        )
    }
    if (width === true) {
        return (
            <Section />
        )
    }
}

export default Header
