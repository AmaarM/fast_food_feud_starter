import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip";
import { useState } from "react"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

function showInstructions(category, restraunt, menu){
  if(!category && !restraunt && !menu){
      return appInfo.instructions.start;
  }
  if(category && restraunt && menu){
    return appInfo.instructions.allSelected;
  }
  if(category && !restraunt){
    return appInfo.instructions.onlyCategory;
  }
  if(!category && restraunt){
    return appInfo.instructions.onlyRestaurant;
  }
  if(category && restraunt){
    return appInfo.instructions.noSelectedItem;
  }
  if(menu){
    return appInfo.instructions.noSelectedItem;
  }

}

export function App() {
  const [currCategory, setCurrCategory] = useState(0);
  const [currRestaurant, setCurrRestaurant] = useState(0);
  const [menuItem, setMenuItem] = useState(0);

  const currentMenuItems = data.filter((item) => {
    return item.food_category === currCategory && item.restaurant === currRestaurant
  })
  console.log(currentMenuItems);

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {categories.map((category, idx) => (
            <Chip 
              key={idx} 
              label={category}
              isActive={currCategory === category} 
              onOpen = {() => {
                if(currCategory !== category){
                setCurrCategory(category);
                setMenuItem(null);
                }
              }} 
              onClose={() => {
                  if(currCategory === category){
                  setCurrCategory(null);
                  setMenuItem(null);
                  }
              }}
              />
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header 
        title = {appInfo.title}
        tagline = {appInfo.tagline}
        description = {appInfo.description}
        />
        
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{/* YOUR CODE HERE */} 
          {restaurants.map((restaurant, idx) => (
            <Chip 
              key={idx} 
              label={restaurant} 
              isActive={currRestaurant === restaurant} 
              onOpen = {() => {
                if(currRestaurant !== restaurant){
                setCurrRestaurant(restaurant);
                setMenuItem(null);
                }
              }} 
              onClose={() => {
                  if(currRestaurant === restaurant){
                  setCurrRestaurant(null);
                  setMenuItem(null);
                  }
              }}
              />
          ))}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={showInstructions(currCategory, currRestaurant, menuItem)}/>

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item, idx) => (
            <Chip 
              key={idx} 
              label={item.item_name} 
              isActive={menuItem === item} 
              onOpen = {() => {
                if(item !== menuItem){
                setMenuItem(item);
                }
              }} 
              onClose={() => {
                  if(item=== menuItem){
                  setMenuItem(null);
                  }
              }}
              />
            ))}
          </div>
          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {/* YOUR CODE HERE */}
              <NutritionalLabel item={menuItem}/>
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
