import React,{useState} from 'react';
import './App.css';

function App (){
    const [theme,setThem] = useState('light')
    const toDark = () => setThem('dark')
    const toLight = () => setThem('light')
    console.log(theme)
    return (
        <div className={theme}>
            {theme === "light" ?
                <button onClick={toDark}>🔦</button>
                :<button onClick={toLight}>💡</button>}
        </div>
    )

}
export default App;
