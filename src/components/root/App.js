import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "../navi/Navi";
import { useDispatch } from "react-redux";

function App() {
  return (
    <Container>
      <Navi />

      <Dashboard />
    </Container>
  );
}

export default App;
