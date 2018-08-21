import React, { Component } from 'react';
import {connect} from 'react-redux';
import { PostFilters } from '../actions';
import Post from './Post';

class PostsList extends Component {

    constructor() {
        super();
        this.state = {name: null};
    }

    componentDidMount() {
        this.setState({name: this.props.name});
    }


    renderList() {
        let posts = [];

        let filter = false;
        
        filter = this.props.postFilters.findIndex(eachFilter => eachFilter.name === this.state.name 
            && eachFilter.filter === PostFilters.SHOW_SELF) >=0;

        if(filter){
            posts = this.props.allPosts.filter(post => post.name === this.state.name);
        }
        else posts = this.props.allPosts;

        if(posts.length === 0) {
            return <li className="post-text"> No Posts found !</li>
        }

        return posts.map(post => {
            return (
            <li key={post.id}>
                <Post post = { post } currentUser={this.state.name}/>
            </li>
            );
        });
    }

    render() {
        
        return (
            <div className="col-sm-12">
                <ul className="post-list">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allPosts: state.posts,
        postFilters: state.postFilter
    };
}

export default connect(mapStateToProps)(PostsList);