import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { University } from 'src/app/models/University';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-lista-university',
  templateUrl: './lista-university.component.html',
  styleUrls: ['./lista-university.component.css']
})
export class ListaUniversityComponent implements OnInit {
  dataSource: MatTableDataSource<University> = new MatTableDataSource();

displayedColumns: string[] =
    ['codigo', 'nombre', 'direccion', 'correo'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private uS: UniversityService) {

  }
  
  ngOnInit(): void {
    this.uS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.uS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    });
  }
}
