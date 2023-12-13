/* eslint-disable react/prop-types */
import { FaWindows } from "react-icons/fa"
import { SlGlobe } from "react-icons/sl"
import "./Card.css"

function Card({ data }) {
    return (
        <div className="card">
            <img className="thumbnail" src={data.thumbnail} />
            <div className="content">
                <h2 className="title">{data.title}</h2>
                <p className="detail"><i>{data.short_description}</i></p>
                <div className="footer">
                    <div className="genre">{data.genre}</div>
                    <div className="platform">
                        {data.platform === "PC (Windows)" ? <FaWindows /> : <SlGlobe />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card