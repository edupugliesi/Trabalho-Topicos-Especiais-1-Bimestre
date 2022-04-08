import React from "react"
import Card from "./Card"

import { connect } from "react-redux"

function Sorteio(props){
    const {num} = props
    const aleatorio = parseInt(Math.random() * num)
    const txt_sorteio = "Sorteio de números de 0 a " + num
    
    return (
        <Card title = {`${txt_sorteio}`} green>
            <div>
                <span>
                    <span> Resultado: </span>
                    <span> {aleatorio} </span>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps)(Sorteio)