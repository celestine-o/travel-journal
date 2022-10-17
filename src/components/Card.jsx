import React from "react";
import { AiFillEnvironment } from "react-icons/ai"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt="location image" className="card--img" />
            <section className="card--content">
                <p className="card--country"><span className="location--icon"><AiFillEnvironment /></span>{" "}{props.item.location.toUpperCase()}{" "}
                    <span className="card--map"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                </p>
                <p className="card--title">{props.item.title}</p>
                <p className="card--duration">
                    <span className="startDate">{props.item.startDate}</span>
                    {" - "}
                    <span className="endDate">{props.item.endDate}</span>
                </p>
                <p className="card--description">{props.item.description}</p>

            </section>
        </div>
    )
}