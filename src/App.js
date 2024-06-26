import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MemberSave from "./pages/MemberSave";
import Login from "./pages/Login";
import MemberList from "./pages/MemberList";
import MemberDetail from "./pages/MemberDetail";
import BookUpload from "./pages/Book/BookUpload";
import Bookdetail from "./pages/Book/Bookdetail";
import Booklist from "./pages/Book/Booklist";
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
          <Route path="/bookUpload" exact={true} element={<BookUpload />} />
          <Route path="/booklist" exact={true} element={<Booklist />} />
          <Route path="/book/detail/:id" exact={true} element={<Bookdetail />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;