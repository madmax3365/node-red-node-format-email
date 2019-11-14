import { parseRaw } from 'email-body-cleaner';
import { Node, NodeProperties, Red } from 'node-red';

import {
  IFormattedNodeRedMessage,
  IStandardNodeRedMessage,
} from './interfaces';

export = (RED: Red) => {
  RED.nodes.registerType('mail-clean-body', function(
    this: Node,
    config: NodeProperties,
  ) {
    RED.nodes.createNode(this, config);
    const node = this;
    node.on('input', (msg: IStandardNodeRedMessage) => {
      const newMsg = msg as IFormattedNodeRedMessage;
      newMsg.formatted = parseRaw(msg.payload);
      node.send(newMsg);
    });
  });
};
