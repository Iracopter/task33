Array.prototype.pow= function(n){
    for(let i=0; i<this.length; i++){
        let k=this[i];
        for(let j=1; j<n; j++){
            this[i]*=k;
        }
    }
}

let arr=[2,3,4,5];
arr.pow(3);
console.log(arr);

Function.prototype.defer = function(n){
    setTimeout(this, n);
}

function a() { 
    alert("test");
}

a.defer(1000);