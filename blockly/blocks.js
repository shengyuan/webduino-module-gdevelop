// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#qntoe5
Blockly.Blocks['gdevelop_demo_move'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_GDEVELOP_DEMO_TO)
      .appendField(
        new Blockly.FieldDropdown([
          // 例：move_up 是特定的 mqtt 訊息
          [`↑ ${Blockly.Msg.WEBDUINO_GDEVELOP_DEMO_DIRECTION_UP}`, 'move_up'],
          [`↓ ${Blockly.Msg.WEBDUINO_GDEVELOP_DEMO_DIRECTION_DOWN}`, 'move_down'],
          [`← ${Blockly.Msg.WEBDUINO_GDEVELOP_DEMO_DIRECTION_LEFT}`, 'move_left'],
          [`→ ${Blockly.Msg.WEBDUINO_GDEVELOP_DEMO_DIRECTION_RIGHT}`, 'move_right'],
          [`↖ ${Blockly.Msg.WEBDUINO_GDEVELOP_DEMO_DIRECTION_UP_LEFT}`, 'move_up_left'],
          [`↗ ${Blockly.Msg.WEBDUINO_GDEVELOP_DEMO_DIRECTION_UP_RIGHT}`, 'move_up_right'],
          [`↙ ${Blockly.Msg.WEBDUINO_GDEVELOP_DEMO_DIRECTION_DOWN_LEFT}`, 'move_down_left'],
          [`↘ ${Blockly.Msg.WEBDUINO_GDEVELOP_DEMO_DIRECTION_DOWN_RIGHT}`, 'move_down_right'],
        ]),
        'direction'
      )
      .appendField(Blockly.Msg.WEBDUINO_GDEVELOP_DEMO_MOVE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};