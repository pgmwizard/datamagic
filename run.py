#! /usr/bin/python
# -*- coding:utf-8 -*-
import os
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import thread
import time
from tornado.options import define,options
from dutyevent import DMSocketHandle
import NetPlatform
import DutyMonitor
import NetMonitor
import SystemMonitor
import DataMonitor
import idsdb
import json
import imsnetdb
define("port",default=8000,help="run on the given port",type = int)
define("ip",default="10.211.55.10",help="run on the given ip",type = str)


global_template_path = os.path.join(os.path.dirname(__file__), "templates")
global_static_path = os.path.join(os.path.dirname(__file__), "static")
global_file_path=os.path.join(os.path.dirname(__file__),'files')
index=0;
cindex = 0;
class IndexHandler(tornado.web.RequestHandler):
	def get(self):
		greeting = self.get_argument('greeting','Hello')
		print "greeting=%s"%greeting
		rs = idsdb.ids_getDataDay('2016-5-28','2016-5-29');
		print rs;
		self.render('index.html',header='myheader',title = 'math',inport = options.port,inip = options.ip,books = ['math','physisc','muisc'],rsinfo = rs)

class DMDutyInfoHandle(tornado.web.RequestHandler):
	def get(self):
		print 'DMDutyInfoHandle(tornado.web.RequestHandler)'
		DutyInfo = {"date":"2016-5-28","leadername":"张三"};
		jsonstr = json.dumps(DutyInfo);
		self.write(jsonstr)
class DMOverhaulHandle(tornado.web.RequestHandler):
	def get(self):
		print 'DMOverhaulHandle(tornado.web.RequestHandler)'
		rs = idsdb.ids_getDataDay('2016-5-28','2016-5-29');
		print rs;
		jsonstr = json.dumps(rs);
		self.write(jsonstr)

class DMNameTelDutyHandle(tornado.web.RequestHandler):
    def get(self):
        global index
        pathfile = os.path.join(global_file_path,'dayduty.json');
        fp = file('/home/wuliming/share/datamagic/files/dayduty.json','r');
        ss = fp.read();
        jobj = json.loads(ss);
        index = index + 1;
        if index >= len(jobj):
            index = 0;
        str =json.dumps(jobj[index])
        #print str
        self.write(str)
class DMControlCenterDutyHandle(tornado.web.RequestHandler):
    def get(self):
        global cindex
        pathfile = os.path.join(global_file_path,'controlduty.json');
        fp = file('/home/wuliming/share/datamagic/files/controlduty.json','r');
        ss = fp.read();
        jobj = json.loads(ss);
        cindex = cindex + 1;
        if cindex >= len(jobj):
            cindex = 0;
        str =json.dumps(jobj[cindex])
        #print str
        self.write(str)
# 和前端数据交互
def SendDataThread():
	count = 0
	while True:
		for client in DMSocketHandle.clients:
			client.write_message('the count = ' + str(count));
		time.sleep(1)
		count = count + 1



def NotifyClient(message):
		for client in DMSocketHandle.clients:
			client.write_message(message);


if __name__ == "__main__":
	# 构造应用
	tornado.options.parse_command_line()
	app = tornado.web.Application(
			handlers=[
				(r"/",IndexHandler),
				(r"/recvmsg",DMSocketHandle),
				(r"/dutyInfo",DMDutyInfoHandle),
				(r"/OverhaulInfo",DMOverhaulHandle),
                (r"/name_tel_duty",DMNameTelDutyHandle),
                (r"/control-center-duty",DMControlCenterDutyHandle),
			],
			template_path=global_template_path,
			static_path = global_static_path,
			)
	rs = idsdb.ids_getDataDay('2016-5-28','2016-5-29');
	print rs;
	#print 'this is my first program'
	# 启动刷新线程
	#thread.start_new_thread(SendDataThread,())
	# 启动后台数据读取线程
	#DataMonitor.DataMonitorManager.debuginfo();
	#DataMonitor.DataMonitorManager.start();
	# 启动服务器
	http_server = tornado.httpserver.HTTPServer(app)
	http_server.listen(options.port)
	tornado.ioloop.IOLoop.instance().start()
