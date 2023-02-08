import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {delay, Observable} from 'rxjs';
import {User} from "../user";
import {AdminService} from "../services/admin.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {

  constructor(private adminService: AdminService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.adminService.getPersonalList().pipe(
        delay(2000)
    )
  }
}