"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = exports.TopFunctions = exports.SideFunctions = void 0;
const react_1 = __importDefault(require("react"));
function buttonNums(nums, setClickedButton, clickedButton) {
    let list = [];
    for (let i = 3; i > 0; i--) {
        list.push(react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => setClickedButton((nums - i)).toString() }, nums - i));
    }
    return (react_1.default.createElement("div", { className: "flex justify-evenly text-white" }, list));
}
function SideFunctions(props) {
    return (react_1.default.createElement("div", { className: "flex flex-col text-white" },
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton('0') }, "\u00F7"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton((props.totalValue / 10).toString()) }, "x"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton((props.totalValue / 10).toString()) }, "-"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton((props.totalValue / 10).toString()) }, "+"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-green-700\r\n         flex items-center justify-center m-2", onClick: () => props.setClickedButton((props.totalValue / 10).toString()) }, "=")));
}
exports.SideFunctions = SideFunctions;
function TopFunctions(props) {
    return (react_1.default.createElement("div", { className: "flex justify-evenly text-white" },
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton(0) }, "C"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2" }, "( )"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton((props.totalValue * 0.01).toString()) }, "%")));
}
exports.TopFunctions = TopFunctions;
function Numbers(props) {
    let numberList = [];
    for (let i = 9; i > 0; i -= 3) {
        numberList.push(buttonNums(i + 1, props.setClickedButton, props.clickedButton));
    }
    return (react_1.default.createElement("div", { className: "flex flex-col" },
        numberList,
        react_1.default.createElement("div", { className: "flex justify-evenly text-white" },
            react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton(props.clickedButton * -1) }, "+/-"),
            react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton(props.clickedButton * 10) }, "0"),
            react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2" }, "."))));
}
exports.Numbers = Numbers;
