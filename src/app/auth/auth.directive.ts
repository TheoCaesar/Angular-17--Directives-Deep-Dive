import { Directive, effect, inject, input } from '@angular/core';
import { AuthService } from './auth.service';
import { type Permission } from './auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType  = input.required<Permission>({alias:'appAuth'});
  private authService = inject(AuthService)
  constructor() {
    effect(()=>{
      console.log(
        (this.authService.activePermission() === this.userType()) 
        ? 'show element' 
        : 'dont show squat')
    })
   }

}
