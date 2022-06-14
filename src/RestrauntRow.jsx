import * as React from "react"
import Chip from "./components/Chip/Chip";

export default function RestrauntRow(props){

    return(
        <div className="RestaurantsRow">
        <h2 className="title">Restaurants</h2>
        <div className="restaurants options">{/* YOUR CODE HERE */} 
        {props.restraunt.map((restaurant, idx) => (
          <Chip 
            key={idx} 
            label={restaurant} 
            isActive={props.currRestaurant === restaurant} 
            onOpen = {() => {
              if(props.currRestaurant !== restaurant){
              props.setCurrRestaurant(restaurant);
              props.setMenuItem(null);
              }
            }} 
            onClose={() => {
                if(props.currRestaurant === restaurant){
                props.setCurrRestaurant(null);
                props.setMenuItem(null);
                }
            }}
            />
        ))}
        </div>
      </div>
    )


}