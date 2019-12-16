"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const context_1 = require("./context");
const vfx_player_1 = __importDefault(require("./vfx-player"));
const canvasStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 9999,
    pointerEvents: "none"
};
exports.VFXProvider = props => {
    const [player, setPlayer] = react_1.useState(null);
    const canvasRef = react_1.useRef(null);
    react_1.useEffect(() => {
        if (canvasRef.current == null) {
            return;
        }
        const player = new vfx_player_1.default(canvasRef.current);
        setPlayer(player);
        player.play();
        return () => {
            player.stop();
        };
    }, [canvasRef]);
    return (React.createElement(React.Fragment, null,
        React.createElement("canvas", { ref: canvasRef, style: canvasStyle }),
        React.createElement(context_1.VFXContext.Provider, { value: player }, props.children)));
};
exports.default = exports.VFXProvider;
//# sourceMappingURL=provider.js.map