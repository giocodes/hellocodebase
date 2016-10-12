//RepoSelector.js
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const RepoSelector = React.createClass({
  componentDidMount(){
    if (this.props.location.query.repo){
    this.fetchRepo(this.props.location.query.repo);
    window.document.getElementById('githubForm').className="no-display";
    window.document.getElementById("repo-title").className="col-sm-12";
    // Todo: enable omnibox
    // window.document.getElementById("omniBox").className="col-sm-4";
    }
  },
  checkRepoUrl(repoUrl){
    return (repoUrl.slice(0,19)==='https://github.com/'||repoUrl.slice(0,18)==='http://github.com/') ? true : false
  },
  handleSubmit(e){
    e.preventDefault();
    let repo = this.refs.repo.value;
    console.log(repo)
    if(this.checkRepo){
      browserHistory.push('/?repo='+repo)
      this.fetchRepo(repo);
    }
    else{
      console.log('we got an invalid url')
      this.refs.repo.value = "Invalid Github! Please enter valid URL!"
    }
  },
  fetchRepo(repoUrl){
    this.props.requestRepoContents(repoUrl);
    this.props.toggleLoading(true);
    fetch('http://localhost:7770/api/repo?url=' + repoUrl)
    .then(response => {
      return response.json();
    })
    .then(repoObj => {
      this.props.receiveRepoContents(repoObj.code);
      this.props.receiveNodes(repoObj.nodes);
      this.props.toggleLoading(false);
      window.document.getElementById('githubForm').className ="no-display";
      window.document.getElementById("repo-title").className="col-sm-12";
    })
  },

  omniBoxSearch(){
    // Search a function, line, activeNode...
  },

  render() {
    return (
      <div>
      <div id="repo-title" className="col-sm-12 no-display">
        {this.props.activeRepo.substr(18)}
      </div>
      <div id="omniBox" className="col-sm-4 no-display">
        <form ref="omniBox" onSubmit={this.omniBox}>
          <div className="form-group">
            <input autoComplete="off" id="" className="form-control text-input" type="text" ref="omniBox" placeholder="Search"/>
            <input type="submit" hidden />
          </div>
        </form>
      </div>
      <div id="githubForm" className="">
        <form ref="usernameForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input autoComplete="off" id="github-repo" className="form-control text-input" type="text" ref="repo" placeholder="Enter Github repo URL"/>
            <input type="submit" hidden />
          </div>
        </form>
      </div>
      </div>

    )
  }
})

export default RepoSelector;
