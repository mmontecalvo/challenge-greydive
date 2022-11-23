import React from 'react';

function Tasks({tasks, stage}) {
    return (
        <div className="tasks">
            <h2 className="testView__title title--margin">Tareas</h2>
            <p className="tasks__stage">Escenario: {stage}</p>
            {
                tasks.map((task, i) => {
                    const modified = task.texto.replace(/\\n/g, "<br>");
                    const codeText = {
                        __html: modified
                    };

                    return (
                        <div className="task__container" key={i}>
                            <div className="task__text">
                                <h3>Tarea {i + 1}</h3>
                                <div dangerouslySetInnerHTML={codeText} />
                            </div>
                            {
                                task.tipoTarea === "opinionScale5" &&
                                <h4 className="task__answer">Respuesta: {task.respuesta}</h4>
                            }
                            <span className="task__time">Duración de la tarea: {task.tiempo}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tasks
