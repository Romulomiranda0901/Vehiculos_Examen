import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VehiculoService, Vehiculo } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-edit',
  templateUrl: './vehiculo-edit.component.html',
  styleUrls: ['./vehiculo-edit.component.css'],
  standalone: false
})
export class VehiculoEditComponent implements OnInit {
  vehiculo!: Vehiculo;

  constructor(
    public dialogRef: MatDialogRef<VehiculoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { placa: string },
    private vehiculoService: VehiculoService
  ) {}

  ngOnInit(): void {
    this.loadVehiculo();
  }

  loadVehiculo() {
    this.vehiculoService.getVehiculos().subscribe(vehiculos => {
      this.vehiculo = vehiculos.find(v => v.placa === this.data.placa)!;
    });
  }

  onUpdate() {
    this.vehiculoService.updateVehiculo(this.vehiculo.placa, this.vehiculo).subscribe(() => {
      this.dialogRef.close(true); // Notificar que el vehículo ha sido actualizado
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
