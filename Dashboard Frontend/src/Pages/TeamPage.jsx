import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import MatchCardDetail from "../Components/MatchCardDetail";
import MatchCardSmall from "../Components/MatchCardSmall";
import { PieChart } from 'react-minimal-pie-chart';

const TeamPage = () => {
    const { teamName } = useParams();
    const [teamData, setTeamData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // console.log(`http://localhost:8080/teams/${teamName}`);
        fetch(`http://localhost:8080/teams/${teamName}`)
        .then(response => response.json())
        .then(data => {
            setTeamData(data);
            setLoading(false);
        })
        .catch(error => console.log(error));
    }, [teamName]);

    
    return (
        <div className='team-page'>
            {!loading ? (
                <div className="container mt-5 p-2">
                    <div className="row my-5">
                        <div className="col-8"><h1 className='display-1'>{teamData.teamName}</h1></div>
                        <div className="col-4">
                            <div className="w-50">
                                <p className="lead text-center">Winn vs Loss</p>
                                <PieChart
                                    data={[
                                        { title: 'Won', value: teamData.totalWin, color: '#008000' },
                                        { title: 'Lost', value: teamData.totalMatches - teamData.totalWin, color: '#C13C37' },
                                    ]}  
                                />  
                            </div>
                        </div>
                    </div>
                    <div className="rowS">
                        <div className="col-12 my-2">
                            <MatchCardDetail matchData={teamData.lastFourMatches[0]} primaryTeam={teamData.teamName}/>
                        </div>
                    </div>
                    <div className="row">
                        {teamData.lastFourMatches.slice(1).map(matchdata => <div className="col-4 my-3"><MatchCardSmall matchData={matchdata} primaryTeam={teamData.teamName}/></div>)}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Link to={`/teams/${teamData.teamName}/matches/2008`}>More</Link>
                        </div>
                    </div>
                </div>
            ) : <h2>Loading</h2>}
        </div>
    );
}
 
export default TeamPage;