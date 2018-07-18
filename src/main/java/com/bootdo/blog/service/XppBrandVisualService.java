package com.bootdo.blog.service;


import com.bootdo.blog.domain.FileHistoryDo;
import com.bootdo.blog.domain.XppBrandVisualDo;
import com.bootdo.common.utils.Query;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

/**
* @Description:    XPP品牌形象内容
* @Author:         cxg
* @CreateDate:     16:11 2018/6/19
* @Version:        1.0
*/
public interface XppBrandVisualService {

    List<XppBrandVisualDo> getXppBarndVisualList(Map<String, Object> map);

    int count(Query query);

    int save(XppBrandVisualDo xppContent);

    int update(XppBrandVisualDo xppContent);

    XppBrandVisualDo get(Long bvid);

    int remove(Long bvid);

    void batchRemove(Long[] bvids);

    List<XppBrandVisualDo> getXppBarndVisualList(Map<String, Object> map, String type);

    int saveFileHistory(FileHistoryDo fileHistoryDo);

    List<XppBrandVisualDo> getUserDowmloadHistoryList(Map<String, Object> map);

    int countUserDowmloadHistory(Query query);
}
