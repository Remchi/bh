<template>
    <!--
        #NAVBAR
    -->
    <!--since bootstrap 4 is mobile first, navbar expands to large device view after md size is reached-->
    <nav class="navbar navbar-expand-md navbar-primary bg-primary fixed-top">

         <!--Best practice is to add brand logo outside the ul element-->
         <a href="#" class="navbar-brand"><i class="fas fa-stethoscope text-light fa-2x"></i></a>
         
         <button type="button" class="navbar-toggler bg-dark" data-toggle="collapse" data-target="#nav"><span class="navbar-toggler-icon"></span></button>

        <!--div below is to control navbar in small screen-->
        <div class="collapse navbar-collapse justify-content-between" id="nav">
       
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link text-light text-capitalize font-weight-bold px-3" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link text-light text-capitalize font-weight-bold px-3" href="#">Jobs</a></li>            
            <li class="nav-item"><a class="nav-link text-light text-capitalize font-weight-bold px-3" href="#">Candidates</a></li>
            <li class="nav-item"><a class="nav-link text-light text-capitalize font-weight-bold px-3" href="#">Events</a></li>
            <li class="nav-item"><a class="nav-link text-light text-capitalize font-weight-bold px-3" href="#">Contact Us</a></li>

        </ul>
    </nav>

</template>

<script>
export default {
    
}
</script>

