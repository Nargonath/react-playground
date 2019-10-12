export function login(username, password) {
  return new Promise(resolve =>
    setTimeout(() => resolve({ id: 1, username }), 1000),
  );
}
