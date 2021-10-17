import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { delay, map } from 'rxjs/operators'

interface SocialMedia {
  facebook: number
  youtube: number
  whatsapp: number
  'facebook-messenger': number
  instagram: number
}

interface DataResponse {
  labels: string[]
  values: number[]
}

@Injectable({
  providedIn: 'root'
})
export class GraficasService {
  constructor (private readonly http: HttpClient) { }

  getUsuarios (): Observable<SocialMedia> {
    return this.http.get<SocialMedia>('http://localhost:3000/grafica')
  }

  getUsuariosForDonaCharts (): Observable<DataResponse> {
    return this.getUsuarios()
      .pipe(
        delay(1500),
        map(data => {
          const labels = Object.keys(data)
          const values = Object.values(data)
          return { labels, values }
        })
      )
  }
}
