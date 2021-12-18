import './App.css';
import {MENU} from '../config/index'
import {MenuList} from "./menu-list/MenuList";

function App() {
    return (
        <div className='App__container'>
            <h1 className='App__header'>Artur's Birthday bar</h1>
            <div>
                {MENU.map(el =>
                    <MenuList
                        key={el.title}
                        title={el.title}
                        items={el.items}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
