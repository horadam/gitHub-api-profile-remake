import React, {Component} from 'react'
import { getRepoData } from '../actions/actions';
import {connect} from 'react-redux'
import moment from 'moment'

class Main extends Component {
    componentDidMount() {
        getRepoData()
    }
    render() {
        return (
            <div className="repoContainer">
                <div className="repoNav">
                    <div>
                        <span>Overview</span>
                    </div>
                    <div className="repoTab">
                        <span>Repositories</span><span className="repoCount">{this.props.repos.length}</span>
                    </div>
                    <div>
                        <span>Projects</span>
                    </div>
                    <div>
                        <span>Stars</span>
                    </div>
                    <div>
                        <span>Followers</span>
                    </div>
                    <div>
                        <span>Following</span>
                    </div>
                </div>
                <div className="repoFilters">
                    <input name="findRepo" placeholder="Find a repository..."></input>
                    <select name="repoType">
                        <option value="all">All</option>
                        <option value="sources">Sources</option>
                        <option value="forks">Forks</option>
                        <option value="archived">Archived</option>
                        <option value="mirrors">Mirros</option>
                    </select>
                    <select name="repoLanguage">
                        <option value="all">All</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="HTML">HTML</option>
                        <option value="Java">Java</option>
                        <option value="C++">C++</option>
                        <option value="Python">Python</option>
                        <option value="PHP">PHP</option>
                    </select>

                </div>
                <div className="repoMain">
                    <ul>
                        {this.props.repos.map(repo => (
                            <li key={`repo${repo.id}`} className="repoListItem">
                                <h1>{repo.name}</h1>
                                <div className="repoItemSpecs">
                                    <div className={repo.language === 'JavaScript' ? "yellowDot" : repo.language === 'HTML' ? "redDot" : repo.language === 'CSS' ? "purpleDot" :''}></div>
                                    <span id={repo.language === null ? "hidden" : ''}>
                                        {repo.language}
                                    </span>
                                    <span id="updated">
                                        Updated {moment(repo.updated_at).fromNow()}
                                    </span>
                                </div>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        repos: appState.repoData
    }
}

export default connect (mapStateToProps) (Main)