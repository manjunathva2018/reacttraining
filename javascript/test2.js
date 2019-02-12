// CallBack

const ajaxWithCallback = (success,fail) =>{
    setTimeout(
        ()=>success('Call finished'),
        5000
    );
    setTimeout(
        ()=> fail('call failed'),
        4000
    );
}

ajaxWithCallback(
    (data) => console.log('success',data),
    (err) => console.log('Error',err)
);