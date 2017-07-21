class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      videoPlaying: exampleVideoData[0]
    };

    this.handleClick = this.handleClick.bind (this);
    this.handleSearch = this.handleSearch.bind (this);
    
  }
  
  
  handleClick(video) {
    this.setState({
      videoPlaying: video
    });
  }
  handleSearch(videos) {
    this.setState({
      videos: videos,
      videoPlaying: videos[0]
      
    });

  }
  componentDidMount() {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: 'batman puppies', max: 5}, this.handleSearch);
  }
    
  render() {  
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch} searchYouTube={this.props.searchYouTube}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlaying}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
} 



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// 