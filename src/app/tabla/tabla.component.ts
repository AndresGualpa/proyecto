import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { usurio } from '../interfaces/usuario';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
 lisUsuarios: usurio[] = [
    {usuario: "a01", nombre: 'andres', apellido: "angulo", sexo: 'H'},
    {usuario: "a02", nombre: 'carlos', apellido: "velasco", sexo: 'H'},
    {usuario: "a03", nombre: 'juan', apellido: "perez", sexo: 'H'},
    {usuario: "a04", nombre: 'maycol', apellido: "povea", sexo: 'H'},
    {usuario: "a05", nombre: 'brayan', apellido: "bastidas", sexo: 'F'},
    {usuario: "a06", nombre: 'stiven', apellido: "maila", sexo: 'H'},
  ];
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo'];
  dataSource = new MatTableDataSource(this.lisUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
