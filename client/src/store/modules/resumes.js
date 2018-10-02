import axios from 'axios'

const state = {  
    resumes: []   
}

const getters = {
    /*
        in the computed properties in the vue  
            - sort events by user
            - get the property length
    */
   
    getCVs: state =>state.resumes 
}

const mutations = {

    CV:(state, payload)=>state.resumes = payload,
    ADD_CV:(state, payload)=>state.resumes.unshift(payload),
    REMOVE_CV:(state, payload)=>state.resumes.splice(indexOf(payload), 1),
    UPDATE_CV(state, payload){
        (state.resumes.forEach(resume=>{
            //better use req.user when you get it 
            if(resume._id===payload._id){
                resume= payload;
            }
        }))
    }

    //there needs to be UPDATE_EVENT, DELETE_EVENT
    // addEvents: (state, events)=>state.events.push(events),
    // addToAllEvents: (state, events)=>state.allEvents.push(events)

}

const actions = {
    async getCVs(context, payload){
        try{
            const response = await axios.get("/cv", {
                data: payload

            });

            context.commit("CV", response.data);
        }catch(error){
            console.log(error)
        }
    },

    async addCV(context, payload){
        try{
            const response = await axios.post('/cv',{
                data: payload,
                headers: {'Content-Type':'application/json'}
            } );

            context.commit("ADD_CV", response.data);
        }catch(error){
            console.log(error)
        }
    },

    async removeCV(context, payload){
        try{
            const response = await axios.delete('/cv/:id',{
                data: payload,
                
               // headers: {'Content-Type':'application/json'}
            } );

            context.commit("REMOVE_CV", response.data)

        }catch(error){
           console.log(error)
        }
    },

    async updateCV(context, payload){
        try{
            const response = await axios.patch('/cv/:id',{
                data: payload,
                headers: {'Content-Type':'application/json'}
            } );

            context.commit("UPDATE_CV", response.data)

        }catch(error){
            console.log(error)
        }
    }
}

export default{
    state, getters, mutations, actions
}