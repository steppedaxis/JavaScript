function Singleton() {
    let instance=null
    return 
}
Singleton.prototype.instance="test";
let y1=new Singleton()
let y2=new Singleton()
console.log(Singleton.prototype.instance)
console.log(y1==y2)

console.log()