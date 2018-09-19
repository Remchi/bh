import axios from 'axios'

const state = {  
    events: []   
}

const getters = {
    /*
        in the computed properties in the vue  
            - sort events by user
            - get the property length
    */
   
    getEvents: state =>state.events   
},

const mutations = {

    EVENTS:(state, payload)=>state.events = payload,
    ADD_EVENT:(state, payload)=>state.events.unshift(payload),
  //  REMOVE_EVENT:(state, payload)=>state.events.splice(indexOf(payload), 1),
    //UPDATE_EVENT:(state, payload)=>(state.events.splice(indexOf(payload), 1, ))

    //there needs to be UPDATE_EVENT, DELETE_EVENT
    // addEvents: (state, events)=>state.events.push(events),
    // addToAllEvents: (state, events)=>state.allEvents.push(events)

}

const actions = {
    async getEvents(context, payload){
        try{
            const response = await axios.get("/events", {
                data: payload

            });

            context.commit("EVENTS", response.data);
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
    },

    async removeEvent(context, payload){
        try{
            const response = await axios.delete('/events/:id',{
                data: payload,
                
               // headers: {'Content-Type':'application/json'}
            } );

            context.commit("REMOVE_EVENT", response.data)

        }catch(error){
            res.status(404).json({
                message: "There has been an error deleting your event",
                error
            })
        }
    },

    async updateEvent(context, payload){
        try{
            const response = await axios.delete('/events/:id',{
                data: payload,
                headers: {'Content-Type':'application/json'}
            } );

            context.commit("UPDATE_EVENT", response.data)

        }catch(error){
            res.status(404).json({
                message: "There has been an error deleting your event",
                error
            })
        }
    }
}

export default{
    state, getters, mutations, actions
}