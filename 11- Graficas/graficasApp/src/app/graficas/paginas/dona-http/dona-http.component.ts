import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../servicios/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';


  constructor( private graficasService : GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesDona()
      .subscribe( ({labels,values}) =>{
        this.doughnutChartLabels=labels;
        this.doughnutChartData.push(values);
      } )
     
    
  }

  public colors : Color []= [
    {
      backgroundColor: [
          '#0CA4ED',
          '#0CE9F7', 
          '#00E0AF',
          '#00E0AF',
          '#0CF782',
          '#0CED3D'
    ]
    }
  ]

}
