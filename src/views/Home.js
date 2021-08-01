import React from 'react';
import './styles/Home.css'
import FoodBox from './../components/FoodBox'
import restaurant from './../assets/img/restaurant.jpg'

function Home(props) {
    return (     
        <main className=" mb-2">
          <div className="h-56 md:h-100 md:bg-bottom bg-no-repeat bg-bottom bg-cover rounded-b-lg" style={{backgroundImage: `url(${restaurant})`}}>
          </div>
        
          <div className="mx-auto flex">
        
          <FoodBox img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80"
           title="Hamburguesa con Queso" 
           description="Hamburguesa con queso y aderezo chipotel."
           cost="$15" 
           review="36"></FoodBox>
          
          <FoodBox img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80"
           title="Hamburguesa con Queso" 
           description="Hamburguesa con queso y aderezo chipotel."
           cost="$15" 
           review="36"></FoodBox>
          
        
          </div>
        
          <div className="mt-4 mx-2">
            <div>
              <div className="">Nombre</div>
              <input className="form-control placeholder-secundary" type="text" placeholder="Nombre"/>
            </div>
        
            <div>
              <div className="">Email</div>
              <input className="form-control placeholder-secundary" type="email" placeholder="Email"/>
            </div>
        
            <div>
              <div>Comentarios</div>
              <textarea className="form-control placeholder-secundary" name="" id="" cols="30" rows="10"></textarea>
            </div>
        
            <div>
              <button className="mt-2 btn btn-primary mx-auto">Enviar</button>
            </div>
        
          </div>
        </main>
    )
}

export default Home;

