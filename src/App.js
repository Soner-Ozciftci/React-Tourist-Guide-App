import "./App.css";
import React, { useState } from "react";
import Categories from "./Categories";
import items from './Data';
import Menu from './Menu';

const allCategories = ["all", ...new Set(items.map((item)=> item.category))];

function App(){

const [menuItems, setMenuItems] = useState(items);
const [activeCategory, setActiveCategory] =useState("");
const [categories, setCategories] = useState(allCategories);

const filterItems = (category) => {

}

  return (
    <main>
<section className="holiday section">
<div className="title">
  <h2>Cukurova Swimming Places</h2>
  <div className="underline"></div>
   </div>
   <Categories categories={categories} activeCategory={activeCategory} filterItems={filterItems}  />
</section>
    </main>
  );
}

export default App;
