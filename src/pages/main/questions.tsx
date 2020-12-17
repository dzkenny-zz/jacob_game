import React from 'react';
import './styles.css';

function getImage(question: number) {
    switch (question) {
        case 1:
            return require('../../assets/images/question1.jpg').default;
    }
}

function Questions() {
    return (
        <div className={'questions-board'}>
            <div className={'container'}>
                <img src={getImage(1)} className={'background'} />
                <div className={'questions-panel'}>
                    <div className={'questions-pannel-container'}>
                        <div className={'question-title'}>
                            圖中人物為
                        </div>
                        <div className={'question-answer'}>
                            <div className={'answer-option'}>A.</div>
                            <div>林牧</div>
                        </div>
                        <div className={'question-answer'}>
                            <div className={'answer-option'}>B.</div>
                            <div>林牧</div>
                        </div>
                        <div className={'question-answer'}>
                            <div className={'answer-option'}>C.</div>
                            <div>林牧</div>
                        </div>
                        <div className={'question-answer'}>
                            <div className={'answer-option'}>D.</div>
                            <div>林牧</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions;