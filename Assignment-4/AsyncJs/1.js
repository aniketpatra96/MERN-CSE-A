function startEvent(callback){
    console.log("Event Planning Started");
    setTimeout(()=>{
        callback()
    }, 1000)
}

function writeContent(callback){
    console.log("Content Writing started");
    let content = "Some Content....";
    setTimeout(()=>{
        callback(content)
    }, 1000)
}

function verifyContent(data, callback){
    console.log("Verification Started");
    setTimeout(()=>{
        let verified = true;
        if(verified) callback(data)
    }, 1000)
}

function printFlex(data, callback) {
    console.log("Printing Started");
    setTimeout(()=>{
        callback(data)
    }, 1000)
}

startEvent(()=>{
    writeContent((content)=>{
        verifyContent(content, (verifiedContent)=>{
            printFlex(verifiedContent, (flex)=>{
                console.log("Flex is printed for: "+flex);
            })
        })
    })
})