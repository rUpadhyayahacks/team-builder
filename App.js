import React, { useState } from 'react';
import Form from './components/Form'

const App = () => {
    const [teamList, setTeamList] = useState([]);

    const addToTeamList = teamMember => {
        setTeamList([...teamList, teamMember]);
    }

return (
    <div>

        <Form/> 
        
    </div>
)

}

export default App;