import { AbstractControl,ValidationErrors, ControlContainer} from "@angular/forms";
import { promise } from 'protractor';
import { resolve } from 'url';

export class UniqunessValidator{
    static checkUniquness(control:AbstractControl): Promise<ValidationErrors> | null {
       return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value == "hebaabdou264@gmail.com"){
                    resolve({shouldBeUnique:true})
                }else{
                    resolve(null)
                }    
            },3000)
       })
    }}
