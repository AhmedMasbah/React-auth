const Home  = ({ user }: { user: any }) => {
  let message;
  if (user) {
    message = `Hi ${user.first_name} ${user.last_name}`;
  } else {
    message = "You are not logged in";
  }

  return (
    <div className="container">
      <h2>{message}</h2>
    </div>
  );
};
export default Home;
