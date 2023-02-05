import { Link } from "react-router-dom"

const MatchCardSmall = ({ matchData, primaryTeam }) => {
    let cardStyleClasses = "match-card-small card"
    primaryTeam === matchData.winner ? cardStyleClasses += " border-success" : cardStyleClasses += " border-danger"
    return (
        <div className={cardStyleClasses}>
            <h2>
                vs &nbsp;
                {primaryTeam !== matchData.team1 ? <Link to={`/teams/${matchData.team1}`}>{matchData.team1}</Link> : <Link to={`/teams/${matchData.team2}`}>{matchData.team2}</Link>}
            </h2>
            <p className="lead p-2">{matchData.date}<br/>{matchData.venue}, {matchData.city}.<br/>{matchData.winner} won the match by {matchData.resultMargin} {matchData.result}.</p>
            {/* <p>{matchData.winner} won the match by {matchData.resultMargin} {matchData.result}.</p> */}
        </div>
    );
}
 
export default MatchCardSmall;