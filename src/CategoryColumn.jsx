import * as React from "react"
import Chip from "./components/Chip/Chip";


export default function CategoryColumn(props){
    
    return(
        <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {props.categories.map((category, idx) => (
            <Chip 
              key={idx} 
              label={category}
              isActive={props.currCategory === category} 
              onOpen = {() => {
                if(props.currCategory !== category){
                props.setCurrCategory(category);
                props.setMenuItem(null);
                }
              }} 
              onClose={() => {
                  if(props.currCategory === category){
                  props.setCurrCategory(null);
                  props.setMenuItem(null);
                  }
              }}
              />
          ))}
        </div>
      </div>
    )
}