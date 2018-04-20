console.log('Browser window.navigator');
console.log(window.navigator);

console.log('Browser window');
console.log(window);

console.log('Iterating Browser window Elements');
Object.keys(window).forEach( key => {
    let type =  typeof window[key];
    console.log(`${key} (${type})`);
});
