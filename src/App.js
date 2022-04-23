import Layout from "./Components/Layout";
import UserProvider from "./Components/Context/UserState";

function App() {
  return (
    <>
      <UserProvider>
        <Layout />
      </UserProvider>
    </>
  );
}

export default App;
