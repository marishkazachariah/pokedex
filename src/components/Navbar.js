import { Link } from "react-router-dom";
import { Menu, Affix } from "antd";

export default function Navbar() {
  return (
    <div className="Navbar">
    <Affix>
      <Menu mode="horizontal" id="nav">
        <Menu.Item key="home">
          <Link to="/pokedex">Pokédex</Link>
        </Menu.Item>
        <Menu.Item key="favourites">
          <Link to="/favourites">View Favourites</Link>
        </Menu.Item>
      </Menu>
      </Affix>
    </div>
  );
}
