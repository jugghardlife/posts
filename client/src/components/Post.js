import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

class Post extends React.Component{
  constructor(){
    super();
    this.state={
      post:{}
    }
  }

  componentWillMount() {
    axios.get(`http://localhost:3000/api/post/${this.props.params._id}`)
      .then(res => this.setState({
        post:res.data.post
      }))
    }

  

  handleScroll(e){
    console.log('浏览器滚动事件');
  }

  render(){
    console.log(this.state.post);
    return(
      <div>
        {this.state.post.content}

      </div>
    )
  }
}

export default Post;
