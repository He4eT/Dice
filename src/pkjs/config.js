module.exports = [
  {
    "type": "text",
    "defaultValue": "Press any right-side button on&nbsp;your watch to&nbsp;instantly roll a&nbsp;number from 1&nbsp;to&nbsp;N."
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Die Parameters"
      },
      {
        "messageKey": "UPPER_BOUND",
        "type": "slider",
        "label": "N",
        "defaultValue": 6,
        "step": 1,
        "min": 1,
        "max": 999999,
        "attributes": {
          "style": "display: none;"
        }
      },
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];
