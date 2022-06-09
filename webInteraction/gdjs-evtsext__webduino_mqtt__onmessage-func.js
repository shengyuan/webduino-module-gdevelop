
if (typeof gdjs.evtsExt__Webduino_MQTT__onMessage !== "undefined") {
  gdjs.evtsExt__Webduino_MQTT__onMessage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Webduino_MQTT__onMessage = {};

gdjs.evtsExt__Webduino_MQTT__onMessage.conditionTrue_0 = {val:false};
gdjs.evtsExt__Webduino_MQTT__onMessage.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Webduino_MQTT__onMessage.userFunc0x9498c8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const originalTopic = eventsFunctionContext.getArgument("topic");
const topic = gdjs.evtTools.webduinoMqtt.getCustomTopic(originalTopic);

const mqttEvent = gdjs.evtTools.webduinoMqtt.events[topic];
if (typeof mqttEvent === "undefined" || typeof mqttEvent.data === "undefined") return;
eventsFunctionContext.returnValue =
    Array.isArray(mqttEvent.data)
        ? mqttEvent.data.length !== 0
        : mqttEvent.data !== gdjs.evtTools.webduinoMqtt.empty;

};
gdjs.evtsExt__Webduino_MQTT__onMessage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Webduino_MQTT__onMessage.userFunc0x9498c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Webduino_MQTT__onMessage.func = function(runtimeScene, topic, parentEventsFunctionContext) {
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
if (argName === "topic") return topic;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Webduino_MQTT__onMessage.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Webduino_MQTT__onMessage.registeredGdjsCallbacks = [];