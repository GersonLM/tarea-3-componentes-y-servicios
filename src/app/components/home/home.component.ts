import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/interfaces/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  medicamentos!: Medicamento[]
  medicamentoC!: Medicamento
  constructor(private medicamentoService: MedicamentosService) { }

  ngOnInit(): void {
    this.medicamentos = this.medicamentoService.getMedicamento();
  }

  selectComponentes(medicamento: Medicamento){
    this.medicamentoC = medicamento
  }
}
