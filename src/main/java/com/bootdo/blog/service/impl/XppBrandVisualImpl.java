package com.bootdo.blog.service.impl;

import com.bootdo.blog.dao.XppBrandVisualDao;
import com.bootdo.blog.domain.FileHistoryDo;
import com.bootdo.blog.domain.XppBrandVisualDo;
import com.bootdo.blog.service.XppBrandVisualService;
import com.bootdo.common.domain.FileDO;
import com.bootdo.common.utils.FileType;
import com.bootdo.common.utils.FileUtil;
import com.bootdo.common.utils.Query;
import com.bootdo.common.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class XppBrandVisualImpl implements XppBrandVisualService{

    @Autowired
    XppBrandVisualDao xppBrandVisualMapper;

    @Override
    public List<XppBrandVisualDo> getXppBarndVisualList(Map<String, Object> map) {
        return xppBrandVisualMapper.getXppBarndVisualList(map);
    }

    @Override
    public int count(Query query) {
        return xppBrandVisualMapper.count(query);
    }

    @Override
    public int save(XppBrandVisualDo xppContent) {
        return xppBrandVisualMapper.save(xppContent);
    }

    @Override
    public int update(XppBrandVisualDo xppContent) {
        return xppBrandVisualMapper.update(xppContent);
    }

    @Override
    public XppBrandVisualDo get(Long bvid) {
        return xppBrandVisualMapper.get(bvid);
    }

    @Override
    public int remove(Long bvid) {
        return xppBrandVisualMapper.remove(bvid);
    }

    @Override
    public void batchRemove(Long[] bvids) {
        xppBrandVisualMapper.batchRemove(bvids);
    }

    @Override
    public List<XppBrandVisualDo> getXppBarndVisualList(Map<String, Object> map, String type) {
        return null;
    }

    @Override
    public int saveFileHistory(FileHistoryDo fileHistoryDo) {
        return  xppBrandVisualMapper.saveFileHistory(fileHistoryDo);
    }

    @Override
    public List<XppBrandVisualDo> getUserDowmloadHistoryList(Map<String, Object> map) {
        return xppBrandVisualMapper.getUserDowmloadHistoryList(map);
    }

    @Override
    public int countUserDowmloadHistory(Query query) {
        return xppBrandVisualMapper.countUserDowmloadHistory(query);
    }


}
