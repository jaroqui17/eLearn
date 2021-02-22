import React from 'react';
import ReduxApp from './ReduxApp.jsx';
import GamesContainer from './Games/GamesContainer.jsx'
import TitleImg from './img/PlayHardTitle.png';


const App = (props) => {
    return (
        <div className='App'>
            <img className='TitleHome' src={TitleImg} />
            <GamesContainer />
        </div>
        )
};

export default App;