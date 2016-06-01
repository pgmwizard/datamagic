__author__ = 'wuliming'
from DataMonitor import MonitorNode
from DataMonitor import DataMonitorManager
def monitor_work_duty():
    print("monitor_work_duty")
    a = 0

monitor_duty = MonitorNode("dutyMonitor",monitor_work_duty,10);
DataMonitorManager.Register(monitor_duty);