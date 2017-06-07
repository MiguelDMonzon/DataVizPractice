'use strict';

var cov_sgvqlv8y5 = function () {
  var path = '/Users/miguelmonzon/Documents/Ciff Ma\u0301ster/Visualizacion II/PECFinalGit/DataVizPractice/src/app/app.spec.js',
      hash = '91c03b3a8309d7eb733aacfd68412570be3b7647',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/miguelmonzon/Documents/Ciff Ma\u0301ster/Visualizacion II/PECFinalGit/DataVizPractice/src/app/app.spec.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 15,
          column: 3
        }
      },
      '1': {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 8,
          column: 6
        }
      },
      '2': {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 7,
          column: 7
        }
      },
      '3': {
        start: {
          line: 4,
          column: 6
        },
        end: {
          line: 6,
          column: 8
        }
      },
      '4': {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 14,
          column: 6
        }
      },
      '5': {
        start: {
          line: 10,
          column: 20
        },
        end: {
          line: 10,
          column: 65
        }
      },
      '6': {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 25
        }
      },
      '7': {
        start: {
          line: 12,
          column: 15
        },
        end: {
          line: 12,
          column: 33
        }
      },
      '8': {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 46
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 1,
            column: 28
          },
          end: {
            line: 1,
            column: 29
          }
        },
        loc: {
          start: {
            line: 1,
            column: 34
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 1
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 2,
            column: 27
          },
          end: {
            line: 2,
            column: 28
          }
        },
        loc: {
          start: {
            line: 2,
            column: 39
          },
          end: {
            line: 8,
            column: 3
          }
        },
        line: 2
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 3,
            column: 28
          },
          end: {
            line: 3,
            column: 29
          }
        },
        loc: {
          start: {
            line: 3,
            column: 34
          },
          end: {
            line: 7,
            column: 5
          }
        },
        line: 3
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 9,
            column: 54
          },
          end: {
            line: 9,
            column: 55
          }
        },
        loc: {
          start: {
            line: 9,
            column: 80
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

++cov_sgvqlv8y5.s[0];
describe('hello component', function () {
  ++cov_sgvqlv8y5.f[0];
  ++cov_sgvqlv8y5.s[1];

  beforeEach(module('app', function ($provide) {
    ++cov_sgvqlv8y5.f[1];
    ++cov_sgvqlv8y5.s[2];

    $provide.factory('app', function () {
      ++cov_sgvqlv8y5.f[2];
      ++cov_sgvqlv8y5.s[3];

      return {
        templateUrl: 'app/template.html'
      };
    });
  }));
  ++cov_sgvqlv8y5.s[4];
  it('should render hello world', angular.mock.inject(function ($rootScope, $compile) {
    ++cov_sgvqlv8y5.f[3];

    var element = (++cov_sgvqlv8y5.s[5], $compile('<app>Loading...</app>')($rootScope));
    ++cov_sgvqlv8y5.s[6];
    $rootScope.$digest();
    var h1 = (++cov_sgvqlv8y5.s[7], element.find('h1'));
    ++cov_sgvqlv8y5.s[8];
    expect(h1.html()).toEqual('Hello World!');
  }));
});