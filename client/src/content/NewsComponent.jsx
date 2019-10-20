import React from "react";
import { connect } from "react-redux";
import { LOADING_ON, LOADING_OFF, LOAD_FB } from "../reducers/action-types";

const FbPost = ({ post }) => (
  <div
    className="fb-post"
    data-href={"https://www.facebook.com/logopaediekraehahn/posts/" + post.id}
    data-width="500"
  />
);

class NewsComponent extends React.Component {
  componentWillMount() {
    this.props.loadingOn();
    this.props.requestFbPosts();
  }

  componentDidUpdate() {
    if (window.FB !== undefined) {
      window.FB.XFBML.parse(undefined, () => {
        this.props.loadingOff();
      });
    } else {
      window.fbAsyncInit = () => {
        window.FB.XFBML.parse(undefined, () => {
          this.props.loadingOff();
        });
      };
    }
  }

  render() {
    return (
      <div>
        <h1>Neuigkeiten</h1>
        {this.props.fbposts[0] &&
          this.props.fbposts[0].map(post => (
            <FbPost key={post.id} post={post} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fbposts: state.fbposts
});

const mapDispatchToProps = dispatch => ({
  requestFbPosts: () => {
    dispatch({ type: LOAD_FB });
  },
  loadingOff: () => {
    dispatch({ type: LOADING_OFF });
  },
  loadingOn: () => {
    dispatch({ type: LOADING_ON });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsComponent);
