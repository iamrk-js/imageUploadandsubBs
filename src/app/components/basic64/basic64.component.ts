import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-basic64',
  templateUrl: './basic64.component.html',
  styleUrls: ['./basic64.component.scss']
})
export class Basic64Component implements OnInit {
  selectedFileName: string = '';
  imgInBase64Format : string = ''
  constructor() { }

  ngOnInit(): void {
  }

  selectFile($event: Event) {
    let file = ($event.target as HTMLInputElement)!.files![0]
    console.log(file);
    this.selectedFileName = file.name;
    this.convertToBase64(file)
  }
  convertToBase64(file: File) {
    const obs$ = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    })
    obs$.subscribe((res) => {
      console.log(res);
      this.imgInBase64Format = res
    })
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    }
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete()
    }
  }

}
