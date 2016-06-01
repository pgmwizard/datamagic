__author__ = 'wuliming'
import threading
import time,sched

__polling__time__ = 60
s =sched.scheduler(time.time,time.sleep);
class MonitorNode(object):
    def __init__(self,name,fun,interval):
        self.name = name;
        self.fun = fun;
        self.interval = interval;
        s.enter(self.interval,1,self.fun,());


class DataMonitorManager(object):
    MonitorNodes = set()
    @staticmethod
    def Register(node):
        DataMonitorManager.MonitorNodes.add(node)
    @staticmethod
    def start():
        s.run();
        # for node in DataMonitorManager.MonitorNodes:
        #     if name == None:
        #         node.start();
        #     elif name == node.name:
        #         node.start();
    @staticmethod
    def stop(name):
         for node in DataMonitorManager.MonitorNodes:
            if name == None:
                node.stop();
            elif name == node.name:
                node.stop();
    @staticmethod
    def debuginfo():
        for node in DataMonitorManager.MonitorNodes:
            print node.name;