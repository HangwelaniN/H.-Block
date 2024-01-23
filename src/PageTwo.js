import React from "react";
import "./PageTwo.css"


export default function PageTwo() {
    return (
        <div className="PageTwo">
            <div className="wrap">
            <h1>Award-Winning <br />Web Design </h1>
            <p className="P">Whether you’re showcasing a portfolio,
                 publishing a blog, or running a business, 
                 our designer templates have proven to be the most
                  beautiful way to present your ideas online.
            </p>
             <p1><div>SEE MORE TEMPLATE</div> </p1> 
                  <br />

                  <img src={require ('./img/pic1.jpg')} alt="blog woman" />
        </div>
        <div className="sec wrap">
        <h1 className=" p-5">All-in-One <br />Website Platform</h1>
        <p className="P2">Increase the reach of your content with 
         our unique suite of marketing and media tools, productivity apps,
         and more.</p>
         <img src={require ('./img/pic3.png')} alt="laying page" />
        </div>
         <div className="thir wrap">
            <h2>Designed for Teams</h2>
            <p className="P2">
            Whether you have a team or want to grow one,
             Squarespace lets you add contributors and set individual 
             permissions so you can turn your blog into a publication.
            </p>
            <img src={require ('./img/pic4.png')} alt="social pic" />
         </div>
         <div className="four wrap">
         <h2>Socially Connected</h2>
            <p className="P2">
            Your blog is the center of your online identity.
            Our powerful tools publish to, sync with, and import from Twitter, 
            Instagram, Vimeo and more.
            </p>
         </div>
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         
        </div>
    )
}