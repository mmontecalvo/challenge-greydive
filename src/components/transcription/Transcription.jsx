import React from 'react'

function Transcription({text}) {
    const codeText = {
        __html: text
    };

    return (
        <div className="transcription">
            <h2 className="testView__title title--margin">Transcripción</h2>
            <div className="transcription__text" dangerouslySetInnerHTML={codeText} />
        </div>
    )
}

export default Transcription
