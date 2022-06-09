
if (typeof gdjs.evtsExt__Webduino_MQTT__GetLastMessage !== "undefined") {
  gdjs.evtsExt__Webduino_MQTT__GetLastMessage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Webduino_MQTT__GetLastMessage = {};

gdjs.evtsExt__Webduino_MQTT__GetLastMessage.conditionTrue_0 = {val:false};
gdjs.evtsExt__Webduino_MQTT__GetLastMessage.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Webduino_MQTT__GetLastMessage.userFunc0xc8d5b0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const originalTopic = eventsFunctionContext.getArgument("topic");
const topic = gdjs.evtTools.webduinoMqtt.getCustomTopic(originalTopic);

const mqttEvent = gdjs.evtTools.webduinoMqtt.events[topic];
if (typeof mqttEvent === "undefined") return;

eventsFunctionContext.returnValue = Array.isArray(mqttEvent.data)
    ? mqttEvent.data[0]
    : mqttEvent.data;

};
gdjs.evtsExt__Webduino_MQTT__GetLastMessage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Webduino_MQTT__GetLastMessage.userFunc0xc8d5b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Webduino_MQTT__GetLastMessage.func = function(runtimeScene, topic, parentEventsFunctionContext) {
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
if (argName === "topic") return topic;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Webduino_MQTT__GetLastMessage.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Webduino_MQTT__GetLastMessage.registeredGdjsCallbacks = [];