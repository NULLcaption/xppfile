package com.bootdo.system.controller;

import com.bootdo.common.annotation.Log;
import com.bootdo.common.controller.BaseController;
import com.bootdo.common.domain.FileDO;
import com.bootdo.common.domain.Tree;
import com.bootdo.common.service.FileService;
import com.bootdo.common.utils.MD5Utils;
import com.bootdo.common.utils.R;
import com.bootdo.common.utils.ShiroUtils;
import com.bootdo.system.domain.MenuDO;
import com.bootdo.system.service.MenuService;
import com.google.gson.JsonObject;
import org.activiti.engine.ActivitiException;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileReader;
import java.util.List;
/**
* @Description:    登录以及首页处理
* @Author:         cxg
* @CreateDate:     10:38 2018/5/3
* @Version:        1.0
*/
@Controller
public class LoginController extends BaseController {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	MenuService menuService;
	@Autowired
	FileService fileService;

	@GetMapping({ "/", "" })
	String welcome(Model model) {
		return "redirect:/login";
	}

	/**
	 * 登录 ajaxLogin
	 * @param username
	 * @param password
	 * @return
	 */
	@Log("登录")
	@PostMapping("/login")
	@ResponseBody
	R ajaxLogin(String username, String password) {
		//账号密码加密处理
		password = MD5Utils.encrypt(username, password);
		//根据登录人账密生成token
		UsernamePasswordToken token = new UsernamePasswordToken(username, password);
		//根据每个请求，创建一个Subject,
		//并保存到ThreadContext的resources(ThreadLocal<Map<Object, Object>>)变量中，
		//也就是一个http请求一个subject,并绑定到当前线程。
		Subject subject = SecurityUtils.getSubject();
		try {
			//设置登录以后的token，每次登录后检查登录用户
			//其本质就是依赖于浏览器的cookie来维护session的
			//扩展：如果不是web容器的app,如何实现实现无状态的会话怎么是现实呢？
			subject.login(token);
			return R.ok();
		} catch (AuthenticationException e) {
			return R.error("用户或密码错误");
		}
	}

	/**
	 * 登录成功以后到首页
	 * @param model
	 * @return
	 */
	@Log("请求访问主页")
	@GetMapping({ "/index" })
	String index(Model model) {
		List<Tree<MenuDO>> menus = menuService.listMenuTree(getUserId());
		//菜单
		model.addAttribute("menus", menus);
		//角色名称
		model.addAttribute("name", getUser().getName());
		//登录人名称
		model.addAttribute("username", getUsername());
		//获取登陆者自己创建的头像
		FileDO fileDO = fileService.get(getUser().getPicId());
		if(fileDO!=null&&fileDO.getUrl()!=null){
			if(fileService.isExist(fileDO.getUrl())){
				model.addAttribute("picUrl",fileDO.getUrl());
			}else {
				model.addAttribute("picUrl","/bootdo/img/logo2.png");
			}
		}else {
			model.addAttribute("picUrl","/bootdo/img/logo2.png");
		}
		model.addAttribute("username", getUser().getUsername());
		return "index_v1";
	}

	/**
	 * 跳转至登录页面
	 * @return
	 */
	@GetMapping("/login")
	String login() {
		return "login";
	}

	/**
	 * 登出页面,重定向值登录页面
	 * @return
	 */
	@GetMapping("/logout")
	String logout() {
//		ShiroUtils.logout();
		return "redirect:/bootdo/login";
	}

	/**
	 * 主页面
	 * @return
	 */
	@GetMapping("/main")
	String main() {
		return "main";
	}

	/**
	 * 加载flights.json文件
	 */
	@RequestMapping(value = "/flights", method = RequestMethod.GET, produces = "application/json;charset=utf-8")
	public String getFlights(){
		try {
			Resource resource = new ClassPathResource("flights.json");
			File fileReader = resource.getFile();
			com.google.gson.JsonParser parser = new com.google.gson.JsonParser();
			JsonObject object = (JsonObject) parser.parse(new FileReader(fileReader));
			return object.toString();
		} catch (Exception e) {
			throw new ActivitiException("Error while loading stencil set", e);
		}
	}

}
