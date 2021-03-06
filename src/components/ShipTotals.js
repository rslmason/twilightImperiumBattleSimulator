import React from 'react';
import { Ships } from './Ships.js'
export default ShipTotals

function ShipTotals (props) {
   
    return <form>
        {Ships.map(shipType=>{ 
            return <div key={props.fleet.number+shipType+"Label"}>
                <label htmlFor={shipType.prototype.type + props.fleet.number} >
                    {shipType.prototype.type} <br/>{`[b: ${shipType.prototype.battleShots ? `${shipType.prototype.battleShots}x${shipType.prototype.battleValue}`: shipType.prototype.battleValue}${shipType.prototype.afbShots? `, afb ${shipType.prototype.afbShots}x${shipType.prototype.afbValue}`: ""}${shipType.prototype.sustain? ", sustain damage": ""}]`}
                </label>
                <input defaultValue={0} id={shipType.prototype.type + props.fleet.number} type="number" key={props.fleet.number+shipType} onChange={(e)=>{
                    if (e.target.value < 0) {
                        e.target.value = 0
                    }
                    e.target.value = Math.floor(e.target.value)
                    let i = e.target.value - props.fleet.count(shipType.prototype.type.toLowerCase());
                    if (i > 0) {
                        if (shipType.prototype.sustain) {
                            props.fleet.addShips(shipType.prototype.type.toLowerCase() + " sustain",i)
                        }
                        props.fleet.addShips(shipType.prototype.type.toLowerCase(),i)
                    }
                    else if (i < 0) {
                        if (shipType.prototype.sustain) {
                            props.fleet.removeShips(shipType.prototype.type.toLowerCase() + " sustain", -i)
                        }
                        props.fleet.removeShips(shipType.prototype.type.toLowerCase(), -i)
                    }
                }}/>
            </div>
        })}
    </form>
}