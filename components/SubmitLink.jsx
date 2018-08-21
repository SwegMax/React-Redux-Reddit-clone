import React, { Component } from 'react';
import {connect} from 'react-redux';
import { submitPost } from '../actions';

class SubmitLink extends Component {

    constructor() {
        super();
        this.state = {post: null, name: null};
        this.postTextElement = null;
    }

    componentDidMount() {
        this.setState({name: this.props.name});
    }

    submitLink() {
        this.props.dispatch(submitPost(this.state.post, this.state.name));
        this.postTextElement.value = '';
    }

    handleInputChange(event) {
        this.setState({post: event.target.value});
    }

    render() {
        return (
            <div className="col-sm-12">
                <input type="text" className="myinput" 
                placeholder="Submit a post here" 
                onChange={this.handleInputChange.bind(this)}
                ref={el => this.postTextElement = el}/>
                <input type="button" className="mybtn" value="Submit" onClick={this.submitLink.bind(this)}/>
            </div>
        );
    }
}

export default connect()(SubmitLink);