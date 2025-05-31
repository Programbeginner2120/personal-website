import { Component, input, output } from '@angular/core';
import { ButtonSize, ButtonType, ButtonVariant } from '../../../interfaces/buttons.interface';
import { AppButtonComponent } from '../app-button/app-button.component';
import { FileDownloadRequest } from '../../../interfaces/file.interface';

@Component({
  selector: 'app-download-button',
  imports: [AppButtonComponent],
  templateUrl: './app-download-button.component.html',
  styleUrl: './app-download-button.component.scss'
})
export class AppDownloadButtonComponent {

  // Input signals for app-download-button component
  readonly fileUri = input.required<string>();
  readonly filename = input('default-file');

  // Input signals for inner app-button component
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');
  outline = input<boolean>(false);
  block = input<boolean>(false);
  icon = input<string>('');
  label = input<string>('');
  customClass = input<string>('');

  // Output signals
  clicked = output<FileDownloadRequest>();

  handleClick() {
    this.clicked.emit({ fileUri: this.fileUri(), filename: this.filename() });
  }

}
