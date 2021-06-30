import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Shuffle } from '@material-ui/icons';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <h1>Album and song details</h1>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__green"/>
                <RepeatIcon className="footer__icon"/>
            </div>

            <div className="footer__right">
            
            </div>

        </div>
    )
}

export default Footer
