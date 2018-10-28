import React from 'react'
import PropTypes from 'prop-types'

import {
    LineContainer,
    PhotoContainer,
    ProgressBarContainer,
    ProgressBar,
    Progress,
    NoPicture,
    Picture,
    GeometryContainer,
    GeometryContent,
} from './style'

class AgonLvlProgression extends React.Component {
    render() {
        const { variant, total, current, photo, percent } = this.props

        const toDisplay = percent ? `${current / total * 100}%` : `${current} / ${total}`

        return variant.startsWith('line')
        ? (
            <LineContainer>
                <PhotoContainer>
                    {
                        !photo
                        ? <NoPicture>photo</NoPicture>
                        : <Picture src={photo} />
                    }
                </PhotoContainer>
                <ProgressBarContainer variant={variant} >
                    <ProgressBar variant={variant} >
                        <Progress variant={variant} progress={current/total * 100} >
                            {toDisplay}
                        </Progress>
                    </ProgressBar>
                </ProgressBarContainer>
            </LineContainer>
        )
        : (
            <GeometryContainer rounded={variant.startsWith('rounded')} progress={current/total * 100} >
                <GeometryContent>
                    {toDisplay}
                </GeometryContent>
            </GeometryContainer>
        )
    }
}

AgonLvlProgression.propTypes = {
    variant: PropTypes.string,
    photo: PropTypes.string,
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    percent: PropTypes.bool,
}

AgonLvlProgression.defaultProps = {
    variant: 'line',
    photo: '',
    percent: false,
}

export default AgonLvlProgression
