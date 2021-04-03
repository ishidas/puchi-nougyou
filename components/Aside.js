import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

const Aside = () => {
    return (
        <div className="px-2 h-screen w-40 p-0 flex-1">
            <nav>
                <ul>
                    <li className="w-full">Blog 1</li>
                    <li>Blog 2</li>
                    <li>Blog 3</li>
                    <li>Blog 4</li>
                </ul>
            </nav>
        </div>
    )
}

export default Aside