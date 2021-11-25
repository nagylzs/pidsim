import React from 'react';
import './App.css';
import { ResponsiveLine } from '@nivo/line'


const data = [
  {
    "id": "japan",
    "color": "hsl(177, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 250
      },
      {
        "x": "helicopter",
        "y": 263
      },
      {
        "x": "boat",
        "y": 256
      },
      {
        "x": "train",
        "y": 86
      },
      {
        "x": "subway",
        "y": 296
      },
      {
        "x": "bus",
        "y": 249
      },
      {
        "x": "car",
        "y": 30
      },
      {
        "x": "moto",
        "y": 109
      },
      {
        "x": "bicycle",
        "y": 35
      },
      {
        "x": "horse",
        "y": 97
      },
      {
        "x": "skateboard",
        "y": 43
      },
      {
        "x": "others",
        "y": 21
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(305, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 186
      },
      {
        "x": "helicopter",
        "y": 65
      },
      {
        "x": "boat",
        "y": 58
      },
      {
        "x": "train",
        "y": 206
      },
      {
        "x": "subway",
        "y": 168
      },
      {
        "x": "bus",
        "y": 164
      },
      {
        "x": "car",
        "y": 55
      },
      {
        "x": "moto",
        "y": 224
      },
      {
        "x": "bicycle",
        "y": 162
      },
      {
        "x": "horse",
        "y": 256
      },
      {
        "x": "skateboard",
        "y": 67
      },
      {
        "x": "others",
        "y": 68
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(159, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 99
      },
      {
        "x": "helicopter",
        "y": 159
      },
      {
        "x": "boat",
        "y": 195
      },
      {
        "x": "train",
        "y": 149
      },
      {
        "x": "subway",
        "y": 167
      },
      {
        "x": "bus",
        "y": 51
      },
      {
        "x": "car",
        "y": 44
      },
      {
        "x": "moto",
        "y": 224
      },
      {
        "x": "bicycle",
        "y": 80
      },
      {
        "x": "horse",
        "y": 165
      },
      {
        "x": "skateboard",
        "y": 111
      },
      {
        "x": "others",
        "y": 281
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(137, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 288
      },
      {
        "x": "helicopter",
        "y": 48
      },
      {
        "x": "boat",
        "y": 167
      },
      {
        "x": "train",
        "y": 25
      },
      {
        "x": "subway",
        "y": 154
      },
      {
        "x": "bus",
        "y": 149
      },
      {
        "x": "car",
        "y": 204
      },
      {
        "x": "moto",
        "y": 36
      },
      {
        "x": "bicycle",
        "y": 95
      },
      {
        "x": "horse",
        "y": 206
      },
      {
        "x": "skateboard",
        "y": 17
      },
      {
        "x": "others",
        "y": 75
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(64, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 142
      },
      {
        "x": "helicopter",
        "y": 14
      },
      {
        "x": "boat",
        "y": 152
      },
      {
        "x": "train",
        "y": 100
      },
      {
        "x": "subway",
        "y": 187
      },
      {
        "x": "bus",
        "y": 177
      },
      {
        "x": "car",
        "y": 43
      },
      {
        "x": "moto",
        "y": 95
      },
      {
        "x": "bicycle",
        "y": 38
      },
      {
        "x": "horse",
        "y": 240
      },
      {
        "x": "skateboard",
        "y": 157
      },
      {
        "x": "others",
        "y": 36
      }
    ]
  }
];

const theme = // You can pass this object to the `theme` property
{
    "background": "#2e3436",
    "textColor": "#ffffff",
    "fontSize": 11,
    "axis": {
        "domain": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        },
        "ticks": {
            "line": {
                "stroke": "#777777",
                "strokeWidth": 1
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#dddddd",
            "strokeWidth": 1
        }
    }
}


// https://nivo.rocks/line/

function App() {
  return (
    <div className="App" style={{height:500}}>

      <ResponsiveLine
        theme={theme}
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        curve={'monotoneX'}
        /*
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        */
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
}

export default App;
