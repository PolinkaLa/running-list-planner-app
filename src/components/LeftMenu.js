/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import menuProfileIcon from '../img/user.svg';
import menuImportIcon from '../img/import.svg';
import menuExportIcon from '../img/export.svg';
import menuDeleteIcon from '../img/del.svg';
import menuHelpIcon from '../img/help.svg';
import { useDispatch } from 'react-redux';
import { reset } from './taskListSlicer';

export default function LeftMenu() {
    const dispatch = useDispatch();
    return (
        <aside>
            <div>
                <span aria-disabled title="function in progress"><img src={menuProfileIcon} /></span>
                <span aria-disabled title="function in progress"><img src={menuImportIcon} /></span>
                <span aria-disabled title="function in progress"><img src={menuExportIcon} /></span>
                <span onClick={() => dispatch(reset())}><img src={menuDeleteIcon} /></span>
            </div>
            <div>
                <span aria-disabled title="function in progress"><img src={menuHelpIcon} /></span>
            </div>
        </aside>
    )
}