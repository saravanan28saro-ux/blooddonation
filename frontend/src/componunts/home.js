import { useState } from "react";
import {Container,Li,Card} from "./styledcomponunts";
import { Link } from "react-router-dom";

export const Home=()=>{
    const [bloodtypes,setbloodtypes] = useState({
        "A+":10,
        "A-":5,
        "B+":8,
        "B-":3,
        "AB+":4,
        "AB-":2,
        "O+":12,
        "O-":6
    })
    
    return(          
            <Container>
                
                <div>
                    <h2 style={{color: "white",textAlign: "center"}}>Available Blood Types</h2>
                    <Card>
                        {Object.entries(bloodtypes).map(([type, quantity]) => (
                           <Link to="/Loginpage" key={type} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Li>
                                    <h1>{type}</h1>
                                    <p>Quantity: {quantity} units</p>
                                </Li>
                            </Link>
                        ))}
                    </Card>
                </div>
            </Container>
        
    )
}
