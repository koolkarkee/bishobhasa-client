import React from 'react'
import Slide from '@material-ui/core/Slide'

const TransitionLeft = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="left" ref={ref} {...props} />
})

const TransitionRight= React.forwardRef(function Transition(props, ref) {
        return <Slide direction="right" ref={ref} {...props} />
})

const TransitionUp = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />
})

const TransitionDown = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />
})

export {
        TransitionLeft,
        TransitionRight,
        TransitionUp,
        TransitionDown
}
        
