/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import avatar from '../img/avatar.png';

export default function Header() {
    return (<header>
        <div>
            <h1>
                Running List Planner
            </h1>
        </div>
        <div>
            <h2>Polina Lappo</h2>
            <img src={avatar}/>
        </div>
    </header>)
}