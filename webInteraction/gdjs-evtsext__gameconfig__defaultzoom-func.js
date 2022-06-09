
if (typeof gdjs.evtsExt__GameConfig__DefaultZoom !== "undefined") {
  gdjs.evtsExt__GameConfig__DefaultZoom.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameConfig__DefaultZoom = {};

gdjs.evtsExt__GameConfig__DefaultZoom.conditionTrue_0 = {val:false};
gdjs.evtsExt__GameConfig__DefaultZoom.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__GameConfig__DefaultZoom.userFunc0x6f79e0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const layer = eventsFunctionContext.getArgument("layer");
const SEARCH_DEFAULT_ZOOM = 'gdevelop_default_zoom';

let defaultZoom = 1.6;

if (window.location.search) {
    defaultZoom = new URLSearchParams(location.search).get(SEARCH_DEFAULT_ZOOM) || defaultZoom;    
}

gdjs.evtTools.camera.setCameraZoom(runtimeScene, defaultZoom, layer, 0);
};
gdjs.evtsExt__GameConfig__DefaultZoom.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__GameConfig__DefaultZoom.userFunc0x6f79e0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__GameConfig__DefaultZoom.func = function(runtimeScene, layer, parentEventsFunctionContext) {
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
if (argName === "layer") return layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GameConfig__DefaultZoom.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__GameConfig__DefaultZoom.registeredGdjsCallbacks = [];