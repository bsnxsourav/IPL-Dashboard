import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';

const YearList = ({ year, teamName }) => {

    const years = [];
    for (let index = 2008; index < 2022; index++) {
        years.push(index);        
    }

    return (
        <div className="year-list">
            <ListGroup>
                {years.map(yr => {
                    if (yr === Number.parseInt(year)) {
                        return <ListGroup.Item active action key={yr}><Link className='text-white' to={`/teams/${teamName}/matches/${yr}`}>{yr}</Link></ListGroup.Item>
                    } else {
                        return <ListGroup.Item action key={yr}><Link to={`/teams/${teamName}/matches/${yr}`}>{yr}</Link></ListGroup.Item>
                    }
                })}
            </ListGroup>
        </div>
    );
}
 
export default YearList;