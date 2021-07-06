import React, { Component } from 'react'
import { Ring, DualRing, Circle, Roller, Default, 
    Ellipsis, Grid, HourGlass, Ripple, Heart } from "react-awesome-spinners"


 const MySpinner = ({spinnerName = "Default", spinnerColor = "#00bfff", spinnerSize = 64, spinnerSizeUnit = 'px'}) => {
            var spinner             
            switch (spinnerName) {
                case "Ring":
                    spinner = <Ring color={ spinnerColor } size={ spinnerSize } sizeUnit={ spinnerSizeUnit } />
                    break
            
                case "DualRing":
                    spinner = <DualRing color={ spinnerColor } size={ spinnerSize } sizeUnit={ spinnerSizeUnit } />
                    break

                case "Circle":
                    spinner = <Circle color={ spinnerColor } size={ spinnerSize } sizeUnit={ spinnerSizeUnit } />
                    break

                case "Roller":
                    spinner = <Roller color={ spinnerColor } size={ spinnerSize } sizeUnit={ spinnerSizeUnit } />
                    break

                case "Ellipsis":
                    spinner = <Ellipsis color={ spinnerColor } size={ spinnerSize } sizeUnit={ spinnerSizeUnit } />
                    break

                case "Grid":
                    spinner = <Grid color={ spinnerColor } size={ spinnerSize } sizeUnit={ spinnerSizeUnit } />
                    break

                case "HourGlass":
                    spinner = <HourGlass color={ spinnerColor } size={ spinnerSize } sizeUnit={ spinnerSizeUnit } />
                    break

                case "Ripple":
                    spinner = <Ripple color={ spinnerColor } size={ spinnerSize } sizeUnit={ spinnerSizeUnit } />
                    break

                case "Heart":
                    spinner = <Heart color={ spinnerColor } size={ spinnerSize } sizeUnit={ spinnerSizeUnit } />
                    break 

                default:
                    spinner = <Default color={ spinnerColor } size={ spinnerSize } sizeUnit={ spinnerSizeUnit } />
                    break
            }

            // console.log('spinner name from func >> ', spinnerName);  
            // console.log('spinner color from func >> ', spinnerColor)    
            // console.log('spinner size from func >> ', spinnerSize)    

            return spinner
        }

export default class SpinnerComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            spinnerName : 'Default',
            isLoading : false, 
            spinnerSize : 64,
            spinnerColor : '#00bfff',
            spinnerSizeUnit : 'px'
        }
    }

    componentDidMount(){
        this.setState({
            spinnerName : this.props.spinnerType,
            isLoading : this.props.isLoading, 
            spinnerSize : this.props.size,
            spinnerColor : this.props.color 
        }) 
    }

    render() {
        
        let loader
        if(this.state.isLoading){
            loader = <MySpinner  
                            spinnerName = { this.state.spinnerName } 
                            spinnerColor = { this.state.spinnerColor } 
                            spinnerSize = { this.state.spinnerSize }
                      /> 
        }
        return (
            <> 
                <div>
                    <span>{loader}</span>  
                </div> 
            </>
        )
    }
}
