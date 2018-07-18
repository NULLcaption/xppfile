package com.bootdo.blog.controller;

import com.bootdo.blog.domain.FileHistoryDo;
import com.bootdo.blog.domain.XppBrandVisualDo;
import com.bootdo.blog.service.XppBrandVisualService;
import com.bootdo.common.config.BootdoConfig;
import com.bootdo.common.config.Constant;
import com.bootdo.common.controller.BaseController;
import com.bootdo.common.domain.FileDO;
import com.bootdo.common.utils.*;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
* @Description:    XPP file controller
* @Author:         cxg
* @CreateDate:     10:08 2018/6/15
* @Version:        1.0
*/
@Controller
@RequestMapping("/blog/downloadHistory")
public class DownloadHistoryController extends BaseController{

    @Autowired
    XppBrandVisualService xppBrandVisualService;

    /**
     * 首页
     * @return
     */
    @GetMapping()
    @RequiresPermissions("blog:downloadHistory:downloadHistory")
    String xppContent() {
        return "blog/downloadhistory/downloadhistory";
    }

    /**
     * 获取列表
     * @param params
     * @return
     */
    @ResponseBody
    @GetMapping("/list")
    @RequiresPermissions("blog:downloadHistory:downloadHistory")
    public PageUtils list(@RequestParam Map<String, Object> params) {
        Query query = new Query(params);
        List<XppBrandVisualDo> bContentList = xppBrandVisualService.getUserDowmloadHistoryList(query);
        int total = xppBrandVisualService.countUserDowmloadHistory(query);
        PageUtils pageUtils = new PageUtils(bContentList, total);
        return pageUtils;
    }

}
