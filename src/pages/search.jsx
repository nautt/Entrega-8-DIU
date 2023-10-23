import React from 'react'
import RectangleCards from '../components/rectangle_cards.jsx'
import Custom_Navbar from '../components/navbar.jsx'
import { useLocation } from 'react-router-dom';
import CardCollection from '../components/card_collector.jsx'


const jsonData = require('../assets/proyectos.json');



export const SearchResults = () => {

    const groupedByCategory = {};

    jsonData.forEach((item) => {
      const { category, ...rest } = item;
      if (!groupedByCategory[category]) {
        groupedByCategory[category] = [];
      }
      groupedByCategory[category].push(rest);
    });

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q')

    const string = searchQuery.toLowerCase();
    const string_categories = Object.keys(groupedByCategory);

    let matchingCategory = null; // Initialize a variable to store the matching category

    const isStringInCategories = string_categories.some((category) => {
      if (category.toLowerCase().includes(string)) {
        matchingCategory = category; // Store the matching category
      }
        return false;
    });

  return (
    <>
      <Custom_Navbar/>
      {matchingCategory ? (
          <div>
            <h1>Resultados para: {searchQuery}</h1>
            <CardCollection data={groupedByCategory[matchingCategory]} />
          </div>
      ) : (
        <h1>No hay resultados para: {searchQuery}</h1>
      )}
    </>
  )
}

export default SearchResults;
