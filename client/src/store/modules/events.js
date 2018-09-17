import axios from 'axios'

const state = {
    //events by this user
    events: [],
    //events by all users
    allEvents:[]
}

const getters = {
    getEvents: state =>state.events,
    getAllEvents: state=>state.allEvents,
    numberOfEvents: state=>state.events.length
},

const mutations = {
    addEvents: (state, events)=>state.events.push(events),
    addToAllEvents: (state, events)=>state.allEvents.push(events)

}

const actions = {
    async getAllEvents(){
        try{
            const dbevents = await axios.get("/events")


        }catch(error){

        }
    }
}

export default{
    state, getters, mutations, actions
}