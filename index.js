+(async function () {
  console.log('GDevelop Demo web interaction');

  // 這是必要的，與 blockly.json 的 name 一致。
  const IFRAME_NAME = "GDevelop Demo";

  let iframe__;
  let mqttInstance__;

  function setIframe(iframe) {
    iframe__ = iframe;
  }

  function getIframe() {
    return iframe__;
  }

  function setMqttInstance(inst) {
    mqttInstance__ = inst;
  }

  function getMqttInstance() {
    return mqttInstance__;
  }

  async function init() {
    try {
      // 由平台提供的 api
      const iframe = await webduinoPlatform.getWebInteractionIframe(IFRAME_NAME);

      if (!iframe) throw new Error('[GDevelopDemo] iframe does not exist!');
      setIframe(iframe);
    } catch (err) {
      console.error(err);
    }
  }

  async function sendMessage(message) {
    const topic = getMqttTopic().subscribe;
    const mqttInstance = await createMqttInstance();
    if (!mqttInstance) console.warn('[GDevelopDemo] No Mqtt instance!');
    mqttInstance.send({
      topic,
      message,
    });
  }

  function getMqttTopic() {
    const { gdjs } = getIframe().contentWindow;
    return gdjs.evtTools.webduinoMqtt.topic;
  }

  async function createMqttInstance() {
    if (getMqttInstance()) return getMqttInstance();
    const inst = new webduino.module.mqttClient();
    await inst.connect();
    setMqttInstance(inst);
    return inst;
  }

  await init();

  window.webduinoGDevelopDemo = {
    sendMessage,
  };
})();
