import { FaWindows } from "react-icons/fa"
import { SlGlobe } from "react-icons/sl"
import "./Filter.css"

// eslint-disable-next-line react/prop-types
function Filter({ filter, onChange }) {
    return (
        <div className="filter">
            <button className={`button first ${filter === "all" ? "selected" : ""}`} onClick={() => onChange("all")}>Filter</button>
            <button className={`button center ${filter === "pc" ? "selected" : ""}`} onClick={() => onChange("pc")}><FaWindows /></button>
            <button className={`button last ${filter === "browser" ? "selected" : ""}`} onClick={() => onChange("browser")}><SlGlobe /></button>
        </div>
    )
}

export default Filter