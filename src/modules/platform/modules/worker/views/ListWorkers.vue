<template>
    <div class="listWorkers__seccion">
      <div class="listWorkers__container">
        <div class="categorys">
               <span class="categorys__title">Admistradores</span>
           </div>
        <div class="content">
            
            <div class="box">
                <div class="details__info">
                    <span class="info__name"> Daniel Durand</span>
                </div>
                <img src="http://auvirtual.untels.edu.pe/MIFSLOCAL2018/imagenes2018/2017210560.jpg" alt="User Image" class="details__img">
            </div>
            <div class="box">
                <div class="details__info">
                    <span class="info__name"> Arnny Quispe</span>
                </div>
                <img src="http://auvirtual.untels.edu.pe/MIFSLOCAL2018/imagenes2018/2017210435.jpg" alt="User Image" class="details__img">
            </div>
        
        
            
        
       
        
    </div>
    </div>  
    <div class="listWorkers__container">
        <div class="categorys">
               <span class="categorys__title">Colaboradores</span>
           </div>
        <div class="content">
            
            
            <div class="box">
                <div class="details__info">
                    <span class="info__name"> Romel Car..</span>
                </div>
                <img src="http://auvirtual.untels.edu.pe/MIFSLOCAL2018/imagenes2018/2017230490.jpg" alt="User Image" class="details__img">
            </div>
        
        
            <div class="box">
                <div class="details__info">
                    <span class="info__name"> Romel Car..</span>
                </div>
                <img src="http://auvirtual.untels.edu.pe/MIFSLOCAL2018/imagenes2018/2017230490.jpg" alt="User Image" class="details__img">
            </div>
            
        
        
        
       
        
    </div>
    </div>
    </div>
    
    
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
    
    .listWorkers__container{
        width: 100%;
        background-color: var(--background-component-color);
        border-radius: 10px;
        box-shadow: var(--shadow);
        height: 30vh;
        margin-bottom: 50px;
    }
    .categorys{
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3.2rem;
    }
    .categorys__title{
        color: var(--color-primary);
        font-size: 3.4rem;
        font-weight: 700;
        padding: 20px;
    }
  .content {
    margin: 10px 3.2rem;
    width: auto;
    display: flex;
}

.box {
  width: 250px;
  height: auto;
}

.user__details {
    display: flex;
    align-items: center;
    gap: 1.6rem;
}
.details__info{
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.info__name {
    color: var(--color-primary);
    font-size: 20px;
    font-weight: 500;
}
.info__rol {
    color: var(--text-inactive);
    font-size: 1.5rem;
}
.details__img {
    width: 7rem;
    border-radius: 50%;
}
  </style>