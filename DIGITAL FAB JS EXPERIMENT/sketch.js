let video;
let handpose;
let predictions = [];

let viewMode = "default";
let toggleViewBtn;
let hideCameraBtn;
let showCamera = true;
// tilted‑side view
let camAngleX = 0;
let camAngleY = 0;
let camZoom   = 800;

// panning offsets
let camPanX = 0;
let camPanY = 0;
let savedCam = {};

let tiltedView = false;
//

let svgRects = [
  // Paste your { x: , y: , w: , h: } converted objects here
  { x: 972.5, y: 9.5, w: 99, h: 18 },
  { x: 36.5, y: 27.5, w: 108, h: 18 },
  { x: 27.5, y: 54.5, w: 126, h: 18 },
  { x: 936.5, y: 1017.5, w: 171, h: 18 },
  { x: 936.5, y: 1044.5, w: 18, h: 18 },
  { x: 936.5, y: 1071.5, w: 171, h: 18 },
  { x: 936.5, y: 1098.5, w: 171, h: 18 },
  { x: 936.5, y: 1125.5, w: 171, h: 18 },
  { x: 945.5, y: 1152.5, w: 162, h: 18 },
  { x: 378.5, y: 1494.5, w: 171, h: 18 },
  { x: 576.5, y: 1458.5, w: 153, h: 18 },
  { x: 558.5, y: 1485.5, w: 171, h: 18 },
  { x: 558.5, y: 1512.5, w: 171, h: 18 },
  { x: 558.5, y: 1404.5, w: 171, h: 18 },
  { x: 558.5, y: 1431.5, w: 171, h: 18 },
  { x: 747.5, y: 1602.5, w: 171, h: 18 },
  { x: 747.5, y: 1629.5, w: 171, h: 18 },
  { x: 747.5, y: 1656.5, w: 171, h: 18 },
  { x: 747.5, y: 1683.5, w: 171, h: 18 },
  { x: 936.5, y: 1593.5, w: 171, h: 18 },
  { x: 936.5, y: 1620.5, w: 171, h: 18 },
  { x: 936.5, y: 1647.5, w: 171, h: 18 },
  { x: 936.5, y: 1674.5, w: 171, h: 18 },
  { x: 0.5, y: 117.5, w: 180, h: 18 },
  { x: 936.5, y: 882.5, w: 171, h: 18 },
  { x: 936.5, y: 909.5, w: 171, h: 18 },
  { x: 936.5, y: 936.5, w: 171, h: 18 },
  { x: 936.5, y: 963.5, w: 171, h: 18 },
  { x: 936.5, y: 990.5, w: 171, h: 18 },
  { x: 936.5, y: 1485.5, w: 171, h: 18 },
  { x: 972.5, y: 9.5, w: 99, h: 18 },
  { x: 36.5, y: 27.5, w: 108, h: 18 },
  { x: 27.5, y: 54.5, w: 126, h: 18 },
  { x: 936.5, y: 1017.5, w: 171, h: 18 },
  { x: 936.5, y: 1044.5, w: 18, h: 18 },
  { x: 936.5, y: 1071.5, w: 171, h: 18 },
  { x: 936.5, y: 1098.5, w: 171, h: 18 },
  { x: 936.5, y: 1125.5, w: 171, h: 18 },
  { x: 945.5, y: 1152.5, w: 162, h: 18 },
  { x: 378.5, y: 1494.5, w: 171, h: 18 },
  { x: 576.5, y: 1458.5, w: 153, h: 18 },
  { x: 558.5, y: 1485.5, w: 171, h: 18 },
  { x: 558.5, y: 1512.5, w: 171, h: 18 },
  { x: 558.5, y: 1404.5, w: 171, h: 18 },
  { x: 558.5, y: 1431.5, w: 171, h: 18 },
  { x: 747.5, y: 1602.5, w: 171, h: 18 },
  { x: 747.5, y: 1629.5, w: 171, h: 18 },
  { x: 747.5, y: 1656.5, w: 171, h: 18 },
  { x: 747.5, y: 1683.5, w: 171, h: 18 },
  { x: 936.5, y: 1593.5, w: 171, h: 18 },
  { x: 936.5, y: 1620.5, w: 171, h: 18 },
  { x: 936.5, y: 1647.5, w: 171, h: 18 },
  { x: 936.5, y: 1674.5, w: 171, h: 18 },
  { x: 0.5, y: 117.5, w: 180, h: 18 },
  { x: 936.5, y: 882.5, w: 171, h: 18 },
  { x: 936.5, y: 909.5, w: 171, h: 18 },
  { x: 936.5, y: 936.5, w: 171, h: 18 },
  { x: 936.5, y: 963.5, w: 171, h: 18 },
  { x: 936.5, y: 990.5, w: 171, h: 18 },
  { x: 936.5, y: 1485.5, w: 171, h: 18 },
  { x: 576.5, y: 1350.5, w: 144, h: 18 },
  { x: 558.5, y: 1296.5, w: 180, h: 18 },
  { x: 945.5, y: 531.5, w: 162, h: 18 },
  { x: 936.5, y: 558.5, w: 171, h: 18 },
  { x: 936.5, y: 585.5, w: 171, h: 18 },
  { x: 936.5, y: 612.5, w: 171, h: 18 },
  { x: 936.5, y: 639.5, w: 171, h: 18 },
  { x: 207.5, y: 1323.5, w: 144, h: 18 },
  { x: 189.5, y: 1350.5, w: 171, h: 18 },
  { x: 279.5, y: 1377.5, w: 81, h: 18 },
  { x: 279.5, y: 1404.5, w: 72, h: 18 },
  { x: 189.5, y: 1431.5, w: 153, h: 18 },
  { x: 189.5, y: 1458.5, w: 162, h: 18 },
  { x: 9.5, y: 1413.5, w: 171, h: 18 },
  { x: 9.5, y: 1440.5, w: 171, h: 18 },
  { x: 9.5, y: 1467.5, w: 171, h: 18 },
  { x: 9.5, y: 1494.5, w: 171, h: 18 },
  { x: 18.5, y: 1386.5, w: 162, h: 18 },
  { x: 189.5, y: 1683.5, w: 180, h: 18 },
  { x: 378.5, y: 1656.5, w: 171, h: 18 },
  { x: 378.5, y: 1683.5, w: 171, h: 18 },
  { x: 378.5, y: 1629.5, w: 171, h: 18 },
  { x: 936.5, y: 405.5, w: 171, h: 18 },
  { x: 945.5, y: 432.5, w: 153, h: 18 },
  { x: 963.5, y: 459.5, w: 117, h: 18 },
  { x: 0.5, y: 1251.5, w: 144, h: 18 },
  { x: 9.5, y: 1278.5, w: 162, h: 18 },
  { x: 18.5, y: 1314.5, w: 162, h: 18 },
  { x: 405.5, y: 117.5, w: 306, h: 18 },
  { x: 378.5, y: 1440.5, w: 171, h: 18 },
  { x: 379,   y: 1359.5, w: 171, h: 18 },
  { x: 936.5, y: 1512.5, w: 144, h: 18 },
  { x: 378.5, y: 1305.5, w: 171, h: 18 },
  { x: 378.5, y: 1332.5, w: 171, h: 18 },
  { x: 378.5, y: 1386.5, w: 72,  h: 18 },
  { x: 396.5, y: 1413.5, w: 153, h: 18 },
  { x: 378.5, y: 1467.5, w: 171, h: 18 },
  { x: 189.5, y: 1656.5, w: 180, h: 18 },
  { x: 198.5, y: 1629.5, w: 171, h: 18 },
  { x: 558.5, y: 1683.5, w: 180, h: 18 },
  { x: 558.5, y: 1656.5, w: 180, h: 18 },
  { x: 576.5, y: 1629.5, w: 162, h: 18 },
  { x: 954.5, y: 504.5,  w: 135, h: 18 },
  { x: 576.5, y: 1602.5, w: 144, h: 18 },
  { x: 225.5, y: 1296.5, w: 108, h: 18 },
  { x: 27.5,  y: 1359.5, w: 135, h: 18 },
  { x: 198.5, y: 1395.5, w: 72,  h: 18 },
  { x: 945.5, y: 666.5,  w: 162, h: 18 },
  { x: 936.5, y: 693.5,  w: 171, h: 18 },
  { x: 936.5, y: 720.5,  w: 171, h: 18 },
  { x: 936.5, y: 747.5,  w: 171, h: 18 },
  { x: 936.5, y: 774.5,  w: 171, h: 18 },
  { x: 936.5, y: 801.5,  w: 171, h: 18 },
  { x: 936.5, y: 828.5,  w: 171, h: 18 },
  { x: 936.5, y: 855.5,  w: 45,  h: 18 },
  { x: 207.5, y: 1485.5, w: 135, h: 18 },
  { x: 189.5, y: 1512.5, w: 162, h: 18 },
  { x: 9.5,   y: 1521.5, w: 171, h: 18 },
  { x: 9.5,   y: 1548.5, w: 171, h: 18 },
  { x: 9.5,   y: 1575.5, w: 171, h: 18 },
  { x: 9.5,   y: 1602.5, w: 171, h: 18 },
  { x: 9.5,   y: 1629.5, w: 171, h: 18 },
  { x: 9.5,   y: 1656.5, w: 171, h: 18 },
  { x: 9.5,   y: 1683.5, w: 171, h: 18 },
  { x: 378.5, y: 1278.5, w: 171, h: 18 },
  { x: 189.5, y: 1683.5, w: 180, h: 18 },
  { x: 936.7, y: 1181.4, w: 171, h: 18 },
  { x: 945.7, y: 1208.4, w: 162, h: 18 },
  { x: 945.7, y: 1235.4, w: 162, h: 18 },
  { x: 936.7, y: 1262.4, w: 171, h: 18 },
  { x: 936.7, y: 1289.4, w: 171, h: 18 },
  { x: 936.7, y: 1316.4, w: 171, h: 18 },
  { x: 936.7, y: 1343.4, w: 171, h: 18 },
  { x: 936.7, y: 1370.4, w: 171, h: 18 },
  { x: 936.7, y: 1397.4, w: 171, h: 18 },
  { x: 936.7, y: 1424.4, w: 171, h: 18 },
  { x: 963.7, y: 1451.4, w: 117, h: 18 },
  { x: 747.7, y: 1289.4, w: 171, h: 18 },
  { x: 747.7, y: 1316.4, w: 171, h: 18 },
  { x: 747.7, y: 1343.4, w: 171, h: 18 },
  { x: 747.7, y: 1370.4, w: 171, h: 18 },
  { x: 747.7, y: 1397.4, w: 171, h: 18 },
  { x: 747.7, y: 1424.4, w: 171, h: 18 },
  { x: 765.7, y: 1451.4, w: 153, h: 18 },
  { x: 747.7, y: 1478.4, w: 171, h: 18 },
  { x: 747.7, y: 1505.4, w: 171, h: 18 },
  { x: 189.5, y: 0.5,   w: 157.6, h: 18 }, //new picture squares vvvv
  { x: 362.4, y: 0.5,   w: 149.7, h: 18 },
  { x: 527.4, y: 0.5,   w: 176.9, h: 18 },
  { x: 717.9, y: 0.5,   w: 209.7, h: 18 },
  { x: 189.5, y: 27.3,  w: 157.6, h: 18 },
  { x: 362.4, y: 27.3,  w: 149.7, h: 18 },
  { x: 527.4, y: 27.3,  w: 176.9, h: 18 },
  { x: 717.9, y: 27.3,  w: 209.7, h: 18 },
  { x: 189.5, y: 54.8,  w: 157.6, h: 18 },
  { x: 362.4, y: 54.8,  w: 149.7, h: 18 },
  { x: 527.4, y: 54.8,  w: 176.9, h: 18 },
  { x: 717.9, y: 54.8,  w: 209.7, h: 18 },
  { x: 189.5, y: 81.7,  w: 157.6, h: 18 },
  { x: 362.4, y: 81.7,  w: 149.7, h: 18 },
  { x: 527.4, y: 81.7,  w: 176.9, h: 18 },
  { x: 717.9, y: 81.7,  w: 209.7, h: 18 },
  { x: 467.9, y: 162.3, w: 312.1, h: 18 },
  { x: 467.9, y: 189.1, w: 312.1, h: 18 },
  { x: 467.9, y: 216.6, w: 312.1, h: 18 },
  { x: 794.6, y: 162.3, w: 177.8, h: 18 },
  { x: 794.6, y: 189.1, w: 177.8, h: 18 },
  { x: 794.6, y: 216.6, w: 177.8, h: 18 },
  { x: 150.3, y: 162.3, w: 303.9, h: 18 },
  { x: 150.3, y: 189.1, w: 303.9, h: 18 },
  { x: 150.3, y: 216.6, w: 303.9, h: 18 },
  { x:   0.5, y: 270.5, w: 251.4, h: 18 },
  { x:   0.5, y: 297.5, w: 243.2, h: 18 },
  { x:  77.4, y: 324.5, w:  77.8, h: 18 },
  { x:  72.5, y: 351.5, w:  78.4, h: 18 },
  { x: 266.8, y: 270.5, w:  49.4, h: 18 },
  { x: 260.1, y: 297.5, w:  52.0, h: 18 },
  { x: 329.7, y: 270.5, w: 197.7, h: 18 },
  { x: 324.5, y: 297.5, w: 196.2, h: 18 },
  { x: 543.0, y: 270.5, w: 177.8, h: 18 },
  { x: 535.6, y: 297.5, w: 176.5, h: 18 },
  { x: 734.9, y: 270.5, w: 326.4, h: 18 },
  { x: 724.8, y: 297.5, w: 324.0, h: 18 },
  { x: 173.8, y: 324.5, w: 120.5, h: 18 },
  { x: 169.0, y: 351.5, w: 121.0, h: 18 },
  { x: 309.2, y: 324.5, w:  60.8, h: 18 },
  { x: 304.3, y: 351.5, w:  61.1, h: 18 },
  { x: 384.0, y: 324.5, w:  71.1, h: 18 },
  { x: 379.1, y: 351.5, w:  71.4, h: 18 },
  { x: 471.2, y: 324.5, w: 167.8, h: 18 },
  { x: 466.6, y: 351.5, w: 168.5, h: 18 },
  { x: 676.9, y: 324.5, w:  18.4, h: 18 },
  { x: 671.8, y: 351.5, w:  18.5, h: 18 },
  { x: 716.5, y: 324.5, w: 400.4, h: 18 },
  { x: 712.5, y: 351.5, w: 404.4, h: 18 },
  { x:   9.4, y: 387.2, w:  45.6, h: 45.2 },
  { x:  67.0, y: 387.2, w:  45.6, h: 45.2 },
  { x: 124.2, y: 387.2, w:  45.6, h: 45.2 },
  { x: 181.8, y: 387.2, w:  45.6, h: 45.2 },
  { x: 239.6, y: 387.2, w:  45.6, h: 45.2 },
  { x: 297.2, y: 387.2, w:  45.6, h: 45.2 },
  { x: 354.4, y: 387.2, w:  45.6, h: 45.2 },
  { x: 411.9, y: 387.2, w: 45.6, h: 45.2 },
  { x: 470.4, y: 387.2, w: 45.6, h: 45.2 },
  { x: 527.9, y: 387.2, w: 45.6, h: 45.2 },
  { x: 585.2, y: 387.2, w: 45.6, h: 45.2 },
  { x: 642.7, y: 387.2, w: 45.6, h: 45.2 },
  { x: 700.6, y: 387.2, w: 45.6, h: 45.2 },
  { x: 758.1, y: 387.2, w: 45.6, h: 45.2 },
  { x: 815.3, y: 387.2, w: 45.6, h: 45.2 },
  { x: 872.9, y: 387.2, w: 45.6, h: 45.2 },
  { x:   9.4, y: 441.4, w: 45.6, h: 45.2 },
  { x:  67.0, y: 441.4, w: 45.6, h: 45.2 },
  { x: 124.2, y: 441.4, w: 45.6, h: 45.2 },
  { x: 181.8, y: 441.4, w: 45.6, h: 45.2 },
  { x: 239.6, y: 441.4, w: 45.6, h: 45.2 },
  { x: 297.2, y: 441.4, w: 45.6, h: 45.2 },
  { x: 354.4, y: 441.4, w: 45.6, h: 45.2 },
  { x: 411.9, y: 441.4, w: 45.6, h: 45.2 },
  { x: 470.4, y: 441.4, w: 45.6, h: 45.2 },
  { x: 527.9, y: 441.4, w: 45.6, h: 45.2 },
  { x: 585.2, y: 441.4, w: 45.6, h: 45.2 },
  { x: 642.7, y: 441.4, w: 45.6, h: 45.2 },
  { x: 700.6, y: 441.4, w: 45.6, h: 45.2 },
  { x: 758.1, y: 441.4, w: 45.6, h: 45.2 },
  { x: 815.3, y: 441.4, w: 45.6, h: 45.2 },
  { x: 872.9, y: 441.4, w: 45.6, h: 45.2 },
  { x:   9.4, y: 495.0, w: 45.6, h: 45.2 },
  { x:  67.0, y: 495.0, w: 45.6, h: 45.2 },
  { x: 124.2, y: 495,   w: 45.6, h: 45.2 },
  { x: 181.8, y: 495,   w: 45.6, h: 45.2 },
  { x: 239.6, y: 495,   w: 45.6, h: 45.2 },
  { x: 297.2, y: 495,   w: 45.6, h: 45.2 },
  { x: 354.4, y: 495,   w: 45.6, h: 45.2 },
  { x: 411.9, y: 495,   w: 45.6, h: 45.2 },
  { x: 470.4, y: 495,   w: 45.6, h: 45.2 },
  { x: 527.9, y: 495,   w: 45.6, h: 45.2 },
  { x: 585.2, y: 495,   w: 45.6, h: 45.2 },
  { x: 642.7, y: 495,   w: 45.6, h: 45.2 },
  { x: 700.6, y: 495,   w: 45.6, h: 45.2 },
  { x: 758.1, y: 495,   w: 45.6, h: 45.2 },
  { x: 815.3, y: 495,   w: 45.6, h: 45.2 },
  { x: 872.9, y: 495,   w: 45.6, h: 45.2 },
  { x:   9.4, y: 549.3, w: 45.6, h: 45.2 },
  { x:  67.0, y: 549.3, w: 45.6, h: 45.2 },
  { x: 124.2, y: 549.3, w: 45.6, h: 45.2 },
  { x: 181.8, y: 549.3, w: 45.6, h: 45.2 },
  { x: 239.6, y: 549.3, w: 45.6, h: 45.2 },
  { x: 297.2, y: 549.3, w: 45.6, h: 45.2 },
  { x: 354.4, y: 549.3, w: 45.6, h: 45.2 },
  { x: 411.9, y: 549.3, w: 45.6, h: 45.2 },
  { x: 470.4, y: 549.3, w: 45.6, h: 45.2 },
  { x: 527.9, y: 549.3, w: 45.6, h: 45.2 },
  { x: 585.2, y: 549.3, w: 45.6, h: 45.2 },
  { x: 642.7, y: 549.3, w: 45.6, h: 45.2 },
  { x: 700.6, y: 549.3, w: 45.6, h: 45.2 },
  { x: 758.1, y: 549.3, w: 45.6, h: 45.2 },
  { x: 815.3, y: 549.3, w: 45.6, h: 45.2 },
  { x: 872.9, y: 549.3, w: 45.6, h: 45.2 },
  { x:   9.4, y: 602.9, w: 45.6, h: 45.2 },
  { x:  67.0, y: 602.9, w: 45.6, h: 45.2 },
  { x: 124.2, y: 602.9, w: 45.6, h: 45.2 },
  { x: 181.8, y: 602.9, w: 45.6, h: 45.2 },
  { x: 239.6, y: 602.9, w: 45.6, h: 45.2 },
  { x: 297.2, y: 602.9, w: 45.6, h: 45.2 },
  { x: 354.4, y: 602.9, w: 45.6, h: 45.2 },
  { x: 411.9, y: 602.9, w: 45.6, h: 45.2 },
  { x: 470.4, y: 441.4, w: 45.6, h: 45.2 },
  { x: 527.9, y: 441.4, w: 45.6, h: 45.2 },
  { x: 585.2, y: 441.4, w: 45.6, h: 45.2 },
  { x: 642.7, y: 441.4, w: 45.6, h: 45.2 },
  { x: 700.6, y: 441.4, w: 45.6, h: 45.2 },
  { x: 758.1, y: 441.4, w: 45.6, h: 45.2 },
  { x: 815.3, y: 441.4, w: 45.6, h: 45.2 },
  { x: 872.9, y: 441.4, w: 45.6, h: 45.2 },
  { x:   9.4, y: 495.0, w: 45.6, h: 45.2 },
  { x:  67.0, y: 495.0, w: 45.6, h: 45.2 },
  { x: 124.2, y: 495.0, w: 45.6, h: 45.2 },
  { x: 181.8, y: 495.0, w: 45.6, h: 45.2 },
  { x: 239.6, y: 495.0, w: 45.6, h: 45.2 },
  { x: 297.2, y: 495.0, w: 45.6, h: 45.2 },
  { x: 354.4, y: 495.0, w: 45.6, h: 45.2 },
  { x: 411.9, y: 495.0, w: 45.6, h: 45.2 },
  { x: 470.4, y: 495.0, w: 45.6, h: 45.2 },
  { x: 527.9, y: 495.0, w: 45.6, h: 45.2 },
  { x: 585.2, y: 495.0, w: 45.6, h: 45.2 },
  { x: 642.7, y: 495.0, w: 45.6, h: 45.2 },
  { x: 700.6, y: 495.0, w: 45.6, h: 45.2 },
  { x: 758.1, y: 495.0, w: 45.6, h: 45.2 },
  { x: 815.3, y: 495.0, w: 45.6, h: 45.2 },
  { x: 872.9, y: 495.0, w: 45.6, h: 45.2 },
  { x:   9.4, y: 549.3, w: 45.6, h: 45.2 },
  { x:  67.0, y: 549.3, w: 45.6, h: 45.2 },
  { x: 124.2, y: 549.3, w: 45.6, h: 45.2 },
  { x: 181.8, y: 549.3, w: 45.6, h: 45.2 },
  { x: 239.6, y: 549.3, w: 45.6, h: 45.2 },
  { x: 297.2, y: 549.3, w: 45.6, h: 45.2 },
  { x: 354.4, y: 549.3, w: 45.6, h: 45.2 },
  { x: 411.9, y: 549.3, w: 45.6, h: 45.2 },
  { x: 470.4, y: 549.3, w: 45.6, h: 45.2 },
  { x: 527.9, y: 549.3, w: 45.6, h: 45.2 },
  { x: 585.2, y: 549.3, w: 45.6, h: 45.2 },
  { x: 642.7, y: 549.3, w: 45.6, h: 45.2 },
  { x: 700.6, y: 549.3, w: 45.6, h: 45.2 },
  { x: 758.1, y: 549.3, w: 45.6, h: 45.2 },
  { x: 815.3, y: 549.3, w: 45.6, h: 45.2 },
  { x: 872.9, y: 549.3, w: 45.6, h: 45.2 },
  { x:   9.4, y: 602.9, w: 45.6, h: 45.2 },
  { x:  67.0, y: 602.9, w: 45.6, h: 45.2 },
  { x: 124.2, y: 602.9, w:  45.6, h: 45.2 },
  { x: 181.8, y: 602.9, w:  45.6, h: 45.2 },
  { x: 239.6, y: 602.9, w:  45.6, h: 45.2 },
  { x: 297.2, y: 602.9, w:  45.6, h: 45.2 },
  { x: 354.4, y: 602.9, w:  45.6, h: 45.2 },
  { x: 411.9, y: 602.9, w:  45.6, h: 45.2 },
  { x: 470.4, y: 602.9, w:  45.6, h: 45.2 },
  { x: 527.9, y: 602.9, w:  45.6, h: 45.2 },
  { x: 585.2, y: 602.9, w:  45.6, h: 45.2 },
  { x: 642.7, y: 602.9, w:  45.6, h: 45.2 },
  { x: 700.6, y: 602.9, w:  45.6, h: 45.2 },
  { x: 758.1, y: 602.9, w:  45.6, h: 45.2 },
  { x: 815.3, y: 602.9, w:  45.6, h: 45.2 },
  { x: 872.9, y: 602.9, w:  45.6, h: 45.2 },
  { x:   9.4, y: 657.1, w:  45.6, h: 45.2 },
  { x:  67.0, y: 657.1, w:  45.6, h: 45.2 },
  { x: 124.2, y: 657.1, w:  45.6, h: 45.2 },
  { x: 181.8, y: 657.1, w:  45.6, h: 45.2 },
  { x: 239.6, y: 657.1, w:  45.6, h: 45.2 },
  { x: 297.2, y: 657.1, w:  45.6, h: 45.2 },
  { x: 354.4, y: 657.1, w:  45.6, h: 45.2 },
  { x: 411.9, y: 657.1, w:  45.6, h: 45.2 },
  { x: 470.4, y: 657.1, w:  45.6, h: 45.2 },
  { x: 527.9, y: 657.1, w:  45.6, h: 45.2 },
  { x: 585.2, y: 657.1, w:  45.6, h: 45.2 },
  { x: 642.7, y: 657.1, w:  45.6, h: 45.2 },
  { x: 700.6, y: 657.1, w:  45.6, h: 45.2 },
  { x: 758.1, y: 657.1, w:  45.6, h: 45.2 },
  { x: 815.3, y: 657.1, w:  45.6, h: 45.2 },
  { x: 872.9, y: 657.1, w:  45.6, h: 45.2 },
  { x:   9.4, y: 710.8, w:  45.6, h: 45.2 },
  { x:  67.0, y: 710.8, w:  45.6, h: 45.2 },
  { x: 124.2, y: 710.8, w:  45.6, h: 45.2 },
  { x: 181.8, y: 710.8, w: 45.6, h: 45.2 },
  { x: 239.6, y: 710.8, w: 45.6, h: 45.2 },
  { x: 297.2, y: 710.8, w: 45.6, h: 45.2 },
  { x: 354.4, y: 710.8, w: 45.6, h: 45.2 },
  { x: 411.9, y: 710.8, w: 45.6, h: 45.2 },
  { x: 470.4, y: 710.8, w: 45.6, h: 45.2 },
  { x: 527.9, y: 710.8, w: 45.6, h: 45.2 },
  { x: 585.2, y: 710.8, w: 45.6, h: 45.2 },
  { x: 642.7, y: 710.8, w: 45.6, h: 45.2 },
  { x: 700.6, y: 710.8, w: 45.6, h: 45.2 },
  { x: 758.1, y: 710.8, w: 45.6, h: 45.2 },
  { x: 815.3, y: 710.8, w: 45.6, h: 45.2 },
  { x: 872.9, y: 710.8, w: 45.6, h: 45.2 },
  { x:   9.4, y: 765.0, w: 45.6, h: 45.2 },
  { x:  67.0, y: 765.0, w: 45.6, h: 45.2 },
  { x: 124.2, y: 765.0, w: 45.6, h: 45.2 },
  { x: 181.8, y: 765.0, w: 45.6, h: 45.2 },
  { x: 239.6, y: 765.0, w: 45.6, h: 45.2 },
  { x: 297.2, y: 765.0, w: 45.6, h: 45.2 },
  { x: 354.4, y: 765.0, w: 45.6, h: 45.2 },
  { x: 411.9, y: 765.0, w: 45.6, h: 45.2 },
  { x: 470.4, y: 765.0, w: 45.6, h: 45.2 },
  { x: 527.9, y: 765.0, w: 45.6, h: 45.2 },
  { x: 585.2, y: 765.0, w: 45.6, h: 45.2 },
  { x: 642.7, y: 765.0, w: 45.6, h: 45.2 },
  { x: 700.6, y: 765.0, w: 45.6, h: 45.2 },
  { x: 758.1, y: 765.0, w: 45.6, h: 45.2 },
  { x: 815.3, y: 765.0, w: 45.6, h: 45.2 },
  { x: 872.9, y: 765.0, w: 45.6, h: 45.2 },
  { x:   9.4, y: 819.5, w: 45.6, h: 45.2 },
  { x:  67.0, y: 819.5, w: 45.6, h: 45.2 },
  { x: 124.2, y: 819.5, w: 45.6, h: 45.2 },
  { x: 181.8, y: 819.5, w: 45.6, h: 45.2 },
  { x: 239.6, y: 819.5, w: 45.6, h: 45.2 },
  { x: 297.2, y: 819.5, w: 45.6, h: 45.2 },
  { x: 354.4, y: 819.5, w: 45.6, h: 45.2 },
  { x: 411.9, y: 819.5, w: 45.6, h: 45.2 },
  { x: 470.4, y: 819.5, w: 45.6, h: 45.2 },
  { x: 527.9, y: 819.5, w: 45.6, h: 45.2 },
  { x: 585.2, y: 819.5, w: 45.6, h: 45.2 },
  { x: 642.7, y: 819.5, w: 45.6, h: 45.2 },
  { x: 700.6, y: 819.5, w: 45.6, h: 45.2 },
  { x: 758.1, y: 819.5, w: 45.6, h: 45.2 },
  { x: 815.3, y: 819.5, w: 45.6, h: 45.2 },
  { x: 872.9, y: 819.5, w: 45.6, h: 45.2 },

  // y = 873.7 row
  { x:   9.4, y: 873.7, w: 45.6, h: 45.2 },
  { x:  67.0, y: 873.7, w: 45.6, h: 45.2 },
  { x: 124.2, y: 873.7, w: 45.6, h: 45.2 },
  { x: 181.8, y: 873.7, w: 45.6, h: 45.2 },
  { x: 239.6, y: 873.7, w: 45.6, h: 45.2 },
  { x: 297.2, y: 873.7, w: 45.6, h: 45.2 },
  { x: 354.4, y: 873.7, w: 45.6, h: 45.2 },
  { x: 411.9, y: 873.7, w: 45.6, h: 45.2 },
  { x: 470.4, y: 873.7, w: 45.6, h: 45.2 },
  { x: 527.9, y: 873.7, w: 45.6, h: 45.2 },
  { x: 585.2, y: 873.7, w: 45.6, h: 45.2 },
  { x: 642.7, y: 873.7, w: 45.6, h: 45.2 },
  { x: 700.6, y: 873.7, w: 45.6, h: 45.2 },
  { x: 758.1, y: 873.7, w: 45.6, h: 45.2 },
  { x: 815.3, y: 873.7, w: 45.6, h: 45.2 },
  { x: 872.9, y: 873.7, w: 45.6, h: 45.2 },

  // y = 927.4 row
  { x:   9.4, y: 927.4, w: 45.6, h: 45.2 },
  { x:  67.0, y: 927.4, w: 45.6, h: 45.2 },
  { x: 124.2, y: 927.4, w: 45.6, h: 45.2 },
  { x: 181.8, y: 927.4, w: 45.6, h: 45.2 },
  { x: 239.6, y: 927.4, w: 45.6, h: 45.2 },
  { x: 297.2, y: 927.4, w: 45.6, h: 45.2 },
  { x: 354.4, y: 927.4, w: 45.6, h: 45.2 },
  { x: 411.9, y: 927.4, w: 45.6, h: 45.2 },
  { x: 470.4, y: 927.4, w: 45.6, h: 45.2 },
  { x: 527.9, y: 927.4, w: 45.6, h: 45.2 },
  { x: 585.2, y: 927.4, w: 45.6, h: 45.2 },
  { x: 642.7, y: 927.4, w: 45.6, h: 45.2 },
  { x: 700.6, y: 927.4, w: 45.6, h: 45.2 },
  { x: 758.1, y: 927.4, w: 45.6, h: 45.2 },
  { x: 815.3, y: 927.4, w: 45.6, h: 45.2 },
  { x: 872.9, y: 927.4, w: 45.6, h: 45.2 },
  { x: 324.9, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 324.9, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 324.9, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 382.3, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 382.3, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 382.3, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 439.1, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 439.1, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 439.1, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 496.5, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 496.5, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 496.5, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 554.9, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 554.9, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 554.9, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 634.9, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 634.9, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 634.9, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 692.3, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 692.3, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 692.3, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 749,   y: 1012.2, w: 48.8, h: 45.2 },
  { x: 749.0, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 749.0, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 806.4, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 806.4, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 806.4, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 864.8, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 864.8, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 864.8, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 18.0,  y: 1012.2, w: 48.8, h: 45.2 },
  { x: 18.0,  y: 1066.5, w: 48.8, h: 45.2 },
  { x: 18.0,  y: 1120.8, w: 48.8, h: 45.2 },
  { x: 75.4,  y: 1012.2, w: 48.8, h: 45.2 },
  { x: 75.4,  y: 1066.5, w: 48.8, h: 45.2 },
  { x: 75.4,  y: 1120.8, w: 48.8, h: 45.2 },
  { x: 132.2, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 132.2, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 132.2, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 189.6, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 189.6, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 189.6, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 248.0, y: 1012.2, w: 48.8, h: 45.2 },
  { x: 248.0, y: 1066.5, w: 48.8, h: 45.2 },
  { x: 248.0, y: 1120.8, w: 48.8, h: 45.2 },
  { x: 0.5,   y: 1206.5, w: 49.6, h: 18.0 },
  { x: 56.2,  y: 1206.5, w: 35.9, h: 18.0 },
  { x: 99.1,  y: 1206.5, w: 17.9, h: 18.0 },
  { x: 123.5, y: 1206.5, w: 25.3, h: 18.0 },
  { x: 155.2, y: 1206.5, w: 37.2, h: 18.0 },
  { x: 198.4, y: 1206.5, w: 17.9, h: 18.0 },
  { x: 222.4, y: 1206.5, w: 38.1, h: 18.0 },
  { x: 265.3, y: 1206.5, w: 14.7, h: 18.0 },
  { x: 285.2, y: 1206.5, w: 63.1, h: 18.0 },
  { x: 354.0, y: 1206.5, w: 56.0, h: 18.0 },
  { x: 416.1, y: 1206.5, w: 30.4, h: 18.0 },
  { x: 452.0, y: 1206.5, w: 30.4, h: 18.0 },  
  { x: 487.8,  y: 1206.5, w:  32.0, h: 18 },
  { x: 526.3,  y: 1206.5, w:  32.0, h: 18 },
  { x: 564.1,  y: 1206.5, w:  32.0, h: 18 },
  { x: 601.8,  y: 1206.5, w:  52.2, h: 18 },
  { x: 660.1,  y: 1206.5, w:  49.0, h: 18 },
  { x: 715.2,  y: 1206.5, w:  74.9, h: 18 },
  { x: 795.6,  y: 1206.5, w:  20.2, h: 18 },
  { x: 821.2,  y: 1206.5, w:  33.0, h: 18 },
  { x: 859.9,  y: 1206.5, w:  58.3, h: 18 },
  { x: 189.5,  y: 1251.5, w: 120.7, h: 18 },
  { x: 321.1,  y: 1251.5, w:  20.6, h: 18 },
  { x: 351.5,  y: 1251.5, w:  35.9, h: 18 },
  { x: 398.7,  y: 1251.5, w:  60.4, h: 18 },
  { x: 469.1,  y: 1251.5, w:  38.0, h: 18 },
  { x: 517.1,  y: 1251.5, w:  65.2, h: 18 },
  { x: 593.1,  y: 1251.5, w:  51.8, h: 18 },
  { x: 655.8,  y: 1251.5, w: 106.7, h: 18 },
  { x: 772.7,  y: 1251.5, w: 154.6, h: 18 },
  { x: 189.7,  y: 1557.2, w:  24.2, h: 18 },
  { x: 198.7,  y: 1584.5, w:  24.2, h: 18 },
  { x: 225.9,  y: 1557.2, w:  75.7, h: 18 },
  { x: 234.9,  y: 1584.5, w:  75.7, h: 18 },
  { x: 314.0,  y: 1557.2, w:  42.9, h: 18 },
  { x: 323.0,  y: 1584.5, w:  42.9, h: 18 },
  { x: 370.8,  y: 1557.2, w:  96.8, h: 18 },
  { x: 379.7,  y: 1584.5, w:  96.8, h: 18 },
  { x: 481.0,  y: 1557.2, w:  68.2, h: 18 },
  { x: 489.9,  y: 1584.5, w:  68.2, h: 18 },
  { x: 567.5,  y: 1557.2, w: 119.5, h: 18 },
  { x: 700.5,  y: 1557.2, w:  48.7, h: 18 },
  { x: 762.7,  y: 1557.2, w:  66.4, h: 18 },
  { x: 843.9,  y: 1557.2, w:  45.6, h: 18 },
  { x: 904.6,  y: 1557.2, w:  91.1, h: 18 },
  { x: 1010.2, y: 1557.2, w:  16.7, h: 18 },
  { x: 1038.8, y: 1557.2, w:  78.0, h: 18 }
  ]

// right after your svgRects definition:
let currentHeights = svgRects.map(r => r.h);
const RISE_AMOUNT = 100;       // how much higher selected bars should rise
const ANIM_SPEED  = 0.1;       // between 0 and 1, controls easing
// 1) At the very top, _after_ you declare svgRects:

// We'll store for each bar the millis() when it was first highlighted
let riseStartTime = [];

// And the current depth for each bar
let barRiseTimers;
const RISE_DEPTH = 200;      // how “tall” they grow
const MAX_RISE = 1000;
const RISE_DELAY = 2000;    // ms to wait once highlighted
const REST_DEPTH = 10;
const BASE_DEPTH   = 10;    // starting thickness
const TARGET_DEPTH = 1000;   // how tall they grow
const RISE_SPEED   = 200;   // pixels per second
let barDepths = [];         // will hold the current depth for each bar


let highlightIndices = [];
let fingerX = 0;
let fingerY = 0;
let gazeData = [];
let camAlpha = 0;      // horizontal angle
let camBeta = 0;       // vertical angle
// at top, alongside your existing camAngleX/Y
let camSensitivity = 0.005;
let camRadius = 2000;
let camTheta  = 0;
let camPhi    = Math.PI/4;
// VERY top of the file:
const FRONT_THETA = 0, FRONT_PHI = 0;
const SIDE_THETA  = PI/4, SIDE_PHI  = -PI/4;

// add this below setup()
// initialize our arrays once
svgRects.forEach((_, i) => {
  riseStartTime[i] = null;    // not rising yet
  barDepths[i]     = 10;      // initial depth
});

function mouseDragged() {
  if (mouseButton === CENTER) {
    // horizontal drag rotates around Y
    camAngleY += (mouseX - pmouseX) * camSensitivity;
    // vertical drag rotates around X (invert if you prefer)
    camAngleX -= (mouseY - pmouseY) * camSensitivity;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // angleMode(RADIANS) is the default—remove your DEGREES call
  
  // --- video + handpose init ---
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();
  handpose = ml5.handpose(video, ()=> console.log("loaded"));
  handpose.on("predict", results => predictions = results);

  barDepths      = svgRects.map(r => 10);
    barDepths = svgRects.map(_ => REST_DEPTH);      // start all at thickness=10
    barRiseTimers  = svgRects.map(r => null);
  
  // --- buttons ---
  hideCameraBtn = createButton("Toggle Camera")
    .position(20,60)
    .mousePressed(() => {
      showCamera = !showCamera;
      hideCameraBtn.html(showCamera?"Hide Camera":"Show Camera");
    });

  toggleViewBtn = createButton("Toggle Side View");
  toggleViewBtn.position(20, 20);
  toggleViewBtn.mousePressed(() => {
    if (!tiltedView) {
      // we’re *about* to go into side‑view: save whatever the user
      // has been orbiting around
      savedCam.theta  = camTheta;
      savedCam.phi    = camPhi;
      savedCam.panX   = camPanX;
      savedCam.panY   = camPanY;
      savedCam.radius = camRadius;

      // snap into side‑view
      camTheta = SIDE_THETA;
      camPhi   = SIDE_PHI;
    } else {
      // restore the last “free‑orbit” values
      camTheta = savedCam.theta;
      camPhi   = savedCam.phi;
      camPanX  = savedCam.panX;
      camPanY  = savedCam.panY;
      camRadius= savedCam.radius;
    }
    tiltedView = !tiltedView;
  });
    
    

  // --- leave your waitForWebgazer() call here if you still need it ---
  //waitForWebgazer();
}

  handpose = ml5.handpose(video, () => {
    console.log("Handpose model loaded.");
  });

  handpose.on("predict", (results) => {
    predictions = results;
  })


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) {
  // event.delta is positive when scrolling down
  camZoom += event.delta * 0.5;
  camZoom = constrain(camZoom, 100, 3000);
  return false; // prevent page scroll
}
function mouseDragged() {
  // rotate with middle mouse
  if (mouseButton === CENTER) {
    camAngleY += movedX * 0.005;
    camAngleX += movedY * 0.005;
  }
  // pan when shift + left mouse
  else if (mouseButton === LEFT && keyIsDown(SHIFT)) {
    camPanX -= movedX;
    camPanY += movedY;
  }
}

let barHeights = svgRects.map(r => 10);

function draw() {
  const cx = camPanX + camRadius * cos(camPhi) * sin(camTheta);
  const cy = camPanY + camRadius * sin(camPhi);
  const cz =              camRadius * cos(camPhi) * cos(camTheta);

  // --- point the camera at the origin (or adjust target if you like) ---
  camera(cx, cy, cz,
         camPanX, camPanY, 0,
         0, 40, -0);
  background(250);
  ambientLight(80);                             // base fill light
  directionalLight(255, 255, 255, 0.5, -1, 0);  // a white “sun” in front
  directionalLight(200, 200, 150, -0.5, 1, 0);  // a softer fill from the opposite side
  //default view
    if (viewMode === "focused") {
    rotateX(radians(55));
    rotateZ(radians(-30));
    scale(1.2);
      camera(
    camPanX, camPanY, camZoom,           // eye position
    camPanX + sin(camAngleY)*100,        // lookAt X
    camPanY + sin(camAngleX)*100,        // lookAt Y
    0,                                   // lookAt Z
    0, 1, 0                              // up vector
  );
  }
    
  // Show webcam (mirrored) in corner
  if (showCamera) {
  push();
    translate(width/4, -height/2, -500);
    translate(640, 0);
    scale(-1,1,1);
    image(video, 0, 0, 320, 240);
  pop();
}

  // Set model space origin
  translate(-1170 / 2, -1770 / 2, -500); // Centers in X/Y and pulls back Z to frame better
  

  // Draw newspaper outline
  noFill();
  stroke(100);
  strokeWeight(2);
  rect(-25, -25, 1170, 1770);

  // Reset highlights
  highlightIndices = [];

  // If hand is detected
  if (predictions.length > 0) {
    const hand = predictions[0];
    const tip = hand.annotations.indexFinger[3];
    const tipX = tip[0];
    const tipY = tip[1];

    fingerX = map(video.width - tipX, 0, video.width, -25, 1145);  // mirrored x
    fingerY = map(tipY, 0, video.height, -25, 1745);               // direct y

    // Check nearby bars in radius
    const radius = 100;
    for (let i = 0; i < svgRects.length; i++) {
      let { x, y, w, h } = svgRects[i];
      let centerX = x + w / 2;
      let centerY = y + h / 2;
      let d = dist(fingerX, fingerY, centerX, centerY);
      if (d < radius) {
        highlightIndices.push(i);
      }
    }

    // Draw fingertip
    push();
    translate(fingerX, fingerY, 10);
    fill(0, 255, 0);
    noStroke();
    sphere(10);
    pop();
  }

  // Draw bars
  for (let i = 0; i < svgRects.length; i++) {
    let { x, y, w, h } = svgRects[i];
    // inside your for‑loop that draws bars:
    push();
      translate(x + w/2, y + h/2, barDepths[i]/2);
      if (highlightIndices.includes(i)) {
        specularMaterial(255, 50, 50);  // shiny red
        shininess(50);
      } else {
        ambientMaterial(100, 100, 100); // matte gray
      }
      box(w, h, barDepths[i]);
    pop();
  }
  // update each bar’s depth based on whether it’s highlighted
  for (let i = 0; i < svgRects.length; i++) {
    if ( highlightIndices.includes(i) ) {
      // Grow toward TARGET_DEPTH
      barDepths[i] += (RISE_SPEED * (deltaTime / 1000));
      barDepths[i] = min(barDepths[i], TARGET_DEPTH);
    } //else {
       //Shrink back to BASE_DEPTH
      //barDepths[i] -= (RISE_SPEED * (deltaTime / 100));
      //barDepths[i] = max(barDepths[i], BASE_DEPTH);
    //}
  }

  // Then draw your bars *using* barDepths[i] as the z‑size:
  for (let i = 0; i < svgRects.length; i++) {
    const { x, y, w, h } = svgRects[i];
    push();
      // lift the box so the “bottom” sits on z=0
      translate(x + w/2, y + h/2, barDepths[i]/2);
      fill( highlightIndices.includes(i) ? [255,0,0] : [100] );
      noStroke();
      box(w, h, barDepths[i]);
    pop();
  }

}
     highlightIndices.forEach(i => {
    if (riseStartTime[i] === null) {
      riseStartTime[i] = millis();
    }
  });
  for (let i = 0; i < svgRects.length; i++) {
    if (highlightIndices.includes(i)) {
      // rise!
      barDepths[i] = min(barDepths[i] + RISE_SPEED, MAX_RISE);
    } else {
      // optional: reset when you let go
      barDepths[i] = max(barDepths[i] - RISE_SPEED, REST_DEPTH);
    }
  }

  // draw bars using the animated depth:
  

  // update depths when their timers fire:
  barDepths.forEach((depth, i) => {
    if (barRiseTimers[i] !== null && millis() > barRiseTimers[i]) {
      barDepths[i]     = RISE_DEPTH;
      barRiseTimers[i] = null;   // only fire once
    }
  });

  for (let i = 0; i < svgRects.length; i++) {
    let { x, y, w, h } = svgRects[i];

    // Compute how deep this bar should be right now
    if (riseStartTime[i] !== null) {
      let elapsedSec = (millis() - riseStartTime[i]) / 1000;
      // grow from initial 10 up to something (e.g. max 300)
      barDepths[i] = min(10 + RISE_SPEED * elapsedSec, 300);
    }

    push();
      // move the bar so its "base" sits on z=0 plane
      translate(x + w/2, y + h/2, barDepths[i]/2);
      fill(highlightIndices.includes(i) ? color(255,0,0) : color(100));
      noStroke();
      box(w, h, barDepths[i]);
    pop();
  }
  // Draw bars (now using barHeights[i] instead of fixed 10)
  for (let i = 0; i < svgRects.length; i++) {
    let { x, y, w, h } = svgRects[i];
    push();
      translate(x + w/2, y + h/2, 0);
      fill( highlightIndices.includes(i) ? [255,0,0] : [100] );
      noStroke();
      box(w, h, barHeights[i]);
    pop();
  }

function mouseDragged() {
  // only orbit when middle mouse is down
  if (mouseButton === CENTER) {
    // tweak sensitivities to taste
    camTheta += movedX * 0.01;
    camPhi   -= movedY * 0.01;
    // clamp phi so you don’t flip over the top:
    camPhi = constrain(camPhi, -PI/2 + 0.01, PI/2 - 0.01);
  }
}

function mouseWheel(event) {
  // zoom in/out
  camRadius += event.delta * 0.5;       // adjust zoom speed
  camRadius = max(camRadius, 100);      // don’t let it go inside the scene
}