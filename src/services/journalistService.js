import axios from "axios";

class JournalistService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL || "",
    });
  }

  getJournalistList = () => this.axiosInstance.get("/api/journalists");

  getJournalistDetail = (id) =>
    this.axiosInstance.get(`/api/journalists/${id}`);
}

const journalistService = new JournalistService();

export default journalistService;
