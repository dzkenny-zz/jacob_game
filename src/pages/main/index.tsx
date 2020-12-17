import React from 'react';
import Questions from './questions';
import ScoreBoard from './scores';

import './styles.css';

function MainPage() {
    return (
        <div className={'container'}>
            <Questions />
            <ScoreBoard />
        </div>
    )
}

export default MainPage;