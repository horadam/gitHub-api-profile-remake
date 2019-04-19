import React, {Component} from 'react'
import '../styles/base.css'
import bell from "../assets/bellWhite.png"
import GHIcon from "../assets/gitHubIcon.png"
import userPic from "../assets/userPic.png"

class NavHeader extends Component {
    render() {
        return (
            <div className="navHeader">
                <div className="navLeft">
                    <img src={GHIcon} alt="GHIcon"/>
                    <form action="">
                        <input type="text" placeholder="Search or jump to..." name="search"></input>
                        <button>/</button>
                    </form>
                    <span>Pull requests</span>
                    <span>Issues</span>
                    <span>Marketplace</span>
                    <span>Explore</span>


                </div>
                <div className="navRight">
                    <img className="marginRight" src={bell} alt="bell"/>
                    <span> <i id="plus" className="fa fa-plus"></i></span>
                    <i className="fa fa-caret-down marginRight"></i>
                    <img id="userPic" src={userPic} alt="userPic"/>
                    <i className="fa fa-caret-down marginRight"></i>
                </div>

            </div>
        )
    }
}

export default NavHeader