import Vue from 'vue'
import Vuex from 'vuex'

import event from './modules/events'
import jobpost from './modules/jobposts'
import resume from './modules/resumes'
import user from "./modules/users"

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules:{
        event, jobpost, resume, user
    }
})