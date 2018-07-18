package com.bootdo.blog.controller;

import com.bootdo.blog.domain.FileHistoryDo;
import com.bootdo.blog.domain.XppBrandVisualDo;
import com.bootdo.blog.service.ContentService;
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
* @Description:    MECO file controller
* @Author:         cxg
* @CreateDate:     10:08 2018/6/15
* @Version:        1.0
*/
@Controller
@RequestMapping("/blog/mecoContent_pl")
public class MECOProductInfoFileController extends BaseController{

    @Autowired
    ContentService bContentService;

    @Autowired
    XppBrandVisualService xppBrandVisualService;

    @Autowired
    private BootdoConfig bootdoConfig;

    /**
     * 首页
     * @return
     */
    @GetMapping()
    @RequiresPermissions("blog:mecoContent_pl:mecoContent_pl")
    String xppContent() {
        return "blog/mecoContent_pl/mecoContent_pl";
    }

    /**
     * 获取列表
     * @param params
     * @return
     */
    @ResponseBody
    @GetMapping("/list")
    @RequiresPermissions("blog:mecoContent_pl:mecoContent_pl")
    public PageUtils list(@RequestParam Map<String, Object> params) {
        params.put("type","MECO_P_I");
        Query query = new Query(params);
        List<XppBrandVisualDo> bContentList = xppBrandVisualService.getXppBarndVisualList(query);
        int total = xppBrandVisualService.count(query);
        PageUtils pageUtils = new PageUtils(bContentList, total);
        return pageUtils;
    }

    /**
     * 新增文件
     * @return
     */
    @GetMapping("/add")
    @RequiresPermissions("blog:xppContent:add")
    String add() {
        return "blog/mecoContent_pl/add";
    }

    /**
     * 修改文件
     * @param bvid
     * @param model
     * @return
     */
    @GetMapping("/edit/{bvid}")
    @RequiresPermissions("blog:xppContent:edit")
    String edit(@PathVariable("bvid") Long bvid, Model model) {
        XppBrandVisualDo xppBrandVisualDo = xppBrandVisualService.get(bvid);
        model.addAttribute("xppBrandVisualDo", xppBrandVisualDo);
        return "blog/mecoContent_pl/edit";
    }

    /**
     * 保存文件
     * @param xppContent
     * @return
     */
    @ResponseBody
    @RequiresPermissions("blog:xppContent:add")
    @PostMapping("/save")
    public R save(@RequestParam("avatar_file") MultipartFile file,XppBrandVisualDo xppContent,HttpServletRequest request) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "The demo system is not allowed to change, please deploy the program for the full experience.");
        }
        //上传文件
        if (StringUtils.isNoneEmpty(file.getOriginalFilename())) {
            String fileName = file.getOriginalFilename();
            fileName = FileUtil.renameToUUID(fileName);
            FileDO sysFile = new FileDO(FileType.fileType(fileName), "/files/" + fileName, new Date());
            try {
                FileUtil.uploadFile(file.getBytes(), bootdoConfig.getUploadPath()+"MECO/", fileName);
            } catch (Exception e) {
                return R.error();
            }
            xppContent.setFilename(file.getOriginalFilename());//文件名
            xppContent.setFileurl(sysFile.getUrl());//文件路径
        }
        //保存数据到数据库
        if (null == xppContent.getStatus()) {
            xppContent.setStatus("Y");
        }
        if(null==xppContent.getType()) {
            xppContent.setType("MECO_P_I");
        }
        xppContent.setGtmCreate(new Date());//创建时间
        xppContent.setGtmModified(new Date());//最后修改时间
        int count;
        if (xppContent.getBvid() == null || "".equals(xppContent.getBvid())) {
            count = xppBrandVisualService.save(xppContent);
        } else {
            count = xppBrandVisualService.update(xppContent);
        }
        if (count > 0) {
            return R.ok().put("bvid", xppContent.getBvid());
        }
        return R.error();
    }

    /**
     * 删除
     * @param bvid
     * @return
     */
    @RequiresPermissions("blog:xppContent:remove")
    @PostMapping("/remove")
    @ResponseBody
    public R remove(Long bvid) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "The demo system is not allowed to change, please deploy the program for the full experience.");
        }
        if (xppBrandVisualService.remove(bvid) > 0) {
            return R.ok();
        }
        return R.error();
    }

    /**
     * 批量删除
     * @param bvids
     * @return
     */
    @RequiresPermissions("blog:xppContent:batchRemove")
    @PostMapping("/batchRemove")
    @ResponseBody
    public R remove(@RequestParam("ids[]") Long[] bvids) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "The demo system is not allowed to change, please deploy the program for the full experience.");
        }
        xppBrandVisualService.batchRemove(bvids);
        return R.ok();
    }

    /**
     * 下载附件
     * @param bvid
     * @return
     */
    @GetMapping("/download/{bvid}")
    @RequiresPermissions("blog:xppContent:download")
    public R download(@PathVariable("bvid")Long bvid ,HttpServletResponse response) {
        if (Constant.DEMO_ACCOUNT.equals(getUsername())) {
            return R.error(1, "The demo system is not allowed to change, please deploy the program for the full experience.");
        }
        XppBrandVisualDo xppBrandVisualDo = xppBrandVisualService.get(bvid);
        OutputStream toClient = null;
        try {
            if (StringUtils.isNotEmpty(xppBrandVisualDo)) {
                //文件路径
                String fileurl = xppBrandVisualDo.getFileurl();
                //文件下载路径
                String path = bootdoConfig.getUploadPath()+"MECO/" + fileurl.replace("/files/", "");
                //下载文件
                File file = new File(path);
                String filename = file.getName();
                String ext = filename.substring(filename.lastIndexOf(".") + 1).toUpperCase();
                // 以流的形式下载文件。
                InputStream fis = new BufferedInputStream(new FileInputStream(path));
                byte[] buffer = new byte[fis.available()];
                fis.read(buffer);
                fis.close();
                // 清空response
                response.reset();
                // 设置response的Header
                response.setHeader("content-type", "application/octet-stream");
                response.setContentType("application/octet-stream");
                response.setHeader("Content-Disposition", "attachment;filename=" + xppBrandVisualDo.getFilename());
                toClient = new BufferedOutputStream(response.getOutputStream());
                toClient.write(buffer);
                toClient.flush();
                toClient.close();

                //下载完成以后存储下载记录
                if(null != this.getUserId() || "".equals(this.getUserId())) {
                    FileHistoryDo fileHistoryDo = new FileHistoryDo();
                    fileHistoryDo.setBvid(bvid);
                    fileHistoryDo.setUserid(this.getUserId());
                    fileHistoryDo.setDownloadtime(new Date());
                    int count = xppBrandVisualService.saveFileHistory(fileHistoryDo);
                    if (count<0) {
                        R.error();
                    }
                } else {
                    R.error();
                }

                return null;
            } else {
                R.error();
            }
        } catch (IOException e) {
            e.printStackTrace();
            return R.error();
        } finally {
            if (toClient != null) {
                try {
                    toClient.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return R.error();
    }


}
