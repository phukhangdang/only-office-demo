import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { IConfig } from '@onlyoffice/document-editor-angular';
import { of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import _cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-only-office',
  templateUrl: './only-office.component.html',
  styleUrls: ['./only-office.component.scss'],
})
export class OnlyOfficeComponent implements OnInit {
  fileReady: boolean = false;

  editorId: string = uuidv4();
  editor: any; // onlyoffice editor instance

  documentServerUrl: string = '';
  config: IConfig = { document: { fileType: '', title: '', url: '' } };

  constructor() {}

  ngOnInit(): void {
    this.getDocument().subscribe((document) => {
      const { documentServerUrl, defaultConfig } = environment.onlyoffice;
      this.documentServerUrl = documentServerUrl;
      this.config = _cloneDeep(defaultConfig);
      this.config.document = {
        key: document.key,
        fileType: document.fileType,
        title: document.title,
        url: document.url,
      };
      this.config.documentType = 'word';
      this.fileReady = true;
    });
  }

  onDocumentReady(event: any) {
    this.editor = window.DocEditor.instances[this.editorId];
  }

  getDocument() {
    return of({
      key: uuidv4(),
      fileType: 'docx',
      title: 'Example Document Title.docx',
      url: 'https://docs.google.com/document/d/1yY5qoIigNqxk2cjofpUrEOiygBMHY1Uf/edit?usp=sharing&ouid=108831479252499335650&rtpof=true&sd=true',
    });
  }
}
