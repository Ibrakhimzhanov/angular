import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']

})

export class AppComponent implements OnInit{
    form: FormGroup

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl('', [
                Validators.email,
                Validators.required,
                MyValidators.cancelEmails
            ], [MyValidators.uniqEmails]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(6)
            ]),
            address: new FormGroup({
                country: new FormControl('by'),
                city: new FormControl(null, Validators.required)
            }),
            skills: new FormArray([])
        })

    }

    submit() {
        if (this.form.valid) {
        const formData = {...this.form.value}
        console.log("formData: ", formData)
        }
        this.form.reset()
    }

    setCapital() {
        const cityMap: any = {
            ru: 'Москва',
            ua: 'Киев',
            by: 'Минск'
        }
        const city = cityMap[this.form.get('address')?.get('country')?.value]

        this.form.patchValue({address: {city}})
    }

    get userSkillsGroups () {
        return this.form.get('skills') as FormArray
    }

    addSkills() {
         const control = new FormControl('', Validators.required);
          this.userSkillsGroups.push(control)
    }
}
