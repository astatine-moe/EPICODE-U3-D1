import logo from "./logo.svg";
import Button from "./components/ButtonComponent";
import Image from "./components/ImageComponent";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Image src="./logo192.png" alt="React logo" />
            <br></br>
            <Button name="Button 1" />
            <Button name="Button 2" />
            <Button name="Button 3" />
        </div>
    );
}

export default App;
