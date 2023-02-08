import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {User} from "../../user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements  OnInit{
    personalList!: Observable<User[]>

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.personalList = this.activatedRoute.data.pipe(
            map((data) => data?.['users']))
    }

}
