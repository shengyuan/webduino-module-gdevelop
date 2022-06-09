+(function () {

  Blockly.JavaScript['gdevelop_demo_move'] = function(block) {
    const dropdown_direction = block.getFieldValue('direction');
    const code = `await webduinoGDevelopDemo.sendMessage('${dropdown_direction}');\n`;
    return code;
  };

})();
