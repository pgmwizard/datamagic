__author__ = 'wuliming'
# import sqlite3

# conn = sqlite3.connect("test.db")
# c = conn.cursor()
# def InsertDefaultData():
#     c.execute('''INSERT INTO
#     fm_alert(TITLE, OCCURTIME,SEVERITY,CATEGORY,SOURCE,MONAME)
#     VALUES('maction2',
#     0,
#     1,
#     'disk full',
#     'disk',
#     'system')''')
#
#
# # create tables
# c.execute('''CREATE TABLE if not exists category
#       (id int primary key, sort int, name text)''')
# c.execute('''CREATE TABLE if not exists book
#       (id int primary key,
#        sort int,
#        name text,
#        price real,
#        category int,
#        FOREIGN KEY (category) REFERENCES category(id))''')
# c.execute('''CREATE TABLE if not exists fm_alert
#         (TITLE text,
#         TEXT text,
#         ACTIVESTATUS int,
#         OCCURTIME int,
#         SEVERITY int,
#         CATEGORY text,
#         SOURCE text,
#         MONAME text,
#         ACKOPRTER text,
#         ACKTIME int,
#         NODE int,
#         PARENTNODE int,
#         LASTSEVERITY int,
#         LASTOCCURTIME int,
#         TOTAL int,
#         RESID int,
#         APPSYS text,
#         DEPARTMENT text,
#         PROVINCE text,
#         CITY text,
#         VENDOR text,
#         NODERESTYPE text,
#         IPV4 text)
# ''')
#
# c.execute('''CREATE TABLE if not exists fm_alert_history
#         (TITLE text,
#         TEXT text,
#         ACTIVESTATUS int,
#         OCCURTIME int,
#         SEVERITY int,
#         CATEGORY text,
#         SOURCE text,
#         MONAME text,
#         ACKOPRTER text,
#         ACKTIME int,
#         NODE int,
#         PARENTNODE int,
#         LASTSEVERITY int,
#         LASTOCCURTIME int,
#         TOTAL int,
#         RESID int,
#         APPSYS text,
#         DEPARTMENT text,
#         PROVINCE text,
#         CITY text,
#         VENDOR text,
#         NODERESTYPE text,
#         IPV4 text)
# ''')
#
# #InsertDefaultData();
# # save the changes
# conn.commit()
#
#
# # close the connection with the database
# conn.close()