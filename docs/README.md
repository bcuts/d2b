
<img src = './images/logo.png' style = 'max-width: 500px;display:block;margin:auto;width:100%;'>

## What is it?

D2B is a d3-based reusable charting library.

## Why use it?

There are several reasons to use d2b. Here are some of them:

* It is built using a similar module design as d3, using rollup.js as a bundler.
* Although it uses a similar implementation pattern as d3, it's purpose is to give you a suite of charts to use out of the box.  
* The module design pattern exposes internal d2b and d3 components that can be reconfigured to fit your needs.
* It comes with optional Vue.js components for rendering reactive charts.
* Each d2b component has an extensive API that can be configured.
* Built using the latest major release of d3 >= v4.0.

## Installing

If you use NPM, `npm install d2b`. Otherwise you can download the latest build [here](https://github.com/d2bjs/d2b). CDN coming soon.

## API Reference

You can see the d2b API references [here](http://docs.d2bjs.org).

## Examples

You can try out many d2b examples [here](http://d2bjs.org).

## Future Components

Here is a list of components that I plan to add in the future.

* **d2b.chartSankey** - A sankey chart component that uses the d3.sankey plugin.
* **d2b.chartBubble** - A bubble pack chart component with grouping and plotting for change over time.
* **d2b.chartRadar** - A radar chart component. Might also require a d2b.svgRadar component.
* **d2b.chartGauge** - A convenience gauge chart component. This is currently achievable through the pie chart.
* **d2b.chartScatterMatrix** - A scatter-matrix chart component. Will likely use canvas and render queueing to allow for many more points to be drawn.
* **d2b.chartParallelCoordinates** - A parallel-coordinates chart component. Will likely use canvas and render queueing to allow for many more lines to be drawn.
* **d2b.svgAnnotation** - An axis-chart graph component for adding annotations to an axis chart. Might make use of Susie Lu's d3.annotate plugin.
* **d2b.svgRegion** - An axis-chart graph component for adding regions.
* **d2b.svgGridMarker** An axis-chart graph for adding x, y grid markers.
* **d2b.svgBoxWhisker** - An axis-chart graph component for adding box and whisker plots to an axis chart.
