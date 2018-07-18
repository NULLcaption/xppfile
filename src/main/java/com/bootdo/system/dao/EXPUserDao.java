package com.bootdo.system.dao;

import com.bootdo.system.domain.UserDO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Created by Administrator on 2018/5/17.
 */
@Mapper
public interface EXPUserDao {

    //获取EXP中的人员列表
    public List<UserDO> findUserInfoList();
}
