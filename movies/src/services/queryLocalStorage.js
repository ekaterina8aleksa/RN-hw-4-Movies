export const setSearchQuery = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    console.log("set Search Query to locale storage");
  } catch (error) {
    throw new Error();
  }
};

export const getSearchQuery = (key) => {
  try {
    const searchQuery = localStorage.getItem(key);
    console.log("get Search Query from locale storage");
    return searchQuery ? JSON.parse(searchQuery) : null;
  } catch (error) {
    throw new Error();
  }
};
