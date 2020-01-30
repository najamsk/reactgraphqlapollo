import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

const LaunchItem  = (props) => {
    //console.log(props);
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission: <span className={classNames({
                        'text-success' : props.launch_success,
                        'text-danger': !props.launch_success
                    })}>{props.mission_name}</span></h4>
                    <p><Moment format="YYYY-MM-DD HH:MM">{props.launch_date_local}</Moment></p>
                    <p>{props.launch_success}</p>
                </div>
                <div className="col-md-3">
                    <Link to={`/details/${props.flight_number}`} className="btn btn-secondary">Launch Details</Link> 
                </div>
            </div>
        </div>
    );
};

export default LaunchItem;
