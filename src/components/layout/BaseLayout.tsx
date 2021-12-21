import React from 'react';
import Header from './Header';

interface ChildrenProps {
    children: any
}


function BaseLayout({children}: ChildrenProps) {
    return (
        <>
            <Header />
            <br />
            {children}
        </>
    )
}

export default BaseLayout;
