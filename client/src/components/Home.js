import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

class Home extends React.Component{
  constructor(){
    super();
    this.state={
      posts:[]
    }
  }
  componentWillMount(){
    axios.post('http://localhost:3000/api/all-posts')
    .then(res =>
      this.setState({
      posts:res.data.posts
    }))
  }
  render(){
    var post = this.state.posts.map((item,index)=>
      <div key={item._id} className="box">
        <div>{item.title}</div>
        <div>{item.title}</div>
        <div>{item.author}</div>
        <Link to={`/post/${item._id}`}>阅读全文</Link>
      </div>
    )
    return(
      <div>
        {post}
      </div>
    )
  }
}

export default Home;
