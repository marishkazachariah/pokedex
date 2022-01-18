import { Divider, Input } from "antd";

export default function Searchbar(props) {
  return (
    <>
      <Divider>Search Pokémon</Divider>
      <div type="flex" justify="center" align="middle">
      <label >Search by name</label>
      <Input type="text" onChange={props.handlerSearch} placeholder="Bulbasaur" style={{ width: 200 }}/>
      </div>
    </>
  );
}
