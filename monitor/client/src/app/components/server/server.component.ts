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
  @Input() idealCPUInPercent: number = 0;
  @Input() tabSelectedIndex: number = 0;
  private cpuChart: any;
  private loadAvgChart: any;
  private ramGraph: any;
  private swapMemGraph: any;
  private diskGraph: any;
  private cpu4ProcessGraph: any;
  private mem4ProcessGraph: any;
  private _tmpDataMem4ProcessGraph:any;
  private _tmpDataCpu4ProcessGraph:any;

  private cornerRadius: Array<number> = [7, 7, 7, 7];
  private shadowEnabled: boolean = true;
  private borderThickness: number = 0.01;

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

  ngOnDestroy() {
    console.log('DESTROY===>');
    this.wsService.detachEvent(EventTypes.OS_UPDATE, this.agent_id);
  }

  ngAfterViewInit() {
    let self = this;

    google.charts.setOnLoadCallback(() => {
      this.createCPUGraph();
      this.createLoadAvgGraph();
      this.createRamGraph();
      this.createSwapMemGraph();
      this.createDiskGraph();
      this.createCpu4ProcessGraph();
      // this.createMemory4ProcessGraph();

      this.wsService.attachEvent(EventTypes.OS_UPDATE, this.agent_id, function (data: any) {
        console.log(data);
        //Sort by app name
        data.lines.sort(function (a: any, b: any) {
          if (a.app < b.app) { return -1; }
          if (a.app > b.app) { return 1; }
          return 0;
        });

        self.updateCPUGraph(data);
        self.updateLoadAvgGraph(data);
        self.updateRAMGraph(data);
        self.updateSwapMemGraph(data);
        self.updateDiskGraph(data);

        self.updateCPU4ProcessGraph(data);
        self.updateMemory4ProcessGraph(data);
      });
    });
  }

  selectedTabChange(event: any) {
    console.log("Index" + event.index);
    this.tabSelectedIndex = event.index;

    switch (event.index) {
      case 0:
        this.createCpu4ProcessGraph();
        this.updateCPU4ProcessGraph(null);
        break;
      case 1:
        this.createMemory4ProcessGraph();
        this.updateMemory4ProcessGraph(null);
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }

  createMemory4ProcessGraph() {
    if (!this.mem4ProcessGraph) {
      this.mem4ProcessGraph = new Chart("memChart4ProcessDiv", {
        // width: 300, height: 160,
        border: this.borderThickness,
        bevel: false,
        shadow: false,//this.shadowEnabled,
        borderColor: 'black',
        cornerRadius: this.cornerRadius,
        dataPointWidthInPercent: 0.6,
        padding: [0, 3, 0, -5],
        // titles: [{ text: "CPU", fontSize: 12, fontWeight: 'bold',margin: [0, 5, 0, 0] }],
        axesY: [{
          //visible: false,
          //max: 120,
          //min: 0,
          // interval: 2,
          axisLineThickness: 0.2,
          valueFormat: '###.#'
        }],
        axesX: [{
          labelFont: { fontWeight: 'bold', fontSize: 10 },
          axisLineThickness: 0.2
        }]
      });
    }
  }

  createCpu4ProcessGraph() {
    if (!this.cpu4ProcessGraph) {
      this.cpu4ProcessGraph = new Chart("cpuChart4ProcessDiv", {
        // width: 300, height: 160,
        border: this.borderThickness,
        bevel: false,
        shadow: false,//this.shadowEnabled,
        borderColor: 'black',
        cornerRadius: this.cornerRadius,
        dataPointWidthInPercent: 0.6,
        padding: [0, 3, 0, -5],
        // titles: [{ text: "CPU", fontSize: 12, fontWeight: 'bold',margin: [0, 5, 0, 0] }],
        axesY: [{
          //visible: false,
          //max: 120,
          //min: 0,
          // interval: 2,
          axisLineThickness: 0.2,
          valueFormat: '###.#'
        }],
        axesX: [{
          labelFont: { fontWeight: 'bold', fontSize: 10 },
          axisLineThickness: 0.2
        }]
      });
    }
  }

  createCPUGraph() {
    this.cpuChart = new Chart("cpuChartDiv", {
      // width: 300, height: 160,
      border: this.borderThickness,
      bevel: false,
      shadow: this.shadowEnabled,
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
      border: this.borderThickness,
      bevel: false,
      shadow: this.shadowEnabled,
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
      border: this.borderThickness,
      bevel: false,
      shadow: this.shadowEnabled,
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
      border: this.borderThickness,
      bevel: false,
      shadow: this.shadowEnabled,
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
      border: this.borderThickness,
      bevel: false,
      shadow: this.shadowEnabled,
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

  updateCPU4ProcessGraph(data: any) {
    var chartData: any;

    if (data) {
      chartData = [{
        plotAs: 'column',
        tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}%",
        labelEnabled: true,
        labelFont: { fontSize: 9, fontWeight: 'bold' },
        points: []
      }];

      data.lines.forEach((process: any) => {
        chartData[0].points.push({ xLabel: process.app, yValue: process.cpu_percent });
      });

      this._tmpDataCpu4ProcessGraph = chartData;
    } else {
      chartData = this._tmpDataCpu4ProcessGraph;
    }

    if (this.tabSelectedIndex == 0 && this.cpu4ProcessGraph && chartData) {
      this.cpu4ProcessGraph.setData(chartData);
      this.cpu4ProcessGraph.render();
    }
  }

  updateMemory4ProcessGraph(data: any) {
    var chartData: any;
    if (data) {
      chartData = [{
        plotAs: 'column',
        labelEnabled: true,
        labelFont: { fontSize: 9, fontWeight: 'bold' },
        points: []
      }];

      data.lines.forEach((process: any) => {
        chartData[0].points.push({
          xLabel: process.app,
          yValue: process.mem_used_percent,
          tooltipText: `<b style='color:{color};'>Memory</b>: {yValue}%<br><b>RES:</b> ${this.readableKiloBytes(process.mem_res)}<br><b>VIRT:</b>${this.readableKiloBytes(process.mem_virt)}`
        });
      });

      this._tmpDataMem4ProcessGraph = chartData;
    } else {
      chartData = this._tmpDataMem4ProcessGraph;
    }

    if (this.tabSelectedIndex == 1 && this.mem4ProcessGraph && chartData) {
      this.mem4ProcessGraph.setData(chartData);
      this.mem4ProcessGraph.render();
    }
  }

  updateCPUGraph(data: any) {
    var chartData: any = [{
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

    this.cpuChart.setData(chartData);
    this.cpuChart.render();

    this.idealCPUInPercent = data.sys.cpu_id;
  }

  updateLoadAvgGraph(data: any) {
    var ds: any = [{
      plotAs: 'bar',
      tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
      labelText: "{yValue}",
      labelEnabled: true,
      points: [
        { xLabel: '1m', color: "orange", yValue: data.sys.load_avg1 },
        { xLabel: '5m', color: "green", yValue: data.sys.load_avg5 },
        { xLabel: '15m', color: "red", yValue: data.sys.load_avg15 }
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

  readableBytes(bytes: number) {
    var i: number = Math.floor(Math.log(bytes) / Math.log(1024));
    var sizes: Array<string> = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
  }

  readableKiloBytes(kb: number) {
    var bytes: number = kb * 1024;
    var i: number = Math.floor(Math.log(bytes) / Math.log(1024));
    var sizes: Array<string> = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
  }
}


