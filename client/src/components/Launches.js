import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

//class Launches2 extends Component {
//
//    render(){
//        const {loading, error, data} = useQuery(LAUNCHES_QUERY);
//
//        return(
//            <div>
//                <h1 className="display-4 my-3">
//                    Launches
//                </h1>
//
//            </div>
//        );
//    };
//}

const queryLoading = (loading) => {
    console.log("loading=", loading);
    if (loading){
        return <h5>Loading ...</h5>;
    }
};
const queryError = (error) => {
    if (error){
        console.log("error=", error);
    }
};
const queryData = (data) => {
    if (data){
        //console.log("data=", data.launches.length);
        return data.launches.map(({ mission_name, flight_number, launch_date_local, launch_success }) => (
            <LaunchItem mission_name={mission_name} flight_number={flight_number} lauch_sucess={launch_success} launch_date_local={launch_date_local} key={flight_number}/>
        ));

    }
};

const Launches = () => {
    const {loading, error, data} = useQuery(LAUNCHES_QUERY);
    console.log(data);
    return (
        <div>
            <h1 className="display-4 my-3">
                Launches
            </h1>
            {queryLoading(loading)}
            {queryError(error)}
            {queryData(data)}
            
        </div>
    );
};



export default Launches;
