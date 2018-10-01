<template>
    <section class="bg-light mt-5 py-5">
        <div class="container-fluid">
            <div class="row justify-content-center p-3">
                <div class="col-md-8 col-sm-10">

                    <h4 class="text-dark display-4">Add an Event</h4>
                    <form action="" class="text-muted lead">
                    <div class="form-group">
                        <label for="title">Topic of Event</label>
                        <input type="text" class="form-control form-control-lg" name="title" id="title">
                    </div>
                        
                    <div class="form-group mb-3">
                        <label for="message">Event Description</label>
                        <textarea class="form-control" id="message" cols="30" rows="15"></textarea>
                    </div>    
                    
                    <div class="form-group">
                        <label for="location">Location</label>
                        <input type="text" class="form-control" name="location" id="location">
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-sm-10">
                            <div class="form-group">
                                <label for="title">Date of Event</label>
                                <input type="text" class="form-control" name="title" id="title">
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-10">
                            <div class="form-group">
                                <label for="title">Time of Event</label>
                                <input type="text" class="form-control" name="title" id="title">
                            </div>
                        </div>
                    </div>                      
                    
                    <p>Share more about your event</p>
                        <div class="custom-file mb-3">
                            <input type="file" class="custom-file-input" id="attachment">
                            <label class="custom-file-label" for="attachment"></label>
                        </div>                

                    <button class="btn btn-primary btn-block py-3" type="submit"><strong>Create Event</strong> </button>
                        
                    </form>
                </div>
            </div> 
        </div>
    </section>   
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style>

</style>