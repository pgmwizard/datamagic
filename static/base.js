var g_curOverhaul = 0;
function magicTable()
{
    this.arHeader = new Array();
    this.arItems = new Array();
    this.arItems.length = 0;
    this.addcol = function(caption,width)
    {
        var col = new Object();
        col.caption = caption;
        col.width = width;
        this.arHeader.push(col);
    }
    this.addItem = function()
    {
        var item = new Array();
        this.arItems.push(item);
    }
    this.setItem = function(nItem,col,value)
    {
       this.arItems[nItem][col] = value;
    }
    this.RemoveAll = function()
    {
       this.arItems = [];
    }
}
var DayOverhaul = new magicTable();
DayOverhaul.addcol("编号",120);
DayOverhaul.addcol("系统名称",150);
DayOverhaul.addcol("时间",100);
DayOverhaul.addcol("一单两票",100);
DayOverhaul.addcol("开始",100);
DayOverhaul.addcol("完成",100);

DayOverhaul.addItem();
DayOverhaul.setItem(0,0,"GZP20150319016");
DayOverhaul.setItem(0,1,"仿真平台");
DayOverhaul.setItem(0,2,"03-19 10:30");

DayOverhaul.addItem();
DayOverhaul.setItem(1,0,"GZP20150319006");
DayOverhaul.setItem(1,1,"集中ERP");
DayOverhaul.setItem(1,2,"03-19 12:20");

DayOverhaul.addItem();
DayOverhaul.setItem(2,0,"GZP20150319005");
DayOverhaul.setItem(2,1,"生成管理");
DayOverhaul.setItem(2,2,"03-19 14:00");


var DayContact = new magicTable();
DayContact.addcol("单号",150);
DayContact.addcol("发起时间",150);
DayContact.addcol("结束时间",100);
DayContact.addcol("专责",100);
DayContact.addcol("状态",200);

DayContact.addItem();
DayContact.setItem(0,0,"GZP20150319016");
DayContact.setItem(0,1,"10:30");
DayContact.setItem(0,2,"11:30");
DayContact.setItem(0,3,"仿真平台");


DayContact.addItem();
DayContact.setItem(1,0,"GZP20150319006");
DayContact.setItem(1,1,"10:30");
DayContact.setItem(1,2,"11:30");
DayContact.setItem(1,3,"集中ERP");

DayContact.addItem();
DayContact.setItem(2,0,"GZP20150319005");
DayContact.setItem(2,1,"10:30");
DayContact.setItem(2,2,"11:30");
DayContact.setItem(2,3,"生成管理");

function getctxinfo(id)
{
    var width = document.getElementById(id).offsetWidth;
    var height = document.getElementById(id).offsetHeight;
    var ntd_window = document.getElementById(id);
    var ctx = ntd_window.getContext("2d");
    return [ctx,width,height];
}
function draw_window(ctx,width,height,marginleft,margintop,marginright,marginbottom,topleftwidth,toprightwidth,caption)
{
    //ctx.fillStyle = 'rgba(0,0,128,1.0)';
    //ctx.fillRect(0,0,width,height);
    draw_frame(ctx,marginleft,margintop,width-marginright,height - marginbottom,'rgba(0,0,255,1)',3,topleftwidth,toprightwidth,caption);
}

function draw_frame(ctx,left,top,right,bottom,color,boardwidth,topleftwidth,toprightwidth,caption)
{
    ctx.strokeStyle = "rgba(0,234,255,1)";
    ctx.lineWidth = 4;
    var board2 = boardwidth * 2;
    ctx.beginPath();
    ctx.strokeRect(left - boardwidth,top - boardwidth,board2,board2);
    ctx.moveTo(left + boardwidth,top);
    ctx.lineTo(left + topleftwidth,top);

    ctx.moveTo(right - toprightwidth,top);
    ctx.lineTo(right - boardwidth,top);

    ctx.strokeRect(right - boardwidth,top - boardwidth,board2,board2);
    ctx.moveTo(right,top + boardwidth);
    ctx.lineTo(right,bottom - boardwidth);

    ctx.strokeRect(right - boardwidth,bottom - boardwidth,board2,board2);
    ctx.moveTo(right - boardwidth,bottom);
    ctx.lineTo(left + boardwidth,bottom);

    ctx.strokeRect(left - boardwidth,bottom - boardwidth,board2,board2);
    ctx.moveTo(left,bottom - boardwidth);
    ctx.lineTo(left,top + boardwidth);
    ctx.closePath();
    ctx.stroke();

    ctx.font = "20px 黑体";
    ctx.textAlign="left";
    ctx.fillStyle = "#A4EBEB";//绘制当日检修里面的文字颜色
	
    ctx.fillText(caption,topleftwidth + 10,top + 8);

   // draw_table_header(ctx,DayOverhaul,left+10,top+30);
}
function draw_table_progressbar(ctx,left,top,width,height)
{
    var oldstyle = ctx.fillStyle;
    ctx.fillStyle = 'rgba(128,0,0,1.0)';
    ctx.fillRect(left,top,width,height);
    ctx.fillStyle = oldstyle;
}

function draw_table(ctx,table,left,top,width,height)
{
    draw_table_header(ctx,table,left,top);
    draw_table_body(ctx,table,left + 20,top+20,width - 40,height - 50,g_curOverhaul);
    g_curOverhaul = g_curOverhaul + 5;
    if(g_curOverhaul >= table.arItems.length)
        g_curOverhaul = 0;
}

function draw_table_body(ctx,table,left,top,width,height,nstartindex)
{

    ctx.font = "20px 微软雅黑 bold";
    ctx.fillStyle = 'rgba(ff,00,00,0.3)';

    ctx.clearRect(left,top,width,height);

    ctx.fillStyle = "rgba(0,234,255,1)";
    ctx.align =  'center';
    var itemtop = top + 36;
    for(var i = nstartindex;i < nstartindex + 5; i ++)
    {
        if(i >= table.arItems.length)
            break;
        ctx.font = "16px 微软雅黑 bold";
        var item = table.arItems[i];
        start = left;
        for(var j = 0;j < table.arHeader.length - 3; j ++)
        {

            ctx.fillText(item[j],start + table.arHeader[j].width/2,itemtop);
            start += table.arHeader[j].width;
        }
        draw_table_progressbar(ctx,start+10,itemtop - 20,260,20);
        itemtop += 36;
    }

}

function draw_table_header(ctx,table,left,top)
{
//    var table_window = document.getElementById(id);
//    var ctx = table_window.getContext("2d");
    var start = left;
    ctx.font = "22px 黑体 bold";
    ctx.textAlign="center";
    ctx.fillStyle = "rgba(0,234,255,1)";
    for(var i = 0;i < table.arHeader.length; i ++)
    {
        ctx.fillText(table.arHeader[i].caption,start + table.arHeader[i].width/2,top);
        start += table.arHeader[i].width;
    }
    ctx.beginPath();
    ctx.moveTo(left,top + 8);
    ctx.lineTo(start,top + 8);
    ctx.stroke();


}

function ReloadFrame(strAdress,OnRecv)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var jsonstr = xmlhttp.responseText;
            Jsonobj = eval('('+ jsonstr + ')');
            OnRecv(Jsonobj);
        }
    }
    xmlhttp.open("GET",strAdress,true);
    xmlhttp.send();
}
function Reload()
{
    ReloadFrame("/OverhaulInfo",RefreshDayOverhaul)
}

function RefreshOverhaulView()
{
    var infomo = getctxinfo("day-overhaul");
    //draw_table_body(infomo[0],DayOverhaul,20 + 12,80,infomo[1]-48,infomo[2]-80 -24,g_curOverhaul);
    g_curOverhaul = g_curOverhaul + 5;
    if(g_curOverhaul >= DayOverhaul.arItems.length)
        g_curOverhaul = 0;
}
function RefreshDayOverhaul(JsonObject)
{
    DayOverhaul.RemoveAll();
    var len = JsonObject.length;
    for(var i = 0;i < len;i ++)
    {
        DayOverhaul.addItem()
        DayOverhaul.setItem(i,0,JsonObject[i].id);
        DayOverhaul.setItem(i,1,JsonObject[i].name);
        DayOverhaul.setItem(i,2,JsonObject[i].starttime);
    }
}

/*
  实际传入一个要canvas对像，，和一个jsonObject对像
*/
function refresh_duty()
{
    ReloadFrame("/name_tel_duty",refresh_name_tel_duty);
    ReloadFrame("/control-center-duty",refresh_control_center_duty);
}
function  refresh_name_tel_duty(JsonObject)
{
    var info = getctxinfo("name-tel-duty");
    info[0].fillStyle = 'rgba(ff,00,00,0.3)';
    info[0].clearRect(12,30,360-24,576-60);
    printText(info[0],JsonObject)
}
function  refresh_control_center_duty(jsonObject)
{
    var info = getctxinfo("control-center-duty");
    info[0].fillStyle = 'rgba(ff,00,00,0.3)';
    info[0].clearRect(12,30,360-24,576-60);
    printText(info[0],jsonObject);
}
function printText(ctx,jsonObject){
	var x = 60;
	var y  = 60;
	ctx.fillStyle = "#A4EBEB";
	ctx.textAlign="left"; //设置文字左对齐
	ctx.font = "26px 黑体";
	ctx.beginPath();
    //x=x + 20 ;
	//ctx.fillText(jsonObject.workShift,107,112);


    ctx.fillText(jsonObject.name,80,112);

	//x=x + 60 ;
	ctx.fillText(jsonObject.post,80,138);

    ctx.fillText(jsonObject.level,80,164);

    ctx.fillText(jsonObject.phone,80,200);//绘制领班的电话

	//绘制对应的值班员头像,这种方式是直接内嵌入图片里面的内容
	var img = new Image()
	//img.src="img/pic.png";
	//img.src="{{static_url('name.jpg') }}";
	img.src=jsonObject.pic; //得到文件对里面的pic
	ctx.drawImage(img,194,74,88,104);

	//x=x + 60 ;
	y = y + 14;

    ctx.font = "20px 黑体";
    ctx.fillStyle = "rgba(3,182,189,1)";
    ctx.lineWidth = 2;
	var childleft = 90;
	var childtop = 236;
	for(var i = 0;i <jsonObject.child.length;i ++)
	{
		ctx.fillText(jsonObject.child[i].name,childleft,childtop + 18);
		ctx.fillText('电话:'+ jsonObject.child[i].phone,childleft,childtop +20 + 18);

        ctx.fillStyle = "#A4EBEB";
        ctx.fillText(jsonObject.child[i].post,childleft + 140,childtop +20 + 18 + 18);
        ctx.moveTo(childleft + 100, childtop +20 + 18 + 14);
        ctx.lineTo(childleft + 140, childtop +20 + 18 + 14);
        ctx.fillStyle = "rgba(3,182,189,1)";

        ctx.moveTo(72 + 5, childtop);
        ctx.arc(72, childtop, 5, 0, 3.1415926 * 2, false);

		childtop += 72;
	}

	//moveTo和lineTo第一个是水平的位置，第二个是竖直方向的位置
	//画竖线
	ctx.moveTo(60,172);
	ctx.lineTo(60,215);

	//绘制电话上面显示的横线
	ctx.moveTo(60,203);
	ctx.lineTo(330,203);

	//画弯角线，将上方领导和下方的员工一起进行弯线配对
	ctx.moveTo(60,215);
	ctx.lineTo(72,236);

	//画竖线
	ctx.moveTo(72,236);
	ctx.lineTo(72,236 + 72 * jsonObject.child.length);
	ctx.closePath();
	ctx.stroke();
}


/**
 * [drawNetState description]
 * @param  {[type]} ctx    [canvas对像]
 * @param  {[type]} title  [显示的canvals标题]
 * @param  {[type]} left   [left左侧的内容显示的与父容器之间间隔]
 * @param  {[type]} top    [top顶部的内容显示与父容器之间间隔]
 * @param  {[type]} width  [canvals显示的网格大小]
 * @param  {[type]} height [网格显示的高度]
 * @return {[type]}        [description]
 */
function drawNetState(ctx,title,left,top,width,height){
	ctx.beginPath();
	ctx.lineWidth="5";
	ctx.strokeStyle="red"; // 红色路径
	ctx.moveTo(0,75);
	ctx.lineTo(250,75);
	ctx.stroke(); // 进行绘制

	ctx.closePath();
    ctx.stroke();

}