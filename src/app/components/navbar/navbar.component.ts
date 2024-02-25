import { Component } from '@angular/core';
import { NavItem } from '../../shared/models/nav-item.model';
import { NAVBAR_ITEMS } from './navbar.definitions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbarItems: NavItem[] = NAVBAR_ITEMS;
}
