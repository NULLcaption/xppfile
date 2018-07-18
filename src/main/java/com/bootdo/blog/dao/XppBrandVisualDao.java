package com.bootdo.blog.dao;

import com.bootdo.blog.domain.FileHistoryDo;
import com.bootdo.blog.domain.XppBrandVisualDo;
import com.bootdo.common.utils.Query;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
* @Description:    XPP品牌形象内容
* @Author:         cxg
* @CreateDate:     16:17 2018/6/19
* @Version:        1.0
*/
@Mapper
public interface XppBrandVisualDao {

    List<XppBrandVisualDo> getXppBarndVisualList(Map<String, Object> map);

    int count(Query query);

    int save(XppBrandVisualDo xppContent);

    int update(XppBrandVisualDo xppContent);

    XppBrandVisualDo get(Long bvid);

    int remove(Long bvid);

    void batchRemove(Long[] bvids);

    int saveFileHistory(FileHistoryDo fileHistoryDo);

    List<XppBrandVisualDo> getUserDowmloadHistoryList(Map<String, Object> map);

    int countUserDowmloadHistory(Query query);
}
