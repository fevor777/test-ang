import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title!: string;
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://test-nodejs-production-ce92.up.railway.app/hello').subscribe((data: any) => {
      this.title = data?.['value'];
    });
  }
}
