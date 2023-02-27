import { Component, OnInit } from '@angular/core';
import { IConfig } from '@onlyoffice/document-editor-angular';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-only-office',
  templateUrl: './only-office.component.html',
  styleUrls: ['./only-office.component.scss'],
})
export class OnlyOfficeComponent implements OnInit {
  editorId: string = 'docxForComments';
  config: IConfig = {
    document: {
      fileType: 'docx',
      key: uuidv4(),
      title: 'Example Document Title.docx',
      url: 'https://docs.google.com/document/d/1yY5qoIigNqxk2cjofpUrEOiygBMHY1Uf/edit?usp=sharing&ouid=108831479252499335650&rtpof=true&sd=true',
    },
    documentType: 'word',
    editorConfig: {
      callbackUrl: 'http://localhost:8081/post-sample',
      customization: {
        autosave: false,
      },
    },
    events: {
      onDownloadAs: this.onSave,
    },
  };

  constructor() {}

  ngOnInit(): void {}

  onBtnSave() {
    const editor = window.DocEditor.instances[this.editorId];
    editor.downloadAs('docx');
  }

  onSave(event: any) {
    console.log(event);
  }
}
