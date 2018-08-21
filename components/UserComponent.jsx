import React, { Component } from 'react';
import SubmitLink from './SubmitLink';
import PostsList from './PostsList';
import FilterPosts from './FilterPosts';

class UserComponent extends Component {

    constructor() {
        super();
    }

    allPosts = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];
    myPosts = ['Post 3', 'Post 5'];

    componentDidMount() {
       // make store call here
    }

    render() {
        return  (
        <div className="user-section">
            <h3>{this.props.name}</h3>
            <div className="user-div">
                <div className="submitlink-div">
                    <SubmitLink name={this.props.name}/>
                </div>
                <div className="postlist-div">
                    <PostsList name={this.props.name}/>
                </div>
                <div className="filter-div">
                    <FilterPosts name={this.props.name}/>
                </div>
            </div>
        </div>
        );
    }
}

export default UserComponent;