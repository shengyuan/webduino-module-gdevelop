
if (typeof gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer !== "undefined") {
  gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer = {};

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_0 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition3IsTrue_1 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_2 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_2 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_2 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition3IsTrue_2 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_3 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_3 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_3 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_3 = {val:false};
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition3IsTrue_3 = {val:false};


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = (Math.abs(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollDistanceX"))) >= 1);
}
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollDistanceX"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0));
}}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = (Math.abs(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollDistanceY"))) >= 1);
}
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)) - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollDistanceY"))), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0));
}}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollTargetX").setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)));
}{runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollTargetY").setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)));
}{runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollDistanceX").setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollTargetX")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollStartX"))));
}{runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollDistanceY").setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollTargetY")) - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollStartY"))));
}}

}


{



}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_1.val = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "horizontal");
}
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "both");
}
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_1;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "");
}
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_1.val = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "vertical");
}
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "both");
}
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_1;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "");
}
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition2IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InputButton") : ""));
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_2.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_2.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_2.val ) {
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_3 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_2;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_3.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("InputButton") : false);
}
}}
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2.val = true && gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_2.val && gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_0;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(15006380);
}
}}
if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollStartX").setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)));
}{runtimeScene.getVariables().get("__DragCameraWithPointer").getChild("scrollStartY").setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("CamLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("CamNumber")) || 0 : 0)));
}}

}


{



}


{


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("InputButton") : ""));
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_2.val = false;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_2.val = false;
{
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_2.val ) {
{
{gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_3 = gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_2;
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_3.val = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("InputButton") : false);
}
}}
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_2.val = true && gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_2.val && gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_2.val;
}
if( gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition1IsTrue_1.val ) {
    gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.func = function(runtimeScene, CamNumber, CamLayer, Direction, InputButton, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "CamNumber") return CamNumber;
if (argName === "CamLayer") return CamLayer;
if (argName === "Direction") return Direction;
if (argName === "InputButton") return InputButton;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.eventsList3(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__DragCameraWithPointer__DragCameraWithPointer.registeredGdjsCallbacks = [];