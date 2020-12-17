import React from 'react';
import { useHistory } from 'react-router';
import ChurchImg from '../../assets/images/church.jpg';
import './styles.css';

function SplashPage() {
    const history = useHistory();

    const onPlay = () => {
        history.replace('/main');
    }

    return (
        <div className={'container'}>
            <img src={ChurchImg} className={'backgroundImage'} />
            <div className={'button'} onClick={onPlay}>進入</div>
        </div>
    )
}

export default SplashPage;