import React from "react"
import { Link } from "gatsby"
import * as menuStyle from "./menu.module.scss"
import * as MenuJson from "../json/menu.json"

console.log(JSON.stringify(MenuJson))
const Menu = () => {
    return (
        <nav className={menuStyle.navbar} style={{
          margin: `0 auto`,
          maxWidth: 960,
          
        }}>
            <ul className={menuStyle.items}>
                {MenuJson.map((menuItem, index) => {
                    return <li id={menuItem.id}><Link className={menuStyle.liItem} activeClassName={menuStyle.activeItem} to={menuItem.URL}>{menuItem.title}</Link></li>
                })}
               
            </ul>
            {/*
            <ul className={menuStyle.items}>
                <li><Link className={menuStyle.liItem} activeClassName={menuStyle.activeItem} to="/">Home</Link></li>
                <li><Link className={menuStyle.liItem} activeClassName={menuStyle.activeItem} to="/contact">Contact</Link> </li>
                <li><Link className={menuStyle.liItem} activeClassName={menuStyle.activeItem} to="/blog">Blog</Link> </li>
                <li><Link className={menuStyle.liItem} activeClassName={menuStyle.activeItem} to="/strapiblog">Strapi Blog</Link> </li>
            </ul>
            */}
            
        </nav>
        
    )
    
}

export default Menu