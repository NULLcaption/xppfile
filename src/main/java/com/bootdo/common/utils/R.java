package com.bootdo.common.utils;

import java.util.HashMap;
import java.util.Map;
/**
* @Description:    返回值设置
* @Author:         cxg
* @CreateDate:     10:35 2018/5/3
* @Version:        1.0
*/
public class R extends HashMap<String, Object> {
	private static final long serialVersionUID = 1L;

	public R() {
		put("code", 0);
		put("msg", "operate successfully ");
	}

	public static R error() {
		return error(1, "operation failure");
	}

	public static R error(String msg) {
		return error(500, msg);
	}

	public static R error(int code, String msg) {
		R r = new R();
		r.put("code", code);
		r.put("msg", msg);
		return r;
	}

	public static R ok(String msg) {
		R r = new R();
		r.put("msg", msg);
		return r;
	}

	public static R ok(Map<String, Object> map) {
		R r = new R();
		r.putAll(map);
		return r;
	}

	public static R ok() {
		return new R();
	}

	@Override
	public R put(String key, Object value) {
		super.put(key, value);
		return this;
	}
}
