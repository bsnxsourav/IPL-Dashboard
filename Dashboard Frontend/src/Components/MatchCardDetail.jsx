import { Link } from "react-router-dom"

const MatchCardDetail = ({ matchData, primaryTeam }) => {
    // {{
    //     "id":1237178,
    //     "city":"Abu Dhabi",
    //     "date":"2020-11-06",
    //     "playerOfMatch":"KS Williamson",
    //     "venue":"Sheikh Zayed Stadium",
    //     "team1":"Royal Challengers Bangalore",
    //     "team2":"Sunrisers Hyderabad",
    //     "tossWinner":"Sunrisers Hyderabad",
    //     "tossDecision":"field",
    //     "winner":"Sunrisers Hyderabad",
    //     "result":"wickets",
    //     "resultMargin":"6",
    //     "umpire1":"PR Reiffel",
    //     "umpire2":"S Ravi"}}

    let cardStyleClasses = "match-detail-card card"
    primaryTeam === matchData.winner ? cardStyleClasses += " border-success" : cardStyleClasses += " border-danger"
    return (
        <div className={cardStyleClasses}>
            <h2>
                vs &nbsp;
                {primaryTeam !== matchData.team1 ? <Link to={`/teams/${matchData.team1}`}>{matchData.team1}</Link> : <Link to={`/teams/${matchData.team2}`}>{matchData.team2}</Link>}
            </h2>
            {/* <p className="lead">{matchData.venue}, {matchData.city}.</p> */}
            <div className="d-flex justify-content-between p-2">
                <p className="lead">{matchData.date}<br/>{matchData.venue}, {matchData.city}.<br/>{matchData.winner} won the match by {matchData.resultMargin} {matchData.result}.</p>
                <ul>
                    <li className="lead">{matchData.tossWinner} won the toss, decided to {matchData.tossDecision}.</li>
                    <li className="lead">{matchData.playerOfMatch} was the Man of the Match.</li>
                    <li className="lead">Umpires: {matchData.umpire1}, {matchData.umpire2}.</li>
                </ul>
            </div>
        </div>
    );
}
 
export default MatchCardDetail;

