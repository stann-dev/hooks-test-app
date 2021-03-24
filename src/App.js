import {BrowserRouter as Router} from "react-router-dom";
import {VideoContextProvider} from "./context/videoContext/videoContext";
import {Routing} from "./routing/Routing";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
                <VideoContextProvider>
                    <Routing/>
                </VideoContextProvider>
        </div>
        </Router>
    );
}

export default App;
