import React from "react";
import {} from "react-router-dom";
import axios from "axios";

class PostItem extends React.Component {
  state = {
    posts: [],
    lorem:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        const posts = res.data.slice(0, 10);
        this.setState({ posts });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let id = this.props.match.params.id;
    // find post matching id
    let filteredPost = this.state.posts.filter(
      post => parseInt(post.id) === parseInt(id)
    );
    return (
      <div>
        {filteredPost.map(post => (
          <div key={post.id}>
            <img alt="lorem ipsum" src={post.url} height="100" width="100" />
            <h1>{post.title}</h1>
            <p>{this.state.lorem.substr(0, 21)}</p>
            <p>{this.state.lorem}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PostItem;
