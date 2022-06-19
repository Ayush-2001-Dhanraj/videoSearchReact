import React from "react";
import { Container, Grid } from "@mui/material";
import SearchBar from "./SearchBar";
import youtubeSearch from "../apis/youtubeSearch";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], video: null };

  componentDidMount() {
    this.handleFormSubmit("Katy Perry");
  }

  handleFormSubmit = async (term) => {
    const response = await youtubeSearch.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      video: response.data.items[0],
    });
  };

  handleVideoSelect = (video) => {
    this.setState({ video });
  };

  render() {
    return (
      <Container maxWidth="lg">
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        <Grid container spacing={2}>
          {this.state.video && (
            <Grid item xs={12} md={8}>
              <VideoDetail video={this.state.video} />
            </Grid>
          )}
          <Grid item xs={12} md={4}>
            <VideoList
              videos={this.state.videos}
              handleVideoSelect={this.handleVideoSelect}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
