//FunctionTree.js
import React from 'react';
import sampleData from '../data/sample-data';
import Paper from './Paper';
import HoverOver from './HoverOver';
import paper from 'paper'

const FunctionTree = React.createClass({

  componentDidUpdate(){
    if(this.props.activeNodeId !== 0){
      window.document.getElementById('paper-container').className='fadeinpanel';
      // window.document.getElementById('paper-container').style.visibility='visible';
    }

  },

  componentDidMount: function(){
    let canvas = document.getElementById('myCanvas');
    this.paper = new Paper(canvas, this.props.setActiveNodeId, this.props.setHoveredOverNodeId, this.props.setHighlightedNodeId, this.props.highlightedNodeId, this.props.setMouseLoc, this.props.setToggleLegend);
  },
  // Active node holder
  holder : null,

  componentWillUpdate: function(nextProps, nextState){
    if (this.holder !== nextProps.activeNodeId){
      if(this.paper) {
        this.paper.clearScreen();
        if (nextProps.activeNodeId !== 0){
          this.paper.drawTree(nextProps.activeNodeId, nextProps.nodes);
        }
      }

      this.holder = nextProps.activeNodeId;
    }

    if (this.paper.highlightedNodeId !== nextProps.highlightedNodeId){
      this.clearHighlighting(nextProps.highlightedNodeId, nextProps.activeNodeId)
    }

  },

    clearHighlighting: function(newHighlightedNodeId, activeNodeId){
      let activeLayer = this.paper.getActiveLayer();
        // activeLayer.children.filter(child => return)
      console.log('heres the activelayer ', activeLayer)
      let groups = activeLayer.children.filter(child => child.constructor === paper.Group)
      console.log('heres the groups ', groups)
      groups.forEach(group =>
          {
            if(group.nodeId !== newHighlightedNodeId && group.nodeId !== activeNodeId){
              group.children[0].shadowBlur = 0;
              group.children[0].fillColor = '#b6d2dd';
              group.children[0].strokeColor = '#b6d2dd';
            }
          }
      )

  },

  showHover: function(){
      return this.props.hoveredOverNodeId !== 0
  },

  render (){
    let canvasStyle = {
          backgroundColor: "#4C4C4C",
          // need to figure out how to make it 100% (percentage instead of pixels)
          width: 500,
          height: 600
    };

    return(

        <div style={{height:"82vh"}}>

        <div className="panel-title">
          Functions Web
        </div>
            <canvas id="myCanvas"></canvas>
            {
              this.showHover() ?
                <HoverOver  {...this.props} {...this.state}/>
                : null
            }
        </div>
    )
  }
});

export default FunctionTree;

