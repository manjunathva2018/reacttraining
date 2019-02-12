// Promises

const ajaxWithPromise = () =>{
    return new Promise(
        (resolve,reject)=>{
            setTimeout(
                ()=>resolve('Call finished'),
                5000
            );
            setTimeout(
                ()=> reject('call failed'),
                4000
            );
        }
    );
}

ajaxWithPromise().then(
    (data) => console.log('success',data)
).catch(
    (err) => console.log('Error',err)
);

