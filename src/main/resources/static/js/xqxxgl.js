$(function() {
    clients = [{'管理处':1,'小区名称':1,'小区地址':'贝克大街20号','门禁数量':'7','住户数量':'128','注册时间':'2017-12-12','使用情况':1,'备注':''},
            {'管理处':1,'小区名称':2,'小区地址':'贝克大街20号','门禁数量':'7','住户数量':'128','注册时间':'2017-12-12','使用情况':1,'备注':''},
            {'管理处':2,'小区名称':3,'小区地址':'贝克大街20号','门禁数量':'7','住户数量':'128','注册时间':'2017-12-12','使用情况':2,'备注':''},
            {'管理处':2,'小区名称':4,'小区地址':'贝克大街20号','门禁数量':'7','住户数量':'128','注册时间':'2017-12-12','使用情况':3,'备注':''},
            {'管理处':3,'小区名称':5,'小区地址':'贝克大街20号','门禁数量':'7','住户数量':'128','注册时间':'2017-12-12','使用情况':3,'备注':''},
            {'管理处':3,'小区名称':6,'小区地址':'贝克大街20号','门禁数量':'7','住户数量':'128','注册时间':'2017-12-12','使用情况':1,'备注':''},
            {'管理处':4,'小区名称':7,'小区地址':'贝克大街20号','门禁数量':'7','住户数量':'128','注册时间':'2017-12-12','使用情况':1,'备注':''},
            {'管理处':5,'小区名称':8,'小区地址':'贝克大街20号','门禁数量':'7','住户数量':'128','注册时间':'2017-12-12','使用情况':1,'备注':''},
            {'管理处':6,'小区名称':9,'小区地址':'贝克大街20号','门禁数量':'7','住户数量':'128','注册时间':'2017-12-12','使用情况':1,'备注':''},
            {'管理处':7,'小区名称':10,'小区地址':'贝克大街20号','门禁数量':'7','住户数量':'128','注册时间':'2017-12-12','使用情况':1,'备注':''}
    ];
    var name = [
        {name:'',Id:0},
        {name:'天欣小区',Id:1},
        {name:'天城小区',Id:2},
        {name:'天明小区',Id:3},
        {name:'天翟小区',Id:4},
        {name:'水岸小区',Id:5},
        {name:'新天泽小区',Id:6},
        {name:'多蓝小区',Id:7},
        {name:'美胜小区',Id:8},
        {name:'紫金小区',Id:9},
        {name:'横塘小区',Id:10}
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
    var situation = [
        {name:'',Id:0},
        {name:'良好',Id:1},
        {name:'较差',Id:2},
        {name:'很好',Id:3}
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
            { name: "小区名称", type: "select", items: name, valueField: "Id", textField: "name" },
            { name: "小区地址", type: "text", width: 150 },
            { name: "门禁数量", type: "text", width: 100 },
            { name: "住户数量", type: "text", width: 100 },
            { name: "注册时间", type: "text", width: 100 },
            { name: "使用情况", type: "select", items: situation, valueField: "Id", textField: "name" },
            { name: "备注", type: "text", sorting: true },
            { type: "control" }
        ]
    });

});