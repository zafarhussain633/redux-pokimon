import React from 'react'
import { Routes as Switch , Route  } from 'react-router'
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import About from "../pages/About"
import PokimonDetail from "../pages/PokimonDetail"
import SearchResult from '../pages/SearchResult'


const PageRoutes = () => {
    return (
        <Switch>
             <Route exact path ={"/"} element={<Home />} />
             <Route path ={"/about"} element={<About />} />
             <Route path ={"/blog"} element={<Blog />} />
             <Route path ={"/pokimon/:slug"} element={<PokimonDetail />} />
             <Route path ={"/pokimon/search"} element={<SearchResult />} />   
             <Route  path="*" element="page not found" />
        </Switch>
    )
}

export default PageRoutes
