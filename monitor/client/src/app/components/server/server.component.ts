import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Server } from './../../models/server';
import { WsService } from './../../services/ws.service';
import { ServersService } from './../../services/servers.service';
import * as EventTypes from './../../../assets/common/eventTypes.json';
import { ChartModel } from './../../models/chartModel';
declare var google: any;
declare var SilverJs: any;
var SJ = SilverJs;
var Chart = SilverJs.Chart;
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {
  @Input() server: Server = new Server('NOC', '', '12', 1, '212', 22, [], 3333);
  private agent_id: string = '';
  private cpuChart: any;
  private ramGraph: any;
  private swapMemGraph: any;
  private diskGraph: any;

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
      this.createRamGraph();
      this.createSwapMemGraph();
      this.createDiskGraph();

      this.wsService.attachEvent(EventTypes.OS_UPDATE, this.agent_id, function (data: any) {
        console.log(data);
        self.updateCPUGraph(data);
        self.updateRAMGraph(data);
        self.updateSwapMemGraph(data);
        self.updateDiskGraph(data);
      });
    });
  }

  createCPUGraph() {
    this.cpuChart = new Chart("cpuChartDiv", {
      // width: 300, height: 160,
      border: 0.001,
      bevel: false,
      shadow: true,
      cornerRadius: [12, 12, 12, 12],
      titles: [{ text: "CPU", fontSize: 10 }],
      axesY: [{
        tickEnabled: false,
        tickLength: 1,
        max: 100,
        min: 0,
        interval: 2,
        axisLineThickness: 0.2,
      }],
      axesX: [{
        tickEnabled: false,
        tickLength: 1,
        axisLineThickness: 0.2,
      }]
    });
  }

  createRamGraph() {
    this.ramGraph = new Chart("cpuChartDiv2", {
      // width: 300, height: 160,
      border: 0.001,
      bevel: false,
      shadow: true,
      cornerRadius: [12, 12, 12, 12],
      titles: [{ text: "Physical Memory", fontSize: 10 }],
      axesY: [{
        tickEnabled: false,
        tickLength: 1,
        axisLineThickness: 0.2,
        min:0,
        interval:4,
        valueFormat:"0",
        valueFormatRange: [1, 'KB', 1000000000, 'MB', 1000000, 'GB']
      }],
      axesX: [{
        tickEnabled: false,
        tickLength: 1,
        axisLineThickness: 0.2,
      }]
    });
  }

  createSwapMemGraph() {
    this.swapMemGraph = new Chart("cpuChartDiv3", {
      // width: 300, height: 160,
      border: 0.001,
      bevel: false,
      shadow: true,
      cornerRadius: [12, 12, 12, 12],
      titles: [{ text: "Swap Memory", fontSize: 10 }],
      axesY: [{
        tickEnabled: false,
        tickLength: 1,
        axisLineThickness: 0.2,
        interval: 4,
        valueFormat:"0",
        valueFormatRange: [1, 'KB', 1000000000, 'MB', 1000000, 'GB']
      }],
      axesX: [{
        tickEnabled: false,
        tickLength: 1,
        axisLineThickness: 0.2
        
      }]
    });
  }

  createDiskGraph() {
    this.diskGraph = new Chart("cpuChartDiv4", {
      // width: 300, height: 160,
      border: 0.001,
      bevel: false,
      shadow: true,
      cornerRadius: [12, 12, 12, 12],
      titles: [{ text: "Disk", fontSize: 10 }],
      axesY: [{
        tickEnabled: false,
        tickLength: 1,
        interval: 4,
        axisLineThickness: 0.2,
        valueFormat:"0.00",
        valueFormatRange: [1, 'MB', 1000, 'GB']
      }],
      axesX: [{
        tickEnabled: false,
        tickLength: 1,
        axisLineThickness: 0.2,
      }]
    });
  }

  updateCPUGraph(data: any) {
    var data: any = [{
      plotAs: 'bar',
      tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}%",
      points: [
        { xLabel: 'ST', yValue: data.sys.cpu_st, },
        { xLabel: 'SI', yValue: data.sys.cpu_si },
        { xLabel: 'HI', yValue: data.sys.cpu_hi },
        { xLabel: 'WA', yValue: data.sys.cpu_wa },
        { xLabel: 'ID', yValue: data.sys.cpu_id },
        { xLabel: 'NI', yValue: data.sys.cpu_ni },
        { xLabel: 'SY', yValue: data.sys.cpu_sy },
        { xLabel: 'US', yValue: data.sys.cpu_us },
      ]
    }];

    this.cpuChart.setData(data);
    this.cpuChart.render();
  }

  updateRAMGraph(data: any) {
    var ds: any = [{
      plotAs: 'bar',
      tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}%",
      points: [
        { xLabel: 'BUFFER CACHE', color: "orange", yValue: data.sys.mem_buff_cache },
        { xLabel: 'FREE', color: "green", yValue: data.sys.mem_free },
        { xLabel: 'USED', color: "red", yValue: data.sys.mem_used },
        { xLabel: 'TOTAL', color: "gray", yValue: data.sys.mem_total }
      ]
    }];

    this.ramGraph.axesY[0].max(data.sys.mem_total);
    this.ramGraph.setData(ds);
    this.ramGraph.render();
  }

  updateSwapMemGraph(data: any) {
    var ds: any = [{
      plotAs: 'bar',
      tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}%",
      points: [
        { xLabel: 'AVAILABLE', color: "orange", yValue: data.sys.mem_swap_avail },
        { xLabel: 'FREE', color: "green", yValue: data.sys.mem_swap_free },
        { xLabel: 'USED', color: "red", yValue: data.sys.mem_swap_used },
        { xLabel: 'TOTAL', color: "gray", yValue: data.sys.mem_swap_total },
      ]
    }];

    this.swapMemGraph.axesY[0].max(data.sys.mem_swap_total);
    this.swapMemGraph.setData(ds);
    this.swapMemGraph.render();
  }

  updateDiskGraph(data: any) {
    var ds: any = [{
      plotAs: 'bar',
      tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}%",
      points: [
        { xLabel: 'FREE', color: "green", yValue: data.sys.disk_free },
        { xLabel: 'USED', color: "red", yValue: data.sys.disk_used },
        { xLabel: 'TOTAL', color: "gray", yValue: data.sys.disk_total },
      ]
    }];

    this.diskGraph.axesY[0].max(data.sys.disk_total);
    this.diskGraph.setData(ds);
    this.diskGraph.render();
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
