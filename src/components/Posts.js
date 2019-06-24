import React from "react";
import Post from "./Post";
import axios from "axios";

class Posts extends React.Component {
  state = {
    posts: [],
    lorem:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    filterText: ""
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

  handleChange = e => {
    let searchText = e.target.value;
    this.setState({ filterText: searchText });
  };

  render() {
    const { posts } = this.state;
    const filteredPosts = posts.filter(post => {
      return post.title.includes(this.state.filterText);
    });
    return (
      <div>
        <input onChange={this.handleChange} type="search" />
        {filteredPosts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            img={post.url}
            title={post.title}
            lorem={this.state.lorem}
          />
        ))}
      </div>
    );
  }
}

export default Posts;
