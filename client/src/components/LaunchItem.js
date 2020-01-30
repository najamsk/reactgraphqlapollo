import React from 'react';

const LaunchItem  = (props) => {
    console.log(props);
    return (
        <div key={props.key} className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission: {props.mission_name}</h4>
                    <p>{props.launch_date_local}</p>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary">Launch Details</button> 
                </div>
            </div>
        </div>
    );
};

export default LaunchItem;
