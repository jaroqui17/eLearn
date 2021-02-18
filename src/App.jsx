import React from 'react';
import ReduxApp from './ReduxApp.jsx';
import TitleImg from './img/PlayHardTitle.png';


const App = (props) => {
    return (
        <div className='App'>
            <img className='TitleHome' src={TitleImg} />
            <ReduxApp />
        </div>
        )
};

export default App;