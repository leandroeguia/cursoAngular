import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  


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

