// 数据分页
(function(){
	$.extend({
		'paging' : function(options){
			var defaults = {
				perCount : 5,	// 每页默认显示5条数据
				counts : 1,		// 数据总条数
				current : 1,	// 当前页
				pageCount : 1,	// 总页数
				pages : 5,		// 页码数
				status : 1,		// 默认使用模板1
			}
			options = $.extend(defaults,options);

			// 每页显示数不能低于1,并且为整数
			options.perCount = parseInt(options.perCount);
			options.perCount = options.perCount < 1 ? 5 : options.perCount;

			
			// 计算总页数
			if(options.counts % options.perCount == 0){
				// 总数为0，总页数为1
				// 总页数 = 总条数/每页显示条数 ,能被整除
				options.pageCount = options.counts == 0 ? 1 : options.counts/options.perCount;
			}else{
				// 不能被整除+1
				options.pageCount = parseInt(options.counts/options.perCount) + 1;
			}
			
			// 控制当前页
			options.current = options.current < 1 ? 1 : options.current;
			options.current = options.current > options.pageCount ? options.pageCount : options.current;
			
			// 控制页码，不能小于1
			options.pages = options.pages < 1 ? 5 : options.pages;
			// 页码不能超过总页数
			options.pages = options.pages > options.pageCount ? options.pageCount : options.pages;
			
			// 开始拼接分页标签
			// 获取固定头部
			var html = getHtml({
				current : options.current,
				pageCount : options.pageCount,
				perCount : options.perCount,
				counts : options.counts,
			},getHeader(options));
			
			// 当前页-1是否小于1，+1是否大于总页数
			var isLt1 = options.current - 1 < 1 ? true : false;
			var isGtPageCount = options.current + 1 > options.pageCount ? true : false;
			// 获取置顶
			if(options.status == 2){
				html +=	getHtml({
					title : '首页',
					dataPage : 1,
				},getFirst(options,isLt1));
			}
			// 获取上一页
			html +=	getHtml({
				title : '上一页',
				dataPage : isLt1 ? 1 : options.current - 1,
			},getPrev(options,isLt1));
			
			// 获取页码
			if(options.status == 1){
				// 默认当前页是在中间
				var half = parseInt(options.pages / 2);
				// 页数低于1
				if(options.current - half < 1){
					html += showPages(1,options.pages,options);
				}
				// 页数超过总页数
				else if(options.current + half > options.pageCount){
					html += showPages(options.pageCount - options.pages + 1,options.pageCount,options);
				}
				else{
					html += showPages(options.current - half,options.current + half,options);
				}
			}
			
			// 获取下一页
			html +=	getHtml({
				title : '下一页',
				dataPage : isGtPageCount ? options.pageCount : options.current + 1,
			},getNext(options,isGtPageCount));
			
			// 获取尾页
			html +=	getHtml({
				title : '尾页',
				dataPage : options.pageCount,
			},getLast(options,isGtPageCount));
			
			html += getFooter(options);
			return html;
		}
	});
	function showPages(start,end,options){
		var s = '';
		if(start > end){
			return showPages(end,start,options);
		}
		for(var i = start;i <= end ;i++){
			if(i == options.current){
				s +=	getHtml({
					title : '第' + (i) + '页',
					dataPage : i,
				},getPage(options,true));
			}else{
				s +=	getHtml({
					title : '第' + (i) + '页',
					dataPage : i,
				},getPage(options,false));
			}
		}
		return s;
	}
	// 渲染模板
	function getHtml(options,tpl){
		var html = tpl;
		html = html.replace(/\${href}/g,'javascript:;');
		if(typeof(options.page) != 'undefined'){
			html = html.replace(/\${page}/g,options.page);
		}
		if(typeof(options.title) != 'undefined'){
			html = html.replace(/\${title}/g,options.title);
		}
		if(typeof(options.dataPage) != 'undefined'){
			html = html.replace(/\${dataPage}/g,options.dataPage);
		}
		if(typeof(options.current) != 'undefined'){
			html = html.replace(/\${current}/g,options.current);
		}
		if(typeof(options.pageCount) != 'undefined'){
			html = html.replace(/\${pageCount}/g,options.pageCount);
		}
		if(typeof(options.perCount) != 'undefined'){
			html = html.replace(/\${perCount}/g,options.perCount);
		}
		if(typeof(options.counts) != 'undefined'){
			html = html.replace(/\${counts}/g,options.counts);
		}
		return html;
	}
	
	// 获取默认的分页模板
	function getHeader(options){
		if(options.status == 1){
			return '<ul class="pagination" data-current="${current}" data-perCount="${perCount}" data-counts="${counts}" data-pageCount="${pageCount}">';
		}else if(options.status == 2){
			return	'<div class="pagination-row clearfix">'
			+			'<div class="pull-left vertical-middle hidden-xs">总共<span class="list-counts">${counts}<span>条记录</div>'
			+			'<div class="pull-right pull-left-sm">'
			+				'<div class="inline-block vertical-middle m-right-xs">第${current}页/总${pageCount}页</div>'
			+				'<ul class="pagination vertical-middle" style="margin: 0" data-current="${current}" data-perCount="${perCount}" data-counts="${counts}" data-pageCount="${pageCount}">';
		}
	}
	function getFirst(options,disabled){
		if(options.status == 1){
			return '';
		}else if(options.status == 2){
			if(disabled){
				return '<li class="disabled"><a href="${href}" title="${title}" data-page="${dataPage}"><i class="fa fa-step-backward"></i></a></li>';
			}else{
				return '<li><a href="${href}" title="${title}" data-page="${dataPage}"><i class="fa fa-step-backward"></i></a></li>';
			}
		}
	}
	function getPrev(options,disabled){
		if(options.status == 1){
			if(disabled){
				return  '<li class="disabled"><a href="${href}" title="${title}"><span aria-hidden="true">&laquo;</span></a></li>';
			}else{
				return  '<li><a href="${href}" data-page="${dataPage}" title="${title}"><span aria-hidden="true">&laquo;</span></a></li>';
			}
		}else if(options.status == 2){
			if(disabled){
				return '<li class="disabled"><a href="${href}" data-page="${dataPage}" title="${title}"><i class="fa fa-caret-left"></i></a></li>';
			}else{
				return '<li><a href="${href}" data-page="${dataPage}" title="${title}"><i class="fa fa-caret-left"></i></a></li>';
			}
		}
	}
	function getPage(options,active){
		if(options.status == 1){
			if(active){
				return '<li class="active disabled"><a href="${href}" title="${title}">${dataPage}<span class="sr-only">(current)</span></a></li>';
			}else{
				return '<li><a href="${href}" data-page="${dataPage}" title="${title}">${dataPage}</a></li>';
			}
		}
	}
	function getNext(options,disabled){
		if(options.status == 1){
			if(disabled){
				return  '<li class="disabled"><a href="${href}" title="${title}"><span aria-hidden="true">&raquo;</span></a></li>';
			}else{
				return  '<li><a href="${href}" data-page="${dataPage}" title="${title}"><span aria-hidden="true">&raquo;</span></a></li>';
			}
		}else if(options.status == 2){
			if(disabled){
				return '<li class="disabled"><a href="${href}" data-page="${dataPage}" title="${title}"><i class="fa fa-caret-right"></i></a></li>';
			}else{
				return '<li><a href="${href}" data-page="${dataPage}" title="${title}"><i class="fa fa-caret-right"></i></a></li>';
			}
		}
	}
	function getLast(options,disabled){
		if(options.status == 1){
			return '';
		}else if(options.status == 2){
			if(disabled){
				return '<li class="disabled"><a href="${href}" title="${title}" data-page="${dataPage}"><i class="fa fa-step-forward"></i></a></li>';
			}else{
				return '<li><a href="${href}" title="${title}" data-page="${dataPage}"><i class="fa fa-step-forward"></i></a></li>';
			}
		}
	}
	function getFooter(options){
		if(options.status == 1){
			return 		'</ul>';
		}else if(options.status == 2){
			return			'</div>'
			+			'</div>'
			+		'</div>'
			+	'</ul>';
		}
	}
})(jQuery);