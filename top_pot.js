  var Shop = function(branchName, options) {
    this.branchName = branchName;
    this.minCust = options.minCust;
    this.maxCust = options.maxCust;
    this.avgDonut = options.avgDonut;
    this.open = options.open || 700;
    this.close = options.close || 1800;
    this.hoursOpen = this.close - this.open;
    this.hourlyTotals = [];
  }

  Shop.prototype.generateRandom = function(minCust, maxCust) {
    return Math.floor(Math.random() * (maxCust - minCust)) + minCust;
  }

  Shop.prototype.donutsPerHour = function() {
    var customers, donuts;

    customers = this.generateRandom(this.minCust, this.maxCust);
    donuts = customers * this.avgDonut;

    return Math.floor(donuts);
  }

  Shop.prototype.dailyDonuts = function() {
    var total = 0;
    var hourlyDonuts = 0;
    for (i = 0; i < 11; i++) {
      hourlyDonuts = this.donutsPerHour();
      this.hourlyTotals.push(hourlyDonuts)
      total += hourlyDonuts;
    }
    return total;
  }

  Shop.prototype.render = function() {
    var perDay = this.dailyDonuts();
    var elTr = document.getElementById(this.branchName);
    for (var i = 0; i <= 11; i++) {
      var el = document.createElement('td');
      el.textContent = this.hourlyTotals[i];
      elTr.appendChild(el);
    }
    el.textContent = perDay;
    elTr.appendChild(el);
  }

  var downtown = new Shop('branch1', {minCust: 8, maxCust: 43, avgDonut: 4.5});

  var capHill = new Shop('branch2', {minCust: 4, maxCust: 37, avgDonut: 2});

  var slu = new Shop('branch3', {minCust: 9, maxCust:23, avgDonut: 6.33});

  var wedgewood = new Shop('branch4', {minCust: 2, maxCust: 28, avgDonut: 1.25});

  var ballard = new Shop('branch5', {minCust: 8, maxCust: 58, avgDonut: 3.75});

  /*var table = document.getElementById('donut-table');
  table.appendChild(downtown.render());*/

  downtown.render();
  capHill.render();
  slu.render();
  wedgewood.render();
  ballard.render();

  console.log(downtown.donutsPerHour());
  console.log(downtown.dailyDonuts());
