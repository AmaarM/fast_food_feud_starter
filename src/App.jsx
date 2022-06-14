import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import { useState } from "react"
import CategoryColumn from "./CategoryColumn"
import RestrauntRow from "./RestrauntRow"
import MenuDisplay from "./MenuDisplay"
import DataSource from "./DataSource"


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

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <CategoryColumn currCategory={currCategory} menuItem={menuItem} categories = {categories} setCurrCategory={setCurrCategory} setMenuItem={setMenuItem}/>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header 
        title = {appInfo.title}
        tagline = {appInfo.tagline}
        description = {appInfo.description}
        />
        
        {/* RESTAURANTS ROW */}
        <RestrauntRow currRestaurant={currRestaurant} menuItem={menuItem} restraunt = {restaurants} setCurrRestaurant={setCurrRestaurant} setMenuItem={setMenuItem}/>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={showInstructions(currCategory, currRestaurant, menuItem)}/>

        {/* MENU DISPLAY */}
        <MenuDisplay currentMenuItems={currentMenuItems} menuItem={menuItem} setMenuItem={setMenuItem} />

        <DataSource appInfo={appInfo}/>
      </div>
    </main>
  )
}

export default App
