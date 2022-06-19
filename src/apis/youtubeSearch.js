import axios from "axios";

const KEY = "AIzaSyDl8IuyE1tO0MOSku1smwJYl1BZyXrYe5c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
