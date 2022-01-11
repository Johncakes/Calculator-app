"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = exports.TopFunctions = exports.SideFunctions = void 0;
const react_1 = __importDefault(require("react"));
function buttonNums(nums, setClickedButton) {
    return (react_1.default.createElement("div", { className: "flex flex-row justify-evenly text-white" },
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => setClickedButton((nums).toString()) }, nums),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => setClickedButton((nums + 1).toString()) }, nums + 1),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => setClickedButton((nums + 2).toString()) }, nums + 2)));
}
function SideFunctions(props) {
    return (react_1.default.createElement("div", { className: "flex flex-col text-white" },
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton('/') }, "\u00F7"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton('*') }, "x"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton('-') }, "-"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton('+') }, "+"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-green-700\r\n         flex items-center justify-center m-2", onClick: () => props.setClickedButton('=') }, "=")));
}
exports.SideFunctions = SideFunctions;
function TopFunctions(props) {
    return (react_1.default.createElement("div", { className: "flex justify-evenly text-white" },
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton('clear') }, "C"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton('()') }, "( )"),
        react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton('%') }, "%")));
}
exports.TopFunctions = TopFunctions;
function Numbers(props) {
    let numberList = [];
    for (let i = 0; i < 9; i += 3) {
        numberList.push(react_1.default.createElement("li", { key: i }, buttonNums(i + 1, props.setClickedButton)));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex flex-col" },
            react_1.default.createElement("ul", { className: "flex flex-col-reverse" }, numberList)),
        react_1.default.createElement("div", { className: "flex flex-col" },
            react_1.default.createElement("div", { className: "flex justify-evenly text-white" },
                react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton((-1).toString()) }, "+/-"),
                react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton('0') }, "0"),
                react_1.default.createElement("button", { className: "rounded-full w-16 h-16 bg-neutral-700 flex items-center justify-center m-2", onClick: () => props.setClickedButton('.') }, ".")))));
}
exports.Numbers = Numbers;
