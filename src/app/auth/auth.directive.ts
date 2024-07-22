import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from './auth.service';
import { type Permission } from './auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType  = input.required<Permission>({alias:'appAuth'});
  private authService = inject(AuthService)
  private tempRef = inject(TemplateRef)
  private vcRef = inject(ViewContainerRef)
  constructor() {
    effect(()=>{
        (this.authService.activePermission() === this.userType()) 
        ? this.vcRef.createEmbeddedView(this.tempRef)
        : this.vcRef.clear();
    })
   }
}
