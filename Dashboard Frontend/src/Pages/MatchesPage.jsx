import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import YearList from '../Components/YearList';
import YearMatchDisplay from '../Components/YearMatchDisplay';


const MatchesPage = () => {

    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const { teamName, year } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/teams/${teamName}/matches?year=${year}`)
        .then(response => response.json())
        .then(data => {
            setMatches(data);
            setLoading(false);
            console.log(data);
        })
        .catch(error => console.log(error))
    }, [teamName, year]);

    return (
        <div className='matches-page container mt-5'>
            <div className="row">
                <div className="col-2 text-center"><YearList year={year} teamName={teamName}/></div>
                <div className="col-10">
                    <div className="display-6 text-center mb-3">{teamName} matches in {year}</div>
                    {!loading ? <YearMatchDisplay matches={matches} primaryTeam={teamName}/> : <h2>Loading</h2>}
                </div>
            </div>
        </div>
    );
}
 
export default MatchesPage;