import * as React from "react"
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle  } from "./layout.module.css"
import { Link, useStaticQuery, graphql } from "gatsby"
//import {DataLayer} from "../components/analytics"
import { useEffect } from 'react';

console.log("container", container)


const Layout = ({pageTitle, pageHeading, children}) => {
    // get site name from graphQl
    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata {
                title
            }
        }
    }`);
    
    // output site title onto console
    console.log(data.site.siteMetadata.title);

    // creates a datalayer and inserts data into it
    useEffect(() => {
        if (typeof window !== 'undefined'){
          // create a new datalyer, or let it be empty
            window.dataLayer = window.dataLayer || [];

          //reset datalayer if length greater than 30
          if(window.dataLayer.length >5){
            window.dataLayer = []
            /*window.dataLayer.push(function() {
                this.reset();
              })*/
          }

          // insert page data into datalayer
          window.dataLayer.push({
            'event': 'page_view',
            'site': data.site.siteMetadata.title,
            'page': pageTitle
        });
        }
      }, []);

    /* window.dataLayer.push({
        event: "pageview",
        page: data.site.siteMetadata.title,
    }); */


    // returns the layout
    return(
        <main className = {container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className = {siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact</Link></li>
                    <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageHeading}</h1>
            {children}
        </main>
    ) 
}

export default Layout
