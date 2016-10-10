//Node.js
class PaperNode  {
  //project is a reference to the project in paper this node will belong to
  //will be rendered at (xPos, yPos) in the canvas
  constructor(paper, xPos, yPos, node) {
    this.project = paper;
    this.x = xPos;
    this.y = yPos;
    this.group = new this.project.Group()
    this.text = new this.project.PointText({
        point: [this.x, this.y-5],
        content: node.name,
        fillColor: '#000000',
        //fontFamily: 'Arial, Helvetica, sans-serif',
        //fontWeight: 'bold',
        fontSize: 15,
        justification: 'center'
    });
    this.outgoingBody = node.outgoingBody;
    this.incomingBody = node.incomingBody;
    this.outgoingDefinition = node.outgoingDefinition;
    this.incomingDefinition = node.incomingDefinition;
    this.nodeId = node.id;
  }

  /*registerEventListeners(toggleActive, toggleHover) {

    let thisNode = this;

    this.group.onDoubleClick = function(event){
      toggleActive(thisNode.nodeId);
    },

    this.group.onClick = function(event){
      console.log('single click event was registered ', event)
    }

    this.group.onMouseEnter = function(event){
        toggleHover(thisNode.nodeId)
    }
  }*/

  static getHeight(){
    return 20; //replace this at some point to better determine overall size
  }
}

export default PaperNode;
