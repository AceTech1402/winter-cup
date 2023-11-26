const BASE_URL = "https://api.goldensports.at";

export const API = {
  auth: {
    addRequest: `${BASE_URL}/request/addRequest_wintercup`,
    countryNames: `${BASE_URL}/request/country_names`,
    registered: `${BASE_URL}/request/get_accept_status_wintercup`,
  },
};
