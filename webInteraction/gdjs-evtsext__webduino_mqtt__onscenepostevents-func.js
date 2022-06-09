
if (typeof gdjs.evtsExt__Webduino_MQTT__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Webduino_MQTT__onScenePostEvents = {};

gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.conditionTrue_0 = {val:false};
gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.userFunc0x994658 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Remove the messages of the last frame for no dataloss mode
Object
    .values(gdjs.evtTools.webduinoMqtt.events)
    .forEach((event, index) => {
        if (Array.isArray(event.data))
            event.data.shift();
        else event.data = gdjs.evtTools.webduinoMqtt.empty;
    });

};
gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.userFunc0x994658(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__Webduino_MQTT__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
