import React from "react"
import Card from "./Card"

import { connect } from "react-redux"

//import Numero from "./Numero"


function Propriedades(props) {
    const {num} = props
    return(
        <Card title = {props.titulo} {...props} purple>
            <div className="Propriedades">
                <span>
                    <span> {props.aluno} sua nota: {num} </span>                   
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

export default connect(mapStateToProps)(Propriedades)