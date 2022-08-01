import { Component, Input, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/interfaces/medicamento';

@Component({
  selector: 'app-modal-componentes-medicamento',
  templateUrl: './modal-componentes-medicamento.component.html',
  styleUrls: ['./modal-componentes-medicamento.component.css']
})
export class ModalComponentesMedicamentoComponent implements OnInit {
  @Input() set medicamento(medi:Medicamento) {
    this.medicamentoRecebido = medi
  }

  medicamentoRecebido: Medicamento = {
    id: 0,
    nombre: '',
    img: '',
    descripcion:'',
    componentes:[''],
    cantidad: 0

  }
  constructor() { }

  ngOnInit(): void {
  }

}
