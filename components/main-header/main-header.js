
import React from 'react';
import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css";
import NavLink from "@/components/main-header/nav-link";

const MainHeader = () => {

    return (
        <header className={classes.header}>
            <Link href={"/"} className={classes.logo}>
                <img src={logoImg.src} alt={"A plate with food on it"}/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href={"/meals"}>Browse Meals</NavLink>
                    </li>

                    <li>
                        <NavLink href={"/community"}>Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default MainHeader;