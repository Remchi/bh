import Home from './components/Home.vue'
import AddEvent from './components/AddEvent.vue'
import PreviewEvent from './components/events/PreviewEvent.vue'
import ViewEvents from './components/events/ViewEvents.vue'

export const routes = [
    {path: '/', name: "homeLink", component: Home},
    {path: '/addevent', name: "addEvent", component:AddEvent },
    {path: '/previewevent', name: 'previewEvent', component: PreviewEvent},
    {path: '/viewevents', name:'viewEvents', component: ViewEvents}
]

