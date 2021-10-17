import { Component, Input, OnInit } from '@angular/core'
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js'
import { Label } from 'ng2-charts'

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: []
})
export class GraficaBarraComponent implements OnInit {
  @Input() barChartLabels: Label[] = []
  @Input() barChartData: ChartDataSets[] = []
  @Input() horizontal: boolean = false

  barChartLegend = true
  barChartOptions: ChartOptions = { responsive: true }
  barChartType: ChartType = 'bar'

  ngOnInit (): void {
    if (this.horizontal) {
      this.barChartType = 'horizontalBar'
    }
  }
}
