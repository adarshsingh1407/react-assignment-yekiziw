import { HTTP_CODE_200 } from "../../constants";
import journalists from "./journalists.json";

class JournalistService {
  getJournalistListSuccess = () =>
    new Promise((resolve) => {
      resolve({
        status: HTTP_CODE_200,
        data: journalists,
      });
    });

  getJournalistDetail = (id) => {
    const journalist = journalists.find((j) => j.id === id);
    return Promise.resolve({
      status: HTTP_CODE_200,
      data: journalist,
    });
  };
}

const journalistService = new JournalistService();

export default journalistService;
