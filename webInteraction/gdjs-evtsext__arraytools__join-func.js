
if (typeof gdjs.evtsExt__ArrayTools__Join !== "undefined") {
  gdjs.evtsExt__ArrayTools__Join.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ArrayTools__Join = {};

gdjs.evtsExt__ArrayTools__Join.conditionTrue_0 = {val:false};
gdjs.evtsExt__ArrayTools__Join.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ArrayTools__Join.userFunc0x9498c8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const arr = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("arr"));
const sep = eventsFunctionContext.getArgument("sep");

eventsFunctionContext.returnValue = arr
    .getAllChildrenArray()
    .reduce((accumulator, current) => accumulator + sep + current.getAsString(), "")
    // Remove first separator as it should be only between the strings
    .slice(sep.length);

};
gdjs.evtsExt__ArrayTools__Join.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__Join.userFunc0x9498c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ArrayTools__Join.func = function(runtimeScene, arr, sep, parentEventsFunctionContext) {
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
if (argName === "sep") return sep;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__Join.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__ArrayTools__Join.registeredGdjsCallbacks = [];