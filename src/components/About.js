import React from "react";
import './About.css'
import {useState, useContext} from 'react';
import { ThemeContext } from './TnemeContext'
export default function About() {
    const [films,setFilm]= useState([])
    const {theme, toggle, dark}= useContext(ThemeContext)
  return (
    
    <div className="About" style={!dark?{backgroundColor:'rgb(236, 236, 236)'}:{backgroundColor:'gray'}}>
        <h1 style={!dark?{color:'black'}:{color:'white'}}>Welcome to "Anime Cinemania" </h1>
        <p className="infomation-first" style={!dark?{color:'black'}:{color:'white'}}>Are you ready to embark on an extraordinary cinematic journey through the captivating worlds of anime? Look no further—Anime Cinemania is your ticket to immerse yourself in the awe-inspiring realm of animated storytelling.</p>
        <p style={!dark?{color:'black'}:{color:'white'}}>The Ultimate Anime Movie Destination:
Step into a realm where imagination knows no bounds and storytelling reaches new heights. Anime Cinemania is your gateway to a curated collection of enthralling anime movies that will transport you to magical universes, evoke deep emotions, and leave you craving for more.</p>
       <p style={!dark?{color:'black'}:{color:'white'}}>Explore a Diverse Anime Movie Library:
Dive into our extensive collection of anime movies spanning various genres—action, adventure, romance, fantasy, sci-fi, and more. Whether you're a fan of classic masterpieces or the latest blockbuster releases, Anime Cinemania offers a diverse array of choices to suit every taste.</p>
      <p style={!dark?{color:'black'}:{color:'white'}}>Stay Updated with the Latest Releases:
Stay in the loop with the most recent anime movie releases. Our team of dedicated anime aficionados keeps you informed about the latest films hitting the big screen, enabling you to catch them at the earliest opportunity.</p>
      <p style={!dark?{color:'black'}:{color:'white'}}>In-Depth Reviews and Insights:
Seeking guidance on choosing the next anime movie for your watchlist? Explore our comprehensive reviews and insightful analyses, aiding you in making informed decisions. We provide a detailed look into the plot, animation quality, character development, and overall cinematic experience, helping you choose the perfect movie for your anime cravings.</p>
       <p style={!dark?{color:'black'}:{color:'white'}}>Community Discussions and Recommendations:
Engage with a vibrant community of anime movie enthusiasts. Participate in lively discussions, share your thoughts and opinions, and discover hidden gems recommended by fellow anime aficionados. Anime Cinemania is more than just a website—it's a community where you can bond over a shared love for anime movies.</p>
       <p style={!dark?{color:'black'}:{color:'white'}}>Exclusive Behind-the-Scenes Features:
Get an exclusive peek behind the scenes with in-depth features, interviews, and trivia about your favorite anime movies. Learn about the creative processes, challenges faced, and the passion that goes into crafting these masterpieces.</p>
    </div>
  );
}
