
if (typeof gdjs.evtsExt__ArrayTools__Shift !== "undefined") {
  gdjs.evtsExt__ArrayTools__Shift.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__Shift = {};

gdjs.evtsExt__ArrayTools__Shift.conditionTrue_0 = {val:false};
gdjs.evtsExt__ArrayTools__Shift.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ArrayTools__Shift.userFunc0x9498c8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const arr = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("arr"));
// Cast to array to ensure getAllChildrenArray returns the real array
arr.castTo("array");
const shiftvar = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("shiftvar"));

gdjs.Variable.copy(arr.getAllChildrenArray().shift(), shiftvar, false);

};
gdjs.evtsExt__ArrayTools__Shift.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__Shift.userFunc0x9498c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ArrayTools__Shift.func = function(runtimeScene, arr, shiftvar, parentEventsFunctionContext) {
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
if (argName === "arr") return arr;
if (argName === "shiftvar") return shiftvar;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__Shift.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__ArrayTools__Shift.registeredGdjsCallbacks = [];