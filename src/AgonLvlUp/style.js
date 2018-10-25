import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    position: absolute;

    ${props => {
        if (props.variant == 'rounded') {
            return (`
                background-color: purple;
                border-radius: 75px;
                margin: auto;
                left: 0;
                right: 0;
                width: fit-content;
            `)
        } else if (props.variant == 'dismiss') {
            return (`
                width: fill-available;
                background-color: red;
                border-radius: 10px;
            `)
        } else {
            return (`
                width: fill-available;
                background-color: blue;
            `)
        }
    }}
`

export const Icon = styled.div`
    margin-right: 25px;

    ${props => {
        if (props.variant == 'rounded') {
            return (`
            background-color: white;
            border-radius: 100%;
            min-width: 85px;
            min-height: 85px;
            display: flex;
            align-items: center;
            justify-content: center;
            `)
        }
    }}
`

export const Content = styled.div`
    display:flex;
    flex-direction: column;
    align-items: baseline;
    text-align: left;
    color: white;
`

export const Title = styled.span`
    font-weight: bold;
`

export const Dismiss = styled.div`
    color: white;
    display: flex;
    text-transform: uppercase;
    margin-left: 25px;
    padding-left: 25px;
    height: 50px;
    align-items: center;
    border-left: 1px solid white;
    font-weight: bold;
`
