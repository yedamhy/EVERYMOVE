import Seoul_subway_linemap from './Seoul_subway_linemap_ko.svg'
import React from 'react'
import { ReactSVG } from 'react'

export default class map extends React.Component{
    render(){
        return <ReactSVG
            afterInjection = {(error, svg) =>{
                if (error){
                    console.error(error);
                    return;
                }
                console.log(svg);
            }
        }
        src = {Seoul_subway_linemap}
        ></ReactSVG>
    }
}