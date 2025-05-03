const getBranches = async () => {
  const res = await fetch("http://localhost:3000/api/branches");
  const data = res.json();
  return data;
};

export default getBranches;
