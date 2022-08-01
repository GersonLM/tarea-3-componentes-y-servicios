import { Injectable } from '@angular/core';
import { Medicamento } from '../interfaces/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  private medicamentos: Medicamento[] = [
    {
      id: 1,
      nombre: "Simeticona",
      img: "https://paill.com/images/products/l6hNrzAv3yu1ht5M1P1hjN54uLdJBcDCctY80EeV.png",
      componentes: ["40 mg de simeticina","Sacarosa", "sorbitol (E-420","sacarina sódica (E-954)", "aluminometasilicato de magnesio","aroma de fresa"],
      descripcion: "Agente antiespumante que expulsa gases intestinales",
      cantidad: 10
    },
    {
      id: 2,
      nombre: "Venofer",
      img: "https://tiendacatracha-salud.com/wp-content/uploads/2021/11/546.png",
      componentes: ["20 mg de hierro","agua para inyectables", "hidróxido de sodio"],
      descripcion: "Medicamento que contiene hierro (en forma de hierro sacarosa)",
      cantidad: 5
    },
    {
      id: 3,
      nombre: "Cromatonbic",
      img: "https://i0.wp.com/enlinea.lamodernahuehue.com/wp-content/uploads/2021/08/Cromatombic-Ferro-5-Dosis.png?fit=500%2C500&ssl=1",
      componentes: ["sorbitol 70%","sacarina sódica", "parahidroxibenzoato de metilo", "caramelina"],
      descripcion: "Está indicado en el tratamiento de la anemia ferropénica)",
      cantidad: 20
    },
    {
      id: 4,
      nombre: "Axtar",
      img: "https://tiendacatracha-salud.com/wp-content/uploads/2021/11/960.png",
      componentes: ["Ceftriaxona…0.5 g","agua para inyectables", "hidróxido de sodio"],
      descripcion: "Polvo estéril para inyección ADMINISTRACIÓN INTRAMUSCULAR",
      cantidad: 0
    }
    ,
    {
      id: 5,
      nombre: "Claritromicina",
      img: "https://www.rocnarf.com/wp-content/uploads/2018/07/claritromicina.png",
      componentes: ["Claritromicina 500 mg"],
      descripcion: "para tratamiento de infecciones de la piel.",
      cantidad: 0
    },
    {
      id: 6,
      nombre: "Moxifloxacino",
      img: "https://images.ctfassets.net/pcz6cf5u0j0b/11QtTAqDkm4XKieFhyDlPT/aaa8015c0cede8c8f797e9d6b20fed46/11039415_ALMUS_MOXIFLOXACINO_400MG_C7_TAB.png",
      componentes: ["400 mg de moxifloxacino","agua para inyectables", "hidróxido de sodio"],
      descripcion: "Actúa eliminando bacterias que causan infecciones.",
      cantidad: 0
    },
    
  ]
  constructor() { }

  getMedicamento():Medicamento[]{
    return this.medicamentos.filter(medicamento => medicamento.cantidad > 0);
  }

  getMedicamentoAgotado():Medicamento[]{
    return this.medicamentos.filter( mediAgotado => mediAgotado.cantidad === 0)
  }
}
