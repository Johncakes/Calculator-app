"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
require("./index.css");
const button_1 = require("./button");
const calc_1 = require("./calc");
function App() {
    const [totalValue, setTotalValue] = (0, react_2.useState)(0);
    const [display, setDisplay] = (0, react_2.useState)('0');
    const [clickedNumber, setClickedNumber] = (0, react_2.useState)('');
    const [clickedOperator, setClickedOperator] = (0, react_2.useState)('');
    const [clickedButton, setClickedButton] = (0, react_2.useState)('');
    (0, calc_1.Calc)(clickedButton, totalValue, display, setTotalValue, setDisplay, setClickedButton);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'flex justify-center items-center w-full h-screen' },
            react_1.default.createElement("div", { className: 'flex flex-col justify-center items-end w-80 h-4/6 bg-black rounded-md' },
                react_1.default.createElement("div", { className: "flex flex-col-reverse w-full h-1/4 rounded-t-sm bg-slate-100" },
                    react_1.default.createElement("div", { className: "flex flex-row-reverse text-4xl w-full" }, display)),
                react_1.default.createElement("div", { className: 'flex justify-center items-center w-full h-3/4 p-3 bg-zinc-900' },
                    react_1.default.createElement("div", { className: 'flex flex-col' },
                        react_1.default.createElement(button_1.TopFunctions, { setClickedButton: setClickedButton }),
                        react_1.default.createElement(button_1.Numbers, { setClickedButton: setClickedButton })),
                    react_1.default.createElement("div", { className: "flex" },
                        react_1.default.createElement(button_1.SideFunctions, { setClickedButton: setClickedButton })))))));
}
exports.default = App;
