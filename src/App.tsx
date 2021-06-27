import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home"
import { NewRoom } from "./pages/NewRoom";


import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* If the propertie is passed without valued assigned without value is true by default */}
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
