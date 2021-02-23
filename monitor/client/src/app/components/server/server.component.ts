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
  private loadAvgChart: any;
  private ramGraph: any;
  private swapMemGraph: any;
  private diskGraph: any;

  private cornerRadius: Array<number> = [8, 8, 8, 8];

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
      this.createLoadAvgGraph();
      this.createRamGraph();
      this.createSwapMemGraph();
      this.createDiskGraph();

      this.wsService.attachEvent(EventTypes.OS_UPDATE, this.agent_id, function (data: any) {
        console.log(data);
        self.updateCPUGraph(data);
        self.updateLoadAvgGraph(data);
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
      borderColor: 'black',
      cornerRadius: this.cornerRadius,
      padding: [0, 3, 0, -5],
      // titles: [{ text: "CPU", fontSize: 12, fontWeight: 'bold',margin: [0, 5, 0, 0] }],
      axesY: [{
        visible: false,
        max: 120,
        min: 0,
        interval: 2,
        axisLineThickness: 0.2,
      }],
      axesX: [{
        tickLength: 1,
        axisLineThickness: 0.2,
        title: "CPU %"
      }]
    });
  }

  createLoadAvgGraph() {
    this.loadAvgChart = new Chart("loadAvgChartDiv", {
      // width: 300, height: 160,
      border: 0.001,
      bevel: false,
      shadow: true,
      borderColor: 'black',
      cornerRadius: this.cornerRadius,
      padding: [0, 0, 0, 0],
      titles: [{ text: "Load Average", fontSize: 12, fontWeight: 'bold', padding: [0, 0, 0, 0] }],
      axesY: [{
        visible: false,
        tickEnabled: false,
        tickLength: 1,
        min: 0,
        interval: 2,
        axisLineThickness: 0.2,
      }],
      axesX: [{
        tickLength: 1,
        axisLineThickness: 0.2,
        tickEnabled: false
      }]
    });
  }

  createRamGraph() {
    this.ramGraph = new Chart("ramChartDiv", {
      // width: 300, height: 160,
      border: 0.001,
      bevel: false,
      shadow: true,
      borderColor: 'black',
      cornerRadius: this.cornerRadius,
      padding: [0, 0, 0, 0],
      titles: [{ text: "Physical Memory", fontSize: 12, fontWeight: 'bold' }],
      axesY: [{
        visible: false,
        min: 0,
        interval: 4,
        valueFormat: "0",
        valueFormatRange: [1, 'KB', 1000, 'MB', 1e+6, 'GB']
      }],
      axesX: [{
        axisLineThickness: 0.2,
        tickLength: 1,
        tickEnabled: false,
      }]
    });
  }

  createSwapMemGraph() {
    this.swapMemGraph = new Chart("swapChartDiv", {
      // width: 300, height: 160,
      border: 0.001,
      bevel: false,
      shadow: true,
      borderColor: 'black',
      cornerRadius: this.cornerRadius,
      padding: [0, 0, 0, 0],
      titles: [{ text: "Swap Memory", fontSize: 12, fontWeight: 'bold' }],
      axesY: [{
        visible: false,
        tickEnabled: false,
        tickLength: 1,
        axisLineThickness: 0.2,
        interval: 5,
        min: 0,
        valueFormat: "0",
        valueFormatRange: [1, 'KB', 1000, 'MB', 1e+6, 'GB']
      }],
      axesX: [{
        tickEnabled: false,
        tickLength: 1,
        axisLineThickness: 0.2
      }]
    });
  }

  createDiskGraph() {
    this.diskGraph = new Chart("diskChartDiv", {
      // width: 300, height: 160,
      border: 0.001,
      bevel: false,
      shadow: true,
      borderColor: 'black',
      cornerRadius: this.cornerRadius,
      padding: [0, 0, 0, 0],
      titles: [{ text: "Disk", fontSize: 12, fontWeight: 'bold' }],
      axesY: [{
        visible: false,
        includeZero: true,
        min: 0,
        axisLineThickness: 0.2,
        valueFormat: "0.00",
        valueFormatRange: [1, 'MB', 1000, 'GB']
      }],
      axesX: [{
        tickEnabled: false,
        tickLength: 1,
        axisLineThickness: 0.2,
        labelFont: { fontSize: 14 }
      }]
    });
  }

  updateCPUGraph(data: any) {
    var data: any = [{
      plotAs: 'bar',
      tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}%",
      labelEnabled: true,
      points: [
        { xLabel: 'ST', yValue: data.sys.cpu_st, },
        //{ xLabel: 'si', yValue: data.sys.cpu_si },
        //{ xLabel: 'hi', yValue: data.sys.cpu_hi },
        { xLabel: 'WA', yValue: data.sys.cpu_wa },
        { xLabel: 'ID', yValue: data.sys.cpu_id },
        // { xLabel: 'ni', yValue: data.sys.cpu_ni },
        { xLabel: 'SY', yValue: data.sys.cpu_sy },
        { xLabel: 'US', yValue: data.sys.cpu_us },
      ]
    }];

    this.cpuChart.setData(data);
    this.cpuChart.render();
  }

  updateLoadAvgGraph(data: any) {
    var ds: any = [{
      plotAs: 'bar',
      tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
      labelText: "{yValue}",
      labelEnabled: true,
      points: [
        { xLabel: 'LoadAvg 1m', color: "orange", yValue: data.sys.load_avg1 },
        { xLabel: 'LoadAvg 5m', color: "green", yValue: data.sys.load_avg5 },
        { xLabel: 'LoadAvg 15m', color: "red", yValue: data.sys.load_avg15 }
      ]
    }];

    let max = Math.max(data.sys.load_avg1, data.sys.load_avg5, data.sys.load_avg15);
    this.loadAvgChart.axesY[0].max(max + 1);
    this.loadAvgChart.setData(ds);
    this.loadAvgChart.render();
  }

  updateRAMGraph(data: any) {
    var ds: any = [{
      plotAs: 'bar',
      tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
      labelEnabled: true,
      points: [
        { xLabel: 'Buffer/Cache', color: "orange", yValue: data.sys.mem_buff_cache },
        { xLabel: 'Free', color: "green", yValue: data.sys.mem_free },
        { xLabel: 'Used', color: "red", yValue: data.sys.mem_used },
        { xLabel: 'Total', color: "gray", yValue: data.sys.mem_total }
      ]
    }];

    // this.ramGraph.axesY[0].max(data.sys.mem_total);
    this.ramGraph.setData(ds);
    this.ramGraph.render();
  }

  updateSwapMemGraph(data: any) {
    var ds: any = [{
      plotAs: 'bar',
      tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
      labelEnabled: true,
      points: [
        { xLabel: 'Available', color: "orange", yValue: data.sys.mem_swap_avail },
        { xLabel: 'Free', color: "green", yValue: data.sys.mem_swap_free },
        { xLabel: 'Used', color: "red", yValue: data.sys.mem_swap_used },
        { xLabel: 'Total', color: "gray", yValue: data.sys.mem_swap_total },
      ]
    }];

    //this.swapMemGraph.axesY[0].max(Math.max(data.sys.mem_swap_total, data.sys.mem_swap_avail));
    this.swapMemGraph.setData(ds);
    this.swapMemGraph.render();
  }

  updateDiskGraph(data: any) {
    var ds: any = [{
      plotAs: 'bar',
      tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
      labelEnabled: true,
      points: [
        { xLabel: 'Free', color: "green", yValue: data.sys.disk_free },
        { xLabel: 'Used', color: "red", yValue: data.sys.disk_used },
        { xLabel: 'Total', color: "gray", yValue: data.sys.disk_total },
      ]
    }];

    //this.diskGraph.axesY[0].max(data.sys.disk_total);
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
