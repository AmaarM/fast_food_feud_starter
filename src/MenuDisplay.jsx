import * as React from "react"
import Chip from "./components/Chip/Chip";
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel";

export default function MenuDisplay(props){
    return (
        <div className="MenuDisplay display">
        <div className="MenuItemButtons menu-items">
          <h2 className="title">Menu Items</h2>
          {props.currentMenuItems.map((item, idx) => (
          <Chip 
            key={idx} 
            label={item.item_name} 
            isActive={props.menuItem === item} 
            onOpen = {() => {
              if(item !== props.menuItem){
              props.setMenuItem(item);
              }
            }} 
            onClose={() => {
                if(item=== props.menuItem){
                props.setMenuItem(null);
                }
            }}
            />
          ))}
        </div>
        {/* NUTRITION FACTS */}
        <div className="NutritionFacts nutrition-facts">
          {/* YOUR CODE HERE */}
            <NutritionalLabel item={props.menuItem}/>
        </div>
      </div>
    )
}

