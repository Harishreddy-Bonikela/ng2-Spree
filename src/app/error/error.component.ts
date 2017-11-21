import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inclusive-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})

export class ErrorComponent {
  title = 'Error!!!';
}
