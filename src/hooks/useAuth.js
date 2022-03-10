export default function useAuth() {
  // TODO Store the user in redux
  // TODO implement the backend to login
  const user = {
    // id: 1,
    // username: "bart"
  }

  return {
    user,
    loggedIn: Boolean(user.id)
  }
}