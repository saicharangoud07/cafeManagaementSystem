// toaster.service.ts

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private toastr: ToastrService) {}

  // Display success message
  showSuccess(message: string, title: string = 'Success'): void {
    this.toastr.success(message, title);
  }

  // Display error message
  showError(message: string, title: string = 'Error'): void {
    this.toastr.error(message, title);
  }

  // Display info message
  showInfo(message: string, title: string = 'Info'): void {
    this.toastr.info(message, title);
  }

  // Display warning message
  showWarning(message: string, title: string = 'Warning'): void {
    this.toastr.warning(message, title);
  }
}
