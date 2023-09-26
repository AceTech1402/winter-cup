const baseUrl = "https://api.goldensports.at";

export default {
  login: `${baseUrl}/auth/login_admin`,
  logOut: `${baseUrl}/auth/logOut`,
  getAllRequests: {
    goldenSports: `${baseUrl}/admin/getAllRequest_goldensports`,
    sommerCup: `${baseUrl}/admin/getAllRequest_sommercup`,
    euroChallenge: `${baseUrl}/admin/getAllRequest_eurochallenge`,
  },
  deleteRequest: {
    goldenSports: `${baseUrl}/admin/deleteRequest_goldensports`,
    sommerCup: `${baseUrl}/admin/deleteRequest_sommercup`,
    euroChallenge: `${baseUrl}/admin/deleteRequest_eurochallenge`,
  },
};
