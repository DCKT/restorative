// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Restorative = require("../src/Restorative.bs.js");

function reducer(state, action) {
  return /* record */[/* count */state[/* count */0] + 1 | 0];
}

var match = Restorative.createStore(/* record */[/* count */1], reducer);

var useStoreWithSelector = match[/* useStoreWithSelector */5];

var useStore = match[/* useStore */4];

var dispatch = match[/* dispatch */3];

var subscribeWithSelector = match[/* subscribeWithSelector */2];

var subscribe = match[/* subscribe */1];

var getState = match[/* getState */0];

function Index$Example(Props) {
  React.useEffect((function () {
          console.log(Curry._1(getState, /* () */0));
          Curry._3(subscribe, (function (state) {
                  console.log(state);
                  return /* () */0;
                }), undefined, /* () */0);
          Curry._4(subscribeWithSelector, (function (count) {
                  console.log(count);
                  return /* () */0;
                }), (function (state) {
                  return state[/* count */0];
                }), undefined, /* () */0);
          Curry._4(subscribeWithSelector, (function (count) {
                  console.log(count);
                  return /* () */0;
                }), (function (state) {
                  return String(state[/* count */0] + 1 | 0);
                }), undefined, /* () */0);
          Curry._4(subscribeWithSelector, (function (derivedState) {
                  console.log("Derived", derivedState);
                  return /* () */0;
                }), (function (state) {
                  return /* record */[/* countDividedBy5 */state[/* count */0] / 5 | 0];
                }), Caml_obj.caml_equal, /* () */0);
          Curry._1(dispatch, /* Increment */0);
          return undefined;
        }), ([]));
  var match = Curry._2(useStore, undefined, /* () */0);
  var match$1 = Curry._3(useStoreWithSelector, (function (prim) {
          return JSON.stringify(prim);
        }), undefined, /* () */0);
  var dispatch$1 = match$1[1];
  var jsonState = match$1[0];
  var match$2 = Curry._3(useStoreWithSelector, (function (state) {
          return jsonState + (" " + String(state[/* count */0]));
        }), undefined, /* () */0);
  return React.createElement("div", undefined, React.createElement("div", undefined, "Count: " + String(match[0][/* count */0])), React.createElement("div", undefined, "JSON: " + jsonState), React.createElement("div", undefined, "Changing selector: " + match$2[0]), React.createElement("div", undefined, React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(dispatch$1, /* Increment */0);
                        })
                    }, "Increment")));
}

var Example = /* module */[/* make */Index$Example];

ReactDOMRe.renderToElementWithId(React.createElement(Index$Example, { }), "root");

exports.reducer = reducer;
exports.getState = getState;
exports.subscribe = subscribe;
exports.subscribeWithSelector = subscribeWithSelector;
exports.dispatch = dispatch;
exports.useStore = useStore;
exports.useStoreWithSelector = useStoreWithSelector;
exports.Example = Example;
/* match Not a pure module */