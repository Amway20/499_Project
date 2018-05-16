import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import * as XLSX from 'xlsx';
const EXCEL_EXTENSION = '.xlsx';

import { Http } from '@angular/http'

@Injectable()
export class ExcelService {

  constructor(private db:AngularFireDatabase ) { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'report');
    XLSX.writeFile(workbook, excelFileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
