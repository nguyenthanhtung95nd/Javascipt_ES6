// Promises

let certificatePromise = () => {
    return new Promise((resolve, reject) => {
        // some processing happens and certificate gets the certificate
        certificate = true;
        if(certificate){
            // success
            setTimeout(() =>{
                resolve("Certificate obtained");
            }, 3000);
        } else {
            // failure
            reject("Certificate rejected");
        }
    })
}; 
let jobPromise = () => {
    return new Promise((resolve, reject) => {
        // some processing happens and certificate gets the certificate
        job = true;
        if(job){
            // success
            resolve("Job obtained");
        } else {
            // failure
            reject("Job rejected");
        }
    })
};

// certificatePromise.then((success) => {
//     console.log(success);
//     return jobPromise;
// }).catch((failure) => {
//     console.log(failure);
// }).then((success) => {
//     console.log(success);
// }).catch((failure) => {
//     console.log(failure);
// })

console.log("Rest of the code");

Promise.all([certificatePromise(), jobPromise()]).then((success) => {
    console.log(success);
}).catch((failure) => {
    console.log(failure);
});