import React from 'react';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login";

const App = () => {

    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    function handleToggle() {
        setOpen(!open);
    }

    return (
        <div className="App">
            <Header
                handleToggle={handleToggle}
                open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>

            <Sidebar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>

        </div>
    )
};

export default App;
