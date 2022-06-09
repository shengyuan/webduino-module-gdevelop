
if (typeof gdjs.evtsExt__Webduino_MQTT__subscribe !== "undefined") {
  gdjs.evtsExt__Webduino_MQTT__subscribe.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Webduino_MQTT__subscribe = {};

gdjs.evtsExt__Webduino_MQTT__subscribe.conditionTrue_0 = {val:false};
gdjs.evtsExt__Webduino_MQTT__subscribe.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Webduino_MQTT__subscribe.userFunc0x9498c8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs.evtTools.webduinoMqtt.connection === null) return;

const originalTopic = eventsFunctionContext.getArgument("topic");
const topic = gdjs.evtTools.webduinoMqtt.getCustomTopic(originalTopic, 'subscribe');

if (typeof gdjs.evtTools.webduinoMqtt.events[topic] === "undefined") gdjs.evtTools.webduinoMqtt.events[topic] = { data: eventsFunctionContext.getArgument("dataloss") ? "" : [] };
gdjs.evtTools.webduinoMqtt.events[topic].loss = eventsFunctionContext.getArgument("dataloss");

gdjs.evtTools.webduinoMqtt.connection.subscribe(
    topic,
    { qos: eventsFunctionContext.getArgument("QoS") }
);

// added for blockly
gdjs.evtTools.webduinoMqtt.topic.subscribe = topic;

// send event to notify outer
try {
    const event = new CustomEvent('webduino-gdevelop-mqtt-subscribe', { detail: topic });
    document.dispatchEvent(event);
} catch (err) {
    console.warn('[Webduino MQTT.subscribe]', err)
}

};
gdjs.evtsExt__Webduino_MQTT__subscribe.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Webduino_MQTT__subscribe.userFunc0x9498c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Webduino_MQTT__subscribe.func = function(runtimeScene, topic, QoS, dataloss, parentEventsFunctionContext) {
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
if (argName === "QoS") return QoS;
if (argName === "dataloss") return dataloss;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Webduino_MQTT__subscribe.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Webduino_MQTT__subscribe.registeredGdjsCallbacks = [];