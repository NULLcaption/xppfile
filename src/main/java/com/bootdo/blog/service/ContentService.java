package com.bootdo.blog.service;

import com.bootdo.blog.domain.ContentDO;

import java.util.List;
import java.util.Map;

/**
* @Description:    文章内容
* @Author:         cxg
* @CreateDate:     14:45 2018/6/19
* @Version:        1.0
*/
public interface ContentService {
	
	ContentDO get(Long cid);
	
	List<ContentDO> list(Map<String, Object> map);
	
	int count(Map<String, Object> map);
	
	int save(ContentDO bContent);
	
	int update(ContentDO bContent);
	
	int remove(Long cid);
	
	int batchRemove(Long[] cids);
}
