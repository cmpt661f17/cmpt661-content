function avg() {
    let sum=0, count = 999999999;
    for(let i=1; i<=999999999; i++) {
        sum += i;
    }
    let avg = sum/count;

    //Return results to the main thread
    postMessage(avg);
}

avg();