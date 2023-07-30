import { Coord } from "../libs/Coord";
import { Hex } from "./Hex";

export class HexGrid {
    private nodeArray: Hex[] = [];

    constructor(nodes: Hex[]);
    constructor(nodes: Coord[], size: number);

    constructor(nodes: Hex[] | Coord[], size?: number) {
        for (let i = 0; i < nodes.length; i++) {
            let node = nodes[i];
            if (node instanceof Hex) {
                this.addNode(node);
            } else if (size !== undefined) {
                this.addNode(new Hex(node[0], node[1], size));
            } else {
                throw new Error(
                    `${node} is not instance of Hex and size is undefined`
                );
            }
        }
    }

    public addNode(node: Hex) {
        const baseSize = this.nodeArray[0]?.radius;

        if (baseSize !== undefined && node.radius !== baseSize) {
            throw new Error(
                `Attempted to add a node with a different radius. Radius is ${node.radius} instead of ${baseSize}`
            );
        }

        this.nodeArray.push(node);
    }
}
