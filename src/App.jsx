import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard";
import List from "./components/product/List";
import Grid from "./components/product/Grid";
import AddProduct from "./components/product/AddProduct";
import Edit from "./components/product/Edit";
import ProductView from "./components/product/ProductView";
import SpecificEdit from "./components/product/specificEdit";
import UserGrid from "./components/user/UserGrid";
import UserList from "./components/user/UserList";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
function App() {
  return (
    <div className="font-mono">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/list" element={<List />} />
          <Route path="/product/grid" element={<Grid />} />
          <Route path="/product/create" element={<AddProduct />} />
          <Route path="/product/edit" element={<Edit />} />
          <Route path="/productView" element={<ProductView />} />
          <Route path="/product/specificedit" element={<SpecificEdit />} />
          <Route path="/user/grid" element={<UserGrid />} />
          <Route path="/user/list" element={<UserList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
