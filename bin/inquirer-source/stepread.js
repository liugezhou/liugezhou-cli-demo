function setpread(callback){
    function onkeypress(s){
        output.write(s);
        line += s
        switch (s) {
            case '\r':
                input.pause();
                callback(line)
                break;
        
            default:
                break;
        }
    }
    const input = process.stdin;
    const output = process.stdout;
    let line =''

    emitKeypressEvents(input)
    input.on('keypress',onkeypress)

    input.setRawMode(true)  //进入原生模式
    input.resume()
}


function emitKeypressEvents(stream){
    function onData(chunk){
        g.next(chunk.toString())
    }
    const g = emitKeys(stream)
    g.next()
    stream.on('data',onData)
}

function* emitKeys(stream){
    while (true) {
        let ch = yield;
        stream.emit('keypress',ch)
    }
}

setpread(function(s){
    console.log('answer:',s)
})
