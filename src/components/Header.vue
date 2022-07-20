<template>
<nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        
        <router-link to="/"><a class="navbar-brand" href="#">Navbar</a></router-link>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <router-link to="/home"> <a class="nav-link">Home</a></router-link> 
                </li>
                <li class="nav-item">
                     <router-link to="/add"> <a class="nav-link">Add</a></router-link> 
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                        <a class="dropdown-item" href="#">Action 1</a>
                        <a class="dropdown-item" href="#">Action 2</a>
                    </div>
                </li>
            </ul>

        </div>
  </div>
</nav>
</template>
<script>
export default {
    name:'Header',

}
</script>