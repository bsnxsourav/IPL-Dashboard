import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
const HomePage = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/teams')
        .then((response) => response.json())
        .then(data => {
            setTeams(data);
            setLoading(false);
        })
        .catch((error) => console.log(error))
    }, []);

    return (
        <div className='home-page container w-25 mt-3'>
            <h1 className='text-center m-4'>IPL Teams</h1>
            {!loading ? (
                <ListGroup>
                    {teams.map(team => <ListGroup.Item><Link key={team.id} to={`/teams/${team.teamName}`}>{team.teamName}</Link></ListGroup.Item>)}
                </ListGroup>
            ) : <h2>Loading</h2>}
        </div>
    );
}
 
export default HomePage;