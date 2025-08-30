import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavPaths } from '@constants/nav-paths';

@Component({
  selector: 'ncl-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public readonly navPaths = NavPaths;
  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
