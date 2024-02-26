function startEvent(){
    console.log("Event Planning Started");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, 1000)
        
    })
}

function writeContent(){
    console.log("Content Writing started");
    let content = "Some Content....";
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(content)
        }, 1000)
    })
}

function verifyContent(data){
    console.log("Verification Started");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let verified = true;
            if(verified) resolve(data)
            else reject("Data is not verified")
        }, 1000)
    })
}

function printFlex(data) {
    console.log("Printing Started");
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data)
        }, 1000)
    })
}


// startEvent()
//     .then(()=>writeContent())
//     .then((content)=>verifyContent(content))
//     .then((veriContent)=>printFlex(veriContent))
//     .then((flex)=>console.log(flex))
//     .catch((err)=>console.log("Error:"+err))

// async/await
async function main(){
    try {
        await startEvent()
        let content = await writeContent()
        let vc = await verifyContent(content)
        let flex = await printFlex(vc)
        console.log(flex);
    } catch (error) {
        console.log("Error: "+error);
    }
}

main()