import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  isAdmin: boolean = false;

  constructor(private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.isAdmin = this.route.snapshot.data['isAdmin'];
  }
}
