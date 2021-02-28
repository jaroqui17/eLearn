import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import LeagueOfLegends from './LeagueOfLegends.jsx';
  import Valorant from './Valorant.jsx';
  import TeamFightTactics from './TeamFightTactics.jsx';

const GamesContainer = (props) => {
    return (
        <div className='GamesCont'>
            <Router>
                <div className='GameList'>
                    <ul>
                        <li><Link to="/valorant">Valorant</Link></li>
                        <li><Link to="/league">League of Legends</Link></li>
                        <li><Link to="/tft">Team Fight Tactics</Link></li>
                    </ul>
                </div>
                <Switch>
                <Route exact path="/valorant">
                    <Valorant />
                </Route>
                <Route path="/league">
                    <LeagueOfLegends />
                </Route>
                <Route path="/tft">
                    <TeamFightTactics />
                </Route>
                </Switch>
            </Router>
        </div>
        )
};

export default GamesContainer;