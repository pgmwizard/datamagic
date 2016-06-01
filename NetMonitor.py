__author__ = 'wuliming'
from DataMonitor import MonitorNode
from DataMonitor import DataMonitorManager
def RefreshNet():
    print("netmonitor")
    a = 0
mnet = MonitorNode("netmonitor",RefreshNet,10);
DataMonitorManager.Register(mnet);