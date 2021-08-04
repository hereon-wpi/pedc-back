
export const mockItems = [
  {
    "id": "1627855870083",
    "title": "all",
    "blocks": [
      {
        "type": "TEXT_INPUT",
        "props": {
          "label": "Text Input Label",
          "placeholder": "Placeholder"
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "placeholder",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "label",
            "props": {
              "small": true
            }
          }
        ],
        "page": 1,
        "id": 0
      },
      {
        "type": "FILE_INPUT",
        "props": {
          "placeholder": "Choose file...",
          "buttonText": "Browse",
          "linkText": "Download File"
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "placeholder",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "buttonText",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "linkText",
            "props": {
              "small": true
            }
          }
        ],
        "page": 1,
        "id": 1
      },
      {
        "type": "CHECKBOX",
        "props": {
          "alignIndicator": "left",
          "label": "Checkbox Label"
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "label",
            "props": {
              "small": true
            }
          }
        ],
        "page": 1,
        "id": 2
      },
      {
        "type": "SWITCH",
        "props": {
          "alignIndicator": "left",
          "label": "Switch Label"
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "label",
            "props": {
              "small": true
            }
          }
        ],
        "page": 1,
        "id": 3
      },
      {
        "type": "NUMERIC_INPUT",
        "props": {
          "label": "Numeric Label",
          "placeholder": "Enter a number..."
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "label",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "placeholder",
            "props": {
              "small": true
            }
          }
        ],
        "page": 1,
        "id": 4
      },
      {
        "type": "TAG_INPUT",
        "props": {
          "placeholder": "Values...",
          "label": "Tag Input Label",
          "values": []
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "label",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "placeholder",
            "props": {
              "small": true
            }
          }
        ],
        "page": 1,
        "id": 5
      },
      {
        "type": "RADIO_GROUP",
        "props": {
          "name": "radio-group",
          "label": "Radio Group Label",
          "inline": true,
          "options": [
            {
              "label": "option 1",
              "value": "option 1"
            },
            {
              "label": "option 2",
              "value": "option 2"
            }
          ]
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "label",
            "props": {
              "small": true
            }
          },
          {
            "type": "TAG_INPUT",
            "key": "options",
            "props": {
              "small": true,
              "values": [
                "option 1",
                "option 2"
              ],
              "helperText": "Write option name and press enter"
            }
          }
        ],
        "page": 1,
        "id": 6
      },
      {
        "type": "SLIDER",
        "props": {
          "label": "Slider Label",
          "min": 0,
          "max": 10,
          "stepSize": 0.1,
          "labelStepSize": 1
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "label",
            "props": {
              "small": true
            }
          },
          {
            "type": "NUMERIC_INPUT",
            "key": "min",
            "props": {
              "small": true,
              "helperText": "Min"
            }
          },
          {
            "type": "NUMERIC_INPUT",
            "key": "max",
            "props": {
              "small": true,
              "helperText": "Max"
            }
          },
          {
            "type": "NUMERIC_INPUT",
            "key": "stepSize",
            "props": {
              "small": true,
              "helperText": "Step size",
              "stepSize": 0.1,
              "minorStepSize": 0.1
            }
          },
          {
            "type": "NUMERIC_INPUT",
            "key": "labelStepSize",
            "props": {
              "small": true,
              "helperText": "Label step size"
            }
          }
        ],
        "page": 1,
        "id": 7
      },
      {
        "type": "TEXTAREA",
        "props": {
          "label": "TextArea Label",
          "placeholder": "Placeholder"
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "label",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "placeholder",
            "props": {
              "small": true
            }
          }
        ],
        "page": 1,
        "id": 8
      },
      {
        "type": "IMAGE",
        "props": {
          "placeholder": "Choose image...",
          "buttonText": "Browse",
          "linkText": "Download File",
          "label": "Image Label"
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "placeholder",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "buttonText",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "linkText",
            "props": {
              "small": true
            }
          }
        ],
        "page": 1,
        "id": 9
      },
      {
        "type": "GALLERY",
        "props": {
          "placeholder": "Choose image...",
          "buttonText": "Browse",
          "linkText": "Download File",
          "label": "Gallery Label"
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "placeholder",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "buttonText",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "linkText",
            "props": {
              "small": true
            }
          }
        ],
        "page": 1,
        "id": 10
      },
      {
        "type": "TEXT_INPUT",
        "props": {
          "label": "Text Input Label",
          "placeholder": "Placeholder"
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "placeholder",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "label",
            "props": {
              "small": true
            }
          }
        ],
        "page": 2,
        "id": 11
      },
      {
        "type": "FILE_INPUT",
        "props": {
          "placeholder": "Choose file...",
          "buttonText": "Browse",
          "linkText": "Download File"
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "placeholder",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "buttonText",
            "props": {
              "small": true
            }
          },
          {
            "type": "TEXT_INPUT",
            "key": "linkText",
            "props": {
              "small": true
            }
          }
        ],
        "page": 2,
        "id": 12
      },
      {
        "type": "CHECKBOX",
        "props": {
          "alignIndicator": "left",
          "label": "Checkbox Label"
        },
        "fields": [
          {
            "type": "TEXT_INPUT",
            "key": "label",
            "props": {
              "small": true
            }
          }
        ],
        "page": 2,
        "id": 13
      }
    ]
  }
];
