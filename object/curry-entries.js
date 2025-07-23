function defaultCurry(obj1) {
  return function(obj2) {
    var res = {};
    for (var key in obj1) {
      res[key] = obj1[key];
    }
    for (var key in obj2) {
      res[key] = obj2[key];
    }
    return res;
  };
}

function mapCurry(func) {
  return function(obj) {
    var res = {};
    for (var key in obj) {
      var entry = [key, obj[key]];
      var result = func(entry); // result is an array like [newKey, newValue]
      var newKey = result[0];
      var newValue = result[1];
      res[newKey] = newValue;
    }
    return res;
  };
}

function reduceCurry(func) {
  return function(obj, val) {
    if (val === undefined) val = 0;
    var entries = Object.entries(obj);
    var rebuilt = Object.fromEntries(entries); // same as the input obj
    for (var key in rebuilt) {
      var entry = [key, rebuilt[key]];
      val = func(val, entry);
    }
    return val;
  };
}

function filterCurry(func) {
  return function(obj) {
    var res = {};
    for (var key in obj) {
      var entry = [key, obj[key]];
      if (func(entry)) {
        res[key] = obj[key];
      }
    }
    return res;
  };
}

function reduceScore(personnel, val) {
  var onlyForceUsers = filterCurry(function(entry) {
    var value = entry[1];
    return value.isForceUser;
  })(personnel);

  return reduceCurry(function(acc, entry) {
    var value = entry[1];
    return acc + value.pilotingScore + value.shootingScore;
  })(onlyForceUsers, val);
}

var filterForce = filterCurry(function(entry) {
  var value = entry[1];
  return value.isForceUser && value.shootingScore >= 80;
});

var mapAverage = mapCurry(function(entry) {
  var key = entry[0];
  var value = entry[1];
  var averageScore = (value.pilotingScore + value.shootingScore) / 2;

  // Copy old object and add averageScore
  var newValue = {};
  for (var prop in value) {
    newValue[prop] = value[prop];
  }
  newValue.averageScore = averageScore;

  return [key, newValue];
});
