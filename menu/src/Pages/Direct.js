import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Album from "./Album";
import Sandwiches from "./Sandwiches"
import Drinks from "./Drinks"
import Desserts from "./Desserts"

export default function Direct() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Album />} />
        <Route path="Desserts" element={<Desserts />} />
          <Route path="Sandwiches" element={<Sandwiches />} />
          <Route path="Drinks" element={<Drinks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Direct />);
