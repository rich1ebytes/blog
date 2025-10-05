import { Link } from "react-router-dom";
import arrow_back from "../assets/arrow_back.svg"


function HomeLink(){
     return(
     <div className="flex flex-row">

          <Link to="/" className="flex items-center space-x-1 text-lg">
            <img className="w-5 h-5" src={arrow_back} alt="back" />
            <span>back to home</span>
          </Link>

      </div>
     )
}

export default HomeLink