import { Component, OnInit } from '@angular/core';
import { Vehiculo, VehiculoService } from '../vehiculo.service';
import { MatDialog } from '@angular/material/dialog';
import { VehiculoCreateComponent } from '../vehiculo-create/vehiculo-create.component';
import { VehiculoEditComponent } from '../vehiculo-edit/vehiculo-edit.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css'],
  standalone: false
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];

  constructor(
    private vehiculoService: VehiculoService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar // Para mostrar mensajes
  ) {}

  ngOnInit(): void {
    this.loadVehiculos();
  }

  loadVehiculos() {
    this.vehiculoService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(VehiculoCreateComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadVehiculos();
      }
    });
  }

  editVehiculo(placa: string): void {
    const dialogRef = this.dialog.open(VehiculoEditComponent, {
      width: '400px',
      data: { placa: placa }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadVehiculos();
      }
    });
  }

  deleteVehiculo(placa: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este vehículo?')) {
      this.vehiculoService.deleteVehiculo(placa).subscribe(() => {
        this.loadVehiculos(); // Recargar la lista de vehículos
        this.snackBar.open('Vehículo eliminado con éxito', 'Cerrar', {
          duration: 2000
        });
      }, error => {
        this.snackBar.open('Error al eliminar el vehículo', 'Cerrar', {
          duration: 2000
        });
      });
    }
  }
}
