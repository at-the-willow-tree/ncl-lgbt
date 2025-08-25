import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavPaths } from '@constants/nav-paths';

@Component({
  selector: 'ncl-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public readonly navPaths = NavPaths;
}
