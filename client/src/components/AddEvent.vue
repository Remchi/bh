<template>
    <section class="bg-light mt-5 py-5">
        <div class="container-fluid">
            <div class="row justify-content-center p-3">
                <div class="col-md-8 col-sm-10">

                    <h4 class="text-dark display-4">Add an Event</h4>
<<<<<<< HEAD
                    <form method="POST" action="" class="text-muted lead" v-on:submit.prevent="sendFile" >
=======
                    <form action="" class="text-muted lead" >
>>>>>>> dd1b77cfad2859714f7df0f203e173d81aaae482
                    <div class="form-group">
                        <label for="topic">Topic of Event</label>
                        <input type="text" class="form-control form-control-lg" name="topic" id="topic" v-model="newEvent.topic" required>
                    </div>
                        
                    <div class="form-group mb-3">
                        <label for="description">Event Description</label>
                        <textarea class="form-control" id="description" name="description" cols="30" rows="15" v-model="newEvent.description" required></textarea>
                    </div>    
                    
                    <div class="form-group">
                        <label for="location">Location</label>
                        <input type="text" class="form-control" name="location" id="location" v-model="newEvent.location" required>
                    </div>

                    <div class="form-group">
                        <label for="audience">Target Audience</label>
                        <input type="text" class="form-control" name="audience" id="audience" v-model="newEvent.audience" required>
                    </div>

                 <!--   <div class="row">
                        <div class="col-md-6 col-sm-10">
                            <div class="form-group">
                                <label for="date">Date of Event</label>
                                <input type="text" class="form-control" name="date" id="date" placeholder="MM/DD/YYYY" v-model="newEvent.date" required>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-10">
                            <div class="form-group">
                                <label for="time">Time of Event</label>
                                <input type="text" class="form-control" name="time" id="time" placeholder="HH:MM" v-model="newEvent.time" required>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-10">
                            <div class="form-group">
                                <label for="cost">COST ($)</label>
                                <input type="text" class="form-control" name="cost" id="cost" placeholder="HH:MM" v-model="newEvent.cost" required>
                                <span><small>Write 0.00 if it is free</small></span>
                            </div>
                        </div>
                    </div>                      
                    
                  <p>Share more about your event</p>
                        <div class="custom-file mb-3">
                            <input type="file" class="custom-file-input" id="attachment">
                            <label class="custom-file-label" for="attachment">Upload!</label>
                        </div>-->        

                    <button class="btn btn-primary btn-block py-3" type="submit" v-on:submit.prevent="addEvent"><strong>Create Event</strong> </button>
                        
                    </form>
                </div>
            </div> 
        </div>
    </section>   
</template>

<script>
import {store} from "../store/store"
export default {
    data(){
        return{
            newEvent:{
                'topic': '',
                'description':'',
                'location': '',
                'audience': ''
               // 'date': '',
                //'time':''
            }
        }
    },
   

    methods:{

        checkForm(e) {
            if (this.topic && this.description&&this.location&&this.audience&&this.date&&this.event) {
                return true;
            }

            this.errors = [];

            if (!this.topic) {
                this.errors.push('Title of the event is required.');
            }
            if (!this.description) {
                this.errors.push('Description of the event required.');
            }

            if (!this.location) {
                this.errors.push('Location of the event required.');
            }

            if (!this.audience) {
                this.errors.push('Audience of the event required.');
            }

            // if (!this.date) {
            //     this.errors.push('Date of the event required.');
            // }

            // if (!this.time) {
            //     this.errors.push('Time of the event required.');
            // }

            //e.preventDefault();
        },
        /*
        - Add the event to mutation, ADD_EVENT
        - data has not been sent to server (unpersisted data)
        */
        addEvent(){
           // if(this.checkForm){}
                const userEvent = {
                    topic: this.topic,
                    description: this.description,
                    location: this.location,
                    audience: this.audience,
                   // date: this.date,
                    //time: this.time               
               
            }
            console.log("This is the event ", this.userEvent);
            this.$store.dispatch('addEvent', this.userEvent);
        }

        
    }
}
</script>

<style>

</style>