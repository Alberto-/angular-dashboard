# Angular Dashboard

Angular Dashboard is a JavaScript User Interface built with Angular 1 that offers you different draggable widgets, ready to get data from external web services. [view demo]

## What is a Dashboard?
>A Dashboard provide a real time graphical view of performance and key indicators of an organization towards one or more business processes

Angular Dashboar provide you a responsive UI and allows you to move the widget you want in the page.
All widget can access and read external info from your own web services to show the your real company data.

(Drag and drop works on desktop and tablet devices).

All DOM events you need are cached, and you can customize your own dashboar as you want.

[view demo]

## Current Widget List

  - 4 Percentage widget
  - 4 Tiles widget (Facebook, Twitter, Downloads, Weather)
  - 1 Map widget
  - 1 Line chart widget
  - 2 Donut chart widgets
  - 1 Gauge widget
  - 1 Bar widget


## Installation

```
$ git clone https://github.com/Alberto-/angular-dashboard.git
```

From project root `(
Prerequisites: node
)`


```
$ npm install
```
this will download all npm and bower required package (bower install)


### Run

```
$ npm start
```
This will create an http-server and will also run "gulp compressJS && gulp compressCSS", to create the compressed JS & CSS file of the app.

Angular Dashboard will run on http://localhost:8000


### Tests
```
$ npm test
```

### Version
1.2 

## License

MIT 


[view demo]: <http://alberto-.github.io/angular-dashboard/>
