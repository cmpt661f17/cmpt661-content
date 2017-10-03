function delayedPromise(delay, value) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(value);
            console.log(value, 'finished');
        }, delay);
    });
}

// 3 Promises will be invoked and the 1st one that completes execution will be considered
Promise.race([
    delayedPromise(735, 'Ali'),
    delayedPromise(707, 'Fatma'),
    delayedPromise(728, 'Sara')
]).then(function(winner) {
    console.log(winner, 'won');
});
