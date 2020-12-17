import React from 'react';
import './styles.css';

const scores = [
    '0',
    '1,000',
    '2,000',
    '3,000',
    '4,000',
    '6,000',
    '10,000',
    '20,000',
    '30,000',
    '40,000',
    '60,000',
    '80,000',
    '150,000',
    '250,000',
    '500,000',
    '1,000,000'
]

function ScoreBoard() {
    const correct = 0;
    return (
        <div className={'score-board'}>
            {
                scores.map((score, index) => (
                    <div
                        key={`score-${index}`}
                        className={`
                        score-field 
                        ${index && index % 5 === 0 ? ' white' : ''}
                        ${correct === index ? ' selected' : ''}
                        `}
                    >
                        <div className={`circle ${index && index % 5 === 0 ? 'white-circle' : ''}`} />
                        <div className={'number'}>{index}.</div>
                        <div className={'score'}>${score}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ScoreBoard;