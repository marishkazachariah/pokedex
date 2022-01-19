import { Divider, Input } from "antd";

export default function Searchbar(props) {
  return (
    <>
      <div type="flex" justify="center" align="middle">
      <label>Search by name</label>
      <Input type="text" onChange={props.handleSearch} placeholder="Bulbasaur" style={{ width: 200 }}/>
      </div>
    </>
  );
}
