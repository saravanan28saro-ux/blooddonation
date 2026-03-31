import {Header1,Button} from "./styledcomponunts";
import {Link} from "react-router-dom";
export const Header=()=>{
    return(
        <Header1>
           <h1 style={{color:"red"}}>blood donation</h1>
           <h1 style={{color: "green",margin: "0px"}}>Welcome to Blood Donation App</h1>
           <div>

            <Button>
                <Link style={{textDecoration: "none", color: "black"}} to="https://www.chennaibloodcentre.com/voluntary-blood-bank-in-chennai/">Donate Blood</Link>
            </Button>
           </div>
        </Header1>
    );
};