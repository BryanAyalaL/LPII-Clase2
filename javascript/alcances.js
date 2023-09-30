//alcance de var, let y const (Scope)

function suma(parametroUno,parametroDos){
    const x=10;
    if (parametroUno>parametroDos){
        const x=20
    }
    return parametroUno+parametroDos+x;
}
suma(7,6);