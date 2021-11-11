import { GlobalStorage } from "./globalContext/GlobalContext";
import { Router } from "./router/Router";
import { Global } from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStorage>
        <Global/>
        <Router/>
      </GlobalStorage>
      
    </div>
  );
}

export default App;
