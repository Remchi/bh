import Home from './components/Home.vue'
import AddEvent from './components/events/AddEvent.vue'
import PreviewEvent from './components/events/PreviewEvent.vue'
import ViewEvents from './components/events/ViewEvents.vue'

export const routes = [
    {path: '/', name: "homeLink", components:{default: Home}},
    {path: '/addevent', name: "addEvent", components:AddEvent},
    {path: '/previewevent', name: 'previewEvent', components: PreviewEvent},
    {path: '/viewevents', name:'viewEvents', components: ViewEvents}
]