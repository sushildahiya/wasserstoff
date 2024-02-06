// bubbleChartData.js
export const bubbleChartData = {
  datasets: [
    {
      label: 'Sales',
      data: [
        { x: 'Jan-Feb', y: 300, r: 50 },
        { x: 'Feb-Mar', y: 500, r: 25 },
        { x: 'Aug-Sep', y: 600, r: 15 },
        { x: 'Nov-Dec', y: 300, r: 25 },
        { x: 'Nov-Dec', y: 390, r: 15 }
      ],
      backgroundColor: 'rgba(147, 82, 229, 0.7)',
      borderWidth: 0,
      blend: 'average'
    },
    {
      label: 'Users',
      data: [
        { x: 'Mar', y: 650, r: 40 },
        { x: 'Apr-May', y: 300, r: 100 },
        { x: 'Sep-Oct', y: 400, r: 100 }
      ],
      backgroundColor: 'rgba(250, 230, 52, 0.7)',
      borderWidth: 0,
      blend: 'average'
    },
    {
      label: 'Product',
      data: [
        { x: 'Mar-Apr', y: 420, r: 140 },
        { x: 'Oct-Nov', y: 320, r: 70 }
      ],
      backgroundColor: 'rgba(255, 80, 93, 0.7)',
      borderWidth: 0,
      blend: 'average'
    },
    {
      label: 'Team',
      data: [
        { x: 'May-Jun', y: 500, r: 150 },
        { x: 'Aug', y: 430, r: 20 },
        { x: 'Oct', y: 600, r: 60 }
      ],
      backgroundColor: 'rgba(105, 93, 251, 0.7)',
      borderWidth: 0,
      blend: 'average'
    }
  ]
};

// xAxesLabel.js
export const xAxesLabel = [
  'Jan', 'Jan-Feb', 'Feb', 'Feb-Mar', 'Mar', 'Mar-Apr', 'Apr', 'Apr-May', 'May', 'May-Jun',
  'Jun', 'Jul', 'Aug', 'Aug-Sep', 'Sep', 'Sep-Oct', 'Oct', 'Oct-Nov', 'Nov', 'Nov-Dec', 'Dec'
];

// yAxesLabel.js
export const yAxesLabel = ['1000', '800', '600', '400', '200', '0'];
