import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default function Navbar() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Pokédex</Link>
      </Menu.Item>
      <Menu.Item key="favourites">
        <Link to="/favourites">View Favourites</Link>
      </Menu.Item>
    </Menu>
  );
}
