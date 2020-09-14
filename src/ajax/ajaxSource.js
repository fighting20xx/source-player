import { func } from 'assert-plus';

/*
 * 定义 API 接口源名称。
 * 便于在 this.$ajax(AJAX_VS) 的地方使用。
 */

const source = {
	/**
	 * 域名
	 */
	AJAX_ORIGIN: 'https://127.0.0.1:9099',

	/**
	 *eln源
	 */
	AJAX_SELF_SERVER: 'server',
	server: '',

	/**
	 * 默认源
	 */
	AJAX_DEFAULT: 'server', // 不填写的情况，默认使用的源
};

export function setAjaxBase(base) {
	source.AJAX_ORIGIN = base;
	source.server = base + '/api/v1/';
}

export default source;
