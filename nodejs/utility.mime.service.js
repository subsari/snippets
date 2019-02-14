// MIT - Joel Pagan
// Mime Service that returns simple mime types

var mimeService = function(){
	return {
		getMimeType: function(extname){
			var contentType = 'text/html';
            var mimeTypes = {
                '.html': 'text/html',
                '.css': 'text/css',
                '.js': 'application/javascript',
                '.json': 'application/json',
                '.png': 'image/png'
            };

            try {
                extname = extname.toLowerCase();
            } catch (e){}
        
    		return contentType = mimeTypes[extname] || "text";
		}
	}
}

module.exports = mimeService;
