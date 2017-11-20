import { Observable } from 'rxjs';
import { Observer } from 'rxjs/Observer';

let num=['asdsa','asdasd','df','gh'];
// 1. Using Observable from method.
let source = Observable.from(num);
 
class myObs implements Observer<number>{
    next(val){
        console.log(` success ${ val }`);
    }

    error(e){
        console.log(` error: ${ e }`);
    }

    complete(){
        console.log(` complete`);
    }
}
//alert("ok !!! ");
// Using class to subscribe the Observer.
source.subscribe(new myObs());
//source.subscribe(new myObs());

