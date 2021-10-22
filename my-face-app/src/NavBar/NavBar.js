import React, {useEffect} from "react";
import './NavBar.scss'
import {getPosts} from "../apiRepo/postsRepo";

const NavBar = () => {
    const max_width = 700;

    const toggleBurgerMenu = () => {
        let widthMediaSmall = window.matchMedia(`(max-width: ${max_width}px )`)
        let x = document.getElementById("myLinks");
        if (widthMediaSmall){
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
    }

    useEffect(() => {
        function turnOnOrOffBurgerMenu(){
            let x = document.getElementById("myLinks");

            if(window.innerWidth > max_width){
                if (x.style.display === "block" || x.style.display === "none"){
                    x.style.display = "flex";
                }
            } else if (window.innerWidth < max_width){
                if (x.style.display === "flex"){
                    x.style.display = "none";
                }
            }
        }

        let x = document.getElementById("myLinks");
        x.style.display = "none";
        window.onresize = turnOnOrOffBurgerMenu;
        turnOnOrOffBurgerMenu()

    }, [])


    return (
        <header>
            <div className="topnav">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <a href="" className="logo" id="logo">MyFace</a>
                {/*Navigation links (hidden by default)*/}
                <div id="myLinks">
                    <a className="nav-link text-dark" href={"/posts"}>Homepage</a>
                    <a data-modal-target="#modal" className="nav-link text-dark" id="create-post-link" href={"/posts/create"}>Post</a>
                    <a className="nav-link text-dark" href={""}>Users</a>
                    <a className="nav-link text-dark" href={""}>Privacy</a>
                </div>
                {/*"Hamburger menu" / "Bar icon" to toggle the navigation links*/}
                <a className="icon" onClick={toggleBurgerMenu}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </header>
    )
}

export default NavBar;