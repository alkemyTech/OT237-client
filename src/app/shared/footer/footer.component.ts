import { OrganizationService } from '../../core/services/organization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  social_media: any[] = [];

  constructor(private organizationSvc: OrganizationService) { }

  ngOnInit(): void {
    this.organizationSvc.get().subscribe({
      next: (res: any) => {
        for(const key in res.data) {
          if(key.startsWith('facebook')) {
            this.social_media.push({
              url: res.data[key],
              icon: 'fa-brands fa-facebook-square fa-2x'
            });
          }else if(key.startsWith('linkedin')) {
            this.social_media.push({
              url: res.data[key],
              icon: 'fa-brands fa-linkedin fa-2x'
            });
          }else if(key.startsWith('instagram')) {
            this.social_media.push({
              url: res.data[key],
              icon: 'fa-brands fa-instagram fa-2x'
            });
          }else if(key.startsWith('twitter')) {
            this.social_media.push({
              url: res.data[key],
              icon: 'fa-brands fa-twitter fa-2x'
            });
          }
        }
      },
      error: (err) => console.log(err)
    });
  }

}
