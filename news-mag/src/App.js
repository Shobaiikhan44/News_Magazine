import React, { useState } from 'react';
import NewsDash from './components/NewsDash'; // Adjust the path if necessary
import NavBar from './components/NavBar'; // Adjust the path if necessary

function App() {
    const [category, setCategory] = useState("general");
    const [query, setQuery] = useState("");

    return (
        <div>
            <NavBar setCategory={setCategory} setQuery={setQuery} />
            <NewsDash category={category} query={query} />
        </div>
    );
}

export default App;
