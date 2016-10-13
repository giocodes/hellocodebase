import paper from 'paper';
import PaperNode from './PaperNode';
import DefinitionNode from './DefinitionNode';
import InvocationNode from './InvocationNode';
import Edge from './Edge';
import Legend from './Legend';

class Paper {

  constructor(canvas, toggleActiveFn, toggleHoverFn, toggleHighlightedFn, highlightedNodeId, toggleMouseLocFn, toggleLegendFn){
    paper.setup(canvas);
    this.canvas = canvas;
    this.center = paper.project.view.center;
    this.activeNodes = [];
    this.toggleLegend = toggleLegendFn;
    this.toggleActive = toggleActiveFn;
    this.toggleHover = toggleHoverFn;
    this.toggleHighlighted = toggleHighlightedFn;
    this.highlightedNodeId = highlightedNodeId;
    this.toggleMouseLoc = toggleMouseLocFn;
    this.topPadding = 30;
    this.maxNodeHeight = 60;
  }

  clearScreen() {
    paper.project.clear();
    this.activeNodes = [];
  }


  //paperNode is a reference to a paperNode object which has the node props
  //as well as some position data
  drawTree(startingNodeId, nodeList) {
    const startingNode = nodeList[startingNodeId-1];
    let paperNode = this.drawNode(startingNode, this.center.x, this.center.y + this.topPadding, this.maxNodeHeight, 'center');
    console.log('heres the active node information, ', paperNode)
    paperNode.colorAsActive();
    this.drawConnectedNodes(paperNode, nodeList, true);
    this.drawConnectedNodes(paperNode, nodeList, false);
    this.drawLegend();
  }

  drawConnectedNodes(paperNode, nodeList, isOutgoing){
    let textAlign = isOutgoing ? 'right' : 'left';
    let connectedDefinitionNodes = isOutgoing ? paperNode.outgoingDefinition : paperNode.incomingDefinition;
    let connectedBodyNodes = isOutgoing ? paperNode.outgoingBody : paperNode.incomingBody;
    let numOfEdges = connectedDefinitionNodes.length + connectedBodyNodes.length;
    let spacePerNode = this.calculateVerticalSpacePerNode(numOfEdges);
    let nodeHeight = spacePerNode * 0.7 <= this.maxNodeHeight ? spacePerNode * 0.7 : this.maxNodeHeight;
    let paddingTop = (spacePerNode - nodeHeight) / 2;
    let currentY = paddingTop + this.topPadding;

    let horizOffsetValue = this.calculateHorizontalOffset();
    let horizontalOffset = isOutgoing ? horizOffsetValue : -horizOffsetValue;

    const draw = (connectedNodes, dashed) => {
      connectedNodes.forEach(nodeId => {
        let newNode = this.drawNode(nodeList[nodeId-1], paperNode.x + horizontalOffset, currentY, nodeHeight, textAlign);
        isOutgoing ? this.drawEdge(paperNode, newNode, dashed) : this.drawEdge(newNode, paperNode, dashed);
        currentY = currentY + spacePerNode;
      });
    };

    draw(connectedDefinitionNodes, false);
    draw(connectedBodyNodes, true);

  }

  calculateVerticalSpacePerNode(numOfEdges){
    const verticalSpace = paper.project.view.size.height - this.topPadding;
    return verticalSpace / numOfEdges;
  }

  calculateHorizontalOffset(){
    const horizontalSpace = paper.project.view.size.width;
    return horizontalSpace * 0.3;
  }

  drawNode(node, xPos, yPos, nodeHeight, textAlign){
    let paperNode;
    switch(node.type){
      case 'definition':
        paperNode = new DefinitionNode(paper, xPos, yPos, node, nodeHeight, textAlign);
        break;
      case 'invocation':
        paperNode = new InvocationNode(paper, xPos, yPos, node, nodeHeight, textAlign);
        break;
      default:
        paperNode = null;
    }

    paperNode.registerEventListeners(this.toggleActive, this.toggleHover, this.toggleHighlighted, this.toggleMouseLoc);
    paperNode.renderNode();
    return paperNode;
  }

  drawEdge(fromPaperNode, toPaperNode, dashed, toFront){
    const edge = new Edge(paper, fromPaperNode, toPaperNode, dashed, toFront);
    edge.draw();
  }

  drawLegend(){
    const canvasHeight = paper.project.view.size.height;
    const canvasWidth = paper.project.view.size.width;
    const legend = new Legend(paper, canvasHeight, canvasWidth, this.toggleLegend);
    legend.draw();
  }

  getActiveLayer(){
    return paper.project.activeLayer

  }

  updateHighlightedNodeId(highlightedNodeId){
    this.highlightedNodeId = highlightedNodeId;
  }
  //TODO - Need a resize handler

}

export default Paper;
