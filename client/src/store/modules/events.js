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

    EVENTS:(state, payload)=>state.events = payload,
    ADD_EVENT:(state, payload)=>state.events.unshift(payload)

    //there needs to be UPDATE_EVENT, DELETE_EVENT
    // addEvents: (state, events)=>state.events.push(events),
    // addToAllEvents: (state, events)=>state.allEvents.push(events)

}

const actions = {
    async getAllEvents(context, payload){
        try{
            const response = await axios.get("/events");

            context.commit("EVENTS", response);
        }catch(error){
            res.status(404).json({
                message: "There has been an error fetching all the events",
                error
            })
        }
    },

    async addEvent(context, payload){
        try{
            const response = await axios.post('/events',{
                data: payload,
                headers: {'Content-Type':'application/json'}
            } );

            context.commit("ADD_EVENT", response.data);
        }catch(error){
            res.status(404).json({
                message: "There has been an error adding your event",
                error
            })
        }
    }
}

export default{
    state, getters, mutations, actions
}