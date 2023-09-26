const useToken = () => {
  const token = localStorage.getItem("admin-token") || null;
  return token;
};
export default useToken;
