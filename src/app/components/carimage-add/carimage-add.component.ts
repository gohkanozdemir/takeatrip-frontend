import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carimage-add',
  templateUrl: './carimage-add.component.html',
  styleUrls: ['./carimage-add.component.css']
})
export class CarimageAddComponent implements OnInit {
  files: any[] = [];
  constructor() { }
  // @Input() listOfImageFiles : any[] = []; Parent tan deger almak icin
  @Output() saveImage = new EventEmitter<any>(); // Parante deger yollamak icin

  ngOnInit(): void {
  }

  /**
   * on file drop handler
   */
   onFileDropped(event: any) {
    this.prepareFilesList(event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(event: any) {
     //const element  = event.target as HTMLInputElement;
     //  const filesUi = element.files as FileList;
    //   console.log(filesUi);
    //   let fileList: FileList | null = element .files;
    // if (fileList) {
    //   console.log("FileUpload -> files", fileList);
    // }
    this.prepareFilesList(event.target.files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      this.saveImageService();
     // this.listOfImageFiles =this.files;
    }
    this.uploadFilesSimulator(0);
  }
  saveImageService() {
    this.saveImage.emit(this.files)
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}
