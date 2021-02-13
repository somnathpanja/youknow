import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Server } from './../../models/server';
import { WsService } from './../../services/ws.service';
import { ServersService } from './../../services/servers.service';
import * as EventTypes from './../../../assets/common/eventTypes.json';
import { Chart } from './../../models/chartModel';
declare var google: any;
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  @Input() server: Server = new Server('NOC', '', '12', 1, '212', 22, [], 3333);
  private agent_id: string = '';
  private cpuChart: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private wsService: WsService, private serversService: ServersService) {
  }

  ngOnInit(): void {




    this.route.queryParams.subscribe((params: any) => {
      this.agent_id = params['agent_id'];
      this.serversService.getServer(this.agent_id).subscribe(server => {
        this.server = server;
      });
    });
  }

  ngAfterViewInit() {
    let self = this;

    google.charts.setOnLoadCallback(() => {
      this.createCPUGraph();

      this.wsService.attachEvent(EventTypes.OS_UPDATE, this.agent_id, function (data: any) {
        console.log(data);
        self.updateCPUGraph(data);

      });
    });
  }

  createCPUGraph(){
    this.cpuChart = new google.visualization.BarChart(document.getElementById('cpuChartDiv'));
      this.cpuChart.__options = {
        title: 'CPU Usage',
        chartArea: { width: '90%' },
        colors: ['#b0120a', '#ffab91'],
        vAxis: {
          minValue: 0,
          maxValue: 100
        },
        hAxis: {
          minValue: 0,
          ticks: []
        },
        legend: { position: "none" }
      };
  }

  updateCPUGraph(data: any) {
    var chartData = google.visualization.arrayToDataTable([
      ["Element", "Density", { role: "style" }],
      ["US", data.sys.cpu_us, "#b87333"],
      ["SY", data.sys.cpu_si, "silver"],
      ["NI", data.sys.cpu_ni, "gold"],
      ["ID", data.sys.cpu_id, "color: #e5e4e2"],
      ["WA", data.sys.cpu_wa, "color: #e5e4e2"],
      ["HI", data.sys.cpu_hi, "color: #e5e4e2"],
      ["SI", data.sys.cpu_si, "color: #e5e4e2"]
    ]);

    var view = new google.visualization.DataView(chartData);

    view.setColumns([0, 1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
      },
      2]);

    this.cpuChart.draw(view, this.cpuChart.__options);
  }

  loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
