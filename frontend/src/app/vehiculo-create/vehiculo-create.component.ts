import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { VehiculoService, Vehiculo } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-create',
  templateUrl: './vehiculo-create.component.html',
  styleUrls: ['./vehiculo-create.component.css'],
  standalone: false
})
export class VehiculoCreateComponent {
  vehiculo: Vehiculo = { placa: '', marca: '', modelo: '', serie: '', color: '' };

  constructor(
    public dialogRef: MatDialogRef<VehiculoCreateComponent>,
    private vehiculoService: VehiculoService
  ) {}

  onCreate() {
    this.vehiculoService.createVehiculo(this.vehiculo).subscribe(() => {
      this.dialogRef.close(true); // Notificar que se creó un nuevo vehículo
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
