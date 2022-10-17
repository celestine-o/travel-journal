import React from "react";
import { GoGlobe } from "react-icons/go";

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav--content">
                <GoGlobe className="nav--img"/>
                {" "}
                <span className="nav--title">my travel journal.</span>
            </div>
        </nav>
    )
}