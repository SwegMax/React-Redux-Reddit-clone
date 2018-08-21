import React, { Component } from 'react';
import {connect} from 'react-redux';
import { showPostFilter, PostFilters } from '../actions';

class FilterPosts extends Component {

    constructor() {
        super();
        this.state = {name: null};
    }

    componentDidMount() {
        this.setState({name: this.props.name});
        this.showAllElement.classList.add('active');
    }

    handleShowAllPosts() {
        this.props.dispatch(showPostFilter(PostFilters.SHOW_ALL, this.state.name));
        this.showAllElement.classList.add('active');
        this.showMyElement.classList.remove('active');
    }

    handleShowMyPosts() {
        this.props.dispatch(showPostFilter(PostFilters.SHOW_SELF, this.state.name));
        this.showAllElement.classList.remove('active');
        this.showMyElement.classList.add('active');
    }


    render() {
        return (
            <div className="col-sm-12">
                <strong>Show : </strong> 
                <span className="col link" ref={el => this.showAllElement = el} onClick={this.handleShowAllPosts.bind(this)}>All Posts</span>
                <span className="col link" ref={el => this.showMyElement = el} onClick={this.handleShowMyPosts.bind(this)}>My Posts</span>
            </div>
        );
    }


    toggleActiveClass() {

    }
}

export default connect()(FilterPosts);