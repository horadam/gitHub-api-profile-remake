import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getUserData } from '../actions/actions';
import linkPic from '../assets/link-solid.svg'
import mapMarker from '../assets/map-marker.svg'
import users from '../assets/users.svg'

class UserProfile extends Component {
    componentDidMount(){
        getUserData()
    }
    render() {
        return (
            <div className="userProfile">
                <img id="userBigPic" alt="userPicBig" src={this.props.user.avatar_url} />
                <h3>{this.props.user.name}</h3>
                <h4>{this.props.user.login}</h4>
                <h5><img alt="usersPic" src={users}/> {this.props.user.company}</h5>
                <h5><img alt="mapMarkerPic" src={mapMarker}/> {this.props.user.location}</h5>
                <h5><img alt="linkPic" src={linkPic}/> {this.props.user.html_url}</h5>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        user: appState.userData,
    }
}

export default connect (mapStateToProps) (UserProfile)
