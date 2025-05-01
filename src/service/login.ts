export const login = async () => {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: "padre@example.com", password: "123456" }),
  });
  const data = await res.json();
  return data;
};
