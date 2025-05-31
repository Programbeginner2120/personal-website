import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {
  /**
   * Downloads a file from a given URL.
   * @param url Path to file (e.g. 'assets/sample.pdf')
   * @param filename Optional custom filename
   */
  downloadFile(url: string, filename?: string): void {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename || url.split('/').pop() || 'download';
    anchor.target = '_blank';
    anchor.rel = 'noopener';
    anchor.click();
  }

  /**
   * Downloads a Blob or base64 file as an attachment
   */
  downloadBlob(blob: Blob, filename: string): void {
    const blobUrl = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(blobUrl); // cleanup
  }
}
