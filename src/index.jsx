import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import {GlobalStyles} from './GlobalStyles';

window.addEventListener('load', () => {
    ReactDOM.render(
        <>
            {/* Таким образом можно добавить глобальные стили */}
            <GlobalStyles/>
            <App/>
        </>, 
        document.getElementById('react_root')
    );
});