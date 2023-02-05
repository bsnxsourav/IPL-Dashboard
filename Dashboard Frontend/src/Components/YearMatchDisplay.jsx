import MatchCardDetail from "./MatchCardDetail";
import ListGroup from 'react-bootstrap/ListGroup';


const YearMatchDisplay = ({ matches, primaryTeam }) => {
    return (
        <div className="matches-list">

            {matches.length !== 0 ? (
                <ListGroup>
                    {matches.map(match => <div className="mb-2"><MatchCardDetail matchData={match} primaryTeam={primaryTeam}/></div>)}
                </ListGroup>
            ) : <p className="display-3 text-center">Did not contest.</p>}
            
            
        </div>
    );
}
 
export default YearMatchDisplay;