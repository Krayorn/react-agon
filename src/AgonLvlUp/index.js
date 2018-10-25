import React from 'react'
import PropTypes from 'prop-types'

import Cup from '../assets/Cup'

import {
    Container,
    Icon,
    Content,
    Dismiss,
    Title,
} from './style'

class AgonLvlUp extends React.Component {
    render() {
        const { variant, dismiss, title, text } = this.props

        return (
            <Container variant={variant} >
                <Icon variant={variant} >
                    <Cup />
                </Icon>
                <Content>
                    <Title> {title} </Title>
                    <span> {text} </span>
                </Content>
                {
                    dismiss &&
                    <Dismiss>ok!</Dismiss>
                }
            </Container>
        )
    }
}

AgonLvlUp.propTypes = {
    variant: PropTypes.string,
    dismiss: PropTypes.bool,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

AgonLvlUp.defaultProps = {
    variant: 'default',
    dismiss: false,
}

export default AgonLvlUp
