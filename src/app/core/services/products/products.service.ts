import { Injectable } from '@angular/core';
import { Autor } from '../../../autor.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  autores: Autor[] = [
    {
      id: '1',
      image: 'assets/images/jma.jpg',
      nombre: 'josé maría arguedas',
      nacimiento: '1911',
      fallecimiento: '1969',
      descripcion: 'José María Arguedas Altamirano fue un escritor, poeta, traductor, profesor, antropólogo y etnólogo peruano. Fue autor de novelas y cuentos que lo han llevado a ser considerado como uno de los grandes representantes de la literatura en el Perú.'
    },
    {
      id: '2',
      image: 'assets/images/francisco.jpg',
      nombre: 'francisto izquierdo ríos',
      nacimiento: '1910',
      fallecimiento: '1981',
      descripcion: 'Fue uno de los más importantes narradores peruanos del siglo XX. Proveniente de la selva amazónica peruana, recreó en su obra el paisaje y la vida de los hombres de esa región (narrativa regionalista). Su obra literaria es muy nutrida. Su género preferido fue el cuento. El vigor y la sencillez son las cualidades de su prosa. Su estilo tiene una gran fuerza evocativa. Compuso además poesía y ensayos de crítica literaria. Cultivó la literatura para niños, siendo este su mayor logro. Uno de sus cuentos más conocidos es El Bagrecico.'
    },
    {
      id: '3',
      image: 'assets/images/nicomedes.jpg',
      nombre: 'nicómedes de santa cruz',
      nacimiento: '1925',
      fallecimiento: '1992',
      descripcion: 'Es el máximo representante de la negritud en el Perú por ser el primer poeta en tratar el tema negro resaltando la importante e inequívoca aportación del afroperuano en el devenir histórico del Perú. Prueba de ello es la designación del 4 de junio, fecha de su nacimiento, como Día de la Cultura Afroperuana.'
    },
    {
      id: '4',
      image: 'assets/images/ciro-alegria.jpg',
      nombre: 'ciro alegría bazán',
      nacimiento: '1909',
      fallecimiento: '1967',
      descripcion: 'Novelista peruano. Junto con el boliviano Alcides Arguedas y el ecuatoriano Jorge Icaza, es uno de los principales representantes de la novela indigenista, tendencia que convivió con la narrativa realista en las primeras décadas del siglo XX.'
    },
    {
      id: '5',
      image: 'assets/images/mvll.jpg',
      nombre: 'mario vargas llosa',
      nacimiento: '1936',
      fallecimiento: '-',
      descripcion: 'Escritor peruano. Mario Vargas Llosa quedó consagrado como una de las figuras fundamentales del «boom» de la literatura hispanoamericana de los años 60. Su obra rompió con los cauces de la narrativa tradicional al asumir las innovaciones de la narrativa extranjera y adoptar técnicas innovadoras'
    },
    {
      id: '6',
      image: 'assets/images/clorinda.jpg',
      nombre: 'clorinda matto de turner',
      nacimiento: '1852',
      fallecimiento: '1909',
      descripcion: 'Escritora peruana que desarrolló una importante labor cultural y continuó la línea costumbrista de Ricardo Palma; sin embargo, es especialmente recordada como autora de Aves sin nido (1889), novela en que denunció la explotación y las míseras condiciones de vida de los indígenas, anticipándose al posterior desarrollo de la narrativa indigenista hispanoamericana.'
    },
    {
      id: '7',
      image: 'assets/images/abraham.jpg',
      nombre: 'ambraham valdelomar pinto',
      nacimiento: '1888',
      fallecimiento: '1919',
      descripcion: 'Pedro Abraham Valdelomar Pinto, también mencionado como el Conde de Lemos, fue un narrador, poeta, periodista, dibujante, ensayista y dramaturgo peruano. Es considerado uno de los principales cuentistas del Perú, junto con Julio Ramón Ribeyro.'
    }
  ];

  getAllProducts(){
    return this.autores;
  }

  getProduct(id: string){
    return this.autores.find(item => id === item.id);
  }
}
