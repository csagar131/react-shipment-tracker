import {
  getTrackingDetails
} from "/build/_shared/chunk-HQUBUBXA.js";
import {
  MainContainer,
  Title
} from "/build/_shared/chunk-TP4D7MDB.js";
import {
  AntdIcon_default,
  CheckCircleFilled_default,
  Container,
  CustomButton,
  CustomInput,
  FlexContainer,
  Footer,
  FooterDetails_default,
  SellerProductDetails_default,
  SpaceBetweenContainer,
  _objectSpread2,
  button_default,
  col_default,
  divider_default,
  notification_default,
  require_react_responsive,
  row_default,
  steps_default
} from "/build/_shared/chunk-566A7TM2.js";
import "/build/_shared/chunk-IDMHLWP4.js";
import {
  data_context_default
} from "/build/_shared/chunk-AHJ6HSVE.js";
import {
  media_default
} from "/build/_shared/chunk-HOLPJCSZ.js";
import {
  require_react_is,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-USDJIRMY.js";
import {
  useLoaderData
} from "/build/_shared/chunk-PFOIG7TV.js";
import {
  __commonJS,
  __require,
  __toModule,
  init_react,
  require_object_assign,
  require_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// node_modules/moment/moment.js
var require_moment = __commonJS({
  "node_modules/moment/moment.js"(exports2, module2) {
    init_react();
    (function(global, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.moment = factory();
    })(exports2, function() {
      "use strict";
      var hookCallback;
      function hooks() {
        return hookCallback.apply(null, arguments);
      }
      function setHookCallback(callback) {
        hookCallback = callback;
      }
      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
      }
      function isObject(input) {
        return input != null && Object.prototype.toString.call(input) === "[object Object]";
      }
      function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }
      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;
          for (k in obj) {
            if (hasOwnProp(obj, k)) {
              return false;
            }
          }
          return true;
        }
      }
      function isUndefined(input) {
        return input === void 0;
      }
      function isNumber(input) {
        return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
      }
      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
      }
      function map(arr, fn) {
        var res = [], i, arrLen = arr.length;
        for (i = 0; i < arrLen; ++i) {
          res.push(fn(arr[i], i));
        }
        return res;
      }
      function extend(a, b) {
        for (var i in b) {
          if (hasOwnProp(b, i)) {
            a[i] = b[i];
          }
        }
        if (hasOwnProp(b, "toString")) {
          a.toString = b.toString;
        }
        if (hasOwnProp(b, "valueOf")) {
          a.valueOf = b.valueOf;
        }
        return a;
      }
      function createUTC(input, format2, locale2, strict) {
        return createLocalOrUTC(input, format2, locale2, strict, true).utc();
      }
      function defaultParsingFlags() {
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }
      function getParsingFlags(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags();
        }
        return m._pf;
      }
      var some;
      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function(fun) {
          var t = Object(this), len = t.length >>> 0, i;
          for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }
          return false;
        };
      }
      function isValid(m) {
        if (m._isValid == null) {
          var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
            return i != null;
          }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
          if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
          }
          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
          } else {
            return isNowValid;
          }
        }
        return m._isValid;
      }
      function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
          extend(getParsingFlags(m), flags);
        } else {
          getParsingFlags(m).userInvalidated = true;
        }
        return m;
      }
      var momentProperties = hooks.momentProperties = [], updateInProgress = false;
      function copyConfig(to2, from2) {
        var i, prop, val2, momentPropertiesLen = momentProperties.length;
        if (!isUndefined(from2._isAMomentObject)) {
          to2._isAMomentObject = from2._isAMomentObject;
        }
        if (!isUndefined(from2._i)) {
          to2._i = from2._i;
        }
        if (!isUndefined(from2._f)) {
          to2._f = from2._f;
        }
        if (!isUndefined(from2._l)) {
          to2._l = from2._l;
        }
        if (!isUndefined(from2._strict)) {
          to2._strict = from2._strict;
        }
        if (!isUndefined(from2._tzm)) {
          to2._tzm = from2._tzm;
        }
        if (!isUndefined(from2._isUTC)) {
          to2._isUTC = from2._isUTC;
        }
        if (!isUndefined(from2._offset)) {
          to2._offset = from2._offset;
        }
        if (!isUndefined(from2._pf)) {
          to2._pf = getParsingFlags(from2);
        }
        if (!isUndefined(from2._locale)) {
          to2._locale = from2._locale;
        }
        if (momentPropertiesLen > 0) {
          for (i = 0; i < momentPropertiesLen; i++) {
            prop = momentProperties[i];
            val2 = from2[prop];
            if (!isUndefined(val2)) {
              to2[prop] = val2;
            }
          }
        }
        return to2;
      }
      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
          this._d = new Date(NaN);
        }
        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }
      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }
      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
          console.warn("Deprecation warning: " + msg);
        }
      }
      function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }
          if (firstTime) {
            var args = [], arg, i, key2, argLen = arguments.length;
            for (i = 0; i < argLen; i++) {
              arg = "";
              if (typeof arguments[i] === "object") {
                arg += "\n[" + i + "] ";
                for (key2 in arguments[0]) {
                  if (hasOwnProp(arguments[0], key2)) {
                    arg += key2 + ": " + arguments[0][key2] + ", ";
                  }
                }
                arg = arg.slice(0, -2);
              } else {
                arg = arguments[i];
              }
              args.push(arg);
            }
            warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
            firstTime = false;
          }
          return fn.apply(this, arguments);
        }, fn);
      }
      var deprecations = {};
      function deprecateSimple(name2, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name2, msg);
        }
        if (!deprecations[name2]) {
          warn(msg);
          deprecations[name2] = true;
        }
      }
      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;
      function isFunction(input) {
        return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
      }
      function set(config) {
        var prop, i;
        for (i in config) {
          if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) {
              this[i] = prop;
            } else {
              this["_" + i] = prop;
            }
          }
        }
        this._config = config;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
      }
      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }
        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            res[prop] = extend({}, res[prop]);
          }
        }
        return res;
      }
      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }
      var keys;
      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function(obj) {
          var i, res = [];
          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i);
            }
          }
          return res;
        };
      }
      var defaultCalendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };
      function calendar(key2, mom, now2) {
        var output = this._calendar[key2] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(mom, now2) : output;
      }
      function zeroFill(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
        return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }
      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
      function addFormatToken(token2, padded, ordinal2, callback) {
        var func = callback;
        if (typeof callback === "string") {
          func = function() {
            return this[callback]();
          };
        }
        if (token2) {
          formatTokenFunctions[token2] = func;
        }
        if (padded) {
          formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }
        if (ordinal2) {
          formatTokenFunctions[ordinal2] = function() {
            return this.localeData().ordinal(func.apply(this, arguments), token2);
          };
        }
      }
      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
      }
      function makeFormatFunction(format2) {
        var array = format2.match(formattingTokens), i, length2;
        for (i = 0, length2 = array.length; i < length2; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
          } else {
            array[i] = removeFormattingTokens(array[i]);
          }
        }
        return function(mom) {
          var output = "", i2;
          for (i2 = 0; i2 < length2; i2++) {
            output += isFunction(array[i2]) ? array[i2].call(mom, format2) : array[i2];
          }
          return output;
        };
      }
      function formatMoment(m, format2) {
        if (!m.isValid()) {
          return m.localeData().invalidDate();
        }
        format2 = expandFormat(format2, m.localeData());
        formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
        return formatFunctions[format2](m);
      }
      function expandFormat(format2, locale2) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
          return locale2.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format2)) {
          format2 = format2.replace(localFormattingTokens, replaceLongDateFormatTokens);
          localFormattingTokens.lastIndex = 0;
          i -= 1;
        }
        return format2;
      }
      var defaultLongDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      function longDateFormat(key2) {
        var format2 = this._longDateFormat[key2], formatUpper = this._longDateFormat[key2.toUpperCase()];
        if (format2 || !formatUpper) {
          return format2;
        }
        this._longDateFormat[key2] = formatUpper.match(formattingTokens).map(function(tok) {
          if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
            return tok.slice(1);
          }
          return tok;
        }).join("");
        return this._longDateFormat[key2];
      }
      var defaultInvalidDate = "Invalid date";
      function invalidDate() {
        return this._invalidDate;
      }
      var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
      function ordinal(number) {
        return this._ordinal.replace("%d", number);
      }
      var defaultRelativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }
      function pastFuture(diff2, output) {
        var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
        return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
      }
      var aliases = {};
      function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
      }
      function normalizeUnits(units) {
        return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
      }
      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }
        return normalizedInput;
      }
      var priorities = {};
      function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
      }
      function getPrioritizedUnits(unitsObj) {
        var units = [], u;
        for (u in unitsObj) {
          if (hasOwnProp(unitsObj, u)) {
            units.push({ unit: u, priority: priorities[u] });
          }
        }
        units.sort(function(a, b) {
          return a.priority - b.priority;
        });
        return units;
      }
      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
      function absFloor(number) {
        if (number < 0) {
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }
      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value2 = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value2 = absFloor(coercedNumber);
        }
        return value2;
      }
      function makeGetSet(unit, keepTime) {
        return function(value2) {
          if (value2 != null) {
            set$1(this, unit, value2);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get(this, unit);
          }
        };
      }
      function get(mom, unit) {
        return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
      }
      function set$1(mom, unit, value2) {
        if (mom.isValid() && !isNaN(value2)) {
          if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            value2 = toInt(value2);
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value2, mom.month(), daysInMonth(value2, mom.month()));
          } else {
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value2);
          }
        }
      }
      function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units]();
        }
        return this;
      }
      function stringSet(units, value2) {
        if (typeof units === "object") {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
          for (i = 0; i < prioritizedLen; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
          }
        } else {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units](value2);
          }
        }
        return this;
      }
      var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
      regexes = {};
      function addRegexToken(token2, regex, strictRegex) {
        regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }
      function getParseRegexForToken(token2, config) {
        if (!hasOwnProp(regexes, token2)) {
          return new RegExp(unescapeFormat(token2));
        }
        return regexes[token2](config._strict, config._locale);
      }
      function unescapeFormat(s) {
        return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        }));
      }
      function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      var tokens = {};
      function addParseToken(token2, callback) {
        var i, func = callback, tokenLen;
        if (typeof token2 === "string") {
          token2 = [token2];
        }
        if (isNumber(callback)) {
          func = function(input, array) {
            array[callback] = toInt(input);
          };
        }
        tokenLen = token2.length;
        for (i = 0; i < tokenLen; i++) {
          tokens[token2[i]] = func;
        }
      }
      function addWeekParseToken(token2, callback) {
        addParseToken(token2, function(input, array, config, token3) {
          config._w = config._w || {};
          callback(input, config._w, config, token3);
        });
      }
      function addTimeToArrayFromToken(token2, input, config) {
        if (input != null && hasOwnProp(tokens, token2)) {
          tokens[token2](input, config._a, config, token2);
        }
      }
      var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
      function mod2(n, x) {
        return (n % x + x) % x;
      }
      var indexOf;
      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function(o) {
          var i;
          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i;
            }
          }
          return -1;
        };
      }
      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }
        var modMonth = mod2(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      }
      addFormatToken("M", ["MM", 2], "Mo", function() {
        return this.month() + 1;
      });
      addFormatToken("MMM", 0, 0, function(format2) {
        return this.localeData().monthsShort(this, format2);
      });
      addFormatToken("MMMM", 0, 0, function(format2) {
        return this.localeData().months(this, format2);
      });
      addUnitAlias("month", "M");
      addUnitPriority("month", 8);
      addRegexToken("M", match1to2);
      addRegexToken("MM", match1to2, match2);
      addRegexToken("MMM", function(isStrict, locale2) {
        return locale2.monthsShortRegex(isStrict);
      });
      addRegexToken("MMMM", function(isStrict, locale2) {
        return locale2.monthsRegex(isStrict);
      });
      addParseToken(["M", "MM"], function(input, array) {
        array[MONTH] = toInt(input) - 1;
      });
      addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
        var month = config._locale.monthsParse(input, token2, config._strict);
        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      });
      var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
      function localeMonths(m, format2) {
        if (!m) {
          return isArray(this._months) ? this._months : this._months["standalone"];
        }
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
      }
      function localeMonthsShort(m, format2) {
        if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
      }
      function handleStrictParse(monthName, format2, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
          for (i = 0; i < 12; ++i) {
            mom = createUTC([2e3, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format2 === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format2 === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeMonthsParse(monthName, format2, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format2, strict);
        }
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        }
        for (i = 0; i < 12; i++) {
          mom = createUTC([2e3, i]);
          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
            this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
          }
          if (!strict && !this._monthsParse[i]) {
            regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
            this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format2 === "MMMM" && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format2 === "MMM" && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      }
      function setMonth(mom, value2) {
        var dayOfMonth;
        if (!mom.isValid()) {
          return mom;
        }
        if (typeof value2 === "string") {
          if (/^\d+$/.test(value2)) {
            value2 = toInt(value2);
          } else {
            value2 = mom.localeData().monthsParse(value2);
            if (!isNumber(value2)) {
              return mom;
            }
          }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value2));
        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value2, dayOfMonth);
        return mom;
      }
      function getSetMonth(value2) {
        if (value2 != null) {
          setMonth(this, value2);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get(this, "Month");
        }
      }
      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }
      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsShortRegex")) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }
          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }
      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsRegex")) {
            this._monthsRegex = defaultMonthsRegex;
          }
          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }
      function computeMonthsParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for (i = 0; i < 12; i++) {
          mom = createUTC([2e3, i]);
          shortPieces.push(this.monthsShort(mom, ""));
          longPieces.push(this.months(mom, ""));
          mixedPieces.push(this.months(mom, ""));
          mixedPieces.push(this.monthsShort(mom, ""));
        }
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
      }
      addFormatToken("Y", 0, 0, function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : "+" + y;
      });
      addFormatToken(0, ["YY", 2], 0, function() {
        return this.year() % 100;
      });
      addFormatToken(0, ["YYYY", 4], 0, "year");
      addFormatToken(0, ["YYYYY", 5], 0, "year");
      addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
      addUnitAlias("year", "y");
      addUnitPriority("year", 1);
      addRegexToken("Y", matchSigned);
      addRegexToken("YY", match1to2, match2);
      addRegexToken("YYYY", match1to4, match4);
      addRegexToken("YYYYY", match1to6, match6);
      addRegexToken("YYYYYY", match1to6, match6);
      addParseToken(["YYYYY", "YYYYYY"], YEAR);
      addParseToken("YYYY", function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      });
      addParseToken("YY", function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      });
      addParseToken("Y", function(input, array) {
        array[YEAR] = parseInt(input, 10);
      });
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
      };
      var getSetYear = makeGetSet("FullYear", true);
      function getIsLeapYear() {
        return isLeapYear(this.year());
      }
      function createDate(y, m, d, h2, M, s, ms) {
        var date;
        if (y < 100 && y >= 0) {
          date = new Date(y + 400, m, d, h2, M, s, ms);
          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m, d, h2, M, s, ms);
        }
        return date;
      }
      function createUTCDate(y) {
        var date, args;
        if (y < 100 && y >= 0) {
          args = Array.prototype.slice.call(arguments);
          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));
          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }
        return date;
      }
      function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      }
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }
        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }
      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }
        return {
          week: resWeek,
          year: resYear
        };
      }
      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      }
      addFormatToken("w", ["ww", 2], "wo", "week");
      addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
      addUnitAlias("week", "w");
      addUnitAlias("isoWeek", "W");
      addUnitPriority("week", 5);
      addUnitPriority("isoWeek", 5);
      addRegexToken("w", match1to2);
      addRegexToken("ww", match1to2, match2);
      addRegexToken("W", match1to2);
      addRegexToken("WW", match1to2, match2);
      addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token2) {
        week[token2.substr(0, 1)] = toInt(input);
      });
      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }
      var defaultLocaleWeek = {
        dow: 0,
        doy: 6
      };
      function localeFirstDayOfWeek() {
        return this._week.dow;
      }
      function localeFirstDayOfYear() {
        return this._week.doy;
      }
      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      addFormatToken("d", 0, "do", "day");
      addFormatToken("dd", 0, 0, function(format2) {
        return this.localeData().weekdaysMin(this, format2);
      });
      addFormatToken("ddd", 0, 0, function(format2) {
        return this.localeData().weekdaysShort(this, format2);
      });
      addFormatToken("dddd", 0, 0, function(format2) {
        return this.localeData().weekdays(this, format2);
      });
      addFormatToken("e", 0, 0, "weekday");
      addFormatToken("E", 0, 0, "isoWeekday");
      addUnitAlias("day", "d");
      addUnitAlias("weekday", "e");
      addUnitAlias("isoWeekday", "E");
      addUnitPriority("day", 11);
      addUnitPriority("weekday", 11);
      addUnitPriority("isoWeekday", 11);
      addRegexToken("d", match1to2);
      addRegexToken("e", match1to2);
      addRegexToken("E", match1to2);
      addRegexToken("dd", function(isStrict, locale2) {
        return locale2.weekdaysMinRegex(isStrict);
      });
      addRegexToken("ddd", function(isStrict, locale2) {
        return locale2.weekdaysShortRegex(isStrict);
      });
      addRegexToken("dddd", function(isStrict, locale2) {
        return locale2.weekdaysRegex(isStrict);
      });
      addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
        var weekday = config._locale.weekdaysParse(input, token2, config._strict);
        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      });
      addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
        week[token2] = toInt(input);
      });
      function parseWeekday(input, locale2) {
        if (typeof input !== "string") {
          return input;
        }
        if (!isNaN(input)) {
          return parseInt(input, 10);
        }
        input = locale2.weekdaysParse(input);
        if (typeof input === "number") {
          return input;
        }
        return null;
      }
      function parseIsoWeekday(input, locale2) {
        if (typeof input === "string") {
          return locale2.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
      }
      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }
      var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
      function localeWeekdays(m, format2) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
      }
      function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
      }
      function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
      }
      function handleStrictParse$1(weekdayName, format2, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];
          for (i = 0; i < 7; ++i) {
            mom = createUTC([2e3, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format2 === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format2 === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format2 === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format2 === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeWeekdaysParse(weekdayName, format2, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format2, strict);
        }
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
          mom = createUTC([2e3, 1]).day(i);
          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
            this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
            this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
          }
          if (!this._weekdaysParse[i]) {
            regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
            this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format2 === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format2 === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      }
      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, "d");
        } else {
          return day;
        }
      }
      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, "d");
      }
      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }
      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }
          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }
      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysShortRegex")) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }
          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }
      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysMinRegex")) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }
          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }
      function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
          mom = createUTC([2e3, 1]).day(i);
          minp = regexEscape(this.weekdaysMin(mom, ""));
          shortp = regexEscape(this.weekdaysShort(mom, ""));
          longp = regexEscape(this.weekdays(mom, ""));
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        }
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
      }
      function hFormat() {
        return this.hours() % 12 || 12;
      }
      function kFormat() {
        return this.hours() || 24;
      }
      addFormatToken("H", ["HH", 2], 0, "hour");
      addFormatToken("h", ["hh", 2], 0, hFormat);
      addFormatToken("k", ["kk", 2], 0, kFormat);
      addFormatToken("hmm", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      });
      addFormatToken("hmmss", 0, 0, function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      addFormatToken("Hmm", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2);
      });
      addFormatToken("Hmmss", 0, 0, function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      });
      function meridiem(token2, lowercase) {
        addFormatToken(token2, 0, 0, function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
      }
      meridiem("a", true);
      meridiem("A", false);
      addUnitAlias("hour", "h");
      addUnitPriority("hour", 13);
      function matchMeridiem(isStrict, locale2) {
        return locale2._meridiemParse;
      }
      addRegexToken("a", matchMeridiem);
      addRegexToken("A", matchMeridiem);
      addRegexToken("H", match1to2);
      addRegexToken("h", match1to2);
      addRegexToken("k", match1to2);
      addRegexToken("HH", match1to2, match2);
      addRegexToken("hh", match1to2, match2);
      addRegexToken("kk", match1to2, match2);
      addRegexToken("hmm", match3to4);
      addRegexToken("hmmss", match5to6);
      addRegexToken("Hmm", match3to4);
      addRegexToken("Hmmss", match5to6);
      addParseToken(["H", "HH"], HOUR);
      addParseToken(["k", "kk"], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      });
      addParseToken(["a", "A"], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      });
      addParseToken(["h", "hh"], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      });
      addParseToken("Hmm", function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      });
      addParseToken("Hmmss", function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      });
      function localeIsPM(input) {
        return (input + "").toLowerCase().charAt(0) === "p";
      }
      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
      function localeMeridiem(hours2, minutes2, isLower) {
        if (hours2 > 11) {
          return isLower ? "pm" : "PM";
        } else {
          return isLower ? "am" : "AM";
        }
      }
      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
      };
      var locales = {}, localeFamilies = {}, globalLocale;
      function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
          if (arr1[i] !== arr2[i]) {
            return i;
          }
        }
        return minl;
      }
      function normalizeLocale(key2) {
        return key2 ? key2.toLowerCase().replace("_", "-") : key2;
      }
      function chooseLocale(names) {
        var i = 0, j, next, locale2, split;
        while (i < names.length) {
          split = normalizeLocale(names[i]).split("-");
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split("-") : null;
          while (j > 0) {
            locale2 = loadLocale(split.slice(0, j).join("-"));
            if (locale2) {
              return locale2;
            }
            if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
              break;
            }
            j--;
          }
          i++;
        }
        return globalLocale;
      }
      function isLocaleNameSane(name2) {
        return name2.match("^[^/\\\\]*$") != null;
      }
      function loadLocale(name2) {
        var oldLocale = null, aliasedRequire;
        if (locales[name2] === void 0 && typeof module2 !== "undefined" && module2 && module2.exports && isLocaleNameSane(name2)) {
          try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = __require;
            aliasedRequire("./locale/" + name2);
            getSetGlobalLocale(oldLocale);
          } catch (e) {
            locales[name2] = null;
          }
        }
        return locales[name2];
      }
      function getSetGlobalLocale(key2, values) {
        var data2;
        if (key2) {
          if (isUndefined(values)) {
            data2 = getLocale(key2);
          } else {
            data2 = defineLocale(key2, values);
          }
          if (data2) {
            globalLocale = data2;
          } else {
            if (typeof console !== "undefined" && console.warn) {
              console.warn("Locale " + key2 + " not found. Did you forget to load it?");
            }
          }
        }
        return globalLocale._abbr;
      }
      function defineLocale(name2, config) {
        if (config !== null) {
          var locale2, parentConfig = baseConfig;
          config.abbr = name2;
          if (locales[name2] != null) {
            deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
            parentConfig = locales[name2]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale2 = loadLocale(config.parentLocale);
              if (locale2 != null) {
                parentConfig = locale2._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                  name: name2,
                  config
                });
                return null;
              }
            }
          }
          locales[name2] = new Locale(mergeConfigs(parentConfig, config));
          if (localeFamilies[name2]) {
            localeFamilies[name2].forEach(function(x) {
              defineLocale(x.name, x.config);
            });
          }
          getSetGlobalLocale(name2);
          return locales[name2];
        } else {
          delete locales[name2];
          return null;
        }
      }
      function updateLocale(name2, config) {
        if (config != null) {
          var locale2, tmpLocale, parentConfig = baseConfig;
          if (locales[name2] != null && locales[name2].parentLocale != null) {
            locales[name2].set(mergeConfigs(locales[name2]._config, config));
          } else {
            tmpLocale = loadLocale(name2);
            if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            if (tmpLocale == null) {
              config.abbr = name2;
            }
            locale2 = new Locale(config);
            locale2.parentLocale = locales[name2];
            locales[name2] = locale2;
          }
          getSetGlobalLocale(name2);
        } else {
          if (locales[name2] != null) {
            if (locales[name2].parentLocale != null) {
              locales[name2] = locales[name2].parentLocale;
              if (name2 === getSetGlobalLocale()) {
                getSetGlobalLocale(name2);
              }
            } else if (locales[name2] != null) {
              delete locales[name2];
            }
          }
        }
        return locales[name2];
      }
      function getLocale(key2) {
        var locale2;
        if (key2 && key2._locale && key2._locale._abbr) {
          key2 = key2._locale._abbr;
        }
        if (!key2) {
          return globalLocale;
        }
        if (!isArray(key2)) {
          locale2 = loadLocale(key2);
          if (locale2) {
            return locale2;
          }
          key2 = [key2];
        }
        return chooseLocale(key2);
      }
      function listLocales() {
        return keys(locales);
      }
      function checkOverflow(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
          overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }
          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }
          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }
          getParsingFlags(m).overflow = overflow;
        }
        return m;
      }
      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, false],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, false],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, false],
        ["YYYY", /\d{4}/, false]
      ], isoTimes = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
        if (match) {
          getParsingFlags(config).iso = true;
          for (i = 0, l = isoDatesLen; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
            }
          }
          if (dateFormat == null) {
            config._isValid = false;
            return;
          }
          if (match[3]) {
            for (i = 0, l = isoTimesLen; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                timeFormat = (match[2] || " ") + isoTimes[i][0];
                break;
              }
            }
            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }
          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }
          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = "Z";
            } else {
              config._isValid = false;
              return;
            }
          }
          config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      }
      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
          untruncateYear(yearStr),
          defaultLocaleMonthsShort.indexOf(monthStr),
          parseInt(dayStr, 10),
          parseInt(hourStr, 10),
          parseInt(minuteStr, 10)
        ];
        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }
        return result;
      }
      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
          return 2e3 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }
        return year;
      }
      function preprocessRFC2822(s) {
        return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }
        return true;
      }
      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          return 0;
        } else {
          var hm = parseInt(numOffset, 10), m = hm % 100, h2 = (hm - m) / 100;
          return h2 * 60 + m;
        }
      }
      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
          parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }
          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);
          config._d = createUTCDate.apply(null, config._a);
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      }
      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
        }
        configFromISO(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        if (config._strict) {
          config._isValid = false;
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
        config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
      });
      function defaults(a, b, c) {
        if (a != null) {
          return a;
        }
        if (b != null) {
          return b;
        }
        return c;
      }
      function currentDateArray(config) {
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
          return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate()
          ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
      }
      function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) {
          return;
        }
        currentDate = currentDateArray(config);
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        }
        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }
          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        }
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        }
        for (; i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
          config._a[HOUR] = 24;
        }
        if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }
      function dayOfYearFromWeekInfo(config) {
        var w2, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w2 = config._w;
        if (w2.GG != null || w2.W != null || w2.E != null) {
          dow = 1;
          doy = 4;
          weekYear = defaults(w2.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
          week = defaults(w2.W, 1);
          weekday = defaults(w2.E, 1);
          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          curWeek = weekOfYear(createLocal(), dow, doy);
          weekYear = defaults(w2.gg, config._a[YEAR], curWeek.year);
          week = defaults(w2.w, curWeek.week);
          if (w2.d != null) {
            weekday = w2.d;
            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w2.e != null) {
            weekday = w2.e + dow;
            if (w2.e < 0 || w2.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            weekday = dow;
          }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      }
      hooks.ISO_8601 = function() {
      };
      hooks.RFC_2822 = function() {
      };
      function configFromStringAndFormat(config) {
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }
        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        var string = "" + config._i, i, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
        tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens2.length;
        for (i = 0; i < tokenLen; i++) {
          token2 = tokens2[i];
          parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
          }
          if (formatTokenFunctions[token2]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token2);
            }
            addTimeToArrayFromToken(token2, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token2);
          }
        }
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
        }
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = void 0;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        era = getParsingFlags(config).era;
        if (era !== null) {
          config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }
        configFromArray(config);
        checkOverflow(config);
      }
      function meridiemFixWrap(locale2, hour, meridiem2) {
        var isPm;
        if (meridiem2 == null) {
          return hour;
        }
        if (locale2.meridiemHour != null) {
          return locale2.meridiemHour(hour, meridiem2);
        } else if (locale2.isPM != null) {
          isPm = locale2.isPM(meridiem2);
          if (isPm && hour < 12) {
            hour += 12;
          }
          if (!isPm && hour === 12) {
            hour = 0;
          }
          return hour;
        } else {
          return hour;
        }
      }
      function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
        if (configfLen === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
        }
        for (i = 0; i < configfLen; i++) {
          currentScore = 0;
          validFormatFound = false;
          tempConfig = copyConfig({}, config);
          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }
          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);
          if (isValid(tempConfig)) {
            validFormatFound = true;
          }
          currentScore += getParsingFlags(tempConfig).charsLeftOver;
          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
          getParsingFlags(tempConfig).score = currentScore;
          if (!bestFormatIsValid) {
            if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
              if (validFormatFound) {
                bestFormatIsValid = true;
              }
            }
          } else {
            if (currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
            }
          }
        }
        extend(config, bestMoment || tempConfig);
      }
      function configFromObject(config) {
        if (config._d) {
          return;
        }
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === void 0 ? i.date : i.day;
        config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function(obj) {
          return obj && parseInt(obj, 10);
        });
        configFromArray(config);
      }
      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
          res.add(1, "d");
          res._nextDay = void 0;
        }
        return res;
      }
      function prepareConfig(config) {
        var input = config._i, format2 = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format2 === void 0 && input === "") {
          return createInvalid({ nullInput: true });
        }
        if (typeof input === "string") {
          config._i = input = config._locale.preparse(input);
        }
        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format2)) {
          configFromStringAndArray(config);
        } else if (format2) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }
        if (!isValid(config)) {
          config._d = null;
        }
        return config;
      }
      function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === "string") {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), function(obj) {
            return parseInt(obj, 10);
          });
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
        var c = {};
        if (format2 === true || format2 === false) {
          strict = format2;
          format2 = void 0;
        }
        if (locale2 === true || locale2 === false) {
          strict = locale2;
          locale2 = void 0;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = void 0;
        }
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale2;
        c._i = input;
        c._f = format2;
        c._strict = strict;
        return createFromConfig(c);
      }
      function createLocal(input, format2, locale2, strict) {
        return createLocalOrUTC(input, format2, locale2, strict, false);
      }
      var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      }), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      });
      function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }
        if (!moments.length) {
          return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
          }
        }
        return res;
      }
      function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isBefore", args);
      }
      function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isAfter", args);
      }
      var now = function() {
        return Date.now ? Date.now() : +new Date();
      };
      var ordering = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond"
      ];
      function isDurationValid(m) {
        var key2, unitHasDecimal = false, i, orderLen = ordering.length;
        for (key2 in m) {
          if (hasOwnProp(m, key2) && !(indexOf.call(ordering, key2) !== -1 && (m[key2] == null || !isNaN(m[key2])))) {
            return false;
          }
        }
        for (i = 0; i < orderLen; ++i) {
          if (m[ordering[i]]) {
            if (unitHasDecimal) {
              return false;
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
              unitHasDecimal = true;
            }
          }
        }
        return true;
      }
      function isValid$1() {
        return this._isValid;
      }
      function createInvalid$1() {
        return createDuration(NaN);
      }
      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
        this._days = +days2 + weeks2 * 7;
        this._months = +months2 + quarters * 3 + years2 * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble();
      }
      function isDuration(obj) {
        return obj instanceof Duration;
      }
      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      }
      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for (i = 0; i < len; i++) {
          if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
            diffs++;
          }
        }
        return diffs + lengthDiff;
      }
      function offset(token2, separator) {
        addFormatToken(token2, 0, 0, function() {
          var offset2 = this.utcOffset(), sign2 = "+";
          if (offset2 < 0) {
            offset2 = -offset2;
            sign2 = "-";
          }
          return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
        });
      }
      offset("Z", ":");
      offset("ZZ", "");
      addRegexToken("Z", matchShortOffset);
      addRegexToken("ZZ", matchShortOffset);
      addParseToken(["Z", "ZZ"], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      });
      var chunkOffset = /([\+\-]|\d\d)/gi;
      function offsetFromString(matcher, string) {
        var matches = (string || "").match(matcher), chunk, parts, minutes2;
        if (matches === null) {
          return null;
        }
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
        minutes2 = +(parts[1] * 60) + toInt(parts[2]);
        return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
      }
      function cloneWithOffset(input, model) {
        var res, diff2;
        if (model._isUTC) {
          res = model.clone();
          diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
          res._d.setTime(res._d.valueOf() + diff2);
          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }
      function getDateOffset(m) {
        return -Math.round(m._d.getTimezoneOffset());
      }
      hooks.updateOffset = function() {
      };
      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset2 = this._offset || 0, localAdjust;
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          if (typeof input === "string") {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
            this.add(localAdjust, "m");
          }
          if (offset2 !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(this, createDuration(input - offset2, "m"), 1, false);
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }
          return this;
        } else {
          return this._isUTC ? offset2 : getDateOffset(this);
        }
      }
      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== "string") {
            input = -input;
          }
          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }
      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }
      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;
          if (keepLocalTime) {
            this.subtract(getDateOffset(this), "m");
          }
        }
        return this;
      }
      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === "string") {
          var tZone = offsetFromString(matchOffset, this._i);
          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }
        return this;
      }
      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }
      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }
      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }
        var c = {}, other;
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
          other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }
        return this._isDSTShifted;
      }
      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }
      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }
      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }
      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function createDuration(input, key2) {
        var duration = input, match = null, sign2, ret, diffRes;
        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber(input) || !isNaN(+input)) {
          duration = {};
          if (key2) {
            duration[key2] = +input;
          } else {
            duration.milliseconds = +input;
          }
        } else if (match = aspNetRegex.exec(input)) {
          sign2 = match[1] === "-" ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign2,
            h: toInt(match[HOUR]) * sign2,
            m: toInt(match[MINUTE]) * sign2,
            s: toInt(match[SECOND]) * sign2,
            ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
          };
        } else if (match = isoRegex.exec(input)) {
          sign2 = match[1] === "-" ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign2),
            M: parseIso(match[3], sign2),
            w: parseIso(match[4], sign2),
            d: parseIso(match[5], sign2),
            h: parseIso(match[6], sign2),
            m: parseIso(match[7], sign2),
            s: parseIso(match[8], sign2)
          };
        } else if (duration == null) {
          duration = {};
        } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
          diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, "_locale")) {
          ret._locale = input._locale;
        }
        if (isDuration(input) && hasOwnProp(input, "_isValid")) {
          ret._isValid = input._isValid;
        }
        return ret;
      }
      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;
      function parseIso(inp, sign2) {
        var res = inp && parseFloat(inp.replace(",", "."));
        return (isNaN(res) ? 0 : res) * sign2;
      }
      function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {
          --res.months;
        }
        res.milliseconds = +other - +base.clone().add(res.months, "M");
        return res;
      }
      function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
          return { milliseconds: 0, months: 0 };
        }
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }
        return res;
      }
      function createAdder(direction, name2) {
        return function(val2, period) {
          var dur, tmp;
          if (period !== null && !isNaN(+period)) {
            deprecateSimple(name2, "moment()." + name2 + "(period, number) is deprecated. Please use moment()." + name2 + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
            tmp = val2;
            val2 = period;
            period = tmp;
          }
          dur = createDuration(val2, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }
      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
        if (!mom.isValid()) {
          return;
        }
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months2) {
          setMonth(mom, get(mom, "Month") + months2 * isAdding);
        }
        if (days2) {
          set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
        }
        if (milliseconds2) {
          mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
        }
        if (updateOffset) {
          hooks.updateOffset(mom, days2 || months2);
        }
      }
      var add2 = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
      function isString(input) {
        return typeof input === "string" || input instanceof String;
      }
      function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
      }
      function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms"
        ], i, property2, propertyLen = properties.length;
        for (i = 0; i < propertyLen; i += 1) {
          property2 = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property2);
        }
        return objectTest && propertyTest;
      }
      function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) {
          dataTypeTest = input.filter(function(item) {
            return !isNumber(item) && isString(input);
          }).length === 0;
        }
        return arrayTest && dataTypeTest;
      }
      function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse"
        ], i, property2;
        for (i = 0; i < properties.length; i += 1) {
          property2 = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property2);
        }
        return objectTest && propertyTest;
      }
      function getCalendarFormat(myMoment, now2) {
        var diff2 = myMoment.diff(now2, "days", true);
        return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
      }
      function calendar$1(time2, formats) {
        if (arguments.length === 1) {
          if (!arguments[0]) {
            time2 = void 0;
            formats = void 0;
          } else if (isMomentInput(arguments[0])) {
            time2 = arguments[0];
            formats = void 0;
          } else if (isCalendarSpec(arguments[0])) {
            formats = arguments[0];
            time2 = void 0;
          }
        }
        var now2 = time2 || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
        return this.format(output || this.localeData().calendar(format2, this, createLocal(now2)));
      }
      function clone() {
        return new Moment(this);
      }
      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }
      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }
      function isBetween(from2, to2, units, inclusivity) {
        var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }
        inclusivity = inclusivity || "()";
        return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }
      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }
      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }
      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }
      function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) {
          return NaN;
        }
        that = cloneWithOffset(input, this);
        if (!that.isValid()) {
          return NaN;
        }
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);
        switch (units) {
          case "year":
            output = monthDiff(this, that) / 12;
            break;
          case "month":
            output = monthDiff(this, that);
            break;
          case "quarter":
            output = monthDiff(this, that) / 3;
            break;
          case "second":
            output = (this - that) / 1e3;
            break;
          case "minute":
            output = (this - that) / 6e4;
            break;
          case "hour":
            output = (this - that) / 36e5;
            break;
          case "day":
            output = (this - that - zoneDelta) / 864e5;
            break;
          case "week":
            output = (this - that - zoneDelta) / 6048e5;
            break;
          default:
            output = this - that;
        }
        return asFloat ? output : absFloor(output);
      }
      function monthDiff(a, b) {
        if (a.date() < b.date()) {
          return -monthDiff(b, a);
        }
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
          adjust = (b - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
          adjust = (b - anchor) / (anchor2 - anchor);
        }
        return -(wholeMonthDiff + adjust) || 0;
      }
      hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
      hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      function toString() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }
        var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(m, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }
        if (isFunction(Date.prototype.toISOString)) {
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
          }
        }
        return formatMoment(m, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
      }
      function inspect() {
        if (!this.isValid()) {
          return "moment.invalid(/* " + this._i + " */)";
        }
        var func = "moment", zone = "", prefix, year, datetime, suffix;
        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
          zone = "Z";
        }
        prefix = "[" + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        datetime = "-MM-DD[T]HH:mm:ss.SSS";
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
      }
      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }
      function from(time2, withoutSuffix) {
        if (this.isValid() && (isMoment(time2) && time2.isValid() || createLocal(time2).isValid())) {
          return createDuration({ to: this, from: time2 }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }
      function to(time2, withoutSuffix) {
        if (this.isValid() && (isMoment(time2) && time2.isValid() || createLocal(time2).isValid())) {
          return createDuration({ from: this, to: time2 }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      }
      function locale(key2) {
        var newLocaleData;
        if (key2 === void 0) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key2);
          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }
          return this;
        }
      }
      var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key2) {
        if (key2 === void 0) {
          return this.localeData();
        } else {
          return this.locale(key2);
        }
      });
      function localeData() {
        return this._locale;
      }
      var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }
      function localStartOfDate(y, m, d) {
        if (y < 100 && y >= 0) {
          return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return new Date(y, m, d).valueOf();
        }
      }
      function utcStartOfDate(y, m, d) {
        if (y < 100 && y >= 0) {
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y, m, d);
        }
      }
      function startOf(units) {
        var time2, startOfDate;
        units = normalizeUnits(units);
        if (units === void 0 || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
          case "year":
            time2 = startOfDate(this.year(), 0, 1);
            break;
          case "quarter":
            time2 = startOfDate(this.year(), this.month() - this.month() % 3, 1);
            break;
          case "month":
            time2 = startOfDate(this.year(), this.month(), 1);
            break;
          case "week":
            time2 = startOfDate(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            time2 = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
          case "day":
          case "date":
            time2 = startOfDate(this.year(), this.month(), this.date());
            break;
          case "hour":
            time2 = this._d.valueOf();
            time2 -= mod$1(time2 + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
            break;
          case "minute":
            time2 = this._d.valueOf();
            time2 -= mod$1(time2, MS_PER_MINUTE);
            break;
          case "second":
            time2 = this._d.valueOf();
            time2 -= mod$1(time2, MS_PER_SECOND);
            break;
        }
        this._d.setTime(time2);
        hooks.updateOffset(this, true);
        return this;
      }
      function endOf(units) {
        var time2, startOfDate;
        units = normalizeUnits(units);
        if (units === void 0 || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
          case "year":
            time2 = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            time2 = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
          case "month":
            time2 = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            time2 = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
          case "isoWeek":
            time2 = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
          case "day":
          case "date":
            time2 = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            time2 = this._d.valueOf();
            time2 += MS_PER_HOUR - mod$1(time2 + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
            break;
          case "minute":
            time2 = this._d.valueOf();
            time2 += MS_PER_MINUTE - mod$1(time2, MS_PER_MINUTE) - 1;
            break;
          case "second":
            time2 = this._d.valueOf();
            time2 += MS_PER_SECOND - mod$1(time2, MS_PER_SECOND) - 1;
            break;
        }
        this._d.setTime(time2);
        hooks.updateOffset(this, true);
        return this;
      }
      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 6e4;
      }
      function unix() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function toDate() {
        return new Date(this.valueOf());
      }
      function toArray() {
        var m = this;
        return [
          m.year(),
          m.month(),
          m.date(),
          m.hour(),
          m.minute(),
          m.second(),
          m.millisecond()
        ];
      }
      function toObject() {
        var m = this;
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
        };
      }
      function toJSON() {
        return this.isValid() ? this.toISOString() : null;
      }
      function isValid$2() {
        return isValid(this);
      }
      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }
      function invalidAt() {
        return getParsingFlags(this).overflow;
      }
      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }
      addFormatToken("N", 0, 0, "eraAbbr");
      addFormatToken("NN", 0, 0, "eraAbbr");
      addFormatToken("NNN", 0, 0, "eraAbbr");
      addFormatToken("NNNN", 0, 0, "eraName");
      addFormatToken("NNNNN", 0, 0, "eraNarrow");
      addFormatToken("y", ["y", 1], "yo", "eraYear");
      addFormatToken("y", ["yy", 2], 0, "eraYear");
      addFormatToken("y", ["yyy", 3], 0, "eraYear");
      addFormatToken("y", ["yyyy", 4], 0, "eraYear");
      addRegexToken("N", matchEraAbbr);
      addRegexToken("NN", matchEraAbbr);
      addRegexToken("NNN", matchEraAbbr);
      addRegexToken("NNNN", matchEraName);
      addRegexToken("NNNNN", matchEraNarrow);
      addParseToken(["N", "NN", "NNN", "NNNN", "NNNNN"], function(input, array, config, token2) {
        var era = config._locale.erasParse(input, token2, config._strict);
        if (era) {
          getParsingFlags(config).era = era;
        } else {
          getParsingFlags(config).invalidEra = input;
        }
      });
      addRegexToken("y", matchUnsigned);
      addRegexToken("yy", matchUnsigned);
      addRegexToken("yyy", matchUnsigned);
      addRegexToken("yyyy", matchUnsigned);
      addRegexToken("yo", matchEraYearOrdinal);
      addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
      addParseToken(["yo"], function(input, array, config, token2) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
          match = input.match(config._locale._eraYearOrdinalRegex);
        }
        if (config._locale.eraYearOrdinalParse) {
          array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
          array[YEAR] = parseInt(input, 10);
        }
      });
      function localeEras(m, format2) {
        var i, l, date, eras = this._eras || getLocale("en")._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
          switch (typeof eras[i].since) {
            case "string":
              date = hooks(eras[i].since).startOf("day");
              eras[i].since = date.valueOf();
              break;
          }
          switch (typeof eras[i].until) {
            case "undefined":
              eras[i].until = Infinity;
              break;
            case "string":
              date = hooks(eras[i].until).startOf("day").valueOf();
              eras[i].until = date.valueOf();
              break;
          }
        }
        return eras;
      }
      function localeErasParse(eraName, format2, strict) {
        var i, l, eras = this.eras(), name2, abbr, narrow;
        eraName = eraName.toUpperCase();
        for (i = 0, l = eras.length; i < l; ++i) {
          name2 = eras[i].name.toUpperCase();
          abbr = eras[i].abbr.toUpperCase();
          narrow = eras[i].narrow.toUpperCase();
          if (strict) {
            switch (format2) {
              case "N":
              case "NN":
              case "NNN":
                if (abbr === eraName) {
                  return eras[i];
                }
                break;
              case "NNNN":
                if (name2 === eraName) {
                  return eras[i];
                }
                break;
              case "NNNNN":
                if (narrow === eraName) {
                  return eras[i];
                }
                break;
            }
          } else if ([name2, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
          }
        }
      }
      function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? 1 : -1;
        if (year === void 0) {
          return hooks(era.since).year();
        } else {
          return hooks(era.since).year() + (year - era.offset) * dir;
        }
      }
      function getEraName() {
        var i, l, val2, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val2 = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val2 && val2 <= eras[i].until) {
            return eras[i].name;
          }
          if (eras[i].until <= val2 && val2 <= eras[i].since) {
            return eras[i].name;
          }
        }
        return "";
      }
      function getEraNarrow() {
        var i, l, val2, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val2 = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val2 && val2 <= eras[i].until) {
            return eras[i].narrow;
          }
          if (eras[i].until <= val2 && val2 <= eras[i].since) {
            return eras[i].narrow;
          }
        }
        return "";
      }
      function getEraAbbr() {
        var i, l, val2, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val2 = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val2 && val2 <= eras[i].until) {
            return eras[i].abbr;
          }
          if (eras[i].until <= val2 && val2 <= eras[i].since) {
            return eras[i].abbr;
          }
        }
        return "";
      }
      function getEraYear() {
        var i, l, dir, val2, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          dir = eras[i].since <= eras[i].until ? 1 : -1;
          val2 = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val2 && val2 <= eras[i].until || eras[i].until <= val2 && val2 <= eras[i].since) {
            return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
          }
        }
        return this.year();
      }
      function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNameRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
      }
      function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, "_erasAbbrRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }
      function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNarrowRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }
      function matchEraAbbr(isStrict, locale2) {
        return locale2.erasAbbrRegex(isStrict);
      }
      function matchEraName(isStrict, locale2) {
        return locale2.erasNameRegex(isStrict);
      }
      function matchEraNarrow(isStrict, locale2) {
        return locale2.erasNarrowRegex(isStrict);
      }
      function matchEraYearOrdinal(isStrict, locale2) {
        return locale2._eraYearOrdinalRegex || matchUnsigned;
      }
      function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          namePieces.push(regexEscape(eras[i].name));
          abbrPieces.push(regexEscape(eras[i].abbr));
          narrowPieces.push(regexEscape(eras[i].narrow));
          mixedPieces.push(regexEscape(eras[i].name));
          mixedPieces.push(regexEscape(eras[i].abbr));
          mixedPieces.push(regexEscape(eras[i].narrow));
        }
        this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
        this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
        this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
      }
      addFormatToken(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100;
      });
      addFormatToken(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100;
      });
      function addWeekYearFormatToken(token2, getter) {
        addFormatToken(0, [token2, token2.length], 0, getter);
      }
      addWeekYearFormatToken("gggg", "weekYear");
      addWeekYearFormatToken("ggggg", "weekYear");
      addWeekYearFormatToken("GGGG", "isoWeekYear");
      addWeekYearFormatToken("GGGGG", "isoWeekYear");
      addUnitAlias("weekYear", "gg");
      addUnitAlias("isoWeekYear", "GG");
      addUnitPriority("weekYear", 1);
      addUnitPriority("isoWeekYear", 1);
      addRegexToken("G", matchSigned);
      addRegexToken("g", matchSigned);
      addRegexToken("GG", match1to2, match2);
      addRegexToken("gg", match1to2, match2);
      addRegexToken("GGGG", match1to4, match4);
      addRegexToken("gggg", match1to4, match4);
      addRegexToken("GGGGG", match1to6, match6);
      addRegexToken("ggggg", match1to6, match6);
      addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token2) {
        week[token2.substr(0, 2)] = toInt(input);
      });
      addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
        week[token2] = hooks.parseTwoDigitYear(input);
      });
      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }
      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
      }
      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }
      function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
      }
      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }
      function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }
      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);
          if (week > weeksTarget) {
            week = weeksTarget;
          }
          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }
      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      }
      addFormatToken("Q", 0, "Qo", "quarter");
      addUnitAlias("quarter", "Q");
      addUnitPriority("quarter", 7);
      addRegexToken("Q", match1);
      addParseToken("Q", function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      });
      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      }
      addFormatToken("D", ["DD", 2], "Do", "date");
      addUnitAlias("date", "D");
      addUnitPriority("date", 9);
      addRegexToken("D", match1to2);
      addRegexToken("DD", match1to2, match2);
      addRegexToken("Do", function(isStrict, locale2) {
        return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
      });
      addParseToken(["D", "DD"], DATE);
      addParseToken("Do", function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      });
      var getSetDayOfMonth = makeGetSet("Date", true);
      addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
      addUnitAlias("dayOfYear", "DDD");
      addUnitPriority("dayOfYear", 4);
      addRegexToken("DDD", match1to3);
      addRegexToken("DDDD", match3);
      addParseToken(["DDD", "DDDD"], function(input, array, config) {
        config._dayOfYear = toInt(input);
      });
      function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
      }
      addFormatToken("m", ["mm", 2], 0, "minute");
      addUnitAlias("minute", "m");
      addUnitPriority("minute", 14);
      addRegexToken("m", match1to2);
      addRegexToken("mm", match1to2, match2);
      addParseToken(["m", "mm"], MINUTE);
      var getSetMinute = makeGetSet("Minutes", false);
      addFormatToken("s", ["ss", 2], 0, "second");
      addUnitAlias("second", "s");
      addUnitPriority("second", 15);
      addRegexToken("s", match1to2);
      addRegexToken("ss", match1to2, match2);
      addParseToken(["s", "ss"], SECOND);
      var getSetSecond = makeGetSet("Seconds", false);
      addFormatToken("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
      });
      addFormatToken(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10);
      });
      addFormatToken(0, ["SSS", 3], 0, "millisecond");
      addFormatToken(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10;
      });
      addFormatToken(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100;
      });
      addFormatToken(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3;
      });
      addFormatToken(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4;
      });
      addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5;
      });
      addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6;
      });
      addUnitAlias("millisecond", "ms");
      addUnitPriority("millisecond", 16);
      addRegexToken("S", match1to3, match1);
      addRegexToken("SS", match1to3, match2);
      addRegexToken("SSS", match1to3, match3);
      var token, getSetMillisecond;
      for (token = "SSSS"; token.length <= 9; token += "S") {
        addRegexToken(token, matchUnsigned);
      }
      function parseMs(input, array) {
        array[MILLISECOND] = toInt(("0." + input) * 1e3);
      }
      for (token = "S"; token.length <= 9; token += "S") {
        addParseToken(token, parseMs);
      }
      getSetMillisecond = makeGetSet("Milliseconds", false);
      addFormatToken("z", 0, 0, "zoneAbbr");
      addFormatToken("zz", 0, 0, "zoneName");
      function getZoneAbbr() {
        return this._isUTC ? "UTC" : "";
      }
      function getZoneName() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      var proto = Moment.prototype;
      proto.add = add2;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      if (typeof Symbol !== "undefined" && Symbol.for != null) {
        proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
          return "Moment<" + this.format() + ">";
        };
      }
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
      proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
      proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
      proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
      proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
      function createUnix(input) {
        return createLocal(input * 1e3);
      }
      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }
      function preParsePostFormat(string) {
        return string;
      }
      var proto$1 = Locale.prototype;
      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;
      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;
      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;
      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;
      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;
      function get$1(format2, index2, field, setter) {
        var locale2 = getLocale(), utc = createUTC().set(setter, index2);
        return locale2[field](utc, format2);
      }
      function listMonthsImpl(format2, index2, field) {
        if (isNumber(format2)) {
          index2 = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
        if (index2 != null) {
          return get$1(format2, index2, field, "month");
        }
        var i, out = [];
        for (i = 0; i < 12; i++) {
          out[i] = get$1(format2, i, field, "month");
        }
        return out;
      }
      function listWeekdaysImpl(localeSorted, format2, index2, field) {
        if (typeof localeSorted === "boolean") {
          if (isNumber(format2)) {
            index2 = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
        } else {
          format2 = localeSorted;
          index2 = format2;
          localeSorted = false;
          if (isNumber(format2)) {
            index2 = format2;
            format2 = void 0;
          }
          format2 = format2 || "";
        }
        var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i, out = [];
        if (index2 != null) {
          return get$1(format2, (index2 + shift) % 7, field, "day");
        }
        for (i = 0; i < 7; i++) {
          out[i] = get$1(format2, (i + shift) % 7, field, "day");
        }
        return out;
      }
      function listMonths(format2, index2) {
        return listMonthsImpl(format2, index2, "months");
      }
      function listMonthsShort(format2, index2) {
        return listMonthsImpl(format2, index2, "monthsShort");
      }
      function listWeekdays(localeSorted, format2, index2) {
        return listWeekdaysImpl(localeSorted, format2, index2, "weekdays");
      }
      function listWeekdaysShort(localeSorted, format2, index2) {
        return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysShort");
      }
      function listWeekdaysMin(localeSorted, format2, index2) {
        return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysMin");
      }
      getSetGlobalLocale("en", {
        eras: [
          {
            since: "0001-01-01",
            until: Infinity,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
          },
          {
            since: "0000-12-31",
            until: -Infinity,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
          }
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
          var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        }
      });
      hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
      hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
      var mathAbs = Math.abs;
      function abs() {
        var data2 = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data2.milliseconds = mathAbs(data2.milliseconds);
        data2.seconds = mathAbs(data2.seconds);
        data2.minutes = mathAbs(data2.minutes);
        data2.hours = mathAbs(data2.hours);
        data2.months = mathAbs(data2.months);
        data2.years = mathAbs(data2.years);
        return this;
      }
      function addSubtract$1(duration, input, value2, direction) {
        var other = createDuration(input, value2);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
      }
      function add$1(input, value2) {
        return addSubtract$1(this, input, value2, 1);
      }
      function subtract$1(input, value2) {
        return addSubtract$1(this, input, value2, -1);
      }
      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }
      function bubble() {
        var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data2 = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
        if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
          milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
          days2 = 0;
          months2 = 0;
        }
        data2.milliseconds = milliseconds2 % 1e3;
        seconds2 = absFloor(milliseconds2 / 1e3);
        data2.seconds = seconds2 % 60;
        minutes2 = absFloor(seconds2 / 60);
        data2.minutes = minutes2 % 60;
        hours2 = absFloor(minutes2 / 60);
        data2.hours = hours2 % 24;
        days2 += absFloor(hours2 / 24);
        monthsFromDays = absFloor(daysToMonths(days2));
        months2 += monthsFromDays;
        days2 -= absCeil(monthsToDays(monthsFromDays));
        years2 = absFloor(months2 / 12);
        months2 %= 12;
        data2.days = days2;
        data2.months = months2;
        data2.years = years2;
        return this;
      }
      function daysToMonths(days2) {
        return days2 * 4800 / 146097;
      }
      function monthsToDays(months2) {
        return months2 * 146097 / 4800;
      }
      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }
        var days2, months2, milliseconds2 = this._milliseconds;
        units = normalizeUnits(units);
        if (units === "month" || units === "quarter" || units === "year") {
          days2 = this._days + milliseconds2 / 864e5;
          months2 = this._months + daysToMonths(days2);
          switch (units) {
            case "month":
              return months2;
            case "quarter":
              return months2 / 3;
            case "year":
              return months2 / 12;
          }
        } else {
          days2 = this._days + Math.round(monthsToDays(this._months));
          switch (units) {
            case "week":
              return days2 / 7 + milliseconds2 / 6048e5;
            case "day":
              return days2 + milliseconds2 / 864e5;
            case "hour":
              return days2 * 24 + milliseconds2 / 36e5;
            case "minute":
              return days2 * 1440 + milliseconds2 / 6e4;
            case "second":
              return days2 * 86400 + milliseconds2 / 1e3;
            case "millisecond":
              return Math.floor(days2 * 864e5) + milliseconds2;
            default:
              throw new Error("Unknown unit " + units);
          }
        }
      }
      function valueOf$1() {
        if (!this.isValid()) {
          return NaN;
        }
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
      }
      function makeAs(alias) {
        return function() {
          return this.as(alias);
        };
      }
      var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
      function clone$1() {
        return createDuration(this);
      }
      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + "s"]() : NaN;
      }
      function makeGetter(name2) {
        return function() {
          return this.isValid() ? this._data[name2] : NaN;
        };
      }
      var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
      function weeks() {
        return absFloor(this.days() / 7);
      }
      var round = Math.round, thresholds = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
      };
      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
        return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }
      function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
        var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
        if (thresholds2.w != null) {
          a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
        }
        a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale2;
        return substituteTimeAgo.apply(null, a);
      }
      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === void 0) {
          return round;
        }
        if (typeof roundingFunction === "function") {
          round = roundingFunction;
          return true;
        }
        return false;
      }
      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === void 0) {
          return false;
        }
        if (limit === void 0) {
          return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === "s") {
          thresholds.ss = limit - 1;
        }
        return true;
      }
      function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var withSuffix = false, th = thresholds, locale2, output;
        if (typeof argWithSuffix === "object") {
          argThresholds = argWithSuffix;
          argWithSuffix = false;
        }
        if (typeof argWithSuffix === "boolean") {
          withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === "object") {
          th = Object.assign({}, thresholds, argThresholds);
          if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
          }
        }
        locale2 = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale2);
        if (withSuffix) {
          output = locale2.pastFuture(+this, output);
        }
        return locale2.postformat(output);
      }
      var abs$1 = Math.abs;
      function sign(x) {
        return (x > 0) - (x < 0) || +x;
      }
      function toISOString$1() {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) {
          return "P0D";
        }
        minutes2 = absFloor(seconds2 / 60);
        hours2 = absFloor(minutes2 / 60);
        seconds2 %= 60;
        minutes2 %= 60;
        years2 = absFloor(months2 / 12);
        months2 %= 12;
        s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
        totalSign = total < 0 ? "-" : "";
        ymSign = sign(this._months) !== sign(total) ? "-" : "";
        daysSign = sign(this._days) !== sign(total) ? "-" : "";
        hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
        return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
      }
      var proto$2 = Duration.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;
      proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
      proto$2.lang = lang;
      addFormatToken("X", 0, 0, "unix");
      addFormatToken("x", 0, 0, "valueOf");
      addRegexToken("x", matchSigned);
      addRegexToken("X", matchTimestamp);
      addParseToken("X", function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1e3);
      });
      addParseToken("x", function(input, array, config) {
        config._d = new Date(toInt(input));
      });
      hooks.version = "2.29.3";
      setHookCallback(createLocal);
      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto;
      hooks.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
      };
      return hooks;
    });
  }
});

// node_modules/core-js/library/modules/_global.js
var require_global = __commonJS({
  "node_modules/core-js/library/modules/_global.js"(exports2, module2) {
    init_react();
    var global = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
    if (typeof __g == "number")
      __g = global;
  }
});

// node_modules/core-js/library/modules/_core.js
var require_core = __commonJS({
  "node_modules/core-js/library/modules/_core.js"(exports2, module2) {
    init_react();
    var core = module2.exports = { version: "2.6.12" };
    if (typeof __e == "number")
      __e = core;
  }
});

// node_modules/core-js/library/modules/_a-function.js
var require_a_function = __commonJS({
  "node_modules/core-js/library/modules/_a-function.js"(exports2, module2) {
    init_react();
    module2.exports = function(it) {
      if (typeof it != "function")
        throw TypeError(it + " is not a function!");
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_ctx.js
var require_ctx = __commonJS({
  "node_modules/core-js/library/modules/_ctx.js"(exports2, module2) {
    init_react();
    var aFunction = require_a_function();
    module2.exports = function(fn, that, length2) {
      aFunction(fn);
      if (that === void 0)
        return fn;
      switch (length2) {
        case 1:
          return function(a) {
            return fn.call(that, a);
          };
        case 2:
          return function(a, b) {
            return fn.call(that, a, b);
          };
        case 3:
          return function(a, b, c) {
            return fn.call(that, a, b, c);
          };
      }
      return function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/core-js/library/modules/_is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/library/modules/_is-object.js"(exports2, module2) {
    init_react();
    module2.exports = function(it) {
      return typeof it === "object" ? it !== null : typeof it === "function";
    };
  }
});

// node_modules/core-js/library/modules/_an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/library/modules/_an-object.js"(exports2, module2) {
    init_react();
    var isObject = require_is_object();
    module2.exports = function(it) {
      if (!isObject(it))
        throw TypeError(it + " is not an object!");
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_fails.js
var require_fails = __commonJS({
  "node_modules/core-js/library/modules/_fails.js"(exports2, module2) {
    init_react();
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
  }
});

// node_modules/core-js/library/modules/_descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/library/modules/_descriptors.js"(exports2, module2) {
    init_react();
    module2.exports = !require_fails()(function() {
      return Object.defineProperty({}, "a", { get: function() {
        return 7;
      } }).a != 7;
    });
  }
});

// node_modules/core-js/library/modules/_dom-create.js
var require_dom_create = __commonJS({
  "node_modules/core-js/library/modules/_dom-create.js"(exports2, module2) {
    init_react();
    var isObject = require_is_object();
    var document2 = require_global().document;
    var is = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return is ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/library/modules/_ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/library/modules/_ie8-dom-define.js"(exports2, module2) {
    init_react();
    module2.exports = !require_descriptors() && !require_fails()(function() {
      return Object.defineProperty(require_dom_create()("div"), "a", { get: function() {
        return 7;
      } }).a != 7;
    });
  }
});

// node_modules/core-js/library/modules/_to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/library/modules/_to-primitive.js"(exports2, module2) {
    init_react();
    var isObject = require_is_object();
    module2.exports = function(it, S) {
      if (!isObject(it))
        return it;
      var fn, val2;
      if (S && typeof (fn = it.toString) == "function" && !isObject(val2 = fn.call(it)))
        return val2;
      if (typeof (fn = it.valueOf) == "function" && !isObject(val2 = fn.call(it)))
        return val2;
      if (!S && typeof (fn = it.toString) == "function" && !isObject(val2 = fn.call(it)))
        return val2;
      throw TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/library/modules/_object-dp.js
var require_object_dp = __commonJS({
  "node_modules/core-js/library/modules/_object-dp.js"(exports2) {
    init_react();
    var anObject = require_an_object();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var toPrimitive = require_to_primitive();
    var dP = Object.defineProperty;
    exports2.f = require_descriptors() ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return dP(O, P, Attributes);
        } catch (e) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw TypeError("Accessors not supported!");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/library/modules/_property-desc.js
var require_property_desc = __commonJS({
  "node_modules/core-js/library/modules/_property-desc.js"(exports2, module2) {
    init_react();
    module2.exports = function(bitmap, value2) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value2
      };
    };
  }
});

// node_modules/core-js/library/modules/_hide.js
var require_hide = __commonJS({
  "node_modules/core-js/library/modules/_hide.js"(exports2, module2) {
    init_react();
    var dP = require_object_dp();
    var createDesc = require_property_desc();
    module2.exports = require_descriptors() ? function(object, key2, value2) {
      return dP.f(object, key2, createDesc(1, value2));
    } : function(object, key2, value2) {
      object[key2] = value2;
      return object;
    };
  }
});

// node_modules/core-js/library/modules/_has.js
var require_has = __commonJS({
  "node_modules/core-js/library/modules/_has.js"(exports2, module2) {
    init_react();
    var hasOwnProperty = {}.hasOwnProperty;
    module2.exports = function(it, key2) {
      return hasOwnProperty.call(it, key2);
    };
  }
});

// node_modules/core-js/library/modules/_export.js
var require_export = __commonJS({
  "node_modules/core-js/library/modules/_export.js"(exports2, module2) {
    init_react();
    var global = require_global();
    var core = require_core();
    var ctx = require_ctx();
    var hide = require_hide();
    var has = require_has();
    var PROTOTYPE = "prototype";
    var $export = function(type, name2, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var IS_WRAP = type & $export.W;
      var exports3 = IS_GLOBAL ? core : core[name2] || (core[name2] = {});
      var expProto = exports3[PROTOTYPE];
      var target = IS_GLOBAL ? global : IS_STATIC ? global[name2] : (global[name2] || {})[PROTOTYPE];
      var key2, own, out;
      if (IS_GLOBAL)
        source = name2;
      for (key2 in source) {
        own = !IS_FORCED && target && target[key2] !== void 0;
        if (own && has(exports3, key2))
          continue;
        out = own ? target[key2] : source[key2];
        exports3[key2] = IS_GLOBAL && typeof target[key2] != "function" ? source[key2] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key2] == out ? function(C) {
          var F = function(a, b, c) {
            if (this instanceof C) {
              switch (arguments.length) {
                case 0:
                  return new C();
                case 1:
                  return new C(a);
                case 2:
                  return new C(a, b);
              }
              return new C(a, b, c);
            }
            return C.apply(this, arguments);
          };
          F[PROTOTYPE] = C[PROTOTYPE];
          return F;
        }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
        if (IS_PROTO) {
          (exports3.virtual || (exports3.virtual = {}))[key2] = out;
          if (type & $export.R && expProto && !expProto[key2])
            hide(expProto, key2, out);
        }
      }
    };
    $export.F = 1;
    $export.G = 2;
    $export.S = 4;
    $export.P = 8;
    $export.B = 16;
    $export.W = 32;
    $export.U = 64;
    $export.R = 128;
    module2.exports = $export;
  }
});

// node_modules/core-js/library/modules/_cof.js
var require_cof = __commonJS({
  "node_modules/core-js/library/modules/_cof.js"(exports2, module2) {
    init_react();
    var toString = {}.toString;
    module2.exports = function(it) {
      return toString.call(it).slice(8, -1);
    };
  }
});

// node_modules/core-js/library/modules/_iobject.js
var require_iobject = __commonJS({
  "node_modules/core-js/library/modules/_iobject.js"(exports2, module2) {
    init_react();
    var cof = require_cof();
    module2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
      return cof(it) == "String" ? it.split("") : Object(it);
    };
  }
});

// node_modules/core-js/library/modules/_defined.js
var require_defined = __commonJS({
  "node_modules/core-js/library/modules/_defined.js"(exports2, module2) {
    init_react();
    module2.exports = function(it) {
      if (it == void 0)
        throw TypeError("Can't call method on  " + it);
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_to-iobject.js
var require_to_iobject = __commonJS({
  "node_modules/core-js/library/modules/_to-iobject.js"(exports2, module2) {
    init_react();
    var IObject = require_iobject();
    var defined = require_defined();
    module2.exports = function(it) {
      return IObject(defined(it));
    };
  }
});

// node_modules/core-js/library/modules/_to-integer.js
var require_to_integer = __commonJS({
  "node_modules/core-js/library/modules/_to-integer.js"(exports2, module2) {
    init_react();
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = function(it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
  }
});

// node_modules/core-js/library/modules/_to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js/library/modules/_to-length.js"(exports2, module2) {
    init_react();
    var toInteger = require_to_integer();
    var min = Math.min;
    module2.exports = function(it) {
      return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/library/modules/_to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/library/modules/_to-absolute-index.js"(exports2, module2) {
    init_react();
    var toInteger = require_to_integer();
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index2, length2) {
      index2 = toInteger(index2);
      return index2 < 0 ? max(index2 + length2, 0) : min(index2, length2);
    };
  }
});

// node_modules/core-js/library/modules/_array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/library/modules/_array-includes.js"(exports2, module2) {
    init_react();
    var toIObject = require_to_iobject();
    var toLength = require_to_length();
    var toAbsoluteIndex = require_to_absolute_index();
    module2.exports = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIObject($this);
        var length2 = toLength(O.length);
        var index2 = toAbsoluteIndex(fromIndex, length2);
        var value2;
        if (IS_INCLUDES && el != el)
          while (length2 > index2) {
            value2 = O[index2++];
            if (value2 != value2)
              return true;
          }
        else
          for (; length2 > index2; index2++)
            if (IS_INCLUDES || index2 in O) {
              if (O[index2] === el)
                return IS_INCLUDES || index2 || 0;
            }
        return !IS_INCLUDES && -1;
      };
    };
  }
});

// node_modules/core-js/library/modules/_library.js
var require_library = __commonJS({
  "node_modules/core-js/library/modules/_library.js"(exports2, module2) {
    init_react();
    module2.exports = true;
  }
});

// node_modules/core-js/library/modules/_shared.js
var require_shared = __commonJS({
  "node_modules/core-js/library/modules/_shared.js"(exports2, module2) {
    init_react();
    var core = require_core();
    var global = require_global();
    var SHARED = "__core-js_shared__";
    var store = global[SHARED] || (global[SHARED] = {});
    (module2.exports = function(key2, value2) {
      return store[key2] || (store[key2] = value2 !== void 0 ? value2 : {});
    })("versions", []).push({
      version: core.version,
      mode: require_library() ? "pure" : "global",
      copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
    });
  }
});

// node_modules/core-js/library/modules/_uid.js
var require_uid = __commonJS({
  "node_modules/core-js/library/modules/_uid.js"(exports2, module2) {
    init_react();
    var id = 0;
    var px = Math.random();
    module2.exports = function(key2) {
      return "Symbol(".concat(key2 === void 0 ? "" : key2, ")_", (++id + px).toString(36));
    };
  }
});

// node_modules/core-js/library/modules/_shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/library/modules/_shared-key.js"(exports2, module2) {
    init_react();
    var shared = require_shared()("keys");
    var uid = require_uid();
    module2.exports = function(key2) {
      return shared[key2] || (shared[key2] = uid(key2));
    };
  }
});

// node_modules/core-js/library/modules/_object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js/library/modules/_object-keys-internal.js"(exports2, module2) {
    init_react();
    var has = require_has();
    var toIObject = require_to_iobject();
    var arrayIndexOf = require_array_includes()(false);
    var IE_PROTO = require_shared_key()("IE_PROTO");
    module2.exports = function(object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key2;
      for (key2 in O)
        if (key2 != IE_PROTO)
          has(O, key2) && result.push(key2);
      while (names.length > i)
        if (has(O, key2 = names[i++])) {
          ~arrayIndexOf(result, key2) || result.push(key2);
        }
      return result;
    };
  }
});

// node_modules/core-js/library/modules/_enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/library/modules/_enum-bug-keys.js"(exports2, module2) {
    init_react();
    module2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }
});

// node_modules/core-js/library/modules/_object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js/library/modules/_object-keys.js"(exports2, module2) {
    init_react();
    var $keys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js/library/modules/_object-gops.js
var require_object_gops = __commonJS({
  "node_modules/core-js/library/modules/_object-gops.js"(exports2) {
    init_react();
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/library/modules/_object-pie.js
var require_object_pie = __commonJS({
  "node_modules/core-js/library/modules/_object-pie.js"(exports2) {
    init_react();
    exports2.f = {}.propertyIsEnumerable;
  }
});

// node_modules/core-js/library/modules/_to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/library/modules/_to-object.js"(exports2, module2) {
    init_react();
    var defined = require_defined();
    module2.exports = function(it) {
      return Object(defined(it));
    };
  }
});

// node_modules/core-js/library/modules/_object-assign.js
var require_object_assign2 = __commonJS({
  "node_modules/core-js/library/modules/_object-assign.js"(exports2, module2) {
    init_react();
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var getKeys = require_object_keys();
    var gOPS = require_object_gops();
    var pIE = require_object_pie();
    var toObject = require_to_object();
    var IObject = require_iobject();
    var $assign = Object.assign;
    module2.exports = !$assign || require_fails()(function() {
      var A = {};
      var B = {};
      var S = Symbol();
      var K = "abcdefghijklmnopqrst";
      A[S] = 7;
      K.split("").forEach(function(k) {
        B[k] = k;
      });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
    }) ? function assign(target, source) {
      var T = toObject(target);
      var aLen = arguments.length;
      var index2 = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;
      while (aLen > index2) {
        var S = IObject(arguments[index2++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length2 = keys.length;
        var j = 0;
        var key2;
        while (length2 > j) {
          key2 = keys[j++];
          if (!DESCRIPTORS || isEnum.call(S, key2))
            T[key2] = S[key2];
        }
      }
      return T;
    } : $assign;
  }
});

// node_modules/core-js/library/modules/es6.object.assign.js
var require_es6_object_assign = __commonJS({
  "node_modules/core-js/library/modules/es6.object.assign.js"() {
    init_react();
    var $export = require_export();
    $export($export.S + $export.F, "Object", { assign: require_object_assign2() });
  }
});

// node_modules/core-js/library/fn/object/assign.js
var require_assign = __commonJS({
  "node_modules/core-js/library/fn/object/assign.js"(exports2, module2) {
    init_react();
    require_es6_object_assign();
    module2.exports = require_core().Object.assign;
  }
});

// node_modules/babel-runtime/core-js/object/assign.js
var require_assign2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/assign.js"(exports2, module2) {
    init_react();
    module2.exports = { "default": require_assign(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/extends.js
var require_extends = __commonJS({
  "node_modules/babel-runtime/helpers/extends.js"(exports2) {
    init_react();
    "use strict";
    exports2.__esModule = true;
    var _assign = require_assign2();
    var _assign2 = _interopRequireDefault(_assign);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2.default = _assign2.default || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key2 in source) {
          if (Object.prototype.hasOwnProperty.call(source, key2)) {
            target[key2] = source[key2];
          }
        }
      }
      return target;
    };
  }
});

// node_modules/core-js/library/modules/_object-gpo.js
var require_object_gpo = __commonJS({
  "node_modules/core-js/library/modules/_object-gpo.js"(exports2, module2) {
    init_react();
    var has = require_has();
    var toObject = require_to_object();
    var IE_PROTO = require_shared_key()("IE_PROTO");
    var ObjectProto = Object.prototype;
    module2.exports = Object.getPrototypeOf || function(O) {
      O = toObject(O);
      if (has(O, IE_PROTO))
        return O[IE_PROTO];
      if (typeof O.constructor == "function" && O instanceof O.constructor) {
        return O.constructor.prototype;
      }
      return O instanceof Object ? ObjectProto : null;
    };
  }
});

// node_modules/core-js/library/modules/_object-sap.js
var require_object_sap = __commonJS({
  "node_modules/core-js/library/modules/_object-sap.js"(exports2, module2) {
    init_react();
    var $export = require_export();
    var core = require_core();
    var fails = require_fails();
    module2.exports = function(KEY, exec) {
      var fn = (core.Object || {})[KEY] || Object[KEY];
      var exp = {};
      exp[KEY] = exec(fn);
      $export($export.S + $export.F * fails(function() {
        fn(1);
      }), "Object", exp);
    };
  }
});

// node_modules/core-js/library/modules/es6.object.get-prototype-of.js
var require_es6_object_get_prototype_of = __commonJS({
  "node_modules/core-js/library/modules/es6.object.get-prototype-of.js"() {
    init_react();
    var toObject = require_to_object();
    var $getPrototypeOf = require_object_gpo();
    require_object_sap()("getPrototypeOf", function() {
      return function getPrototypeOf(it) {
        return $getPrototypeOf(toObject(it));
      };
    });
  }
});

// node_modules/core-js/library/fn/object/get-prototype-of.js
var require_get_prototype_of = __commonJS({
  "node_modules/core-js/library/fn/object/get-prototype-of.js"(exports2, module2) {
    init_react();
    require_es6_object_get_prototype_of();
    module2.exports = require_core().Object.getPrototypeOf;
  }
});

// node_modules/babel-runtime/core-js/object/get-prototype-of.js
var require_get_prototype_of2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/get-prototype-of.js"(exports2, module2) {
    init_react();
    module2.exports = { "default": require_get_prototype_of(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/babel-runtime/helpers/classCallCheck.js"(exports2) {
    init_react();
    "use strict";
    exports2.__esModule = true;
    exports2.default = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  }
});

// node_modules/core-js/library/modules/es6.object.define-property.js
var require_es6_object_define_property = __commonJS({
  "node_modules/core-js/library/modules/es6.object.define-property.js"() {
    init_react();
    var $export = require_export();
    $export($export.S + $export.F * !require_descriptors(), "Object", { defineProperty: require_object_dp().f });
  }
});

// node_modules/core-js/library/fn/object/define-property.js
var require_define_property = __commonJS({
  "node_modules/core-js/library/fn/object/define-property.js"(exports2, module2) {
    init_react();
    require_es6_object_define_property();
    var $Object = require_core().Object;
    module2.exports = function defineProperty(it, key2, desc) {
      return $Object.defineProperty(it, key2, desc);
    };
  }
});

// node_modules/babel-runtime/core-js/object/define-property.js
var require_define_property2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/define-property.js"(exports2, module2) {
    init_react();
    module2.exports = { "default": require_define_property(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/babel-runtime/helpers/createClass.js"(exports2) {
    init_react();
    "use strict";
    exports2.__esModule = true;
    var _defineProperty = require_define_property2();
    var _defineProperty2 = _interopRequireDefault(_defineProperty);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2.default = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          (0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
  }
});

// node_modules/core-js/library/modules/_string-at.js
var require_string_at = __commonJS({
  "node_modules/core-js/library/modules/_string-at.js"(exports2, module2) {
    init_react();
    var toInteger = require_to_integer();
    var defined = require_defined();
    module2.exports = function(TO_STRING) {
      return function(that, pos) {
        var s = String(defined(that));
        var i = toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l)
          return TO_STRING ? "" : void 0;
        a = s.charCodeAt(i);
        return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
      };
    };
  }
});

// node_modules/core-js/library/modules/_redefine.js
var require_redefine = __commonJS({
  "node_modules/core-js/library/modules/_redefine.js"(exports2, module2) {
    init_react();
    module2.exports = require_hide();
  }
});

// node_modules/core-js/library/modules/_iterators.js
var require_iterators = __commonJS({
  "node_modules/core-js/library/modules/_iterators.js"(exports2, module2) {
    init_react();
    module2.exports = {};
  }
});

// node_modules/core-js/library/modules/_object-dps.js
var require_object_dps = __commonJS({
  "node_modules/core-js/library/modules/_object-dps.js"(exports2, module2) {
    init_react();
    var dP = require_object_dp();
    var anObject = require_an_object();
    var getKeys = require_object_keys();
    module2.exports = require_descriptors() ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties);
      var length2 = keys.length;
      var i = 0;
      var P;
      while (length2 > i)
        dP.f(O, P = keys[i++], Properties[P]);
      return O;
    };
  }
});

// node_modules/core-js/library/modules/_html.js
var require_html = __commonJS({
  "node_modules/core-js/library/modules/_html.js"(exports2, module2) {
    init_react();
    var document2 = require_global().document;
    module2.exports = document2 && document2.documentElement;
  }
});

// node_modules/core-js/library/modules/_object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js/library/modules/_object-create.js"(exports2, module2) {
    init_react();
    var anObject = require_an_object();
    var dPs = require_object_dps();
    var enumBugKeys = require_enum_bug_keys();
    var IE_PROTO = require_shared_key()("IE_PROTO");
    var Empty = function() {
    };
    var PROTOTYPE = "prototype";
    var createDict = function() {
      var iframe = require_dom_create()("iframe");
      var i = enumBugKeys.length;
      var lt = "<";
      var gt = ">";
      var iframeDocument;
      iframe.style.display = "none";
      require_html().appendChild(iframe);
      iframe.src = "javascript:";
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while (i--)
        delete createDict[PROTOTYPE][enumBugKeys[i]];
      return createDict();
    };
    module2.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else
        result = createDict();
      return Properties === void 0 ? result : dPs(result, Properties);
    };
  }
});

// node_modules/core-js/library/modules/_wks.js
var require_wks = __commonJS({
  "node_modules/core-js/library/modules/_wks.js"(exports2, module2) {
    init_react();
    var store = require_shared()("wks");
    var uid = require_uid();
    var Symbol2 = require_global().Symbol;
    var USE_SYMBOL = typeof Symbol2 == "function";
    var $exports = module2.exports = function(name2) {
      return store[name2] || (store[name2] = USE_SYMBOL && Symbol2[name2] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name2));
    };
    $exports.store = store;
  }
});

// node_modules/core-js/library/modules/_set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "node_modules/core-js/library/modules/_set-to-string-tag.js"(exports2, module2) {
    init_react();
    var def = require_object_dp().f;
    var has = require_has();
    var TAG = require_wks()("toStringTag");
    module2.exports = function(it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG))
        def(it, TAG, { configurable: true, value: tag });
    };
  }
});

// node_modules/core-js/library/modules/_iter-create.js
var require_iter_create = __commonJS({
  "node_modules/core-js/library/modules/_iter-create.js"(exports2, module2) {
    init_react();
    "use strict";
    var create = require_object_create();
    var descriptor = require_property_desc();
    var setToStringTag = require_set_to_string_tag();
    var IteratorPrototype = {};
    require_hide()(IteratorPrototype, require_wks()("iterator"), function() {
      return this;
    });
    module2.exports = function(Constructor, NAME, next) {
      Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
      setToStringTag(Constructor, NAME + " Iterator");
    };
  }
});

// node_modules/core-js/library/modules/_iter-define.js
var require_iter_define = __commonJS({
  "node_modules/core-js/library/modules/_iter-define.js"(exports2, module2) {
    init_react();
    "use strict";
    var LIBRARY = require_library();
    var $export = require_export();
    var redefine = require_redefine();
    var hide = require_hide();
    var Iterators = require_iterators();
    var $iterCreate = require_iter_create();
    var setToStringTag = require_set_to_string_tag();
    var getPrototypeOf = require_object_gpo();
    var ITERATOR = require_wks()("iterator");
    var BUGGY = !([].keys && "next" in [].keys());
    var FF_ITERATOR = "@@iterator";
    var KEYS = "keys";
    var VALUES = "values";
    var returnThis = function() {
      return this;
    };
    module2.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);
      var getMethod = function(kind) {
        if (!BUGGY && kind in proto)
          return proto[kind];
        switch (kind) {
          case KEYS:
            return function keys() {
              return new Constructor(this, kind);
            };
          case VALUES:
            return function values() {
              return new Constructor(this, kind);
            };
        }
        return function entries() {
          return new Constructor(this, kind);
        };
      };
      var TAG = NAME + " Iterator";
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
      var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
      var methods, key2, IteratorPrototype;
      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          setToStringTag(IteratorPrototype, TAG, true);
          if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
            hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
      }
      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED)
          for (key2 in methods) {
            if (!(key2 in proto))
              redefine(proto, key2, methods[key2]);
          }
        else
          $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };
  }
});

// node_modules/core-js/library/modules/es6.string.iterator.js
var require_es6_string_iterator = __commonJS({
  "node_modules/core-js/library/modules/es6.string.iterator.js"() {
    init_react();
    "use strict";
    var $at = require_string_at()(true);
    require_iter_define()(String, "String", function(iterated) {
      this._t = String(iterated);
      this._i = 0;
    }, function() {
      var O = this._t;
      var index2 = this._i;
      var point;
      if (index2 >= O.length)
        return { value: void 0, done: true };
      point = $at(O, index2);
      this._i += point.length;
      return { value: point, done: false };
    });
  }
});

// node_modules/core-js/library/modules/_add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/core-js/library/modules/_add-to-unscopables.js"(exports2, module2) {
    init_react();
    module2.exports = function() {
    };
  }
});

// node_modules/core-js/library/modules/_iter-step.js
var require_iter_step = __commonJS({
  "node_modules/core-js/library/modules/_iter-step.js"(exports2, module2) {
    init_react();
    module2.exports = function(done, value2) {
      return { value: value2, done: !!done };
    };
  }
});

// node_modules/core-js/library/modules/es6.array.iterator.js
var require_es6_array_iterator = __commonJS({
  "node_modules/core-js/library/modules/es6.array.iterator.js"(exports2, module2) {
    init_react();
    "use strict";
    var addToUnscopables = require_add_to_unscopables();
    var step = require_iter_step();
    var Iterators = require_iterators();
    var toIObject = require_to_iobject();
    module2.exports = require_iter_define()(Array, "Array", function(iterated, kind) {
      this._t = toIObject(iterated);
      this._i = 0;
      this._k = kind;
    }, function() {
      var O = this._t;
      var kind = this._k;
      var index2 = this._i++;
      if (!O || index2 >= O.length) {
        this._t = void 0;
        return step(1);
      }
      if (kind == "keys")
        return step(0, index2);
      if (kind == "values")
        return step(0, O[index2]);
      return step(0, [index2, O[index2]]);
    }, "values");
    Iterators.Arguments = Iterators.Array;
    addToUnscopables("keys");
    addToUnscopables("values");
    addToUnscopables("entries");
  }
});

// node_modules/core-js/library/modules/web.dom.iterable.js
var require_web_dom_iterable = __commonJS({
  "node_modules/core-js/library/modules/web.dom.iterable.js"() {
    init_react();
    require_es6_array_iterator();
    var global = require_global();
    var hide = require_hide();
    var Iterators = require_iterators();
    var TO_STRING_TAG = require_wks()("toStringTag");
    var DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
    for (i = 0; i < DOMIterables.length; i++) {
      NAME = DOMIterables[i];
      Collection = global[NAME];
      proto = Collection && Collection.prototype;
      if (proto && !proto[TO_STRING_TAG])
        hide(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = Iterators.Array;
    }
    var NAME;
    var Collection;
    var proto;
    var i;
  }
});

// node_modules/core-js/library/modules/_wks-ext.js
var require_wks_ext = __commonJS({
  "node_modules/core-js/library/modules/_wks-ext.js"(exports2) {
    init_react();
    exports2.f = require_wks();
  }
});

// node_modules/core-js/library/fn/symbol/iterator.js
var require_iterator = __commonJS({
  "node_modules/core-js/library/fn/symbol/iterator.js"(exports2, module2) {
    init_react();
    require_es6_string_iterator();
    require_web_dom_iterable();
    module2.exports = require_wks_ext().f("iterator");
  }
});

// node_modules/babel-runtime/core-js/symbol/iterator.js
var require_iterator2 = __commonJS({
  "node_modules/babel-runtime/core-js/symbol/iterator.js"(exports2, module2) {
    init_react();
    module2.exports = { "default": require_iterator(), __esModule: true };
  }
});

// node_modules/core-js/library/modules/_meta.js
var require_meta = __commonJS({
  "node_modules/core-js/library/modules/_meta.js"(exports2, module2) {
    init_react();
    var META = require_uid()("meta");
    var isObject = require_is_object();
    var has = require_has();
    var setDesc = require_object_dp().f;
    var id = 0;
    var isExtensible = Object.isExtensible || function() {
      return true;
    };
    var FREEZE = !require_fails()(function() {
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function(it) {
      setDesc(it, META, { value: {
        i: "O" + ++id,
        w: {}
      } });
    };
    var fastKey = function(it, create) {
      if (!isObject(it))
        return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
      if (!has(it, META)) {
        if (!isExtensible(it))
          return "F";
        if (!create)
          return "E";
        setMeta(it);
      }
      return it[META].i;
    };
    var getWeak = function(it, create) {
      if (!has(it, META)) {
        if (!isExtensible(it))
          return true;
        if (!create)
          return false;
        setMeta(it);
      }
      return it[META].w;
    };
    var onFreeze = function(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
        setMeta(it);
      return it;
    };
    var meta = module2.exports = {
      KEY: META,
      NEED: false,
      fastKey,
      getWeak,
      onFreeze
    };
  }
});

// node_modules/core-js/library/modules/_wks-define.js
var require_wks_define = __commonJS({
  "node_modules/core-js/library/modules/_wks-define.js"(exports2, module2) {
    init_react();
    var global = require_global();
    var core = require_core();
    var LIBRARY = require_library();
    var wksExt = require_wks_ext();
    var defineProperty = require_object_dp().f;
    module2.exports = function(name2) {
      var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
      if (name2.charAt(0) != "_" && !(name2 in $Symbol))
        defineProperty($Symbol, name2, { value: wksExt.f(name2) });
    };
  }
});

// node_modules/core-js/library/modules/_enum-keys.js
var require_enum_keys = __commonJS({
  "node_modules/core-js/library/modules/_enum-keys.js"(exports2, module2) {
    init_react();
    var getKeys = require_object_keys();
    var gOPS = require_object_gops();
    var pIE = require_object_pie();
    module2.exports = function(it) {
      var result = getKeys(it);
      var getSymbols = gOPS.f;
      if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = pIE.f;
        var i = 0;
        var key2;
        while (symbols.length > i)
          if (isEnum.call(it, key2 = symbols[i++]))
            result.push(key2);
      }
      return result;
    };
  }
});

// node_modules/core-js/library/modules/_is-array.js
var require_is_array = __commonJS({
  "node_modules/core-js/library/modules/_is-array.js"(exports2, module2) {
    init_react();
    var cof = require_cof();
    module2.exports = Array.isArray || function isArray(arg) {
      return cof(arg) == "Array";
    };
  }
});

// node_modules/core-js/library/modules/_object-gopn.js
var require_object_gopn = __commonJS({
  "node_modules/core-js/library/modules/_object-gopn.js"(exports2) {
    init_react();
    var $keys = require_object_keys_internal();
    var hiddenKeys = require_enum_bug_keys().concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return $keys(O, hiddenKeys);
    };
  }
});

// node_modules/core-js/library/modules/_object-gopn-ext.js
var require_object_gopn_ext = __commonJS({
  "node_modules/core-js/library/modules/_object-gopn-ext.js"(exports2, module2) {
    init_react();
    var toIObject = require_to_iobject();
    var gOPN = require_object_gopn().f;
    var toString = {}.toString;
    var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    var getWindowNames = function(it) {
      try {
        return gOPN(it);
      } catch (e) {
        return windowNames.slice();
      }
    };
    module2.exports.f = function getOwnPropertyNames(it) {
      return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
    };
  }
});

// node_modules/core-js/library/modules/_object-gopd.js
var require_object_gopd = __commonJS({
  "node_modules/core-js/library/modules/_object-gopd.js"(exports2) {
    init_react();
    var pIE = require_object_pie();
    var createDesc = require_property_desc();
    var toIObject = require_to_iobject();
    var toPrimitive = require_to_primitive();
    var has = require_has();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var gOPD = Object.getOwnPropertyDescriptor;
    exports2.f = require_descriptors() ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = toIObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE)
        try {
          return gOPD(O, P);
        } catch (e) {
        }
      if (has(O, P))
        return createDesc(!pIE.f.call(O, P), O[P]);
    };
  }
});

// node_modules/core-js/library/modules/es6.symbol.js
var require_es6_symbol = __commonJS({
  "node_modules/core-js/library/modules/es6.symbol.js"() {
    init_react();
    "use strict";
    var global = require_global();
    var has = require_has();
    var DESCRIPTORS = require_descriptors();
    var $export = require_export();
    var redefine = require_redefine();
    var META = require_meta().KEY;
    var $fails = require_fails();
    var shared = require_shared();
    var setToStringTag = require_set_to_string_tag();
    var uid = require_uid();
    var wks = require_wks();
    var wksExt = require_wks_ext();
    var wksDefine = require_wks_define();
    var enumKeys = require_enum_keys();
    var isArray = require_is_array();
    var anObject = require_an_object();
    var isObject = require_is_object();
    var toObject = require_to_object();
    var toIObject = require_to_iobject();
    var toPrimitive = require_to_primitive();
    var createDesc = require_property_desc();
    var _create = require_object_create();
    var gOPNExt = require_object_gopn_ext();
    var $GOPD = require_object_gopd();
    var $GOPS = require_object_gops();
    var $DP = require_object_dp();
    var $keys = require_object_keys();
    var gOPD = $GOPD.f;
    var dP = $DP.f;
    var gOPN = gOPNExt.f;
    var $Symbol = global.Symbol;
    var $JSON = global.JSON;
    var _stringify = $JSON && $JSON.stringify;
    var PROTOTYPE = "prototype";
    var HIDDEN = wks("_hidden");
    var TO_PRIMITIVE = wks("toPrimitive");
    var isEnum = {}.propertyIsEnumerable;
    var SymbolRegistry = shared("symbol-registry");
    var AllSymbols = shared("symbols");
    var OPSymbols = shared("op-symbols");
    var ObjectProto = Object[PROTOTYPE];
    var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
    var QObject = global.QObject;
    var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
    var setSymbolDesc = DESCRIPTORS && $fails(function() {
      return _create(dP({}, "a", {
        get: function() {
          return dP(this, "a", { value: 7 }).a;
        }
      })).a != 7;
    }) ? function(it, key2, D) {
      var protoDesc = gOPD(ObjectProto, key2);
      if (protoDesc)
        delete ObjectProto[key2];
      dP(it, key2, D);
      if (protoDesc && it !== ObjectProto)
        dP(ObjectProto, key2, protoDesc);
    } : dP;
    var wrap = function(tag) {
      var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
      sym._k = tag;
      return sym;
    };
    var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      return it instanceof $Symbol;
    };
    var $defineProperty = function defineProperty(it, key2, D) {
      if (it === ObjectProto)
        $defineProperty(OPSymbols, key2, D);
      anObject(it);
      key2 = toPrimitive(key2, true);
      anObject(D);
      if (has(AllSymbols, key2)) {
        if (!D.enumerable) {
          if (!has(it, HIDDEN))
            dP(it, HIDDEN, createDesc(1, {}));
          it[HIDDEN][key2] = true;
        } else {
          if (has(it, HIDDEN) && it[HIDDEN][key2])
            it[HIDDEN][key2] = false;
          D = _create(D, { enumerable: createDesc(0, false) });
        }
        return setSymbolDesc(it, key2, D);
      }
      return dP(it, key2, D);
    };
    var $defineProperties = function defineProperties(it, P) {
      anObject(it);
      var keys = enumKeys(P = toIObject(P));
      var i = 0;
      var l = keys.length;
      var key2;
      while (l > i)
        $defineProperty(it, key2 = keys[i++], P[key2]);
      return it;
    };
    var $create = function create(it, P) {
      return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key2) {
      var E = isEnum.call(this, key2 = toPrimitive(key2, true));
      if (this === ObjectProto && has(AllSymbols, key2) && !has(OPSymbols, key2))
        return false;
      return E || !has(this, key2) || !has(AllSymbols, key2) || has(this, HIDDEN) && this[HIDDEN][key2] ? E : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key2) {
      it = toIObject(it);
      key2 = toPrimitive(key2, true);
      if (it === ObjectProto && has(AllSymbols, key2) && !has(OPSymbols, key2))
        return;
      var D = gOPD(it, key2);
      if (D && has(AllSymbols, key2) && !(has(it, HIDDEN) && it[HIDDEN][key2]))
        D.enumerable = true;
      return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
      var names = gOPN(toIObject(it));
      var result = [];
      var i = 0;
      var key2;
      while (names.length > i) {
        if (!has(AllSymbols, key2 = names[i++]) && key2 != HIDDEN && key2 != META)
          result.push(key2);
      }
      return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
      var IS_OP = it === ObjectProto;
      var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
      var result = [];
      var i = 0;
      var key2;
      while (names.length > i) {
        if (has(AllSymbols, key2 = names[i++]) && (IS_OP ? has(ObjectProto, key2) : true))
          result.push(AllSymbols[key2]);
      }
      return result;
    };
    if (!USE_NATIVE) {
      $Symbol = function Symbol2() {
        if (this instanceof $Symbol)
          throw TypeError("Symbol is not a constructor!");
        var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
        var $set = function(value2) {
          if (this === ObjectProto)
            $set.call(OPSymbols, value2);
          if (has(this, HIDDEN) && has(this[HIDDEN], tag))
            this[HIDDEN][tag] = false;
          setSymbolDesc(this, tag, createDesc(1, value2));
        };
        if (DESCRIPTORS && setter)
          setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
        return wrap(tag);
      };
      redefine($Symbol[PROTOTYPE], "toString", function toString() {
        return this._k;
      });
      $GOPD.f = $getOwnPropertyDescriptor;
      $DP.f = $defineProperty;
      require_object_gopn().f = gOPNExt.f = $getOwnPropertyNames;
      require_object_pie().f = $propertyIsEnumerable;
      $GOPS.f = $getOwnPropertySymbols;
      if (DESCRIPTORS && !require_library()) {
        redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
      }
      wksExt.f = function(name2) {
        return wrap(wks(name2));
      };
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
    for (es6Symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j; )
      wks(es6Symbols[j++]);
    var es6Symbols;
    var j;
    for (wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; )
      wksDefine(wellKnownSymbols[k++]);
    var wellKnownSymbols;
    var k;
    $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
      "for": function(key2) {
        return has(SymbolRegistry, key2 += "") ? SymbolRegistry[key2] : SymbolRegistry[key2] = $Symbol(key2);
      },
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym))
          throw TypeError(sym + " is not a symbol!");
        for (var key2 in SymbolRegistry)
          if (SymbolRegistry[key2] === sym)
            return key2;
      },
      useSetter: function() {
        setter = true;
      },
      useSimple: function() {
        setter = false;
      }
    });
    $export($export.S + $export.F * !USE_NATIVE, "Object", {
      create: $create,
      defineProperty: $defineProperty,
      defineProperties: $defineProperties,
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      getOwnPropertyNames: $getOwnPropertyNames,
      getOwnPropertySymbols: $getOwnPropertySymbols
    });
    var FAILS_ON_PRIMITIVES = $fails(function() {
      $GOPS.f(1);
    });
    $export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return $GOPS.f(toObject(it));
      }
    });
    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
      var S = $Symbol();
      return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
    })), "JSON", {
      stringify: function stringify(it) {
        var args = [it];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i)
          args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if (!isObject(replacer) && it === void 0 || isSymbol(it))
          return;
        if (!isArray(replacer))
          replacer = function(key2, value2) {
            if (typeof $replacer == "function")
              value2 = $replacer.call(this, key2, value2);
            if (!isSymbol(value2))
              return value2;
          };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    });
    $Symbol[PROTOTYPE][TO_PRIMITIVE] || require_hide()($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
    setToStringTag($Symbol, "Symbol");
    setToStringTag(Math, "Math", true);
    setToStringTag(global.JSON, "JSON", true);
  }
});

// node_modules/core-js/library/modules/es6.object.to-string.js
var require_es6_object_to_string = __commonJS({
  "node_modules/core-js/library/modules/es6.object.to-string.js"() {
    init_react();
  }
});

// node_modules/core-js/library/modules/es7.symbol.async-iterator.js
var require_es7_symbol_async_iterator = __commonJS({
  "node_modules/core-js/library/modules/es7.symbol.async-iterator.js"() {
    init_react();
    require_wks_define()("asyncIterator");
  }
});

// node_modules/core-js/library/modules/es7.symbol.observable.js
var require_es7_symbol_observable = __commonJS({
  "node_modules/core-js/library/modules/es7.symbol.observable.js"() {
    init_react();
    require_wks_define()("observable");
  }
});

// node_modules/core-js/library/fn/symbol/index.js
var require_symbol = __commonJS({
  "node_modules/core-js/library/fn/symbol/index.js"(exports2, module2) {
    init_react();
    require_es6_symbol();
    require_es6_object_to_string();
    require_es7_symbol_async_iterator();
    require_es7_symbol_observable();
    module2.exports = require_core().Symbol;
  }
});

// node_modules/babel-runtime/core-js/symbol.js
var require_symbol2 = __commonJS({
  "node_modules/babel-runtime/core-js/symbol.js"(exports2, module2) {
    init_react();
    module2.exports = { "default": require_symbol(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/babel-runtime/helpers/typeof.js"(exports2) {
    init_react();
    "use strict";
    exports2.__esModule = true;
    var _iterator = require_iterator2();
    var _iterator2 = _interopRequireDefault(_iterator);
    var _symbol = require_symbol2();
    var _symbol2 = _interopRequireDefault(_symbol);
    var _typeof2 = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2.default = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function(obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    } : function(obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  }
});

// node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var require_possibleConstructorReturn = __commonJS({
  "node_modules/babel-runtime/helpers/possibleConstructorReturn.js"(exports2) {
    init_react();
    "use strict";
    exports2.__esModule = true;
    var _typeof2 = require_typeof();
    var _typeof3 = _interopRequireDefault(_typeof2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2.default = function(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self2;
    };
  }
});

// node_modules/core-js/library/modules/_set-proto.js
var require_set_proto = __commonJS({
  "node_modules/core-js/library/modules/_set-proto.js"(exports2, module2) {
    init_react();
    var isObject = require_is_object();
    var anObject = require_an_object();
    var check = function(O, proto) {
      anObject(O);
      if (!isObject(proto) && proto !== null)
        throw TypeError(proto + ": can't set as prototype!");
    };
    module2.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function(test, buggy, set) {
        try {
          set = require_ctx()(Function.call, require_object_gopd().f(Object.prototype, "__proto__").set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) {
          buggy = true;
        }
        return function setPrototypeOf(O, proto) {
          check(O, proto);
          if (buggy)
            O.__proto__ = proto;
          else
            set(O, proto);
          return O;
        };
      }({}, false) : void 0),
      check
    };
  }
});

// node_modules/core-js/library/modules/es6.object.set-prototype-of.js
var require_es6_object_set_prototype_of = __commonJS({
  "node_modules/core-js/library/modules/es6.object.set-prototype-of.js"() {
    init_react();
    var $export = require_export();
    $export($export.S, "Object", { setPrototypeOf: require_set_proto().set });
  }
});

// node_modules/core-js/library/fn/object/set-prototype-of.js
var require_set_prototype_of = __commonJS({
  "node_modules/core-js/library/fn/object/set-prototype-of.js"(exports2, module2) {
    init_react();
    require_es6_object_set_prototype_of();
    module2.exports = require_core().Object.setPrototypeOf;
  }
});

// node_modules/babel-runtime/core-js/object/set-prototype-of.js
var require_set_prototype_of2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/set-prototype-of.js"(exports2, module2) {
    init_react();
    module2.exports = { "default": require_set_prototype_of(), __esModule: true };
  }
});

// node_modules/core-js/library/modules/es6.object.create.js
var require_es6_object_create = __commonJS({
  "node_modules/core-js/library/modules/es6.object.create.js"() {
    init_react();
    var $export = require_export();
    $export($export.S, "Object", { create: require_object_create() });
  }
});

// node_modules/core-js/library/fn/object/create.js
var require_create = __commonJS({
  "node_modules/core-js/library/fn/object/create.js"(exports2, module2) {
    init_react();
    require_es6_object_create();
    var $Object = require_core().Object;
    module2.exports = function create(P, D) {
      return $Object.create(P, D);
    };
  }
});

// node_modules/babel-runtime/core-js/object/create.js
var require_create2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/create.js"(exports2, module2) {
    init_react();
    module2.exports = { "default": require_create(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/inherits.js
var require_inherits = __commonJS({
  "node_modules/babel-runtime/helpers/inherits.js"(exports2) {
    init_react();
    "use strict";
    exports2.__esModule = true;
    var _setPrototypeOf = require_set_prototype_of2();
    var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
    var _create = require_create2();
    var _create2 = _interopRequireDefault(_create);
    var _typeof2 = require_typeof();
    var _typeof3 = _interopRequireDefault(_typeof2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports2.default = function(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
      }
      subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports2, module2) {
    init_react();
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has2 = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports2, module2) {
    init_react();
    module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports2, module2) {
    init_react();
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has2();
      printWarning = function(text2) {
        var message = "Warning: " + text2;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module2.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports2, module2) {
    init_react();
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has2();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text2) {
        var message = "Warning: " + text2;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module2.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data2) {
        this.message = message;
        this.data = data2 && typeof data2 === "object" ? data2 : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key2, value2) {
            var type = getPreciseType(value2);
            if (type === "symbol") {
              return String(value2);
            }
            return value2;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key2 in propValue) {
            if (has(propValue, key2)) {
              var error = typeChecker(propValue, key2, componentName, location, propFullName + "." + key2, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key2, type) {
        return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key2 + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key2 in shapeTypes) {
            var checker = shapeTypes[key2];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key2, getPreciseType(checker));
            }
            var error = checker(propValue, key2, componentName, location, propFullName + "." + key2, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key2 in allKeys) {
            var checker = shapeTypes[key2];
            if (has(shapeTypes, key2) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key2, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key2 + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            }
            var error = checker(propValue, key2, componentName, location, propFullName + "." + key2, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value2) {
        var type = getPreciseType(value2);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports2, module2) {
    init_react();
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module2.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module2.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/lottie-web/build/player/lottie.js
var require_lottie = __commonJS({
  "node_modules/lottie-web/build/player/lottie.js"(exports, module) {
    init_react();
    typeof navigator !== "undefined" && function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.lottie = factory());
    }(exports, function() {
      "use strict";
      var svgNS = "http://www.w3.org/2000/svg";
      var locationHref = "";
      var _useWebWorker = false;
      var initialDefaultFrame = -999999;
      var setWebWorker = function setWebWorker2(flag) {
        _useWebWorker = !!flag;
      };
      var getWebWorker = function getWebWorker2() {
        return _useWebWorker;
      };
      var setLocationHref = function setLocationHref2(value2) {
        locationHref = value2;
      };
      var getLocationHref = function getLocationHref2() {
        return locationHref;
      };
      function createTag(type) {
        return document.createElement(type);
      }
      function extendPrototype(sources, destination) {
        var i;
        var len = sources.length;
        var sourcePrototype;
        for (i = 0; i < len; i += 1) {
          sourcePrototype = sources[i].prototype;
          for (var attr in sourcePrototype) {
            if (Object.prototype.hasOwnProperty.call(sourcePrototype, attr))
              destination.prototype[attr] = sourcePrototype[attr];
          }
        }
      }
      function getDescriptor(object, prop) {
        return Object.getOwnPropertyDescriptor(object, prop);
      }
      function createProxyFunction(prototype) {
        function ProxyFunction() {
        }
        ProxyFunction.prototype = prototype;
        return ProxyFunction;
      }
      var audioControllerFactory = function() {
        function AudioController(audioFactory) {
          this.audios = [];
          this.audioFactory = audioFactory;
          this._volume = 1;
          this._isMuted = false;
        }
        AudioController.prototype = {
          addAudio: function addAudio(audio) {
            this.audios.push(audio);
          },
          pause: function pause() {
            var i;
            var len = this.audios.length;
            for (i = 0; i < len; i += 1) {
              this.audios[i].pause();
            }
          },
          resume: function resume() {
            var i;
            var len = this.audios.length;
            for (i = 0; i < len; i += 1) {
              this.audios[i].resume();
            }
          },
          setRate: function setRate(rateValue) {
            var i;
            var len = this.audios.length;
            for (i = 0; i < len; i += 1) {
              this.audios[i].setRate(rateValue);
            }
          },
          createAudio: function createAudio(assetPath) {
            if (this.audioFactory) {
              return this.audioFactory(assetPath);
            }
            if (window.Howl) {
              return new window.Howl({
                src: [assetPath]
              });
            }
            return {
              isPlaying: false,
              play: function play() {
                this.isPlaying = true;
              },
              seek: function seek() {
                this.isPlaying = false;
              },
              playing: function playing() {
              },
              rate: function rate() {
              },
              setVolume: function setVolume() {
              }
            };
          },
          setAudioFactory: function setAudioFactory(audioFactory) {
            this.audioFactory = audioFactory;
          },
          setVolume: function setVolume(value2) {
            this._volume = value2;
            this._updateVolume();
          },
          mute: function mute() {
            this._isMuted = true;
            this._updateVolume();
          },
          unmute: function unmute() {
            this._isMuted = false;
            this._updateVolume();
          },
          getVolume: function getVolume() {
            return this._volume;
          },
          _updateVolume: function _updateVolume() {
            var i;
            var len = this.audios.length;
            for (i = 0; i < len; i += 1) {
              this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
            }
          }
        };
        return function() {
          return new AudioController();
        };
      }();
      var createTypedArray = function() {
        function createRegularArray(type, len) {
          var i = 0;
          var arr = [];
          var value2;
          switch (type) {
            case "int16":
            case "uint8c":
              value2 = 1;
              break;
            default:
              value2 = 1.1;
              break;
          }
          for (i = 0; i < len; i += 1) {
            arr.push(value2);
          }
          return arr;
        }
        function createTypedArrayFactory(type, len) {
          if (type === "float32") {
            return new Float32Array(len);
          }
          if (type === "int16") {
            return new Int16Array(len);
          }
          if (type === "uint8c") {
            return new Uint8ClampedArray(len);
          }
          return createRegularArray(type, len);
        }
        if (typeof Uint8ClampedArray === "function" && typeof Float32Array === "function") {
          return createTypedArrayFactory;
        }
        return createRegularArray;
      }();
      function createSizedArray(len) {
        return Array.apply(null, {
          length: len
        });
      }
      function _typeof$6(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof$6 = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof$6 = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof$6(obj);
      }
      var subframeEnabled = true;
      var expressionsPlugin = null;
      var idPrefix$1 = "";
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      var _shouldRoundValues = false;
      var bmPow = Math.pow;
      var bmSqrt = Math.sqrt;
      var bmFloor = Math.floor;
      var bmMax = Math.max;
      var bmMin = Math.min;
      var BMMath = {};
      (function() {
        var propertyNames = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"];
        var i;
        var len = propertyNames.length;
        for (i = 0; i < len; i += 1) {
          BMMath[propertyNames[i]] = Math[propertyNames[i]];
        }
      })();
      function ProjectInterface$1() {
        return {};
      }
      BMMath.random = Math.random;
      BMMath.abs = function(val2) {
        var tOfVal = _typeof$6(val2);
        if (tOfVal === "object" && val2.length) {
          var absArr = createSizedArray(val2.length);
          var i;
          var len = val2.length;
          for (i = 0; i < len; i += 1) {
            absArr[i] = Math.abs(val2[i]);
          }
          return absArr;
        }
        return Math.abs(val2);
      };
      var defaultCurveSegments = 150;
      var degToRads = Math.PI / 180;
      var roundCorner = 0.5519;
      function roundValues(flag) {
        _shouldRoundValues = !!flag;
      }
      function bmRnd(value2) {
        if (_shouldRoundValues) {
          return Math.round(value2);
        }
        return value2;
      }
      function styleDiv(element) {
        element.style.position = "absolute";
        element.style.top = 0;
        element.style.left = 0;
        element.style.display = "block";
        element.style.transformOrigin = "0 0";
        element.style.webkitTransformOrigin = "0 0";
        element.style.backfaceVisibility = "visible";
        element.style.webkitBackfaceVisibility = "visible";
        element.style.transformStyle = "preserve-3d";
        element.style.webkitTransformStyle = "preserve-3d";
        element.style.mozTransformStyle = "preserve-3d";
      }
      function BMEnterFrameEvent(type, currentTime, totalTime, frameMultiplier) {
        this.type = type;
        this.currentTime = currentTime;
        this.totalTime = totalTime;
        this.direction = frameMultiplier < 0 ? -1 : 1;
      }
      function BMCompleteEvent(type, frameMultiplier) {
        this.type = type;
        this.direction = frameMultiplier < 0 ? -1 : 1;
      }
      function BMCompleteLoopEvent(type, totalLoops, currentLoop, frameMultiplier) {
        this.type = type;
        this.currentLoop = currentLoop;
        this.totalLoops = totalLoops;
        this.direction = frameMultiplier < 0 ? -1 : 1;
      }
      function BMSegmentStartEvent(type, firstFrame, totalFrames) {
        this.type = type;
        this.firstFrame = firstFrame;
        this.totalFrames = totalFrames;
      }
      function BMDestroyEvent(type, target) {
        this.type = type;
        this.target = target;
      }
      function BMRenderFrameErrorEvent(nativeError, currentTime) {
        this.type = "renderFrameError";
        this.nativeError = nativeError;
        this.currentTime = currentTime;
      }
      function BMConfigErrorEvent(nativeError) {
        this.type = "configError";
        this.nativeError = nativeError;
      }
      function BMAnimationConfigErrorEvent(type, nativeError) {
        this.type = type;
        this.nativeError = nativeError;
      }
      var createElementID = function() {
        var _count = 0;
        return function createID() {
          _count += 1;
          return idPrefix$1 + "__lottie_element_" + _count;
        };
      }();
      function HSVtoRGB(h2, s, v2) {
        var r;
        var g;
        var b;
        var i;
        var f;
        var p;
        var q;
        var t;
        i = Math.floor(h2 * 6);
        f = h2 * 6 - i;
        p = v2 * (1 - s);
        q = v2 * (1 - f * s);
        t = v2 * (1 - (1 - f) * s);
        switch (i % 6) {
          case 0:
            r = v2;
            g = t;
            b = p;
            break;
          case 1:
            r = q;
            g = v2;
            b = p;
            break;
          case 2:
            r = p;
            g = v2;
            b = t;
            break;
          case 3:
            r = p;
            g = q;
            b = v2;
            break;
          case 4:
            r = t;
            g = p;
            b = v2;
            break;
          case 5:
            r = v2;
            g = p;
            b = q;
            break;
          default:
            break;
        }
        return [r, g, b];
      }
      function RGBtoHSV(r, g, b) {
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var d = max - min;
        var h2;
        var s = max === 0 ? 0 : d / max;
        var v2 = max / 255;
        switch (max) {
          case min:
            h2 = 0;
            break;
          case r:
            h2 = g - b + d * (g < b ? 6 : 0);
            h2 /= 6 * d;
            break;
          case g:
            h2 = b - r + d * 2;
            h2 /= 6 * d;
            break;
          case b:
            h2 = r - g + d * 4;
            h2 /= 6 * d;
            break;
          default:
            break;
        }
        return [h2, s, v2];
      }
      function addSaturationToRGB(color, offset) {
        var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
        hsv[1] += offset;
        if (hsv[1] > 1) {
          hsv[1] = 1;
        } else if (hsv[1] <= 0) {
          hsv[1] = 0;
        }
        return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
      }
      function addBrightnessToRGB(color, offset) {
        var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
        hsv[2] += offset;
        if (hsv[2] > 1) {
          hsv[2] = 1;
        } else if (hsv[2] < 0) {
          hsv[2] = 0;
        }
        return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
      }
      function addHueToRGB(color, offset) {
        var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
        hsv[0] += offset / 360;
        if (hsv[0] > 1) {
          hsv[0] -= 1;
        } else if (hsv[0] < 0) {
          hsv[0] += 1;
        }
        return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
      }
      var rgbToHex = function() {
        var colorMap = [];
        var i;
        var hex;
        for (i = 0; i < 256; i += 1) {
          hex = i.toString(16);
          colorMap[i] = hex.length === 1 ? "0" + hex : hex;
        }
        return function(r, g, b) {
          if (r < 0) {
            r = 0;
          }
          if (g < 0) {
            g = 0;
          }
          if (b < 0) {
            b = 0;
          }
          return "#" + colorMap[r] + colorMap[g] + colorMap[b];
        };
      }();
      var setSubframeEnabled = function setSubframeEnabled2(flag) {
        subframeEnabled = !!flag;
      };
      var getSubframeEnabled = function getSubframeEnabled2() {
        return subframeEnabled;
      };
      var setExpressionsPlugin = function setExpressionsPlugin2(value2) {
        expressionsPlugin = value2;
      };
      var getExpressionsPlugin = function getExpressionsPlugin2() {
        return expressionsPlugin;
      };
      var setDefaultCurveSegments = function setDefaultCurveSegments2(value2) {
        defaultCurveSegments = value2;
      };
      var getDefaultCurveSegments = function getDefaultCurveSegments2() {
        return defaultCurveSegments;
      };
      var setIdPrefix = function setIdPrefix2(value2) {
        idPrefix$1 = value2;
      };
      var getIdPrefix = function getIdPrefix2() {
        return idPrefix$1;
      };
      function createNS(type) {
        return document.createElementNS(svgNS, type);
      }
      function _typeof$5(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof$5 = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof$5 = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof$5(obj);
      }
      var dataManager = function() {
        var _counterId = 1;
        var processes = [];
        var workerFn;
        var workerInstance;
        var workerProxy = {
          onmessage: function onmessage() {
          },
          postMessage: function postMessage(path) {
            workerFn({
              data: path
            });
          }
        };
        var _workerSelf = {
          postMessage: function postMessage(data2) {
            workerProxy.onmessage({
              data: data2
            });
          }
        };
        function createWorker(fn) {
          if (window.Worker && window.Blob && getWebWorker()) {
            var blob = new Blob(["var _workerSelf = self; self.onmessage = ", fn.toString()], {
              type: "text/javascript"
            });
            var url = URL.createObjectURL(blob);
            return new Worker(url);
          }
          workerFn = fn;
          return workerProxy;
        }
        function setupWorker() {
          if (!workerInstance) {
            workerInstance = createWorker(function workerStart(e) {
              function dataFunctionManager() {
                function completeLayers(layers2, comps) {
                  var layerData;
                  var i;
                  var len = layers2.length;
                  var j;
                  var jLen;
                  var k;
                  var kLen;
                  for (i = 0; i < len; i += 1) {
                    layerData = layers2[i];
                    if ("ks" in layerData && !layerData.completed) {
                      layerData.completed = true;
                      if (layerData.tt) {
                        layers2[i - 1].td = layerData.tt;
                      }
                      if (layerData.hasMask) {
                        var maskProps = layerData.masksProperties;
                        jLen = maskProps.length;
                        for (j = 0; j < jLen; j += 1) {
                          if (maskProps[j].pt.k.i) {
                            convertPathsToAbsoluteValues(maskProps[j].pt.k);
                          } else {
                            kLen = maskProps[j].pt.k.length;
                            for (k = 0; k < kLen; k += 1) {
                              if (maskProps[j].pt.k[k].s) {
                                convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
                              }
                              if (maskProps[j].pt.k[k].e) {
                                convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
                              }
                            }
                          }
                        }
                      }
                      if (layerData.ty === 0) {
                        layerData.layers = findCompLayers(layerData.refId, comps);
                        completeLayers(layerData.layers, comps);
                      } else if (layerData.ty === 4) {
                        completeShapes(layerData.shapes);
                      } else if (layerData.ty === 5) {
                        completeText(layerData);
                      }
                    }
                  }
                }
                function completeChars(chars, assets2) {
                  if (chars) {
                    var i = 0;
                    var len = chars.length;
                    for (i = 0; i < len; i += 1) {
                      if (chars[i].t === 1) {
                        chars[i].data.layers = findCompLayers(chars[i].data.refId, assets2);
                        completeLayers(chars[i].data.layers, assets2);
                      }
                    }
                  }
                }
                function findComp(id, comps) {
                  var i = 0;
                  var len = comps.length;
                  while (i < len) {
                    if (comps[i].id === id) {
                      return comps[i];
                    }
                    i += 1;
                  }
                  return null;
                }
                function findCompLayers(id, comps) {
                  var comp2 = findComp(id, comps);
                  if (comp2) {
                    if (!comp2.layers.__used) {
                      comp2.layers.__used = true;
                      return comp2.layers;
                    }
                    return JSON.parse(JSON.stringify(comp2.layers));
                  }
                  return null;
                }
                function completeShapes(arr) {
                  var i;
                  var len = arr.length;
                  var j;
                  var jLen;
                  for (i = len - 1; i >= 0; i -= 1) {
                    if (arr[i].ty === "sh") {
                      if (arr[i].ks.k.i) {
                        convertPathsToAbsoluteValues(arr[i].ks.k);
                      } else {
                        jLen = arr[i].ks.k.length;
                        for (j = 0; j < jLen; j += 1) {
                          if (arr[i].ks.k[j].s) {
                            convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
                          }
                          if (arr[i].ks.k[j].e) {
                            convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
                          }
                        }
                      }
                    } else if (arr[i].ty === "gr") {
                      completeShapes(arr[i].it);
                    }
                  }
                }
                function convertPathsToAbsoluteValues(path) {
                  var i;
                  var len = path.i.length;
                  for (i = 0; i < len; i += 1) {
                    path.i[i][0] += path.v[i][0];
                    path.i[i][1] += path.v[i][1];
                    path.o[i][0] += path.v[i][0];
                    path.o[i][1] += path.v[i][1];
                  }
                }
                function checkVersion(minimum, animVersionString) {
                  var animVersion = animVersionString ? animVersionString.split(".") : [100, 100, 100];
                  if (minimum[0] > animVersion[0]) {
                    return true;
                  }
                  if (animVersion[0] > minimum[0]) {
                    return false;
                  }
                  if (minimum[1] > animVersion[1]) {
                    return true;
                  }
                  if (animVersion[1] > minimum[1]) {
                    return false;
                  }
                  if (minimum[2] > animVersion[2]) {
                    return true;
                  }
                  if (animVersion[2] > minimum[2]) {
                    return false;
                  }
                  return null;
                }
                var checkText = function() {
                  var minimumVersion = [4, 4, 14];
                  function updateTextLayer(textLayer) {
                    var documentData = textLayer.t.d;
                    textLayer.t.d = {
                      k: [{
                        s: documentData,
                        t: 0
                      }]
                    };
                  }
                  function iterateLayers(layers2) {
                    var i;
                    var len = layers2.length;
                    for (i = 0; i < len; i += 1) {
                      if (layers2[i].ty === 5) {
                        updateTextLayer(layers2[i]);
                      }
                    }
                  }
                  return function(animationData2) {
                    if (checkVersion(minimumVersion, animationData2.v)) {
                      iterateLayers(animationData2.layers);
                      if (animationData2.assets) {
                        var i;
                        var len = animationData2.assets.length;
                        for (i = 0; i < len; i += 1) {
                          if (animationData2.assets[i].layers) {
                            iterateLayers(animationData2.assets[i].layers);
                          }
                        }
                      }
                    }
                  };
                }();
                var checkChars = function() {
                  var minimumVersion = [4, 7, 99];
                  return function(animationData2) {
                    if (animationData2.chars && !checkVersion(minimumVersion, animationData2.v)) {
                      var i;
                      var len = animationData2.chars.length;
                      for (i = 0; i < len; i += 1) {
                        var charData = animationData2.chars[i];
                        if (charData.data && charData.data.shapes) {
                          completeShapes(charData.data.shapes);
                          charData.data.ip = 0;
                          charData.data.op = 99999;
                          charData.data.st = 0;
                          charData.data.sr = 1;
                          charData.data.ks = {
                            p: {
                              k: [0, 0],
                              a: 0
                            },
                            s: {
                              k: [100, 100],
                              a: 0
                            },
                            a: {
                              k: [0, 0],
                              a: 0
                            },
                            r: {
                              k: 0,
                              a: 0
                            },
                            o: {
                              k: 100,
                              a: 0
                            }
                          };
                          if (!animationData2.chars[i].t) {
                            charData.data.shapes.push({
                              ty: "no"
                            });
                            charData.data.shapes[0].it.push({
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              },
                              sk: {
                                k: 0,
                                a: 0
                              },
                              sa: {
                                k: 0,
                                a: 0
                              },
                              ty: "tr"
                            });
                          }
                        }
                      }
                    }
                  };
                }();
                var checkPathProperties = function() {
                  var minimumVersion = [5, 7, 15];
                  function updateTextLayer(textLayer) {
                    var pathData = textLayer.t.p;
                    if (typeof pathData.a === "number") {
                      pathData.a = {
                        a: 0,
                        k: pathData.a
                      };
                    }
                    if (typeof pathData.p === "number") {
                      pathData.p = {
                        a: 0,
                        k: pathData.p
                      };
                    }
                    if (typeof pathData.r === "number") {
                      pathData.r = {
                        a: 0,
                        k: pathData.r
                      };
                    }
                  }
                  function iterateLayers(layers2) {
                    var i;
                    var len = layers2.length;
                    for (i = 0; i < len; i += 1) {
                      if (layers2[i].ty === 5) {
                        updateTextLayer(layers2[i]);
                      }
                    }
                  }
                  return function(animationData2) {
                    if (checkVersion(minimumVersion, animationData2.v)) {
                      iterateLayers(animationData2.layers);
                      if (animationData2.assets) {
                        var i;
                        var len = animationData2.assets.length;
                        for (i = 0; i < len; i += 1) {
                          if (animationData2.assets[i].layers) {
                            iterateLayers(animationData2.assets[i].layers);
                          }
                        }
                      }
                    }
                  };
                }();
                var checkColors = function() {
                  var minimumVersion = [4, 1, 9];
                  function iterateShapes(shapes) {
                    var i;
                    var len = shapes.length;
                    var j;
                    var jLen;
                    for (i = 0; i < len; i += 1) {
                      if (shapes[i].ty === "gr") {
                        iterateShapes(shapes[i].it);
                      } else if (shapes[i].ty === "fl" || shapes[i].ty === "st") {
                        if (shapes[i].c.k && shapes[i].c.k[0].i) {
                          jLen = shapes[i].c.k.length;
                          for (j = 0; j < jLen; j += 1) {
                            if (shapes[i].c.k[j].s) {
                              shapes[i].c.k[j].s[0] /= 255;
                              shapes[i].c.k[j].s[1] /= 255;
                              shapes[i].c.k[j].s[2] /= 255;
                              shapes[i].c.k[j].s[3] /= 255;
                            }
                            if (shapes[i].c.k[j].e) {
                              shapes[i].c.k[j].e[0] /= 255;
                              shapes[i].c.k[j].e[1] /= 255;
                              shapes[i].c.k[j].e[2] /= 255;
                              shapes[i].c.k[j].e[3] /= 255;
                            }
                          }
                        } else {
                          shapes[i].c.k[0] /= 255;
                          shapes[i].c.k[1] /= 255;
                          shapes[i].c.k[2] /= 255;
                          shapes[i].c.k[3] /= 255;
                        }
                      }
                    }
                  }
                  function iterateLayers(layers2) {
                    var i;
                    var len = layers2.length;
                    for (i = 0; i < len; i += 1) {
                      if (layers2[i].ty === 4) {
                        iterateShapes(layers2[i].shapes);
                      }
                    }
                  }
                  return function(animationData2) {
                    if (checkVersion(minimumVersion, animationData2.v)) {
                      iterateLayers(animationData2.layers);
                      if (animationData2.assets) {
                        var i;
                        var len = animationData2.assets.length;
                        for (i = 0; i < len; i += 1) {
                          if (animationData2.assets[i].layers) {
                            iterateLayers(animationData2.assets[i].layers);
                          }
                        }
                      }
                    }
                  };
                }();
                var checkShapes = function() {
                  var minimumVersion = [4, 4, 18];
                  function completeClosingShapes(arr) {
                    var i;
                    var len = arr.length;
                    var j;
                    var jLen;
                    for (i = len - 1; i >= 0; i -= 1) {
                      if (arr[i].ty === "sh") {
                        if (arr[i].ks.k.i) {
                          arr[i].ks.k.c = arr[i].closed;
                        } else {
                          jLen = arr[i].ks.k.length;
                          for (j = 0; j < jLen; j += 1) {
                            if (arr[i].ks.k[j].s) {
                              arr[i].ks.k[j].s[0].c = arr[i].closed;
                            }
                            if (arr[i].ks.k[j].e) {
                              arr[i].ks.k[j].e[0].c = arr[i].closed;
                            }
                          }
                        }
                      } else if (arr[i].ty === "gr") {
                        completeClosingShapes(arr[i].it);
                      }
                    }
                  }
                  function iterateLayers(layers2) {
                    var layerData;
                    var i;
                    var len = layers2.length;
                    var j;
                    var jLen;
                    var k;
                    var kLen;
                    for (i = 0; i < len; i += 1) {
                      layerData = layers2[i];
                      if (layerData.hasMask) {
                        var maskProps = layerData.masksProperties;
                        jLen = maskProps.length;
                        for (j = 0; j < jLen; j += 1) {
                          if (maskProps[j].pt.k.i) {
                            maskProps[j].pt.k.c = maskProps[j].cl;
                          } else {
                            kLen = maskProps[j].pt.k.length;
                            for (k = 0; k < kLen; k += 1) {
                              if (maskProps[j].pt.k[k].s) {
                                maskProps[j].pt.k[k].s[0].c = maskProps[j].cl;
                              }
                              if (maskProps[j].pt.k[k].e) {
                                maskProps[j].pt.k[k].e[0].c = maskProps[j].cl;
                              }
                            }
                          }
                        }
                      }
                      if (layerData.ty === 4) {
                        completeClosingShapes(layerData.shapes);
                      }
                    }
                  }
                  return function(animationData2) {
                    if (checkVersion(minimumVersion, animationData2.v)) {
                      iterateLayers(animationData2.layers);
                      if (animationData2.assets) {
                        var i;
                        var len = animationData2.assets.length;
                        for (i = 0; i < len; i += 1) {
                          if (animationData2.assets[i].layers) {
                            iterateLayers(animationData2.assets[i].layers);
                          }
                        }
                      }
                    }
                  };
                }();
                function completeData(animationData2) {
                  if (animationData2.__complete) {
                    return;
                  }
                  checkColors(animationData2);
                  checkText(animationData2);
                  checkChars(animationData2);
                  checkPathProperties(animationData2);
                  checkShapes(animationData2);
                  completeLayers(animationData2.layers, animationData2.assets);
                  completeChars(animationData2.chars, animationData2.assets);
                  animationData2.__complete = true;
                }
                function completeText(data2) {
                  if (data2.t.a.length === 0 && !("m" in data2.t.p)) {
                  }
                }
                var moduleOb = {};
                moduleOb.completeData = completeData;
                moduleOb.checkColors = checkColors;
                moduleOb.checkChars = checkChars;
                moduleOb.checkPathProperties = checkPathProperties;
                moduleOb.checkShapes = checkShapes;
                moduleOb.completeLayers = completeLayers;
                return moduleOb;
              }
              if (!_workerSelf.dataManager) {
                _workerSelf.dataManager = dataFunctionManager();
              }
              if (!_workerSelf.assetLoader) {
                _workerSelf.assetLoader = function() {
                  function formatResponse(xhr) {
                    var contentTypeHeader = xhr.getResponseHeader("content-type");
                    if (contentTypeHeader && xhr.responseType === "json" && contentTypeHeader.indexOf("json") !== -1) {
                      return xhr.response;
                    }
                    if (xhr.response && _typeof$5(xhr.response) === "object") {
                      return xhr.response;
                    }
                    if (xhr.response && typeof xhr.response === "string") {
                      return JSON.parse(xhr.response);
                    }
                    if (xhr.responseText) {
                      return JSON.parse(xhr.responseText);
                    }
                    return null;
                  }
                  function loadAsset(path, fullPath, callback, errorCallback) {
                    var response;
                    var xhr = new XMLHttpRequest();
                    try {
                      xhr.responseType = "json";
                    } catch (err) {
                    }
                    xhr.onreadystatechange = function() {
                      if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                          response = formatResponse(xhr);
                          callback(response);
                        } else {
                          try {
                            response = formatResponse(xhr);
                            callback(response);
                          } catch (err) {
                            if (errorCallback) {
                              errorCallback(err);
                            }
                          }
                        }
                      }
                    };
                    try {
                      xhr.open("GET", path, true);
                    } catch (error) {
                      xhr.open("GET", fullPath + "/" + path, true);
                    }
                    xhr.send();
                  }
                  return {
                    load: loadAsset
                  };
                }();
              }
              if (e.data.type === "loadAnimation") {
                _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function(data2) {
                  _workerSelf.dataManager.completeData(data2);
                  _workerSelf.postMessage({
                    id: e.data.id,
                    payload: data2,
                    status: "success"
                  });
                }, function() {
                  _workerSelf.postMessage({
                    id: e.data.id,
                    status: "error"
                  });
                });
              } else if (e.data.type === "complete") {
                var animation = e.data.animation;
                _workerSelf.dataManager.completeData(animation);
                _workerSelf.postMessage({
                  id: e.data.id,
                  payload: animation,
                  status: "success"
                });
              } else if (e.data.type === "loadData") {
                _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function(data2) {
                  _workerSelf.postMessage({
                    id: e.data.id,
                    payload: data2,
                    status: "success"
                  });
                }, function() {
                  _workerSelf.postMessage({
                    id: e.data.id,
                    status: "error"
                  });
                });
              }
            });
            workerInstance.onmessage = function(event) {
              var data2 = event.data;
              var id = data2.id;
              var process2 = processes[id];
              processes[id] = null;
              if (data2.status === "success") {
                process2.onComplete(data2.payload);
              } else if (process2.onError) {
                process2.onError();
              }
            };
          }
        }
        function createProcess(onComplete, onError) {
          _counterId += 1;
          var id = "processId_" + _counterId;
          processes[id] = {
            onComplete,
            onError
          };
          return id;
        }
        function loadAnimation2(path, onComplete, onError) {
          setupWorker();
          var processId = createProcess(onComplete, onError);
          workerInstance.postMessage({
            type: "loadAnimation",
            path,
            fullPath: window.location.origin + window.location.pathname,
            id: processId
          });
        }
        function loadData(path, onComplete, onError) {
          setupWorker();
          var processId = createProcess(onComplete, onError);
          workerInstance.postMessage({
            type: "loadData",
            path,
            fullPath: window.location.origin + window.location.pathname,
            id: processId
          });
        }
        function completeAnimation(anim, onComplete, onError) {
          setupWorker();
          var processId = createProcess(onComplete, onError);
          workerInstance.postMessage({
            type: "complete",
            animation: anim,
            id: processId
          });
        }
        return {
          loadAnimation: loadAnimation2,
          loadData,
          completeAnimation
        };
      }();
      var ImagePreloader = function() {
        var proxyImage = function() {
          var canvas = createTag("canvas");
          canvas.width = 1;
          canvas.height = 1;
          var ctx = canvas.getContext("2d");
          ctx.fillStyle = "rgba(0,0,0,0)";
          ctx.fillRect(0, 0, 1, 1);
          return canvas;
        }();
        function imageLoaded() {
          this.loadedAssets += 1;
          if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
            if (this.imagesLoadedCb) {
              this.imagesLoadedCb(null);
            }
          }
        }
        function footageLoaded() {
          this.loadedFootagesCount += 1;
          if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
            if (this.imagesLoadedCb) {
              this.imagesLoadedCb(null);
            }
          }
        }
        function getAssetsPath(assetData, assetsPath, originalPath) {
          var path = "";
          if (assetData.e) {
            path = assetData.p;
          } else if (assetsPath) {
            var imagePath = assetData.p;
            if (imagePath.indexOf("images/") !== -1) {
              imagePath = imagePath.split("/")[1];
            }
            path = assetsPath + imagePath;
          } else {
            path = originalPath;
            path += assetData.u ? assetData.u : "";
            path += assetData.p;
          }
          return path;
        }
        function testImageLoaded(img) {
          var _count = 0;
          var intervalId = setInterval(function() {
            var box = img.getBBox();
            if (box.width || _count > 500) {
              this._imageLoaded();
              clearInterval(intervalId);
            }
            _count += 1;
          }.bind(this), 50);
        }
        function createImageData(assetData) {
          var path = getAssetsPath(assetData, this.assetsPath, this.path);
          var img = createNS("image");
          if (isSafari) {
            this.testImageLoaded(img);
          } else {
            img.addEventListener("load", this._imageLoaded, false);
          }
          img.addEventListener("error", function() {
            ob2.img = proxyImage;
            this._imageLoaded();
          }.bind(this), false);
          img.setAttributeNS("http://www.w3.org/1999/xlink", "href", path);
          if (this._elementHelper.append) {
            this._elementHelper.append(img);
          } else {
            this._elementHelper.appendChild(img);
          }
          var ob2 = {
            img,
            assetData
          };
          return ob2;
        }
        function createImgData(assetData) {
          var path = getAssetsPath(assetData, this.assetsPath, this.path);
          var img = createTag("img");
          img.crossOrigin = "anonymous";
          img.addEventListener("load", this._imageLoaded, false);
          img.addEventListener("error", function() {
            ob2.img = proxyImage;
            this._imageLoaded();
          }.bind(this), false);
          img.src = path;
          var ob2 = {
            img,
            assetData
          };
          return ob2;
        }
        function createFootageData(data2) {
          var ob2 = {
            assetData: data2
          };
          var path = getAssetsPath(data2, this.assetsPath, this.path);
          dataManager.loadData(path, function(footageData) {
            ob2.img = footageData;
            this._footageLoaded();
          }.bind(this), function() {
            ob2.img = {};
            this._footageLoaded();
          }.bind(this));
          return ob2;
        }
        function loadAssets(assets2, cb) {
          this.imagesLoadedCb = cb;
          var i;
          var len = assets2.length;
          for (i = 0; i < len; i += 1) {
            if (!assets2[i].layers) {
              if (!assets2[i].t || assets2[i].t === "seq") {
                this.totalImages += 1;
                this.images.push(this._createImageData(assets2[i]));
              } else if (assets2[i].t === 3) {
                this.totalFootages += 1;
                this.images.push(this.createFootageData(assets2[i]));
              }
            }
          }
        }
        function setPath(path) {
          this.path = path || "";
        }
        function setAssetsPath(path) {
          this.assetsPath = path || "";
        }
        function getAsset(assetData) {
          var i = 0;
          var len = this.images.length;
          while (i < len) {
            if (this.images[i].assetData === assetData) {
              return this.images[i].img;
            }
            i += 1;
          }
          return null;
        }
        function destroy() {
          this.imagesLoadedCb = null;
          this.images.length = 0;
        }
        function loadedImages() {
          return this.totalImages === this.loadedAssets;
        }
        function loadedFootages() {
          return this.totalFootages === this.loadedFootagesCount;
        }
        function setCacheType(type, elementHelper) {
          if (type === "svg") {
            this._elementHelper = elementHelper;
            this._createImageData = this.createImageData.bind(this);
          } else {
            this._createImageData = this.createImgData.bind(this);
          }
        }
        function ImagePreloaderFactory() {
          this._imageLoaded = imageLoaded.bind(this);
          this._footageLoaded = footageLoaded.bind(this);
          this.testImageLoaded = testImageLoaded.bind(this);
          this.createFootageData = createFootageData.bind(this);
          this.assetsPath = "";
          this.path = "";
          this.totalImages = 0;
          this.totalFootages = 0;
          this.loadedAssets = 0;
          this.loadedFootagesCount = 0;
          this.imagesLoadedCb = null;
          this.images = [];
        }
        ImagePreloaderFactory.prototype = {
          loadAssets,
          setAssetsPath,
          setPath,
          loadedImages,
          loadedFootages,
          destroy,
          getAsset,
          createImgData,
          createImageData,
          imageLoaded,
          footageLoaded,
          setCacheType
        };
        return ImagePreloaderFactory;
      }();
      function BaseEvent() {
      }
      BaseEvent.prototype = {
        triggerEvent: function triggerEvent(eventName, args) {
          if (this._cbs[eventName]) {
            var callbacks = this._cbs[eventName];
            for (var i = 0; i < callbacks.length; i += 1) {
              callbacks[i](args);
            }
          }
        },
        addEventListener: function addEventListener(eventName, callback) {
          if (!this._cbs[eventName]) {
            this._cbs[eventName] = [];
          }
          this._cbs[eventName].push(callback);
          return function() {
            this.removeEventListener(eventName, callback);
          }.bind(this);
        },
        removeEventListener: function removeEventListener(eventName, callback) {
          if (!callback) {
            this._cbs[eventName] = null;
          } else if (this._cbs[eventName]) {
            var i = 0;
            var len = this._cbs[eventName].length;
            while (i < len) {
              if (this._cbs[eventName][i] === callback) {
                this._cbs[eventName].splice(i, 1);
                i -= 1;
                len -= 1;
              }
              i += 1;
            }
            if (!this._cbs[eventName].length) {
              this._cbs[eventName] = null;
            }
          }
        }
      };
      var markerParser = function() {
        function parsePayloadLines(payload) {
          var lines = payload.split("\r\n");
          var keys = {};
          var line;
          var keysCount = 0;
          for (var i = 0; i < lines.length; i += 1) {
            line = lines[i].split(":");
            if (line.length === 2) {
              keys[line[0]] = line[1].trim();
              keysCount += 1;
            }
          }
          if (keysCount === 0) {
            throw new Error();
          }
          return keys;
        }
        return function(_markers) {
          var markers2 = [];
          for (var i = 0; i < _markers.length; i += 1) {
            var _marker = _markers[i];
            var markerData = {
              time: _marker.tm,
              duration: _marker.dr
            };
            try {
              markerData.payload = JSON.parse(_markers[i].cm);
            } catch (_) {
              try {
                markerData.payload = parsePayloadLines(_markers[i].cm);
              } catch (__) {
                markerData.payload = {
                  name: _markers[i].cm
                };
              }
            }
            markers2.push(markerData);
          }
          return markers2;
        };
      }();
      var ProjectInterface = function() {
        function registerComposition(comp2) {
          this.compositions.push(comp2);
        }
        return function() {
          function _thisProjectFunction(name2) {
            var i = 0;
            var len = this.compositions.length;
            while (i < len) {
              if (this.compositions[i].data && this.compositions[i].data.nm === name2) {
                if (this.compositions[i].prepareFrame && this.compositions[i].data.xt) {
                  this.compositions[i].prepareFrame(this.currentFrame);
                }
                return this.compositions[i].compInterface;
              }
              i += 1;
            }
            return null;
          }
          _thisProjectFunction.compositions = [];
          _thisProjectFunction.currentFrame = 0;
          _thisProjectFunction.registerComposition = registerComposition;
          return _thisProjectFunction;
        };
      }();
      var renderers = {};
      var registerRenderer = function registerRenderer2(key2, value2) {
        renderers[key2] = value2;
      };
      function getRenderer(key2) {
        return renderers[key2];
      }
      function _typeof$4(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof$4 = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof$4 = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof$4(obj);
      }
      var AnimationItem = function AnimationItem2() {
        this._cbs = [];
        this.name = "";
        this.path = "";
        this.isLoaded = false;
        this.currentFrame = 0;
        this.currentRawFrame = 0;
        this.firstFrame = 0;
        this.totalFrames = 0;
        this.frameRate = 0;
        this.frameMult = 0;
        this.playSpeed = 1;
        this.playDirection = 1;
        this.playCount = 0;
        this.animationData = {};
        this.assets = [];
        this.isPaused = true;
        this.autoplay = false;
        this.loop = true;
        this.renderer = null;
        this.animationID = createElementID();
        this.assetsPath = "";
        this.timeCompleted = 0;
        this.segmentPos = 0;
        this.isSubframeEnabled = getSubframeEnabled();
        this.segments = [];
        this._idle = true;
        this._completedLoop = false;
        this.projectInterface = ProjectInterface();
        this.imagePreloader = new ImagePreloader();
        this.audioController = audioControllerFactory();
        this.markers = [];
        this.configAnimation = this.configAnimation.bind(this);
        this.onSetupError = this.onSetupError.bind(this);
        this.onSegmentComplete = this.onSegmentComplete.bind(this);
        this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0);
      };
      extendPrototype([BaseEvent], AnimationItem);
      AnimationItem.prototype.setParams = function(params) {
        if (params.wrapper || params.container) {
          this.wrapper = params.wrapper || params.container;
        }
        var animType = "svg";
        if (params.animType) {
          animType = params.animType;
        } else if (params.renderer) {
          animType = params.renderer;
        }
        var RendererClass = getRenderer(animType);
        this.renderer = new RendererClass(this, params.rendererSettings);
        this.imagePreloader.setCacheType(animType, this.renderer.globalData.defs);
        this.renderer.setProjectInterface(this.projectInterface);
        this.animType = animType;
        if (params.loop === "" || params.loop === null || params.loop === void 0 || params.loop === true) {
          this.loop = true;
        } else if (params.loop === false) {
          this.loop = false;
        } else {
          this.loop = parseInt(params.loop, 10);
        }
        this.autoplay = "autoplay" in params ? params.autoplay : true;
        this.name = params.name ? params.name : "";
        this.autoloadSegments = Object.prototype.hasOwnProperty.call(params, "autoloadSegments") ? params.autoloadSegments : true;
        this.assetsPath = params.assetsPath;
        this.initialSegment = params.initialSegment;
        if (params.audioFactory) {
          this.audioController.setAudioFactory(params.audioFactory);
        }
        if (params.animationData) {
          this.setupAnimation(params.animationData);
        } else if (params.path) {
          if (params.path.lastIndexOf("\\") !== -1) {
            this.path = params.path.substr(0, params.path.lastIndexOf("\\") + 1);
          } else {
            this.path = params.path.substr(0, params.path.lastIndexOf("/") + 1);
          }
          this.fileName = params.path.substr(params.path.lastIndexOf("/") + 1);
          this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json"));
          dataManager.loadAnimation(params.path, this.configAnimation, this.onSetupError);
        }
      };
      AnimationItem.prototype.onSetupError = function() {
        this.trigger("data_failed");
      };
      AnimationItem.prototype.setupAnimation = function(data2) {
        dataManager.completeAnimation(data2, this.configAnimation);
      };
      AnimationItem.prototype.setData = function(wrapper, animationData2) {
        if (animationData2) {
          if (_typeof$4(animationData2) !== "object") {
            animationData2 = JSON.parse(animationData2);
          }
        }
        var params = {
          wrapper,
          animationData: animationData2
        };
        var wrapperAttributes = wrapper.attributes;
        params.path = wrapperAttributes.getNamedItem("data-animation-path") ? wrapperAttributes.getNamedItem("data-animation-path").value : wrapperAttributes.getNamedItem("data-bm-path") ? wrapperAttributes.getNamedItem("data-bm-path").value : wrapperAttributes.getNamedItem("bm-path") ? wrapperAttributes.getNamedItem("bm-path").value : "";
        params.animType = wrapperAttributes.getNamedItem("data-anim-type") ? wrapperAttributes.getNamedItem("data-anim-type").value : wrapperAttributes.getNamedItem("data-bm-type") ? wrapperAttributes.getNamedItem("data-bm-type").value : wrapperAttributes.getNamedItem("bm-type") ? wrapperAttributes.getNamedItem("bm-type").value : wrapperAttributes.getNamedItem("data-bm-renderer") ? wrapperAttributes.getNamedItem("data-bm-renderer").value : wrapperAttributes.getNamedItem("bm-renderer") ? wrapperAttributes.getNamedItem("bm-renderer").value : "canvas";
        var loop = wrapperAttributes.getNamedItem("data-anim-loop") ? wrapperAttributes.getNamedItem("data-anim-loop").value : wrapperAttributes.getNamedItem("data-bm-loop") ? wrapperAttributes.getNamedItem("data-bm-loop").value : wrapperAttributes.getNamedItem("bm-loop") ? wrapperAttributes.getNamedItem("bm-loop").value : "";
        if (loop === "false") {
          params.loop = false;
        } else if (loop === "true") {
          params.loop = true;
        } else if (loop !== "") {
          params.loop = parseInt(loop, 10);
        }
        var autoplay = wrapperAttributes.getNamedItem("data-anim-autoplay") ? wrapperAttributes.getNamedItem("data-anim-autoplay").value : wrapperAttributes.getNamedItem("data-bm-autoplay") ? wrapperAttributes.getNamedItem("data-bm-autoplay").value : wrapperAttributes.getNamedItem("bm-autoplay") ? wrapperAttributes.getNamedItem("bm-autoplay").value : true;
        params.autoplay = autoplay !== "false";
        params.name = wrapperAttributes.getNamedItem("data-name") ? wrapperAttributes.getNamedItem("data-name").value : wrapperAttributes.getNamedItem("data-bm-name") ? wrapperAttributes.getNamedItem("data-bm-name").value : wrapperAttributes.getNamedItem("bm-name") ? wrapperAttributes.getNamedItem("bm-name").value : "";
        var prerender = wrapperAttributes.getNamedItem("data-anim-prerender") ? wrapperAttributes.getNamedItem("data-anim-prerender").value : wrapperAttributes.getNamedItem("data-bm-prerender") ? wrapperAttributes.getNamedItem("data-bm-prerender").value : wrapperAttributes.getNamedItem("bm-prerender") ? wrapperAttributes.getNamedItem("bm-prerender").value : "";
        if (prerender === "false") {
          params.prerender = false;
        }
        this.setParams(params);
      };
      AnimationItem.prototype.includeLayers = function(data2) {
        if (data2.op > this.animationData.op) {
          this.animationData.op = data2.op;
          this.totalFrames = Math.floor(data2.op - this.animationData.ip);
        }
        var layers2 = this.animationData.layers;
        var i;
        var len = layers2.length;
        var newLayers = data2.layers;
        var j;
        var jLen = newLayers.length;
        for (j = 0; j < jLen; j += 1) {
          i = 0;
          while (i < len) {
            if (layers2[i].id === newLayers[j].id) {
              layers2[i] = newLayers[j];
              break;
            }
            i += 1;
          }
        }
        if (data2.chars || data2.fonts) {
          this.renderer.globalData.fontManager.addChars(data2.chars);
          this.renderer.globalData.fontManager.addFonts(data2.fonts, this.renderer.globalData.defs);
        }
        if (data2.assets) {
          len = data2.assets.length;
          for (i = 0; i < len; i += 1) {
            this.animationData.assets.push(data2.assets[i]);
          }
        }
        this.animationData.__complete = false;
        dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
      };
      AnimationItem.prototype.onSegmentComplete = function(data2) {
        this.animationData = data2;
        var expressionsPlugin2 = getExpressionsPlugin();
        if (expressionsPlugin2) {
          expressionsPlugin2.initExpressions(this);
        }
        this.loadNextSegment();
      };
      AnimationItem.prototype.loadNextSegment = function() {
        var segments = this.animationData.segments;
        if (!segments || segments.length === 0 || !this.autoloadSegments) {
          this.trigger("data_ready");
          this.timeCompleted = this.totalFrames;
          return;
        }
        var segment = segments.shift();
        this.timeCompleted = segment.time * this.frameRate;
        var segmentPath = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1;
        dataManager.loadData(segmentPath, this.includeLayers.bind(this), function() {
          this.trigger("data_failed");
        }.bind(this));
      };
      AnimationItem.prototype.loadSegments = function() {
        var segments = this.animationData.segments;
        if (!segments) {
          this.timeCompleted = this.totalFrames;
        }
        this.loadNextSegment();
      };
      AnimationItem.prototype.imagesLoaded = function() {
        this.trigger("loaded_images");
        this.checkLoaded();
      };
      AnimationItem.prototype.preloadImages = function() {
        this.imagePreloader.setAssetsPath(this.assetsPath);
        this.imagePreloader.setPath(this.path);
        this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
      };
      AnimationItem.prototype.configAnimation = function(animData) {
        if (!this.renderer) {
          return;
        }
        try {
          this.animationData = animData;
          if (this.initialSegment) {
            this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
            this.firstFrame = Math.round(this.initialSegment[0]);
          } else {
            this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
            this.firstFrame = Math.round(this.animationData.ip);
          }
          this.renderer.configAnimation(animData);
          if (!animData.assets) {
            animData.assets = [];
          }
          this.assets = this.animationData.assets;
          this.frameRate = this.animationData.fr;
          this.frameMult = this.animationData.fr / 1e3;
          this.renderer.searchExtraCompositions(animData.assets);
          this.markers = markerParser(animData.markers || []);
          this.trigger("config_ready");
          this.preloadImages();
          this.loadSegments();
          this.updaFrameModifier();
          this.waitForFontsLoaded();
          if (this.isPaused) {
            this.audioController.pause();
          }
        } catch (error) {
          this.triggerConfigError(error);
        }
      };
      AnimationItem.prototype.waitForFontsLoaded = function() {
        if (!this.renderer) {
          return;
        }
        if (this.renderer.globalData.fontManager.isLoaded) {
          this.checkLoaded();
        } else {
          setTimeout(this.waitForFontsLoaded.bind(this), 20);
        }
      };
      AnimationItem.prototype.checkLoaded = function() {
        if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
          this.isLoaded = true;
          var expressionsPlugin2 = getExpressionsPlugin();
          if (expressionsPlugin2) {
            expressionsPlugin2.initExpressions(this);
          }
          this.renderer.initItems();
          setTimeout(function() {
            this.trigger("DOMLoaded");
          }.bind(this), 0);
          this.gotoFrame();
          if (this.autoplay) {
            this.play();
          }
        }
      };
      AnimationItem.prototype.resize = function() {
        this.renderer.updateContainerSize();
      };
      AnimationItem.prototype.setSubframe = function(flag) {
        this.isSubframeEnabled = !!flag;
      };
      AnimationItem.prototype.gotoFrame = function() {
        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame;
        if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
          this.currentFrame = this.timeCompleted;
        }
        this.trigger("enterFrame");
        this.renderFrame();
        this.trigger("drawnFrame");
      };
      AnimationItem.prototype.renderFrame = function() {
        if (this.isLoaded === false || !this.renderer) {
          return;
        }
        try {
          this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        } catch (error) {
          this.triggerRenderFrameError(error);
        }
      };
      AnimationItem.prototype.play = function(name2) {
        if (name2 && this.name !== name2) {
          return;
        }
        if (this.isPaused === true) {
          this.isPaused = false;
          this.trigger("_pause");
          this.audioController.resume();
          if (this._idle) {
            this._idle = false;
            this.trigger("_active");
          }
        }
      };
      AnimationItem.prototype.pause = function(name2) {
        if (name2 && this.name !== name2) {
          return;
        }
        if (this.isPaused === false) {
          this.isPaused = true;
          this.trigger("_play");
          this._idle = true;
          this.trigger("_idle");
          this.audioController.pause();
        }
      };
      AnimationItem.prototype.togglePause = function(name2) {
        if (name2 && this.name !== name2) {
          return;
        }
        if (this.isPaused === true) {
          this.play();
        } else {
          this.pause();
        }
      };
      AnimationItem.prototype.stop = function(name2) {
        if (name2 && this.name !== name2) {
          return;
        }
        this.pause();
        this.playCount = 0;
        this._completedLoop = false;
        this.setCurrentRawFrameValue(0);
      };
      AnimationItem.prototype.getMarkerData = function(markerName) {
        var marker;
        for (var i = 0; i < this.markers.length; i += 1) {
          marker = this.markers[i];
          if (marker.payload && marker.payload.name === markerName) {
            return marker;
          }
        }
        return null;
      };
      AnimationItem.prototype.goToAndStop = function(value2, isFrame, name2) {
        if (name2 && this.name !== name2) {
          return;
        }
        var numValue = Number(value2);
        if (isNaN(numValue)) {
          var marker = this.getMarkerData(value2);
          if (marker) {
            this.goToAndStop(marker.time, true);
          }
        } else if (isFrame) {
          this.setCurrentRawFrameValue(value2);
        } else {
          this.setCurrentRawFrameValue(value2 * this.frameModifier);
        }
        this.pause();
      };
      AnimationItem.prototype.goToAndPlay = function(value2, isFrame, name2) {
        if (name2 && this.name !== name2) {
          return;
        }
        var numValue = Number(value2);
        if (isNaN(numValue)) {
          var marker = this.getMarkerData(value2);
          if (marker) {
            if (!marker.duration) {
              this.goToAndStop(marker.time, true);
            } else {
              this.playSegments([marker.time, marker.time + marker.duration], true);
            }
          }
        } else {
          this.goToAndStop(numValue, isFrame, name2);
        }
        this.play();
      };
      AnimationItem.prototype.advanceTime = function(value2) {
        if (this.isPaused === true || this.isLoaded === false) {
          return;
        }
        var nextValue = this.currentRawFrame + value2 * this.frameModifier;
        var _isComplete = false;
        if (nextValue >= this.totalFrames - 1 && this.frameModifier > 0) {
          if (!this.loop || this.playCount === this.loop) {
            if (!this.checkSegments(nextValue > this.totalFrames ? nextValue % this.totalFrames : 0)) {
              _isComplete = true;
              nextValue = this.totalFrames - 1;
            }
          } else if (nextValue >= this.totalFrames) {
            this.playCount += 1;
            if (!this.checkSegments(nextValue % this.totalFrames)) {
              this.setCurrentRawFrameValue(nextValue % this.totalFrames);
              this._completedLoop = true;
              this.trigger("loopComplete");
            }
          } else {
            this.setCurrentRawFrameValue(nextValue);
          }
        } else if (nextValue < 0) {
          if (!this.checkSegments(nextValue % this.totalFrames)) {
            if (this.loop && !(this.playCount-- <= 0 && this.loop !== true)) {
              this.setCurrentRawFrameValue(this.totalFrames + nextValue % this.totalFrames);
              if (!this._completedLoop) {
                this._completedLoop = true;
              } else {
                this.trigger("loopComplete");
              }
            } else {
              _isComplete = true;
              nextValue = 0;
            }
          }
        } else {
          this.setCurrentRawFrameValue(nextValue);
        }
        if (_isComplete) {
          this.setCurrentRawFrameValue(nextValue);
          this.pause();
          this.trigger("complete");
        }
      };
      AnimationItem.prototype.adjustSegment = function(arr, offset) {
        this.playCount = 0;
        if (arr[1] < arr[0]) {
          if (this.frameModifier > 0) {
            if (this.playSpeed < 0) {
              this.setSpeed(-this.playSpeed);
            } else {
              this.setDirection(-1);
            }
          }
          this.totalFrames = arr[0] - arr[1];
          this.timeCompleted = this.totalFrames;
          this.firstFrame = arr[1];
          this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - offset);
        } else if (arr[1] > arr[0]) {
          if (this.frameModifier < 0) {
            if (this.playSpeed < 0) {
              this.setSpeed(-this.playSpeed);
            } else {
              this.setDirection(1);
            }
          }
          this.totalFrames = arr[1] - arr[0];
          this.timeCompleted = this.totalFrames;
          this.firstFrame = arr[0];
          this.setCurrentRawFrameValue(1e-3 + offset);
        }
        this.trigger("segmentStart");
      };
      AnimationItem.prototype.setSegment = function(init, end) {
        var pendingFrame = -1;
        if (this.isPaused) {
          if (this.currentRawFrame + this.firstFrame < init) {
            pendingFrame = init;
          } else if (this.currentRawFrame + this.firstFrame > end) {
            pendingFrame = end - init;
          }
        }
        this.firstFrame = init;
        this.totalFrames = end - init;
        this.timeCompleted = this.totalFrames;
        if (pendingFrame !== -1) {
          this.goToAndStop(pendingFrame, true);
        }
      };
      AnimationItem.prototype.playSegments = function(arr, forceFlag) {
        if (forceFlag) {
          this.segments.length = 0;
        }
        if (_typeof$4(arr[0]) === "object") {
          var i;
          var len = arr.length;
          for (i = 0; i < len; i += 1) {
            this.segments.push(arr[i]);
          }
        } else {
          this.segments.push(arr);
        }
        if (this.segments.length && forceFlag) {
          this.adjustSegment(this.segments.shift(), 0);
        }
        if (this.isPaused) {
          this.play();
        }
      };
      AnimationItem.prototype.resetSegments = function(forceFlag) {
        this.segments.length = 0;
        this.segments.push([this.animationData.ip, this.animationData.op]);
        if (forceFlag) {
          this.checkSegments(0);
        }
      };
      AnimationItem.prototype.checkSegments = function(offset) {
        if (this.segments.length) {
          this.adjustSegment(this.segments.shift(), offset);
          return true;
        }
        return false;
      };
      AnimationItem.prototype.destroy = function(name2) {
        if (name2 && this.name !== name2 || !this.renderer) {
          return;
        }
        this.renderer.destroy();
        this.imagePreloader.destroy();
        this.trigger("destroy");
        this._cbs = null;
        this.onEnterFrame = null;
        this.onLoopComplete = null;
        this.onComplete = null;
        this.onSegmentStart = null;
        this.onDestroy = null;
        this.renderer = null;
        this.renderer = null;
        this.imagePreloader = null;
        this.projectInterface = null;
      };
      AnimationItem.prototype.setCurrentRawFrameValue = function(value2) {
        this.currentRawFrame = value2;
        this.gotoFrame();
      };
      AnimationItem.prototype.setSpeed = function(val2) {
        this.playSpeed = val2;
        this.updaFrameModifier();
      };
      AnimationItem.prototype.setDirection = function(val2) {
        this.playDirection = val2 < 0 ? -1 : 1;
        this.updaFrameModifier();
      };
      AnimationItem.prototype.setVolume = function(val2, name2) {
        if (name2 && this.name !== name2) {
          return;
        }
        this.audioController.setVolume(val2);
      };
      AnimationItem.prototype.getVolume = function() {
        return this.audioController.getVolume();
      };
      AnimationItem.prototype.mute = function(name2) {
        if (name2 && this.name !== name2) {
          return;
        }
        this.audioController.mute();
      };
      AnimationItem.prototype.unmute = function(name2) {
        if (name2 && this.name !== name2) {
          return;
        }
        this.audioController.unmute();
      };
      AnimationItem.prototype.updaFrameModifier = function() {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
        this.audioController.setRate(this.playSpeed * this.playDirection);
      };
      AnimationItem.prototype.getPath = function() {
        return this.path;
      };
      AnimationItem.prototype.getAssetsPath = function(assetData) {
        var path = "";
        if (assetData.e) {
          path = assetData.p;
        } else if (this.assetsPath) {
          var imagePath = assetData.p;
          if (imagePath.indexOf("images/") !== -1) {
            imagePath = imagePath.split("/")[1];
          }
          path = this.assetsPath + imagePath;
        } else {
          path = this.path;
          path += assetData.u ? assetData.u : "";
          path += assetData.p;
        }
        return path;
      };
      AnimationItem.prototype.getAssetData = function(id) {
        var i = 0;
        var len = this.assets.length;
        while (i < len) {
          if (id === this.assets[i].id) {
            return this.assets[i];
          }
          i += 1;
        }
        return null;
      };
      AnimationItem.prototype.hide = function() {
        this.renderer.hide();
      };
      AnimationItem.prototype.show = function() {
        this.renderer.show();
      };
      AnimationItem.prototype.getDuration = function(isFrame) {
        return isFrame ? this.totalFrames : this.totalFrames / this.frameRate;
      };
      AnimationItem.prototype.updateDocumentData = function(path, documentData, index2) {
        try {
          var element = this.renderer.getElementByPath(path);
          element.updateDocumentData(documentData, index2);
        } catch (error) {
        }
      };
      AnimationItem.prototype.trigger = function(name2) {
        if (this._cbs && this._cbs[name2]) {
          switch (name2) {
            case "enterFrame":
              this.triggerEvent(name2, new BMEnterFrameEvent(name2, this.currentFrame, this.totalFrames, this.frameModifier));
              break;
            case "drawnFrame":
              this.drawnFrameEvent.currentTime = this.currentFrame;
              this.drawnFrameEvent.totalTime = this.totalFrames;
              this.drawnFrameEvent.direction = this.frameModifier;
              this.triggerEvent(name2, this.drawnFrameEvent);
              break;
            case "loopComplete":
              this.triggerEvent(name2, new BMCompleteLoopEvent(name2, this.loop, this.playCount, this.frameMult));
              break;
            case "complete":
              this.triggerEvent(name2, new BMCompleteEvent(name2, this.frameMult));
              break;
            case "segmentStart":
              this.triggerEvent(name2, new BMSegmentStartEvent(name2, this.firstFrame, this.totalFrames));
              break;
            case "destroy":
              this.triggerEvent(name2, new BMDestroyEvent(name2, this));
              break;
            default:
              this.triggerEvent(name2);
          }
        }
        if (name2 === "enterFrame" && this.onEnterFrame) {
          this.onEnterFrame.call(this, new BMEnterFrameEvent(name2, this.currentFrame, this.totalFrames, this.frameMult));
        }
        if (name2 === "loopComplete" && this.onLoopComplete) {
          this.onLoopComplete.call(this, new BMCompleteLoopEvent(name2, this.loop, this.playCount, this.frameMult));
        }
        if (name2 === "complete" && this.onComplete) {
          this.onComplete.call(this, new BMCompleteEvent(name2, this.frameMult));
        }
        if (name2 === "segmentStart" && this.onSegmentStart) {
          this.onSegmentStart.call(this, new BMSegmentStartEvent(name2, this.firstFrame, this.totalFrames));
        }
        if (name2 === "destroy" && this.onDestroy) {
          this.onDestroy.call(this, new BMDestroyEvent(name2, this));
        }
      };
      AnimationItem.prototype.triggerRenderFrameError = function(nativeError) {
        var error = new BMRenderFrameErrorEvent(nativeError, this.currentFrame);
        this.triggerEvent("error", error);
        if (this.onError) {
          this.onError.call(this, error);
        }
      };
      AnimationItem.prototype.triggerConfigError = function(nativeError) {
        var error = new BMConfigErrorEvent(nativeError, this.currentFrame);
        this.triggerEvent("error", error);
        if (this.onError) {
          this.onError.call(this, error);
        }
      };
      var animationManager = function() {
        var moduleOb = {};
        var registeredAnimations = [];
        var initTime = 0;
        var len = 0;
        var playingAnimationsNum = 0;
        var _stopped = true;
        var _isFrozen = false;
        function removeElement(ev) {
          var i = 0;
          var animItem = ev.target;
          while (i < len) {
            if (registeredAnimations[i].animation === animItem) {
              registeredAnimations.splice(i, 1);
              i -= 1;
              len -= 1;
              if (!animItem.isPaused) {
                subtractPlayingCount();
              }
            }
            i += 1;
          }
        }
        function registerAnimation(element, animationData2) {
          if (!element) {
            return null;
          }
          var i = 0;
          while (i < len) {
            if (registeredAnimations[i].elem === element && registeredAnimations[i].elem !== null) {
              return registeredAnimations[i].animation;
            }
            i += 1;
          }
          var animItem = new AnimationItem();
          setupAnimation(animItem, element);
          animItem.setData(element, animationData2);
          return animItem;
        }
        function getRegisteredAnimations() {
          var i;
          var lenAnims = registeredAnimations.length;
          var animations = [];
          for (i = 0; i < lenAnims; i += 1) {
            animations.push(registeredAnimations[i].animation);
          }
          return animations;
        }
        function addPlayingCount() {
          playingAnimationsNum += 1;
          activate();
        }
        function subtractPlayingCount() {
          playingAnimationsNum -= 1;
        }
        function setupAnimation(animItem, element) {
          animItem.addEventListener("destroy", removeElement);
          animItem.addEventListener("_active", addPlayingCount);
          animItem.addEventListener("_idle", subtractPlayingCount);
          registeredAnimations.push({
            elem: element,
            animation: animItem
          });
          len += 1;
        }
        function loadAnimation2(params) {
          var animItem = new AnimationItem();
          setupAnimation(animItem, null);
          animItem.setParams(params);
          return animItem;
        }
        function setSpeed(val2, animation) {
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.setSpeed(val2, animation);
          }
        }
        function setDirection(val2, animation) {
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.setDirection(val2, animation);
          }
        }
        function play(animation) {
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.play(animation);
          }
        }
        function resume(nowTime) {
          var elapsedTime = nowTime - initTime;
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.advanceTime(elapsedTime);
          }
          initTime = nowTime;
          if (playingAnimationsNum && !_isFrozen) {
            window.requestAnimationFrame(resume);
          } else {
            _stopped = true;
          }
        }
        function first(nowTime) {
          initTime = nowTime;
          window.requestAnimationFrame(resume);
        }
        function pause(animation) {
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.pause(animation);
          }
        }
        function goToAndStop(value2, isFrame, animation) {
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.goToAndStop(value2, isFrame, animation);
          }
        }
        function stop(animation) {
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.stop(animation);
          }
        }
        function togglePause(animation) {
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.togglePause(animation);
          }
        }
        function destroy(animation) {
          var i;
          for (i = len - 1; i >= 0; i -= 1) {
            registeredAnimations[i].animation.destroy(animation);
          }
        }
        function searchAnimations2(animationData2, standalone2, renderer2) {
          var animElements = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin")));
          var i;
          var lenAnims = animElements.length;
          for (i = 0; i < lenAnims; i += 1) {
            if (renderer2) {
              animElements[i].setAttribute("data-bm-type", renderer2);
            }
            registerAnimation(animElements[i], animationData2);
          }
          if (standalone2 && lenAnims === 0) {
            if (!renderer2) {
              renderer2 = "svg";
            }
            var body = document.getElementsByTagName("body")[0];
            body.innerText = "";
            var div2 = createTag("div");
            div2.style.width = "100%";
            div2.style.height = "100%";
            div2.setAttribute("data-bm-type", renderer2);
            body.appendChild(div2);
            registerAnimation(div2, animationData2);
          }
        }
        function resize() {
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.resize();
          }
        }
        function activate() {
          if (!_isFrozen && playingAnimationsNum) {
            if (_stopped) {
              window.requestAnimationFrame(first);
              _stopped = false;
            }
          }
        }
        function freeze() {
          _isFrozen = true;
        }
        function unfreeze() {
          _isFrozen = false;
          activate();
        }
        function setVolume(val2, animation) {
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.setVolume(val2, animation);
          }
        }
        function mute(animation) {
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.mute(animation);
          }
        }
        function unmute(animation) {
          var i;
          for (i = 0; i < len; i += 1) {
            registeredAnimations[i].animation.unmute(animation);
          }
        }
        moduleOb.registerAnimation = registerAnimation;
        moduleOb.loadAnimation = loadAnimation2;
        moduleOb.setSpeed = setSpeed;
        moduleOb.setDirection = setDirection;
        moduleOb.play = play;
        moduleOb.pause = pause;
        moduleOb.stop = stop;
        moduleOb.togglePause = togglePause;
        moduleOb.searchAnimations = searchAnimations2;
        moduleOb.resize = resize;
        moduleOb.goToAndStop = goToAndStop;
        moduleOb.destroy = destroy;
        moduleOb.freeze = freeze;
        moduleOb.unfreeze = unfreeze;
        moduleOb.setVolume = setVolume;
        moduleOb.mute = mute;
        moduleOb.unmute = unmute;
        moduleOb.getRegisteredAnimations = getRegisteredAnimations;
        return moduleOb;
      }();
      var BezierFactory = function() {
        var ob2 = {};
        ob2.getBezierEasing = getBezierEasing;
        var beziers = {};
        function getBezierEasing(a, b, c, d, nm2) {
          var str = nm2 || ("bez_" + a + "_" + b + "_" + c + "_" + d).replace(/\./g, "p");
          if (beziers[str]) {
            return beziers[str];
          }
          var bezEasing = new BezierEasing([a, b, c, d]);
          beziers[str] = bezEasing;
          return bezEasing;
        }
        var NEWTON_ITERATIONS = 4;
        var NEWTON_MIN_SLOPE = 1e-3;
        var SUBDIVISION_PRECISION = 1e-7;
        var SUBDIVISION_MAX_ITERATIONS = 10;
        var kSplineTableSize = 11;
        var kSampleStepSize = 1 / (kSplineTableSize - 1);
        var float32ArraySupported = typeof Float32Array === "function";
        function A(aA1, aA2) {
          return 1 - 3 * aA2 + 3 * aA1;
        }
        function B(aA1, aA2) {
          return 3 * aA2 - 6 * aA1;
        }
        function C(aA1) {
          return 3 * aA1;
        }
        function calcBezier(aT, aA1, aA2) {
          return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
        }
        function getSlope(aT, aA1, aA2) {
          return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
        }
        function binarySubdivide(aX, aA, aB, mX1, mX2) {
          var currentX, currentT, i = 0;
          do {
            currentT = aA + (aB - aA) / 2;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0) {
              aB = currentT;
            } else {
              aA = currentT;
            }
          } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
          return currentT;
        }
        function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
          for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0)
              return aGuessT;
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
          }
          return aGuessT;
        }
        function BezierEasing(points) {
          this._p = points;
          this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
          this._precomputed = false;
          this.get = this.get.bind(this);
        }
        BezierEasing.prototype = {
          get: function get(x) {
            var mX1 = this._p[0], mY1 = this._p[1], mX2 = this._p[2], mY2 = this._p[3];
            if (!this._precomputed)
              this._precompute();
            if (mX1 === mY1 && mX2 === mY2)
              return x;
            if (x === 0)
              return 0;
            if (x === 1)
              return 1;
            return calcBezier(this._getTForX(x), mY1, mY2);
          },
          _precompute: function _precompute() {
            var mX1 = this._p[0], mY1 = this._p[1], mX2 = this._p[2], mY2 = this._p[3];
            this._precomputed = true;
            if (mX1 !== mY1 || mX2 !== mY2) {
              this._calcSampleValues();
            }
          },
          _calcSampleValues: function _calcSampleValues() {
            var mX1 = this._p[0], mX2 = this._p[2];
            for (var i = 0; i < kSplineTableSize; ++i) {
              this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            }
          },
          _getTForX: function _getTForX(aX) {
            var mX1 = this._p[0], mX2 = this._p[2], mSampleValues = this._mSampleValues;
            var intervalStart = 0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;
            for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
              intervalStart += kSampleStepSize;
            }
            --currentSample;
            var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= NEWTON_MIN_SLOPE) {
              return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            }
            if (initialSlope === 0) {
              return guessForT;
            }
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        };
        return ob2;
      }();
      var pooling = function() {
        function _double(arr) {
          return arr.concat(createSizedArray(arr.length));
        }
        return {
          "double": _double
        };
      }();
      var poolFactory = function() {
        return function(initialLength, _create, _release) {
          var _length = 0;
          var _maxLength = initialLength;
          var pool = createSizedArray(_maxLength);
          var ob2 = {
            newElement,
            release
          };
          function newElement() {
            var element;
            if (_length) {
              _length -= 1;
              element = pool[_length];
            } else {
              element = _create();
            }
            return element;
          }
          function release(element) {
            if (_length === _maxLength) {
              pool = pooling["double"](pool);
              _maxLength *= 2;
            }
            if (_release) {
              _release(element);
            }
            pool[_length] = element;
            _length += 1;
          }
          return ob2;
        };
      }();
      var bezierLengthPool = function() {
        function create() {
          return {
            addedLength: 0,
            percents: createTypedArray("float32", getDefaultCurveSegments()),
            lengths: createTypedArray("float32", getDefaultCurveSegments())
          };
        }
        return poolFactory(8, create);
      }();
      var segmentsLengthPool = function() {
        function create() {
          return {
            lengths: [],
            totalLength: 0
          };
        }
        function release(element) {
          var i;
          var len = element.lengths.length;
          for (i = 0; i < len; i += 1) {
            bezierLengthPool.release(element.lengths[i]);
          }
          element.lengths.length = 0;
        }
        return poolFactory(8, create, release);
      }();
      function bezFunction() {
        var math = Math;
        function pointOnLine2D(x1, y1, x2, y2, x3, y3) {
          var det1 = x1 * y2 + y1 * x3 + x2 * y3 - x3 * y2 - y3 * x1 - x2 * y1;
          return det1 > -1e-3 && det1 < 1e-3;
        }
        function pointOnLine3D(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
          if (z1 === 0 && z2 === 0 && z3 === 0) {
            return pointOnLine2D(x1, y1, x2, y2, x3, y3);
          }
          var dist1 = math.sqrt(math.pow(x2 - x1, 2) + math.pow(y2 - y1, 2) + math.pow(z2 - z1, 2));
          var dist2 = math.sqrt(math.pow(x3 - x1, 2) + math.pow(y3 - y1, 2) + math.pow(z3 - z1, 2));
          var dist3 = math.sqrt(math.pow(x3 - x2, 2) + math.pow(y3 - y2, 2) + math.pow(z3 - z2, 2));
          var diffDist;
          if (dist1 > dist2) {
            if (dist1 > dist3) {
              diffDist = dist1 - dist2 - dist3;
            } else {
              diffDist = dist3 - dist2 - dist1;
            }
          } else if (dist3 > dist2) {
            diffDist = dist3 - dist2 - dist1;
          } else {
            diffDist = dist2 - dist1 - dist3;
          }
          return diffDist > -1e-4 && diffDist < 1e-4;
        }
        var getBezierLength = function() {
          return function(pt1, pt2, pt3, pt4) {
            var curveSegments = getDefaultCurveSegments();
            var k;
            var i;
            var len;
            var ptCoord;
            var perc;
            var addedLength = 0;
            var ptDistance;
            var point = [];
            var lastPoint = [];
            var lengthData = bezierLengthPool.newElement();
            len = pt3.length;
            for (k = 0; k < curveSegments; k += 1) {
              perc = k / (curveSegments - 1);
              ptDistance = 0;
              for (i = 0; i < len; i += 1) {
                ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * pt3[i] + 3 * (1 - perc) * bmPow(perc, 2) * pt4[i] + bmPow(perc, 3) * pt2[i];
                point[i] = ptCoord;
                if (lastPoint[i] !== null) {
                  ptDistance += bmPow(point[i] - lastPoint[i], 2);
                }
                lastPoint[i] = point[i];
              }
              if (ptDistance) {
                ptDistance = bmSqrt(ptDistance);
                addedLength += ptDistance;
              }
              lengthData.percents[k] = perc;
              lengthData.lengths[k] = addedLength;
            }
            lengthData.addedLength = addedLength;
            return lengthData;
          };
        }();
        function getSegmentsLength(shapeData) {
          var segmentsLength = segmentsLengthPool.newElement();
          var closed = shapeData.c;
          var pathV = shapeData.v;
          var pathO = shapeData.o;
          var pathI = shapeData.i;
          var i;
          var len = shapeData._length;
          var lengths = segmentsLength.lengths;
          var totalLength = 0;
          for (i = 0; i < len - 1; i += 1) {
            lengths[i] = getBezierLength(pathV[i], pathV[i + 1], pathO[i], pathI[i + 1]);
            totalLength += lengths[i].addedLength;
          }
          if (closed && len) {
            lengths[i] = getBezierLength(pathV[i], pathV[0], pathO[i], pathI[0]);
            totalLength += lengths[i].addedLength;
          }
          segmentsLength.totalLength = totalLength;
          return segmentsLength;
        }
        function BezierData(length2) {
          this.segmentLength = 0;
          this.points = new Array(length2);
        }
        function PointData(partial, point) {
          this.partialLength = partial;
          this.point = point;
        }
        var buildBezierData = function() {
          var storedData = {};
          return function(pt1, pt2, pt3, pt4) {
            var bezierName = (pt1[0] + "_" + pt1[1] + "_" + pt2[0] + "_" + pt2[1] + "_" + pt3[0] + "_" + pt3[1] + "_" + pt4[0] + "_" + pt4[1]).replace(/\./g, "p");
            if (!storedData[bezierName]) {
              var curveSegments = getDefaultCurveSegments();
              var k;
              var i;
              var len;
              var ptCoord;
              var perc;
              var addedLength = 0;
              var ptDistance;
              var point;
              var lastPoint = null;
              if (pt1.length === 2 && (pt1[0] !== pt2[0] || pt1[1] !== pt2[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt1[0] + pt3[0], pt1[1] + pt3[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt2[0] + pt4[0], pt2[1] + pt4[1])) {
                curveSegments = 2;
              }
              var bezierData = new BezierData(curveSegments);
              len = pt3.length;
              for (k = 0; k < curveSegments; k += 1) {
                point = createSizedArray(len);
                perc = k / (curveSegments - 1);
                ptDistance = 0;
                for (i = 0; i < len; i += 1) {
                  ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * (pt1[i] + pt3[i]) + 3 * (1 - perc) * bmPow(perc, 2) * (pt2[i] + pt4[i]) + bmPow(perc, 3) * pt2[i];
                  point[i] = ptCoord;
                  if (lastPoint !== null) {
                    ptDistance += bmPow(point[i] - lastPoint[i], 2);
                  }
                }
                ptDistance = bmSqrt(ptDistance);
                addedLength += ptDistance;
                bezierData.points[k] = new PointData(ptDistance, point);
                lastPoint = point;
              }
              bezierData.segmentLength = addedLength;
              storedData[bezierName] = bezierData;
            }
            return storedData[bezierName];
          };
        }();
        function getDistancePerc(perc, bezierData) {
          var percents = bezierData.percents;
          var lengths = bezierData.lengths;
          var len = percents.length;
          var initPos = bmFloor((len - 1) * perc);
          var lengthPos = perc * bezierData.addedLength;
          var lPerc = 0;
          if (initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]) {
            return percents[initPos];
          }
          var dir = lengths[initPos] > lengthPos ? -1 : 1;
          var flag = true;
          while (flag) {
            if (lengths[initPos] <= lengthPos && lengths[initPos + 1] > lengthPos) {
              lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos + 1] - lengths[initPos]);
              flag = false;
            } else {
              initPos += dir;
            }
            if (initPos < 0 || initPos >= len - 1) {
              if (initPos === len - 1) {
                return percents[initPos];
              }
              flag = false;
            }
          }
          return percents[initPos] + (percents[initPos + 1] - percents[initPos]) * lPerc;
        }
        function getPointInSegment(pt1, pt2, pt3, pt4, percent, bezierData) {
          var t1 = getDistancePerc(percent, bezierData);
          var u1 = 1 - t1;
          var ptX = math.round((u1 * u1 * u1 * pt1[0] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[0] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[0] + t1 * t1 * t1 * pt2[0]) * 1e3) / 1e3;
          var ptY = math.round((u1 * u1 * u1 * pt1[1] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[1] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[1] + t1 * t1 * t1 * pt2[1]) * 1e3) / 1e3;
          return [ptX, ptY];
        }
        var bezierSegmentPoints = createTypedArray("float32", 8);
        function getNewSegment(pt1, pt2, pt3, pt4, startPerc, endPerc, bezierData) {
          if (startPerc < 0) {
            startPerc = 0;
          } else if (startPerc > 1) {
            startPerc = 1;
          }
          var t0 = getDistancePerc(startPerc, bezierData);
          endPerc = endPerc > 1 ? 1 : endPerc;
          var t1 = getDistancePerc(endPerc, bezierData);
          var i;
          var len = pt1.length;
          var u0 = 1 - t0;
          var u1 = 1 - t1;
          var u0u0u0 = u0 * u0 * u0;
          var t0u0u0_3 = t0 * u0 * u0 * 3;
          var t0t0u0_3 = t0 * t0 * u0 * 3;
          var t0t0t0 = t0 * t0 * t0;
          var u0u0u1 = u0 * u0 * u1;
          var t0u0u1_3 = t0 * u0 * u1 + u0 * t0 * u1 + u0 * u0 * t1;
          var t0t0u1_3 = t0 * t0 * u1 + u0 * t0 * t1 + t0 * u0 * t1;
          var t0t0t1 = t0 * t0 * t1;
          var u0u1u1 = u0 * u1 * u1;
          var t0u1u1_3 = t0 * u1 * u1 + u0 * t1 * u1 + u0 * u1 * t1;
          var t0t1u1_3 = t0 * t1 * u1 + u0 * t1 * t1 + t0 * u1 * t1;
          var t0t1t1 = t0 * t1 * t1;
          var u1u1u1 = u1 * u1 * u1;
          var t1u1u1_3 = t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1;
          var t1t1u1_3 = t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1;
          var t1t1t1 = t1 * t1 * t1;
          for (i = 0; i < len; i += 1) {
            bezierSegmentPoints[i * 4] = math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1e3) / 1e3;
            bezierSegmentPoints[i * 4 + 1] = math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1e3) / 1e3;
            bezierSegmentPoints[i * 4 + 2] = math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1e3) / 1e3;
            bezierSegmentPoints[i * 4 + 3] = math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1e3) / 1e3;
          }
          return bezierSegmentPoints;
        }
        return {
          getSegmentsLength,
          getNewSegment,
          getPointInSegment,
          buildBezierData,
          pointOnLine2D,
          pointOnLine3D
        };
      }
      var bez = bezFunction();
      var PropertyFactory = function() {
        var initFrame = initialDefaultFrame;
        var mathAbs = Math.abs;
        function interpolateValue(frameNum, caching) {
          var offsetTime = this.offsetTime;
          var newValue;
          if (this.propType === "multidimensional") {
            newValue = createTypedArray("float32", this.pv.length);
          }
          var iterationIndex = caching.lastIndex;
          var i = iterationIndex;
          var len = this.keyframes.length - 1;
          var flag = true;
          var keyData;
          var nextKeyData;
          var keyframeMetadata;
          while (flag) {
            keyData = this.keyframes[i];
            nextKeyData = this.keyframes[i + 1];
            if (i === len - 1 && frameNum >= nextKeyData.t - offsetTime) {
              if (keyData.h) {
                keyData = nextKeyData;
              }
              iterationIndex = 0;
              break;
            }
            if (nextKeyData.t - offsetTime > frameNum) {
              iterationIndex = i;
              break;
            }
            if (i < len - 1) {
              i += 1;
            } else {
              iterationIndex = 0;
              flag = false;
            }
          }
          keyframeMetadata = this.keyframesMetadata[i] || {};
          var k;
          var kLen;
          var perc;
          var jLen;
          var j;
          var fnc;
          var nextKeyTime = nextKeyData.t - offsetTime;
          var keyTime = keyData.t - offsetTime;
          var endValue;
          if (keyData.to) {
            if (!keyframeMetadata.bezierData) {
              keyframeMetadata.bezierData = bez.buildBezierData(keyData.s, nextKeyData.s || keyData.e, keyData.to, keyData.ti);
            }
            var bezierData = keyframeMetadata.bezierData;
            if (frameNum >= nextKeyTime || frameNum < keyTime) {
              var ind = frameNum >= nextKeyTime ? bezierData.points.length - 1 : 0;
              kLen = bezierData.points[ind].point.length;
              for (k = 0; k < kLen; k += 1) {
                newValue[k] = bezierData.points[ind].point[k];
              }
            } else {
              if (keyframeMetadata.__fnct) {
                fnc = keyframeMetadata.__fnct;
              } else {
                fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
                keyframeMetadata.__fnct = fnc;
              }
              perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
              var distanceInLine = bezierData.segmentLength * perc;
              var segmentPerc;
              var addedLength = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastAddedLength : 0;
              j = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastPoint : 0;
              flag = true;
              jLen = bezierData.points.length;
              while (flag) {
                addedLength += bezierData.points[j].partialLength;
                if (distanceInLine === 0 || perc === 0 || j === bezierData.points.length - 1) {
                  kLen = bezierData.points[j].point.length;
                  for (k = 0; k < kLen; k += 1) {
                    newValue[k] = bezierData.points[j].point[k];
                  }
                  break;
                } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j + 1].partialLength) {
                  segmentPerc = (distanceInLine - addedLength) / bezierData.points[j + 1].partialLength;
                  kLen = bezierData.points[j].point.length;
                  for (k = 0; k < kLen; k += 1) {
                    newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j + 1].point[k] - bezierData.points[j].point[k]) * segmentPerc;
                  }
                  break;
                }
                if (j < jLen - 1) {
                  j += 1;
                } else {
                  flag = false;
                }
              }
              caching._lastPoint = j;
              caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
              caching._lastKeyframeIndex = i;
            }
          } else {
            var outX;
            var outY;
            var inX;
            var inY;
            var keyValue;
            len = keyData.s.length;
            endValue = nextKeyData.s || keyData.e;
            if (this.sh && keyData.h !== 1) {
              if (frameNum >= nextKeyTime) {
                newValue[0] = endValue[0];
                newValue[1] = endValue[1];
                newValue[2] = endValue[2];
              } else if (frameNum <= keyTime) {
                newValue[0] = keyData.s[0];
                newValue[1] = keyData.s[1];
                newValue[2] = keyData.s[2];
              } else {
                var quatStart = createQuaternion(keyData.s);
                var quatEnd = createQuaternion(endValue);
                var time2 = (frameNum - keyTime) / (nextKeyTime - keyTime);
                quaternionToEuler(newValue, slerp(quatStart, quatEnd, time2));
              }
            } else {
              for (i = 0; i < len; i += 1) {
                if (keyData.h !== 1) {
                  if (frameNum >= nextKeyTime) {
                    perc = 1;
                  } else if (frameNum < keyTime) {
                    perc = 0;
                  } else {
                    if (keyData.o.x.constructor === Array) {
                      if (!keyframeMetadata.__fnct) {
                        keyframeMetadata.__fnct = [];
                      }
                      if (!keyframeMetadata.__fnct[i]) {
                        outX = keyData.o.x[i] === void 0 ? keyData.o.x[0] : keyData.o.x[i];
                        outY = keyData.o.y[i] === void 0 ? keyData.o.y[0] : keyData.o.y[i];
                        inX = keyData.i.x[i] === void 0 ? keyData.i.x[0] : keyData.i.x[i];
                        inY = keyData.i.y[i] === void 0 ? keyData.i.y[0] : keyData.i.y[i];
                        fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                        keyframeMetadata.__fnct[i] = fnc;
                      } else {
                        fnc = keyframeMetadata.__fnct[i];
                      }
                    } else if (!keyframeMetadata.__fnct) {
                      outX = keyData.o.x;
                      outY = keyData.o.y;
                      inX = keyData.i.x;
                      inY = keyData.i.y;
                      fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                      keyData.keyframeMetadata = fnc;
                    } else {
                      fnc = keyframeMetadata.__fnct;
                    }
                    perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
                  }
                }
                endValue = nextKeyData.s || keyData.e;
                keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i] + (endValue[i] - keyData.s[i]) * perc;
                if (this.propType === "multidimensional") {
                  newValue[i] = keyValue;
                } else {
                  newValue = keyValue;
                }
              }
            }
          }
          caching.lastIndex = iterationIndex;
          return newValue;
        }
        function slerp(a, b, t) {
          var out = [];
          var ax = a[0];
          var ay = a[1];
          var az = a[2];
          var aw = a[3];
          var bx = b[0];
          var by = b[1];
          var bz = b[2];
          var bw = b[3];
          var omega;
          var cosom;
          var sinom;
          var scale0;
          var scale1;
          cosom = ax * bx + ay * by + az * bz + aw * bw;
          if (cosom < 0) {
            cosom = -cosom;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
          }
          if (1 - cosom > 1e-6) {
            omega = Math.acos(cosom);
            sinom = Math.sin(omega);
            scale0 = Math.sin((1 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
          } else {
            scale0 = 1 - t;
            scale1 = t;
          }
          out[0] = scale0 * ax + scale1 * bx;
          out[1] = scale0 * ay + scale1 * by;
          out[2] = scale0 * az + scale1 * bz;
          out[3] = scale0 * aw + scale1 * bw;
          return out;
        }
        function quaternionToEuler(out, quat) {
          var qx = quat[0];
          var qy = quat[1];
          var qz = quat[2];
          var qw = quat[3];
          var heading = Math.atan2(2 * qy * qw - 2 * qx * qz, 1 - 2 * qy * qy - 2 * qz * qz);
          var attitude = Math.asin(2 * qx * qy + 2 * qz * qw);
          var bank = Math.atan2(2 * qx * qw - 2 * qy * qz, 1 - 2 * qx * qx - 2 * qz * qz);
          out[0] = heading / degToRads;
          out[1] = attitude / degToRads;
          out[2] = bank / degToRads;
        }
        function createQuaternion(values) {
          var heading = values[0] * degToRads;
          var attitude = values[1] * degToRads;
          var bank = values[2] * degToRads;
          var c1 = Math.cos(heading / 2);
          var c2 = Math.cos(attitude / 2);
          var c3 = Math.cos(bank / 2);
          var s1 = Math.sin(heading / 2);
          var s2 = Math.sin(attitude / 2);
          var s3 = Math.sin(bank / 2);
          var w2 = c1 * c2 * c3 - s1 * s2 * s3;
          var x = s1 * s2 * c3 + c1 * c2 * s3;
          var y = s1 * c2 * c3 + c1 * s2 * s3;
          var z = c1 * s2 * c3 - s1 * c2 * s3;
          return [x, y, z, w2];
        }
        function getValueAtCurrentTime() {
          var frameNum = this.comp.renderedFrame - this.offsetTime;
          var initTime = this.keyframes[0].t - this.offsetTime;
          var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(frameNum === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= endTime && frameNum >= endTime || this._caching.lastFrame < initTime && frameNum < initTime))) {
            if (this._caching.lastFrame >= frameNum) {
              this._caching._lastKeyframeIndex = -1;
              this._caching.lastIndex = 0;
            }
            var renderResult = this.interpolateValue(frameNum, this._caching);
            this.pv = renderResult;
          }
          this._caching.lastFrame = frameNum;
          return this.pv;
        }
        function setVValue(val2) {
          var multipliedValue;
          if (this.propType === "unidimensional") {
            multipliedValue = val2 * this.mult;
            if (mathAbs(this.v - multipliedValue) > 1e-5) {
              this.v = multipliedValue;
              this._mdf = true;
            }
          } else {
            var i = 0;
            var len = this.v.length;
            while (i < len) {
              multipliedValue = val2[i] * this.mult;
              if (mathAbs(this.v[i] - multipliedValue) > 1e-5) {
                this.v[i] = multipliedValue;
                this._mdf = true;
              }
              i += 1;
            }
          }
        }
        function processEffectsSequence() {
          if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) {
            return;
          }
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = true;
          this._mdf = this._isFirstFrame;
          var i;
          var len = this.effectsSequence.length;
          var finalValue = this.kf ? this.pv : this.data.k;
          for (i = 0; i < len; i += 1) {
            finalValue = this.effectsSequence[i](finalValue);
          }
          this.setVValue(finalValue);
          this._isFirstFrame = false;
          this.lock = false;
          this.frameId = this.elem.globalData.frameId;
        }
        function addEffect(effectFunction) {
          this.effectsSequence.push(effectFunction);
          this.container.addDynamicProperty(this);
        }
        function ValueProperty(elem2, data2, mult, container) {
          this.propType = "unidimensional";
          this.mult = mult || 1;
          this.data = data2;
          this.v = mult ? data2.k * mult : data2.k;
          this.pv = data2.k;
          this._mdf = false;
          this.elem = elem2;
          this.container = container;
          this.comp = elem2.comp;
          this.k = false;
          this.kf = false;
          this.vel = 0;
          this.effectsSequence = [];
          this._isFirstFrame = true;
          this.getValue = processEffectsSequence;
          this.setVValue = setVValue;
          this.addEffect = addEffect;
        }
        function MultiDimensionalProperty(elem2, data2, mult, container) {
          this.propType = "multidimensional";
          this.mult = mult || 1;
          this.data = data2;
          this._mdf = false;
          this.elem = elem2;
          this.container = container;
          this.comp = elem2.comp;
          this.k = false;
          this.kf = false;
          this.frameId = -1;
          var i;
          var len = data2.k.length;
          this.v = createTypedArray("float32", len);
          this.pv = createTypedArray("float32", len);
          this.vel = createTypedArray("float32", len);
          for (i = 0; i < len; i += 1) {
            this.v[i] = data2.k[i] * this.mult;
            this.pv[i] = data2.k[i];
          }
          this._isFirstFrame = true;
          this.effectsSequence = [];
          this.getValue = processEffectsSequence;
          this.setVValue = setVValue;
          this.addEffect = addEffect;
        }
        function KeyframedValueProperty(elem2, data2, mult, container) {
          this.propType = "unidimensional";
          this.keyframes = data2.k;
          this.keyframesMetadata = [];
          this.offsetTime = elem2.data.st;
          this.frameId = -1;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          };
          this.k = true;
          this.kf = true;
          this.data = data2;
          this.mult = mult || 1;
          this.elem = elem2;
          this.container = container;
          this.comp = elem2.comp;
          this.v = initFrame;
          this.pv = initFrame;
          this._isFirstFrame = true;
          this.getValue = processEffectsSequence;
          this.setVValue = setVValue;
          this.interpolateValue = interpolateValue;
          this.effectsSequence = [getValueAtCurrentTime.bind(this)];
          this.addEffect = addEffect;
        }
        function KeyframedMultidimensionalProperty(elem2, data2, mult, container) {
          this.propType = "multidimensional";
          var i;
          var len = data2.k.length;
          var s;
          var e;
          var to;
          var ti;
          for (i = 0; i < len - 1; i += 1) {
            if (data2.k[i].to && data2.k[i].s && data2.k[i + 1] && data2.k[i + 1].s) {
              s = data2.k[i].s;
              e = data2.k[i + 1].s;
              to = data2.k[i].to;
              ti = data2.k[i].ti;
              if (s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], s[0] + to[0], s[1] + to[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], e[0] + ti[0], e[1] + ti[1]) || s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], s[0] + to[0], s[1] + to[1], s[2] + to[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], e[0] + ti[0], e[1] + ti[1], e[2] + ti[2])) {
                data2.k[i].to = null;
                data2.k[i].ti = null;
              }
              if (s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
                if (s.length === 2 || s[2] === e[2] && to[2] === 0 && ti[2] === 0) {
                  data2.k[i].to = null;
                  data2.k[i].ti = null;
                }
              }
            }
          }
          this.effectsSequence = [getValueAtCurrentTime.bind(this)];
          this.data = data2;
          this.keyframes = data2.k;
          this.keyframesMetadata = [];
          this.offsetTime = elem2.data.st;
          this.k = true;
          this.kf = true;
          this._isFirstFrame = true;
          this.mult = mult || 1;
          this.elem = elem2;
          this.container = container;
          this.comp = elem2.comp;
          this.getValue = processEffectsSequence;
          this.setVValue = setVValue;
          this.interpolateValue = interpolateValue;
          this.frameId = -1;
          var arrLen = data2.k[0].s.length;
          this.v = createTypedArray("float32", arrLen);
          this.pv = createTypedArray("float32", arrLen);
          for (i = 0; i < arrLen; i += 1) {
            this.v[i] = initFrame;
            this.pv[i] = initFrame;
          }
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", arrLen)
          };
          this.addEffect = addEffect;
        }
        function getProp(elem2, data2, type, mult, container) {
          var p;
          if (!data2.k.length) {
            p = new ValueProperty(elem2, data2, mult, container);
          } else if (typeof data2.k[0] === "number") {
            p = new MultiDimensionalProperty(elem2, data2, mult, container);
          } else {
            switch (type) {
              case 0:
                p = new KeyframedValueProperty(elem2, data2, mult, container);
                break;
              case 1:
                p = new KeyframedMultidimensionalProperty(elem2, data2, mult, container);
                break;
              default:
                break;
            }
          }
          if (p.effectsSequence.length) {
            container.addDynamicProperty(p);
          }
          return p;
        }
        var ob2 = {
          getProp
        };
        return ob2;
      }();
      function DynamicPropertyContainer() {
      }
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function addDynamicProperty(prop) {
          if (this.dynamicProperties.indexOf(prop) === -1) {
            this.dynamicProperties.push(prop);
            this.container.addDynamicProperty(this);
            this._isAnimated = true;
          }
        },
        iterateDynamicProperties: function iterateDynamicProperties() {
          this._mdf = false;
          var i;
          var len = this.dynamicProperties.length;
          for (i = 0; i < len; i += 1) {
            this.dynamicProperties[i].getValue();
            if (this.dynamicProperties[i]._mdf) {
              this._mdf = true;
            }
          }
        },
        initDynamicPropertyContainer: function initDynamicPropertyContainer(container) {
          this.container = container;
          this.dynamicProperties = [];
          this._mdf = false;
          this._isAnimated = false;
        }
      };
      var pointPool = function() {
        function create() {
          return createTypedArray("float32", 2);
        }
        return poolFactory(8, create);
      }();
      function ShapePath() {
        this.c = false;
        this._length = 0;
        this._maxLength = 8;
        this.v = createSizedArray(this._maxLength);
        this.o = createSizedArray(this._maxLength);
        this.i = createSizedArray(this._maxLength);
      }
      ShapePath.prototype.setPathData = function(closed, len) {
        this.c = closed;
        this.setLength(len);
        var i = 0;
        while (i < len) {
          this.v[i] = pointPool.newElement();
          this.o[i] = pointPool.newElement();
          this.i[i] = pointPool.newElement();
          i += 1;
        }
      };
      ShapePath.prototype.setLength = function(len) {
        while (this._maxLength < len) {
          this.doubleArrayLength();
        }
        this._length = len;
      };
      ShapePath.prototype.doubleArrayLength = function() {
        this.v = this.v.concat(createSizedArray(this._maxLength));
        this.i = this.i.concat(createSizedArray(this._maxLength));
        this.o = this.o.concat(createSizedArray(this._maxLength));
        this._maxLength *= 2;
      };
      ShapePath.prototype.setXYAt = function(x, y, type, pos, replace) {
        var arr;
        this._length = Math.max(this._length, pos + 1);
        if (this._length >= this._maxLength) {
          this.doubleArrayLength();
        }
        switch (type) {
          case "v":
            arr = this.v;
            break;
          case "i":
            arr = this.i;
            break;
          case "o":
            arr = this.o;
            break;
          default:
            arr = [];
            break;
        }
        if (!arr[pos] || arr[pos] && !replace) {
          arr[pos] = pointPool.newElement();
        }
        arr[pos][0] = x;
        arr[pos][1] = y;
      };
      ShapePath.prototype.setTripleAt = function(vX, vY, oX, oY, iX, iY, pos, replace) {
        this.setXYAt(vX, vY, "v", pos, replace);
        this.setXYAt(oX, oY, "o", pos, replace);
        this.setXYAt(iX, iY, "i", pos, replace);
      };
      ShapePath.prototype.reverse = function() {
        var newPath = new ShapePath();
        newPath.setPathData(this.c, this._length);
        var vertices = this.v;
        var outPoints = this.o;
        var inPoints = this.i;
        var init = 0;
        if (this.c) {
          newPath.setTripleAt(vertices[0][0], vertices[0][1], inPoints[0][0], inPoints[0][1], outPoints[0][0], outPoints[0][1], 0, false);
          init = 1;
        }
        var cnt = this._length - 1;
        var len = this._length;
        var i;
        for (i = init; i < len; i += 1) {
          newPath.setTripleAt(vertices[cnt][0], vertices[cnt][1], inPoints[cnt][0], inPoints[cnt][1], outPoints[cnt][0], outPoints[cnt][1], i, false);
          cnt -= 1;
        }
        return newPath;
      };
      var shapePool = function() {
        function create() {
          return new ShapePath();
        }
        function release(shapePath) {
          var len = shapePath._length;
          var i;
          for (i = 0; i < len; i += 1) {
            pointPool.release(shapePath.v[i]);
            pointPool.release(shapePath.i[i]);
            pointPool.release(shapePath.o[i]);
            shapePath.v[i] = null;
            shapePath.i[i] = null;
            shapePath.o[i] = null;
          }
          shapePath._length = 0;
          shapePath.c = false;
        }
        function clone(shape) {
          var cloned = factory.newElement();
          var i;
          var len = shape._length === void 0 ? shape.v.length : shape._length;
          cloned.setLength(len);
          cloned.c = shape.c;
          for (i = 0; i < len; i += 1) {
            cloned.setTripleAt(shape.v[i][0], shape.v[i][1], shape.o[i][0], shape.o[i][1], shape.i[i][0], shape.i[i][1], i);
          }
          return cloned;
        }
        var factory = poolFactory(4, create, release);
        factory.clone = clone;
        return factory;
      }();
      function ShapeCollection() {
        this._length = 0;
        this._maxLength = 4;
        this.shapes = createSizedArray(this._maxLength);
      }
      ShapeCollection.prototype.addShape = function(shapeData) {
        if (this._length === this._maxLength) {
          this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
          this._maxLength *= 2;
        }
        this.shapes[this._length] = shapeData;
        this._length += 1;
      };
      ShapeCollection.prototype.releaseShapes = function() {
        var i;
        for (i = 0; i < this._length; i += 1) {
          shapePool.release(this.shapes[i]);
        }
        this._length = 0;
      };
      var shapeCollectionPool = function() {
        var ob2 = {
          newShapeCollection,
          release
        };
        var _length = 0;
        var _maxLength = 4;
        var pool = createSizedArray(_maxLength);
        function newShapeCollection() {
          var shapeCollection;
          if (_length) {
            _length -= 1;
            shapeCollection = pool[_length];
          } else {
            shapeCollection = new ShapeCollection();
          }
          return shapeCollection;
        }
        function release(shapeCollection) {
          var i;
          var len = shapeCollection._length;
          for (i = 0; i < len; i += 1) {
            shapePool.release(shapeCollection.shapes[i]);
          }
          shapeCollection._length = 0;
          if (_length === _maxLength) {
            pool = pooling["double"](pool);
            _maxLength *= 2;
          }
          pool[_length] = shapeCollection;
          _length += 1;
        }
        return ob2;
      }();
      var ShapePropertyFactory = function() {
        var initFrame = -999999;
        function interpolateShape(frameNum, previousValue, caching) {
          var iterationIndex = caching.lastIndex;
          var keyPropS;
          var keyPropE;
          var isHold;
          var j;
          var k;
          var jLen;
          var kLen;
          var perc;
          var vertexValue;
          var kf = this.keyframes;
          if (frameNum < kf[0].t - this.offsetTime) {
            keyPropS = kf[0].s[0];
            isHold = true;
            iterationIndex = 0;
          } else if (frameNum >= kf[kf.length - 1].t - this.offsetTime) {
            keyPropS = kf[kf.length - 1].s ? kf[kf.length - 1].s[0] : kf[kf.length - 2].e[0];
            isHold = true;
          } else {
            var i = iterationIndex;
            var len = kf.length - 1;
            var flag = true;
            var keyData;
            var nextKeyData;
            var keyframeMetadata;
            while (flag) {
              keyData = kf[i];
              nextKeyData = kf[i + 1];
              if (nextKeyData.t - this.offsetTime > frameNum) {
                break;
              }
              if (i < len - 1) {
                i += 1;
              } else {
                flag = false;
              }
            }
            keyframeMetadata = this.keyframesMetadata[i] || {};
            isHold = keyData.h === 1;
            iterationIndex = i;
            if (!isHold) {
              if (frameNum >= nextKeyData.t - this.offsetTime) {
                perc = 1;
              } else if (frameNum < keyData.t - this.offsetTime) {
                perc = 0;
              } else {
                var fnc;
                if (keyframeMetadata.__fnct) {
                  fnc = keyframeMetadata.__fnct;
                } else {
                  fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y).get;
                  keyframeMetadata.__fnct = fnc;
                }
                perc = fnc((frameNum - (keyData.t - this.offsetTime)) / (nextKeyData.t - this.offsetTime - (keyData.t - this.offsetTime)));
              }
              keyPropE = nextKeyData.s ? nextKeyData.s[0] : keyData.e[0];
            }
            keyPropS = keyData.s[0];
          }
          jLen = previousValue._length;
          kLen = keyPropS.i[0].length;
          caching.lastIndex = iterationIndex;
          for (j = 0; j < jLen; j += 1) {
            for (k = 0; k < kLen; k += 1) {
              vertexValue = isHold ? keyPropS.i[j][k] : keyPropS.i[j][k] + (keyPropE.i[j][k] - keyPropS.i[j][k]) * perc;
              previousValue.i[j][k] = vertexValue;
              vertexValue = isHold ? keyPropS.o[j][k] : keyPropS.o[j][k] + (keyPropE.o[j][k] - keyPropS.o[j][k]) * perc;
              previousValue.o[j][k] = vertexValue;
              vertexValue = isHold ? keyPropS.v[j][k] : keyPropS.v[j][k] + (keyPropE.v[j][k] - keyPropS.v[j][k]) * perc;
              previousValue.v[j][k] = vertexValue;
            }
          }
        }
        function interpolateShapeCurrentTime() {
          var frameNum = this.comp.renderedFrame - this.offsetTime;
          var initTime = this.keyframes[0].t - this.offsetTime;
          var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          var lastFrame = this._caching.lastFrame;
          if (!(lastFrame !== initFrame && (lastFrame < initTime && frameNum < initTime || lastFrame > endTime && frameNum > endTime))) {
            this._caching.lastIndex = lastFrame < frameNum ? this._caching.lastIndex : 0;
            this.interpolateShape(frameNum, this.pv, this._caching);
          }
          this._caching.lastFrame = frameNum;
          return this.pv;
        }
        function resetShape() {
          this.paths = this.localShapeCollection;
        }
        function shapesEqual(shape1, shape2) {
          if (shape1._length !== shape2._length || shape1.c !== shape2.c) {
            return false;
          }
          var i;
          var len = shape1._length;
          for (i = 0; i < len; i += 1) {
            if (shape1.v[i][0] !== shape2.v[i][0] || shape1.v[i][1] !== shape2.v[i][1] || shape1.o[i][0] !== shape2.o[i][0] || shape1.o[i][1] !== shape2.o[i][1] || shape1.i[i][0] !== shape2.i[i][0] || shape1.i[i][1] !== shape2.i[i][1]) {
              return false;
            }
          }
          return true;
        }
        function setVValue(newPath) {
          if (!shapesEqual(this.v, newPath)) {
            this.v = shapePool.clone(newPath);
            this.localShapeCollection.releaseShapes();
            this.localShapeCollection.addShape(this.v);
            this._mdf = true;
            this.paths = this.localShapeCollection;
          }
        }
        function processEffectsSequence() {
          if (this.elem.globalData.frameId === this.frameId) {
            return;
          }
          if (!this.effectsSequence.length) {
            this._mdf = false;
            return;
          }
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = true;
          this._mdf = false;
          var finalValue;
          if (this.kf) {
            finalValue = this.pv;
          } else if (this.data.ks) {
            finalValue = this.data.ks.k;
          } else {
            finalValue = this.data.pt.k;
          }
          var i;
          var len = this.effectsSequence.length;
          for (i = 0; i < len; i += 1) {
            finalValue = this.effectsSequence[i](finalValue);
          }
          this.setVValue(finalValue);
          this.lock = false;
          this.frameId = this.elem.globalData.frameId;
        }
        function ShapeProperty(elem2, data2, type) {
          this.propType = "shape";
          this.comp = elem2.comp;
          this.container = elem2;
          this.elem = elem2;
          this.data = data2;
          this.k = false;
          this.kf = false;
          this._mdf = false;
          var pathData = type === 3 ? data2.pt.k : data2.ks.k;
          this.v = shapePool.clone(pathData);
          this.pv = shapePool.clone(this.v);
          this.localShapeCollection = shapeCollectionPool.newShapeCollection();
          this.paths = this.localShapeCollection;
          this.paths.addShape(this.v);
          this.reset = resetShape;
          this.effectsSequence = [];
        }
        function addEffect(effectFunction) {
          this.effectsSequence.push(effectFunction);
          this.container.addDynamicProperty(this);
        }
        ShapeProperty.prototype.interpolateShape = interpolateShape;
        ShapeProperty.prototype.getValue = processEffectsSequence;
        ShapeProperty.prototype.setVValue = setVValue;
        ShapeProperty.prototype.addEffect = addEffect;
        function KeyframedShapeProperty(elem2, data2, type) {
          this.propType = "shape";
          this.comp = elem2.comp;
          this.elem = elem2;
          this.container = elem2;
          this.offsetTime = elem2.data.st;
          this.keyframes = type === 3 ? data2.pt.k : data2.ks.k;
          this.keyframesMetadata = [];
          this.k = true;
          this.kf = true;
          var len = this.keyframes[0].s[0].i.length;
          this.v = shapePool.newElement();
          this.v.setPathData(this.keyframes[0].s[0].c, len);
          this.pv = shapePool.clone(this.v);
          this.localShapeCollection = shapeCollectionPool.newShapeCollection();
          this.paths = this.localShapeCollection;
          this.paths.addShape(this.v);
          this.lastFrame = initFrame;
          this.reset = resetShape;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0
          };
          this.effectsSequence = [interpolateShapeCurrentTime.bind(this)];
        }
        KeyframedShapeProperty.prototype.getValue = processEffectsSequence;
        KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;
        KeyframedShapeProperty.prototype.setVValue = setVValue;
        KeyframedShapeProperty.prototype.addEffect = addEffect;
        var EllShapeProperty = function() {
          var cPoint = roundCorner;
          function EllShapePropertyFactory(elem2, data2) {
            this.v = shapePool.newElement();
            this.v.setPathData(true, 4);
            this.localShapeCollection = shapeCollectionPool.newShapeCollection();
            this.paths = this.localShapeCollection;
            this.localShapeCollection.addShape(this.v);
            this.d = data2.d;
            this.elem = elem2;
            this.comp = elem2.comp;
            this.frameId = -1;
            this.initDynamicPropertyContainer(elem2);
            this.p = PropertyFactory.getProp(elem2, data2.p, 1, 0, this);
            this.s = PropertyFactory.getProp(elem2, data2.s, 1, 0, this);
            if (this.dynamicProperties.length) {
              this.k = true;
            } else {
              this.k = false;
              this.convertEllToPath();
            }
          }
          EllShapePropertyFactory.prototype = {
            reset: resetShape,
            getValue: function getValue() {
              if (this.elem.globalData.frameId === this.frameId) {
                return;
              }
              this.frameId = this.elem.globalData.frameId;
              this.iterateDynamicProperties();
              if (this._mdf) {
                this.convertEllToPath();
              }
            },
            convertEllToPath: function convertEllToPath() {
              var p0 = this.p.v[0];
              var p1 = this.p.v[1];
              var s0 = this.s.v[0] / 2;
              var s1 = this.s.v[1] / 2;
              var _cw = this.d !== 3;
              var _v = this.v;
              _v.v[0][0] = p0;
              _v.v[0][1] = p1 - s1;
              _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
              _v.v[1][1] = p1;
              _v.v[2][0] = p0;
              _v.v[2][1] = p1 + s1;
              _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
              _v.v[3][1] = p1;
              _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
              _v.i[0][1] = p1 - s1;
              _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
              _v.i[1][1] = p1 - s1 * cPoint;
              _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
              _v.i[2][1] = p1 + s1;
              _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
              _v.i[3][1] = p1 + s1 * cPoint;
              _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
              _v.o[0][1] = p1 - s1;
              _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
              _v.o[1][1] = p1 + s1 * cPoint;
              _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
              _v.o[2][1] = p1 + s1;
              _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
              _v.o[3][1] = p1 - s1 * cPoint;
            }
          };
          extendPrototype([DynamicPropertyContainer], EllShapePropertyFactory);
          return EllShapePropertyFactory;
        }();
        var StarShapeProperty = function() {
          function StarShapePropertyFactory(elem2, data2) {
            this.v = shapePool.newElement();
            this.v.setPathData(true, 0);
            this.elem = elem2;
            this.comp = elem2.comp;
            this.data = data2;
            this.frameId = -1;
            this.d = data2.d;
            this.initDynamicPropertyContainer(elem2);
            if (data2.sy === 1) {
              this.ir = PropertyFactory.getProp(elem2, data2.ir, 0, 0, this);
              this.is = PropertyFactory.getProp(elem2, data2.is, 0, 0.01, this);
              this.convertToPath = this.convertStarToPath;
            } else {
              this.convertToPath = this.convertPolygonToPath;
            }
            this.pt = PropertyFactory.getProp(elem2, data2.pt, 0, 0, this);
            this.p = PropertyFactory.getProp(elem2, data2.p, 1, 0, this);
            this.r = PropertyFactory.getProp(elem2, data2.r, 0, degToRads, this);
            this.or = PropertyFactory.getProp(elem2, data2.or, 0, 0, this);
            this.os = PropertyFactory.getProp(elem2, data2.os, 0, 0.01, this);
            this.localShapeCollection = shapeCollectionPool.newShapeCollection();
            this.localShapeCollection.addShape(this.v);
            this.paths = this.localShapeCollection;
            if (this.dynamicProperties.length) {
              this.k = true;
            } else {
              this.k = false;
              this.convertToPath();
            }
          }
          StarShapePropertyFactory.prototype = {
            reset: resetShape,
            getValue: function getValue() {
              if (this.elem.globalData.frameId === this.frameId) {
                return;
              }
              this.frameId = this.elem.globalData.frameId;
              this.iterateDynamicProperties();
              if (this._mdf) {
                this.convertToPath();
              }
            },
            convertStarToPath: function convertStarToPath() {
              var numPts = Math.floor(this.pt.v) * 2;
              var angle = Math.PI * 2 / numPts;
              var longFlag = true;
              var longRad = this.or.v;
              var shortRad = this.ir.v;
              var longRound = this.os.v;
              var shortRound = this.is.v;
              var longPerimSegment = 2 * Math.PI * longRad / (numPts * 2);
              var shortPerimSegment = 2 * Math.PI * shortRad / (numPts * 2);
              var i;
              var rad;
              var roundness;
              var perimSegment;
              var currentAng = -Math.PI / 2;
              currentAng += this.r.v;
              var dir = this.data.d === 3 ? -1 : 1;
              this.v._length = 0;
              for (i = 0; i < numPts; i += 1) {
                rad = longFlag ? longRad : shortRad;
                roundness = longFlag ? longRound : shortRound;
                perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
                var x = rad * Math.cos(currentAng);
                var y = rad * Math.sin(currentAng);
                var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
                var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
                x += +this.p.v[0];
                y += +this.p.v[1];
                this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
                longFlag = !longFlag;
                currentAng += angle * dir;
              }
            },
            convertPolygonToPath: function convertPolygonToPath() {
              var numPts = Math.floor(this.pt.v);
              var angle = Math.PI * 2 / numPts;
              var rad = this.or.v;
              var roundness = this.os.v;
              var perimSegment = 2 * Math.PI * rad / (numPts * 4);
              var i;
              var currentAng = -Math.PI * 0.5;
              var dir = this.data.d === 3 ? -1 : 1;
              currentAng += this.r.v;
              this.v._length = 0;
              for (i = 0; i < numPts; i += 1) {
                var x = rad * Math.cos(currentAng);
                var y = rad * Math.sin(currentAng);
                var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
                var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
                x += +this.p.v[0];
                y += +this.p.v[1];
                this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
                currentAng += angle * dir;
              }
              this.paths.length = 0;
              this.paths[0] = this.v;
            }
          };
          extendPrototype([DynamicPropertyContainer], StarShapePropertyFactory);
          return StarShapePropertyFactory;
        }();
        var RectShapeProperty = function() {
          function RectShapePropertyFactory(elem2, data2) {
            this.v = shapePool.newElement();
            this.v.c = true;
            this.localShapeCollection = shapeCollectionPool.newShapeCollection();
            this.localShapeCollection.addShape(this.v);
            this.paths = this.localShapeCollection;
            this.elem = elem2;
            this.comp = elem2.comp;
            this.frameId = -1;
            this.d = data2.d;
            this.initDynamicPropertyContainer(elem2);
            this.p = PropertyFactory.getProp(elem2, data2.p, 1, 0, this);
            this.s = PropertyFactory.getProp(elem2, data2.s, 1, 0, this);
            this.r = PropertyFactory.getProp(elem2, data2.r, 0, 0, this);
            if (this.dynamicProperties.length) {
              this.k = true;
            } else {
              this.k = false;
              this.convertRectToPath();
            }
          }
          RectShapePropertyFactory.prototype = {
            convertRectToPath: function convertRectToPath() {
              var p0 = this.p.v[0];
              var p1 = this.p.v[1];
              var v0 = this.s.v[0] / 2;
              var v1 = this.s.v[1] / 2;
              var round = bmMin(v0, v1, this.r.v);
              var cPoint = round * (1 - roundCorner);
              this.v._length = 0;
              if (this.d === 2 || this.d === 1) {
                this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, 0, true);
                this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, p0 + v0, p1 + v1 - round, 1, true);
                if (round !== 0) {
                  this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, 2, true);
                  this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0 + round, p1 + v1, 3, true);
                  this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, 4, true);
                  this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1 + round, 5, true);
                  this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, 6, true);
                  this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, p0 + v0 - round, p1 - v1, 7, true);
                } else {
                  this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0, p1 + v1, 2);
                  this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1, 3);
                }
              } else {
                this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, p0 + v0, p1 - v1 + round, 0, true);
                if (round !== 0) {
                  this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, 1, true);
                  this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0 + round, p1 - v1, 2, true);
                  this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, 3, true);
                  this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1 - round, 4, true);
                  this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, 5, true);
                  this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0 - round, p1 + v1, 6, true);
                  this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, 7, true);
                } else {
                  this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0, p1 - v1, 1, true);
                  this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1, 2, true);
                  this.v.setTripleAt(p0 + v0, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0, p1 + v1, 3, true);
                }
              }
            },
            getValue: function getValue() {
              if (this.elem.globalData.frameId === this.frameId) {
                return;
              }
              this.frameId = this.elem.globalData.frameId;
              this.iterateDynamicProperties();
              if (this._mdf) {
                this.convertRectToPath();
              }
            },
            reset: resetShape
          };
          extendPrototype([DynamicPropertyContainer], RectShapePropertyFactory);
          return RectShapePropertyFactory;
        }();
        function getShapeProp(elem2, data2, type) {
          var prop;
          if (type === 3 || type === 4) {
            var dataProp = type === 3 ? data2.pt : data2.ks;
            var keys = dataProp.k;
            if (keys.length) {
              prop = new KeyframedShapeProperty(elem2, data2, type);
            } else {
              prop = new ShapeProperty(elem2, data2, type);
            }
          } else if (type === 5) {
            prop = new RectShapeProperty(elem2, data2);
          } else if (type === 6) {
            prop = new EllShapeProperty(elem2, data2);
          } else if (type === 7) {
            prop = new StarShapeProperty(elem2, data2);
          }
          if (prop.k) {
            elem2.addDynamicProperty(prop);
          }
          return prop;
        }
        function getConstructorFunction() {
          return ShapeProperty;
        }
        function getKeyframedConstructorFunction() {
          return KeyframedShapeProperty;
        }
        var ob2 = {};
        ob2.getShapeProp = getShapeProp;
        ob2.getConstructorFunction = getConstructorFunction;
        ob2.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
        return ob2;
      }();
      var Matrix = function() {
        var _cos = Math.cos;
        var _sin = Math.sin;
        var _tan = Math.tan;
        var _rnd = Math.round;
        function reset() {
          this.props[0] = 1;
          this.props[1] = 0;
          this.props[2] = 0;
          this.props[3] = 0;
          this.props[4] = 0;
          this.props[5] = 1;
          this.props[6] = 0;
          this.props[7] = 0;
          this.props[8] = 0;
          this.props[9] = 0;
          this.props[10] = 1;
          this.props[11] = 0;
          this.props[12] = 0;
          this.props[13] = 0;
          this.props[14] = 0;
          this.props[15] = 1;
          return this;
        }
        function rotate(angle) {
          if (angle === 0) {
            return this;
          }
          var mCos = _cos(angle);
          var mSin = _sin(angle);
          return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function rotateX(angle) {
          if (angle === 0) {
            return this;
          }
          var mCos = _cos(angle);
          var mSin = _sin(angle);
          return this._t(1, 0, 0, 0, 0, mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1);
        }
        function rotateY(angle) {
          if (angle === 0) {
            return this;
          }
          var mCos = _cos(angle);
          var mSin = _sin(angle);
          return this._t(mCos, 0, mSin, 0, 0, 1, 0, 0, -mSin, 0, mCos, 0, 0, 0, 0, 1);
        }
        function rotateZ(angle) {
          if (angle === 0) {
            return this;
          }
          var mCos = _cos(angle);
          var mSin = _sin(angle);
          return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function shear(sx, sy) {
          return this._t(1, sy, sx, 1, 0, 0);
        }
        function skew(ax, ay) {
          return this.shear(_tan(ax), _tan(ay));
        }
        function skewFromAxis(ax, angle) {
          var mCos = _cos(angle);
          var mSin = _sin(angle);
          return this._t(mCos, mSin, 0, 0, -mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, _tan(ax), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function scale2(sx, sy, sz) {
          if (!sz && sz !== 0) {
            sz = 1;
          }
          if (sx === 1 && sy === 1 && sz === 1) {
            return this;
          }
          return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
        }
        function setTransform(a, b, c, d, e, f, g, h2, i, j, k, l, m, n, o, p) {
          this.props[0] = a;
          this.props[1] = b;
          this.props[2] = c;
          this.props[3] = d;
          this.props[4] = e;
          this.props[5] = f;
          this.props[6] = g;
          this.props[7] = h2;
          this.props[8] = i;
          this.props[9] = j;
          this.props[10] = k;
          this.props[11] = l;
          this.props[12] = m;
          this.props[13] = n;
          this.props[14] = o;
          this.props[15] = p;
          return this;
        }
        function translate(tx, ty, tz) {
          tz = tz || 0;
          if (tx !== 0 || ty !== 0 || tz !== 0) {
            return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1);
          }
          return this;
        }
        function transform2(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {
          var _p = this.props;
          if (a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0) {
            _p[12] = _p[12] * a2 + _p[15] * m2;
            _p[13] = _p[13] * f2 + _p[15] * n2;
            _p[14] = _p[14] * k2 + _p[15] * o2;
            _p[15] *= p2;
            this._identityCalculated = false;
            return this;
          }
          var a1 = _p[0];
          var b1 = _p[1];
          var c1 = _p[2];
          var d1 = _p[3];
          var e1 = _p[4];
          var f1 = _p[5];
          var g1 = _p[6];
          var h1 = _p[7];
          var i1 = _p[8];
          var j1 = _p[9];
          var k1 = _p[10];
          var l1 = _p[11];
          var m1 = _p[12];
          var n1 = _p[13];
          var o1 = _p[14];
          var p1 = _p[15];
          _p[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
          _p[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2;
          _p[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2;
          _p[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2;
          _p[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2;
          _p[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2;
          _p[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2;
          _p[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2;
          _p[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2;
          _p[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2;
          _p[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2;
          _p[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2;
          _p[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2;
          _p[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2;
          _p[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2;
          _p[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2;
          this._identityCalculated = false;
          return this;
        }
        function isIdentity() {
          if (!this._identityCalculated) {
            this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
            this._identityCalculated = true;
          }
          return this._identity;
        }
        function equals(matr) {
          var i = 0;
          while (i < 16) {
            if (matr.props[i] !== this.props[i]) {
              return false;
            }
            i += 1;
          }
          return true;
        }
        function clone(matr) {
          var i;
          for (i = 0; i < 16; i += 1) {
            matr.props[i] = this.props[i];
          }
          return matr;
        }
        function cloneFromProps(props) {
          var i;
          for (i = 0; i < 16; i += 1) {
            this.props[i] = props[i];
          }
        }
        function applyToPoint(x, y, z) {
          return {
            x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
            y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
            z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]
          };
        }
        function applyToX(x, y, z) {
          return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
        }
        function applyToY(x, y, z) {
          return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
        }
        function applyToZ(x, y, z) {
          return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14];
        }
        function getInverseMatrix() {
          var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
          var a = this.props[5] / determinant;
          var b = -this.props[1] / determinant;
          var c = -this.props[4] / determinant;
          var d = this.props[0] / determinant;
          var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / determinant;
          var f = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / determinant;
          var inverseMatrix = new Matrix();
          inverseMatrix.props[0] = a;
          inverseMatrix.props[1] = b;
          inverseMatrix.props[4] = c;
          inverseMatrix.props[5] = d;
          inverseMatrix.props[12] = e;
          inverseMatrix.props[13] = f;
          return inverseMatrix;
        }
        function inversePoint(pt) {
          var inverseMatrix = this.getInverseMatrix();
          return inverseMatrix.applyToPointArray(pt[0], pt[1], pt[2] || 0);
        }
        function inversePoints(pts) {
          var i;
          var len = pts.length;
          var retPts = [];
          for (i = 0; i < len; i += 1) {
            retPts[i] = inversePoint(pts[i]);
          }
          return retPts;
        }
        function applyToTriplePoints(pt1, pt2, pt3) {
          var arr = createTypedArray("float32", 6);
          if (this.isIdentity()) {
            arr[0] = pt1[0];
            arr[1] = pt1[1];
            arr[2] = pt2[0];
            arr[3] = pt2[1];
            arr[4] = pt3[0];
            arr[5] = pt3[1];
          } else {
            var p0 = this.props[0];
            var p1 = this.props[1];
            var p4 = this.props[4];
            var p5 = this.props[5];
            var p12 = this.props[12];
            var p13 = this.props[13];
            arr[0] = pt1[0] * p0 + pt1[1] * p4 + p12;
            arr[1] = pt1[0] * p1 + pt1[1] * p5 + p13;
            arr[2] = pt2[0] * p0 + pt2[1] * p4 + p12;
            arr[3] = pt2[0] * p1 + pt2[1] * p5 + p13;
            arr[4] = pt3[0] * p0 + pt3[1] * p4 + p12;
            arr[5] = pt3[0] * p1 + pt3[1] * p5 + p13;
          }
          return arr;
        }
        function applyToPointArray(x, y, z) {
          var arr;
          if (this.isIdentity()) {
            arr = [x, y, z];
          } else {
            arr = [x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12], x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13], x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]];
          }
          return arr;
        }
        function applyToPointStringified(x, y) {
          if (this.isIdentity()) {
            return x + "," + y;
          }
          var _p = this.props;
          return Math.round((x * _p[0] + y * _p[4] + _p[12]) * 100) / 100 + "," + Math.round((x * _p[1] + y * _p[5] + _p[13]) * 100) / 100;
        }
        function toCSS() {
          var i = 0;
          var props = this.props;
          var cssValue = "matrix3d(";
          var v2 = 1e4;
          while (i < 16) {
            cssValue += _rnd(props[i] * v2) / v2;
            cssValue += i === 15 ? ")" : ",";
            i += 1;
          }
          return cssValue;
        }
        function roundMatrixProperty(val2) {
          var v2 = 1e4;
          if (val2 < 1e-6 && val2 > 0 || val2 > -1e-6 && val2 < 0) {
            return _rnd(val2 * v2) / v2;
          }
          return val2;
        }
        function to2dCSS() {
          var props = this.props;
          var _a = roundMatrixProperty(props[0]);
          var _b = roundMatrixProperty(props[1]);
          var _c = roundMatrixProperty(props[4]);
          var _d = roundMatrixProperty(props[5]);
          var _e = roundMatrixProperty(props[12]);
          var _f = roundMatrixProperty(props[13]);
          return "matrix(" + _a + "," + _b + "," + _c + "," + _d + "," + _e + "," + _f + ")";
        }
        return function() {
          this.reset = reset;
          this.rotate = rotate;
          this.rotateX = rotateX;
          this.rotateY = rotateY;
          this.rotateZ = rotateZ;
          this.skew = skew;
          this.skewFromAxis = skewFromAxis;
          this.shear = shear;
          this.scale = scale2;
          this.setTransform = setTransform;
          this.translate = translate;
          this.transform = transform2;
          this.applyToPoint = applyToPoint;
          this.applyToX = applyToX;
          this.applyToY = applyToY;
          this.applyToZ = applyToZ;
          this.applyToPointArray = applyToPointArray;
          this.applyToTriplePoints = applyToTriplePoints;
          this.applyToPointStringified = applyToPointStringified;
          this.toCSS = toCSS;
          this.to2dCSS = to2dCSS;
          this.clone = clone;
          this.cloneFromProps = cloneFromProps;
          this.equals = equals;
          this.inversePoints = inversePoints;
          this.inversePoint = inversePoint;
          this.getInverseMatrix = getInverseMatrix;
          this._t = this.transform;
          this.isIdentity = isIdentity;
          this._identity = true;
          this._identityCalculated = false;
          this.props = createTypedArray("float32", 16);
          this.reset();
        };
      }();
      function _typeof$3(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof$3 = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof$3 = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof$3(obj);
      }
      var lottie = {};
      var standalone = "__[STANDALONE]__";
      var animationData = "__[ANIMATIONDATA]__";
      var renderer = "";
      function setLocation(href) {
        setLocationHref(href);
      }
      function searchAnimations() {
        if (standalone === true) {
          animationManager.searchAnimations(animationData, standalone, renderer);
        } else {
          animationManager.searchAnimations();
        }
      }
      function setSubframeRendering(flag) {
        setSubframeEnabled(flag);
      }
      function setPrefix(prefix) {
        setIdPrefix(prefix);
      }
      function loadAnimation(params) {
        if (standalone === true) {
          params.animationData = JSON.parse(animationData);
        }
        return animationManager.loadAnimation(params);
      }
      function setQuality(value2) {
        if (typeof value2 === "string") {
          switch (value2) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10);
              break;
          }
        } else if (!isNaN(value2) && value2 > 1) {
          setDefaultCurveSegments(value2);
        }
        if (getDefaultCurveSegments() >= 50) {
          roundValues(false);
        } else {
          roundValues(true);
        }
      }
      function inBrowser() {
        return typeof navigator !== "undefined";
      }
      function installPlugin(type, plugin) {
        if (type === "expressions") {
          setExpressionsPlugin(plugin);
        }
      }
      function getFactory(name2) {
        switch (name2) {
          case "propertyFactory":
            return PropertyFactory;
          case "shapePropertyFactory":
            return ShapePropertyFactory;
          case "matrix":
            return Matrix;
          default:
            return null;
        }
      }
      lottie.play = animationManager.play;
      lottie.pause = animationManager.pause;
      lottie.setLocationHref = setLocation;
      lottie.togglePause = animationManager.togglePause;
      lottie.setSpeed = animationManager.setSpeed;
      lottie.setDirection = animationManager.setDirection;
      lottie.stop = animationManager.stop;
      lottie.searchAnimations = searchAnimations;
      lottie.registerAnimation = animationManager.registerAnimation;
      lottie.loadAnimation = loadAnimation;
      lottie.setSubframeRendering = setSubframeRendering;
      lottie.resize = animationManager.resize;
      lottie.goToAndStop = animationManager.goToAndStop;
      lottie.destroy = animationManager.destroy;
      lottie.setQuality = setQuality;
      lottie.inBrowser = inBrowser;
      lottie.installPlugin = installPlugin;
      lottie.freeze = animationManager.freeze;
      lottie.unfreeze = animationManager.unfreeze;
      lottie.setVolume = animationManager.setVolume;
      lottie.mute = animationManager.mute;
      lottie.unmute = animationManager.unmute;
      lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
      lottie.useWebWorker = setWebWorker;
      lottie.setIDPrefix = setPrefix;
      lottie.__getFactory = getFactory;
      lottie.version = "5.9.4";
      function checkReady() {
        if (document.readyState === "complete") {
          clearInterval(readyStateCheckInterval);
          searchAnimations();
        }
      }
      function getQueryVariable(variable) {
        var vars = queryString.split("&");
        for (var i = 0; i < vars.length; i += 1) {
          var pair = vars[i].split("=");
          if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
          }
        }
        return null;
      }
      var queryString = "";
      if (standalone) {
        var scripts = document.getElementsByTagName("script");
        var index = scripts.length - 1;
        var myScript = scripts[index] || {
          src: ""
        };
        queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "";
        renderer = getQueryVariable("renderer");
      }
      var readyStateCheckInterval = setInterval(checkReady, 100);
      try {
        if (!((typeof exports === "undefined" ? "undefined" : _typeof$3(exports)) === "object" && typeof module !== "undefined") && !(typeof define === "function" && define.amd)) {
          window.bodymovin = lottie;
        }
      } catch (err) {
      }
      var ShapeModifiers = function() {
        var ob2 = {};
        var modifiers = {};
        ob2.registerModifier = registerModifier;
        ob2.getModifier = getModifier;
        function registerModifier(nm2, factory) {
          if (!modifiers[nm2]) {
            modifiers[nm2] = factory;
          }
        }
        function getModifier(nm2, elem2, data2) {
          return new modifiers[nm2](elem2, data2);
        }
        return ob2;
      }();
      function ShapeModifier() {
      }
      ShapeModifier.prototype.initModifierProperties = function() {
      };
      ShapeModifier.prototype.addShapeToModifier = function() {
      };
      ShapeModifier.prototype.addShape = function(data2) {
        if (!this.closed) {
          data2.sh.container.addDynamicProperty(data2.sh);
          var shapeData = {
            shape: data2.sh,
            data: data2,
            localShapeCollection: shapeCollectionPool.newShapeCollection()
          };
          this.shapes.push(shapeData);
          this.addShapeToModifier(shapeData);
          if (this._isAnimated) {
            data2.setAsAnimated();
          }
        }
      };
      ShapeModifier.prototype.init = function(elem2, data2) {
        this.shapes = [];
        this.elem = elem2;
        this.initDynamicPropertyContainer(elem2);
        this.initModifierProperties(elem2, data2);
        this.frameId = initialDefaultFrame;
        this.closed = false;
        this.k = false;
        if (this.dynamicProperties.length) {
          this.k = true;
        } else {
          this.getValue(true);
        }
      };
      ShapeModifier.prototype.processKeys = function() {
        if (this.elem.globalData.frameId === this.frameId) {
          return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();
      };
      extendPrototype([DynamicPropertyContainer], ShapeModifier);
      function TrimModifier() {
      }
      extendPrototype([ShapeModifier], TrimModifier);
      TrimModifier.prototype.initModifierProperties = function(elem2, data2) {
        this.s = PropertyFactory.getProp(elem2, data2.s, 0, 0.01, this);
        this.e = PropertyFactory.getProp(elem2, data2.e, 0, 0.01, this);
        this.o = PropertyFactory.getProp(elem2, data2.o, 0, 0, this);
        this.sValue = 0;
        this.eValue = 0;
        this.getValue = this.processKeys;
        this.m = data2.m;
        this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
      };
      TrimModifier.prototype.addShapeToModifier = function(shapeData) {
        shapeData.pathsData = [];
      };
      TrimModifier.prototype.calculateShapeEdges = function(s, e, shapeLength, addedLength, totalModifierLength) {
        var segments = [];
        if (e <= 1) {
          segments.push({
            s,
            e
          });
        } else if (s >= 1) {
          segments.push({
            s: s - 1,
            e: e - 1
          });
        } else {
          segments.push({
            s,
            e: 1
          });
          segments.push({
            s: 0,
            e: e - 1
          });
        }
        var shapeSegments = [];
        var i;
        var len = segments.length;
        var segmentOb;
        for (i = 0; i < len; i += 1) {
          segmentOb = segments[i];
          if (!(segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength)) {
            var shapeS;
            var shapeE;
            if (segmentOb.s * totalModifierLength <= addedLength) {
              shapeS = 0;
            } else {
              shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
            }
            if (segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
              shapeE = 1;
            } else {
              shapeE = (segmentOb.e * totalModifierLength - addedLength) / shapeLength;
            }
            shapeSegments.push([shapeS, shapeE]);
          }
        }
        if (!shapeSegments.length) {
          shapeSegments.push([0, 0]);
        }
        return shapeSegments;
      };
      TrimModifier.prototype.releasePathsData = function(pathsData) {
        var i;
        var len = pathsData.length;
        for (i = 0; i < len; i += 1) {
          segmentsLengthPool.release(pathsData[i]);
        }
        pathsData.length = 0;
        return pathsData;
      };
      TrimModifier.prototype.processShapes = function(_isFirstFrame) {
        var s;
        var e;
        if (this._mdf || _isFirstFrame) {
          var o = this.o.v % 360 / 360;
          if (o < 0) {
            o += 1;
          }
          if (this.s.v > 1) {
            s = 1 + o;
          } else if (this.s.v < 0) {
            s = 0 + o;
          } else {
            s = this.s.v + o;
          }
          if (this.e.v > 1) {
            e = 1 + o;
          } else if (this.e.v < 0) {
            e = 0 + o;
          } else {
            e = this.e.v + o;
          }
          if (s > e) {
            var _s = s;
            s = e;
            e = _s;
          }
          s = Math.round(s * 1e4) * 1e-4;
          e = Math.round(e * 1e4) * 1e-4;
          this.sValue = s;
          this.eValue = e;
        } else {
          s = this.sValue;
          e = this.eValue;
        }
        var shapePaths;
        var i;
        var len = this.shapes.length;
        var j;
        var jLen;
        var pathsData;
        var pathData;
        var totalShapeLength;
        var totalModifierLength = 0;
        if (e === s) {
          for (i = 0; i < len; i += 1) {
            this.shapes[i].localShapeCollection.releaseShapes();
            this.shapes[i].shape._mdf = true;
            this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;
            if (this._mdf) {
              this.shapes[i].pathsData.length = 0;
            }
          }
        } else if (!(e === 1 && s === 0 || e === 0 && s === 1)) {
          var segments = [];
          var shapeData;
          var localShapeCollection;
          for (i = 0; i < len; i += 1) {
            shapeData = this.shapes[i];
            if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) {
              shapeData.shape.paths = shapeData.localShapeCollection;
            } else {
              shapePaths = shapeData.shape.paths;
              jLen = shapePaths._length;
              totalShapeLength = 0;
              if (!shapeData.shape._mdf && shapeData.pathsData.length) {
                totalShapeLength = shapeData.totalShapeLength;
              } else {
                pathsData = this.releasePathsData(shapeData.pathsData);
                for (j = 0; j < jLen; j += 1) {
                  pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
                  pathsData.push(pathData);
                  totalShapeLength += pathData.totalLength;
                }
                shapeData.totalShapeLength = totalShapeLength;
                shapeData.pathsData = pathsData;
              }
              totalModifierLength += totalShapeLength;
              shapeData.shape._mdf = true;
            }
          }
          var shapeS = s;
          var shapeE = e;
          var addedLength = 0;
          var edges;
          for (i = len - 1; i >= 0; i -= 1) {
            shapeData = this.shapes[i];
            if (shapeData.shape._mdf) {
              localShapeCollection = shapeData.localShapeCollection;
              localShapeCollection.releaseShapes();
              if (this.m === 2 && len > 1) {
                edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
                addedLength += shapeData.totalShapeLength;
              } else {
                edges = [[shapeS, shapeE]];
              }
              jLen = edges.length;
              for (j = 0; j < jLen; j += 1) {
                shapeS = edges[j][0];
                shapeE = edges[j][1];
                segments.length = 0;
                if (shapeE <= 1) {
                  segments.push({
                    s: shapeData.totalShapeLength * shapeS,
                    e: shapeData.totalShapeLength * shapeE
                  });
                } else if (shapeS >= 1) {
                  segments.push({
                    s: shapeData.totalShapeLength * (shapeS - 1),
                    e: shapeData.totalShapeLength * (shapeE - 1)
                  });
                } else {
                  segments.push({
                    s: shapeData.totalShapeLength * shapeS,
                    e: shapeData.totalShapeLength
                  });
                  segments.push({
                    s: 0,
                    e: shapeData.totalShapeLength * (shapeE - 1)
                  });
                }
                var newShapesData = this.addShapes(shapeData, segments[0]);
                if (segments[0].s !== segments[0].e) {
                  if (segments.length > 1) {
                    var lastShapeInCollection = shapeData.shape.paths.shapes[shapeData.shape.paths._length - 1];
                    if (lastShapeInCollection.c) {
                      var lastShape = newShapesData.pop();
                      this.addPaths(newShapesData, localShapeCollection);
                      newShapesData = this.addShapes(shapeData, segments[1], lastShape);
                    } else {
                      this.addPaths(newShapesData, localShapeCollection);
                      newShapesData = this.addShapes(shapeData, segments[1]);
                    }
                  }
                  this.addPaths(newShapesData, localShapeCollection);
                }
              }
              shapeData.shape.paths = localShapeCollection;
            }
          }
        } else if (this._mdf) {
          for (i = 0; i < len; i += 1) {
            this.shapes[i].pathsData.length = 0;
            this.shapes[i].shape._mdf = true;
          }
        }
      };
      TrimModifier.prototype.addPaths = function(newPaths, localShapeCollection) {
        var i;
        var len = newPaths.length;
        for (i = 0; i < len; i += 1) {
          localShapeCollection.addShape(newPaths[i]);
        }
      };
      TrimModifier.prototype.addSegment = function(pt1, pt2, pt3, pt4, shapePath, pos, newShape) {
        shapePath.setXYAt(pt2[0], pt2[1], "o", pos);
        shapePath.setXYAt(pt3[0], pt3[1], "i", pos + 1);
        if (newShape) {
          shapePath.setXYAt(pt1[0], pt1[1], "v", pos);
        }
        shapePath.setXYAt(pt4[0], pt4[1], "v", pos + 1);
      };
      TrimModifier.prototype.addSegmentFromArray = function(points, shapePath, pos, newShape) {
        shapePath.setXYAt(points[1], points[5], "o", pos);
        shapePath.setXYAt(points[2], points[6], "i", pos + 1);
        if (newShape) {
          shapePath.setXYAt(points[0], points[4], "v", pos);
        }
        shapePath.setXYAt(points[3], points[7], "v", pos + 1);
      };
      TrimModifier.prototype.addShapes = function(shapeData, shapeSegment, shapePath) {
        var pathsData = shapeData.pathsData;
        var shapePaths = shapeData.shape.paths.shapes;
        var i;
        var len = shapeData.shape.paths._length;
        var j;
        var jLen;
        var addedLength = 0;
        var currentLengthData;
        var segmentCount;
        var lengths;
        var segment;
        var shapes = [];
        var initPos;
        var newShape = true;
        if (!shapePath) {
          shapePath = shapePool.newElement();
          segmentCount = 0;
          initPos = 0;
        } else {
          segmentCount = shapePath._length;
          initPos = shapePath._length;
        }
        shapes.push(shapePath);
        for (i = 0; i < len; i += 1) {
          lengths = pathsData[i].lengths;
          shapePath.c = shapePaths[i].c;
          jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;
          for (j = 1; j < jLen; j += 1) {
            currentLengthData = lengths[j - 1];
            if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
              addedLength += currentLengthData.addedLength;
              shapePath.c = false;
            } else if (addedLength > shapeSegment.e) {
              shapePath.c = false;
              break;
            } else {
              if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
                this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
                newShape = false;
              } else {
                segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength) / currentLengthData.addedLength, (shapeSegment.e - addedLength) / currentLengthData.addedLength, lengths[j - 1]);
                this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
                newShape = false;
                shapePath.c = false;
              }
              addedLength += currentLengthData.addedLength;
              segmentCount += 1;
            }
          }
          if (shapePaths[i].c && lengths.length) {
            currentLengthData = lengths[j - 1];
            if (addedLength <= shapeSegment.e) {
              var segmentLength = lengths[j - 1].addedLength;
              if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
                this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
                newShape = false;
              } else {
                segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
                this.addSegmentFromArray(segment, shapePath, segmentCount, newShape);
                newShape = false;
                shapePath.c = false;
              }
            } else {
              shapePath.c = false;
            }
            addedLength += currentLengthData.addedLength;
            segmentCount += 1;
          }
          if (shapePath._length) {
            shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], "i", initPos);
            shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1], "o", shapePath._length - 1);
          }
          if (addedLength > shapeSegment.e) {
            break;
          }
          if (i < len - 1) {
            shapePath = shapePool.newElement();
            newShape = true;
            shapes.push(shapePath);
            segmentCount = 0;
          }
        }
        return shapes;
      };
      function PuckerAndBloatModifier() {
      }
      extendPrototype([ShapeModifier], PuckerAndBloatModifier);
      PuckerAndBloatModifier.prototype.initModifierProperties = function(elem2, data2) {
        this.getValue = this.processKeys;
        this.amount = PropertyFactory.getProp(elem2, data2.a, 0, null, this);
        this._isAnimated = !!this.amount.effectsSequence.length;
      };
      PuckerAndBloatModifier.prototype.processPath = function(path, amount) {
        var percent = amount / 100;
        var centerPoint = [0, 0];
        var pathLength = path._length;
        var i = 0;
        for (i = 0; i < pathLength; i += 1) {
          centerPoint[0] += path.v[i][0];
          centerPoint[1] += path.v[i][1];
        }
        centerPoint[0] /= pathLength;
        centerPoint[1] /= pathLength;
        var clonedPath = shapePool.newElement();
        clonedPath.c = path.c;
        var vX;
        var vY;
        var oX;
        var oY;
        var iX;
        var iY;
        for (i = 0; i < pathLength; i += 1) {
          vX = path.v[i][0] + (centerPoint[0] - path.v[i][0]) * percent;
          vY = path.v[i][1] + (centerPoint[1] - path.v[i][1]) * percent;
          oX = path.o[i][0] + (centerPoint[0] - path.o[i][0]) * -percent;
          oY = path.o[i][1] + (centerPoint[1] - path.o[i][1]) * -percent;
          iX = path.i[i][0] + (centerPoint[0] - path.i[i][0]) * -percent;
          iY = path.i[i][1] + (centerPoint[1] - path.i[i][1]) * -percent;
          clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, i);
        }
        return clonedPath;
      };
      PuckerAndBloatModifier.prototype.processShapes = function(_isFirstFrame) {
        var shapePaths;
        var i;
        var len = this.shapes.length;
        var j;
        var jLen;
        var amount = this.amount.v;
        if (amount !== 0) {
          var shapeData;
          var localShapeCollection;
          for (i = 0; i < len; i += 1) {
            shapeData = this.shapes[i];
            localShapeCollection = shapeData.localShapeCollection;
            if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
              localShapeCollection.releaseShapes();
              shapeData.shape._mdf = true;
              shapePaths = shapeData.shape.paths.shapes;
              jLen = shapeData.shape.paths._length;
              for (j = 0; j < jLen; j += 1) {
                localShapeCollection.addShape(this.processPath(shapePaths[j], amount));
              }
            }
            shapeData.shape.paths = shapeData.localShapeCollection;
          }
        }
        if (!this.dynamicProperties.length) {
          this._mdf = false;
        }
      };
      var TransformPropertyFactory = function() {
        var defaultVector = [0, 0];
        function applyToMatrix(mat) {
          var _mdf = this._mdf;
          this.iterateDynamicProperties();
          this._mdf = this._mdf || _mdf;
          if (this.a) {
            mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
          }
          if (this.s) {
            mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
          }
          if (this.sk) {
            mat.skewFromAxis(-this.sk.v, this.sa.v);
          }
          if (this.r) {
            mat.rotate(-this.r.v);
          } else {
            mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
          }
          if (this.data.p.s) {
            if (this.data.p.z) {
              mat.translate(this.px.v, this.py.v, -this.pz.v);
            } else {
              mat.translate(this.px.v, this.py.v, 0);
            }
          } else {
            mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
        }
        function processKeys(forceRender) {
          if (this.elem.globalData.frameId === this.frameId) {
            return;
          }
          if (this._isDirty) {
            this.precalculateMatrix();
            this._isDirty = false;
          }
          this.iterateDynamicProperties();
          if (this._mdf || forceRender) {
            var frameRate;
            this.v.cloneFromProps(this.pre.props);
            if (this.appliedTransformations < 1) {
              this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
            }
            if (this.appliedTransformations < 2) {
              this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
            }
            if (this.sk && this.appliedTransformations < 3) {
              this.v.skewFromAxis(-this.sk.v, this.sa.v);
            }
            if (this.r && this.appliedTransformations < 4) {
              this.v.rotate(-this.r.v);
            } else if (!this.r && this.appliedTransformations < 4) {
              this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
            }
            if (this.autoOriented) {
              var v1;
              var v2;
              frameRate = this.elem.globalData.frameRate;
              if (this.p && this.p.keyframes && this.p.getValueAtTime) {
                if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
                  v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate, 0);
                  v2 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate, 0);
                } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
                  v1 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / frameRate, 0);
                  v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate, 0);
                } else {
                  v1 = this.p.pv;
                  v2 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / frameRate, this.p.offsetTime);
                }
              } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                v1 = [];
                v2 = [];
                var px = this.px;
                var py = this.py;
                if (px._caching.lastFrame + px.offsetTime <= px.keyframes[0].t) {
                  v1[0] = px.getValueAtTime((px.keyframes[0].t + 0.01) / frameRate, 0);
                  v1[1] = py.getValueAtTime((py.keyframes[0].t + 0.01) / frameRate, 0);
                  v2[0] = px.getValueAtTime(px.keyframes[0].t / frameRate, 0);
                  v2[1] = py.getValueAtTime(py.keyframes[0].t / frameRate, 0);
                } else if (px._caching.lastFrame + px.offsetTime >= px.keyframes[px.keyframes.length - 1].t) {
                  v1[0] = px.getValueAtTime(px.keyframes[px.keyframes.length - 1].t / frameRate, 0);
                  v1[1] = py.getValueAtTime(py.keyframes[py.keyframes.length - 1].t / frameRate, 0);
                  v2[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t - 0.01) / frameRate, 0);
                  v2[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t - 0.01) / frameRate, 0);
                } else {
                  v1 = [px.pv, py.pv];
                  v2[0] = px.getValueAtTime((px._caching.lastFrame + px.offsetTime - 0.01) / frameRate, px.offsetTime);
                  v2[1] = py.getValueAtTime((py._caching.lastFrame + py.offsetTime - 0.01) / frameRate, py.offsetTime);
                }
              } else {
                v2 = defaultVector;
                v1 = v2;
              }
              this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
            }
            if (this.data.p && this.data.p.s) {
              if (this.data.p.z) {
                this.v.translate(this.px.v, this.py.v, -this.pz.v);
              } else {
                this.v.translate(this.px.v, this.py.v, 0);
              }
            } else {
              this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
          }
          this.frameId = this.elem.globalData.frameId;
        }
        function precalculateMatrix() {
          if (!this.a.k) {
            this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
            this.appliedTransformations = 1;
          } else {
            return;
          }
          if (!this.s.effectsSequence.length) {
            this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
            this.appliedTransformations = 2;
          } else {
            return;
          }
          if (this.sk) {
            if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
              this.pre.skewFromAxis(-this.sk.v, this.sa.v);
              this.appliedTransformations = 3;
            } else {
              return;
            }
          }
          if (this.r) {
            if (!this.r.effectsSequence.length) {
              this.pre.rotate(-this.r.v);
              this.appliedTransformations = 4;
            }
          } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
            this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
            this.appliedTransformations = 4;
          }
        }
        function autoOrient() {
        }
        function addDynamicProperty(prop) {
          this._addDynamicProperty(prop);
          this.elem.addDynamicProperty(prop);
          this._isDirty = true;
        }
        function TransformProperty(elem2, data2, container) {
          this.elem = elem2;
          this.frameId = -1;
          this.propType = "transform";
          this.data = data2;
          this.v = new Matrix();
          this.pre = new Matrix();
          this.appliedTransformations = 0;
          this.initDynamicPropertyContainer(container || elem2);
          if (data2.p && data2.p.s) {
            this.px = PropertyFactory.getProp(elem2, data2.p.x, 0, 0, this);
            this.py = PropertyFactory.getProp(elem2, data2.p.y, 0, 0, this);
            if (data2.p.z) {
              this.pz = PropertyFactory.getProp(elem2, data2.p.z, 0, 0, this);
            }
          } else {
            this.p = PropertyFactory.getProp(elem2, data2.p || {
              k: [0, 0, 0]
            }, 1, 0, this);
          }
          if (data2.rx) {
            this.rx = PropertyFactory.getProp(elem2, data2.rx, 0, degToRads, this);
            this.ry = PropertyFactory.getProp(elem2, data2.ry, 0, degToRads, this);
            this.rz = PropertyFactory.getProp(elem2, data2.rz, 0, degToRads, this);
            if (data2.or.k[0].ti) {
              var i;
              var len = data2.or.k.length;
              for (i = 0; i < len; i += 1) {
                data2.or.k[i].to = null;
                data2.or.k[i].ti = null;
              }
            }
            this.or = PropertyFactory.getProp(elem2, data2.or, 1, degToRads, this);
            this.or.sh = true;
          } else {
            this.r = PropertyFactory.getProp(elem2, data2.r || {
              k: 0
            }, 0, degToRads, this);
          }
          if (data2.sk) {
            this.sk = PropertyFactory.getProp(elem2, data2.sk, 0, degToRads, this);
            this.sa = PropertyFactory.getProp(elem2, data2.sa, 0, degToRads, this);
          }
          this.a = PropertyFactory.getProp(elem2, data2.a || {
            k: [0, 0, 0]
          }, 1, 0, this);
          this.s = PropertyFactory.getProp(elem2, data2.s || {
            k: [100, 100, 100]
          }, 1, 0.01, this);
          if (data2.o) {
            this.o = PropertyFactory.getProp(elem2, data2.o, 0, 0.01, elem2);
          } else {
            this.o = {
              _mdf: false,
              v: 1
            };
          }
          this._isDirty = true;
          if (!this.dynamicProperties.length) {
            this.getValue(true);
          }
        }
        TransformProperty.prototype = {
          applyToMatrix,
          getValue: processKeys,
          precalculateMatrix,
          autoOrient
        };
        extendPrototype([DynamicPropertyContainer], TransformProperty);
        TransformProperty.prototype.addDynamicProperty = addDynamicProperty;
        TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
        function getTransformProperty(elem2, data2, container) {
          return new TransformProperty(elem2, data2, container);
        }
        return {
          getTransformProperty
        };
      }();
      function RepeaterModifier() {
      }
      extendPrototype([ShapeModifier], RepeaterModifier);
      RepeaterModifier.prototype.initModifierProperties = function(elem2, data2) {
        this.getValue = this.processKeys;
        this.c = PropertyFactory.getProp(elem2, data2.c, 0, null, this);
        this.o = PropertyFactory.getProp(elem2, data2.o, 0, null, this);
        this.tr = TransformPropertyFactory.getTransformProperty(elem2, data2.tr, this);
        this.so = PropertyFactory.getProp(elem2, data2.tr.so, 0, 0.01, this);
        this.eo = PropertyFactory.getProp(elem2, data2.tr.eo, 0, 0.01, this);
        this.data = data2;
        if (!this.dynamicProperties.length) {
          this.getValue(true);
        }
        this._isAnimated = !!this.dynamicProperties.length;
        this.pMatrix = new Matrix();
        this.rMatrix = new Matrix();
        this.sMatrix = new Matrix();
        this.tMatrix = new Matrix();
        this.matrix = new Matrix();
      };
      RepeaterModifier.prototype.applyTransforms = function(pMatrix, rMatrix, sMatrix, transform2, perc, inv) {
        var dir = inv ? -1 : 1;
        var scaleX = transform2.s.v[0] + (1 - transform2.s.v[0]) * (1 - perc);
        var scaleY = transform2.s.v[1] + (1 - transform2.s.v[1]) * (1 - perc);
        pMatrix.translate(transform2.p.v[0] * dir * perc, transform2.p.v[1] * dir * perc, transform2.p.v[2]);
        rMatrix.translate(-transform2.a.v[0], -transform2.a.v[1], transform2.a.v[2]);
        rMatrix.rotate(-transform2.r.v * dir * perc);
        rMatrix.translate(transform2.a.v[0], transform2.a.v[1], transform2.a.v[2]);
        sMatrix.translate(-transform2.a.v[0], -transform2.a.v[1], transform2.a.v[2]);
        sMatrix.scale(inv ? 1 / scaleX : scaleX, inv ? 1 / scaleY : scaleY);
        sMatrix.translate(transform2.a.v[0], transform2.a.v[1], transform2.a.v[2]);
      };
      RepeaterModifier.prototype.init = function(elem2, arr, pos, elemsData) {
        this.elem = elem2;
        this.arr = arr;
        this.pos = pos;
        this.elemsData = elemsData;
        this._currentCopies = 0;
        this._elements = [];
        this._groups = [];
        this.frameId = -1;
        this.initDynamicPropertyContainer(elem2);
        this.initModifierProperties(elem2, arr[pos]);
        while (pos > 0) {
          pos -= 1;
          this._elements.unshift(arr[pos]);
        }
        if (this.dynamicProperties.length) {
          this.k = true;
        } else {
          this.getValue(true);
        }
      };
      RepeaterModifier.prototype.resetElements = function(elements) {
        var i;
        var len = elements.length;
        for (i = 0; i < len; i += 1) {
          elements[i]._processed = false;
          if (elements[i].ty === "gr") {
            this.resetElements(elements[i].it);
          }
        }
      };
      RepeaterModifier.prototype.cloneElements = function(elements) {
        var newElements = JSON.parse(JSON.stringify(elements));
        this.resetElements(newElements);
        return newElements;
      };
      RepeaterModifier.prototype.changeGroupRender = function(elements, renderFlag) {
        var i;
        var len = elements.length;
        for (i = 0; i < len; i += 1) {
          elements[i]._render = renderFlag;
          if (elements[i].ty === "gr") {
            this.changeGroupRender(elements[i].it, renderFlag);
          }
        }
      };
      RepeaterModifier.prototype.processShapes = function(_isFirstFrame) {
        var items;
        var itemsTransform;
        var i;
        var dir;
        var cont;
        var hasReloaded = false;
        if (this._mdf || _isFirstFrame) {
          var copies = Math.ceil(this.c.v);
          if (this._groups.length < copies) {
            while (this._groups.length < copies) {
              var group = {
                it: this.cloneElements(this._elements),
                ty: "gr"
              };
              group.it.push({
                a: {
                  a: 0,
                  ix: 1,
                  k: [0, 0]
                },
                nm: "Transform",
                o: {
                  a: 0,
                  ix: 7,
                  k: 100
                },
                p: {
                  a: 0,
                  ix: 2,
                  k: [0, 0]
                },
                r: {
                  a: 1,
                  ix: 6,
                  k: [{
                    s: 0,
                    e: 0,
                    t: 0
                  }, {
                    s: 0,
                    e: 0,
                    t: 1
                  }]
                },
                s: {
                  a: 0,
                  ix: 3,
                  k: [100, 100]
                },
                sa: {
                  a: 0,
                  ix: 5,
                  k: 0
                },
                sk: {
                  a: 0,
                  ix: 4,
                  k: 0
                },
                ty: "tr"
              });
              this.arr.splice(0, 0, group);
              this._groups.splice(0, 0, group);
              this._currentCopies += 1;
            }
            this.elem.reloadShapes();
            hasReloaded = true;
          }
          cont = 0;
          var renderFlag;
          for (i = 0; i <= this._groups.length - 1; i += 1) {
            renderFlag = cont < copies;
            this._groups[i]._render = renderFlag;
            this.changeGroupRender(this._groups[i].it, renderFlag);
            if (!renderFlag) {
              var elems = this.elemsData[i].it;
              var transformData = elems[elems.length - 1];
              if (transformData.transform.op.v !== 0) {
                transformData.transform.op._mdf = true;
                transformData.transform.op.v = 0;
              } else {
                transformData.transform.op._mdf = false;
              }
            }
            cont += 1;
          }
          this._currentCopies = copies;
          var offset = this.o.v;
          var offsetModulo = offset % 1;
          var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
          var pProps = this.pMatrix.props;
          var rProps = this.rMatrix.props;
          var sProps = this.sMatrix.props;
          this.pMatrix.reset();
          this.rMatrix.reset();
          this.sMatrix.reset();
          this.tMatrix.reset();
          this.matrix.reset();
          var iteration = 0;
          if (offset > 0) {
            while (iteration < roundOffset) {
              this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
              iteration += 1;
            }
            if (offsetModulo) {
              this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
              iteration += offsetModulo;
            }
          } else if (offset < 0) {
            while (iteration > roundOffset) {
              this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
              iteration -= 1;
            }
            if (offsetModulo) {
              this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -offsetModulo, true);
              iteration -= offsetModulo;
            }
          }
          i = this.data.m === 1 ? 0 : this._currentCopies - 1;
          dir = this.data.m === 1 ? 1 : -1;
          cont = this._currentCopies;
          var j;
          var jLen;
          while (cont) {
            items = this.elemsData[i].it;
            itemsTransform = items[items.length - 1].transform.mProps.v.props;
            jLen = itemsTransform.length;
            items[items.length - 1].transform.mProps._mdf = true;
            items[items.length - 1].transform.op._mdf = true;
            items[items.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1));
            if (iteration !== 0) {
              if (i !== 0 && dir === 1 || i !== this._currentCopies - 1 && dir === -1) {
                this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
              }
              this.matrix.transform(rProps[0], rProps[1], rProps[2], rProps[3], rProps[4], rProps[5], rProps[6], rProps[7], rProps[8], rProps[9], rProps[10], rProps[11], rProps[12], rProps[13], rProps[14], rProps[15]);
              this.matrix.transform(sProps[0], sProps[1], sProps[2], sProps[3], sProps[4], sProps[5], sProps[6], sProps[7], sProps[8], sProps[9], sProps[10], sProps[11], sProps[12], sProps[13], sProps[14], sProps[15]);
              this.matrix.transform(pProps[0], pProps[1], pProps[2], pProps[3], pProps[4], pProps[5], pProps[6], pProps[7], pProps[8], pProps[9], pProps[10], pProps[11], pProps[12], pProps[13], pProps[14], pProps[15]);
              for (j = 0; j < jLen; j += 1) {
                itemsTransform[j] = this.matrix.props[j];
              }
              this.matrix.reset();
            } else {
              this.matrix.reset();
              for (j = 0; j < jLen; j += 1) {
                itemsTransform[j] = this.matrix.props[j];
              }
            }
            iteration += 1;
            cont -= 1;
            i += dir;
          }
        } else {
          cont = this._currentCopies;
          i = 0;
          dir = 1;
          while (cont) {
            items = this.elemsData[i].it;
            itemsTransform = items[items.length - 1].transform.mProps.v.props;
            items[items.length - 1].transform.mProps._mdf = false;
            items[items.length - 1].transform.op._mdf = false;
            cont -= 1;
            i += dir;
          }
        }
        return hasReloaded;
      };
      RepeaterModifier.prototype.addShape = function() {
      };
      function RoundCornersModifier() {
      }
      extendPrototype([ShapeModifier], RoundCornersModifier);
      RoundCornersModifier.prototype.initModifierProperties = function(elem2, data2) {
        this.getValue = this.processKeys;
        this.rd = PropertyFactory.getProp(elem2, data2.r, 0, null, this);
        this._isAnimated = !!this.rd.effectsSequence.length;
      };
      RoundCornersModifier.prototype.processPath = function(path, round) {
        var clonedPath = shapePool.newElement();
        clonedPath.c = path.c;
        var i;
        var len = path._length;
        var currentV;
        var currentI;
        var currentO;
        var closerV;
        var distance;
        var newPosPerc;
        var index2 = 0;
        var vX;
        var vY;
        var oX;
        var oY;
        var iX;
        var iY;
        for (i = 0; i < len; i += 1) {
          currentV = path.v[i];
          currentO = path.o[i];
          currentI = path.i[i];
          if (currentV[0] === currentO[0] && currentV[1] === currentO[1] && currentV[0] === currentI[0] && currentV[1] === currentI[1]) {
            if ((i === 0 || i === len - 1) && !path.c) {
              clonedPath.setTripleAt(currentV[0], currentV[1], currentO[0], currentO[1], currentI[0], currentI[1], index2);
              index2 += 1;
            } else {
              if (i === 0) {
                closerV = path.v[len - 1];
              } else {
                closerV = path.v[i - 1];
              }
              distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
              newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
              iX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
              vX = iX;
              iY = currentV[1] - (currentV[1] - closerV[1]) * newPosPerc;
              vY = iY;
              oX = vX - (vX - currentV[0]) * roundCorner;
              oY = vY - (vY - currentV[1]) * roundCorner;
              clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index2);
              index2 += 1;
              if (i === len - 1) {
                closerV = path.v[0];
              } else {
                closerV = path.v[i + 1];
              }
              distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
              newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
              oX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
              vX = oX;
              oY = currentV[1] + (closerV[1] - currentV[1]) * newPosPerc;
              vY = oY;
              iX = vX - (vX - currentV[0]) * roundCorner;
              iY = vY - (vY - currentV[1]) * roundCorner;
              clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index2);
              index2 += 1;
            }
          } else {
            clonedPath.setTripleAt(path.v[i][0], path.v[i][1], path.o[i][0], path.o[i][1], path.i[i][0], path.i[i][1], index2);
            index2 += 1;
          }
        }
        return clonedPath;
      };
      RoundCornersModifier.prototype.processShapes = function(_isFirstFrame) {
        var shapePaths;
        var i;
        var len = this.shapes.length;
        var j;
        var jLen;
        var rd = this.rd.v;
        if (rd !== 0) {
          var shapeData;
          var localShapeCollection;
          for (i = 0; i < len; i += 1) {
            shapeData = this.shapes[i];
            localShapeCollection = shapeData.localShapeCollection;
            if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
              localShapeCollection.releaseShapes();
              shapeData.shape._mdf = true;
              shapePaths = shapeData.shape.paths.shapes;
              jLen = shapeData.shape.paths._length;
              for (j = 0; j < jLen; j += 1) {
                localShapeCollection.addShape(this.processPath(shapePaths[j], rd));
              }
            }
            shapeData.shape.paths = shapeData.localShapeCollection;
          }
        }
        if (!this.dynamicProperties.length) {
          this._mdf = false;
        }
      };
      function getFontProperties(fontData) {
        var styles = fontData.fStyle ? fontData.fStyle.split(" ") : [];
        var fWeight = "normal";
        var fStyle = "normal";
        var len = styles.length;
        var styleName;
        for (var i = 0; i < len; i += 1) {
          styleName = styles[i].toLowerCase();
          switch (styleName) {
            case "italic":
              fStyle = "italic";
              break;
            case "bold":
              fWeight = "700";
              break;
            case "black":
              fWeight = "900";
              break;
            case "medium":
              fWeight = "500";
              break;
            case "regular":
            case "normal":
              fWeight = "400";
              break;
            case "light":
            case "thin":
              fWeight = "200";
              break;
            default:
              break;
          }
        }
        return {
          style: fStyle,
          weight: fontData.fWeight || fWeight
        };
      }
      var FontManager = function() {
        var maxWaitingTime = 5e3;
        var emptyChar = {
          w: 0,
          size: 0,
          shapes: [],
          data: {
            shapes: []
          }
        };
        var combinedCharacters = [];
        combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
        var surrogateModifiers = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
        var zeroWidthJoiner = [65039, 8205];
        function trimFontOptions(font) {
          var familyArray = font.split(",");
          var i;
          var len = familyArray.length;
          var enabledFamilies = [];
          for (i = 0; i < len; i += 1) {
            if (familyArray[i] !== "sans-serif" && familyArray[i] !== "monospace") {
              enabledFamilies.push(familyArray[i]);
            }
          }
          return enabledFamilies.join(",");
        }
        function setUpNode(font, family) {
          var parentNode = createTag("span");
          parentNode.setAttribute("aria-hidden", true);
          parentNode.style.fontFamily = family;
          var node = createTag("span");
          node.innerText = "giItT1WQy@!-/#";
          parentNode.style.position = "absolute";
          parentNode.style.left = "-10000px";
          parentNode.style.top = "-10000px";
          parentNode.style.fontSize = "300px";
          parentNode.style.fontVariant = "normal";
          parentNode.style.fontStyle = "normal";
          parentNode.style.fontWeight = "normal";
          parentNode.style.letterSpacing = "0";
          parentNode.appendChild(node);
          document.body.appendChild(parentNode);
          var width2 = node.offsetWidth;
          node.style.fontFamily = trimFontOptions(font) + ", " + family;
          return {
            node,
            w: width2,
            parent: parentNode
          };
        }
        function checkLoadedFonts() {
          var i;
          var len = this.fonts.length;
          var node;
          var w2;
          var loadedCount = len;
          for (i = 0; i < len; i += 1) {
            if (this.fonts[i].loaded) {
              loadedCount -= 1;
            } else if (this.fonts[i].fOrigin === "n" || this.fonts[i].origin === 0) {
              this.fonts[i].loaded = true;
            } else {
              node = this.fonts[i].monoCase.node;
              w2 = this.fonts[i].monoCase.w;
              if (node.offsetWidth !== w2) {
                loadedCount -= 1;
                this.fonts[i].loaded = true;
              } else {
                node = this.fonts[i].sansCase.node;
                w2 = this.fonts[i].sansCase.w;
                if (node.offsetWidth !== w2) {
                  loadedCount -= 1;
                  this.fonts[i].loaded = true;
                }
              }
              if (this.fonts[i].loaded) {
                this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
                this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
              }
            }
          }
          if (loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime) {
            setTimeout(this.checkLoadedFontsBinded, 20);
          } else {
            setTimeout(this.setIsLoadedBinded, 10);
          }
        }
        function createHelper(fontData, def) {
          var engine = document.body && def ? "svg" : "canvas";
          var helper;
          var fontProps = getFontProperties(fontData);
          if (engine === "svg") {
            var tHelper = createNS("text");
            tHelper.style.fontSize = "100px";
            tHelper.setAttribute("font-family", fontData.fFamily);
            tHelper.setAttribute("font-style", fontProps.style);
            tHelper.setAttribute("font-weight", fontProps.weight);
            tHelper.textContent = "1";
            if (fontData.fClass) {
              tHelper.style.fontFamily = "inherit";
              tHelper.setAttribute("class", fontData.fClass);
            } else {
              tHelper.style.fontFamily = fontData.fFamily;
            }
            def.appendChild(tHelper);
            helper = tHelper;
          } else {
            var tCanvasHelper = new OffscreenCanvas(500, 500).getContext("2d");
            tCanvasHelper.font = fontProps.style + " " + fontProps.weight + " 100px " + fontData.fFamily;
            helper = tCanvasHelper;
          }
          function measure(text2) {
            if (engine === "svg") {
              helper.textContent = text2;
              return helper.getComputedTextLength();
            }
            return helper.measureText(text2).width;
          }
          return {
            measureText: measure
          };
        }
        function addFonts(fontData, defs) {
          if (!fontData) {
            this.isLoaded = true;
            return;
          }
          if (this.chars) {
            this.isLoaded = true;
            this.fonts = fontData.list;
            return;
          }
          if (!document.body) {
            this.isLoaded = true;
            fontData.list.forEach(function(data2) {
              data2.helper = createHelper(data2);
              data2.cache = {};
            });
            this.fonts = fontData.list;
            return;
          }
          var fontArr = fontData.list;
          var i;
          var len = fontArr.length;
          var _pendingFonts = len;
          for (i = 0; i < len; i += 1) {
            var shouldLoadFont = true;
            var loadedSelector;
            var j;
            fontArr[i].loaded = false;
            fontArr[i].monoCase = setUpNode(fontArr[i].fFamily, "monospace");
            fontArr[i].sansCase = setUpNode(fontArr[i].fFamily, "sans-serif");
            if (!fontArr[i].fPath) {
              fontArr[i].loaded = true;
              _pendingFonts -= 1;
            } else if (fontArr[i].fOrigin === "p" || fontArr[i].origin === 3) {
              loadedSelector = document.querySelectorAll('style[f-forigin="p"][f-family="' + fontArr[i].fFamily + '"], style[f-origin="3"][f-family="' + fontArr[i].fFamily + '"]');
              if (loadedSelector.length > 0) {
                shouldLoadFont = false;
              }
              if (shouldLoadFont) {
                var s = createTag("style");
                s.setAttribute("f-forigin", fontArr[i].fOrigin);
                s.setAttribute("f-origin", fontArr[i].origin);
                s.setAttribute("f-family", fontArr[i].fFamily);
                s.type = "text/css";
                s.innerText = "@font-face {font-family: " + fontArr[i].fFamily + "; font-style: normal; src: url('" + fontArr[i].fPath + "');}";
                defs.appendChild(s);
              }
            } else if (fontArr[i].fOrigin === "g" || fontArr[i].origin === 1) {
              loadedSelector = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');
              for (j = 0; j < loadedSelector.length; j += 1) {
                if (loadedSelector[j].href.indexOf(fontArr[i].fPath) !== -1) {
                  shouldLoadFont = false;
                }
              }
              if (shouldLoadFont) {
                var l = createTag("link");
                l.setAttribute("f-forigin", fontArr[i].fOrigin);
                l.setAttribute("f-origin", fontArr[i].origin);
                l.type = "text/css";
                l.rel = "stylesheet";
                l.href = fontArr[i].fPath;
                document.body.appendChild(l);
              }
            } else if (fontArr[i].fOrigin === "t" || fontArr[i].origin === 2) {
              loadedSelector = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');
              for (j = 0; j < loadedSelector.length; j += 1) {
                if (fontArr[i].fPath === loadedSelector[j].src) {
                  shouldLoadFont = false;
                }
              }
              if (shouldLoadFont) {
                var sc = createTag("link");
                sc.setAttribute("f-forigin", fontArr[i].fOrigin);
                sc.setAttribute("f-origin", fontArr[i].origin);
                sc.setAttribute("rel", "stylesheet");
                sc.setAttribute("href", fontArr[i].fPath);
                defs.appendChild(sc);
              }
            }
            fontArr[i].helper = createHelper(fontArr[i], defs);
            fontArr[i].cache = {};
            this.fonts.push(fontArr[i]);
          }
          if (_pendingFonts === 0) {
            this.isLoaded = true;
          } else {
            setTimeout(this.checkLoadedFonts.bind(this), 100);
          }
        }
        function addChars(chars) {
          if (!chars) {
            return;
          }
          if (!this.chars) {
            this.chars = [];
          }
          var i;
          var len = chars.length;
          var j;
          var jLen = this.chars.length;
          var found;
          for (i = 0; i < len; i += 1) {
            j = 0;
            found = false;
            while (j < jLen) {
              if (this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch) {
                found = true;
              }
              j += 1;
            }
            if (!found) {
              this.chars.push(chars[i]);
              jLen += 1;
            }
          }
        }
        function getCharData(_char, style, font) {
          var i = 0;
          var len = this.chars.length;
          while (i < len) {
            if (this.chars[i].ch === _char && this.chars[i].style === style && this.chars[i].fFamily === font) {
              return this.chars[i];
            }
            i += 1;
          }
          if ((typeof _char === "string" && _char.charCodeAt(0) !== 13 || !_char) && console && console.warn && !this._warned) {
            this._warned = true;
            console.warn("Missing character from exported characters list: ", _char, style, font);
          }
          return emptyChar;
        }
        function measureText(_char2, fontName, size) {
          var fontData = this.getFontByName(fontName);
          var index2 = _char2.charCodeAt(0);
          if (!fontData.cache[index2 + 1]) {
            var tHelper = fontData.helper;
            if (_char2 === " ") {
              var doubleSize = tHelper.measureText("|" + _char2 + "|");
              var singleSize = tHelper.measureText("||");
              fontData.cache[index2 + 1] = (doubleSize - singleSize) / 100;
            } else {
              fontData.cache[index2 + 1] = tHelper.measureText(_char2) / 100;
            }
          }
          return fontData.cache[index2 + 1] * size;
        }
        function getFontByName(name2) {
          var i = 0;
          var len = this.fonts.length;
          while (i < len) {
            if (this.fonts[i].fName === name2) {
              return this.fonts[i];
            }
            i += 1;
          }
          return this.fonts[0];
        }
        function isModifier(firstCharCode, secondCharCode) {
          var sum2 = firstCharCode.toString(16) + secondCharCode.toString(16);
          return surrogateModifiers.indexOf(sum2) !== -1;
        }
        function isZeroWidthJoiner(firstCharCode, secondCharCode) {
          if (!secondCharCode) {
            return firstCharCode === zeroWidthJoiner[1];
          }
          return firstCharCode === zeroWidthJoiner[0] && secondCharCode === zeroWidthJoiner[1];
        }
        function isCombinedCharacter(_char3) {
          return combinedCharacters.indexOf(_char3) !== -1;
        }
        function setIsLoaded() {
          this.isLoaded = true;
        }
        var Font = function Font2() {
          this.fonts = [];
          this.chars = null;
          this.typekitLoaded = 0;
          this.isLoaded = false;
          this._warned = false;
          this.initTime = Date.now();
          this.setIsLoadedBinded = this.setIsLoaded.bind(this);
          this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
        };
        Font.isModifier = isModifier;
        Font.isZeroWidthJoiner = isZeroWidthJoiner;
        Font.isCombinedCharacter = isCombinedCharacter;
        var fontPrototype = {
          addChars,
          addFonts,
          getCharData,
          getFontByName,
          measureText,
          checkLoadedFonts,
          setIsLoaded
        };
        Font.prototype = fontPrototype;
        return Font;
      }();
      function RenderableElement() {
      }
      RenderableElement.prototype = {
        initRenderable: function initRenderable() {
          this.isInRange = false;
          this.hidden = false;
          this.isTransparent = false;
          this.renderableComponents = [];
        },
        addRenderableComponent: function addRenderableComponent(component) {
          if (this.renderableComponents.indexOf(component) === -1) {
            this.renderableComponents.push(component);
          }
        },
        removeRenderableComponent: function removeRenderableComponent(component) {
          if (this.renderableComponents.indexOf(component) !== -1) {
            this.renderableComponents.splice(this.renderableComponents.indexOf(component), 1);
          }
        },
        prepareRenderableFrame: function prepareRenderableFrame(num) {
          this.checkLayerLimits(num);
        },
        checkTransparency: function checkTransparency() {
          if (this.finalTransform.mProp.o.v <= 0) {
            if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
              this.isTransparent = true;
              this.hide();
            }
          } else if (this.isTransparent) {
            this.isTransparent = false;
            this.show();
          }
        },
        checkLayerLimits: function checkLayerLimits(num) {
          if (this.data.ip - this.data.st <= num && this.data.op - this.data.st > num) {
            if (this.isInRange !== true) {
              this.globalData._mdf = true;
              this._mdf = true;
              this.isInRange = true;
              this.show();
            }
          } else if (this.isInRange !== false) {
            this.globalData._mdf = true;
            this.isInRange = false;
            this.hide();
          }
        },
        renderRenderable: function renderRenderable() {
          var i;
          var len = this.renderableComponents.length;
          for (i = 0; i < len; i += 1) {
            this.renderableComponents[i].renderFrame(this._isFirstFrame);
          }
        },
        sourceRectAtTime: function sourceRectAtTime2() {
          return {
            top: 0,
            left: 0,
            width: 100,
            height: 100
          };
        },
        getLayerSize: function getLayerSize() {
          if (this.data.ty === 5) {
            return {
              w: this.data.textData.width,
              h: this.data.textData.height
            };
          }
          return {
            w: this.data.width,
            h: this.data.height
          };
        }
      };
      var MaskManagerInterface = function() {
        function MaskInterface(mask2, data2) {
          this._mask = mask2;
          this._data = data2;
        }
        Object.defineProperty(MaskInterface.prototype, "maskPath", {
          get: function get() {
            if (this._mask.prop.k) {
              this._mask.prop.getValue();
            }
            return this._mask.prop;
          }
        });
        Object.defineProperty(MaskInterface.prototype, "maskOpacity", {
          get: function get() {
            if (this._mask.op.k) {
              this._mask.op.getValue();
            }
            return this._mask.op.v * 100;
          }
        });
        var MaskManager = function MaskManager2(maskManager) {
          var _masksInterfaces = createSizedArray(maskManager.viewData.length);
          var i;
          var len = maskManager.viewData.length;
          for (i = 0; i < len; i += 1) {
            _masksInterfaces[i] = new MaskInterface(maskManager.viewData[i], maskManager.masksProperties[i]);
          }
          var maskFunction = function maskFunction2(name2) {
            i = 0;
            while (i < len) {
              if (maskManager.masksProperties[i].nm === name2) {
                return _masksInterfaces[i];
              }
              i += 1;
            }
            return null;
          };
          return maskFunction;
        };
        return MaskManager;
      }();
      var ExpressionPropertyInterface = function() {
        var defaultUnidimensionalValue = {
          pv: 0,
          v: 0,
          mult: 1
        };
        var defaultMultidimensionalValue = {
          pv: [0, 0, 0],
          v: [0, 0, 0],
          mult: 1
        };
        function completeProperty(expressionValue, property2, type) {
          Object.defineProperty(expressionValue, "velocity", {
            get: function get() {
              return property2.getVelocityAtTime(property2.comp.currentFrame);
            }
          });
          expressionValue.numKeys = property2.keyframes ? property2.keyframes.length : 0;
          expressionValue.key = function(pos) {
            if (!expressionValue.numKeys) {
              return 0;
            }
            var value2 = "";
            if ("s" in property2.keyframes[pos - 1]) {
              value2 = property2.keyframes[pos - 1].s;
            } else if ("e" in property2.keyframes[pos - 2]) {
              value2 = property2.keyframes[pos - 2].e;
            } else {
              value2 = property2.keyframes[pos - 2].s;
            }
            var valueProp = type === "unidimensional" ? new Number(value2) : Object.assign({}, value2);
            valueProp.time = property2.keyframes[pos - 1].t / property2.elem.comp.globalData.frameRate;
            valueProp.value = type === "unidimensional" ? value2[0] : value2;
            return valueProp;
          };
          expressionValue.valueAtTime = property2.getValueAtTime;
          expressionValue.speedAtTime = property2.getSpeedAtTime;
          expressionValue.velocityAtTime = property2.getVelocityAtTime;
          expressionValue.propertyGroup = property2.propertyGroup;
        }
        function UnidimensionalPropertyInterface(property2) {
          if (!property2 || !("pv" in property2)) {
            property2 = defaultUnidimensionalValue;
          }
          var mult = 1 / property2.mult;
          var val2 = property2.pv * mult;
          var expressionValue = new Number(val2);
          expressionValue.value = val2;
          completeProperty(expressionValue, property2, "unidimensional");
          return function() {
            if (property2.k) {
              property2.getValue();
            }
            val2 = property2.v * mult;
            if (expressionValue.value !== val2) {
              expressionValue = new Number(val2);
              expressionValue.value = val2;
              completeProperty(expressionValue, property2, "unidimensional");
            }
            return expressionValue;
          };
        }
        function MultidimensionalPropertyInterface(property2) {
          if (!property2 || !("pv" in property2)) {
            property2 = defaultMultidimensionalValue;
          }
          var mult = 1 / property2.mult;
          var len = property2.data && property2.data.l || property2.pv.length;
          var expressionValue = createTypedArray("float32", len);
          var arrValue = createTypedArray("float32", len);
          expressionValue.value = arrValue;
          completeProperty(expressionValue, property2, "multidimensional");
          return function() {
            if (property2.k) {
              property2.getValue();
            }
            for (var i = 0; i < len; i += 1) {
              arrValue[i] = property2.v[i] * mult;
              expressionValue[i] = arrValue[i];
            }
            return expressionValue;
          };
        }
        function defaultGetter() {
          return defaultUnidimensionalValue;
        }
        return function(property2) {
          if (!property2) {
            return defaultGetter;
          }
          if (property2.propType === "unidimensional") {
            return UnidimensionalPropertyInterface(property2);
          }
          return MultidimensionalPropertyInterface(property2);
        };
      }();
      var TransformExpressionInterface = function() {
        return function(transform2) {
          function _thisFunction(name2) {
            switch (name2) {
              case "scale":
              case "Scale":
              case "ADBE Scale":
              case 6:
                return _thisFunction.scale;
              case "rotation":
              case "Rotation":
              case "ADBE Rotation":
              case "ADBE Rotate Z":
              case 10:
                return _thisFunction.rotation;
              case "ADBE Rotate X":
                return _thisFunction.xRotation;
              case "ADBE Rotate Y":
                return _thisFunction.yRotation;
              case "position":
              case "Position":
              case "ADBE Position":
              case 2:
                return _thisFunction.position;
              case "ADBE Position_0":
                return _thisFunction.xPosition;
              case "ADBE Position_1":
                return _thisFunction.yPosition;
              case "ADBE Position_2":
                return _thisFunction.zPosition;
              case "anchorPoint":
              case "AnchorPoint":
              case "Anchor Point":
              case "ADBE AnchorPoint":
              case 1:
                return _thisFunction.anchorPoint;
              case "opacity":
              case "Opacity":
              case 11:
                return _thisFunction.opacity;
              default:
                return null;
            }
          }
          Object.defineProperty(_thisFunction, "rotation", {
            get: ExpressionPropertyInterface(transform2.r || transform2.rz)
          });
          Object.defineProperty(_thisFunction, "zRotation", {
            get: ExpressionPropertyInterface(transform2.rz || transform2.r)
          });
          Object.defineProperty(_thisFunction, "xRotation", {
            get: ExpressionPropertyInterface(transform2.rx)
          });
          Object.defineProperty(_thisFunction, "yRotation", {
            get: ExpressionPropertyInterface(transform2.ry)
          });
          Object.defineProperty(_thisFunction, "scale", {
            get: ExpressionPropertyInterface(transform2.s)
          });
          var _px;
          var _py;
          var _pz;
          var _transformFactory;
          if (transform2.p) {
            _transformFactory = ExpressionPropertyInterface(transform2.p);
          } else {
            _px = ExpressionPropertyInterface(transform2.px);
            _py = ExpressionPropertyInterface(transform2.py);
            if (transform2.pz) {
              _pz = ExpressionPropertyInterface(transform2.pz);
            }
          }
          Object.defineProperty(_thisFunction, "position", {
            get: function get() {
              if (transform2.p) {
                return _transformFactory();
              }
              return [_px(), _py(), _pz ? _pz() : 0];
            }
          });
          Object.defineProperty(_thisFunction, "xPosition", {
            get: ExpressionPropertyInterface(transform2.px)
          });
          Object.defineProperty(_thisFunction, "yPosition", {
            get: ExpressionPropertyInterface(transform2.py)
          });
          Object.defineProperty(_thisFunction, "zPosition", {
            get: ExpressionPropertyInterface(transform2.pz)
          });
          Object.defineProperty(_thisFunction, "anchorPoint", {
            get: ExpressionPropertyInterface(transform2.a)
          });
          Object.defineProperty(_thisFunction, "opacity", {
            get: ExpressionPropertyInterface(transform2.o)
          });
          Object.defineProperty(_thisFunction, "skew", {
            get: ExpressionPropertyInterface(transform2.sk)
          });
          Object.defineProperty(_thisFunction, "skewAxis", {
            get: ExpressionPropertyInterface(transform2.sa)
          });
          Object.defineProperty(_thisFunction, "orientation", {
            get: ExpressionPropertyInterface(transform2.or)
          });
          return _thisFunction;
        };
      }();
      var LayerExpressionInterface = function() {
        function getMatrix(time2) {
          var toWorldMat = new Matrix();
          if (time2 !== void 0) {
            var propMatrix = this._elem.finalTransform.mProp.getValueAtTime(time2);
            propMatrix.clone(toWorldMat);
          } else {
            var transformMat = this._elem.finalTransform.mProp;
            transformMat.applyToMatrix(toWorldMat);
          }
          return toWorldMat;
        }
        function toWorldVec(arr, time2) {
          var toWorldMat = this.getMatrix(time2);
          toWorldMat.props[12] = 0;
          toWorldMat.props[13] = 0;
          toWorldMat.props[14] = 0;
          return this.applyPoint(toWorldMat, arr);
        }
        function toWorld2(arr, time2) {
          var toWorldMat = this.getMatrix(time2);
          return this.applyPoint(toWorldMat, arr);
        }
        function fromWorldVec(arr, time2) {
          var toWorldMat = this.getMatrix(time2);
          toWorldMat.props[12] = 0;
          toWorldMat.props[13] = 0;
          toWorldMat.props[14] = 0;
          return this.invertPoint(toWorldMat, arr);
        }
        function fromWorld2(arr, time2) {
          var toWorldMat = this.getMatrix(time2);
          return this.invertPoint(toWorldMat, arr);
        }
        function applyPoint(matrix, arr) {
          if (this._elem.hierarchy && this._elem.hierarchy.length) {
            var i;
            var len = this._elem.hierarchy.length;
            for (i = 0; i < len; i += 1) {
              this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
            }
          }
          return matrix.applyToPointArray(arr[0], arr[1], arr[2] || 0);
        }
        function invertPoint(matrix, arr) {
          if (this._elem.hierarchy && this._elem.hierarchy.length) {
            var i;
            var len = this._elem.hierarchy.length;
            for (i = 0; i < len; i += 1) {
              this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
            }
          }
          return matrix.inversePoint(arr);
        }
        function fromComp2(arr) {
          var toWorldMat = new Matrix();
          toWorldMat.reset();
          this._elem.finalTransform.mProp.applyToMatrix(toWorldMat);
          if (this._elem.hierarchy && this._elem.hierarchy.length) {
            var i;
            var len = this._elem.hierarchy.length;
            for (i = 0; i < len; i += 1) {
              this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
            }
            return toWorldMat.inversePoint(arr);
          }
          return toWorldMat.inversePoint(arr);
        }
        function sampleImage() {
          return [1, 1, 1, 1];
        }
        return function(elem2) {
          var transformInterface;
          function _registerMaskInterface(maskManager) {
            _thisLayerFunction.mask = new MaskManagerInterface(maskManager, elem2);
          }
          function _registerEffectsInterface(effects) {
            _thisLayerFunction.effect = effects;
          }
          function _thisLayerFunction(name2) {
            switch (name2) {
              case "ADBE Root Vectors Group":
              case "Contents":
              case 2:
                return _thisLayerFunction.shapeInterface;
              case 1:
              case 6:
              case "Transform":
              case "transform":
              case "ADBE Transform Group":
                return transformInterface;
              case 4:
              case "ADBE Effect Parade":
              case "effects":
              case "Effects":
                return _thisLayerFunction.effect;
              case "ADBE Text Properties":
                return _thisLayerFunction.textInterface;
              default:
                return null;
            }
          }
          _thisLayerFunction.getMatrix = getMatrix;
          _thisLayerFunction.invertPoint = invertPoint;
          _thisLayerFunction.applyPoint = applyPoint;
          _thisLayerFunction.toWorld = toWorld2;
          _thisLayerFunction.toWorldVec = toWorldVec;
          _thisLayerFunction.fromWorld = fromWorld2;
          _thisLayerFunction.fromWorldVec = fromWorldVec;
          _thisLayerFunction.toComp = toWorld2;
          _thisLayerFunction.fromComp = fromComp2;
          _thisLayerFunction.sampleImage = sampleImage;
          _thisLayerFunction.sourceRectAtTime = elem2.sourceRectAtTime.bind(elem2);
          _thisLayerFunction._elem = elem2;
          transformInterface = TransformExpressionInterface(elem2.finalTransform.mProp);
          var anchorPointDescriptor = getDescriptor(transformInterface, "anchorPoint");
          Object.defineProperties(_thisLayerFunction, {
            hasParent: {
              get: function get() {
                return elem2.hierarchy.length;
              }
            },
            parent: {
              get: function get() {
                return elem2.hierarchy[0].layerInterface;
              }
            },
            rotation: getDescriptor(transformInterface, "rotation"),
            scale: getDescriptor(transformInterface, "scale"),
            position: getDescriptor(transformInterface, "position"),
            opacity: getDescriptor(transformInterface, "opacity"),
            anchorPoint: anchorPointDescriptor,
            anchor_point: anchorPointDescriptor,
            transform: {
              get: function get() {
                return transformInterface;
              }
            },
            active: {
              get: function get() {
                return elem2.isInRange;
              }
            }
          });
          _thisLayerFunction.startTime = elem2.data.st;
          _thisLayerFunction.index = elem2.data.ind;
          _thisLayerFunction.source = elem2.data.refId;
          _thisLayerFunction.height = elem2.data.ty === 0 ? elem2.data.h : 100;
          _thisLayerFunction.width = elem2.data.ty === 0 ? elem2.data.w : 100;
          _thisLayerFunction.inPoint = elem2.data.ip / elem2.comp.globalData.frameRate;
          _thisLayerFunction.outPoint = elem2.data.op / elem2.comp.globalData.frameRate;
          _thisLayerFunction._name = elem2.data.nm;
          _thisLayerFunction.registerMaskInterface = _registerMaskInterface;
          _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface;
          return _thisLayerFunction;
        };
      }();
      var propertyGroupFactory = function() {
        return function(interfaceFunction, parentPropertyGroup) {
          return function(val2) {
            val2 = val2 === void 0 ? 1 : val2;
            if (val2 <= 0) {
              return interfaceFunction;
            }
            return parentPropertyGroup(val2 - 1);
          };
        };
      }();
      var PropertyInterface = function() {
        return function(propertyName, propertyGroup) {
          var interfaceFunction = {
            _name: propertyName
          };
          function _propertyGroup(val2) {
            val2 = val2 === void 0 ? 1 : val2;
            if (val2 <= 0) {
              return interfaceFunction;
            }
            return propertyGroup(val2 - 1);
          }
          return _propertyGroup;
        };
      }();
      var EffectsExpressionInterface = function() {
        var ob2 = {
          createEffectsInterface
        };
        function createEffectsInterface(elem2, propertyGroup) {
          if (elem2.effectsManager) {
            var effectElements = [];
            var effectsData = elem2.data.ef;
            var i;
            var len = elem2.effectsManager.effectElements.length;
            for (i = 0; i < len; i += 1) {
              effectElements.push(createGroupInterface(effectsData[i], elem2.effectsManager.effectElements[i], propertyGroup, elem2));
            }
            var effects = elem2.data.ef || [];
            var groupInterface = function groupInterface2(name2) {
              i = 0;
              len = effects.length;
              while (i < len) {
                if (name2 === effects[i].nm || name2 === effects[i].mn || name2 === effects[i].ix) {
                  return effectElements[i];
                }
                i += 1;
              }
              return null;
            };
            Object.defineProperty(groupInterface, "numProperties", {
              get: function get() {
                return effects.length;
              }
            });
            return groupInterface;
          }
          return null;
        }
        function createGroupInterface(data2, elements, propertyGroup, elem2) {
          function groupInterface(name2) {
            var effects = data2.ef;
            var i2 = 0;
            var len2 = effects.length;
            while (i2 < len2) {
              if (name2 === effects[i2].nm || name2 === effects[i2].mn || name2 === effects[i2].ix) {
                if (effects[i2].ty === 5) {
                  return effectElements[i2];
                }
                return effectElements[i2]();
              }
              i2 += 1;
            }
            throw new Error();
          }
          var _propertyGroup = propertyGroupFactory(groupInterface, propertyGroup);
          var effectElements = [];
          var i;
          var len = data2.ef.length;
          for (i = 0; i < len; i += 1) {
            if (data2.ef[i].ty === 5) {
              effectElements.push(createGroupInterface(data2.ef[i], elements.effectElements[i], elements.effectElements[i].propertyGroup, elem2));
            } else {
              effectElements.push(createValueInterface(elements.effectElements[i], data2.ef[i].ty, elem2, _propertyGroup));
            }
          }
          if (data2.mn === "ADBE Color Control") {
            Object.defineProperty(groupInterface, "color", {
              get: function get() {
                return effectElements[0]();
              }
            });
          }
          Object.defineProperties(groupInterface, {
            numProperties: {
              get: function get() {
                return data2.np;
              }
            },
            _name: {
              value: data2.nm
            },
            propertyGroup: {
              value: _propertyGroup
            }
          });
          groupInterface.enabled = data2.en !== 0;
          groupInterface.active = groupInterface.enabled;
          return groupInterface;
        }
        function createValueInterface(element, type, elem2, propertyGroup) {
          var expressionProperty = ExpressionPropertyInterface(element.p);
          function interfaceFunction() {
            if (type === 10) {
              return elem2.comp.compInterface(element.p.v);
            }
            return expressionProperty();
          }
          if (element.p.setGroupProperty) {
            element.p.setGroupProperty(PropertyInterface("", propertyGroup));
          }
          return interfaceFunction;
        }
        return ob2;
      }();
      var CompExpressionInterface = function() {
        return function(comp2) {
          function _thisLayerFunction(name2) {
            var i = 0;
            var len = comp2.layers.length;
            while (i < len) {
              if (comp2.layers[i].nm === name2 || comp2.layers[i].ind === name2) {
                return comp2.elements[i].layerInterface;
              }
              i += 1;
            }
            return null;
          }
          Object.defineProperty(_thisLayerFunction, "_name", {
            value: comp2.data.nm
          });
          _thisLayerFunction.layer = _thisLayerFunction;
          _thisLayerFunction.pixelAspect = 1;
          _thisLayerFunction.height = comp2.data.h || comp2.globalData.compSize.h;
          _thisLayerFunction.width = comp2.data.w || comp2.globalData.compSize.w;
          _thisLayerFunction.pixelAspect = 1;
          _thisLayerFunction.frameDuration = 1 / comp2.globalData.frameRate;
          _thisLayerFunction.displayStartTime = 0;
          _thisLayerFunction.numLayers = comp2.layers.length;
          return _thisLayerFunction;
        };
      }();
      var ShapePathInterface = function() {
        return function pathInterfaceFactory(shape, view, propertyGroup) {
          var prop = view.sh;
          function interfaceFunction(val2) {
            if (val2 === "Shape" || val2 === "shape" || val2 === "Path" || val2 === "path" || val2 === "ADBE Vector Shape" || val2 === 2) {
              return interfaceFunction.path;
            }
            return null;
          }
          var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
          prop.setGroupProperty(PropertyInterface("Path", _propertyGroup));
          Object.defineProperties(interfaceFunction, {
            path: {
              get: function get() {
                if (prop.k) {
                  prop.getValue();
                }
                return prop;
              }
            },
            shape: {
              get: function get() {
                if (prop.k) {
                  prop.getValue();
                }
                return prop;
              }
            },
            _name: {
              value: shape.nm
            },
            ix: {
              value: shape.ix
            },
            propertyIndex: {
              value: shape.ix
            },
            mn: {
              value: shape.mn
            },
            propertyGroup: {
              value: propertyGroup
            }
          });
          return interfaceFunction;
        };
      }();
      var ShapeExpressionInterface = function() {
        function iterateElements(shapes, view, propertyGroup) {
          var arr = [];
          var i;
          var len = shapes ? shapes.length : 0;
          for (i = 0; i < len; i += 1) {
            if (shapes[i].ty === "gr") {
              arr.push(groupInterfaceFactory(shapes[i], view[i], propertyGroup));
            } else if (shapes[i].ty === "fl") {
              arr.push(fillInterfaceFactory(shapes[i], view[i], propertyGroup));
            } else if (shapes[i].ty === "st") {
              arr.push(strokeInterfaceFactory(shapes[i], view[i], propertyGroup));
            } else if (shapes[i].ty === "tm") {
              arr.push(trimInterfaceFactory(shapes[i], view[i], propertyGroup));
            } else if (shapes[i].ty === "tr") {
            } else if (shapes[i].ty === "el") {
              arr.push(ellipseInterfaceFactory(shapes[i], view[i], propertyGroup));
            } else if (shapes[i].ty === "sr") {
              arr.push(starInterfaceFactory(shapes[i], view[i], propertyGroup));
            } else if (shapes[i].ty === "sh") {
              arr.push(ShapePathInterface(shapes[i], view[i], propertyGroup));
            } else if (shapes[i].ty === "rc") {
              arr.push(rectInterfaceFactory(shapes[i], view[i], propertyGroup));
            } else if (shapes[i].ty === "rd") {
              arr.push(roundedInterfaceFactory(shapes[i], view[i], propertyGroup));
            } else if (shapes[i].ty === "rp") {
              arr.push(repeaterInterfaceFactory(shapes[i], view[i], propertyGroup));
            } else if (shapes[i].ty === "gf") {
              arr.push(gradientFillInterfaceFactory(shapes[i], view[i], propertyGroup));
            } else {
              arr.push(defaultInterfaceFactory(shapes[i], view[i], propertyGroup));
            }
          }
          return arr;
        }
        function contentsInterfaceFactory(shape, view, propertyGroup) {
          var interfaces;
          var interfaceFunction = function _interfaceFunction(value2) {
            var i = 0;
            var len = interfaces.length;
            while (i < len) {
              if (interfaces[i]._name === value2 || interfaces[i].mn === value2 || interfaces[i].propertyIndex === value2 || interfaces[i].ix === value2 || interfaces[i].ind === value2) {
                return interfaces[i];
              }
              i += 1;
            }
            if (typeof value2 === "number") {
              return interfaces[value2 - 1];
            }
            return null;
          };
          interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
          interfaces = iterateElements(shape.it, view.it, interfaceFunction.propertyGroup);
          interfaceFunction.numProperties = interfaces.length;
          var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
          interfaceFunction.transform = transformInterface;
          interfaceFunction.propertyIndex = shape.cix;
          interfaceFunction._name = shape.nm;
          return interfaceFunction;
        }
        function groupInterfaceFactory(shape, view, propertyGroup) {
          var interfaceFunction = function _interfaceFunction(value2) {
            switch (value2) {
              case "ADBE Vectors Group":
              case "Contents":
              case 2:
                return interfaceFunction.content;
              default:
                return interfaceFunction.transform;
            }
          };
          interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
          var content2 = contentsInterfaceFactory(shape, view, interfaceFunction.propertyGroup);
          var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
          interfaceFunction.content = content2;
          interfaceFunction.transform = transformInterface;
          Object.defineProperty(interfaceFunction, "_name", {
            get: function get() {
              return shape.nm;
            }
          });
          interfaceFunction.numProperties = shape.np;
          interfaceFunction.propertyIndex = shape.ix;
          interfaceFunction.nm = shape.nm;
          interfaceFunction.mn = shape.mn;
          return interfaceFunction;
        }
        function fillInterfaceFactory(shape, view, propertyGroup) {
          function interfaceFunction(val2) {
            if (val2 === "Color" || val2 === "color") {
              return interfaceFunction.color;
            }
            if (val2 === "Opacity" || val2 === "opacity") {
              return interfaceFunction.opacity;
            }
            return null;
          }
          Object.defineProperties(interfaceFunction, {
            color: {
              get: ExpressionPropertyInterface(view.c)
            },
            opacity: {
              get: ExpressionPropertyInterface(view.o)
            },
            _name: {
              value: shape.nm
            },
            mn: {
              value: shape.mn
            }
          });
          view.c.setGroupProperty(PropertyInterface("Color", propertyGroup));
          view.o.setGroupProperty(PropertyInterface("Opacity", propertyGroup));
          return interfaceFunction;
        }
        function gradientFillInterfaceFactory(shape, view, propertyGroup) {
          function interfaceFunction(val2) {
            if (val2 === "Start Point" || val2 === "start point") {
              return interfaceFunction.startPoint;
            }
            if (val2 === "End Point" || val2 === "end point") {
              return interfaceFunction.endPoint;
            }
            if (val2 === "Opacity" || val2 === "opacity") {
              return interfaceFunction.opacity;
            }
            return null;
          }
          Object.defineProperties(interfaceFunction, {
            startPoint: {
              get: ExpressionPropertyInterface(view.s)
            },
            endPoint: {
              get: ExpressionPropertyInterface(view.e)
            },
            opacity: {
              get: ExpressionPropertyInterface(view.o)
            },
            type: {
              get: function get() {
                return "a";
              }
            },
            _name: {
              value: shape.nm
            },
            mn: {
              value: shape.mn
            }
          });
          view.s.setGroupProperty(PropertyInterface("Start Point", propertyGroup));
          view.e.setGroupProperty(PropertyInterface("End Point", propertyGroup));
          view.o.setGroupProperty(PropertyInterface("Opacity", propertyGroup));
          return interfaceFunction;
        }
        function defaultInterfaceFactory() {
          function interfaceFunction() {
            return null;
          }
          return interfaceFunction;
        }
        function strokeInterfaceFactory(shape, view, propertyGroup) {
          var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
          var _dashPropertyGroup = propertyGroupFactory(dashOb, _propertyGroup);
          function addPropertyToDashOb(i2) {
            Object.defineProperty(dashOb, shape.d[i2].nm, {
              get: ExpressionPropertyInterface(view.d.dataProps[i2].p)
            });
          }
          var i;
          var len = shape.d ? shape.d.length : 0;
          var dashOb = {};
          for (i = 0; i < len; i += 1) {
            addPropertyToDashOb(i);
            view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);
          }
          function interfaceFunction(val2) {
            if (val2 === "Color" || val2 === "color") {
              return interfaceFunction.color;
            }
            if (val2 === "Opacity" || val2 === "opacity") {
              return interfaceFunction.opacity;
            }
            if (val2 === "Stroke Width" || val2 === "stroke width") {
              return interfaceFunction.strokeWidth;
            }
            return null;
          }
          Object.defineProperties(interfaceFunction, {
            color: {
              get: ExpressionPropertyInterface(view.c)
            },
            opacity: {
              get: ExpressionPropertyInterface(view.o)
            },
            strokeWidth: {
              get: ExpressionPropertyInterface(view.w)
            },
            dash: {
              get: function get() {
                return dashOb;
              }
            },
            _name: {
              value: shape.nm
            },
            mn: {
              value: shape.mn
            }
          });
          view.c.setGroupProperty(PropertyInterface("Color", _propertyGroup));
          view.o.setGroupProperty(PropertyInterface("Opacity", _propertyGroup));
          view.w.setGroupProperty(PropertyInterface("Stroke Width", _propertyGroup));
          return interfaceFunction;
        }
        function trimInterfaceFactory(shape, view, propertyGroup) {
          function interfaceFunction(val2) {
            if (val2 === shape.e.ix || val2 === "End" || val2 === "end") {
              return interfaceFunction.end;
            }
            if (val2 === shape.s.ix) {
              return interfaceFunction.start;
            }
            if (val2 === shape.o.ix) {
              return interfaceFunction.offset;
            }
            return null;
          }
          var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
          interfaceFunction.propertyIndex = shape.ix;
          view.s.setGroupProperty(PropertyInterface("Start", _propertyGroup));
          view.e.setGroupProperty(PropertyInterface("End", _propertyGroup));
          view.o.setGroupProperty(PropertyInterface("Offset", _propertyGroup));
          interfaceFunction.propertyIndex = shape.ix;
          interfaceFunction.propertyGroup = propertyGroup;
          Object.defineProperties(interfaceFunction, {
            start: {
              get: ExpressionPropertyInterface(view.s)
            },
            end: {
              get: ExpressionPropertyInterface(view.e)
            },
            offset: {
              get: ExpressionPropertyInterface(view.o)
            },
            _name: {
              value: shape.nm
            }
          });
          interfaceFunction.mn = shape.mn;
          return interfaceFunction;
        }
        function transformInterfaceFactory(shape, view, propertyGroup) {
          function interfaceFunction(value2) {
            if (shape.a.ix === value2 || value2 === "Anchor Point") {
              return interfaceFunction.anchorPoint;
            }
            if (shape.o.ix === value2 || value2 === "Opacity") {
              return interfaceFunction.opacity;
            }
            if (shape.p.ix === value2 || value2 === "Position") {
              return interfaceFunction.position;
            }
            if (shape.r.ix === value2 || value2 === "Rotation" || value2 === "ADBE Vector Rotation") {
              return interfaceFunction.rotation;
            }
            if (shape.s.ix === value2 || value2 === "Scale") {
              return interfaceFunction.scale;
            }
            if (shape.sk && shape.sk.ix === value2 || value2 === "Skew") {
              return interfaceFunction.skew;
            }
            if (shape.sa && shape.sa.ix === value2 || value2 === "Skew Axis") {
              return interfaceFunction.skewAxis;
            }
            return null;
          }
          var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
          view.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", _propertyGroup));
          view.transform.mProps.p.setGroupProperty(PropertyInterface("Position", _propertyGroup));
          view.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", _propertyGroup));
          view.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", _propertyGroup));
          view.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", _propertyGroup));
          if (view.transform.mProps.sk) {
            view.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", _propertyGroup));
            view.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", _propertyGroup));
          }
          view.transform.op.setGroupProperty(PropertyInterface("Opacity", _propertyGroup));
          Object.defineProperties(interfaceFunction, {
            opacity: {
              get: ExpressionPropertyInterface(view.transform.mProps.o)
            },
            position: {
              get: ExpressionPropertyInterface(view.transform.mProps.p)
            },
            anchorPoint: {
              get: ExpressionPropertyInterface(view.transform.mProps.a)
            },
            scale: {
              get: ExpressionPropertyInterface(view.transform.mProps.s)
            },
            rotation: {
              get: ExpressionPropertyInterface(view.transform.mProps.r)
            },
            skew: {
              get: ExpressionPropertyInterface(view.transform.mProps.sk)
            },
            skewAxis: {
              get: ExpressionPropertyInterface(view.transform.mProps.sa)
            },
            _name: {
              value: shape.nm
            }
          });
          interfaceFunction.ty = "tr";
          interfaceFunction.mn = shape.mn;
          interfaceFunction.propertyGroup = propertyGroup;
          return interfaceFunction;
        }
        function ellipseInterfaceFactory(shape, view, propertyGroup) {
          function interfaceFunction(value2) {
            if (shape.p.ix === value2) {
              return interfaceFunction.position;
            }
            if (shape.s.ix === value2) {
              return interfaceFunction.size;
            }
            return null;
          }
          var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
          interfaceFunction.propertyIndex = shape.ix;
          var prop = view.sh.ty === "tm" ? view.sh.prop : view.sh;
          prop.s.setGroupProperty(PropertyInterface("Size", _propertyGroup));
          prop.p.setGroupProperty(PropertyInterface("Position", _propertyGroup));
          Object.defineProperties(interfaceFunction, {
            size: {
              get: ExpressionPropertyInterface(prop.s)
            },
            position: {
              get: ExpressionPropertyInterface(prop.p)
            },
            _name: {
              value: shape.nm
            }
          });
          interfaceFunction.mn = shape.mn;
          return interfaceFunction;
        }
        function starInterfaceFactory(shape, view, propertyGroup) {
          function interfaceFunction(value2) {
            if (shape.p.ix === value2) {
              return interfaceFunction.position;
            }
            if (shape.r.ix === value2) {
              return interfaceFunction.rotation;
            }
            if (shape.pt.ix === value2) {
              return interfaceFunction.points;
            }
            if (shape.or.ix === value2 || value2 === "ADBE Vector Star Outer Radius") {
              return interfaceFunction.outerRadius;
            }
            if (shape.os.ix === value2) {
              return interfaceFunction.outerRoundness;
            }
            if (shape.ir && (shape.ir.ix === value2 || value2 === "ADBE Vector Star Inner Radius")) {
              return interfaceFunction.innerRadius;
            }
            if (shape.is && shape.is.ix === value2) {
              return interfaceFunction.innerRoundness;
            }
            return null;
          }
          var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
          var prop = view.sh.ty === "tm" ? view.sh.prop : view.sh;
          interfaceFunction.propertyIndex = shape.ix;
          prop.or.setGroupProperty(PropertyInterface("Outer Radius", _propertyGroup));
          prop.os.setGroupProperty(PropertyInterface("Outer Roundness", _propertyGroup));
          prop.pt.setGroupProperty(PropertyInterface("Points", _propertyGroup));
          prop.p.setGroupProperty(PropertyInterface("Position", _propertyGroup));
          prop.r.setGroupProperty(PropertyInterface("Rotation", _propertyGroup));
          if (shape.ir) {
            prop.ir.setGroupProperty(PropertyInterface("Inner Radius", _propertyGroup));
            prop.is.setGroupProperty(PropertyInterface("Inner Roundness", _propertyGroup));
          }
          Object.defineProperties(interfaceFunction, {
            position: {
              get: ExpressionPropertyInterface(prop.p)
            },
            rotation: {
              get: ExpressionPropertyInterface(prop.r)
            },
            points: {
              get: ExpressionPropertyInterface(prop.pt)
            },
            outerRadius: {
              get: ExpressionPropertyInterface(prop.or)
            },
            outerRoundness: {
              get: ExpressionPropertyInterface(prop.os)
            },
            innerRadius: {
              get: ExpressionPropertyInterface(prop.ir)
            },
            innerRoundness: {
              get: ExpressionPropertyInterface(prop.is)
            },
            _name: {
              value: shape.nm
            }
          });
          interfaceFunction.mn = shape.mn;
          return interfaceFunction;
        }
        function rectInterfaceFactory(shape, view, propertyGroup) {
          function interfaceFunction(value2) {
            if (shape.p.ix === value2) {
              return interfaceFunction.position;
            }
            if (shape.r.ix === value2) {
              return interfaceFunction.roundness;
            }
            if (shape.s.ix === value2 || value2 === "Size" || value2 === "ADBE Vector Rect Size") {
              return interfaceFunction.size;
            }
            return null;
          }
          var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
          var prop = view.sh.ty === "tm" ? view.sh.prop : view.sh;
          interfaceFunction.propertyIndex = shape.ix;
          prop.p.setGroupProperty(PropertyInterface("Position", _propertyGroup));
          prop.s.setGroupProperty(PropertyInterface("Size", _propertyGroup));
          prop.r.setGroupProperty(PropertyInterface("Rotation", _propertyGroup));
          Object.defineProperties(interfaceFunction, {
            position: {
              get: ExpressionPropertyInterface(prop.p)
            },
            roundness: {
              get: ExpressionPropertyInterface(prop.r)
            },
            size: {
              get: ExpressionPropertyInterface(prop.s)
            },
            _name: {
              value: shape.nm
            }
          });
          interfaceFunction.mn = shape.mn;
          return interfaceFunction;
        }
        function roundedInterfaceFactory(shape, view, propertyGroup) {
          function interfaceFunction(value2) {
            if (shape.r.ix === value2 || value2 === "Round Corners 1") {
              return interfaceFunction.radius;
            }
            return null;
          }
          var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
          var prop = view;
          interfaceFunction.propertyIndex = shape.ix;
          prop.rd.setGroupProperty(PropertyInterface("Radius", _propertyGroup));
          Object.defineProperties(interfaceFunction, {
            radius: {
              get: ExpressionPropertyInterface(prop.rd)
            },
            _name: {
              value: shape.nm
            }
          });
          interfaceFunction.mn = shape.mn;
          return interfaceFunction;
        }
        function repeaterInterfaceFactory(shape, view, propertyGroup) {
          function interfaceFunction(value2) {
            if (shape.c.ix === value2 || value2 === "Copies") {
              return interfaceFunction.copies;
            }
            if (shape.o.ix === value2 || value2 === "Offset") {
              return interfaceFunction.offset;
            }
            return null;
          }
          var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
          var prop = view;
          interfaceFunction.propertyIndex = shape.ix;
          prop.c.setGroupProperty(PropertyInterface("Copies", _propertyGroup));
          prop.o.setGroupProperty(PropertyInterface("Offset", _propertyGroup));
          Object.defineProperties(interfaceFunction, {
            copies: {
              get: ExpressionPropertyInterface(prop.c)
            },
            offset: {
              get: ExpressionPropertyInterface(prop.o)
            },
            _name: {
              value: shape.nm
            }
          });
          interfaceFunction.mn = shape.mn;
          return interfaceFunction;
        }
        return function(shapes, view, propertyGroup) {
          var interfaces;
          function _interfaceFunction(value2) {
            if (typeof value2 === "number") {
              value2 = value2 === void 0 ? 1 : value2;
              if (value2 === 0) {
                return propertyGroup;
              }
              return interfaces[value2 - 1];
            }
            var i = 0;
            var len = interfaces.length;
            while (i < len) {
              if (interfaces[i]._name === value2) {
                return interfaces[i];
              }
              i += 1;
            }
            return null;
          }
          function parentGroupWrapper() {
            return propertyGroup;
          }
          _interfaceFunction.propertyGroup = propertyGroupFactory(_interfaceFunction, parentGroupWrapper);
          interfaces = iterateElements(shapes, view, _interfaceFunction.propertyGroup);
          _interfaceFunction.numProperties = interfaces.length;
          _interfaceFunction._name = "Contents";
          return _interfaceFunction;
        };
      }();
      var TextExpressionInterface = function() {
        return function(elem2) {
          var _prevValue;
          var _sourceText;
          function _thisLayerFunction(name2) {
            switch (name2) {
              case "ADBE Text Document":
                return _thisLayerFunction.sourceText;
              default:
                return null;
            }
          }
          Object.defineProperty(_thisLayerFunction, "sourceText", {
            get: function get() {
              elem2.textProperty.getValue();
              var stringValue = elem2.textProperty.currentData.t;
              if (stringValue !== _prevValue) {
                elem2.textProperty.currentData.t = _prevValue;
                _sourceText = new String(stringValue);
                _sourceText.value = stringValue || new String(stringValue);
              }
              return _sourceText;
            }
          });
          return _thisLayerFunction;
        };
      }();
      var getBlendMode = function() {
        var blendModeEnums = {
          0: "source-over",
          1: "multiply",
          2: "screen",
          3: "overlay",
          4: "darken",
          5: "lighten",
          6: "color-dodge",
          7: "color-burn",
          8: "hard-light",
          9: "soft-light",
          10: "difference",
          11: "exclusion",
          12: "hue",
          13: "saturation",
          14: "color",
          15: "luminosity"
        };
        return function(mode) {
          return blendModeEnums[mode] || "";
        };
      }();
      function SliderEffect(data2, elem2, container) {
        this.p = PropertyFactory.getProp(elem2, data2.v, 0, 0, container);
      }
      function AngleEffect(data2, elem2, container) {
        this.p = PropertyFactory.getProp(elem2, data2.v, 0, 0, container);
      }
      function ColorEffect(data2, elem2, container) {
        this.p = PropertyFactory.getProp(elem2, data2.v, 1, 0, container);
      }
      function PointEffect(data2, elem2, container) {
        this.p = PropertyFactory.getProp(elem2, data2.v, 1, 0, container);
      }
      function LayerIndexEffect(data2, elem2, container) {
        this.p = PropertyFactory.getProp(elem2, data2.v, 0, 0, container);
      }
      function MaskIndexEffect(data2, elem2, container) {
        this.p = PropertyFactory.getProp(elem2, data2.v, 0, 0, container);
      }
      function CheckboxEffect(data2, elem2, container) {
        this.p = PropertyFactory.getProp(elem2, data2.v, 0, 0, container);
      }
      function NoValueEffect() {
        this.p = {};
      }
      function EffectsManager(data2, element) {
        var effects = data2.ef || [];
        this.effectElements = [];
        var i;
        var len = effects.length;
        var effectItem;
        for (i = 0; i < len; i += 1) {
          effectItem = new GroupEffect(effects[i], element);
          this.effectElements.push(effectItem);
        }
      }
      function GroupEffect(data2, element) {
        this.init(data2, element);
      }
      extendPrototype([DynamicPropertyContainer], GroupEffect);
      GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;
      GroupEffect.prototype.init = function(data2, element) {
        this.data = data2;
        this.effectElements = [];
        this.initDynamicPropertyContainer(element);
        var i;
        var len = this.data.ef.length;
        var eff;
        var effects = this.data.ef;
        for (i = 0; i < len; i += 1) {
          eff = null;
          switch (effects[i].ty) {
            case 0:
              eff = new SliderEffect(effects[i], element, this);
              break;
            case 1:
              eff = new AngleEffect(effects[i], element, this);
              break;
            case 2:
              eff = new ColorEffect(effects[i], element, this);
              break;
            case 3:
              eff = new PointEffect(effects[i], element, this);
              break;
            case 4:
            case 7:
              eff = new CheckboxEffect(effects[i], element, this);
              break;
            case 10:
              eff = new LayerIndexEffect(effects[i], element, this);
              break;
            case 11:
              eff = new MaskIndexEffect(effects[i], element, this);
              break;
            case 5:
              eff = new EffectsManager(effects[i], element, this);
              break;
            default:
              eff = new NoValueEffect(effects[i], element, this);
              break;
          }
          if (eff) {
            this.effectElements.push(eff);
          }
        }
      };
      function BaseElement() {
      }
      BaseElement.prototype = {
        checkMasks: function checkMasks() {
          if (!this.data.hasMask) {
            return false;
          }
          var i = 0;
          var len = this.data.masksProperties.length;
          while (i < len) {
            if (this.data.masksProperties[i].mode !== "n" && this.data.masksProperties[i].cl !== false) {
              return true;
            }
            i += 1;
          }
          return false;
        },
        initExpressions: function initExpressions() {
          this.layerInterface = LayerExpressionInterface(this);
          if (this.data.hasMask && this.maskManager) {
            this.layerInterface.registerMaskInterface(this.maskManager);
          }
          var effectsInterface = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
          this.layerInterface.registerEffectsInterface(effectsInterface);
          if (this.data.ty === 0 || this.data.xt) {
            this.compInterface = CompExpressionInterface(this);
          } else if (this.data.ty === 4) {
            this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface);
            this.layerInterface.content = this.layerInterface.shapeInterface;
          } else if (this.data.ty === 5) {
            this.layerInterface.textInterface = TextExpressionInterface(this);
            this.layerInterface.text = this.layerInterface.textInterface;
          }
        },
        setBlendMode: function setBlendMode() {
          var blendModeValue = getBlendMode(this.data.bm);
          var elem2 = this.baseElement || this.layerElement;
          elem2.style["mix-blend-mode"] = blendModeValue;
        },
        initBaseData: function initBaseData(data2, globalData2, comp2) {
          this.globalData = globalData2;
          this.comp = comp2;
          this.data = data2;
          this.layerId = createElementID();
          if (!this.data.sr) {
            this.data.sr = 1;
          }
          this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
        },
        getType: function getType() {
          return this.type;
        },
        sourceRectAtTime: function sourceRectAtTime2() {
        }
      };
      function FrameElement() {
      }
      FrameElement.prototype = {
        initFrame: function initFrame() {
          this._isFirstFrame = false;
          this.dynamicProperties = [];
          this._mdf = false;
        },
        prepareProperties: function prepareProperties(num, isVisible) {
          var i;
          var len = this.dynamicProperties.length;
          for (i = 0; i < len; i += 1) {
            if (isVisible || this._isParent && this.dynamicProperties[i].propType === "transform") {
              this.dynamicProperties[i].getValue();
              if (this.dynamicProperties[i]._mdf) {
                this.globalData._mdf = true;
                this._mdf = true;
              }
            }
          }
        },
        addDynamicProperty: function addDynamicProperty(prop) {
          if (this.dynamicProperties.indexOf(prop) === -1) {
            this.dynamicProperties.push(prop);
          }
        }
      };
      function _typeof$2(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof$2 = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof$2 = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof$2(obj);
      }
      var FootageInterface = function() {
        var outlineInterfaceFactory = function outlineInterfaceFactory2(elem2) {
          var currentPropertyName = "";
          var currentProperty = elem2.getFootageData();
          function init() {
            currentPropertyName = "";
            currentProperty = elem2.getFootageData();
            return searchProperty;
          }
          function searchProperty(value2) {
            if (currentProperty[value2]) {
              currentPropertyName = value2;
              currentProperty = currentProperty[value2];
              if (_typeof$2(currentProperty) === "object") {
                return searchProperty;
              }
              return currentProperty;
            }
            var propertyNameIndex = value2.indexOf(currentPropertyName);
            if (propertyNameIndex !== -1) {
              var index2 = parseInt(value2.substr(propertyNameIndex + currentPropertyName.length), 10);
              currentProperty = currentProperty[index2];
              if (_typeof$2(currentProperty) === "object") {
                return searchProperty;
              }
              return currentProperty;
            }
            return "";
          }
          return init;
        };
        var dataInterfaceFactory = function dataInterfaceFactory2(elem2) {
          function interfaceFunction(value2) {
            if (value2 === "Outline") {
              return interfaceFunction.outlineInterface();
            }
            return null;
          }
          interfaceFunction._name = "Outline";
          interfaceFunction.outlineInterface = outlineInterfaceFactory(elem2);
          return interfaceFunction;
        };
        return function(elem2) {
          function _interfaceFunction(value2) {
            if (value2 === "Data") {
              return _interfaceFunction.dataInterface;
            }
            return null;
          }
          _interfaceFunction._name = "Data";
          _interfaceFunction.dataInterface = dataInterfaceFactory(elem2);
          return _interfaceFunction;
        };
      }();
      function FootageElement(data2, globalData2, comp2) {
        this.initFrame();
        this.initRenderable();
        this.assetData = globalData2.getAssetData(data2.refId);
        this.footageData = globalData2.imageLoader.getAsset(this.assetData);
        this.initBaseData(data2, globalData2, comp2);
      }
      FootageElement.prototype.prepareFrame = function() {
      };
      extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement);
      FootageElement.prototype.getBaseElement = function() {
        return null;
      };
      FootageElement.prototype.renderFrame = function() {
      };
      FootageElement.prototype.destroy = function() {
      };
      FootageElement.prototype.initExpressions = function() {
        this.layerInterface = FootageInterface(this);
      };
      FootageElement.prototype.getFootageData = function() {
        return this.footageData;
      };
      function AudioElement(data2, globalData2, comp2) {
        this.initFrame();
        this.initRenderable();
        this.assetData = globalData2.getAssetData(data2.refId);
        this.initBaseData(data2, globalData2, comp2);
        this._isPlaying = false;
        this._canPlay = false;
        var assetPath = this.globalData.getAssetsPath(this.assetData);
        this.audio = this.globalData.audioController.createAudio(assetPath);
        this._currentTime = 0;
        this.globalData.audioController.addAudio(this);
        this._volumeMultiplier = 1;
        this._volume = 1;
        this._previousVolume = null;
        this.tm = data2.tm ? PropertyFactory.getProp(this, data2.tm, 0, globalData2.frameRate, this) : {
          _placeholder: true
        };
        this.lv = PropertyFactory.getProp(this, data2.au && data2.au.lv ? data2.au.lv : {
          k: [100]
        }, 1, 0.01, this);
      }
      AudioElement.prototype.prepareFrame = function(num) {
        this.prepareRenderableFrame(num, true);
        this.prepareProperties(num, true);
        if (!this.tm._placeholder) {
          var timeRemapped = this.tm.v;
          this._currentTime = timeRemapped;
        } else {
          this._currentTime = num / this.data.sr;
        }
        this._volume = this.lv.v[0];
        var totalVolume = this._volume * this._volumeMultiplier;
        if (this._previousVolume !== totalVolume) {
          this._previousVolume = totalVolume;
          this.audio.volume(totalVolume);
        }
      };
      extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement);
      AudioElement.prototype.renderFrame = function() {
        if (this.isInRange && this._canPlay) {
          if (!this._isPlaying) {
            this.audio.play();
            this.audio.seek(this._currentTime / this.globalData.frameRate);
            this._isPlaying = true;
          } else if (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) {
            this.audio.seek(this._currentTime / this.globalData.frameRate);
          }
        }
      };
      AudioElement.prototype.show = function() {
      };
      AudioElement.prototype.hide = function() {
        this.audio.pause();
        this._isPlaying = false;
      };
      AudioElement.prototype.pause = function() {
        this.audio.pause();
        this._isPlaying = false;
        this._canPlay = false;
      };
      AudioElement.prototype.resume = function() {
        this._canPlay = true;
      };
      AudioElement.prototype.setRate = function(rateValue) {
        this.audio.rate(rateValue);
      };
      AudioElement.prototype.volume = function(volumeValue) {
        this._volumeMultiplier = volumeValue;
        this._previousVolume = volumeValue * this._volume;
        this.audio.volume(this._previousVolume);
      };
      AudioElement.prototype.getBaseElement = function() {
        return null;
      };
      AudioElement.prototype.destroy = function() {
      };
      AudioElement.prototype.sourceRectAtTime = function() {
      };
      AudioElement.prototype.initExpressions = function() {
      };
      function BaseRenderer() {
      }
      BaseRenderer.prototype.checkLayers = function(num) {
        var i;
        var len = this.layers.length;
        var data2;
        this.completeLayers = true;
        for (i = len - 1; i >= 0; i -= 1) {
          if (!this.elements[i]) {
            data2 = this.layers[i];
            if (data2.ip - data2.st <= num - this.layers[i].st && data2.op - data2.st > num - this.layers[i].st) {
              this.buildItem(i);
            }
          }
          this.completeLayers = this.elements[i] ? this.completeLayers : false;
        }
        this.checkPendingElements();
      };
      BaseRenderer.prototype.createItem = function(layer) {
        switch (layer.ty) {
          case 2:
            return this.createImage(layer);
          case 0:
            return this.createComp(layer);
          case 1:
            return this.createSolid(layer);
          case 3:
            return this.createNull(layer);
          case 4:
            return this.createShape(layer);
          case 5:
            return this.createText(layer);
          case 6:
            return this.createAudio(layer);
          case 13:
            return this.createCamera(layer);
          case 15:
            return this.createFootage(layer);
          default:
            return this.createNull(layer);
        }
      };
      BaseRenderer.prototype.createCamera = function() {
        throw new Error("You're using a 3d camera. Try the html renderer.");
      };
      BaseRenderer.prototype.createAudio = function(data2) {
        return new AudioElement(data2, this.globalData, this);
      };
      BaseRenderer.prototype.createFootage = function(data2) {
        return new FootageElement(data2, this.globalData, this);
      };
      BaseRenderer.prototype.buildAllItems = function() {
        var i;
        var len = this.layers.length;
        for (i = 0; i < len; i += 1) {
          this.buildItem(i);
        }
        this.checkPendingElements();
      };
      BaseRenderer.prototype.includeLayers = function(newLayers) {
        this.completeLayers = false;
        var i;
        var len = newLayers.length;
        var j;
        var jLen = this.layers.length;
        for (i = 0; i < len; i += 1) {
          j = 0;
          while (j < jLen) {
            if (this.layers[j].id === newLayers[i].id) {
              this.layers[j] = newLayers[i];
              break;
            }
            j += 1;
          }
        }
      };
      BaseRenderer.prototype.setProjectInterface = function(pInterface) {
        this.globalData.projectInterface = pInterface;
      };
      BaseRenderer.prototype.initItems = function() {
        if (!this.globalData.progressiveLoad) {
          this.buildAllItems();
        }
      };
      BaseRenderer.prototype.buildElementParenting = function(element, parentName, hierarchy) {
        var elements = this.elements;
        var layers2 = this.layers;
        var i = 0;
        var len = layers2.length;
        while (i < len) {
          if (layers2[i].ind == parentName) {
            if (!elements[i] || elements[i] === true) {
              this.buildItem(i);
              this.addPendingElement(element);
            } else {
              hierarchy.push(elements[i]);
              elements[i].setAsParent();
              if (layers2[i].parent !== void 0) {
                this.buildElementParenting(element, layers2[i].parent, hierarchy);
              } else {
                element.setHierarchy(hierarchy);
              }
            }
          }
          i += 1;
        }
      };
      BaseRenderer.prototype.addPendingElement = function(element) {
        this.pendingElements.push(element);
      };
      BaseRenderer.prototype.searchExtraCompositions = function(assets2) {
        var i;
        var len = assets2.length;
        for (i = 0; i < len; i += 1) {
          if (assets2[i].xt) {
            var comp2 = this.createComp(assets2[i]);
            comp2.initExpressions();
            this.globalData.projectInterface.registerComposition(comp2);
          }
        }
      };
      BaseRenderer.prototype.getElementByPath = function(path) {
        var pathValue = path.shift();
        var element;
        if (typeof pathValue === "number") {
          element = this.elements[pathValue];
        } else {
          var i;
          var len = this.elements.length;
          for (i = 0; i < len; i += 1) {
            if (this.elements[i].data.nm === pathValue) {
              element = this.elements[i];
              break;
            }
          }
        }
        if (path.length === 0) {
          return element;
        }
        return element.getElementByPath(path);
      };
      BaseRenderer.prototype.setupGlobalData = function(animData, fontsContainer) {
        this.globalData.fontManager = new FontManager();
        this.globalData.fontManager.addChars(animData.chars);
        this.globalData.fontManager.addFonts(animData.fonts, fontsContainer);
        this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
        this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
        this.globalData.imageLoader = this.animationItem.imagePreloader;
        this.globalData.audioController = this.animationItem.audioController;
        this.globalData.frameId = 0;
        this.globalData.frameRate = animData.fr;
        this.globalData.nm = animData.nm;
        this.globalData.compSize = {
          w: animData.w,
          h: animData.h
        };
      };
      function TransformElement() {
      }
      TransformElement.prototype = {
        initTransform: function initTransform() {
          this.finalTransform = {
            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
              o: 0
            },
            _matMdf: false,
            _opMdf: false,
            mat: new Matrix()
          };
          if (this.data.ao) {
            this.finalTransform.mProp.autoOriented = true;
          }
          if (this.data.ty !== 11) {
          }
        },
        renderTransform: function renderTransform() {
          this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
          this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;
          if (this.hierarchy) {
            var mat;
            var finalMat = this.finalTransform.mat;
            var i = 0;
            var len = this.hierarchy.length;
            if (!this.finalTransform._matMdf) {
              while (i < len) {
                if (this.hierarchy[i].finalTransform.mProp._mdf) {
                  this.finalTransform._matMdf = true;
                  break;
                }
                i += 1;
              }
            }
            if (this.finalTransform._matMdf) {
              mat = this.finalTransform.mProp.v.props;
              finalMat.cloneFromProps(mat);
              for (i = 0; i < len; i += 1) {
                mat = this.hierarchy[i].finalTransform.mProp.v.props;
                finalMat.transform(mat[0], mat[1], mat[2], mat[3], mat[4], mat[5], mat[6], mat[7], mat[8], mat[9], mat[10], mat[11], mat[12], mat[13], mat[14], mat[15]);
              }
            }
          }
        },
        globalToLocal: function globalToLocal(pt) {
          var transforms = [];
          transforms.push(this.finalTransform);
          var flag = true;
          var comp2 = this.comp;
          while (flag) {
            if (comp2.finalTransform) {
              if (comp2.data.hasMask) {
                transforms.splice(0, 0, comp2.finalTransform);
              }
              comp2 = comp2.comp;
            } else {
              flag = false;
            }
          }
          var i;
          var len = transforms.length;
          var ptNew;
          for (i = 0; i < len; i += 1) {
            ptNew = transforms[i].mat.applyToPointArray(0, 0, 0);
            pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0];
          }
          return pt;
        },
        mHelper: new Matrix()
      };
      function MaskElement(data2, element, globalData2) {
        this.data = data2;
        this.element = element;
        this.globalData = globalData2;
        this.storedData = [];
        this.masksProperties = this.data.masksProperties || [];
        this.maskElement = null;
        var defs = this.globalData.defs;
        var i;
        var len = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(len);
        this.solidPath = "";
        var path;
        var properties = this.masksProperties;
        var count = 0;
        var currentMasks = [];
        var j;
        var jLen;
        var layerId = createElementID();
        var rect;
        var expansor;
        var feMorph;
        var x;
        var maskType = "clipPath";
        var maskRef = "clip-path";
        for (i = 0; i < len; i += 1) {
          if (properties[i].mode !== "a" && properties[i].mode !== "n" || properties[i].inv || properties[i].o.k !== 100 || properties[i].o.x) {
            maskType = "mask";
            maskRef = "mask";
          }
          if ((properties[i].mode === "s" || properties[i].mode === "i") && count === 0) {
            rect = createNS("rect");
            rect.setAttribute("fill", "#ffffff");
            rect.setAttribute("width", this.element.comp.data.w || 0);
            rect.setAttribute("height", this.element.comp.data.h || 0);
            currentMasks.push(rect);
          } else {
            rect = null;
          }
          path = createNS("path");
          if (properties[i].mode === "n") {
            this.viewData[i] = {
              op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
              elem: path,
              lastPath: ""
            };
            defs.appendChild(path);
          } else {
            count += 1;
            path.setAttribute("fill", properties[i].mode === "s" ? "#000000" : "#ffffff");
            path.setAttribute("clip-rule", "nonzero");
            var filterID;
            if (properties[i].x.k !== 0) {
              maskType = "mask";
              maskRef = "mask";
              x = PropertyFactory.getProp(this.element, properties[i].x, 0, null, this.element);
              filterID = createElementID();
              expansor = createNS("filter");
              expansor.setAttribute("id", filterID);
              feMorph = createNS("feMorphology");
              feMorph.setAttribute("operator", "erode");
              feMorph.setAttribute("in", "SourceGraphic");
              feMorph.setAttribute("radius", "0");
              expansor.appendChild(feMorph);
              defs.appendChild(expansor);
              path.setAttribute("stroke", properties[i].mode === "s" ? "#000000" : "#ffffff");
            } else {
              feMorph = null;
              x = null;
            }
            this.storedData[i] = {
              elem: path,
              x,
              expan: feMorph,
              lastPath: "",
              lastOperator: "",
              filterId: filterID,
              lastRadius: 0
            };
            if (properties[i].mode === "i") {
              jLen = currentMasks.length;
              var g = createNS("g");
              for (j = 0; j < jLen; j += 1) {
                g.appendChild(currentMasks[j]);
              }
              var mask2 = createNS("mask");
              mask2.setAttribute("mask-type", "alpha");
              mask2.setAttribute("id", layerId + "_" + count);
              mask2.appendChild(path);
              defs.appendChild(mask2);
              g.setAttribute("mask", "url(" + getLocationHref() + "#" + layerId + "_" + count + ")");
              currentMasks.length = 0;
              currentMasks.push(g);
            } else {
              currentMasks.push(path);
            }
            if (properties[i].inv && !this.solidPath) {
              this.solidPath = this.createLayerSolidPath();
            }
            this.viewData[i] = {
              elem: path,
              lastPath: "",
              op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
              invRect: rect
            };
            if (!this.viewData[i].prop.k) {
              this.drawPath(properties[i], this.viewData[i].prop.v, this.viewData[i]);
            }
          }
        }
        this.maskElement = createNS(maskType);
        len = currentMasks.length;
        for (i = 0; i < len; i += 1) {
          this.maskElement.appendChild(currentMasks[i]);
        }
        if (count > 0) {
          this.maskElement.setAttribute("id", layerId);
          this.element.maskedElement.setAttribute(maskRef, "url(" + getLocationHref() + "#" + layerId + ")");
          defs.appendChild(this.maskElement);
        }
        if (this.viewData.length) {
          this.element.addRenderableComponent(this);
        }
      }
      MaskElement.prototype.getMaskProperty = function(pos) {
        return this.viewData[pos].prop;
      };
      MaskElement.prototype.renderFrame = function(isFirstFrame) {
        var finalMat = this.element.finalTransform.mat;
        var i;
        var len = this.masksProperties.length;
        for (i = 0; i < len; i += 1) {
          if (this.viewData[i].prop._mdf || isFirstFrame) {
            this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]);
          }
          if (this.viewData[i].op._mdf || isFirstFrame) {
            this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v);
          }
          if (this.masksProperties[i].mode !== "n") {
            if (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame)) {
              this.viewData[i].invRect.setAttribute("transform", finalMat.getInverseMatrix().to2dCSS());
            }
            if (this.storedData[i].x && (this.storedData[i].x._mdf || isFirstFrame)) {
              var feMorph = this.storedData[i].expan;
              if (this.storedData[i].x.v < 0) {
                if (this.storedData[i].lastOperator !== "erode") {
                  this.storedData[i].lastOperator = "erode";
                  this.storedData[i].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[i].filterId + ")");
                }
                feMorph.setAttribute("radius", -this.storedData[i].x.v);
              } else {
                if (this.storedData[i].lastOperator !== "dilate") {
                  this.storedData[i].lastOperator = "dilate";
                  this.storedData[i].elem.setAttribute("filter", null);
                }
                this.storedData[i].elem.setAttribute("stroke-width", this.storedData[i].x.v * 2);
              }
            }
          }
        }
      };
      MaskElement.prototype.getMaskelement = function() {
        return this.maskElement;
      };
      MaskElement.prototype.createLayerSolidPath = function() {
        var path = "M0,0 ";
        path += " h" + this.globalData.compSize.w;
        path += " v" + this.globalData.compSize.h;
        path += " h-" + this.globalData.compSize.w;
        path += " v-" + this.globalData.compSize.h + " ";
        return path;
      };
      MaskElement.prototype.drawPath = function(pathData, pathNodes, viewData) {
        var pathString = " M" + pathNodes.v[0][0] + "," + pathNodes.v[0][1];
        var i;
        var len;
        len = pathNodes._length;
        for (i = 1; i < len; i += 1) {
          pathString += " C" + pathNodes.o[i - 1][0] + "," + pathNodes.o[i - 1][1] + " " + pathNodes.i[i][0] + "," + pathNodes.i[i][1] + " " + pathNodes.v[i][0] + "," + pathNodes.v[i][1];
        }
        if (pathNodes.c && len > 1) {
          pathString += " C" + pathNodes.o[i - 1][0] + "," + pathNodes.o[i - 1][1] + " " + pathNodes.i[0][0] + "," + pathNodes.i[0][1] + " " + pathNodes.v[0][0] + "," + pathNodes.v[0][1];
        }
        if (viewData.lastPath !== pathString) {
          var pathShapeValue = "";
          if (viewData.elem) {
            if (pathNodes.c) {
              pathShapeValue = pathData.inv ? this.solidPath + pathString : pathString;
            }
            viewData.elem.setAttribute("d", pathShapeValue);
          }
          viewData.lastPath = pathString;
        }
      };
      MaskElement.prototype.destroy = function() {
        this.element = null;
        this.globalData = null;
        this.maskElement = null;
        this.data = null;
        this.masksProperties = null;
      };
      var filtersFactory = function() {
        var ob2 = {};
        ob2.createFilter = createFilter;
        ob2.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;
        function createFilter(filId, skipCoordinates) {
          var fil = createNS("filter");
          fil.setAttribute("id", filId);
          if (skipCoordinates !== true) {
            fil.setAttribute("filterUnits", "objectBoundingBox");
            fil.setAttribute("x", "0%");
            fil.setAttribute("y", "0%");
            fil.setAttribute("width", "100%");
            fil.setAttribute("height", "100%");
          }
          return fil;
        }
        function createAlphaToLuminanceFilter() {
          var feColorMatrix = createNS("feColorMatrix");
          feColorMatrix.setAttribute("type", "matrix");
          feColorMatrix.setAttribute("color-interpolation-filters", "sRGB");
          feColorMatrix.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1");
          return feColorMatrix;
        }
        return ob2;
      }();
      var featureSupport = function() {
        var ob2 = {
          maskType: true
        };
        if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
          ob2.maskType = false;
        }
        return ob2;
      }();
      var registeredEffects = {};
      var idPrefix = "filter_result_";
      function SVGEffects(elem2) {
        var i;
        var source = "SourceGraphic";
        var len = elem2.data.ef ? elem2.data.ef.length : 0;
        var filId = createElementID();
        var fil = filtersFactory.createFilter(filId, true);
        var count = 0;
        this.filters = [];
        var filterManager;
        for (i = 0; i < len; i += 1) {
          filterManager = null;
          var type = elem2.data.ef[i].ty;
          if (registeredEffects[type]) {
            var Effect = registeredEffects[type].effect;
            filterManager = new Effect(fil, elem2.effectsManager.effectElements[i], elem2, idPrefix + count, source);
            source = idPrefix + count;
            if (registeredEffects[type].countsAsEffect) {
              count += 1;
            }
          }
          if (filterManager) {
            this.filters.push(filterManager);
          }
        }
        if (count) {
          elem2.globalData.defs.appendChild(fil);
          elem2.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + filId + ")");
        }
        if (this.filters.length) {
          elem2.addRenderableComponent(this);
        }
      }
      SVGEffects.prototype.renderFrame = function(_isFirstFrame) {
        var i;
        var len = this.filters.length;
        for (i = 0; i < len; i += 1) {
          this.filters[i].renderFrame(_isFirstFrame);
        }
      };
      function registerEffect(id, effect2, countsAsEffect) {
        registeredEffects[id] = {
          effect: effect2,
          countsAsEffect
        };
      }
      function SVGBaseElement() {
      }
      SVGBaseElement.prototype = {
        initRendererElement: function initRendererElement() {
          this.layerElement = createNS("g");
        },
        createContainerElements: function createContainerElements() {
          this.matteElement = createNS("g");
          this.transformedElement = this.layerElement;
          this.maskedElement = this.layerElement;
          this._sizeChanged = false;
          var layerElementParent = null;
          var filId;
          var fil;
          var gg;
          if (this.data.td) {
            if (this.data.td == 3 || this.data.td == 1) {
              var masker = createNS("mask");
              masker.setAttribute("id", this.layerId);
              masker.setAttribute("mask-type", this.data.td == 3 ? "luminance" : "alpha");
              masker.appendChild(this.layerElement);
              layerElementParent = masker;
              this.globalData.defs.appendChild(masker);
              if (!featureSupport.maskType && this.data.td == 1) {
                masker.setAttribute("mask-type", "luminance");
                filId = createElementID();
                fil = filtersFactory.createFilter(filId);
                this.globalData.defs.appendChild(fil);
                fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                gg = createNS("g");
                gg.appendChild(this.layerElement);
                layerElementParent = gg;
                masker.appendChild(gg);
                gg.setAttribute("filter", "url(" + getLocationHref() + "#" + filId + ")");
              }
            } else if (this.data.td == 2) {
              var maskGroup = createNS("mask");
              maskGroup.setAttribute("id", this.layerId);
              maskGroup.setAttribute("mask-type", "alpha");
              var maskGrouper = createNS("g");
              maskGroup.appendChild(maskGrouper);
              filId = createElementID();
              fil = filtersFactory.createFilter(filId);
              var feCTr = createNS("feComponentTransfer");
              feCTr.setAttribute("in", "SourceGraphic");
              fil.appendChild(feCTr);
              var feFunc = createNS("feFuncA");
              feFunc.setAttribute("type", "table");
              feFunc.setAttribute("tableValues", "1.0 0.0");
              feCTr.appendChild(feFunc);
              this.globalData.defs.appendChild(fil);
              var alphaRect = createNS("rect");
              alphaRect.setAttribute("width", this.comp.data.w);
              alphaRect.setAttribute("height", this.comp.data.h);
              alphaRect.setAttribute("x", "0");
              alphaRect.setAttribute("y", "0");
              alphaRect.setAttribute("fill", "#ffffff");
              alphaRect.setAttribute("opacity", "0");
              maskGrouper.setAttribute("filter", "url(" + getLocationHref() + "#" + filId + ")");
              maskGrouper.appendChild(alphaRect);
              maskGrouper.appendChild(this.layerElement);
              layerElementParent = maskGrouper;
              if (!featureSupport.maskType) {
                maskGroup.setAttribute("mask-type", "luminance");
                fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                gg = createNS("g");
                maskGrouper.appendChild(alphaRect);
                gg.appendChild(this.layerElement);
                layerElementParent = gg;
                maskGrouper.appendChild(gg);
              }
              this.globalData.defs.appendChild(maskGroup);
            }
          } else if (this.data.tt) {
            this.matteElement.appendChild(this.layerElement);
            layerElementParent = this.matteElement;
            this.baseElement = this.matteElement;
          } else {
            this.baseElement = this.layerElement;
          }
          if (this.data.ln) {
            this.layerElement.setAttribute("id", this.data.ln);
          }
          if (this.data.cl) {
            this.layerElement.setAttribute("class", this.data.cl);
          }
          if (this.data.ty === 0 && !this.data.hd) {
            var cp = createNS("clipPath");
            var pt = createNS("path");
            pt.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var clipId = createElementID();
            cp.setAttribute("id", clipId);
            cp.appendChild(pt);
            this.globalData.defs.appendChild(cp);
            if (this.checkMasks()) {
              var cpGroup = createNS("g");
              cpGroup.setAttribute("clip-path", "url(" + getLocationHref() + "#" + clipId + ")");
              cpGroup.appendChild(this.layerElement);
              this.transformedElement = cpGroup;
              if (layerElementParent) {
                layerElementParent.appendChild(this.transformedElement);
              } else {
                this.baseElement = this.transformedElement;
              }
            } else {
              this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + clipId + ")");
            }
          }
          if (this.data.bm !== 0) {
            this.setBlendMode();
          }
        },
        renderElement: function renderElement() {
          if (this.finalTransform._matMdf) {
            this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS());
          }
          if (this.finalTransform._opMdf) {
            this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
          }
        },
        destroyBaseElement: function destroyBaseElement() {
          this.layerElement = null;
          this.matteElement = null;
          this.maskManager.destroy();
        },
        getBaseElement: function getBaseElement() {
          if (this.data.hd) {
            return null;
          }
          return this.baseElement;
        },
        createRenderableComponents: function createRenderableComponents() {
          this.maskManager = new MaskElement(this.data, this, this.globalData);
          this.renderableEffectsManager = new SVGEffects(this);
        },
        setMatte: function setMatte(id) {
          if (!this.matteElement) {
            return;
          }
          this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + id + ")");
        }
      };
      function HierarchyElement() {
      }
      HierarchyElement.prototype = {
        initHierarchy: function initHierarchy() {
          this.hierarchy = [];
          this._isParent = false;
          this.checkParenting();
        },
        setHierarchy: function setHierarchy(hierarchy) {
          this.hierarchy = hierarchy;
        },
        setAsParent: function setAsParent() {
          this._isParent = true;
        },
        checkParenting: function checkParenting() {
          if (this.data.parent !== void 0) {
            this.comp.buildElementParenting(this, this.data.parent, []);
          }
        }
      };
      function RenderableDOMElement() {
      }
      (function() {
        var _prototype = {
          initElement: function initElement(data2, globalData2, comp2) {
            this.initFrame();
            this.initBaseData(data2, globalData2, comp2);
            this.initTransform(data2, globalData2, comp2);
            this.initHierarchy();
            this.initRenderable();
            this.initRendererElement();
            this.createContainerElements();
            this.createRenderableComponents();
            this.createContent();
            this.hide();
          },
          hide: function hide() {
            if (!this.hidden && (!this.isInRange || this.isTransparent)) {
              var elem2 = this.baseElement || this.layerElement;
              elem2.style.display = "none";
              this.hidden = true;
            }
          },
          show: function show() {
            if (this.isInRange && !this.isTransparent) {
              if (!this.data.hd) {
                var elem2 = this.baseElement || this.layerElement;
                elem2.style.display = "block";
              }
              this.hidden = false;
              this._isFirstFrame = true;
            }
          },
          renderFrame: function renderFrame() {
            if (this.data.hd || this.hidden) {
              return;
            }
            this.renderTransform();
            this.renderRenderable();
            this.renderElement();
            this.renderInnerContent();
            if (this._isFirstFrame) {
              this._isFirstFrame = false;
            }
          },
          renderInnerContent: function renderInnerContent() {
          },
          prepareFrame: function prepareFrame(num) {
            this._mdf = false;
            this.prepareRenderableFrame(num);
            this.prepareProperties(num, this.isInRange);
            this.checkTransparency();
          },
          destroy: function destroy() {
            this.innerElem = null;
            this.destroyBaseElement();
          }
        };
        extendPrototype([RenderableElement, createProxyFunction(_prototype)], RenderableDOMElement);
      })();
      function IImageElement(data2, globalData2, comp2) {
        this.assetData = globalData2.getAssetData(data2.refId);
        this.initElement(data2, globalData2, comp2);
        this.sourceRect = {
          top: 0,
          left: 0,
          width: this.assetData.w,
          height: this.assetData.h
        };
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement);
      IImageElement.prototype.createContent = function() {
        var assetPath = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS("image");
        this.innerElem.setAttribute("width", this.assetData.w + "px");
        this.innerElem.setAttribute("height", this.assetData.h + "px");
        this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
        this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", assetPath);
        this.layerElement.appendChild(this.innerElem);
      };
      IImageElement.prototype.sourceRectAtTime = function() {
        return this.sourceRect;
      };
      function ProcessedElement(element, position2) {
        this.elem = element;
        this.pos = position2;
      }
      function IShapeElement() {
      }
      IShapeElement.prototype = {
        addShapeToModifiers: function addShapeToModifiers(data2) {
          var i;
          var len = this.shapeModifiers.length;
          for (i = 0; i < len; i += 1) {
            this.shapeModifiers[i].addShape(data2);
          }
        },
        isShapeInAnimatedModifiers: function isShapeInAnimatedModifiers(data2) {
          var i = 0;
          var len = this.shapeModifiers.length;
          while (i < len) {
            if (this.shapeModifiers[i].isAnimatedWithShape(data2)) {
              return true;
            }
          }
          return false;
        },
        renderModifiers: function renderModifiers() {
          if (!this.shapeModifiers.length) {
            return;
          }
          var i;
          var len = this.shapes.length;
          for (i = 0; i < len; i += 1) {
            this.shapes[i].sh.reset();
          }
          len = this.shapeModifiers.length;
          var shouldBreakProcess;
          for (i = len - 1; i >= 0; i -= 1) {
            shouldBreakProcess = this.shapeModifiers[i].processShapes(this._isFirstFrame);
            if (shouldBreakProcess) {
              break;
            }
          }
        },
        searchProcessedElement: function searchProcessedElement(elem2) {
          var elements = this.processedElements;
          var i = 0;
          var len = elements.length;
          while (i < len) {
            if (elements[i].elem === elem2) {
              return elements[i].pos;
            }
            i += 1;
          }
          return 0;
        },
        addProcessedElement: function addProcessedElement(elem2, pos) {
          var elements = this.processedElements;
          var i = elements.length;
          while (i) {
            i -= 1;
            if (elements[i].elem === elem2) {
              elements[i].pos = pos;
              return;
            }
          }
          elements.push(new ProcessedElement(elem2, pos));
        },
        prepareFrame: function prepareFrame(num) {
          this.prepareRenderableFrame(num);
          this.prepareProperties(num, this.isInRange);
        }
      };
      var lineCapEnum = {
        1: "butt",
        2: "round",
        3: "square"
      };
      var lineJoinEnum = {
        1: "miter",
        2: "round",
        3: "bevel"
      };
      function SVGShapeData(transformers, level, shape) {
        this.caches = [];
        this.styles = [];
        this.transformers = transformers;
        this.lStr = "";
        this.sh = shape;
        this.lvl = level;
        this._isAnimated = !!shape.k;
        var i = 0;
        var len = transformers.length;
        while (i < len) {
          if (transformers[i].mProps.dynamicProperties.length) {
            this._isAnimated = true;
            break;
          }
          i += 1;
        }
      }
      SVGShapeData.prototype.setAsAnimated = function() {
        this._isAnimated = true;
      };
      function SVGStyleData(data2, level) {
        this.data = data2;
        this.type = data2.ty;
        this.d = "";
        this.lvl = level;
        this._mdf = false;
        this.closed = data2.hd === true;
        this.pElem = createNS("path");
        this.msElem = null;
      }
      SVGStyleData.prototype.reset = function() {
        this.d = "";
        this._mdf = false;
      };
      function DashProperty(elem2, data2, renderer2, container) {
        this.elem = elem2;
        this.frameId = -1;
        this.dataProps = createSizedArray(data2.length);
        this.renderer = renderer2;
        this.k = false;
        this.dashStr = "";
        this.dashArray = createTypedArray("float32", data2.length ? data2.length - 1 : 0);
        this.dashoffset = createTypedArray("float32", 1);
        this.initDynamicPropertyContainer(container);
        var i;
        var len = data2.length || 0;
        var prop;
        for (i = 0; i < len; i += 1) {
          prop = PropertyFactory.getProp(elem2, data2[i].v, 0, 0, this);
          this.k = prop.k || this.k;
          this.dataProps[i] = {
            n: data2[i].n,
            p: prop
          };
        }
        if (!this.k) {
          this.getValue(true);
        }
        this._isAnimated = this.k;
      }
      DashProperty.prototype.getValue = function(forceRender) {
        if (this.elem.globalData.frameId === this.frameId && !forceRender) {
          return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();
        this._mdf = this._mdf || forceRender;
        if (this._mdf) {
          var i = 0;
          var len = this.dataProps.length;
          if (this.renderer === "svg") {
            this.dashStr = "";
          }
          for (i = 0; i < len; i += 1) {
            if (this.dataProps[i].n !== "o") {
              if (this.renderer === "svg") {
                this.dashStr += " " + this.dataProps[i].p.v;
              } else {
                this.dashArray[i] = this.dataProps[i].p.v;
              }
            } else {
              this.dashoffset[0] = this.dataProps[i].p.v;
            }
          }
        }
      };
      extendPrototype([DynamicPropertyContainer], DashProperty);
      function SVGStrokeStyleData(elem2, data2, styleOb) {
        this.initDynamicPropertyContainer(elem2);
        this.getValue = this.iterateDynamicProperties;
        this.o = PropertyFactory.getProp(elem2, data2.o, 0, 0.01, this);
        this.w = PropertyFactory.getProp(elem2, data2.w, 0, null, this);
        this.d = new DashProperty(elem2, data2.d || {}, "svg", this);
        this.c = PropertyFactory.getProp(elem2, data2.c, 1, 255, this);
        this.style = styleOb;
        this._isAnimated = !!this._isAnimated;
      }
      extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
      function SVGFillStyleData(elem2, data2, styleOb) {
        this.initDynamicPropertyContainer(elem2);
        this.getValue = this.iterateDynamicProperties;
        this.o = PropertyFactory.getProp(elem2, data2.o, 0, 0.01, this);
        this.c = PropertyFactory.getProp(elem2, data2.c, 1, 255, this);
        this.style = styleOb;
      }
      extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
      function SVGNoStyleData(elem2, data2, styleOb) {
        this.initDynamicPropertyContainer(elem2);
        this.getValue = this.iterateDynamicProperties;
        this.style = styleOb;
      }
      extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
      function GradientProperty(elem2, data2, container) {
        this.data = data2;
        this.c = createTypedArray("uint8c", data2.p * 4);
        var cLength = data2.k.k[0].s ? data2.k.k[0].s.length - data2.p * 4 : data2.k.k.length - data2.p * 4;
        this.o = createTypedArray("float32", cLength);
        this._cmdf = false;
        this._omdf = false;
        this._collapsable = this.checkCollapsable();
        this._hasOpacity = cLength;
        this.initDynamicPropertyContainer(container);
        this.prop = PropertyFactory.getProp(elem2, data2.k, 1, null, this);
        this.k = this.prop.k;
        this.getValue(true);
      }
      GradientProperty.prototype.comparePoints = function(values, points) {
        var i = 0;
        var len = this.o.length / 2;
        var diff;
        while (i < len) {
          diff = Math.abs(values[i * 4] - values[points * 4 + i * 2]);
          if (diff > 0.01) {
            return false;
          }
          i += 1;
        }
        return true;
      };
      GradientProperty.prototype.checkCollapsable = function() {
        if (this.o.length / 2 !== this.c.length / 4) {
          return false;
        }
        if (this.data.k.k[0].s) {
          var i = 0;
          var len = this.data.k.k.length;
          while (i < len) {
            if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) {
              return false;
            }
            i += 1;
          }
        } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
          return false;
        }
        return true;
      };
      GradientProperty.prototype.getValue = function(forceRender) {
        this.prop.getValue();
        this._mdf = false;
        this._cmdf = false;
        this._omdf = false;
        if (this.prop._mdf || forceRender) {
          var i;
          var len = this.data.p * 4;
          var mult;
          var val2;
          for (i = 0; i < len; i += 1) {
            mult = i % 4 === 0 ? 100 : 255;
            val2 = Math.round(this.prop.v[i] * mult);
            if (this.c[i] !== val2) {
              this.c[i] = val2;
              this._cmdf = !forceRender;
            }
          }
          if (this.o.length) {
            len = this.prop.v.length;
            for (i = this.data.p * 4; i < len; i += 1) {
              mult = i % 2 === 0 ? 100 : 1;
              val2 = i % 2 === 0 ? Math.round(this.prop.v[i] * 100) : this.prop.v[i];
              if (this.o[i - this.data.p * 4] !== val2) {
                this.o[i - this.data.p * 4] = val2;
                this._omdf = !forceRender;
              }
            }
          }
          this._mdf = !forceRender;
        }
      };
      extendPrototype([DynamicPropertyContainer], GradientProperty);
      function SVGGradientFillStyleData(elem2, data2, styleOb) {
        this.initDynamicPropertyContainer(elem2);
        this.getValue = this.iterateDynamicProperties;
        this.initGradientData(elem2, data2, styleOb);
      }
      SVGGradientFillStyleData.prototype.initGradientData = function(elem2, data2, styleOb) {
        this.o = PropertyFactory.getProp(elem2, data2.o, 0, 0.01, this);
        this.s = PropertyFactory.getProp(elem2, data2.s, 1, null, this);
        this.e = PropertyFactory.getProp(elem2, data2.e, 1, null, this);
        this.h = PropertyFactory.getProp(elem2, data2.h || {
          k: 0
        }, 0, 0.01, this);
        this.a = PropertyFactory.getProp(elem2, data2.a || {
          k: 0
        }, 0, degToRads, this);
        this.g = new GradientProperty(elem2, data2.g, this);
        this.style = styleOb;
        this.stops = [];
        this.setGradientData(styleOb.pElem, data2);
        this.setGradientOpacity(data2, styleOb);
        this._isAnimated = !!this._isAnimated;
      };
      SVGGradientFillStyleData.prototype.setGradientData = function(pathElement, data2) {
        var gradientId = createElementID();
        var gfill = createNS(data2.t === 1 ? "linearGradient" : "radialGradient");
        gfill.setAttribute("id", gradientId);
        gfill.setAttribute("spreadMethod", "pad");
        gfill.setAttribute("gradientUnits", "userSpaceOnUse");
        var stops = [];
        var stop;
        var j;
        var jLen;
        jLen = data2.g.p * 4;
        for (j = 0; j < jLen; j += 4) {
          stop = createNS("stop");
          gfill.appendChild(stop);
          stops.push(stop);
        }
        pathElement.setAttribute(data2.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + gradientId + ")");
        this.gf = gfill;
        this.cst = stops;
      };
      SVGGradientFillStyleData.prototype.setGradientOpacity = function(data2, styleOb) {
        if (this.g._hasOpacity && !this.g._collapsable) {
          var stop;
          var j;
          var jLen;
          var mask2 = createNS("mask");
          var maskElement = createNS("path");
          mask2.appendChild(maskElement);
          var opacityId = createElementID();
          var maskId = createElementID();
          mask2.setAttribute("id", maskId);
          var opFill = createNS(data2.t === 1 ? "linearGradient" : "radialGradient");
          opFill.setAttribute("id", opacityId);
          opFill.setAttribute("spreadMethod", "pad");
          opFill.setAttribute("gradientUnits", "userSpaceOnUse");
          jLen = data2.g.k.k[0].s ? data2.g.k.k[0].s.length : data2.g.k.k.length;
          var stops = this.stops;
          for (j = data2.g.p * 4; j < jLen; j += 2) {
            stop = createNS("stop");
            stop.setAttribute("stop-color", "rgb(255,255,255)");
            opFill.appendChild(stop);
            stops.push(stop);
          }
          maskElement.setAttribute(data2.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + opacityId + ")");
          if (data2.ty === "gs") {
            maskElement.setAttribute("stroke-linecap", lineCapEnum[data2.lc || 2]);
            maskElement.setAttribute("stroke-linejoin", lineJoinEnum[data2.lj || 2]);
            if (data2.lj === 1) {
              maskElement.setAttribute("stroke-miterlimit", data2.ml);
            }
          }
          this.of = opFill;
          this.ms = mask2;
          this.ost = stops;
          this.maskId = maskId;
          styleOb.msElem = maskElement;
        }
      };
      extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
      function SVGGradientStrokeStyleData(elem2, data2, styleOb) {
        this.initDynamicPropertyContainer(elem2);
        this.getValue = this.iterateDynamicProperties;
        this.w = PropertyFactory.getProp(elem2, data2.w, 0, null, this);
        this.d = new DashProperty(elem2, data2.d || {}, "svg", this);
        this.initGradientData(elem2, data2, styleOb);
        this._isAnimated = !!this._isAnimated;
      }
      extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
      function ShapeGroupData() {
        this.it = [];
        this.prevViewData = [];
        this.gr = createNS("g");
      }
      function SVGTransformData(mProps, op2, container) {
        this.transform = {
          mProps,
          op: op2,
          container
        };
        this.elements = [];
        this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
      }
      var buildShapeString = function buildShapeString2(pathNodes, length2, closed, mat) {
        if (length2 === 0) {
          return "";
        }
        var _o = pathNodes.o;
        var _i = pathNodes.i;
        var _v = pathNodes.v;
        var i;
        var shapeString = " M" + mat.applyToPointStringified(_v[0][0], _v[0][1]);
        for (i = 1; i < length2; i += 1) {
          shapeString += " C" + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + " " + mat.applyToPointStringified(_i[i][0], _i[i][1]) + " " + mat.applyToPointStringified(_v[i][0], _v[i][1]);
        }
        if (closed && length2) {
          shapeString += " C" + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + " " + mat.applyToPointStringified(_i[0][0], _i[0][1]) + " " + mat.applyToPointStringified(_v[0][0], _v[0][1]);
          shapeString += "z";
        }
        return shapeString;
      };
      var SVGElementsRenderer = function() {
        var _identityMatrix = new Matrix();
        var _matrixHelper = new Matrix();
        var ob2 = {
          createRenderFunction
        };
        function createRenderFunction(data2) {
          switch (data2.ty) {
            case "fl":
              return renderFill;
            case "gf":
              return renderGradient;
            case "gs":
              return renderGradientStroke;
            case "st":
              return renderStroke;
            case "sh":
            case "el":
            case "rc":
            case "sr":
              return renderPath;
            case "tr":
              return renderContentTransform;
            case "no":
              return renderNoop;
            default:
              return null;
          }
        }
        function renderContentTransform(styleData, itemData, isFirstFrame) {
          if (isFirstFrame || itemData.transform.op._mdf) {
            itemData.transform.container.setAttribute("opacity", itemData.transform.op.v);
          }
          if (isFirstFrame || itemData.transform.mProps._mdf) {
            itemData.transform.container.setAttribute("transform", itemData.transform.mProps.v.to2dCSS());
          }
        }
        function renderNoop() {
        }
        function renderPath(styleData, itemData, isFirstFrame) {
          var j;
          var jLen;
          var pathStringTransformed;
          var redraw;
          var pathNodes;
          var l;
          var lLen = itemData.styles.length;
          var lvl = itemData.lvl;
          var paths;
          var mat;
          var props;
          var iterations;
          var k;
          for (l = 0; l < lLen; l += 1) {
            redraw = itemData.sh._mdf || isFirstFrame;
            if (itemData.styles[l].lvl < lvl) {
              mat = _matrixHelper.reset();
              iterations = lvl - itemData.styles[l].lvl;
              k = itemData.transformers.length - 1;
              while (!redraw && iterations > 0) {
                redraw = itemData.transformers[k].mProps._mdf || redraw;
                iterations -= 1;
                k -= 1;
              }
              if (redraw) {
                iterations = lvl - itemData.styles[l].lvl;
                k = itemData.transformers.length - 1;
                while (iterations > 0) {
                  props = itemData.transformers[k].mProps.v.props;
                  mat.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15]);
                  iterations -= 1;
                  k -= 1;
                }
              }
            } else {
              mat = _identityMatrix;
            }
            paths = itemData.sh.paths;
            jLen = paths._length;
            if (redraw) {
              pathStringTransformed = "";
              for (j = 0; j < jLen; j += 1) {
                pathNodes = paths.shapes[j];
                if (pathNodes && pathNodes._length) {
                  pathStringTransformed += buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
                }
              }
              itemData.caches[l] = pathStringTransformed;
            } else {
              pathStringTransformed = itemData.caches[l];
            }
            itemData.styles[l].d += styleData.hd === true ? "" : pathStringTransformed;
            itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf;
          }
        }
        function renderFill(styleData, itemData, isFirstFrame) {
          var styleElem = itemData.style;
          if (itemData.c._mdf || isFirstFrame) {
            styleElem.pElem.setAttribute("fill", "rgb(" + bmFloor(itemData.c.v[0]) + "," + bmFloor(itemData.c.v[1]) + "," + bmFloor(itemData.c.v[2]) + ")");
          }
          if (itemData.o._mdf || isFirstFrame) {
            styleElem.pElem.setAttribute("fill-opacity", itemData.o.v);
          }
        }
        function renderGradientStroke(styleData, itemData, isFirstFrame) {
          renderGradient(styleData, itemData, isFirstFrame);
          renderStroke(styleData, itemData, isFirstFrame);
        }
        function renderGradient(styleData, itemData, isFirstFrame) {
          var gfill = itemData.gf;
          var hasOpacity = itemData.g._hasOpacity;
          var pt1 = itemData.s.v;
          var pt2 = itemData.e.v;
          if (itemData.o._mdf || isFirstFrame) {
            var attr = styleData.ty === "gf" ? "fill-opacity" : "stroke-opacity";
            itemData.style.pElem.setAttribute(attr, itemData.o.v);
          }
          if (itemData.s._mdf || isFirstFrame) {
            var attr1 = styleData.t === 1 ? "x1" : "cx";
            var attr2 = attr1 === "x1" ? "y1" : "cy";
            gfill.setAttribute(attr1, pt1[0]);
            gfill.setAttribute(attr2, pt1[1]);
            if (hasOpacity && !itemData.g._collapsable) {
              itemData.of.setAttribute(attr1, pt1[0]);
              itemData.of.setAttribute(attr2, pt1[1]);
            }
          }
          var stops;
          var i;
          var len;
          var stop;
          if (itemData.g._cmdf || isFirstFrame) {
            stops = itemData.cst;
            var cValues = itemData.g.c;
            len = stops.length;
            for (i = 0; i < len; i += 1) {
              stop = stops[i];
              stop.setAttribute("offset", cValues[i * 4] + "%");
              stop.setAttribute("stop-color", "rgb(" + cValues[i * 4 + 1] + "," + cValues[i * 4 + 2] + "," + cValues[i * 4 + 3] + ")");
            }
          }
          if (hasOpacity && (itemData.g._omdf || isFirstFrame)) {
            var oValues = itemData.g.o;
            if (itemData.g._collapsable) {
              stops = itemData.cst;
            } else {
              stops = itemData.ost;
            }
            len = stops.length;
            for (i = 0; i < len; i += 1) {
              stop = stops[i];
              if (!itemData.g._collapsable) {
                stop.setAttribute("offset", oValues[i * 2] + "%");
              }
              stop.setAttribute("stop-opacity", oValues[i * 2 + 1]);
            }
          }
          if (styleData.t === 1) {
            if (itemData.e._mdf || isFirstFrame) {
              gfill.setAttribute("x2", pt2[0]);
              gfill.setAttribute("y2", pt2[1]);
              if (hasOpacity && !itemData.g._collapsable) {
                itemData.of.setAttribute("x2", pt2[0]);
                itemData.of.setAttribute("y2", pt2[1]);
              }
            }
          } else {
            var rad;
            if (itemData.s._mdf || itemData.e._mdf || isFirstFrame) {
              rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
              gfill.setAttribute("r", rad);
              if (hasOpacity && !itemData.g._collapsable) {
                itemData.of.setAttribute("r", rad);
              }
            }
            if (itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || isFirstFrame) {
              if (!rad) {
                rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
              }
              var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
              var percent = itemData.h.v;
              if (percent >= 1) {
                percent = 0.99;
              } else if (percent <= -1) {
                percent = -0.99;
              }
              var dist = rad * percent;
              var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
              var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
              gfill.setAttribute("fx", x);
              gfill.setAttribute("fy", y);
              if (hasOpacity && !itemData.g._collapsable) {
                itemData.of.setAttribute("fx", x);
                itemData.of.setAttribute("fy", y);
              }
            }
          }
        }
        function renderStroke(styleData, itemData, isFirstFrame) {
          var styleElem = itemData.style;
          var d = itemData.d;
          if (d && (d._mdf || isFirstFrame) && d.dashStr) {
            styleElem.pElem.setAttribute("stroke-dasharray", d.dashStr);
            styleElem.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0]);
          }
          if (itemData.c && (itemData.c._mdf || isFirstFrame)) {
            styleElem.pElem.setAttribute("stroke", "rgb(" + bmFloor(itemData.c.v[0]) + "," + bmFloor(itemData.c.v[1]) + "," + bmFloor(itemData.c.v[2]) + ")");
          }
          if (itemData.o._mdf || isFirstFrame) {
            styleElem.pElem.setAttribute("stroke-opacity", itemData.o.v);
          }
          if (itemData.w._mdf || isFirstFrame) {
            styleElem.pElem.setAttribute("stroke-width", itemData.w.v);
            if (styleElem.msElem) {
              styleElem.msElem.setAttribute("stroke-width", itemData.w.v);
            }
          }
        }
        return ob2;
      }();
      function SVGShapeElement(data2, globalData2, comp2) {
        this.shapes = [];
        this.shapesData = data2.shapes;
        this.stylesList = [];
        this.shapeModifiers = [];
        this.itemsData = [];
        this.processedElements = [];
        this.animatedContents = [];
        this.initElement(data2, globalData2, comp2);
        this.prevViewData = [];
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement);
      SVGShapeElement.prototype.initSecondaryElement = function() {
      };
      SVGShapeElement.prototype.identityMatrix = new Matrix();
      SVGShapeElement.prototype.buildExpressionInterface = function() {
      };
      SVGShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
        this.filterUniqueShapes();
      };
      SVGShapeElement.prototype.filterUniqueShapes = function() {
        var i;
        var len = this.shapes.length;
        var shape;
        var j;
        var jLen = this.stylesList.length;
        var style;
        var tempShapes = [];
        var areAnimated = false;
        for (j = 0; j < jLen; j += 1) {
          style = this.stylesList[j];
          areAnimated = false;
          tempShapes.length = 0;
          for (i = 0; i < len; i += 1) {
            shape = this.shapes[i];
            if (shape.styles.indexOf(style) !== -1) {
              tempShapes.push(shape);
              areAnimated = shape._isAnimated || areAnimated;
            }
          }
          if (tempShapes.length > 1 && areAnimated) {
            this.setShapesAsAnimated(tempShapes);
          }
        }
      };
      SVGShapeElement.prototype.setShapesAsAnimated = function(shapes) {
        var i;
        var len = shapes.length;
        for (i = 0; i < len; i += 1) {
          shapes[i].setAsAnimated();
        }
      };
      SVGShapeElement.prototype.createStyleElement = function(data2, level) {
        var elementData;
        var styleOb = new SVGStyleData(data2, level);
        var pathElement = styleOb.pElem;
        if (data2.ty === "st") {
          elementData = new SVGStrokeStyleData(this, data2, styleOb);
        } else if (data2.ty === "fl") {
          elementData = new SVGFillStyleData(this, data2, styleOb);
        } else if (data2.ty === "gf" || data2.ty === "gs") {
          var GradientConstructor = data2.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
          elementData = new GradientConstructor(this, data2, styleOb);
          this.globalData.defs.appendChild(elementData.gf);
          if (elementData.maskId) {
            this.globalData.defs.appendChild(elementData.ms);
            this.globalData.defs.appendChild(elementData.of);
            pathElement.setAttribute("mask", "url(" + getLocationHref() + "#" + elementData.maskId + ")");
          }
        } else if (data2.ty === "no") {
          elementData = new SVGNoStyleData(this, data2, styleOb);
        }
        if (data2.ty === "st" || data2.ty === "gs") {
          pathElement.setAttribute("stroke-linecap", lineCapEnum[data2.lc || 2]);
          pathElement.setAttribute("stroke-linejoin", lineJoinEnum[data2.lj || 2]);
          pathElement.setAttribute("fill-opacity", "0");
          if (data2.lj === 1) {
            pathElement.setAttribute("stroke-miterlimit", data2.ml);
          }
        }
        if (data2.r === 2) {
          pathElement.setAttribute("fill-rule", "evenodd");
        }
        if (data2.ln) {
          pathElement.setAttribute("id", data2.ln);
        }
        if (data2.cl) {
          pathElement.setAttribute("class", data2.cl);
        }
        if (data2.bm) {
          pathElement.style["mix-blend-mode"] = getBlendMode(data2.bm);
        }
        this.stylesList.push(styleOb);
        this.addToAnimatedContents(data2, elementData);
        return elementData;
      };
      SVGShapeElement.prototype.createGroupElement = function(data2) {
        var elementData = new ShapeGroupData();
        if (data2.ln) {
          elementData.gr.setAttribute("id", data2.ln);
        }
        if (data2.cl) {
          elementData.gr.setAttribute("class", data2.cl);
        }
        if (data2.bm) {
          elementData.gr.style["mix-blend-mode"] = getBlendMode(data2.bm);
        }
        return elementData;
      };
      SVGShapeElement.prototype.createTransformElement = function(data2, container) {
        var transformProperty = TransformPropertyFactory.getTransformProperty(this, data2, this);
        var elementData = new SVGTransformData(transformProperty, transformProperty.o, container);
        this.addToAnimatedContents(data2, elementData);
        return elementData;
      };
      SVGShapeElement.prototype.createShapeElement = function(data2, ownTransformers, level) {
        var ty = 4;
        if (data2.ty === "rc") {
          ty = 5;
        } else if (data2.ty === "el") {
          ty = 6;
        } else if (data2.ty === "sr") {
          ty = 7;
        }
        var shapeProperty = ShapePropertyFactory.getShapeProp(this, data2, ty, this);
        var elementData = new SVGShapeData(ownTransformers, level, shapeProperty);
        this.shapes.push(elementData);
        this.addShapeToModifiers(elementData);
        this.addToAnimatedContents(data2, elementData);
        return elementData;
      };
      SVGShapeElement.prototype.addToAnimatedContents = function(data2, element) {
        var i = 0;
        var len = this.animatedContents.length;
        while (i < len) {
          if (this.animatedContents[i].element === element) {
            return;
          }
          i += 1;
        }
        this.animatedContents.push({
          fn: SVGElementsRenderer.createRenderFunction(data2),
          element,
          data: data2
        });
      };
      SVGShapeElement.prototype.setElementStyles = function(elementData) {
        var arr = elementData.styles;
        var j;
        var jLen = this.stylesList.length;
        for (j = 0; j < jLen; j += 1) {
          if (!this.stylesList[j].closed) {
            arr.push(this.stylesList[j]);
          }
        }
      };
      SVGShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = true;
        var i;
        var len = this.itemsData.length;
        for (i = 0; i < len; i += 1) {
          this.prevViewData[i] = this.itemsData[i];
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
        this.filterUniqueShapes();
        len = this.dynamicProperties.length;
        for (i = 0; i < len; i += 1) {
          this.dynamicProperties[i].getValue();
        }
        this.renderModifiers();
      };
      SVGShapeElement.prototype.searchShapes = function(arr, itemsData, prevViewData, container, level, transformers, render) {
        var ownTransformers = [].concat(transformers);
        var i;
        var len = arr.length - 1;
        var j;
        var jLen;
        var ownStyles = [];
        var ownModifiers = [];
        var currentTransform;
        var modifier;
        var processedPos;
        for (i = len; i >= 0; i -= 1) {
          processedPos = this.searchProcessedElement(arr[i]);
          if (!processedPos) {
            arr[i]._render = render;
          } else {
            itemsData[i] = prevViewData[processedPos - 1];
          }
          if (arr[i].ty === "fl" || arr[i].ty === "st" || arr[i].ty === "gf" || arr[i].ty === "gs" || arr[i].ty === "no") {
            if (!processedPos) {
              itemsData[i] = this.createStyleElement(arr[i], level);
            } else {
              itemsData[i].style.closed = false;
            }
            if (arr[i]._render) {
              if (itemsData[i].style.pElem.parentNode !== container) {
                container.appendChild(itemsData[i].style.pElem);
              }
            }
            ownStyles.push(itemsData[i].style);
          } else if (arr[i].ty === "gr") {
            if (!processedPos) {
              itemsData[i] = this.createGroupElement(arr[i]);
            } else {
              jLen = itemsData[i].it.length;
              for (j = 0; j < jLen; j += 1) {
                itemsData[i].prevViewData[j] = itemsData[i].it[j];
              }
            }
            this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, itemsData[i].gr, level + 1, ownTransformers, render);
            if (arr[i]._render) {
              if (itemsData[i].gr.parentNode !== container) {
                container.appendChild(itemsData[i].gr);
              }
            }
          } else if (arr[i].ty === "tr") {
            if (!processedPos) {
              itemsData[i] = this.createTransformElement(arr[i], container);
            }
            currentTransform = itemsData[i].transform;
            ownTransformers.push(currentTransform);
          } else if (arr[i].ty === "sh" || arr[i].ty === "rc" || arr[i].ty === "el" || arr[i].ty === "sr") {
            if (!processedPos) {
              itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level);
            }
            this.setElementStyles(itemsData[i]);
          } else if (arr[i].ty === "tm" || arr[i].ty === "rd" || arr[i].ty === "ms" || arr[i].ty === "pb") {
            if (!processedPos) {
              modifier = ShapeModifiers.getModifier(arr[i].ty);
              modifier.init(this, arr[i]);
              itemsData[i] = modifier;
              this.shapeModifiers.push(modifier);
            } else {
              modifier = itemsData[i];
              modifier.closed = false;
            }
            ownModifiers.push(modifier);
          } else if (arr[i].ty === "rp") {
            if (!processedPos) {
              modifier = ShapeModifiers.getModifier(arr[i].ty);
              itemsData[i] = modifier;
              modifier.init(this, arr, i, itemsData);
              this.shapeModifiers.push(modifier);
              render = false;
            } else {
              modifier = itemsData[i];
              modifier.closed = true;
            }
            ownModifiers.push(modifier);
          }
          this.addProcessedElement(arr[i], i + 1);
        }
        len = ownStyles.length;
        for (i = 0; i < len; i += 1) {
          ownStyles[i].closed = true;
        }
        len = ownModifiers.length;
        for (i = 0; i < len; i += 1) {
          ownModifiers[i].closed = true;
        }
      };
      SVGShapeElement.prototype.renderInnerContent = function() {
        this.renderModifiers();
        var i;
        var len = this.stylesList.length;
        for (i = 0; i < len; i += 1) {
          this.stylesList[i].reset();
        }
        this.renderShape();
        for (i = 0; i < len; i += 1) {
          if (this.stylesList[i]._mdf || this._isFirstFrame) {
            if (this.stylesList[i].msElem) {
              this.stylesList[i].msElem.setAttribute("d", this.stylesList[i].d);
              this.stylesList[i].d = "M0 0" + this.stylesList[i].d;
            }
            this.stylesList[i].pElem.setAttribute("d", this.stylesList[i].d || "M0 0");
          }
        }
      };
      SVGShapeElement.prototype.renderShape = function() {
        var i;
        var len = this.animatedContents.length;
        var animatedContent;
        for (i = 0; i < len; i += 1) {
          animatedContent = this.animatedContents[i];
          if ((this._isFirstFrame || animatedContent.element._isAnimated) && animatedContent.data !== true) {
            animatedContent.fn(animatedContent.data, animatedContent.element, this._isFirstFrame);
          }
        }
      };
      SVGShapeElement.prototype.destroy = function() {
        this.destroyBaseElement();
        this.shapesData = null;
        this.itemsData = null;
      };
      function LetterProps(o, sw, sc, fc, m, p) {
        this.o = o;
        this.sw = sw;
        this.sc = sc;
        this.fc = fc;
        this.m = m;
        this.p = p;
        this._mdf = {
          o: true,
          sw: !!sw,
          sc: !!sc,
          fc: !!fc,
          m: true,
          p: true
        };
      }
      LetterProps.prototype.update = function(o, sw, sc, fc, m, p) {
        this._mdf.o = false;
        this._mdf.sw = false;
        this._mdf.sc = false;
        this._mdf.fc = false;
        this._mdf.m = false;
        this._mdf.p = false;
        var updated = false;
        if (this.o !== o) {
          this.o = o;
          this._mdf.o = true;
          updated = true;
        }
        if (this.sw !== sw) {
          this.sw = sw;
          this._mdf.sw = true;
          updated = true;
        }
        if (this.sc !== sc) {
          this.sc = sc;
          this._mdf.sc = true;
          updated = true;
        }
        if (this.fc !== fc) {
          this.fc = fc;
          this._mdf.fc = true;
          updated = true;
        }
        if (this.m !== m) {
          this.m = m;
          this._mdf.m = true;
          updated = true;
        }
        if (p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {
          this.p = p;
          this._mdf.p = true;
          updated = true;
        }
        return updated;
      };
      function TextProperty(elem2, data2) {
        this._frameId = initialDefaultFrame;
        this.pv = "";
        this.v = "";
        this.kf = false;
        this._isFirstFrame = true;
        this._mdf = false;
        this.data = data2;
        this.elem = elem2;
        this.comp = this.elem.comp;
        this.keysIndex = 0;
        this.canResize = false;
        this.minimumFontSize = 1;
        this.effectsSequence = [];
        this.currentData = {
          ascent: 0,
          boxWidth: this.defaultBoxWidth,
          f: "",
          fStyle: "",
          fWeight: "",
          fc: "",
          j: "",
          justifyOffset: "",
          l: [],
          lh: 0,
          lineWidths: [],
          ls: "",
          of: "",
          s: "",
          sc: "",
          sw: 0,
          t: 0,
          tr: 0,
          sz: 0,
          ps: null,
          fillColorAnim: false,
          strokeColorAnim: false,
          strokeWidthAnim: false,
          yOffset: 0,
          finalSize: 0,
          finalText: [],
          finalLineHeight: 0,
          __complete: false
        };
        this.copyData(this.currentData, this.data.d.k[0].s);
        if (!this.searchProperty()) {
          this.completeTextData(this.currentData);
        }
      }
      TextProperty.prototype.defaultBoxWidth = [0, 0];
      TextProperty.prototype.copyData = function(obj, data2) {
        for (var s in data2) {
          if (Object.prototype.hasOwnProperty.call(data2, s)) {
            obj[s] = data2[s];
          }
        }
        return obj;
      };
      TextProperty.prototype.setCurrentData = function(data2) {
        if (!data2.__complete) {
          this.completeTextData(data2);
        }
        this.currentData = data2;
        this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
        this._mdf = true;
      };
      TextProperty.prototype.searchProperty = function() {
        return this.searchKeyframes();
      };
      TextProperty.prototype.searchKeyframes = function() {
        this.kf = this.data.d.k.length > 1;
        if (this.kf) {
          this.addEffect(this.getKeyframeValue.bind(this));
        }
        return this.kf;
      };
      TextProperty.prototype.addEffect = function(effectFunction) {
        this.effectsSequence.push(effectFunction);
        this.elem.addDynamicProperty(this);
      };
      TextProperty.prototype.getValue = function(_finalValue) {
        if ((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue) {
          return;
        }
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var currentValue = this.currentData;
        var currentIndex = this.keysIndex;
        if (this.lock) {
          this.setCurrentData(this.currentData);
          return;
        }
        this.lock = true;
        this._mdf = false;
        var i;
        var len = this.effectsSequence.length;
        var finalValue = _finalValue || this.data.d.k[this.keysIndex].s;
        for (i = 0; i < len; i += 1) {
          if (currentIndex !== this.keysIndex) {
            finalValue = this.effectsSequence[i](finalValue, finalValue.t);
          } else {
            finalValue = this.effectsSequence[i](this.currentData, finalValue.t);
          }
        }
        if (currentValue !== finalValue) {
          this.setCurrentData(finalValue);
        }
        this.v = this.currentData;
        this.pv = this.v;
        this.lock = false;
        this.frameId = this.elem.globalData.frameId;
      };
      TextProperty.prototype.getKeyframeValue = function() {
        var textKeys = this.data.d.k;
        var frameNum = this.elem.comp.renderedFrame;
        var i = 0;
        var len = textKeys.length;
        while (i <= len - 1) {
          if (i === len - 1 || textKeys[i + 1].t > frameNum) {
            break;
          }
          i += 1;
        }
        if (this.keysIndex !== i) {
          this.keysIndex = i;
        }
        return this.data.d.k[this.keysIndex].s;
      };
      TextProperty.prototype.buildFinalText = function(text2) {
        var charactersArray = [];
        var i = 0;
        var len = text2.length;
        var charCode;
        var secondCharCode;
        var shouldCombine = false;
        while (i < len) {
          charCode = text2.charCodeAt(i);
          if (FontManager.isCombinedCharacter(charCode)) {
            charactersArray[charactersArray.length - 1] += text2.charAt(i);
          } else if (charCode >= 55296 && charCode <= 56319) {
            secondCharCode = text2.charCodeAt(i + 1);
            if (secondCharCode >= 56320 && secondCharCode <= 57343) {
              if (shouldCombine || FontManager.isModifier(charCode, secondCharCode)) {
                charactersArray[charactersArray.length - 1] += text2.substr(i, 2);
                shouldCombine = false;
              } else {
                charactersArray.push(text2.substr(i, 2));
              }
              i += 1;
            } else {
              charactersArray.push(text2.charAt(i));
            }
          } else if (charCode > 56319) {
            secondCharCode = text2.charCodeAt(i + 1);
            if (FontManager.isZeroWidthJoiner(charCode, secondCharCode)) {
              shouldCombine = true;
              charactersArray[charactersArray.length - 1] += text2.substr(i, 2);
              i += 1;
            } else {
              charactersArray.push(text2.charAt(i));
            }
          } else if (FontManager.isZeroWidthJoiner(charCode)) {
            charactersArray[charactersArray.length - 1] += text2.charAt(i);
            shouldCombine = true;
          } else {
            charactersArray.push(text2.charAt(i));
          }
          i += 1;
        }
        return charactersArray;
      };
      TextProperty.prototype.completeTextData = function(documentData) {
        documentData.__complete = true;
        var fontManager = this.elem.globalData.fontManager;
        var data2 = this.data;
        var letters = [];
        var i;
        var len;
        var newLineFlag;
        var index2 = 0;
        var val2;
        var anchorGrouping = data2.m.g;
        var currentSize = 0;
        var currentPos = 0;
        var currentLine = 0;
        var lineWidths = [];
        var lineWidth = 0;
        var maxLineWidth = 0;
        var j;
        var jLen;
        var fontData = fontManager.getFontByName(documentData.f);
        var charData;
        var cLength = 0;
        var fontProps = getFontProperties(fontData);
        documentData.fWeight = fontProps.weight;
        documentData.fStyle = fontProps.style;
        documentData.finalSize = documentData.s;
        documentData.finalText = this.buildFinalText(documentData.t);
        len = documentData.finalText.length;
        documentData.finalLineHeight = documentData.lh;
        var trackingOffset = documentData.tr / 1e3 * documentData.finalSize;
        var charCode;
        if (documentData.sz) {
          var flag = true;
          var boxWidth = documentData.sz[0];
          var boxHeight = documentData.sz[1];
          var currentHeight;
          var finalText;
          while (flag) {
            finalText = this.buildFinalText(documentData.t);
            currentHeight = 0;
            lineWidth = 0;
            len = finalText.length;
            trackingOffset = documentData.tr / 1e3 * documentData.finalSize;
            var lastSpaceIndex = -1;
            for (i = 0; i < len; i += 1) {
              charCode = finalText[i].charCodeAt(0);
              newLineFlag = false;
              if (finalText[i] === " ") {
                lastSpaceIndex = i;
              } else if (charCode === 13 || charCode === 3) {
                lineWidth = 0;
                newLineFlag = true;
                currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
              }
              if (fontManager.chars) {
                charData = fontManager.getCharData(finalText[i], fontData.fStyle, fontData.fFamily);
                cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
              } else {
                cLength = fontManager.measureText(finalText[i], documentData.f, documentData.finalSize);
              }
              if (lineWidth + cLength > boxWidth && finalText[i] !== " ") {
                if (lastSpaceIndex === -1) {
                  len += 1;
                } else {
                  i = lastSpaceIndex;
                }
                currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
                finalText.splice(i, lastSpaceIndex === i ? 1 : 0, "\r");
                lastSpaceIndex = -1;
                lineWidth = 0;
              } else {
                lineWidth += cLength;
                lineWidth += trackingOffset;
              }
            }
            currentHeight += fontData.ascent * documentData.finalSize / 100;
            if (this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
              documentData.finalSize -= 1;
              documentData.finalLineHeight = documentData.finalSize * documentData.lh / documentData.s;
            } else {
              documentData.finalText = finalText;
              len = documentData.finalText.length;
              flag = false;
            }
          }
        }
        lineWidth = -trackingOffset;
        cLength = 0;
        var uncollapsedSpaces = 0;
        var currentChar;
        for (i = 0; i < len; i += 1) {
          newLineFlag = false;
          currentChar = documentData.finalText[i];
          charCode = currentChar.charCodeAt(0);
          if (charCode === 13 || charCode === 3) {
            uncollapsedSpaces = 0;
            lineWidths.push(lineWidth);
            maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
            lineWidth = -2 * trackingOffset;
            val2 = "";
            newLineFlag = true;
            currentLine += 1;
          } else {
            val2 = currentChar;
          }
          if (fontManager.chars) {
            charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
            cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
          } else {
            cLength = fontManager.measureText(val2, documentData.f, documentData.finalSize);
          }
          if (currentChar === " ") {
            uncollapsedSpaces += cLength + trackingOffset;
          } else {
            lineWidth += cLength + trackingOffset + uncollapsedSpaces;
            uncollapsedSpaces = 0;
          }
          letters.push({
            l: cLength,
            an: cLength,
            add: currentSize,
            n: newLineFlag,
            anIndexes: [],
            val: val2,
            line: currentLine,
            animatorJustifyOffset: 0
          });
          if (anchorGrouping == 2) {
            currentSize += cLength;
            if (val2 === "" || val2 === " " || i === len - 1) {
              if (val2 === "" || val2 === " ") {
                currentSize -= cLength;
              }
              while (currentPos <= i) {
                letters[currentPos].an = currentSize;
                letters[currentPos].ind = index2;
                letters[currentPos].extra = cLength;
                currentPos += 1;
              }
              index2 += 1;
              currentSize = 0;
            }
          } else if (anchorGrouping == 3) {
            currentSize += cLength;
            if (val2 === "" || i === len - 1) {
              if (val2 === "") {
                currentSize -= cLength;
              }
              while (currentPos <= i) {
                letters[currentPos].an = currentSize;
                letters[currentPos].ind = index2;
                letters[currentPos].extra = cLength;
                currentPos += 1;
              }
              currentSize = 0;
              index2 += 1;
            }
          } else {
            letters[index2].ind = index2;
            letters[index2].extra = 0;
            index2 += 1;
          }
        }
        documentData.l = letters;
        maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
        lineWidths.push(lineWidth);
        if (documentData.sz) {
          documentData.boxWidth = documentData.sz[0];
          documentData.justifyOffset = 0;
        } else {
          documentData.boxWidth = maxLineWidth;
          switch (documentData.j) {
            case 1:
              documentData.justifyOffset = -documentData.boxWidth;
              break;
            case 2:
              documentData.justifyOffset = -documentData.boxWidth / 2;
              break;
            default:
              documentData.justifyOffset = 0;
          }
        }
        documentData.lineWidths = lineWidths;
        var animators = data2.a;
        var animatorData;
        var letterData;
        jLen = animators.length;
        var based;
        var ind;
        var indexes = [];
        for (j = 0; j < jLen; j += 1) {
          animatorData = animators[j];
          if (animatorData.a.sc) {
            documentData.strokeColorAnim = true;
          }
          if (animatorData.a.sw) {
            documentData.strokeWidthAnim = true;
          }
          if (animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb) {
            documentData.fillColorAnim = true;
          }
          ind = 0;
          based = animatorData.s.b;
          for (i = 0; i < len; i += 1) {
            letterData = letters[i];
            letterData.anIndexes[j] = ind;
            if (based == 1 && letterData.val !== "" || based == 2 && letterData.val !== "" && letterData.val !== " " || based == 3 && (letterData.n || letterData.val == " " || i == len - 1) || based == 4 && (letterData.n || i == len - 1)) {
              if (animatorData.s.rn === 1) {
                indexes.push(ind);
              }
              ind += 1;
            }
          }
          data2.a[j].s.totalChars = ind;
          var currentInd = -1;
          var newInd;
          if (animatorData.s.rn === 1) {
            for (i = 0; i < len; i += 1) {
              letterData = letters[i];
              if (currentInd != letterData.anIndexes[j]) {
                currentInd = letterData.anIndexes[j];
                newInd = indexes.splice(Math.floor(Math.random() * indexes.length), 1)[0];
              }
              letterData.anIndexes[j] = newInd;
            }
          }
        }
        documentData.yOffset = documentData.finalLineHeight || documentData.finalSize * 1.2;
        documentData.ls = documentData.ls || 0;
        documentData.ascent = fontData.ascent * documentData.finalSize / 100;
      };
      TextProperty.prototype.updateDocumentData = function(newData, index2) {
        index2 = index2 === void 0 ? this.keysIndex : index2;
        var dData = this.copyData({}, this.data.d.k[index2].s);
        dData = this.copyData(dData, newData);
        this.data.d.k[index2].s = dData;
        this.recalculate(index2);
        this.elem.addDynamicProperty(this);
      };
      TextProperty.prototype.recalculate = function(index2) {
        var dData = this.data.d.k[index2].s;
        dData.__complete = false;
        this.keysIndex = 0;
        this._isFirstFrame = true;
        this.getValue(dData);
      };
      TextProperty.prototype.canResizeFont = function(_canResize) {
        this.canResize = _canResize;
        this.recalculate(this.keysIndex);
        this.elem.addDynamicProperty(this);
      };
      TextProperty.prototype.setMinimumFontSize = function(_fontValue) {
        this.minimumFontSize = Math.floor(_fontValue) || 1;
        this.recalculate(this.keysIndex);
        this.elem.addDynamicProperty(this);
      };
      var TextSelectorProp = function() {
        var max = Math.max;
        var min = Math.min;
        var floor = Math.floor;
        function TextSelectorPropFactory(elem2, data2) {
          this._currentTextLength = -1;
          this.k = false;
          this.data = data2;
          this.elem = elem2;
          this.comp = elem2.comp;
          this.finalS = 0;
          this.finalE = 0;
          this.initDynamicPropertyContainer(elem2);
          this.s = PropertyFactory.getProp(elem2, data2.s || {
            k: 0
          }, 0, 0, this);
          if ("e" in data2) {
            this.e = PropertyFactory.getProp(elem2, data2.e, 0, 0, this);
          } else {
            this.e = {
              v: 100
            };
          }
          this.o = PropertyFactory.getProp(elem2, data2.o || {
            k: 0
          }, 0, 0, this);
          this.xe = PropertyFactory.getProp(elem2, data2.xe || {
            k: 0
          }, 0, 0, this);
          this.ne = PropertyFactory.getProp(elem2, data2.ne || {
            k: 0
          }, 0, 0, this);
          this.sm = PropertyFactory.getProp(elem2, data2.sm || {
            k: 100
          }, 0, 0, this);
          this.a = PropertyFactory.getProp(elem2, data2.a, 0, 0.01, this);
          if (!this.dynamicProperties.length) {
            this.getValue();
          }
        }
        TextSelectorPropFactory.prototype = {
          getMult: function getMult(ind) {
            if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
              this.getValue();
            }
            var x1 = 0;
            var y1 = 0;
            var x2 = 1;
            var y2 = 1;
            if (this.ne.v > 0) {
              x1 = this.ne.v / 100;
            } else {
              y1 = -this.ne.v / 100;
            }
            if (this.xe.v > 0) {
              x2 = 1 - this.xe.v / 100;
            } else {
              y2 = 1 + this.xe.v / 100;
            }
            var easer = BezierFactory.getBezierEasing(x1, y1, x2, y2).get;
            var mult = 0;
            var s = this.finalS;
            var e = this.finalE;
            var type = this.data.sh;
            if (type === 2) {
              if (e === s) {
                mult = ind >= e ? 1 : 0;
              } else {
                mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
              }
              mult = easer(mult);
            } else if (type === 3) {
              if (e === s) {
                mult = ind >= e ? 0 : 1;
              } else {
                mult = 1 - max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
              }
              mult = easer(mult);
            } else if (type === 4) {
              if (e === s) {
                mult = 0;
              } else {
                mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
                if (mult < 0.5) {
                  mult *= 2;
                } else {
                  mult = 1 - 2 * (mult - 0.5);
                }
              }
              mult = easer(mult);
            } else if (type === 5) {
              if (e === s) {
                mult = 0;
              } else {
                var tot = e - s;
                ind = min(max(0, ind + 0.5 - s), e - s);
                var x = -tot / 2 + ind;
                var a = tot / 2;
                mult = Math.sqrt(1 - x * x / (a * a));
              }
              mult = easer(mult);
            } else if (type === 6) {
              if (e === s) {
                mult = 0;
              } else {
                ind = min(max(0, ind + 0.5 - s), e - s);
                mult = (1 + Math.cos(Math.PI + Math.PI * 2 * ind / (e - s))) / 2;
              }
              mult = easer(mult);
            } else {
              if (ind >= floor(s)) {
                if (ind - s < 0) {
                  mult = max(0, min(min(e, 1) - (s - ind), 1));
                } else {
                  mult = max(0, min(e - ind, 1));
                }
              }
              mult = easer(mult);
            }
            if (this.sm.v !== 100) {
              var smoothness = this.sm.v * 0.01;
              if (smoothness === 0) {
                smoothness = 1e-8;
              }
              var threshold = 0.5 - smoothness * 0.5;
              if (mult < threshold) {
                mult = 0;
              } else {
                mult = (mult - threshold) / smoothness;
                if (mult > 1) {
                  mult = 1;
                }
              }
            }
            return mult * this.a.v;
          },
          getValue: function getValue(newCharsFlag) {
            this.iterateDynamicProperties();
            this._mdf = newCharsFlag || this._mdf;
            this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;
            if (newCharsFlag && this.data.r === 2) {
              this.e.v = this._currentTextLength;
            }
            var divisor = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
            var o = this.o.v / divisor;
            var s = this.s.v / divisor + o;
            var e = this.e.v / divisor + o;
            if (s > e) {
              var _s = s;
              s = e;
              e = _s;
            }
            this.finalS = s;
            this.finalE = e;
          }
        };
        extendPrototype([DynamicPropertyContainer], TextSelectorPropFactory);
        function getTextSelectorProp(elem2, data2, arr) {
          return new TextSelectorPropFactory(elem2, data2, arr);
        }
        return {
          getTextSelectorProp
        };
      }();
      function TextAnimatorDataProperty(elem2, animatorProps, container) {
        var defaultData = {
          propType: false
        };
        var getProp = PropertyFactory.getProp;
        var textAnimatorAnimatables = animatorProps.a;
        this.a = {
          r: textAnimatorAnimatables.r ? getProp(elem2, textAnimatorAnimatables.r, 0, degToRads, container) : defaultData,
          rx: textAnimatorAnimatables.rx ? getProp(elem2, textAnimatorAnimatables.rx, 0, degToRads, container) : defaultData,
          ry: textAnimatorAnimatables.ry ? getProp(elem2, textAnimatorAnimatables.ry, 0, degToRads, container) : defaultData,
          sk: textAnimatorAnimatables.sk ? getProp(elem2, textAnimatorAnimatables.sk, 0, degToRads, container) : defaultData,
          sa: textAnimatorAnimatables.sa ? getProp(elem2, textAnimatorAnimatables.sa, 0, degToRads, container) : defaultData,
          s: textAnimatorAnimatables.s ? getProp(elem2, textAnimatorAnimatables.s, 1, 0.01, container) : defaultData,
          a: textAnimatorAnimatables.a ? getProp(elem2, textAnimatorAnimatables.a, 1, 0, container) : defaultData,
          o: textAnimatorAnimatables.o ? getProp(elem2, textAnimatorAnimatables.o, 0, 0.01, container) : defaultData,
          p: textAnimatorAnimatables.p ? getProp(elem2, textAnimatorAnimatables.p, 1, 0, container) : defaultData,
          sw: textAnimatorAnimatables.sw ? getProp(elem2, textAnimatorAnimatables.sw, 0, 0, container) : defaultData,
          sc: textAnimatorAnimatables.sc ? getProp(elem2, textAnimatorAnimatables.sc, 1, 0, container) : defaultData,
          fc: textAnimatorAnimatables.fc ? getProp(elem2, textAnimatorAnimatables.fc, 1, 0, container) : defaultData,
          fh: textAnimatorAnimatables.fh ? getProp(elem2, textAnimatorAnimatables.fh, 0, 0, container) : defaultData,
          fs: textAnimatorAnimatables.fs ? getProp(elem2, textAnimatorAnimatables.fs, 0, 0.01, container) : defaultData,
          fb: textAnimatorAnimatables.fb ? getProp(elem2, textAnimatorAnimatables.fb, 0, 0.01, container) : defaultData,
          t: textAnimatorAnimatables.t ? getProp(elem2, textAnimatorAnimatables.t, 0, 0, container) : defaultData
        };
        this.s = TextSelectorProp.getTextSelectorProp(elem2, animatorProps.s, container);
        this.s.t = animatorProps.s.t;
      }
      function TextAnimatorProperty(textData, renderType, elem2) {
        this._isFirstFrame = true;
        this._hasMaskedPath = false;
        this._frameId = -1;
        this._textData = textData;
        this._renderType = renderType;
        this._elem = elem2;
        this._animatorsData = createSizedArray(this._textData.a.length);
        this._pathData = {};
        this._moreOptions = {
          alignment: {}
        };
        this.renderedLetters = [];
        this.lettersChangedFlag = false;
        this.initDynamicPropertyContainer(elem2);
      }
      TextAnimatorProperty.prototype.searchProperties = function() {
        var i;
        var len = this._textData.a.length;
        var animatorProps;
        var getProp = PropertyFactory.getProp;
        for (i = 0; i < len; i += 1) {
          animatorProps = this._textData.a[i];
          this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this);
        }
        if (this._textData.p && "m" in this._textData.p) {
          this._pathData = {
            a: getProp(this._elem, this._textData.p.a, 0, 0, this),
            f: getProp(this._elem, this._textData.p.f, 0, 0, this),
            l: getProp(this._elem, this._textData.p.l, 0, 0, this),
            r: getProp(this._elem, this._textData.p.r, 0, 0, this),
            p: getProp(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          };
          this._hasMaskedPath = true;
        } else {
          this._hasMaskedPath = false;
        }
        this._moreOptions.alignment = getProp(this._elem, this._textData.m.a, 1, 0, this);
      };
      TextAnimatorProperty.prototype.getMeasures = function(documentData, lettersChangedFlag) {
        this.lettersChangedFlag = lettersChangedFlag;
        if (!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
          return;
        }
        this._isFirstFrame = false;
        var alignment = this._moreOptions.alignment.v;
        var animators = this._animatorsData;
        var textData = this._textData;
        var matrixHelper = this.mHelper;
        var renderType = this._renderType;
        var renderedLettersCount = this.renderedLetters.length;
        var xPos;
        var yPos;
        var i;
        var len;
        var letters = documentData.l;
        var pathInfo;
        var currentLength;
        var currentPoint;
        var segmentLength;
        var flag;
        var pointInd;
        var segmentInd;
        var prevPoint;
        var points;
        var segments;
        var partialLength;
        var totalLength;
        var perc;
        var tanAngle;
        var mask2;
        if (this._hasMaskedPath) {
          mask2 = this._pathData.m;
          if (!this._pathData.n || this._pathData._mdf) {
            var paths = mask2.v;
            if (this._pathData.r.v) {
              paths = paths.reverse();
            }
            pathInfo = {
              tLength: 0,
              segments: []
            };
            len = paths._length - 1;
            var bezierData;
            totalLength = 0;
            for (i = 0; i < len; i += 1) {
              bezierData = bez.buildBezierData(paths.v[i], paths.v[i + 1], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]);
              pathInfo.tLength += bezierData.segmentLength;
              pathInfo.segments.push(bezierData);
              totalLength += bezierData.segmentLength;
            }
            i = len;
            if (mask2.v.c) {
              bezierData = bez.buildBezierData(paths.v[i], paths.v[0], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]);
              pathInfo.tLength += bezierData.segmentLength;
              pathInfo.segments.push(bezierData);
              totalLength += bezierData.segmentLength;
            }
            this._pathData.pi = pathInfo;
          }
          pathInfo = this._pathData.pi;
          currentLength = this._pathData.f.v;
          segmentInd = 0;
          pointInd = 1;
          segmentLength = 0;
          flag = true;
          segments = pathInfo.segments;
          if (currentLength < 0 && mask2.v.c) {
            if (pathInfo.tLength < Math.abs(currentLength)) {
              currentLength = -Math.abs(currentLength) % pathInfo.tLength;
            }
            segmentInd = segments.length - 1;
            points = segments[segmentInd].points;
            pointInd = points.length - 1;
            while (currentLength < 0) {
              currentLength += points[pointInd].partialLength;
              pointInd -= 1;
              if (pointInd < 0) {
                segmentInd -= 1;
                points = segments[segmentInd].points;
                pointInd = points.length - 1;
              }
            }
          }
          points = segments[segmentInd].points;
          prevPoint = points[pointInd - 1];
          currentPoint = points[pointInd];
          partialLength = currentPoint.partialLength;
        }
        len = letters.length;
        xPos = 0;
        yPos = 0;
        var yOff = documentData.finalSize * 1.2 * 0.714;
        var firstLine = true;
        var animatorProps;
        var animatorSelector;
        var j;
        var jLen;
        var letterValue;
        jLen = animators.length;
        var mult;
        var ind = -1;
        var offf;
        var xPathPos;
        var yPathPos;
        var initPathPos = currentLength;
        var initSegmentInd = segmentInd;
        var initPointInd = pointInd;
        var currentLine = -1;
        var elemOpacity;
        var sc;
        var sw;
        var fc;
        var k;
        var letterSw;
        var letterSc;
        var letterFc;
        var letterM = "";
        var letterP = this.defaultPropsArray;
        var letterO;
        if (documentData.j === 2 || documentData.j === 1) {
          var animatorJustifyOffset = 0;
          var animatorFirstCharOffset = 0;
          var justifyOffsetMult = documentData.j === 2 ? -0.5 : -1;
          var lastIndex = 0;
          var isNewLine = true;
          for (i = 0; i < len; i += 1) {
            if (letters[i].n) {
              if (animatorJustifyOffset) {
                animatorJustifyOffset += animatorFirstCharOffset;
              }
              while (lastIndex < i) {
                letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
                lastIndex += 1;
              }
              animatorJustifyOffset = 0;
              isNewLine = true;
            } else {
              for (j = 0; j < jLen; j += 1) {
                animatorProps = animators[j].a;
                if (animatorProps.t.propType) {
                  if (isNewLine && documentData.j === 2) {
                    animatorFirstCharOffset += animatorProps.t.v * justifyOffsetMult;
                  }
                  animatorSelector = animators[j].s;
                  mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                  if (mult.length) {
                    animatorJustifyOffset += animatorProps.t.v * mult[0] * justifyOffsetMult;
                  } else {
                    animatorJustifyOffset += animatorProps.t.v * mult * justifyOffsetMult;
                  }
                }
              }
              isNewLine = false;
            }
          }
          if (animatorJustifyOffset) {
            animatorJustifyOffset += animatorFirstCharOffset;
          }
          while (lastIndex < i) {
            letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
            lastIndex += 1;
          }
        }
        for (i = 0; i < len; i += 1) {
          matrixHelper.reset();
          elemOpacity = 1;
          if (letters[i].n) {
            xPos = 0;
            yPos += documentData.yOffset;
            yPos += firstLine ? 1 : 0;
            currentLength = initPathPos;
            firstLine = false;
            if (this._hasMaskedPath) {
              segmentInd = initSegmentInd;
              pointInd = initPointInd;
              points = segments[segmentInd].points;
              prevPoint = points[pointInd - 1];
              currentPoint = points[pointInd];
              partialLength = currentPoint.partialLength;
              segmentLength = 0;
            }
            letterM = "";
            letterFc = "";
            letterSw = "";
            letterO = "";
            letterP = this.defaultPropsArray;
          } else {
            if (this._hasMaskedPath) {
              if (currentLine !== letters[i].line) {
                switch (documentData.j) {
                  case 1:
                    currentLength += totalLength - documentData.lineWidths[letters[i].line];
                    break;
                  case 2:
                    currentLength += (totalLength - documentData.lineWidths[letters[i].line]) / 2;
                    break;
                  default:
                    break;
                }
                currentLine = letters[i].line;
              }
              if (ind !== letters[i].ind) {
                if (letters[ind]) {
                  currentLength += letters[ind].extra;
                }
                currentLength += letters[i].an / 2;
                ind = letters[i].ind;
              }
              currentLength += alignment[0] * letters[i].an * 5e-3;
              var animatorOffset = 0;
              for (j = 0; j < jLen; j += 1) {
                animatorProps = animators[j].a;
                if (animatorProps.p.propType) {
                  animatorSelector = animators[j].s;
                  mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                  if (mult.length) {
                    animatorOffset += animatorProps.p.v[0] * mult[0];
                  } else {
                    animatorOffset += animatorProps.p.v[0] * mult;
                  }
                }
                if (animatorProps.a.propType) {
                  animatorSelector = animators[j].s;
                  mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                  if (mult.length) {
                    animatorOffset += animatorProps.a.v[0] * mult[0];
                  } else {
                    animatorOffset += animatorProps.a.v[0] * mult;
                  }
                }
              }
              flag = true;
              if (this._pathData.a.v) {
                currentLength = letters[0].an * 0.5 + (totalLength - this._pathData.f.v - letters[0].an * 0.5 - letters[letters.length - 1].an * 0.5) * ind / (len - 1);
                currentLength += this._pathData.f.v;
              }
              while (flag) {
                if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
                  perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
                  xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
                  yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
                  matrixHelper.translate(-alignment[0] * letters[i].an * 5e-3, -(alignment[1] * yOff) * 0.01);
                  flag = false;
                } else if (points) {
                  segmentLength += currentPoint.partialLength;
                  pointInd += 1;
                  if (pointInd >= points.length) {
                    pointInd = 0;
                    segmentInd += 1;
                    if (!segments[segmentInd]) {
                      if (mask2.v.c) {
                        pointInd = 0;
                        segmentInd = 0;
                        points = segments[segmentInd].points;
                      } else {
                        segmentLength -= currentPoint.partialLength;
                        points = null;
                      }
                    } else {
                      points = segments[segmentInd].points;
                    }
                  }
                  if (points) {
                    prevPoint = currentPoint;
                    currentPoint = points[pointInd];
                    partialLength = currentPoint.partialLength;
                  }
                }
              }
              offf = letters[i].an / 2 - letters[i].add;
              matrixHelper.translate(-offf, 0, 0);
            } else {
              offf = letters[i].an / 2 - letters[i].add;
              matrixHelper.translate(-offf, 0, 0);
              matrixHelper.translate(-alignment[0] * letters[i].an * 5e-3, -alignment[1] * yOff * 0.01, 0);
            }
            for (j = 0; j < jLen; j += 1) {
              animatorProps = animators[j].a;
              if (animatorProps.t.propType) {
                animatorSelector = animators[j].s;
                mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                if (xPos !== 0 || documentData.j !== 0) {
                  if (this._hasMaskedPath) {
                    if (mult.length) {
                      currentLength += animatorProps.t.v * mult[0];
                    } else {
                      currentLength += animatorProps.t.v * mult;
                    }
                  } else if (mult.length) {
                    xPos += animatorProps.t.v * mult[0];
                  } else {
                    xPos += animatorProps.t.v * mult;
                  }
                }
              }
            }
            if (documentData.strokeWidthAnim) {
              sw = documentData.sw || 0;
            }
            if (documentData.strokeColorAnim) {
              if (documentData.sc) {
                sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
              } else {
                sc = [0, 0, 0];
              }
            }
            if (documentData.fillColorAnim && documentData.fc) {
              fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
            }
            for (j = 0; j < jLen; j += 1) {
              animatorProps = animators[j].a;
              if (animatorProps.a.propType) {
                animatorSelector = animators[j].s;
                mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                if (mult.length) {
                  matrixHelper.translate(-animatorProps.a.v[0] * mult[0], -animatorProps.a.v[1] * mult[1], animatorProps.a.v[2] * mult[2]);
                } else {
                  matrixHelper.translate(-animatorProps.a.v[0] * mult, -animatorProps.a.v[1] * mult, animatorProps.a.v[2] * mult);
                }
              }
            }
            for (j = 0; j < jLen; j += 1) {
              animatorProps = animators[j].a;
              if (animatorProps.s.propType) {
                animatorSelector = animators[j].s;
                mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                if (mult.length) {
                  matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult[0], 1 + (animatorProps.s.v[1] - 1) * mult[1], 1);
                } else {
                  matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult, 1 + (animatorProps.s.v[1] - 1) * mult, 1);
                }
              }
            }
            for (j = 0; j < jLen; j += 1) {
              animatorProps = animators[j].a;
              animatorSelector = animators[j].s;
              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
              if (animatorProps.sk.propType) {
                if (mult.length) {
                  matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
                } else {
                  matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
                }
              }
              if (animatorProps.r.propType) {
                if (mult.length) {
                  matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
                } else {
                  matrixHelper.rotateZ(-animatorProps.r.v * mult);
                }
              }
              if (animatorProps.ry.propType) {
                if (mult.length) {
                  matrixHelper.rotateY(animatorProps.ry.v * mult[1]);
                } else {
                  matrixHelper.rotateY(animatorProps.ry.v * mult);
                }
              }
              if (animatorProps.rx.propType) {
                if (mult.length) {
                  matrixHelper.rotateX(animatorProps.rx.v * mult[0]);
                } else {
                  matrixHelper.rotateX(animatorProps.rx.v * mult);
                }
              }
              if (animatorProps.o.propType) {
                if (mult.length) {
                  elemOpacity += (animatorProps.o.v * mult[0] - elemOpacity) * mult[0];
                } else {
                  elemOpacity += (animatorProps.o.v * mult - elemOpacity) * mult;
                }
              }
              if (documentData.strokeWidthAnim && animatorProps.sw.propType) {
                if (mult.length) {
                  sw += animatorProps.sw.v * mult[0];
                } else {
                  sw += animatorProps.sw.v * mult;
                }
              }
              if (documentData.strokeColorAnim && animatorProps.sc.propType) {
                for (k = 0; k < 3; k += 1) {
                  if (mult.length) {
                    sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult[0];
                  } else {
                    sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult;
                  }
                }
              }
              if (documentData.fillColorAnim && documentData.fc) {
                if (animatorProps.fc.propType) {
                  for (k = 0; k < 3; k += 1) {
                    if (mult.length) {
                      fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult[0];
                    } else {
                      fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult;
                    }
                  }
                }
                if (animatorProps.fh.propType) {
                  if (mult.length) {
                    fc = addHueToRGB(fc, animatorProps.fh.v * mult[0]);
                  } else {
                    fc = addHueToRGB(fc, animatorProps.fh.v * mult);
                  }
                }
                if (animatorProps.fs.propType) {
                  if (mult.length) {
                    fc = addSaturationToRGB(fc, animatorProps.fs.v * mult[0]);
                  } else {
                    fc = addSaturationToRGB(fc, animatorProps.fs.v * mult);
                  }
                }
                if (animatorProps.fb.propType) {
                  if (mult.length) {
                    fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult[0]);
                  } else {
                    fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult);
                  }
                }
              }
            }
            for (j = 0; j < jLen; j += 1) {
              animatorProps = animators[j].a;
              if (animatorProps.p.propType) {
                animatorSelector = animators[j].s;
                mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);
                if (this._hasMaskedPath) {
                  if (mult.length) {
                    matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
                  } else {
                    matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
                  }
                } else if (mult.length) {
                  matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
                } else {
                  matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
                }
              }
            }
            if (documentData.strokeWidthAnim) {
              letterSw = sw < 0 ? 0 : sw;
            }
            if (documentData.strokeColorAnim) {
              letterSc = "rgb(" + Math.round(sc[0] * 255) + "," + Math.round(sc[1] * 255) + "," + Math.round(sc[2] * 255) + ")";
            }
            if (documentData.fillColorAnim && documentData.fc) {
              letterFc = "rgb(" + Math.round(fc[0] * 255) + "," + Math.round(fc[1] * 255) + "," + Math.round(fc[2] * 255) + ")";
            }
            if (this._hasMaskedPath) {
              matrixHelper.translate(0, -documentData.ls);
              matrixHelper.translate(0, alignment[1] * yOff * 0.01 + yPos, 0);
              if (this._pathData.p.v) {
                tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
                var rot = Math.atan(tanAngle) * 180 / Math.PI;
                if (currentPoint.point[0] < prevPoint.point[0]) {
                  rot += 180;
                }
                matrixHelper.rotate(-rot * Math.PI / 180);
              }
              matrixHelper.translate(xPathPos, yPathPos, 0);
              currentLength -= alignment[0] * letters[i].an * 5e-3;
              if (letters[i + 1] && ind !== letters[i + 1].ind) {
                currentLength += letters[i].an / 2;
                currentLength += documentData.tr * 1e-3 * documentData.finalSize;
              }
            } else {
              matrixHelper.translate(xPos, yPos, 0);
              if (documentData.ps) {
                matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
              }
              switch (documentData.j) {
                case 1:
                  matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]), 0, 0);
                  break;
                case 2:
                  matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]) / 2, 0, 0);
                  break;
                default:
                  break;
              }
              matrixHelper.translate(0, -documentData.ls);
              matrixHelper.translate(offf, 0, 0);
              matrixHelper.translate(alignment[0] * letters[i].an * 5e-3, alignment[1] * yOff * 0.01, 0);
              xPos += letters[i].l + documentData.tr * 1e-3 * documentData.finalSize;
            }
            if (renderType === "html") {
              letterM = matrixHelper.toCSS();
            } else if (renderType === "svg") {
              letterM = matrixHelper.to2dCSS();
            } else {
              letterP = [matrixHelper.props[0], matrixHelper.props[1], matrixHelper.props[2], matrixHelper.props[3], matrixHelper.props[4], matrixHelper.props[5], matrixHelper.props[6], matrixHelper.props[7], matrixHelper.props[8], matrixHelper.props[9], matrixHelper.props[10], matrixHelper.props[11], matrixHelper.props[12], matrixHelper.props[13], matrixHelper.props[14], matrixHelper.props[15]];
            }
            letterO = elemOpacity;
          }
          if (renderedLettersCount <= i) {
            letterValue = new LetterProps(letterO, letterSw, letterSc, letterFc, letterM, letterP);
            this.renderedLetters.push(letterValue);
            renderedLettersCount += 1;
            this.lettersChangedFlag = true;
          } else {
            letterValue = this.renderedLetters[i];
            this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
          }
        }
      };
      TextAnimatorProperty.prototype.getValue = function() {
        if (this._elem.globalData.frameId === this._frameId) {
          return;
        }
        this._frameId = this._elem.globalData.frameId;
        this.iterateDynamicProperties();
      };
      TextAnimatorProperty.prototype.mHelper = new Matrix();
      TextAnimatorProperty.prototype.defaultPropsArray = [];
      extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
      function ITextElement() {
      }
      ITextElement.prototype.initElement = function(data2, globalData2, comp2) {
        this.lettersChangedFlag = true;
        this.initFrame();
        this.initBaseData(data2, globalData2, comp2);
        this.textProperty = new TextProperty(this, data2.t, this.dynamicProperties);
        this.textAnimator = new TextAnimatorProperty(data2.t, this.renderType, this);
        this.initTransform(data2, globalData2, comp2);
        this.initHierarchy();
        this.initRenderable();
        this.initRendererElement();
        this.createContainerElements();
        this.createRenderableComponents();
        this.createContent();
        this.hide();
        this.textAnimator.searchProperties(this.dynamicProperties);
      };
      ITextElement.prototype.prepareFrame = function(num) {
        this._mdf = false;
        this.prepareRenderableFrame(num);
        this.prepareProperties(num, this.isInRange);
        if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
          this.buildNewText();
          this.textProperty._isFirstFrame = false;
          this.textProperty._mdf = false;
        }
      };
      ITextElement.prototype.createPathShape = function(matrixHelper, shapes) {
        var j;
        var jLen = shapes.length;
        var pathNodes;
        var shapeStr = "";
        for (j = 0; j < jLen; j += 1) {
          if (shapes[j].ty === "sh") {
            pathNodes = shapes[j].ks.k;
            shapeStr += buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
          }
        }
        return shapeStr;
      };
      ITextElement.prototype.updateDocumentData = function(newData, index2) {
        this.textProperty.updateDocumentData(newData, index2);
      };
      ITextElement.prototype.canResizeFont = function(_canResize) {
        this.textProperty.canResizeFont(_canResize);
      };
      ITextElement.prototype.setMinimumFontSize = function(_fontSize) {
        this.textProperty.setMinimumFontSize(_fontSize);
      };
      ITextElement.prototype.applyTextPropertiesToMatrix = function(documentData, matrixHelper, lineNumber, xPos, yPos) {
        if (documentData.ps) {
          matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
        }
        matrixHelper.translate(0, -documentData.ls, 0);
        switch (documentData.j) {
          case 1:
            matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]), 0, 0);
            break;
          case 2:
            matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]) / 2, 0, 0);
            break;
          default:
            break;
        }
        matrixHelper.translate(xPos, yPos, 0);
      };
      ITextElement.prototype.buildColor = function(colorData) {
        return "rgb(" + Math.round(colorData[0] * 255) + "," + Math.round(colorData[1] * 255) + "," + Math.round(colorData[2] * 255) + ")";
      };
      ITextElement.prototype.emptyProp = new LetterProps();
      ITextElement.prototype.destroy = function() {
      };
      var emptyShapeData = {
        shapes: []
      };
      function SVGTextLottieElement(data2, globalData2, comp2) {
        this.textSpans = [];
        this.renderType = "svg";
        this.initElement(data2, globalData2, comp2);
      }
      extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement);
      SVGTextLottieElement.prototype.createContent = function() {
        if (this.data.singleShape && !this.globalData.fontManager.chars) {
          this.textContainer = createNS("text");
        }
      };
      SVGTextLottieElement.prototype.buildTextContents = function(textArray) {
        var i = 0;
        var len = textArray.length;
        var textContents = [];
        var currentTextContent = "";
        while (i < len) {
          if (textArray[i] === String.fromCharCode(13) || textArray[i] === String.fromCharCode(3)) {
            textContents.push(currentTextContent);
            currentTextContent = "";
          } else {
            currentTextContent += textArray[i];
          }
          i += 1;
        }
        textContents.push(currentTextContent);
        return textContents;
      };
      SVGTextLottieElement.prototype.buildShapeData = function(data2, scale2) {
        if (data2.shapes && data2.shapes.length) {
          var shape = data2.shapes[0];
          if (shape.it) {
            var shapeItem = shape.it[shape.it.length - 1];
            if (shapeItem.s) {
              shapeItem.s.k[0] = scale2;
              shapeItem.s.k[1] = scale2;
            }
          }
        }
        return data2;
      };
      SVGTextLottieElement.prototype.buildNewText = function() {
        this.addDynamicProperty(this);
        var i;
        var len;
        var documentData = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);
        if (documentData.fc) {
          this.layerElement.setAttribute("fill", this.buildColor(documentData.fc));
        } else {
          this.layerElement.setAttribute("fill", "rgba(0,0,0,0)");
        }
        if (documentData.sc) {
          this.layerElement.setAttribute("stroke", this.buildColor(documentData.sc));
          this.layerElement.setAttribute("stroke-width", documentData.sw);
        }
        this.layerElement.setAttribute("font-size", documentData.finalSize);
        var fontData = this.globalData.fontManager.getFontByName(documentData.f);
        if (fontData.fClass) {
          this.layerElement.setAttribute("class", fontData.fClass);
        } else {
          this.layerElement.setAttribute("font-family", fontData.fFamily);
          var fWeight = documentData.fWeight;
          var fStyle = documentData.fStyle;
          this.layerElement.setAttribute("font-style", fStyle);
          this.layerElement.setAttribute("font-weight", fWeight);
        }
        this.layerElement.setAttribute("aria-label", documentData.t);
        var letters = documentData.l || [];
        var usesGlyphs = !!this.globalData.fontManager.chars;
        len = letters.length;
        var tSpan;
        var matrixHelper = this.mHelper;
        var shapeStr = "";
        var singleShape = this.data.singleShape;
        var xPos = 0;
        var yPos = 0;
        var firstLine = true;
        var trackingOffset = documentData.tr * 1e-3 * documentData.finalSize;
        if (singleShape && !usesGlyphs && !documentData.sz) {
          var tElement = this.textContainer;
          var justify = "start";
          switch (documentData.j) {
            case 1:
              justify = "end";
              break;
            case 2:
              justify = "middle";
              break;
            default:
              justify = "start";
              break;
          }
          tElement.setAttribute("text-anchor", justify);
          tElement.setAttribute("letter-spacing", trackingOffset);
          var textContent = this.buildTextContents(documentData.finalText);
          len = textContent.length;
          yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;
          for (i = 0; i < len; i += 1) {
            tSpan = this.textSpans[i].span || createNS("tspan");
            tSpan.textContent = textContent[i];
            tSpan.setAttribute("x", 0);
            tSpan.setAttribute("y", yPos);
            tSpan.style.display = "inherit";
            tElement.appendChild(tSpan);
            if (!this.textSpans[i]) {
              this.textSpans[i] = {
                span: null,
                glyph: null
              };
            }
            this.textSpans[i].span = tSpan;
            yPos += documentData.finalLineHeight;
          }
          this.layerElement.appendChild(tElement);
        } else {
          var cachedSpansLength = this.textSpans.length;
          var charData;
          for (i = 0; i < len; i += 1) {
            if (!this.textSpans[i]) {
              this.textSpans[i] = {
                span: null,
                childSpan: null,
                glyph: null
              };
            }
            if (!usesGlyphs || !singleShape || i === 0) {
              tSpan = cachedSpansLength > i ? this.textSpans[i].span : createNS(usesGlyphs ? "g" : "text");
              if (cachedSpansLength <= i) {
                tSpan.setAttribute("stroke-linecap", "butt");
                tSpan.setAttribute("stroke-linejoin", "round");
                tSpan.setAttribute("stroke-miterlimit", "4");
                this.textSpans[i].span = tSpan;
                if (usesGlyphs) {
                  var childSpan = createNS("g");
                  tSpan.appendChild(childSpan);
                  this.textSpans[i].childSpan = childSpan;
                }
                this.textSpans[i].span = tSpan;
                this.layerElement.appendChild(tSpan);
              }
              tSpan.style.display = "inherit";
            }
            matrixHelper.reset();
            if (singleShape) {
              if (letters[i].n) {
                xPos = -trackingOffset;
                yPos += documentData.yOffset;
                yPos += firstLine ? 1 : 0;
                firstLine = false;
              }
              this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
              xPos += letters[i].l || 0;
              xPos += trackingOffset;
            }
            if (usesGlyphs) {
              charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
              var glyphElement;
              if (charData.t === 1) {
                glyphElement = new SVGCompElement(charData.data, this.globalData, this);
              } else {
                var data2 = emptyShapeData;
                if (charData.data && charData.data.shapes) {
                  data2 = this.buildShapeData(charData.data, documentData.finalSize);
                }
                glyphElement = new SVGShapeElement(data2, this.globalData, this);
              }
              if (this.textSpans[i].glyph) {
                var glyph = this.textSpans[i].glyph;
                this.textSpans[i].childSpan.removeChild(glyph.layerElement);
                glyph.destroy();
              }
              this.textSpans[i].glyph = glyphElement;
              glyphElement._debug = true;
              glyphElement.prepareFrame(0);
              glyphElement.renderFrame();
              this.textSpans[i].childSpan.appendChild(glyphElement.layerElement);
              if (charData.t === 1) {
                this.textSpans[i].childSpan.setAttribute("transform", "scale(" + documentData.finalSize / 100 + "," + documentData.finalSize / 100 + ")");
              }
            } else {
              if (singleShape) {
                tSpan.setAttribute("transform", "translate(" + matrixHelper.props[12] + "," + matrixHelper.props[13] + ")");
              }
              tSpan.textContent = letters[i].val;
              tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
            }
          }
          if (singleShape && tSpan) {
            tSpan.setAttribute("d", shapeStr);
          }
        }
        while (i < this.textSpans.length) {
          this.textSpans[i].span.style.display = "none";
          i += 1;
        }
        this._sizeChanged = true;
      };
      SVGTextLottieElement.prototype.sourceRectAtTime = function() {
        this.prepareFrame(this.comp.renderedFrame - this.data.st);
        this.renderInnerContent();
        if (this._sizeChanged) {
          this._sizeChanged = false;
          var textBox = this.layerElement.getBBox();
          this.bbox = {
            top: textBox.y,
            left: textBox.x,
            width: textBox.width,
            height: textBox.height
          };
        }
        return this.bbox;
      };
      SVGTextLottieElement.prototype.getValue = function() {
        var i;
        var len = this.textSpans.length;
        var glyphElement;
        this.renderedFrame = this.comp.renderedFrame;
        for (i = 0; i < len; i += 1) {
          glyphElement = this.textSpans[i].glyph;
          if (glyphElement) {
            glyphElement.prepareFrame(this.comp.renderedFrame - this.data.st);
            if (glyphElement._mdf) {
              this._mdf = true;
            }
          }
        }
      };
      SVGTextLottieElement.prototype.renderInnerContent = function() {
        if (!this.data.singleShape || this._mdf) {
          this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            this._sizeChanged = true;
            var i;
            var len;
            var renderedLetters = this.textAnimator.renderedLetters;
            var letters = this.textProperty.currentData.l;
            len = letters.length;
            var renderedLetter;
            var textSpan;
            var glyphElement;
            for (i = 0; i < len; i += 1) {
              if (!letters[i].n) {
                renderedLetter = renderedLetters[i];
                textSpan = this.textSpans[i].span;
                glyphElement = this.textSpans[i].glyph;
                if (glyphElement) {
                  glyphElement.renderFrame();
                }
                if (renderedLetter._mdf.m) {
                  textSpan.setAttribute("transform", renderedLetter.m);
                }
                if (renderedLetter._mdf.o) {
                  textSpan.setAttribute("opacity", renderedLetter.o);
                }
                if (renderedLetter._mdf.sw) {
                  textSpan.setAttribute("stroke-width", renderedLetter.sw);
                }
                if (renderedLetter._mdf.sc) {
                  textSpan.setAttribute("stroke", renderedLetter.sc);
                }
                if (renderedLetter._mdf.fc) {
                  textSpan.setAttribute("fill", renderedLetter.fc);
                }
              }
            }
          }
        }
      };
      function ISolidElement(data2, globalData2, comp2) {
        this.initElement(data2, globalData2, comp2);
      }
      extendPrototype([IImageElement], ISolidElement);
      ISolidElement.prototype.createContent = function() {
        var rect = createNS("rect");
        rect.setAttribute("width", this.data.sw);
        rect.setAttribute("height", this.data.sh);
        rect.setAttribute("fill", this.data.sc);
        this.layerElement.appendChild(rect);
      };
      function NullElement(data2, globalData2, comp2) {
        this.initFrame();
        this.initBaseData(data2, globalData2, comp2);
        this.initFrame();
        this.initTransform(data2, globalData2, comp2);
        this.initHierarchy();
      }
      NullElement.prototype.prepareFrame = function(num) {
        this.prepareProperties(num, true);
      };
      NullElement.prototype.renderFrame = function() {
      };
      NullElement.prototype.getBaseElement = function() {
        return null;
      };
      NullElement.prototype.destroy = function() {
      };
      NullElement.prototype.sourceRectAtTime = function() {
      };
      NullElement.prototype.hide = function() {
      };
      extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);
      function SVGRendererBase() {
      }
      extendPrototype([BaseRenderer], SVGRendererBase);
      SVGRendererBase.prototype.createNull = function(data2) {
        return new NullElement(data2, this.globalData, this);
      };
      SVGRendererBase.prototype.createShape = function(data2) {
        return new SVGShapeElement(data2, this.globalData, this);
      };
      SVGRendererBase.prototype.createText = function(data2) {
        return new SVGTextLottieElement(data2, this.globalData, this);
      };
      SVGRendererBase.prototype.createImage = function(data2) {
        return new IImageElement(data2, this.globalData, this);
      };
      SVGRendererBase.prototype.createSolid = function(data2) {
        return new ISolidElement(data2, this.globalData, this);
      };
      SVGRendererBase.prototype.configAnimation = function(animData) {
        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        if (this.renderConfig.viewBoxSize) {
          this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize);
        } else {
          this.svgElement.setAttribute("viewBox", "0 0 " + animData.w + " " + animData.h);
        }
        if (!this.renderConfig.viewBoxOnly) {
          this.svgElement.setAttribute("width", animData.w);
          this.svgElement.setAttribute("height", animData.h);
          this.svgElement.style.width = "100%";
          this.svgElement.style.height = "100%";
          this.svgElement.style.transform = "translate3d(0,0,0)";
          this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility;
        }
        if (this.renderConfig.width) {
          this.svgElement.setAttribute("width", this.renderConfig.width);
        }
        if (this.renderConfig.height) {
          this.svgElement.setAttribute("height", this.renderConfig.height);
        }
        if (this.renderConfig.className) {
          this.svgElement.setAttribute("class", this.renderConfig.className);
        }
        if (this.renderConfig.id) {
          this.svgElement.setAttribute("id", this.renderConfig.id);
        }
        if (this.renderConfig.focusable !== void 0) {
          this.svgElement.setAttribute("focusable", this.renderConfig.focusable);
        }
        this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio);
        this.animationItem.wrapper.appendChild(this.svgElement);
        var defs = this.globalData.defs;
        this.setupGlobalData(animData, defs);
        this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
        this.data = animData;
        var maskElement = createNS("clipPath");
        var rect = createNS("rect");
        rect.setAttribute("width", animData.w);
        rect.setAttribute("height", animData.h);
        rect.setAttribute("x", 0);
        rect.setAttribute("y", 0);
        var maskId = createElementID();
        maskElement.setAttribute("id", maskId);
        maskElement.appendChild(rect);
        this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + maskId + ")");
        defs.appendChild(maskElement);
        this.layers = animData.layers;
        this.elements = createSizedArray(animData.layers.length);
      };
      SVGRendererBase.prototype.destroy = function() {
        if (this.animationItem.wrapper) {
          this.animationItem.wrapper.innerText = "";
        }
        this.layerElement = null;
        this.globalData.defs = null;
        var i;
        var len = this.layers ? this.layers.length : 0;
        for (i = 0; i < len; i += 1) {
          if (this.elements[i]) {
            this.elements[i].destroy();
          }
        }
        this.elements.length = 0;
        this.destroyed = true;
        this.animationItem = null;
      };
      SVGRendererBase.prototype.updateContainerSize = function() {
      };
      SVGRendererBase.prototype.buildItem = function(pos) {
        var elements = this.elements;
        if (elements[pos] || this.layers[pos].ty === 99) {
          return;
        }
        elements[pos] = true;
        var element = this.createItem(this.layers[pos]);
        elements[pos] = element;
        if (getExpressionsPlugin()) {
          if (this.layers[pos].ty === 0) {
            this.globalData.projectInterface.registerComposition(element);
          }
          element.initExpressions();
        }
        this.appendElementInPos(element, pos);
        if (this.layers[pos].tt) {
          if (!this.elements[pos - 1] || this.elements[pos - 1] === true) {
            this.buildItem(pos - 1);
            this.addPendingElement(element);
          } else {
            element.setMatte(elements[pos - 1].layerId);
          }
        }
      };
      SVGRendererBase.prototype.checkPendingElements = function() {
        while (this.pendingElements.length) {
          var element = this.pendingElements.pop();
          element.checkParenting();
          if (element.data.tt) {
            var i = 0;
            var len = this.elements.length;
            while (i < len) {
              if (this.elements[i] === element) {
                element.setMatte(this.elements[i - 1].layerId);
                break;
              }
              i += 1;
            }
          }
        }
      };
      SVGRendererBase.prototype.renderFrame = function(num) {
        if (this.renderedFrame === num || this.destroyed) {
          return;
        }
        if (num === null) {
          num = this.renderedFrame;
        } else {
          this.renderedFrame = num;
        }
        this.globalData.frameNum = num;
        this.globalData.frameId += 1;
        this.globalData.projectInterface.currentFrame = num;
        this.globalData._mdf = false;
        var i;
        var len = this.layers.length;
        if (!this.completeLayers) {
          this.checkLayers(num);
        }
        for (i = len - 1; i >= 0; i -= 1) {
          if (this.completeLayers || this.elements[i]) {
            this.elements[i].prepareFrame(num - this.layers[i].st);
          }
        }
        if (this.globalData._mdf) {
          for (i = 0; i < len; i += 1) {
            if (this.completeLayers || this.elements[i]) {
              this.elements[i].renderFrame();
            }
          }
        }
      };
      SVGRendererBase.prototype.appendElementInPos = function(element, pos) {
        var newElement = element.getBaseElement();
        if (!newElement) {
          return;
        }
        var i = 0;
        var nextElement;
        while (i < pos) {
          if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement()) {
            nextElement = this.elements[i].getBaseElement();
          }
          i += 1;
        }
        if (nextElement) {
          this.layerElement.insertBefore(newElement, nextElement);
        } else {
          this.layerElement.appendChild(newElement);
        }
      };
      SVGRendererBase.prototype.hide = function() {
        this.layerElement.style.display = "none";
      };
      SVGRendererBase.prototype.show = function() {
        this.layerElement.style.display = "block";
      };
      function ICompElement() {
      }
      extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);
      ICompElement.prototype.initElement = function(data2, globalData2, comp2) {
        this.initFrame();
        this.initBaseData(data2, globalData2, comp2);
        this.initTransform(data2, globalData2, comp2);
        this.initRenderable();
        this.initHierarchy();
        this.initRendererElement();
        this.createContainerElements();
        this.createRenderableComponents();
        if (this.data.xt || !globalData2.progressiveLoad) {
          this.buildAllItems();
        }
        this.hide();
      };
      ICompElement.prototype.prepareFrame = function(num) {
        this._mdf = false;
        this.prepareRenderableFrame(num);
        this.prepareProperties(num, this.isInRange);
        if (!this.isInRange && !this.data.xt) {
          return;
        }
        if (!this.tm._placeholder) {
          var timeRemapped = this.tm.v;
          if (timeRemapped === this.data.op) {
            timeRemapped = this.data.op - 1;
          }
          this.renderedFrame = timeRemapped;
        } else {
          this.renderedFrame = num / this.data.sr;
        }
        var i;
        var len = this.elements.length;
        if (!this.completeLayers) {
          this.checkLayers(this.renderedFrame);
        }
        for (i = len - 1; i >= 0; i -= 1) {
          if (this.completeLayers || this.elements[i]) {
            this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);
            if (this.elements[i]._mdf) {
              this._mdf = true;
            }
          }
        }
      };
      ICompElement.prototype.renderInnerContent = function() {
        var i;
        var len = this.layers.length;
        for (i = 0; i < len; i += 1) {
          if (this.completeLayers || this.elements[i]) {
            this.elements[i].renderFrame();
          }
        }
      };
      ICompElement.prototype.setElements = function(elems) {
        this.elements = elems;
      };
      ICompElement.prototype.getElements = function() {
        return this.elements;
      };
      ICompElement.prototype.destroyElements = function() {
        var i;
        var len = this.layers.length;
        for (i = 0; i < len; i += 1) {
          if (this.elements[i]) {
            this.elements[i].destroy();
          }
        }
      };
      ICompElement.prototype.destroy = function() {
        this.destroyElements();
        this.destroyBaseElement();
      };
      function SVGCompElement(data2, globalData2, comp2) {
        this.layers = data2.layers;
        this.supports3d = true;
        this.completeLayers = false;
        this.pendingElements = [];
        this.elements = this.layers ? createSizedArray(this.layers.length) : [];
        this.initElement(data2, globalData2, comp2);
        this.tm = data2.tm ? PropertyFactory.getProp(this, data2.tm, 0, globalData2.frameRate, this) : {
          _placeholder: true
        };
      }
      extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement);
      SVGCompElement.prototype.createComp = function(data2) {
        return new SVGCompElement(data2, this.globalData, this);
      };
      function SVGRenderer(animationItem, config) {
        this.animationItem = animationItem;
        this.layers = null;
        this.renderedFrame = -1;
        this.svgElement = createNS("svg");
        var ariaLabel = "";
        if (config && config.title) {
          var titleElement = createNS("title");
          var titleId = createElementID();
          titleElement.setAttribute("id", titleId);
          titleElement.textContent = config.title;
          this.svgElement.appendChild(titleElement);
          ariaLabel += titleId;
        }
        if (config && config.description) {
          var descElement = createNS("desc");
          var descId = createElementID();
          descElement.setAttribute("id", descId);
          descElement.textContent = config.description;
          this.svgElement.appendChild(descElement);
          ariaLabel += " " + descId;
        }
        if (ariaLabel) {
          this.svgElement.setAttribute("aria-labelledby", ariaLabel);
        }
        var defs = createNS("defs");
        this.svgElement.appendChild(defs);
        var maskElement = createNS("g");
        this.svgElement.appendChild(maskElement);
        this.layerElement = maskElement;
        this.renderConfig = {
          preserveAspectRatio: config && config.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: config && config.contentVisibility || "visible",
          progressiveLoad: config && config.progressiveLoad || false,
          hideOnTransparent: !(config && config.hideOnTransparent === false),
          viewBoxOnly: config && config.viewBoxOnly || false,
          viewBoxSize: config && config.viewBoxSize || false,
          className: config && config.className || "",
          id: config && config.id || "",
          focusable: config && config.focusable,
          filterSize: {
            width: config && config.filterSize && config.filterSize.width || "100%",
            height: config && config.filterSize && config.filterSize.height || "100%",
            x: config && config.filterSize && config.filterSize.x || "0%",
            y: config && config.filterSize && config.filterSize.y || "0%"
          },
          width: config && config.width,
          height: config && config.height
        };
        this.globalData = {
          _mdf: false,
          frameNum: -1,
          defs,
          renderConfig: this.renderConfig
        };
        this.elements = [];
        this.pendingElements = [];
        this.destroyed = false;
        this.rendererType = "svg";
      }
      extendPrototype([SVGRendererBase], SVGRenderer);
      SVGRenderer.prototype.createComp = function(data2) {
        return new SVGCompElement(data2, this.globalData, this);
      };
      function CVContextData() {
        this.saved = [];
        this.cArrPos = 0;
        this.cTr = new Matrix();
        this.cO = 1;
        var i;
        var len = 15;
        this.savedOp = createTypedArray("float32", len);
        for (i = 0; i < len; i += 1) {
          this.saved[i] = createTypedArray("float32", 16);
        }
        this._length = len;
      }
      CVContextData.prototype.duplicate = function() {
        var newLength = this._length * 2;
        var currentSavedOp = this.savedOp;
        this.savedOp = createTypedArray("float32", newLength);
        this.savedOp.set(currentSavedOp);
        var i = 0;
        for (i = this._length; i < newLength; i += 1) {
          this.saved[i] = createTypedArray("float32", 16);
        }
        this._length = newLength;
      };
      CVContextData.prototype.reset = function() {
        this.cArrPos = 0;
        this.cTr.reset();
        this.cO = 1;
      };
      function ShapeTransformManager() {
        this.sequences = {};
        this.sequenceList = [];
        this.transform_key_count = 0;
      }
      ShapeTransformManager.prototype = {
        addTransformSequence: function addTransformSequence(transforms) {
          var i;
          var len = transforms.length;
          var key2 = "_";
          for (i = 0; i < len; i += 1) {
            key2 += transforms[i].transform.key + "_";
          }
          var sequence = this.sequences[key2];
          if (!sequence) {
            sequence = {
              transforms: [].concat(transforms),
              finalTransform: new Matrix(),
              _mdf: false
            };
            this.sequences[key2] = sequence;
            this.sequenceList.push(sequence);
          }
          return sequence;
        },
        processSequence: function processSequence(sequence, isFirstFrame) {
          var i = 0;
          var len = sequence.transforms.length;
          var _mdf = isFirstFrame;
          while (i < len && !isFirstFrame) {
            if (sequence.transforms[i].transform.mProps._mdf) {
              _mdf = true;
              break;
            }
            i += 1;
          }
          if (_mdf) {
            var props;
            sequence.finalTransform.reset();
            for (i = len - 1; i >= 0; i -= 1) {
              props = sequence.transforms[i].transform.mProps.v.props;
              sequence.finalTransform.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15]);
            }
          }
          sequence._mdf = _mdf;
        },
        processSequences: function processSequences(isFirstFrame) {
          var i;
          var len = this.sequenceList.length;
          for (i = 0; i < len; i += 1) {
            this.processSequence(this.sequenceList[i], isFirstFrame);
          }
        },
        getNewKey: function getNewKey() {
          this.transform_key_count += 1;
          return "_" + this.transform_key_count;
        }
      };
      function CVEffects() {
      }
      CVEffects.prototype.renderFrame = function() {
      };
      function CVMaskElement(data2, element) {
        this.data = data2;
        this.element = element;
        this.masksProperties = this.data.masksProperties || [];
        this.viewData = createSizedArray(this.masksProperties.length);
        var i;
        var len = this.masksProperties.length;
        var hasMasks = false;
        for (i = 0; i < len; i += 1) {
          if (this.masksProperties[i].mode !== "n") {
            hasMasks = true;
          }
          this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
        }
        this.hasMasks = hasMasks;
        if (hasMasks) {
          this.element.addRenderableComponent(this);
        }
      }
      CVMaskElement.prototype.renderFrame = function() {
        if (!this.hasMasks) {
          return;
        }
        var transform2 = this.element.finalTransform.mat;
        var ctx = this.element.canvasContext;
        var i;
        var len = this.masksProperties.length;
        var pt;
        var pts;
        var data2;
        ctx.beginPath();
        for (i = 0; i < len; i += 1) {
          if (this.masksProperties[i].mode !== "n") {
            if (this.masksProperties[i].inv) {
              ctx.moveTo(0, 0);
              ctx.lineTo(this.element.globalData.compSize.w, 0);
              ctx.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h);
              ctx.lineTo(0, this.element.globalData.compSize.h);
              ctx.lineTo(0, 0);
            }
            data2 = this.viewData[i].v;
            pt = transform2.applyToPointArray(data2.v[0][0], data2.v[0][1], 0);
            ctx.moveTo(pt[0], pt[1]);
            var j;
            var jLen = data2._length;
            for (j = 1; j < jLen; j += 1) {
              pts = transform2.applyToTriplePoints(data2.o[j - 1], data2.i[j], data2.v[j]);
              ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
            }
            pts = transform2.applyToTriplePoints(data2.o[j - 1], data2.i[0], data2.v[0]);
            ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
          }
        }
        this.element.globalData.renderer.save(true);
        ctx.clip();
      };
      CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;
      CVMaskElement.prototype.destroy = function() {
        this.element = null;
      };
      function CVBaseElement() {
      }
      CVBaseElement.prototype = {
        createElements: function createElements() {
        },
        initRendererElement: function initRendererElement() {
        },
        createContainerElements: function createContainerElements() {
          this.canvasContext = this.globalData.canvasContext;
          this.renderableEffectsManager = new CVEffects(this);
        },
        createContent: function createContent() {
        },
        setBlendMode: function setBlendMode() {
          var globalData2 = this.globalData;
          if (globalData2.blendMode !== this.data.bm) {
            globalData2.blendMode = this.data.bm;
            var blendModeValue = getBlendMode(this.data.bm);
            globalData2.canvasContext.globalCompositeOperation = blendModeValue;
          }
        },
        createRenderableComponents: function createRenderableComponents() {
          this.maskManager = new CVMaskElement(this.data, this);
        },
        hideElement: function hideElement() {
          if (!this.hidden && (!this.isInRange || this.isTransparent)) {
            this.hidden = true;
          }
        },
        showElement: function showElement() {
          if (this.isInRange && !this.isTransparent) {
            this.hidden = false;
            this._isFirstFrame = true;
            this.maskManager._isFirstFrame = true;
          }
        },
        renderFrame: function renderFrame() {
          if (this.hidden || this.data.hd) {
            return;
          }
          this.renderTransform();
          this.renderRenderable();
          this.setBlendMode();
          var forceRealStack = this.data.ty === 0;
          this.globalData.renderer.save(forceRealStack);
          this.globalData.renderer.ctxTransform(this.finalTransform.mat.props);
          this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v);
          this.renderInnerContent();
          this.globalData.renderer.restore(forceRealStack);
          if (this.maskManager.hasMasks) {
            this.globalData.renderer.restore(true);
          }
          if (this._isFirstFrame) {
            this._isFirstFrame = false;
          }
        },
        destroy: function destroy() {
          this.canvasContext = null;
          this.data = null;
          this.globalData = null;
          this.maskManager.destroy();
        },
        mHelper: new Matrix()
      };
      CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
      CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
      function CVShapeData(element, data2, styles, transformsManager) {
        this.styledShapes = [];
        this.tr = [0, 0, 0, 0, 0, 0];
        var ty = 4;
        if (data2.ty === "rc") {
          ty = 5;
        } else if (data2.ty === "el") {
          ty = 6;
        } else if (data2.ty === "sr") {
          ty = 7;
        }
        this.sh = ShapePropertyFactory.getShapeProp(element, data2, ty, element);
        var i;
        var len = styles.length;
        var styledShape;
        for (i = 0; i < len; i += 1) {
          if (!styles[i].closed) {
            styledShape = {
              transforms: transformsManager.addTransformSequence(styles[i].transforms),
              trNodes: []
            };
            this.styledShapes.push(styledShape);
            styles[i].elements.push(styledShape);
          }
        }
      }
      CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
      function CVShapeElement(data2, globalData2, comp2) {
        this.shapes = [];
        this.shapesData = data2.shapes;
        this.stylesList = [];
        this.itemsData = [];
        this.prevViewData = [];
        this.shapeModifiers = [];
        this.processedElements = [];
        this.transformsManager = new ShapeTransformManager();
        this.initElement(data2, globalData2, comp2);
      }
      extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement);
      CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;
      CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        _opMdf: false
      };
      CVShapeElement.prototype.dashResetter = [];
      CVShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
      };
      CVShapeElement.prototype.createStyleElement = function(data2, transforms) {
        var styleElem = {
          data: data2,
          type: data2.ty,
          preTransforms: this.transformsManager.addTransformSequence(transforms),
          transforms: [],
          elements: [],
          closed: data2.hd === true
        };
        var elementData = {};
        if (data2.ty === "fl" || data2.ty === "st") {
          elementData.c = PropertyFactory.getProp(this, data2.c, 1, 255, this);
          if (!elementData.c.k) {
            styleElem.co = "rgb(" + bmFloor(elementData.c.v[0]) + "," + bmFloor(elementData.c.v[1]) + "," + bmFloor(elementData.c.v[2]) + ")";
          }
        } else if (data2.ty === "gf" || data2.ty === "gs") {
          elementData.s = PropertyFactory.getProp(this, data2.s, 1, null, this);
          elementData.e = PropertyFactory.getProp(this, data2.e, 1, null, this);
          elementData.h = PropertyFactory.getProp(this, data2.h || {
            k: 0
          }, 0, 0.01, this);
          elementData.a = PropertyFactory.getProp(this, data2.a || {
            k: 0
          }, 0, degToRads, this);
          elementData.g = new GradientProperty(this, data2.g, this);
        }
        elementData.o = PropertyFactory.getProp(this, data2.o, 0, 0.01, this);
        if (data2.ty === "st" || data2.ty === "gs") {
          styleElem.lc = lineCapEnum[data2.lc || 2];
          styleElem.lj = lineJoinEnum[data2.lj || 2];
          if (data2.lj == 1) {
            styleElem.ml = data2.ml;
          }
          elementData.w = PropertyFactory.getProp(this, data2.w, 0, null, this);
          if (!elementData.w.k) {
            styleElem.wi = elementData.w.v;
          }
          if (data2.d) {
            var d = new DashProperty(this, data2.d, "canvas", this);
            elementData.d = d;
            if (!elementData.d.k) {
              styleElem.da = elementData.d.dashArray;
              styleElem["do"] = elementData.d.dashoffset[0];
            }
          }
        } else {
          styleElem.r = data2.r === 2 ? "evenodd" : "nonzero";
        }
        this.stylesList.push(styleElem);
        elementData.style = styleElem;
        return elementData;
      };
      CVShapeElement.prototype.createGroupElement = function() {
        var elementData = {
          it: [],
          prevViewData: []
        };
        return elementData;
      };
      CVShapeElement.prototype.createTransformElement = function(data2) {
        var elementData = {
          transform: {
            opacity: 1,
            _opMdf: false,
            key: this.transformsManager.getNewKey(),
            op: PropertyFactory.getProp(this, data2.o, 0, 0.01, this),
            mProps: TransformPropertyFactory.getTransformProperty(this, data2, this)
          }
        };
        return elementData;
      };
      CVShapeElement.prototype.createShapeElement = function(data2) {
        var elementData = new CVShapeData(this, data2, this.stylesList, this.transformsManager);
        this.shapes.push(elementData);
        this.addShapeToModifiers(elementData);
        return elementData;
      };
      CVShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = true;
        var i;
        var len = this.itemsData.length;
        for (i = 0; i < len; i += 1) {
          this.prevViewData[i] = this.itemsData[i];
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
        len = this.dynamicProperties.length;
        for (i = 0; i < len; i += 1) {
          this.dynamicProperties[i].getValue();
        }
        this.renderModifiers();
        this.transformsManager.processSequences(this._isFirstFrame);
      };
      CVShapeElement.prototype.addTransformToStyleList = function(transform2) {
        var i;
        var len = this.stylesList.length;
        for (i = 0; i < len; i += 1) {
          if (!this.stylesList[i].closed) {
            this.stylesList[i].transforms.push(transform2);
          }
        }
      };
      CVShapeElement.prototype.removeTransformFromStyleList = function() {
        var i;
        var len = this.stylesList.length;
        for (i = 0; i < len; i += 1) {
          if (!this.stylesList[i].closed) {
            this.stylesList[i].transforms.pop();
          }
        }
      };
      CVShapeElement.prototype.closeStyles = function(styles) {
        var i;
        var len = styles.length;
        for (i = 0; i < len; i += 1) {
          styles[i].closed = true;
        }
      };
      CVShapeElement.prototype.searchShapes = function(arr, itemsData, prevViewData, shouldRender, transforms) {
        var i;
        var len = arr.length - 1;
        var j;
        var jLen;
        var ownStyles = [];
        var ownModifiers = [];
        var processedPos;
        var modifier;
        var currentTransform;
        var ownTransforms = [].concat(transforms);
        for (i = len; i >= 0; i -= 1) {
          processedPos = this.searchProcessedElement(arr[i]);
          if (!processedPos) {
            arr[i]._shouldRender = shouldRender;
          } else {
            itemsData[i] = prevViewData[processedPos - 1];
          }
          if (arr[i].ty === "fl" || arr[i].ty === "st" || arr[i].ty === "gf" || arr[i].ty === "gs") {
            if (!processedPos) {
              itemsData[i] = this.createStyleElement(arr[i], ownTransforms);
            } else {
              itemsData[i].style.closed = false;
            }
            ownStyles.push(itemsData[i].style);
          } else if (arr[i].ty === "gr") {
            if (!processedPos) {
              itemsData[i] = this.createGroupElement(arr[i]);
            } else {
              jLen = itemsData[i].it.length;
              for (j = 0; j < jLen; j += 1) {
                itemsData[i].prevViewData[j] = itemsData[i].it[j];
              }
            }
            this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, shouldRender, ownTransforms);
          } else if (arr[i].ty === "tr") {
            if (!processedPos) {
              currentTransform = this.createTransformElement(arr[i]);
              itemsData[i] = currentTransform;
            }
            ownTransforms.push(itemsData[i]);
            this.addTransformToStyleList(itemsData[i]);
          } else if (arr[i].ty === "sh" || arr[i].ty === "rc" || arr[i].ty === "el" || arr[i].ty === "sr") {
            if (!processedPos) {
              itemsData[i] = this.createShapeElement(arr[i]);
            }
          } else if (arr[i].ty === "tm" || arr[i].ty === "rd" || arr[i].ty === "pb") {
            if (!processedPos) {
              modifier = ShapeModifiers.getModifier(arr[i].ty);
              modifier.init(this, arr[i]);
              itemsData[i] = modifier;
              this.shapeModifiers.push(modifier);
            } else {
              modifier = itemsData[i];
              modifier.closed = false;
            }
            ownModifiers.push(modifier);
          } else if (arr[i].ty === "rp") {
            if (!processedPos) {
              modifier = ShapeModifiers.getModifier(arr[i].ty);
              itemsData[i] = modifier;
              modifier.init(this, arr, i, itemsData);
              this.shapeModifiers.push(modifier);
              shouldRender = false;
            } else {
              modifier = itemsData[i];
              modifier.closed = true;
            }
            ownModifiers.push(modifier);
          }
          this.addProcessedElement(arr[i], i + 1);
        }
        this.removeTransformFromStyleList();
        this.closeStyles(ownStyles);
        len = ownModifiers.length;
        for (i = 0; i < len; i += 1) {
          ownModifiers[i].closed = true;
        }
      };
      CVShapeElement.prototype.renderInnerContent = function() {
        this.transformHelper.opacity = 1;
        this.transformHelper._opMdf = false;
        this.renderModifiers();
        this.transformsManager.processSequences(this._isFirstFrame);
        this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
      };
      CVShapeElement.prototype.renderShapeTransform = function(parentTransform, groupTransform) {
        if (parentTransform._opMdf || groupTransform.op._mdf || this._isFirstFrame) {
          groupTransform.opacity = parentTransform.opacity;
          groupTransform.opacity *= groupTransform.op.v;
          groupTransform._opMdf = true;
        }
      };
      CVShapeElement.prototype.drawLayer = function() {
        var i;
        var len = this.stylesList.length;
        var j;
        var jLen;
        var k;
        var kLen;
        var elems;
        var nodes;
        var renderer2 = this.globalData.renderer;
        var ctx = this.globalData.canvasContext;
        var type;
        var currentStyle;
        for (i = 0; i < len; i += 1) {
          currentStyle = this.stylesList[i];
          type = currentStyle.type;
          if (!((type === "st" || type === "gs") && currentStyle.wi === 0 || !currentStyle.data._shouldRender || currentStyle.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
            renderer2.save();
            elems = currentStyle.elements;
            if (type === "st" || type === "gs") {
              ctx.strokeStyle = type === "st" ? currentStyle.co : currentStyle.grd;
              ctx.lineWidth = currentStyle.wi;
              ctx.lineCap = currentStyle.lc;
              ctx.lineJoin = currentStyle.lj;
              ctx.miterLimit = currentStyle.ml || 0;
            } else {
              ctx.fillStyle = type === "fl" ? currentStyle.co : currentStyle.grd;
            }
            renderer2.ctxOpacity(currentStyle.coOp);
            if (type !== "st" && type !== "gs") {
              ctx.beginPath();
            }
            renderer2.ctxTransform(currentStyle.preTransforms.finalTransform.props);
            jLen = elems.length;
            for (j = 0; j < jLen; j += 1) {
              if (type === "st" || type === "gs") {
                ctx.beginPath();
                if (currentStyle.da) {
                  ctx.setLineDash(currentStyle.da);
                  ctx.lineDashOffset = currentStyle["do"];
                }
              }
              nodes = elems[j].trNodes;
              kLen = nodes.length;
              for (k = 0; k < kLen; k += 1) {
                if (nodes[k].t === "m") {
                  ctx.moveTo(nodes[k].p[0], nodes[k].p[1]);
                } else if (nodes[k].t === "c") {
                  ctx.bezierCurveTo(nodes[k].pts[0], nodes[k].pts[1], nodes[k].pts[2], nodes[k].pts[3], nodes[k].pts[4], nodes[k].pts[5]);
                } else {
                  ctx.closePath();
                }
              }
              if (type === "st" || type === "gs") {
                ctx.stroke();
                if (currentStyle.da) {
                  ctx.setLineDash(this.dashResetter);
                }
              }
            }
            if (type !== "st" && type !== "gs") {
              ctx.fill(currentStyle.r);
            }
            renderer2.restore();
          }
        }
      };
      CVShapeElement.prototype.renderShape = function(parentTransform, items, data2, isMain) {
        var i;
        var len = items.length - 1;
        var groupTransform;
        groupTransform = parentTransform;
        for (i = len; i >= 0; i -= 1) {
          if (items[i].ty === "tr") {
            groupTransform = data2[i].transform;
            this.renderShapeTransform(parentTransform, groupTransform);
          } else if (items[i].ty === "sh" || items[i].ty === "el" || items[i].ty === "rc" || items[i].ty === "sr") {
            this.renderPath(items[i], data2[i]);
          } else if (items[i].ty === "fl") {
            this.renderFill(items[i], data2[i], groupTransform);
          } else if (items[i].ty === "st") {
            this.renderStroke(items[i], data2[i], groupTransform);
          } else if (items[i].ty === "gf" || items[i].ty === "gs") {
            this.renderGradientFill(items[i], data2[i], groupTransform);
          } else if (items[i].ty === "gr") {
            this.renderShape(groupTransform, items[i].it, data2[i].it);
          } else if (items[i].ty === "tm") {
          }
        }
        if (isMain) {
          this.drawLayer();
        }
      };
      CVShapeElement.prototype.renderStyledShape = function(styledShape, shape) {
        if (this._isFirstFrame || shape._mdf || styledShape.transforms._mdf) {
          var shapeNodes = styledShape.trNodes;
          var paths = shape.paths;
          var i;
          var len;
          var j;
          var jLen = paths._length;
          shapeNodes.length = 0;
          var groupTransformMat = styledShape.transforms.finalTransform;
          for (j = 0; j < jLen; j += 1) {
            var pathNodes = paths.shapes[j];
            if (pathNodes && pathNodes.v) {
              len = pathNodes._length;
              for (i = 1; i < len; i += 1) {
                if (i === 1) {
                  shapeNodes.push({
                    t: "m",
                    p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
                  });
                }
                shapeNodes.push({
                  t: "c",
                  pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[i], pathNodes.v[i])
                });
              }
              if (len === 1) {
                shapeNodes.push({
                  t: "m",
                  p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
                });
              }
              if (pathNodes.c && len) {
                shapeNodes.push({
                  t: "c",
                  pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[0], pathNodes.v[0])
                });
                shapeNodes.push({
                  t: "z"
                });
              }
            }
          }
          styledShape.trNodes = shapeNodes;
        }
      };
      CVShapeElement.prototype.renderPath = function(pathData, itemData) {
        if (pathData.hd !== true && pathData._shouldRender) {
          var i;
          var len = itemData.styledShapes.length;
          for (i = 0; i < len; i += 1) {
            this.renderStyledShape(itemData.styledShapes[i], itemData.sh);
          }
        }
      };
      CVShapeElement.prototype.renderFill = function(styleData, itemData, groupTransform) {
        var styleElem = itemData.style;
        if (itemData.c._mdf || this._isFirstFrame) {
          styleElem.co = "rgb(" + bmFloor(itemData.c.v[0]) + "," + bmFloor(itemData.c.v[1]) + "," + bmFloor(itemData.c.v[2]) + ")";
        }
        if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
          styleElem.coOp = itemData.o.v * groupTransform.opacity;
        }
      };
      CVShapeElement.prototype.renderGradientFill = function(styleData, itemData, groupTransform) {
        var styleElem = itemData.style;
        var grd;
        if (!styleElem.grd || itemData.g._mdf || itemData.s._mdf || itemData.e._mdf || styleData.t !== 1 && (itemData.h._mdf || itemData.a._mdf)) {
          var ctx = this.globalData.canvasContext;
          var pt1 = itemData.s.v;
          var pt2 = itemData.e.v;
          if (styleData.t === 1) {
            grd = ctx.createLinearGradient(pt1[0], pt1[1], pt2[0], pt2[1]);
          } else {
            var rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
            var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
            var percent = itemData.h.v;
            if (percent >= 1) {
              percent = 0.99;
            } else if (percent <= -1) {
              percent = -0.99;
            }
            var dist = rad * percent;
            var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
            var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
            grd = ctx.createRadialGradient(x, y, 0, pt1[0], pt1[1], rad);
          }
          var i;
          var len = styleData.g.p;
          var cValues = itemData.g.c;
          var opacity = 1;
          for (i = 0; i < len; i += 1) {
            if (itemData.g._hasOpacity && itemData.g._collapsable) {
              opacity = itemData.g.o[i * 2 + 1];
            }
            grd.addColorStop(cValues[i * 4] / 100, "rgba(" + cValues[i * 4 + 1] + "," + cValues[i * 4 + 2] + "," + cValues[i * 4 + 3] + "," + opacity + ")");
          }
          styleElem.grd = grd;
        }
        styleElem.coOp = itemData.o.v * groupTransform.opacity;
      };
      CVShapeElement.prototype.renderStroke = function(styleData, itemData, groupTransform) {
        var styleElem = itemData.style;
        var d = itemData.d;
        if (d && (d._mdf || this._isFirstFrame)) {
          styleElem.da = d.dashArray;
          styleElem["do"] = d.dashoffset[0];
        }
        if (itemData.c._mdf || this._isFirstFrame) {
          styleElem.co = "rgb(" + bmFloor(itemData.c.v[0]) + "," + bmFloor(itemData.c.v[1]) + "," + bmFloor(itemData.c.v[2]) + ")";
        }
        if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
          styleElem.coOp = itemData.o.v * groupTransform.opacity;
        }
        if (itemData.w._mdf || this._isFirstFrame) {
          styleElem.wi = itemData.w.v;
        }
      };
      CVShapeElement.prototype.destroy = function() {
        this.shapesData = null;
        this.globalData = null;
        this.canvasContext = null;
        this.stylesList.length = 0;
        this.itemsData.length = 0;
      };
      function CVTextElement(data2, globalData2, comp2) {
        this.textSpans = [];
        this.yOffset = 0;
        this.fillColorAnim = false;
        this.strokeColorAnim = false;
        this.strokeWidthAnim = false;
        this.stroke = false;
        this.fill = false;
        this.justifyOffset = 0;
        this.currentRender = null;
        this.renderType = "canvas";
        this.values = {
          fill: "rgba(0,0,0,0)",
          stroke: "rgba(0,0,0,0)",
          sWidth: 0,
          fValue: ""
        };
        this.initElement(data2, globalData2, comp2);
      }
      extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement);
      CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d");
      CVTextElement.prototype.buildNewText = function() {
        var documentData = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
        var hasFill = false;
        if (documentData.fc) {
          hasFill = true;
          this.values.fill = this.buildColor(documentData.fc);
        } else {
          this.values.fill = "rgba(0,0,0,0)";
        }
        this.fill = hasFill;
        var hasStroke = false;
        if (documentData.sc) {
          hasStroke = true;
          this.values.stroke = this.buildColor(documentData.sc);
          this.values.sWidth = documentData.sw;
        }
        var fontData = this.globalData.fontManager.getFontByName(documentData.f);
        var i;
        var len;
        var letters = documentData.l;
        var matrixHelper = this.mHelper;
        this.stroke = hasStroke;
        this.values.fValue = documentData.finalSize + "px " + this.globalData.fontManager.getFontByName(documentData.f).fFamily;
        len = documentData.finalText.length;
        var charData;
        var shapeData;
        var k;
        var kLen;
        var shapes;
        var j;
        var jLen;
        var pathNodes;
        var commands;
        var pathArr;
        var singleShape = this.data.singleShape;
        var trackingOffset = documentData.tr * 1e-3 * documentData.finalSize;
        var xPos = 0;
        var yPos = 0;
        var firstLine = true;
        var cnt = 0;
        for (i = 0; i < len; i += 1) {
          charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
          shapeData = charData && charData.data || {};
          matrixHelper.reset();
          if (singleShape && letters[i].n) {
            xPos = -trackingOffset;
            yPos += documentData.yOffset;
            yPos += firstLine ? 1 : 0;
            firstLine = false;
          }
          shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
          jLen = shapes.length;
          matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
          if (singleShape) {
            this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
          }
          commands = createSizedArray(jLen - 1);
          var commandsCounter = 0;
          for (j = 0; j < jLen; j += 1) {
            if (shapes[j].ty === "sh") {
              kLen = shapes[j].ks.k.i.length;
              pathNodes = shapes[j].ks.k;
              pathArr = [];
              for (k = 1; k < kLen; k += 1) {
                if (k === 1) {
                  pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
                }
                pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToY(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToX(pathNodes.v[k][0], pathNodes.v[k][1], 0), matrixHelper.applyToY(pathNodes.v[k][0], pathNodes.v[k][1], 0));
              }
              pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToY(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
              commands[commandsCounter] = pathArr;
              commandsCounter += 1;
            }
          }
          if (singleShape) {
            xPos += letters[i].l;
            xPos += trackingOffset;
          }
          if (this.textSpans[cnt]) {
            this.textSpans[cnt].elem = commands;
          } else {
            this.textSpans[cnt] = {
              elem: commands
            };
          }
          cnt += 1;
        }
      };
      CVTextElement.prototype.renderInnerContent = function() {
        var ctx = this.canvasContext;
        ctx.font = this.values.fValue;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        if (!this.data.singleShape) {
          this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        }
        var i;
        var len;
        var j;
        var jLen;
        var k;
        var kLen;
        var renderedLetters = this.textAnimator.renderedLetters;
        var letters = this.textProperty.currentData.l;
        len = letters.length;
        var renderedLetter;
        var lastFill = null;
        var lastStroke = null;
        var lastStrokeW = null;
        var commands;
        var pathArr;
        for (i = 0; i < len; i += 1) {
          if (!letters[i].n) {
            renderedLetter = renderedLetters[i];
            if (renderedLetter) {
              this.globalData.renderer.save();
              this.globalData.renderer.ctxTransform(renderedLetter.p);
              this.globalData.renderer.ctxOpacity(renderedLetter.o);
            }
            if (this.fill) {
              if (renderedLetter && renderedLetter.fc) {
                if (lastFill !== renderedLetter.fc) {
                  lastFill = renderedLetter.fc;
                  ctx.fillStyle = renderedLetter.fc;
                }
              } else if (lastFill !== this.values.fill) {
                lastFill = this.values.fill;
                ctx.fillStyle = this.values.fill;
              }
              commands = this.textSpans[i].elem;
              jLen = commands.length;
              this.globalData.canvasContext.beginPath();
              for (j = 0; j < jLen; j += 1) {
                pathArr = commands[j];
                kLen = pathArr.length;
                this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
                for (k = 2; k < kLen; k += 6) {
                  this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
                }
              }
              this.globalData.canvasContext.closePath();
              this.globalData.canvasContext.fill();
            }
            if (this.stroke) {
              if (renderedLetter && renderedLetter.sw) {
                if (lastStrokeW !== renderedLetter.sw) {
                  lastStrokeW = renderedLetter.sw;
                  ctx.lineWidth = renderedLetter.sw;
                }
              } else if (lastStrokeW !== this.values.sWidth) {
                lastStrokeW = this.values.sWidth;
                ctx.lineWidth = this.values.sWidth;
              }
              if (renderedLetter && renderedLetter.sc) {
                if (lastStroke !== renderedLetter.sc) {
                  lastStroke = renderedLetter.sc;
                  ctx.strokeStyle = renderedLetter.sc;
                }
              } else if (lastStroke !== this.values.stroke) {
                lastStroke = this.values.stroke;
                ctx.strokeStyle = this.values.stroke;
              }
              commands = this.textSpans[i].elem;
              jLen = commands.length;
              this.globalData.canvasContext.beginPath();
              for (j = 0; j < jLen; j += 1) {
                pathArr = commands[j];
                kLen = pathArr.length;
                this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);
                for (k = 2; k < kLen; k += 6) {
                  this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
                }
              }
              this.globalData.canvasContext.closePath();
              this.globalData.canvasContext.stroke();
            }
            if (renderedLetter) {
              this.globalData.renderer.restore();
            }
          }
        }
      };
      function CVImageElement(data2, globalData2, comp2) {
        this.assetData = globalData2.getAssetData(data2.refId);
        this.img = globalData2.imageLoader.getAsset(this.assetData);
        this.initElement(data2, globalData2, comp2);
      }
      extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement);
      CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
      CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;
      CVImageElement.prototype.createContent = function() {
        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
          var canvas = createTag("canvas");
          canvas.width = this.assetData.w;
          canvas.height = this.assetData.h;
          var ctx = canvas.getContext("2d");
          var imgW = this.img.width;
          var imgH = this.img.height;
          var imgRel = imgW / imgH;
          var canvasRel = this.assetData.w / this.assetData.h;
          var widthCrop;
          var heightCrop;
          var par = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
          if (imgRel > canvasRel && par === "xMidYMid slice" || imgRel < canvasRel && par !== "xMidYMid slice") {
            heightCrop = imgH;
            widthCrop = heightCrop * canvasRel;
          } else {
            widthCrop = imgW;
            heightCrop = widthCrop / canvasRel;
          }
          ctx.drawImage(this.img, (imgW - widthCrop) / 2, (imgH - heightCrop) / 2, widthCrop, heightCrop, 0, 0, this.assetData.w, this.assetData.h);
          this.img = canvas;
        }
      };
      CVImageElement.prototype.renderInnerContent = function() {
        this.canvasContext.drawImage(this.img, 0, 0);
      };
      CVImageElement.prototype.destroy = function() {
        this.img = null;
      };
      function CVSolidElement(data2, globalData2, comp2) {
        this.initElement(data2, globalData2, comp2);
      }
      extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement);
      CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
      CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;
      CVSolidElement.prototype.renderInnerContent = function() {
        var ctx = this.canvasContext;
        ctx.fillStyle = this.data.sc;
        ctx.fillRect(0, 0, this.data.sw, this.data.sh);
      };
      function CanvasRendererBase(animationItem, config) {
        this.animationItem = animationItem;
        this.renderConfig = {
          clearCanvas: config && config.clearCanvas !== void 0 ? config.clearCanvas : true,
          context: config && config.context || null,
          progressiveLoad: config && config.progressiveLoad || false,
          preserveAspectRatio: config && config.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: config && config.contentVisibility || "visible",
          className: config && config.className || "",
          id: config && config.id || ""
        };
        this.renderConfig.dpr = config && config.dpr || 1;
        if (this.animationItem.wrapper) {
          this.renderConfig.dpr = config && config.dpr || window.devicePixelRatio || 1;
        }
        this.renderedFrame = -1;
        this.globalData = {
          frameNum: -1,
          _mdf: false,
          renderConfig: this.renderConfig,
          currentGlobalAlpha: -1
        };
        this.contextData = new CVContextData();
        this.elements = [];
        this.pendingElements = [];
        this.transformMat = new Matrix();
        this.completeLayers = false;
        this.rendererType = "canvas";
      }
      extendPrototype([BaseRenderer], CanvasRendererBase);
      CanvasRendererBase.prototype.createShape = function(data2) {
        return new CVShapeElement(data2, this.globalData, this);
      };
      CanvasRendererBase.prototype.createText = function(data2) {
        return new CVTextElement(data2, this.globalData, this);
      };
      CanvasRendererBase.prototype.createImage = function(data2) {
        return new CVImageElement(data2, this.globalData, this);
      };
      CanvasRendererBase.prototype.createSolid = function(data2) {
        return new CVSolidElement(data2, this.globalData, this);
      };
      CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;
      CanvasRendererBase.prototype.ctxTransform = function(props) {
        if (props[0] === 1 && props[1] === 0 && props[4] === 0 && props[5] === 1 && props[12] === 0 && props[13] === 0) {
          return;
        }
        if (!this.renderConfig.clearCanvas) {
          this.canvasContext.transform(props[0], props[1], props[4], props[5], props[12], props[13]);
          return;
        }
        this.transformMat.cloneFromProps(props);
        var cProps = this.contextData.cTr.props;
        this.transformMat.transform(cProps[0], cProps[1], cProps[2], cProps[3], cProps[4], cProps[5], cProps[6], cProps[7], cProps[8], cProps[9], cProps[10], cProps[11], cProps[12], cProps[13], cProps[14], cProps[15]);
        this.contextData.cTr.cloneFromProps(this.transformMat.props);
        var trProps = this.contextData.cTr.props;
        this.canvasContext.setTransform(trProps[0], trProps[1], trProps[4], trProps[5], trProps[12], trProps[13]);
      };
      CanvasRendererBase.prototype.ctxOpacity = function(op2) {
        if (!this.renderConfig.clearCanvas) {
          this.canvasContext.globalAlpha *= op2 < 0 ? 0 : op2;
          this.globalData.currentGlobalAlpha = this.contextData.cO;
          return;
        }
        this.contextData.cO *= op2 < 0 ? 0 : op2;
        if (this.globalData.currentGlobalAlpha !== this.contextData.cO) {
          this.canvasContext.globalAlpha = this.contextData.cO;
          this.globalData.currentGlobalAlpha = this.contextData.cO;
        }
      };
      CanvasRendererBase.prototype.reset = function() {
        if (!this.renderConfig.clearCanvas) {
          this.canvasContext.restore();
          return;
        }
        this.contextData.reset();
      };
      CanvasRendererBase.prototype.save = function(actionFlag) {
        if (!this.renderConfig.clearCanvas) {
          this.canvasContext.save();
          return;
        }
        if (actionFlag) {
          this.canvasContext.save();
        }
        var props = this.contextData.cTr.props;
        if (this.contextData._length <= this.contextData.cArrPos) {
          this.contextData.duplicate();
        }
        var i;
        var arr = this.contextData.saved[this.contextData.cArrPos];
        for (i = 0; i < 16; i += 1) {
          arr[i] = props[i];
        }
        this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO;
        this.contextData.cArrPos += 1;
      };
      CanvasRendererBase.prototype.restore = function(actionFlag) {
        if (!this.renderConfig.clearCanvas) {
          this.canvasContext.restore();
          return;
        }
        if (actionFlag) {
          this.canvasContext.restore();
          this.globalData.blendMode = "source-over";
        }
        this.contextData.cArrPos -= 1;
        var popped = this.contextData.saved[this.contextData.cArrPos];
        var i;
        var arr = this.contextData.cTr.props;
        for (i = 0; i < 16; i += 1) {
          arr[i] = popped[i];
        }
        this.canvasContext.setTransform(popped[0], popped[1], popped[4], popped[5], popped[12], popped[13]);
        popped = this.contextData.savedOp[this.contextData.cArrPos];
        this.contextData.cO = popped;
        if (this.globalData.currentGlobalAlpha !== popped) {
          this.canvasContext.globalAlpha = popped;
          this.globalData.currentGlobalAlpha = popped;
        }
      };
      CanvasRendererBase.prototype.configAnimation = function(animData) {
        if (this.animationItem.wrapper) {
          this.animationItem.container = createTag("canvas");
          var containerStyle = this.animationItem.container.style;
          containerStyle.width = "100%";
          containerStyle.height = "100%";
          var origin = "0px 0px 0px";
          containerStyle.transformOrigin = origin;
          containerStyle.mozTransformOrigin = origin;
          containerStyle.webkitTransformOrigin = origin;
          containerStyle["-webkit-transform"] = origin;
          containerStyle.contentVisibility = this.renderConfig.contentVisibility;
          this.animationItem.wrapper.appendChild(this.animationItem.container);
          this.canvasContext = this.animationItem.container.getContext("2d");
          if (this.renderConfig.className) {
            this.animationItem.container.setAttribute("class", this.renderConfig.className);
          }
          if (this.renderConfig.id) {
            this.animationItem.container.setAttribute("id", this.renderConfig.id);
          }
        } else {
          this.canvasContext = this.renderConfig.context;
        }
        this.data = animData;
        this.layers = animData.layers;
        this.transformCanvas = {
          w: animData.w,
          h: animData.h,
          sx: 0,
          sy: 0,
          tx: 0,
          ty: 0
        };
        this.setupGlobalData(animData, document.body);
        this.globalData.canvasContext = this.canvasContext;
        this.globalData.renderer = this;
        this.globalData.isDashed = false;
        this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
        this.globalData.transformCanvas = this.transformCanvas;
        this.elements = createSizedArray(animData.layers.length);
        this.updateContainerSize();
      };
      CanvasRendererBase.prototype.updateContainerSize = function() {
        this.reset();
        var elementWidth;
        var elementHeight;
        if (this.animationItem.wrapper && this.animationItem.container) {
          elementWidth = this.animationItem.wrapper.offsetWidth;
          elementHeight = this.animationItem.wrapper.offsetHeight;
          this.animationItem.container.setAttribute("width", elementWidth * this.renderConfig.dpr);
          this.animationItem.container.setAttribute("height", elementHeight * this.renderConfig.dpr);
        } else {
          elementWidth = this.canvasContext.canvas.width * this.renderConfig.dpr;
          elementHeight = this.canvasContext.canvas.height * this.renderConfig.dpr;
        }
        var elementRel;
        var animationRel;
        if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
          var par = this.renderConfig.preserveAspectRatio.split(" ");
          var fillType = par[1] || "meet";
          var pos = par[0] || "xMidYMid";
          var xPos = pos.substr(0, 4);
          var yPos = pos.substr(4);
          elementRel = elementWidth / elementHeight;
          animationRel = this.transformCanvas.w / this.transformCanvas.h;
          if (animationRel > elementRel && fillType === "meet" || animationRel < elementRel && fillType === "slice") {
            this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
            this.transformCanvas.sy = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
          } else {
            this.transformCanvas.sx = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
            this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
          }
          if (xPos === "xMid" && (animationRel < elementRel && fillType === "meet" || animationRel > elementRel && fillType === "slice")) {
            this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) / 2 * this.renderConfig.dpr;
          } else if (xPos === "xMax" && (animationRel < elementRel && fillType === "meet" || animationRel > elementRel && fillType === "slice")) {
            this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) * this.renderConfig.dpr;
          } else {
            this.transformCanvas.tx = 0;
          }
          if (yPos === "YMid" && (animationRel > elementRel && fillType === "meet" || animationRel < elementRel && fillType === "slice")) {
            this.transformCanvas.ty = (elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) / 2 * this.renderConfig.dpr;
          } else if (yPos === "YMax" && (animationRel > elementRel && fillType === "meet" || animationRel < elementRel && fillType === "slice")) {
            this.transformCanvas.ty = (elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) * this.renderConfig.dpr;
          } else {
            this.transformCanvas.ty = 0;
          }
        } else if (this.renderConfig.preserveAspectRatio === "none") {
          this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
          this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
          this.transformCanvas.tx = 0;
          this.transformCanvas.ty = 0;
        } else {
          this.transformCanvas.sx = this.renderConfig.dpr;
          this.transformCanvas.sy = this.renderConfig.dpr;
          this.transformCanvas.tx = 0;
          this.transformCanvas.ty = 0;
        }
        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
        this.ctxTransform(this.transformCanvas.props);
        this.canvasContext.beginPath();
        this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
        this.canvasContext.closePath();
        this.canvasContext.clip();
        this.renderFrame(this.renderedFrame, true);
      };
      CanvasRendererBase.prototype.destroy = function() {
        if (this.renderConfig.clearCanvas && this.animationItem.wrapper) {
          this.animationItem.wrapper.innerText = "";
        }
        var i;
        var len = this.layers ? this.layers.length : 0;
        for (i = len - 1; i >= 0; i -= 1) {
          if (this.elements[i]) {
            this.elements[i].destroy();
          }
        }
        this.elements.length = 0;
        this.globalData.canvasContext = null;
        this.animationItem.container = null;
        this.destroyed = true;
      };
      CanvasRendererBase.prototype.renderFrame = function(num, forceRender) {
        if (this.renderedFrame === num && this.renderConfig.clearCanvas === true && !forceRender || this.destroyed || num === -1) {
          return;
        }
        this.renderedFrame = num;
        this.globalData.frameNum = num - this.animationItem._isFirstFrame;
        this.globalData.frameId += 1;
        this.globalData._mdf = !this.renderConfig.clearCanvas || forceRender;
        this.globalData.projectInterface.currentFrame = num;
        var i;
        var len = this.layers.length;
        if (!this.completeLayers) {
          this.checkLayers(num);
        }
        for (i = 0; i < len; i += 1) {
          if (this.completeLayers || this.elements[i]) {
            this.elements[i].prepareFrame(num - this.layers[i].st);
          }
        }
        if (this.globalData._mdf) {
          if (this.renderConfig.clearCanvas === true) {
            this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
          } else {
            this.save();
          }
          for (i = len - 1; i >= 0; i -= 1) {
            if (this.completeLayers || this.elements[i]) {
              this.elements[i].renderFrame();
            }
          }
          if (this.renderConfig.clearCanvas !== true) {
            this.restore();
          }
        }
      };
      CanvasRendererBase.prototype.buildItem = function(pos) {
        var elements = this.elements;
        if (elements[pos] || this.layers[pos].ty === 99) {
          return;
        }
        var element = this.createItem(this.layers[pos], this, this.globalData);
        elements[pos] = element;
        element.initExpressions();
      };
      CanvasRendererBase.prototype.checkPendingElements = function() {
        while (this.pendingElements.length) {
          var element = this.pendingElements.pop();
          element.checkParenting();
        }
      };
      CanvasRendererBase.prototype.hide = function() {
        this.animationItem.container.style.display = "none";
      };
      CanvasRendererBase.prototype.show = function() {
        this.animationItem.container.style.display = "block";
      };
      function CVCompElement(data2, globalData2, comp2) {
        this.completeLayers = false;
        this.layers = data2.layers;
        this.pendingElements = [];
        this.elements = createSizedArray(this.layers.length);
        this.initElement(data2, globalData2, comp2);
        this.tm = data2.tm ? PropertyFactory.getProp(this, data2.tm, 0, globalData2.frameRate, this) : {
          _placeholder: true
        };
      }
      extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement);
      CVCompElement.prototype.renderInnerContent = function() {
        var ctx = this.canvasContext;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.data.w, 0);
        ctx.lineTo(this.data.w, this.data.h);
        ctx.lineTo(0, this.data.h);
        ctx.lineTo(0, 0);
        ctx.clip();
        var i;
        var len = this.layers.length;
        for (i = len - 1; i >= 0; i -= 1) {
          if (this.completeLayers || this.elements[i]) {
            this.elements[i].renderFrame();
          }
        }
      };
      CVCompElement.prototype.destroy = function() {
        var i;
        var len = this.layers.length;
        for (i = len - 1; i >= 0; i -= 1) {
          if (this.elements[i]) {
            this.elements[i].destroy();
          }
        }
        this.layers = null;
        this.elements = null;
      };
      CVCompElement.prototype.createComp = function(data2) {
        return new CVCompElement(data2, this.globalData, this);
      };
      function CanvasRenderer(animationItem, config) {
        this.animationItem = animationItem;
        this.renderConfig = {
          clearCanvas: config && config.clearCanvas !== void 0 ? config.clearCanvas : true,
          context: config && config.context || null,
          progressiveLoad: config && config.progressiveLoad || false,
          preserveAspectRatio: config && config.preserveAspectRatio || "xMidYMid meet",
          imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || "xMidYMid slice",
          contentVisibility: config && config.contentVisibility || "visible",
          className: config && config.className || "",
          id: config && config.id || ""
        };
        this.renderConfig.dpr = config && config.dpr || 1;
        if (this.animationItem.wrapper) {
          this.renderConfig.dpr = config && config.dpr || window.devicePixelRatio || 1;
        }
        this.renderedFrame = -1;
        this.globalData = {
          frameNum: -1,
          _mdf: false,
          renderConfig: this.renderConfig,
          currentGlobalAlpha: -1
        };
        this.contextData = new CVContextData();
        this.elements = [];
        this.pendingElements = [];
        this.transformMat = new Matrix();
        this.completeLayers = false;
        this.rendererType = "canvas";
      }
      extendPrototype([CanvasRendererBase], CanvasRenderer);
      CanvasRenderer.prototype.createComp = function(data2) {
        return new CVCompElement(data2, this.globalData, this);
      };
      function HBaseElement() {
      }
      HBaseElement.prototype = {
        checkBlendMode: function checkBlendMode() {
        },
        initRendererElement: function initRendererElement() {
          this.baseElement = createTag(this.data.tg || "div");
          if (this.data.hasMask) {
            this.svgElement = createNS("svg");
            this.layerElement = createNS("g");
            this.maskedElement = this.layerElement;
            this.svgElement.appendChild(this.layerElement);
            this.baseElement.appendChild(this.svgElement);
          } else {
            this.layerElement = this.baseElement;
          }
          styleDiv(this.baseElement);
        },
        createContainerElements: function createContainerElements() {
          this.renderableEffectsManager = new CVEffects(this);
          this.transformedElement = this.baseElement;
          this.maskedElement = this.layerElement;
          if (this.data.ln) {
            this.layerElement.setAttribute("id", this.data.ln);
          }
          if (this.data.cl) {
            this.layerElement.setAttribute("class", this.data.cl);
          }
          if (this.data.bm !== 0) {
            this.setBlendMode();
          }
        },
        renderElement: function renderElement() {
          var transformedElementStyle = this.transformedElement ? this.transformedElement.style : {};
          if (this.finalTransform._matMdf) {
            var matrixValue = this.finalTransform.mat.toCSS();
            transformedElementStyle.transform = matrixValue;
            transformedElementStyle.webkitTransform = matrixValue;
          }
          if (this.finalTransform._opMdf) {
            transformedElementStyle.opacity = this.finalTransform.mProp.o.v;
          }
        },
        renderFrame: function renderFrame() {
          if (this.data.hd || this.hidden) {
            return;
          }
          this.renderTransform();
          this.renderRenderable();
          this.renderElement();
          this.renderInnerContent();
          if (this._isFirstFrame) {
            this._isFirstFrame = false;
          }
        },
        destroy: function destroy() {
          this.layerElement = null;
          this.transformedElement = null;
          if (this.matteElement) {
            this.matteElement = null;
          }
          if (this.maskManager) {
            this.maskManager.destroy();
            this.maskManager = null;
          }
        },
        createRenderableComponents: function createRenderableComponents() {
          this.maskManager = new MaskElement(this.data, this, this.globalData);
        },
        addEffects: function addEffects() {
        },
        setMatte: function setMatte() {
        }
      };
      HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
      HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
      HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
      function HSolidElement(data2, globalData2, comp2) {
        this.initElement(data2, globalData2, comp2);
      }
      extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement);
      HSolidElement.prototype.createContent = function() {
        var rect;
        if (this.data.hasMask) {
          rect = createNS("rect");
          rect.setAttribute("width", this.data.sw);
          rect.setAttribute("height", this.data.sh);
          rect.setAttribute("fill", this.data.sc);
          this.svgElement.setAttribute("width", this.data.sw);
          this.svgElement.setAttribute("height", this.data.sh);
        } else {
          rect = createTag("div");
          rect.style.width = this.data.sw + "px";
          rect.style.height = this.data.sh + "px";
          rect.style.backgroundColor = this.data.sc;
        }
        this.layerElement.appendChild(rect);
      };
      function HShapeElement(data2, globalData2, comp2) {
        this.shapes = [];
        this.shapesData = data2.shapes;
        this.stylesList = [];
        this.shapeModifiers = [];
        this.itemsData = [];
        this.processedElements = [];
        this.animatedContents = [];
        this.shapesContainer = createNS("g");
        this.initElement(data2, globalData2, comp2);
        this.prevViewData = [];
        this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        };
      }
      extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement);
      HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;
      HShapeElement.prototype.createContent = function() {
        var cont;
        this.baseElement.style.fontSize = 0;
        if (this.data.hasMask) {
          this.layerElement.appendChild(this.shapesContainer);
          cont = this.svgElement;
        } else {
          cont = createNS("svg");
          var size = this.comp.data ? this.comp.data : this.globalData.compSize;
          cont.setAttribute("width", size.w);
          cont.setAttribute("height", size.h);
          cont.appendChild(this.shapesContainer);
          this.layerElement.appendChild(cont);
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true);
        this.filterUniqueShapes();
        this.shapeCont = cont;
      };
      HShapeElement.prototype.getTransformedPoint = function(transformers, point) {
        var i;
        var len = transformers.length;
        for (i = 0; i < len; i += 1) {
          point = transformers[i].mProps.v.applyToPointArray(point[0], point[1], 0);
        }
        return point;
      };
      HShapeElement.prototype.calculateShapeBoundingBox = function(item, boundingBox) {
        var shape = item.sh.v;
        var transformers = item.transformers;
        var i;
        var len = shape._length;
        var vPoint;
        var oPoint;
        var nextIPoint;
        var nextVPoint;
        if (len <= 1) {
          return;
        }
        for (i = 0; i < len - 1; i += 1) {
          vPoint = this.getTransformedPoint(transformers, shape.v[i]);
          oPoint = this.getTransformedPoint(transformers, shape.o[i]);
          nextIPoint = this.getTransformedPoint(transformers, shape.i[i + 1]);
          nextVPoint = this.getTransformedPoint(transformers, shape.v[i + 1]);
          this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
        }
        if (shape.c) {
          vPoint = this.getTransformedPoint(transformers, shape.v[i]);
          oPoint = this.getTransformedPoint(transformers, shape.o[i]);
          nextIPoint = this.getTransformedPoint(transformers, shape.i[0]);
          nextVPoint = this.getTransformedPoint(transformers, shape.v[0]);
          this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
        }
      };
      HShapeElement.prototype.checkBounds = function(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox) {
        this.getBoundsOfCurve(vPoint, oPoint, nextIPoint, nextVPoint);
        var bounds = this.shapeBoundingBox;
        boundingBox.x = bmMin(bounds.left, boundingBox.x);
        boundingBox.xMax = bmMax(bounds.right, boundingBox.xMax);
        boundingBox.y = bmMin(bounds.top, boundingBox.y);
        boundingBox.yMax = bmMax(bounds.bottom, boundingBox.yMax);
      };
      HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0
      };
      HShapeElement.prototype.getBoundsOfCurve = function(p0, p1, p2, p3) {
        var bounds = [[p0[0], p3[0]], [p0[1], p3[1]]];
        for (var a, b, c, t, b2ac, t1, t2, i = 0; i < 2; ++i) {
          b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
          a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
          c = 3 * p1[i] - 3 * p0[i];
          b |= 0;
          a |= 0;
          c |= 0;
          if (a === 0 && b === 0) {
          } else if (a === 0) {
            t = -c / b;
            if (t > 0 && t < 1) {
              bounds[i].push(this.calculateF(t, p0, p1, p2, p3, i));
            }
          } else {
            b2ac = b * b - 4 * c * a;
            if (b2ac >= 0) {
              t1 = (-b + bmSqrt(b2ac)) / (2 * a);
              if (t1 > 0 && t1 < 1)
                bounds[i].push(this.calculateF(t1, p0, p1, p2, p3, i));
              t2 = (-b - bmSqrt(b2ac)) / (2 * a);
              if (t2 > 0 && t2 < 1)
                bounds[i].push(this.calculateF(t2, p0, p1, p2, p3, i));
            }
          }
        }
        this.shapeBoundingBox.left = bmMin.apply(null, bounds[0]);
        this.shapeBoundingBox.top = bmMin.apply(null, bounds[1]);
        this.shapeBoundingBox.right = bmMax.apply(null, bounds[0]);
        this.shapeBoundingBox.bottom = bmMax.apply(null, bounds[1]);
      };
      HShapeElement.prototype.calculateF = function(t, p0, p1, p2, p3, i) {
        return bmPow(1 - t, 3) * p0[i] + 3 * bmPow(1 - t, 2) * t * p1[i] + 3 * (1 - t) * bmPow(t, 2) * p2[i] + bmPow(t, 3) * p3[i];
      };
      HShapeElement.prototype.calculateBoundingBox = function(itemsData, boundingBox) {
        var i;
        var len = itemsData.length;
        for (i = 0; i < len; i += 1) {
          if (itemsData[i] && itemsData[i].sh) {
            this.calculateShapeBoundingBox(itemsData[i], boundingBox);
          } else if (itemsData[i] && itemsData[i].it) {
            this.calculateBoundingBox(itemsData[i].it, boundingBox);
          }
        }
      };
      HShapeElement.prototype.currentBoxContains = function(box) {
        return this.currentBBox.x <= box.x && this.currentBBox.y <= box.y && this.currentBBox.width + this.currentBBox.x >= box.x + box.width && this.currentBBox.height + this.currentBBox.y >= box.y + box.height;
      };
      HShapeElement.prototype.renderInnerContent = function() {
        this._renderShapeFrame();
        if (!this.hidden && (this._isFirstFrame || this._mdf)) {
          var tempBoundingBox = this.tempBoundingBox;
          var max = 999999;
          tempBoundingBox.x = max;
          tempBoundingBox.xMax = -max;
          tempBoundingBox.y = max;
          tempBoundingBox.yMax = -max;
          this.calculateBoundingBox(this.itemsData, tempBoundingBox);
          tempBoundingBox.width = tempBoundingBox.xMax < tempBoundingBox.x ? 0 : tempBoundingBox.xMax - tempBoundingBox.x;
          tempBoundingBox.height = tempBoundingBox.yMax < tempBoundingBox.y ? 0 : tempBoundingBox.yMax - tempBoundingBox.y;
          if (this.currentBoxContains(tempBoundingBox)) {
            return;
          }
          var changed = false;
          if (this.currentBBox.w !== tempBoundingBox.width) {
            this.currentBBox.w = tempBoundingBox.width;
            this.shapeCont.setAttribute("width", tempBoundingBox.width);
            changed = true;
          }
          if (this.currentBBox.h !== tempBoundingBox.height) {
            this.currentBBox.h = tempBoundingBox.height;
            this.shapeCont.setAttribute("height", tempBoundingBox.height);
            changed = true;
          }
          if (changed || this.currentBBox.x !== tempBoundingBox.x || this.currentBBox.y !== tempBoundingBox.y) {
            this.currentBBox.w = tempBoundingBox.width;
            this.currentBBox.h = tempBoundingBox.height;
            this.currentBBox.x = tempBoundingBox.x;
            this.currentBBox.y = tempBoundingBox.y;
            this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
            var shapeStyle = this.shapeCont.style;
            var shapeTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            shapeStyle.transform = shapeTransform;
            shapeStyle.webkitTransform = shapeTransform;
          }
        }
      };
      function HTextElement(data2, globalData2, comp2) {
        this.textSpans = [];
        this.textPaths = [];
        this.currentBBox = {
          x: 999999,
          y: -999999,
          h: 0,
          w: 0
        };
        this.renderType = "svg";
        this.isMasked = false;
        this.initElement(data2, globalData2, comp2);
      }
      extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement);
      HTextElement.prototype.createContent = function() {
        this.isMasked = this.checkMasks();
        if (this.isMasked) {
          this.renderType = "svg";
          this.compW = this.comp.data.w;
          this.compH = this.comp.data.h;
          this.svgElement.setAttribute("width", this.compW);
          this.svgElement.setAttribute("height", this.compH);
          var g = createNS("g");
          this.maskedElement.appendChild(g);
          this.innerElem = g;
        } else {
          this.renderType = "html";
          this.innerElem = this.layerElement;
        }
        this.checkParenting();
      };
      HTextElement.prototype.buildNewText = function() {
        var documentData = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
        var innerElemStyle = this.innerElem.style;
        var textColor = documentData.fc ? this.buildColor(documentData.fc) : "rgba(0,0,0,0)";
        innerElemStyle.fill = textColor;
        innerElemStyle.color = textColor;
        if (documentData.sc) {
          innerElemStyle.stroke = this.buildColor(documentData.sc);
          innerElemStyle.strokeWidth = documentData.sw + "px";
        }
        var fontData = this.globalData.fontManager.getFontByName(documentData.f);
        if (!this.globalData.fontManager.chars) {
          innerElemStyle.fontSize = documentData.finalSize + "px";
          innerElemStyle.lineHeight = documentData.finalSize + "px";
          if (fontData.fClass) {
            this.innerElem.className = fontData.fClass;
          } else {
            innerElemStyle.fontFamily = fontData.fFamily;
            var fWeight = documentData.fWeight;
            var fStyle = documentData.fStyle;
            innerElemStyle.fontStyle = fStyle;
            innerElemStyle.fontWeight = fWeight;
          }
        }
        var i;
        var len;
        var letters = documentData.l;
        len = letters.length;
        var tSpan;
        var tParent;
        var tCont;
        var matrixHelper = this.mHelper;
        var shapes;
        var shapeStr = "";
        var cnt = 0;
        for (i = 0; i < len; i += 1) {
          if (this.globalData.fontManager.chars) {
            if (!this.textPaths[cnt]) {
              tSpan = createNS("path");
              tSpan.setAttribute("stroke-linecap", lineCapEnum[1]);
              tSpan.setAttribute("stroke-linejoin", lineJoinEnum[2]);
              tSpan.setAttribute("stroke-miterlimit", "4");
            } else {
              tSpan = this.textPaths[cnt];
            }
            if (!this.isMasked) {
              if (this.textSpans[cnt]) {
                tParent = this.textSpans[cnt];
                tCont = tParent.children[0];
              } else {
                tParent = createTag("div");
                tParent.style.lineHeight = 0;
                tCont = createNS("svg");
                tCont.appendChild(tSpan);
                styleDiv(tParent);
              }
            }
          } else if (!this.isMasked) {
            if (this.textSpans[cnt]) {
              tParent = this.textSpans[cnt];
              tSpan = this.textPaths[cnt];
            } else {
              tParent = createTag("span");
              styleDiv(tParent);
              tSpan = createTag("span");
              styleDiv(tSpan);
              tParent.appendChild(tSpan);
            }
          } else {
            tSpan = this.textPaths[cnt] ? this.textPaths[cnt] : createNS("text");
          }
          if (this.globalData.fontManager.chars) {
            var charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
            var shapeData;
            if (charData) {
              shapeData = charData.data;
            } else {
              shapeData = null;
            }
            matrixHelper.reset();
            if (shapeData && shapeData.shapes && shapeData.shapes.length) {
              shapes = shapeData.shapes[0].it;
              matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
              shapeStr = this.createPathShape(matrixHelper, shapes);
              tSpan.setAttribute("d", shapeStr);
            }
            if (!this.isMasked) {
              this.innerElem.appendChild(tParent);
              if (shapeData && shapeData.shapes) {
                document.body.appendChild(tCont);
                var boundingBox = tCont.getBBox();
                tCont.setAttribute("width", boundingBox.width + 2);
                tCont.setAttribute("height", boundingBox.height + 2);
                tCont.setAttribute("viewBox", boundingBox.x - 1 + " " + (boundingBox.y - 1) + " " + (boundingBox.width + 2) + " " + (boundingBox.height + 2));
                var tContStyle = tCont.style;
                var tContTranslation = "translate(" + (boundingBox.x - 1) + "px," + (boundingBox.y - 1) + "px)";
                tContStyle.transform = tContTranslation;
                tContStyle.webkitTransform = tContTranslation;
                letters[i].yOffset = boundingBox.y - 1;
              } else {
                tCont.setAttribute("width", 1);
                tCont.setAttribute("height", 1);
              }
              tParent.appendChild(tCont);
            } else {
              this.innerElem.appendChild(tSpan);
            }
          } else {
            tSpan.textContent = letters[i].val;
            tSpan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
            if (!this.isMasked) {
              this.innerElem.appendChild(tParent);
              var tStyle = tSpan.style;
              var tSpanTranslation = "translate3d(0," + -documentData.finalSize / 1.2 + "px,0)";
              tStyle.transform = tSpanTranslation;
              tStyle.webkitTransform = tSpanTranslation;
            } else {
              this.innerElem.appendChild(tSpan);
            }
          }
          if (!this.isMasked) {
            this.textSpans[cnt] = tParent;
          } else {
            this.textSpans[cnt] = tSpan;
          }
          this.textSpans[cnt].style.display = "block";
          this.textPaths[cnt] = tSpan;
          cnt += 1;
        }
        while (cnt < this.textSpans.length) {
          this.textSpans[cnt].style.display = "none";
          cnt += 1;
        }
      };
      HTextElement.prototype.renderInnerContent = function() {
        var svgStyle;
        if (this.data.singleShape) {
          if (!this._isFirstFrame && !this.lettersChangedFlag) {
            return;
          }
          if (this.isMasked && this.finalTransform._matMdf) {
            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH);
            svgStyle = this.svgElement.style;
            var translation = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
            svgStyle.transform = translation;
            svgStyle.webkitTransform = translation;
          }
        }
        this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        if (!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag) {
          return;
        }
        var i;
        var len;
        var count = 0;
        var renderedLetters = this.textAnimator.renderedLetters;
        var letters = this.textProperty.currentData.l;
        len = letters.length;
        var renderedLetter;
        var textSpan;
        var textPath;
        for (i = 0; i < len; i += 1) {
          if (letters[i].n) {
            count += 1;
          } else {
            textSpan = this.textSpans[i];
            textPath = this.textPaths[i];
            renderedLetter = renderedLetters[count];
            count += 1;
            if (renderedLetter._mdf.m) {
              if (!this.isMasked) {
                textSpan.style.webkitTransform = renderedLetter.m;
                textSpan.style.transform = renderedLetter.m;
              } else {
                textSpan.setAttribute("transform", renderedLetter.m);
              }
            }
            textSpan.style.opacity = renderedLetter.o;
            if (renderedLetter.sw && renderedLetter._mdf.sw) {
              textPath.setAttribute("stroke-width", renderedLetter.sw);
            }
            if (renderedLetter.sc && renderedLetter._mdf.sc) {
              textPath.setAttribute("stroke", renderedLetter.sc);
            }
            if (renderedLetter.fc && renderedLetter._mdf.fc) {
              textPath.setAttribute("fill", renderedLetter.fc);
              textPath.style.color = renderedLetter.fc;
            }
          }
        }
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var boundingBox = this.innerElem.getBBox();
          if (this.currentBBox.w !== boundingBox.width) {
            this.currentBBox.w = boundingBox.width;
            this.svgElement.setAttribute("width", boundingBox.width);
          }
          if (this.currentBBox.h !== boundingBox.height) {
            this.currentBBox.h = boundingBox.height;
            this.svgElement.setAttribute("height", boundingBox.height);
          }
          var margin = 1;
          if (this.currentBBox.w !== boundingBox.width + margin * 2 || this.currentBBox.h !== boundingBox.height + margin * 2 || this.currentBBox.x !== boundingBox.x - margin || this.currentBBox.y !== boundingBox.y - margin) {
            this.currentBBox.w = boundingBox.width + margin * 2;
            this.currentBBox.h = boundingBox.height + margin * 2;
            this.currentBBox.x = boundingBox.x - margin;
            this.currentBBox.y = boundingBox.y - margin;
            this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
            svgStyle = this.svgElement.style;
            var svgTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            svgStyle.transform = svgTransform;
            svgStyle.webkitTransform = svgTransform;
          }
        }
      };
      function HCameraElement(data2, globalData2, comp2) {
        this.initFrame();
        this.initBaseData(data2, globalData2, comp2);
        this.initHierarchy();
        var getProp = PropertyFactory.getProp;
        this.pe = getProp(this, data2.pe, 0, 0, this);
        if (data2.ks.p.s) {
          this.px = getProp(this, data2.ks.p.x, 1, 0, this);
          this.py = getProp(this, data2.ks.p.y, 1, 0, this);
          this.pz = getProp(this, data2.ks.p.z, 1, 0, this);
        } else {
          this.p = getProp(this, data2.ks.p, 1, 0, this);
        }
        if (data2.ks.a) {
          this.a = getProp(this, data2.ks.a, 1, 0, this);
        }
        if (data2.ks.or.k.length && data2.ks.or.k[0].to) {
          var i;
          var len = data2.ks.or.k.length;
          for (i = 0; i < len; i += 1) {
            data2.ks.or.k[i].to = null;
            data2.ks.or.k[i].ti = null;
          }
        }
        this.or = getProp(this, data2.ks.or, 1, degToRads, this);
        this.or.sh = true;
        this.rx = getProp(this, data2.ks.rx, 0, degToRads, this);
        this.ry = getProp(this, data2.ks.ry, 0, degToRads, this);
        this.rz = getProp(this, data2.ks.rz, 0, degToRads, this);
        this.mat = new Matrix();
        this._prevMat = new Matrix();
        this._isFirstFrame = true;
        this.finalTransform = {
          mProp: this
        };
      }
      extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement);
      HCameraElement.prototype.setup = function() {
        var i;
        var len = this.comp.threeDElements.length;
        var comp2;
        var perspectiveStyle;
        var containerStyle;
        for (i = 0; i < len; i += 1) {
          comp2 = this.comp.threeDElements[i];
          if (comp2.type === "3d") {
            perspectiveStyle = comp2.perspectiveElem.style;
            containerStyle = comp2.container.style;
            var perspective = this.pe.v + "px";
            var origin = "0px 0px 0px";
            var matrix = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            perspectiveStyle.perspective = perspective;
            perspectiveStyle.webkitPerspective = perspective;
            containerStyle.transformOrigin = origin;
            containerStyle.mozTransformOrigin = origin;
            containerStyle.webkitTransformOrigin = origin;
            perspectiveStyle.transform = matrix;
            perspectiveStyle.webkitTransform = matrix;
          }
        }
      };
      HCameraElement.prototype.createElements = function() {
      };
      HCameraElement.prototype.hide = function() {
      };
      HCameraElement.prototype.renderFrame = function() {
        var _mdf = this._isFirstFrame;
        var i;
        var len;
        if (this.hierarchy) {
          len = this.hierarchy.length;
          for (i = 0; i < len; i += 1) {
            _mdf = this.hierarchy[i].finalTransform.mProp._mdf || _mdf;
          }
        }
        if (_mdf || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
          this.mat.reset();
          if (this.hierarchy) {
            len = this.hierarchy.length - 1;
            for (i = len; i >= 0; i -= 1) {
              var mTransf = this.hierarchy[i].finalTransform.mProp;
              this.mat.translate(-mTransf.p.v[0], -mTransf.p.v[1], mTransf.p.v[2]);
              this.mat.rotateX(-mTransf.or.v[0]).rotateY(-mTransf.or.v[1]).rotateZ(mTransf.or.v[2]);
              this.mat.rotateX(-mTransf.rx.v).rotateY(-mTransf.ry.v).rotateZ(mTransf.rz.v);
              this.mat.scale(1 / mTransf.s.v[0], 1 / mTransf.s.v[1], 1 / mTransf.s.v[2]);
              this.mat.translate(mTransf.a.v[0], mTransf.a.v[1], mTransf.a.v[2]);
            }
          }
          if (this.p) {
            this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]);
          } else {
            this.mat.translate(-this.px.v, -this.py.v, this.pz.v);
          }
          if (this.a) {
            var diffVector;
            if (this.p) {
              diffVector = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]];
            } else {
              diffVector = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
            }
            var mag = Math.sqrt(Math.pow(diffVector[0], 2) + Math.pow(diffVector[1], 2) + Math.pow(diffVector[2], 2));
            var lookDir = [diffVector[0] / mag, diffVector[1] / mag, diffVector[2] / mag];
            var lookLengthOnXZ = Math.sqrt(lookDir[2] * lookDir[2] + lookDir[0] * lookDir[0]);
            var mRotationX = Math.atan2(lookDir[1], lookLengthOnXZ);
            var mRotationY = Math.atan2(lookDir[0], -lookDir[2]);
            this.mat.rotateY(mRotationY).rotateX(-mRotationX);
          }
          this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
          this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
          this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0);
          this.mat.translate(0, 0, this.pe.v);
          var hasMatrixChanged = !this._prevMat.equals(this.mat);
          if ((hasMatrixChanged || this.pe._mdf) && this.comp.threeDElements) {
            len = this.comp.threeDElements.length;
            var comp2;
            var perspectiveStyle;
            var containerStyle;
            for (i = 0; i < len; i += 1) {
              comp2 = this.comp.threeDElements[i];
              if (comp2.type === "3d") {
                if (hasMatrixChanged) {
                  var matValue = this.mat.toCSS();
                  containerStyle = comp2.container.style;
                  containerStyle.transform = matValue;
                  containerStyle.webkitTransform = matValue;
                }
                if (this.pe._mdf) {
                  perspectiveStyle = comp2.perspectiveElem.style;
                  perspectiveStyle.perspective = this.pe.v + "px";
                  perspectiveStyle.webkitPerspective = this.pe.v + "px";
                }
              }
            }
            this.mat.clone(this._prevMat);
          }
        }
        this._isFirstFrame = false;
      };
      HCameraElement.prototype.prepareFrame = function(num) {
        this.prepareProperties(num, true);
      };
      HCameraElement.prototype.destroy = function() {
      };
      HCameraElement.prototype.getBaseElement = function() {
        return null;
      };
      function HImageElement(data2, globalData2, comp2) {
        this.assetData = globalData2.getAssetData(data2.refId);
        this.initElement(data2, globalData2, comp2);
      }
      extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement);
      HImageElement.prototype.createContent = function() {
        var assetPath = this.globalData.getAssetsPath(this.assetData);
        var img = new Image();
        if (this.data.hasMask) {
          this.imageElem = createNS("image");
          this.imageElem.setAttribute("width", this.assetData.w + "px");
          this.imageElem.setAttribute("height", this.assetData.h + "px");
          this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", assetPath);
          this.layerElement.appendChild(this.imageElem);
          this.baseElement.setAttribute("width", this.assetData.w);
          this.baseElement.setAttribute("height", this.assetData.h);
        } else {
          this.layerElement.appendChild(img);
        }
        img.crossOrigin = "anonymous";
        img.src = assetPath;
        if (this.data.ln) {
          this.baseElement.setAttribute("id", this.data.ln);
        }
      };
      function HybridRendererBase(animationItem, config) {
        this.animationItem = animationItem;
        this.layers = null;
        this.renderedFrame = -1;
        this.renderConfig = {
          className: config && config.className || "",
          imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !(config && config.hideOnTransparent === false),
          filterSize: {
            width: config && config.filterSize && config.filterSize.width || "400%",
            height: config && config.filterSize && config.filterSize.height || "400%",
            x: config && config.filterSize && config.filterSize.x || "-100%",
            y: config && config.filterSize && config.filterSize.y || "-100%"
          }
        };
        this.globalData = {
          _mdf: false,
          frameNum: -1,
          renderConfig: this.renderConfig
        };
        this.pendingElements = [];
        this.elements = [];
        this.threeDElements = [];
        this.destroyed = false;
        this.camera = null;
        this.supports3d = true;
        this.rendererType = "html";
      }
      extendPrototype([BaseRenderer], HybridRendererBase);
      HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem;
      HybridRendererBase.prototype.checkPendingElements = function() {
        while (this.pendingElements.length) {
          var element = this.pendingElements.pop();
          element.checkParenting();
        }
      };
      HybridRendererBase.prototype.appendElementInPos = function(element, pos) {
        var newDOMElement = element.getBaseElement();
        if (!newDOMElement) {
          return;
        }
        var layer = this.layers[pos];
        if (!layer.ddd || !this.supports3d) {
          if (this.threeDElements) {
            this.addTo3dContainer(newDOMElement, pos);
          } else {
            var i = 0;
            var nextDOMElement;
            var nextLayer;
            var tmpDOMElement;
            while (i < pos) {
              if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement) {
                nextLayer = this.elements[i];
                tmpDOMElement = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : nextLayer.getBaseElement();
                nextDOMElement = tmpDOMElement || nextDOMElement;
              }
              i += 1;
            }
            if (nextDOMElement) {
              if (!layer.ddd || !this.supports3d) {
                this.layerElement.insertBefore(newDOMElement, nextDOMElement);
              }
            } else if (!layer.ddd || !this.supports3d) {
              this.layerElement.appendChild(newDOMElement);
            }
          }
        } else {
          this.addTo3dContainer(newDOMElement, pos);
        }
      };
      HybridRendererBase.prototype.createShape = function(data2) {
        if (!this.supports3d) {
          return new SVGShapeElement(data2, this.globalData, this);
        }
        return new HShapeElement(data2, this.globalData, this);
      };
      HybridRendererBase.prototype.createText = function(data2) {
        if (!this.supports3d) {
          return new SVGTextLottieElement(data2, this.globalData, this);
        }
        return new HTextElement(data2, this.globalData, this);
      };
      HybridRendererBase.prototype.createCamera = function(data2) {
        this.camera = new HCameraElement(data2, this.globalData, this);
        return this.camera;
      };
      HybridRendererBase.prototype.createImage = function(data2) {
        if (!this.supports3d) {
          return new IImageElement(data2, this.globalData, this);
        }
        return new HImageElement(data2, this.globalData, this);
      };
      HybridRendererBase.prototype.createSolid = function(data2) {
        if (!this.supports3d) {
          return new ISolidElement(data2, this.globalData, this);
        }
        return new HSolidElement(data2, this.globalData, this);
      };
      HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;
      HybridRendererBase.prototype.getThreeDContainerByPos = function(pos) {
        var i = 0;
        var len = this.threeDElements.length;
        while (i < len) {
          if (this.threeDElements[i].startPos <= pos && this.threeDElements[i].endPos >= pos) {
            return this.threeDElements[i].perspectiveElem;
          }
          i += 1;
        }
        return null;
      };
      HybridRendererBase.prototype.createThreeDContainer = function(pos, type) {
        var perspectiveElem = createTag("div");
        var style;
        var containerStyle;
        styleDiv(perspectiveElem);
        var container = createTag("div");
        styleDiv(container);
        if (type === "3d") {
          style = perspectiveElem.style;
          style.width = this.globalData.compSize.w + "px";
          style.height = this.globalData.compSize.h + "px";
          var center = "50% 50%";
          style.webkitTransformOrigin = center;
          style.mozTransformOrigin = center;
          style.transformOrigin = center;
          containerStyle = container.style;
          var matrix = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          containerStyle.transform = matrix;
          containerStyle.webkitTransform = matrix;
        }
        perspectiveElem.appendChild(container);
        var threeDContainerData = {
          container,
          perspectiveElem,
          startPos: pos,
          endPos: pos,
          type
        };
        this.threeDElements.push(threeDContainerData);
        return threeDContainerData;
      };
      HybridRendererBase.prototype.build3dContainers = function() {
        var i;
        var len = this.layers.length;
        var lastThreeDContainerData;
        var currentContainer = "";
        for (i = 0; i < len; i += 1) {
          if (this.layers[i].ddd && this.layers[i].ty !== 3) {
            if (currentContainer !== "3d") {
              currentContainer = "3d";
              lastThreeDContainerData = this.createThreeDContainer(i, "3d");
            }
            lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
          } else {
            if (currentContainer !== "2d") {
              currentContainer = "2d";
              lastThreeDContainerData = this.createThreeDContainer(i, "2d");
            }
            lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
          }
        }
        len = this.threeDElements.length;
        for (i = len - 1; i >= 0; i -= 1) {
          this.resizerElem.appendChild(this.threeDElements[i].perspectiveElem);
        }
      };
      HybridRendererBase.prototype.addTo3dContainer = function(elem2, pos) {
        var i = 0;
        var len = this.threeDElements.length;
        while (i < len) {
          if (pos <= this.threeDElements[i].endPos) {
            var j = this.threeDElements[i].startPos;
            var nextElement;
            while (j < pos) {
              if (this.elements[j] && this.elements[j].getBaseElement) {
                nextElement = this.elements[j].getBaseElement();
              }
              j += 1;
            }
            if (nextElement) {
              this.threeDElements[i].container.insertBefore(elem2, nextElement);
            } else {
              this.threeDElements[i].container.appendChild(elem2);
            }
            break;
          }
          i += 1;
        }
      };
      HybridRendererBase.prototype.configAnimation = function(animData) {
        var resizerElem = createTag("div");
        var wrapper = this.animationItem.wrapper;
        var style = resizerElem.style;
        style.width = animData.w + "px";
        style.height = animData.h + "px";
        this.resizerElem = resizerElem;
        styleDiv(resizerElem);
        style.transformStyle = "flat";
        style.mozTransformStyle = "flat";
        style.webkitTransformStyle = "flat";
        if (this.renderConfig.className) {
          resizerElem.setAttribute("class", this.renderConfig.className);
        }
        wrapper.appendChild(resizerElem);
        style.overflow = "hidden";
        var svg = createNS("svg");
        svg.setAttribute("width", "1");
        svg.setAttribute("height", "1");
        styleDiv(svg);
        this.resizerElem.appendChild(svg);
        var defs = createNS("defs");
        svg.appendChild(defs);
        this.data = animData;
        this.setupGlobalData(animData, svg);
        this.globalData.defs = defs;
        this.layers = animData.layers;
        this.layerElement = this.resizerElem;
        this.build3dContainers();
        this.updateContainerSize();
      };
      HybridRendererBase.prototype.destroy = function() {
        if (this.animationItem.wrapper) {
          this.animationItem.wrapper.innerText = "";
        }
        this.animationItem.container = null;
        this.globalData.defs = null;
        var i;
        var len = this.layers ? this.layers.length : 0;
        for (i = 0; i < len; i += 1) {
          this.elements[i].destroy();
        }
        this.elements.length = 0;
        this.destroyed = true;
        this.animationItem = null;
      };
      HybridRendererBase.prototype.updateContainerSize = function() {
        var elementWidth = this.animationItem.wrapper.offsetWidth;
        var elementHeight = this.animationItem.wrapper.offsetHeight;
        var elementRel = elementWidth / elementHeight;
        var animationRel = this.globalData.compSize.w / this.globalData.compSize.h;
        var sx;
        var sy;
        var tx;
        var ty;
        if (animationRel > elementRel) {
          sx = elementWidth / this.globalData.compSize.w;
          sy = elementWidth / this.globalData.compSize.w;
          tx = 0;
          ty = (elementHeight - this.globalData.compSize.h * (elementWidth / this.globalData.compSize.w)) / 2;
        } else {
          sx = elementHeight / this.globalData.compSize.h;
          sy = elementHeight / this.globalData.compSize.h;
          tx = (elementWidth - this.globalData.compSize.w * (elementHeight / this.globalData.compSize.h)) / 2;
          ty = 0;
        }
        var style = this.resizerElem.style;
        style.webkitTransform = "matrix3d(" + sx + ",0,0,0,0," + sy + ",0,0,0,0,1,0," + tx + "," + ty + ",0,1)";
        style.transform = style.webkitTransform;
      };
      HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame;
      HybridRendererBase.prototype.hide = function() {
        this.resizerElem.style.display = "none";
      };
      HybridRendererBase.prototype.show = function() {
        this.resizerElem.style.display = "block";
      };
      HybridRendererBase.prototype.initItems = function() {
        this.buildAllItems();
        if (this.camera) {
          this.camera.setup();
        } else {
          var cWidth = this.globalData.compSize.w;
          var cHeight = this.globalData.compSize.h;
          var i;
          var len = this.threeDElements.length;
          for (i = 0; i < len; i += 1) {
            var style = this.threeDElements[i].perspectiveElem.style;
            style.webkitPerspective = Math.sqrt(Math.pow(cWidth, 2) + Math.pow(cHeight, 2)) + "px";
            style.perspective = style.webkitPerspective;
          }
        }
      };
      HybridRendererBase.prototype.searchExtraCompositions = function(assets2) {
        var i;
        var len = assets2.length;
        var floatingContainer = createTag("div");
        for (i = 0; i < len; i += 1) {
          if (assets2[i].xt) {
            var comp2 = this.createComp(assets2[i], floatingContainer, this.globalData.comp, null);
            comp2.initExpressions();
            this.globalData.projectInterface.registerComposition(comp2);
          }
        }
      };
      function HCompElement(data2, globalData2, comp2) {
        this.layers = data2.layers;
        this.supports3d = !data2.hasMask;
        this.completeLayers = false;
        this.pendingElements = [];
        this.elements = this.layers ? createSizedArray(this.layers.length) : [];
        this.initElement(data2, globalData2, comp2);
        this.tm = data2.tm ? PropertyFactory.getProp(this, data2.tm, 0, globalData2.frameRate, this) : {
          _placeholder: true
        };
      }
      extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement);
      HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;
      HCompElement.prototype.createContainerElements = function() {
        this._createBaseContainerElements();
        if (this.data.hasMask) {
          this.svgElement.setAttribute("width", this.data.w);
          this.svgElement.setAttribute("height", this.data.h);
          this.transformedElement = this.baseElement;
        } else {
          this.transformedElement = this.layerElement;
        }
      };
      HCompElement.prototype.addTo3dContainer = function(elem2, pos) {
        var j = 0;
        var nextElement;
        while (j < pos) {
          if (this.elements[j] && this.elements[j].getBaseElement) {
            nextElement = this.elements[j].getBaseElement();
          }
          j += 1;
        }
        if (nextElement) {
          this.layerElement.insertBefore(elem2, nextElement);
        } else {
          this.layerElement.appendChild(elem2);
        }
      };
      HCompElement.prototype.createComp = function(data2) {
        if (!this.supports3d) {
          return new SVGCompElement(data2, this.globalData, this);
        }
        return new HCompElement(data2, this.globalData, this);
      };
      function HybridRenderer(animationItem, config) {
        this.animationItem = animationItem;
        this.layers = null;
        this.renderedFrame = -1;
        this.renderConfig = {
          className: config && config.className || "",
          imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || "xMidYMid slice",
          hideOnTransparent: !(config && config.hideOnTransparent === false),
          filterSize: {
            width: config && config.filterSize && config.filterSize.width || "400%",
            height: config && config.filterSize && config.filterSize.height || "400%",
            x: config && config.filterSize && config.filterSize.x || "-100%",
            y: config && config.filterSize && config.filterSize.y || "-100%"
          }
        };
        this.globalData = {
          _mdf: false,
          frameNum: -1,
          renderConfig: this.renderConfig
        };
        this.pendingElements = [];
        this.elements = [];
        this.threeDElements = [];
        this.destroyed = false;
        this.camera = null;
        this.supports3d = true;
        this.rendererType = "html";
      }
      extendPrototype([HybridRendererBase], HybridRenderer);
      HybridRenderer.prototype.createComp = function(data2) {
        if (!this.supports3d) {
          return new SVGCompElement(data2, this.globalData, this);
        }
        return new HCompElement(data2, this.globalData, this);
      };
      var Expressions = function() {
        var ob2 = {};
        ob2.initExpressions = initExpressions;
        function initExpressions(animation) {
          var stackCount = 0;
          var registers = [];
          function pushExpression() {
            stackCount += 1;
          }
          function popExpression() {
            stackCount -= 1;
            if (stackCount === 0) {
              releaseInstances();
            }
          }
          function registerExpressionProperty(expression) {
            if (registers.indexOf(expression) === -1) {
              registers.push(expression);
            }
          }
          function releaseInstances() {
            var i;
            var len = registers.length;
            for (i = 0; i < len; i += 1) {
              registers[i].release();
            }
            registers.length = 0;
          }
          animation.renderer.compInterface = CompExpressionInterface(animation.renderer);
          animation.renderer.globalData.projectInterface.registerComposition(animation.renderer);
          animation.renderer.globalData.pushExpression = pushExpression;
          animation.renderer.globalData.popExpression = popExpression;
          animation.renderer.globalData.registerExpressionProperty = registerExpressionProperty;
        }
        return ob2;
      }();
      function _typeof$1(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof$1 = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof$1 = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof$1(obj);
      }
      function seedRandom(pool, math) {
        var global = this, width2 = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width2, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask2 = width2 - 1, nodecrypto;
        function seedrandom(seed, options, callback) {
          var key2 = [];
          options = options === true ? {
            entropy: true
          } : options || {};
          var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed === null ? autoseed() : seed, 3), key2);
          var arc4 = new ARC4(key2);
          var prng = function prng2() {
            var n = arc4.g(chunks), d = startdenom, x = 0;
            while (n < significance) {
              n = (n + x) * width2;
              d *= width2;
              x = arc4.g(1);
            }
            while (n >= overflow) {
              n /= 2;
              d /= 2;
              x >>>= 1;
            }
            return (n + x) / d;
          };
          prng.int32 = function() {
            return arc4.g(4) | 0;
          };
          prng.quick = function() {
            return arc4.g(4) / 4294967296;
          };
          prng["double"] = prng;
          mixkey(tostring(arc4.S), pool);
          return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
            if (state) {
              if (state.S) {
                copy(state, arc4);
              }
              prng2.state = function() {
                return copy(arc4, {});
              };
            }
            if (is_math_call) {
              math[rngname] = prng2;
              return seed2;
            } else
              return prng2;
          })(prng, shortseed, "global" in options ? options.global : this == math, options.state);
        }
        math["seed" + rngname] = seedrandom;
        function ARC4(key2) {
          var t, keylen = key2.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
          if (!keylen) {
            key2 = [keylen++];
          }
          while (i < width2) {
            s[i] = i++;
          }
          for (i = 0; i < width2; i++) {
            s[i] = s[j = mask2 & j + key2[i % keylen] + (t = s[i])];
            s[j] = t;
          }
          me.g = function(count) {
            var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
            while (count--) {
              t2 = s2[i2 = mask2 & i2 + 1];
              r = r * width2 + s2[mask2 & (s2[i2] = s2[j2 = mask2 & j2 + t2]) + (s2[j2] = t2)];
            }
            me.i = i2;
            me.j = j2;
            return r;
          };
        }
        function copy(f, t) {
          t.i = f.i;
          t.j = f.j;
          t.S = f.S.slice();
          return t;
        }
        function flatten(obj, depth) {
          var result = [], typ = _typeof$1(obj), prop;
          if (depth && typ == "object") {
            for (prop in obj) {
              try {
                result.push(flatten(obj[prop], depth - 1));
              } catch (e) {
              }
            }
          }
          return result.length ? result : typ == "string" ? obj : obj + "\0";
        }
        function mixkey(seed, key2) {
          var stringseed = seed + "", smear, j = 0;
          while (j < stringseed.length) {
            key2[mask2 & j] = mask2 & (smear ^= key2[mask2 & j] * 19) + stringseed.charCodeAt(j++);
          }
          return tostring(key2);
        }
        function autoseed() {
          try {
            if (nodecrypto) {
              return tostring(nodecrypto.randomBytes(width2));
            }
            var out = new Uint8Array(width2);
            (global.crypto || global.msCrypto).getRandomValues(out);
            return tostring(out);
          } catch (e) {
            var browser = global.navigator, plugins = browser && browser.plugins;
            return [+new Date(), global, plugins, global.screen, tostring(pool)];
          }
        }
        function tostring(a) {
          return String.fromCharCode.apply(0, a);
        }
        mixkey(math.random(), pool);
      }
      ;
      function initialize$2(BMMath2) {
        seedRandom([], BMMath2);
      }
      var propTypes = {
        SHAPE: "shape"
      };
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      var ExpressionManager = function() {
        "use strict";
        var ob = {};
        var Math = BMMath;
        var window = null;
        var document = null;
        var XMLHttpRequest = null;
        var fetch = null;
        var frames = null;
        initialize$2(BMMath);
        function $bm_isInstanceOfArray(arr) {
          return arr.constructor === Array || arr.constructor === Float32Array;
        }
        function isNumerable(tOfV, v2) {
          return tOfV === "number" || tOfV === "boolean" || tOfV === "string" || v2 instanceof Number;
        }
        function $bm_neg(a) {
          var tOfA = _typeof(a);
          if (tOfA === "number" || tOfA === "boolean" || a instanceof Number) {
            return -a;
          }
          if ($bm_isInstanceOfArray(a)) {
            var i;
            var lenA = a.length;
            var retArr = [];
            for (i = 0; i < lenA; i += 1) {
              retArr[i] = -a[i];
            }
            return retArr;
          }
          if (a.propType) {
            return a.v;
          }
          return -a;
        }
        var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get;
        var easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get;
        var easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
        function sum(a, b) {
          var tOfA = _typeof(a);
          var tOfB = _typeof(b);
          if (tOfA === "string" || tOfB === "string") {
            return a + b;
          }
          if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
            return a + b;
          }
          if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
            a = a.slice(0);
            a[0] += b;
            return a;
          }
          if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
            b = b.slice(0);
            b[0] = a + b[0];
            return b;
          }
          if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
            var i = 0;
            var lenA = a.length;
            var lenB = b.length;
            var retArr = [];
            while (i < lenA || i < lenB) {
              if ((typeof a[i] === "number" || a[i] instanceof Number) && (typeof b[i] === "number" || b[i] instanceof Number)) {
                retArr[i] = a[i] + b[i];
              } else {
                retArr[i] = b[i] === void 0 ? a[i] : a[i] || b[i];
              }
              i += 1;
            }
            return retArr;
          }
          return 0;
        }
        var add = sum;
        function sub(a, b) {
          var tOfA = _typeof(a);
          var tOfB = _typeof(b);
          if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
            if (tOfA === "string") {
              a = parseInt(a, 10);
            }
            if (tOfB === "string") {
              b = parseInt(b, 10);
            }
            return a - b;
          }
          if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
            a = a.slice(0);
            a[0] -= b;
            return a;
          }
          if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
            b = b.slice(0);
            b[0] = a - b[0];
            return b;
          }
          if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
            var i = 0;
            var lenA = a.length;
            var lenB = b.length;
            var retArr = [];
            while (i < lenA || i < lenB) {
              if ((typeof a[i] === "number" || a[i] instanceof Number) && (typeof b[i] === "number" || b[i] instanceof Number)) {
                retArr[i] = a[i] - b[i];
              } else {
                retArr[i] = b[i] === void 0 ? a[i] : a[i] || b[i];
              }
              i += 1;
            }
            return retArr;
          }
          return 0;
        }
        function mul(a, b) {
          var tOfA = _typeof(a);
          var tOfB = _typeof(b);
          var arr;
          if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
            return a * b;
          }
          var i;
          var len;
          if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
            len = a.length;
            arr = createTypedArray("float32", len);
            for (i = 0; i < len; i += 1) {
              arr[i] = a[i] * b;
            }
            return arr;
          }
          if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
            len = b.length;
            arr = createTypedArray("float32", len);
            for (i = 0; i < len; i += 1) {
              arr[i] = a * b[i];
            }
            return arr;
          }
          return 0;
        }
        function div(a, b) {
          var tOfA = _typeof(a);
          var tOfB = _typeof(b);
          var arr;
          if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
            return a / b;
          }
          var i;
          var len;
          if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
            len = a.length;
            arr = createTypedArray("float32", len);
            for (i = 0; i < len; i += 1) {
              arr[i] = a[i] / b;
            }
            return arr;
          }
          if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
            len = b.length;
            arr = createTypedArray("float32", len);
            for (i = 0; i < len; i += 1) {
              arr[i] = a / b[i];
            }
            return arr;
          }
          return 0;
        }
        function mod(a, b) {
          if (typeof a === "string") {
            a = parseInt(a, 10);
          }
          if (typeof b === "string") {
            b = parseInt(b, 10);
          }
          return a % b;
        }
        var $bm_sum = sum;
        var $bm_sub = sub;
        var $bm_mul = mul;
        var $bm_div = div;
        var $bm_mod = mod;
        function clamp(num, min, max) {
          if (min > max) {
            var mm = max;
            max = min;
            min = mm;
          }
          return Math.min(Math.max(num, min), max);
        }
        function radiansToDegrees(val2) {
          return val2 / degToRads;
        }
        var radians_to_degrees = radiansToDegrees;
        function degreesToRadians(val2) {
          return val2 * degToRads;
        }
        var degrees_to_radians = radiansToDegrees;
        var helperLengthArray = [0, 0, 0, 0, 0, 0];
        function length(arr1, arr2) {
          if (typeof arr1 === "number" || arr1 instanceof Number) {
            arr2 = arr2 || 0;
            return Math.abs(arr1 - arr2);
          }
          if (!arr2) {
            arr2 = helperLengthArray;
          }
          var i;
          var len = Math.min(arr1.length, arr2.length);
          var addedLength = 0;
          for (i = 0; i < len; i += 1) {
            addedLength += Math.pow(arr2[i] - arr1[i], 2);
          }
          return Math.sqrt(addedLength);
        }
        function normalize(vec) {
          return div(vec, length(vec));
        }
        function rgbToHsl(val2) {
          var r = val2[0];
          var g = val2[1];
          var b = val2[2];
          var max = Math.max(r, g, b);
          var min = Math.min(r, g, b);
          var h2;
          var s;
          var l = (max + min) / 2;
          if (max === min) {
            h2 = 0;
            s = 0;
          } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
              case r:
                h2 = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                h2 = (b - r) / d + 2;
                break;
              case b:
                h2 = (r - g) / d + 4;
                break;
              default:
                break;
            }
            h2 /= 6;
          }
          return [h2, s, l, val2[3]];
        }
        function hue2rgb(p, q, t) {
          if (t < 0)
            t += 1;
          if (t > 1)
            t -= 1;
          if (t < 1 / 6)
            return p + (q - p) * 6 * t;
          if (t < 1 / 2)
            return q;
          if (t < 2 / 3)
            return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        }
        function hslToRgb(val2) {
          var h2 = val2[0];
          var s = val2[1];
          var l = val2[2];
          var r;
          var g;
          var b;
          if (s === 0) {
            r = l;
            b = l;
            g = l;
          } else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h2 + 1 / 3);
            g = hue2rgb(p, q, h2);
            b = hue2rgb(p, q, h2 - 1 / 3);
          }
          return [r, g, b, val2[3]];
        }
        function linear(t, tMin, tMax, value1, value2) {
          if (value1 === void 0 || value2 === void 0) {
            value1 = tMin;
            value2 = tMax;
            tMin = 0;
            tMax = 1;
          }
          if (tMax < tMin) {
            var _tMin = tMax;
            tMax = tMin;
            tMin = _tMin;
          }
          if (t <= tMin) {
            return value1;
          }
          if (t >= tMax) {
            return value2;
          }
          var perc = tMax === tMin ? 0 : (t - tMin) / (tMax - tMin);
          if (!value1.length) {
            return value1 + (value2 - value1) * perc;
          }
          var i;
          var len = value1.length;
          var arr = createTypedArray("float32", len);
          for (i = 0; i < len; i += 1) {
            arr[i] = value1[i] + (value2[i] - value1[i]) * perc;
          }
          return arr;
        }
        function random(min, max) {
          if (max === void 0) {
            if (min === void 0) {
              min = 0;
              max = 1;
            } else {
              max = min;
              min = void 0;
            }
          }
          if (max.length) {
            var i;
            var len = max.length;
            if (!min) {
              min = createTypedArray("float32", len);
            }
            var arr = createTypedArray("float32", len);
            var rnd = BMMath.random();
            for (i = 0; i < len; i += 1) {
              arr[i] = min[i] + rnd * (max[i] - min[i]);
            }
            return arr;
          }
          if (min === void 0) {
            min = 0;
          }
          var rndm = BMMath.random();
          return min + rndm * (max - min);
        }
        function createPath(points, inTangents, outTangents, closed) {
          var i;
          var len = points.length;
          var path = shapePool.newElement();
          path.setPathData(!!closed, len);
          var arrPlaceholder = [0, 0];
          var inVertexPoint;
          var outVertexPoint;
          for (i = 0; i < len; i += 1) {
            inVertexPoint = inTangents && inTangents[i] ? inTangents[i] : arrPlaceholder;
            outVertexPoint = outTangents && outTangents[i] ? outTangents[i] : arrPlaceholder;
            path.setTripleAt(points[i][0], points[i][1], outVertexPoint[0] + points[i][0], outVertexPoint[1] + points[i][1], inVertexPoint[0] + points[i][0], inVertexPoint[1] + points[i][1], i, true);
          }
          return path;
        }
        function initiateExpression(elem, data, property) {
          var val = data.x;
          var needsVelocity = /velocity(?![\w\d])/.test(val);
          var _needsRandom = val.indexOf("random") !== -1;
          var elemType = elem.data.ty;
          var transform;
          var $bm_transform;
          var content;
          var effect;
          var thisProperty = property;
          thisProperty.valueAtTime = thisProperty.getValueAtTime;
          Object.defineProperty(thisProperty, "value", {
            get: function get() {
              return thisProperty.v;
            }
          });
          elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
          elem.comp.displayStartTime = 0;
          var inPoint = elem.data.ip / elem.comp.globalData.frameRate;
          var outPoint = elem.data.op / elem.comp.globalData.frameRate;
          var width = elem.data.sw ? elem.data.sw : 0;
          var height = elem.data.sh ? elem.data.sh : 0;
          var name = elem.data.nm;
          var loopIn;
          var loop_in;
          var loopOut;
          var loop_out;
          var smooth;
          var toWorld;
          var fromWorld;
          var fromComp;
          var toComp;
          var fromCompToSurface;
          var position;
          var rotation;
          var anchorPoint;
          var scale;
          var thisLayer;
          var thisComp;
          var mask;
          var valueAtTime;
          var velocityAtTime;
          var scoped_bm_rt;
          var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0];
          var numKeys = property.kf ? data.k.length : 0;
          var active = !this.data || this.data.hd !== true;
          var wiggle = function wiggle2(freq, amp) {
            var iWiggle;
            var j;
            var lenWiggle = this.pv.length ? this.pv.length : 1;
            var addedAmps = createTypedArray("float32", lenWiggle);
            freq = 5;
            var iterations = Math.floor(time * freq);
            iWiggle = 0;
            j = 0;
            while (iWiggle < iterations) {
              for (j = 0; j < lenWiggle; j += 1) {
                addedAmps[j] += -amp + amp * 2 * BMMath.random();
              }
              iWiggle += 1;
            }
            var periods = time * freq;
            var perc = periods - Math.floor(periods);
            var arr = createTypedArray("float32", lenWiggle);
            if (lenWiggle > 1) {
              for (j = 0; j < lenWiggle; j += 1) {
                arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp * 2 * BMMath.random()) * perc;
              }
              return arr;
            }
            return this.pv + addedAmps[0] + (-amp + amp * 2 * BMMath.random()) * perc;
          }.bind(this);
          if (thisProperty.loopIn) {
            loopIn = thisProperty.loopIn.bind(thisProperty);
            loop_in = loopIn;
          }
          if (thisProperty.loopOut) {
            loopOut = thisProperty.loopOut.bind(thisProperty);
            loop_out = loopOut;
          }
          if (thisProperty.smooth) {
            smooth = thisProperty.smooth.bind(thisProperty);
          }
          function loopInDuration(type, duration) {
            return loopIn(type, duration, true);
          }
          function loopOutDuration(type, duration) {
            return loopOut(type, duration, true);
          }
          if (this.getValueAtTime) {
            valueAtTime = this.getValueAtTime.bind(this);
          }
          if (this.getVelocityAtTime) {
            velocityAtTime = this.getVelocityAtTime.bind(this);
          }
          var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
          function lookAt(elem1, elem2) {
            var fVec = [elem2[0] - elem1[0], elem2[1] - elem1[1], elem2[2] - elem1[2]];
            var pitch = Math.atan2(fVec[0], Math.sqrt(fVec[1] * fVec[1] + fVec[2] * fVec[2])) / degToRads;
            var yaw = -Math.atan2(fVec[1], fVec[2]) / degToRads;
            return [yaw, pitch, 0];
          }
          function easeOut(t, tMin, tMax, val1, val2) {
            return applyEase(easeOutBez, t, tMin, tMax, val1, val2);
          }
          function easeIn(t, tMin, tMax, val1, val2) {
            return applyEase(easeInBez, t, tMin, tMax, val1, val2);
          }
          function ease(t, tMin, tMax, val1, val2) {
            return applyEase(easeInOutBez, t, tMin, tMax, val1, val2);
          }
          function applyEase(fn, t, tMin, tMax, val1, val2) {
            if (val1 === void 0) {
              val1 = tMin;
              val2 = tMax;
            } else {
              t = (t - tMin) / (tMax - tMin);
            }
            if (t > 1) {
              t = 1;
            } else if (t < 0) {
              t = 0;
            }
            var mult = fn(t);
            if ($bm_isInstanceOfArray(val1)) {
              var iKey;
              var lenKey = val1.length;
              var arr = createTypedArray("float32", lenKey);
              for (iKey = 0; iKey < lenKey; iKey += 1) {
                arr[iKey] = (val2[iKey] - val1[iKey]) * mult + val1[iKey];
              }
              return arr;
            }
            return (val2 - val1) * mult + val1;
          }
          function nearestKey(time2) {
            var iKey;
            var lenKey = data.k.length;
            var index2;
            var keyTime;
            if (!data.k.length || typeof data.k[0] === "number") {
              index2 = 0;
              keyTime = 0;
            } else {
              index2 = -1;
              time2 *= elem.comp.globalData.frameRate;
              if (time2 < data.k[0].t) {
                index2 = 1;
                keyTime = data.k[0].t;
              } else {
                for (iKey = 0; iKey < lenKey - 1; iKey += 1) {
                  if (time2 === data.k[iKey].t) {
                    index2 = iKey + 1;
                    keyTime = data.k[iKey].t;
                    break;
                  } else if (time2 > data.k[iKey].t && time2 < data.k[iKey + 1].t) {
                    if (time2 - data.k[iKey].t > data.k[iKey + 1].t - time2) {
                      index2 = iKey + 2;
                      keyTime = data.k[iKey + 1].t;
                    } else {
                      index2 = iKey + 1;
                      keyTime = data.k[iKey].t;
                    }
                    break;
                  }
                }
                if (index2 === -1) {
                  index2 = iKey + 1;
                  keyTime = data.k[iKey].t;
                }
              }
            }
            var obKey = {};
            obKey.index = index2;
            obKey.time = keyTime / elem.comp.globalData.frameRate;
            return obKey;
          }
          function key(ind) {
            var obKey;
            var iKey;
            var lenKey;
            if (!data.k.length || typeof data.k[0] === "number") {
              throw new Error("The property has no keyframe at index " + ind);
            }
            ind -= 1;
            obKey = {
              time: data.k[ind].t / elem.comp.globalData.frameRate,
              value: []
            };
            var arr = Object.prototype.hasOwnProperty.call(data.k[ind], "s") ? data.k[ind].s : data.k[ind - 1].e;
            lenKey = arr.length;
            for (iKey = 0; iKey < lenKey; iKey += 1) {
              obKey[iKey] = arr[iKey];
              obKey.value[iKey] = arr[iKey];
            }
            return obKey;
          }
          function framesToTime(fr2, fps) {
            if (!fps) {
              fps = elem.comp.globalData.frameRate;
            }
            return fr2 / fps;
          }
          function timeToFrames(t, fps) {
            if (!t && t !== 0) {
              t = time;
            }
            if (!fps) {
              fps = elem.comp.globalData.frameRate;
            }
            return t * fps;
          }
          function seedRandom(seed) {
            BMMath.seedrandom(randSeed + seed);
          }
          function sourceRectAtTime() {
            return elem.sourceRectAtTime();
          }
          function substring(init, end) {
            if (typeof value === "string") {
              if (end === void 0) {
                return value.substring(init);
              }
              return value.substring(init, end);
            }
            return "";
          }
          function substr(init, end) {
            if (typeof value === "string") {
              if (end === void 0) {
                return value.substr(init);
              }
              return value.substr(init, end);
            }
            return "";
          }
          function posterizeTime(framesPerSecond) {
            time = framesPerSecond === 0 ? 0 : Math.floor(time * framesPerSecond) / framesPerSecond;
            value = valueAtTime(time);
          }
          var time;
          var velocity;
          var value;
          var text;
          var textIndex;
          var textTotal;
          var selectorValue;
          var index = elem.data.ind;
          var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
          var parent;
          var randSeed = Math.floor(Math.random() * 1e6);
          var globalData = elem.globalData;
          function executeExpression(_value) {
            value = _value;
            if (this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector") {
              return value;
            }
            if (this.propType === "textSelector") {
              textIndex = this.textIndex;
              textTotal = this.textTotal;
              selectorValue = this.selectorValue;
            }
            if (!thisLayer) {
              text = elem.layerInterface.text;
              thisLayer = elem.layerInterface;
              thisComp = elem.comp.compInterface;
              toWorld = thisLayer.toWorld.bind(thisLayer);
              fromWorld = thisLayer.fromWorld.bind(thisLayer);
              fromComp = thisLayer.fromComp.bind(thisLayer);
              toComp = thisLayer.toComp.bind(thisLayer);
              mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null;
              fromCompToSurface = fromComp;
            }
            if (!transform) {
              transform = elem.layerInterface("ADBE Transform Group");
              $bm_transform = transform;
              if (transform) {
                anchorPoint = transform.anchorPoint;
              }
            }
            if (elemType === 4 && !content) {
              content = thisLayer("ADBE Root Vectors Group");
            }
            if (!effect) {
              effect = thisLayer(4);
            }
            hasParent = !!(elem.hierarchy && elem.hierarchy.length);
            if (hasParent && !parent) {
              parent = elem.hierarchy[0].layerInterface;
            }
            time = this.comp.renderedFrame / this.comp.globalData.frameRate;
            if (_needsRandom) {
              seedRandom(randSeed + time);
            }
            if (needsVelocity) {
              velocity = velocityAtTime(time);
            }
            expression_function();
            this.frameExpressionId = elem.globalData.frameId;
            scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt;
            return scoped_bm_rt;
          }
          executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData];
          return executeExpression;
        }
        ob.initiateExpression = initiateExpression;
        ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath];
        return ob;
      }();
      var expressionHelpers = function() {
        function searchExpressions(elem2, data2, prop) {
          if (data2.x) {
            prop.k = true;
            prop.x = true;
            prop.initiateExpression = ExpressionManager.initiateExpression;
            prop.effectsSequence.push(prop.initiateExpression(elem2, data2, prop).bind(prop));
          }
        }
        function getValueAtTime(frameNum) {
          frameNum *= this.elem.globalData.frameRate;
          frameNum -= this.offsetTime;
          if (frameNum !== this._cachingAtTime.lastFrame) {
            this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < frameNum ? this._cachingAtTime.lastIndex : 0;
            this._cachingAtTime.value = this.interpolateValue(frameNum, this._cachingAtTime);
            this._cachingAtTime.lastFrame = frameNum;
          }
          return this._cachingAtTime.value;
        }
        function getSpeedAtTime(frameNum) {
          var delta = -0.01;
          var v1 = this.getValueAtTime(frameNum);
          var v2 = this.getValueAtTime(frameNum + delta);
          var speed = 0;
          if (v1.length) {
            var i;
            for (i = 0; i < v1.length; i += 1) {
              speed += Math.pow(v2[i] - v1[i], 2);
            }
            speed = Math.sqrt(speed) * 100;
          } else {
            speed = 0;
          }
          return speed;
        }
        function getVelocityAtTime(frameNum) {
          if (this.vel !== void 0) {
            return this.vel;
          }
          var delta = -1e-3;
          var v1 = this.getValueAtTime(frameNum);
          var v2 = this.getValueAtTime(frameNum + delta);
          var velocity2;
          if (v1.length) {
            velocity2 = createTypedArray("float32", v1.length);
            var i;
            for (i = 0; i < v1.length; i += 1) {
              velocity2[i] = (v2[i] - v1[i]) / delta;
            }
          } else {
            velocity2 = (v2 - v1) / delta;
          }
          return velocity2;
        }
        function getStaticValueAtTime() {
          return this.pv;
        }
        function setGroupProperty(propertyGroup) {
          this.propertyGroup = propertyGroup;
        }
        return {
          searchExpressions,
          getSpeedAtTime,
          getVelocityAtTime,
          getValueAtTime,
          getStaticValueAtTime,
          setGroupProperty
        };
      }();
      function addPropertyDecorator() {
        function loopOut2(type, duration, durationFlag) {
          if (!this.k || !this.keyframes) {
            return this.pv;
          }
          type = type ? type.toLowerCase() : "";
          var currentFrame = this.comp.renderedFrame;
          var keyframes = this.keyframes;
          var lastKeyFrame = keyframes[keyframes.length - 1].t;
          if (currentFrame <= lastKeyFrame) {
            return this.pv;
          }
          var cycleDuration;
          var firstKeyFrame;
          if (!durationFlag) {
            if (!duration || duration > keyframes.length - 1) {
              duration = keyframes.length - 1;
            }
            firstKeyFrame = keyframes[keyframes.length - 1 - duration].t;
            cycleDuration = lastKeyFrame - firstKeyFrame;
          } else {
            if (!duration) {
              cycleDuration = Math.max(0, lastKeyFrame - this.elem.data.ip);
            } else {
              cycleDuration = Math.abs(lastKeyFrame - this.elem.comp.globalData.frameRate * duration);
            }
            firstKeyFrame = lastKeyFrame - cycleDuration;
          }
          var i;
          var len;
          var ret;
          if (type === "pingpong") {
            var iterations = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);
            if (iterations % 2 !== 0) {
              return this.getValueAtTime((cycleDuration - (currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
            }
          } else if (type === "offset") {
            var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
            var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
            var current = this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
            var repeats = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);
            if (this.pv.length) {
              ret = new Array(initV.length);
              len = ret.length;
              for (i = 0; i < len; i += 1) {
                ret[i] = (endV[i] - initV[i]) * repeats + current[i];
              }
              return ret;
            }
            return (endV - initV) * repeats + current;
          } else if (type === "continue") {
            var lastValue = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
            var nextLastValue = this.getValueAtTime((lastKeyFrame - 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              ret = new Array(lastValue.length);
              len = ret.length;
              for (i = 0; i < len; i += 1) {
                ret[i] = lastValue[i] + (lastValue[i] - nextLastValue[i]) * ((currentFrame - lastKeyFrame) / this.comp.globalData.frameRate) / 5e-4;
              }
              return ret;
            }
            return lastValue + (lastValue - nextLastValue) * ((currentFrame - lastKeyFrame) / 1e-3);
          }
          return this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
        }
        function loopIn2(type, duration, durationFlag) {
          if (!this.k) {
            return this.pv;
          }
          type = type ? type.toLowerCase() : "";
          var currentFrame = this.comp.renderedFrame;
          var keyframes = this.keyframes;
          var firstKeyFrame = keyframes[0].t;
          if (currentFrame >= firstKeyFrame) {
            return this.pv;
          }
          var cycleDuration;
          var lastKeyFrame;
          if (!durationFlag) {
            if (!duration || duration > keyframes.length - 1) {
              duration = keyframes.length - 1;
            }
            lastKeyFrame = keyframes[duration].t;
            cycleDuration = lastKeyFrame - firstKeyFrame;
          } else {
            if (!duration) {
              cycleDuration = Math.max(0, this.elem.data.op - firstKeyFrame);
            } else {
              cycleDuration = Math.abs(this.elem.comp.globalData.frameRate * duration);
            }
            lastKeyFrame = firstKeyFrame + cycleDuration;
          }
          var i;
          var len;
          var ret;
          if (type === "pingpong") {
            var iterations = Math.floor((firstKeyFrame - currentFrame) / cycleDuration);
            if (iterations % 2 === 0) {
              return this.getValueAtTime(((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
            }
          } else if (type === "offset") {
            var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
            var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
            var current = this.getValueAtTime((cycleDuration - (firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
            var repeats = Math.floor((firstKeyFrame - currentFrame) / cycleDuration) + 1;
            if (this.pv.length) {
              ret = new Array(initV.length);
              len = ret.length;
              for (i = 0; i < len; i += 1) {
                ret[i] = current[i] - (endV[i] - initV[i]) * repeats;
              }
              return ret;
            }
            return current - (endV - initV) * repeats;
          } else if (type === "continue") {
            var firstValue = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
            var nextFirstValue = this.getValueAtTime((firstKeyFrame + 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              ret = new Array(firstValue.length);
              len = ret.length;
              for (i = 0; i < len; i += 1) {
                ret[i] = firstValue[i] + (firstValue[i] - nextFirstValue[i]) * (firstKeyFrame - currentFrame) / 1e-3;
              }
              return ret;
            }
            return firstValue + (firstValue - nextFirstValue) * (firstKeyFrame - currentFrame) / 1e-3;
          }
          return this.getValueAtTime((cycleDuration - ((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0);
        }
        function smooth2(width2, samples) {
          if (!this.k) {
            return this.pv;
          }
          width2 = (width2 || 0.4) * 0.5;
          samples = Math.floor(samples || 5);
          if (samples <= 1) {
            return this.pv;
          }
          var currentTime = this.comp.renderedFrame / this.comp.globalData.frameRate;
          var initFrame = currentTime - width2;
          var endFrame = currentTime + width2;
          var sampleFrequency = samples > 1 ? (endFrame - initFrame) / (samples - 1) : 1;
          var i = 0;
          var j = 0;
          var value2;
          if (this.pv.length) {
            value2 = createTypedArray("float32", this.pv.length);
          } else {
            value2 = 0;
          }
          var sampleValue;
          while (i < samples) {
            sampleValue = this.getValueAtTime(initFrame + i * sampleFrequency);
            if (this.pv.length) {
              for (j = 0; j < this.pv.length; j += 1) {
                value2[j] += sampleValue[j];
              }
            } else {
              value2 += sampleValue;
            }
            i += 1;
          }
          if (this.pv.length) {
            for (j = 0; j < this.pv.length; j += 1) {
              value2[j] /= samples;
            }
          } else {
            value2 /= samples;
          }
          return value2;
        }
        function getTransformValueAtTime(time2) {
          if (!this._transformCachingAtTime) {
            this._transformCachingAtTime = {
              v: new Matrix()
            };
          }
          var matrix = this._transformCachingAtTime.v;
          matrix.cloneFromProps(this.pre.props);
          if (this.appliedTransformations < 1) {
            var anchor = this.a.getValueAtTime(time2);
            matrix.translate(-anchor[0] * this.a.mult, -anchor[1] * this.a.mult, anchor[2] * this.a.mult);
          }
          if (this.appliedTransformations < 2) {
            var scale2 = this.s.getValueAtTime(time2);
            matrix.scale(scale2[0] * this.s.mult, scale2[1] * this.s.mult, scale2[2] * this.s.mult);
          }
          if (this.sk && this.appliedTransformations < 3) {
            var skew = this.sk.getValueAtTime(time2);
            var skewAxis = this.sa.getValueAtTime(time2);
            matrix.skewFromAxis(-skew * this.sk.mult, skewAxis * this.sa.mult);
          }
          if (this.r && this.appliedTransformations < 4) {
            var rotation2 = this.r.getValueAtTime(time2);
            matrix.rotate(-rotation2 * this.r.mult);
          } else if (!this.r && this.appliedTransformations < 4) {
            var rotationZ = this.rz.getValueAtTime(time2);
            var rotationY = this.ry.getValueAtTime(time2);
            var rotationX = this.rx.getValueAtTime(time2);
            var orientation = this.or.getValueAtTime(time2);
            matrix.rotateZ(-rotationZ * this.rz.mult).rotateY(rotationY * this.ry.mult).rotateX(rotationX * this.rx.mult).rotateZ(-orientation[2] * this.or.mult).rotateY(orientation[1] * this.or.mult).rotateX(orientation[0] * this.or.mult);
          }
          if (this.data.p && this.data.p.s) {
            var positionX = this.px.getValueAtTime(time2);
            var positionY = this.py.getValueAtTime(time2);
            if (this.data.p.z) {
              var positionZ = this.pz.getValueAtTime(time2);
              matrix.translate(positionX * this.px.mult, positionY * this.py.mult, -positionZ * this.pz.mult);
            } else {
              matrix.translate(positionX * this.px.mult, positionY * this.py.mult, 0);
            }
          } else {
            var position2 = this.p.getValueAtTime(time2);
            matrix.translate(position2[0] * this.p.mult, position2[1] * this.p.mult, -position2[2] * this.p.mult);
          }
          return matrix;
        }
        function getTransformStaticValueAtTime() {
          return this.v.clone(new Matrix());
        }
        var getTransformProperty = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function(elem2, data2, container) {
          var prop = getTransformProperty(elem2, data2, container);
          if (prop.dynamicProperties.length) {
            prop.getValueAtTime = getTransformValueAtTime.bind(prop);
          } else {
            prop.getValueAtTime = getTransformStaticValueAtTime.bind(prop);
          }
          prop.setGroupProperty = expressionHelpers.setGroupProperty;
          return prop;
        };
        var propertyGetProp = PropertyFactory.getProp;
        PropertyFactory.getProp = function(elem2, data2, type, mult, container) {
          var prop = propertyGetProp(elem2, data2, type, mult, container);
          if (prop.kf) {
            prop.getValueAtTime = expressionHelpers.getValueAtTime.bind(prop);
          } else {
            prop.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(prop);
          }
          prop.setGroupProperty = expressionHelpers.setGroupProperty;
          prop.loopOut = loopOut2;
          prop.loopIn = loopIn2;
          prop.smooth = smooth2;
          prop.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(prop);
          prop.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(prop);
          prop.numKeys = data2.a === 1 ? data2.k.length : 0;
          prop.propertyIndex = data2.ix;
          var value2 = 0;
          if (type !== 0) {
            value2 = createTypedArray("float32", data2.a === 1 ? data2.k[0].s.length : data2.k.length);
          }
          prop._cachingAtTime = {
            lastFrame: initialDefaultFrame,
            lastIndex: 0,
            value: value2
          };
          expressionHelpers.searchExpressions(elem2, data2, prop);
          if (prop.k) {
            container.addDynamicProperty(prop);
          }
          return prop;
        };
        function getShapeValueAtTime(frameNum) {
          if (!this._cachingAtTime) {
            this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            };
          }
          frameNum *= this.elem.globalData.frameRate;
          frameNum -= this.offsetTime;
          if (frameNum !== this._cachingAtTime.lastTime) {
            this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < frameNum ? this._caching.lastIndex : 0;
            this._cachingAtTime.lastTime = frameNum;
            this.interpolateShape(frameNum, this._cachingAtTime.shapeValue, this._cachingAtTime);
          }
          return this._cachingAtTime.shapeValue;
        }
        var ShapePropertyConstructorFunction = ShapePropertyFactory.getConstructorFunction();
        var KeyframedShapePropertyConstructorFunction = ShapePropertyFactory.getKeyframedConstructorFunction();
        function ShapeExpressions() {
        }
        ShapeExpressions.prototype = {
          vertices: function vertices(prop, time2) {
            if (this.k) {
              this.getValue();
            }
            var shapePath = this.v;
            if (time2 !== void 0) {
              shapePath = this.getValueAtTime(time2, 0);
            }
            var i;
            var len = shapePath._length;
            var vertices2 = shapePath[prop];
            var points = shapePath.v;
            var arr = createSizedArray(len);
            for (i = 0; i < len; i += 1) {
              if (prop === "i" || prop === "o") {
                arr[i] = [vertices2[i][0] - points[i][0], vertices2[i][1] - points[i][1]];
              } else {
                arr[i] = [vertices2[i][0], vertices2[i][1]];
              }
            }
            return arr;
          },
          points: function points(time2) {
            return this.vertices("v", time2);
          },
          inTangents: function inTangents(time2) {
            return this.vertices("i", time2);
          },
          outTangents: function outTangents(time2) {
            return this.vertices("o", time2);
          },
          isClosed: function isClosed() {
            return this.v.c;
          },
          pointOnPath: function pointOnPath(perc, time2) {
            var shapePath = this.v;
            if (time2 !== void 0) {
              shapePath = this.getValueAtTime(time2, 0);
            }
            if (!this._segmentsLength) {
              this._segmentsLength = bez.getSegmentsLength(shapePath);
            }
            var segmentsLength = this._segmentsLength;
            var lengths = segmentsLength.lengths;
            var lengthPos = segmentsLength.totalLength * perc;
            var i = 0;
            var len = lengths.length;
            var accumulatedLength = 0;
            var pt;
            while (i < len) {
              if (accumulatedLength + lengths[i].addedLength > lengthPos) {
                var initIndex = i;
                var endIndex = shapePath.c && i === len - 1 ? 0 : i + 1;
                var segmentPerc = (lengthPos - accumulatedLength) / lengths[i].addedLength;
                pt = bez.getPointInSegment(shapePath.v[initIndex], shapePath.v[endIndex], shapePath.o[initIndex], shapePath.i[endIndex], segmentPerc, lengths[i]);
                break;
              } else {
                accumulatedLength += lengths[i].addedLength;
              }
              i += 1;
            }
            if (!pt) {
              pt = shapePath.c ? [shapePath.v[0][0], shapePath.v[0][1]] : [shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1]];
            }
            return pt;
          },
          vectorOnPath: function vectorOnPath(perc, time2, vectorType) {
            if (perc == 1) {
              perc = this.v.c;
            } else if (perc == 0) {
              perc = 0.999;
            }
            var pt1 = this.pointOnPath(perc, time2);
            var pt2 = this.pointOnPath(perc + 1e-3, time2);
            var xLength = pt2[0] - pt1[0];
            var yLength = pt2[1] - pt1[1];
            var magnitude = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));
            if (magnitude === 0) {
              return [0, 0];
            }
            var unitVector = vectorType === "tangent" ? [xLength / magnitude, yLength / magnitude] : [-yLength / magnitude, xLength / magnitude];
            return unitVector;
          },
          tangentOnPath: function tangentOnPath(perc, time2) {
            return this.vectorOnPath(perc, time2, "tangent");
          },
          normalOnPath: function normalOnPath(perc, time2) {
            return this.vectorOnPath(perc, time2, "normal");
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime
        };
        extendPrototype([ShapeExpressions], ShapePropertyConstructorFunction);
        extendPrototype([ShapeExpressions], KeyframedShapePropertyConstructorFunction);
        KeyframedShapePropertyConstructorFunction.prototype.getValueAtTime = getShapeValueAtTime;
        KeyframedShapePropertyConstructorFunction.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var propertyGetShapeProp = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function(elem2, data2, type, arr, trims) {
          var prop = propertyGetShapeProp(elem2, data2, type, arr, trims);
          prop.propertyIndex = data2.ix;
          prop.lock = false;
          if (type === 3) {
            expressionHelpers.searchExpressions(elem2, data2.pt, prop);
          } else if (type === 4) {
            expressionHelpers.searchExpressions(elem2, data2.ks, prop);
          }
          if (prop.k) {
            elem2.addDynamicProperty(prop);
          }
          return prop;
        };
      }
      function initialize$1() {
        addPropertyDecorator();
      }
      function addDecorator() {
        function searchExpressions() {
          if (this.data.d.x) {
            this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this);
            this.addEffect(this.getExpressionValue.bind(this));
            return true;
          }
          return null;
        }
        TextProperty.prototype.getExpressionValue = function(currentValue, text2) {
          var newValue = this.calculateExpression(text2);
          if (currentValue.t !== newValue) {
            var newData = {};
            this.copyData(newData, currentValue);
            newData.t = newValue.toString();
            newData.__complete = false;
            return newData;
          }
          return currentValue;
        };
        TextProperty.prototype.searchProperty = function() {
          var isKeyframed = this.searchKeyframes();
          var hasExpressions = this.searchExpressions();
          this.kf = isKeyframed || hasExpressions;
          return this.kf;
        };
        TextProperty.prototype.searchExpressions = searchExpressions;
      }
      function initialize() {
        addDecorator();
      }
      function SVGComposableEffect() {
      }
      SVGComposableEffect.prototype = {
        createMergeNode: function createMergeNode(resultId, ins) {
          var feMerge = createNS("feMerge");
          feMerge.setAttribute("result", resultId);
          var feMergeNode;
          var i;
          for (i = 0; i < ins.length; i += 1) {
            feMergeNode = createNS("feMergeNode");
            feMergeNode.setAttribute("in", ins[i]);
            feMerge.appendChild(feMergeNode);
            feMerge.appendChild(feMergeNode);
          }
          return feMerge;
        }
      };
      function SVGTintFilter(filter, filterManager, elem2, id, source) {
        this.filterManager = filterManager;
        var feColorMatrix = createNS("feColorMatrix");
        feColorMatrix.setAttribute("type", "matrix");
        feColorMatrix.setAttribute("color-interpolation-filters", "linearRGB");
        feColorMatrix.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0");
        feColorMatrix.setAttribute("result", id + "_tint_1");
        filter.appendChild(feColorMatrix);
        feColorMatrix = createNS("feColorMatrix");
        feColorMatrix.setAttribute("type", "matrix");
        feColorMatrix.setAttribute("color-interpolation-filters", "sRGB");
        feColorMatrix.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0");
        feColorMatrix.setAttribute("result", id + "_tint_2");
        filter.appendChild(feColorMatrix);
        this.matrixFilter = feColorMatrix;
        var feMerge = this.createMergeNode(id, [source, id + "_tint_1", id + "_tint_2"]);
        filter.appendChild(feMerge);
      }
      extendPrototype([SVGComposableEffect], SVGTintFilter);
      SVGTintFilter.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
          var colorBlack = this.filterManager.effectElements[0].p.v;
          var colorWhite = this.filterManager.effectElements[1].p.v;
          var opacity = this.filterManager.effectElements[2].p.v / 100;
          this.matrixFilter.setAttribute("values", colorWhite[0] - colorBlack[0] + " 0 0 0 " + colorBlack[0] + " " + (colorWhite[1] - colorBlack[1]) + " 0 0 0 " + colorBlack[1] + " " + (colorWhite[2] - colorBlack[2]) + " 0 0 0 " + colorBlack[2] + " 0 0 0 " + opacity + " 0");
        }
      };
      function SVGFillFilter(filter, filterManager, elem2, id) {
        this.filterManager = filterManager;
        var feColorMatrix = createNS("feColorMatrix");
        feColorMatrix.setAttribute("type", "matrix");
        feColorMatrix.setAttribute("color-interpolation-filters", "sRGB");
        feColorMatrix.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0");
        feColorMatrix.setAttribute("result", id);
        filter.appendChild(feColorMatrix);
        this.matrixFilter = feColorMatrix;
      }
      SVGFillFilter.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
          var color = this.filterManager.effectElements[2].p.v;
          var opacity = this.filterManager.effectElements[6].p.v;
          this.matrixFilter.setAttribute("values", "0 0 0 0 " + color[0] + " 0 0 0 0 " + color[1] + " 0 0 0 0 " + color[2] + " 0 0 0 " + opacity + " 0");
        }
      };
      function SVGStrokeEffect(fil, filterManager, elem2) {
        this.initialized = false;
        this.filterManager = filterManager;
        this.elem = elem2;
        this.paths = [];
      }
      SVGStrokeEffect.prototype.initialize = function() {
        var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        var path;
        var groupPath;
        var i;
        var len;
        if (this.filterManager.effectElements[1].p.v === 1) {
          len = this.elem.maskManager.masksProperties.length;
          i = 0;
        } else {
          i = this.filterManager.effectElements[0].p.v - 1;
          len = i + 1;
        }
        groupPath = createNS("g");
        groupPath.setAttribute("fill", "none");
        groupPath.setAttribute("stroke-linecap", "round");
        groupPath.setAttribute("stroke-dashoffset", 1);
        for (i; i < len; i += 1) {
          path = createNS("path");
          groupPath.appendChild(path);
          this.paths.push({
            p: path,
            m: i
          });
        }
        if (this.filterManager.effectElements[10].p.v === 3) {
          var mask2 = createNS("mask");
          var id = createElementID();
          mask2.setAttribute("id", id);
          mask2.setAttribute("mask-type", "alpha");
          mask2.appendChild(groupPath);
          this.elem.globalData.defs.appendChild(mask2);
          var g = createNS("g");
          g.setAttribute("mask", "url(" + getLocationHref() + "#" + id + ")");
          while (elemChildren[0]) {
            g.appendChild(elemChildren[0]);
          }
          this.elem.layerElement.appendChild(g);
          this.masker = mask2;
          groupPath.setAttribute("stroke", "#fff");
        } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
          if (this.filterManager.effectElements[10].p.v === 2) {
            elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            while (elemChildren.length) {
              this.elem.layerElement.removeChild(elemChildren[0]);
            }
          }
          this.elem.layerElement.appendChild(groupPath);
          this.elem.layerElement.removeAttribute("mask");
          groupPath.setAttribute("stroke", "#fff");
        }
        this.initialized = true;
        this.pathMasker = groupPath;
      };
      SVGStrokeEffect.prototype.renderFrame = function(forceRender) {
        if (!this.initialized) {
          this.initialize();
        }
        var i;
        var len = this.paths.length;
        var mask2;
        var path;
        for (i = 0; i < len; i += 1) {
          if (this.paths[i].m !== -1) {
            mask2 = this.elem.maskManager.viewData[this.paths[i].m];
            path = this.paths[i].p;
            if (forceRender || this.filterManager._mdf || mask2.prop._mdf) {
              path.setAttribute("d", mask2.lastPath);
            }
            if (forceRender || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || mask2.prop._mdf) {
              var dasharrayValue;
              if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
                var e = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
                var l = path.getTotalLength();
                dasharrayValue = "0 0 0 " + l * s + " ";
                var lineLength = l * (e - s);
                var segment = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
                var units = Math.floor(lineLength / segment);
                var j;
                for (j = 0; j < units; j += 1) {
                  dasharrayValue += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + " ";
                }
                dasharrayValue += "0 " + l * 10 + " 0 0";
              } else {
                dasharrayValue = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
              }
              path.setAttribute("stroke-dasharray", dasharrayValue);
            }
          }
        }
        if (forceRender || this.filterManager.effectElements[4].p._mdf) {
          this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2);
        }
        if (forceRender || this.filterManager.effectElements[6].p._mdf) {
          this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v);
        }
        if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
          if (forceRender || this.filterManager.effectElements[3].p._mdf) {
            var color = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(color[0] * 255) + "," + bmFloor(color[1] * 255) + "," + bmFloor(color[2] * 255) + ")");
          }
        }
      };
      function SVGTritoneFilter(filter, filterManager, elem2, id) {
        this.filterManager = filterManager;
        var feColorMatrix = createNS("feColorMatrix");
        feColorMatrix.setAttribute("type", "matrix");
        feColorMatrix.setAttribute("color-interpolation-filters", "linearRGB");
        feColorMatrix.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0");
        filter.appendChild(feColorMatrix);
        var feComponentTransfer = createNS("feComponentTransfer");
        feComponentTransfer.setAttribute("color-interpolation-filters", "sRGB");
        feComponentTransfer.setAttribute("result", id);
        this.matrixFilter = feComponentTransfer;
        var feFuncR = createNS("feFuncR");
        feFuncR.setAttribute("type", "table");
        feComponentTransfer.appendChild(feFuncR);
        this.feFuncR = feFuncR;
        var feFuncG = createNS("feFuncG");
        feFuncG.setAttribute("type", "table");
        feComponentTransfer.appendChild(feFuncG);
        this.feFuncG = feFuncG;
        var feFuncB = createNS("feFuncB");
        feFuncB.setAttribute("type", "table");
        feComponentTransfer.appendChild(feFuncB);
        this.feFuncB = feFuncB;
        filter.appendChild(feComponentTransfer);
      }
      SVGTritoneFilter.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
          var color1 = this.filterManager.effectElements[0].p.v;
          var color2 = this.filterManager.effectElements[1].p.v;
          var color3 = this.filterManager.effectElements[2].p.v;
          var tableR = color3[0] + " " + color2[0] + " " + color1[0];
          var tableG = color3[1] + " " + color2[1] + " " + color1[1];
          var tableB = color3[2] + " " + color2[2] + " " + color1[2];
          this.feFuncR.setAttribute("tableValues", tableR);
          this.feFuncG.setAttribute("tableValues", tableG);
          this.feFuncB.setAttribute("tableValues", tableB);
        }
      };
      function SVGProLevelsFilter(filter, filterManager, elem2, id) {
        this.filterManager = filterManager;
        var effectElements = this.filterManager.effectElements;
        var feComponentTransfer = createNS("feComponentTransfer");
        if (effectElements[10].p.k || effectElements[10].p.v !== 0 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 1 || effectElements[13].p.k || effectElements[13].p.v !== 0 || effectElements[14].p.k || effectElements[14].p.v !== 1) {
          this.feFuncR = this.createFeFunc("feFuncR", feComponentTransfer);
        }
        if (effectElements[17].p.k || effectElements[17].p.v !== 0 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 1 || effectElements[20].p.k || effectElements[20].p.v !== 0 || effectElements[21].p.k || effectElements[21].p.v !== 1) {
          this.feFuncG = this.createFeFunc("feFuncG", feComponentTransfer);
        }
        if (effectElements[24].p.k || effectElements[24].p.v !== 0 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 1 || effectElements[27].p.k || effectElements[27].p.v !== 0 || effectElements[28].p.k || effectElements[28].p.v !== 1) {
          this.feFuncB = this.createFeFunc("feFuncB", feComponentTransfer);
        }
        if (effectElements[31].p.k || effectElements[31].p.v !== 0 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 1 || effectElements[34].p.k || effectElements[34].p.v !== 0 || effectElements[35].p.k || effectElements[35].p.v !== 1) {
          this.feFuncA = this.createFeFunc("feFuncA", feComponentTransfer);
        }
        if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
          feComponentTransfer.setAttribute("color-interpolation-filters", "sRGB");
          filter.appendChild(feComponentTransfer);
        }
        if (effectElements[3].p.k || effectElements[3].p.v !== 0 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 1 || effectElements[6].p.k || effectElements[6].p.v !== 0 || effectElements[7].p.k || effectElements[7].p.v !== 1) {
          feComponentTransfer = createNS("feComponentTransfer");
          feComponentTransfer.setAttribute("color-interpolation-filters", "sRGB");
          feComponentTransfer.setAttribute("result", id);
          filter.appendChild(feComponentTransfer);
          this.feFuncRComposed = this.createFeFunc("feFuncR", feComponentTransfer);
          this.feFuncGComposed = this.createFeFunc("feFuncG", feComponentTransfer);
          this.feFuncBComposed = this.createFeFunc("feFuncB", feComponentTransfer);
        }
      }
      SVGProLevelsFilter.prototype.createFeFunc = function(type, feComponentTransfer) {
        var feFunc = createNS(type);
        feFunc.setAttribute("type", "table");
        feComponentTransfer.appendChild(feFunc);
        return feFunc;
      };
      SVGProLevelsFilter.prototype.getTableValue = function(inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
        var cnt = 0;
        var segments = 256;
        var perc;
        var min = Math.min(inputBlack, inputWhite);
        var max = Math.max(inputBlack, inputWhite);
        var table = Array.call(null, {
          length: segments
        });
        var colorValue;
        var pos = 0;
        var outputDelta = outputWhite - outputBlack;
        var inputDelta = inputWhite - inputBlack;
        while (cnt <= 256) {
          perc = cnt / 256;
          if (perc <= min) {
            colorValue = inputDelta < 0 ? outputWhite : outputBlack;
          } else if (perc >= max) {
            colorValue = inputDelta < 0 ? outputBlack : outputWhite;
          } else {
            colorValue = outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma);
          }
          table[pos] = colorValue;
          pos += 1;
          cnt += 256 / (segments - 1);
        }
        return table.join(" ");
      };
      SVGProLevelsFilter.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
          var val2;
          var effectElements = this.filterManager.effectElements;
          if (this.feFuncRComposed && (forceRender || effectElements[3].p._mdf || effectElements[4].p._mdf || effectElements[5].p._mdf || effectElements[6].p._mdf || effectElements[7].p._mdf)) {
            val2 = this.getTableValue(effectElements[3].p.v, effectElements[4].p.v, effectElements[5].p.v, effectElements[6].p.v, effectElements[7].p.v);
            this.feFuncRComposed.setAttribute("tableValues", val2);
            this.feFuncGComposed.setAttribute("tableValues", val2);
            this.feFuncBComposed.setAttribute("tableValues", val2);
          }
          if (this.feFuncR && (forceRender || effectElements[10].p._mdf || effectElements[11].p._mdf || effectElements[12].p._mdf || effectElements[13].p._mdf || effectElements[14].p._mdf)) {
            val2 = this.getTableValue(effectElements[10].p.v, effectElements[11].p.v, effectElements[12].p.v, effectElements[13].p.v, effectElements[14].p.v);
            this.feFuncR.setAttribute("tableValues", val2);
          }
          if (this.feFuncG && (forceRender || effectElements[17].p._mdf || effectElements[18].p._mdf || effectElements[19].p._mdf || effectElements[20].p._mdf || effectElements[21].p._mdf)) {
            val2 = this.getTableValue(effectElements[17].p.v, effectElements[18].p.v, effectElements[19].p.v, effectElements[20].p.v, effectElements[21].p.v);
            this.feFuncG.setAttribute("tableValues", val2);
          }
          if (this.feFuncB && (forceRender || effectElements[24].p._mdf || effectElements[25].p._mdf || effectElements[26].p._mdf || effectElements[27].p._mdf || effectElements[28].p._mdf)) {
            val2 = this.getTableValue(effectElements[24].p.v, effectElements[25].p.v, effectElements[26].p.v, effectElements[27].p.v, effectElements[28].p.v);
            this.feFuncB.setAttribute("tableValues", val2);
          }
          if (this.feFuncA && (forceRender || effectElements[31].p._mdf || effectElements[32].p._mdf || effectElements[33].p._mdf || effectElements[34].p._mdf || effectElements[35].p._mdf)) {
            val2 = this.getTableValue(effectElements[31].p.v, effectElements[32].p.v, effectElements[33].p.v, effectElements[34].p.v, effectElements[35].p.v);
            this.feFuncA.setAttribute("tableValues", val2);
          }
        }
      };
      function SVGDropShadowEffect(filter, filterManager, elem2, id, source) {
        var filterSize = filterManager.container.globalData.renderConfig.filterSize;
        filter.setAttribute("x", filterSize.x);
        filter.setAttribute("y", filterSize.y);
        filter.setAttribute("width", filterSize.width);
        filter.setAttribute("height", filterSize.height);
        this.filterManager = filterManager;
        var feGaussianBlur = createNS("feGaussianBlur");
        feGaussianBlur.setAttribute("in", "SourceAlpha");
        feGaussianBlur.setAttribute("result", id + "_drop_shadow_1");
        feGaussianBlur.setAttribute("stdDeviation", "0");
        this.feGaussianBlur = feGaussianBlur;
        filter.appendChild(feGaussianBlur);
        var feOffset = createNS("feOffset");
        feOffset.setAttribute("dx", "25");
        feOffset.setAttribute("dy", "0");
        feOffset.setAttribute("in", id + "_drop_shadow_1");
        feOffset.setAttribute("result", id + "_drop_shadow_2");
        this.feOffset = feOffset;
        filter.appendChild(feOffset);
        var feFlood = createNS("feFlood");
        feFlood.setAttribute("flood-color", "#00ff00");
        feFlood.setAttribute("flood-opacity", "1");
        feFlood.setAttribute("result", id + "_drop_shadow_3");
        this.feFlood = feFlood;
        filter.appendChild(feFlood);
        var feComposite = createNS("feComposite");
        feComposite.setAttribute("in", id + "_drop_shadow_3");
        feComposite.setAttribute("in2", id + "_drop_shadow_2");
        feComposite.setAttribute("operator", "in");
        feComposite.setAttribute("result", id + "_drop_shadow_4");
        filter.appendChild(feComposite);
        var feMerge = this.createMergeNode(id, [id + "_drop_shadow_4", source]);
        filter.appendChild(feMerge);
      }
      extendPrototype([SVGComposableEffect], SVGDropShadowEffect);
      SVGDropShadowEffect.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
          if (forceRender || this.filterManager.effectElements[4].p._mdf) {
            this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4);
          }
          if (forceRender || this.filterManager.effectElements[0].p._mdf) {
            var col = this.filterManager.effectElements[0].p.v;
            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(col[0] * 255), Math.round(col[1] * 255), Math.round(col[2] * 255)));
          }
          if (forceRender || this.filterManager.effectElements[1].p._mdf) {
            this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255);
          }
          if (forceRender || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
            var distance = this.filterManager.effectElements[3].p.v;
            var angle = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
            var x = distance * Math.cos(angle);
            var y = distance * Math.sin(angle);
            this.feOffset.setAttribute("dx", x);
            this.feOffset.setAttribute("dy", y);
          }
        }
      };
      var _svgMatteSymbols = [];
      function SVGMatte3Effect(filterElem, filterManager, elem2) {
        this.initialized = false;
        this.filterManager = filterManager;
        this.filterElem = filterElem;
        this.elem = elem2;
        elem2.matteElement = createNS("g");
        elem2.matteElement.appendChild(elem2.layerElement);
        elem2.matteElement.appendChild(elem2.transformedElement);
        elem2.baseElement = elem2.matteElement;
      }
      SVGMatte3Effect.prototype.findSymbol = function(mask2) {
        var i = 0;
        var len = _svgMatteSymbols.length;
        while (i < len) {
          if (_svgMatteSymbols[i] === mask2) {
            return _svgMatteSymbols[i];
          }
          i += 1;
        }
        return null;
      };
      SVGMatte3Effect.prototype.replaceInParent = function(mask2, symbolId) {
        var parentNode = mask2.layerElement.parentNode;
        if (!parentNode) {
          return;
        }
        var children = parentNode.children;
        var i = 0;
        var len = children.length;
        while (i < len) {
          if (children[i] === mask2.layerElement) {
            break;
          }
          i += 1;
        }
        var nextChild;
        if (i <= len - 2) {
          nextChild = children[i + 1];
        }
        var useElem = createNS("use");
        useElem.setAttribute("href", "#" + symbolId);
        if (nextChild) {
          parentNode.insertBefore(useElem, nextChild);
        } else {
          parentNode.appendChild(useElem);
        }
      };
      SVGMatte3Effect.prototype.setElementAsMask = function(elem2, mask2) {
        if (!this.findSymbol(mask2)) {
          var symbolId = createElementID();
          var masker = createNS("mask");
          masker.setAttribute("id", mask2.layerId);
          masker.setAttribute("mask-type", "alpha");
          _svgMatteSymbols.push(mask2);
          var defs = elem2.globalData.defs;
          defs.appendChild(masker);
          var symbol = createNS("symbol");
          symbol.setAttribute("id", symbolId);
          this.replaceInParent(mask2, symbolId);
          symbol.appendChild(mask2.layerElement);
          defs.appendChild(symbol);
          var useElem = createNS("use");
          useElem.setAttribute("href", "#" + symbolId);
          masker.appendChild(useElem);
          mask2.data.hd = false;
          mask2.show();
        }
        elem2.setMatte(mask2.layerId);
      };
      SVGMatte3Effect.prototype.initialize = function() {
        var ind = this.filterManager.effectElements[0].p.v;
        var elements = this.elem.comp.elements;
        var i = 0;
        var len = elements.length;
        while (i < len) {
          if (elements[i] && elements[i].data.ind === ind) {
            this.setElementAsMask(this.elem, elements[i]);
          }
          i += 1;
        }
        this.initialized = true;
      };
      SVGMatte3Effect.prototype.renderFrame = function() {
        if (!this.initialized) {
          this.initialize();
        }
      };
      function SVGGaussianBlurEffect(filter, filterManager, elem2, id) {
        filter.setAttribute("x", "-100%");
        filter.setAttribute("y", "-100%");
        filter.setAttribute("width", "300%");
        filter.setAttribute("height", "300%");
        this.filterManager = filterManager;
        var feGaussianBlur = createNS("feGaussianBlur");
        feGaussianBlur.setAttribute("result", id);
        filter.appendChild(feGaussianBlur);
        this.feGaussianBlur = feGaussianBlur;
      }
      SVGGaussianBlurEffect.prototype.renderFrame = function(forceRender) {
        if (forceRender || this.filterManager._mdf) {
          var kBlurrinessToSigma = 0.3;
          var sigma = this.filterManager.effectElements[0].p.v * kBlurrinessToSigma;
          var dimensions = this.filterManager.effectElements[1].p.v;
          var sigmaX = dimensions == 3 ? 0 : sigma;
          var sigmaY = dimensions == 2 ? 0 : sigma;
          this.feGaussianBlur.setAttribute("stdDeviation", sigmaX + " " + sigmaY);
          var edgeMode = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
          this.feGaussianBlur.setAttribute("edgeMode", edgeMode);
        }
      };
      registerRenderer("canvas", CanvasRenderer);
      registerRenderer("html", HybridRenderer);
      registerRenderer("svg", SVGRenderer);
      ShapeModifiers.registerModifier("tm", TrimModifier);
      ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier);
      ShapeModifiers.registerModifier("rp", RepeaterModifier);
      ShapeModifiers.registerModifier("rd", RoundCornersModifier);
      setExpressionsPlugin(Expressions);
      initialize$1();
      initialize();
      registerEffect(20, SVGTintFilter, true);
      registerEffect(21, SVGFillFilter, true);
      registerEffect(22, SVGStrokeEffect, false);
      registerEffect(23, SVGTritoneFilter, true);
      registerEffect(24, SVGProLevelsFilter, true);
      registerEffect(25, SVGDropShadowEffect, true);
      registerEffect(28, SVGMatte3Effect, false);
      registerEffect(29, SVGGaussianBlurEffect, true);
      return lottie;
    });
  }
});

// node_modules/react-lottie/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-lottie/dist/index.js"(exports2) {
    init_react();
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    var _extends2 = require_extends();
    var _extends3 = _interopRequireDefault(_extends2);
    var _getPrototypeOf = require_get_prototype_of2();
    var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
    var _classCallCheck2 = require_classCallCheck();
    var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
    var _createClass2 = require_createClass();
    var _createClass3 = _interopRequireDefault(_createClass2);
    var _possibleConstructorReturn2 = require_possibleConstructorReturn();
    var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
    var _inherits2 = require_inherits();
    var _inherits3 = _interopRequireDefault(_inherits2);
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _lottieWeb = require_lottie();
    var _lottieWeb2 = _interopRequireDefault(_lottieWeb);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var Lottie2 = function(_React$Component) {
      (0, _inherits3.default)(Lottie3, _React$Component);
      function Lottie3() {
        var _ref;
        var _temp, _this, _ret;
        (0, _classCallCheck3.default)(this, Lottie3);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Lottie3.__proto__ || (0, _getPrototypeOf2.default)(Lottie3)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickToPause = function() {
          if (_this.anim.isPaused) {
            _this.anim.play();
          } else {
            _this.anim.pause();
          }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }
      (0, _createClass3.default)(Lottie3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _props = this.props, options = _props.options, eventListeners = _props.eventListeners;
          var loop = options.loop, autoplay = options.autoplay, animationData2 = options.animationData, rendererSettings = options.rendererSettings, segments = options.segments;
          this.options = {
            container: this.el,
            renderer: "svg",
            loop: loop !== false,
            autoplay: autoplay !== false,
            segments: segments !== false,
            animationData: animationData2,
            rendererSettings
          };
          this.options = (0, _extends3.default)({}, this.options, options);
          this.anim = _lottieWeb2.default.loadAnimation(this.options);
          this.registerEvents(eventListeners);
        }
      }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps) {
          if (this.options.animationData !== nextProps.options.animationData) {
            this.deRegisterEvents(this.props.eventListeners);
            this.destroy();
            this.options = (0, _extends3.default)({}, this.options, nextProps.options);
            this.anim = _lottieWeb2.default.loadAnimation(this.options);
            this.registerEvents(nextProps.eventListeners);
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (this.props.isStopped) {
            this.stop();
          } else if (this.props.segments) {
            this.playSegments();
          } else {
            this.play();
          }
          this.pause();
          this.setSpeed();
          this.setDirection();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.deRegisterEvents(this.props.eventListeners);
          this.destroy();
          this.options.animationData = null;
          this.anim = null;
        }
      }, {
        key: "setSpeed",
        value: function setSpeed() {
          this.anim.setSpeed(this.props.speed);
        }
      }, {
        key: "setDirection",
        value: function setDirection() {
          this.anim.setDirection(this.props.direction);
        }
      }, {
        key: "play",
        value: function play() {
          this.anim.play();
        }
      }, {
        key: "playSegments",
        value: function playSegments() {
          this.anim.playSegments(this.props.segments);
        }
      }, {
        key: "stop",
        value: function stop() {
          this.anim.stop();
        }
      }, {
        key: "pause",
        value: function pause() {
          if (this.props.isPaused && !this.anim.isPaused) {
            this.anim.pause();
          } else if (!this.props.isPaused && this.anim.isPaused) {
            this.anim.pause();
          }
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.anim.destroy();
        }
      }, {
        key: "registerEvents",
        value: function registerEvents(eventListeners) {
          var _this2 = this;
          eventListeners.forEach(function(eventListener) {
            _this2.anim.addEventListener(eventListener.eventName, eventListener.callback);
          });
        }
      }, {
        key: "deRegisterEvents",
        value: function deRegisterEvents(eventListeners) {
          var _this3 = this;
          eventListeners.forEach(function(eventListener) {
            _this3.anim.removeEventListener(eventListener.eventName, eventListener.callback);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;
          var _props2 = this.props, width2 = _props2.width, height2 = _props2.height, ariaRole = _props2.ariaRole, ariaLabel = _props2.ariaLabel, isClickToPauseDisabled = _props2.isClickToPauseDisabled, title = _props2.title;
          var getSize = function getSize2(initial) {
            var size = void 0;
            if (typeof initial === "number") {
              size = initial + "px";
            } else {
              size = initial || "100%";
            }
            return size;
          };
          var lottieStyles = (0, _extends3.default)({
            width: getSize(width2),
            height: getSize(height2),
            overflow: "hidden",
            margin: "0 auto",
            outline: "none"
          }, this.props.style);
          var onClickHandler = isClickToPauseDisabled ? function() {
            return null;
          } : this.handleClickToPause;
          return _react2.default.createElement("div", {
            ref: function ref(c) {
              _this4.el = c;
            },
            style: lottieStyles,
            onClick: onClickHandler,
            title,
            role: ariaRole,
            "aria-label": ariaLabel,
            tabIndex: "0"
          });
        }
      }]);
      return Lottie3;
    }(_react2.default.Component);
    exports2.default = Lottie2;
    Lottie2.propTypes = {
      eventListeners: _propTypes2.default.arrayOf(_propTypes2.default.object),
      options: _propTypes2.default.object.isRequired,
      height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
      width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
      isStopped: _propTypes2.default.bool,
      isPaused: _propTypes2.default.bool,
      speed: _propTypes2.default.number,
      segments: _propTypes2.default.arrayOf(_propTypes2.default.number),
      direction: _propTypes2.default.number,
      ariaRole: _propTypes2.default.string,
      ariaLabel: _propTypes2.default.string,
      isClickToPauseDisabled: _propTypes2.default.bool,
      title: _propTypes2.default.string
    };
    Lottie2.defaultProps = {
      eventListeners: [],
      isStopped: false,
      isPaused: false,
      speed: 1,
      ariaRole: "button",
      ariaLabel: "animation",
      isClickToPauseDisabled: false,
      title: ""
    };
  }
});

// browser-route-module:/Users/sagarmochi/Applications/brand-tracking/app/routes/tracking/$index.jsx?browser
init_react();

// app/routes/tracking/$index.jsx
init_react();
var import_react2 = __toModule(require_react());

// node_modules/@ant-design/icons/es/icons/DownOutlined.js
init_react();
var React2 = __toModule(require_react());

// node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
init_react();
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
var DownOutlined_default = DownOutlined;

// node_modules/@ant-design/icons/es/icons/DownOutlined.js
var DownOutlined2 = function DownOutlined3(props, ref) {
  return /* @__PURE__ */ React2.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
    ref,
    icon: DownOutlined_default
  }));
};
DownOutlined2.displayName = "DownOutlined";
var DownOutlined_default2 = /* @__PURE__ */ React2.forwardRef(DownOutlined2);

// node_modules/@ant-design/icons/es/icons/UpOutlined.js
init_react();
var React3 = __toModule(require_react());

// node_modules/@ant-design/icons-svg/es/asn/UpOutlined.js
init_react();
var UpOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, "name": "up", "theme": "outlined" };
var UpOutlined_default = UpOutlined;

// node_modules/@ant-design/icons/es/icons/UpOutlined.js
var UpOutlined2 = function UpOutlined3(props, ref) {
  return /* @__PURE__ */ React3.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
    ref,
    icon: UpOutlined_default
  }));
};
UpOutlined2.displayName = "UpOutlined";
var UpOutlined_default2 = /* @__PURE__ */ React3.forwardRef(UpOutlined2);

// app/components/OrderDetails/index.js
init_react();
var import_react = __toModule(require_react());

// app/components/OrderDetails/style.js
init_react();

// node_modules/@ant-design/icons/es/icons/index.js
init_react();

// app/components/OrderDetails/style.js
var MainContainer2 = styled_components_browser_esm_default.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 24px 4px;

  ${media_default.mobile`
    padding: 24px 20px;
  `}

`;
var Container2 = styled_components_browser_esm_default.div`
  border-bottom: 1px solid #edf0f9;
  padding-left : 10px;
  padding-right : 10px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-style: normal;
  color: #38446d;
  .order-placed {
    display: flex;
  }
  .content {
    margin-left: 13px;
    font-size: 18px;
    .subcontent {
      font-weight: 400;
      font-size: 14px;
    }
  }
  .expected {
    font-size: 16px;
  }
  .delivery-info {
    color: #158a2a;
    font-weight: 700;
    font-size: 14px;
  }
  .support {
    font-size: 14px;
    color: #1c439f;
    font-weight: 400;
  }
`;
var Icon = styled_components_browser_esm_default(CheckCircleFilled_default)`
  font-size: 29px;
`;
var OrderInfoContainer = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px 17px 0px;
  border-bottom: 1px solid #edf0f9;
  margin-bottom: 23px;
  .content {
    display: flex;
    @media screen and (max-width: 768px) {
    }
  }
`;
var OrderItem = styled_components_browser_esm_default.div`
  font-size: 16px;
  color: #38446d;
  border-right: 1px solid #c6c8e3;
  padding-right: 4px;
  margin-left : 28px;
  margin-right : 8px;
  .title {
    font-weight: 400;
  }
  .content {
    font-weight: 600;
  }

  ${media_default.mobile`
    padding-right : 0;
    margin-left : 0;
    margin-right : 0;
    border : none;
  `}

  
`;
var ViewButton = styled_components_browser_esm_default(button_default)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 154.96px;
  height: 40px;
  border-radius: 10px !important;
  background-color: #0051bf !important;
  text-align: center !important;
  .ant-btn-primary {
  }
`;
var StatusContainer = styled_components_browser_esm_default.div`
  margin-top : 28px;
  display: flex;
  .stepper-container {
    background: #ffffff;
    border-radius: 10px;
    flex: 0.5;
    padding: 25px;
    overflow-x: hidden;
    height: 487px;
    .steps {
      cursor: pointer;
    }
    .ant-steps-vertical.ant-steps-dot
      .ant-steps-item
      > .ant-steps-item-container
      > .ant-steps-item-tail {
      top: 13px;
      left: -9px;
      margin: 0;
      padding: 0px;
    }
  }
  .brand-details-container {
    background: #ffffff;
    border-radius: 10px;
    flex: 0.5;
    margin-left: 24px;
    font-size: 16px;
    .brand-name {
      padding: 33px 25px 22px;
      border-bottom: 1px solid #c5cde3;
      font-weight: 700;

      color: #000b34;
    }
    .mode-of-payment {
      padding: 10px;
      border-bottom: 1px solid #c5cde3;
      margin: 15px;
      display: flex;
      justify-content: space-between;
      .prepaid {
        font-weight: 700;
        color: #0c3784;
      }
      .payment {
        font-weight: 600;
        color: #38446d;
      }
    }
    .product-name {
      padding: 0px 25px 22px;
      border-bottom: 1px solid #c5cde3;
      overflow-x: hidden;
      height: 200px;

      .product-item {
        font-size: 16px;
        color: #38446d;
        display: flex;
        justify-content: space-between;
        margin-top: 17px;
        margin: 15px;
      }
    }
    @media screen and (max-width: 768px) {
      margin-left: 0px;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
var Stepper = styled_components_browser_esm_default(steps_default)`
  .ant-steps-vertical {
    position: absolute;
    margin-left: -24px;
  }
`;
var Heading = styled_components_browser_esm_default.div`
  font-weight: 700;
  font-size: 18px;
  color: #38446d;
  padding: 0px 25px 22px;
`;
var InnerSteps = styled_components_browser_esm_default(steps_default)`
  .ant-steps .ant-steps-vertical .ant-steps-dot {
    margin-left: 1px;
    z-index: 50000;
  }
  .ant-steps-item-content {
    position: absolute;
    z-index: 10000;
  }
`;

// app/components/OrderDetails/utils/index.js
init_react();
var CheckOrderStatus = (orderStatus) => {
  switch (orderStatus) {
    case "OP":
      return "Order Placed";
    case "OC":
      return "Order Cancelled";
    case "PP":
      return "Order Picked Up";
    case "SHP":
      return "Order Picked Up";
    case "OT":
      return "Order In Transit";
    case "NDR":
      return "Failed Attempt At Delivery";
    case "OO":
      return "Out For Delivery";
    case "DL":
      return "Order Delivered";
    case "RTO":
      return "Order Returned Back";
    default:
      return "-";
  }
};
var Color = (orderStatus) => {
  switch (orderStatus) {
    case "OP":
      return "#38446D";
    case "NDR":
      return "#EF7E00";
    case "DL":
      return "#3B9A00";
    case "OC":
      return "#FA5357";
    default:
      return "#38446D";
  }
};

// app/components/OrderDetails/index.js
var import_react_responsive = __toModule(require_react_responsive());
var import_moment = __toModule(require_moment());
var OrderItems = ({ title, content: content2 }) => {
  return /* @__PURE__ */ import_react.default.createElement(OrderItem, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "title"
  }, title), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "content"
  }, content2));
};
var icons = {
  NDR: "https://d10srchmli830n.cloudfront.net/1653565865471_254a535d-5d10-491b-8e14-4c764f67c868_Group-27878.svg",
  DL: "https://d10srchmli830n.cloudfront.net/1653565931591_dea56aa1-7282-4cce-b881-01a0b11163a6_Vector-(2).svg",
  RTO: "https://d10srchmli830n.cloudfront.net/1653565990655_f82a51ec-34ae-429c-8c5e-962691834a2d_Group-27880.svg",
  OC: "https://d10srchmli830n.cloudfront.net/1653566478662_7159942a-b837-4bbf-a7f2-32f0b54e1e00_States---Popups-icons.svg",
  PP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  OP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  SHP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  OO: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg"
};
var OrderDetails = ({
  status,
  statusType,
  courier,
  orderDate,
  orderId,
  lastUpdate,
  isMultiOrder,
  itemList,
  trackArr,
  expectedDelivery,
  is_cod,
  resData
}) => {
  const [isViewMore, setIsViewMore] = (0, import_react.useState)(false);
  const [showNestedStepper, setShowNestedStepper] = (0, import_react.useState)(false);
  const isMobileDevice = (0, import_react_responsive.useMediaQuery)({
    query: "(max-device-width: 768px)"
  });
  const { Step } = steps_default;
  const totalInvoice = itemList?.map((item) => item.price).reduce((a, b) => a + b);
  if (resData.err) {
    return /* @__PURE__ */ import_react.default.createElement(MainContainer2, {
      style: { color: "#FF0006" }
    }, "Tracking Id Not Found");
  }
  return /* @__PURE__ */ import_react.default.createElement("div", null, !isMobileDevice ? /* @__PURE__ */ import_react.default.createElement(MainContainer2, null, /* @__PURE__ */ import_react.default.createElement(Container2, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "order-placed"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: icons[statusType],
    height: 29,
    width: 29
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    style: {
      color: Color(statusType)
    }
  }, CheckOrderStatus(statusType)), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "subcontent"
  }, "Last updated on", " ", (0, import_moment.default)(lastUpdate)?.format("MMMM Do YYYY, h:mm a")))), status !== "delivered" && /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "expected"
  }, "Expected Delivery "), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "delivery-info"
  }, (0, import_moment.default)(expectedDelivery)?.format("MMMM Do YYYY"))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "support"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "",
    target: "_blank"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: "https://d10srchmli830n.cloudfront.net/1654157170763_7e79ffc0-a8b6-43e3-a113-9b2c5aad2eb0_whatsapp_share.svg",
    alt: "wtsp-share"
  })))), /* @__PURE__ */ import_react.default.createElement(row_default, {
    style: { marginTop: "12px" }
  }, /* @__PURE__ */ import_react.default.createElement(col_default, {
    xl: 5,
    lg: 5
  }, /* @__PURE__ */ import_react.default.createElement(OrderItems, {
    title: "Order Date",
    content: (0, import_moment.default)(orderDate)?.format("MMMM Do YYYY")
  })), /* @__PURE__ */ import_react.default.createElement(col_default, {
    xl: 5,
    lg: 5
  }, /* @__PURE__ */ import_react.default.createElement(OrderItems, {
    title: "Order ID ",
    content: orderId
  })), /* @__PURE__ */ import_react.default.createElement(col_default, {
    xl: 5,
    lg: 5
  }, /* @__PURE__ */ import_react.default.createElement(OrderItems, {
    title: "Courier",
    content: courier
  })), /* @__PURE__ */ import_react.default.createElement(col_default, {
    xl: 9,
    lg: 9
  }, /* @__PURE__ */ import_react.default.createElement(FlexContainer, null, /* @__PURE__ */ import_react.default.createElement(OrderItem, {
    style: { borderRight: 0 }
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "title"
  }, "Payment Mode"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "content"
  }, "Prepaid")), (statusType === "NDR" || statusType === "DL") && /* @__PURE__ */ import_react.default.createElement(button_default, {
    type: "ghost",
    style: {
      borderRadius: "10px",
      color: "#1C439F",
      marginLeft: "10px"
    }
  }, statusType === "DL" ? "Return Order" : "Request for Reattempt")))), /* @__PURE__ */ import_react.default.createElement(divider_default, null)) : /* @__PURE__ */ import_react.default.createElement(MainContainer2, null, /* @__PURE__ */ import_react.default.createElement(row_default, null, /* @__PURE__ */ import_react.default.createElement(col_default, {
    sm: 24,
    xs: 24
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    }
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: icons[status]
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "content",
    style: { marginLeft: "10px" }
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    style: { color: Color(status) }
  }, CheckOrderStatus(status)), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "subcontent"
  }, "Last updated on", " ", (0, import_moment.default)(lastUpdate)?.format("MMMM Do YYYY, h:mm a")))))), /* @__PURE__ */ import_react.default.createElement(SpaceBetweenContainer, {
    style: { marginTop: "12px", alignItems: "flex-start" }
  }, status !== "delivered" && /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "expected"
  }, "Expected Delivery "), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "delivery-info"
  }, (0, import_moment.default)(expectedDelivery)?.format("MMMM Do YYYY"))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "support"
  }, /* @__PURE__ */ import_react.default.createElement("a", null, /* @__PURE__ */ import_react.default.createElement("img", {
    src: "https://d10srchmli830n.cloudfront.net/1654157170763_7e79ffc0-a8b6-43e3-a113-9b2c5aad2eb0_whatsapp_share.svg",
    alt: "wtsp-share"
  })))), /* @__PURE__ */ import_react.default.createElement(SpaceBetweenContainer, {
    style: { marginTop: "12px" }
  }, /* @__PURE__ */ import_react.default.createElement(OrderItems, {
    title: "Order Date",
    content: "4 April 2022"
  }), /* @__PURE__ */ import_react.default.createElement(OrderItems, {
    title: "Order ID ",
    content: "534524TRRDD"
  })), /* @__PURE__ */ import_react.default.createElement(SpaceBetweenContainer, {
    style: { marginTop: "12px" }
  }, /* @__PURE__ */ import_react.default.createElement(OrderItems, {
    title: "Courier",
    content: "Ekart"
  }), /* @__PURE__ */ import_react.default.createElement(OrderItems, {
    title: "Payment Mode",
    content: "Prepaid"
  }))), isMultiOrder && /* @__PURE__ */ import_react.default.createElement("div", {
    style: { textAlign: "center", marginTop: "-15px" },
    onClick: () => setIsViewMore(!isViewMore)
  }, /* @__PURE__ */ import_react.default.createElement(ViewButton, {
    type: "primary",
    size: "large"
  }, isViewMore ? "Hide" : "View", " Details", " ", isViewMore ? /* @__PURE__ */ import_react.default.createElement(UpOutlined_default2, null) : /* @__PURE__ */ import_react.default.createElement(DownOutlined_default2, null))), (isViewMore || !isMultiOrder && !isViewMore) && /* @__PURE__ */ import_react.default.createElement(StatusContainer, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "stepper-container"
  }, /* @__PURE__ */ import_react.default.createElement(Stepper, {
    progressDot: true,
    current: trackArr?.length,
    direction: "vertical"
  }, trackArr?.map((track, index2) => {
    return /* @__PURE__ */ import_react.default.createElement(Step, {
      title: track?.status_array[0]?.status_body,
      description: "Last updated on -April 1st 2022 - 12:00 pm",
      key: index2
    });
  }))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "brand-details-container"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "brand-name"
  }, "Brand Name"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mode-of-payment"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, "Mode of payment :"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "prepaid"
  }, !is_cod ? "Prepaid" : "Prepaid")), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(Heading, null, "Product Details :"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "product-name"
  }, itemList?.map((item, index2) => {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "product-item"
    }, /* @__PURE__ */ import_react.default.createElement("div", null, "1"), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", null, item.item_name), /* @__PURE__ */ import_react.default.createElement("div", null, "Qty : ", item.quantity)), /* @__PURE__ */ import_react.default.createElement("div", {
      className: "prepaid"
    }, "\u20B9", item.price));
  }))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mode-of-payment"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, "Total"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "prepaid"
  }, "\u20B9", totalInvoice)))));
};
var OrderDetails_default = OrderDetails;

// app/routes/tracking/$index.jsx
var import_react_responsive2 = __toModule(require_react_responsive());
var import_react_lottie = __toModule(require_dist());

// app/components/LottieAnimation/CarLoader.json
var v = "5.1.15";
var fr = 60;
var ip = 0;
var op = 120;
var w = 300;
var h = 300;
var nm = "Composi\xE7\xE3o 1";
var ddd = 0;
var assets = [];
var layers = [
  {
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: "Camada de forma 1",
    sr: 1,
    ks: {
      o: { a: 0, k: 100, ix: 11 },
      r: {
        a: 1,
        k: [
          {
            i: { x: [0.833], y: [0.833] },
            o: { x: [0.167], y: [0.167] },
            n: ["0p833_0p833_0p167_0p167"],
            t: 0,
            s: [0],
            e: [1080]
          },
          { t: 180 }
        ],
        ix: 10
      },
      p: { a: 0, k: [150, 150, 0], ix: 2 },
      a: { a: 0, k: [-14.604, -15.104, 0], ix: 1 },
      s: { a: 0, k: [100, 100, 100], ix: 6 }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            d: 1,
            ty: "el",
            s: { a: 0, k: [106.793, 106.793], ix: 2 },
            p: { a: 0, k: [0, 0], ix: 3 },
            nm: "Caminho da elipse 1",
            mn: "ADBE Vector Shape - Ellipse",
            hd: false
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                0.14901960784313725,
                0.24705882352941178,
                0.592156862745098,
                1
              ],
              ix: 3
            },
            o: { a: 0, k: 100, ix: 4 },
            w: { a: 0, k: 11, ix: 5 },
            lc: 2,
            lj: 1,
            ml: 4,
            nm: "Tra\xE7ado 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: false
          },
          {
            ty: "tr",
            p: { a: 0, k: [-14.604, -15.104], ix: 2 },
            a: { a: 0, k: [0, 0], ix: 1 },
            s: { a: 0, k: [100, 100], ix: 3 },
            r: { a: 0, k: 0, ix: 6 },
            o: { a: 0, k: 100, ix: 7 },
            sk: { a: 0, k: 0, ix: 4 },
            sa: { a: 0, k: 0, ix: 5 },
            nm: "Transformar"
          }
        ],
        nm: "Elipse 1",
        np: 3,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "tm",
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 0,
              s: [0],
              e: [0]
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 60,
              s: [0],
              e: [67]
            },
            { t: 119 }
          ],
          ix: 1
        },
        e: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 0,
              s: [3],
              e: [70]
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 60,
              s: [70],
              e: [70]
            },
            { t: 119 }
          ],
          ix: 2
        },
        o: { a: 0, k: 0, ix: 3 },
        m: 1,
        ix: 2,
        nm: "Aparar caminhos 1",
        mn: "ADBE Vector Filter - Trim",
        hd: false
      }
    ],
    ip: 0,
    op: 900,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 2,
    ty: 4,
    nm: "Camada de forma 2",
    sr: 1,
    ks: {
      o: { a: 0, k: 100, ix: 11 },
      r: {
        a: 1,
        k: [
          {
            i: { x: [0.833], y: [0.833] },
            o: { x: [0.167], y: [0.167] },
            n: ["0p833_0p833_0p167_0p167"],
            t: 0,
            s: [0],
            e: [1080]
          },
          { t: 180 }
        ],
        ix: 10
      },
      p: { a: 0, k: [150, 150, 0], ix: 2 },
      a: { a: 0, k: [-14.604, -15.104, 0], ix: 1 },
      s: { a: 0, k: [100, 100, 100], ix: 6 }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            d: 1,
            ty: "el",
            s: { a: 0, k: [106.793, 106.793], ix: 2 },
            p: { a: 0, k: [0, 0], ix: 3 },
            nm: "Caminho da elipse 1",
            mn: "ADBE Vector Shape - Ellipse",
            hd: false
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                0.09803921568627451,
                0.5450980392156862,
                0.984313725490196,
                1
              ],
              ix: 3
            },
            o: { a: 0, k: 100, ix: 4 },
            w: { a: 0, k: 10, ix: 5 },
            lc: 2,
            lj: 1,
            ml: 4,
            nm: "Tra\xE7ado 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: false
          },
          {
            ty: "tr",
            p: { a: 0, k: [-14.604, -15.104], ix: 2 },
            a: { a: 0, k: [0, 0], ix: 1 },
            s: { a: 0, k: [100, 100], ix: 3 },
            r: { a: 0, k: 0, ix: 6 },
            o: { a: 0, k: 100, ix: 7 },
            sk: { a: 0, k: 0, ix: 4 },
            sa: { a: 0, k: 0, ix: 5 },
            nm: "Transformar"
          }
        ],
        nm: "Elipse 1",
        np: 3,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "tm",
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 20,
              s: [0],
              e: [0]
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 69.916,
              s: [0],
              e: [67]
            },
            { t: 119 }
          ],
          ix: 1
        },
        e: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 20,
              s: [3],
              e: [70]
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 69.916,
              s: [70],
              e: [70]
            },
            { t: 119 }
          ],
          ix: 2
        },
        o: { a: 0, k: 0, ix: 3 },
        m: 1,
        ix: 2,
        nm: "Aparar caminhos 1",
        mn: "ADBE Vector Filter - Trim",
        hd: false
      }
    ],
    ip: 0,
    op: 900,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 3,
    ty: 4,
    nm: "Camada de forma 3",
    sr: 1,
    ks: {
      o: { a: 0, k: 100, ix: 11 },
      r: {
        a: 1,
        k: [
          {
            i: { x: [0.833], y: [0.833] },
            o: { x: [0.167], y: [0.167] },
            n: ["0p833_0p833_0p167_0p167"],
            t: 0,
            s: [0],
            e: [1080]
          },
          { t: 180 }
        ],
        ix: 10
      },
      p: { a: 0, k: [150, 150, 0], ix: 2 },
      a: { a: 0, k: [-14.604, -15.104, 0], ix: 1 },
      s: { a: 0, k: [100, 100, 100], ix: 6 }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            d: 1,
            ty: "el",
            s: { a: 0, k: [106.793, 106.793], ix: 2 },
            p: { a: 0, k: [0, 0], ix: 3 },
            nm: "Caminho da elipse 1",
            mn: "ADBE Vector Shape - Ellipse",
            hd: false
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [1, 0.4588235294117647, 0.4235294117647059, 1],
              ix: 3
            },
            o: { a: 0, k: 100, ix: 4 },
            w: { a: 0, k: 10, ix: 5 },
            lc: 2,
            lj: 1,
            ml: 4,
            nm: "Tra\xE7ado 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: false
          },
          {
            ty: "tr",
            p: { a: 0, k: [-14.604, -15.104], ix: 2 },
            a: { a: 0, k: [0, 0], ix: 1 },
            s: { a: 0, k: [100, 100], ix: 3 },
            r: { a: 0, k: 0, ix: 6 },
            o: { a: 0, k: 100, ix: 7 },
            sk: { a: 0, k: 0, ix: 4 },
            sa: { a: 0, k: 0, ix: 5 },
            nm: "Transformar"
          }
        ],
        nm: "Elipse 1",
        np: 3,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "tm",
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 41,
              s: [0],
              e: [0]
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 80.328,
              s: [0],
              e: [67]
            },
            { t: 119 }
          ],
          ix: 1
        },
        e: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 41,
              s: [3],
              e: [70]
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 80.328,
              s: [70],
              e: [70]
            },
            { t: 119 }
          ],
          ix: 2
        },
        o: { a: 0, k: 0, ix: 3 },
        m: 1,
        ix: 2,
        nm: "Aparar caminhos 1",
        mn: "ADBE Vector Filter - Trim",
        hd: false
      }
    ],
    ip: 0,
    op: 900,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 4,
    ty: 4,
    nm: "Camada de forma 4",
    sr: 1,
    ks: {
      o: { a: 0, k: 100, ix: 11 },
      r: {
        a: 1,
        k: [
          {
            i: { x: [0.833], y: [0.833] },
            o: { x: [0.167], y: [0.167] },
            n: ["0p833_0p833_0p167_0p167"],
            t: 0,
            s: [0],
            e: [1080]
          },
          { t: 180 }
        ],
        ix: 10
      },
      p: { a: 0, k: [150, 150, 0], ix: 2 },
      a: { a: 0, k: [-14.604, -15.104, 0], ix: 1 },
      s: { a: 0, k: [100, 100, 100], ix: 6 }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            d: 1,
            ty: "el",
            s: { a: 0, k: [106.793, 106.793], ix: 2 },
            p: { a: 0, k: [0, 0], ix: 3 },
            nm: "Caminho da elipse 1",
            mn: "ADBE Vector Shape - Ellipse",
            hd: false
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [0.9647058823529412, 0.9764705882352941, 1, 1],
              ix: 3
            },
            o: { a: 0, k: 100, ix: 4 },
            w: { a: 0, k: 10, ix: 5 },
            lc: 2,
            lj: 1,
            ml: 4,
            nm: "Tra\xE7ado 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: false
          },
          {
            ty: "tr",
            p: { a: 0, k: [-14.604, -15.104], ix: 2 },
            a: { a: 0, k: [0, 0], ix: 1 },
            s: { a: 0, k: [100, 100], ix: 3 },
            r: { a: 0, k: 0, ix: 6 },
            o: { a: 0, k: 100, ix: 7 },
            sk: { a: 0, k: 0, ix: 4 },
            sa: { a: 0, k: 0, ix: 5 },
            nm: "Transformar"
          }
        ],
        nm: "Elipse 1",
        np: 3,
        cix: 2,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "tm",
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 54,
              s: [0],
              e: [0]
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 86.773,
              s: [0],
              e: [67]
            },
            { t: 119 }
          ],
          ix: 1
        },
        e: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 54,
              s: [3],
              e: [70]
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              n: ["0p833_0p833_0p167_0p167"],
              t: 86.773,
              s: [70],
              e: [70]
            },
            { t: 119 }
          ],
          ix: 2
        },
        o: { a: 0, k: 0, ix: 3 },
        m: 1,
        ix: 2,
        nm: "Aparar caminhos 1",
        mn: "ADBE Vector Filter - Trim",
        hd: false
      }
    ],
    ip: 0,
    op: 900,
    st: 0,
    bm: 0
  }
];
var markers = [];
var CarLoader_default = {
  v,
  fr,
  ip,
  op,
  w,
  h,
  nm,
  ddd,
  assets,
  layers,
  markers
};

// app/routes/tracking/$index.jsx
var loaderOptions = {
  loop: true,
  autoplay: true,
  animationData: CarLoader_default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
function TrackingDetails() {
  const loaderData = useLoaderData();
  const context = (0, import_react2.useContext)(data_context_default);
  const [data2, setData] = (0, import_react2.useState)({
    ...loaderData
  });
  const [trackingId, setTrackingId] = (0, import_react2.useState)("");
  const [isError, setIsError] = (0, import_react2.useState)({
    errorStatus: false,
    message: ""
  });
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const { other: brandUIData } = context?.sellerData;
  const footerData = context?.sellerData?.other?.footer;
  const isMultiOrder = data2?.response_list ? true : false;
  const isMobileDevice = (0, import_react_responsive2.useMediaQuery)({
    query: "(max-device-width: 768px)"
  });
  const handleClick = async () => {
    if (!trackingId) {
      notification_default.error({ message: "Please enter Tracking ID" });
      return;
    } else {
      setIsLoading(true);
      const data3 = await getTrackingDetails(trackingId);
      setData({ ...data3 });
      setIsLoading(false);
    }
  };
  (0, import_react2.useEffect)(() => {
    if (data2?.err) {
      setIsError({ errorStatus: true, message: data2.err });
    } else {
      setIsError({ errorStatus: false, message: "" });
    }
  }, [data2]);
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement(Container, null, /* @__PURE__ */ import_react2.default.createElement("div", {
    style: { padding: `${isMobileDevice ? "8px" : ""}` }
  }, /* @__PURE__ */ import_react2.default.createElement(Title, null, "Order Tracking Details"), /* @__PURE__ */ import_react2.default.createElement(row_default, {
    gutter: [44, 18]
  }, /* @__PURE__ */ import_react2.default.createElement(col_default, {
    xl: 18,
    lg: 18,
    sm: 24,
    xs: 24
  }, /* @__PURE__ */ import_react2.default.createElement(CustomInput, {
    placeholder: "Enter Tracking ID (Comma separated if multiple)",
    onChange: (e) => {
      setTrackingId(e.target.value);
    },
    enterbutton: "Track",
    size: "large",
    value: trackingId,
    allowClear: true
  })), /* @__PURE__ */ import_react2.default.createElement(col_default, {
    xl: 6,
    lg: 6,
    sm: 24,
    xs: 24
  }, /* @__PURE__ */ import_react2.default.createElement(CustomButton, {
    type: "primary",
    onClick: handleClick
  }, "Track Order"))), isError.errorStatus && /* @__PURE__ */ import_react2.default.createElement("div", {
    style: { color: "#FF0006", marginTop: "8px" }
  }, isError.message), /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: brandUIData?.banner.url,
    alt: "brand-img",
    style: {
      margin: "16px 0",
      border: "1px solid tranparent",
      borderRadius: "10px",
      width: "100%"
    }
  }))), isLoading ? /* @__PURE__ */ import_react2.default.createElement(import_react_lottie.default, {
    options: loaderOptions,
    height: 250,
    width: 250
  }) : !data2?.err && /* @__PURE__ */ import_react2.default.createElement(MainContainer, null, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "order-info-container"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    style: { marginBottom: "30px" }
  }, isMultiOrder ? data2?.response_list?.map((trackingData, index2) => {
    const {
      courier_used,
      status,
      order_created_at,
      client_order_id,
      edd_stamp,
      last_update_from_order_ms,
      item_list,
      track_arr,
      is_cod
    } = trackingData;
    return /* @__PURE__ */ import_react2.default.createElement("div", {
      style: { marginBottom: "30px" },
      key: index2
    }, /* @__PURE__ */ import_react2.default.createElement(OrderDetails_default, {
      courier: courier_used,
      status: status?.current_status_body,
      statusType: status?.current_status_type,
      orderDate: order_created_at,
      orderId: client_order_id,
      expectedDelivery: edd_stamp,
      lastUpdate: last_update_from_order_ms,
      isMultiOrder,
      itemList: item_list,
      trackArr: track_arr,
      is_cod,
      resData: trackingData
    }));
  }) : /* @__PURE__ */ import_react2.default.createElement(OrderDetails_default, {
    courier: data2?.courier_used,
    status: data2?.status?.current_status_body,
    statusType: data2?.status?.current_status_type,
    orderDate: data2?.order_created_at,
    orderId: data2?.client_order_id,
    expectedDelivery: data2?.edd_stamp,
    lastUpdate: data2?.last_update_from_order_ms,
    isMultiOrder,
    itemList: data2?.item_list,
    trackArr: data2?.track_arr,
    is_cod: data2?.is_cod,
    resData: data2
  })))), /* @__PURE__ */ import_react2.default.createElement(MainContainer, {
    style: { padding: "0", background: "transparent" }
  }, /* @__PURE__ */ import_react2.default.createElement(SellerProductDetails_default, {
    brandUIData
  }), /* @__PURE__ */ import_react2.default.createElement(FooterDetails_default, {
    footerData,
    context
  }))), /* @__PURE__ */ import_react2.default.createElement(Footer, {
    src: "https://d10srchmli830n.cloudfront.net/1652867194453_e3b1cfc2-46b6-4959-b1e5-c2d02f51c30a_Group-27611.svg"
  }));
}
var index_default = TrackingDetails;
export {
  index_default as default
};
/*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! moment.js
//! momentjs.com
//! version : 2.29.3
//# sourceMappingURL=/build/routes/tracking/$index-M4TNKVQI.js.map
