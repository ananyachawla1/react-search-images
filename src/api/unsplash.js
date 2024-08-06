import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c1be967d2e6c31388ab07c4204eb15b53bd01b862cc2413ca353d46548695ad9"
  }
});
