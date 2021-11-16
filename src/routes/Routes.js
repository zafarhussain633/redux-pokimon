import React from 'react'
import { Routes as Switch , Route  } from 'react-router'
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import About from "../pages/About"
import PokimonDetail from "../pages/PokimonDetail"


const PageRoutes = () => {
    return (
        <Switch>
             <Route exact path ={"/"} element={<Home />} />
             <Route path ={"/about"} element={<About />} />
             <Route path ={"/blog"} element={<Blog />} />
             <Route path ={"/pokimon/:slug"} element={<PokimonDetail />} />
        </Switch>
    )
}

export default PageRoutes
