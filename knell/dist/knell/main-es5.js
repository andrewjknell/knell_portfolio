(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n\r\n  <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\"\r\n    type=\"text/css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n\r\n  <!-- BOOTSTRAP -->\r\n  <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\"\r\n    integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"\r\n    integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"\r\n    integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\"\r\n    crossorigin=\"anonymous\"></script>\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\r\n    integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n  <script type='text/javascript' src=\"/bootstrap.js\"></script>\r\n  <script type=\"text/javascript\" src=\"/functions.js\"></script>\r\n  <!-- <script>\r\n    $('.carousel').carousel({\r\n      interval: 2000,\r\n      pause: \"false\"\r\n    });\r\n  </script> -->\r\n  <title></title>\r\n</head>\r\n\r\n<body>\r\n  <router-outlet></router-outlet>\r\n</body>\r\n\r\n</html>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"containerr\">\r\n    <div class=\"sidenav\">\r\n        <a [routerLink]=\"\" (click)=\"scrollTo('head')\">\r\n            <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\r\n        </a>\r\n        <a [routerLink]=\"\" (click)=\"scrollTo('projects')\">\r\n            <i class=\"fa fa-code\" aria-hidden=\"true\"></i>\r\n        </a>\r\n        <a [routerLink]=\"\" (click)=\"scrollTo('about')\">\r\n            <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n        </a>\r\n        <a [routerLink]=\"\" (click)=\"scrollTo('contact')\">\r\n            <i class=\"fa fa-telegram\" aria-hidden=\"true\"></i>\r\n        </a>\r\n    </div>\r\n    <div id=\"head\" class=\"header\">\r\n        <h1>hi, i'm andrew.</h1>\r\n        <div class=\"plist\">\r\n            <h4> developer. </h4>\r\n        </div>\r\n        <div class=\"plist\">\r\n            <h4> creator. </h4>\r\n        </div>\r\n        <div class=\"plist\">\r\n            <h4> surfer. </h4>\r\n        </div>\r\n        <div class=\"plist\">\r\n            <h4> explorer. </h4>\r\n        </div>\r\n    </div>\r\n    <div id=\"projects\">\r\n        <h1>Projects</h1>\r\n        <div class=\"projectOne\">\r\n            <div id=\"controlOne\" class=\"carousel\">\r\n                <img id=\"one\" src=\"assets/imgs/1.PNG\" alt=\"\">\r\n                <img id=\"two\" src=\"assets/imgs/2.PNG\" alt=\"\">\r\n                <img id=\"three\" src=\"assets/imgs/3.PNG\" alt=\"\">\r\n            </div>\r\n            <button id=\"left\" (click)=\"goLeft()\">\r\n                <<</button> <button id=\"right\" (click)=\"goRight()\">>>\r\n            </button>\r\n            <div class=\"honorable\">\r\n                <h2>Honorable Mention</h2>\r\n                <li>This web application was build as an easy way to store\r\n                    suggestions and recommendations given for dining, activities, ect.. while also\r\n                    being able to see each item on a map just by adding to your list.\r\n\r\n                </li>\r\n                <li>It was built using Django and Python with a SQLite database. We implemented\r\n                    an API(mapbox) that is used to keep track of your recommendations that are stored\r\n                    on a map so you can see where you are and if there is anything you've saved in\r\n                    your area.\r\n                </li>\r\n\r\n                <div class=\"githubb\">\r\n                    <a href=\"https://github.com/andrewjknell/honorable_mention2\" title=\"view code\" target=\"_blank\">\r\n                        <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                    <h5>view code</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"projectTwo\">\r\n            <div class=\"otp\">\r\n                <h2>On the Spot Recipes</h2>\r\n                <li>This is a fun web application built to help you think of different desserts\r\n                    you can bake while using ingrediants around your own kitchen. You simply check the different\r\n                    ingrediants\r\n                    you wish to use and send!\r\n                </li>\r\n                <li>It was built with an Angular front end with Express.js running the server. It uses RecipePuppy\r\n                    to make API calls and find the different recipes you can create and returing 10 at a time.</li>\r\n                <div class=\"githubb\">\r\n                    <a href=\"https://github.com/andrewjknell/just_a_pinch\" title=\"view code\" target=\"_blank\">\r\n                        <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                    <h5>view code</h5>\r\n                </div>\r\n            </div>\r\n            <div id=\"controlTwo\" class=\"carousel\">\r\n                <img id=\"one\" src=\"assets/imgs/recipe1.PNG\" alt=\"\">\r\n                <img id=\"two\" src=\"assets/imgs/reciple2.PNG\" alt=\"\">\r\n            </div>\r\n            <button id=\"leftRec\" (click)=\"goLeft2()\">\r\n                <<</button> <button id=\"rightRec\" (click)=\"goRight2()\">>>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div id=\"about\">\r\n        <figure class=\"swap-on-hover\">\r\n            <img class=\"swap-on-hover__front-image\" src=\"assets/imgs/camp.jpg\" />\r\n            <img class=\"swap-on-hover__back-image\" src=\"assets/imgs/suuurf.JPG.png\" />\r\n        </figure>\r\n        <div class=\"aboutMe\">\r\n            <h2>About Me</h2>\r\n            <p>\r\n                \r\n            </p>\r\n            <p>When i'm not on my computer working on a project or tinkering\r\n                with some code you will most likely find me out surfing. If I'm not\r\n                in the water you will catch me on my bike dirt jumping or riding the\r\n                trails up behind UCSC. I listen to music everyday of my life and enjoy playing\r\n                guitar, drums and piano. I like solving problems, creating and learning new things\r\n                everyday.\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"contact\">\r\n        <h1></h1>\r\n        <section>\r\n            <ul id=\"services\">\r\n                <li>\r\n                    <div class=\"linkedin\">\r\n                        <a href=\"https://www.linkedin.com/in/andrewjknell\" target=\"_blank\">\r\n                            <i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"instagram\">\r\n                        <a href=\"https://www.instagram.com/sharkk_bait/?hl=en\" target=\"_blank\">\r\n                            <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"github\">\r\n                        <a href=\"https://github.com/andrewjknell\" target=\"_blank\">\r\n                            <i class=\"fa fa-github-square\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"gmail\">\r\n                        <a href=\"mailto:andreww.knell@gmail.com\" target=\"_blank\">\r\n                            <i class=\"fa fa-envelope-square\" aria-hidden=\"true\"></i>\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </section>\r\n    </div>\r\n</div>\r\n<div id=\"footer\">\r\n</div>\r\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<svg viewBox=\"0 0 960 300\">\r\n\t<symbol id=\"s-text\">\r\n\t\t<text text-anchor=\"middle\" x=\"50%\" y=\"100%\">404</text>\r\n\t</symbol>\r\n\r\n\t<g class=\"g-ants\">\r\n\t\t<use xlink:href=\"#s-text\" class=\"text\"></use>\r\n\t\t<use xlink:href=\"#s-text\" class=\"text\"></use>\r\n\t\t<use xlink:href=\"#s-text\" class=\"text\"></use>\r\n\t\t<use xlink:href=\"#s-text\" class=\"text\"></use>\r\n\t\t<use xlink:href=\"#s-text\" class=\"text\"></use>\r\n\t</g>\r\n</svg>\r\n<div class=\"content\">\r\n\t<h1>Page Not Found</h1>\r\n\t<br>\r\n\t<h5>check out my other pages...</h5>\r\n\t<div class=\"links\">\r\n\t\t<a class=\"alinks\" href=\"https://github.com/andrewjknell\" target=\"_blank\">\r\n\t\t\t<i class=\"fa fa-github-square\" aria-hidden=\"true\"></i>\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"links\">\r\n\t\t<a class=\"alinks\" href=\"mailto:andreww.knell@gmail.com\" target=\"_blank\">\r\n\t\t\t<i class=\"fa fa-envelope-square\" aria-hidden=\"true\"></i>\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"links\">\r\n\t\t<a class=\"alinks\" href=\"https://www.instagram.com/sharkk_bait/?hl=en\" target=\"_blank\">\r\n\t\t\t<i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\r\n\t\t</a>\r\n\t</div>\r\n\t<div class=\"links\">\r\n\t\t<a class=\"alinks\" href=\"https://www.linkedin.com/in/andrewjknell\" target=\"_blank\">\r\n\t\t\t<i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i>\r\n\t\t</a>\r\n\t</div>\r\n\t<a [routerLink]=\"['/']\">Back to Home</a>\r\n</div>\r\n\r\n\r\n  ");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
            /* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
            var routes = [
                { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
                { path: '', pathMatch: 'full', redirectTo: '/' },
                { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
                    ],
                    exports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                    ]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html{\r\n\tbackground-color: black;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx1QkFBdUI7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWx7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'knell';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
            /* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/main/main.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/main/main.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n.containerr {\r\n\twidth: 100%;\r\n\tbackground-color: rgb(253, 253, 253);\r\n}\r\n.header{\r\n\ttext-align: center;\r\n\tpadding-top: 15%;\r\n\tpadding-bottom:22%;\r\n\tbackground-color: rgb(214, 236, 255);\r\n\tcolor: rgb(0, 0, 0);\r\n}\r\n.header h1{\r\n\twidth: 98%;\r\n\tfont-weight: bold;\r\n\tfont-size: 5.1rem;\r\n    font-family:\"Arial\", Helvetica, sans-serif;\r\n}\r\n.header h4{\r\n\twidth: 98%;\r\n\tfont-weight: bold;\r\n\tfont-size: 1.6rem;\r\n\tfont-family: \"Arial\", Helvetica, sans-serif;\r\n}\r\n.sidenav{\r\n\ttext-align: center;\r\n\tmargin-top: 3px;\r\n\tpadding: 10px 0 10px 0;\r\n\tposition: fixed;\r\n\tright: 0;\r\n\twidth: 80px;\r\n\tfont-size: 2.7em;\r\n\tborder-radius: 10px;\r\n\tbackground-color: rgb(65, 65, 65);\r\n}\r\n.sidenav i{\r\n\twidth: 100%;\r\n}\r\n#projects{\r\n\tpadding:20px 110px 0 110px;\r\n\tbackground-color: rgb(213, 253, 253);\r\n}\r\n#projects h1{\r\n\tfont-family:\"Arial\", Helvetica, sans-serif;\r\n\tfont-weight: bold;\r\n\tfont-size: 4rem;\r\n\twidth: 20%;\r\n\tmargin-bottom: 25px;\r\n}\r\n#projects h1:hover{\r\n\t-webkit-animation: swing 1s ease;\r\n\tanimation: swing 1s ease;\r\n\t-webkit-animation-iteration-count: 1;\r\n\tanimation-iteration-count: 1;\r\n}\r\n.carousel{\r\n\twidth: 680px;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\theight: 310px;\r\n}\r\n.carousel img{\r\n\twidth: 680px;\r\n\tdisplay: inline-block;\r\n\theight: 310px;\r\n}\r\n#left{\r\n\twidth: 80px;\r\n\theight: 310px;\r\n\t/* margin-top: -315px; */\r\n\tbackground:rgba(187, 241, 255, 0.301);\r\n\tposition: absolute;\r\n\tborder: none;\r\n\toutline: none;\r\n\tfont-weight: bold;\r\n\tfont-size: 1.7rem;\r\n\tdisplay: block;\r\n}\r\n#right{\r\n\tdisplay: block;\r\n\twidth: 80px;\r\n\theight: 310px;\r\n\t/* margin-top: -315px; */\r\n\tmargin-left: 600px;\r\n\tbackground:rgba(187, 241, 255, 0.301);\r\n\tborder: none;\r\n\tposition: absolute;\r\n\toutline: none;\r\n\tfont-weight: bold;\r\n\tfont-size: 1.7rem;\r\n}\r\n#leftRec{\r\n\twidth: 80px;\r\n\theight: 310px;\r\n\tbackground:rgba(187, 241, 255, 0.301);\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tmargin-right: 710px;\r\n\tborder: none;\r\n\toutline: none;\r\n\tfont-weight: bold;\r\n\tfont-size: 1.7rem;\r\n\tdisplay: block;\r\n}\r\n#rightRec{\r\n\tdisplay: block;\r\n\twidth: 80px;\r\n\theight: 310px;\r\n\tmargin-right: 110px;\r\n\tbackground:rgba(187, 241, 255, 0.301);\r\n\tborder: none;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\toutline: none;\r\n\tfont-weight: bold;\r\n\tfont-size: 1.7rem;\r\n}\r\n.projectOne{\r\n\tdisplay: flex;\r\n\tmargin-bottom: 90px;\r\n}\r\n#controlOne{\r\n\tdisplay: inline-block;\r\n}\r\n.honorable{\r\n\tfont-size: 1.1rem;\r\n\tmargin-left: 30px;\r\n\tvertical-align: top;\r\n\tdisplay: inline-block;\r\n\tflex: 1;\r\n}\r\n.githubb{\r\n\tdisplay: flex;\r\n}\r\n.githubb a{\r\n\tcolor: rgb(0, 0, 0);\r\n\tfont-size: 3rem;\r\n\twidth: 50px;\r\n}\r\n.githubb a:hover{\r\n\tcolor: rgb(29, 82, 255);\r\n}\r\n.githubb h5{\r\n\tmargin-top: 33px;\r\n}\r\n#controlTwo{\r\n\tdisplay: inline-block;\r\n}\r\n.projectTwo{\r\n\tdisplay: flex;\r\n\tpadding-bottom: 50px;\r\n}\r\n.otp{\r\n\tmargin-right: 30px;\r\n\tvertical-align: top;\r\n\tdisplay: inline-block;\r\n\tflex: 1;\r\n\tfont-size: 1.1rem;\r\n}\r\n#about{\r\n\tpadding:100px 160px 0 160px;\r\n\tbackground-color: rgb(255, 247, 199);\r\n\tmin-height: 500px;\r\n\tdisplay: flex;\r\n\t/* border-bottom: solid black 1px; */\r\n}\r\n.aboutMe{\r\n\tmargin-left: 320px;\r\n\tfont-size: 1.1rem;\r\n}\r\n.swap-on-hover {\r\n\tposition: relative;\t\r\n\tmax-width: 400px;\r\n  }\r\n.swap-on-hover img {\r\n\tposition: absolute;\r\n\ttop:0;\r\n\tleft:0;\r\n\tborder-radius: 150px;\r\n\toverflow: hidden;\r\n\theight: 290px;\r\n\twidth: 290px;\r\n\t}\r\n.swap-on-hover .swap-on-hover__front-image {\r\n\t  z-index: 9999;\r\n\t  transition: opacity .3s linear;\r\n\t  cursor: pointer;\r\n\t}\r\n.swap-on-hover:hover > .swap-on-hover__front-image{\r\n\t  opacity: 0;\r\n\t}\r\n.plist{\r\n\tmargin-top: 10px;\r\n\twidth: 10%;\r\n\tdisplay: inline-block;\r\n\tmargin-bottom: -10px;\r\n}\r\n.plist h4:hover{\r\n\t-webkit-animation: swing 1s ease;\r\n\tanimation: swing 1s ease;\r\n\t-webkit-animation-iteration-count: 1;\r\n\tanimation-iteration-count: 1;\r\n}\r\n.header h2:hover{\r\n\t-webkit-animation: swing 1s ease;\r\n\tanimation: swing 1s ease;\r\n\t-webkit-animation-iteration-count: 1;\r\n\tanimation-iteration-count: 1;\r\n}\r\n.header h1:hover{\r\n\t-webkit-animation: swing 1s ease;\r\n\tanimation: swing 1s ease;\r\n\t-webkit-animation-iteration-count: 1;\r\n\tanimation-iteration-count: 1;\r\n}\r\n#footer {\r\n    width:100%;\r\n    height:80px;\r\n    background-repeat: repeat;\r\n    background-attachment: scroll;\r\n    background-position: 0% 0%;\r\n\tposition: fixed;\r\n    bottom: 0pt;\r\n    left: 0pt;\r\n    background-image: url(\"https://www.pacifica-montessori.com/wp-content/uploads/2018/03/footerwaves.png\");\r\n}\r\n#contact{\r\n\ttext-align: center;\r\n\tpadding-top: 150px;\r\n\tpadding-bottom: 90px;\r\n\tbackground-color: rgb(196, 255, 229);\r\n}\r\n.linkedin a{\r\n\tcolor: rgb(0, 8, 232);\r\n}\r\n.instagram a{\r\n\tcolor: rgb(255, 67, 34);\r\n}\r\n.github a{\r\n\tcolor: rgb(0, 0, 0);\r\n}\r\n.gmail a{\r\n\tcolor: rgb(255, 255, 255);\r\n}\r\nsection #services {\r\n\ttransform: translatez(0);\r\n  }\r\nsection #services li {\r\n    width: 9%;\r\n\tdisplay:inline-block;\r\n\tlist-style: none;\r\n  }\r\nsection #services li div {\r\n\twidth: 70px;\r\n\theight: 70px;\r\n\tfont-size: 4rem;\r\n\ttext-align: center;\r\n\tline-height: 70px;\r\n\tbackground-color: rgba(255, 255, 255, 0);\r\n\ttransition: all 0.5s ease;\r\n  }\r\nsection #services li div:hover {\r\n\ttransform: rotate(360deg);\r\n\tborder-radius: 100px;\r\n  }\r\n@-webkit-keyframes gradientBG {\r\n\t0% {\r\n\t\tbackground-position: 0% 50%;\r\n\t}\r\n\t50% {\r\n\t\tbackground-position: 100% 50%;\r\n\t}\r\n\t100% {\r\n\t\tbackground-position: 0% 50%;\r\n\t}\r\n}\r\n@keyframes gradientBG {\r\n\t0% {\r\n\t\tbackground-position: 0% 50%;\r\n\t}\r\n\t50% {\r\n\t\tbackground-position: 100% 50%;\r\n\t}\r\n\t100% {\r\n\t\tbackground-position: 0% 50%;\r\n\t}\r\n}\r\n@-webkit-keyframes swing{\r\n    15%\r\n    {\r\n        transform: translateX(5px);\r\n    }\r\n    30%\r\n    {\r\n       transform: translateX(-5px);\r\n    } \r\n    50%\r\n    {\r\n        transform: translateX(3px);\r\n    }\r\n    65%\r\n    {\r\n        transform: translateX(-3px);\r\n    }\r\n    80%\r\n    {\r\n        transform: translateX(2px);\r\n    }\r\n    100%\r\n    {\r\n        transform: translateX(0);\r\n    }\r\n}\r\n@keyframes swing{\r\n    15%\r\n    {\r\n        transform: translateX(5px);\r\n    }\r\n    30%\r\n    {\r\n        transform: translateX(-5px);\r\n    }\r\n    50%\r\n    {\r\n        transform: translateX(3px);\r\n    }\r\n    65%\r\n    {\r\n        transform: translateX(-3px);\r\n    }\r\n    80%\r\n    {\r\n        transform: translateX(2px);\r\n    }\r\n    100%\r\n    {\r\n        transform: translateX(0);\r\n    }\r\n}\r\n@media screen and (max-width: 480px) {\r\n\t.swap-on-hover img {\r\n\t\tleft: 50%;\r\n\t\tmargin-left: -190px;\r\n\t}\r\n\t.plist{\r\n\t\tmargin-left: 0;\r\n\t}\r\n\t.header{\r\n\t\tmargin-left: 0;\r\n\r\n\t}\r\n\t.soon{\r\n\t\tmargin: 0 0 0 0;\r\n\t\ttext-align: center;\r\n\t\tfont-size: 1.3em;\r\n\t}\r\n\t.header h2{\r\n\t\tfont-size: 1.2em;\r\n\t\tmargin-top: -12px;\r\n\t\tfont-family:\"Arial Black\", Helvetica, sans-serif;\r\n\t\r\n\t}\r\n\t.header h1{\r\n\t\tfont-size: 2.5em;\r\n\t\tfont-family:\"Arial Black\", Helvetica, sans-serif;\r\n\t}\r\n\t.header h4{\r\n\t\tfont-size: 1em;\r\n\t\tfont-family: \"Arial Black\", Helvetica, sans-serif;\r\n\t}\r\n  }\r\n@media screen and (max-width: 480px){\r\n    section #services li{\r\n        width: 70px;\r\n        margin-left: 0;\r\n    }\r\n    #services{\r\n      padding: 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsV0FBVztDQUNYLG9DQUFvQztBQUNyQztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsb0NBQW9DO0NBQ3BDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixpQkFBaUI7SUFDZCwwQ0FBMEM7QUFDOUM7QUFDQTtDQUNDLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLDJDQUEyQztBQUM1QztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLFFBQVE7Q0FDUixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixpQ0FBaUM7QUFDbEM7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLG9DQUFvQztBQUNyQztBQUNBO0NBQ0MsMENBQTBDO0NBQzFDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsVUFBVTtDQUNWLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsZ0NBQWdDO0NBQ2hDLHdCQUF3QjtDQUN4QixvQ0FBb0M7Q0FDcEMsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2Q7QUFDQTtDQUNDLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixxQ0FBcUM7Q0FDckMsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixrQkFBa0I7Q0FDbEIscUNBQXFDO0NBQ3JDLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixxQ0FBcUM7Q0FDckMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLE9BQU87QUFDUjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLFdBQVc7QUFDWjtBQUNBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLG9CQUFvQjtBQUNyQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsT0FBTztDQUNQLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsMkJBQTJCO0NBQzNCLG9DQUFvQztDQUNwQyxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLG9DQUFvQztBQUNyQztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtFQUNmO0FBQ0E7Q0FDRCxrQkFBa0I7Q0FDbEIsS0FBSztDQUNMLE1BQU07Q0FDTixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixZQUFZO0NBQ1o7QUFDQTtHQUNFLGFBQWE7R0FDYiw4QkFBOEI7R0FDOUIsZUFBZTtDQUNqQjtBQUVBO0dBQ0UsVUFBVTtDQUNaO0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLHFCQUFxQjtDQUNyQixvQkFBb0I7QUFDckI7QUFDQTtDQUNDLGdDQUFnQztDQUNoQyx3QkFBd0I7Q0FDeEIsb0NBQW9DO0NBQ3BDLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsZ0NBQWdDO0NBQ2hDLHdCQUF3QjtDQUN4QixvQ0FBb0M7Q0FDcEMsNEJBQTRCO0FBQzdCO0FBQ0E7Q0FDQyxnQ0FBZ0M7Q0FDaEMsd0JBQXdCO0NBQ3hCLG9DQUFvQztDQUNwQyw0QkFBNEI7QUFDN0I7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QiwwQkFBMEI7Q0FDN0IsZUFBZTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsdUdBQXVHO0FBQzNHO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0Msd0JBQXdCO0VBQ3ZCO0FBQ0E7SUFDRSxTQUFTO0NBQ1osb0JBQW9CO0NBQ3BCLGdCQUFnQjtFQUNmO0FBQ0E7Q0FDRCxXQUFXO0NBQ1gsWUFBWTtDQUNaLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHdDQUF3QztDQUN4Qyx5QkFBeUI7RUFDeEI7QUFDQTtDQUNELHlCQUF5QjtDQUN6QixvQkFBb0I7RUFDbkI7QUFFRjtDQUNDO0VBQ0MsMkJBQTJCO0NBQzVCO0NBQ0E7RUFDQyw2QkFBNkI7Q0FDOUI7Q0FDQTtFQUNDLDJCQUEyQjtDQUM1QjtBQUNEO0FBVkE7Q0FDQztFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsNkJBQTZCO0NBQzlCO0NBQ0E7RUFDQywyQkFBMkI7Q0FDNUI7QUFDRDtBQUNBO0lBQ0k7O1FBR0ksMEJBQTBCO0lBQzlCO0lBQ0E7O09BR0csMkJBQTJCO0lBQzlCO0lBQ0E7O1FBR0ksMEJBQTBCO0lBQzlCO0lBQ0E7O1FBR0ksMkJBQTJCO0lBQy9CO0lBQ0E7O1FBR0ksMEJBQTBCO0lBQzlCO0lBQ0E7O1FBR0ksd0JBQXdCO0lBQzVCO0FBQ0o7QUFDQTtJQUNJOztRQUdJLDBCQUEwQjtJQUM5QjtJQUNBOztRQUdJLDJCQUEyQjtJQUMvQjtJQUNBOztRQUdJLDBCQUEwQjtJQUM5QjtJQUNBOztRQUdJLDJCQUEyQjtJQUMvQjtJQUNBOztRQUdJLDBCQUEwQjtJQUM5QjtJQUNBOztRQUdJLHdCQUF3QjtJQUM1QjtBQUNKO0FBR0E7Q0FDQztFQUNDLFNBQVM7RUFDVCxtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLGNBQWM7Q0FDZjtDQUNBO0VBQ0MsY0FBYzs7Q0FFZjtDQUNBO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7Q0FDQTtFQUNDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0RBQWdEOztDQUVqRDtDQUNBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtDQUNqRDtDQUNBO0VBQ0MsY0FBYztFQUNkLGlEQUFpRDtDQUNsRDtFQUNDO0FBRUY7SUFDSTtRQUNJLFdBQVc7UUFDWCxjQUFjO0lBQ2xCO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXJyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyNTMsIDI1Myk7XHJcbn1cclxuLmhlYWRlcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZy10b3A6IDE1JTtcclxuXHRwYWRkaW5nLWJvdHRvbToyMiU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjM2LCAyNTUpO1xyXG5cdGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxuLmhlYWRlciBoMXtcclxuXHR3aWR0aDogOTglO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogNS4xcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6XCJBcmlhbFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhlYWRlciBoNHtcclxuXHR3aWR0aDogOTglO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMS42cmVtO1xyXG5cdGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG4uc2lkZW5hdntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG5cdHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHdpZHRoOiA4MHB4O1xyXG5cdGZvbnQtc2l6ZTogMi43ZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA2NSk7XHJcbn1cclxuLnNpZGVuYXYgaXtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3Byb2plY3Rze1xyXG5cdHBhZGRpbmc6MjBweCAxMTBweCAwIDExMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyMTMsIDI1MywgMjUzKTtcclxufVxyXG4jcHJvamVjdHMgaDF7XHJcblx0Zm9udC1mYW1pbHk6XCJBcmlhbFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiA0cmVtO1xyXG5cdHdpZHRoOiAyMCU7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4jcHJvamVjdHMgaDE6aG92ZXJ7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IHN3aW5nIDFzIGVhc2U7XHJcblx0YW5pbWF0aW9uOiBzd2luZyAxcyBlYXNlO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG59XHJcbi5jYXJvdXNlbHtcclxuXHR3aWR0aDogNjgwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdGhlaWdodDogMzEwcHg7XHJcbn1cclxuLmNhcm91c2VsIGltZ3tcclxuXHR3aWR0aDogNjgwcHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGhlaWdodDogMzEwcHg7XHJcbn1cclxuI2xlZnR7XHJcblx0d2lkdGg6IDgwcHg7XHJcblx0aGVpZ2h0OiAzMTBweDtcclxuXHQvKiBtYXJnaW4tdG9wOiAtMzE1cHg7ICovXHJcblx0YmFja2dyb3VuZDpyZ2JhKDE4NywgMjQxLCAyNTUsIDAuMzAxKTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxLjdyZW07XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuI3JpZ2h0e1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiA4MHB4O1xyXG5cdGhlaWdodDogMzEwcHg7XHJcblx0LyogbWFyZ2luLXRvcDogLTMxNXB4OyAqL1xyXG5cdG1hcmdpbi1sZWZ0OiA2MDBweDtcclxuXHRiYWNrZ3JvdW5kOnJnYmEoMTg3LCAyNDEsIDI1NSwgMC4zMDEpO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6IDEuN3JlbTtcclxufVxyXG4jbGVmdFJlY3tcclxuXHR3aWR0aDogODBweDtcclxuXHRoZWlnaHQ6IDMxMHB4O1xyXG5cdGJhY2tncm91bmQ6cmdiYSgxODcsIDI0MSwgMjU1LCAwLjMwMSk7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdG1hcmdpbi1yaWdodDogNzEwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAxLjdyZW07XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuI3JpZ2h0UmVje1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiA4MHB4O1xyXG5cdGhlaWdodDogMzEwcHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMTBweDtcclxuXHRiYWNrZ3JvdW5kOnJnYmEoMTg3LCAyNDEsIDI1NSwgMC4zMDEpO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6IDEuN3JlbTtcclxufVxyXG4ucHJvamVjdE9uZXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbi1ib3R0b206IDkwcHg7XHJcbn1cclxuI2NvbnRyb2xPbmV7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5ob25vcmFibGV7XHJcblx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0bWFyZ2luLWxlZnQ6IDMwcHg7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0ZmxleDogMTtcclxufVxyXG4uZ2l0aHViYntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5naXRodWJiIGF7XHJcblx0Y29sb3I6IHJnYigwLCAwLCAwKTtcclxuXHRmb250LXNpemU6IDNyZW07XHJcblx0d2lkdGg6IDUwcHg7XHJcbn1cclxuLmdpdGh1YmIgYTpob3ZlcntcclxuXHRjb2xvcjogcmdiKDI5LCA4MiwgMjU1KTtcclxufVxyXG4uZ2l0aHViYiBoNXtcclxuXHRtYXJnaW4tdG9wOiAzM3B4O1xyXG59XHJcbiNjb250cm9sVHdve1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ucHJvamVjdFR3b3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcbi5vdHB7XHJcblx0bWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGZsZXg6IDE7XHJcblx0Zm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuI2Fib3V0e1xyXG5cdHBhZGRpbmc6MTAwcHggMTYwcHggMCAxNjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDcsIDE5OSk7XHJcblx0bWluLWhlaWdodDogNTAwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQvKiBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAxcHg7ICovXHJcbn1cclxuLmFib3V0TWV7XHJcblx0bWFyZ2luLWxlZnQ6IDMyMHB4O1xyXG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcbi5zd2FwLW9uLWhvdmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHRcclxuXHRtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICAuc3dhcC1vbi1ob3ZlciBpbWcge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6MDtcclxuXHRsZWZ0OjA7XHJcblx0Ym9yZGVyLXJhZGl1czogMTUwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRoZWlnaHQ6IDI5MHB4O1xyXG5cdHdpZHRoOiAyOTBweDtcclxuXHR9XHJcblx0LnN3YXAtb24taG92ZXIgLnN3YXAtb24taG92ZXJfX2Zyb250LWltYWdlIHtcclxuXHQgIHotaW5kZXg6IDk5OTk7XHJcblx0ICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBsaW5lYXI7XHJcblx0ICBjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdC5zd2FwLW9uLWhvdmVyOmhvdmVyID4gLnN3YXAtb24taG92ZXJfX2Zyb250LWltYWdle1xyXG5cdCAgb3BhY2l0eTogMDtcclxuXHR9IFxyXG4ucGxpc3R7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR3aWR0aDogMTAlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW4tYm90dG9tOiAtMTBweDtcclxufVxyXG4ucGxpc3QgaDQ6aG92ZXJ7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IHN3aW5nIDFzIGVhc2U7XHJcblx0YW5pbWF0aW9uOiBzd2luZyAxcyBlYXNlO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG59XHJcbi5oZWFkZXIgaDI6aG92ZXJ7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IHN3aW5nIDFzIGVhc2U7XHJcblx0YW5pbWF0aW9uOiBzd2luZyAxcyBlYXNlO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG59XHJcbi5oZWFkZXIgaDE6aG92ZXJ7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IHN3aW5nIDFzIGVhc2U7XHJcblx0YW5pbWF0aW9uOiBzd2luZyAxcyBlYXNlO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG59XHJcbiNmb290ZXIge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHQ7XHJcbiAgICBsZWZ0OiAwcHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5wYWNpZmljYS1tb250ZXNzb3JpLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMy9mb290ZXJ3YXZlcy5wbmdcIik7XHJcbn1cclxuI2NvbnRhY3R7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmctdG9wOiAxNTBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogOTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAyNTUsIDIyOSk7XHJcbn1cclxuLmxpbmtlZGluIGF7XHJcblx0Y29sb3I6IHJnYigwLCA4LCAyMzIpO1xyXG59XHJcbi5pbnN0YWdyYW0gYXtcclxuXHRjb2xvcjogcmdiKDI1NSwgNjcsIDM0KTtcclxufVxyXG4uZ2l0aHViIGF7XHJcblx0Y29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG4uZ21haWwgYXtcclxuXHRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbnNlY3Rpb24gI3NlcnZpY2VzIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXooMCk7XHJcbiAgfVxyXG4gIHNlY3Rpb24gI3NlcnZpY2VzIGxpIHtcclxuICAgIHdpZHRoOiA5JTtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBzZWN0aW9uICNzZXJ2aWNlcyBsaSBkaXYge1xyXG5cdHdpZHRoOiA3MHB4O1xyXG5cdGhlaWdodDogNzBweDtcclxuXHRmb250LXNpemU6IDRyZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgc2VjdGlvbiAjc2VydmljZXMgbGkgZGl2OmhvdmVyIHtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIH1cclxuXHJcbkBrZXlmcmFtZXMgZ3JhZGllbnRCRyB7XHJcblx0MCUge1xyXG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG5cdH1cclxuXHQ1MCUge1xyXG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XHJcblx0fVxyXG5cdDEwMCUge1xyXG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xyXG5cdH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3dpbmd7XHJcbiAgICAxNSVcclxuICAgIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgfVxyXG4gICAgMzAlXHJcbiAgICB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbiAgICB9IFxyXG4gICAgNTAlXHJcbiAgICB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxuICAgIH1cclxuICAgIDY1JVxyXG4gICAge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcclxuICAgIH1cclxuICAgIDgwJVxyXG4gICAge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlXHJcbiAgICB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3dpbmd7XHJcbiAgICAxNSVcclxuICAgIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgfVxyXG4gICAgMzAlXHJcbiAgICB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG4gICAgfVxyXG4gICAgNTAlXHJcbiAgICB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxuICAgIH1cclxuICAgIDY1JVxyXG4gICAge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcclxuICAgIH1cclxuICAgIDgwJVxyXG4gICAge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlXHJcbiAgICB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHQuc3dhcC1vbi1ob3ZlciBpbWcge1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC0xOTBweDtcclxuXHR9XHJcblx0LnBsaXN0e1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0fVxyXG5cdC5oZWFkZXJ7XHJcblx0XHRtYXJnaW4tbGVmdDogMDtcclxuXHJcblx0fVxyXG5cdC5zb29ue1xyXG5cdFx0bWFyZ2luOiAwIDAgMCAwO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAxLjNlbTtcclxuXHR9XHJcblx0LmhlYWRlciBoMntcclxuXHRcdGZvbnQtc2l6ZTogMS4yZW07XHJcblx0XHRtYXJnaW4tdG9wOiAtMTJweDtcclxuXHRcdGZvbnQtZmFtaWx5OlwiQXJpYWwgQmxhY2tcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdFxyXG5cdH1cclxuXHQuaGVhZGVyIGgxe1xyXG5cdFx0Zm9udC1zaXplOiAyLjVlbTtcclxuXHRcdGZvbnQtZmFtaWx5OlwiQXJpYWwgQmxhY2tcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdH1cclxuXHQuaGVhZGVyIGg0e1xyXG5cdFx0Zm9udC1zaXplOiAxZW07XHJcblx0XHRmb250LWZhbWlseTogXCJBcmlhbCBCbGFja1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0fVxyXG4gIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuICAgIHNlY3Rpb24gI3NlcnZpY2VzIGxpe1xyXG4gICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgI3NlcnZpY2Vze1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/main/main.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/main/main.component.ts ***!
          \****************************************/
        /*! exports provided: MainComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function () { return MainComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MainComponent = /** @class */ (function () {
                function MainComponent() {
                    this.idx = 0;
                    this.idx2 = 0;
                    this.position = 0;
                    this.position2 = 0;
                }
                MainComponent.prototype.ngOnInit = function () {
                };
                MainComponent.prototype.goLeft = function () {
                    if (this.idx == 0) {
                    }
                    else {
                        this.idx -= 1;
                        this.position -= 680;
                        document.getElementById('controlOne').scroll({
                            top: 0,
                            left: this.position,
                            behavior: "smooth"
                        });
                    }
                };
                MainComponent.prototype.goRight = function () {
                    if (this.idx == 2) {
                    }
                    else {
                        this.idx += 1;
                        this.position += 680;
                        document.getElementById('controlOne').scroll({
                            top: 0,
                            left: this.position,
                            behavior: "smooth"
                        });
                    }
                };
                MainComponent.prototype.goLeft2 = function () {
                    if (this.idx2 == 0) {
                    }
                    else {
                        this.idx2 -= 1;
                        this.position2 -= 680;
                        document.getElementById('controlTwo').scroll({
                            top: 0,
                            left: this.position2,
                            behavior: "smooth"
                        });
                    }
                };
                MainComponent.prototype.goRight2 = function () {
                    if (this.idx2 == 1) {
                    }
                    else {
                        this.idx2 += 1;
                        this.position2 += 680;
                        document.getElementById('controlTwo').scroll({
                            top: 0,
                            left: this.position2,
                            behavior: "smooth"
                        });
                    }
                };
                MainComponent.prototype.scrollTo = function (id) {
                    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
                };
                return MainComponent;
            }());
            MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-main',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")).default]
                })
            ], MainComponent);
            /***/ 
        }),
        /***/ "./src/app/not-found/not-found.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/not-found/not-found.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body, html{\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    font-weight: 800;\r\n    background-color: rgb(223, 238, 251);\r\n  }\r\n  \r\n  body{\r\n    text-align: center;\r\n    background: #000;\r\n    font-family: cursive;\r\n  }\r\n  \r\n  svg {\r\n      display: block;\r\n      font: 10.5em 'Monoton';\r\n      width: 960px;\r\n      height: 300px;\r\n      margin: 0 auto;\r\n  }\r\n  \r\n  .content{\r\n    text-align: center;\r\n  }\r\n  \r\n  .links{\r\n    display: inline-block;\r\n    width: 50%;\r\n    font-size: 4.5em;\r\n  }\r\n  \r\n  .alinks{\r\n    border: none;\r\n    padding: 0;\r\n    margin: 0 0 0 0;\r\n  }\r\n  \r\n  h1{\r\n    text-align: center;\r\n    font: 2em 'Roboto', sans-serif;\r\n    font-weight: 900;\r\n    color: #000000;\r\n    opacity: .6;\r\n  }\r\n  \r\n  a{\r\n     display: inline-block;\r\n     text-transform: uppercase;\r\n     font: 1em 'Roboto';\r\n     font-weight: 500;\r\n     border: 1.5px solid #000000;\r\n     border-radius: 4px;\r\n     color: #000000;\r\n     margin-top: 10%;\r\n     padding: 8px 14px;\r\n     text-decoration: none;\r\n     opacity: .6;\r\n     margin-bottom: 2%;\r\n  }\r\n  \r\n  .text {\r\n      fill: none;\r\n      stroke: rgb(255, 255, 255);\r\n      stroke-dasharray: 8% 29%;\r\n      stroke-width: 5px;\r\n      stroke-dashoffset: 1%;\r\n      -webkit-animation: stroke-offset 5.5s infinite linear;\r\n              animation: stroke-offset 5.5s infinite linear;\r\n  }\r\n  \r\n  .text:nth-child(1){\r\n      stroke: #1c334d;\r\n      -webkit-animation-delay: -1;\r\n              animation-delay: -1;\r\n  }\r\n  \r\n  .text:nth-child(2){\r\n      stroke: #315b2c;\r\n      -webkit-animation-delay: -2s;\r\n              animation-delay: -2s;\r\n  }\r\n  \r\n  .text:nth-child(3){\r\n      stroke: #2f8f7f;\r\n      -webkit-animation-delay: -3s;\r\n              animation-delay: -3s;\r\n  }\r\n  \r\n  .text:nth-child(4){\r\n      stroke: #2f8f7f;\r\n      -webkit-animation-delay: -4s;\r\n              animation-delay: -4s;\r\n  }\r\n  \r\n  .text:nth-child(5){\r\n      stroke: #17adda;\r\n      -webkit-animation-delay: -5s;\r\n              animation-delay: -5s;\r\n  }\r\n  \r\n  @-webkit-keyframes stroke-offset{\r\n      100% {\r\n      stroke-dashoffset: -30%;\r\n    }\r\n  }\r\n  \r\n  @keyframes stroke-offset{\r\n      100% {\r\n      stroke-dashoffset: -30%;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 480px){\r\n    svg{\r\n        width: 400px;\r\n        font-size: 17em;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7RUFDdEI7O0VBRUE7TUFDSSxjQUFjO01BQ2Qsc0JBQXNCO01BQ3RCLFlBQVk7TUFDWixhQUFhO01BQ2IsY0FBYztFQUNsQjs7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0VBQ2pCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7RUFDYjs7RUFFQTtLQUNHLHFCQUFxQjtLQUNyQix5QkFBeUI7S0FDekIsa0JBQWtCO0tBQ2xCLGdCQUFnQjtLQUNoQiwyQkFBMkI7S0FDM0Isa0JBQWtCO0tBQ2xCLGNBQWM7S0FDZCxlQUFlO0tBQ2YsaUJBQWlCO0tBQ2pCLHFCQUFxQjtLQUNyQixXQUFXO0tBQ1gsaUJBQWlCO0VBQ3BCOztFQUVBO01BQ0ksVUFBVTtNQUNWLDBCQUEwQjtNQUMxQix3QkFBd0I7TUFDeEIsaUJBQWlCO01BQ2pCLHFCQUFxQjtNQUNyQixxREFBNkM7Y0FBN0MsNkNBQTZDO0VBQ2pEOztFQUVBO01BQ0ksZUFBZTtNQUNmLDJCQUFtQjtjQUFuQixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxlQUFlO01BQ2YsNEJBQW9CO2NBQXBCLG9CQUFvQjtFQUN4Qjs7RUFFQTtNQUNJLGVBQWU7TUFDZiw0QkFBb0I7Y0FBcEIsb0JBQW9CO0VBQ3hCOztFQUVBO01BQ0ksZUFBZTtNQUNmLDRCQUFvQjtjQUFwQixvQkFBb0I7RUFDeEI7O0VBRUE7TUFDSSxlQUFlO01BQ2YsNEJBQW9CO2NBQXBCLG9CQUFvQjtFQUN4Qjs7RUFFQTtNQUNJO01BQ0EsdUJBQXVCO0lBQ3pCO0VBQ0Y7O0VBSkE7TUFDSTtNQUNBLHVCQUF1QjtJQUN6QjtFQUNGOztFQUVBO0lBQ0U7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgaHRtbHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMzgsIDI1MSk7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIHN2ZyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250OiAxMC41ZW0gJ01vbm90b24nO1xyXG4gICAgICB3aWR0aDogOTYwcHg7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICAuY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmxpbmtze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogNC41ZW07XHJcbiAgfVxyXG4gIC5hbGlua3N7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gIH1cclxuICBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQ6IDJlbSAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG9wYWNpdHk6IC42O1xyXG4gIH1cclxuICBcclxuICBhe1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgIGZvbnQ6IDFlbSAnUm9ib3RvJztcclxuICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgIGJvcmRlcjogMS41cHggc29saWQgIzAwMDAwMDtcclxuICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICBvcGFjaXR5OiAuNjtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQge1xyXG4gICAgICBmaWxsOiBub25lO1xyXG4gICAgICBzdHJva2U6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOCUgMjklO1xyXG4gICAgICBzdHJva2Utd2lkdGg6IDVweDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDElO1xyXG4gICAgICBhbmltYXRpb246IHN0cm9rZS1vZmZzZXQgNS41cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0Om50aC1jaGlsZCgxKXtcclxuICAgICAgc3Ryb2tlOiAjMWMzMzRkO1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0xO1xyXG4gIH1cclxuICBcclxuICAudGV4dDpudGgtY2hpbGQoMil7XHJcbiAgICAgIHN0cm9rZTogIzMxNWIyYztcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0Om50aC1jaGlsZCgzKXtcclxuICAgICAgc3Ryb2tlOiAjMmY4ZjdmO1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0zcztcclxuICB9XHJcbiAgXHJcbiAgLnRleHQ6bnRoLWNoaWxkKDQpe1xyXG4gICAgICBzdHJva2U6ICMyZjhmN2Y7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTRzO1xyXG4gIH1cclxuICBcclxuICAudGV4dDpudGgtY2hpbGQoNSl7XHJcbiAgICAgIHN0cm9rZTogIzE3YWRkYTtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtNXM7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3Ryb2tlLW9mZnNldHtcclxuICAgICAgMTAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xyXG4gICAgc3Zne1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE3ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/not-found/not-found.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/not-found/not-found.component.ts ***!
          \**************************************************/
        /*! exports provided: NotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () { return NotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotFoundComponent = /** @class */ (function () {
                function NotFoundComponent() {
                }
                NotFoundComponent.prototype.ngOnInit = function () {
                };
                return NotFoundComponent;
            }());
            NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-not-found',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")).default]
                })
            ], NotFoundComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\andre\OneDrive\Projects\Portfolio\knell\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map