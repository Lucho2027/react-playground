import React, { Component } from "react";


export default class Accordion extends Component {
    static defaultProps = {
        sections: []
    };
    state = {
        currentSectionIndex: null,
    };
    handleButtonClick = (index) => {
        this.setState({ currentSectionIndex: index })
    }
    renderLi(section, idx, currentSectionIndex) {
        return (
            < li className='Accordion__item' key={idx}>
                <button
                    type='button'
                    onClick={() => this.handleButtonClick(idx)}
                >
                    {section.title}
                </button>
                {(currentSectionIndex === idx) && <p>{section.content}</p>}
            </li>
        )

    }

    render() {
        const { currentSectionIndex } = this.state
        const { sections } = this.props

        return (


            < ul >
                {
                    sections.map((section, idx) =>
                        this.renderItem(section, idx, currentSectionIndex)
                    )
                }
            </ul >

        )
    }
}


