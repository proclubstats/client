import { ChangeDetectorRef, Component, ComponentFactoryResolver, Inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfigurationService } from '../../../services/configration.service';

@Component({
  selector: 'popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrl: './popup-dialog.component.scss'
})
export class PopupDialogComponent {
  componentParams: any;
  displayFirstComponent: boolean = true;

  @ViewChild('componentContainer', { read: ViewContainerRef, static: true }) componentContainer!: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private configurationService: ConfigurationService,
    public dialogRef: MatDialogRef<PopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.componentParams = { $implicit: data.componentParams };
  }

  ngOnInit(): void {
    this.loadComponent(true);
  }

  loadComponent(isFirstComponent: boolean): void {

    // removing the current component in the view child
    this.componentContainer.remove();

    // setting the first or second component in the view child by the flag
    const componentFactory = this.resolver.resolveComponentFactory(isFirstComponent ? this.data.components[0] : this.data.components[1]);
    const componentRef = this.componentContainer.createComponent(componentFactory);

    // setting the params as input for the component
    Object.keys(this.data.componentParams).forEach((key) => {
      (componentRef.instance as any)[key] = this.data.componentParams[key];
    });
  };

  switchBetweenComponents(displayFirstComponent: boolean) {
    this.loadComponent(displayFirstComponent);

    this.displayFirstComponent = displayFirstComponent;
  }

  closeModal() {
    this.dialogRef.close();
  }

  isViewOnly() {
    return this.configurationService.isViewOnly;
  }
}