import { Component, Input } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-ngx-skelton',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './ngx-skelton.component.html',
  styleUrl: './ngx-skelton.component.scss',
})
export class NgxSkeltonComponent {
  @Input() shape: any = 'circle';
  @Input() animation: any = 'progress';
  @Input() theme: any = {};
}
