import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from './skills/Skills'
import {Works} from "./works/Works";
import {Contacts} from "./contacts/Contacts";
import {Teleworking} from "./teleworking/Teleworking";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Teleworking/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App
