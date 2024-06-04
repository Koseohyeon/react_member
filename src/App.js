import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MemberSave from "./pages/MemberSave";
import Login from "./pages/Login";
import MemberList from "./pages/MemberList";
import MemberDetail from "./pages/MemberDetail";
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
          <Route path="/detail/:id" exact={true} element={<MemberDetail />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;