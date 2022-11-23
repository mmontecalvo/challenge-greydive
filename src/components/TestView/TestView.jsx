import React, { useEffect } from 'react';
import Tasks from '../tasks/Tasks';
import Transcription from '../transcription/Transcription';

function TestView({client}) {

    useEffect(() => {
        document.title = client.cliente;   
    }, [ client.cliente ])

    return (
        <div className="testView">
            <a href="https://www.greydive.com/" className="testView__logo">
                <img src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-500.png" alt="" />
            </a>
            <div className="testView__info">
                <h1 className="info__client">{client.cliente}</h1>
                <h2 className="testView__title">Test: Test de usabilidad en el sitio web</h2>
                <h3 className="info__tester">Testeador 1</h3>
                <div className="info__video">
                    <iframe src={client.linkVideo} frameBorder="0" title="video" scrolling="no" allowFullScreen={true} width="1366" height="1024"></iframe>
                </div>
            </div>
            <Transcription text={client.transcripcion} />
            <Tasks tasks={client.preguntas} stage={client.escenario} />
        </div>
    )
}

export default TestView
