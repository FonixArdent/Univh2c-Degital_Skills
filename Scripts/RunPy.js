function PYRuner(_name) {
    const pythonFilePath = '../System/PY_Check/' + _name;
    fetch(pythonFilePath)
        .then(response => response.text())
        .then(script => eval(script))
        .catch(error => console.error('Error detected :', error));
};
