function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movie-movie-module"], {
  /***/
  "./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js ***!
    \*******************************************************************************************************/

  /*! exports provided: CarouselComponent, IvyCarouselModule */

  /***/
  function node_modulesAngularResponsiveCarousel__ivy_ngcc__Fesm2015AngularResponsiveCarouselJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IvyCarouselModule", function () {
      return IvyCarouselModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CarouselComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.counter);
      }
    }

    function CarouselComponent_ng_template_5_div_0_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
      }

      if (rf & 2) {
        var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("object-fit", ctx_r8.objectFit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.getImage(i_r6)["image"]["path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CarouselComponent_ng_template_5_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ng_template_5_div_0_img_1_Template, 1, 3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r7.getCellWidth() + "px")("border-radius", ctx_r7.borderRadius + "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getImage(i_r6) && ctx_r7.getImage(i_r6)["image"]);
      }
    }

    function CarouselComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_ng_template_5_div_0_Template, 2, 5, "div", 8);
      }

      if (rf & 2) {
        var i_r6 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 < ctx_r2.cellLimit);
      }
    }

    function CarouselComponent_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
      }

      if (rf & 2) {
        var i_r13 = ctx.index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-dot-active", i_r13 === ctx_r11.activeDotIndex);
      }
    }

    function CarouselComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_div_6_div_1_Template, 1, 2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.dotsArr);
      }
    }

    function CarouselComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.prev();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_7_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrows-outside", ctx_r4.arrowsOutside)("carousel-dark-arrows", ctx_r4.arrowsTheme === "dark");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isPrevArrowDisabled());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-arrow-disabled", ctx_r4.isNextArrowDisabled());
      }
    }

    var _c0 = ["*"];

    var Touches = /*#__PURE__*/function () {
      function Touches(properties) {
        var _this = this;

        _classCallCheck(this, Touches);

        this.eventType = undefined;
        this.handlers = {};
        this.startX = 0;
        this.startY = 0;
        this.lastTap = 0;
        this.doubleTapMinTimeout = 300;
        this.tapMinTimeout = 200;
        this.touchstartTime = 0;
        this.i = 0;
        this.isMousedown = false;
        this._touchListeners = {
          "touchstart": "handleTouchstart",
          "touchmove": "handleTouchmove",
          "touchend": "handleTouchend"
        };
        this._mouseListeners = {
          "mousedown": "handleMousedown",
          "mousemove": "handleMousemove",
          "mouseup": "handleMouseup",
          "wheel": "handleWheel"
        };
        this._otherListeners = {
          "resize": "handleResize"
        };
        /*
         * Listeners
         */

        /* Touchstart */

        this.handleTouchstart = function (event) {
          _this.elementPosition = _this.getElementPosition();
          _this.touchstartTime = new Date().getTime();

          if (_this.eventType === undefined) {
            _this.getTouchstartPosition(event);
          }

          _this.runHandler("touchstart", event);
        };
        /* Touchmove */


        this.handleTouchmove = function (event) {
          var touches = event.touches; // Pan

          if (_this.detectPan(touches)) {
            _this.runHandler("pan", event);
          } // Pinch


          if (_this.detectPinch(event)) {
            _this.runHandler("pinch", event);
          } // Linear swipe


          switch (_this.detectLinearSwipe(event)) {
            case "horizontal-swipe":
              event.swipeType = "horizontal-swipe";

              _this.runHandler("horizontal-swipe", event);

              break;

            case "vertical-swipe":
              event.swipeType = "vertical-swipe";

              _this.runHandler("vertical-swipe", event);

              break;
          } // Linear swipe


          if (_this.detectLinearSwipe(event) || _this.eventType === 'horizontal-swipe' || _this.eventType === 'vertical-swipe') {
            _this.handleLinearSwipe(event);
          }
        };
        /* Touchend */


        this.handleTouchend = function (event) {
          var touches = event.touches; // Double Tap

          if (_this.detectDoubleTap()) {
            _this.runHandler("double-tap", event);
          } // Tap


          _this.detectTap();

          _this.runHandler("touchend", event);

          _this.eventType = 'touchend';

          if (touches && touches.length === 0) {
            _this.eventType = undefined;
            _this.i = 0;
          }
        };
        /* Mousedown */


        this.handleMousedown = function (event) {
          _this.isMousedown = true;
          _this.elementPosition = _this.getElementPosition();
          _this.touchstartTime = new Date().getTime();

          if (_this.eventType === undefined) {
            _this.getMousedownPosition(event);
          }

          _this.runHandler("mousedown", event);
        };
        /* Mousemove */


        this.handleMousemove = function (event) {
          //event.preventDefault();
          if (!_this.isMousedown) {
            return;
          } // Pan


          _this.runHandler("pan", event); // Linear swipe


          switch (_this.detectLinearSwipe(event)) {
            case "horizontal-swipe":
              event.swipeType = "horizontal-swipe";

              _this.runHandler("horizontal-swipe", event);

              break;

            case "vertical-swipe":
              event.swipeType = "vertical-swipe";

              _this.runHandler("vertical-swipe", event);

              break;
          } // Linear swipe


          if (_this.detectLinearSwipe(event) || _this.eventType === 'horizontal-swipe' || _this.eventType === 'vertical-swipe') {
            _this.handleLinearSwipe(event);
          }
        };
        /* Mouseup */


        this.handleMouseup = function (event) {
          // Tap
          _this.detectTap();

          _this.isMousedown = false;

          _this.runHandler("mouseup", event);

          _this.eventType = undefined;
          _this.i = 0;
        };
        /* Wheel */


        this.handleWheel = function (event) {
          _this.runHandler("wheel", event);
        };
        /* Resize */


        this.handleResize = function (event) {
          _this.runHandler("resize", event);
        };

        this.properties = properties;
        this.element = this.properties.element;
        this.elementPosition = this.getElementPosition();
        this.toggleEventListeners('addEventListener');
      }

      _createClass(Touches, [{
        key: "touchListeners",
        get: function get() {
          return this.properties.touchListeners ? this.properties.touchListeners : this._touchListeners;
        }
      }, {
        key: "mouseListeners",
        get: function get() {
          return this.properties.mouseListeners ? this.properties.mouseListeners : this._mouseListeners;
        }
      }, {
        key: "otherListeners",
        get: function get() {
          return this.properties.otherListeners ? this.properties.otherListeners : this._otherListeners;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.toggleEventListeners('removeEventListener');
        }
      }, {
        key: "toggleEventListeners",
        value: function toggleEventListeners(action) {
          var listeners;

          if (this.properties.listeners === 'mouse and touch') {
            listeners = Object.assign(this.touchListeners, this.mouseListeners);
          } else {
            listeners = this.detectTouchScreen() ? this.touchListeners : this.mouseListeners;
          }

          if (this.properties.resize) {
            listeners = Object.assign(listeners, this.otherListeners);
          }

          for (var listener in listeners) {
            var handler = listeners[listener]; // Window

            if (listener === "resize") {
              if (action === 'addEventListener') {
                window.addEventListener(listener, this[handler], false);
              }

              if (action === 'removeEventListener') {
                window.removeEventListener(listener, this[handler], false);
              } // Document

            } else if (listener === 'mouseup' || listener === "mousemove") {
              if (action === 'addEventListener') {
                document.addEventListener(listener, this[handler], {
                  passive: false
                });
              }

              if (action === 'removeEventListener') {
                document.removeEventListener(listener, this[handler], false);
              } // Element

            } else {
              if (action === 'addEventListener') {
                this.element.addEventListener(listener, this[handler], false);
              }

              if (action === 'removeEventListener') {
                this.element.removeEventListener(listener, this[handler], false);
              }
            }
          }
        }
      }, {
        key: "addEventListeners",
        value: function addEventListeners(listener) {
          var handler = this._mouseListeners[listener];
          window.addEventListener(listener, this[handler], false);
        }
      }, {
        key: "removeEventListeners",
        value: function removeEventListeners(listener) {
          var handler = this._mouseListeners[listener];
          window.removeEventListener(listener, this[handler], false);
        }
      }, {
        key: "handleLinearSwipe",
        value: function handleLinearSwipe(event) {
          //event.preventDefault();
          this.i++;

          if (this.i > 3) {
            this.eventType = this.getLinearSwipeType(event);
          }

          if (this.eventType === 'horizontal-swipe') {
            this.runHandler('horizontal-swipe', event);
          }

          if (this.eventType === 'vertical-swipe') {
            this.runHandler('vertical-swipe', event);
          }
        }
      }, {
        key: "runHandler",
        value: function runHandler(eventName, response) {
          if (this.handlers[eventName]) {
            this.handlers[eventName](response);
          }
        }
        /*
         * Detection
         */

      }, {
        key: "detectPan",
        value: function detectPan(touches) {
          return touches.length === 1 && !this.eventType || this.eventType === 'pan';
        }
      }, {
        key: "detectDoubleTap",
        value: function detectDoubleTap() {
          var _this2 = this;

          if (this.eventType != undefined) {
            return;
          }

          var currentTime = new Date().getTime();
          var tapLength = currentTime - this.lastTap;
          clearTimeout(this.doubleTapTimeout);

          if (tapLength < this.doubleTapMinTimeout && tapLength > 0) {
            return true;
          } else {
            this.doubleTapTimeout = setTimeout(function () {
              clearTimeout(_this2.doubleTapTimeout);
            }, this.doubleTapMinTimeout);
          }

          this.lastTap = currentTime;
          return undefined;
        }
      }, {
        key: "detectTap",
        value: function detectTap() {
          if (this.eventType != undefined) {
            return;
          }

          var currentTime = new Date().getTime();
          var tapLength = currentTime - this.touchstartTime;

          if (tapLength > 0) {
            if (tapLength < this.tapMinTimeout) {
              this.runHandler("tap", event);
            } else {
              this.runHandler("longtap", event);
            }
          }
        }
      }, {
        key: "detectPinch",
        value: function detectPinch(event) {
          var touches = event.touches;
          return touches.length === 2 && this.eventType === undefined || this.eventType === 'pinch';
        }
      }, {
        key: "detectLinearSwipe",
        value: function detectLinearSwipe(event) {
          var touches = event.touches;

          if (touches) {
            if (touches.length === 1 && !this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
              return this.getLinearSwipeType(event);
            }
          } else {
            if (!this.eventType || this.eventType === 'horizontal-swipe' || this.eventType === 'vertical-swipe') {
              return this.getLinearSwipeType(event);
            }
          }

          return undefined;
        }
      }, {
        key: "getLinearSwipeType",
        value: function getLinearSwipeType(event) {
          if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
            var movementX = Math.abs(this.moveLeft(0, event) - this.startX);
            var movementY = Math.abs(this.moveTop(0, event) - this.startY);

            if (movementY * 3 > movementX) {
              return 'vertical-swipe';
            } else {
              return 'horizontal-swipe';
            }
          } else {
            return this.eventType;
          }
        }
      }, {
        key: "getElementPosition",
        value: function getElementPosition() {
          return this.element.getBoundingClientRect();
        }
      }, {
        key: "getTouchstartPosition",
        value: function getTouchstartPosition(event) {
          this.startX = event.touches[0].clientX - this.elementPosition.left;
          this.startY = event.touches[0].clientY - this.elementPosition.top;
        }
      }, {
        key: "getMousedownPosition",
        value: function getMousedownPosition(event) {
          this.startX = event.clientX - this.elementPosition.left;
          this.startY = event.clientY - this.elementPosition.top;
        }
      }, {
        key: "moveLeft",
        value: function moveLeft(index, event) {
          var touches = event.touches;

          if (touches) {
            return touches[index].clientX - this.elementPosition.left;
          } else {
            return event.clientX - this.elementPosition.left;
          }
        }
      }, {
        key: "moveTop",
        value: function moveTop(index, event) {
          var touches = event.touches;

          if (touches) {
            return touches[index].clientY - this.elementPosition.top;
          } else {
            return event.clientY - this.elementPosition.top;
          }
        }
      }, {
        key: "detectTouchScreen",
        value: function detectTouchScreen() {
          var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

          var mq = function mq(query) {
            return window.matchMedia(query).matches;
          };

          if ('ontouchstart' in window) {
            return true;
          } // include the 'heartz' as a way to have a non matching MQ to help terminate the join
          // https://git.io/vznFH


          var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
          return mq(query);
        }
        /* Public properties and methods */

      }, {
        key: "on",
        value: function on(event, handler) {
          if (event) {
            this.handlers[event] = handler;
          }
        }
      }]);

      return Touches;
    }();

    var Carousel = /*#__PURE__*/function () {
      function Carousel(properties, utils, cells, container, slide) {
        var _this3 = this;

        _classCallCheck(this, Carousel);

        this.properties = properties;
        this.utils = utils;
        this.cells = cells;
        this.container = container;
        this.slide = slide;
        /* The slide length has been limited by the limitSlideLength() method */

        this.isSlideLengthLimited = false;
        this.isContentImages = true;
        this.isLazyLoad = true;
        this.isContainerLocked = true;
        this.alignCells = "left";
        this.initialContainerPosition = 0;
        this.containerPullLimit = 100;

        this.handleTouchstart = function (event) {
          _this3.container.handleTouchstart();

          _this3.slide.handleTouchstart(event);
        };

        this.handleHorizontalSwipe = function (event) {
          _this3.container.handleHorizontalSwipe();
        };

        this.handleTouchend = function (event) {
          if (_this3.properties.freeScroll) {
            _this3.container.handleTouchend();
          } else {
            _this3.container.handleTouchend(true);

            _this3.slide.handleTouchend(event);
          }
        };

        this.isNextArrowDisabled = function () {
          return _this3.slide.isNextArrowDisabled();
        };

        this.isPrevArrowDisabled = function () {
          return _this3.slide.isPrevArrowDisabled();
        };

        this.init();
      }

      _createClass(Carousel, [{
        key: "cellLength",
        get: function get() {
          return this.cells.cellLength;
        }
      }, {
        key: "cellLengthInLightDOMMode",
        get: function get() {
          if (this.images) {
            var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

            if (cellLength > this.images.length) {
              cellLength = this.images.length;
            }

            return cellLength;
          } else {
            return this.cellLength;
          }
        }
      }, {
        key: "lastCellIndex",
        get: function get() {
          return this.images.length ? this.images.length - 1 : this.cells.cellLength - 1;
        }
      }, {
        key: "overflowCellsLimit",
        get: function get() {
          return this.utils.overflowCellsLimit;
        }
      }, {
        key: "cellLimit",
        get: function get() {
          if (this.isLightDOM) {
            var cellLimit = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

            if (cellLimit < this.numberOfVisibleCells) {
              cellLimit = this.numberOfVisibleCells;
            }

            return cellLimit;
          } else {
            return this.properties.images.length;
          }
        }
      }, {
        key: "isLightDOM",
        get: function get() {
          return this.properties.lightDOM || this.properties.loop;
        }
      }, {
        key: "images",
        get: function get() {
          return this.properties.images;
        }
      }, {
        key: "margin",
        get: function get() {
          return this.properties.margin;
        }
      }, {
        key: "minSwipeDistance",
        get: function get() {
          return this.properties.minSwipeDistance;
        }
      }, {
        key: "transitionDuration",
        get: function get() {
          return this.properties.transitionDuration;
        }
      }, {
        key: "transitionTimingFunction",
        get: function get() {
          return this.properties.transitionTimingFunction;
        }
      }, {
        key: "fullCellWidth",
        get: function get() {
          return this.properties.cellWidth + this.margin;
        }
      }, {
        key: "numberOfVisibleCells",
        get: function get() {
          return this.utils.numberOfVisibleCells;
        }
      }, {
        key: "lapCounter",
        get: function get() {
          return Math.floor(this.slide.counter / this.cellLengthInLightDOMMode);
        }
      }, {
        key: "slideCounter",
        get: function get() {
          return this.slide.counter;
        }
      }, {
        key: "updateProperties",
        value: function updateProperties(properties) {
          this.properties = properties;
        }
      }, {
        key: "init",
        value: function init() {
          this.cellsElement = this.properties.cellsElement;
          this.visibleWidth = this.properties.visibleWidth || this.cellsElement.parentElement.clientWidth;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          clearInterval(this.autoplayId);
        }
      }, {
        key: "lineUpCells",
        value: function lineUpCells() {
          this.cells.lineUp();
        }
      }, {
        key: "handleTransitionend",
        value: function handleTransitionend() {
          this.slide.handleTransitionend();
        }
      }, {
        key: "getImage",
        value: function getImage(index) {
          return this.cells.getImage(index);
        }
      }, {
        key: "next",
        value: function next() {
          var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

          if (!this.isNextArrowDisabled()) {
            this.slide.next(length);
          }
        }
      }, {
        key: "prev",
        value: function prev() {
          var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.slide.prev(length);
        }
      }, {
        key: "autoplay",
        value: function autoplay() {
          var _this4 = this;

          this.autoplayId = setInterval(function () {
            _this4.next();
          }, this.properties.autoplayInterval);
        }
      }, {
        key: "stopAutoplay",
        value: function stopAutoplay() {
          if (this.autoplayId) {
            clearInterval(this.autoplayId);
          }
        }
      }]);

      return Carousel;
    }();

    var Container = /*#__PURE__*/function () {
      function Container(carouselProperties, utils, cells) {
        _classCallCheck(this, Container);

        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.cells = cells;
        /* The index of the new position relative to
         * the active index, for example -1 or +1
         */

        this.newPositionIndex = 0;
        this.isPositionCorrection = false;
        this.initialPositionX = 0;
        this.initialElementPositionX = 0;
        this.isLocked = true;
        this.pullLimit = 100;
        this.startTime = 0;
        this.startX = 0;
        this.moveX = 0;
        this.isSwipeInProgress = false;
        this.init();
      }

      _createClass(Container, [{
        key: "visibleWidth",
        get: function get() {
          return this.utils.visibleWidth;
        }
      }, {
        key: "overflowCellsLimit",
        get: function get() {
          return this.utils.overflowCellsLimit;
        }
      }, {
        key: "images",
        get: function get() {
          return this.carouselProperties.images;
        }
      }, {
        key: "element",
        get: function get() {
          return this.carouselProperties.cellsElement;
        }
      }, {
        key: "freeScroll",
        get: function get() {
          return this.carouselProperties.freeScroll;
        }
      }, {
        key: "fullCellWidth",
        get: function get() {
          return this.carouselProperties.cellWidth + this.carouselProperties.margin;
        }
      }, {
        key: "numberOfVisibleCells",
        get: function get() {
          return this.utils.numberOfVisibleCells;
        }
      }, {
        key: "transitionDuration",
        get: function get() {
          return this.carouselProperties.transitionDuration;
        }
      }, {
        key: "transitionTimingFunction",
        get: function get() {
          return this.carouselProperties.transitionTimingFunction;
        }
      }, {
        key: "cellLength",
        get: function get() {
          if (this.images) {
            return this.images.length;
          } else {
            return this.cells.cellLength;
          }
        }
      }, {
        key: "cellLengthInLightDOMMode",
        get: function get() {
          if (this.images) {
            var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

            if (cellLength > this.images.length) {
              cellLength = this.images.length;
            }

            return cellLength;
          } else {
            return this.cellLength;
          }
        }
      }, {
        key: "tooFewCells",
        get: function get() {
          return this.numberOfVisibleCells > this.cellLength;
        }
      }, {
        key: "disabled",
        get: function get() {
          return this.tooFewCells;
        }
      }, {
        key: "margin",
        get: function get() {
          return this.carouselProperties.margin;
        }
      }, {
        key: "isLightDOM",
        get: function get() {
          return this.carouselProperties.lightDOM || this.carouselProperties.loop;
        }
      }, {
        key: "updateProperties",
        value: function updateProperties(carouselProperties) {
          this.carouselProperties = carouselProperties;
        }
      }, {
        key: "init",
        value: function init() {
          this.setWidth();
        }
      }, {
        key: "handleTouchstart",
        value: function handleTouchstart() {
          this.startX = this.utils.getStartX(event);
          this.startTime = new Date().getTime();
          this.initialElementPositionX = this.getInitialElementPositionX();
        }
      }, {
        key: "handleHorizontalSwipe",
        value: function handleHorizontalSwipe() {
          if (this.disabled) {
            return;
          }

          if (!this.isSwipeInProgress) {
            this.startX = this.utils.getStartX(event);
            this.startTime = new Date().getTime();
            this.initialElementPositionX = this.getInitialElementPositionX();
          }

          this.isSwipeInProgress = true;
          this.moveX = this.utils.getMoveX(event);
          this.move();
        }
      }, {
        key: "handleTouchend",
        value: function handleTouchend() {
          var simpleProcessing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this.disabled) {
            return;
          }
          /* If touchend was passed to the Slide class */


          if (simpleProcessing) {
            this.isSwipeInProgress = false;
            return;
          }

          this.isSwipeInProgress = false;
          this.finishMoving();
          this.clearInitialValues();
        }
      }, {
        key: "move",
        value: function move() {
          var positionX = this.getMovePositionX();
          var isPulled = this.detectPulled();
          var direction = this.getDirection();

          if (isPulled) {
            if (isPulled.edge === "left" && direction === "right" || isPulled.edge === "right" && direction === "left") {
              positionX = this.slowdownOnPull(positionX);
            }
          }

          this.transformPositionX(positionX, 0);

          if (this.freeScroll) {
            this.initialPositionX = positionX;
          }

          if (isPulled) {
            if (isPulled.edge === 'left' && isPulled.overflowX > this.pullLimit) {
              this.initialPositionX = 0;
            }

            if (isPulled.edge === 'right' && isPulled.overflowX > this.pullLimit) {
              this.initialPositionX = positionX;
            }
          }
        }
      }, {
        key: "getMovePositionX",
        value: function getMovePositionX() {
          var distance = this.getDistance();
          return this.initialElementPositionX - distance;
        }
      }, {
        key: "getDistance",
        value: function getDistance() {
          return this.startX - this.moveX;
        }
        /* If the container is pulled out of the left or right border */

      }, {
        key: "detectPulled",
        value: function detectPulled() {
          var currentPositionX = this.getCurrentPositionX();

          if (currentPositionX > 0) {
            return {
              edge: 'left',
              positionX: currentPositionX,
              overflowX: Math.abs(currentPositionX)
            };
          }

          if (currentPositionX < this.getEndPosition()) {
            return {
              edge: 'right',
              positionX: currentPositionX,
              overflowX: Math.abs(currentPositionX - this.getEndPosition())
            };
          }

          return undefined;
        }
      }, {
        key: "slowdownOnPull",
        value: function slowdownOnPull(_positionX) {
          var distance = Math.abs(this.getDistance());
          var endPosition = this.getEndPosition();
          var isPulled = this.detectPulled();

          if (!isPulled) {
            return 0;
          }

          var decelerationRatio = 3 + isPulled.overflowX / 50;
          var positionX = 0;

          if (isPulled.edge === 'left') {
            if (this.initialElementPositionX < 0) {
              distance = distance - Math.abs(this.initialElementPositionX);
            }

            var rubberPositionX = distance / decelerationRatio;
            positionX = rubberPositionX;

            if (this.initialElementPositionX > 0) {
              positionX = this.initialElementPositionX + rubberPositionX;
            }

            if (positionX > this.pullLimit) {
              positionX = this.pullLimit;
            }
          }

          if (isPulled.edge === 'right') {
            var _rubberPositionX = endPosition + (this.initialElementPositionX - distance - endPosition) / decelerationRatio;

            var containerWidth = this.getWidth();
            positionX = _rubberPositionX;

            if (this.initialElementPositionX < -(containerWidth - this.visibleWidth)) {
              positionX = containerWidth - this.visibleWidth + this.initialElementPositionX + _rubberPositionX;
            }

            if (positionX < endPosition - this.pullLimit) {
              positionX = endPosition - this.pullLimit;
            }
          }

          return positionX;
        }
      }, {
        key: "finishMoving",
        value: function finishMoving() {
          var positionX = this.getMovePositionX();
          var newPositionX = 0;

          if (this.freeScroll) {
            newPositionX = this.getInertia();
          }
          /* Align container while pulling */


          newPositionX = this.getAlignedPositionOnPull(newPositionX);
          this.transformPositionX(newPositionX);
          this.setInitialPosition(positionX);
        }
        /* Returns the new position of the container with inertia */

      }, {
        key: "getInertia",
        value: function getInertia() {
          var distance = this.getDistance();
          var currentTime = new Date().getTime();
          var tapLength = currentTime - this.startTime;
          var inertia = distance / tapLength * 100;
          return this.initialPositionX - inertia;
        }
      }, {
        key: "getAlignedPositionOnPull",
        value: function getAlignedPositionOnPull(newPositionX) {
          var direction = this.getDirection();

          if (direction === 'left') {
            var endPosition = this.getEndPosition();

            if (newPositionX < endPosition) {
              return endPosition;
            }
          }

          if (direction === 'right') {
            if (newPositionX > 0) {
              return 0;
            }
          }

          return newPositionX;
        }
      }, {
        key: "getCurrentPositionX",
        value: function getCurrentPositionX() {
          var parentPosition = this.element.parentElement.getBoundingClientRect();
          var position = this.element.getBoundingClientRect();
          return position.left - parentPosition.left;
        }
      }, {
        key: "getEndPosition",
        value: function getEndPosition() {
          if (this.isLightDOM) {
            var imagesInContainer = this.cells.imageUtils.getImages();
            return -(imagesInContainer.length * this.fullCellWidth - this.visibleWidth - this.margin);
          } else {
            var width = this.getWidth();
            var visibleWidth = this.element.parentElement.clientWidth;
            return visibleWidth - width;
          }
        }
      }, {
        key: "transformPositionX",
        value: function transformPositionX(value) {
          var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.transitionDuration;

          if (value === undefined) {
            return;
          }

          this.element.style.transition = 'transform ' + duration + 'ms ' + this.transitionTimingFunction;
          this.element.style.transform = 'translateX(' + value + 'px)';
        }
      }, {
        key: "getWidth",
        value: function getWidth() {
          var width = this.cellLengthInLightDOMMode * this.fullCellWidth;
          var totalImageWidth = this.cellLength * this.fullCellWidth;

          if (totalImageWidth < width) {
            width = totalImageWidth;
          }

          return this.isLightDOM ? width : totalImageWidth;
        }
      }, {
        key: "setWidth",
        value: function setWidth() {
          var width = this.getWidth();
          this.element.style.width = width + "px";
        }
      }, {
        key: "setInitialPosition",
        value: function setInitialPosition(position) {
          this.initialPositionX = position;
        }
      }, {
        key: "getElementPosition",
        value: function getElementPosition() {
          return this.element.getBoundingClientRect();
        }
      }, {
        key: "getInitialElementPositionX",
        value: function getInitialElementPositionX() {
          var carouselElementPosition = this.utils.getCarouselElementPosition()['left'];
          return this.getElementPosition()['left'] - carouselElementPosition;
        }
      }, {
        key: "clearInitialValues",
        value: function clearInitialValues() {
          this.startX = this.moveX = 0;
        }
      }, {
        key: "getDirection",
        value: function getDirection() {
          var direction = Math.sign(this.startX - this.moveX);

          if (direction === -1) {
            return 'right';
          }

          if (direction === 1) {
            return 'left';
          }

          return undefined;
        }
      }]);

      return Container;
    }();

    var ImageUtils = /*#__PURE__*/function () {
      function ImageUtils(element) {
        _classCallCheck(this, ImageUtils);

        this.cellStack = [];
        this.element = element;
      }

      _createClass(ImageUtils, [{
        key: "getImages",
        value: function getImages() {
          return this.cellStack.filter(this.filter);
        }
      }, {
        key: "filter",
        value: function filter(cell) {
          return cell.img !== undefined;
        }
      }]);

      return ImageUtils;
    }();

    var Cells = /*#__PURE__*/function () {
      function Cells(carouselProperties, utils) {
        _classCallCheck(this, Cells);

        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.counter = 0;
        this.imageUtils = new ImageUtils(this.element);
        this.init(carouselProperties);
      }

      _createClass(Cells, [{
        key: "images",
        get: function get() {
          return this.carouselProperties.images;
        }
      }, {
        key: "cellLength",
        get: function get() {
          return this.cells ? this.cells.length : 0;
        }
      }, {
        key: "fullCellWidth",
        get: function get() {
          return this.carouselProperties.cellWidth + this.carouselProperties.margin;
        }
      }, {
        key: "cellLengthInLightDOMMode",
        get: function get() {
          if (this.images) {
            var cellLength = this.numberOfVisibleCells + this.overflowCellsLimit * 2;

            if (cellLength > this.images.length) {
              cellLength = this.images.length;
            }

            return cellLength;
          } else {
            return this.cellLength;
          }
        }
      }, {
        key: "numberOfVisibleCells",
        get: function get() {
          return this.utils.numberOfVisibleCells;
        }
      }, {
        key: "overflowCellsLimit",
        get: function get() {
          return this.utils.overflowCellsLimit;
        }
      }, {
        key: "isLightDOM",
        get: function get() {
          return this.carouselProperties.lightDOM || this.carouselProperties.loop;
        }
      }, {
        key: "updateProperties",
        value: function updateProperties(carouselProperties) {
          this.carouselProperties = carouselProperties;
        }
      }, {
        key: "lineUp",
        value: function lineUp() {
          var cells = this.element ? this.element.children : [];
          this.imageUtils.cellStack = [];

          for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var positionX = this.getCellPositionInContainer(i);
            cell.style.transform = 'translateX(' + positionX + 'px)';
            cell.style.width = this.carouselProperties.cellWidth + 'px';

            if (this.getImage(i)) {
              this.imageUtils.cellStack.push({
                index: i,
                positionX: positionX,
                img: this.getImage(i)['image']
              });
            }
          }

          ;
        }
      }, {
        key: "ifSequenceOfCellsIsChanged",
        value: function ifSequenceOfCellsIsChanged() {
          var cells = this.element.children;
          return cells[0]['style'].transform !== 'translateX(0px)';
        }
      }, {
        key: "getCellPositionInContainer",
        value: function getCellPositionInContainer(cellIndexInDOMTree) {
          var positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
          return positionIndex * this.fullCellWidth;
        }
      }, {
        key: "getCellIndexInContainer",
        value: function getCellIndexInContainer(cellIndexInDOMTree) {
          var positionIndex;

          if (!this.isLightDOM) {
            return cellIndexInDOMTree;
          }

          var cellLength = this.cellLengthInLightDOMMode;
          var counter = this.counter - this.overflowCellsLimit;

          if (counter > cellLength) {
            counter = counter % cellLength;
          }

          if (counter < 0) {
            return cellIndexInDOMTree;
          } else {
            positionIndex = cellIndexInDOMTree - counter;

            if (positionIndex < 0) {
              positionIndex = cellLength + positionIndex;
            }
          }

          return positionIndex;
        }
      }, {
        key: "getImage",
        value: function getImage(cellIndex) {
          if (!this.images) {
            return;
          }

          var imageIndex = this.getImageIndex(cellIndex);
          var file = this.images[imageIndex];

          if (file && !file.type) {
            file.type = 'image';
          }

          return {
            image: this.images[imageIndex],
            imageIndex: imageIndex
          };
        }
      }, {
        key: "getImageIndex",
        value: function getImageIndex(cellIndexInDOMTree) {
          var positionIndex = this.getCellIndexInContainer(cellIndexInDOMTree);
          var imageIndex;

          if (this.counter > this.overflowCellsLimit) {
            var cellLimitOverflow = this.counter - this.overflowCellsLimit;
            imageIndex = positionIndex + cellLimitOverflow;

            if (this.images && this.carouselProperties.loop) {
              imageIndex = imageIndex % this.images.length;
            }
          } else {
            imageIndex = cellIndexInDOMTree;
          }

          return imageIndex;
        }
      }, {
        key: "setCounter",
        value: function setCounter(value) {
          this.counter = value;
        }
      }, {
        key: "init",
        value: function init(carouselProperties) {
          this.element = this.carouselProperties.cellsElement;
          this.cells = this.element.children;
          this.visibleWidth = this.carouselProperties.visibleWidth || this.element.parentElement.clientWidth;
        }
      }]);

      return Cells;
    }();

    var Slide = /*#__PURE__*/function () {
      function Slide(carouselProperties, utils, cells, container) {
        _classCallCheck(this, Slide);

        this.carouselProperties = carouselProperties;
        this.utils = utils;
        this.cells = cells;
        this.container = container;
        this.slideLength = 0;
        this.isSlideInProgress = false;
        this.counter = 0;
        this._counter = 0;
        this.distance = 0;
        this.distanceAbs = 0;
        this.isNotClickOnArrow = false;
        this.initialPositionX = 0;
        this.currentPositionX = 0;
        /* The slide length has been limited by the limitSlideLength() method */

        this.isSlideLengthLimited = false;
        this.init();
      }

      _createClass(Slide, [{
        key: "fullCellWidth",
        get: function get() {
          return this.carouselProperties.cellWidth + this.carouselProperties.margin;
        }
      }, {
        key: "margin",
        get: function get() {
          return this.carouselProperties.margin;
        }
      }, {
        key: "minSwipeDistance",
        get: function get() {
          return this.carouselProperties.minSwipeDistance;
        }
      }, {
        key: "numberOfVisibleCells",
        get: function get() {
          return this.utils.numberOfVisibleCells;
        }
      }, {
        key: "visibleCellsOverflowContainer",
        get: function get() {
          return this.utils.visibleCellsOverflowContainer;
        }
        /* The position to which the container returns after each slide
         * in the light DUM tree mode.
         */

      }, {
        key: "fixedContainerPosition",
        get: function get() {
          return -(this.overflowCellsLimit * this.fullCellWidth);
        }
      }, {
        key: "overflowCellsLimit",
        get: function get() {
          return this.utils.overflowCellsLimit;
        }
      }, {
        key: "images",
        get: function get() {
          return this.carouselProperties.images;
        }
        /* Number of cell elements in the DUM tree */

      }, {
        key: "cellLength",
        get: function get() {
          if (this.isLightDOM) {
            return this.cells.cellLengthInLightDOMMode;
          } else {
            if (this.images) {
              return this.images.length;
            } else {
              return this.cells.cellLength;
            }
          }
        }
      }, {
        key: "isLightDOM",
        get: function get() {
          return this.carouselProperties.lightDOM || this.carouselProperties.loop;
        }
      }, {
        key: "updateProperties",
        value: function updateProperties(carouselProperties) {
          this.carouselProperties = carouselProperties;
          this.setVisibleWidth();
        }
      }, {
        key: "init",
        value: function init() {
          this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
        }
      }, {
        key: "handleTouchstart",
        value: function handleTouchstart() {
          /* Touchstart event is not called for arrow */
          this.isNotClickOnArrow = true;
          this.isSlideLengthLimited = false;

          if (!this.isSlideInProgress) {
            this.initialPositionX = this.container.getCurrentPositionX();
          }
        }
      }, {
        key: "handleTouchend",
        value: function handleTouchend() {
          if (!this.isNotClickOnArrow) {
            return;
          }

          this.currentPositionX = this.container.getCurrentPositionX();
          this.distanceAbs = Math.abs(this.initialPositionX - this.currentPositionX);
          this.distance = this.initialPositionX - this.currentPositionX;
          this.direction = this.getDirection();
          this.isNotClickOnArrow = false;
          this.handleSlide();
        }
      }, {
        key: "handleTransitionend",
        value: function handleTransitionend() {
          this.setCounter();
          this.isSlideInProgress = false;

          if (this.isLightDOM) {
            this.alignContainerFast();
          }
        }
      }, {
        key: "handleSlide",
        value: function handleSlide() {
          var customSlideLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          var isUsingButton = customSlideLength;
          var newPositionX;

          if (isUsingButton && this.isSlideInProgress || !this.direction) {
            return;
          }
          /* Custom slide length is used in arrows */


          if (customSlideLength) {
            this.slideLength = this.limitSlideLength(customSlideLength);

            if (!this.isSlideInProgress) {
              this.initialPositionX = this.container.getCurrentPositionX();
            }
          } else {
            this.slideLength = this.getSlideLength(this.distanceAbs);
          }
          /* Store intermediate counter value */


          this._counter = this.getPreliminaryCounter();

          if (this.direction === 'left') {
            if (!customSlideLength) {
              this.slideLength = this.limitSlideLength(this.getSlideLength(this.distanceAbs));
            }

            this._counter = this.getPreliminaryCounter();
            var isSlidesEnd = this.isSlidesEnd(this._counter);
            newPositionX = this.getPositionByIndex(this._counter);

            if (isSlidesEnd) {
              this._counter = this.counter;
              newPositionX = this.getPositionByIndex(this.counter);
              this.slideLength = 0;
            }
          }

          if (this.direction === 'right') {
            if (!customSlideLength) {
              this.slideLength = this.getSlideLength(this.distanceAbs);
            }

            if (this._counter < 0) {
              this._counter = this.counter;
              this.slideLength = this.counter;
            }

            newPositionX = this.getPositionByIndex(this.counter - this.slideLength);
          }

          if (this.container.getCurrentPositionX() !== newPositionX) {
            this.isSlideInProgress = true;
            this.container.transformPositionX(newPositionX);
          }
        }
      }, {
        key: "next",
        value: function next() {
          var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.direction = 'left';
          this.handleSlide(length);
        }
      }, {
        key: "prev",
        value: function prev() {
          var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.direction = 'right';
          this.handleSlide(length);
        }
      }, {
        key: "select",
        value: function select(index) {
          if (index > this.cellLength - 1) {
            return;
          }

          if (index > this.counter) {
            var length = index - this.counter;
            this.next(length);
          }

          if (index < this.counter) {
            var _length = this.counter - index;

            this.prev(_length);
          }
        }
      }, {
        key: "getPreliminaryCounter",
        value: function getPreliminaryCounter() {
          if (this.direction === 'left') {
            return this.counter + this.slideLength;
          }

          if (this.direction === 'right') {
            return this.counter - this.slideLength;
          }

          return 0;
        }
        /*
         * Limits the length of the slide during calls to the next() and prev()
         * methods if the specified position is outside the cell length
         */

      }, {
        key: "limitSlideLength",
        value: function limitSlideLength(slideLength) {
          if (slideLength > 1) {
            for (var i = 0; i < slideLength; i++) {
              var newCounter = this.counter + (slideLength - i);

              if (!this.isSlidesEnd(newCounter)) {
                slideLength = slideLength - i;
                this.isSlideLengthLimited = i > 0;
                break;
              }
            }
          }

          return slideLength;
        }
        /* Offset the container to show the last cell completely */

      }, {
        key: "getPositionCorrection",
        value: function getPositionCorrection(counter) {
          var correction = 0;
          var isLastSlide = this.isLastSlide(counter);

          if (this.carouselProperties.loop || this.direction === "right") {
            return 0;
          }

          if (this.isSlideLengthLimited || isLastSlide) {
            var cellsWidth = this.cells.cellLengthInLightDOMMode * this.fullCellWidth;

            if (this.visibleWidth < cellsWidth) {
              correction = -(this.numberOfVisibleCells * this.fullCellWidth - this.visibleWidth - this.margin);
            }

            if (correction >= -this.margin) {
              correction = 0;
            }
          }

          return correction;
        }
      }, {
        key: "getSlideLength",
        value: function getSlideLength(distanceAbs) {
          var isLastSlide = this.isLastSlide(this.counter);
          /* If the last cell does not fit entirely, then the
           * length of the swipe to the left, from the extreme
           * right position, may be shorter than usual.
           */

          if (isLastSlide && this.direction === "right") {
            distanceAbs = distanceAbs + this.visibleWidth % this.fullCellWidth;
          }

          var length = Math.floor(distanceAbs / this.fullCellWidth);

          if (distanceAbs % this.fullCellWidth >= this.minSwipeDistance) {
            length++;
          }

          return length;
        }
      }, {
        key: "getDistanceAbs",
        value: function getDistanceAbs() {
          return Math.abs(this.initialPositionX - this.currentPositionX);
        }
      }, {
        key: "getDirection",
        value: function getDirection() {
          var direction = Math.sign(this.initialPositionX - this.currentPositionX);

          if (direction === -1) {
            return 'right';
          }

          if (direction === 1) {
            return 'left';
          }

          return undefined;
        }
      }, {
        key: "isSlidesEnd",
        value: function isSlidesEnd(counter) {
          var margin = this.visibleCellsOverflowContainer ? 1 : 0;
          var imageLength = this.images ? this.images.length : this.cells.cellLength;

          if (this.carouselProperties.loop) {
            return false;
          } else {
            return imageLength - counter + margin < this.numberOfVisibleCells;
          }
        }
      }, {
        key: "isLastSlide",
        value: function isLastSlide(counter) {
          return this.isSlidesEnd(counter + 1);
        }
      }, {
        key: "setCounter",
        value: function setCounter() {
          if (this.direction === 'left') {
            this.counter = this.counter + this.slideLength;
          }

          if (this.direction === 'right') {
            this.counter = this.counter - this.slideLength;
          }
        }
      }, {
        key: "getPositionByIndex",
        value: function getPositionByIndex(_counter) {
          var correction = this.getPositionCorrection(this.counter + this.slideLength);
          var position;

          if (correction !== 0) {
            correction = correction + this.fullCellWidth;
          }

          if (this.direction === 'right') {
            correction = 0;
          }

          if (this.isLightDOM && this.isLightDOMMode(_counter) || this.isLightDOM && this.ifLeftDOMModeAtEnd(_counter)) {
            var initialPosition = this.getPositionWithoutCorrection(this.initialPositionX);
            var counterDifference = _counter - this.counter;
            position = initialPosition - (counterDifference * this.fullCellWidth - correction);
          } else {
            position = -(_counter * this.fullCellWidth - correction);
          }

          position = this.provideSafePosition(position);
          return position;
        }
      }, {
        key: "provideSafePosition",
        value: function provideSafePosition(position) {
          var endPosition = this.container.getEndPosition();

          if (this.direction === 'left') {
            if (position > 0) {
              position = 0;
            }
          }

          if (this.direction === 'right') {
            if (position < endPosition) {
              position = endPosition;
            }
          }

          return position;
        }
      }, {
        key: "getPositionWithoutCorrection",
        value: function getPositionWithoutCorrection(value) {
          var remainder = Math.round(value) % this.fullCellWidth;

          if (remainder !== 0) {
            return value - (this.fullCellWidth + remainder);
          } else {
            return value;
          }
        }
      }, {
        key: "isNextArrowDisabled",
        value: function isNextArrowDisabled() {
          return this.isLastSlide(this.counter) || !this.visibleCellsOverflowContainer && this.cellLength <= this.numberOfVisibleCells || this.visibleCellsOverflowContainer && this.cellLength < this.numberOfVisibleCells;
        }
      }, {
        key: "isPrevArrowDisabled",
        value: function isPrevArrowDisabled() {
          return this.counter === 0;
        }
      }, {
        key: "alignContainerFast",
        value: function alignContainerFast() {
          if (this.isLightDOMMode(this.counter)) {
            var positionX = this.fixedContainerPosition;
            this.container.transformPositionX(positionX, 0);
            this.cells.setCounter(this.counter);
            this.cells.lineUp();
          } else if (this.ifLeftDOMModeToBeginning(this.counter)) {
            /* If we have already exited the light DOM mode but
             * the cells are still out of place
             */
            if (this.cells.ifSequenceOfCellsIsChanged()) {
              var _positionX2 = -(this.counter * this.fullCellWidth);

              this.container.transformPositionX(_positionX2, 0);
              this.cells.setCounter(this.counter);
              this.cells.lineUp();
            }
          } else if (this.ifLeftDOMModeAtEnd(this.counter)) {
            var containerPositionX = this.container.getCurrentPositionX();
            var containerWidth = this.container.getWidth();
            this.visibleWidth;

            if (this.isLastSlide(this.counter) && containerWidth + containerPositionX >= this.visibleWidth) {
              return;
            }

            var correction = this.getPositionCorrection(this.counter);

            if (correction !== 0) {
              correction = correction + this.fullCellWidth;
            }

            if (this.direction === 'right') {
              correction = 0;
            }

            var _positionX3 = this.fixedContainerPosition + correction;

            this.container.transformPositionX(_positionX3, 0);
            this.cells.setCounter(this.counter);
            this.cells.lineUp();
          }
        }
      }, {
        key: "isLightDOMMode",
        value: function isLightDOMMode(counter) {
          var flag;
          var remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;

          if (!this.isLightDOM) {
            return false;
          }

          if (counter > this.overflowCellsLimit && this.direction === "left" && counter <= remainderOfCells) {
            flag = true;
          }

          if (counter >= this.overflowCellsLimit && this.direction === "right" && counter < remainderOfCells) {
            flag = true;
          }

          if (this.counter > this.overflowCellsLimit && this.direction === "left" && this.counter <= remainderOfCells) {
            flag = true;
          }

          if (this.counter >= this.overflowCellsLimit && this.direction === "right" && this.counter < remainderOfCells) {
            flag = true;
          }

          return flag;
        }
      }, {
        key: "ifLeftDOMModeAtEnd",
        value: function ifLeftDOMModeAtEnd(counter) {
          var flag;
          var remainderOfCells = this.images.length - this.overflowCellsLimit - this.numberOfVisibleCells;

          if (counter >= remainderOfCells) {
            flag = true;
          }

          if (this.counter >= remainderOfCells) {
            flag = true;
          }

          return flag;
        }
      }, {
        key: "ifLeftDOMModeToBeginning",
        value: function ifLeftDOMModeToBeginning(counter) {
          var flag;

          if (counter <= this.overflowCellsLimit) {
            flag = true;
          }

          if (this.counter <= this.overflowCellsLimit) {
            flag = true;
          }

          return flag;
        }
      }, {
        key: "setVisibleWidth",
        value: function setVisibleWidth() {
          this.visibleWidth = this.carouselProperties.visibleWidth || this.carouselProperties.hostElement.clientWidth;
        }
      }]);

      return Slide;
    }();

    var Utils = /*#__PURE__*/function () {
      function Utils(carouselProperties) {
        _classCallCheck(this, Utils);

        this.carouselProperties = carouselProperties;
      }

      _createClass(Utils, [{
        key: "images",
        get: function get() {
          return this.carouselProperties.images;
        }
      }, {
        key: "margin",
        get: function get() {
          return this.carouselProperties.margin;
        }
      }, {
        key: "overflowCellsLimit",
        get: function get() {
          if (this.images && this.isImagesLessCellLimit) {
            var overflowCellsLimit = Math.floor((this.images.length - this.numberOfVisibleCells) / 2);

            if (overflowCellsLimit < 0) {
              overflowCellsLimit = 0;
            }

            return overflowCellsLimit;
          } else {
            return this.carouselProperties.overflowCellsLimit;
          }
        }
      }, {
        key: "isImagesLessCellLimit",
        get: function get() {
          return this.carouselProperties.overflowCellsLimit * 2 + this.numberOfVisibleCells > this.images.length;
        }
      }, {
        key: "numberOfVisibleCells",
        get: function get() {
          return Math.ceil(this.visibleWidth / this.fullCellWidth);
        }
      }, {
        key: "visibleCellsOverflowContainer",
        get: function get() {
          return this.numberOfVisibleCells * this.fullCellWidth - this.margin > this.visibleWidth;
        }
      }, {
        key: "fullCellWidth",
        get: function get() {
          return this.carouselProperties.cellWidth + this.carouselProperties.margin;
        }
      }, {
        key: "visibleWidth",
        get: function get() {
          return this.carouselProperties.visibleWidth || this.carouselProperties.cellsElement.parentElement.clientWidth;
        }
      }, {
        key: "updateProperties",
        value: function updateProperties(carouselProperties) {
          this.carouselProperties = carouselProperties;
        }
      }, {
        key: "getStartX",
        value: function getStartX(event) {
          var touches = event.touches;
          var carouselElementPosition = this.getCarouselElementPosition()['left'];
          var startX;

          if (touches) {
            startX = touches[0].clientX - carouselElementPosition;
          } else {
            startX = event.clientX - carouselElementPosition;
          }

          return startX;
        }
      }, {
        key: "getMoveX",
        value: function getMoveX(event) {
          var touches = event.touches;
          var carouselElementPositionX = this.getCarouselElementPosition()['left'];

          if (touches) {
            return touches[0].clientX - carouselElementPositionX;
          } else {
            return event.clientX - carouselElementPositionX;
          }
        }
      }, {
        key: "getCarouselElementPosition",
        value: function getCarouselElementPosition() {
          return this.carouselProperties.hostElement.getBoundingClientRect();
        }
      }]);

      return Utils;
    }();

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent(elementRef, ref) {
        var _this5 = this;

        _classCallCheck(this, CarouselComponent);

        this.elementRef = elementRef;
        this.ref = ref;
        this.minTimeout = 30;
        this.isVideoPlaying = false;
        this._isCounter = false;
        this._cellWidth = 200;
        this._loop = false;
        this._lightDOM = false;
        this.isMoving = false;
        this.isNgContent = false;
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.height = 200;
        this.autoplay = false;
        this.autoplayInterval = 5000;
        this.pauseOnHover = true;
        this.dots = false;
        this.margin = 10;
        this.objectFit = 'cover';
        this.minSwipeDistance = 10;
        this.transitionDuration = 200;
        this.transitionTimingFunction = 'ease-out';
        this.counterSeparator = " / ";
        this.overflowCellsLimit = 3;
        this.listeners = 'mouse and touch';
        this.cellsToScroll = 1;
        this.freeScroll = false;
        this.arrows = true;
        this.arrowsOutside = false;
        this.arrowsTheme = 'light';
        this.hostClassCarousel = true;

        this.handleTouchstart = function (event) {
          _this5.touches.addEventListeners("mousemove", "handleMousemove");

          _this5.carousel.handleTouchstart(event);

          _this5.isMoving = true;
        };

        this.handleHorizontalSwipe = function (event) {
          event.preventDefault();

          _this5.carousel.handleHorizontalSwipe(event);
        };

        this.handleTouchend = function (event) {
          var touches = event.touches;

          _this5.carousel.handleTouchend(event);

          _this5.touches.removeEventListeners("mousemove", "handleMousemove");

          _this5.isMoving = false;
        };

        this.handleTap = function (event) {
          var outboundEvent = {
            name: 'click'
          };
          var nodes = Array.prototype.slice.call(_this5.cellsElement.children);
          var cellElement = event.srcElement.closest(".carousel-cell");
          var i = nodes.indexOf(cellElement);
          var cellIndex = nodes.indexOf(cellElement);

          if (_this5.images) {//outboundEvent.fileIndex = this.carousel.getFileIndex(i);
            //outboundEvent.file = this.carousel.getFile(cellIndex);
          } else {
            outboundEvent.cellIndex = cellIndex;
          }
        };
      }

      _createClass(CarouselComponent, [{
        key: "isContainerLocked",
        get: function get() {
          if (this.carousel) {
            return this.carousel.isContainerLocked;
          }
        }
      }, {
        key: "slideCounter",
        get: function get() {
          if (this.carousel) {
            return this.carousel.slideCounter;
          }
        }
      }, {
        key: "lapCounter",
        get: function get() {
          if (this.carousel) {
            return this.carousel.lapCounter;
          }
        }
      }, {
        key: "isLandscape",
        get: function get() {
          return window.innerWidth > window.innerHeight;
        }
      }, {
        key: "isSafari",
        get: function get() {
          var ua = navigator.userAgent.toLowerCase();

          if (ua.indexOf('safari') !== -1) {
            return !(ua.indexOf('chrome') > -1);
          }
        }
      }, {
        key: "counter",
        get: function get() {
          var counter;

          if (this.loop) {
            counter = this.slideCounter % this.cellLength;
          } else {
            counter = this.slideCounter;
          }

          return counter + 1 + this.counterSeparator + this.cellLength;
        }
      }, {
        key: "cellsElement",
        get: function get() {
          return this.elementRef.nativeElement.querySelector('.carousel-cells');
        }
      }, {
        key: "isArrows",
        get: function get() {
          return this.arrows && !this.freeScroll;
        }
      }, {
        key: "isCounter",
        get: function get() {
          return this._isCounter && this.cellLength > 1;
        },
        set: function set(value) {
          if (value) {
            this._isCounter = value;
          }
        }
      }, {
        key: "activeDotIndex",
        get: function get() {
          return this.slideCounter % this.cellLength;
        }
      }, {
        key: "cellLimit",
        get: function get() {
          if (this.carousel) {
            return this.carousel.cellLimit;
          }
        }
      }, {
        key: "carouselWidth",
        get: function get() {
          return this.elementRef.nativeElement.clientWidth;
        }
      }, {
        key: "images",
        get: function get() {
          return this._images;
        },
        set: function set(images) {
          this._images = images;
        }
      }, {
        key: "cellWidth",
        set: function set(value) {
          if (value) {
            this._cellWidth = value;
          }
        }
      }, {
        key: "loop",
        get: function get() {
          if (this.images) {
            return this._loop;
          } else {
            return false;
          }
        },
        set: function set(value) {
          if (value) {
            this._loop = value;
          }
        }
      }, {
        key: "lightDOM",
        get: function get() {
          if (this.images) {
            return this._lightDOM;
          } else {
            return false;
          }
        },
        set: function set(value) {
          if (value) {
            this._lightDOM = value;
          }
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize(event) {
          if (this.utils.visibleWidth !== this.savedCarouselWidth) {
            this.resize();
          }
        }
      }, {
        key: "onMousemove",
        value: function onMousemove(event) {
          if (this.autoplay && this.pauseOnHover) {
            this.carousel.stopAutoplay();
          }
        }
      }, {
        key: "onMouseleave",
        value: function onMouseleave(event) {
          if (this.autoplay && this.pauseOnHover) {
            this.carousel.autoplay();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isNgContent = this.cellsElement.children.length > 0;
          this.touches = new Touches({
            element: this.cellsElement,
            listeners: this.listeners,
            mouseListeners: {
              "mousedown": "handleMousedown",
              "mouseup": "handleMouseup"
            }
          });
          this.touches.on('touchstart', this.handleTouchstart);
          this.touches.on('horizontal-swipe', this.handleHorizontalSwipe);
          this.touches.on('touchend', this.handleTouchend);
          this.touches.on('mousedown', this.handleTouchstart);
          this.touches.on('mouseup', this.handleTouchend);
          this.touches.on('tap', this.handleTap);
          this.setDimensions();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initCarousel();
          this.cellLength = this.getCellLength();
          this.dotsArr = Array(this.cellLength).fill(1);
          this.ref.detectChanges();
          this.carousel.lineUpCells();
          this.savedCarouselWidth = this.carouselWidth;
          /* Start detecting changes in the DOM tree */

          this.detectDomChanges();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.width || changes.height || changes.images) {
            this.setDimensions();
            this.initCarousel();
            this.carousel.lineUpCells();
            this.ref.detectChanges();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.touches.destroy(); //this.carousel.destroy();
        }
      }, {
        key: "initCarousel",
        value: function initCarousel() {
          this.carouselProperties = {
            id: this.id,
            cellsElement: this.elementRef.nativeElement.querySelector('.carousel-cells'),
            hostElement: this.elementRef.nativeElement,
            images: this.images,
            cellWidth: this.getCellWidth(),
            loop: this.loop,
            autoplayInterval: this.autoplayInterval,
            overflowCellsLimit: this.overflowCellsLimit,
            visibleWidth: this.width,
            margin: this.margin,
            minSwipeDistance: this.minSwipeDistance,
            transitionDuration: this.transitionDuration,
            transitionTimingFunction: this.transitionTimingFunction,
            videoProperties: this.videoProperties,
            eventHandler: this.events,
            freeScroll: this.freeScroll,
            lightDOM: this.lightDOM
          };
          this.utils = new Utils(this.carouselProperties);
          this.cells = new Cells(this.carouselProperties, this.utils);
          this.container = new Container(this.carouselProperties, this.utils, this.cells);
          this.slide = new Slide(this.carouselProperties, this.utils, this.cells, this.container);
          this.carousel = new Carousel(this.carouselProperties, this.utils, this.cells, this.container, this.slide);

          if (this.autoplay) {
            this.carousel.autoplay();
          }
        }
      }, {
        key: "resize",
        value: function resize() {
          this.landscapeMode = this.isLandscape;
          this.savedCarouselWidth = this.carouselWidth;
          this.carouselProperties.cellWidth = this.getCellWidth();
          this.cells.updateProperties(this.carouselProperties);
          this.carousel.updateProperties(this.carouselProperties);
          this.container.updateProperties(this.carouselProperties);
          this.slide.updateProperties(this.carouselProperties);
          this.utils.updateProperties(this.carouselProperties);
          this.carousel.lineUpCells();
          this.slide.select(0);
          this.ref.detectChanges();
        }
      }, {
        key: "detectDomChanges",
        value: function detectDomChanges() {
          var _this6 = this;

          var observer = new MutationObserver(function (mutations) {
            _this6.onDomChanges();
          });
          var config = {
            attributes: true,
            childList: true,
            characterData: true
          };
          observer.observe(this.cellsElement, config);
        }
      }, {
        key: "onDomChanges",
        value: function onDomChanges() {
          this.cellLength = this.getCellLength();
          this.carousel.lineUpCells();
          this.ref.detectChanges();
        }
      }, {
        key: "setDimensions",
        value: function setDimensions() {
          this.hostStyleHeight = this.height + 'px';
          this.hostStyleWidth = this.width + 'px';
        }
      }, {
        key: "getImage",
        value: function getImage(index) {
          return this.carousel.getImage(index);
        }
      }, {
        key: "handleTransitionendCellContainer",
        value: function handleTransitionendCellContainer(event) {
          if (event.target['className'] === 'carousel-cells') {
            this.carousel.handleTransitionend();
          }
        }
      }, {
        key: "getCellWidth",
        value: function getCellWidth() {
          var elementWidth = this.carouselWidth;

          if (this.cellsToShow) {
            var margin = this.cellsToShow > 1 ? this.margin : 0;
            var totalMargin = margin * (this.cellsToShow - 1);
            return (elementWidth - totalMargin) / this.cellsToShow;
          }

          if (this._cellWidth === '100%') {
            return elementWidth;
          } else {
            return this._cellWidth;
          }
        }
      }, {
        key: "next",
        value: function next() {
          this.carousel.next(this.cellsToScroll);
          this.carousel.stopAutoplay();
        }
      }, {
        key: "prev",
        value: function prev() {
          this.carousel.prev(this.cellsToScroll);
          this.carousel.stopAutoplay();
        }
      }, {
        key: "isNextArrowDisabled",
        value: function isNextArrowDisabled() {
          if (this.carousel) {
            return this.carousel.isNextArrowDisabled();
          }
        }
      }, {
        key: "isPrevArrowDisabled",
        value: function isPrevArrowDisabled() {
          if (this.carousel) {
            return this.carousel.isPrevArrowDisabled();
          }
        }
      }, {
        key: "getCellLength",
        value: function getCellLength() {
          if (this.images) {
            return this.images.length;
          } else {
            return this.cellsElement.children.length;
          }
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["carousel"], ["", "carousel", ""]],
      hostVars: 6,
      hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CarouselComponent_resize_HostBindingHandler($event) {
            return ctx.onWindowResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function CarouselComponent_mousemove_HostBindingHandler($event) {
            return ctx.onMousemove($event);
          })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) {
            return ctx.onMouseleave($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.hostStyleHeight)("width", ctx.hostStyleWidth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel", ctx.hostClassCarousel);
        }
      },
      inputs: {
        height: "height",
        autoplay: "autoplay",
        autoplayInterval: "autoplayInterval",
        pauseOnHover: "pauseOnHover",
        dots: "dots",
        margin: "margin",
        objectFit: "objectFit",
        minSwipeDistance: "minSwipeDistance",
        transitionDuration: "transitionDuration",
        transitionTimingFunction: "transitionTimingFunction",
        counterSeparator: "counterSeparator",
        overflowCellsLimit: "overflowCellsLimit",
        listeners: "listeners",
        cellsToScroll: "cellsToScroll",
        freeScroll: "freeScroll",
        arrows: "arrows",
        arrowsOutside: "arrowsOutside",
        arrowsTheme: "arrowsTheme",
        isCounter: ["counter", "isCounter"],
        images: "images",
        cellWidth: "cellWidth",
        loop: "loop",
        lightDOM: "lightDOM",
        id: "id",
        width: "width",
        borderRadius: "borderRadius",
        videoProperties: "videoProperties",
        cellsToShow: "cellsToShow"
      },
      outputs: {
        events: "events"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 8,
      vars: 6,
      consts: [["class", "carousel-counter", 4, "ngIf"], [1, "carousel-container"], [1, "carousel-cells", 3, "transitionend"], ["cells", ""], ["ngFor", "", 3, "ngForOf"], ["class", "carousel-dots", 4, "ngIf"], ["class", "carousel-arrows", 3, "carousel-arrows-outside", "carousel-dark-arrows", 4, "ngIf"], [1, "carousel-counter"], ["class", "carousel-cell", 3, "width", "border-radius", 4, "ngIf"], [1, "carousel-cell"], ["draggable", "false", 3, "src", "object-fit", 4, "ngIf"], ["draggable", "false", 3, "src"], [1, "carousel-dots"], ["class", "carousel-dot", 3, "carousel-dot-active", 4, "ngFor", "ngForOf"], [1, "carousel-dot"], [1, "carousel-arrows"], [1, "carousel-arrow", "carousel-arrow-prev", 3, "click"], [1, "carousel-arrow", "carousel-arrow-next", 3, "click"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function CarouselComponent_Template_div_transitionend_2_listener($event) {
            return ctx.handleTransitionendCellContainer($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_ng_template_5_Template, 1, 1, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarouselComponent_div_6_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarouselComponent_div_7_Template, 3, 8, "div", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCounter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("carousel-moving", ctx.isMoving);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dots);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isArrows);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["[_nghost-%COMP%]{position:relative;display:block;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;user-select:none;z-index:10000;transform-origin:top left;box-sizing:border-box}[_nghost-%COMP%]   .carousel-container[_ngcontent-%COMP%]{overflow:hidden;width:100%;height:100%;cursor:grab}[_nghost-%COMP%]   .carousel-container.carousel-moving[_ngcontent-%COMP%]{cursor:grabbing}[_nghost-%COMP%]   .carousel-counter[_ngcontent-%COMP%]{text-align:right;position:absolute;z-index:30;transition:opacity .2s;top:8px;right:24px;border-radius:13px;background-color:rgba(23,37,68,.3);font-size:11px;color:#fff;padding:5px 7px;line-height:normal}[_nghost-%COMP%]     .carousel-cells{transition:transform .2s;width:100%;height:100%;display:block;will-change:transform}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}[_nghost-%COMP%]     .carousel-cells .carousel-cell{width:100%;height:100%;position:absolute;overflow:hidden}[_nghost-%COMP%]     .carousel-cells .carousel-cell img, [_nghost-%COMP%]     .carousel-cells .carousel-cell video{width:100%;height:100%;position:relative;object-fit:contain}[_nghost-%COMP%]     .carousel-cells .carousel-cell img.swiper-hide{display:none}[_nghost-%COMP%]     .carousel-cells .carousel-cell .carousel-play{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}[_nghost-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:50%;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}[_nghost-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}[_nghost-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-prev[_ngcontent-%COMP%]{left:-60px}[_nghost-%COMP%]   .carousel-arrows-outside[_ngcontent-%COMP%]   .carousel-arrow-next[_ngcontent-%COMP%]{right:-60px}[_nghost-%COMP%]   .carousel-dark-arrows[_ngcontent-%COMP%]   .carousel-arrow[_ngcontent-%COMP%]{filter:invert(1)}[_nghost-%COMP%]   .carousel-arrow-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.5}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;z-index:10;text-align:center}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot[_ngcontent-%COMP%]{display:inline-block;border:2px solid #fff;border-radius:100px;margin:4px;width:8px;height:8px}[_nghost-%COMP%]   .carousel-dots[_ngcontent-%COMP%]   .carousel-dot-active[_ngcontent-%COMP%]{background-color:#fff}"]
    });

    CarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    CarouselComponent.propDecorators = {
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autoplay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autoplayInterval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pauseOnHover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dots: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      borderRadius: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      margin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      objectFit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minSwipeDistance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      transitionDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      transitionTimingFunction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      videoProperties: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      counterSeparator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      overflowCellsLimit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      listeners: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cellsToShow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cellsToScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      freeScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      arrows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      arrowsOutside: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      arrowsTheme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      images: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cellWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['cellWidth']
      }],
      isCounter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['counter']
      }],
      loop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['loop']
      }],
      lightDOM: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['lightDOM']
      }],
      hostClassCarousel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.carousel']
      }],
      hostStyleHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.height']
      }],
      hostStyleWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.width']
      }],
      onWindowResize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['window:resize', ['$event']]
      }],
      onMousemove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mousemove', ['$event']]
      }],
      onMouseleave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseleave', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'carousel, [carousel]',
          template: "<div class=\"carousel-counter\" *ngIf=\"isCounter\">{{counter}}</div>\r\n\r\n<div class=\"carousel-container\" [class.carousel-moving]=\"isMoving\">\r\n\t<div class=\"carousel-cells\" #cells (transitionend)=\"handleTransitionendCellContainer($event)\">\r\n\t\t<ng-content></ng-content>\r\n\r\n\t\t<ng-template ngFor let-image [ngForOf]=\"images\" let-i=\"index\">\r\n\t\t\t<div class=\"carousel-cell\" \r\n\t\t\t\t[style.width]=\"getCellWidth()+'px'\"\r\n\t\t\t\t[style.border-radius]=\"borderRadius+'px'\"\r\n\t\t\t\t*ngIf=\"i < cellLimit\">\r\n\t\t\t\t<!-- Image -->\r\n\t\t\t\t<img \r\n\t\t\t\t\t*ngIf=\"getImage(i) && getImage(i)['image']\" \r\n\t\t\t\t\t[src]=\"getImage(i)['image']['path']\"\r\n\t\t\t\t\t[style.object-fit]=\"objectFit\"\r\n\t\t\t\t\tdraggable=\"false\" />\r\n\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</div>\r\n\r\n\t<div class=\"carousel-dots\" *ngIf=\"dots\">\r\n\t\t<div class=\"carousel-dot\" [class.carousel-dot-active]=\"i === activeDotIndex\" *ngFor=\"let dot of dotsArr; index as i\"></div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"carousel-arrows\" \r\n\t[class.carousel-arrows-outside]=\"arrowsOutside\" \r\n\t[class.carousel-dark-arrows]=\"arrowsTheme === 'dark'\"\r\n\t*ngIf=\"isArrows\">\r\n\t\r\n\t<div class=\"carousel-arrow carousel-arrow-prev\" [class.carousel-arrow-disabled]=\"isPrevArrowDisabled()\" (click)=\"prev()\"></div>\r\n\t<div class=\"carousel-arrow carousel-arrow-next\" [class.carousel-arrow-disabled]=\"isNextArrowDisabled()\" (click)=\"next()\"></div>\r\n</div>",
          styles: [":host{position:relative;display:block;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;user-select:none;z-index:10000;transform-origin:top left;box-sizing:border-box}:host .carousel-container{overflow:hidden;width:100%;height:100%;cursor:grab}:host .carousel-container.carousel-moving{cursor:grabbing}:host .carousel-counter{text-align:right;position:absolute;z-index:30;transition:opacity .2s;top:8px;right:24px;border-radius:13px;background-color:rgba(23,37,68,.3);font-size:11px;color:#fff;padding:5px 7px;line-height:normal}:host ::ng-deep .carousel-cells{transition:transform .2s;width:100%;height:100%;display:block;will-change:transform}:host ::ng-deep .carousel-cells .carousel-cell.swiper-prev-image{transform:translate3d(-100%,0,0)}:host ::ng-deep .carousel-cells .carousel-cell.swiper-next-image{transform:translate3d(100%,0,0)}:host ::ng-deep .carousel-cells .carousel-cell{width:100%;height:100%;position:absolute;overflow:hidden}:host ::ng-deep .carousel-cells .carousel-cell img,:host ::ng-deep .carousel-cells .carousel-cell video{width:100%;height:100%;position:relative;object-fit:contain}:host ::ng-deep .carousel-cells .carousel-cell img.swiper-hide{display:none}:host ::ng-deep .carousel-cells .carousel-cell .carousel-play{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}:host .carousel-arrow{width:40px;height:40px;background-color:#fff;background-repeat:no-repeat;background-size:31px;background-position:50%;border-radius:100px;position:absolute;top:50%;margin-top:-20px;z-index:10;cursor:pointer;box-shadow:0 0 5px rgba(0,0,0,.15)}:host .carousel-arrow-prev{left:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)}:host .carousel-arrow-next{right:10px;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=)}:host .carousel-arrows-outside .carousel-arrow-prev{left:-60px}:host .carousel-arrows-outside .carousel-arrow-next{right:-60px}:host .carousel-dark-arrows .carousel-arrow{filter:invert(1)}:host .carousel-arrow-disabled{cursor:default;opacity:.5}:host .carousel-dots{position:absolute;left:0;right:0;bottom:0;z-index:10;text-align:center}:host .carousel-dots .carousel-dot{display:inline-block;border:2px solid #fff;border-radius:100px;margin:4px;width:8px;height:8px}:host .carousel-dots .carousel-dot-active{background-color:#fff}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoplay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoplayInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pauseOnHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dots: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        margin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        objectFit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minSwipeDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transitionDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transitionTimingFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        counterSeparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        overflowCellsLimit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listeners: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cellsToScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        freeScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        arrows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        arrowsOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        arrowsTheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hostClassCarousel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.carousel']
        }],
        isCounter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['counter']
        }],
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cellWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['cellWidth']
        }],
        loop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['loop']
        }],
        lightDOM: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['lightDOM']
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }],
        onMousemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousemove', ['$event']]
        }],
        onMouseleave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave', ['$event']]
        }],
        hostStyleHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.height']
        }],
        hostStyleWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.width']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        borderRadius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        videoProperties: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cellsToShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var IvyCarouselModule = function IvyCarouselModule() {
      _classCallCheck(this, IvyCarouselModule);
    };

    IvyCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IvyCarouselModule
    });
    IvyCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IvyCarouselModule_Factory(t) {
        return new (t || IvyCarouselModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IvyCarouselModule, {
        declarations: function declarations() {
          return [CarouselComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [CarouselComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IvyCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [CarouselComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [CarouselComponent],
          providers: [],
          bootstrap: [],
          entryComponents: [CarouselComponent]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of angular-responsive-carousel
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=angular-responsive-carousel.js.map

    /***/

  },

  /***/
  "./src/app/pages/movie/components/movie-actor/movie-actor.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/movie/components/movie-actor/movie-actor.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MovieActorComponent */

  /***/
  function srcAppPagesMovieComponentsMovieActorMovieActorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieActorComponent", function () {
      return MovieActorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MovieActorComponent = /*#__PURE__*/function () {
      function MovieActorComponent() {
        _classCallCheck(this, MovieActorComponent);
      }

      _createClass(MovieActorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MovieActorComponent;
    }();

    MovieActorComponent.ɵfac = function MovieActorComponent_Factory(t) {
      return new (t || MovieActorComponent)();
    };

    MovieActorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieActorComponent,
      selectors: [["app-movie-actor"]],
      decls: 65,
      vars: 0,
      consts: [[1, "home-page"], [1, "header-section"], [1, "content"], [1, "container"], [1, "actor"], [1, "actor-image", "mx-auto"], ["src", "../../../../../assets/will_smith.jpg", "alt", "will smith", 1, "img-responsive", "rounded-circle"], [1, "shor-desc", "text-white", "text-center", "mt-3", "mb-5"], [1, "actor-info"], [1, "row"], [1, "col-8"], [1, "info-box", "p-4"], [1, "text-white"], [1, "text-white", "mb-2"], ["href", "", 1, "light-orange"], [1, "col-4"], [1, "text-white", "mb-5"], [1, "list-unstyled", "text-white"], [1, "d-inline-block"], [1, "light-orange"], [1, "d-inline-block", "pull-right"], [1, ""], [1, "award-section", "py-5"], [1, "text-white", "mb-4"], [1, "award-content"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "result-item"], [1, "item-overlay", "light-orange"], [1, "overlay-content"], ["aria-hidden", "true", 1, "fa", "fa-external-link"], ["src", "../../../../../assets/Chopard Trophy.jpg", "alt", "name", 1, "img-responsive"], [1, "desc", "text-white", "mt-3"], [1, "date"]],
      template: function MovieActorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Willcard Carroll Smith JR.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mini BIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor facilis facere temporibus eum aliquam alias sit velit blanditiis repudiandae? Adipisci incidunt deleniti repellendus, saepe dicta libero odio dolore harum autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor facilis facere temporibus eum aliquam alias sit velit blanditiis repudiandae? Adipisci incidunt deleniti repellendus, saepe dicta libero odio dolore harum autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor facilis facere temporibus eum aliquam alias sit velit blanditiis repudiandae? Adipisci incidunt deleniti repellendus, saepe dicta libero odio dolore harum autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor facilis facere temporibus eum aliquam alias sit velit blanditiis repudiandae? Adipisci incidunt deleniti repellendus, saepe dicta libero odio dolore harum autem. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Read More...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Generals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Birth Date : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "1968-09-25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "height : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "187.96");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Birth Place : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Philadelpha, Pennsylvania, USA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Gender : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Spouses : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "2 Children");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Award");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "View details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Kevin at the Cannes Film Festival - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "The Chopard Trophy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  height: 100vh;\n  background: url('Will-Smith-info.jpg') top center no-repeat;\n  background-size: cover;\n  background-color: #453c3c;\n  background-blend-mode: exclusion;\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateY(25vh);\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-image[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .info-box[_ngcontent-%COMP%] {\n  background-color: #383838;\n  opacity: 0.9;\n  height: 100%;\n  border-radius: 10px;\n  font-size: 0.7rem;\n}\n.home-page[_ngcontent-%COMP%]   .award-section[_ngcontent-%COMP%] {\n  background-color: #383838;\n}\n.home-page[_ngcontent-%COMP%]   .award-section[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 0px 25px 0px #383838;\n}\n.home-page[_ngcontent-%COMP%]   .award-section[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .item-overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n.home-page[_ngcontent-%COMP%]   .award-section[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]:hover   .item-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  inset: 0;\n  text-align: center;\n  -webkit-backdrop-filter: blur(1px);\n          backdrop-filter: blur(1px);\n  background-color: rgba(87, 85, 85, 0.82);\n  font-size: 1.5rem;\n  cursor: pointer;\n  box-shadow: 1px 2px 3px 2px #000;\n}\n.home-page[_ngcontent-%COMP%]   .award-section[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]:hover   .item-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.home-page[_ngcontent-%COMP%]   .award-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #8f8f8f;\n}\n.home-page[_ngcontent-%COMP%]   .award-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  float: right;\n  line-height: 2.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW92aWUvY29tcG9uZW50cy9tb3ZpZS1hY3Rvci9DOlxcVXNlcnNcXHRhbGFsXFxEZXNrdG9wXFx0YXNrc1xcRnJvbnRFbmRUYXNrXFxjaW5pbWF0aWMvc3JjXFxhcHBcXHBhZ2VzXFxtb3ZpZVxcY29tcG9uZW50c1xcbW92aWUtYWN0b3JcXG1vdmllLWFjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tb3ZpZS9jb21wb25lbnRzL21vdmllLWFjdG9yL21vdmllLWFjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tb3ZpZS9jb21wb25lbnRzL21vdmllLWFjdG9yL0M6XFxVc2Vyc1xcdGFsYWxcXERlc2t0b3BcXHRhc2tzXFxGcm9udEVuZFRhc2tcXGNpbmltYXRpYy9zcmNcXF92YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FDRko7QURHSTtFQUNFLDJCQUFBO0FDRE47QURHVTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRGQ7QURJYztFQUNJLHlCRWJKO0VGY0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRmxCO0FEUUU7RUFDRSx5QkV4QlU7QURrQmQ7QURPSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQ0FBQTtBQ05OO0FET007RUFBZSxhQUFBO0FDSnJCO0FETVU7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNKZDtBREtjO0VBQUksaUJBQUE7QUNGbEI7QURNSTtFQUNJLGlCQUFBO0VBQ0EsY0V2REQ7QURtRFA7QURLUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0haIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW92aWUvY29tcG9uZW50cy9tb3ZpZS1hY3Rvci9tb3ZpZS1hY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi92YXJpYWJsZVwiO1xyXG5cclxuLmhvbWUtcGFnZSB7XHJcbiAgLmhlYWRlci1zZWN0aW9uIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvV2lsbC1TbWl0aC1pbmZvLmpwZ1wiKSB0b3AgY2VudGVyIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjkgNjAgNjApO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBleGNsdXNpb247XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXZoKTtcclxuICAgICAgLmFjdG9yIHtcclxuICAgICAgICAgIC5hY3Rvci1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7ICAgICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3Rvci1pbmZvIHtcclxuICAgICAgICAgICAgICAuaW5mby1ib3gge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC45O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmF3YXJkLXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJsYWNrO1xyXG4gICAgLnJlc3VsdC1pdGVtIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCAjNTA0ZjRmO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMHB4ICRsaWdodC1ibGFjaztcclxuICAgICAgLml0ZW0tb3ZlcmxheSB7ZGlzcGxheTogbm9uZTt9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgLml0ZW0tb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBpbnNldDogMDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4Nyw4NSw4NSwwLjgyKTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMnB4ICMwMDA7XHJcbiAgICAgICAgICAgICAgcCB7IGZvbnQtc2l6ZTogMS4xcmVtIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDYgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAuNnJlbTtcclxuICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIuaG9tZS1wYWdlIC5oZWFkZXItc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9XaWxsLVNtaXRoLWluZm8uanBnXCIpIHRvcCBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUzYzNjO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGV4Y2x1c2lvbjtcbn1cbi5ob21lLXBhZ2UgLmhlYWRlci1zZWN0aW9uIC5jb250ZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1dmgpO1xufVxuLmhvbWUtcGFnZSAuaGVhZGVyLXNlY3Rpb24gLmNvbnRlbnQgLmFjdG9yIC5hY3Rvci1pbWFnZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5ob21lLXBhZ2UgLmhlYWRlci1zZWN0aW9uIC5jb250ZW50IC5hY3RvciAuYWN0b3ItaW5mbyAuaW5mby1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xuICBvcGFjaXR5OiAwLjk7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG4uaG9tZS1wYWdlIC5hd2FyZC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcbn1cbi5ob21lLXBhZ2UgLmF3YXJkLXNlY3Rpb24gLnJlc3VsdC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDBweCAjMzgzODM4O1xufVxuLmhvbWUtcGFnZSAuYXdhcmQtc2VjdGlvbiAucmVzdWx0LWl0ZW0gLml0ZW0tb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaG9tZS1wYWdlIC5hd2FyZC1zZWN0aW9uIC5yZXN1bHQtaXRlbTpob3ZlciAuaXRlbS1vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODcsIDg1LCA4NSwgMC44Mik7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDJweCAjMDAwO1xufVxuLmhvbWUtcGFnZSAuYXdhcmQtc2VjdGlvbiAucmVzdWx0LWl0ZW06aG92ZXIgLml0ZW0tb3ZlcmxheSBwIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4uaG9tZS1wYWdlIC5hd2FyZC1zZWN0aW9uIGg2IHNwYW4ge1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgY29sb3I6ICM4ZjhmOGY7XG59XG4uaG9tZS1wYWdlIC5hd2FyZC1zZWN0aW9uIGg2IHNwYW46bGFzdC1jaGlsZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbn0iLCIkbGlnaHQtb3JhbmdlOiAjZmZlODhhO1xyXG4kb3JhbmdlOiAjZjhkMTM2O1xyXG4kbGlnaHQtZ3JleTogI2M4YzdjNztcclxuJGdyZXk6ICM4ZjhmOGY7XHJcbiRzZXBhcmF0b3I6ICM3MjcyNzI7XHJcbiRsaWdodC1ibGFjazogIzM4MzgzODtcclxuJGJsYWNrOiAjMzAzMDMwXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieActorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-actor',
          templateUrl: './movie-actor.component.html',
          styleUrls: ['./movie-actor.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/movie/components/movie-details/movie-details.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/movie/components/movie-details/movie-details.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: MovieDetailsComponent */

  /***/
  function srcAppPagesMovieComponentsMovieDetailsMovieDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function () {
      return MovieDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-responsive-carousel */
    "./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MovieDetailsComponent = /*#__PURE__*/function () {
      function MovieDetailsComponent() {
        _classCallCheck(this, MovieDetailsComponent);

        this.images = [{
          path: '../../../../../assets/bad-boys.jpg'
        }, {
          path: '../../../../../assets/maxresdefault%20(1).jpg'
        }, {
          path: '../../../../../assets/bad-boys.jpg'
        }];
      }

      _createClass(MovieDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MovieDetailsComponent;
    }();

    MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) {
      return new (t || MovieDetailsComponent)();
    };

    MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieDetailsComponent,
      selectors: [["app-movie-details"]],
      decls: 185,
      vars: 1,
      consts: [[1, "home-page"], [1, "header-section"], [1, "content"], [1, "container"], [1, "rate"], ["aria-hidden", "true", 1, "fa", "fa-star", "fa-fw", "fa-2x", "light-orange"], [1, "d-inline-block"], [1, "top-number"], [1, "bottom-number"], [1, "title"], [1, "my-3"], [1, "tags"], [1, "list-unstyled", "d-flex"], [1, "movies-slider"], [1, "carousel-items"], ["height", "300", "cellsToShow", "2.5", "lightDOM", "true", "overflowCellsLimit", "2", "freeScroll", "true", "arrows", "false", "borderRadius", "10", 3, "images"], [1, "body-section"], [1, "row", "w-100", "mx-auto"], [1, "col-7", "px-0"], [1, "body-left"], [1, "description"], [1, "col-11", "col-lg-10", "col-xl-7", "mx-auto"], [1, "text-white"], [1, "user-reviews", "pt-4"], [1, "offset-2", "pl-5"], [1, "reviews"], [1, "star-rate"], ["aria-hidden", "true", 1, "fa", "fa-star", "fa-fw", "light-orange"], [1, "text-white", "ml-2"], [1, "date", "mt-2"], ["routerLink", "", 1, "light-orange"], [1, "reviews-content"], [1, "w-75", "offset-3", "mt-5", "mb-4"], [1, "text-white", "ml-3"], ["routerLink", "", 1, "light-orange", "view-all", "d-inline-block", "my-3"], [1, "col-5", "px-0"], [1, "body-right", "pl-5"], [1, "casts-content"], [1, "list-unstyled"], [1, "py-3"], ["src", "../../../assets/will_smith.jpg", "alt", "Will Smith", 1, "rounded-circle"], ["routerLink", "/actor", 1, "text-white", "d-inline-block", "ml-3"], [1, "light-orange"], ["src", "../../../assets/Martin Lawrence.jpg", "alt", "Martin Lawrence", 1, "rounded-circle"], ["src", "../../../assets/Vanessa Hudgens.jpg", "alt", "Vanessa Hudgens", 1, "rounded-circle"], ["src", "../../../assets/Alexander Ludwig.jpg", "alt", "Alexander Ludwig", 1, "rounded-circle"], ["src", "../../../assets/Paola Nu\xF1ez Ludwig.jpg", "alt", "Paola Nu\xF1ez Ludwig", 1, "rounded-circle"], ["src", "../../../assets/Kate del Castillo.jpg", "alt", "Kate del Castillo", 1, "rounded-circle"], [1, "crew-content", "pt-5"], [1, "h1", "text-white"], [1, "text-white", "mb-2"], [1, "crew-member", "mb-2"], [1, "row"], [1, "col-4"], [1, "name", "light-orange"], [1, "col"], [1, "position", "text-white"]],
      template: function MovieDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "6.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "/10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "136.9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Title for movies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Comedy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Crime");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Twillar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "carousel", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minima non sed. A animi autem ea est expedita.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "User Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Love it");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "17 August 2020 | by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Zaid Khoury");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "See all my reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur distinctio et fugiat in itaque labore laborum magni necessitatibus odio tenetur! Accusantium architecto consectetur dolore est eum exercitationem laborum quae sit?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Love it");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "17 August 2020 | by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Zaid Khoury");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "See all my reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur distinctio et fugiat in itaque labore laborum magni necessitatibus odio tenetur! Accusantium architecto consectetur dolore est eum exercitationem laborum quae sit?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "hr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Love it");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "17 August 2020 | by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Zaid Khoury");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "See all my reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur distinctio et fugiat in itaque labore laborum magni necessitatibus odio tenetur! Accusantium architecto consectetur dolore est eum exercitationem laborum quae sit?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "View All Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Casts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ul", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Will Smith as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Mike");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Martin Lawrence as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Marcus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Vanessa Hudgens as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Kelly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Alexander Ludwig as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Dorn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Paola Nu\xF1ez Ludwig as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Rita");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Kate del Castillo as ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Isabel Aretas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h2", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Crew");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h6", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Produced by");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Bill Bannerman");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h6", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "line producer:additional photograph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Doug Belgrad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h6", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "producer (produced by) (p.g.a)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h6", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Doug Belgrad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h6", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "producer (produced by) (p.g.a)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "View All Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images);
        }
      },
      directives: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\n  height: 100vh;\n  background: url('header-background.jpg') top center no-repeat;\n  background-size: cover;\n  background-color: #453c3c;\n  background-blend-mode: exclusion;\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  transform: translateY(25vh);\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .top-number[_ngcontent-%COMP%] {\n  color: #c8c7c7;\n  font-size: 13px;\n  font-weight: 600;\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .top-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #fff;\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%]   .bottom-number[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #c8c7c7;\n  font-weight: 600;\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #c8c7c7;\n  font-weight: 300;\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: #383838;\n  color: #fff;\n  font-size: 13px;\n  padding: 8px 45px;\n  border-radius: 20px;\n  margin-right: 20px;\n}\n.home-page[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .movies-slider[_ngcontent-%COMP%] {\n  width: 87vw;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%] {\n  -o-box-shadow: 0 0 35px -10px #383838;\n  box-shadow: 0 0 35px -10px #383838;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-left[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  background-color: #383838;\n  padding-top: 70px;\n  padding-bottom: 40px;\n  -o-box-shadow: 0px 0 35px 0px #303030;\n  box-shadow: 0px 0 35px 0px #303030;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-left[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 0.8rem;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-left[_ngcontent-%COMP%]   .user-reviews[_ngcontent-%COMP%] {\n  background-color: #303030;\n  padding-bottom: 100px;\n  -o-box-shadow: inset 0 -4px 20px #222;\n  box-shadow: inset 0 -4px 20px #222;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-left[_ngcontent-%COMP%]   .user-reviews[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%] {\n  width: 92%;\n  font-size: 0.8rem;\n  font-weight: 300;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-left[_ngcontent-%COMP%]   .user-reviews[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-left[_ngcontent-%COMP%]   .user-reviews[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffe88a;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-left[_ngcontent-%COMP%]   .user-reviews[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  background-color: #727272;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-right[_ngcontent-%COMP%] {\n  background-color: #383838;\n  padding-top: 70px;\n  height: 100%;\n  -o-box-shadow: -5px 0 35px 0px #303030;\n  box-shadow: -5px 0 35px 0px #303030;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-right[_ngcontent-%COMP%]   .casts-content[_ngcontent-%COMP%], .home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-right[_ngcontent-%COMP%]   .crew-content[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-right[_ngcontent-%COMP%]   .casts-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #727272;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-right[_ngcontent-%COMP%]   .casts-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-right[_ngcontent-%COMP%]   .casts-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-right[_ngcontent-%COMP%]   .casts-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-right[_ngcontent-%COMP%]   .crew-content[_ngcontent-%COMP%]    > h6[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .body-right[_ngcontent-%COMP%]   .crew-content[_ngcontent-%COMP%]   .crew-member[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.home-page[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%]:hover {\n  color: #ffe88a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW92aWUvY29tcG9uZW50cy9tb3ZpZS1kZXRhaWxzL0M6XFxVc2Vyc1xcdGFsYWxcXERlc2t0b3BcXHRhc2tzXFxGcm9udEVuZFRhc2tcXGNpbmltYXRpYy9zcmNcXF9taXhpbi5zY3NzIiwic3JjL2FwcC9wYWdlcy9tb3ZpZS9jb21wb25lbnRzL21vdmllLWRldGFpbHMvQzpcXFVzZXJzXFx0YWxhbFxcRGVza3RvcFxcdGFza3NcXEZyb250RW5kVGFza1xcY2luaW1hdGljL3NyY1xcYXBwXFxwYWdlc1xcbW92aWVcXGNvbXBvbmVudHNcXG1vdmllLWRldGFpbHNcXG1vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vdmllL2NvbXBvbmVudHMvbW92aWUtZGV0YWlscy9tb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tb3ZpZS9jb21wb25lbnRzL21vdmllLWRldGFpbHMvQzpcXFVzZXJzXFx0YWxhbFxcRGVza3RvcFxcdGFza3NcXEZyb250RW5kVGFza1xcY2luaW1hdGljL3NyY1xcX3ZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQTtBQ0lFO0VBQ0UsYUFBQTtFQUNBLDZEQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FDRUo7QURESTtFQUNFLDJCQUFBO0FDR047QURGTTtFQUNFLGNBQUE7QUNJUjtBREhRO0VBQ0UsY0ViRztFRmNILGVBQUE7RUFDQSxnQkFBQTtBQ0tWO0FESlU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ01aO0FESFE7RUFDRSxlQUFBO0VBQ0EsY0V2Qkc7RUZ3QkgsZ0JBQUE7QUNLVjtBREZNO0VBQ0UsV0FBQTtBQ0lSO0FESFE7RUFDRSxjRTlCRztFRitCSCxnQkFBQTtBQ0tWO0FERk07RUFDRSx5QkVoQ007RUZpQ04sV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNJUjtBREZNO0VBQWlCLFdBQUE7QUNLdkI7QURGRTtFRHRDQSxxQ0FBQTtFQUNBLGtDQUFBO0FFNkNGO0FETE07RUFDRSx5QkU5Q007RUYrQ04saUJBQUE7RUFDQSxvQkFBQTtFRDVDTixxQ0FBQTtFQUNBLGtDQUFBO0FFc0RGO0FEVFE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDV1Y7QURSTTtFQUNFLHlCRXZEQTtFRndEQSxxQkFBQTtFRHJETixxQ0FBQTtFQUNBLGtDQUFBO0FFa0VGO0FEWlE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2NWO0FEYlU7RUFDRSwwQkFBQTtBQ2VaO0FEZFk7RUFDRSxjRXZFQztBRHVGZjtBRGJVO0VBQUsseUJFdEVIO0FEc0ZaO0FEWEk7RUFDRSx5QkUzRVE7RUY0RVIsaUJBQUE7RUFDQSxZQUFBO0VEekVKLHNDQUFBO0VBQ0EsbUNBQUE7QUV5RkY7QURmTTtFQUFnQyxVQUFBO0FDa0J0QztBRGhCUTtFQUNFLGdDQUFBO0FDa0JWO0FEakJVO0VBQU0sWUFBQTtFQUFjLFdBQUE7QUNxQjlCO0FEcEJVO0VBQVUsMEJBQUE7QUN1QnBCO0FEdEJVO0VBQWUsbUJBQUE7QUN5QnpCO0FEckJRO0VBQVMsZ0JBQUE7QUN3QmpCO0FEdEJVO0VBQUksaUJBQUE7QUN5QmQ7QURwQkk7RUFDRSwwQkFBQTtBQ3NCTjtBRHJCTTtFQUFVLGNFdkdEO0FEK0hmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW92aWUvY29tcG9uZW50cy9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBNSVhJTiBGVU5DVElPTiBGT1IgU0FTUyBGSUxFXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG5cclxuQG1peGluIGJveFNoYWRvdygkeCwgJHksICRzcHJlYWQsICRkZXB0aCwgJGNvbG9yKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkeCAkeSAkc3ByZWFkICRkZXB0aCAkY29sb3I7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkeCAkeSAkc3ByZWFkICRkZXB0aCAkY29sb3I7O1xyXG4gIC1vLWJveC1zaGFkb3c6ICR4ICR5ICRzcHJlYWQgJGRlcHRoICRjb2xvcjs7XHJcbiAgYm94LXNoYWRvdzogJHggJHkgJHNwcmVhZCAkZGVwdGggJGNvbG9yOztcclxufVxyXG4iLCJAaW1wb3J0IFwic3JjL3ZhcmlhYmxlXCI7XHJcbkBpbXBvcnQgXCJzcmMvbWl4aW5cIjtcclxuXHJcbi5ob21lLXBhZ2Uge1xyXG4gIC5oZWFkZXItc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2hlYWRlci1iYWNrZ3JvdW5kLmpwZ1wiKSB0b3AgY2VudGVyIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjkgNjAgNjApO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBleGNsdXNpb247XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXZoKTtcclxuICAgICAgLnJhdGUge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIC50b3AtbnVtYmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkbGlnaHQtZ3JleTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvdHRvbS1udW1iZXIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgY29sb3I6ICRsaWdodC1ncmV5O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6ICRsaWdodC1ncmV5O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRhZ3MgbGkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ibGFjaztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDQ1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcclxuICAgICAgfVxyXG4gICAgICAubW92aWVzLXNsaWRlciB7IHdpZHRoOiA4N3Z3OyB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ib2R5LXNlY3Rpb24ge1xyXG4gICAgQGluY2x1ZGUgYm94U2hhZG93KDAsIDAsIDM1cHgsIC0xMHB4LCAkbGlnaHQtYmxhY2spO1xyXG4gICAgLmJvZHktbGVmdCB7XHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJsYWNrO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIEBpbmNsdWRlIGJveFNoYWRvdygwcHgsIDAsIDM1cHgsIDBweCwgJGJsYWNrKTtcclxuICAgICAgICBwIHsgXHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLXJldmlld3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgQGluY2x1ZGUgYm94U2hhZG93KGluc2V0LCAwLCAtNHB4LCAyMHB4LCAjMjIyKTtcclxuICAgICAgICAucmV2aWV3cyB7XHJcbiAgICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBhIHsgXHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0LW9yYW5nZTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhyIHsgYmFja2dyb3VuZC1jb2xvcjogJHNlcGFyYXRvcn1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm9keS1yaWdodCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ibGFjaztcclxuICAgICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgQGluY2x1ZGUgYm94U2hhZG93KC01cHgsIDAsIDM1cHgsIDBweCwgJGJsYWNrKTtcclxuICAgICAgLmNhc3RzLWNvbnRlbnQsIC5jcmV3LWNvbnRlbnQgeyB3aWR0aDogNjUlOyB9XHJcbiAgICAgIC5jYXN0cy1jb250ZW50IHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHNlcGFyYXRvcjtcclxuICAgICAgICAgIGltZyB7IGhlaWdodDogNTBweDsgd2lkdGg6IDUwcHg7IH1cclxuICAgICAgICAgIGE6aG92ZXIgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY3Jldy1jb250ZW50IHtcclxuICAgICAgICAmID4gaDYgeyBmb250LXdlaWdodDogNjAwOyB9XHJcbiAgICAgICAgLmNyZXctbWVtYmVyIHsgICAgICAgIFxyXG4gICAgICAgICAgaDYge2ZvbnQtc2l6ZTogLjhyZW07fVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnZpZXctYWxsIHsgXHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAmOmhvdmVyIHsgY29sb3I6ICRsaWdodC1vcmFuZ2U7IH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLypcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICBNSVhJTiBGVU5DVElPTiBGT1IgU0FTUyBGSUxFXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG4uaG9tZS1wYWdlIC5oZWFkZXItc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9oZWFkZXItYmFja2dyb3VuZC5qcGdcIikgdG9wIGNlbnRlciBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTNjM2M7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZXhjbHVzaW9uO1xufVxuLmhvbWUtcGFnZSAuaGVhZGVyLXNlY3Rpb24gLmNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjV2aCk7XG59XG4uaG9tZS1wYWdlIC5oZWFkZXItc2VjdGlvbiAuY29udGVudCAucmF0ZSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmhvbWUtcGFnZSAuaGVhZGVyLXNlY3Rpb24gLmNvbnRlbnQgLnJhdGUgLnRvcC1udW1iZXIge1xuICBjb2xvcjogI2M4YzdjNztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmhvbWUtcGFnZSAuaGVhZGVyLXNlY3Rpb24gLmNvbnRlbnQgLnJhdGUgLnRvcC1udW1iZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6ICNmZmY7XG59XG4uaG9tZS1wYWdlIC5oZWFkZXItc2VjdGlvbiAuY29udGVudCAucmF0ZSAuYm90dG9tLW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICNjOGM3Yzc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaG9tZS1wYWdlIC5oZWFkZXItc2VjdGlvbiAuY29udGVudCBoMSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhvbWUtcGFnZSAuaGVhZGVyLXNlY3Rpb24gLmNvbnRlbnQgaDEgc3BhbiB7XG4gIGNvbG9yOiAjYzhjN2M3O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmhvbWUtcGFnZSAuaGVhZGVyLXNlY3Rpb24gLmNvbnRlbnQgLnRhZ3MgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiA4cHggNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmhvbWUtcGFnZSAuaGVhZGVyLXNlY3Rpb24gLmNvbnRlbnQgLm1vdmllcy1zbGlkZXIge1xuICB3aWR0aDogODd2dztcbn1cbi5ob21lLXBhZ2UgLmJvZHktc2VjdGlvbiB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDM1cHggLTEwcHggIzM4MzgzODtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMzVweCAtMTBweCAjMzgzODM4O1xuICAtby1ib3gtc2hhZG93OiAwIDAgMzVweCAtMTBweCAjMzgzODM4O1xuICBib3gtc2hhZG93OiAwIDAgMzVweCAtMTBweCAjMzgzODM4O1xufVxuLmhvbWUtcGFnZSAuYm9keS1zZWN0aW9uIC5ib2R5LWxlZnQgLmRlc2NyaXB0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwIDM1cHggMHB4ICMzMDMwMzA7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDAgMzVweCAwcHggIzMwMzAzMDtcbiAgLW8tYm94LXNoYWRvdzogMHB4IDAgMzVweCAwcHggIzMwMzAzMDtcbiAgYm94LXNoYWRvdzogMHB4IDAgMzVweCAwcHggIzMwMzAzMDtcbn1cbi5ob21lLXBhZ2UgLmJvZHktc2VjdGlvbiAuYm9keS1sZWZ0IC5kZXNjcmlwdGlvbiBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uaG9tZS1wYWdlIC5ib2R5LXNlY3Rpb24gLmJvZHktbGVmdCAudXNlci1yZXZpZXdzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgLTRweCAyMHB4ICMyMjI7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAtNHB4IDIwcHggIzIyMjtcbiAgLW8tYm94LXNoYWRvdzogaW5zZXQgMCAtNHB4IDIwcHggIzIyMjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHB4IDIwcHggIzIyMjtcbn1cbi5ob21lLXBhZ2UgLmJvZHktc2VjdGlvbiAuYm9keS1sZWZ0IC51c2VyLXJldmlld3MgLnJldmlld3Mge1xuICB3aWR0aDogOTIlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5ob21lLXBhZ2UgLmJvZHktc2VjdGlvbiAuYm9keS1sZWZ0IC51c2VyLXJldmlld3MgLnJldmlld3MgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmhvbWUtcGFnZSAuYm9keS1zZWN0aW9uIC5ib2R5LWxlZnQgLnVzZXItcmV2aWV3cyAucmV2aWV3cyBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmU4OGE7XG59XG4uaG9tZS1wYWdlIC5ib2R5LXNlY3Rpb24gLmJvZHktbGVmdCAudXNlci1yZXZpZXdzIC5yZXZpZXdzIGhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyNzI3Mjtcbn1cbi5ob21lLXBhZ2UgLmJvZHktc2VjdGlvbiAuYm9keS1yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAwIDM1cHggMHB4ICMzMDMwMzA7XG4gIC1tb3otYm94LXNoYWRvdzogLTVweCAwIDM1cHggMHB4ICMzMDMwMzA7XG4gIC1vLWJveC1zaGFkb3c6IC01cHggMCAzNXB4IDBweCAjMzAzMDMwO1xuICBib3gtc2hhZG93OiAtNXB4IDAgMzVweCAwcHggIzMwMzAzMDtcbn1cbi5ob21lLXBhZ2UgLmJvZHktc2VjdGlvbiAuYm9keS1yaWdodCAuY2FzdHMtY29udGVudCwgLmhvbWUtcGFnZSAuYm9keS1zZWN0aW9uIC5ib2R5LXJpZ2h0IC5jcmV3LWNvbnRlbnQge1xuICB3aWR0aDogNjUlO1xufVxuLmhvbWUtcGFnZSAuYm9keS1zZWN0aW9uIC5ib2R5LXJpZ2h0IC5jYXN0cy1jb250ZW50IGxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MjcyNzI7XG59XG4uaG9tZS1wYWdlIC5ib2R5LXNlY3Rpb24gLmJvZHktcmlnaHQgLmNhc3RzLWNvbnRlbnQgbGkgaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cbi5ob21lLXBhZ2UgLmJvZHktc2VjdGlvbiAuYm9keS1yaWdodCAuY2FzdHMtY29udGVudCBsaSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uaG9tZS1wYWdlIC5ib2R5LXNlY3Rpb24gLmJvZHktcmlnaHQgLmNhc3RzLWNvbnRlbnQgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uaG9tZS1wYWdlIC5ib2R5LXNlY3Rpb24gLmJvZHktcmlnaHQgLmNyZXctY29udGVudCA+IGg2IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ob21lLXBhZ2UgLmJvZHktc2VjdGlvbiAuYm9keS1yaWdodCAuY3Jldy1jb250ZW50IC5jcmV3LW1lbWJlciBoNiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmhvbWUtcGFnZSAuYm9keS1zZWN0aW9uIC52aWV3LWFsbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmhvbWUtcGFnZSAuYm9keS1zZWN0aW9uIC52aWV3LWFsbDpob3ZlciB7XG4gIGNvbG9yOiAjZmZlODhhO1xufSIsIiRsaWdodC1vcmFuZ2U6ICNmZmU4OGE7XHJcbiRvcmFuZ2U6ICNmOGQxMzY7XHJcbiRsaWdodC1ncmV5OiAjYzhjN2M3O1xyXG4kZ3JleTogIzhmOGY4ZjtcclxuJHNlcGFyYXRvcjogIzcyNzI3MjtcclxuJGxpZ2h0LWJsYWNrOiAjMzgzODM4O1xyXG4kYmxhY2s6ICMzMDMwMzBcclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-details',
          templateUrl: './movie-details.component.html',
          styleUrls: ['./movie-details.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/movie/components/movies-list/movies-list.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/movie/components/movies-list/movies-list.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MoviesListComponent */

  /***/
  function srcAppPagesMovieComponentsMoviesListMoviesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function () {
      return MoviesListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MoviesListComponent = /*#__PURE__*/function () {
      function MoviesListComponent() {
        _classCallCheck(this, MoviesListComponent);
      }

      _createClass(MoviesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoviesListComponent;
    }();

    MoviesListComponent.ɵfac = function MoviesListComponent_Factory(t) {
      return new (t || MoviesListComponent)();
    };

    MoviesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MoviesListComponent,
      selectors: [["app-movies-list"]],
      decls: 2,
      vars: 0,
      template: function MoviesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "movies-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllL2NvbXBvbmVudHMvbW92aWVzLWxpc3QvbW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movies-list',
          templateUrl: './movies-list.component.html',
          styleUrls: ['./movies-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/movie/movie-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/movie/movie-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: MovieRoutingModule */

  /***/
  function srcAppPagesMovieMovieRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieRoutingModule", function () {
      return MovieRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_movie_actor_movie_actor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/movie-actor/movie-actor.component */
    "./src/app/pages/movie/components/movie-actor/movie-actor.component.ts");
    /* harmony import */


    var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/movie-details/movie-details.component */
    "./src/app/pages/movie/components/movie-details/movie-details.component.ts");
    /* harmony import */


    var _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/movies-list/movies-list.component */
    "./src/app/pages/movie/components/movies-list/movies-list.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'movies',
      pathMatch: 'full'
    }, {
      path: 'shop',
      redirectTo: 'movies',
      pathMatch: 'full'
    }, {
      path: 'shows',
      redirectTo: 'movies',
      pathMatch: 'full'
    }, {
      path: 'about-us',
      redirectTo: 'movies',
      pathMatch: 'full'
    }, {
      path: 'movies',
      component: _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"]
    }, {
      path: 'list',
      component: _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__["MoviesListComponent"]
    }, {
      path: 'actor',
      component: _components_movie_actor_movie_actor_component__WEBPACK_IMPORTED_MODULE_2__["MovieActorComponent"]
    }];

    var MovieRoutingModule = function MovieRoutingModule() {
      _classCallCheck(this, MovieRoutingModule);
    };

    MovieRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MovieRoutingModule
    });
    MovieRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MovieRoutingModule_Factory(t) {
        return new (t || MovieRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MovieRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/movie/movie.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/movie/movie.module.ts ***!
    \*********************************************/

  /*! exports provided: MovieModule */

  /***/
  function srcAppPagesMovieMovieModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieModule", function () {
      return MovieModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _movie_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./movie-routing.module */
    "./src/app/pages/movie/movie-routing.module.ts");
    /* harmony import */


    var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-responsive-carousel */
    "./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js");
    /* harmony import */


    var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/movie-details/movie-details.component */
    "./src/app/pages/movie/components/movie-details/movie-details.component.ts");
    /* harmony import */


    var _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/movies-list/movies-list.component */
    "./src/app/pages/movie/components/movies-list/movies-list.component.ts");
    /* harmony import */


    var _components_movie_actor_movie_actor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/movie-actor/movie-actor.component */
    "./src/app/pages/movie/components/movie-actor/movie-actor.component.ts");

    var MovieModule = function MovieModule() {
      _classCallCheck(this, MovieModule);
    };

    MovieModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MovieModule
    });
    MovieModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MovieModule_Factory(t) {
        return new (t || MovieModule)();
      },
      imports: [[_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _movie_routing_module__WEBPACK_IMPORTED_MODULE_2__["MovieRoutingModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MovieModule, {
        declarations: [_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"], _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"], _components_movie_actor_movie_actor_component__WEBPACK_IMPORTED_MODULE_6__["MovieActorComponent"]],
        imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _movie_routing_module__WEBPACK_IMPORTED_MODULE_2__["MovieRoutingModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"], _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"], _components_movie_actor_movie_actor_component__WEBPACK_IMPORTED_MODULE_6__["MovieActorComponent"]],
          imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _movie_routing_module__WEBPACK_IMPORTED_MODULE_2__["MovieRoutingModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=movie-movie-module-es5.js.map