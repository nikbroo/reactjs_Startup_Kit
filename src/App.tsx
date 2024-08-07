import "./App.css";
import Auth from "./Navigation/Auth";
import UnAuth from "./Navigation/UnAuth";
import { useAppSelector } from "./Store/Hooks";

function App() {
  const userStatus = useAppSelector((state) => state.user);

  return userStatus.isAuthenticated ? <Auth /> : <UnAuth />;
}

export default App;
