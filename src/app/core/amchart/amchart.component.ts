import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';


@Component({
  selector: 'app-amchart',
  templateUrl: './amchart.component.html',
  styleUrl: './amchart.component.css'
})
export class AmchartComponent {
  private root!: am5.Root;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) { }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("chartdiv");

      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      let chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 1
      }));

      // Define data
      let data = [{
        country: "USA",
        value: 2025
      }, {
        country: "China",
        value: 1882
      }, {
        country: "Japan",
        value: 1809
      }, {
        country: "Germany",
        value: 1322
      }, {
        country: "UK",
        value: 1122
      }, {
        country: "France",
        value: 1114
      }, {
        country: "India",
        value: 984
      }, {
        country: "Spain",
        value: 711
      }, {
        country: "Netherlands",
        value: 665
      }, {
        country: "South Korea",
        value: 443
      }, {
        country: "Canada",
        value: 441
      }];

      let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineY.set("visible", false);


      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      let xRenderer = am5xy.AxisRendererX.new(root, {
        minGridDistance: 30,
        minorGridEnabled: true
      });

      xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15
      });

      xRenderer.grid.template.setAll({
        location: 1
      })

      // // Create Y-axis
      // let yAxis = chart.yAxes.push(
      //   am5xy.ValueAxis.new(root, {
      //     renderer: am5xy.AxisRendererY.new(root, {})
      //   })
      // );

      // Create X-Axis
      let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      }));

      let yRenderer = am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })

      let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer
      }));

      xAxis.data.setAll(data);

      // Create series
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}"
        })
      }));
      series.data.setAll(data);

      // let series2 = chart.series.push(
      //   am5xy.ColumnSeries.new(root, {
      //     name: "Series",
      //     xAxis: xAxis,
      //     yAxis: yAxis,
      //     valueYField: "value2",
      //     categoryXField: "category"
      //   })
      // );
      // series2.data.setAll(data);

      // Add legend
      // let legend = chart.children.push(am5.Legend.new(root, {}));
      // legend.data.setAll(chart.series.values);

      // // Add cursor
      // chart.set("cursor", am5xy.XYCursor.new(root, {}));

      // this.root = root;

      series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
      // series.columns.template.adapters.add("fill", function (fill, target) {
      //   return chart.get("colors").getIndex(series.columns.indexOf(target));
      // });

      // series.columns.template.adapters.add("stroke", function (stroke, target) {
      //   return chart.get("colors").getIndex(series.columns.indexOf(target));
      // });

      xAxis.data.setAll(data);
      series.data.setAll(data);


      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);
    });
  }

  // ngOnDestroy() {
  //   // Clean up chart when the component is removed
  //   this.browserOnly(() => {
  //     if (this.root) {
  //       this.root.dispose();
  //     }
  //   });
  // }

}
