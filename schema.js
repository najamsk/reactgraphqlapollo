const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema} = require('graphql');
const axios = require('axios');


//Launch type
const LaunchType = new GraphQLObjectType({
    name:'Launch',
    fields:() => ({
        flight_number: {type: GraphQLInt},
        mission_name: {type: GraphQLString},
        launch_year: {type: GraphQLString},
        launch_date_local: {type: GraphQLString},
        launch_success: {type: GraphQLBoolean},
        rocket: {type: RocketType},
    }),
});

//Rocket type
const RocketType = new GraphQLObjectType({
    name:'Rocket',
    fields:() => ({
        rocket_id: {type: GraphQLString},
        rocket_name: {type: GraphQLString},
        rocket_type: {type: GraphQLString},
    }),
});

// root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches:{
            type: new GraphQLList(LaunchType),
            resolve(parent, args){
                //use axios to fetch data from orinal spacex api
                return axios.get('https://api.spacexdata.com/v3/launches').then(res => res.data);
            }
        }, //launches ends

        launch: {
            type: LaunchType,
            args: {
                flight_number: {type: GraphQLInt},
            },
            resolve(parent, args){
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`).then(res => {
                    console.log("launch data", res.data);
                    return res.data;
                });
            }
        }, //launch ends

        rockets:{
            type: new GraphQLList(RocketType),
            resolve(parent, args){
                //use axios to fetch data from orinal spacex api
                return axios.get('https://api.spacexdata.com/v3/rockets').then(res => res.data);
            }
        }, //rockets ends

        rocket: {
            type: RocketType,
            args: {
                rocket_id: {type: GraphQLString},
            },
            resolve(parent, args){
                return axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`).then(res => {
                    console.log("launch data", res.data);
                    return res.data;
                });
            }
        }, //rocket ends

    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
