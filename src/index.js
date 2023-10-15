import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/books";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

// const [count, increatmentCount] = useState('0');
root.render(
    <Provider>
        <App />
    </Provider>
);
