import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { ArrowBackIos } from '@material-ui/icons';
import { Link ,useHistory} from "react-router-dom";

function Header(props) {
    const { backbutton } = props;
    const history=useHistory();
    return (
        <div className="header">
            {
                backbutton ? (
                    <IconButton onClick={()=>history.replace(backbutton)}>
                        <ArrowBackIos fontSize="large" className="header_icon" />
                    </IconButton>
                ) : (

                    <IconButton>
                        <PersonIcon fontSize="large" className="header_icon" />
                    </IconButton>
                )
            }

            <Link to="/">
                <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-768x432.png" alt="" />
            </Link>

            <Link to="chat">
                <IconButton>
                    <ForumIcon fontSize="large" className="header_icon" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;
