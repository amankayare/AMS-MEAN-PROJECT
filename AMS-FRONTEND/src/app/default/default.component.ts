import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

 

  ngOnInit(): void {

    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Last 10 Days Attendence Report"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 91, label: "21 AUG 2020 " },
          { y: 85, label: "22 AUG 2020 " },
          { y: 50, label: "23 AUG 2020 " },
          { y: 65, label: "24 AUG 2020 " },
          { y: 95, label: "25 AUG 2020 " },
          { y: 88, label: "26 AUG 2020 " },
          { y: 28, label: "27 AUG 2020 " },
          { y: 94, label: "28 AUG 2020 " },
          { y: 54, label: "29 AUG 2020 " },
          { y: 44, label: "30 AUG 2020 " }

        ]
      }]
    });

    chart.render();


  }

 
}
