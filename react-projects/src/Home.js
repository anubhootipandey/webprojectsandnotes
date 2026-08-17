import React from 'react'
import Counter from './components/Counter'
import GithubuserSearch from './components/GithubuserSearch'
import Quote from './components/Quote'
import RandomColor from './components/RandomColor'
import RecipeFinder from './components/RecipeFinder'
import ShoppingList from './components/ShoppingList'
import StorageExample from './components/StorageExample'

const Home = () => {
  return (
    <div>
        <Counter />
        <GithubuserSearch />
        <Quote />
        <RandomColor />
        <RecipeFinder />
        <ShoppingList />
        <StorageExample />
    </div>
  )
}

export default Home