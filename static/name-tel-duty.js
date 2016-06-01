//function draw_ntd_window(divid,id,marginleft,margintop,marginright,marginbottom,caption)
//{
//    var width = document.getElementById(id).offsetWidth;
//    var height = document.getElementById(id).offsetHeight;
//    var ntd_window = document.getElementById(id);
//    var ctx = ntd_window.getContext("2d");
//    ctx.fillStyle = 'rgba(255,0,0,0.5)';
//    ctx.fillRect(0,0,width,height);
//    draw_frame(ctx,marginleft,margintop,width-marginright,height - marginbottom,'rgba(0,0,255,1)',3,caption);
//}
//
//function draw_frame(ctx,left,top,right,bottom,color,boardwidth,caption)
//{
//    ctx.strokeStyle = "rgba(0,0,255,1)";
//    ctx.lineWidth = 1;
//    var board2 = boardwidth * 2;
//    ctx.beginPath();
//    ctx.strokeRect(left - boardwidth,top - boardwidth,board2,board2);
//    ctx.moveTo(left + boardwidth,top);
//    ctx.lineTo(left + boardwidth + (right - left - 300 - board2)/2,top);
//    ctx.fillText(caption,left + boardwidth + (right - left - 300 - board2)/2,top);
//
//    ctx.moveTo(left + boardwidth + (right - left - 300 - board2)/2 + 300,top);
//    ctx.lineTo(right - boardwidth,top);
//
//    ctx.strokeRect(right - boardwidth,top - boardwidth,board2,board2);
//    ctx.moveTo(right,top + boardwidth);
//    ctx.lineTo(right,bottom - boardwidth);
//
//    ctx.strokeRect(right - boardwidth,bottom - boardwidth,board2,board2);
//    ctx.moveTo(right - boardwidth,bottom);
//    ctx.lineTo(left + boardwidth,bottom);
//
//    ctx.strokeRect(left - boardwidth,bottom - boardwidth,board2,board2);
//    ctx.moveTo(left,bottom - boardwidth);
//    ctx.lineTo(left,top + boardwidth);
//    ctx.closePath();
//    ctx.stroke();
//}