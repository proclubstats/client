import { Component } from '@angular/core';
import { PLAYABLE_POSITIONS_OPTIONS } from '../top-scorers/top-scorers.definitions';
import { ListOption } from '../../shared/models/list-option.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddPlayerDataRequest } from '../../shared/models/addPlayerDataRequest';
import { NotificationService } from '../../services/notification.service';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  signUpFormGroup: FormGroup = new FormGroup({});
  userFile: FormData = new FormData();
  playablePositionOptions: ListOption[] = [];
  socialUser!: SocialUser;
  isLoggedin?: boolean;

  formControls = [
    {
      control: new FormControl('', Validators.required),
      field: 'email',
      displayText: 'Full Name',
      type: 'text-input',
      maxLength: 20,
    },
    {
      control: new FormControl('', Validators.required),
      field: 'password',
      displayText: 'Password',
      type: 'password',
    },
  ];

  constructor(
    private notificationService: NotificationService,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit() {
    this.playablePositionOptions = [...PLAYABLE_POSITIONS_OPTIONS];
    this.loadFormControl();

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
  }

  loadFormControl() {
    let group: any = {};
    this.formControls.forEach((item) => {
      group[item.field] = item.control;
    });

    this.signUpFormGroup = new FormGroup(group);
  }

  async onSubmit() {
    if (this.signUpFormGroup.valid) {
      if (!this.doPasswordsMatch()) {
        this.notificationService.success('Password are not matched');
        return;
      }
      const convertedForm = this.convertFormToModel();

      // Here you can send form data to your backend or perform any necessary action
    } else {
    }
  }

  private doPasswordsMatch(): boolean {
    return (
      this.signUpFormGroup.get('password')?.value ===
      this.signUpFormGroup.get('confirmedPassword')?.value
    );
  }

  // when the user presses on submit, converting the form group into model before passing it to the server
  convertFormToModel(): AddPlayerDataRequest {
    const convertedForm: AddPlayerDataRequest = this.signUpFormGroup.value;

    //if there's no playable positions -> set only the primary position, else add the primary position
    // this.signUpFormGroup.get('playablePositions')!.value == '' ? convertedForm.playablePositions = [convertedForm.position]
    //   : convertedForm.playablePositions.push(convertedForm.position);
    //convertedForm.teamId = this.teamID;

    var jsonForm = JSON.parse(JSON.stringify(convertedForm));

    Object.keys(jsonForm).forEach((key) => {
      this.userFile.append(key, jsonForm[key]);
    });

    return convertedForm;
  }

  isRequiredForm(control: FormControl) {
    if (control.errors) {
      return control.errors['required'];
    }

    return false;
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
