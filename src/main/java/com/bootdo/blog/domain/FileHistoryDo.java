package com.bootdo.blog.domain;

import java.io.Serializable;
import java.util.Date;

/**
* @Description:    文件下载记录
* @Author:         cxg
* @CreateDate:     8:58 2018/6/26
* @Version:        1.0
*/
public class FileHistoryDo implements Serializable{
    private static final long serialVersionUID = 1L;

    //id
    private Long id;

    //用户ID
    private Long userid;

    //下载文件id
    private Long bvid;

    //下载时间
    private Date downloadtime;

    public Long getBvid() {
        return bvid;
    }

    public void setBvid(Long bvid) {
        this.bvid = bvid;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDownloadtime() {
        return downloadtime;
    }

    public void setDownloadtime(Date downloadtime) {
        this.downloadtime = downloadtime;
    }

    @Override
    public String toString() {
        return "FileHistoryDo{" +
                "id=" + id +
                ", userid=" + userid +
                ", bvid=" + bvid +
                ", downloadtime=" + downloadtime +
                '}';
    }
}
