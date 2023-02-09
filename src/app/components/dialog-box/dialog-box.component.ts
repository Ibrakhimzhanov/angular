import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
    selector: 'app-dialog-box',
    templateUrl: './dialog-box.component.html',
    styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {
    constructor(
        public dialogRef: MatDialogRef<DialogBoxComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {if (this.data) this.isNew = false;}

    productForm: FormGroup = new FormGroup({
        id: new FormControl(this.data?.id ?? null),
        title: new FormControl( this.data?.title ?? ''),
        price: new FormControl( this.data?.price ?? ''),
        year: new FormControl( this.data?.year ?? ''),
        chip: new FormControl( this.data?.chip ?? ''),
        ssd: new FormControl( this.data?.ssd ?? ''),
        memory: new FormControl( this.data?.memory ?? ''),
        display: new FormControl( this.data?.display ?? '')
    })

    isNew: boolean = true;

    onNoClick(): void {
        this.dialogRef.close(null);
    }


    onSubmit() {
        console.log(this.productForm.value)

        this.data = {
            id: this.productForm.value.id,
            title: this.productForm.value.title,
            price: this.productForm.value.price,
            year: this.productForm.value.year,
            image: "assets/images/macbook.jpeg",
            configure: {
                chip: this.productForm.value.chip,
                ssd: this.productForm.value.ssd,
                memory: this.productForm.value.memory,
                display: this.productForm.value.display,
            },
        }

        this.dialogRef.close(this.data);
    }
}
