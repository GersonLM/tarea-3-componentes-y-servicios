import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/interfaces/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';

@Component({
  selector: 'app-medicamentos-agotados',
  templateUrl: './medicamentos-agotados.component.html',
  styleUrls: ['./medicamentos-agotados.component.css']
})
export class MedicamentosAgotadosComponent implements OnInit {

  medicamentoAgotado!: Medicamento[]
  medicamentoC!: Medicamento

  constructor(private medicamentoService: MedicamentosService) { }

  ngOnInit(): void {
    this.medicamentoAgotado = this.medicamentoService.getMedicamentoAgotado();
  }
  selectComponentes(medicamento: Medicamento){
    this.medicamentoC = medicamento
  }

}
