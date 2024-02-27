/**
 * 
 * @param {Object} options 
 */
function myFunc(options){
    let _options = {
        firstName:"",
        lastName:"",
        age:-1
    }
    console.log(typeof(options));
    if(options!= undefined && typeof(options) == 'object'){
        for(let key in _options){
            if(options.hasOwnProperty(key)){
                _options[key] = options[key];
            }
        }
    }
    console.log(_options);
}
myFunc({firstName: 'nono', lastName: 'yeye', age:'22'});