import { button } from "motion/react-client"
import chevronLeft from "/src/icons/chevron-left.svg"
import chevronRight from "/src/icons/chevron-right.svg"

const ScrollButton = ({ direction }) => {
    const toRight = direction === "right"

    return (
        
        <button
            onClick={() => 
                document
                    .querySelector("#movie-card-container")
                    .scrollBy({left: toRight ? 220 : -220, behavior: "smooth"})
                }
                className={`z-10 absolute ${toRight ? "-right-10" : "-left-10"} top-24 hidden md:flex items-center justify-center bg-zinc-900
                hover:bg-zinc-800 duration-200 p-2 rounded-full`}
            >
                <img src={toRight ? chevronRight : chevronLeft} alt="" />

        </button>

    )
}

export default ScrollButton