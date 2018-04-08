$(function() {
    clients = [
        {'管理处':6,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''},
        {'管理处':2,'楼宇':1,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':3,'人员安排':0,'服务时间':''},
        {'管理处':1,'楼宇':3,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':4,'人员安排':0,'服务时间':''},
        {'管理处':4,'楼宇':9,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':3,'人员安排':0,'服务时间':''},
        {'管理处':4,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':5,'人员安排':0,'服务时间':''},
        {'管理处':7,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':3,'人员安排':0,'服务时间':''},
        {'管理处':4,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''},
        {'管理处':7,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''},
        {'管理处':6,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''},
        {'管理处':6,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''},
        {'管理处':6,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''},
        {'管理处':6,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''},
        {'管理处':6,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''},
        {'管理处':6,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''},
        {'管理处':6,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''},
        {'管理处':6,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''},
        {'管理处':6,'楼宇':10,'房间编号':'10-1-1-2','客户名称':'小图','服务类型':2,'人员安排':0,'服务时间':''}
    ];
    var buidings = [
        {name:'',Id:0},
        {name:'1栋',Id:1},
        {name:'2栋',Id:2},
        {name:'3栋',Id:3},
        {name:'4栋',Id:4},
        {name:'5栋',Id:5},
        {name:'6栋',Id:6},
        {name:'7栋',Id:7},
        {name:'8栋',Id:8},
        {name:'9栋',Id:9},
        {name:'10栋',Id:10},
        {name:'11栋',Id:11},
        {name:'12栋',Id:12},
        {name:'13栋',Id:13},
        {name:'14栋',Id:14},
        {name:'15栋',Id:15},
        {name:'16栋',Id:16}
    ]
    var guanli = [
        {name:'',Id: 0 },
        {name:'新天泽国际',Id: 1 },
        {name:'阳光花园',Id: 2 },
        {name:'紫金',Id: 3 },
        {name:'世纪天城',Id: 4 },
        {name:'岳泰',Id: 5 },
        {name:'千岛人家',Id: 6 },
        {name:'海明饭店',Id: 7 }
    ]
    
    var leixing = [
        {name:'',Id:0},
        {name:'保姆',Id:1},
        {name:'送水服务',Id:2},
        {name:'钟点工服务',Id:3},
        {name:'维修服务',Id:4},
        {name:'搬家服务',Id:5}
    ]
    var yuangong = [
        {name:'',Id:0},
        {name:'小王',Id:1},
        {name:'小明',Id:2},
        {name:'小徐',Id:3},
        {name:'小诗',Id:4},
        {name:'小游',Id:5},
        {name:'小李',Id:6}
    ]
    $("#jsGrid").jsGrid({
        height: "70%",
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        // controller: db,
        data:clients,
        fields: [
            { name: "管理处", type: "select", items: guanli, valueField: "Id", textField: "name" },
            { name: "楼宇", type: "select", items: buidings, valueField: "Id", textField: "name" },
            { name: "房间编号", type: "text", width: 100 },
            { name: "客户名称", type: "text", width: 100 },
            { name: "服务类型", type: "select", items: leixing, valueField: "Id", textField: "name" },
            { name: "人员安排", type: "select", items: yuangong, valueField: "Id", textField: "name"},
            { name: "服务时间", type: "text", sorting: true },
            { type: "control" }
        ]
    });

});