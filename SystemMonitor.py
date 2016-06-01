__author__ = 'wuliming'

from DataMonitor import MonitorNode
from DataMonitor import DataMonitorManager
def monitor_work_system():
    print("monitor_work_system")
    a = 0

monitor_system = MonitorNode("SystemMonitor",monitor_work_system,10);
DataMonitorManager.Register(monitor_system);