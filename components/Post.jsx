import React, { Component } from 'react';
import { voteOnPost, VOTE } from '../actions';
import {connect} from 'react-redux';

class Post extends Component {

    constructor() {
        super();
        this.state = {currentUser: null, postId: null};
    }

    handleLike() {
        this.props.dispatch(voteOnPost(this.state.postId, this.state.currentUser, VOTE.LIKE));
    }

    handleUnlike() {
        this.props.dispatch(voteOnPost(this.state.postId, this.state.currentUser, VOTE.UNLIKE));
    }

    componentDidMount() {
        this.setState({
            currentUser: this.props.currentUser,
            postId: this.props.post.id
        });
    }

    renderLikeButtons(likeStatus, likes, unlikes) {
        if(likeStatus != null){
            if(likeStatus === VOTE.LIKE) {
                return <div className="post-vote">
                            <span className="like-counter">{likes}</span>  <i className="fa fa-thumbs-up thumbs-btn like" onClick={this.handleLike.bind(this)}></i>
                            <span className="like-counter">{unlikes}</span><i className="fa fa-thumbs-o-down thumbs-btn" onClick={this.handleUnlike.bind(this)}></i>
                        </div>;
            }
            return <div className="post-vote">
                        <span className="like-counter">{likes}</span>  <i className="fa fa-thumbs-o-up thumbs-btn" onClick={this.handleLike.bind(this)}></i>
                        <span className="like-counter">{unlikes}</span><i className="fa fa-thumbs-down thumbs-btn unlike" onClick={this.handleUnlike.bind(this)}></i>
                    </div>;
        }
        return <div className="post-vote">
                    <span className="like-counter">{likes}</span>  <i className="fa fa-thumbs-o-up thumbs-btn" onClick={this.handleLike.bind(this)}></i>
                    <span className="like-counter">{unlikes}</span><i className="fa fa-thumbs-o-down thumbs-btn" onClick={this.handleUnlike.bind(this)}></i>
                </div>;
    }

    render() {
        let post = this.props.post;
        let voteList = this.props.likeUnlikes[post.id];
        let likeStatus = null;
        let index = -1;
        if(voteList) index = voteList.findIndex(each => each.name === this.state.currentUser);
        if(index > -1) likeStatus = voteList[index].vote;
        let likes = 0;
        let unlikes = 0;
        if(voteList)
            for(let i = 0; i < voteList.length; i++) {
                if(voteList[i].vote === VOTE.LIKE) likes++;
                if(voteList[i].vote === VOTE.UNLIKE) unlikes++;
            }

        return (
            <div className="post">
                <div className="post-text">{post.text}</div>
                <div className="post-author">Author: {post.name}</div>
                {this.renderLikeButtons(likeStatus, likes, unlikes)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        likeUnlikes: state.likeUnlikes
    };
}

export default connect(mapStateToProps)(Post);