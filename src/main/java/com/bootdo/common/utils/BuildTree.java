package com.bootdo.common.utils;

import com.bootdo.common.domain.Tree;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/**
* @Description:    树形工具类
* @Author:         cxg
* @CreateDate:     15:01 2018/6/15
* @Version:        1.0
*/
public class BuildTree {

	/**
	 * 树形结构
	 * @param nodes
	 * @param <T>
	 * @return
	 */
	public static <T> Tree<T> build(List<Tree<T>> nodes) {
		if (nodes == null) {
			return null;
		}
		List<Tree<T>> topNodes = new ArrayList<Tree<T>>();
		for (Tree<T> children : nodes) {
			String pid = children.getParentId();
			if (pid == null || "0".equals(pid)) {
				topNodes.add(children);
				continue;
			}
			for (Tree<T> parent : nodes) {
				String id = parent.getId();
				if (id != null && id.equals(pid)) {
					parent.getChildren().add(children);
					children.setHasParent(true);
					parent.setChildren(true);
					continue;
				}
			}

		}

		Tree<T> root = new Tree<T>();
		if (topNodes.size() == 1) {
			root = topNodes.get(0);
		} else {
			root.setId("-1");
			root.setParentId("");
			root.setHasParent(false);
			root.setChildren(true);
			root.setChecked(true);
			root.setChildren(topNodes);
			root.setText("顶级节点");
			Map<String, Object> state = new HashMap<>(16);
			state.put("opened", true);
			root.setState(state);
		}

		return root;
	}

	/**
	 * 树形结构集合(废弃)
	 * @param nodes
	 * @param idParam
	 * @param <T>
	 * @return
	 */
	public static <T> List<Tree<T>> buildList(List<Tree<T>> nodes, String idParam) {
		if (nodes == null) {
			return null;
		}
		List<Tree<T>> topNodes = new ArrayList<Tree<T>>();
		for (Tree<T> children : nodes) {
			String pid = children.getParentId();
			if (pid == null || idParam.equals(pid)) {
				topNodes.add(children);
				continue;
			}
			for (Tree<T> parent : nodes) {
				String id = parent.getId();
				if (id != null && id.equals(pid)) {
					parent.getChildren().add(children);
					children.setHasParent(true);
					parent.setChildren(true);

					continue;
				}
			}

		}
		return topNodes;
	}

	/**
	 * 树形结构集合
	 * @param nodes
	 * @param <T>
	 * @return
	 */
	public static <T> List<Tree<T>> buildList(List<Tree<T>> nodes) {
		if (nodes == null) {
			return null;
		}
		List<Tree<T>> result = new ArrayList<>();
		Map<String, Tree<T>> map = new HashMap<>();
		for (Tree<T> node : nodes) {
			map.put(node.getId(), node);
			if (map.containsKey(node.getParentId())) {
				Tree<T> pNode = map.get(node.getParentId());
				pNode.getChildren().add(node);
			} else {
				result.add(node);
			}
		}
		return result;
	}

}