$().ready(function() {
	$('.summernote').summernote({
		height : '220px',
		lang : 'zh-CN',
		callbacks: {
            onImageUpload: function(files, editor, $editable) {
                sendFile(files);
            }
        }
	});
	validateRule();
});


$.validator.setDefaults({
	submitHandler : function() {
		save(1);
	}
});

/**
 * 保存新建
 * @param status
 */
function save(status) {
	var content_sn = $("#content_sn").summernote('code');
	$("#content").val(content_sn);
	//在文件上传的时候需要去用from表单提交
	var formid = new FormData(document.getElementById("signupForm"));// 你的formid
	$.ajax({
		cache : true,
		type : "POST",
		url : "/bootdo/blog/xppContentIndex/save",
		data : formid,
		async: false,
		contentType: false,
		processData: false,
		error : function(request) {
			parent.layer.alert("Connection error");
		},
		success : function(r) {
			if (r.code == 0) {
				parent.layer.msg(r.msg);
				returnList();
				$("#bvid").val(r.bvid);
			} else {
				parent.layer.alert(r.msg)
			}
		}
	});
}
/**
 * 输入框为空值时的处理
 */
function validateRule() {
	var icon = "<i class='fa fa-times-circle'></i> ";
	$("#signupForm").validate({
		rules : {
			title : "required",
			author : "required",
			content : "required"
		},
		messages : {
			title : "Please fill in the title of the document",
			author : "Please fill in the author of the document",
			content : "Please fill in the content of the document"
		}
	});
}

//返回列表
function returnList() {
	var index = parent.layer.getFrameIndex(window.name); // 获取窗口索引
	parent.layer.close(index);
	window.parent.reLoadindex();
}