import {AbstractControl, FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class  MyValidators {
    static cancelEmails(control: FormControl): {[key: string]: boolean} {
        if (['m@mail.ru', 'test@mail.ru'].includes(control.value)) {
            return {cancelEmail: true}
        }
        return null as any
    }

    static uniqEmails(control: AbstractControl): Promise<any> | Observable<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                if (control.value === 'async@mail.ru') {
                    resolve({uniqEmail: true})
                } else {
                    resolve(null)
                }
            }, 1000)
        })
    }
}