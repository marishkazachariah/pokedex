import { Card, Col, Button, Tag } from "antd";

export default function PokemonCard({ pokemon }) {
    return (
        <Col>
            <Card title={pokemon.name} style={{ width: 230, height: 300, margin: 10, textTransform: 'capitalize' }} >
            <img src={pokemon.sprites.front_default} height={100} alt={pokemon.name}/>
            <p>Types</p>
            <div>
            {pokemon.types.map(type =>  {
                return ( 
                    <Tag key={`${type.name}`}>{type.name}</Tag>
                )
            })}
            </div>
            <Button>Add to Favourites</Button>
            </Card>
        </Col>
    )
}