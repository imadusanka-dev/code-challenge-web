import HttpService from "./HttpService";

class SearchService extends HttpService {
  async searchOrganizations(field, value) {
    return await this.sendRequest({
      method: 'GET',
      url: `/organizations?field=${field}&&value=${value}`,
      responseType: 'json',
    });
  }

  async searchTickets(field, value) {
    return await this.sendRequest({
      method: 'GET',
      url: `/tickets?field=${field}&&value=${value}`,
      responseType: 'json',
    });
  }

  async searchUsers(field, value) {
    return await this.sendRequest({
      method: 'GET',
      url: `/users?field=${field}&&value=${value}`,
      responseType: 'json',
    });
  }
}

const searchService = new SearchService();
export default searchService;