import { Container, Li, Card } from "./styledcomponunts";
import { Link } from "react-router-dom";

export const Home = ({ bloodtypes }) => {
  return (
    <Container>
      <div>
        <h2 style={{ color: "white", textAlign: "center" }}>
          Available Blood Types
        </h2>

        <Card>
          {Object.entries(bloodtypes).map(([type, quantity]) => (
            <Link
              to="/login"
              state={{ blood: type }}
              key={type}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Li>
                <h1>{type}</h1>
                <p>Quantity: {quantity} units</p>
              </Li>
            </Link>
          ))}
        </Card>
      </div>
    </Container>
  );
};