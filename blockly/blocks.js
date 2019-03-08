Blockly.Blocks['line_ifttt'] = {
  init: function () {
    this.appendValueInput("line_ifttt_event")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("LINE ( IFTTT )")
      .appendField("Event :");
    this.appendValueInput("line_ifttt_key")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Key :");
    this.appendValueInput("line_ifttt_value1")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_V1);
    this.appendValueInput("line_ifttt_value2")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_V2);
    this.appendValueInput("line_ifttt_value3")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_V3);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.oxxostudio.tw/");
  }
};

Blockly.Blocks['line_notify'] = {
  init: function () {
    this.appendValueInput("line_notify_token")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("LINE ( Notify )")
      .appendField("Token :");
    this.appendValueInput("line_notify_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_MSG);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setCommentText("發送 LINE Notify 之後，才會繼續執行下方程式");
    this.setHelpUrl("http://www.oxxostudio.tw/");
  }
};

Blockly.Blocks['line_bot'] = {
  init: function () {
    this.appendValueInput("line_bot_token")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("LINE ( Bot )")
      .appendField("Token :");
    this.appendValueInput("line_bot_uid")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Uid :");
    this.appendValueInput("line_bot_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.LINE_MSG);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("http://www.oxxostudio.tw/");
  }
};


Blockly.Blocks['line_sticker'] = {
  init: function () {
    this.appendValueInput("sticker")
      .setCheck(null)
      .appendField(Blockly.Msg.LINE_STKID);
    this.appendValueInput("package")
      .setCheck(null)
      .appendField(Blockly.Msg.LINE_STKVER);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("https://devdocs.line.me/files/sticker_list.pdf");
  }
};

Blockly.Blocks['line_image'] = {
  init: function () {
    this.appendValueInput("img_url")
      .setCheck("String")
      .appendField("圖片網址：");
    this.setOutput(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("http://www.oxxostudio.tw/");
  }
};

Blockly.Blocks['line_chat'] = {
  init: function () {
    this.appendValueInput("channel")
      .setCheck(null)
      .appendField("LINE ( Chat ) 從頻道名稱");
    this.appendDummyInput()
      .appendField("接收訊息");
    this.appendStatementInput("do")
      .setCheck(null)
      .appendField("執行");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setCommentText("右鍵選擇「教學」，加入 Webduino 為 LINE 好友開始聊天控制");
    this.setHelpUrl("https://line.me/R/ti/p/%40ffm9294c");
  }
};

Blockly.Blocks['line_chat_msg'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("接收的訊息");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl("https://line.me/R/ti/p/%40ffm9294c");
  }
};

Blockly.Blocks['line_chat_reply'] = {
  init: function () {
    this.appendValueInput("msg")
      .setCheck(null)
      .appendField("回傳訊息");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip("");
    this.setHelpUrl("https://line.me/R/ti/p/%40ffm9294c");
  }
};
