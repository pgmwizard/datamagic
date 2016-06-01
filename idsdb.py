#! /usr/bin/python
# -*- coding:utf-8 -*-
#import cx_Oracle
#tns_ids=cx_Oracle.makedsn('10.1.17.52',1521,'yjbs1');
#db_ids = cx_Oracle.connect('ids_visu','ids_visu',tns_ids);
#cursor_ids = db_ids.cursor();

def ids_getDataDay(startdate,enddate):
    sql = "select REPAIR1_ID,REPAIR1_OBJECT,APPLY_BEGIN_TIME,OPER_STATUS from IDS_APP.IDS_T_REP_PLAN where APPLY_BEGIN_TIME >= to_date('"+startdate +"','YYYY-MM-DD') and APPLY_BEGIN_TIME < to_date('"+enddate+"','YYYY-MM-DD')"
    #cr = cursor_ids.execute(sql);
    listResult = []
    #while(1):
    #    rs = cr.fetchone();
    #     if rs == None:break;
    #     sid = rs[0].decode('gbk')
    #     sname = rs[1].decode('gbk')
    #     sname.encode('utf-8');
    #     qname = sname[sname.find(']') + 1:]
    #     print qname
    #     #status = rs[3].decode('gbk')
    #     records = {
    #         'id':sid.encode('utf-8'),
    #         'name':qname,
    #         'starttime':rs[2].strftime("%Y-%m-%d %H:%M:%S"),
    #         'status':rs[3],
    #     }
    #     listResult.append(records);
    return listResult
