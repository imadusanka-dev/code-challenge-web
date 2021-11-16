import axios from "axios";

class HttpService {
  service = null;

  constructor() {
    this.service = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
    this.service.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  sendRequest = (config) => {
    config.headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    return this.service.request(config);
  };

  handleSuccess = (res) => {
    return res;
  };

  handleError = (e) => {
    if (!e.response) {
      return {
        data: {
          success: false,
          message: "Network Failure",
        },
      };
    }

    switch (e.response.status) {
      case 401:
        localStorage.clear();
        window.location.replace("/");
        break;
      default:
        throw e;
    }
  };
}

export default HttpService;
