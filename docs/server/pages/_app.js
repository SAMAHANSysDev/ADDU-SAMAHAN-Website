/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtYWhhbi13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzPzY2ZWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _asyncToGenerator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nclass App extends _react.default.Component {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps));\n    }\n}\nexports[\"default\"] = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxLQUFLLEVBQUUsSUFBSTtDQUNkLEVBQUMsQ0FBQztBQUNISCxtREFBa0Q7SUFDOUNJLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxHQUFHLEVBQUUsV0FBVztRQUNaLE9BQU9DLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDO0tBQ2pDO0NBQ0osRUFBQyxDQUFDO0FBQ0hQLHVEQUFzRDtJQUNsREksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxXQUFXO1FBQ1osT0FBT0MsTUFBTSxDQUFDRSxtQkFBbUIsQ0FBQztLQUNyQztDQUNKLEVBQUMsQ0FBQztBQUNITixrQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLElBQUlRLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQU8sQ0FBQyxDQUFDO0FBQ3JELElBQUlOLE1BQU0sR0FBR00sbUJBQU8sQ0FBQyxnREFBcUIsQ0FBQztBQUMzQyxTQUFTQyxrQkFBa0IsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZFLElBQUk7UUFDQSxJQUFJQyxJQUFJLEdBQUdQLEdBQUcsQ0FBQ0ssR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQztRQUN4QixJQUFJakIsS0FBSyxHQUFHa0IsSUFBSSxDQUFDbEIsS0FBSztLQUN6QixDQUFDLE9BQU9tQixLQUFLLEVBQUU7UUFDWk4sTUFBTSxDQUFDTSxLQUFLLENBQUMsQ0FBQztRQUNkLE9BQU87S0FDVjtJQUNELElBQUlELElBQUksQ0FBQ0UsSUFBSSxFQUFFO1FBQ1hSLE9BQU8sQ0FBQ1osS0FBSyxDQUFDLENBQUM7S0FDbEIsTUFBTTtRQUNIcUIsT0FBTyxDQUFDVCxPQUFPLENBQUNaLEtBQUssQ0FBQyxDQUFDc0IsSUFBSSxDQUFDUixLQUFLLEVBQUVDLE1BQU0sQ0FBQyxDQUFDO0tBQzlDO0NBQ0o7QUFDRCxTQUFTUSxpQkFBaUIsQ0FBQ0MsRUFBRSxFQUFFO0lBQzNCLE9BQU8sV0FBVztRQUNkLElBQUlDLElBQUksR0FBRyxJQUFJLEVBQUVDLElBQUksR0FBR0MsU0FBUztRQUNqQyxPQUFPLElBQUlOLE9BQU8sQ0FBQyxTQUFTVCxPQUFPLEVBQUVDLE1BQU0sRUFBRTtZQUN6QyxJQUFJRixHQUFHLEdBQUdhLEVBQUUsQ0FBQ0ksS0FBSyxDQUFDSCxJQUFJLEVBQUVDLElBQUksQ0FBQztZQUM5QixTQUFTWixLQUFLLENBQUNkLEtBQUssRUFBRTtnQkFDbEJVLGtCQUFrQixDQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxNQUFNLEVBQUVmLEtBQUssQ0FBQyxDQUFDO2FBQzFFO1lBQ0QsU0FBU2UsTUFBTSxDQUFDYyxHQUFHLEVBQUU7Z0JBQ2pCbkIsa0JBQWtCLENBQUNDLEdBQUcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLE9BQU8sRUFBRWMsR0FBRyxDQUFDLENBQUM7YUFDekU7WUFDRGYsS0FBSyxDQUFDZ0IsU0FBUyxDQUFDLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0tBQ04sQ0FBQztDQUNMO0FBQ0QsU0FBU3RCLHNCQUFzQixDQUFDdUIsR0FBRyxFQUFFO0lBQ2pDLE9BQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFVLEdBQUdELEdBQUcsR0FBRztRQUNqQ3pCLE9BQU8sRUFBRXlCLEdBQUc7S0FDZixDQUFDO0NBQ0w7QUFDRCxTQUFTRSxrQkFBa0IsQ0FBQ0MsQ0FBQyxFQUFFO0lBQzNCLE9BQU9DLG1CQUFtQixDQUFDUCxLQUFLLENBQUMsSUFBSSxFQUFFRCxTQUFTLENBQUMsQ0FBQztDQUNyRDtBQUNELFNBQVNRLG1CQUFtQixHQUFHO0lBQzNCQSxtQkFBbUIsR0FBRzs7O0dBR3ZCLENBQUNaLGlCQUFpQixDQUFDLFVBQVUsRUFBRWEsU0FBUyxHQUFHQyxHQUFHLEdBQUcsRUFBRTtRQUM5QyxNQUFNQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRW5DLE1BQU0sQ0FBQyxDQUFDb0MsbUJBQW1CLENBQUNILFNBQVMsRUFBRUMsR0FBRyxDQUFDO1FBQ3ZFLE9BQU87WUFDSEMsU0FBUztTQUNaLENBQUM7S0FDTCxDQUFDLENBQUM7SUFDSCxPQUFPSCxtQkFBbUIsQ0FBQ1AsS0FBSyxDQUFDLElBQUksRUFBRUQsU0FBUyxDQUFDLENBQUM7Q0FDckQ7QUFDRCxNQUFNYSxHQUFHLFNBQVNqQyxNQUFNLENBQUNELE9BQU8sQ0FBQzhCLFNBQVM7SUFDdENLLE1BQU0sR0FBRztRQUNMLE1BQU0sRUFBRUwsU0FBUyxHQUFHRSxTQUFTLEdBQUcsR0FBRyxJQUFJLENBQUNJLEtBQUs7UUFDN0MsT0FBTyxhQUFhLENBQUNuQyxNQUFNLENBQUNELE9BQU8sQ0FBQ3FDLGFBQWEsQ0FBQ1AsU0FBUyxFQUFFdkMsTUFBTSxDQUFDK0MsTUFBTSxDQUFDLEVBQUUsRUFBRU4sU0FBUyxDQUFDLENBQUMsQ0FBRTtLQUMvRjtDQUNKO0FBQ0R2QyxrQkFBZSxHQUFHeUMsR0FBRyxDQUFDO0FBQ3RCQSxHQUFHLENBQUNLLG1CQUFtQixHQUFHWixrQkFBa0IsQ0FBQztBQUM3Q08sR0FBRyxDQUFDTSxlQUFlLEdBQUdiLGtCQUFrQixDQUFDLENBRXpDLGdDQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbWFoYW4td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcz85NjFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXBwSW5pdGlhbFByb3BzXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuQXBwSW5pdGlhbFByb3BzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTmV4dFdlYlZpdGFsc01ldHJpY1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7XG4gICAgfVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfKSB7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9hcHBHZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgX2FwcEdldEluaXRpYWxQcm9wcyA9IC8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi8gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qKHsgQ29tcG9uZW50ICwgY3R4ICB9KSB7XG4gICAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHlpZWxkICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFnZVByb3BzXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIF9hcHBHZXRJbml0aWFsUHJvcHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwYWdlUHJvcHMpKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuQXBwLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fYXBwLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVzb2x2ZSIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiXyIsIl9hcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiQXBwIiwicmVuZGVyIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiYXNzaWduIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/nprogress.css */ \"./styles/nprogress.css\");\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_7__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n/* LOADING PROGRESS BAR */ next_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeStart\", (nprogress__WEBPACK_IMPORTED_MODULE_6___default().start));\nnext_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeError\", (nprogress__WEBPACK_IMPORTED_MODULE_6___default().done));\nnext_router__WEBPACK_IMPORTED_MODULE_5___default().events.on(\"routeChangeComplete\", (nprogress__WEBPACK_IMPORTED_MODULE_6___default().done));\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_8___default()) {\n    render() {\n        const { Component , pageProps , router  } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            httpEquiv: \"X-UA-Compatible\",\n                            content: \"IE=edge\"\n                        }, \"httpEquiv\", false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\Coding\\\\adweb\\\\pages\\\\_app.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1.0\"\n                        }, \"viewport\", false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\Coding\\\\adweb\\\\pages\\\\_app.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.gstatic.com\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\Coding\\\\adweb\\\\pages\\\\_app.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"SAMAHAN\"\n                        }, \"title\", false, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\Coding\\\\adweb\\\\pages\\\\_app.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\Coding\\\\adweb\\\\pages\\\\_app.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.AnimateSharedLayout, {\n                    type: \"crossfade\",\n                    children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, {\n                        ...pageProps,\n                        key: router.route,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\Coding\\\\adweb\\\\pages\\\\_app.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\Coding\\\\adweb\\\\pages\\\\_app.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDRTtBQUNDO0FBQ0M7QUFDQztBQUNrQjtBQUN6QjtBQUUzQiwwQkFBMEIsQ0FDMUJDLDREQUFnQixDQUFDLGtCQUFrQixFQUFFQyx3REFBZSxDQUFDLENBQUM7QUFDdERELDREQUFnQixDQUFDLGtCQUFrQixFQUFFQyx1REFBYyxDQUFDLENBQUM7QUFDckRELDREQUFnQixDQUFDLHFCQUFxQixFQUFFQyx1REFBYyxDQUFDLENBQUM7QUFFeEQsTUFBTU8sS0FBSyxTQUFTTCxpREFBRztJQUNyQk0sTUFBTSxHQUFHO1FBQ1AsTUFBTSxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRUMsTUFBTSxHQUFFLEdBQUcsSUFBSSxDQUFDQyxLQUFLO1FBQ25ELHFCQUNFOzs4QkFDRSw4REFBQ2Qsa0RBQUk7O3NDQUNILDhEQUFDZSxNQUFJOzRCQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzRCQUFDQyxPQUFPLEVBQUMsU0FBUzsyQkFBSyxXQUFXOzs7O2dDQUFHO3NDQUN0RSw4REFBQ0YsTUFBSTs0QkFDSEcsSUFBSSxFQUFDLFVBQVU7NEJBQ2ZELE9BQU8sRUFBQyx1Q0FBdUM7MkJBQzNDLFVBQVU7Ozs7Z0NBQ2Q7c0NBR0YsOERBQUNFLE1BQUk7NEJBQUNDLEdBQUcsRUFBQyxZQUFZOzRCQUFDQyxJQUFJLEVBQUMsMkJBQTJCOzs7OztnQ0FBRztzQ0FHMUQsOERBQUNDLE9BQUs7c0NBQWEsU0FBTzsyQkFBZixPQUFPOzs7O2dDQUFnQjs7Ozs7O3dCQUM3Qjs4QkFDUCw4REFBQ25CLDhEQUFtQjtvQkFBQ29CLElBQUksRUFBQyxXQUFXOzhCQUNuQyxtRUFBQ1osU0FBUzt3QkFBRSxHQUFHQyxTQUFTO3dCQUFFWSxHQUFHLEVBQUVYLE1BQU0sQ0FBQ1ksS0FBSzs7Ozs7OztzQkFBSTs7Ozs7d0JBQzNCOzt3QkFDckIsQ0FDSDtLQUNIO0NBQ0Y7QUFFRCxpRUFBZWhCLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbWFoYW4td2Vic2l0ZS8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL25wcm9ncmVzcy5jc3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgblByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHsgQW5pbWF0ZVNoYXJlZExheW91dCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcblxyXG4vKiBMT0FESU5HIFBST0dSRVNTIEJBUiAqL1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBuUHJvZ3Jlc3Muc3RhcnQpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCBuUHJvZ3Jlc3MuZG9uZSk7XHJcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIG5Qcm9ncmVzcy5kb25lKTtcclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiBrZXk9XCJodHRwRXF1aXZcIiAvPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIlxyXG4gICAgICAgICAgICBrZXk9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIHsvKiBQUkVDT05ORUNUIFRPIEdPT0dMRSBGT05UICovfVxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuXHJcbiAgICAgICAgICB7LyogVElUTEUgQU5EIElDT04gKi99XHJcbiAgICAgICAgICA8dGl0bGUga2V5PVwidGl0bGVcIj5TQU1BSEFOPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEFuaW1hdGVTaGFyZWRMYXlvdXQgdHlwZT1cImNyb3NzZmFkZVwiPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cclxuICAgICAgICA8L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsIlJvdXRlciIsIm5Qcm9ncmVzcyIsIkFuaW1hdGVTaGFyZWRMYXlvdXQiLCJBcHAiLCJldmVudHMiLCJvbiIsInN0YXJ0IiwiZG9uZSIsIk15QXBwIiwicmVuZGVyIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicHJvcHMiLCJtZXRhIiwiaHR0cEVxdWl2IiwiY29udGVudCIsIm5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInRpdGxlIiwidHlwZSIsImtleSIsInJvdXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/nprogress.css":
/*!******************************!*\
  !*** ./styles/nprogress.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();