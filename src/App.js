import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MemberSave from "./pages/MemberSave";
import Login from "./pages/Login";
import MemberList from "./pages/MemberList";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/memberSave" exact={true} element={<MemberSave />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/memberList" exact={true} element={<MemberList />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;