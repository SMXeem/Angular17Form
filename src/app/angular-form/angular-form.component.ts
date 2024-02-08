import { Component } from '@angular/core';
import { User } from '../../assets/user';
import { AngularFormService } from './angular-form.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-form',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  providers: [AngularFormService],
  templateUrl: './angular-form.component.html',
  styleUrl: './angular-form.component.scss'
})
export class AngularFormComponent {
  title = 'AngularFormTutorial';
  topics=['Angular','React','Vue'];
  public langError= true;
  submitted = false;
  userModel=new User('d','s@gmail.cpm',3243452432,'default','evening',true);

  constructor(private _registerService: AngularFormService){}

  validateLan(value: string){
    if(value === 'default'){
      this.langError=true;
    }else{
      this.langError=false;
    }

  }
  onSubmit(){
    this.submitted = true;
    console.log(this.userModel);
    this._registerService.insert(this.userModel).subscribe(
      data => console.log('Success!',data),
      error => console.error('Error!',error)
      )
  }
}