export function resolve(response) {
	try {
		return response;
	} finally {
	}
}

/**
 *
 * 当失败的时候怎么处
 * */
export function reject(error) {
	return Promise.reject(error);
}
