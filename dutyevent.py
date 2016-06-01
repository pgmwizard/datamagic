#! /usr/bin/python
# -*- coding:utf-8 -*-
import os
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web
import tornado.websocket
import json
from tornado.options import define,options

__author__ = 'wuliming'
class DMSocketHandle(tornado.websocket.WebSocketHandler):
    clients = set()
    def open(self):
        DMSocketHandle.clients.add(self)

    def on_close(self):
        DMSocketHandle.clients.remove(self)

    def on_message(self,message):
        print message


