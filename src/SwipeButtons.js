import React from 'react'
import './SwipeButtons.css';
import { IconButton } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";


function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton >
                <ReplayIcon className="swipeButton_replay" fontSize="large"/>
            </IconButton>
            <IconButton >
                <CloseIcon className="swipeButton_close" fontSize="large"/>
            </IconButton>
            <IconButton >
                <StarRateIcon className="swipeButton_starRate" fontSize="large"/>
            </IconButton>
            <IconButton >
                <FavouriteIcon className="swipeButton_favourite" fontSize="large"/>
            </IconButton>
            <IconButton >
                <FlashOnIcon className="swipeButton_flashOn" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
