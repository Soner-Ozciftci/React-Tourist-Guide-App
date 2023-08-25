import "./App.css"
import React, { useState } from "react";
import Categories from ' ./Categories';
import items from './Data';
import Menu from './Menu';

function App() {

const allCategories = ["all", ...new Set(items.map((item)=> item.category))];

const [menuItems,setMenuItems] = useState(items);
const [activeCategory,setActiveCategory] =useState("");
const [categories,setCategories] = useState(allCategories);

  return (
    <main>

    </main>
  );
}

export default App;
