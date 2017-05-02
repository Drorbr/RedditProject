import React from 'react';
import axios from 'axios';
import styles from "./DisplaySearchResults.css";


class DisplaySearchResults extends React.Component { 
	constructor(props) {
		super(props);		
		this.state = {
			posts: []
    };
}


	componentDidMount() {
    axios.get(`https://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
		console.log("connected succefully");
      });
  }

		render() {
    return (
      <div className={styles.container}>
        <ul>
          {this.state.posts.map(post =>	
            <li key={post.id}> <a href={"https://www.reddit.com" + post.permalink} target="_blank" >
			<img src={post.thumbnail} title={post.title} />
			</a>

</li>          )}
        </ul>
      </div>
    );
  }
}

export default DisplaySearchResults; 