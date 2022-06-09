
if (typeof gdjs.evtsExt__MoveArea__moveToTargetPoint !== "undefined") {
  gdjs.evtsExt__MoveArea__moveToTargetPoint.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MoveArea__moveToTargetPoint = {};
gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1= [];
gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2= [];
gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects3= [];

gdjs.evtsExt__MoveArea__moveToTargetPoint.conditionTrue_0 = {val:false};
gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MoveArea__moveToTargetPoint.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__MoveArea__moveToTargetPoint.conditionTrue_1 = {val:false};
gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__MoveArea__moveToTargetPoint.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__MoveArea__moveToTargetPoint.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1, gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2);


gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MoveArea__moveToTargetPoint.conditionTrue_1 = gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0;
gdjs.evtsExt__MoveArea__moveToTargetPoint.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0) + (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2[0].getVariables()).get("validDistance"))) < (( gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2[0].getPointY("")));
}
}if (gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2 */
{for(var i = 0, len = gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateUpKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1, gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2);


gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MoveArea__moveToTargetPoint.conditionTrue_1 = gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0;
gdjs.evtsExt__MoveArea__moveToTargetPoint.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2[0].getVariables()).get("validDistance"))) > (( gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2[0].getPointY("")));
}
}if (gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2 */
{for(var i = 0, len = gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateDownKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1, gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2);


gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MoveArea__moveToTargetPoint.conditionTrue_1 = gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0;
gdjs.evtsExt__MoveArea__moveToTargetPoint.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0) + (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2[0].getVariables()).get("validDistance"))) < (( gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2[0].getPointX("")));
}
}if (gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2 */
{for(var i = 0, len = gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateLeftKey();
}
}}

}


{

/* Reuse gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1 */

gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MoveArea__moveToTargetPoint.conditionTrue_1 = gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0;
gdjs.evtsExt__MoveArea__moveToTargetPoint.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0) - (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1[0].getVariables()).get("validDistance"))) > (( gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1.length === 0 ) ? 0 :gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1[0].getPointX("")));
}
}if (gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1 */
{for(var i = 0, len = gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateRightKey();
}
}}

}


};gdjs.evtsExt__MoveArea__moveToTargetPoint.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Target"), gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1);
{for(var i = 0, len = gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1.length ;i < len;++i) {
    gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1[i].returnVariable(gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1[i].getVariables().get("validDistance")).setNumber(5);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Target"), gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1);

gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1[i].isCollidingWithPoint((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0))) ) {
        gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1[k] = gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1.length = k;}if (gdjs.evtsExt__MoveArea__moveToTargetPoint.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MoveArea__moveToTargetPoint.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__MoveArea__moveToTargetPoint.func = function(runtimeScene, Target, X, Y, TopDownMovement, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Target": Target
},
  _objectArraysMap: {
"Target": gdjs.objectsListsToArray(Target)
},
  _behaviorNamesMap: {
"TopDownMovement": TopDownMovement
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
    var objectsList = eventsFunctionContext._objectsMap[objectName];
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
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects1.length = 0;
gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects2.length = 0;
gdjs.evtsExt__MoveArea__moveToTargetPoint.GDTargetObjects3.length = 0;

gdjs.evtsExt__MoveArea__moveToTargetPoint.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__MoveArea__moveToTargetPoint.registeredGdjsCallbacks = [];