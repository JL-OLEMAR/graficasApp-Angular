import { Component, OnInit } from '@angular/core'
import { ChartType } from 'chart.js'
import { Color, Label, MultiDataSet } from 'ng2-charts'
import { GraficasService } from '../../services/graficas.service'

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: []
})
export class DonaHttpComponent implements OnInit {
  doughnutChartLabels: Label[] = []
  doughnutChartData: MultiDataSet = []
  doughnutChartType: ChartType = 'doughnut'
  colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63'
      ]
    }
  ]

  constructor (private readonly graficasService: GraficasService) {}

  ngOnInit (): void {
    this.graficasService.getUsuariosForDonaCharts()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels
        this.doughnutChartData.push(values)
      })

    // .subscribe((data) => {
    //   console.log(data)
    // })
  }
}
