import { Component, OnInit } from '@angular/core';
import { faTabletAlt, faTools } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.scss' ],
})
export class NavbarComponent implements OnInit {

	tabletIcon = faTabletAlt;
	toolsIcon = faTools;

	constructor() {
	}

	ngOnInit(): void {
	}

}
