import { newRenderer } from "./renderer.js";
import { newRectangle } from "./shapes/rectangle.js";

const rectangle = newRectangle(2, 3); // 使用工厂函数创建 Rectangle
const renderer = newRenderer(rectangle); // Renderer 依赖于通用的 Shape 接口
renderer.draw();