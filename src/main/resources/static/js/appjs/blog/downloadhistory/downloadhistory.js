/**
 * Created by Administrator on 2018/6/26.
 */
var prefix = "/bootdo/blog/downloadHistory"
$(function() {
    load();
});

function load() {
    $('#exampleTable')
        .bootstrapTable(
        {
            method : 'get', // 服务器数据的请求方式 get or post
            url : prefix + "/list", // 服务器数据的加载地址
            // showRefresh : true,
            // showToggle : true,
            showColumns : true,
            iconSize : 'outline',
            toolbar : '#exampleToolbar',
            striped : true, // 设置为true会有隔行变色效果
            dataType : "json", // 服务器返回的数据类型
            pagination : true, // 设置为true会在底部显示分页条
            // queryParamsType : "limit",
            // //设置为limit则会发送符合RESTFull格式的参数
            singleSelect : false, // 设置为true将禁止多选
            // contentType : "application/x-www-form-urlencoded",
            // //发送到服务器的数据编码类型
            pageSize : 10, // 如果设置了分页，每页数据条数
            pageNumber : 1, // 如果设置了分布，首页页码
            // search : true, // 是否显示搜索框
            //showColumns : false, // 是否显示内容下拉框（选择显示的列）
            sidePagination : "server", // 设置在哪里进行分页，可选值为"client" 或者
            // "server"

            queryParams : function(params) {
                return {
                    // 说明：传入后台的参数包括offset开始索引，limit步长，sort排序列，order：desc或者,以及所有列的键值对
                    limit : params.limit,
                    offset : params.offset
                    // name:$('#searchName').val(),
                    // username:$('#searchName').val()
                };
            },
            // //请求服务器数据时，你可以通过重写参数的方式添加一些额外的参数，例如 toolbar 中的参数 如果
            // queryParamsType = 'limit' ,返回参数必须包含
            // limit, offset, search, sort, order 否则, 需要包含:
            // pageSize, pageNumber, searchText, sortName,
            // sortOrder.
            // 返回false将会终止请求
            columns : [
                {
                    checkbox : true
                },
                {
                    visible : false,
                    field : 'id',
                    title : 'id'
                },
                {
                    field : 'username',
                    title : 'Download User'
                },
                {
                    field : 'filename',
                    title : 'File Name'
                },
                {
                    field : 'author',
                    title : 'Create Author'
                },
                {
                    field : 'downloadtime',
                    title : 'Download Time'
                }
                ]
        });
}

//重新加载
function reLoadindex() {
    $('#exampleTable').bootstrapTable('refresh');
}
//新增
function add() {
    var addPage = layer.open({
        type : 2,
        title : 'add',
        maxmin : true,
        shadeClose : false, // 点击遮罩关闭层
        area : [ '800px', '520px' ],
        content : prefix + '/add' // iframe的url
    });
    layer.full(addPage);
}
//修改
function edit(bvid) {
    var editPage = layer.open({
        type : 2,
        title : 'edit',
        maxmin : true,
        shadeClose : false, // 点击遮罩关闭层
        area : [ '800px', '520px' ],
        content : prefix + '/edit/' + bvid // iframe的url
    });
    layer.full(editPage);
}
//删除
function remove(bvid) {
    layer.confirm('Make sure you want to remove the selected record?', {
        btn : [ 'ok', 'cancel' ]
    }, function() {
        $.ajax({
            url : prefix + "/remove",
            type : "post",
            data : {
                'bvid' : bvid
            },
            success : function(r) {
                if (r.code == 0) {
                    layer.msg(r.msg);
                    reLoadindex();
                } else {
                    layer.msg(r.msg);
                }
            }
        });
    })
}

//下载文件
function preview(bvid) {
    //定义一个form表单,通过form表单来发送请求
    var form=$("<form>");
    //设置表单状态为不显示
    form.attr("style","display:none");
    //method属性设置请求类型为get
    form.attr("method","get");
    //action属性设置请求路径,(如有需要,可直接在路径后面跟参数)
    //例如:htpp://127.0.0.1/test?id=123
    form.attr("action",prefix + '/download/'+bvid);
    //将表单放置在页面(body)中
    $("body").append(form);
    //表单提交
    form.submit();
}

//批量删除
function batchRemove() {
    var rows = $('#exampleTable').bootstrapTable('getSelections'); // 返回所有选择的行，当没有选择的记录时，返回一个空数组
    if (rows.length == 0) {
        layer.msg("Please select the data to be removed!");
        return;
    }
    layer.confirm("Make sure to remove the selected'" + rows.length + "'data?", {
        btn : [ 'ok', 'cancel' ]
        // 按钮
    }, function() {
        var ids = new Array();
        // 遍历所有选择的行数据，取每条数据对应的ID
        $.each(rows, function(i, row) {
            ids[i] = row['bvid'];
        });
        $.ajax({
            type : 'POST',
            data : {
                "ids" : ids
            },
            url : prefix + '/batchRemove',
            success : function(r) {
                if (r.code == 0) {
                    layer.msg(r.msg);
                    reLoadindex();
                } else {
                    layer.msg(r.msg);
                }
            }
        });
    }, function() {

    });
}