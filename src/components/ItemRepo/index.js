import React from "react";
import { ItemContainer } from './styles';
function ItemRepo ({repo}) {
    return(
        <ItemContainer>
            <h3>{repo.name`${ '🥳' }`}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.htm_url} target=" black">ver repositorio</a>
            <a href="#" className="remove">Remover</a>
            <hr />
        </ItemContainer>
    )
}
export default ItemRepo;